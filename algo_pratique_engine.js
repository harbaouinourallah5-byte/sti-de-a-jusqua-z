// ===================================================================
// MOTEUR DU LABORATOIRE INTERACTIF QT DESIGNER ➔ THONNY PYTHON (BAC STI)
// Module Pratique : Simulateur Visuel Qt + Console Interactive Thonny
// ===================================================================

const ALGO_CATEGORY_META = {
  'all': { label: '✨ Tout afficher', count: 20, icon: '✨', desc: 'Toutes les notions Qt Designer & Thonny Python' },
  'Démarrage & Architecture': { label: '🚀 Squelette & loadUi', count: 1, icon: '🚀', desc: 'Initialisation de QApplication et chargement du fichier .ui' },
  'Widgets de Saisie': { label: '⌨️ Widgets de Saisie', count: 4, icon: '⌨️', desc: 'QLineEdit, QTextEdit, QSpinBox, QDateEdit' },
  "Widgets d'Action & Affichage": { label: '⚡ Boutons & Affichage', count: 4, icon: '⚡', desc: 'QPushButton (.clicked), QLabel (.setText), QTableWidget, Réinitialisation' },
  'Widgets de Choix & Sélection': { label: '☑️ Choix & Menus', count: 3, icon: '☑️', desc: 'QRadioButton, QCheckBox, QComboBox' },
  'Boîtes de Dialogue (QMessageBox)': { label: '💬 Alertes QMessageBox', count: 3, icon: '💬', desc: 'QMessageBox.critical, information, warning' },
  'Contrôles de Saisie Bac': { label: '🛡️ Contrôles de Saisie', count: 4, icon: '🛡️', desc: 'Vérifications obligatoires au Bac : vide, alpha, intervalle, longueur' },
  "Modèles Types d'Examen": { label: '📝 Sujet Type Bac', count: 1, icon: '📝', desc: 'Structure complète en 4 étapes de l\'épreuve pratique' }
};

// -------------------------------------------------------------
// 1. Coloration Syntaxique Thonny Python avec Tokenizer Sécurisé
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
  
  // 1. Extraire et sanctuariser les chaînes de caractères
  const stringPool = [];
  let tokenized = str.replace(/(".*?"|'.*?')/g, (match) => {
    const placeholder = `___PYSTR_${stringPool.length}___`;
    stringPool.push(`<span class="py-str">${escapeHtmlSafe(match)}</span>`);
    return placeholder;
  });

  tokenized = escapeHtmlSafe(tokenized);

  // 2. Nombres littéraux
  tokenized = tokenized.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="py-num">$1</span>');

  // 3. Mots-clés réservés Python
  const kws = ['from', 'import', 'def', 'if', 'elif', 'else', 'return', 'int', 'float', 'str', 'True', 'False', 'in', 'not', 'and', 'or', 'class', 'try', 'except', 'pass', 'for', 'while', 'len', 'as', 'None'];
  kws.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'g');
    tokenized = tokenized.replace(regex, '<span class="py-kw">$1</span>');
  });

  // 4. Objets Qt fondamentaux
  tokenized = tokenized.replace(/\b(windows|W|app|QApplication|QMessageBox|QTableWidgetItem)\b/g, '<span class="py-obj">$1</span>');

  // 5. Fonctions globales et constructeurs
  const standaloneFuncs = ['loadUi', 'print', 'range', 'append'];
  standaloneFuncs.forEach(fn => {
    const regex = new RegExp(`\\b(${fn})\\b(?=\\s*\\()`, 'g');
    tokenized = tokenized.replace(regex, '<span class="py-method">$1</span>');
  });

  // 6. Méthodes Qt officielles autorisées au Bac STI
  const methods = [
    'loadUi', 'show', 'exec_', 'text', 'toPlainText', 'setText', 'clear', 'setFocus',
    'clicked', 'connect', 'isChecked', 'setChecked', 'currentText', 'currentIndex',
    'setCurrentIndex', 'addItem', 'addItems', 'value', 'setValue', 'date', 'toString',
    'critical', 'information', 'warning', 'setRowCount', 'setColumnCount',
    'setHorizontalHeaderLabels', 'setItem', 'rowCount', 'currentRow', 'strip', 'isdigit', 'isalpha', 'isnumeric'
  ];
  methods.forEach(m => {
    const regex = new RegExp(`(\\.)(${m})\\b`, 'g');
    tokenized = tokenized.replace(regex, '$1<span class="py-method">$2</span>');
  });

  // 7. Restaurer les chaînes sanctuarisées
  stringPool.forEach((span, idx) => {
    tokenized = tokenized.replace(`___PYSTR_${idx}___`, span);
  });

  return tokenized;
}

