
// =============================================================
// CONFIGURATION DES VARIANTES INTERACTIVES (BOUTONS RADIO)
// =============================================================
const VARIETIES_CONFIG = {
  // CSS - BORDURES
  'css-border-style': {
    title: "Choisir un style de bordure (Boutons Radio) :",
    options: [
      { label: "solid (Trait plein continu)", value: "solid", css: "border-style: solid !important; border-width: 4px; border-color: #38bdf8;" },
      { label: "dotted (Pointillés réguliers)", value: "dotted", css: "border-style: dotted !important; border-width: 4px; border-color: #38bdf8;" },
      { label: "dashed (Tirets espacés)", value: "dashed", css: "border-style: dashed !important; border-width: 4px; border-color: #38bdf8;" },
      { label: "double (Double trait parallèle)", value: "double", css: "border-style: double !important; border-width: 6px; border-color: #38bdf8;" },
      { label: "groove (Rainure effet 3D)", value: "groove", css: "border-style: groove !important; border-width: 6px; border-color: #38bdf8;" },
      { label: "ridge (Crête relief 3D)", value: "ridge", css: "border-style: ridge !important; border-width: 6px; border-color: #38bdf8;" },
      { label: "none (Aucune bordure)", value: "none", css: "border-style: none !important;" }
    ]
  },
  'css-border-shorthand': {
    title: "Tester la super-propriété border (Combinaisons) :",
    options: [
      { label: "3px solid #38bdf8 (Bleu cyan plein)", value: "3px solid #38bdf8", css: "border: 3px solid #38bdf8 !important;" },
      { label: "4px dotted #facc15 (Jaune pointillés)", value: "4px dotted #facc15", css: "border: 4px dotted #facc15 !important;" },
      { label: "3px dashed #ef4444 (Rouge tirets)", value: "3px dashed #ef4444", css: "border: 3px dashed #ef4444 !important;" },
      { label: "6px double #10b981 (Vert double trait)", value: "6px double #10b981", css: "border: 6px double #10b981 !important;" },
      { label: "2px solid #a855f7 (Violet doux)", value: "2px solid #a855f7", css: "border: 2px solid #a855f7 !important;" }
    ]
  },
  'css-border-radius': {
    title: "Choisir un rayon de courbure border-radius :",
    options: [
      { label: "0px (Bords carrés stricts)", value: "0px", css: "border-radius: 0px !important;" },
      { label: "8px (Arrondi moderne)", value: "8px", css: "border-radius: 8px !important;" },
      { label: "20px (Fortement arrondi)", value: "20px", css: "border-radius: 20px !important;" },
      { label: "50% (Cercle / Pilule complète)", value: "50%", css: "border-radius: 50% !important; width: 130px !important; height: 130px !important;" }
    ]
  },
  'css-border-width': {
    title: "Choisir une épaisseur de bordure border-width :",
    options: [
      { label: "thin (Fine ~1px)", value: "thin", css: "border-width: thin !important; border-style: solid; border-color: #38bdf8;" },
      { label: "medium (Moyenne ~3px)", value: "medium", css: "border-width: medium !important; border-style: solid; border-color: #38bdf8;" },
      { label: "thick (Épaisse ~5px)", value: "thick", css: "border-width: thick !important; border-style: solid; border-color: #38bdf8;" },
      { label: "10px (Très épaisse en pixels)", value: "10px", css: "border-width: 10px !important; border-style: solid; border-color: #38bdf8;" }
    ]
  },
  'css-border-color': {
    title: "Choisir une couleur de bordure border-color :",
    options: [
      { label: "#38bdf8 (Cyan vif)", value: "#38bdf8", css: "border-color: #38bdf8 !important; border-style: solid; border-width: 4px;" },
      { label: "#ef4444 (Rouge alerte)", value: "#ef4444", css: "border-color: #ef4444 !important; border-style: solid; border-width: 4px;" },
      { label: "#10b981 (Vert réussite)", value: "#10b981", css: "border-color: #10b981 !important; border-style: solid; border-width: 4px;" },
      { label: "#facc15 (Jaune ambre)", value: "#facc15", css: "border-color: #facc15 !important; border-style: solid; border-width: 4px;" },
      { label: "#a855f7 (Violet)", value: "#a855f7", css: "border-color: #a855f7 !important; border-style: solid; border-width: 4px;" }
    ]
  },
  // CSS - TEXTE
  'css-text-align': {
    title: "Tester l'alignement text-align :",
    options: [
      { label: "left (Aligné à gauche)", value: "left", css: "text-align: left !important; width: 100%; display: block;" },
      { label: "center (Centré)", value: "center", css: "text-align: center !important; width: 100%; display: block;" },
      { label: "right (Aligné à droite)", value: "right", css: "text-align: right !important; width: 100%; display: block;" },
      { label: "justify (Justifié des deux côtés)", value: "justify", css: "text-align: justify !important; width: 100%; display: block;" }
    ]
  },
  'css-text-transform': {
    title: "Tester la casse text-transform :",
    options: [
      { label: "uppercase (TOUT EN MAJUSCULES)", value: "uppercase", css: "text-transform: uppercase !important;" },
      { label: "lowercase (tout en minuscules)", value: "lowercase", css: "text-transform: lowercase !important;" },
      { label: "capitalize (Première Lettre De Chaque Mot)", value: "capitalize", css: "text-transform: capitalize !important;" },
      { label: "none (Casse d'origine)", value: "none", css: "text-transform: none !important;" }
    ]
  },
  'css-font-weight': {
    title: "Tester la graisse de police font-weight :",
    options: [
      { label: "normal (Normal - 400)", value: "normal", css: "font-weight: normal !important;" },
      { label: "bold (Gras - 700)", value: "bold", css: "font-weight: bold !important;" },
      { label: "bolder (Extra-gras - 900)", value: "bolder", css: "font-weight: 900 !important;" },
      { label: "lighter (Fin - 300)", value: "lighter", css: "font-weight: 300 !important;" }
    ]
  },
  'css-font-style': {
    title: "Tester l'inclinaison font-style :",
    options: [
      { label: "normal (Texte droit)", value: "normal", css: "font-style: normal !important;" },
      { label: "italic (Texte en italique)", value: "italic", css: "font-style: italic !important;" }
    ]
  },
  'css-color': {
    title: "Tester la couleur de police color :",
    options: [
      { label: "#38bdf8 (Bleu cyan)", value: "#38bdf8", css: "color: #38bdf8 !important;" },
      { label: "#ef4444 (Rouge)", value: "#ef4444", css: "color: #ef4444 !important;" },
      { label: "#10b981 (Vert)", value: "#10b981", css: "color: #10b981 !important;" },
      { label: "#facc15 (Jaune)", value: "#facc15", css: "color: #facc15 !important;" }
    ]
  },
  'css-display': {
    title: "Tester le mode d'affichage display :",
    options: [
      { label: "block (Prend toute la largeur de ligne)", value: "block", css: "display: block !important; width: 100% !important;" },
      { label: "inline-block (En ligne avec dimensions réglables)", value: "inline-block", css: "display: inline-block !important; width: auto !important;" },
      { label: "none (Caché du flux)", value: "none", css: "display: none !important;" }
    ]
  },
  'css-transform': {
    title: "Tester les fonctions de transformation transform :",
    options: [
      { label: "rotate(20deg) (Rotation 20°)", value: "rotate(20deg)", css: "transform: rotate(20deg) !important;" },
      { label: "scale(1.25) (Zoom avant +25%)", value: "scale(1.25)", css: "transform: scale(1.25) !important;" },
      { label: "scale(0.75) (Zoom arrière -25%)", value: "scale(0.75)", css: "transform: scale(0.75) !important;" },
      { label: "translate(25px, 10px) (Décalage X, Y)", value: "translate(25px, 10px)", css: "transform: translate(25px, 10px) !important;" },
      { label: "skew(15deg) (Inclinaison en biais)", value: "skew(15deg)", css: "transform: skew(15deg) !important;" }
    ]
  },
  'css-filter': {
    title: "Tester les filtres graphiques filter :",
    options: [
      { label: "none (Image normale sans filtre)", value: "none", css: "filter: none !important;" },
      { label: "blur(4px) (Flou artistique)", value: "blur(4px)", css: "filter: blur(4px) !important;" },
      { label: "grayscale(100%) (Noir & Blanc)", value: "grayscale(100%)", css: "filter: grayscale(100%) !important;" },
      { label: "sepia(80%) (Ambiance ancienne sépia)", value: "sepia(80%)", css: "filter: sepia(80%) !important;" },
      { label: "invert(100%) (Négatif inversé)", value: "invert(100%)", css: "filter: invert(100%) !important;" }
    ]
  },
  'css-opacity': {
    title: "Tester le degré de transparence opacity :",
    options: [
      { label: "1 (Opaque 100%)", value: "1", css: "opacity: 1 !important;" },
      { label: "0.75 (Légère transparence 75%)", value: "0.75", css: "opacity: 0.75 !important;" },
      { label: "0.5 (Semi-transparent 50%)", value: "0.5", css: "opacity: 0.5 !important;" },
      { label: "0.2 (Très transparent 20%)", value: "0.2", css: "opacity: 0.2 !important;" }
    ]
  },
  'css-box-shadow': {
    title: "Tester les effets d'ombre portée box-shadow :",
    options: [
      { label: "Ombre douce (0 5px 15px rgba(0,0,0,0.5))", value: "soft", css: "box-shadow: 0 5px 15px rgba(0,0,0,0.5) !important;" },
      { label: "Halo néon cyan (0 0 20px #38bdf8)", value: "neon", css: "box-shadow: 0 0 20px #38bdf8 !important;" },
      { label: "Ombre décalée rétro (6px 6px 0 #ef4444)", value: "retro", css: "box-shadow: 6px 6px 0 #ef4444 !important;" },
      { label: "none (Aucune ombre)", value: "none", css: "box-shadow: none !important;" }
    ]
  },
  'css-list-style-type': {
    title: "Tester les marqueurs de liste list-style-type :",
    options: [
      { label: "disc (Disque plein par défaut)", value: "disc", css: "list-style-type: disc !important;" },
      { label: "circle (Cercle vide)", value: "circle", css: "list-style-type: circle !important;" },
      { label: "square (Carré plein)", value: "square", css: "list-style-type: square !important;" },
      { label: "upper-roman (I, II, III...)", value: "upper-roman", css: "list-style-type: upper-roman !important;" },
      { label: "lower-alpha (a, b, c...)", value: "lower-alpha", css: "list-style-type: lower-alpha !important;" }
    ]
  },
  'css-border-collapse': {
    title: "Tester la fusion des bordures de tableau :",
    options: [
      { label: "collapse (Bordures fusionnées en un seul trait - Bac STI)", value: "collapse", css: "border-collapse: collapse !important;" },
      { label: "separate (Bordures séparées avec espacement)", value: "separate", css: "border-collapse: separate !important; border-spacing: 6px !important;" }
    ]
  },
  'css-overflow': {
    title: "Tester le débordement de boîte overflow :",
    options: [
      { label: "visible (Le texte dépasse librement de la boîte)", value: "visible", css: "overflow: visible !important; height: 60px !important;" },
      { label: "hidden (Tout ce qui dépasse est coupé)", value: "hidden", css: "overflow: hidden !important; height: 60px !important;" },
      { label: "scroll (Barres de défilement toujours visibles)", value: "scroll", css: "overflow: scroll !important; height: 60px !important;" },
      { label: "auto (Barres automatiques seulement si nécessaire)", value: "auto", css: "overflow: auto !important; height: 60px !important;" }
    ]
  },
  'css-background-repeat': {
    title: "Tester la répétition du fond background-repeat :",
    options: [
      { label: "repeat (Répéter sur toute la surface)", value: "repeat", css: "background-repeat: repeat !important;" },
      { label: "no-repeat (Affiché une seule fois)", value: "no-repeat", css: "background-repeat: no-repeat !important;" },
      { label: "repeat-x (Répétition horizontale uniquement)", value: "repeat-x", css: "background-repeat: repeat-x !important;" },
      { label: "repeat-y (Répétition verticale uniquement)", value: "repeat-y", css: "background-repeat: repeat-y !important;" }
    ]
  },

  // HTML - FORMULAIRE & BALISES
  'tag-input': {
    title: "Choisir le type d'input à tester (Boutons Radio) :",
    options: [
      { label: "type='text' (Texte classique)", value: "text", previewHtml: '<input type="text" id="champDemo" value="Candidat Bac STI" style="padding:10px 14px; border:2px solid #f97316; border-radius:6px; font-size:15px; width:85%;">', code: `<input type="text" id="nom" name="nom" placeholder="Votre nom" required>`},
      { label: "type='password' (Mot de passe masqué)", value: "password", previewHtml: '<input type="password" id="champDemo" value="MotDePasse123" style="padding:10px 14px; border:2px solid #f97316; border-radius:6px; font-size:15px; width:85%;">', code: `<input type="password" id="pass" name="pass" required>`},
      { label: "type='email' (Email avec vérification)", value: "email", previewHtml: '<input type="email" id="champDemo" value="eleve@bac-sti.tn" style="padding:10px 14px; border:2px solid #f97316; border-radius:6px; font-size:15px; width:85%;">', code: `<input type="email" id="mail" name="mail" placeholder="exemple@domaine.tn">`},
      { label: "type='number' (Nombre min/max)", value: "number", previewHtml: '<input type="number" id="champDemo" value="16" min="0" max="20" style="padding:10px 14px; border:2px solid #f97316; border-radius:6px; font-size:15px; width:50%;">', code: `<input type="number" id="note" name="note" min="0" max="20">`},
      { label: "type='date' (Calendrier HTML5)", value: "date", previewHtml: '<input type="date" id="champDemo" value="2026-06-15" style="padding:10px 14px; border:2px solid #f97316; border-radius:6px; font-size:15px;">', code: `<input type="date" id="dateExamen" name="dateExamen">`},
      { label: "type='range' (Curseur linéaire)", value: "range", previewHtml: '<div style="display:flex; align-items:center; gap:14px;"><input type="range" id="champDemo" min="0" max="100" value="80" style="accent-color:#f97316; width:75%;"><span style="font-weight:bold; font-size:16px; color:#f97316;">80%</span></div>', code: `<input type="range" id="niveau" name="niveau" min="0" max="100" value="80">`},
      { label: "type='checkbox' (Case à cocher)", value: "checkbox", previewHtml: '<label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:15px;"><input type="checkbox" id="champDemo" checked style="accent-color:#f97316; transform:scale(1.4);"> <span>J\'accepte les conditions d\'inscription au Bac</span></label>', code: `<input type="checkbox" id="accord" name="accord" checked>`},
      { label: "type='radio' (Boutons radio exclusifs)", value: "radio", previewHtml: '<div style="display:flex; gap:20px; font-size:15px;"><label style="display:flex; align-items:center; gap:8px;"><input type="radio" name="genreDemo" checked style="accent-color:#f97316;"> Homme</label><label style="display:flex; align-items:center; gap:8px;"><input type="radio" name="genreDemo" style="accent-color:#f97316;"> Femme</label></div>', code: `<input type="radio" name="genre" value="H" checked> Homme\\n<input type="radio" name="genre" value="F"> Femme`},
      { label: "type='submit' (Bouton d'envoi)", value: "submit", previewHtml: '<input type="submit" value="Valider et Enregistrer" style="background:#f97316; color:#fff; font-weight:bold; padding:12px 24px; border:none; border-radius:6px; cursor:pointer; font-size:15px; box-shadow:0 3px 8px rgba(0,0,0,0.2);">', code: `<input type="submit" id="btnEnvoyer" value="Valider et Enregistrer">`}
    ]
  },
  'tag-hn': {
    title: "Choisir la taille et niveau de titre :",
    options: [
      { label: "<h1> (Titre principal - 32px)", value: "h1", previewHtml: '<h1 style="color:#f97316; margin:0; font-size:32px;">Titre Principal &lt;h1&gt;</h1>', code: `<h1 id="titre1">Titre Principal de la page</h1>`},
      { label: "<h2> (Sous-titre section - 24px)", value: "h2", previewHtml: '<h2 style="color:#f97316; margin:0; font-size:24px;">Sous-titre de Section &lt;h2&gt;</h2>', code: `<h2 id="titre2">Sous-titre de Section</h2>`},
      { label: "<h3> (Sous-section - 20px)", value: "h3", previewHtml: '<h3 style="color:#f97316; margin:0; font-size:20px;">Sous-section &lt;h3&gt;</h3>', code: `<h3 id="titre3">Sous-section</h3>`},
      { label: "<h4> (Paragraphe titré - 17px)", value: "h4", previewHtml: '<h4 style="color:#f97316; margin:0; font-size:17px;">Petit Titre &lt;h4&gt;</h4>', code: `<h4 id="titre4">Petit Titre</h4>`}
    ]
  },
  'tag-ul': {
    title: "Choisir le marqueur de liste <ul> :",
    options: [
      { label: "Puces rondes pleines (disc)", value: "disc", previewHtml: '<ul style="list-style-type:disc; padding-left:26px; color:#1e293b; font-size:15px; line-height:1.7;"><li>Sciences &amp; Technologies (STI)</li><li>Mathématiques</li><li>Informatique</li></ul>', code: `<ul id="listePuces">\n  <li>Sciences & Technologies (STI)</li>\n  <li>Mathématiques</li>\n  <li>Informatique</li>\n</ul>`},
      { label: "Puces cercles creux (circle)", value: "circle", previewHtml: '<ul style="list-style-type:circle; padding-left:26px; color:#1e293b; font-size:15px; line-height:1.7;"><li>Sciences &amp; Technologies (STI)</li><li>Mathématiques</li><li>Informatique</li></ul>', code: `<ul style="list-style-type: circle;">\n  <li>Sciences & Technologies (STI)</li>\n  <li>Mathématiques</li>\n  <li>Informatique</li>\n</ul>`},
      { label: "Puces carrées (square)", value: "square", previewHtml: '<ul style="list-style-type:square; padding-left:26px; color:#1e293b; font-size:15px; line-height:1.7;"><li>Sciences &amp; Technologies (STI)</li><li>Mathématiques</li><li>Informatique</li></ul>', code: `<ul style="list-style-type: square;">\n  <li>Sciences & Technologies (STI)</li>\n  <li>Mathématiques</li>\n  <li>Informatique</li>\n</ul>`}
    ]
  },
  'tag-ol': {
    title: "Choisir la numérotation ordonnée <ol> :",
    options: [
      { label: "1, 2, 3 (Nombres décimaux type='1')", value: "1", previewHtml: '<ol type="1" style="padding-left:26px; color:#1e293b; font-size:15px; line-height:1.7;"><li>Saisie des coordonnées</li><li>Choix de la spécialité</li><li>Validation finale</li></ol>', code: `<ol type="1">\n  <li>Saisie des coordonnées</li>\n  <li>Choix de la spécialité</li>\n  <li>Validation finale</li>\n</ol>`},
      { label: "A, B, C (Lettres majuscules type='A')", value: "A", previewHtml: '<ol type="A" style="padding-left:26px; color:#1e293b; font-size:15px; line-height:1.7;"><li>Épreuve théorique</li><li>Épreuve pratique</li><li>Projet de fin d\'année</li></ol>', code: `<ol type="A">\n  <li>Épreuve théorique</li>\n  <li>Épreuve pratique</li>\n  <li>Projet de fin d\'année</li>
</ol>`},
      { label: "I, II, III (Chiffres romains type='I')", value: "I", previewHtml: '<ol type="I" style="padding-left:26px; color:#1e293b; font-size:15px; line-height:1.7;"><li>Introduction générale</li><li>Développement Web</li><li>Conclusion &amp; Synthèse</li></ol>', code: `<ol type="I">\n  <li>Introduction générale</li>\n  <li>Développement Web</li>\n  <li>Conclusion & Synthèse</li>\n</ol>`}
    ]
  },
  'tag-details-summary': {
    title: "Tester l'état du bloc dépliable <details> :",
    options: [
      { label: "Fermé par défaut (cliquer pour ouvrir)", value: "closed", previewHtml: '<details style="border:1px solid #f97316; border-radius:6px; padding:12px; background:#fff7ed;"><summary style="font-weight:bold; cursor:pointer; color:#f97316; font-size:15px;">Consignes de l\'épreuve du Bac STI (Cliquez)</summary><p style="margin:10px 0 0 0; color:#475569; font-size:14px;">Durée : 3 heures. Calculatrice scientifique autorisée. Documents interdits.</p></details>', code: `<details id="consignes">\n  <summary>Consignes de l\'épreuve du Bac STI</summary>
  <p>Durée : 3 heures. Calculatrice autorisée.</p>
</details>`},
      { label: "Ouvert d'emblée (<details open>)", value: "open", previewHtml: '<details open style="border:1px solid #f97316; border-radius:6px; padding:12px; background:#fff7ed;"><summary style="font-weight:bold; cursor:pointer; color:#f97316; font-size:15px;">Consignes de l\'épreuve du Bac STI (Déjà ouvert)</summary><p style="margin:10px 0 0 0; color:#475569; font-size:14px;">Durée : 3 heures. Calculatrice scientifique autorisée. Documents interdits.</p></details>', code: `<details id="consignes" open>\n  <summary>Consignes de l\'épreuve du Bac STI</summary>
  <p>Durée : 3 heures. Calculatrice autorisée.</p>
</details>`}
    ]
  },
  'tag-form': {
    title: "Choisir la méthode d'envoi du formulaire :",
    options: [
      { label: "method='post' (Recommandé & Sécurisé pour Bac)", value: "post", previewHtml: '<div style="border:2px solid #f97316; padding:14px; border-radius:6px; background:#fff7ed;"><span style="color:#f97316; font-weight:bold; font-size:15px;">&lt;form method="post" onsubmit="return validerFormulaire()"&gt;</span><p style="margin:8px 0; font-size:13px; color:#475569;">Les données sont transmises dans le corps de la requête HTTP sans apparaître dans l\'URL (obligatoire pour mots de passe et données sensibles).</p></div>', code: `<form id="formulaireBac" action="enregistrer.php" method="post" onsubmit="return validerFormulaire()">\n  <!-- Champs du formulaire avec validation JS -->\n</form>`},
      { label: "method='get' (Paramètres visibles dans l\'URL)", value: "get", previewHtml: '<div style="border:2px solid #64748b; padding:14px; border-radius:6px; background:#f8fafc;"><span style="color:#64748b; font-weight:bold; font-size:15px;">&lt;form method="get" action="recherche.php"&gt;</span><p style="margin:8px 0; font-size:13px; color:#475569;">Les données saisies sont concaténées à l\'URL (ex: recherche.php?q=bac+sti). Ne pas utiliser pour les mots de passe.</p></div>', code: `<form id="formRecherche" action="recherche.php" method="get">\n  <!-- Champs de recherche -->\n</form>`}
    ]
  },
  'tag-a': {
    title: "Choisir la cible du lien (attribut target) :",
    options: [
      { label: "target='_self' (Ouvrir dans l'onglet courant)", value: "_self", previewHtml: '<a href="javascript:void(0)" style="color:#f97316; font-weight:bold; text-decoration:underline; font-size:16px;">Portail Officiel STI (_self)</a>', code: `<a id="lien" href="https://bac.tn" target="_self">Portail Officiel STI</a>`},
      { label: "target='_blank' (Ouvrir dans un nouvel onglet)", value: "_blank", previewHtml: '<a href="javascript:void(0)" style="color:#0ea5e9; font-weight:bold; text-decoration:underline; font-size:16px;">Ouvrir dans un nouvel onglet ↗ (_blank)</a>', code: `<a id="lien" href="https://bac.tn" target="_blank">Portail Officiel STI</a>`}
    ]
  }
};

