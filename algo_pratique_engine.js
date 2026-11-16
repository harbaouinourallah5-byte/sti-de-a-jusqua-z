// ===================================================================
// MOTEUR DU LABORATOIRE INTERACTIF QT DESIGNER ➔ THONNY PYTHON (BAC STI)
// Module Pratique : Simulateur Visuel Qt + Console Interactive Thonny
// ===================================================================

const ALGO_CATEGORY_META = {
  'all': { label: '✨ Tout afficher', count: 20, icon: '✨', desc: 'Toutes les notions Qt Designer & Thonny Python' },
  'Démarrage & Architecture': { label: '🚀 Squelette & loadUi', count: 1, icon: '🚀', desc: 'Initialisation de QApplication et chargement du fichier .ui' },
  'Widgets de Saisie': { label: '⌨️ Widgets de Saisie', count: 4, icon: '⌨️', desc: 'QLineEdit, QTextEdit, QSpinBox, QDateEdit' },
  "Widgets d'Action & Affichage": { label: '⚡ Boutons & Affichage', count: 4, icon: '⚡', desc: 'QPushButton (.clicked), QLabel (.setText), QTableWidget' },
  'Widgets de Choix & Sélection': { label: '☑️ Choix & Menus', count: 3, icon: '☑️', desc: 'QRadioButton, QCheckBox, QComboBox' },
  'Boîtes de Dialogue (QMessageBox)': { label: '💬 Alertes QMessageBox', count: 3, icon: '💬', desc: 'QMessageBox.critical, information, warning' },
  'Contrôles de Saisie Bac': { label: '🛡️ Contrôles de Saisie', count: 4, icon: '🛡️', desc: 'Vérifications obligatoires au Bac : vide, alpha, intervalle, longueur' },
  "Modèles Types d'Examen": { label: '📝 Sujet Type Bac', count: 1, icon: '📝', desc: 'Structure complète en 4 étapes de l\'épreuve pratique' }
};

// -------------------------------------------------------------
// 1. Coloration Syntaxique Thonny Python avec Distinction Visuelle
// -------------------------------------------------------------
function highlightPythonCode(code) {
  if (!code) return '';
  const lines = code.split('\n');
  return lines.map(line => {
    const commentIdx = line.indexOf('#');
    if (commentIdx !== -1) {
      const codePart = line.substring(0, commentIdx);
      const commentPart = line.substring(commentIdx);
      return highlightPythonTokens(codePart) + `<span class="py-comment">${escapeHtmlSafe(commentPart)}</span>`;
    }
    return highlightPythonTokens(line);
  }).join('\n');
}

function highlightPythonTokens(str) {
  if (!str) return '';
  let res = escapeHtmlSafe(str);

  // Chaînes de caractères ("..." ou '...')
  res = res.replace(/(&quot;.*?&quot;|&#39;.*?&#39;|".*?"|'.*?')/g, '<span class="py-str">$1</span>');

  // Mots-clés réservés Python
  const kws = ['from', 'import', 'def', 'if', 'elif', 'else', 'return', 'int', 'float', 'str', 'True', 'False', 'in', 'not', 'and', 'or', 'class', 'try', 'except', 'pass', 'for', 'while', 'len'];
  kws.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'g');
    res = res.replace(regex, '<span class="py-kw">$1</span>');
  });

  // Objets Qt & Fenêtres principales
  res = res.replace(/\b(windows|W|app|QApplication|QMessageBox|QTableWidgetItem)\b/g, '<span class="py-obj">$1</span>');

  // Méthodes Qt officielles autorisées au Bac
  const methods = [
    'loadUi', 'show', 'exec_', 'text', 'toPlainText', 'setText', 'clear', 'setFocus',
    'clicked', 'connect', 'isChecked', 'setChecked', 'currentText', 'currentIndex',
    'setCurrentIndex', 'addItem', 'addItems', 'value', 'setValue', 'date', 'toString',
    'critical', 'information', 'warning', 'setRowCount', 'setColumnCount',
    'setHorizontalHeaderLabels', 'setItem', 'rowCount', 'currentRow', 'strip', 'isdigit', 'isalpha'
  ];
  methods.forEach(m => {
    const regex = new RegExp(`(\\.)(${m})\\b`, 'g');
    res = res.replace(regex, '$1<span class="py-method">$2</span>');
  });

  return res;
}