function escapeHtmlSafe(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// 2. Génération du Simulateur Visuel Qt Designer (20 Notions)
// -------------------------------------------------------------
function buildQtDesignerSimStage(item) {
  const id = item.id;

  // 1. Squelette officiel loadUi
  if (id === 'qt-starter-template') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Interface Qt Designer • 'interface.ui'</span>
        </div>
        <div class="qt-window-canvas" style="text-align: center; padding: 24px;">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">🖼️</div>
          <div style="font-weight: 800; color: #38bdf8; font-size: 1.05rem;">interface.ui</div>
          <div id="sim_starter_status" style="font-size: 0.85rem; color: #94a3b8; margin-top: 8px;">
            Fichier créé sous Qt Designer (En attente d'exécution dans Thonny)
          </div>
          <div style="margin-top: 14px;">
            <button type="button" class="sim-qt-btn" onclick="runAlgoPratiqueSim('qt-starter-template')">
              ▶ windows.show() & app.exec_()
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // 2. QLineEdit
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
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-lineedit')">▶ windows.le_nom.text()</button>
            <button type="button" class="sim-qt-action-pill" onclick="simSetLineEditText('Admis')">✍️ setText("Admis")</button>
            <button type="button" class="sim-qt-action-pill" onclick="simClearLineEdit()">🧹 clear()</button>
          </div>
          <div class="sim-label-display" id="sim_res_lineedit">
            <span class="sim-lbl-tag">windows.lbl_resultat :</span>
            <span class="sim-lbl-val">(En attente d'exécution...)</span>
          </div>
        </div>
      </div>
    `;
  }

  // 3. QTextEdit
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
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-textedit')">▶ toPlainText()</button>
            <button type="button" class="sim-qt-action-pill" onclick="simSetTextEditText('Nouveau texte inséré par setText()...')">✍️ setText()</button>
            <button type="button" class="sim-qt-action-pill" onclick="simClearTextEdit()">🧹 clear()</button>
          </div>
          <div class="sim-label-display" id="sim_res_textedit">
            <span class="sim-lbl-tag">Rapport Thonny :</span>
            <span class="sim-lbl-val">Cliquez sur Exécuter pour extraire avec .toPlainText()</span>
          </div>
        </div>
      </div>
    `;
  }

  // 4. QPushButton
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

  // 5. QRadioButton
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
              <input type="radio" name="sim_rb_gender" id="sim_rb_m" value="Masculin" checked onchange="runAlgoPratiqueSim('qt-radiobutton')">
              <span>👨 windows.rb_masculin</span>
            </label>
            <label class="sim-qt-radio">
              <input type="radio" name="sim_rb_gender" id="sim_rb_f" value="Féminin" onchange="runAlgoPratiqueSim('qt-radiobutton')">
              <span>👩 windows.rb_feminin</span>
            </label>
          </div>
          <div style="margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-radiobutton')">
              ▶ Tester .isChecked()
            </button>
          </div>
          <div class="sim-label-display" id="sim_res_radiobutton">
            <span class="sim-lbl-tag">Résultat isChecked() :</span>
            <span class="sim-lbl-val">Masculin actif (True)</span>
          </div>
        </div>
      </div>
    `;
  }

  // 6. QCheckBox
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
              <input type="checkbox" id="sim_cb_sport" checked onchange="runAlgoPratiqueSim('qt-checkbox')">
              <span>⚽ windows.cb_sport</span>
            </label>
            <label class="sim-qt-check">
              <input type="checkbox" id="sim_cb_musique" onchange="runAlgoPratiqueSim('qt-checkbox')">
              <span>🎵 windows.cb_musique</span>
            </label>
          </div>
          <div style="margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-checkbox')">
              ▶ Tester .isChecked()
            </button>
          </div>
          <div class="sim-label-display" id="sim_res_checkbox">
            <span class="sim-lbl-tag">Options cochées :</span>
            <span class="sim-lbl-val">['Sport']</span>
          </div>
        </div>
      </div>
    `;
  }

  // 7. QComboBox
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
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-combobox')">▶ currentText()</button>
            <button type="button" class="sim-qt-action-pill" onclick="simAddComboItem('Monastir')">➕ addItem("Monastir")</button>
            <button type="button" class="sim-qt-action-pill" onclick="simSetComboEmpty('qt-combobox')">⚡ setCurrentIndex(-1)</button>
          </div>
          <div class="sim-label-display" id="sim_res_combobox">
            <span class="sim-lbl-tag">currentText() & currentIndex() :</span>
            <span class="sim-lbl-val">Tunis (indice 0)</span>
          </div>
        </div>
      </div>
    `;
  }

  // 8. QLabel
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
          <div style="margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-label')">
              ✍️ windows.Nom_Label.setText(...)
            </button>
          </div>
          <div class="sim-live-label-box">
            <div style="font-size: 0.75rem; color: #38bdf8; font-weight: 700; margin-bottom: 4px;">W.Nom_Label (Rendu Visuel) :</div>
            <div id="sim_target_label" class="sim-rendered-label">Félicitations ! Admis au Bac STI</div>
          </div>
        </div>
      </div>
    `;
  }

  // 9. QSpinBox
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
            <input type="number" id="sim_sb_val" class="sim-qt-input" value="4" min="1" max="100" onchange="runAlgoPratiqueSim('qt-spinbox')">
          </div>
          <div class="sim-form-row">
            <label class="sim-label">windows.dsb_prix (float) :</label>
            <input type="number" id="sim_dsb_val" class="sim-qt-input" value="12.50" step="0.5" onchange="runAlgoPratiqueSim('qt-spinbox')">
          </div>
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-spinbox')">▶ .value()</button>
            <button type="button" class="sim-qt-action-pill" onclick="simSetSpinValue(10)">✍️ setValue(10)</button>
          </div>
          <div class="sim-label-display" id="sim_res_spinbox">
            <span class="sim-lbl-tag">Calcul .value() :</span>
            <span class="sim-lbl-val">4 × 12.50 = 50.00 DT (Directement int/float sans conversion)</span>
          </div>
        </div>
      </div>
    `;
  }

  // 10. QDateEdit
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
            <input type="date" id="sim_date_input" class="sim-qt-input" value="2006-06-15" onchange="runAlgoPratiqueSim('qt-dateedit')">
          </div>
          <div style="margin: 8px 0;">
            <button type="button" class="sim-qt-action-pill" onclick="runAlgoPratiqueSim('qt-dateedit')">
              ▶ date().toString("dd/MM/yyyy")
            </button>
          </div>
          <div class="sim-label-display" id="sim_res_date">
            <span class="sim-lbl-tag">Date formatée :</span>
            <span class="sim-lbl-val">15/06/2006</span>
          </div>
        </div>
      </div>
    `;
  }

  // 11, 12, 13. QMessageBox (critical, information, warning)
  if (id === 'qt-msgbox-critical' || id === 'qt-msgbox-info' || id === 'qt-msgbox-warning') {
    const isCrit = id === 'qt-msgbox-critical';
    const isWarn = id === 'qt-msgbox-warning';
    const btnColor = isCrit ? '#ef4444' : (isWarn ? '#f59e0b' : '#10b981');
    const btnLabel = isCrit ? '🚨 Déclencher QMessageBox.critical' : (isWarn ? '⚠️ Déclencher QMessageBox.warning' : 'ℹ️ Déclencher QMessageBox.information');

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
            <span class="sim-lbl-val">Cliquez sur le bouton pour afficher la boîte modale</span>
          </div>
        </div>
      </div>
    `;
  }

  // 14. QTableWidget
  if (id === 'qt-tablewidget') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • QTableWidget (windows.tw_eleves)</span>
        </div>
        <div class="qt-window-canvas">
          <div style="overflow-x: auto; margin-bottom: 8px;">
            <table class="sim-qt-table" id="sim_table_widget" style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
              <thead>
                <tr style="background: #1e293b; color: #38bdf8; border-bottom: 2px solid #38bdf8;">
                  <th style="padding: 6px 8px; text-align: left;">N° Inscr</th>
                  <th style="padding: 6px 8px; text-align: left;">Nom & Prénom</th>
                  <th style="padding: 6px 8px; text-align: left;">Moyenne</th>
                  <th style="padding: 6px 8px; text-align: left;">Mention</th>
                </tr>
              </thead>
              <tbody id="sim_table_tbody">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 5px 8px;">101</td><td style="padding: 5px 8px;">Ben Salah Youssef</td><td style="padding: 5px 8px;">15.50</td><td style="padding: 5px 8px; color: #34d399;">Bien</td></tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 5px 8px;">102</td><td style="padding: 5px 8px;">Gharbi Mariem</td><td style="padding: 5px 8px;">13.25</td><td style="padding: 5px 8px; color: #34d399;">Assez Bien</td></tr>
              </tbody>
            </table>
          </div>
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px;">
            <input type="text" id="sim_tw_inscr" placeholder="N° (ex: 103)" value="103" style="flex: 1; min-width: 50px; padding: 4px 6px; background: #0f172a; border: 1px solid #334155; color: #fff; border-radius: 4px; font-size: 0.78rem;">
            <input type="text" id="sim_tw_nom" placeholder="Nom (ex: Dridi Amine)" value="Dridi Amine" style="flex: 2; min-width: 90px; padding: 4px 6px; background: #0f172a; border: 1px solid #334155; color: #fff; border-radius: 4px; font-size: 0.78rem;">
            <input type="text" id="sim_tw_moy" placeholder="Moy (ex: 16.00)" value="16.00" style="flex: 1; min-width: 50px; padding: 4px 6px; background: #0f172a; border: 1px solid #334155; color: #fff; border-radius: 4px; font-size: 0.78rem;">
            <button type="button" class="sim-qt-btn" onclick="simAddTableRow()" style="padding: 4px 10px; font-size: 0.78rem; background: #10b981; color: #000; font-weight: 700; border-radius: 4px; border: none; cursor: pointer;">➕ .setItem()</button>
            <button type="button" class="sim-qt-btn" onclick="simClearTable()" style="padding: 4px 10px; font-size: 0.78rem; background: #f43f5e; color: #fff; font-weight: 700; border-radius: 4px; border: none; cursor: pointer;">🧹 Vider</button>
          </div>
          <div class="sim-label-display" id="sim_res_tablewidget">
            <span class="sim-lbl-tag">windows.tw_eleves.rowCount() :</span>
            <span class="sim-lbl-val" id="sim_tw_count">2 ligne(s) enregistrée(s)</span>
          </div>
        </div>
      </div>
    `;
  }

  // 15, 16, 17, 18. Contrôles de Saisie Bac
  if (id.startsWith('qt-valid-')) {
    let defVal = '';
    let placeholder = '';
    let testLabel = 'Valider';
    if (id === 'qt-valid-empty') { defVal = ''; placeholder = 'Laissez vide ou tapez un nom...'; testLabel = '🛡️ Tester if texte == ""'; }
    else if (id === 'qt-valid-alpha') { defVal = 'Sami123'; placeholder = 'Ex: Sami (alphabétique) ou Sami12 (erreur)...'; testLabel = '🛡️ Tester if not texte.isalpha()'; }
    else if (id === 'qt-valid-numeric') { defVal = '25'; placeholder = 'Ex: 15 (valide) ou 25 (hors 0-20)...'; testLabel = '🛡️ Tester if not (0 <= note <= 20)'; }
    else if (id === 'qt-valid-length') { defVal = '09876'; placeholder = 'Ex: 09876543 (8 chiffres) ou 09876 (erreur)...'; testLabel = '🛡️ Tester len(cin) == 8 and cin.isdigit()'; }

    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Contrôle de Saisie Bac • ${item.qtWidget}</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">Valeur à tester :</label>
            <input type="text" id="sim_input_${id}" class="sim-qt-input" value="${defVal}" placeholder="${placeholder}" oninput="runAlgoPratiqueSim('${id}')">
          </div>
          <div style="margin: 8px 0;">
            <button type="button" class="sim-qt-btn" onclick="runAlgoPratiqueSim('${id}')">
              ${testLabel}
            </button>
          </div>
          <div class="sim-label-display" id="sim_res_${id}">
            <span class="sim-lbl-tag">Résultat du contrôle :</span>
            <span class="sim-lbl-val">Cliquez sur Valider pour tester</span>
          </div>
        </div>
      </div>
    `;
  }

  // 19. Réinitialisation complète
  if (id === 'qt-clear-reset') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Qt Designer • Formulaire (Réinitialisation)</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">windows.le_nom :</label>
            <input type="text" id="sim_reset_nom" class="sim-qt-input" value="Mariem Trabelsi">
          </div>
          <div class="sim-form-row">
            <label class="sim-label">windows.sb_note :</label>
            <input type="number" id="sim_reset_note" class="sim-qt-input" value="16">
          </div>
          <div class="sim-form-row">
            <label class="sim-label">windows.cb_option :</label>
            <label style="color: #cbd5e1; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;">
              <input type="checkbox" id="sim_reset_cb" checked> Option Informatique
            </label>
          </div>
          <div style="margin-top: 10px;">
            <button type="button" class="sim-qt-btn" onclick="simDoClearReset()" style="background: #f43f5e; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; cursor: pointer; width: 100%;">
              🧹 windows.btn_annuler (Réinitialiser tout)
            </button>
          </div>
          <div class="sim-label-display" id="sim_res_clear_reset" style="margin-top: 10px;">
            <span class="sim-lbl-tag">Statut des champs :</span>
            <span class="sim-lbl-val">Formulaire rempli (Prêt pour remise à zéro)</span>
          </div>
        </div>
      </div>
    `;
  }

  // 20. Modèle Type Examen (Workflow 4 Étapes)
  if (id === 'qt-bac-workflow') {
    return `
      <div class="qt-window-mockup">
        <div class="qt-window-titlebar">
          <div class="qt-window-controls"><span class="qt-dot close"></span><span class="qt-dot min"></span><span class="qt-dot max"></span></div>
          <span class="qt-window-title">Épreuve Pratique Bac • Projet Complet 4 Étapes</span>
        </div>
        <div class="qt-window-canvas">
          <div class="sim-form-row">
            <label class="sim-label">1. windows.le_nom :</label>
            <input type="text" id="sim_wf_nom" class="sim-qt-input" value="Khedher Rayen" placeholder="Nom élève...">
          </div>
          <div class="sim-form-row">
            <label class="sim-label">2. windows.le_note :</label>
            <input type="number" id="sim_wf_note" class="sim-qt-input" value="15.25" placeholder="Note (0 à 20)...">
          </div>
          <div class="sim-form-row">
            <label class="sim-label">3. windows.cb_section :</label>
            <select id="sim_wf_section" class="sim-qt-select">
              <option value="STI" selected>Sciences & Technologies de l'Informatique (STI)</option>
              <option value="Sciences">Sciences Expérimentales</option>
              <option value="Maths">Mathématiques</option>
            </select>
          </div>
          <div style="margin-top: 10px;">
            <button type="button" class="sim-qt-btn" onclick="simRunBacWorkflow()" style="background: linear-gradient(135deg, #059669, #10b981); color: #fff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 800; cursor: pointer; width: 100%;">
              🚀 4. windows.btn_valider (Lancer les 4 Étapes)
            </button>
          </div>
          <div class="sim-label-display" id="sim_res_workflow" style="margin-top: 10px;">
            <span class="sim-lbl-tag">windows.lbl_resultat :</span>
            <span class="sim-lbl-val">(En attente d'exécution...)</span>
          </div>
        </div>
      </div>
    `;
  }

  // Fallback général sécurisé
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
// 3. Exécution Interactive Thonny Python Simulator (20 Notions)
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
      `[Thonny ${now}] from PyQt5.QtWidgets import QApplication`,
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
      `✓ Label Qt mis à jour avec la chaîne formatée !`
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
      `[Thonny] if windows.rb_masculin.isChecked(): genre = 'M' ➔ ${isM}`,
      `[Thonny] elif windows.rb_feminin.isChecked(): genre = 'F' ➔ ${!isM}`,
      `➔ Résultat final : genre = "${genre}"`
    ];
  } else if (itemId === 'qt-checkbox') {
    const cbS = document.getElementById('sim_cb_sport');
    const cbM = document.getElementById('sim_cb_musique');
    const res = document.getElementById('sim_res_checkbox');
    const checked = [];
    if (cbS && cbS.checked) checked.push('Sport');
    if (cbM && cbM.checked) checked.push('Musique');
    const displayVal = checked.length ? JSON.stringify(checked) : 'Aucun';
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">${displayVal}</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] options = []`,
      `[Thonny] if windows.cb_sport.isChecked(): options.append('Sport') ➔ ${cbS && cbS.checked}`,
      `[Thonny] if windows.cb_musique.isChecked(): options.append('Musique') ➔ ${cbM && cbM.checked}`,
      `➔ Liste options : ${displayVal}`
    ];
  } else if (itemId === 'qt-combobox') {
    const combo = document.getElementById('sim_combo_box');
    const res = document.getElementById('sim_res_combobox');
    const val = combo ? combo.value : '';
    const idx = combo ? combo.selectedIndex : -1;
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #38bdf8;">"${val}" (Index: ${idx})</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] ville = windows.combo_ville.currentText() ➔ "${val}"`,
      `[Thonny] indice = windows.combo_ville.currentIndex() ➔ ${idx}`,
      idx === -1 ? `⚠️ Aucun choix sélectionné (indice -1). Contrôle de saisie obligatoire !` : `✓ Choix validé !`
    ];
  } else if (itemId === 'qt-label') {
    const inp = document.getElementById('sim_input_label');
    const lbl = document.getElementById('sim_target_label');
    const val = inp ? inp.value : '';
    if (lbl) lbl.textContent = val;
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] windows.lbl_resultat.setText("${val}")`,
      `✓ Contenu du QLabel mis à jour visuellement.`
    ];
  } else if (itemId === 'qt-spinbox') {
    const sb = document.getElementById('sim_sb_val');
    const dsb = document.getElementById('sim_dsb_val');
    const res = document.getElementById('sim_res_spinbox');
    const valSb = sb ? parseInt(sb.value, 10) : 0;
    const valDsb = dsb ? parseFloat(dsb.value) : 0;
    const total = (valSb * valDsb).toFixed(2);
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">${valSb} × ${valDsb} = ${total} DT</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] qte = windows.sb_quantite.value() ➔ ${valSb} (type: int)`,
      `[Thonny] prix = windows.dsb_prix.value() ➔ ${valDsb} (type: float)`,
      `[Thonny] total = qte * prix ➔ ${total}`,
      `💡 Note : .value() renvoie directement un int ou float sans int() ni float() !`
    ];
  } else if (itemId === 'qt-dateedit') {
    const inp = document.getElementById('sim_date_input');
    const res = document.getElementById('sim_res_date');
    const val = inp ? inp.value : '';
    const parts = val.split('-');
    const formatted = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : val;
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #38bdf8;">${formatted}</strong>`;
    }
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] date_obj = windows.de_naissance.date()`,
      `[Thonny] ch_date = date_obj.toString("dd/MM/yyyy") ➔ "${formatted}"`,
      `✓ Date extraite et formatée en chaîne pour traitement ou BD.`
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
  } else if (itemId === 'qt-tablewidget') {
    logLines = [
      `>>> %Run script_bac.py`,
      `[Thonny] rows = windows.tw_eleves.rowCount()`,
      `[Thonny] windows.tw_eleves.setRowCount(rows + 1)`,
      `[Thonny] windows.tw_eleves.setItem(rows, 0, QTableWidgetItem(str(num)))`,
      `[Thonny] windows.tw_eleves.setItem(rows, 1, QTableWidgetItem(nom))`,
      `[Thonny] windows.tw_eleves.setItem(rows, 2, QTableWidgetItem(str(moyenne)))`,
      `✓ Ligne insérée dynamiquement dans la grille QTableWidget !`
    ];
  } else if (itemId === 'qt-clear-reset') {
    simDoClearReset();
    return;
  } else if (itemId === 'qt-bac-workflow') {
    simRunBacWorkflow();
    return;
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
    else if (l.includes('❌') || l.includes('Erreur') || l.includes('Échec')) cl += ' error';
    else if (l.includes('✓') || l.includes('Succès')) cl += ' success';
    else if (l.includes('💡') || l.includes('⚠️')) cl += ' warn';
    return `<div class="${cl}">${escapeHtmlSafe(l)}</div>`;
  }).join('');
  terminal.scrollTop = terminal.scrollHeight;
}

// -------------------------------------------------------------
// 4. Fonctions Utilitaires & Actions Interactives pour la Sim
// -------------------------------------------------------------
function simSetLineEditText(text) {
  const inp = document.getElementById('sim_le_nom');
  if (inp) inp.value = text;
  runAlgoPratiqueSim('qt-lineedit');
}

function simClearLineEdit() {
  const inp = document.getElementById('sim_le_nom');
  const age = document.getElementById('sim_le_age');
  if (inp) inp.value = '';
  if (age) age.value = '';
  const resLbl = document.getElementById('sim_res_lineedit');
  if (resLbl) resLbl.querySelector('.sim-lbl-val').innerHTML = '<span style="color: #94a3b8;">Champs vidés par .clear()</span>';
  
  const terminal = document.getElementById('sim_terminal_qt-lineedit');
  if (terminal) {
    terminal.innerHTML = `
      <div class="py-term-line prompt">>>> %Run script_bac.py</div>
      <div class="py-term-line">[Thonny] windows.le_nom.clear()</div>
      <div class="py-term-line">[Thonny] windows.le_age.clear()</div>
      <div class="py-term-line success">✓ Champs vidés avec succès !</div>
    `;
  }
}

function simSetTextEditText(text) {
  const te = document.getElementById('sim_te_val');
  if (te) te.value = text;
  runAlgoPratiqueSim('qt-textedit');
}

function simClearTextEdit() {
  const te = document.getElementById('sim_te_val');
  if (te) te.value = '';
  const res = document.getElementById('sim_res_textedit');
  if (res) res.querySelector('.sim-lbl-val').innerHTML = '<span style="color: #94a3b8;">Zone de texte vidée par .clear()</span>';
  
  const terminal = document.getElementById('sim_terminal_qt-textedit');
  if (terminal) {
    terminal.innerHTML = `
      <div class="py-term-line prompt">>>> %Run script_bac.py</div>
      <div class="py-term-line">[Thonny] windows.nomTextEdit.clear()</div>
      <div class="py-term-line success">✓ Zone de texte vidée !</div>
    `;
  }
}

function simSetSpinValue(val) {
  const sb = document.getElementById('sim_sb_val');
  if (sb) sb.value = val;
  runAlgoPratiqueSim('qt-spinbox');
}

function simAddComboItem(item) {
  const combo = document.getElementById('sim_combo_box');
  if (combo) {
    const opt = document.createElement('option');
    opt.value = item;
    opt.textContent = `${item} (Index: ${combo.options.length})`;
    combo.appendChild(opt);
    combo.value = item;
    runAlgoPratiqueSim('qt-combobox');
  }
}

function simSetComboEmpty(itemId) {
  const combo = document.getElementById('sim_combo_box');
  if (combo) {
    combo.selectedIndex = -1;
    const res = document.getElementById('sim_res_combobox');
    if (res) {
      res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #ef4444;">Aucun élément sélectionné (Index: -1)</strong>`;
    }
    const terminal = document.getElementById(`sim_terminal_${itemId}`);
    if (terminal) {
      terminal.innerHTML = `
        <div class="py-term-line prompt">>>> %Run script_bac.py</div>
        <div class="py-term-line">[Thonny] windows.nomComboBox.setCurrentIndex(-1)</div>
        <div class="py-term-line warn">⚠️ currentIndex() = -1 (Sélection vide)</div>
        <div class="py-term-line error">❌ if windows.nomComboBox.currentIndex() == -1: QMessageBox.critical(...)</div>
      `;
    }
  }
}

