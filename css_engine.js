
// ===================================================================
// MOTEUR D'EFFETS CSS VISUELS EXAGÉRÉS & COMPARATIFS (AVANT vs APRÈS)
// Conforme à l'Annexe Officielle Baccalauréat STI (61 Propriétés)
// ===================================================================

const CSS_EXAGGERATED_MAP = {
  // --- 1. SÉLECTEURS CSS (1-12) ---
  'css-sel-universal': {
    propName: '*',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 4px solid #10b981; color: #34d399; background: rgba(16, 185, 129, 0.25); box-shadow: 0 0 25px rgba(16, 185, 129, 0.7); transform: scale(1.08);',
    innerHtml: '<div style="font-size:0.8rem; font-weight:800;">TOUS LES ÉLÉMENTS (*)</div>',
    min: 0, max: 30, step: 1, unit: 'px', defaultValue: 25,
    valLabel: (v) => `Halo : ${v}px`,
    applyDynamic: (v) => `border: 4px solid #10b981; color: #34d399; background: rgba(16, 185, 129, 0.25); box-shadow: 0 0 ${v}px rgba(16, 185, 129, 0.8); transform: scale(${1 + v/150});`,
    highlightedLine: '* { border: 4px solid #10b981; box-shadow: 0 0 25px #10b981; }',
    snippet: '* {\n  /* Sélectionne absolument tous les éléments */\n  border: 4px solid #10b981;\n  box-shadow: 0 0 25px #10b981;\n}'
  },
  'css-sel-element': {
    propName: 'element',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 3px solid #38bdf8; color: #38bdf8; background: rgba(56, 189, 248, 0.25); box-shadow: 0 0 20px rgba(56, 189, 248, 0.6);',
    innerHtml: '<div style="font-size:0.85rem; font-weight:800;">&lt;p&gt; Paragraphe &lt;/p&gt;</div>',
    min: 1, max: 8, step: 1, unit: 'px', defaultValue: 4,
    valLabel: (v) => `Bordure : ${v}px`,
    applyDynamic: (v) => `border: ${v}px solid #38bdf8; color: #38bdf8; background: rgba(56, 189, 248, 0.25); box-shadow: 0 0 ${v * 5}px rgba(56, 189, 248, 0.6);`,
    highlightedLine: 'p { border: 3px solid #38bdf8; color: #38bdf8; }',
    snippet: 'p {\n  /* Applique le style à toutes les balises <p> */\n  border: 3px solid #38bdf8;\n  color: #38bdf8;\n}'
  },
  'css-sel-id': {
    propName: '#id',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 4px solid #f43f5e; color: #fff; background: rgba(244, 63, 94, 0.35); box-shadow: 0 0 30px rgba(244, 63, 94, 0.8); transform: scale(1.12);',
    innerHtml: '<div style="font-size:0.85rem; font-weight:900;">#unique (ID)</div>',
    min: 0, max: 40, step: 2, unit: 'px', defaultValue: 30,
    valLabel: (v) => `Éclat ID : ${v}px`,
    applyDynamic: (v) => `border: 4px solid #f43f5e; color: #fff; background: rgba(244, 63, 94, 0.35); box-shadow: 0 0 ${v}px rgba(244, 63, 94, 0.9); transform: scale(${1 + v/250});`,
    highlightedLine: '#unique { border: 4px solid #f43f5e; box-shadow: 0 0 30px #f43f5e; }',
    snippet: '#unique {\n  /* Ciblage unique prioritaire au Bac */\n  border: 4px solid #f43f5e;\n  box-shadow: 0 0 30px #f43f5e;\n}'
  },
  'css-sel-class': {
    propName: '.class',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 3px solid #f59e0b; color: #fde68a; background: rgba(245, 158, 11, 0.3); box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);',
    innerHtml: '<div style="font-size:0.85rem; font-weight:800;">.important (Classe)</div>',
    min: 1, max: 8, step: 1, unit: 'px', defaultValue: 3,
    valLabel: (v) => `Bordure : ${v}px`,
    applyDynamic: (v) => `border: ${v}px solid #f59e0b; color: #fde68a; background: rgba(245, 158, 11, 0.3); box-shadow: 0 0 ${v * 6}px rgba(245, 158, 11, 0.6);`,
    highlightedLine: '.important { border: 3px solid #f59e0b; background: rgba(245, 158, 11, 0.3); }',
    snippet: '.important {\n  /* Réutilisable sur plusieurs éléments */\n  border: 3px solid #f59e0b;\n  background: rgba(245, 158, 11, 0.3);\n}'
  },
  'css-sel-element-attr': {
    propName: 'element[attr]',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 3px solid #a855f7; color: #e9d5ff; background: rgba(168, 85, 247, 0.3); box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);',
    innerHtml: '<div style="font-size:0.8rem; font-weight:800;">input[type]</div>',
    min: 1, max: 6, step: 1, unit: 'px', defaultValue: 3,
    valLabel: (v) => `Bordure : ${v}px`,
    applyDynamic: (v) => `border: ${v}px solid #a855f7; color: #e9d5ff; background: rgba(168, 85, 247, 0.3); box-shadow: 0 0 ${v * 6}px rgba(168, 85, 247, 0.6);`,
    highlightedLine: 'input[type] { border: 3px solid #a855f7; }',
    snippet: 'input[type] {\n  /* Cible les balises ayant l\'attribut spécifié */\n  border: 3px solid #a855f7;\n}'
  },
  'css-sel-element-attr-val': {
    propName: 'element[attr=valeur]',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 4px solid #84cc16; color: #ecfccb; background: rgba(132, 204, 22, 0.3); box-shadow: 0 0 22px rgba(132, 204, 22, 0.7);',
    innerHtml: '<div style="font-size:0.8rem; font-weight:800;">input[type="text"]</div>',
    min: 1, max: 8, step: 1, unit: 'px', defaultValue: 4,
    valLabel: (v) => `Bordure : ${v}px`,
    applyDynamic: (v) => `border: ${v}px solid #84cc16; color: #ecfccb; background: rgba(132, 204, 22, 0.3); box-shadow: 0 0 ${v * 5}px rgba(132, 204, 22, 0.7);`,
    highlightedLine: 'input[type="text"] { border: 4px solid #84cc16; }',
    snippet: 'input[type="text"] {\n  /* Cible uniquement les zones de texte */\n  border: 4px solid #84cc16;\n}'
  },
  'css-sel-element-class': {
    propName: 'element.class',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 4px double #06b6d4; color: #cffafe; background: rgba(6, 182, 212, 0.3); box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);',
    innerHtml: '<div style="font-size:0.8rem; font-weight:800;">p.note (Spécifique)</div>',
    min: 2, max: 10, step: 2, unit: 'px', defaultValue: 4,
    valLabel: (v) => `Double bordure : ${v}px`,
    applyDynamic: (v) => `border: ${v}px double #06b6d4; color: #cffafe; background: rgba(6, 182, 212, 0.3); box-shadow: 0 0 ${v * 4}px rgba(6, 182, 212, 0.6);`,
    highlightedLine: 'p.note { border: 4px double #06b6d4; }',
    snippet: 'p.note {\n  /* Cible seulement les <p> avec la classe .note */\n  border: 4px double #06b6d4;\n}'
  },
  'css-sel-link': {
    propName: 'a:link',
    beforeStyle: 'color: #94a3b8; text-decoration: none;',
    afterStyle: 'color: #38bdf8; text-decoration: underline; font-weight: 800; font-size: 1.15rem; text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);',
    innerHtml: '<a href="#" style="color:inherit; text-decoration:inherit; font:inherit;">Lien non visité</a>',
    min: 12, max: 26, step: 1, unit: 'px', defaultValue: 18,
    valLabel: (v) => `Taille : ${v}px`,
    applyDynamic: (v) => `color: #38bdf8; text-decoration: underline; font-weight: 800; font-size: ${v}px; text-shadow: 0 0 12px rgba(56, 189, 248, 0.7);`,
    highlightedLine: 'a:link { color: #38bdf8; text-decoration: underline; }',
    snippet: 'a:link {\n  /* État initial d\'un lien non cliqué */\n  color: #38bdf8;\n  text-decoration: underline;\n}'
  },
  'css-sel-visited': {
    propName: 'a:visited',
    beforeStyle: 'color: #94a3b8; text-decoration: none;',
    afterStyle: 'color: #c084fc; text-decoration: underline; font-weight: 800; font-size: 1.15rem; text-shadow: 0 0 10px rgba(192, 132, 252, 0.5);',
    innerHtml: '<a href="#" style="color:inherit; text-decoration:inherit; font:inherit;">Lien déjà visité</a>',
    min: 12, max: 26, step: 1, unit: 'px', defaultValue: 18,
    valLabel: (v) => `Taille : ${v}px`,
    applyDynamic: (v) => `color: #c084fc; text-decoration: underline; font-weight: 800; font-size: ${v}px; text-shadow: 0 0 12px rgba(192, 132, 252, 0.7);`,
    highlightedLine: 'a:visited { color: #c084fc; }',
    snippet: 'a:visited {\n  /* État après consultation du lien */\n  color: #c084fc;\n}'
  },
  'css-sel-hover': {
    propName: 'a:hover',
    beforeStyle: 'background: #1e293b; color: #94a3b8; border: 1px dashed #475569; transform: scale(1);',
    afterStyle: 'background: #facc15; color: #000; font-weight: 900; transform: scale(1.25); box-shadow: 0 12px 30px rgba(250, 204, 21, 0.8); border: 2px solid #fff;',
    innerHtml: '<div style="font-size:0.9rem; font-weight:800;">SURVOL SOURIS</div>',
    min: 100, max: 150, step: 5, unit: '%', defaultValue: 125,
    valLabel: (v) => `Échelle survol : ${v}%`,
    applyDynamic: (v) => `background: #facc15; color: #000; font-weight: 900; transform: scale(${v/100}); box-shadow: 0 12px 30px rgba(250, 204, 21, 0.8); border: 2px solid #fff;`,
    highlightedLine: 'a:hover { background: #facc15; transform: scale(1.25); }',
    snippet: 'a:hover, .boite:hover {\n  /* Se déclenche au passage de la souris */\n  background: #facc15;\n  color: #000;\n  transform: scale(1.25);\n}'
  },
  'css-sel-active': {
    propName: 'a:active',
    beforeStyle: 'background: #1e293b; color: #94a3b8; transform: scale(1);',
    afterStyle: 'background: #ef4444; color: #fff; font-weight: 900; transform: scale(0.85); box-shadow: inset 0 4px 10px rgba(0,0,0,0.7);',
    innerHtml: '<div style="font-size:0.9rem; font-weight:800;">CLIC ENFONCÉ</div>',
    min: 70, max: 100, step: 5, unit: '%', defaultValue: 85,
    valLabel: (v) => `Échelle clic : ${v}%`,
    applyDynamic: (v) => `background: #ef4444; color: #fff; font-weight: 900; transform: scale(${v/100}); box-shadow: inset 0 4px 10px rgba(0,0,0,0.7);`,
    highlightedLine: 'a:active { background: #ef4444; transform: scale(0.85); }',
    snippet: 'a:active {\n  /* Se déclenche pendant l\'enfoncement du clic */\n  background: #ef4444;\n  transform: scale(0.85);\n}'
  },
  'css-sel-grouped': {
    propName: 'Sélecteurs groupés (,)',
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 3px solid #10b981; color: #a7f3d0; background: rgba(16, 185, 129, 0.25); box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);',
    innerHtml: '<div style="font-size:0.8rem; font-weight:800;">h1, h2, p (Groupés)</div>',
    min: 1, max: 6, step: 1, unit: 'px', defaultValue: 3,
    valLabel: (v) => `Bordure groupée : ${v}px`,
    applyDynamic: (v) => `border: ${v}px solid #10b981; color: #a7f3d0; background: rgba(16, 185, 129, 0.25); box-shadow: 0 0 ${v * 6}px rgba(16, 185, 129, 0.6);`,
    highlightedLine: 'h1, h2, p { border: 3px solid #10b981; }',
    snippet: 'h1, h2, p {\n  /* Applique le même style à plusieurs balises */\n  border: 3px solid #10b981;\n}'
  },

  // --- 2. TABLEAUX (13-14) ---
  'css-table-layout': {
    propName: 'table-layout',
    beforeStyle: 'width: 100%; border: 1px dashed #475569; font-size:0.75rem;',
    afterStyle: 'width: 100%; border: 2px solid #38bdf8; table-layout: fixed; font-size:0.75rem;',
    innerHtml: '<table style="width:100%; border-collapse:collapse; table-layout:inherit;"><tr><td style="border:1px solid #38bdf8; padding:4px; width:50%; text-align:center;">Col A (50%)</td><td style="border:1px solid #38bdf8; padding:4px; width:50%; text-align:center;">Col B (50%)</td></tr></table>',
    min: 20, max: 80, step: 5, unit: '%', defaultValue: 50,
    valLabel: (v) => `Largeur Col A : ${v}%`,
    applyDynamic: (v) => `width: 100%; border: 2px solid #38bdf8; table-layout: fixed;`,
    highlightedLine: 'table { table-layout: fixed; width: 100%; }',
    snippet: 'table {\n  /* Force des colonnes de taille égale stricte */\n  table-layout: fixed;\n  width: 100%;\n}'
  },
  'css-border-collapse': {
    propName: 'border-collapse',
    beforeStyle: 'border-collapse: separate; border-spacing: 14px;',
    afterStyle: 'border-collapse: collapse; border-spacing: 0px;',
    innerHtml: '<table style="border-collapse:inherit; border-spacing:inherit;"><tr style="border:1px solid #f43f5e;"><td style="border:2px solid #38bdf8; padding:6px; background:rgba(56,189,248,0.2);">A1</td><td style="border:2px solid #38bdf8; padding:6px; background:rgba(56,189,248,0.2);">B1</td></tr></table>',
    min: 0, max: 20, step: 2, unit: 'px', defaultValue: 0,
    valLabel: (v) => v === 0 ? 'collapse (fusionné)' : `separate (${v}px)`,
    applyDynamic: (v) => v === 0 ? 'border-collapse: collapse; border-spacing: 0px;' : `border-collapse: separate; border-spacing: ${v}px;`,
    highlightedLine: 'table { border-collapse: collapse; }',
    snippet: 'table {\n  /* Fusionne les bordures doubles en une seule */\n  border-collapse: collapse;\n}'
  },

  // --- 3. POLICES & TEXTE (15-23) ---
  'css-font-family': {
    propName: 'font-family',
    beforeStyle: 'font-family: monospace; font-size: 0.95rem;',
    afterStyle: 'font-family: \'Impact\', \'Arial Black\', sans-serif; font-size: 1.35rem; color: #38bdf8; letter-spacing: 1px;',
    innerHtml: '<span>Police Titre Bac</span>',
    min: 14, max: 28, step: 1, unit: 'px', defaultValue: 22,
    valLabel: (v) => `Taille : ${v}px`,
    applyDynamic: (v) => `font-family: 'Impact', 'Arial Black', sans-serif; font-size: ${v}px; color: #38bdf8; letter-spacing: 1px;`,
    highlightedLine: "font-family: 'Impact', 'Arial Black', sans-serif;",
    snippet: '#boite {\n  /* Spécification de la police typographique */\n  font-family: \'Impact\', \'Arial Black\', sans-serif;\n}'
  },
  'css-font-weight': {
    propName: 'font-weight',
    beforeStyle: 'font-weight: 100; font-size: 1.1rem; opacity: 0.6;',
    afterStyle: 'font-weight: 900; font-size: 1.3rem; color: #facc15; letter-spacing: 1px;',
    innerHtml: '<span>GRAS MAXIMUM (900)</span>',
    min: 100, max: 900, step: 100, unit: '', defaultValue: 900,
    valLabel: (v) => `font-weight: ${v}`,
    applyDynamic: (v) => `font-weight: ${v}; font-size: 1.25rem; color: #facc15;`,
    highlightedLine: 'font-weight: 900; /* Ultra-bold */',
    snippet: '#boite {\n  /* Épaisseur du trait de police */\n  font-weight: 900;\n}'
  },
  'css-font-style': {
    propName: 'font-style',
    beforeStyle: 'font-style: normal; font-size: 1.05rem;',
    afterStyle: 'font-style: italic; transform: skewX(-15deg); font-size: 1.25rem; color: #38bdf8; font-weight: 800;',
    innerHtml: '<span>Texte en Italique Slanted</span>',
    min: -30, max: 0, step: 5, unit: 'deg', defaultValue: -15,
    valLabel: (v) => `Inclinaison : ${v}deg`,
    applyDynamic: (v) => `font-style: italic; transform: skewX(${v}deg); font-size: 1.2rem; color: #38bdf8;`,
    highlightedLine: 'font-style: italic;',
    snippet: '#boite {\n  /* Met le texte en italique */\n  font-style: italic;\n}'
  },
  'css-font-size': {
    propName: 'font-size',
    beforeStyle: 'font-size: 11px; color: #94a3b8;',
    afterStyle: 'font-size: 32px; font-weight: 900; color: #f43f5e;',
    innerHtml: '<span>32px Géant</span>',
    min: 10, max: 45, step: 1, unit: 'px', defaultValue: 32,
    valLabel: (v) => `${v}px`,
    applyDynamic: (v) => `font-size: ${v}px; font-weight: 900; color: #f43f5e;`,
    highlightedLine: 'font-size: 32px;',
    snippet: '#boite {\n  /* Taille de police en pixels */\n  font-size: 32px;\n}'
  },
  'css-font-shorthand': {
    propName: 'font',
    beforeStyle: 'font: normal 14px sans-serif; color: #94a3b8;',
    afterStyle: 'font: italic bold 24px/1.3 \'Arial Black\', sans-serif; color: #10b981;',
    innerHtml: '<span>Font Shorthand</span>',
    min: 14, max: 32, step: 2, unit: 'px', defaultValue: 24,
    valLabel: (v) => `font: ${v}px`,
    applyDynamic: (v) => `font: italic bold ${v}px/1.3 'Arial Black', sans-serif; color: #10b981;`,
    highlightedLine: "font: italic bold 24px/1.3 'Arial Black', sans-serif;",
    snippet: '#boite {\n  /* Propriété raccourcie tout-en-un */\n  font: italic bold 24px/1.3 \'Arial Black\', sans-serif;\n}'
  },
  'css-text-align': {
    propName: 'text-align',
    beforeStyle: 'text-align: left; width: 100%; border: 1px dashed #475569; padding: 6px;',
    afterStyle: 'text-align: right; width: 100%; border: 2px solid #38bdf8; padding: 6px; color: #38bdf8; font-weight: 800;',
    innerHtml: '<span style="display:block; width:100%;">Aligné à Droite</span>',
    min: 0, max: 2, step: 1, unit: '', defaultValue: 2,
    valLabel: (v) => v === 0 ? 'left' : (v === 1 ? 'center' : 'right'),
    applyDynamic: (v) => {
      const a = v == 0 ? 'left' : (v == 1 ? 'center' : 'right');
      return `text-align: ${a}; width: 100%; border: 2px solid #38bdf8; padding: 6px; color: #38bdf8; font-weight: 800;`;
    },
    highlightedLine: 'text-align: right;',
    snippet: '#boite {\n  /* Alignement horizontal du texte */\n  text-align: right;\n}'
  },
  'css-text-shadow': {
    propName: 'text-shadow',
    beforeStyle: 'text-shadow: none; font-size: 1.2rem; font-weight: 800;',
    afterStyle: 'text-shadow: 0 0 15px #38bdf8, 4px 4px 0 #f43f5e, -2px -2px 0 #facc15; font-size: 1.3rem; font-weight: 900; color: #fff;',
    innerHtml: '<span>OMBRE 3D NÉON</span>',
    min: 0, max: 30, step: 2, unit: 'px', defaultValue: 15,
    valLabel: (v) => `Rayon : ${v}px`,
    applyDynamic: (v) => `text-shadow: 0 0 ${v}px #38bdf8, 4px 4px 0 #f43f5e, -2px -2px 0 #facc15; font-size: 1.3rem; font-weight: 900; color: #fff;`,
    highlightedLine: 'text-shadow: 0 0 15px #38bdf8, 4px 4px 0 #f43f5e;',
    snippet: '#boite {\n  /* Ombre portée sur le texte */\n  text-shadow: 0 0 15px #38bdf8, 4px 4px 0 #f43f5e;\n}'
  },
  'css-text-transform': {
    propName: 'text-transform',
    beforeStyle: 'text-transform: lowercase; font-size: 0.95rem;',
    afterStyle: 'text-transform: uppercase; font-weight: 900; letter-spacing: 2px; color: #34d399; font-size: 1.15rem;',
    innerHtml: '<span>majuscules officielles</span>',
    min: 0, max: 8, step: 1, unit: 'px', defaultValue: 2,
    valLabel: (v) => `uppercase (+ ${v}px espacement)`,
    applyDynamic: (v) => `text-transform: uppercase; font-weight: 900; letter-spacing: ${v}px; color: #34d399; font-size: 1.15rem;`,
    highlightedLine: 'text-transform: uppercase;',
    snippet: '#boite {\n  /* Conversion automatique en majuscules */\n  text-transform: uppercase;\n}'
  },
  'css-color': {
    propName: 'color',
    beforeStyle: 'color: #64748b; font-size: 1.1rem;',
    afterStyle: 'color: #f43f5e; font-weight: 900; font-size: 1.35rem; text-shadow: 0 0 15px rgba(244, 63, 94, 0.8);',
    innerHtml: '<span>ROUGE ÉCLATANT</span>',
    min: 0, max: 360, step: 15, unit: 'deg', defaultValue: 0,
    valLabel: (v) => `Hue: ${v}deg`,
    applyDynamic: (v) => `color: hsl(${v}, 90%, 60%); font-weight: 900; font-size: 1.35rem; text-shadow: 0 0 15px hsl(${v}, 90%, 60%);`,
    highlightedLine: 'color: #f43f5e;',
    snippet: '#boite {\n  /* Couleur du texte */\n  color: #f43f5e;\n}'
  },

  // --- 4. LISTES (24-27) ---
  'css-list-style-type': {
    propName: 'list-style-type',
    beforeStyle: 'list-style-type: none; padding-left: 10px;',
    afterStyle: 'list-style-type: square; color: #38bdf8; font-weight: 800; font-size: 1.1rem; padding-left: 20px;',
    innerHtml: '<ul style="list-style:inherit; padding:inherit; margin:0;"><li>Item Carré</li><li>Item Deux</li></ul>',
    min: 12, max: 24, step: 2, unit: 'px', defaultValue: 18,
    valLabel: (v) => `Taille puce : ${v}px`,
    applyDynamic: (v) => `list-style-type: square; color: #38bdf8; font-weight: 800; font-size: ${v}px; padding-left: 20px;`,
    highlightedLine: 'list-style-type: square;',
    snippet: 'ul {\n  /* Puces de liste carrées */\n  list-style-type: square;\n}'
  },
  'css-list-style-position': {
    propName: 'list-style-position',
    beforeStyle: 'list-style-position: outside; background: rgba(56, 189, 248, 0.1); border: 1px dashed #475569; padding-left: 24px;',
    afterStyle: 'list-style-position: inside; background: rgba(16, 185, 129, 0.25); border: 2px solid #10b981; padding-left: 10px; color: #34d399; font-weight: 700;',
    innerHtml: '<ul style="list-style-position:inherit; padding:inherit; margin:0;"><li style="background:rgba(0,0,0,0.3); margin:2px 0;">Puce Intérieure</li></ul>',
    min: 0, max: 20, step: 2, unit: 'px', defaultValue: 10,
    valLabel: (v) => 'inside (dans la boîte)',
    applyDynamic: (v) => `list-style-position: inside; background: rgba(16, 185, 129, 0.25); border: 2px solid #10b981; padding-left: ${v}px; color: #34d399;`,
    highlightedLine: 'list-style-position: inside;',
    snippet: 'ul {\n  /* Place les puces à l\'intérieur de la boîte */\n  list-style-position: inside;\n}'
  },
  'css-list-style-image': {
    propName: 'list-style-image',
    beforeStyle: 'list-style-type: disc; padding-left: 20px;',
    afterStyle: "list-style-type: '◆ '; color: #facc15; font-size: 1.15rem; padding-left: 20px; font-weight: 800;",
    innerHtml: '<ul style="list-style:inherit; padding:inherit; margin:0;"><li>Étoile d\'or</li><li>Révision Bac</li></ul>',
    min: 14, max: 26, step: 2, unit: 'px', defaultValue: 18,
    valLabel: (v) => `Puce Étoile : ${v}px`,
    applyDynamic: (v) => `list-style-type: '◆ '; color: #facc15; font-size: ${v}px; padding-left: 20px; font-weight: 800;`,
    highlightedLine: "list-style-image: url('icone.png');",
    snippet: 'ul {\n  /* Remplace la puce par une image/icône */\n  list-style-image: url(\'icone.png\');\n}'
  },
  'css-list-style-shorthand': {
    propName: 'list-style',
    beforeStyle: 'list-style: disc outside; padding-left: 20px;',
    afterStyle: 'list-style: square inside; color: #10b981; font-weight: 800; padding-left: 10px;',
    innerHtml: '<ul style="list-style:inherit; padding:inherit; margin:0;"><li>Raccourci Liste</li></ul>',
    min: 12, max: 24, step: 2, unit: 'px', defaultValue: 18,
    valLabel: (v) => `Taille: ${v}px`,
    applyDynamic: (v) => `list-style: square inside; color: #10b981; font-weight: 800; font-size: ${v}px; padding-left: 10px;`,
    highlightedLine: 'list-style: square inside;',
    snippet: 'ul {\n  /* Raccourci type + position */\n  list-style: square inside;\n}'
  },

  // --- 5. ARRIÈRE-PLAN (28-32) ---
  'css-background-color': {
    propName: 'background-color',
    beforeStyle: 'background-color: #1e293b; color: #94a3b8;',
    afterStyle: 'background-color: #059669; color: #fff; font-weight: 800; box-shadow: 0 0 25px rgba(16, 185, 129, 0.7); border: 2px solid #34d399;',
    innerHtml: '<span>Fond Émeraude</span>',
    min: 20, max: 100, step: 10, unit: '%', defaultValue: 100,
    valLabel: (v) => `Opacité : ${v}%`,
    applyDynamic: (v) => `background-color: rgba(5, 150, 105, ${v/100}); color: #fff; font-weight: 800; box-shadow: 0 0 25px rgba(16, 185, 129, ${v/100 * 0.7}); border: 2px solid #34d399;`,
    highlightedLine: 'background-color: #059669;',
    snippet: '#boite {\n  /* Couleur d\'arrière-plan */\n  background-color: #059669;\n}'
  },
  'css-background-image': {
    propName: 'background-image',
    beforeStyle: 'background: #1e293b; color: #94a3b8;',
    afterStyle: 'background-image: linear-gradient(135deg, #0284c7 25%, #38bdf8 50%, #0369a1 75%); color: #fff; font-weight: 800; border: 2px solid #38bdf8;',
    innerHtml: '<span>Dégradé Rayé</span>',
    min: 0, max: 360, step: 15, unit: 'deg', defaultValue: 135,
    valLabel: (v) => `Angle : ${v}deg`,
    applyDynamic: (v) => `background-image: linear-gradient(${v}deg, #0284c7 25%, #38bdf8 50%, #0369a1 75%); color: #fff; font-weight: 800; border: 2px solid #38bdf8;`,
    highlightedLine: "background-image: url('motif.png');",
    snippet: '#boite {\n  /* Image ou dégradé de fond */\n  background-image: url(\'motif.png\');\n}'
  },
  'css-background-repeat': {
    propName: 'background-repeat',
    beforeStyle: 'background-image: radial-gradient(#38bdf8 2px, transparent 2px); background-size: 20px 20px; background-repeat: no-repeat; background-position: top left; border: 1px dashed #475569;',
    afterStyle: 'background-image: radial-gradient(#38bdf8 3px, transparent 3px); background-size: 20px 20px; background-repeat: repeat; border: 2px solid #38bdf8;',
    innerHtml: '<span>Répétition Totale</span>',
    min: 10, max: 35, step: 5, unit: 'px', defaultValue: 20,
    valLabel: (v) => `Taille motif : ${v}px`,
    applyDynamic: (v) => `background-image: radial-gradient(#38bdf8 3px, transparent 3px); background-size: ${v}px ${v}px; background-repeat: repeat; border: 2px solid #38bdf8;`,
    highlightedLine: 'background-repeat: repeat;',
    snippet: '#boite {\n  /* Répète le motif sur toute la surface */\n  background-repeat: repeat;\n}'
  },
  'css-background-size': {
    propName: 'background-size',
    beforeStyle: 'background-image: linear-gradient(45deg, #0284c7, #38bdf8); background-size: 20px 20px; background-repeat: no-repeat;',
    afterStyle: 'background-image: linear-gradient(45deg, #0284c7, #38bdf8); background-size: cover; color: #fff; font-weight: 800;',
    innerHtml: '<span>cover (100% rempli)</span>',
    min: 20, max: 100, step: 10, unit: '%', defaultValue: 100,
    valLabel: (v) => `cover (${v}%)`,
    applyDynamic: (v) => `background-image: linear-gradient(45deg, #0284c7, #38bdf8); background-size: ${v}% ${v}%; color: #fff; font-weight: 800;`,
    highlightedLine: 'background-size: cover;',
    snippet: '#boite {\n  /* Redimensionne l\'image pour couvrir tout */\n  background-size: cover;\n}'
  },
  'css-background-shorthand': {
    propName: 'background',
    beforeStyle: 'background: none; border: 1px dashed #475569;',
    afterStyle: 'background: #0284c7 linear-gradient(135deg, #0284c7, #38bdf8) no-repeat center/cover; color: #fff; font-weight: 800;',
    innerHtml: '<span>Background Shorthand</span>',
    min: 0, max: 360, step: 20, unit: 'deg', defaultValue: 135,
    valLabel: (v) => `Angle : ${v}deg`,
    applyDynamic: (v) => `background: #0284c7 linear-gradient(${v}deg, #0284c7, #38bdf8) no-repeat center/cover; color: #fff; font-weight: 800;`,
    highlightedLine: "background: #0284c7 url('img.jpg') no-repeat center/cover;",
    snippet: '#boite {\n  /* Déclaration complète raccourcie */\n  background: #0284c7 url(\'img.jpg\') no-repeat center/cover;\n}'
  },

  // --- 6. TRANSFORMATION & FILTRES (33-34) ---
  'css-transform': {
    propName: 'transform',
    beforeStyle: 'transform: none; border: 1px dashed #475569;',
    afterStyle: 'transform: rotate(25deg) scale(1.3) skewX(-10deg); background: linear-gradient(135deg, #0284c7, #38bdf8); color: #fff; font-weight: 900; box-shadow: 0 15px 30px rgba(0,0,0,0.6);',
    innerHtml: '<span>3D TRANSFORM</span>',
    min: -60, max: 60, step: 5, unit: 'deg', defaultValue: 25,
    valLabel: (v) => `Rotation : ${v}deg`,
    applyDynamic: (v) => `transform: rotate(${v}deg) scale(${1 + Math.abs(v)/150}) skewX(${-v/2.5}deg); background: linear-gradient(135deg, #0284c7, #38bdf8); color: #fff; font-weight: 900; box-shadow: 0 15px 30px rgba(0,0,0,0.6);`,
    highlightedLine: 'transform: rotate(25deg) scale(1.3);',
    snippet: '#boite {\n  /* Transformation géométrique 2D/3D */\n  transform: rotate(25deg) scale(1.3);\n}'
  },
  'css-filter': {
    propName: 'filter',
    beforeStyle: 'filter: none; background: linear-gradient(45deg, #f43f5e, #facc15); color: #000; font-weight: 900;',
    afterStyle: 'filter: blur(3px) contrast(200%) hue-rotate(180deg); background: linear-gradient(45deg, #f43f5e, #facc15); color: #000; font-weight: 900;',
    innerHtml: '<span>FILTRE ACTIF</span>',
    min: 0, max: 10, step: 1, unit: 'px', defaultValue: 3,
    valLabel: (v) => `Flou : ${v}px`,
    applyDynamic: (v) => `filter: blur(${v}px) contrast(${100 + v * 20}%) hue-rotate(${v * 36}deg); background: linear-gradient(45deg, #f43f5e, #facc15); color: #000; font-weight: 900;`,
    highlightedLine: 'filter: blur(3px) contrast(200%);',
    snippet: '#boite {\n  /* Effets visuels graphiques sur l\'élément */\n  filter: blur(3px) contrast(200%);\n}'
  },

  // --- 7. BOÎTES & DIMENSIONS (35-45) ---
  'css-width': {
    propName: 'width',
    beforeStyle: 'width: 65px; height: 50px; background: #1e293b; border: 1px dashed #475569;',
    afterStyle: 'width: 220px; height: 50px; background: #0284c7; color: #fff; font-weight: 800; border: 2px solid #38bdf8;',
    innerHtml: '<span>220px LARGE</span>',
    min: 60, max: 240, step: 10, unit: 'px', defaultValue: 220,
    valLabel: (v) => `Largeur : ${v}px`,
    applyDynamic: (v) => `width: ${v}px; height: 50px; background: #0284c7; color: #fff; font-weight: 800; border: 2px solid #38bdf8;`,
    highlightedLine: 'width: 220px;',
    snippet: '#boite {\n  /* Largeur de la boîte */\n  width: 220px;\n}'
  },
  'css-height': {
    propName: 'height',
    beforeStyle: 'height: 35px; width: 100px; background: #1e293b; border: 1px dashed #475569;',
    afterStyle: 'height: 120px; width: 100px; background: #059669; color: #fff; font-weight: 800; border: 2px solid #34d399;',
    innerHtml: '<span>120px HAUT</span>',
    min: 30, max: 130, step: 5, unit: 'px', defaultValue: 120,
    valLabel: (v) => `Hauteur : ${v}px`,
    applyDynamic: (v) => `height: ${v}px; width: 100px; background: #059669; color: #fff; font-weight: 800; border: 2px solid #34d399;`,
    highlightedLine: 'height: 120px;',
    snippet: '#boite {\n  /* Hauteur de la boîte */\n  height: 120px;\n}'
  },
  'css-position': {
    propName: 'position',
    beforeStyle: 'position: static; border: 1px dashed #475569;',
    afterStyle: 'position: relative; top: -18px; left: 35px; background: #7c3aed; color: #fff; font-weight: 800; box-shadow: 0 12px 25px rgba(124, 58, 237, 0.6);',
    innerHtml: '<span>relative (+35px)</span>',
    min: -30, max: 50, step: 5, unit: 'px', defaultValue: 35,
    valLabel: (v) => `Décalage left: ${v}px`,
    applyDynamic: (v) => `position: relative; top: ${-v/2}px; left: ${v}px; background: #7c3aed; color: #fff; font-weight: 800; box-shadow: 0 12px 25px rgba(124, 58, 237, 0.6);`,
    highlightedLine: 'position: relative; top: -18px; left: 35px;',
    snippet: '#boite {\n  /* Positionnement par rapport à l\'origine */\n  position: relative;\n  top: -18px;\n  left: 35px;\n}'
  },
  'css-float': {
    propName: 'float',
    beforeStyle: 'float: none; width: 70px; height: 45px; background: #1e293b; border: 1px dashed #475569;',
    afterStyle: 'float: left; width: 75px; height: 50px; background: #ea580c; color: #fff; font-weight: 800; margin: 4px 14px 4px 0;',
    innerHtml: '<span>float:left</span>',
    min: 0, max: 20, step: 2, unit: 'px', defaultValue: 14,
    valLabel: (v) => `Marge droite: ${v}px`,
    applyDynamic: (v) => `float: left; width: 75px; height: 50px; background: #ea580c; color: #fff; font-weight: 800; margin: 4px ${v}px 4px 0;`,
    highlightedLine: 'float: left; margin-right: 14px;',
    snippet: '#boite {\n  /* Fait flotter l\'élément avec texte autour */\n  float: left;\n  margin-right: 14px;\n}'
  },
  'css-padding': {
    propName: 'padding',
    beforeStyle: 'padding: 0px; background: #1e293b; border: 2px solid #ef4444;',
    afterStyle: 'padding: 30px; background: rgba(16, 185, 129, 0.25); border: 2px solid #10b981; color: #34d399; font-weight: 800;',
    innerHtml: '<span style="background:rgba(0,0,0,0.4); padding:2px 6px;">Texte Aéré</span>',
    min: 0, max: 40, step: 2, unit: 'px', defaultValue: 30,
    valLabel: (v) => `padding: ${v}px`,
    applyDynamic: (v) => `padding: ${v}px; background: rgba(16, 185, 129, 0.25); border: 2px solid #10b981; color: #34d399; font-weight: 800;`,
    highlightedLine: 'padding: 30px; /* Aération intérieure */',
    snippet: '#boite {\n  /* Espace intérieur entre bordure et texte */\n  padding: 30px;\n}'
  },
  'css-margin': {
    propName: 'margin',
    beforeStyle: 'margin: 0px; background: #1e293b; border: 1px dashed #475569;',
    afterStyle: 'margin: 35px; background: #0284c7; color: #fff; font-weight: 800; box-shadow: 0 0 15px rgba(2, 132, 199, 0.6);',
    innerHtml: '<span>margin: 35px</span>',
    min: 0, max: 45, step: 5, unit: 'px', defaultValue: 35,
    valLabel: (v) => `margin: ${v}px`,
    applyDynamic: (v) => `margin: ${v}px; background: #0284c7; color: #fff; font-weight: 800; box-shadow: 0 0 15px rgba(2, 132, 199, 0.6);`,
    highlightedLine: 'margin: 35px; /* Écartement extérieur */',
    snippet: '#boite {\n  /* Espace extérieur repoussant les voisins */\n  margin: 35px;\n}'
  },
  'css-box-shadow': {
    propName: 'box-shadow',
    beforeStyle: 'box-shadow: none; border: 1px dashed #475569; background: #1e293b;',
    afterStyle: 'box-shadow: 0 20px 45px rgba(56, 189, 248, 0.8), 0 0 20px rgba(56, 189, 248, 0.9); background: #0f172a; border: 2px solid #38bdf8; color: #38bdf8; font-weight: 900;',
    innerHtml: '<span>HALO NÉON</span>',
    min: 0, max: 50, step: 2, unit: 'px', defaultValue: 35,
    valLabel: (v) => `Flou ombre : ${v}px`,
    applyDynamic: (v) => `box-shadow: 0 20px ${v}px rgba(56, 189, 248, 0.8), 0 0 ${v/2}px rgba(56, 189, 248, 0.9); background: #0f172a; border: 2px solid #38bdf8; color: #38bdf8; font-weight: 900;`,
    highlightedLine: 'box-shadow: 0 20px 45px rgba(56, 189, 248, 0.8);',
    snippet: '#boite {\n  /* Ombre portée lumineuse extérieure */\n  box-shadow: 0 20px 45px rgba(56, 189, 248, 0.8);\n}'
  },
  'css-display': {
    propName: 'display',
    beforeStyle: 'display: inline; width: 140px; height: 80px; background: #ef4444; color: #fff; padding: 4px;',
    afterStyle: 'display: inline-block; width: 140px; height: 80px; background: #10b981; color: #000; font-weight: 900; padding: 10px;',
    innerHtml: '<span>inline-block</span>',
    min: 50, max: 160, step: 10, unit: 'px', defaultValue: 140,
    valLabel: (v) => `Largeur : ${v}px`,
    applyDynamic: (v) => `display: inline-block; width: ${v}px; height: 80px; background: #10b981; color: #000; font-weight: 900; padding: 10px;`,
    highlightedLine: 'display: inline-block; width: 140px; height: 80px;',
    snippet: '#boite {\n  /* Autorise dimensions tout en restant en ligne */\n  display: inline-block;\n  width: 140px;\n  height: 80px;\n}'
  },
  'css-coords-top-bottom-left-right': {
    propName: 'top, bottom, left, right',
    beforeStyle: 'position: relative; top: 0; left: 0; border: 1px dashed #475569;',
    afterStyle: 'position: relative; top: 25px; left: 35px; background: #8b5cf6; color: #fff; font-weight: 800; box-shadow: 0 10px 20px rgba(139, 92, 246, 0.6);',
    innerHtml: '<span>top:25px; left:35px</span>',
    min: 0, max: 50, step: 5, unit: 'px', defaultValue: 35,
    valLabel: (v) => `left: ${v}px, top: ${Math.round(v * 0.7)}px`,
    applyDynamic: (v) => `position: relative; top: ${Math.round(v * 0.7)}px; left: ${v}px; background: #8b5cf6; color: #fff; font-weight: 800;`,
    highlightedLine: 'top: 25px; left: 35px;',
    snippet: '#boite {\n  /* Coordonnées de déplacement */\n  position: relative;\n  top: 25px;\n  left: 35px;\n}'
  },
  'css-overflow': {
    propName: 'overflow',
    beforeStyle: 'overflow: visible; height: 45px; width: 110px; border: 2px solid #ef4444; background: #1e293b; font-size:0.75rem;',
    afterStyle: 'overflow: scroll; height: 55px; width: 110px; border: 2px solid #10b981; background: #0f172a; color: #a7f3d0; font-size:0.75rem;',
    innerHtml: '<div style="width:160px;">Texte très long qui dépasse largement de la boîte pour tester le débordement.</div>',
    min: 35, max: 90, step: 5, unit: 'px', defaultValue: 55,
    valLabel: (v) => `Hauteur: ${v}px (scroll)`,
    applyDynamic: (v) => `overflow: scroll; height: ${v}px; width: 110px; border: 2px solid #10b981; background: #0f172a; color: #a7f3d0; font-size:0.75rem;`,
    highlightedLine: 'overflow: scroll;',
    snippet: '#boite {\n  /* Gestion du débordement avec ascenseur */\n  overflow: scroll;\n}'
  },
  'css-opacity': {
    propName: 'opacity',
    beforeStyle: 'opacity: 1; background: #f43f5e; color: #fff; font-weight: 800;',
    afterStyle: 'opacity: 0.18; background: #f43f5e; color: #fff; font-weight: 800;',
    innerHtml: '<span>Translucide 0.18</span>',
    min: 10, max: 100, step: 5, unit: '%', defaultValue: 18,
    valLabel: (v) => `Opacité : ${v}%`,
    applyDynamic: (v) => `opacity: ${v/100}; background: #f43f5e; color: #fff; font-weight: 800;`,
    highlightedLine: 'opacity: 0.18; /* Semi-transparent */',
    snippet: '#boite {\n  /* Niveau de transparence (0 à 1) */\n  opacity: 0.18;\n}'
  },

  // --- 8. BORDURES (46-50) ---
  'css-border-color': {
    propName: 'border-color',
    beforeStyle: 'border: 5px solid #334155;',
    afterStyle: 'border: 5px solid #f43f5e; box-shadow: 0 0 20px rgba(244, 63, 94, 0.7); color: #f43f5e; font-weight: 800;',
    innerHtml: '<span>Bordure Rouge</span>',
    min: 0, max: 360, step: 15, unit: 'deg', defaultValue: 0,
    valLabel: (v) => `Hue bordure : ${v}deg`,
    applyDynamic: (v) => `border: 5px solid hsl(${v}, 90%, 60%); box-shadow: 0 0 20px hsl(${v}, 90%, 60%); color: hsl(${v}, 90%, 60%); font-weight: 800;`,
    highlightedLine: 'border-color: #f43f5e;',
    snippet: '#boite {\n  /* Couleur de la bordure */\n  border-color: #f43f5e;\n}'
  },
  'css-border-style': {
    propName: 'border-style',
    beforeStyle: 'border: 5px solid #38bdf8;',
    afterStyle: 'border: 5px dashed #facc15; color: #facc15; font-weight: 800; background: rgba(250, 204, 21, 0.15);',
    innerHtml: '<span>Dashed Pointillés</span>',
    min: 2, max: 10, step: 1, unit: 'px', defaultValue: 5,
    valLabel: (v) => `dashed (${v}px)`,
    applyDynamic: (v) => `border: ${v}px dashed #facc15; color: #facc15; font-weight: 800; background: rgba(250, 204, 21, 0.15);`,
    highlightedLine: 'border-style: dashed;',
    snippet: '#boite {\n  /* Style en tirets */\n  border-style: dashed;\n}'
  },
  'css-border-radius': {
    propName: 'border-radius',
    beforeStyle: 'border-radius: 0px; border: 2px solid #ef4444;',
    afterStyle: 'border-radius: 40px; border: 3px solid #10b981; background: rgba(16, 185, 129, 0.25); color: #34d399; font-weight: 900;',
    innerHtml: '<span>Pill / Rond (40px)</span>',
    min: 0, max: 50, step: 2, unit: 'px', defaultValue: 40,
    valLabel: (v) => `border-radius: ${v}px`,
    applyDynamic: (v) => `border-radius: ${v}px; border: 3px solid #10b981; background: rgba(16, 185, 129, 0.25); color: #34d399; font-weight: 900;`,
    highlightedLine: 'border-radius: 40px; /* Bords très arrondis */',
    snippet: '#boite {\n  /* Arrondit les 4 coins */\n  border-radius: 40px;\n}'
  },
  'css-border-width': {
    propName: 'border-width',
    beforeStyle: 'border-width: 1px; border-style: solid; border-color: #38bdf8;',
    afterStyle: 'border-width: 12px; border-style: solid; border-color: #38bdf8; color: #38bdf8; font-weight: 800;',
    innerHtml: '<span>Cadre Épais 12px</span>',
    min: 1, max: 18, step: 1, unit: 'px', defaultValue: 12,
    valLabel: (v) => `border-width: ${v}px`,
    applyDynamic: (v) => `border-width: ${v}px; border-style: solid; border-color: #38bdf8; color: #38bdf8; font-weight: 800;`,
    highlightedLine: 'border-width: 12px;',
    snippet: '#boite {\n  /* Épaisseur de la bordure */\n  border-width: 12px;\n}'
  },
  'css-border-shorthand': {
    propName: 'border',
    beforeStyle: 'border: none; background: #1e293b;',
    afterStyle: 'border: 7px double #34d399; color: #34d399; font-weight: 900;',
    innerHtml: '<span>border: 7px double</span>',
    min: 2, max: 14, step: 2, unit: 'px', defaultValue: 7,
    valLabel: (v) => `border: ${v}px double`,
    applyDynamic: (v) => `border: ${v}px double #34d399; color: #34d399; font-weight: 900;`,
    highlightedLine: 'border: 7px double #34d399;',
    snippet: '#boite {\n  /* Déclaration raccourcie de bordure */\n  border: 7px double #34d399;\n}'
  },

  // --- 9. TRANSITIONS (51-54) ---
  'css-transition-delay': {
    propName: 'transition-delay',
    beforeStyle: 'transform: rotate(0deg); background: #1e293b;',
    afterStyle: 'transition: transform 1.5s ease 1.5s; transform: rotate(45deg); background: #0284c7; color:#fff; font-weight:800;',
    innerHtml: '<span>Attente 1.5s avant rotation</span>',
    min: 0, max: 3, step: 0.5, unit: 's', defaultValue: 1.5,
    valLabel: (v) => `Délai : ${v}s`,
    applyDynamic: (v) => `transition: transform 1.5s ease ${v}s; transform: rotate(45deg); background: #0284c7; color:#fff; font-weight:800;`,
    highlightedLine: 'transition-delay: 1.5s; /* Retard au déclenchement */',
    snippet: '#boite {\n  transition-property: transform;\n  transition-duration: 1.5s;\n  transition-delay: 1.5s;\n}'
  },
  'css-transition-duration': {
    propName: 'transition-duration',
    beforeStyle: 'transform: scale(1); background: #1e293b;',
    afterStyle: 'transition: transform 1.8s cubic-bezier(0.4, 0, 0.2, 1); transform: scale(1.4); background: #10b981; color:#000; font-weight:900;',
    innerHtml: '<span>Mouvement Lent 1.8s</span>',
    min: 0.5, max: 3, step: 0.2, unit: 's', defaultValue: 1.8,
    valLabel: (v) => `Durée : ${v}s`,
    applyDynamic: (v) => `transition: transform ${v}s cubic-bezier(0.4, 0, 0.2, 1); transform: scale(1.4); background: #10b981; color:#000; font-weight:900;`,
    highlightedLine: 'transition-duration: 1.8s; /* Vitesse lente et claire */',
    snippet: '#boite {\n  transition-property: transform;\n  transition-duration: 1.8s;\n}'
  },
  'css-transition-property': {
    propName: 'transition-property',
    beforeStyle: 'transform: scale(1) rotate(0deg); background: #1e293b;',
    afterStyle: 'transition-property: transform; transition-duration: 1.5s; transform: scale(1.35) rotate(20deg); background: #f59e0b; color:#000; font-weight:900;',
    innerHtml: '<span>Cible : transform</span>',
    min: 0, max: 45, step: 5, unit: 'deg', defaultValue: 20,
    valLabel: (v) => `Angle : ${v}deg`,
    applyDynamic: (v) => `transition-property: transform; transition-duration: 1.5s; transform: scale(1.35) rotate(${v}deg); background: #f59e0b; color:#000; font-weight:900;`,
    highlightedLine: 'transition-property: transform;',
    snippet: '#boite {\n  /* Cible la propriété animée */\n  transition-property: transform;\n  transition-duration: 1.5s;\n}'
  },
  'css-transition-shorthand': {
    propName: 'transition',
    beforeStyle: 'transform: scale(1) rotate(0deg); background: #1e293b;',
    afterStyle: 'transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1); transform: scale(1.3) rotate(25deg); background: #38bdf8; color:#000; font-weight:900;',
    innerHtml: '<span>Transition 1.5s</span>',
    min: 0.5, max: 3, step: 0.2, unit: 's', defaultValue: 1.5,
    valLabel: (v) => `Durée: ${v}s`,
    applyDynamic: (v) => `transition: all ${v}s cubic-bezier(0.4, 0, 0.2, 1); transform: scale(1.3) rotate(25deg); background: #38bdf8; color:#000; font-weight:900;`,
    highlightedLine: 'transition: all 1.5s ease-in-out;',
    snippet: '#boite {\n  /* Raccourci de transition complet */\n  transition: all 1.5s ease-in-out;\n}'
  },

  // --- 10. ANIMATIONS & KEYFRAMES (55-61) ---
  'css-keyframes': {
    propName: '@keyframes',
    beforeStyle: 'background: #1e293b; border: 1px dashed #475569;',
    afterStyle: 'animation: kfPulseGlow 1.8s infinite alternate; background: #0284c7; color:#fff; font-weight:900; box-shadow: 0 0 25px #38bdf8;',
    innerHtml: '<span>@keyframes (0%-50%-100%)</span>',
    min: 1, max: 4, step: 0.2, unit: 's', defaultValue: 1.8,
    valLabel: (v) => `Boucle: ${v}s`,
    applyDynamic: (v) => `animation: kfPulseGlow ${v}s infinite alternate; background: #0284c7; color:#fff; font-weight:900; box-shadow: 0 0 25px #38bdf8;`,
    highlightedLine: '@keyframes mon_anim { 0% {...} 50% {...} 100% {...} }',
    snippet: '@keyframes mon_anim {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.25) rotate(10deg); }\n  100% { transform: scale(1); }\n}'
  },
  'css-animation-name': {
    propName: 'animation-name',
    beforeStyle: 'animation-name: none;',
    afterStyle: 'animation-name: kfPulseGlow; animation-duration: 1.8s; animation-iteration-count: infinite; background: #ea580c; color:#fff; font-weight:900;',
    innerHtml: '<span>name: kfPulseGlow</span>',
    min: 1, max: 3, step: 0.2, unit: 's', defaultValue: 1.8,
    valLabel: (v) => `Vitesse: ${v}s`,
    applyDynamic: (v) => `animation-name: kfPulseGlow; animation-duration: ${v}s; animation-iteration-count: infinite; background: #ea580c; color:#fff; font-weight:900;`,
    highlightedLine: 'animation-name: kfPulseGlow;',
    snippet: '#boite {\n  /* Lie la boîte au nom du @keyframes */\n  animation-name: kfPulseGlow;\n  animation-duration: 1.8s;\n}'
  },
  'css-animation-delay': {
    propName: 'animation-delay',
    beforeStyle: 'animation: none;',
    afterStyle: 'animation: kfPulseGlow 1.8s 1.5s infinite alternate; background: #7c3aed; color:#fff; font-weight:900;',
    innerHtml: '<span>Délai 1.5s</span>',
    min: 0, max: 3, step: 0.5, unit: 's', defaultValue: 1.5,
    valLabel: (v) => `Délai: ${v}s`,
    applyDynamic: (v) => `animation: kfPulseGlow 1.8s ${v}s infinite alternate; background: #7c3aed; color:#fff; font-weight:900;`,
    highlightedLine: 'animation-delay: 1.5s;',
    snippet: '#boite {\n  /* Pause avant le premier cycle */\n  animation-delay: 1.5s;\n}'
  },
  'css-animation-duration': {
    propName: 'animation-duration',
    beforeStyle: 'animation: none;',
    afterStyle: 'animation: kfPulseGlow 2.0s infinite alternate; background: #059669; color:#fff; font-weight:900;',
    innerHtml: '<span>Durée Lente 2.0s</span>',
    min: 0.5, max: 4, step: 0.2, unit: 's', defaultValue: 2.0,
    valLabel: (v) => `Durée cycle: ${v}s`,
    applyDynamic: (v) => `animation: kfPulseGlow ${v}s infinite alternate; background: #059669; color:#fff; font-weight:900;`,
    highlightedLine: 'animation-duration: 2.0s; /* Mouvement lent pour l\'étude */',
    snippet: '#boite {\n  /* Durée totale d\'un cycle */\n  animation-duration: 2.0s;\n}'
  },
  'css-animation-iteration-count': {
    propName: 'animation-iteration-count',
    beforeStyle: 'animation: none;',
    afterStyle: 'animation: kfPulseGlow 1.8s infinite alternate; background: #f43f5e; color:#fff; font-weight:900;',
    innerHtml: '<span>infinite (boucle infinie)</span>',
    min: 1, max: 5, step: 1, unit: '', defaultValue: 5,
    valLabel: (v) => v >= 5 ? 'infinite' : `${v} fois`,
    applyDynamic: (v) => `animation: kfPulseGlow 1.8s ${v >= 5 ? 'infinite' : v} alternate; background: #f43f5e; color:#fff; font-weight:900;`,
    highlightedLine: 'animation-iteration-count: infinite;',
    snippet: '#boite {\n  /* Nombre de répétitions (ou infinite) */\n  animation-iteration-count: infinite;\n}'
  },
  'css-animation-direction': {
    propName: 'animation-direction',
    beforeStyle: 'animation: none;',
    afterStyle: 'animation: kfPulseGlow 1.8s infinite alternate; background: #facc15; color:#000; font-weight:900;',
    innerHtml: '<span>alternate (aller-retour)</span>',
    min: 0, max: 1, step: 1, unit: '', defaultValue: 1,
    valLabel: (v) => v === 1 ? 'alternate' : 'normal',
    applyDynamic: (v) => `animation: kfPulseGlow 1.8s infinite ${v === 1 ? 'alternate' : 'normal'}; background: #facc15; color:#000; font-weight:900;`,
    highlightedLine: 'animation-direction: alternate;',
    snippet: '#boite {\n  /* Sens de lecture (aller ou aller-retour) */\n  animation-direction: alternate;\n}'
  },
  'css-animation-shorthand': {
    propName: 'animation',
    beforeStyle: 'animation: none;',
    afterStyle: 'animation: kfPulseGlow 1.8s ease-in-out infinite alternate; background: linear-gradient(135deg, #0284c7, #38bdf8); color:#fff; font-weight:900;',
    innerHtml: '<span>Animation Complète</span>',
    min: 1, max: 4, step: 0.2, unit: 's', defaultValue: 1.8,
    valLabel: (v) => `Durée: ${v}s`,
    applyDynamic: (v) => `animation: kfPulseGlow ${v}s ease-in-out infinite alternate; background: linear-gradient(135deg, #0284c7, #38bdf8); color:#fff; font-weight:900;`,
    highlightedLine: 'animation: kfPulseGlow 1.8s ease-in-out infinite alternate;',
    snippet: '#boite {\n  /* Raccourci animation complet */\n  animation: kfPulseGlow 1.8s ease-in-out infinite alternate;\n}'
  }
};