// Application Logique : Navigation, Rendu, Filtres, Modales et Simulateur Vidéo

let currentView = 'home';
let currentCategory = 'all';
let currentSearch = '';
let activeVideoTimer = null;
let isVideoPlaying = false;

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupThemeToggle();
  renderHtmlCategories();
  renderCssCategories();
  renderJsCategories();
  renderHtmlCards();
  renderCssCards();
  renderJsCards();
});

// -------------------------------------------------------------
// 1. Navigation entre la 1ère page (3 blocs) et les sous-pages
// -------------------------------------------------------------
function setupNavigation() {
  // Clic sur les 3 grands blocs de la page d'accueil
  document.querySelectorAll('.portal-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetView = card.getAttribute('data-view');
      switchView(targetView);
    });
  });

  // Liens de la barre de navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-view');
      if (target) {
        switchView(target);
      }
    });
  });

  // Bouton retour à l'accueil
  document.querySelectorAll('.back-to-home-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchView('home');
    });
  });

  // Fermer la modale
  const modalOverlay = document.getElementById('detailsModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  closeModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function switchView(viewName) {
  if (!viewName) return;
  currentView = viewName;
  currentCategory = 'all';
  currentSearch = '';

  // Mise à jour des vues
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const targetSection = document.getElementById(`view-${viewName}`);
  if (targetSection) targetSection.classList.add('active');

  // Mise à jour de la navbar
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.getAttribute('data-view') === viewName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Réinitialiser les champs de recherche
  if (viewName === 'html') {
    document.getElementById('htmlSearchInput').value = '';
    renderHtmlCategories();
    renderHtmlCards();
  } else if (viewName === 'css') {
    document.getElementById('cssSearchInput').value = '';
    renderCssCategories();
    renderCssCards();
  } else if (viewName === 'js') {
    const jsInput = document.getElementById('jsSearchInput');
    if (jsInput) jsInput.value = '';
    renderJsCategories();
    renderJsCards();
  }
}

