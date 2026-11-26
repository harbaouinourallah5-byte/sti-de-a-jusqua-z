/**
 * ===================================================================
 * STI DE A À Z — MOTEUR DU CRÉATEUR DE CAHIERS NUMÉRIQUES (CANVA-LIKE)
 * Authentification locale, Dashboard, Création guidée, Éditeur Studio,
 * Thématisation automatique par couverture, 20 mises en page & PDF.
 * ===================================================================
 */
'use strict';

var NOTEBOOKS_APP = (function () {

  var state = {
    initialized: false,
    session: null,           // { username, displayName }
    subView: 'auth',         // 'auth' | 'dashboard' | 'wizard' | 'editor'
    authTab: 'register',     // 'register' | 'login'
    knownUsers: [],
    notebooks: [],
    uploads: [],
    activeNotebook: null,
    activePageIndex: -1,     // -1 = Couverture, 0..N-1 = Page
    coverFace: 'front',      // 'front' | 'back'
    leftTab: 'layouts',      // 'templates'|'covers'|'layouts'|'backgrounds'|'colors'|'fonts'|'elements'|'borders'|'uploads'
    selectedElementId: null, // null | 'coverTitle' | 'coverName' | el.id
    readingMode: false,
    showOverview: false,
    saveStatus: 'saved',     // 'saved' | 'saving' | 'error'
    saveTimer: null,
    turnAnim: '',
    autoApplyTheme: true,
    undoStack: [],
    redoStack: [],
    wizard: null
  };

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function ico(name, sz) { return (typeof uiIcon === 'function') ? uiIcon(name, sz || 15) : ''; }

  function uid(prefix) {
    return (prefix || 'id') + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
  }

  // ── INITIALISATION ────────────────────────────────────────────────────
  async function init() {
    var root = document.getElementById('notebooksRoot');
    if (!root) return;
    try {
      await NOTEBOOKS_STORE.openDB();
      state.session = NOTEBOOKS_STORE.getSession();
      state.knownUsers = await NOTEBOOKS_STORE.listLocalUsers();
      if (state.session) {
        await loadUserWorkspace();
        if (state.subView === 'auth') state.subView = 'dashboard';
      } else {
        state.subView = 'auth';
      }
      if (!state.initialized) {
        document.addEventListener('keydown', function (ev) {
          var viewNb = document.getElementById('view-notebooks');
          if (!viewNb || !viewNb.classList.contains('active') || state.subView !== 'editor' || state.readingMode) return;
          var tag = (document.activeElement && document.activeElement.tagName) || '';
          var isTyping = (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT');
          if ((ev.ctrlKey || ev.metaKey) && !isTyping) {
            if (ev.key.toLowerCase() === 'z' && !ev.shiftKey) { ev.preventDefault(); undo(); }
            else if (ev.key.toLowerCase() === 'y' || (ev.key.toLowerCase() === 'z' && ev.shiftKey)) { ev.preventDefault(); redo(); }
          } else if ((ev.key === 'Delete' || ev.key === 'Backspace') && !isTyping && state.selectedElementId && state.selectedElementId !== 'coverTitle' && state.selectedElementId !== 'coverName') {
            ev.preventDefault();
            NOTEBOOKS_APP.deleteElement(state.selectedElementId);
          }
        });
      }
      state.initialized = true;
      render();
    } catch (err) {
      console.error('[NOTEBOOKS_APP] Init error:', err);
      root.innerHTML = '<div class="nb-wizard-panel" style="max-width:600px;margin:24px auto;text-align:center;">' +
        '<h3>Erreur d’initialisation du stockage local</h3>' +
        '<p style="color:var(--text-secondary);">' + esc(err.message) + '</p></div>';
    }
  }

  async function loadUserWorkspace() {
    if (!state.session) return;
    state.notebooks = await NOTEBOOKS_STORE.getUserNotebooks(state.session.username);
    state.uploads = await NOTEBOOKS_STORE.getUserUploads(state.session.username);
  }

  // ── UNDO / REDO & SAUVEGARDE AUTOMATIQUE INDEXEDDB ────────────────────
  function pushHistory() {
    if (!state.activeNotebook) return;
    var snap = JSON.stringify({
      nb: state.activeNotebook,
      idx: state.activePageIndex
    });
    if (state.undoStack.length > 0 && state.undoStack[state.undoStack.length - 1] === snap) return;
    state.undoStack.push(snap);
    if (state.undoStack.length > 40) state.undoStack.shift();
    state.redoStack = [];
  }

  function undo() {
    if (!state.undoStack.length || !state.activeNotebook) return;
    var currentSnap = JSON.stringify({ nb: state.activeNotebook, idx: state.activePageIndex });
    state.redoStack.push(currentSnap);
    var prev = JSON.parse(state.undoStack.pop());
    state.activeNotebook = prev.nb;
    state.activePageIndex = Math.min(prev.idx, state.activeNotebook.pages.length - 1);
    state.selectedElementId = null;
    scheduleSave();
    render();
  }

  function redo() {
    if (!state.redoStack.length || !state.activeNotebook) return;
    var currentSnap = JSON.stringify({ nb: state.activeNotebook, idx: state.activePageIndex });
    state.undoStack.push(currentSnap);
    var next = JSON.parse(state.redoStack.pop());
    state.activeNotebook = next.nb;
    state.activePageIndex = Math.min(next.idx, state.activeNotebook.pages.length - 1);
    state.selectedElementId = null;
    scheduleSave();
    render();
  }

  function updateSaveStatusUI() {
    var pill = document.getElementById('nbSavePill');
    if (!pill) return;
    pill.className = 'nb-save-pill ' + (state.saveStatus === 'saving' ? 'saving' : (state.saveStatus === 'error' ? 'error' : ''));
    if (state.saveStatus === 'saving') pill.textContent = '⏳ Enregistrement...';
    else if (state.saveStatus === 'error') pill.innerHTML = ico('alert-triangle', 13) + ' Échec d’enregistrement';
    else pill.innerHTML = ico('check', 13) + ' Enregistré';
  }

  function scheduleSave(immediate) {
    if (!state.activeNotebook || !state.session) return;
    state.saveStatus = 'saving';
    updateSaveStatusUI();
    if (state.saveTimer) clearTimeout(state.saveTimer);
    var runSave = async function () {
      try {
        var saved = await NOTEBOOKS_STORE.saveNotebook(state.activeNotebook, state.session.username);
        state.activeNotebook.updatedAt = saved.updatedAt;
        var idx = state.notebooks.findIndex(function (n) { return n.id === saved.id; });
        if (idx >= 0) state.notebooks[idx] = saved;
        else state.notebooks.unshift(saved);
        state.saveStatus = 'saved';
      } catch (err) {
        console.error('[NOTEBOOKS_APP] Auto-save error:', err);
        state.saveStatus = 'error';
      }
      updateSaveStatusUI();
    };
    if (immediate) {
      runSave();
    } else {
      state.saveTimer = setTimeout(runSave, 260);
    }
  }

  // ── CRÉATION D'OBJET CAHIER AVEC THÈME AUTOMATIQUE ────────────────────
  function buildNotebookFromOptions(opts) {
    var cover = NOTEBOOKS_DATA.getCoverById(opts.coverId);
    var theme = NOTEBOOKS_DATA.cloneTheme(cover.theme);
    if (opts.paperBg) theme.paperBg = opts.paperBg;
    if (opts.accent) theme.accent = opts.accent;
    if (opts.fontHeading) theme.fontHeading = opts.fontHeading;
    if (opts.fontBody) theme.fontBody = opts.fontBody;
    if (opts.pattern) theme.pattern = opts.pattern;

    var titleOverlay = NOTEBOOKS_DATA.cloneTheme(cover.theme.coverTitleDefaults);
    var nameOverlay = NOTEBOOKS_DATA.cloneTheme(cover.theme.coverNameDefaults);
    if (opts.coverFont) {
      titleOverlay.fontFamily = opts.coverFont;
      nameOverlay.fontFamily = opts.coverFont;
    }

    var starterPages = [];
    if (opts.starterPack === 'bac-student') {
      starterPages = [
        NOTEBOOKS_DATA.createDefaultPageData('06-daily-planner', 'Planning du Jour'),
        NOTEBOOKS_DATA.createDefaultPageData('09-study-notes', 'Fiches de Révision'),
        NOTEBOOKS_DATA.createDefaultPageData('05-to-do-checklist', 'Objectifs & Tâches'),
        NOTEBOOKS_DATA.createDefaultPageData('12-habit-tracker', 'Mes Habitudes')
      ];
    } else if (opts.starterPack === 'aesthetic-journal') {
      starterPages = [
        NOTEBOOKS_DATA.createDefaultPageData('04-blank-journal', 'Page d’ouverture'),
        NOTEBOOKS_DATA.createDefaultPageData('14-gratitude', 'Gratitude du Jour'),
        NOTEBOOKS_DATA.createDefaultPageData('15-mood-tracker', 'Humeur du Mois'),
        NOTEBOOKS_DATA.createDefaultPageData('18-scrapbook', 'Souvenirs')
      ];
    } else {
      var layoutId = opts.layoutId || '01-classic-lined';
      starterPages = [
        NOTEBOOKS_DATA.createDefaultPageData(layoutId),
        NOTEBOOKS_DATA.createDefaultPageData('05-to-do-checklist', 'Ma Liste To-Do')
      ];
    }

    return {
      id: uid('nb'),
      ownerUsername: state.session.username,
      ownerDisplayName: (opts.ownerName || state.session.displayName || 'Élève').trim(),
      title: (opts.title || 'Mon Cahier Personnel').trim(),
      coverId: cover.id,
      coverConfig: {
        titleStyle: titleOverlay,
        nameStyle: nameOverlay,
        showName: true,
        showTitle: true,
        elements: Array.isArray(opts.coverElements) ? opts.coverElements : []
      },
      themeConfig: theme,
      pages: starterPages,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
  }

  // ── RENDU PRINCIPAL ───────────────────────────────────────────────────
  function render() {
    var root = document.getElementById('notebooksRoot');
    if (!root) return;
    if (!state.session || state.subView === 'auth') {
      root.innerHTML = renderAuthHTML();
      return;
    }
    if (state.subView === 'wizard') {
      root.innerHTML = renderWizardHTML();
      return;
    }
    if (state.subView === 'editor' && state.activeNotebook) {
      root.innerHTML = renderEditorHTML();
      bindEditorDragEvents();
      return;
    }
    state.subView = 'dashboard';
    root.innerHTML = renderDashboardHTML();
  }

  // ── 1. HTML : AUTHENTIFICATION ────────────────────────────────────────
  function renderAuthHTML() {
    var isReg = (state.authTab === 'register');
    var fanCovers = [
      NOTEBOOKS_DATA.COVERS[5],
      NOTEBOOKS_DATA.COVERS[0],
      NOTEBOOKS_DATA.COVERS[4],
      NOTEBOOKS_DATA.COVERS[2]
    ];

    var knownHtml = '';
    if (state.knownUsers && state.knownUsers.length > 0) {
      knownHtml = '<div class="nb-known-accounts">' +
        '<div style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Comptes enregistrés sur cet appareil :</div>' +
        '<div class="nb-account-chips">' +
        state.knownUsers.map(function (u) {
          return '<button type="button" class="nb-account-chip" onclick="NOTEBOOKS_APP.prefillLogin(\'' + esc(u.username) + '\')">' +
            ico('user', 14) + '<span>' + esc(u.displayName) + '</span>' +
            '<span style="opacity:0.65;font-size:0.72rem;">(@' + esc(u.username) + ')</span></button>';
        }).join('') +
        '</div></div>';
    }

    return '<div class="nb-auth-wrap">' +
      '<div class="nb-auth-hero">' +
        '<div>' +
          '<span style="font-size:0.76rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;opacity:0.9;">Studio Créatif STI de A à Z</span>' +
          '<h2 style="font-size:1.75rem;font-weight:800;margin:8px 0 10px;line-height:1.2;">Créez votre Cahier Numérique &amp; Planner sur mesure</h2>' +
          '<p style="font-size:0.92rem;opacity:0.92;line-height:1.6;">Choisissez votre couverture et laissez notre moteur générer automatiquement un thème assorti pour toutes vos pages : couleurs, bordures, polices, stickers, planning et listes de tâches.</p>' +
          '<div class="nb-auth-hero-badges">' +
            '<span class="nb-auth-hero-pill">' + ico('palette', 13) + ' 10 Couvertures</span>' +
            '<span class="nb-auth-hero-pill">' + ico('file-text', 13) + ' 20 Mises en page</span>' +
            '<span class="nb-auth-hero-pill">' + ico('sparkles', 13) + ' Thème Auto</span>' +
            '<span class="nb-auth-hero-pill">' + ico('printer', 13) + ' Export PDF A4</span>' +
          '</div>' +
        '</div>' +
        '<div class="nb-auth-preview-fan">' +
          fanCovers.map(function (c) {
            return '<img src="' + esc(c.image) + '" alt="' + esc(c.name) + '" title="' + esc(c.name) + '">';
          }).join('') +
        '</div>' +
      '</div>' +

      '<div class="nb-auth-card">' +
        '<div class="nb-auth-tabs">' +
          '<button type="button" class="nb-auth-tab ' + (isReg ? 'active' : '') + '" onclick="NOTEBOOKS_APP.setAuthTab(\'register\')">Créer un compte</button>' +
          '<button type="button" class="nb-auth-tab ' + (!isReg ? 'active' : '') + '" onclick="NOTEBOOKS_APP.setAuthTab(\'login\')">Se connecter</button>' +
        '</div>' +

        '<div id="nbAuthError" style="display:none;margin-bottom:12px;padding:10px 12px;border-radius:10px;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.3);color:#ef4444;font-size:0.84rem;font-weight:600;"></div>' +

        (isReg ? (
          '<form onsubmit="NOTEBOOKS_APP.submitRegister(event)">' +
            '<div class="nb-form-field">' +
              '<label for="nbRegName">Votre Prénom / Nom (affiché sur la couverture)</label>' +
              '<input id="nbRegName" class="nb-input" type="text" placeholder="Ex: Ranim, Yassine..." required oninput="NOTEBOOKS_APP.syncRegUsername(this.value)">' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label for="nbRegUser">Nom d’utilisateur (identifiant unique)</label>' +
              '<input id="nbRegUser" class="nb-input" type="text" placeholder="Ex: ranim" required oninput="this.dataset.touched = this.value.trim() ? \'1\' : \'\'">' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label for="nbRegPass">Mot de passe (min. 4 caractères)</label>' +
              '<input id="nbRegPass" class="nb-input" type="password" placeholder="••••••••" required>' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label for="nbRegPass2">Confirmer le mot de passe</label>' +
              '<input id="nbRegPass2" class="nb-input" type="password" placeholder="••••••••" required>' +
            '</div>' +
            '<button type="submit" class="nb-btn nb-btn-primary" style="width:100%;">' + ico('sparkles', 15) + ' Créer mon espace personnel</button>' +
          '</form>'
        ) : (
          '<form onsubmit="NOTEBOOKS_APP.submitLogin(event)">' +
            '<div class="nb-form-field">' +
              '<label for="nbLoginUser">Nom d’utilisateur</label>' +
              '<input id="nbLoginUser" class="nb-input" type="text" placeholder="Votre identifiant" required>' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label for="nbLoginPass">Mot de passe</label>' +
              '<input id="nbLoginPass" class="nb-input" type="password" placeholder="••••••••" required>' +
            '</div>' +
            '<button type="submit" class="nb-btn nb-btn-primary" style="width:100%;">' + ico('unlock', 15) + ' Ouvrir mes cahiers</button>' +
          '</form>'
        )) +

        knownHtml +

        '<div class="nb-local-notice">' +
          ico('lock', 14) + ' <strong>Stockage local sécurisé (sans e-mail) :</strong> Vos comptes sont protégés par chiffrement <em>Web Crypto API</em> et vos cahiers sont sauvegardés dans <em>IndexedDB</em> sur cet appareil uniquement. Utilisez l’export JSON pour transférer vos cahiers vers un autre appareil.' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // ── 2. HTML : TABLEAU DE BORD PERSONNEL ───────────────────────────────
  function renderDashboardHTML() {
    var s = state.session;
    var books = state.notebooks || [];

    var cardsHtml = '';
    if (books.length === 0) {
      cardsHtml = '<div class="nb-wizard-panel" style="grid-column:1/-1;text-align:center;padding:48px 24px;">' +
        '<div style="margin-bottom:10px;color:var(--primary-indigo);">' + ico('notebook', 40) + '</div>' +
        '<h3 style="margin:0 0 8px;">Votre bibliothèque de cahiers est vide</h3>' +
        '<p style="color:var(--text-secondary);max-width:460px;margin:0 auto 20px;">Choisissez l’une des 10 couvertures esthétiques, personnalisez votre nom et laissez l’application créer votre cahier coordonné.</p>' +
        '<button type="button" class="nb-btn nb-btn-primary" onclick="NOTEBOOKS_APP.openWizard()">' + ico('plus', 15) + ' Créer mon premier cahier</button>' +
      '</div>';
    } else {
      cardsHtml = books.map(function (nb) {
        var cover = NOTEBOOKS_DATA.getCoverById(nb.coverId);
        var dateTxt = nb.updatedAt ? new Date(nb.updatedAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
        var theme = nb.themeConfig || cover.theme;
        return '<div class="nb-book-card">' +
          '<div class="nb-book-cover-thumb" onclick="NOTEBOOKS_APP.openNotebook(\'' + esc(nb.id) + '\')">' +
            renderCoverArtworkHTML(nb, true) +
          '</div>' +
          '<div class="nb-book-card-body">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">' +
              '<span style="font-size:0.7rem;font-weight:800;padding:2px 8px;border-radius:999px;background:' + esc(theme.accentSoft) + ';color:' + esc(theme.accent) + ';">' + esc(theme.themeName) + '</span>' +
              '<span style="font-size:0.74rem;color:var(--text-muted);font-weight:700;">' + nb.pages.length + ' page' + (nb.pages.length > 1 ? 's' : '') + '</span>' +
            '</div>' +
            '<h4 style="margin:0;font-size:0.98rem;font-weight:800;color:var(--text-primary);line-height:1.3;">' + esc(nb.title) + '</h4>' +
            '<div class="nb-book-card-meta"><span>' + ico('user', 12) + ' ' + esc(nb.ownerDisplayName) + '</span><span>' + ico('clock', 12) + ' ' + esc(dateTxt) + '</span></div>' +
            '<div class="nb-book-card-actions">' +
              '<button type="button" class="nb-btn nb-btn-primary nb-btn-sm" onclick="NOTEBOOKS_APP.openNotebook(\'' + esc(nb.id) + '\')">Ouvrir</button>' +
              '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.openNotebook(\'' + esc(nb.id) + '\', true)">Personnaliser</button>' +
              '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.duplicateNotebook(\'' + esc(nb.id) + '\')">Dupliquer</button>' +
              '<button type="button" class="nb-btn nb-btn-danger nb-btn-sm" onclick="NOTEBOOKS_APP.deleteNotebook(\'' + esc(nb.id) + '\')">Supprimer</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    return '<div>' +
      '<div class="nb-dash-top">' +
        '<div>' +
          '<div style="font-size:0.78rem;font-weight:800;color:var(--primary-indigo);text-transform:uppercase;">Espace Personnel (@' + esc(s.username) + ')</div>' +
          '<h2 style="margin:2px 0 4px;font-size:1.4rem;font-weight:700;">Bienvenue, ' + esc(s.displayName) + '</h2>' +
          '<div style="font-size:0.84rem;color:var(--text-secondary);">' + books.length + ' cahier' + (books.length > 1 ? 's' : '') + ' enregistré' + (books.length > 1 ? 's' : '') + ' localement sur cet appareil.</div>' +
        '</div>' +
        '<div class="nb-dash-actions">' +
          '<button type="button" class="nb-btn nb-btn-primary" onclick="NOTEBOOKS_APP.openWizard()">' + ico('plus', 15) + ' Créer un cahier</button>' +
          '<button type="button" class="nb-btn" onclick="NOTEBOOKS_APP.exportBackup()">' + ico('download', 15) + ' Sauvegarder JSON</button>' +
          '<button type="button" class="nb-btn" onclick="document.getElementById(\'nbImportBackupInput\').click()">' + ico('upload', 15) + ' Restaurer</button>' +
          '<input id="nbImportBackupInput" type="file" accept=".json" style="display:none;" onchange="NOTEBOOKS_APP.importBackup(event)">' +
          '<button type="button" class="nb-btn" onclick="NOTEBOOKS_APP.switchAccount()">' + ico('refresh', 15) + ' Changer de compte</button>' +
          '<button type="button" class="nb-btn nb-btn-danger" onclick="NOTEBOOKS_APP.logout()">Déconnexion</button>' +
        '</div>' +
      '</div>' +
      '<div class="nb-books-grid">' + cardsHtml + '</div>' +
    '</div>';
  }

  // ── 3. HTML : ASSISTANT DE CRÉATION AVEC THÈME LIVE ───────────────────
  function ensureWizardState() {
    if (state.wizard) return;
    var c0 = NOTEBOOKS_DATA.COVERS[5]; // Coquette ou premier choix attrayant
    state.wizard = {
      ownerName: state.session ? state.session.displayName : 'Mon Nom',
      title: 'Mon Journal Personnel',
      coverId: c0.id,
      layoutId: '06-daily-planner',
      starterPack: 'single',
      paperBg: c0.theme.paperBg,
      accent: c0.theme.accent,
      fontHeading: c0.theme.fontHeading,
      fontBody: c0.theme.fontBody,
      coverFont: c0.theme.coverTitleDefaults.fontFamily,
      pattern: c0.theme.pattern,
      coverElements: []
    };
  }

  function renderWizardHTML() {
    ensureWizardState();
    var w = state.wizard;
    var cover = NOTEBOOKS_DATA.getCoverById(w.coverId);
    var previewNb = buildNotebookFromOptions(w);

    return '<div>' +
      '<div class="nb-topbar" style="margin-bottom:16px;">' +
        '<div class="nb-topbar-group">' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.backToDashboard()">← Retour aux cahiers</button>' +
          '<h3 style="margin:0;font-size:1.05rem;font-weight:700;">' + ico('sparkles', 16) + ' Créer un nouveau cahier personnalisé</h3>' +
        '</div>' +
        '<button type="button" class="nb-btn nb-btn-primary" onclick="NOTEBOOKS_APP.createFromWizard()">Créer mon cahier →</button>' +
      '</div>' +

      '<div class="nb-wizard-grid">' +
        '<div class="nb-wizard-panel">' +
          '<div class="nb-wizard-section-title">1. Identité du cahier (affichée sur la couverture)</div>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
            '<div class="nb-form-field">' +
              '<label for="nbWizOwnerName">Votre Prénom / Nom sur la couverture</label>' +
              '<input id="nbWizOwnerName" class="nb-input" type="text" value="' + esc(w.ownerName) + '" oninput="NOTEBOOKS_APP.updateWizardTextField(\'ownerName\', this.value)">' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label for="nbWizTitle">Titre du cahier</label>' +
              '<input id="nbWizTitle" class="nb-input" type="text" value="' + esc(w.title) + '" oninput="NOTEBOOKS_APP.updateWizardTextField(\'title\', this.value)">' +
            '</div>' +
          '</div>' +

          '<div class="nb-wizard-section-title">2. Choisissez votre couverture (génère le thème automatiquement !)</div>' +
          '<div class="nb-cover-gallery">' +
            NOTEBOOKS_DATA.COVERS.map(function (c) {
              var fallBg = 'linear-gradient(135deg, ' + esc(c.theme.paperTint) + ' 0%, ' + esc(c.theme.accent) + ' 100%)';
              var imgCls = 'nb-cover-native-img' + (c.isWrap ? ' is-wrap' : '');
              return '<button type="button" class="nb-cover-option ' + (c.id === w.coverId ? 'selected' : '') + '" onclick="NOTEBOOKS_APP.selectWizardCover(\'' + esc(c.id) + '\')">' +
                '<div class="nb-cover-option-thumb" style="background:' + fallBg + ';">' +
                  '<img class="' + imgCls + '" src="' + esc(c.image) + '" alt="' + esc(c.name) + '" loading="eager" decoding="async" onerror="this.style.opacity=\'0\'">' +
                '</div>' +
                '<div class="nb-cover-option-label" title="' + esc(c.name) + '">' + esc(c.name) + '</div>' +
              '</button>';
            }).join('') +
          '</div>' +

          '<div class="nb-wizard-section-title">3. Mise en page de départ (20 modèles)</div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">' +
            '<button type="button" class="nb-btn nb-btn-sm ' + (w.starterPack === 'single' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateWizardField(\'starterPack\', \'single\')">Modèle choisi</button>' +
            '<button type="button" class="nb-btn nb-btn-sm ' + (w.starterPack === 'bac-student' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateWizardField(\'starterPack\', \'bac-student\')">' + ico('graduation-cap', 14) + ' Pack Révision Bac (4 pages)</button>' +
            '<button type="button" class="nb-btn nb-btn-sm ' + (w.starterPack === 'aesthetic-journal' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateWizardField(\'starterPack\', \'aesthetic-journal\')">' + ico('sparkles', 14) + ' Pack Journal Esthétique (4 pages)</button>' +
          '</div>' +
          '<div class="nb-layout-gallery">' +
            NOTEBOOKS_DATA.PAGE_LAYOUTS.map(function (l) {
              return '<button type="button" class="nb-layout-option ' + (l.id === w.layoutId ? 'selected' : '') + '" onclick="NOTEBOOKS_APP.updateWizardField(\'layoutId\', \'' + esc(l.id) + '\')">' +
                '<img src="' + esc(l.previewImage) + '" alt="' + esc(l.name) + '" loading="lazy">' +
                '<div class="nb-layout-option-name">' + esc(l.num + '. ' + l.name) + '</div>' +
              '</button>';
            }).join('') +
          '</div>' +

          '<div class="nb-wizard-section-title">4. Couleurs, Fond, Police &amp; Décoration (ajustables à tout moment)</div>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:10px;">' +
            '<div class="nb-form-field">' +
              '<label>Couleur d’accent</label>' +
              '<input class="nb-input" style="height:40px;padding:4px;" type="color" value="' + esc(w.accent) + '" oninput="NOTEBOOKS_APP.updateWizardField(\'accent\', this.value)">' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label>Couleur du papier</label>' +
              '<select class="nb-select" onchange="NOTEBOOKS_APP.updateWizardField(\'paperBg\', this.value)">' +
                NOTEBOOKS_DATA.PAPER_COLORS.map(function (p) {
                  return '<option value="' + esc(p.bg) + '" ' + (w.paperBg === p.bg ? 'selected' : '') + '>' + esc(p.name) + '</option>';
                }).join('') +
              '</select>' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label>Motif de page</label>' +
              '<select class="nb-select" onchange="NOTEBOOKS_APP.updateWizardField(\'pattern\', this.value)">' +
                NOTEBOOKS_DATA.PATTERNS.map(function (p) {
                  return '<option value="' + esc(p.id) + '" ' + (w.pattern === p.id ? 'selected' : '') + '>' + esc(p.name) + '</option>';
                }).join('') +
              '</select>' +
            '</div>' +
            '<div class="nb-form-field">' +
              '<label>Typographie</label>' +
              '<select class="nb-select" onchange="NOTEBOOKS_APP.updateWizardFont(this.value)">' +
                NOTEBOOKS_DATA.FONTS.map(function (f) {
                  return '<option value="' + esc(f.css) + '" ' + (w.fontHeading === f.css ? 'selected' : '') + '>' + esc(f.name + ' (' + f.styleLabel + ')') + '</option>';
                }).join('') +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:6px;">' +
            '<span style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Sticker sur couverture :</span>' +
            cover.theme.stickers.map(function (sid) {
              var el = NOTEBOOKS_DATA.getElementById(sid);
              if (!el) return '';
              return '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.addWizardCoverSticker(\'' + esc(sid) + '\')" title="' + esc(el.name) + '">' +
                '<span style="width:18px;height:18px;display:inline-flex;color:' + esc(w.accent) + ';">' + el.svg + '</span> ' + esc(el.name) +
              '</button>';
            }).join('') +
            (w.coverElements.length > 0 ? '<button type="button" class="nb-btn nb-btn-sm nb-btn-danger" onclick="NOTEBOOKS_APP.clearWizardCoverStickers()">Effacer stickers</button>' : '') +
          '</div>' +
        '</div>' +

        '<div class="nb-wizard-sticky-preview" id="nbWizardLivePreview">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">' +
            '<strong style="font-size:0.95rem;">' + ico('eye', 15) + ' Aperçu Automatique Coordonné</strong>' +
            '<span style="font-size:0.74rem;font-weight:800;padding:3px 10px;border-radius:999px;background:' + esc(previewNb.themeConfig.accentSoft) + ';color:' + esc(previewNb.themeConfig.accent) + ';">Thème : ' + esc(previewNb.themeConfig.themeName) + '</span>' +
          '</div>' +
          '<p style="font-size:0.78rem;color:var(--text-secondary);margin:6px 0 10px;">' + esc(cover.description) + '</p>' +
          '<div class="nb-dual-preview">' +
            '<div>' +
              '<div style="font-size:0.72rem;font-weight:700;margin-bottom:4px;color:var(--text-muted);">Couverture</div>' +
              '<div class="nb-book-frame is-thumb-card" style="max-width:260px;">' +
                '<div class="nb-cover-surface">' + renderCoverArtworkHTML(previewNb, 'wizard') + '</div>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<div style="font-size:0.72rem;font-weight:700;margin-bottom:4px;color:var(--text-muted);">Page intérieure assortie</div>' +
              '<div class="nb-book-frame is-thumb-card" style="max-width:260px;">' +
                renderPageSurfaceHTML(previewNb, previewNb.pages[0], 0, 'thumb') +
              '</div>' +
            '</div>' +
          '</div>' +
          '<button type="button" class="nb-btn nb-btn-primary" style="width:100%;margin-top:16px;" onclick="NOTEBOOKS_APP.createFromWizard()">' + ico('sparkles', 15) + ' Créer et ouvrir mon cahier</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // ── 4. HTML : ÉDITEUR STUDIO CANVA-LIKE ───────────────────────────────
  function renderEditorHTML() {
    var nb = state.activeNotebook;
    var isCover = (state.activePageIndex < 0);
    var curPage = isCover ? null : nb.pages[state.activePageIndex];
    var cover = NOTEBOOKS_DATA.getCoverById(nb.coverId);

    var mainStageHTML = '';
    if (isCover) {
      mainStageHTML = '<div class="nb-cover-surface ' + esc(state.turnAnim) + '" onclick="NOTEBOOKS_APP.onSurfaceClick(event)">' +
        renderCoverArtworkHTML(nb, false) +
      '</div>';
    } else {
      mainStageHTML = renderPageSurfaceHTML(nb, curPage, state.activePageIndex, false);
    }

    var overviewHtml = '';
    if (state.showOverview) {
      overviewHtml = '<div class="nb-thumbs-grid">' +
        '<div class="nb-thumb-card ' + (isCover ? 'active' : '') + '" onclick="NOTEBOOKS_APP.goToPage(-1)">' +
          '<div style="height:68px;border-radius:6px;margin-bottom:4px;background-size:' + (cover.isWrap ? '200% 100%' : 'cover') + ';background-position:' + (cover.isWrap ? 'right center' : 'center') + ';background-image:url(\'' + esc(cover.image) + '\')"></div>' +
          'Couverture' +
        '</div>' +
        nb.pages.map(function (p, i) {
          var lay = NOTEBOOKS_DATA.getLayoutById(p.layoutId);
          return '<div class="nb-thumb-card ' + (state.activePageIndex === i ? 'active' : '') + '" onclick="NOTEBOOKS_APP.goToPage(' + i + ')">' +
            '<img src="' + esc(lay.previewImage) + '" style="width:100%;height:68px;object-fit:cover;border-radius:6px;margin-bottom:4px;" alt="">' +
            '<div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (i + 1) + '. ' + esc(p.title) + '</div>' +
          '</div>';
        }).join('') +
      '</div>';
    }

    var railItems = [
      { id: 'templates',   ico: 'sparkles', label: 'Modèles' },
      { id: 'covers',      ico: 'book', label: 'Couvertures' },
      { id: 'layouts',     ico: 'file-text', label: 'Pages (20)' },
      { id: 'backgrounds', ico: 'image', label: 'Fonds' },
      { id: 'colors',      ico: 'palette', label: 'Couleurs' },
      { id: 'fonts',       ico: 'type', label: 'Polices' },
      { id: 'elements',    ico: 'sparkles', label: 'Éléments' },
      { id: 'borders',     ico: 'layout', label: 'Bordures' },
      { id: 'uploads',     ico: 'upload', label: 'Imports' }
    ];

    return '<div class="nb-studio ' + (state.readingMode ? 'nb-reading-mode' : '') + '">' +
      // TOP TOOLBAR
      '<div class="nb-topbar">' +
        '<div class="nb-topbar-group">' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.backToDashboard()">' + ico('arrow-left', 14) + ' Cahiers</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.undo()" ' + (state.undoStack.length ? '' : 'disabled') + ' title="Annuler">' + ico('undo', 14) + '</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.redo()" ' + (state.redoStack.length ? '' : 'disabled') + ' title="Rétablir">' + ico('redo', 14) + '</button>' +
          '<input type="text" class="nb-title-inline" value="' + esc(nb.title) + '" onchange="NOTEBOOKS_APP.renameNotebook(this.value)" aria-label="Nom du cahier">' +
          '<span id="nbSavePill" class="nb-save-pill ' + (state.saveStatus === 'saving' ? 'saving' : (state.saveStatus === 'error' ? 'error' : '')) + '">' +
            (state.saveStatus === 'saving' ? ico('clock', 13) + ' Enregistrement...' : (state.saveStatus === 'error' ? ico('alert-triangle', 13) + ' Échec' : ico('check', 13) + ' Enregistré')) +
          '</span>' +
        '</div>' +
        '<div class="nb-topbar-group">' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (state.readingMode ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.toggleReadingMode()">' +
            (state.readingMode ? ico('edit', 14) + ' Mode Édition' : ico('book-open', 14) + ' Mode Lecture') +
          '</button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (state.showOverview ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.toggleOverview()">' + ico('grid', 14) + ' Vue globale</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.exportBackup()">' + ico('save', 14) + ' Sauvegarde</button>' +
          '<button type="button" class="nb-btn nb-btn-primary nb-btn-sm" onclick="NOTEBOOKS_APP.openPdfExportModal()">' + ico('file-text', 14) + ' Exporter PDF</button>' +
        '</div>' +
      '</div>' +

      // WORKSPACE 3 ZONES
      '<div class="nb-workspace ' + (state.readingMode ? 'is-reading' : '') + '">' +
        // LEFT SIDEBAR
        (state.readingMode ? '' : (
          '<aside class="nb-left-studio">' +
            '<div class="nb-tool-rail">' +
              railItems.map(function (it) {
                return '<button type="button" class="nb-rail-btn ' + (state.leftTab === it.id ? 'active' : '') + '" onclick="NOTEBOOKS_APP.setLeftTab(\'' + it.id + '\')">' +
                  '<span class="nb-rail-ico">' + ico(it.ico, 17) + '</span><span>' + esc(it.label) + '</span>' +
                '</button>';
              }).join('') +
            '</div>' +
            '<div class="nb-left-panel">' + renderLeftPanelContentHTML() + '</div>' +
          '</aside>'
        )) +

        // CENTER STAGE
        '<div class="nb-center-stage">' +
          '<div class="nb-stage-mode-bar">' +
            '<button type="button" class="nb-btn nb-btn-sm ' + (isCover ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.goToPage(-1)">' + ico('book', 14) + ' Couverture</button>' +
            (isCover && (cover.isWrap || cover.backImage) ? (
              '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.toggleCoverFace()">' + ico('refresh', 14) + ' ' + (state.coverFace === 'front' ? 'Voir Dos' : 'Voir Face') + '</button>'
            ) : '') +
            '<span style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);">' +
              (isCover ? 'Couverture personnalisée' : ('Page ' + (state.activePageIndex + 1) + ' / ' + nb.pages.length + ' — ' + esc(curPage.title))) +
            '</span>' +
          '</div>' +

          '<div class="nb-book-frame" id="nbBookFrame">' + mainStageHTML + '</div>' +

          // BOTTOM STRIP
          '<div class="nb-bottom-strip">' +
            '<div style="display:flex;gap:6px;align-items:center;">' +
              '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.prevPage()" ' + (isCover ? 'disabled' : '') + '>Précédent</button>' +
              '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.nextPage()" ' + (state.activePageIndex >= nb.pages.length - 1 ? 'disabled' : '') + '>Suivant</button>' +
            '</div>' +
            (state.readingMode ? '' : (
              '<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">' +
                '<button type="button" class="nb-btn nb-btn-primary nb-btn-sm" onclick="NOTEBOOKS_APP.addPage()">+ Page</button>' +
                (!isCover ? (
                  '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.duplicateCurrentPage()" title="Dupliquer cette page">' + ico('copy', 14) + '</button>' +
                  '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.moveCurrentPage(-1)" ' + (state.activePageIndex <= 0 ? 'disabled' : '') + ' title="Déplacer avant">' + ico('arrow-left', 14) + '</button>' +
                  '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.moveCurrentPage(1)" ' + (state.activePageIndex >= nb.pages.length - 1 ? 'disabled' : '') + ' title="Déplacer après">' + ico('arrow-right', 14) + '</button>' +
                  '<button type="button" class="nb-btn nb-btn-danger nb-btn-sm" onclick="NOTEBOOKS_APP.deleteCurrentPage()" ' + (nb.pages.length <= 1 ? 'disabled' : '') + ' title="Supprimer cette page">' + ico('trash', 14) + '</button>'
                ) : '') +
              '</div>'
            )) +
          '</div>' +
          overviewHtml +
        '</div>' +

        // RIGHT INSPECTOR
        (state.readingMode ? '' : ('<aside class="nb-right-inspector">' + renderRightInspectorHTML() + '</aside>')) +
      '</div>' +
    '</div>';
  }

  // ── PANNEAU GAUCHE CANVA ──────────────────────────────────────────────
  function renderLeftPanelContentHTML() {
    var nb = state.activeNotebook;
    var tab = state.leftTab;

    if (tab === 'templates') {
      return '<div class="nb-panel-heading"><span>' + ico('sparkles', 14) + ' Modèles rapides</span></div>' +
        '<p style="font-size:0.76rem;color:var(--text-secondary);margin-top:0;">Ajoutez des pages pré-configurées assorties au thème <strong>' + esc(nb.themeConfig.themeName) + '</strong>.</p>' +
        '<div style="display:grid;gap:8px;">' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.addPresetPage(\'06-daily-planner\', \'Planificateur du Jour\')">' + ico('sun', 14) + ' Planificateur du Jour</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.addPresetPage(\'09-study-notes\', \'Fiche de Révision\')">' + ico('graduation-cap', 14) + ' Fiche de Révision</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.addPresetPage(\'05-to-do-checklist\', \'Ma To-Do List\')">' + ico('check-circle', 14) + ' Liste To-Do</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.addPresetPage(\'12-habit-tracker\', \'Suivi d’Habitudes\')">' + ico('repeat', 14) + ' Suivi d’Habitudes</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.addPresetPage(\'18-scrapbook\', \'Page Scrapbook\')">' + ico('image', 14) + ' Scrapbook Souvenirs</button>' +
        '</div>';
    }

    if (tab === 'covers') {
      return '<div class="nb-panel-heading"><span>' + ico('book', 14) + ' 10 Couvertures</span></div>' +
        '<label style="display:flex;align-items:center;gap:6px;font-size:0.74rem;font-weight:700;margin-bottom:8px;cursor:pointer;">' +
          '<input id="nbAutoApplyThemeChk" type="checkbox" ' + (state.autoApplyTheme ? 'checked' : '') + ' onchange="NOTEBOOKS_APP.setAutoApplyTheme(this.checked)"> Appliquer le thème assorti à tout le cahier' +
        '</label>' +
        '<button type="button" class="nb-btn nb-btn-sm" style="width:100%;margin-bottom:10px;" onclick="NOTEBOOKS_APP.reapplyCoverTheme()">' + ico('palette', 14) + ' Appliquer le thème de la couverture actuelle</button>' +
        '<div class="nb-cover-gallery" style="grid-template-columns:1fr 1fr;">' +
          NOTEBOOKS_DATA.COVERS.map(function (c) {
            var fallBg = 'linear-gradient(135deg, ' + esc(c.theme.paperTint) + ' 0%, ' + esc(c.theme.accent) + ' 100%)';
            var imgCls = 'nb-cover-native-img' + (c.isWrap ? ' is-wrap' : '');
            return '<button type="button" class="nb-cover-option ' + (c.id === nb.coverId ? 'selected' : '') + '" onclick="NOTEBOOKS_APP.changeCover(\'' + esc(c.id) + '\')">' +
              '<div class="nb-cover-option-thumb" style="background:' + fallBg + ';">' +
                '<img class="' + imgCls + '" src="' + esc(c.image) + '" alt="' + esc(c.name) + '" loading="eager" decoding="async" onerror="this.style.opacity=\'0\'">' +
              '</div>' +
              '<div class="nb-cover-option-label">' + esc(c.name) + '</div>' +
            '</button>';
          }).join('') +
        '</div>';
    }

    if (tab === 'layouts') {
      var activeLayId = (state.activePageIndex >= 0 && nb.pages[state.activePageIndex]) ? nb.pages[state.activePageIndex].layoutId : '';
      return '<div class="nb-panel-heading"><span>' + ico('file-text', 14) + ' 20 Mises en page</span></div>' +
        '<p style="font-size:0.74rem;color:var(--text-secondary);margin-top:0;">Cliquez pour appliquer à la page active (ou créer une nouvelle page).</p>' +
        '<div class="nb-layout-gallery" style="grid-template-columns:repeat(2, minmax(0, 1fr));">' +
          NOTEBOOKS_DATA.PAGE_LAYOUTS.map(function (l) {
            return '<div class="nb-layout-option ' + (l.id === activeLayId ? 'selected' : '') + '" style="padding-bottom:6px;">' +
              '<img src="' + esc(l.previewImage) + '" alt="' + esc(l.name) + '" onclick="NOTEBOOKS_APP.applyOrAddLayout(\'' + esc(l.id) + '\', false)" style="cursor:pointer;">' +
              '<div class="nb-layout-option-name">' + esc(l.num + '. ' + l.name) + '</div>' +
              '<div style="display:flex;flex-wrap:wrap;gap:4px;padding:4px 4px 0;justify-content:center;">' +
                '<button type="button" class="nb-btn nb-btn-sm" style="padding:2px 6px;min-height:22px;font-size:0.63rem;" onclick="NOTEBOOKS_APP.applyOrAddLayout(\'' + esc(l.id) + '\', false)">Appliquer</button>' +
                '<button type="button" class="nb-btn nb-btn-primary nb-btn-sm" style="padding:2px 6px;min-height:22px;font-size:0.63rem;" onclick="NOTEBOOKS_APP.applyOrAddLayout(\'' + esc(l.id) + '\', true)">+ Page</button>' +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>';
    }

    if (tab === 'backgrounds') {
      var curSty = getEffectivePageStyle(nb, state.activePageIndex >= 0 ? nb.pages[state.activePageIndex] : null);
      return '<div class="nb-panel-heading"><span>' + ico('image', 14) + ' Arrière-plans &amp; Textures</span></div>' +
        '<div class="nb-prop-group">' +
          '<span class="nb-prop-label">Couleurs de papier</span>' +
          '<div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:6px;">' +
            NOTEBOOKS_DATA.PAPER_COLORS.map(function (pc) {
              return '<button type="button" title="' + esc(pc.name) + '" onclick="NOTEBOOKS_APP.setPageOrThemeStyle(\'paperBg\', \'' + esc(pc.bg) + '\')" style="height:30px;border-radius:8px;border:2px solid ' + (curSty.paperBg === pc.bg ? 'var(--primary-indigo)' : '#cbd5e1') + ';background:' + esc(pc.bg) + ';cursor:pointer;"></button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="nb-prop-group">' +
          '<span class="nb-prop-label">Motifs &amp; Textures</span>' +
          '<div style="display:grid;gap:6px;">' +
            NOTEBOOKS_DATA.PATTERNS.map(function (p) {
              return '<button type="button" class="nb-btn nb-btn-sm ' + (curSty.pattern === p.id ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.setPageOrThemeStyle(\'pattern\', \'' + esc(p.id) + '\')">' + esc(p.name) + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="nb-prop-group">' +
          '<span class="nb-prop-label">Opacité fond image</span>' +
          '<input type="range" min="5" max="100" value="' + Math.round((curSty.bgOpacity != null ? curSty.bgOpacity : 0.35) * 100) + '" oninput="NOTEBOOKS_APP.setPageOrThemeStyle(\'bgOpacity\', this.value / 100)" style="width:100%;">' +
          (curSty.bgImage ? '<button type="button" class="nb-btn nb-btn-sm nb-btn-danger" style="width:100%;margin-top:6px;" onclick="NOTEBOOKS_APP.setPageOrThemeStyle(\'bgImage\', \'\')">Retirer l’image de fond</button>' : '') +
        '</div>';
    }

    if (tab === 'colors') {
      var t = getEffectivePageStyle(nb, state.activePageIndex >= 0 ? nb.pages[state.activePageIndex] : null);
      return '<div class="nb-panel-heading"><span>' + ico('palette', 14) + ' Couleurs du Thème</span></div>' +
        '<div class="nb-form-field"><label>Couleur d’accent</label><input type="color" class="nb-input" style="height:38px;padding:3px;" value="' + esc(t.accent) + '" oninput="NOTEBOOKS_APP.setPageOrThemeStyle(\'accent\', this.value, true)"></div>' +
        '<div class="nb-form-field"><label>Couleur des titres</label><input type="color" class="nb-input" style="height:38px;padding:3px;" value="' + esc(t.headingColor) + '" oninput="NOTEBOOKS_APP.setPageOrThemeStyle(\'headingColor\', this.value, true)"></div>' +
        '<div class="nb-form-field"><label>Couleur des bordures</label><input type="color" class="nb-input" style="height:38px;padding:3px;" value="' + esc(t.border) + '" oninput="NOTEBOOKS_APP.setPageOrThemeStyle(\'border\', this.value, true)"></div>' +
        '<div class="nb-form-field"><label>Papier personnalisé</label><input type="color" class="nb-input" style="height:38px;padding:3px;" value="' + esc(t.paperBg) + '" oninput="NOTEBOOKS_APP.setPageOrThemeStyle(\'paperBg\', this.value, false)"></div>' +
        '<div class="nb-form-field"><label>Couleur du texte</label><input type="color" class="nb-input" style="height:38px;padding:3px;" value="' + esc(t.textColor) + '" oninput="NOTEBOOKS_APP.setPageOrThemeStyle(\'textColor\', this.value, true)"></div>' +
        '<button type="button" class="nb-btn nb-btn-sm" style="width:100%;" onclick="NOTEBOOKS_APP.reapplyCoverTheme()">' + ico('refresh', 14) + ' Réinitialiser au thème de la couverture</button>';
    }

    if (tab === 'fonts') {
      var curF = getEffectivePageStyle(nb, state.activePageIndex >= 0 ? nb.pages[state.activePageIndex] : null);
      return '<div class="nb-panel-heading"><span>' + ico('type', 14) + ' Polices (7 styles)</span></div>' +
        '<div class="nb-prop-label">Police des titres</div>' +
        '<div style="display:grid;gap:5px;margin-bottom:12px;">' +
          NOTEBOOKS_DATA.FONTS.map(function (f) {
            return '<button type="button" class="nb-btn nb-btn-sm ' + (curF.fontHeading === f.css ? 'nb-btn-primary' : '') + '" style="justify-content:space-between;font-family:' + esc(f.css) + ';" onclick="NOTEBOOKS_APP.setFontById(\'fontHeading\', \'' + esc(f.id) + '\')">' +
              '<span>' + esc(f.name) + '</span><span style="font-size:0.68rem;opacity:0.75;">' + esc(f.styleLabel) + '</span>' +
            '</button>';
          }).join('') +
        '</div>' +
        '<div class="nb-prop-label">Police du texte &amp; notes</div>' +
        '<div style="display:grid;gap:5px;">' +
          NOTEBOOKS_DATA.FONTS.map(function (f) {
            return '<button type="button" class="nb-btn nb-btn-sm ' + (curF.fontBody === f.css ? 'nb-btn-primary' : '') + '" style="justify-content:space-between;font-family:' + esc(f.css) + ';" onclick="NOTEBOOKS_APP.setFontById(\'fontBody\', \'' + esc(f.id) + '\')">' +
              '<span>' + esc(f.name) + '</span><span style="font-size:0.68rem;opacity:0.75;">' + esc(f.styleLabel) + '</span>' +
            '</button>';
          }).join('') +
        '</div>';
    }

    if (tab === 'elements') {
      return '<div class="nb-panel-heading"><span>' + ico('sparkles', 14) + ' Éléments &amp; Stickers</span></div>' +
        '<button type="button" class="nb-btn nb-btn-primary nb-btn-sm" style="width:100%;margin-bottom:10px;" onclick="NOTEBOOKS_APP.addTextElement()">+ Ajouter une zone de texte</button>' +
        '<div style="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:6px;">' +
          NOTEBOOKS_DATA.ELEMENTS.map(function (el) {
            return '<button type="button" class="nb-btn nb-btn-sm" style="flex-direction:column;height:66px;padding:6px 4px;" onclick="NOTEBOOKS_APP.addStickerElement(\'' + esc(el.id) + '\')" title="' + esc(el.name) + '">' +
              '<span style="width:26px;height:26px;display:inline-flex;color:' + esc(nb.themeConfig.accent) + ';">' + el.svg + '</span>' +
              '<span style="font-size:0.62rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;">' + esc(el.name) + '</span>' +
            '</button>';
          }).join('') +
        '</div>';
    }

    if (tab === 'borders') {
      var curB = getEffectivePageStyle(nb, state.activePageIndex >= 0 ? nb.pages[state.activePageIndex] : null);
      return '<div class="nb-panel-heading"><span>' + ico('layout', 14) + ' Styles de Bordures</span></div>' +
        '<div style="display:grid;gap:6px;">' +
          NOTEBOOKS_DATA.BORDERS.map(function (b) {
            return '<button type="button" class="nb-btn nb-btn-sm ' + (curB.borderStyle === b.id ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.setPageOrThemeStyle(\'borderStyle\', \'' + esc(b.id) + '\', true)">' + esc(b.name) + '</button>';
          }).join('') +
        '</div>';
    }

    if (tab === 'uploads') {
      return '<div class="nb-panel-heading"><span>' + ico('upload', 14) + ' Vos Images</span></div>' +
        '<button type="button" class="nb-btn nb-btn-primary nb-btn-sm" style="width:100%;margin-bottom:10px;" onclick="document.getElementById(\'nbUploadImageInput\').click()">+ Importer une image</button>' +
        '<input id="nbUploadImageInput" type="file" accept="image/*" style="display:none;" onchange="NOTEBOOKS_APP.handleUploadImage(event)">' +
        (state.uploads.length === 0
          ? '<p style="font-size:0.76rem;color:var(--text-secondary);">Aucune image importée. Ajoutez vos photos pour vos pages ou votre Scrapbook !</p>'
          : '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
              state.uploads.map(function (up) {
                return '<div style="border:1px solid var(--border-color);border-radius:10px;overflow:hidden;background:var(--bg-primary);">' +
                  '<img src="' + esc(up.dataUrl) + '" style="width:100%;height:72px;object-fit:cover;display:block;cursor:pointer;" onclick="NOTEBOOKS_APP.addUploadedImageElement(\'' + esc(up.id) + '\')" title="Cliquer pour insérer sur la page">' +
                  '<div style="display:flex;gap:3px;padding:4px;">' +
                    '<button type="button" class="nb-btn nb-btn-sm" style="flex:1;padding:2px;min-height:24px;font-size:0.65rem;" onclick="NOTEBOOKS_APP.addUploadedImageElement(\'' + esc(up.id) + '\')">+ Insérer</button>' +
                    (state.activePageIndex >= 0 ? '<button type="button" class="nb-btn nb-btn-sm" style="padding:2px 5px;min-height:24px;font-size:0.65rem;" onclick="NOTEBOOKS_APP.setUploadedAsBg(\'' + esc(up.id) + '\')" title="Mettre en fond de page">Fond</button>' : '') +
                    '<button type="button" class="nb-btn nb-btn-danger nb-btn-sm" style="padding:2px 5px;min-height:24px;font-size:0.65rem;" onclick="NOTEBOOKS_APP.deleteUpload(\'' + esc(up.id) + '\')">×</button>' +
                  '</div>' +
                '</div>';
              }).join('') +
            '</div>');
    }

    return '';
  }

  // ── INSPECTEUR DROIT CANVA (OBJET SÉLECTIONNÉ OU PAGE) ─────────────────
  function renderRightInspectorHTML() {
    var nb = state.activeNotebook;
    var isCover = (state.activePageIndex < 0);
    var selId = state.selectedElementId;

    // 1. Édition du Titre ou du Nom sur Couverture
    if (isCover && (selId === 'coverTitle' || selId === 'coverName')) {
      var isTitle = (selId === 'coverTitle');
      var st = isTitle ? nb.coverConfig.titleStyle : nb.coverConfig.nameStyle;
      var valText = isTitle ? nb.title : nb.ownerDisplayName;
      return '<div class="nb-panel-heading"><span>' + (isTitle ? ico('edit', 14) + ' Titre sur couverture' : ico('user', 14) + ' Nom sur couverture') + '</span></div>' +
        '<div class="nb-form-field"><label>Texte affiché</label>' +
          '<input class="nb-input" type="text" value="' + esc(valText) + '" oninput="NOTEBOOKS_APP.updateCoverText(\'' + selId + '\', this.value)">' +
        '</div>' +
        '<div class="nb-form-field"><label>Police</label>' +
          '<select class="nb-select" onchange="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'fontFamily\', this.value)">' +
            NOTEBOOKS_DATA.FONTS.map(function (f) {
              return '<option value="' + esc(f.css) + '" ' + (st.fontFamily === f.css ? 'selected' : '') + '>' + esc(f.name) + '</option>';
            }).join('') +
          '</select>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
          '<div class="nb-form-field"><label>Taille (' + st.fontSize + 'px)</label><input type="range" min="12" max="44" value="' + st.fontSize + '" oninput="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'fontSize\', Number(this.value))" style="width:100%;"></div>' +
          '<div class="nb-form-field"><label>Couleur texte</label><input type="color" class="nb-input" style="height:36px;padding:3px;" value="' + esc(st.color) + '" oninput="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'color\', this.value)"></div>' +
        '</div>' +
        '<div style="display:flex;gap:6px;margin-bottom:10px;">' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (st.bold ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'bold\', ' + (!st.bold) + ')"><strong>G</strong></button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (st.italic ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'italic\', ' + (!st.italic) + ')"><em>I</em></button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (st.align === 'left' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'align\', \'left\')">' + ico('arrow-left', 13) + '</button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (st.align === 'center' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'align\', \'center\')">↔</button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (st.align === 'right' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'align\', \'right\')">' + ico('arrow-right', 13) + '</button>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
          '<div class="nb-form-field"><label>Pos X (%)</label><input type="number" class="nb-input" min="5" max="95" value="' + Math.round(st.x) + '" oninput="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'x\', Number(this.value))"></div>' +
          '<div class="nb-form-field"><label>Pos Y (%)</label><input type="number" class="nb-input" min="5" max="95" value="' + Math.round(st.y) + '" oninput="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'y\', Number(this.value))"></div>' +
        '</div>' +
        '<div class="nb-form-field"><label>Fond badge (CSS ou transparent)</label>' +
          '<input type="text" class="nb-input" value="' + esc(st.pillBg || 'transparent') + '" onchange="NOTEBOOKS_APP.updateCoverOverlayProp(\'' + selId + '\', \'pillBg\', this.value)">' +
        '</div>';
    }

    // 2. Édition d'un élément flottant sélectionné (Texte, Sticker ou Image)
    var elList = isCover ? (nb.coverConfig.elements || []) : (nb.pages[state.activePageIndex].elements || []);
    var selEl = selId ? elList.find(function (e) { return e.id === selId; }) : null;
    if (selEl) {
      var html = '<div class="nb-panel-heading"><span>' + ico('sliders', 14) + ' Élément sélectionné</span></div>';
      if (selEl.type === 'text') {
        html += '<div class="nb-form-field"><label>Contenu du texte</label>' +
          '<textarea class="nb-textarea" rows="3" oninput="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'text\', this.value)">' + esc(selEl.text) + '</textarea>' +
        '</div>' +
        '<div class="nb-form-field"><label>Police</label>' +
          '<select class="nb-select" onchange="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'fontFamily\', this.value)">' +
            NOTEBOOKS_DATA.FONTS.map(function (f) {
              return '<option value="' + esc(f.css) + '" ' + (selEl.fontFamily === f.css ? 'selected' : '') + '>' + esc(f.name) + '</option>';
            }).join('') +
          '</select>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
          '<div class="nb-form-field"><label>Taille (' + (selEl.fontSize || 16) + 'px)</label><input type="range" min="10" max="42" value="' + (selEl.fontSize || 16) + '" oninput="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'fontSize\', Number(this.value))" style="width:100%;"></div>' +
          '<div class="nb-form-field"><label>Couleur</label><input type="color" class="nb-input" style="height:36px;padding:3px;" value="' + esc(selEl.color || '#1e293b') + '" oninput="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'color\', this.value)"></div>' +
        '</div>' +
        '<div style="display:flex;gap:6px;margin-bottom:10px;">' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (selEl.bold ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'bold\', ' + (!selEl.bold) + ')"><strong>G</strong></button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (selEl.italic ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'italic\', ' + (!selEl.italic) + ')"><em>I</em></button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (selEl.align === 'left' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'align\', \'left\')">' + ico('arrow-left', 13) + '</button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (selEl.align === 'center' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'align\', \'center\')">↔</button>' +
          '<button type="button" class="nb-btn nb-btn-sm ' + (selEl.align === 'right' ? 'nb-btn-primary' : '') + '" onclick="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'align\', \'right\')">' + ico('arrow-right', 13) + '</button>' +
        '</div>';
      } else {
        if (selEl.type === 'sticker') {
          html += '<div class="nb-form-field"><label>Couleur du sticker</label><input type="color" class="nb-input" style="height:36px;padding:3px;" value="' + esc(selEl.color || nb.themeConfig.accent) + '" oninput="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'color\', this.value)"></div>';
        }
      }
      html += '<div class="nb-form-field"><label>Largeur (' + Math.round(selEl.width || 64) + 'px)</label><input type="range" min="24" max="320" value="' + Math.round(selEl.width || 64) + '" oninput="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'width\', Number(this.value))" style="width:100%;"></div>' +
        '<div class="nb-form-field"><label>Rotation (' + Math.round(selEl.rotation || 0) + '°)</label><input type="range" min="-180" max="180" value="' + Math.round(selEl.rotation || 0) + '" oninput="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'rotation\', Number(this.value))" style="width:100%;"></div>' +
        '<div class="nb-form-field"><label>Opacité (' + Math.round((selEl.opacity != null ? selEl.opacity : 1) * 100) + '%)</label><input type="range" min="15" max="100" value="' + Math.round((selEl.opacity != null ? selEl.opacity : 1) * 100) + '" oninput="NOTEBOOKS_APP.updateElementProp(\'' + esc(selEl.id) + '\', \'opacity\', this.value / 100)" style="width:100%;"></div>' +
        '<div style="display:flex;gap:6px;">' +
          '<button type="button" class="nb-btn nb-btn-sm" style="flex:1;" onclick="NOTEBOOKS_APP.duplicateElement(\'' + esc(selEl.id) + '\')">Dupliquer</button>' +
          '<button type="button" class="nb-btn nb-btn-danger nb-btn-sm" style="flex:1;" onclick="NOTEBOOKS_APP.deleteElement(\'' + esc(selEl.id) + '\')">Supprimer</button>' +
        '</div>';
      return html;
    }

    // 3. Aucun élément sélectionné -> Propriétés de la Couverture ou de la Page active
    if (isCover) {
      return '<div class="nb-panel-heading"><span>' + ico('book', 14) + ' Propriétés Couverture</span></div>' +
        '<p style="font-size:0.76rem;color:var(--text-secondary);">Cliquez sur votre <strong>Nom</strong>, votre <strong>Titre</strong> ou un sticker sur la couverture pour le déplacer ou le modifier.</p>' +
        '<div class="nb-form-field"><label>Nom affiché</label><input class="nb-input" type="text" value="' + esc(nb.ownerDisplayName) + '" oninput="NOTEBOOKS_APP.updateCoverText(\'coverName\', this.value)"></div>' +
        '<div class="nb-form-field"><label>Titre du cahier</label><input class="nb-input" type="text" value="' + esc(nb.title) + '" oninput="NOTEBOOKS_APP.updateCoverText(\'coverTitle\', this.value)"></div>' +
        '<div style="display:flex;gap:8px;flex-direction:column;">' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.selectElement(\'coverTitle\')">' + ico('edit', 14) + ' Styliser le Titre</button>' +
          '<button type="button" class="nb-btn nb-btn-sm" onclick="NOTEBOOKS_APP.selectElement(\'coverName\')">' + ico('user', 14) + ' Styliser le Nom</button>' +
          '<button type="button" class="nb-btn nb-btn-primary nb-btn-sm" onclick="NOTEBOOKS_APP.setLeftTab(\'covers\')">' + ico('palette', 14) + ' Changer de couverture</button>' +
        '</div>';
    }

    var page = nb.pages[state.activePageIndex];
    return '<div class="nb-panel-heading"><span>' + ico('file-text', 14) + ' Propriétés de la Page</span></div>' +
      '<div class="nb-form-field"><label>Titre de la page</label><input class="nb-input" type="text" value="' + esc(page.title) + '" oninput="NOTEBOOKS_APP.renameCurrentPage(this.value)"></div>' +
      '<div class="nb-form-field"><label>Mise en page</label>' +
        '<select class="nb-select" onchange="NOTEBOOKS_APP.applyOrAddLayout(this.value, false)">' +
          NOTEBOOKS_DATA.PAGE_LAYOUTS.map(function (l) {
            return '<option value="' + esc(l.id) + '" ' + (page.layoutId === l.id ? 'selected' : '') + '>' + esc(l.num + '. ' + l.name) + '</option>';
          }).join('') +
        '</select>' +
      '</div>' +
      '<div class="nb-form-field"><label>Style des cases à cocher</label>' +
        '<select class="nb-select" onchange="NOTEBOOKS_APP.setPageOrThemeStyle(\'checkboxStyle\', this.value, true)">' +
          '<option value="rounded" ' + (nb.themeConfig.checkboxStyle === 'rounded' ? 'selected' : '') + '>Carré arrondi</option>' +
          '<option value="circle" ' + (nb.themeConfig.checkboxStyle === 'circle' ? 'selected' : '') + '>Cercle</option>' +
          '<option value="heart" ' + (nb.themeConfig.checkboxStyle === 'heart' ? 'selected' : '') + '>Cœur</option>' +
          '<option value="diamond" ' + (nb.themeConfig.checkboxStyle === 'diamond' ? 'selected' : '') + '>Losange Luxe</option>' +
          '<option value="square" ' + (nb.themeConfig.checkboxStyle === 'square' ? 'selected' : '') + '>Carré Classique</option>' +
        '</select>' +
      '</div>' +
      '<p style="font-size:0.74rem;color:var(--text-muted);line-height:1.45;">Astuce : ajoutez des zones de texte, stickers ou photos depuis le panneau de gauche et glissez-les n’importe où sur la page.</p>' +
      '<button type="button" class="nb-btn nb-btn-sm" style="width:100%;" onclick="NOTEBOOKS_APP.resetPageStyleOverride()">' + ico('palette', 14) + ' Hériter du thème global</button>';
  }

  // ── RENDU VISUEL DE LA COUVERTURE ─────────────────────────────────────
  function renderCoverArtworkHTML(nb, isThumb) {
    var cover = NOTEBOOKS_DATA.getCoverById(nb.coverId);
    var cfg = nb.coverConfig || { titleStyle: cover.theme.coverTitleDefaults, nameStyle: cover.theme.coverNameDefaults, elements: [] };
    var tSt = cfg.titleStyle || cover.theme.coverTitleDefaults;
    var nSt = cfg.nameStyle || cover.theme.coverNameDefaults;

    var imgUrl = cover.image;
    var imgCls = 'nb-cover-native-img' + (cover.isWrap ? ' is-wrap' : '');
    if (!isThumb && state.coverFace === 'back') {
      if (cover.backImage) {
        imgUrl = cover.backImage;
        imgCls = 'nb-cover-native-img';
      } else if (cover.isWrap) {
        imgCls = 'nb-cover-native-img is-wrap-back';
      }
    }

    var fallBg = 'background:linear-gradient(135deg, ' + esc(cover.theme.paperTint) + ' 0%, ' + esc(cover.theme.accent) + ' 100%);';
    var scaleFactor = (isThumb === 'wizard') ? 0.48 : (isThumb ? 0.42 : 1);

    var overlays = '';
    if (isThumb || state.coverFace === 'front') {
      overlays += '<div class="' + (!isThumb && state.selectedElementId === 'coverTitle' ? 'nb-el-box selected' : 'nb-el-box') + '" ' +
        (isThumb ? '' : 'data-drag-id="coverTitle" onclick="event.stopPropagation();NOTEBOOKS_APP.selectElement(\'coverTitle\')" ') +
        'style="left:' + tSt.x + '%;top:' + tSt.y + '%;transform:translate(-50%,-50%);' +
        'font-family:' + esc(tSt.fontFamily) + ';font-size:' + Math.max(9, Math.round(tSt.fontSize * scaleFactor)) + 'px;' +
        'color:' + esc(tSt.color) + ';font-weight:' + (tSt.bold ? '700' : '400') + ';font-style:' + (tSt.italic ? 'italic' : 'normal') + ';' +
        'text-align:' + esc(tSt.align || 'center') + ';background:' + esc(tSt.pillBg || 'transparent') + ';' +
        'padding:' + (isThumb === 'wizard' ? '3px 7px' : (isThumb ? '2px 5px' : '5px 14px')) + ';border-radius:10px;max-width:88%;line-height:1.15;box-shadow:' + (tSt.pillBg && tSt.pillBg !== 'transparent' ? '0 2px 10px rgba(0,0,0,0.18)' : 'none') + ';">' +
        esc(nb.title) +
      '</div>';

      overlays += '<div class="' + (!isThumb && state.selectedElementId === 'coverName' ? 'nb-el-box selected' : 'nb-el-box') + '" ' +
        (isThumb ? '' : 'data-drag-id="coverName" onclick="event.stopPropagation();NOTEBOOKS_APP.selectElement(\'coverName\')" ') +
        'style="left:' + nSt.x + '%;top:' + nSt.y + '%;transform:translate(-50%,-50%);' +
        'font-family:' + esc(nSt.fontFamily) + ';font-size:' + Math.max(8, Math.round(nSt.fontSize * scaleFactor)) + 'px;' +
        'color:' + esc(nSt.color) + ';font-weight:' + (nSt.bold ? '700' : '400') + ';font-style:' + (nSt.italic ? 'italic' : 'normal') + ';' +
        'text-align:' + esc(nSt.align || 'center') + ';background:' + esc(nSt.pillBg || 'transparent') + ';' +
        'padding:' + (isThumb === 'wizard' ? '2px 6px' : (isThumb ? '1px 5px' : '4px 12px')) + ';border-radius:8px;max-width:82%;line-height:1.15;">' +
        esc(nb.ownerDisplayName) +
      '</div>';

      overlays += renderFloatingElementsHTML(cfg.elements || [], isThumb);
    }

    return '<div class="nb-cover-img-layer" style="' + fallBg + '">' +
        '<img class="' + imgCls + '" src="' + esc(imgUrl) + '" alt="' + esc(cover.name) + '" loading="eager" decoding="async" onerror="this.style.opacity=\'0\'">' +
      '</div>' +
      '<div class="nb-floating-layer">' + overlays + '</div>';
  }

  // ── CALCUL DU THÈME EFFECTIF D'UNE PAGE ───────────────────────────────
  function getEffectivePageStyle(nb, page) {
    var base = nb.themeConfig || NOTEBOOKS_DATA.COVERS[0].theme;
    var ov = (page && page.styleOverride) ? page.styleOverride : {};
    return {
      accent: ov.accent || base.accent,
      accentSoft: ov.accentSoft || base.accentSoft,
      border: ov.border || base.border,
      borderStyle: ov.borderStyle || base.borderStyle,
      paperBg: ov.paperBg || base.paperBg,
      headingColor: ov.headingColor || base.headingColor,
      textColor: ov.textColor || base.textColor,
      mutedColor: ov.mutedColor || base.mutedColor,
      fontHeading: ov.fontHeading || base.fontHeading,
      fontBody: ov.fontBody || base.fontBody,
      checkboxStyle: ov.checkboxStyle || base.checkboxStyle || 'rounded',
      pattern: (ov.pattern !== undefined) ? ov.pattern : base.pattern,
      bgImage: ov.bgImage || '',
      bgOpacity: ov.bgOpacity != null ? ov.bgOpacity : 0.35
    };
  }

  // ── RENDU VISUEL INTERACTIF D'UNE PAGE (TOUTES LES 20 MISES EN PAGE) ──
  function renderPageSurfaceHTML(nb, page, pageIndex, isMiniPreview) {
    var st = getEffectivePageStyle(nb, page);
    var patObj = NOTEBOOKS_DATA.PATTERNS.find(function (p) { return p.id === st.pattern; }) || NOTEBOOKS_DATA.PATTERNS[0];
    var cssVars = '--nb-accent:' + st.accent + ';--nb-accent-soft:' + st.accentSoft + ';--nb-border:' + st.border +
      ';--nb-paper-bg:' + st.paperBg + ';--nb-heading:' + st.headingColor + ';--nb-text:' + st.textColor +
      ';--nb-muted:' + st.mutedColor + ';--nb-font-heading:' + st.fontHeading + ';--nb-font-body:' + st.fontBody + ';';

    var bgImgHtml = st.bgImage
      ? '<div class="nb-page-bg-img" style="background-image:url(\'' + esc(st.bgImage) + '\');opacity:' + st.bgOpacity + ';"></div>'
      : '';

    var bodyHtml = renderLayoutInnerHTML(nb, page, pageIndex, st, isMiniPreview);
    var floatHtml = (page.elements && page.elements.length)
      ? '<div class="nb-floating-layer">' + renderFloatingElementsHTML(page.elements || [], isMiniPreview) + '</div>'
      : '';

    var miniInline = (isMiniPreview === 'thumb')
      ? 'padding:8px;font-size:0.58rem;min-height:0;height:100%;'
      : (isMiniPreview ? 'padding:18px;font-size:0.95rem;' : '');

    return '<div class="nb-page-surface ' + esc(isMiniPreview ? '' : state.turnAnim) + '" style="' + cssVars + miniInline + '" onclick="NOTEBOOKS_APP.onSurfaceClick(event)">' +
      bgImgHtml +
      '<div class="nb-page-pattern-layer ' + esc(patObj.cssClass) + '"></div>' +
      '<div class="nb-page-inner-frame nb-border-' + esc(st.borderStyle) + '">' +
        bodyHtml +
      '</div>' +
      floatHtml +
    '</div>';
  }

  function headerIconForLayout(layoutId, st) {
    var map = {
      '01-classic-lined': 'heart-outline', '02-dotted-notes': 'sparkle', '03-grid-notes': 'bow-coquette',
      '04-blank-journal': 'heart-filled', '05-to-do-checklist': 'heart-outline', '06-daily-planner': 'star-outline',
      '07-weekly-planner': 'sparkle', '08-monthly-planner': 'star-filled', '09-study-notes': 'quill',
      '10-project-planner': 'compass', '11-brain-dump': 'sparkle-gold', '12-habit-tracker': 'heart-outline',
      '13-goals-planner': 'star-filled', '14-gratitude': 'heart-filled', '15-mood-tracker': 'flower-minimal',
      '16-reading-journal': 'leaf-botanical', '17-daily-reflection': 'sparkle', '18-scrapbook': 'butterfly',
      '19-daily-schedule': 'moon', '20-decorative-lined': 'bow-coquette'
    };
    var el = NOTEBOOKS_DATA.getElementById(map[layoutId] || 'sparkle');
    return el ? '<span class="nb-pg-header-icon" style="color:' + esc(st.accent) + ';">' + el.svg + '</span>' : '';
  }

  function renderTaskRowHTML(t, st, pageIdx) {
    var sym = t.done ? '✓' : '';
    var prioLabels = { low: 'Basse', medium: 'Moy', high: 'Haute' };
    var pCls = 'nb-prio-' + (t.priority || 'medium');
    var isStatic = (pageIdx < 0);
    if (isStatic) {
      return '<div class="nb-task-wrap">' +
        '<div class="nb-task-row ' + (t.done ? 'done' : '') + '">' +
          '<span class="nb-task-check style-' + esc(st.checkboxStyle) + ' ' + (t.done ? 'checked' : '') + '"><span>' + sym + '</span></span>' +
          '<span class="nb-task-text" style="display:inline-block;white-space:normal;word-break:break-word;line-height:1.25;">' + (t.text ? esc(t.text) : '<span style="opacity:0.45;">Nouvelle tâche...</span>') + '</span>' +
          (t.category ? '<span class="nb-task-cat-chip">' + esc(t.category) + '</span>' : '') +
          (t.deadline ? '<span style="font-size:0.65rem;color:var(--nb-muted);white-space:nowrap;">' + ico('calendar', 11) + ' ' + esc(t.deadline) + '</span>' : '') +
          '<span class="nb-prio-pill ' + pCls + '">' + esc(prioLabels[t.priority || 'medium']) + '</span>' +
        '</div>' +
        (t.desc ? '<div class="nb-task-subrow"><span class="nb-task-desc-input" style="white-space:normal;">' + esc(t.desc) + '</span></div>' : '') +
      '</div>';
    }
    return '<div class="nb-task-wrap">' +
      '<div class="nb-task-row ' + (t.done ? 'done' : '') + '">' +
        '<button type="button" aria-label="Marquer terminée" class="nb-task-check style-' + esc(st.checkboxStyle) + ' ' + (t.done ? 'checked' : '') + '" onclick="NOTEBOOKS_APP.toggleTask(' + pageIdx + ', \'' + esc(t.id) + '\')"><span>' + sym + '</span></button>' +
        '<input type="text" class="nb-task-text" value="' + esc(t.text) + '" oninput="NOTEBOOKS_APP.updateTaskField(' + pageIdx + ', \'' + esc(t.id) + '\', \'text\', this.value)" placeholder="Nouvelle tâche...">' +
        '<input type="text" class="nb-task-text nb-edit-only" style="flex:0 1 48px;max-width:48px;font-size:0.68rem;color:var(--nb-muted);text-align:center;" value="' + esc(t.category || '') + '" oninput="NOTEBOOKS_APP.updateTaskField(' + pageIdx + ', \'' + esc(t.id) + '\', \'category\', this.value)" placeholder="Cat.">' +
        '<input type="text" class="nb-task-text nb-edit-only" style="flex:0 1 52px;max-width:52px;font-size:0.68rem;color:var(--nb-muted);text-align:right;" value="' + esc(t.deadline || '') + '" oninput="NOTEBOOKS_APP.updateTaskField(' + pageIdx + ', \'' + esc(t.id) + '\', \'deadline\', this.value)" placeholder="Date">' +
        '<button type="button" class="nb-prio-pill ' + pCls + '" onclick="NOTEBOOKS_APP.cycleTaskPriority(' + pageIdx + ', \'' + esc(t.id) + '\')" title="Changer priorité">' + esc(prioLabels[t.priority || 'medium']) + '</button>' +
        '<button type="button" aria-label="Supprimer tâche" class="nb-edit-only" style="border:none;background:transparent;color:#ef4444;cursor:pointer;font-weight:800;padding:0 3px;" onclick="NOTEBOOKS_APP.deleteTask(' + pageIdx + ', \'' + esc(t.id) + '\')">×</button>' +
      '</div>' +
      '<div class="nb-task-subrow">' +
        '<input type="text" class="nb-task-desc-input" value="' + esc(t.desc || '') + '" oninput="NOTEBOOKS_APP.updateTaskField(' + pageIdx + ', \'' + esc(t.id) + '\', \'desc\', this.value)" placeholder="Description / détail...">' +
      '</div>' +
    '</div>';
  }

  function renderLayoutInnerHTML(nb, page, pageIndex, st, isMini) {
    var f = page.fields || {};
    var lid = page.layoutId;
    var pIdx = isMini ? -1 : pageIndex;
    var iconHtml = headerIconForLayout(lid, st);

    function fieldLine(key, val, placeholder, extraAttrs, extraStyle) {
      if (isMini) {
        return '<span class="nb-pg-input-line" style="display:inline-block;' + (extraStyle || '') + '">' +
          (val ? esc(val) : '<span style="opacity:0.35;">' + esc(placeholder || '...') + '</span>') +
        '</span>';
      }
      return '<input type="text" class="nb-pg-input-line" ' + (extraStyle ? 'style="' + extraStyle + '" ' : '') + 'value="' + esc(val || '') + '" placeholder="' + esc(placeholder || '') + '" ' + extraAttrs + '>';
    }

    function fieldArea(cls, val, placeholder, extraAttrs, extraStyle) {
      if (isMini) {
        return '<div class="' + cls + '" style="white-space:pre-wrap;overflow:hidden;' + (extraStyle || '') + '">' +
          (val ? esc(val) : '<span style="opacity:0.35;">' + esc(placeholder || '') + '</span>') +
        '</div>';
      }
      return '<textarea class="' + cls + '" ' + (extraStyle ? 'style="' + extraStyle + '" ' : '') + 'placeholder="' + esc(placeholder || '') + '" ' + extraAttrs + '>' + esc(val || '') + '</textarea>';
    }

    var footerHtml = '<div class="nb-pg-footer">' +
      '<span>Date : ' + fieldLine('headerDate', f.headerDate, '...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'headerDate\', this.value)"', 'width:105px;display:inline;') + '</span>' +
      '<span style="font-weight:700;">' + esc(nb.ownerDisplayName) + ' • p.' + (pageIndex + 1) + '</span>' +
    '</div>';

    // 1. Classic Lined / 11. Brain Dump / 20. Decorative Lined
    if (lid === '01-classic-lined' || lid === '11-brain-dump' || lid === '20-decorative-lined') {
      var hTitle = lid === '11-brain-dump' ? 'Brain Dump' : 'Notes';
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">' + hTitle + '</h3>' + iconHtml + '</div>' +
        fieldArea('nb-pg-lined-area', f.notesText, 'Écrivez vos notes ici...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
        (lid === '20-decorative-lined' ? '<div style="text-align:center;color:var(--nb-accent);height:20px;margin:4px 0;">' + NOTEBOOKS_DATA.getElementById('bow-coquette').svg.replace('<svg ', '<svg style="height:20px;" ') + '</div>' : '') +
        footerHtml;
    }

    // 2. Dotted Notes
    if (lid === '02-dotted-notes') {
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Bullet Notes</h3>' + iconHtml + '</div>' +
        fieldArea('nb-pg-plain-area nb-pg-dots-bg', f.notesText, 'Page pointillée libre...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
        footerHtml;
    }

    // 3. Grid Notes
    if (lid === '03-grid-notes') {
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Notes Quadrillées</h3>' + iconHtml + '</div>' +
        fieldArea('nb-pg-plain-area nb-pg-grid-bg', f.notesText, 'Schémas, algorithmes ou notes...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
        footerHtml;
    }

    // 4. Blank Journal
    if (lid === '04-blank-journal') {
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Dream Big ♡</h3>' + iconHtml + '</div>' +
        fieldArea('nb-pg-plain-area', f.notesText, 'Exprimez-vous librement, collez des stickers et des souvenirs...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
        footerHtml;
    }

    // 5. To-Do Checklist
    if (lid === '05-to-do-checklist') {
      var tasksHtml = (page.tasks || []).map(function (t) { return renderTaskRowHTML(t, st, pIdx); }).join('');
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">To-Do List</h3>' + iconHtml + '</div>' +
        '<div style="flex:1;overflow-y:auto;">' + tasksHtml +
          (isMini ? '' : '<button type="button" class="nb-btn nb-btn-sm nb-edit-only" style="margin-top:8px;width:100%;" onclick="NOTEBOOKS_APP.addTask(' + pIdx + ')">+ Ajouter une tâche</button>') +
        '</div>' +
        '<div class="nb-pg-box" style="margin-top:8px;min-height:60px;"><span class="nb-pg-box-label">Notes</span>' +
          fieldArea('nb-pg-plain-area', f.notesText, 'Détails ou rappels...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'font-size:0.78rem;') +
        '</div>' + footerHtml;
    }

    // 6. Daily Planner / 19. Daily Schedule
    if (lid === '06-daily-planner' || lid === '19-daily-schedule') {
      var sched = f.schedule || [];
      var prios = f.priorities || ['', '', ''];
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">' + (lid === '19-daily-schedule' ? 'Emploi du Temps' : 'Daily Planner') + '</h3>' + iconHtml + '</div>' +
        (lid === '06-daily-planner' ? (
          '<div style="margin-bottom:8px;">' +
            '<div class="nb-pg-box-label">Priorités du jour</div>' +
            [0, 1, 2].map(function (pi) {
              return '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;"><strong style="color:var(--nb-accent);font-size:0.8rem;">' + (pi + 1) + '.</strong>' +
                fieldLine('prio_' + pi, prios[pi], 'Priorité ' + (pi + 1), 'oninput="NOTEBOOKS_APP.updateArrayField(' + pIdx + ', \'priorities\', ' + pi + ', this.value)"', '') + '</div>';
            }).join('') +
          '</div>'
        ) : '') +
        '<div style="display:grid;grid-template-columns:1.25fr 0.9fr;gap:10px;flex:1;min-height:0;">' +
          '<div style="overflow-y:auto;">' +
            '<div class="nb-pg-box-label">Programme</div>' +
            sched.map(function (slot, si) {
              return '<div class="nb-task-row ' + (slot.done ? 'done' : '') + '">' +
                (isMini
                  ? '<span class="nb-task-check style-' + esc(st.checkboxStyle) + ' ' + (slot.done ? 'checked' : '') + '"><span>' + (slot.done ? '✓' : '') + '</span></span>'
                  : '<button type="button" class="nb-task-check style-' + esc(st.checkboxStyle) + ' ' + (slot.done ? 'checked' : '') + '" onclick="NOTEBOOKS_APP.toggleScheduleDone(' + pIdx + ', ' + si + ')"><span>' + (slot.done ? '✓' : '') + '</span></button>') +
                '<span style="font-size:0.72rem;font-weight:800;color:var(--nb-accent);min-width:36px;">' + esc(slot.time) + '</span>' +
                (isMini
                  ? '<span class="nb-task-text" style="display:inline-block;">' + (slot.text ? esc(slot.text) : '') + '</span>'
                  : '<input type="text" class="nb-task-text" value="' + esc(slot.text || '') + '" oninput="NOTEBOOKS_APP.updateScheduleText(' + pIdx + ', ' + si + ', this.value)" placeholder="...">') +
              '</div>';
            }).join('') +
          '</div>' +
          '<div class="nb-pg-box"><span class="nb-pg-box-label">Notes</span>' +
            fieldArea('nb-pg-plain-area', f.notesText, 'Notes du jour...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'font-size:0.78rem;') +
          '</div>' +
        '</div>' + footerHtml;
    }

    // 7. Weekly Planner
    if (lid === '07-weekly-planner') {
      var days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
      var wd = f.weeklyDays || {};
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Weekly Planner</h3>' + iconHtml + '</div>' +
        '<div style="display:grid;grid-template-columns:1.4fr 0.9fr;gap:10px;flex:1;min-height:0;">' +
          '<div style="display:flex;flex-direction:column;gap:5px;overflow-y:auto;">' +
            days.map(function (d) {
              return '<div style="display:flex;align-items:center;gap:6px;">' +
                '<span style="background:var(--nb-accent-soft);color:var(--nb-heading);font-weight:800;font-size:0.68rem;padding:3px 7px;border-radius:8px;min-width:52px;text-align:center;">' + d.slice(0, 3) + '</span>' +
                fieldLine('wd_' + d, wd[d], '...', 'oninput="NOTEBOOKS_APP.updateWeekDay(' + pIdx + ', \'' + d + '\', this.value)"', '') + '</div>';
            }).join('') +
          '</div>' +
          '<div class="nb-pg-box"><span class="nb-pg-box-label">Notes semaine</span>' +
            fieldArea('nb-pg-plain-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'font-size:0.78rem;') +
          '</div>' +
        '</div>' + footerHtml;
    }

    // 8. Monthly Planner
    if (lid === '08-monthly-planner') {
      var cells = f.monthlyCells || Array(35).fill('');
      return '<div class="nb-pg-header">' +
        (isMini ? '<h3 class="nb-pg-title">' + esc(f.monthName || 'Mois') + '</h3>' : '<input type="text" class="nb-pg-title" style="border:none;background:transparent;width:80%;" value="' + esc(f.monthName || 'Mois') + '" oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'monthName\', this.value)">') +
        iconHtml + '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;font-size:0.66rem;font-weight:800;text-align:center;color:var(--nb-heading);margin-bottom:3px;">' +
          '<span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;flex:1;">' +
          cells.map(function (val, ci) {
            if (isMini) {
              return '<div style="border:1px solid var(--nb-border);border-radius:4px;background:rgba(255,255,255,0.65);font-size:0.64rem;padding:2px;color:var(--nb-text);overflow:hidden;">' +
                (val ? esc(val) : '<span style="opacity:0.4;">' + (ci < 31 ? (ci + 1) : '') + '</span>') +
              '</div>';
            }
            return '<textarea style="border:1px solid var(--nb-border);border-radius:4px;background:rgba(255,255,255,0.65);resize:none;font-size:0.66rem;padding:3px;color:var(--nb-text);" placeholder="' + (ci < 31 ? (ci + 1) : '') + '" oninput="NOTEBOOKS_APP.updateArrayField(' + pIdx + ', \'monthlyCells\', ' + ci + ', this.value)">' + esc(val) + '</textarea>';
          }).join('') +
        '</div>' +
        '<div class="nb-pg-box" style="margin-top:6px;height:54px;"><span class="nb-pg-box-label">Notes du mois</span>' +
          fieldArea('nb-pg-plain-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'font-size:0.75rem;') +
        '</div>';
    }

    // 9. Study Notes
    if (lid === '09-study-notes') {
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Study Notes</h3>' + iconHtml + '</div>' +
        '<div style="display:grid;grid-template-columns:1.3fr 1fr;gap:8px;margin-bottom:8px;">' +
          '<div><span class="nb-pg-box-label">Matière :</span>' + fieldLine('subject', f.subject, 'Algorithmique / STI...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'subject\', this.value)"', '') + '</div>' +
          '<div><span class="nb-pg-box-label">Date :</span>' + fieldLine('headerDate', f.headerDate, '...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'headerDate\', this.value)"', '') + '</div>' +
        '</div>' +
        fieldArea('nb-pg-lined-area', f.notesText, 'Résumé de cours, formules, algorithmes...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
        '<div class="nb-pg-box" style="margin-top:6px;height:62px;"><span class="nb-pg-box-label">À retenir absolument</span>' +
          fieldArea('nb-pg-plain-area', f.notesSecondary, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesSecondary\', this.value)"', 'font-size:0.76rem;') +
        '</div>';
    }

    // 10. Project Planner
    if (lid === '10-project-planner') {
      var pTasks = (page.tasks || []).map(function (t) { return renderTaskRowHTML(t, st, pIdx); }).join('');
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Project Planner</h3>' + iconHtml + '</div>' +
        '<div style="display:grid;grid-template-columns:1.3fr 1fr;gap:8px;margin-bottom:8px;">' +
          '<div><span class="nb-pg-box-label">Projet :</span>' + fieldLine('projectTitle', f.projectTitle, 'Nom du projet', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'projectTitle\', this.value)"', '') + '</div>' +
          '<div><span class="nb-pg-box-label">Échéance :</span>' + fieldLine('projectDeadline', f.projectDeadline, 'Date limite', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'projectDeadline\', this.value)"', '') + '</div>' +
        '</div>' +
        '<div class="nb-pg-box-label">Étapes &amp; Tâches</div>' +
        '<div style="flex:1;overflow-y:auto;">' + pTasks +
          (isMini ? '' : '<button type="button" class="nb-btn nb-btn-sm nb-edit-only" style="margin-top:6px;width:100%;" onclick="NOTEBOOKS_APP.addTask(' + pIdx + ')">+ Ajouter une étape</button>') +
        '</div>' +
        '<div class="nb-pg-box" style="margin-top:8px;height:70px;"><span class="nb-pg-box-label">Notes projet</span>' +
          fieldArea('nb-pg-plain-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'font-size:0.78rem;') +
        '</div>';
    }

    // 12. Habit Tracker
    if (lid === '12-habit-tracker') {
      var habits = f.habits || [];
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Habit Tracker</h3>' + iconHtml + '</div>' +
        '<div style="display:grid;grid-template-columns:1fr repeat(7,22px) 18px;gap:4px;font-size:0.68rem;font-weight:800;color:var(--nb-heading);text-align:center;margin-bottom:4px;">' +
          '<span style="text-align:left;">Habitude</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span><span></span>' +
        '</div>' +
        '<div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px;">' +
          habits.map(function (hb, hi) {
            return '<div style="display:grid;grid-template-columns:1fr repeat(7,22px) 18px;gap:4px;align-items:center;">' +
              fieldLine('hb_' + hi, hb.name, 'Habitude', 'oninput="NOTEBOOKS_APP.updateHabitName(' + pIdx + ', ' + hi + ', this.value)"', 'font-size:0.78rem;') +
              hb.days.map(function (on, di) {
                return '<button type="button" class="nb-habit-dot ' + (on ? 'active' : '') + '" onclick="NOTEBOOKS_APP.toggleHabitDay(' + pIdx + ', ' + hi + ', ' + di + ')"></button>';
              }).join('') +
              (isMini ? '<span></span>' : '<button type="button" class="nb-edit-only" style="border:none;background:transparent;color:#ef4444;cursor:pointer;font-weight:800;" onclick="NOTEBOOKS_APP.deleteHabit(' + pIdx + ', ' + hi + ')">×</button>') +
            '</div>';
          }).join('') +
          (isMini ? '' : '<button type="button" class="nb-btn nb-btn-sm nb-edit-only" onclick="NOTEBOOKS_APP.addHabit(' + pIdx + ')">+ Ajouter une habitude</button>') +
        '</div>' +
        '<div class="nb-pg-box" style="margin-top:8px;height:70px;"><span class="nb-pg-box-label">Bilan &amp; Notes</span>' +
          fieldArea('nb-pg-plain-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'font-size:0.78rem;') +
        '</div>';
    }

    // 13. Goals Planner
    if (lid === '13-goals-planner') {
      var gPrios = f.priorities || ['', '', ''];
      var gTasks = (page.tasks || []).map(function (t) { return renderTaskRowHTML(t, st, pIdx); }).join('');
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Goals Planner</h3>' + iconHtml + '</div>' +
        '<div style="margin-bottom:8px;">' +
          '<div class="nb-pg-box-label">Mes Objectifs</div>' +
          [0, 1, 2].map(function (gi) {
            return '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;"><strong style="color:var(--nb-accent);">' + (gi + 1) + '.</strong>' +
              fieldLine('gprio_' + gi, gPrios[gi], 'Objectif ' + (gi + 1), 'oninput="NOTEBOOKS_APP.updateArrayField(' + pIdx + ', \'priorities\', ' + gi + ', this.value)"', '') + '</div>';
          }).join('') +
        '</div>' +
        '<div class="nb-pg-box-label">Actions pour réussir</div>' +
        '<div style="flex:1;overflow-y:auto;">' + gTasks +
          (isMini ? '' : '<button type="button" class="nb-btn nb-btn-sm nb-edit-only" style="margin-top:6px;width:100%;" onclick="NOTEBOOKS_APP.addTask(' + pIdx + ')">+ Ajouter une action</button>') +
        '</div>' +
        '<div class="nb-pg-box" style="margin-top:8px;flex-direction:row;align-items:center;gap:8px;">' +
          '<span class="nb-pg-box-label" style="margin:0;">Rappel :</span>' +
          fieldLine('reminderText', f.reminderText, 'Garder le cap !', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'reminderText\', this.value)"', 'border:none;') +
        '</div>';
    }

    // 14. Gratitude Journal
    if (lid === '14-gratitude') {
      var grat = f.gratitude || ['', '', ''];
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Gratitude Journal</h3>' + iconHtml + '</div>' +
        '<div class="nb-pg-box-label" style="margin-bottom:6px;">Aujourd’hui, je suis reconnaissant(e) pour :</div>' +
        [0, 1, 2].map(function (gi) {
          return '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;"><strong style="color:var(--nb-accent);">' + (gi + 1) + '.</strong>' +
            fieldLine('grat_' + gi, grat[gi], 'Un beau moment...', 'oninput="NOTEBOOKS_APP.updateArrayField(' + pIdx + ', \'gratitude\', ' + gi + ', this.value)"', '') + '</div>';
        }).join('') +
        '<div class="nb-pg-box-label" style="margin-top:6px;">Notes &amp; pensées positives</div>' +
        fieldArea('nb-pg-lined-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
        footerHtml;
    }

    // 15. Mood Tracker
    if (lid === '15-mood-tracker') {
      var moods = f.moods || Array(35).fill('');
      var moodMeta = {
        '': { bg: '#FFFFFF', label: '' },
        'happy': { bg: '#FBBF24', label: ico('smile', 13) },
        'calm': { bg: '#34D399', label: ico('smile', 13) },
        'neutral': { bg: '#93C5FD', label: ico('meh', 13) },
        'tired': { bg: '#C4B5FD', label: ico('moon', 13) },
        'stressed': { bg: '#FB7185', label: ico('frown', 13) }
      };
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Mood Tracker</h3>' + iconHtml + '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;font-size:0.68rem;margin-bottom:8px;color:var(--nb-muted);">' +
          '<span>' + ico('smile', 12) + ' Joyeux</span><span>' + ico('smile', 12) + ' Calme</span><span>' + ico('meh', 12) + ' Neutre</span><span>' + ico('moon', 12) + ' Fatigué</span><span>' + ico('frown', 12) + ' Stressé</span>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px;justify-items:center;margin:8px 0 12px;">' +
          moods.map(function (m, mi) {
            var mm = moodMeta[m] || moodMeta[''];
            return '<button type="button" onclick="NOTEBOOKS_APP.cycleMoodDay(' + pIdx + ', ' + mi + ')" title="Jour ' + (mi + 1) + '" ' +
              'style="width:28px;height:28px;border-radius:50%;border:2px solid var(--nb-border);background:' + mm.bg + ';cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.78rem;">' +
              (mm.label || (mi < 31 ? '<span style="font-size:0.62rem;color:var(--nb-muted);">' + (mi + 1) + '</span>' : '')) +
            '</button>';
          }).join('') +
        '</div>' +
        '<div class="nb-pg-box" style="flex:1;"><span class="nb-pg-box-label">Notes sur mon humeur</span>' +
          fieldArea('nb-pg-plain-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'font-size:0.78rem;') +
        '</div>';
    }

    // 16. Reading Journal
    if (lid === '16-reading-journal') {
      var rating = f.bookRating || 0;
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Reading Journal</h3>' + iconHtml + '</div>' +
        '<div style="display:grid;gap:6px;margin-bottom:8px;">' +
          '<div style="display:flex;align-items:center;gap:6px;"><span class="nb-pg-box-label" style="margin:0;min-width:60px;">Titre :</span>' + fieldLine('bookTitle', f.bookTitle, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'bookTitle\', this.value)"', '') + '</div>' +
          '<div style="display:flex;align-items:center;gap:6px;"><span class="nb-pg-box-label" style="margin:0;min-width:60px;">Auteur :</span>' + fieldLine('bookAuthor', f.bookAuthor, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'bookAuthor\', this.value)"', '') + '</div>' +
          '<div style="display:flex;align-items:center;gap:6px;"><span class="nb-pg-box-label" style="margin:0;min-width:60px;">Note :</span>' +
            [1, 2, 3, 4, 5].map(function (star) {
              return '<button type="button" onclick="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'bookRating\', ' + star + ')" style="border:none;background:transparent;cursor:pointer;font-size:1.15rem;color:' + (star <= rating ? 'var(--nb-accent)' : '#cbd5e1') + ';">★</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="nb-pg-box-label">Citations &amp; Résumé</div>' +
        fieldArea('nb-pg-lined-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
        footerHtml;
    }

    // 17. Daily Reflection
    if (lid === '17-daily-reflection') {
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Daily Reflection</h3>' + iconHtml + '</div>' +
        '<div class="nb-pg-box-label" style="margin-bottom:4px;">Ce qui s’est bien passé aujourd’hui :</div>' +
        fieldArea('nb-pg-lined-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', 'flex:0.85;') +
        '<div class="nb-pg-box-label" style="margin:10px 0 4px;">Ce que je peux améliorer demain :</div>' +
        fieldArea('nb-pg-lined-area', f.notesSecondary, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesSecondary\', this.value)"', 'flex:0.85;') +
        footerHtml;
    }

    // 18. Scrapbook Memories
    if (lid === '18-scrapbook') {
      return '<div class="nb-pg-header"><h3 class="nb-pg-title">Scrapbook</h3>' + iconHtml + '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;flex:1;align-items:start;margin-top:8px;">' +
          '<div class="nb-polaroid">' +
            '<div class="nb-polaroid-tape"></div>' +
            '<div class="nb-polaroid-img-slot" onclick="' + (isMini ? '' : 'document.getElementById(\'nbScrapImgInput\').click()') + '">' +
              (f.scrapbookImage ? '<img src="' + esc(f.scrapbookImage) + '" alt="Souvenir">' : '<span style="font-size:0.75rem;color:var(--nb-muted);text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;gap:6px;">' + ico('image', 18) + '<span>Cliquer pour ajouter une photo</span></span>') +
            '</div>' +
            (isMini ? '' : '<input id="nbScrapImgInput" type="file" accept="image/*" style="display:none;" onchange="NOTEBOOKS_APP.handleScrapbookPhoto(event, ' + pIdx + ')">') +
            fieldLine('scrapbookCaption', f.scrapbookCaption, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'scrapbookCaption\', this.value)"', 'text-align:center;margin-top:6px;font-size:0.76rem;border:none;') +
          '</div>' +
          '<div class="nb-pg-box" style="height:82%;"><span class="nb-pg-box-label">Souvenirs &amp; Notes</span>' +
            fieldArea('nb-pg-plain-area', f.notesText, 'Racontez ce moment...', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') +
          '</div>' +
        '</div>' + footerHtml;
    }

    return '<div class="nb-pg-header"><h3 class="nb-pg-title">' + esc(page.title) + '</h3>' + iconHtml + '</div>' +
      fieldArea('nb-pg-lined-area', f.notesText, '', 'oninput="NOTEBOOKS_APP.updatePageField(' + pIdx + ', \'notesText\', this.value)"', '') + footerHtml;
  }

  // ── RENDU DES ÉLÉMENTS FLOTTANTS (DRAG/RESIZE/ROTATE) ─────────────────
  function renderFloatingElementsHTML(elements, isThumb) {
    if (!elements || !elements.length) return '';
    return elements.map(function (el) {
      var isSel = (!isThumb && state.selectedElementId === el.id);
      var style = 'left:' + el.x + '%;top:' + el.y + '%;' +
        'transform:translate(-50%,-50%) rotate(' + (el.rotation || 0) + 'deg);' +
        'opacity:' + (el.opacity != null ? el.opacity : 1) + ';';

      var inner = '';
      if (el.type === 'text') {
        inner = '<div style="font-family:' + esc(el.fontFamily || 'inherit') + ';font-size:' + (el.fontSize || 16) + 'px;' +
          'color:' + esc(el.color || '#1e293b') + ';font-weight:' + (el.bold ? '700' : '400') + ';font-style:' + (el.italic ? 'italic' : 'normal') + ';' +
          'text-align:' + esc(el.align || 'left') + ';min-width:60px;max-width:' + (el.width || 180) + 'px;padding:3px 6px;white-space:pre-wrap;">' +
          esc(el.text || 'Texte') +
        '</div>';
      } else if (el.type === 'sticker') {
        var def = NOTEBOOKS_DATA.getElementById(el.stickerId);
        var w = el.width || 56;
        inner = '<div style="width:' + w + 'px;color:' + esc(el.color || '#4F46E5') + ';display:flex;align-items:center;justify-content:center;">' +
          (def ? def.svg : '★') +
        '</div>';
      } else if (el.type === 'image') {
        var iw = el.width || 110;
        inner = '<img src="' + esc(el.dataUrl) + '" style="width:' + iw + 'px;height:auto;border-radius:6px;display:block;pointer-events:none;" alt="">';
      }

      return '<div class="nb-el-box ' + (isSel ? 'selected' : '') + '" ' +
        (isThumb ? '' : 'data-drag-id="' + esc(el.id) + '" onclick="event.stopPropagation();NOTEBOOKS_APP.selectElement(\'' + esc(el.id) + '\')" ') +
        'style="' + style + '">' +
        (isThumb ? '' : '<button type="button" aria-label="Supprimer élément" class="nb-el-delete-dot" onclick="event.stopPropagation();NOTEBOOKS_APP.deleteElement(\'' + esc(el.id) + '\')">×</button>' +
          '<span class="nb-el-resize-dot nb-edit-only" data-resize-id="' + esc(el.id) + '" title="Redimensionner"></span>') +
        inner +
      '</div>';
    }).join('');
  }

  // ── DRAG & DROP, RESIZE & GESTES TACTILES ─────────────────────────────
  function bindEditorDragEvents() {
    var frame = document.getElementById('nbBookFrame');
    if (!frame) return;

    // Swipe tactile gauche/droite pour tourner les pages en Mode Lecture
    var swipeStartX = null;
    frame.ontouchstart = function (e) {
      if (!state.readingMode || !e.touches || e.touches.length !== 1) return;
      swipeStartX = e.touches[0].clientX;
    };
    frame.ontouchend = function (e) {
      if (!state.readingMode || swipeStartX === null || !e.changedTouches || !e.changedTouches.length) return;
      var dx = e.changedTouches[0].clientX - swipeStartX;
      swipeStartX = null;
      if (Math.abs(dx) > 48) {
        if (dx < 0) NOTEBOOKS_APP.nextPage();
        else NOTEBOOKS_APP.prevPage();
      }
    };

    if (state.readingMode) return;

    // Poignée de redimensionnement directe sur le canevas
    frame.querySelectorAll('[data-resize-id]').forEach(function (handle) {
      handle.onpointerdown = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var id = handle.getAttribute('data-resize-id');
        var obj = getDraggableObjectById(id);
        if (!obj) return;
        var startX = ev.clientX;
        var origW = obj.width || 64;
        var origFs = obj.fontSize || 16;
        var resized = false;
        pushHistory();

        function onResizeMove(mv) {
          var dx = mv.clientX - startX;
          resized = true;
          if (obj.type === 'text') {
            obj.fontSize = Math.max(10, Math.min(44, Math.round(origFs + dx / 6)));
            obj.width = Math.max(60, Math.min(340, Math.round(origW + dx)));
            var innerDiv = handle.parentElement.querySelector('div');
            if (innerDiv) {
              innerDiv.style.fontSize = obj.fontSize + 'px';
              innerDiv.style.maxWidth = obj.width + 'px';
            }
          } else {
            obj.width = Math.max(24, Math.min(340, Math.round(origW + dx)));
            var targetChild = handle.parentElement.querySelector('div, img');
            if (targetChild) targetChild.style.width = obj.width + 'px';
          }
        }
        function onResizeUp() {
          window.removeEventListener('pointermove', onResizeMove);
          window.removeEventListener('pointerup', onResizeUp);
          if (resized) {
            scheduleSave();
            var insp = document.querySelector('.nb-right-inspector');
            if (insp) insp.innerHTML = renderRightInspectorHTML();
          }
        }
        window.addEventListener('pointermove', onResizeMove);
        window.addEventListener('pointerup', onResizeUp);
      };
    });

    var els = frame.querySelectorAll('[data-drag-id]');
    els.forEach(function (node) {
      node.onpointerdown = function (ev) {
        if (ev.target.classList.contains('nb-el-delete-dot') || ev.target.classList.contains('nb-el-resize-dot')) return;
        var dragId = node.getAttribute('data-drag-id');
        if (!dragId) return;
        ev.stopPropagation();
        var rect = frame.getBoundingClientRect();
        var startX = ev.clientX;
        var startY = ev.clientY;
        var moved = false;

        var obj = getDraggableObjectById(dragId);
        if (!obj) return;
        var origX = obj.x;
        var origY = obj.y;

        if (state.selectedElementId !== dragId) {
          state.selectedElementId = dragId;
          // Refresh right inspector without interrupting drag
          var insp = document.querySelector('.nb-right-inspector');
          if (insp) insp.innerHTML = renderRightInspectorHTML();
          frame.querySelectorAll('.nb-el-box').forEach(function (b) { b.classList.remove('selected'); });
          node.classList.add('selected');
        }

        function onMove(mv) {
          var dx = mv.clientX - startX;
          var dy = mv.clientY - startY;
          if (!moved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
            pushHistory();
            moved = true;
          }
          if (!moved) return;
          var nx = Math.max(4, Math.min(96, origX + (dx / rect.width) * 100));
          var ny = Math.max(4, Math.min(96, origY + (dy / rect.height) * 100));
          obj.x = Math.round(nx * 10) / 10;
          obj.y = Math.round(ny * 10) / 10;
          node.style.left = obj.x + '%';
          node.style.top = obj.y + '%';
        }

        function onUp() {
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
          if (moved) {
            scheduleSave();
            var insp = document.querySelector('.nb-right-inspector');
            if (insp) insp.innerHTML = renderRightInspectorHTML();
          }
        }

        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      };
    });
  }

  function getDraggableObjectById(id) {
    var nb = state.activeNotebook;
    if (!nb) return null;
    if (id === 'coverTitle') return nb.coverConfig.titleStyle;
    if (id === 'coverName') return nb.coverConfig.nameStyle;
    if (state.activePageIndex < 0) {
      return (nb.coverConfig.elements || []).find(function (e) { return e.id === id; }) || null;
    }
    var pg = nb.pages[state.activePageIndex];
    return pg ? ((pg.elements || []).find(function (e) { return e.id === id; }) || null) : null;
  }

  // ── 5. EXPORT PDF HAUTE FIDÉLITÉ (COUVERTURE + TOUTES LES PAGES) ──────
  function openPdfExportModal() {
    var nb = state.activeNotebook;
    if (!nb) return;

    var printRoot = document.getElementById('nbPrintContainer');
    if (!printRoot) {
      printRoot = document.createElement('div');
      printRoot.id = 'nbPrintContainer';
      printRoot.style.display = 'none';
      document.body.appendChild(printRoot);
    }

    var pagesHtml = '<div class="nb-print-page"><div class="nb-cover-surface">' + renderCoverArtworkHTML(nb, false) + '</div></div>' +
      nb.pages.map(function (p, i) {
        return '<div class="nb-print-page">' + renderPageSurfaceHTML(nb, p, i, true) + '</div>';
      }).join('');

    printRoot.innerHTML = pagesHtml;

    var modal = document.createElement('div');
    modal.id = 'nbPdfModal';
    modal.className = 'nb-modal-backdrop';
    modal.innerHTML = '<div class="nb-modal-card">' +
      '<div class="nb-modal-head">' +
        '<strong style="font-size:1.02rem;">' + ico('file-text', 16) + ' Export PDF du cahier — ' + esc(nb.title) + '</strong>' +
        '<button type="button" class="nb-btn nb-btn-sm" onclick="document.getElementById(\'nbPdfModal\').remove()">' + ico('x', 15) + '</button>' +
      '</div>' +
      '<div class="nb-modal-body">' +
        '<p style="font-size:0.86rem;color:var(--text-secondary);margin-top:0;">Votre cahier complet (' + (nb.pages.length + 1) + ' pages A4 : couverture personnalisée avec votre nom + toutes les pages, tâches et décorations) est prêt à être enregistré en PDF.</p>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;">' +
          '<button type="button" class="nb-btn nb-btn-primary" onclick="NOTEBOOKS_APP.triggerPrintPdf()">' + ico('printer', 15) + ' Enregistrer en PDF / Imprimer</button>' +
          '<button type="button" class="nb-btn" onclick="NOTEBOOKS_APP.exportBackup()">' + ico('download', 15) + ' Télécharger sauvegarde JSON</button>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(150px, 1fr));gap:12px;">' +
          '<div class="nb-book-frame is-thumb-card" style="max-width:170px;"><div class="nb-cover-surface">' + renderCoverArtworkHTML(nb, true) + '</div></div>' +
          nb.pages.map(function (p, i) {
            return '<div class="nb-book-frame is-thumb-card" style="max-width:170px;">' + renderPageSurfaceHTML(nb, p, i, 'thumb') + '</div>';
          }).join('') +
        '</div>' +
      '</div>' +
    '</div>';
    document.body.appendChild(modal);
  }

  function triggerPrintPdf() {
    var nb = state.activeNotebook;
    if (!nb) return;
    var modal = document.getElementById('nbPdfModal');
    if (modal) modal.remove();

    var printRoot = document.getElementById('nbPrintContainer');
    var pagesHtml = printRoot ? printRoot.innerHTML : (
      '<div class="nb-print-page"><div class="nb-cover-surface">' + renderCoverArtworkHTML(nb, false) + '</div></div>' +
      nb.pages.map(function (p, i) { return '<div class="nb-print-page">' + renderPageSurfaceHTML(nb, p, i, true) + '</div>'; }).join('')
    );

    var oldIframe = document.getElementById('nbPdfPrintIframe');
    if (oldIframe) oldIframe.remove();

    var iframe = document.createElement('iframe');
    iframe.id = 'nbPdfPrintIframe';
    iframe.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;';
    document.body.appendChild(iframe);

    var doc = iframe.contentWindow.document;
    var baseHref = window.location.href.split('#')[0].replace(/\/[^\/]*$/, '/');
    var fontLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .filter(function (l) { return l.href.indexOf('fonts.googleapis.com') !== -1 || l.href.indexOf('notebooks.css') !== -1; })
      .map(function (l) { return '<link rel="stylesheet" href="' + esc(l.href) + '">'; })
      .join('\n');

    doc.open();
    doc.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">' +
      '<base href="' + esc(baseHref) + '">' +
      '<title>' + esc(nb.title) + ' — Export PDF</title>' +
      fontLinks +
      '<style>' +
        '@page { size: A4 portrait; margin: 0; }' +
        'html, body { margin: 0; padding: 0; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' +
        '.nb-print-page { width: 210mm; height: 297mm; page-break-after: always; break-after: page; overflow: hidden; position: relative; box-sizing: border-box; }' +
        '.nb-print-page:last-child { page-break-after: auto; break-after: auto; }' +
        '.nb-print-page .nb-cover-surface, .nb-print-page .nb-page-surface { width: 100%; height: 100%; border-radius: 0; box-shadow: none; }' +
        '.nb-task-check, .nb-habit-dot { display: inline-flex !important; }' +
        '.nb-edit-only { display: none !important; }' +
      '</style></head><body>' + pagesHtml + '</body></html>');
    doc.close();

    var printed = false;
    var doPrint = function () {
      if (printed) return;
      printed = true;
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch (e) {
        window.print();
      }
      setTimeout(function () { if (iframe && iframe.parentNode) iframe.remove(); }, 2500);
    };

    iframe.onload = function () { setTimeout(doPrint, 280); };
    setTimeout(doPrint, 900);
  }

  function compressImageDataUrl(dataUrl, maxDim, callback) {
    if (!dataUrl || dataUrl.length < 180000) return callback(dataUrl);
    var img = new Image();
    img.onload = function () {
      var w = img.width;
      var h = img.height;
      if (w <= maxDim && h <= maxDim) return callback(dataUrl);
      var ratio = Math.min(maxDim / w, maxDim / h);
      var cw = Math.round(w * ratio);
      var ch = Math.round(h * ratio);
      var canvas = document.createElement('canvas');
      canvas.width = cw;
      canvas.height = ch;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, cw, ch);
      try {
        callback(canvas.toDataURL('image/jpeg', 0.85));
      } catch (e) {
        callback(dataUrl);
      }
    };
    img.onerror = function () { callback(dataUrl); };
    img.src = dataUrl;
  }

  // ── ACTIONS PUBLIQUES ─────────────────────────────────────────────────
  function showAuthError(msg) {
    var box = document.getElementById('nbAuthError');
    if (!box) return;
    box.textContent = msg;
    box.style.display = 'block';
  }

  return {
    init: init,
    render: render,

    setAuthTab: function (tab) { state.authTab = tab; render(); },
    syncRegUsername: function (val) {
      var uInput = document.getElementById('nbRegUser');
      if (uInput && !uInput.dataset.touched) {
        uInput.value = NOTEBOOKS_STORE.normalizeUsername(val);
      }
    },
    prefillLogin: function (username) {
      state.authTab = 'login';
      render();
      var el = document.getElementById('nbLoginUser');
      if (el) el.value = username;
      var pw = document.getElementById('nbLoginPass');
      if (pw) pw.focus();
    },
    submitRegister: async function (ev) {
      ev.preventDefault();
      try {
        var name = document.getElementById('nbRegName').value;
        var user = document.getElementById('nbRegUser').value;
        var pass = document.getElementById('nbRegPass').value;
        var pass2 = document.getElementById('nbRegPass2').value;
        state.session = await NOTEBOOKS_STORE.registerUser(name, user, pass, pass2);
        state.knownUsers = await NOTEBOOKS_STORE.listLocalUsers();
        await loadUserWorkspace();
        state.wizard = null;
        state.subView = 'wizard'; // Expérience guidée immédiate après inscription !
        render();
      } catch (err) {
        showAuthError(err.message);
      }
    },
    submitLogin: async function (ev) {
      ev.preventDefault();
      try {
        var user = document.getElementById('nbLoginUser').value;
        var pass = document.getElementById('nbLoginPass').value;
        state.session = await NOTEBOOKS_STORE.loginUser(user, pass);
        state.knownUsers = await NOTEBOOKS_STORE.listLocalUsers();
        await loadUserWorkspace();
        state.subView = 'dashboard';
        render();
      } catch (err) {
        showAuthError(err.message);
      }
    },
    logout: function () {
      NOTEBOOKS_STORE.logout();
      state.session = null;
      state.activeNotebook = null;
      state.notebooks = [];
      state.subView = 'auth';
      state.authTab = 'login';
      render();
    },
    switchAccount: function () {
      NOTEBOOKS_STORE.logout();
      state.session = null;
      state.activeNotebook = null;
      state.subView = 'auth';
      state.authTab = 'login';
      render();
    },

    openWizard: function () {
      state.wizard = null;
      ensureWizardState();
      state.subView = 'wizard';
      render();
    },
    backToDashboard: async function () {
      state.activeNotebook = null;
      state.selectedElementId = null;
      await loadUserWorkspace();
      state.subView = 'dashboard';
      render();
    },
    updateWizardField: function (k, v) {
      ensureWizardState();
      state.wizard[k] = v;
      render();
    },
    updateWizardTextField: function (k, v) {
      ensureWizardState();
      state.wizard[k] = v;
      var previewBox = document.getElementById('nbWizardLivePreview');
      if (previewBox) {
        var cover = NOTEBOOKS_DATA.getCoverById(state.wizard.coverId);
        var previewNb = buildNotebookFromOptions(state.wizard);
        var frames = previewBox.querySelectorAll('.nb-book-frame');
        if (frames[0]) frames[0].innerHTML = '<div class="nb-cover-surface">' + renderCoverArtworkHTML(previewNb, 'wizard') + '</div>';
        if (frames[1]) frames[1].innerHTML = renderPageSurfaceHTML(previewNb, previewNb.pages[0], 0, 'thumb');
      }
    },
    setFontById: function (prop, fontId) {
      var font = NOTEBOOKS_DATA.FONTS.find(function (f) { return f.id === fontId; });
      if (!font) return;
      this.setPageOrThemeStyle(prop, font.css, true);
    },
    updateWizardFont: function (css) {
      ensureWizardState();
      state.wizard.fontHeading = css;
      state.wizard.fontBody = css;
      state.wizard.coverFont = css;
      render();
    },
    selectWizardCover: function (coverId) {
      ensureWizardState();
      var cover = NOTEBOOKS_DATA.getCoverById(coverId);
      state.wizard.coverId = cover.id;
      state.wizard.paperBg = cover.theme.paperBg;
      state.wizard.accent = cover.theme.accent;
      state.wizard.fontHeading = cover.theme.fontHeading;
      state.wizard.fontBody = cover.theme.fontBody;
      state.wizard.coverFont = cover.theme.coverTitleDefaults.fontFamily;
      state.wizard.pattern = cover.theme.pattern;
      render();
    },
    addWizardCoverSticker: function (stickerId) {
      ensureWizardState();
      state.wizard.coverElements.push({
        id: uid('el'), type: 'sticker', stickerId: stickerId,
        x: 20 + Math.round(Math.random() * 60), y: 20 + Math.round(Math.random() * 55),
        width: 48, rotation: 0, opacity: 0.95, color: state.wizard.accent
      });
      render();
    },
    clearWizardCoverStickers: function () {
      ensureWizardState();
      state.wizard.coverElements = [];
      render();
    },
    createFromWizard: async function () {
      ensureWizardState();
      var nb = buildNotebookFromOptions(state.wizard);
      await NOTEBOOKS_STORE.saveNotebook(nb, state.session.username);
      await loadUserWorkspace();
      state.activeNotebook = nb;
      state.activePageIndex = -1; // Ouvre sur la couverture personnalisée pour effet waouh !
      state.coverFace = 'front';
      state.undoStack = [];
      state.redoStack = [];
      state.subView = 'editor';
      render();
    },

    openNotebook: async function (id, startCustomize) {
      var nb = await NOTEBOOKS_STORE.getNotebook(id, state.session.username);
      if (!nb) return;
      state.activeNotebook = nb;
      state.activePageIndex = startCustomize ? -1 : 0;
      state.coverFace = 'front';
      state.selectedElementId = null;
      state.readingMode = false;
      state.undoStack = [];
      state.redoStack = [];
      state.saveStatus = 'saved';
      state.subView = 'editor';
      render();
    },
    duplicateNotebook: async function (id) {
      var orig = await NOTEBOOKS_STORE.getNotebook(id, state.session.username);
      if (!orig) return;
      var copy = JSON.parse(JSON.stringify(orig));
      copy.id = uid('nb');
      copy.title = orig.title + ' (Copie)';
      copy.createdAt = Date.now();
      await NOTEBOOKS_STORE.saveNotebook(copy, state.session.username);
      await loadUserWorkspace();
      render();
    },
    deleteNotebook: async function (id) {
      if (!confirm('Voulez-vous vraiment supprimer ce cahier ? Cette action est irréversible.')) return;
      await NOTEBOOKS_STORE.deleteNotebook(id, state.session.username);
      await loadUserWorkspace();
      render();
    },

    undo: undo,
    redo: redo,
    renameNotebook: function (val) {
      if (!state.activeNotebook) return;
      pushHistory();
      state.activeNotebook.title = val.trim() || 'Sans titre';
      scheduleSave();
      render();
    },
    toggleReadingMode: function () {
      state.readingMode = !state.readingMode;
      state.selectedElementId = null;
      render();
    },
    toggleOverview: function () {
      state.showOverview = !state.showOverview;
      render();
    },
    setLeftTab: function (tab) {
      state.leftTab = tab;
      var panel = document.querySelector('.nb-left-panel');
      var rail = document.querySelector('.nb-tool-rail');
      if (panel && rail) {
        render();
      } else {
        render();
      }
    },
    goToPage: function (idx) {
      if (!state.activeNotebook) return;
      state.turnAnim = (idx > state.activePageIndex) ? 'nb-turn-next' : 'nb-turn-prev';
      state.activePageIndex = Math.max(-1, Math.min(idx, state.activeNotebook.pages.length - 1));
      state.selectedElementId = null;
      render();
      setTimeout(function () { state.turnAnim = ''; }, 360);
    },
    prevPage: function () { this.goToPage(state.activePageIndex - 1); },
    nextPage: function () { this.goToPage(state.activePageIndex + 1); },
    toggleCoverFace: function () {
      state.coverFace = (state.coverFace === 'front') ? 'back' : 'front';
      render();
    },

    setAutoApplyTheme: function (val) {
      state.autoApplyTheme = !!val;
    },
    changeCover: function (coverId) {
      if (!state.activeNotebook) return;
      pushHistory();
      var newCover = NOTEBOOKS_DATA.getCoverById(coverId);
      state.activeNotebook.coverId = newCover.id;
      if (state.autoApplyTheme) {
        state.activeNotebook.themeConfig = NOTEBOOKS_DATA.cloneTheme(newCover.theme);
        state.activeNotebook.coverConfig.titleStyle = NOTEBOOKS_DATA.cloneTheme(newCover.theme.coverTitleDefaults);
        state.activeNotebook.coverConfig.nameStyle = NOTEBOOKS_DATA.cloneTheme(newCover.theme.coverNameDefaults);
        state.activeNotebook.pages.forEach(function (p) { p.styleOverride = null; });
      }
      scheduleSave();
      render();
    },
    reapplyCoverTheme: function () {
      if (!state.activeNotebook) return;
      pushHistory();
      var cov = NOTEBOOKS_DATA.getCoverById(state.activeNotebook.coverId);
      state.activeNotebook.themeConfig = NOTEBOOKS_DATA.cloneTheme(cov.theme);
      state.activeNotebook.pages.forEach(function (p) { p.styleOverride = null; });
      scheduleSave();
      render();
    },
    resetPageStyleOverride: function () {
      if (!state.activeNotebook || state.activePageIndex < 0) return;
      pushHistory();
      state.activeNotebook.pages[state.activePageIndex].styleOverride = null;
      scheduleSave();
      render();
    },
    setPageOrThemeStyle: function (prop, value, applyGlobally) {
      if (!state.activeNotebook) return;
      pushHistory();
      if (state.activePageIndex < 0 || applyGlobally) {
        state.activeNotebook.themeConfig[prop] = value;
      } else {
        var pg = state.activeNotebook.pages[state.activePageIndex];
        if (!pg.styleOverride) pg.styleOverride = {};
        pg.styleOverride[prop] = value;
      }
      scheduleSave();
      render();
    },

    applyOrAddLayout: function (layoutId, asNewPage) {
      if (!state.activeNotebook) return;
      pushHistory();
      if (asNewPage || state.activePageIndex < 0) {
        var newPg = NOTEBOOKS_DATA.createDefaultPageData(layoutId);
        state.activeNotebook.pages.push(newPg);
        state.activePageIndex = state.activeNotebook.pages.length - 1;
      } else {
        var pg = state.activeNotebook.pages[state.activePageIndex];
        pg.layoutId = layoutId;
        if ((layoutId === '05-to-do-checklist' || layoutId === '10-project-planner' || layoutId === '13-goals-planner') && (!pg.tasks || pg.tasks.length === 0)) {
          pg.tasks = [{ id: uid('tk'), text: 'Nouvelle tâche', desc: '', category: '', priority: 'medium', deadline: '', done: false }];
        }
      }
      scheduleSave();
      render();
    },
    addPresetPage: function (layoutId, title) {
      if (!state.activeNotebook) return;
      pushHistory();
      var pg = NOTEBOOKS_DATA.createDefaultPageData(layoutId, title);
      state.activeNotebook.pages.push(pg);
      state.activePageIndex = state.activeNotebook.pages.length - 1;
      scheduleSave();
      render();
    },
    addPage: function () {
      if (!state.activeNotebook) return;
      pushHistory();
      var curLay = (state.activePageIndex >= 0 && state.activeNotebook.pages[state.activePageIndex])
        ? state.activeNotebook.pages[state.activePageIndex].layoutId : '01-classic-lined';
      var pg = NOTEBOOKS_DATA.createDefaultPageData(curLay);
      state.activeNotebook.pages.push(pg);
      state.activePageIndex = state.activeNotebook.pages.length - 1;
      scheduleSave();
      render();
    },
    duplicateCurrentPage: function () {
      if (!state.activeNotebook || state.activePageIndex < 0) return;
      pushHistory();
      var clone = JSON.parse(JSON.stringify(state.activeNotebook.pages[state.activePageIndex]));
      clone.id = uid('pg');
      clone.title += ' (Copie)';
      state.activeNotebook.pages.splice(state.activePageIndex + 1, 0, clone);
      state.activePageIndex++;
      scheduleSave();
      render();
    },
    moveCurrentPage: function (dir) {
      if (!state.activeNotebook || state.activePageIndex < 0) return;
      var target = state.activePageIndex + dir;
      if (target < 0 || target >= state.activeNotebook.pages.length) return;
      pushHistory();
      var arr = state.activeNotebook.pages;
      var tmp = arr[state.activePageIndex];
      arr[state.activePageIndex] = arr[target];
      arr[target] = tmp;
      state.activePageIndex = target;
      scheduleSave();
      render();
    },
    deleteCurrentPage: function () {
      if (!state.activeNotebook || state.activePageIndex < 0 || state.activeNotebook.pages.length <= 1) return;
      pushHistory();
      state.activeNotebook.pages.splice(state.activePageIndex, 1);
      state.activePageIndex = Math.min(state.activePageIndex, state.activeNotebook.pages.length - 1);
      state.selectedElementId = null;
      scheduleSave();
      render();
    },
    renameCurrentPage: function (val) {
      if (!state.activeNotebook || state.activePageIndex < 0) return;
      state.activeNotebook.pages[state.activePageIndex].title = val;
      scheduleSave();
    },

    // Édition de champs de page sans re-render destructeur de focus
    updatePageField: function (pageIdx, key, val) {
      if (!state.activeNotebook || pageIdx < 0) return;
      state.activeNotebook.pages[pageIdx].fields[key] = val;
      scheduleSave();
      if (key === 'bookRating') render();
    },
    updateArrayField: function (pageIdx, arrKey, idx, val) {
      if (!state.activeNotebook || pageIdx < 0) return;
      if (!Array.isArray(state.activeNotebook.pages[pageIdx].fields[arrKey])) {
        state.activeNotebook.pages[pageIdx].fields[arrKey] = [];
      }
      state.activeNotebook.pages[pageIdx].fields[arrKey][idx] = val;
      scheduleSave();
    },
    updateWeekDay: function (pageIdx, day, val) {
      if (!state.activeNotebook || pageIdx < 0) return;
      state.activeNotebook.pages[pageIdx].fields.weeklyDays[day] = val;
      scheduleSave();
    },
    toggleScheduleDone: function (pageIdx, slotIdx) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      var s = state.activeNotebook.pages[pageIdx].fields.schedule[slotIdx];
      s.done = !s.done;
      scheduleSave();
      render();
    },
    updateScheduleText: function (pageIdx, slotIdx, val) {
      if (!state.activeNotebook || pageIdx < 0) return;
      state.activeNotebook.pages[pageIdx].fields.schedule[slotIdx].text = val;
      scheduleSave();
    },
    addTask: function (pageIdx) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      state.activeNotebook.pages[pageIdx].tasks.push({
        id: uid('tk'), text: '', desc: '', category: '', priority: 'medium', deadline: '', done: false
      });
      scheduleSave();
      render();
    },
    toggleTask: function (pageIdx, taskId) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      var t = state.activeNotebook.pages[pageIdx].tasks.find(function (x) { return x.id === taskId; });
      if (t) t.done = !t.done;
      scheduleSave();
      render();
    },
    updateTaskField: function (pageIdx, taskId, key, val) {
      if (!state.activeNotebook || pageIdx < 0) return;
      var t = state.activeNotebook.pages[pageIdx].tasks.find(function (x) { return x.id === taskId; });
      if (t) t[key] = val;
      scheduleSave();
    },
    cycleTaskPriority: function (pageIdx, taskId) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      var order = ['low', 'medium', 'high'];
      var t = state.activeNotebook.pages[pageIdx].tasks.find(function (x) { return x.id === taskId; });
      if (t) t.priority = order[(order.indexOf(t.priority || 'medium') + 1) % 3];
      scheduleSave();
      render();
    },
    deleteTask: function (pageIdx, taskId) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      state.activeNotebook.pages[pageIdx].tasks = state.activeNotebook.pages[pageIdx].tasks.filter(function (x) { return x.id !== taskId; });
      scheduleSave();
      render();
    },
    addHabit: function (pageIdx) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      state.activeNotebook.pages[pageIdx].fields.habits.push({
        id: uid('hb'), name: 'Nouvelle habitude', days: [false, false, false, false, false, false, false]
      });
      scheduleSave();
      render();
    },
    updateHabitName: function (pageIdx, hi, val) {
      if (!state.activeNotebook || pageIdx < 0) return;
      state.activeNotebook.pages[pageIdx].fields.habits[hi].name = val;
      scheduleSave();
    },
    toggleHabitDay: function (pageIdx, hi, di) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      var hb = state.activeNotebook.pages[pageIdx].fields.habits[hi];
      hb.days[di] = !hb.days[di];
      scheduleSave();
      render();
    },
    deleteHabit: function (pageIdx, hi) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      state.activeNotebook.pages[pageIdx].fields.habits.splice(hi, 1);
      scheduleSave();
      render();
    },
    cycleMoodDay: function (pageIdx, mi) {
      if (!state.activeNotebook || pageIdx < 0) return;
      pushHistory();
      var seq = ['', 'happy', 'calm', 'neutral', 'tired', 'stressed'];
      var cur = state.activeNotebook.pages[pageIdx].fields.moods[mi] || '';
      state.activeNotebook.pages[pageIdx].fields.moods[mi] = seq[(seq.indexOf(cur) + 1) % seq.length];
      scheduleSave();
      render();
    },

    // Éléments flottants & Couverture
    onSurfaceClick: function (ev) {
      if (ev.target.closest('[data-drag-id]') || ev.target.closest('input, textarea, button, select')) return;
      if (state.selectedElementId !== null) {
        state.selectedElementId = null;
        var insp = document.querySelector('.nb-right-inspector');
        if (insp) insp.innerHTML = renderRightInspectorHTML();
        var frame = document.getElementById('nbBookFrame');
        if (frame) frame.querySelectorAll('.nb-el-box').forEach(function (b) { b.classList.remove('selected'); });
      }
    },
    selectElement: function (id) {
      if (state.readingMode) return;
      state.selectedElementId = id;
      render();
    },
    updateCoverText: function (which, val) {
      if (!state.activeNotebook) return;
      if (which === 'coverTitle') state.activeNotebook.title = val;
      else state.activeNotebook.ownerDisplayName = val;
      scheduleSave();
      var frame = document.getElementById('nbBookFrame');
      if (frame) {
        var box = frame.querySelector('[data-drag-id="' + which + '"]');
        if (box) box.textContent = val;
      }
    },
    updateCoverOverlayProp: function (which, prop, val) {
      if (!state.activeNotebook) return;
      pushHistory();
      var target = (which === 'coverTitle') ? state.activeNotebook.coverConfig.titleStyle : state.activeNotebook.coverConfig.nameStyle;
      target[prop] = val;
      scheduleSave();
      render();
    },
    addTextElement: function () {
      if (!state.activeNotebook) return;
      pushHistory();
      var el = {
        id: uid('txt'), type: 'text', text: 'Mon texte libre',
        x: 50, y: 35, width: 180, fontSize: 18,
        color: state.activeNotebook.themeConfig.headingColor,
        fontFamily: state.activeNotebook.themeConfig.fontHeading,
        bold: true, italic: false, align: 'center', rotation: 0, opacity: 1
      };
      var list = (state.activePageIndex < 0) ? state.activeNotebook.coverConfig.elements : state.activeNotebook.pages[state.activePageIndex].elements;
      list.push(el);
      state.selectedElementId = el.id;
      scheduleSave();
      render();
    },
    addStickerElement: function (stickerId) {
      if (!state.activeNotebook) return;
      pushHistory();
      var el = {
        id: uid('stk'), type: 'sticker', stickerId: stickerId,
        x: 50, y: 40, width: 58, color: state.activeNotebook.themeConfig.accent,
        rotation: 0, opacity: 1
      };
      var list = (state.activePageIndex < 0) ? state.activeNotebook.coverConfig.elements : state.activeNotebook.pages[state.activePageIndex].elements;
      list.push(el);
      state.selectedElementId = el.id;
      scheduleSave();
      render();
    },
    addUploadedImageElement: function (uploadId) {
      if (!state.activeNotebook) return;
      var up = state.uploads.find(function (u) { return u.id === uploadId; });
      if (!up) return;
      pushHistory();
      var el = {
        id: uid('img'), type: 'image', dataUrl: up.dataUrl,
        x: 50, y: 45, width: 130, rotation: 0, opacity: 1
      };
      var list = (state.activePageIndex < 0) ? state.activeNotebook.coverConfig.elements : state.activeNotebook.pages[state.activePageIndex].elements;
      list.push(el);
      state.selectedElementId = el.id;
      scheduleSave();
      render();
    },
    setUploadedAsBg: function (uploadId) {
      if (!state.activeNotebook || state.activePageIndex < 0) return;
      var up = state.uploads.find(function (u) { return u.id === uploadId; });
      if (!up) return;
      this.setPageOrThemeStyle('bgImage', up.dataUrl, false);
    },
    updateElementProp: function (id, prop, val) {
      var obj = getDraggableObjectById(id);
      if (!obj) return;
      obj[prop] = val;
      scheduleSave();
      if (prop === 'text') {
        var box = document.querySelector('[data-drag-id="' + id + '"] > div');
        if (box) box.textContent = val;
      } else {
        render();
      }
    },
    duplicateElement: function (id) {
      if (!state.activeNotebook) return;
      var list = (state.activePageIndex < 0) ? state.activeNotebook.coverConfig.elements : state.activeNotebook.pages[state.activePageIndex].elements;
      var orig = list.find(function (e) { return e.id === id; });
      if (!orig) return;
      pushHistory();
      var copy = JSON.parse(JSON.stringify(orig));
      copy.id = uid('el');
      copy.x = Math.min(90, copy.x + 6);
      copy.y = Math.min(90, copy.y + 6);
      list.push(copy);
      state.selectedElementId = copy.id;
      scheduleSave();
      render();
    },
    deleteElement: function (id) {
      if (!state.activeNotebook) return;
      pushHistory();
      if (state.activePageIndex < 0) {
        state.activeNotebook.coverConfig.elements = (state.activeNotebook.coverConfig.elements || []).filter(function (e) { return e.id !== id; });
      } else {
        state.activeNotebook.pages[state.activePageIndex].elements = (state.activeNotebook.pages[state.activePageIndex].elements || []).filter(function (e) { return e.id !== id; });
      }
      if (state.selectedElementId === id) state.selectedElementId = null;
      scheduleSave();
      render();
    },

    // Uploads & Scrapbook & Backup
    handleUploadImage: function (ev) {
      var file = ev.target.files && ev.target.files[0];
      if (!file || !state.session) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        compressImageDataUrl(e.target.result, 1200, async function (compressed) {
          try {
            var rec = await NOTEBOOKS_STORE.saveUpload(state.session.username, file.name, compressed);
            state.uploads.unshift(rec);
            render();
          } catch (err) {
            alert('Erreur import image : ' + err.message);
          }
        });
      };
      reader.readAsDataURL(file);
      ev.target.value = '';
    },
    handleScrapbookPhoto: function (ev, pageIdx) {
      var file = ev.target.files && ev.target.files[0];
      if (!file || !state.session || pageIdx < 0) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        compressImageDataUrl(e.target.result, 1200, async function (compressed) {
          try {
            await NOTEBOOKS_STORE.saveUpload(state.session.username, file.name, compressed);
            state.uploads = await NOTEBOOKS_STORE.getUserUploads(state.session.username);
            pushHistory();
            state.activeNotebook.pages[pageIdx].fields.scrapbookImage = compressed;
            scheduleSave();
            render();
          } catch (err) {
            alert('Erreur photo Scrapbook : ' + err.message);
          }
        });
      };
      reader.readAsDataURL(file);
      ev.target.value = '';
    },
    deleteUpload: async function (uploadId) {
      if (!state.session) return;
      await NOTEBOOKS_STORE.deleteUpload(uploadId, state.session.username);
      state.uploads = await NOTEBOOKS_STORE.getUserUploads(state.session.username);
      render();
    },
    exportBackup: async function () {
      if (!state.session) return;
      var payload = await NOTEBOOKS_STORE.exportUserBackup(state.session.username);
      var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'cahiers-' + state.session.username + '-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    },
    importBackup: function (ev) {
      var file = ev.target.files && ev.target.files[0];
      if (!file || !state.session) return;
      var reader = new FileReader();
      reader.onload = async function (e) {
        try {
          var payload = JSON.parse(e.target.result);
          var count = await NOTEBOOKS_STORE.importUserBackup(payload, state.session.username);
          await loadUserWorkspace();
          render();
          alert(count + ' cahier(s) restauré(s) avec succès.');
        } catch (err) {
          alert('Erreur lors de la restauration : ' + err.message);
        }
      };
      reader.readAsText(file);
      ev.target.value = '';
    },

    openPdfExportModal: openPdfExportModal,
    triggerPrintPdf: triggerPrintPdf
  };
})();