function escapeHtmlSafe(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// 2. Génération du Simulateur Visuel Qt Designer
// -------------------------------------------------------------
function buildQtDesignerSimStage(item) {
  const id = item.id;

  if (id === 'qt-starter-template') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls">
            <span class="qt-dot close"></span>
            <span class="qt-dot min"></span>
            <span class="qt-dot max"></span>
          </div>
          <span class="qt-window-title">Interface Qt Designer • 'interface.ui'</span>
        </div>
        <div class="qt-window-canvas" style="text-align: center; padding: 24px;">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">🖼️</div>
          <div style="font-weight: 800; color: #38bdf8; font-size: 1.05rem;">interface.ui</div>
          <div id="sim_starter_status" style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">
            Fichier créé sous Qt Designer (En attente d'exécution dans Thonny)
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-lineedit') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Formulaire (QLineEdit)</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">windows.le_nom :</label>
            <input type="text" id="sim_le_nom" class="sim-qt-input" value="Mohamed Ben Ali" placeholder="Tapez un nom...">
          </div>
          <div class="sim-form-row">
            <label class="sim-label">windows.le_age :</label>
            <input type="number" id="sim_le_age" class="sim-qt-input" value="19" placeholder="Âge...">
          </div>
          <div class="sim-label-display" id="sim_res_lineedit">
            <span class="sim-lbl-tag">windows.lbl_resultat :</span>
            <span class="sim-lbl-val">(En attente d'exécution...)</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-textedit') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Zone Multilignes (QTextEdit)</span>
        </div>
        <div class="qt-window-canvas">
          <label class="sim-label">windows.nomTextEdit :</label>
          <textarea id="sim_te_val" class="sim-qt-textarea" rows="3" placeholder="Saisissez plusieurs lignes...">Baccalauréat STI 2026&#10;Épreuve Pratique : Qt Designer + Thonny</textarea>
          <div class="sim-label-display" id="sim_res_textedit">
            <span class="sim-lbl-tag">Rapport Thonny :</span>
            <span class="sim-lbl-val">Cliquez sur Exécuter pour extraire avec .toPlainText()</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-pushbutton') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Bouton d'Action (QPushButton)</span>
        </div>
        <div class="qt-window-canvas" style="text-align: center; padding: 18px;">
          <button type="button" id="sim_btn_valider" class="sim-qt-btn" onclick="runAlgoPratiqueSim('qt-pushbutton')">
            🔘 windows.btn_valider (Cliquer ici)
          </button>
          <div class="sim-label-display" id="sim_res_pushbutton" style="margin-top: 14px;">
            <span class="sim-lbl-tag">Signal clicked :</span>
            <span class="sim-lbl-val">En attente d'un clic de l'utilisateur...</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-radiobutton') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Choix Exclusif (QRadioButton)</span>
        </div>
        <div class="qt-window-canvas">
          <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 8px;">Sélectionnez une option :</div>
          <div class="sim-radio-group">
            <label class="sim-qt-radio">
              <input type="radio" name="sim_rb_gender" id="sim_rb_m" value="Masculin" checked>
              <span>👨 windows.rb_masculin</span>
            </label>
            <label class="sim-qt-radio">
              <input type="radio" name="sim_rb_gender" id="sim_rb_f" value="Féminin">
              <span>👩 windows.rb_feminin</span>
            </label>
          </div>
          <div class="sim-label-display" id="sim_res_radiobutton" style="margin-top: 12px;">
            <span class="sim-lbl-tag">Résultat isChecked() :</span>
            <span class="sim-lbl-val">Masculin actif</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-checkbox') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Choix Multiples (QCheckBox)</span>
        </div>
        <div class="qt-window-canvas">
          <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 8px;">Cochez une ou plusieurs cases :</div>
          <div class="sim-check-group">
            <label class="sim-qt-check">
              <input type="checkbox" id="sim_cb_sport" checked>
              <span>⚽ windows.cb_sport</span>
            </label>
            <label class="sim-qt-check">
              <input type="checkbox" id="sim_cb_musique">
              <span>🎵 windows.cb_musique</span>
            </label>
          </div>
          <div class="sim-label-display" id="sim_res_checkbox" style="margin-top: 12px;">
            <span class="sim-lbl-tag">Options cochées :</span>
            <span class="sim-lbl-val">['Sport']</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-combobox') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Menu Déroulant (QComboBox)</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">windows.nomComboBox :</label>
            <select id="sim_combo_box" class="sim-qt-select" onchange="runAlgoPratiqueSim('qt-combobox')">
              <option value="Tunis">Tunis (Index: 0)</option>
              <option value="Sousse">Sousse (Index: 1)</option>
              <option value="Sfax">Sfax (Index: 2)</option>
              <option value="Bizerte">Bizerte (Index: 3)</option>
              <option value="Gabès">Gabès (Index: 4)</option>
            </select>
          </div>
          <div style="margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="simSetComboEmpty('qt-combobox')">
              ⚡ windows.nomComboBox.setCurrentIndex(-1) (Aucun choix)
            </button>
          </div>
          <div class="sim-label-display" id="sim_res_combobox">
            <span class="sim-lbl-tag">currentText() & currentIndex() :</span>
            <span class="sim-lbl-val">Tunis (indice 0)</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-label') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Étiquette de Texte (QLabel)</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">Texte à envoyer par Python :</label>
            <input type="text" id="sim_input_label" class="sim-qt-input" value="Félicitations ! Admis au Bac STI">
          </div>
          <div class="sim-live-label-box">
            <div style="font-size: 0.75rem; color: #38bdf8; font-weight: 700; margin-bottom: 4px;">W.Nom_Label (Rendu Visuel) :</div>
            <div id="sim_target_label" class="sim-rendered-label">Félicitations ! Admis au Bac STI</div>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-spinbox') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Compteur Numérique (QSpinBox)</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">windows.sb_quantite (int) :</label>
            <input type="number" id="sim_sb_val" class="sim-qt-input" value="4" min="1" max="100">
          </div>
          <div class="sim-form-row">
            <label class="sim-label">windows.dsb_prix (float) :</label>
            <input type="number" id="sim_dsb_val" class="sim-qt-input" value="12.50" step="0.5">
          </div>
          <div class="sim-label-display" id="sim_res_spinbox">
            <span class="sim-lbl-tag">Calcul .value() :</span>
            <span class="sim-lbl-val">4 × 12.50 = 50.00 DT (Directement int/float sans conversion)</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-dateedit') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Sélecteur de Date (QDateEdit)</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">windows.de_naissance :</label>
            <input type="date" id="sim_date_input" class="sim-qt-input" value="2006-06-15">
          </div>
          <div class="sim-label-display" id="sim_res_date">
            <span class="sim-lbl-tag">date().toString("yyyy-MM-dd") :</span>
            <span class="sim-lbl-val">2006-06-15</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id === 'qt-msgbox-critical' || id === 'qt-msgbox-info' || id === 'qt-msgbox-warning') {
    const isCrit = id === 'qt-msgbox-critical';
    const isWarn = id === 'qt-msgbox-warning';
    const btnColor = isCrit ? '#ef4444' : (isWarn ? '#f59e0b' : '#10b981');
    const btnLabel = isCrit ? '❌ Déclencher Erreur Critique' : (isWarn ? '⚠️ Déclencher Avertissement' : 'ℹ️ Déclencher Information');

    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Boîte de Dialogue (${item.qtWidget})</span>
        </div>
        <div class="qt-window-canvas" style="text-align: center; padding: 20px;">
          <button type="button" class="sim-qt-btn" style="background: ${btnColor}; color: #fff; border-color: ${btnColor}; box-shadow: 0 4px 14px ${btnColor}40;" onclick="runAlgoPratiqueSim('${id}')">
            ${btnLabel}
          </button>
          <div class="sim-label-display" id="sim_res_msgbox_${id}" style="margin-top: 14px;">
            <span class="sim-lbl-tag">Statut de la boîte :</span>
            <span class="sim-lbl-val">Cliquez pour tester l'alerte modale en direct</span>
          </div>
        </div>
      </div>
    `;
  }

  if (id.startsWith('qt-valid-')) {
    let defVal = '';
    let placeholder = '';
    if (id === 'qt-valid-empty') { defVal = ''; placeholder = 'Laissez vide ou tapez un nom...'; }
    else if (id === 'qt-valid-alpha') { defVal = 'Sami123'; placeholder = 'Ex: Sami (alphabétique) ou Sami12 (erreur)...'; }
    else if (id === 'qt-valid-numeric') { defVal = '25'; placeholder = 'Ex: 15 (valide) ou 25 (hors 0-20)...'; }
    else if (id === 'qt-valid-length') { defVal = '09876'; placeholder = 'Ex: 09876543 (8 chiffres) ou 09876 (erreur)...'; }

    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Contrôle de Saisie Bac • ${item.qtWidget}</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">Valeur à tester :</label>
            <input type="text" id="sim_input_${id}" class="sim-qt-input" value="${defVal}" placeholder="${placeholder}">
          </div>
          <div class="sim-label-display" id="sim_res_${id}">
            <span class="sim-lbl-tag">Résultat du contrôle :</span>
            <span class="sim-lbl-val">Cliquez sur 'Exécuter dans Thonny' pour valider</span>
          </div>
        </div>
      </div>
    `;
  }

  // Fallback général (tablewidget, clear-reset, workflow)
  return `
    <div class="qt-window-mockup">
      <div class="qt-window-titlebar">
        <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
        <span class="qt-window-title">Qt Designer • ${item.qtWidget}</span>
      </div>
      <div class="qt-window-canvas" style="text-align: center; padding: 20px;">
        <button type="button" class="sim-qt-btn" onclick="runAlgoPratiqueSim('${id}')">
          ⚡ Tester l'interaction (${item.name})
        </button>
        <div class="sim-label-display" id="sim_res_${id}" style="margin-top: 14px;">
          <span class="sim-lbl-tag">Statut de l'interface :</span>
          <span class="sim-lbl-val">Prêt pour l'exécution</span>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 3. Exécution Interactive Thonny Python Simulator
// -------------------------------------------------------------
function runAlgoPratiqueSim(itemId) {
  const terminal = document.getElementById(`sim_terminal_${itemId}`);
  if (!terminal) return;

  const item = (typeof DATA !== 'undefined' && DATA.algo_pratique) ? DATA.algo_pratique.find(x => x.id === itemId) : null;
  const now = new Date().toLocaleTimeString();

  let logLines = [];

  if (itemId === 'qt-starter-template') {
    const status = document.getElementById('sim_starter_status');
    if (status) {
      status.innerHTML = '🟢 <strong style="color: #34d399;">Fenêtre Qt active et affichée à l\'écran (app.exec_())</strong>';
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny ${now}] from PyQt5.uic import loadUi`,
      `[Thonny ${now}] app = QApplication([])`,
      `[Thonny ${now}] windows = loadUi("interface.ui")`,
      `[Thonny ${now}] windows.show()`,
      `[Thonny ${now}] app.exec_()`,
      `✓ Fenêtre 'interface.ui' chargée et boucle d'événements lancée avec succès !`
    ];
  } else if (itemId === 'qt-lineedit') {
    const inputNom = document.getElementById('sim_le_nom');
    const inputAge = document.getElementById('sim_le_age');
    const resLbl = document.getElementById('sim_res_lineedit');
    const valNom = inputNom ? inputNom.value.trim() : 'Mohamed';
    const valAge = inputAge ? inputAge.value.trim() : '19';

    if (resLbl) {
      resLbl.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">"Admis : ${valNom} (${valAge} ans)"</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] texte = windows.le_nom.text() ➔ "${valNom}" (type: str)`,
      `[Thonny] age = int(windows.le_age.text()) ➔ ${valAge} (type: int)`,
      `[Thonny] windows.lbl_resultat.setText("Admis : ${valNom} (${valAge} ans)")`,
      `✓ Label Qt mis à jour avec la chaîne concaténée !`
    ];
  } else if (itemId === 'qt-textedit') {
    const te = document.getElementById('sim_te_val');
    const res = document.getElementById('sim_res_textedit');
    const val = te ? te.value : '';
    const lineCount = val.split('\n').length;
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #38bdf8;">${lineCount} ligne(s) extraite(s) avec succès !</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] texte = windows.nomTextEdit.toPlainText()`,
      `➔ Longueur : ${val.length} caractères (${lineCount} lignes)`,
      `💡 Note Bac : Pour QTextEdit, on utilise TOUJOURS .toPlainText() et NON .text() !`
    ];
  } else if (itemId === 'qt-pushbutton') {
    const res = document.getElementById('sim_res_pushbutton');
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">✓ Signal 'clicked' reçu ! Fonction 'valider()' exécutée.</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] windows.btn_valider.clicked.connect(valider)`,
      `⚡ CLIC DÉTECTÉ sur windows.btn_valider !`,
      `➔ Appel de la fonction Python : def valider():`,
      `✓ Traitement effectué avec succès !`
    ];
  } else if (itemId === 'qt-radiobutton') {
    const rbM = document.getElementById('sim_rb_m');
    const isM = rbM && rbM.checked;
    const res = document.getElementById('sim_res_radiobutton');
    const genre = isM ? 'Masculin' : 'Féminin';
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #38bdf8;">${genre} actif (isChecked = True)</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] windows.rb_masculin.isChecked() = ${isM ? 'True' : 'False'}`,
      `[Thonny] windows.rb_feminin.isChecked() = ${!isM ? 'True' : 'False'}`,
      `➔ Option sélectionnée : genre = "${genre}"`
    ];
  } else if (itemId === 'qt-checkbox') {
    const cbS = document.getElementById('sim_cb_sport');
    const cbM = document.getElementById('sim_cb_musique');
    const isS = cbS && cbS.checked;
    const isM = cbM && cbM.checked;
    const res = document.getElementById('sim_res_checkbox');
    const list = [];
    if (isS) list.push('Sport');
    if (isM) list.push('Musique');
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">${JSON.stringify(list)}</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] windows.cb_sport.isChecked() = ${isS ? 'True' : 'False'}`,
      `[Thonny] windows.cb_musique.isChecked() = ${isM ? 'True' : 'False'}`,
      `➔ Choix multiples : ${JSON.stringify(list)}`
    ];
  } else if (itemId === 'qt-combobox') {
    const combo = document.getElementById('sim_combo_box');
    const res = document.getElementById('sim_res_combobox');
    const txt = combo ? combo.options[combo.selectedIndex]?.text || '' : '';
    const idx = combo ? combo.selectedIndex : -1;
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #38bdf8;">"${txt}" (Indice: ${idx})</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] choix = windows.nomComboBox.currentText() ➔ "${txt}"`,
      `[Thonny] indice = windows.nomComboBox.currentIndex() ➔ ${idx}`,
      `✓ Valeur du menu déroulant récupérée !`
    ];
  } else if (itemId === 'qt-label') {
    const inp = document.getElementById('sim_input_label');
    const target = document.getElementById('sim_target_label');
    const val = inp ? inp.value : 'Texte';
    if (target) target.textContent = val;
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] windows.lbl_titre.setText("${val}")`,
      `✓ Étiquette QLabel mise à jour avec le texte spécifié !`
    ];
  } else if (itemId === 'qt-spinbox') {
    const sb = document.getElementById('sim_sb_val');
    const dsb = document.getElementById('sim_dsb_val');
    const res = document.getElementById('sim_res_spinbox');
    const qte = sb ? parseInt(sb.value) || 0 : 0;
    const prix = dsb ? parseFloat(dsb.value) || 0 : 0;
    const tot = (qte * prix).toFixed(2);
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">${qte} × ${prix} = ${tot} DT</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] quantite = windows.sb_quantite.value() ➔ ${qte} (int direct)`,
      `[Thonny] prix = windows.dsb_prix.value() ➔ ${prix} (float direct)`,
      `➔ Total calculé : ${tot} DT (Sans int() ni float() requis !)`
    ];
  } else if (itemId === 'qt-dateedit') {
    const dt = document.getElementById('sim_date_input');
    const res = document.getElementById('sim_res_date');
    const val = dt ? dt.value : '2006-06-15';
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #38bdf8;">"${val}"</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] date_str = windows.de_naissance.date().toString("yyyy-MM-dd")`,
      `➔ Résultat : "${val}" (Format prêt pour stockage MySQL/Fichier)`
    ];
  } else if (itemId === 'qt-msgbox-critical' || itemId === 'qt-msgbox-info' || itemId === 'qt-msgbox-warning') {
    const isCrit = itemId === 'qt-msgbox-critical';
    const isWarn = itemId === 'qt-msgbox-warning';
    const title = isCrit ? 'Erreur Critique' : (isWarn ? 'Avertissement' : 'Information');
    const msg = isCrit ? 'Veuillez remplir tous les champs obligatoires !' : (isWarn ? 'Vérifiez la saisie avant confirmation.' : 'Opération effectuée avec succès !');

    showSimQtDialog(title, msg, isCrit ? 'critical' : (isWarn ? 'warning' : 'info'));

    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] QMessageBox.${isCrit ? 'critical' : (isWarn ? 'warning' : 'information')}(windows, "${title}", "${msg}")`,
      `✓ Boîte de dialogue affichée au centre de l'écran (Bloque l'interface jusqu'à clic sur OK).`
    ];
  } else if (itemId.startsWith('qt-valid-')) {
    const inp = document.getElementById(`sim_input_${itemId}`);
    const res = document.getElementById(`sim_res_${itemId}`);
    const val = inp ? inp.value.trim() : '';

    let isValid = false;
    let err = '';

    if (itemId === 'qt-valid-empty') {
      isValid = val.length > 0;
      err = 'Le champ ne doit pas être vide !';
    } else if (itemId === 'qt-valid-alpha') {
      isValid = /^[a-zA-ZÀ-ÿ\s]+$/.test(val);
      err = 'Le texte doit comporter UNIQUEMENT des lettres !';
    } else if (itemId === 'qt-valid-numeric') {
      const num = parseFloat(val);
      isValid = !isNaN(num) && num >= 0 && num <= 20;
      err = 'La note doit être un nombre compris entre 0 et 20 !';
    } else if (itemId === 'qt-valid-length') {
      isValid = /^\d{8}$/.test(val);
      err = 'Le numéro CIN doit comporter EXACTEMENT 8 chiffres !';
    }

    if (isValid) {
      if (res) res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">✓ CONTRÔLE VALIDE : Valeur acceptée !</strong>`;
      logLines = [
        `>>> %Run script_bac.py`,
        `[Thonny] Contrôle de saisie sur '${val}'...`,
        `✓ Succès : La condition est respectée, passage à l'étape suivante !`
      ];
    } else {
      if (res) res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #ef4444;">❌ ERREUR : ${err}</strong>`;
      showSimQtDialog('Erreur de Saisie', err, 'critical');
      logLines = [
        `>>> %Run script_bac.py`,
        `[Thonny] Contrôle de saisie sur '${val}'...`,
        `❌ Échec du contrôle !`,
        `[Thonny] QMessageBox.critical(windows, "Erreur", "${err}")`,
        `[Thonny] return (Arrêt du traitement)`
      ];
    }
  } else {
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny ${now}] Exécution de la commande...`,
      `✓ Action effectuée avec succès !`
    ];
  }

  terminal.innerHTML = logLines.map(l => {
    let cl = 'py-term-line';
    if (l.startsWith('>>>')) cl += ' prompt';
    else if (l.includes('❌') || l.includes('Erreur')) cl += ' error';
    else if (l.includes('✓') || l.includes('Succès')) cl += ' success';
    else if (l.includes('💡') || l.includes('⚠️')) cl += ' warn';
    return `<div class="${cl}">${escapeHtmlSafe(l)}</div>`;
  }).join('');
  terminal.scrollTop = terminal.scrollHeight;
}

function simSetComboEmpty(itemId) {
  const combo = document.getElementById('sim_combo_box');
  const res = document.getElementById('sim_res_combobox');
  if (combo) combo.selectedIndex = -1;
  if (res) {
    res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #f59e0b;">(Aucun choix sélectionné / Indice: -1)</strong>`;
  }
  const terminal = document.getElementById(`sim_terminal_${itemId}`);
  if (terminal) {
    terminal.innerHTML += `<div class="py-term-line warn">[Thonny] windows.nomComboBox.setCurrentIndex(-1) ➔ Vider le choix</div>`;
    terminal.scrollTop = terminal.scrollHeight;
  }
}