// -------------------------------------------------------------
// 2. Gestion du Thème Clair / Sombre
// -------------------------------------------------------------
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('sti_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggleBtn.innerHTML = savedTheme === 'light' ? '🌙' : '☀️';

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sti_theme', newTheme);
    toggleBtn.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
  });
}

// -------------------------------------------------------------
// 3. Rendu & Filtres HTML5
// -------------------------------------------------------------
function renderHtmlCategories() {
  const cats = ['all', ...new Set(DATA.html.map(item => item.category))];
  const bar = document.getElementById('htmlCategoriesBar');
  bar.innerHTML = '';

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.textContent = cat === 'all' ? 'Toutes les balises' : cat;
    btn.addEventListener('click', () => {
      currentCategory = cat;
      document.querySelectorAll('#htmlCategoriesBar .cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderHtmlCards();
    });
    bar.appendChild(btn);
  });
}

function renderHtmlCards() {
  const container = document.getElementById('htmlItemsGrid');
  container.innerHTML = '';

  const filtered = DATA.html.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
      🔍 Aucune balise HTML ne correspond à votre recherche.
    </div>`;
    return;
  }

  // Guide comparatif spécial lorsqu'on filtre sur les Événements
  if (currentCategory === 'Évènements' && !currentSearch) {
    const banner = document.createElement('div');
    banner.style.gridColumn = '1 / -1';
    banner.style.background = 'linear-gradient(135deg, rgba(2, 132, 199, 0.15), rgba(14, 165, 233, 0.08))';
    banner.style.border = '1px solid rgba(56, 189, 248, 0.4)';
    banner.style.borderLeft = '6px solid #0284c7';
    banner.style.borderRadius = 'var(--radius-md)';
    banner.style.padding = '18px 22px';
    banner.style.marginBottom = '12px';
    banner.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
        <span style="font-size:1.5rem;">⚡</span>
        <h3 style="font-size:1.1rem; color:#38bdf8; margin:0;">Mnémonique STI : Les 5 Paires d'Événements Complémentaires</h3>
      </div>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">
        Pour les contrôles et examens, retenez les événements par paires d'actions inverses ou complémentaires :
      </p>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:10px; font-size:0.85rem;">
        <div style="background:var(--bg-card); padding:10px 14px; border-radius:6px; border:1px solid var(--border-color);">
          <strong style="color:#f97316;">1. Saisie en direct vs Validation :</strong><br>
          • <code>oninput</code> : à chaque caractère tapé.<br>
          • <code>onchange</code> : validé après sortie du champ.
        </div>
        <div style="background:var(--bg-card); padding:10px 14px; border-radius:6px; border:1px solid var(--border-color);">
          <strong style="color:#0284c7;">2. Entrée vs Sortie de champ :</strong><br>
          • <code>onfocus</code> : clic dans le champ (actif).<br>
          • <code>onblur</code> : clic en dehors (vérification).
        </div>
        <div style="background:var(--bg-card); padding:10px 14px; border-radius:6px; border:1px solid var(--border-color);">
          <strong style="color:#10b981;">3. Touche Clavier :</strong><br>
          • <code>onkeydown</code> : touche enfoncée.<br>
          • <code>onkeyup</code> : touche relâchée.
        </div>
        <div style="background:var(--bg-card); padding:10px 14px; border-radius:6px; border:1px solid var(--border-color);">
          <strong style="color:#facc15;">4. Souris :</strong><br>
          • <code>onmouseover</code> : survol entrant.<br>
          • <code>onmouseout</code> : sortie du curseur.
        </div>
        <div style="background:var(--bg-card); padding:10px 14px; border-radius:6px; border:1px solid var(--border-color);">
          <strong style="color:#ec4899;">5. Multimédia :</strong><br>
          • <code>onplay</code> : début de lecture.<br>
          • <code>onpause</code> : mise en pause.
        </div>
      </div>
    `;
    container.appendChild(banner);
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card card-html';
    card.innerHTML = `
      <div class="card-cat-badge">${item.category}</div>
      <div class="item-card-title">
        <span>${item.name}</span>
        <span class="item-card-tag">${escapeHtml(item.tag)}</span>
      </div>
      <p class="item-card-desc">${item.summary}</p>
      <div class="card-action-bar">
        <span>📖 Comment utiliser & Rendu</span>
        <span>→</span>
      </div>
    `;
    card.addEventListener('click', () => openHtmlModal(item));
    container.appendChild(card);
  });
}