function simAddTableRow() {
  const inscrInput = document.getElementById('sim_tw_inscr');
  const nomInput = document.getElementById('sim_tw_nom');
  const moyInput = document.getElementById('sim_tw_moy');
  const tbody = document.getElementById('sim_table_tbody');
  const countLbl = document.getElementById('sim_tw_count');

  const num = inscrInput ? inscrInput.value.trim() : '103';
  const nom = nomInput ? nomInput.value.trim() : 'Nouveau';
  const moy = moyInput ? parseFloat(moyInput.value.trim()) : 12.0;
  const mention = moy >= 16 ? 'Très Bien' : (moy >= 14 ? 'Bien' : (moy >= 12 ? 'Assez Bien' : (moy >= 10 ? 'Passable' : 'Ajourné')));

  if (tbody) {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
    tr.innerHTML = `
      <td style="padding: 5px 8px;">${escapeHtmlSafe(num)}</td>
      <td style="padding: 5px 8px;">${escapeHtmlSafe(nom)}</td>
      <td style="padding: 5px 8px;">${moy.toFixed(2)}</td>
      <td style="padding: 5px 8px; color: ${moy >= 10 ? '#34d399' : '#f43f5e'};">${mention}</td>
    `;
    tbody.appendChild(tr);

    const rowCount = tbody.querySelectorAll('tr').length;
    if (countLbl) countLbl.textContent = `${rowCount} ligne(s) enregistrée(s)`;

    const terminal = document.getElementById('sim_terminal_qt-tablewidget');
    if (terminal) {
      terminal.innerHTML = `
        <div class="py-term-line prompt">>>> %Run script_bac.py</div>
        <div class="py-term-line">[Thonny] row = windows.tw_eleves.rowCount() ➔ ${rowCount - 1}</div>
        <div class="py-term-line">[Thonny] windows.tw_eleves.setRowCount(${rowCount})</div>
        <div class="py-term-line">[Thonny] windows.tw_eleves.setItem(row, 0, QTableWidgetItem("${num}"))</div>
        <div class="py-term-line">[Thonny] windows.tw_eleves.setItem(row, 1, QTableWidgetItem("${nom}"))</div>
        <div class="py-term-line">[Thonny] windows.tw_eleves.setItem(row, 2, QTableWidgetItem("${moy.toFixed(2)}"))</div>
        <div class="py-term-line">[Thonny] windows.tw_eleves.setItem(row, 3, QTableWidgetItem("${mention}"))</div>
        <div class="py-term-line success">✓ Élève ${nom} inséré dans la table avec succès !</div>
      `;
    }
  }
}