// Boîte de dialogue modale simulée QMessageBox
function showSimQtDialog(title, message, type = 'info') {
  let modal = document.getElementById('simQtDialogModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'simQtDialogModal';
    modal.className = 'sim-qt-dialog-overlay';
    document.body.appendChild(modal);
  }

  const icon = type === 'critical' ? '❌' : (type === 'warning' ? '⚠️' : 'ℹ️');
  const iconColor = type === 'critical' ? '#ef4444' : (type === 'warning' ? '#f59e0b' : '#38bdf8');

  modal.innerHTML = `
    <div class="sim-qt-dialog-box">
      <div class="sim-qt-dialog-header">
        <span style="font-size: 1.1rem; color: ${iconColor};">${icon}</span>
        <span class="sim-qt-dialog-title">${escapeHtmlSafe(title)}</span>
        <button class="sim-qt-dialog-close" onclick="closeSimQtDialog()">&times;</button>
      </div>
      <div class="sim-qt-dialog-body">
        <p style="margin: 0; font-size: 0.95rem; color: #f1f5f9; line-height: 1.5;">${escapeHtmlSafe(message)}</p>
      </div>
      <div class="sim-qt-dialog-footer">
        <button type="button" class="sim-qt-dialog-ok-btn" onclick="closeSimQtDialog()">OK</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

function closeSimQtDialog() {
  const modal = document.getElementById('simQtDialogModal');
  if (modal) modal.style.display = 'none';
}

// -------------------------------------------------------------
// 4. Modale Plein Écran pour Code Complet sans Scroll
// -------------------------------------------------------------
function openAlgoModal(itemId) {
  const item = (typeof DATA !== 'undefined' && DATA.algo_pratique) ? DATA.algo_pratique.find(x => x.id === itemId) : null;
  if (!item) return;

  const modal = document.getElementById('detailsModal');
  const body = document.getElementById('modalDynamicBody');
  const title = document.getElementById('modalTitle');
  const cat = document.getElementById('modalCategory');

  if (!modal || !body) return;

  cat.textContent = `PRATIQUE BAC • ${item.category}`;
  cat.style.color = '#34d399';
  title.textContent = `${item.name} (${item.qtWidget})`;

  const highlightedCode = highlightPythonCode(item.thonnyCode);
  const rawThonnyJson = JSON.stringify(item.thonnyCode);

  body.innerHTML = `
    <!-- 1. En-tête & Rôle -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>📖</span>
        <span>Rôle & Explication au Bac STI</span>
      </div>
      <p class="modal-text" style="font-size: 1.05rem; line-height: 1.65; color: #e2e8f0;">
        ${item.description || item.summary}
      </p>
    </div>

    <!-- 2. Manipulation dans Qt Designer -->
    ${item.howToUse ? `
      <div class="modal-section">
        <div class="modal-section-title green">
          <span>🛠️</span>
          <span>Instructions Pas-à-Pas dans Qt Designer</span>
        </div>
        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 16px;">
          <p style="margin: 0; line-height: 1.6; color: #cbd5e1; white-space: pre-line;">${item.howToUse}</p>
        </div>
      </div>
    ` : ''}

    <!-- 3. Piège Fréquent au Bac -->
    ${item.bacTips ? `
      <div class="algo-bac-tips" style="margin: 16px 0; font-size: 0.95rem; padding: 14px 18px;">
        <strong>⚠️ Piège Fréquent à l'Épreuve du Bac :</strong> ${item.bacTips}
      </div>
    ` : ''}

    <!-- 4. CODE PYTHON COMPLET SANS SCROLL (AVEC COLORATION SYNTAXIQUE) -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>🐍</span>
        <span>Code Python Complet dans Thonny (Syntaxe Officielle)</span>
      </div>
      
      <div class="annexe-code-container" style="margin-top: 10px;">
        <div class="annexe-code-header">
          <span>📜 script_bac.py (Thonny Python 3.10)</span>
          <button type="button" class="annexe-copy-btn" onclick='copyCodeText(${rawThonnyJson}, this)'>📋 Copier le code complet</button>
        </div>
        <pre class="annexe-code-pre" style="white-space: pre-wrap; word-break: break-word;"><code class="python-syntax-view">${highlightedCode}</code></pre>
      </div>
    </div>

    <!-- 5. Simulateur Interactif Intégré dans la modale -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>🖥️</span>
        <span>Laboratoire Interactif : Qt Designer ➔ Thonny Python</span>
      </div>
      <div class="qt-thonny-lab-grid">
        <div class="lab-col-qt">
          ${buildQtDesignerSimStage(item)}
        </div>
        <div class="lab-col-thonny">
          <div class="thonny-terminal-wrap">
            <div class="thonny-terminal-header">
              <span class="thonny-term-title">🐍 Thonny Shell • script_bac.py</span>
              <button type="button" class="thonny-run-btn" onclick="runAlgoPratiqueSim('${item.id}')">▶ Exécuter (F5)</button>
            </div>
            <div class="thonny-terminal-screen" id="sim_terminal_${item.id}">
              <div class="py-term-line prompt">>>> %Run script_bac.py</div>
              <div class="py-term-line">[Thonny] Prêt. Cliquez sur 'Exécuter (F5)' pour tester.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}