function handleHtmlSearch(val) {
  currentSearch = val;
  renderHtmlCards();
}

// -------------------------------------------------------------
// 4. Rendu & Filtres CSS3 (Avec note :hover sur chaque carte)
// -------------------------------------------------------------
function renderCssCategories() {
  const cats = ['all', ...new Set(DATA.css.map(item => item.category))];
  const bar = document.getElementById('cssCategoriesBar');
  bar.innerHTML = '';

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.textContent = cat === 'all' ? 'Toutes les propriétés' : cat;
    btn.addEventListener('click', () => {
      currentCategory = cat;
      document.querySelectorAll('#cssCategoriesBar .cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCssCards();
    });
    bar.appendChild(btn);
  });
}

function renderCssCards() {
  const container = document.getElementById('cssItemsGrid');
  container.innerHTML = '';

  const filtered = DATA.css.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.property.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
      🔍 Aucune propriété CSS ne correspond à votre recherche.
    </div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card card-css';
    card.innerHTML = `
      <div class="card-cat-badge">${item.category}</div>
      <div class="item-card-title">
        <span>${item.name}</span>
        <span class="item-card-tag" style="font-size:0.85rem;">${escapeHtml(item.property)}</span>
      </div>
      <p class="item-card-desc">${item.description || item.summary}</p>
      
      <!-- Note :hover obligatoire sur chaque élément -->
      <div class="hover-note-badge">
        <span>💡</span>
        <span><strong>Au survol :</strong> ajoutez <code>:hover</code> pour déclencher à la souris.</span>
      </div>

      <div class="card-action-bar">
        <span style="color:#38bdf8;">🎬 Voir la vidéo & démonstration</span>
        <span>→</span>
      </div>
    `;
    card.addEventListener('click', () => openCssModal(item));
    container.appendChild(card);
  });
}

function handleCssSearch(val) {
  currentSearch = val;
  renderCssCards();
}