function simClearTable() {
  const tbody = document.getElementById('sim_table_tbody');
  const countLbl = document.getElementById('sim_tw_count');
  if (tbody) {
    tbody.innerHTML = '';
    if (countLbl) countLbl.textContent = '0 ligne (Tableau vidé)';
    const terminal = document.getElementById('sim_terminal_qt-tablewidget');
    if (terminal) {
      terminal.innerHTML = `
        <div class="py-term-line prompt">>>> %Run script_bac.py</div>
        <div class="py-term-line">[Thonny] windows.tw_eleves.setRowCount(0)</div>
        <div class="py-term-line success">✓ Tableau réinitialisé (0 ligne).</div>
      `;
    }
  }
}

function simDoClearReset() {
  const nom = document.getElementById('sim_reset_nom');
  const note = document.getElementById('sim_reset_note');
  const cb = document.getElementById('sim_reset_cb');
  const res = document.getElementById('sim_res_clear_reset');

  if (nom) nom.value = '';
  if (note) note.value = '0';
  if (cb) cb.checked = false;

  if (res) {
    res.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: #34d399;">✓ Tous les champs ont été réinitialisés !</strong>`;
  }

  const terminal = document.getElementById('sim_terminal_qt-clear-reset');
  if (terminal) {
    terminal.innerHTML = `
      <div class="py-term-line prompt">>>> %Run script_bac.py</div>
      <div class="py-term-line">[Thonny] windows.le_nom.clear()</div>
      <div class="py-term-line">[Thonny] windows.sb_note.setValue(0)</div>
      <div class="py-term-line">[Thonny] windows.cb_option.setChecked(False)</div>
      <div class="py-term-line success">✓ Interface remise à zéro avec succès !</div>
    `;
  }
}