// Fonction de fallback pour les propriétés génériques
function getCssExaggeratedConfig(item) {
  if (CSS_EXAGGERATED_MAP[item.id]) {
    return CSS_EXAGGERATED_MAP[item.id];
  }
  // Fallback dynamique
  return {
    propName: item.property,
    beforeStyle: 'border: 1px dashed #475569; color: #94a3b8; background: #1e293b;',
    afterStyle: 'border: 3px solid #38bdf8; color: #38bdf8; background: rgba(56, 189, 248, 0.25); box-shadow: 0 0 20px rgba(56, 189, 248, 0.6); transform: scale(1.1);',
    innerHtml: `<span>${item.property}</span>`,
    min: 0, max: 100, step: 5, unit: '%', defaultValue: 100,
    valLabel: (v) => `${v}%`,
    applyDynamic: (v) => `border: 3px solid #38bdf8; color: #38bdf8; background: rgba(56, 189, 248, 0.25); box-shadow: 0 0 ${v/3}px rgba(56, 189, 248, 0.6);`,
    highlightedLine: `${item.property}: actif;`,
    snippet: `#boite {\n  ${item.property}: actif;\n}`
  };
}

// État des effets actifs sur chaque carte
const CARD_EFFECTS_STATE = {};

function toggleCardCssEffect(id) {
  const target = document.getElementById(`targetAfter_${id}`);
  const badge = document.getElementById(`badge_${id}`);
  const btn = document.getElementById(`toggleBtn_${id}`);
  const slider = document.getElementById(`slider_${id}`);
  if (!target) return;

  const item = DATA.css.find(c => c.id === id);
  if (!item) return;
  const cfg = getCssExaggeratedConfig(item);

  const isCurrentlyOn = CARD_EFFECTS_STATE[id] !== false;
  const newState = !isCurrentlyOn;
  CARD_EFFECTS_STATE[id] = newState;

  if (newState) {
    // Rétablir l'effet
    const curVal = slider ? slider.value : cfg.defaultValue;
    target.style.cssText = cfg.applyDynamic(curVal);
    if (badge) {
      badge.className = 'effect-live-badge active';
      badge.textContent = 'Effect: ON';
    }
    if (btn) btn.classList.add('active');
  } else {
    // Désactiver l'effet
    target.style.cssText = cfg.beforeStyle;
    if (badge) {
      badge.className = 'effect-live-badge inactive';
      badge.textContent = 'Effect: OFF';
    }
    if (btn) btn.classList.remove('active');
  }
}

