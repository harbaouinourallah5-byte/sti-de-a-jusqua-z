/**
 * ===================================================================
 * STI DE A À Z — STOCKAGE LOCAL & AUTHENTIFICATION DES CAHIERS
 * IndexedDB ('STINotebooksDatabase') + Web Crypto API (PBKDF2 / SHA-256)
 * 100% local au navigateur et à l'appareil (aucun mot de passe en clair).
 * ===================================================================
 */
'use strict';

var NOTEBOOKS_STORE = (function () {
  var DB_NAME = 'STINotebooksDatabase';
  var DB_VERSION = 1;
  var SESSION_KEY = 'sti_nb_session_v1';
  var ACCOUNTS_LIST_KEY = 'sti_nb_known_accounts_v1';

  var _dbPromise = null;

  function openDB() {
    if (_dbPromise) return _dbPromise;
    _dbPromise = new Promise(function (resolve, reject) {
      if (!window.indexedDB) {
        return reject(new Error('IndexedDB non pris en charge par ce navigateur.'));
      }
      var req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function (e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains('users')) {
          db.createObjectStore('users', { keyPath: 'username' });
        }
        if (!db.objectStoreNames.contains('notebooks')) {
          var nbStore = db.createObjectStore('notebooks', { keyPath: 'id' });
          nbStore.createIndex('ownerUsername', 'ownerUsername', { unique: false });
        }
        if (!db.objectStoreNames.contains('uploads')) {
          var upStore = db.createObjectStore('uploads', { keyPath: 'id' });
          upStore.createIndex('ownerUsername', 'ownerUsername', { unique: false });
        }
      };
      req.onsuccess = function (e) {
        resolve(e.target.result);
      };
      req.onerror = function (e) {
        _dbPromise = null;
        reject(e.target.error || new Error('Erreur ouverture IndexedDB'));
      };
    });
    return _dbPromise;
  }

  // ── WEB CRYPTO API : HACHAGE SÉCURISÉ DES MOTS DE PASSE ────────────────
  function bufToHex(buffer) {
    var bytes = new Uint8Array(buffer);
    var hex = [];
    for (var i = 0; i < bytes.length; i++) {
      hex.push(('00' + bytes[i].toString(16)).slice(-2));
    }
    return hex.join('');
  }

  function hexToBytes(hex) {
    var bytes = new Uint8Array(hex.length / 2);
    for (var i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return bytes;
  }

  function generateSaltHex() {
    var arr = new Uint8Array(16);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(arr);
    } else {
      for (var i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random() * 256);
    }
    return bufToHex(arr.buffer);
  }

  async function hashPassword(password, saltHex) {
    if (!window.crypto || !window.crypto.subtle) {
      throw new Error('Web Crypto API requise pour sécuriser le mot de passe.');
    }
    var enc = new TextEncoder();
    var saltBytes = hexToBytes(saltHex);
    var keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      enc.encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveBits']
    );
    var derivedBits = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: saltBytes,
        iterations: 50000,
        hash: 'SHA-256'
      },
      keyMaterial,
      256
    );
    return bufToHex(derivedBits);
  }

  function normalizeUsername(raw) {
    return String(raw || '').trim().toLowerCase().replace(/\s+/g, '_');
  }

  // ── GESTION DE SESSION (LOCALSTORAGE) ──────────────────────────────────
  function getSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return (parsed && parsed.username) ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  function setSession(userObj) {
    try {
      if (!userObj) {
        localStorage.removeItem(SESSION_KEY);
        return;
      }
      var sess = {
        username: userObj.username,
        displayName: userObj.displayName,
        loginAt: Date.now()
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sess));
      rememberAccountSummary(userObj);
    } catch (e) {
      console.warn('[NOTEBOOKS_STORE] Session save failed', e);
    }
  }

  function rememberAccountSummary(userObj) {
    try {
      var list = getKnownAccounts();
      var idx = list.findIndex(function (u) { return u.username === userObj.username; });
      var entry = { username: userObj.username, displayName: userObj.displayName, lastUsed: Date.now() };
      if (idx >= 0) list[idx] = entry;
      else list.push(entry);
      localStorage.setItem(ACCOUNTS_LIST_KEY, JSON.stringify(list));
    } catch (e) { /* ignore */ }
  }

  function getKnownAccounts() {
    try {
      var raw = localStorage.getItem(ACCOUNTS_LIST_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  // ── OPÉRATIONS UTILISATEURS (INDEXEDDB) ────────────────────────────────
  async function registerUser(displayName, usernameRaw, password, confirmPassword) {
    var cleanDisplay = String(displayName || '').trim();
    var username = normalizeUsername(usernameRaw || cleanDisplay);
    if (!cleanDisplay) throw new Error('Veuillez entrer votre nom.');
    if (!username || username.length < 2) throw new Error('Le nom d’utilisateur doit contenir au moins 2 caractères.');
    if (!password || password.length < 4) throw new Error('Le mot de passe doit contenir au moins 4 caractères.');
    if (password !== confirmPassword) throw new Error('Les deux mots de passe ne correspondent pas.');

    var db = await openDB();
    var existing = await new Promise(function (resolve, reject) {
      var tx = db.transaction('users', 'readonly');
      var req = tx.objectStore('users').get(username);
      req.onsuccess = function () { resolve(req.result || null); };
      req.onerror = function () { reject(req.error); };
    });

    if (existing) {
      throw new Error('Ce nom d’utilisateur existe déjà sur cet appareil.');
    }

    var saltHex = generateSaltHex();
    var hashHex = await hashPassword(password, saltHex);
    var userRecord = {
      username: username,
      displayName: cleanDisplay,
      saltHex: saltHex,
      hashHex: hashHex,
      createdAt: Date.now()
    };

    await new Promise(function (resolve, reject) {
      var tx = db.transaction('users', 'readwrite');
      tx.objectStore('users').put(userRecord);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = function () { reject(tx.error || new Error('Erreur création compte')); };
    });

    setSession(userRecord);
    return { username: userRecord.username, displayName: userRecord.displayName };
  }

  async function loginUser(usernameRaw, password) {
    var username = normalizeUsername(usernameRaw);
    if (!username || !password) throw new Error('Veuillez saisir votre identifiant et votre mot de passe.');

    var db = await openDB();
    var userRecord = await new Promise(function (resolve, reject) {
      var tx = db.transaction('users', 'readonly');
      var req = tx.objectStore('users').get(username);
      req.onsuccess = function () { resolve(req.result || null); };
      req.onerror = function () { reject(req.error); };
    });

    if (!userRecord) {
      throw new Error('Compte introuvable sur cet appareil.');
    }

    var candidateHash = await hashPassword(password, userRecord.saltHex);
    if (candidateHash !== userRecord.hashHex) {
      throw new Error('Mot de passe incorrect.');
    }

    setSession(userRecord);
    return { username: userRecord.username, displayName: userRecord.displayName };
  }

  async function listLocalUsers() {
    try {
      var db = await openDB();
      var all = await new Promise(function (resolve, reject) {
        var tx = db.transaction('users', 'readonly');
        var req = tx.objectStore('users').getAll();
        req.onsuccess = function () { resolve(req.result || []); };
        req.onerror = function () { reject(req.error); };
      });
      return all.map(function (u) {
        return { username: u.username, displayName: u.displayName, createdAt: u.createdAt };
      });
    } catch (e) {
      return getKnownAccounts();
    }
  }

  function logout() {
    setSession(null);
  }

  // ── OPÉRATIONS CAHIERS (ISOLÉS PAR UTILISATEUR) ────────────────────────
  async function getUserNotebooks(ownerUsername) {
    if (!ownerUsername) return [];
    var db = await openDB();
    var items = await new Promise(function (resolve, reject) {
      var tx = db.transaction('notebooks', 'readonly');
      var idx = tx.objectStore('notebooks').index('ownerUsername');
      var req = idx.getAll(ownerUsername);
      req.onsuccess = function () { resolve(req.result || []); };
      req.onerror = function () { reject(req.error); };
    });
    return items.sort(function (a, b) { return (b.updatedAt || 0) - (a.updatedAt || 0); });
  }

  async function getNotebook(notebookId, ownerUsername) {
    if (!notebookId || !ownerUsername) return null;
    var db = await openDB();
    var nb = await new Promise(function (resolve, reject) {
      var tx = db.transaction('notebooks', 'readonly');
      var req = tx.objectStore('notebooks').get(notebookId);
      req.onsuccess = function () { resolve(req.result || null); };
      req.onerror = function () { reject(req.error); };
    });
    if (!nb || nb.ownerUsername !== ownerUsername) return null;
    return nb;
  }

  async function saveNotebook(notebookObj, ownerUsername) {
    if (!notebookObj || !notebookObj.id || !ownerUsername) {
      throw new Error('Données de cahier invalides.');
    }
    if (notebookObj.ownerUsername !== ownerUsername) {
      throw new Error('Accès refusé : ce cahier appartient à un autre compte.');
    }
    var db = await openDB();
    var toSave = JSON.parse(JSON.stringify(notebookObj));
    toSave.updatedAt = Date.now();
    if (!toSave.createdAt) toSave.createdAt = toSave.updatedAt;

    await new Promise(function (resolve, reject) {
      var tx = db.transaction('notebooks', 'readwrite');
      tx.objectStore('notebooks').put(toSave);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = function () { reject(tx.error || new Error('Échec de sauvegarde IndexedDB')); };
      tx.onabort = function () { reject(tx.error || new Error('Sauvegarde annulée')); };
    });
    return toSave;
  }

  async function deleteNotebook(notebookId, ownerUsername) {
    var existing = await getNotebook(notebookId, ownerUsername);
    if (!existing) throw new Error('Cahier introuvable ou accès non autorisé.');
    var db = await openDB();
    await new Promise(function (resolve, reject) {
      var tx = db.transaction('notebooks', 'readwrite');
      tx.objectStore('notebooks').delete(notebookId);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = function () { reject(tx.error); };
    });
    return true;
  }

  // ── OPÉRATIONS IMAGES IMPORTÉES (ISOLÉES PAR UTILISATEUR) ──────────────
  async function getUserUploads(ownerUsername) {
    if (!ownerUsername) return [];
    var db = await openDB();
    var items = await new Promise(function (resolve, reject) {
      var tx = db.transaction('uploads', 'readonly');
      var idx = tx.objectStore('uploads').index('ownerUsername');
      var req = idx.getAll(ownerUsername);
      req.onsuccess = function () { resolve(req.result || []); };
      req.onerror = function () { reject(req.error); };
    });
    return items.sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
  }

  async function saveUpload(ownerUsername, name, dataUrl) {
    if (!ownerUsername || !dataUrl) throw new Error('Image invalide.');
    var db = await openDB();
    var rec = {
      id: 'up_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6),
      ownerUsername: ownerUsername,
      name: String(name || 'image').slice(0, 80),
      dataUrl: dataUrl,
      createdAt: Date.now()
    };
    await new Promise(function (resolve, reject) {
      var tx = db.transaction('uploads', 'readwrite');
      tx.objectStore('uploads').put(rec);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = function () { reject(tx.error); };
    });
    return rec;
  }

  async function deleteUpload(uploadId, ownerUsername) {
    var db = await openDB();
    var rec = await new Promise(function (resolve, reject) {
      var tx = db.transaction('uploads', 'readonly');
      var req = tx.objectStore('uploads').get(uploadId);
      req.onsuccess = function () { resolve(req.result || null); };
      req.onerror = function () { reject(req.error); };
    });
    if (!rec || rec.ownerUsername !== ownerUsername) return false;
    await new Promise(function (resolve, reject) {
      var tx = db.transaction('uploads', 'readwrite');
      tx.objectStore('uploads').delete(uploadId);
      tx.oncomplete = function () { resolve(true); };
      tx.onerror = function () { reject(tx.error); };
    });
    return true;
  }

  // ── SAUVEGARDE & RESTAURATION JSON DU COMPTE ───────────────────────────
  async function exportUserBackup(ownerUsername) {
    var notebooks = await getUserNotebooks(ownerUsername);
    var uploads = await getUserUploads(ownerUsername);
    return {
      format: 'sti-notebooks-backup',
      version: 1,
      exportedAt: new Date().toISOString(),
      ownerUsername: ownerUsername,
      notebooks: notebooks,
      uploads: uploads
    };
  }

  async function importUserBackup(payload, ownerUsername) {
    if (!payload || payload.format !== 'sti-notebooks-backup' || !Array.isArray(payload.notebooks)) {
      throw new Error('Fichier de sauvegarde de cahiers invalide.');
    }
    var count = 0;
    for (var i = 0; i < payload.notebooks.length; i++) {
      var nb = JSON.parse(JSON.stringify(payload.notebooks[i]));
      nb.id = 'nb_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
      nb.ownerUsername = ownerUsername;
      await saveNotebook(nb, ownerUsername);
      count++;
    }
    if (Array.isArray(payload.uploads)) {
      var db = await openDB();
      for (var j = 0; j < payload.uploads.length; j++) {
        var up = JSON.parse(JSON.stringify(payload.uploads[j]));
        if (up && up.dataUrl) {
          await saveUpload(ownerUsername, up.name || 'image', up.dataUrl);
        }
      }
    }
    return count;
  }

  return {
    openDB: openDB,
    normalizeUsername: normalizeUsername,
    getSession: getSession,
    registerUser: registerUser,
    loginUser: loginUser,
    logout: logout,
    listLocalUsers: listLocalUsers,
    getUserNotebooks: getUserNotebooks,
    getNotebook: getNotebook,
    saveNotebook: saveNotebook,
    deleteNotebook: deleteNotebook,
    getUserUploads: getUserUploads,
    saveUpload: saveUpload,
    deleteUpload: deleteUpload,
    exportUserBackup: exportUserBackup,
    importUserBackup: importUserBackup
  };
})();