function simRunBacWorkflow() {
  const nomInp = document.getElementById('sim_wf_nom');
  const noteInp = document.getElementById('sim_wf_note');
  const secInp = document.getElementById('sim_wf_section');
  const resLbl = document.getElementById('sim_res_workflow');
  const terminal = document.getElementById('sim_terminal_qt-bac-workflow');

  const nom = nomInp ? nomInp.value.trim() : '';
  const note = noteInp ? parseFloat(noteInp.value.trim()) : NaN;
  const section = secInp ? secInp.value : 'STI';

  // Étape 1 : Vérification non vide
  if (!nom) {
    showSimQtDialog('Erreur de Saisie', 'Le nom de l\'élève est obligatoire !', 'critical');
    if (resLbl) resLbl.querySelector('.sim-lbl-val').innerHTML = '<strong style="color: #ef4444;">Erreur : Nom vide !</strong>';
    if (terminal) {
      terminal.innerHTML = `
        <div class="py-term-line prompt">>>> %Run script_bac.py</div>
        <div class="py-term-line error">❌ Étape 1 : if nom == "": QMessageBox.critical(...)</div>
        <div class="py-term-line warn">return (Traitement stoppé)</div>
      `;
    }
    return;
  }

  // Étape 2 : Vérification note
  if (isNaN(note) || note < 0 || note > 20) {
    showSimQtDialog('Erreur de Saisie', 'La note doit être comprise entre 0 et 20 !', 'critical');
    if (resLbl) resLbl.querySelector('.sim-lbl-val').innerHTML = '<strong style="color: #ef4444;">Erreur : Note invalide !</strong>';
    if (terminal) {
      terminal.innerHTML = `
        <div class="py-term-line prompt">>>> %Run script_bac.py</div>
        <div class="py-term-line error">❌ Étape 2 : if not (0 <= note <= 20): QMessageBox.critical(...)</div>
        <div class="py-term-line warn">return (Traitement stoppé)</div>
      `;
    }
    return;
  }

  // Étape 3 & 4 : Traitement & Affichage
  const decision = note >= 10 ? 'Admis' : 'Ajourné';
  const mention = note >= 16 ? 'Très Bien' : (note >= 14 ? 'Bien' : (note >= 12 ? 'Assez Bien' : (note >= 10 ? 'Passable' : 'Refusé')));
  const resultText = `Élève ${nom} (${section}) : ${decision} (${mention}) - Note : ${note.toFixed(2)}/20`;

  if (resLbl) {
    resLbl.querySelector('.sim-lbl-val').innerHTML = `<strong style="color: ${note >= 10 ? '#34d399' : '#f43f5e'};">${resultText}</strong>`;
  }

  showSimQtDialog('Résultat d\'Examen', resultText, 'info');

  if (terminal) {
    terminal.innerHTML = `
      <div class="py-term-line prompt">>>> %Run script_bac.py</div>
      <div class="py-term-line success">✓ Étape 1 : Lecture des champs réussie (nom="${nom}", note=${note})</div>
      <div class="py-term-line success">✓ Étape 2 : Tous les contrôles de saisie sont validés avec succès</div>
      <div class="py-term-line">[Thonny] Étape 3 : Calcul décision ➔ "${decision}" (${mention})</div>
      <div class="py-term-line">[Thonny] Étape 4 : windows.lbl_resultat.setText("${resultText}")</div>
      <div class="py-term-line">[Thonny] QMessageBox.information(windows, "Résultat", "${resultText}")</div>
      <div class="py-term-line success">✓ Workflow complet du sujet pratique exécuté à 100% sans erreur !</div>
    `;
  }
}