function handleCardSliderInput(id, val) {
  const target = document.getElementById(`targetAfter_${id}`);
  const display = document.getElementById(`sliderDisplay_${id}`);
  const valTag = document.getElementById(`valTag_${id}`);
  const badge = document.getElementById(`badge_${id}`);
  const btn = document.getElementById(`toggleBtn_${id}`);
  if (!target) return;

  const item = DATA.css.find(c => c.id === id);
  if (!item) return;
  const cfg = getCssExaggeratedConfig(item);

  CARD_EFFECTS_STATE[id] = true;
  if (badge) {
    badge.className = 'effect-live-badge active';
    badge.textContent = 'Effect: ON';
  }
  if (btn) btn.classList.add('active');

  const cssStr = cfg.applyDynamic(val);
  target.style.cssText = cssStr;

  const formatted = cfg.valLabel(val);
  if (display) display.innerHTML = `Intensité : <strong>${formatted}</strong>`;
  if (valTag) valTag.textContent = formatted;
}

function copyCardSnippet(id, btn) {
  const item = DATA.css.find(c => c.id === id);
  if (!item) return;
  const cfg = getCssExaggeratedConfig(item);
  if (typeof copyCodeText === 'function') {
    copyCodeText(cfg.snippet, btn);
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(cfg.snippet).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Copié';
      setTimeout(() => { btn.textContent = orig; }, 1800);
    });
  }
}