// -------------------------------------------------------------
// 5. Rendu & Filtres JavaScript (Annexe Officielle Bac STI)
// -------------------------------------------------------------
function renderJsCategories() {
  const cats = ['all', ...new Set(DATA.js.map(item => item.category))];
  const bar = document.getElementById('jsCategoriesBar');
  if (!bar) return;
  bar.innerHTML = '';

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.textContent = cat === 'all' ? 'Toutes les notions JS' : cat;
    btn.addEventListener('click', () => {
      currentCategory = cat;
      document.querySelectorAll('#jsCategoriesBar .cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderJsCards();
    });
    bar.appendChild(btn);
  });
}

function renderJsCards() {
  const container = document.getElementById('jsItemsGrid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = DATA.js.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q || item.name.toLowerCase().includes(q) || (item.summary && item.summary.toLowerCase().includes(q)) || (item.description && item.description.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
      🔍 Aucune fonction JavaScript ne correspond à votre recherche.
    </div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card card-js';
    card.innerHTML = `
      <div class="card-cat-badge" style="color:#eab308;">${item.category}</div>
      <div class="item-card-title">
        <span>${item.name}</span>
        <span class="item-card-tag" style="color:#eab308; font-size:0.85rem;">JS</span>
      </div>
      <p class="item-card-desc">${item.description || item.summary}</p>
      <div class="card-action-bar">
        <span style="color:#eab308;">⚡ Explication, Code & Tester</span>
        <span>→</span>
      </div>
    `;
    card.addEventListener('click', () => openJsModal(item));
    container.appendChild(card);
  });
}

function handleJsSearch(val) {
  currentSearch = val;
  renderJsCards();
}

// -------------------------------------------------------------
// 6. MODALES DE DÉTAILS
// -------------------------------------------------------------