// -------------------------------------------------------------
// 5. Boîte de Dialogue Modale Simulée (QMessageBox)
// -------------------------------------------------------------
function showSimQtDialog(title, message, type = 'info') {
  let overlay = document.getElementById('simQtDialogOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'simQtDialogOverlay';
    overlay.className = 'sim-qt-dialog-overlay';
    document.body.appendChild(overlay);
  }

  const iconEmoji = type === 'critical' ? '❌' : (type === 'warning' ? '⚠️' : 'ℹ️');
  const borderColor = type === 'critical' ? '#ef4444' : (type === 'warning' ? '#f59e0b' : '#38bdf8');

  overlay.innerHTML = `
    <div class="sim-qt-dialog-box" style="border-color: ${borderColor};">
      <div class="sim-qt-dialog-header">
        <span>${iconEmoji} ${escapeHtmlSafe(title)}</span>
        <button type="button" class="sim-qt-close-btn" onclick="closeSimQtDialog()">&times;</button>
      </div>
      <div class="sim-qt-dialog-body">
        <div style="font-size: 2rem;">${iconEmoji}</div>
        <div style="font-size: 0.95rem; color: #f8fafc; line-height: 1.5;">${escapeHtmlSafe(message)}</div>
      </div>
      <div class="sim-qt-dialog-footer">
        <button type="button" class="sim-qt-dialog-ok" onclick="closeSimQtDialog()">OK</button>
      </div>
    </div>
  `;
  overlay.style.display = 'flex';
}