function buildModalHighlightedCode(item, variantIdx = 0) {
  if (!item) return '';
  const cfg = getCssExaggeratedConfig(item);
  const config = typeof VARIETIES_CONFIG !== 'undefined' ? VARIETIES_CONFIG[item.id] : null;
  const opt = (config && config.options && config.options[variantIdx]) ? config.options[variantIdx] : null;

  let snippet = cfg.snippet || item.code || '';
  let targetLine = cfg.highlightedLine || '';

  if (opt && opt.value) {
    const lines = snippet.split('\n');
    const matched = lines.find(l => l.includes(opt.value)) || lines.find(l => l.includes(item.property));
    if (matched) targetLine = matched.trim();
  }

  const esc = (typeof escapeHtml === 'function') ? escapeHtml : (s) => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  if (targetLine && snippet.includes(targetLine)) {
    const parts = snippet.split(targetLine);
    return esc(parts[0]) + `<mark class="highlight-css-line">${esc(targetLine)}</mark>` + esc(parts.slice(1).join(targetLine));
  } else if (targetLine) {
    return `<mark class="highlight-css-line">${esc(targetLine)}</mark>\n` + esc(snippet);
  }
  return esc(snippet);
}

function copyModalAnnexeCode(btn) {
  const pre = document.getElementById('modalAnnexeCodePre');
  if (!pre) return;
  if (typeof copyCodeText === 'function') {
    copyCodeText(pre.innerText, btn);
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(pre.innerText).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Copié';
      setTimeout(() => { btn.textContent = orig; }, 1800);
    });
  }
}