// MODALE HTML5 : Comment utiliser, Utilité, Code, Photo/Rendu
function openHtmlModal(item) {
  const modal = document.getElementById('detailsModal');
  const body = document.getElementById('modalDynamicBody');
  const title = document.getElementById('modalTitle');
  const cat = document.getElementById('modalCategory');

  cat.textContent = `HTML5 • ${item.category}`;
  cat.style.color = '#f97316';
  title.textContent = `${item.tag} - ${item.name}`;

  let attributesHtml = '';
  if (item.attributes && item.attributes.length > 0) {
    attributesHtml = `
      <div style="margin-top: 12px;">
        <strong style="font-size:0.85rem; color:var(--text-muted);">Attributs clés :</strong>
        <div class="attr-tags-list">
          ${item.attributes.map(attr => `<span class="attr-tag" style="color:#f97316;">${attr}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // Panneau interactif de Boutons Radio pour les variantes
  let varietySectionHtml = '';
  const varietyConfig = VARIETIES_CONFIG[item.id];
  if (varietyConfig) {
    varietySectionHtml = `
      <div class="variety-selector-card">
        <div class="variety-header">
          <div class="variety-header-title" style="color:#f97316;">
            <span>🎛️</span>
            <span>${varietyConfig.title}</span>
          </div>
          <div id="varietyToastHtml" class="variety-applied-toast" style="display:none; border-color:#f97316; color:#fb923c; background:rgba(249,115,22,0.15);"></div>
        </div>
        <div class="variety-radios-wrap">
          ${varietyConfig.options.map((opt, idx) => `
            <label class="variety-radio-label orange ${idx === 0 ? 'active' : ''}" onclick="applyHtmlVariety('${item.id}', ${idx}, this)">
              <input type="radio" name="htmlVariantRadio" value="${opt.value}" ${idx === 0 ? 'checked' : ''}>
              <span>${escapeHtml(opt.label)}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <!-- 1. Comment utiliser -->
    <div class="modal-section">
      <div class="modal-section-title orange">
        <span>📘</span>
        <span>Comment utiliser (How to use)</span>
      </div>
      <p class="modal-text">${item.howToUse}</p>
      ${attributesHtml}
    </div>

    <!-- 2. À quoi ça sert -->
    <div class="modal-section">
      <div class="modal-section-title orange">
        <span>🎯</span>
        <span>À quoi ça sert ? (Utilité dans l'annexe)</span>
      </div>
      <p class="modal-text">${item.summary}</p>
    </div>

    <!-- 3. Choix des variantes si disponibles -->
    ${varietySectionHtml}

    <!-- 4. Code HTML d'exemple -->
    <div class="modal-section">
      <div class="modal-section-title orange">
        <span>💻</span>
        <span>Code HTML d'exemple</span>
      </div>
      <div class="code-container">
        <div class="code-header">
          <span>EXEMPLE CODE HTML5</span>
          <button class="copy-code-btn" onclick="copyCode(this, \`${escapeJsString(item.code)}\`)">Copier le code</button>
        </div>
        <pre class="code-pre"><code>${escapeHtml(item.code)}</code></pre>
      </div>
    </div>

    <!-- 5. Photo / Rendu visuel du code avec animation -->
    <div class="modal-section">
      <div class="modal-section-title orange">
        <span>📸</span>
        <span>Photo / Rendu visuel du résultat (Animé)</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">
        Voici l'apparence visuelle exacte produite par cette balise dans le navigateur :
      </p>
      
      <div class="browser-mockup">
        <div class="browser-bar">
          <div class="browser-dots">
            <span class="browser-dot dot-red"></span>
            <span class="browser-dot dot-yellow"></span>
            <span class="browser-dot dot-green"></span>
          </div>
          <div class="browser-url-input">https://lycee-sti.tn/apercu/${item.id}.html</div>
        </div>
        <div class="browser-viewport" id="browserViewport">
          ${item.previewHtml}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// MODALE CSS3 : Vidéo animée par code + Note :hover
function openCssModal(item) {
  const modal = document.getElementById('detailsModal');
  const body = document.getElementById('modalDynamicBody');
  const title = document.getElementById('modalTitle');
  const cat = document.getElementById('modalCategory');

  cat.textContent = `CSS3 • ${item.category}`;
  cat.style.color = '#38bdf8';
  title.textContent = `${item.property} - ${item.name}`;

  let valuesHtml = '';
  if (item.values && item.values.length > 0) {
    valuesHtml = `
      <div class="modal-section">
        <div class="modal-section-title">
          <span>⚙️</span>
          <span>Valeurs possibles & Unités (Bac STI)</span>
        </div>
        <div class="attr-tags-list">
          ${item.values.map(val => `<span class="attr-tag" style="color:#38bdf8; background:rgba(56, 189, 248, 0.1); border-color:rgba(56, 189, 248, 0.3); font-weight:600; font-size:0.85rem;">${escapeHtml(val)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // Panneau interactif de Boutons Radio pour les variantes CSS
  let varietySectionHtml = '';
  const varietyConfig = VARIETIES_CONFIG[item.id];
  if (varietyConfig) {
    varietySectionHtml = `
      <div class="variety-selector-card">
        <div class="variety-header">
          <div class="variety-header-title" style="color:#38bdf8;">
            <span>🎛️</span>
            <span>${varietyConfig.title}</span>
          </div>
          <div id="varietyToastCss" class="variety-applied-toast" style="display:none;"></div>
        </div>
        <div class="variety-radios-wrap">
          ${varietyConfig.options.map((opt, idx) => `
            <label class="variety-radio-label ${idx === 0 ? 'active' : ''}" onclick="applyCssVariety('${item.id}', ${idx}, this)">
              <input type="radio" name="cssVariantRadio" value="${opt.value}" ${idx === 0 ? 'checked' : ''}>
              <span>${escapeHtml(opt.label)}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <!-- 1. Description & Explication Détaillée -->
    <div class="modal-section">
      <div class="modal-section-title">
        <span>📖</span>
        <span>Description & Explication Détaillée</span>
      </div>
      <p class="modal-text" style="font-size:0.98rem; line-height:1.65;">
        ${item.description || item.summary}
      </p>
    </div>

    <!-- 2. Valeurs Possibles -->
    ${valuesHtml}

    <!-- 3. Comment utiliser au Bac STI -->
    <div class="modal-section">
      <div class="modal-section-title">
        <span>📘</span>
        <span>Comment utiliser (How to use)</span>
      </div>
      <p class="modal-text">${item.howToUse}</p>
    </div>

    <!-- 4. NOTE OBLIGATOIRE SUR :HOVER (SURVOL DE LA SOURIS) -->
    <div class="callout-hover-box">
      <div style="font-weight: 800; font-size: 1rem; margin-bottom: 6px; display:flex; align-items:center; gap:8px;">
        <span>💡</span>
        <span>NOTE IMPORTANTE SUR LE SURVOL (:hover)</span>
      </div>
      <p style="margin-bottom:8px;">
        ${item.hoverNote}
      </p>
      <div style="font-size:0.85rem; background:rgba(0,0,0,0.25); padding:8px 12px; border-radius:6px; font-family:monospace;">
        Astuce de cours : <strong>selecteur:hover { ${escapeHtml(item.property.split(',')[0].split(' ')[0])}: nouvelle_valeur; }</strong>
      </div>
    </div>

    <!-- 5. Choix interactif des variantes avec boutons radio -->
    ${varietySectionHtml}

    <!-- 6. Code CSS d'exemple -->
    <div class="modal-section">
      <div class="modal-section-title">
        <span>💻</span>
        <span>Code CSS d'exemple</span>
      </div>
      <div class="code-container">
        <div class="code-header">
          <span>STYLE.CSS</span>
          <button class="copy-code-btn" onclick="copyCode(this, \`${escapeJsString(item.code)}\`)">Copier le code</button>
        </div>
        <pre class="code-pre"><code>${escapeHtml(item.code)}</code></pre>
      </div>
    </div>

    <!-- 7. VIDÉO / DÉMONSTRATION ANIMÉE DU CODE -->
    <div class="modal-section">
      <div class="modal-section-title">
        <span>🎬</span>
        <span>Démonstration Vidéo en direct du code (Avec animation de variante)</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">
        Lecteur vidéo interactif démontrant le fonctionnement dynamique de cette propriété CSS :
      </p>

      <div class="video-player-container">
        <div class="video-player-header">
          <span>▶ VIDÉO DÉMO : ${item.name}</span>
          <span class="video-hd-badge">1080p HD LIVE</span>
        </div>
        
        <div class="video-stage" id="videoStage">
          <!-- Élément animé selon le type de vidéo -->
          ${buildVideoStageElement(item)}
        </div>

        <div class="video-controls-bar">
          <button class="video-btn" id="playPauseVideoBtn" title="Play / Pause" onclick="toggleVideoPlay('${item.id}')">⏸</button>
          <button class="video-btn" title="Rejouer" onclick="replayVideo('${item.id}')">🔄</button>
          
          <div class="video-timeline-wrap">
            <div class="video-progress-fill" id="videoProgress"></div>
          </div>

          <button class="video-hover-toggle-btn" title="Tester avec :hover" onclick="enableHoverStageTest()">
            🖱️ Tester avec :hover
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  startVideoSimulation(item.id);
}

// MODALE JS (Annexe Officielle Bac STI)
function openJsModal(item) {
  const modal = document.getElementById('detailsModal');
  const body = document.getElementById('modalDynamicBody');
  const title = document.getElementById('modalTitle');
  const cat = document.getElementById('modalCategory');

  cat.textContent = `JAVASCRIPT • ${item.category}`;
  cat.style.color = '#10b981';
  title.textContent = item.name;

  let valuesHtml = '';
  if (item.values && item.values.length > 0) {
    valuesHtml = `
      <div class="modal-section">
        <div class="modal-section-title green">
          <span>⚙️</span>
          <span>Syntaxe & Valeurs Autorisées (Bac STI)</span>
        </div>
        <div class="attr-tags-list">
          ${item.values.map(val => `<span class="attr-tag" style="color:#34d399; background:rgba(16, 185, 129, 0.1); border-color:rgba(16, 185, 129, 0.35); font-weight:600; font-size:0.85rem;">${escapeHtml(val)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <!-- 1. Description & Explication Détaillée -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>📖</span>
        <span>Description & Rôle au Bac STI</span>
      </div>
      <p class="modal-text" style="font-size:0.98rem; line-height:1.65;">
        ${item.description || item.summary}
      </p>
    </div>

    <!-- 2. Comment utiliser au Bac -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>📘</span>
        <span>Comment utiliser (How to use)</span>
      </div>
      <p class="modal-text">${item.howToUse || item.syntax || ''}</p>
    </div>

    <!-- 3. Syntaxe & Valeurs -->
    ${valuesHtml}

    <!-- 4. Définition officielle de l'Annexe -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>🎯</span>
        <span>Texte officiel de l'Annexe</span>
      </div>
      <p class="modal-text" style="font-style:italic; color:var(--text-secondary);">${item.summary}</p>
    </div>

    <!-- 5. Code JavaScript d'exemple -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>💻</span>
        <span>Code JavaScript d'exemple (Bac STI)</span>
      </div>
      <div class="code-container">
        <div class="code-header">
          <span>EXEMPLE_BAC.JS</span>
          <button class="copy-code-btn" onclick="copyCode(this, \`${escapeJsString(item.code)}\`)">Copier le code</button>
        </div>
        <pre class="code-pre"><code>${escapeHtml(item.code)}</code></pre>
      </div>
    </div>

    <!-- 6. Exécution interactive en direct -->
    <div class="modal-section">
      <div class="modal-section-title green">
        <span>⚡</span>
        <span>Console Interactive : Tester le code en direct</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:10px;">
        Cliquez sur le bouton ci-dessous pour lancer l'exécution de cet exemple dans votre navigateur :
      </p>
      <button onclick="runInteractiveJsTest('${item.id}')" style="background:#10b981; color:#000; border:none; padding:10px 22px; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.95rem; box-shadow:0 3px 8px rgba(0,0,0,0.3); display:inline-flex; align-items:center; gap:8px;">
        <span>▶</span>
        <span>Exécuter cette fonction en direct</span>
      </button>
      <div id="jsRunOutput" style="margin-top:14px; font-family:Consolas, Monaco, monospace; font-size:0.88rem; padding:12px 14px; background:#090d16; color:#a3e635; border-radius:6px; display:none; border:1px solid rgba(16, 185, 129, 0.3); line-height:1.6;"></div>
    </div>
  `;

  modal.classList.add('active');
}

function openJsModalById(id) {
  const item = DATA.js.find(j => j.id === id);
  if (item) {
    openJsModal(item);
  }
}

function switchJsTab(mode) {
  const docView = document.getElementById('jsOfficialDocView');
  const cardsView = document.getElementById('jsCardsGridView');
  const tabDoc = document.getElementById('tabBtnAnnexeDoc');
  const tabCards = document.getElementById('tabBtnCardsGrid');

  if (mode === 'doc') {
    if (docView) docView.style.display = 'block';
    if (cardsView) cardsView.style.display = 'none';
    if (tabDoc) tabDoc.classList.add('active');
    if (tabCards) tabCards.classList.remove('active');
  } else {
    if (docView) docView.style.display = 'none';
    if (cardsView) cardsView.style.display = 'block';
    if (tabDoc) tabDoc.classList.remove('active');
    if (tabCards) tabCards.classList.add('active');
    renderJsCategories();
    renderJsCards();
  }
}

function runInteractiveJsTest(id) {
  const item = DATA.js.find(j => j.id === id);
  const output = document.getElementById('jsRunOutput');
  if (!output) return;
  output.style.display = 'block';

  const codeToRun = item.runnableCode || item.testCode || item.code;
  if (codeToRun) {
    let logs = [];
    const origLog = console.log;
    console.log = function(...args) {
      logs.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      origLog.apply(console, args);
    };
    try {
      eval(codeToRun);
      console.log = origLog;
      if (logs.length > 0) {
        output.innerHTML = `<strong style="color:#10b981;">Sortie console :</strong><br>` + logs.map(l => escapeHtml(l)).join('<br>');
      } else {
        output.innerHTML = `<strong style="color:#10b981;">✓ Fonction exécutée avec succès.</strong>`;
      }
    } catch (e) {
      console.log = origLog;
      output.innerHTML = `<strong style="color:#ef4444;">⚠️ Info d'exécution :</strong> ${escapeHtml(e.message)}`;
    }
  } else {
    output.textContent = "> Fonction JavaScript exécutée avec succès.";
  }
}

function closeModal() {
  document.getElementById('detailsModal').classList.remove('active');
  if (activeVideoTimer) clearInterval(activeVideoTimer);
}

// -------------------------------------------------------------
// 7. MOTEUR DU SIMULATEUR VIDÉO POUR CSS3 (CONVENTION BAC STI)
// -------------------------------------------------------------
function buildVideoStageElement(item) {
  const cat = item.category || '';
  const prop = item.property || '';

  if (cat === 'Propriétés de mise en forme du texte' || prop.includes('font') || prop.includes('text') || prop === 'color') {
    return `<div id="h1" class="demo-box" style="font-size:22px; font-weight:bold; transition: all 0.8s ease; text-align:center; min-width:200px;">
      <span id="h1Text">Titre &lt;h1 id="h1"&gt;</span>
    </div>`;
  } else if (cat === 'Propriétés des tableaux' || prop.includes('table') || prop.includes('collapse')) {
    return `<table id="tab" style="width:85%; border-collapse:separate; border:2px solid #38bdf8; background:rgba(255,255,255,0.06); color:#fff; transition:all 0.8s ease; font-size:13px;">
      <tr>
        <td style="padding:10px; border:1px solid #38bdf8; text-align:center;">&lt;table id="tab"&gt;</td>
        <td style="padding:10px; border:1px solid #38bdf8; text-align:center;">Ligne 1 - Col 2</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid #38bdf8; text-align:center;">Ligne 2 - Col 1</td>
        <td style="padding:10px; border:1px solid #38bdf8; text-align:center;">Ligne 2 - Col 2</td>
      </tr>
    </table>`;
  } else if (cat === 'Propriétés des images' || prop.includes('filter')) {
    return `<div id="img1" style="width:140px; height:85px; background:linear-gradient(135deg, #f97316, #ef4444); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold; transition:all 0.8s ease; box-shadow:0 4px 10px rgba(0,0,0,0.3); font-size:13px;">
      &lt;img id="img1"&gt;
    </div>`;
  } else if (prop.includes('a:') || prop.includes('link') || prop.includes('visited') || prop.includes('active')) {
    return `<a id="lien" href="javascript:void(0)" class="demo-box" style="text-decoration:none; transition:all 0.6s ease; font-size:16px;">
      🔗 Lien &lt;a id="lien"&gt;
    </a>`;
  } else if (cat === 'Propriétés des listes') {
    return `<ul id="liste" style="background:rgba(255,255,255,0.08); padding:12px 30px; border-radius:8px; color:#fff; list-style-type:circle; transition:all 0.8s ease; font-size:13px;">
      <li>Élément liste 1 (#liste)</li>
      <li>Élément liste 2 (#liste)</li>
    </ul>`;
  } else {
    return `<div id="boite" class="demo-box" style="transition: all 0.8s ease; min-width:170px; padding:18px; display:flex; align-items:center; justify-content:center; font-size:15px;">
      <span>Boîte &lt;div id="boite"&gt;</span>
    </div>`;
  }
}

function startVideoSimulation(itemId) {
  if (activeVideoTimer) clearInterval(activeVideoTimer);
  isVideoPlaying = true;
  
  const stage = document.getElementById('videoStage');
  const box = stage ? stage.firstElementChild : null;
  const progress = document.getElementById('videoProgress');
  const btn = document.getElementById('playPauseVideoBtn');
  if (btn) btn.textContent = '⏸';

  let step = 0;
  let progressVal = 0;

  activeVideoTimer = setInterval(() => {
    if (!isVideoPlaying) return;

    progressVal = (progressVal + 2) % 100;
    if (progress) progress.style.width = `${progressVal}%`;

    // Changement d'état à 50% de la boucle vidéo
    if (progressVal === 0 || progressVal === 50) {
      step = step === 0 ? 1 : 0;
      applyVideoFrame(itemId, box, step);
    }
  }, 100);
}

function applyVideoFrame(itemId, box, step) {
  if (!box) return;

  // Animation selon la propriété précise du Bac STI
  if (itemId.includes('transform')) {
    box.style.transform = step === 1 ? 'rotate(10deg) scale(1.15)' : 'rotate(0deg) scale(1)';
    box.style.background = step === 1 ? 'linear-gradient(135deg, #ec4899, #8b5cf6)' : '';
  } else if (itemId.includes('color') && !itemId.includes('background') && !itemId.includes('border')) {
    box.style.color = step === 1 ? '#ef4444' : '#38bdf8';
  } else if (itemId.includes('background')) {
    box.style.backgroundColor = step === 1 ? '#f59e0b' : '#1e3a8a';
    box.style.color = step === 1 ? '#000' : '#fff';
  } else if (itemId.includes('font-size')) {
    box.style.fontSize = step === 1 ? '28px' : '18px';
  } else if (itemId.includes('font-weight')) {
    box.style.fontWeight = step === 1 ? '900' : '400';
  } else if (itemId.includes('font-style')) {
    box.style.fontStyle = step === 1 ? 'italic' : 'normal';
  } else if (itemId.includes('text-align')) {
    box.style.textAlign = step === 1 ? 'right' : 'center';
  } else if (itemId.includes('text-transform')) {
    const txt = document.getElementById('h1Text') || box;
    txt.style.textTransform = step === 1 ? 'uppercase' : 'lowercase';
  } else if (itemId.includes('text-shadow')) {
    box.style.textShadow = step === 1 ? '2px 2px 6px #facc15, 0 0 15px #eab308' : 'none';
  } else if (itemId.includes('box-shadow')) {
    box.style.boxShadow = step === 1 ? '0 15px 35px rgba(56, 189, 248, 0.7)' : '0 2px 5px rgba(0,0,0,0.2)';
    box.style.transform = step === 1 ? 'translateY(-6px)' : 'translateY(0)';
  } else if (itemId.includes('border-radius')) {
    box.style.borderRadius = step === 1 ? '30px' : '6px';
  } else if (itemId.includes('border-style') || itemId.includes('border-width') || itemId.includes('border-color') || itemId.includes('border-shorthand')) {
    box.style.border = step === 1 ? '4px dashed #f43f5e' : '2px solid #38bdf8';
  } else if (itemId.includes('filter')) {
    box.style.filter = step === 1 ? 'grayscale(100%) blur(1px)' : 'grayscale(0%) blur(0px)';
  } else if (itemId.includes('opacity')) {
    box.style.opacity = step === 1 ? '0.4' : '1.0';
  } else if (itemId.includes('width')) {
    box.style.width = step === 1 ? '240px' : '150px';
  } else if (itemId.includes('height')) {
    box.style.height = step === 1 ? '110px' : '70px';
  } else if (itemId.includes('table') || itemId.includes('collapse')) {
    box.style.borderCollapse = step === 1 ? 'collapse' : 'separate';
    box.style.backgroundColor = step === 1 ? 'rgba(56, 189, 248, 0.15)' : 'transparent';
  } else if (itemId.includes('list-style')) {
    box.style.listStyleType = step === 1 ? 'square' : 'circle';
  } else if (itemId.includes('transition') || itemId.includes('animation') || itemId.includes('keyframes')) {
    box.style.transform = step === 1 ? 'scale(1.18) rotate(6deg)' : 'scale(1) rotate(0deg)';
    box.style.backgroundColor = step === 1 ? '#10b981' : '#2563eb';
  } else {
    box.style.transform = step === 1 ? 'scale(1.08)' : 'scale(1)';
    box.style.opacity = step === 1 ? '0.8' : '1.0';
  }
}

function toggleVideoPlay(itemId) {
  isVideoPlaying = !isVideoPlaying;
  const btn = document.getElementById('playPauseVideoBtn');
  if (btn) btn.textContent = isVideoPlaying ? '⏸' : '▶';
}

function replayVideo(itemId) {
  startVideoSimulation(itemId);
}

function enableHoverStageTest() {
  const stage = document.getElementById('videoStage');
  const box = stage ? stage.firstElementChild : null;
  if (!box) return;
  alert("Mode Survol Activé ! Survolez maintenant l'élément (#" + box.id + ") avec votre curseur pour voir l'effet :hover.");
  box.onmouseenter = () => {
    box.style.transform = 'scale(1.15) translateY(-4px)';
    box.style.boxShadow = '0 12px 28px rgba(250, 204, 21, 0.8)';
    box.style.borderColor = '#facc15';
  };
  box.onmouseleave = () => {
    box.style.transform = 'scale(1) translateY(0)';
    box.style.boxShadow = 'none';
    box.style.borderColor = '';
  };
}

// -------------------------------------------------------------
// 8. FONCTIONS UTILITAIRES & JS TESTS
// -------------------------------------------------------------
function copyCode(btn, codeText) {
  navigator.clipboard.writeText(codeText).then(() => {
    const originalText = btn.textContent;
    btn.textContent = '✓ Copié !';
    btn.style.background = '#10b981';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });
}

function runJsTest(id) {
  const output = document.getElementById('jsRunOutput');
  output.style.display = 'block';

  switch (id) {
    case 'js-dialog-boxes':
    case 'js-alert-prompt-confirm':
      alert("Exemple d'alerte : Bienvenue sur le portail STI !");
      let rep = confirm("Aimez-vous ce site de révision ?");
      output.textContent = `Résultat confirm() renvoyé : ${rep ? 'true (OK cliqué)' : 'false (Annuler cliqué)'}`;
      break;
    case 'js-dom-selectors':
    case 'js-dom-selection':
      output.innerHTML = `> Sélection DOM réussie !<br>> document.getElementById('detailsModal') trouvé dans la page.`;
      break;
    case 'js-event-listeners':
      output.innerHTML = `> Écouteur configuré avec addEventListener('click') !`;
      alert("Événement déclenché avec succès !");
      break;
    case 'js-conversions-nan':
    case 'js-parsing-conversion':
      let nb = parseInt("42");
      let testNan = isNaN("abc");
      output.innerHTML = `> parseInt("42") = ${nb} (type: ${typeof nb})<br>> isNaN("abc") = ${testNan} (ce n'est pas un nombre)`;
      break;
    case 'js-math-module':
    case 'js-math-functions':
      let rand = Math.floor(Math.random() * 20) + 1;
      output.innerHTML = `> Math.random() généré !<br>> Tirage d'une note aléatoire entre 1 et 20 : <strong>${rand}/20</strong>`;
      break;
    case 'js-string-methods':
    case 'js-strings-functions':
      let str = "Baccalauréat STI";
      output.innerHTML = `> Chaîne : "${str}"<br>> Longueur (length) : ${str.length}<br>> En Majuscules : ${str.toUpperCase()}<br>> Première lettre (charAt 0) : ${str.charAt(0)}`;
      break;
    default:
      output.textContent = "> Fonction exécutée avec succès dans la console.";
      break;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

function escapeJsString(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}


// Fonctions de bascule d'onglets pour HTML5 et CSS3
function switchHtmlTab(mode) {
  const docView = document.getElementById('htmlOfficialDocView');
  const cardsView = document.getElementById('htmlCardsGridView');
  const tabDoc = document.getElementById('tabBtnHtmlDoc');
  const tabCards = document.getElementById('tabBtnHtmlCards');

  if (mode === 'doc') {
    if (docView) docView.style.display = 'block';
    if (cardsView) cardsView.style.display = 'none';
    if (tabDoc) tabDoc.classList.add('active');
    if (tabCards) tabCards.classList.remove('active');
  } else {
    if (docView) docView.style.display = 'none';
    if (cardsView) cardsView.style.display = 'block';
    if (tabDoc) tabDoc.classList.remove('active');
    if (tabCards) tabCards.classList.add('active');
    renderHtmlCategories();
    renderHtmlCards();
  }
}

function switchCssTab(mode) {
  const docView = document.getElementById('cssOfficialDocView');
  const cardsView = document.getElementById('cssCardsGridView');
  const tabDoc = document.getElementById('tabBtnCssDoc');
  const tabCards = document.getElementById('tabBtnCssCards');

  if (mode === 'doc') {
    if (docView) docView.style.display = 'block';
    if (cardsView) cardsView.style.display = 'none';
    if (tabDoc) tabDoc.classList.add('active');
    if (tabCards) tabCards.classList.remove('active');
  } else {
    if (docView) docView.style.display = 'none';
    if (cardsView) cardsView.style.display = 'block';
    if (tabDoc) tabDoc.classList.remove('active');
    if (tabCards) tabCards.classList.add('active');
    renderCssCategories();
    renderCssCards();
  }
}

function openHtmlModalById(id) {
  const item = DATA.html.find(h => h.id === id);
  if (item) openHtmlModal(item);
}

function openCssModalById(id) {
  const item = DATA.css.find(c => c.id === id);
  if (item) openCssModal(item);
}

// Gestion des variantes interactives (Boutons Radio)
function applyCssVariety(itemId, optionIdx, labelElement) {
  const config = VARIETIES_CONFIG[itemId];
  if (!config || !config.options[optionIdx]) return;
  const opt = config.options[optionIdx];

  // Mettre à jour l'état visuel du bouton radio
  const container = labelElement.closest('.variety-radios-wrap');
  if (container) {
    container.querySelectorAll('.variety-radio-label').forEach(lbl => lbl.classList.remove('active'));
    labelElement.classList.add('active');
    const input = labelElement.querySelector('input[type="radio"]');
    if (input) input.checked = true;
  }

  // Mettre en pause la vidéo automatique pour admirer la variante choisie
  if (activeVideoTimer) clearInterval(activeVideoTimer);
  isVideoPlaying = false;
  const playBtn = document.getElementById('playPauseVideoBtn');
  if (playBtn) playBtn.textContent = '▶';

  // Appliquer sur l'élément de scène avec animation fluide
  const stage = document.getElementById('videoStage');
  if (stage) {
    const demoBox = stage.querySelector('.demo-box') || stage.querySelector('#h1') || stage.querySelector('#boite') || stage.querySelector('#tab') || stage.firstElementChild;
    if (demoBox) {
      demoBox.classList.remove('pulse-anim');
      void demoBox.offsetWidth;
      demoBox.classList.add('pulse-anim');
      demoBox.style.cssText += opt.css;
    }
  }

  // Mettre à jour le code affiché
  const codePre = document.querySelector('.code-pre code');
  if (codePre) {
    codePre.textContent = '/* Règle CSS avec la variante choisie (#id) : */\n#boite {\n  ' + opt.css.replace(/!important/g, '').replace(/;\s*/g, ';\n  ').trim() + '\n}\n\n/* Note au survol avec :hover */\n#boite:hover {\n  transform: scale(1.05);\n}';
  }

  // Toast de confirmation
  const toast = document.getElementById('varietyToastCss');
  if (toast) {
    toast.style.display = 'inline-flex';
    toast.innerHTML = '✨ Variante active : <strong>' + escapeHtml(opt.value) + '</strong>';
  }
}

function applyHtmlVariety(itemId, optionIdx, labelElement) {
  const config = VARIETIES_CONFIG[itemId];
  if (!config || !config.options[optionIdx]) return;
  const opt = config.options[optionIdx];

  // Mettre à jour l'état visuel du bouton radio
  const container = labelElement.closest('.variety-radios-wrap');
  if (container) {
    container.querySelectorAll('.variety-radio-label').forEach(lbl => lbl.classList.remove('active'));
    labelElement.classList.add('active');
    const input = labelElement.querySelector('input[type="radio"]');
    if (input) input.checked = true;
  }

  // Mettre à jour la fenêtre de prévisualisation du navigateur avec animation
  const viewport = document.getElementById('browserViewport');
  if (viewport) {
    viewport.classList.remove('pulse-anim');
    void viewport.offsetWidth;
    viewport.classList.add('pulse-anim');
    viewport.innerHTML = opt.previewHtml;
  }

  // Mettre à jour le code affiché
  const codePre = document.querySelector('.code-pre code');
  if (codePre && opt.code) {
    codePre.textContent = opt.code;
  }

  // Toast de confirmation
  const toast = document.getElementById('varietyToastHtml');
  if (toast) {
    toast.style.display = 'inline-flex';
    toast.innerHTML = '✨ Variante affichée : <strong>' + escapeHtml(opt.value) + '</strong>';
  }
}