function closeSimQtDialog() {
  const overlay = document.getElementById('simQtDialogOverlay');
  if (overlay) overlay.style.display = 'none';
}

// -------------------------------------------------------------
// 6. Modale Plein Écran pour Code Complet sans Scroll
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
    <!-- 1. En-tête & Rôle au Bac -->
    <div class="modal-section" style="background: rgba(56, 189, 248, 0.07); border: 1px solid rgba(56, 189, 248, 0.25); border-left: 4px solid #38bdf8; border-radius: 8px; padding: 16px 20px; margin-bottom: 18px;">
      <div class="modal-section-title" style="color: #38bdf8; font-weight: 800; font-size: 1.05rem; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span>💡</span>
        <span>Rôle & Explication au Bac STI</span>
      </div>
      <p class="modal-text" style="font-size: 1.02rem; line-height: 1.65; color: #e2e8f0; margin: 0;">
        ${item.description || item.summary}
      </p>
    </div>

    <!-- 2. Instructions Pas-à-Pas dans Qt Designer -->
    ${item.howToUse ? `
      <div class="modal-section" style="background: rgba(245, 158, 11, 0.07); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px 20px; margin-bottom: 18px;">
        <div class="modal-section-title" style="color: #f59e0b; font-weight: 800; font-size: 1.05rem; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span>🛠️</span>
          <span>Dans Qt Designer (Création de l'interface .ui)</span>
        </div>
        <p style="margin: 0; line-height: 1.6; color: #fde68a; font-size: 0.95rem; white-space: pre-line;">${item.howToUse}</p>
      </div>
    ` : ''}

    <!-- 3. Piège Fréquent au Bac -->
    ${item.bacTips ? `
      <div class="algo-bac-tips" style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.3); border-left: 4px solid #f43f5e; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px; font-size: 0.95rem;">
        <strong style="color: #f43f5e;">⚠️ Piège Fréquent à l'Épreuve du Bac :</strong>
        <span style="color: #fecdd3; margin-left: 4px;">${item.bacTips}</span>
      </div>
    ` : ''}

    <!-- 4. CODE PYTHON COMPLET DANS THONNY SANS SCROLL (COLORATION SYNTAXIQUE) -->
    <div class="modal-section" style="margin-bottom: 22px;">
      <div class="modal-section-title" style="color: #34d399; font-weight: 800; font-size: 1.05rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>🐍</span>
          <span>Ce que TU dois écrire dans Thonny (Code Python Officiel)</span>
        </div>
        <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600;">(Code complet affiché sans ascenseur)</span>
      </div>
      
      <div class="annexe-code-container" style="background: #050811; border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 10px; overflow: hidden;">
        <div class="annexe-code-header" style="background: #09131e; padding: 10px 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
          <span style="color: #34d399; font-weight: 800; font-size: 0.82rem; letter-spacing: 0.5px;">📜 script_bac.py • Thonny Python 3.10</span>
          <button type="button" class="annexe-copy-btn" onclick='copyCodeText(${rawThonnyJson}, this)' style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); padding: 5px 12px; border-radius: 6px; font-weight: 700; cursor: pointer;">📋 Copier le code complet</button>
        </div>
        <pre class="annexe-code-pre" style="white-space: pre-wrap !important; word-break: break-word !important; overflow: visible !important; height: auto !important; max-height: none !important; margin: 0; padding: 18px; background: transparent;"><code class="python-syntax-view">${highlightedCode}</code></pre>
      </div>
    </div>

    <!-- 5. LABORATOIRE INTERACTIF : QT DESIGNER ➔ THONNY PYTHON -->
    <div class="modal-section">
      <div class="modal-section-title" style="color: #38bdf8; font-weight: 800; font-size: 1.05rem; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
        <span>🔬</span>
        <span>Laboratoire Interactif : Qt Designer ➔ Thonny Python</span>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0 0 14px 0;">
        Manipulez l'interface Qt ci-dessous ou cliquez sur <strong>'Exécuter dans Thonny (Run / F5)'</strong> pour observer les variables et l'effet visuel en temps réel !
      </p>

      <div class="qt-thonny-lab-grid">
        <!-- Colonne 1 : Fenêtre Simulée Qt Designer -->
        <div class="lab-col-qt">
          <div style="font-size: 0.76rem; font-weight: 800; color: #38bdf8; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">
            🖥️ Fenêtre Simulée (interface.ui)
          </div>
          ${buildQtDesignerSimStage(item)}
        </div>

        <!-- Colonne 2 : Terminal Thonny Python -->
        <div class="lab-col-thonny">
          <div style="font-size: 0.76rem; font-weight: 800; color: #34d399; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">
            🐍 Console Thonny Python (Shell)
          </div>
          <div class="thonny-terminal-wrap">
            <div class="thonny-terminal-header">
              <span class="thonny-term-title">🐍 Thonny Shell • script_bac.py</span>
              <button type="button" class="thonny-run-btn" onclick="runAlgoPratiqueSim('${item.id}')">
                ▶ Exécuter dans Thonny (Run / F5)
              </button>
            </div>
            <div class="thonny-terminal-screen" id="sim_terminal_${item.id}">
              <div class="py-term-line prompt">>>> %Run script_bac.py</div>
              <div class="py-term-line" style="color: #64748b;">Prêt. Modifiez l'interface Qt ci-contre et cliquez sur 'Exécuter dans Thonny' pour voir le résultat.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}
