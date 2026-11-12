
// =============================================================
// CONFIGURATION DES VARIANTES INTERACTIVES (BOUTONS RADIO)
// =============================================================
const VARIETIES_CONFIG = {
  "css-margin": {
    "title": "Tester la marge extérieure margin (Écartement des voisins) :",
    "options": [
      {
        "label": "0px (Collé aux voisins)",
        "value": "0px",
        "css": "margin: 0px auto !important;",
        "code": "/* Marge nulle : éléments collés */\n#boite {\n  margin: 0px auto;\n}"
      },
      {
        "label": "15px (Marge normale)",
        "value": "15px",
        "css": "margin: 15px auto !important;",
        "code": "/* Marge normale de 15px */\n#boite {\n  margin: 15px auto;\n}"
      },
      {
        "label": "30px (Grande séparation)",
        "value": "30px",
        "css": "margin: 30px auto !important;",
        "code": "/* Grande marge qui repousse les voisins */\n#boite {\n  margin: 30px auto;\n}"
      },
      {
        "label": "10px 40px (Haut/Bas 10px, Gauche/Droite 40px)",
        "value": "10px 40px",
        "css": "margin: 10px 40px !important;",
        "code": "/* Marges asymétriques */\n#boite {\n  margin: 10px 40px;\n}"
      },
      {
        "label": "auto (Centrage horizontal parfait)",
        "value": "auto",
        "css": "margin: 10px auto !important;",
        "code": "/* Centrage horizontal au Bac STI */\n#boite {\n  margin: 10px auto;\n}"
      }
    ]
  },
  "css-padding": {
    "title": "Tester la marge intérieure padding (Aération du texte) :",
    "options": [
      {
        "label": "0px (Texte collé à la bordure)",
        "value": "0px",
        "css": "padding: 0px !important;",
        "code": "/* Texte collé contre la bordure */\n#boite {\n  padding: 0px;\n}"
      },
      {
        "label": "12px (Padding standard)",
        "value": "12px",
        "css": "padding: 12px !important;",
        "code": "/* Aération intérieure normale */\n#boite {\n  padding: 12px;\n}"
      },
      {
        "label": "25px (Intérieur très aéré)",
        "value": "25px",
        "css": "padding: 25px !important;",
        "code": "/* Grande marge interne confortable */\n#boite {\n  padding: 25px;\n}"
      },
      {
        "label": "5px 30px (Asymétrique Haut/Bas vs Gauche/Droite)",
        "value": "5px 30px",
        "css": "padding: 5px 30px !important;",
        "code": "/* Padding asymétrique */\n#boite {\n  padding: 5px 30px;\n}"
      }
    ]
  },
  "css-float": {
    "title": "Tester l'enroulement du texte float :",
    "options": [
      {
        "label": "none (Flux normal, pas d'enroulement)",
        "value": "none",
        "css": "float: none !important; margin: 0 auto 10px auto !important;",
        "code": "/* Aucun flottement */\n#boite {\n  float: none;\n}"
      },
      {
        "label": "left (Flotte à gauche, texte à droite)",
        "value": "left",
        "css": "float: left !important; margin: 4px 14px 6px 0 !important;",
        "code": "/* Flotte à gauche */\n#boite {\n  float: left;\n}"
      },
      {
        "label": "right (Flotte à droite, texte à gauche)",
        "value": "right",
        "css": "float: right !important; margin: 4px 0 6px 14px !important;",
        "code": "/* Flotte à droite */\n#boite {\n  float: right;\n}"
      }
    ]
  },
  "css-position": {
    "title": "Tester le type de positionnement position :",
    "options": [
      {
        "label": "static (Position standard par défaut)",
        "value": "static",
        "css": "position: static !important; top: auto; left: auto;",
        "code": "/* Position naturelle dans le flux */\n#boite {\n  position: static;\n}"
      },
      {
        "label": "relative (Décalé par rapport à l'origine)",
        "value": "relative",
        "css": "position: relative !important; top: 25px !important; left: 45px !important;",
        "code": "/* Décalage relatif à l'origine */\n#boite {\n  position: relative;\n  top: 25px;\n  left: 45px;\n}"
      },
      {
        "label": "absolute (Positionné dans le conteneur)",
        "value": "absolute",
        "css": "position: absolute !important; top: 15px !important; right: 20px !important; left: auto !important;",
        "code": "/* Position absolue */\n#boite {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n}"
      },
      {
        "label": "fixed (Fixé dans la fenêtre)",
        "value": "fixed",
        "css": "position: absolute !important; bottom: 15px !important; right: 15px !important; top: auto !important; left: auto !important;",
        "code": "/* Position fixe */\n#boite {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n}"
      }
    ]
  },
  "css-coords-top-bottom-left-right": {
    "title": "Tester les coordonnées de décalage :",
    "options": [
      {
        "label": "top: 0px; left: 0px (Origine)",
        "value": "0,0",
        "css": "top: 25px !important; left: 25px !important; right: auto !important; bottom: auto !important;",
        "code": "#boite {\n  top: 0px;\n  left: 0px;\n}"
      },
      {
        "label": "top: 35px; left: 85px (Bas / Droite)",
        "value": "35,85",
        "css": "top: 60px !important; left: 110px !important; right: auto !important; bottom: auto !important;",
        "code": "#boite {\n  top: 35px;\n  left: 85px;\n}"
      },
      {
        "label": "top: 10px; right: 20px (Haut / Droite)",
        "value": "10,20",
        "css": "top: 15px !important; right: 20px !important; left: auto !important; bottom: auto !important;",
        "code": "#boite {\n  top: 10px;\n  right: 20px;\n}"
      },
      {
        "label": "bottom: 15px; left: 40px (Bas / Gauche)",
        "value": "15,40",
        "css": "bottom: 15px !important; left: 65px !important; top: auto !important; right: auto !important;",
        "code": "#boite {\n  bottom: 15px;\n  left: 40px;\n}"
      }
    ]
  },
  "css-display": {
    "title": "Tester le mode d'affichage display :",
    "options": [
      {
        "label": "block (Occupe toute la ligne)",
        "value": "block",
        "css": "display: block !important; width: 100% !important;",
        "code": "#boite {\n  display: block;\n  width: 100%;\n}"
      },
      {
        "label": "inline (Reste sur la même ligne)",
        "value": "inline",
        "css": "display: inline !important; width: auto !important;",
        "code": "#boite {\n  display: inline;\n}"
      },
      {
        "label": "inline-block (Même ligne avec dimensions)",
        "value": "inline-block",
        "css": "display: inline-block !important; width: 130px !important;",
        "code": "#boite {\n  display: inline-block;\n  width: 130px;\n}"
      },
      {
        "label": "none (Élément retiré du flux)",
        "value": "none",
        "css": "display: none !important;",
        "code": "#boite {\n  display: none;\n}"
      }
    ]
  },
  "css-overflow": {
    "title": "Tester la gestion du débordement overflow :",
    "options": [
      {
        "label": "visible (Le texte dépasse librement)",
        "value": "visible",
        "css": "overflow: visible !important;",
        "code": "#boite {\n  overflow: visible;\n}"
      },
      {
        "label": "hidden (Le texte qui dépasse est coupé)",
        "value": "hidden",
        "css": "overflow: hidden !important;",
        "code": "#boite {\n  overflow: hidden;\n}"
      },
      {
        "label": "scroll (Barres de défilement visibles)",
        "value": "scroll",
        "css": "overflow: scroll !important;",
        "code": "#boite {\n  overflow: scroll;\n}"
      },
      {
        "label": "auto (Barres seulement si nécessaire)",
        "value": "auto",
        "css": "overflow: auto !important;",
        "code": "#boite {\n  overflow: auto;\n}"
      }
    ]
  },
  "css-width": {
    "title": "Tester la largeur width :",
    "options": [
      {
        "label": "120px (Étroit)",
        "value": "120px",
        "css": "width: 120px !important;",
        "code": "#boite {\n  width: 120px;\n}"
      },
      {
        "label": "200px (Moyen)",
        "value": "200px",
        "css": "width: 200px !important;",
        "code": "#boite {\n  width: 200px;\n}"
      },
      {
        "label": "320px (Large)",
        "value": "320px",
        "css": "width: 320px !important;",
        "code": "#boite {\n  width: 320px;\n}"
      },
      {
        "label": "100% (Pleine largeur)",
        "value": "100%",
        "css": "width: 100% !important;",
        "code": "#boite {\n  width: 100%;\n}"
      }
    ]
  },
  "css-height": {
    "title": "Tester la hauteur height :",
    "options": [
      {
        "label": "50px (Petite hauteur)",
        "value": "50px",
        "css": "height: 50px !important; min-height: 50px !important;",
        "code": "#boite {\n  height: 50px;\n}"
      },
      {
        "label": "90px (Hauteur standard)",
        "value": "90px",
        "css": "height: 90px !important; min-height: 90px !important;",
        "code": "#boite {\n  height: 90px;\n}"
      },
      {
        "label": "140px (Grande hauteur)",
        "value": "140px",
        "css": "height: 140px !important; min-height: 140px !important;",
        "code": "#boite {\n  height: 140px;\n}"
      }
    ]
  },
  "css-box-shadow": {
    "title": "Tester l'ombre portée box-shadow :",
    "options": [
      {
        "label": "none (Aucune ombre)",
        "value": "none",
        "css": "box-shadow: none !important; transform: none !important;",
        "code": "#boite {\n  box-shadow: none;\n}"
      },
      {
        "label": "0 4px 12px rgba(0,0,0,0.4) (Ombre douce)",
        "value": "soft",
        "css": "box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important; transform: translateY(-2px);",
        "code": "#boite {\n  box-shadow: 0 4px 12px rgba(0,0,0,0.4);\n}"
      },
      {
        "label": "0 0 20px #38bdf8 (Halo néon bleu)",
        "value": "neon",
        "css": "box-shadow: 0 0 20px #38bdf8, 0 0 35px #0284c7 !important; transform: translateY(-4px);",
        "code": "#boite {\n  box-shadow: 0 0 20px #38bdf8;\n}"
      },
      {
        "label": "6px 6px 0 #ef4444 (Effet 3D décalé)",
        "value": "3d",
        "css": "box-shadow: 6px 6px 0 #ef4444 !important; transform: translateY(-2px);",
        "code": "#boite {\n  box-shadow: 6px 6px 0 #ef4444;\n}"
      },
      {
        "label": "inset 0 0 14px #38bdf8 (Ombre intérieure)",
        "value": "inset",
        "css": "box-shadow: inset 0 0 14px #38bdf8 !important;",
        "code": "#boite {\n  box-shadow: inset 0 0 14px #38bdf8;\n}"
      }
    ]
  },
  "css-opacity": {
    "title": "Tester le niveau d'opacité opacity :",
    "options": [
      {
        "label": "1.0 (100% Opaque)",
        "value": "1.0",
        "css": "opacity: 1 !important;",
        "code": "#boite {\n  opacity: 1.0;\n}"
      },
      {
        "label": "0.75 (75% Légère transparence)",
        "value": "0.75",
        "css": "opacity: 0.75 !important;",
        "code": "#boite {\n  opacity: 0.75;\n}"
      },
      {
        "label": "0.40 (40% Forte transparence)",
        "value": "0.40",
        "css": "opacity: 0.4 !important;",
        "code": "#boite {\n  opacity: 0.4;\n}"
      },
      {
        "label": "0.10 (10% Presque invisible)",
        "value": "0.10",
        "css": "opacity: 0.1 !important;",
        "code": "#boite {\n  opacity: 0.1;\n}"
      }
    ]
  },
  "css-border-style": {
    "title": "Choisir un style de bordure border-style :",
    "options": [
      {
        "label": "solid (Trait plein continu)",
        "value": "solid",
        "css": "border-style: solid !important; border-width: 4px; border-color: #38bdf8;",
        "code": "#boite {\n  border-style: solid;\n}"
      },
      {
        "label": "dotted (Pointillés réguliers)",
        "value": "dotted",
        "css": "border-style: dotted !important; border-width: 4px; border-color: #38bdf8;",
        "code": "#boite {\n  border-style: dotted;\n}"
      },
      {
        "label": "dashed (Tirets espacés)",
        "value": "dashed",
        "css": "border-style: dashed !important; border-width: 4px; border-color: #38bdf8;",
        "code": "#boite {\n  border-style: dashed;\n}"
      },
      {
        "label": "double (Double trait)",
        "value": "double",
        "css": "border-style: double !important; border-width: 6px; border-color: #38bdf8;",
        "code": "#boite {\n  border-style: double;\n}"
      },
      {
        "label": "groove (Rainure effet 3D)",
        "value": "groove",
        "css": "border-style: groove !important; border-width: 6px; border-color: #38bdf8;",
        "code": "#boite {\n  border-style: groove;\n}"
      },
      {
        "label": "none (Aucune bordure)",
        "value": "none",
        "css": "border-style: none !important;",
        "code": "#boite {\n  border-style: none;\n}"
      }
    ]
  },
  "css-border-shorthand": {
    "title": "Tester la super-propriété border :",
    "options": [
      {
        "label": "3px solid #38bdf8 (Bleu cyan plein)",
        "value": "3px solid #38bdf8",
        "css": "border: 3px solid #38bdf8 !important;",
        "code": "#boite {\n  border: 3px solid #38bdf8;\n}"
      },
      {
        "label": "4px dotted #facc15 (Jaune pointillés)",
        "value": "4px dotted #facc15",
        "css": "border: 4px dotted #facc15 !important;",
        "code": "#boite {\n  border: 4px dotted #facc15;\n}"
      },
      {
        "label": "3px dashed #ef4444 (Rouge tirets)",
        "value": "3px dashed #ef4444",
        "css": "border: 3px dashed #ef4444 !important;",
        "code": "#boite {\n  border: 3px dashed #ef4444;\n}"
      },
      {
        "label": "6px double #10b981 (Vert double trait)",
        "value": "6px double #10b981",
        "css": "border: 6px double #10b981 !important;",
        "code": "#boite {\n  border: 6px double #10b981;\n}"
      }
    ]
  },
  "css-border-radius": {
    "title": "Choisir un rayon de courbure border-radius :",
    "options": [
      {
        "label": "0px (Bords carrés stricts)",
        "value": "0px",
        "css": "border-radius: 0px !important;",
        "code": "#boite {\n  border-radius: 0px;\n}"
      },
      {
        "label": "8px (Arrondi moderne)",
        "value": "8px",
        "css": "border-radius: 8px !important;",
        "code": "#boite {\n  border-radius: 8px;\n}"
      },
      {
        "label": "20px (Fortement arrondi)",
        "value": "20px",
        "css": "border-radius: 20px !important;",
        "code": "#boite {\n  border-radius: 20px;\n}"
      },
      {
        "label": "50% (Cercle / Pilule)",
        "value": "50%",
        "css": "border-radius: 50% !important; width: 130px !important; height: 130px !important;",
        "code": "#boite {\n  border-radius: 50%;\n}"
      }
    ]
  },
  "css-border-width": {
    "title": "Choisir une épaisseur border-width :",
    "options": [
      {
        "label": "thin (Fine ~1px)",
        "value": "thin",
        "css": "border-width: thin !important; border-style: solid; border-color: #38bdf8;",
        "code": "#boite {\n  border-width: thin;\n}"
      },
      {
        "label": "medium (Moyenne ~3px)",
        "value": "medium",
        "css": "border-width: medium !important; border-style: solid; border-color: #38bdf8;",
        "code": "#boite {\n  border-width: medium;\n}"
      },
      {
        "label": "thick (Épaisse ~5px)",
        "value": "thick",
        "css": "border-width: thick !important; border-style: solid; border-color: #38bdf8;",
        "code": "#boite {\n  border-width: thick;\n}"
      },
      {
        "label": "10px (Très épaisse)",
        "value": "10px",
        "css": "border-width: 10px !important; border-style: solid; border-color: #38bdf8;",
        "code": "#boite {\n  border-width: 10px;\n}"
      }
    ]
  },
  "css-border-color": {
    "title": "Choisir une couleur border-color :",
    "options": [
      {
        "label": "#38bdf8 (Cyan vif)",
        "value": "#38bdf8",
        "css": "border-color: #38bdf8 !important; border-style: solid; border-width: 4px;",
        "code": "#boite {\n  border-color: #38bdf8;\n}"
      },
      {
        "label": "#ef4444 (Rouge alerte)",
        "value": "#ef4444",
        "css": "border-color: #ef4444 !important; border-style: solid; border-width: 4px;",
        "code": "#boite {\n  border-color: #ef4444;\n}"
      },
      {
        "label": "#10b981 (Vert succès)",
        "value": "#10b981",
        "css": "border-color: #10b981 !important; border-style: solid; border-width: 4px;",
        "code": "#boite {\n  border-color: #10b981;\n}"
      },
      {
        "label": "#facc15 (Jaune or)",
        "value": "#facc15",
        "css": "border-color: #facc15 !important; border-style: solid; border-width: 4px;",
        "code": "#boite {\n  border-color: #facc15;\n}"
      }
    ]
  },
  "css-font-family": {
    "title": "Tester la police de caractères font-family :",
    "options": [
      {
        "label": "Arial, sans-serif (Linéaire moderne)",
        "value": "Arial",
        "css": "font-family: Arial, sans-serif !important;",
        "code": "#h1 {\n  font-family: Arial, sans-serif;\n}"
      },
      {
        "label": "'Times New Roman', serif (Empattements)",
        "value": "Times",
        "css": "font-family: 'Times New Roman', serif !important;",
        "code": "#h1 {\n  font-family: 'Times New Roman', serif;\n}"
      },
      {
        "label": "'Courier New', monospace (Code)",
        "value": "Courier",
        "css": "font-family: 'Courier New', monospace !important;",
        "code": "#h1 {\n  font-family: 'Courier New', monospace;\n}"
      },
      {
        "label": "'Comic Sans MS', cursive (Manuscrite)",
        "value": "Comic",
        "css": "font-family: 'Comic Sans MS', cursive !important;",
        "code": "#h1 {\n  font-family: 'Comic Sans MS', cursive;\n}"
      }
    ]
  },
  "css-font-size": {
    "title": "Tester la taille de police font-size :",
    "options": [
      {
        "label": "14px (Petite)",
        "value": "14px",
        "css": "font-size: 14px !important;",
        "code": "#h1 {\n  font-size: 14px;\n}"
      },
      {
        "label": "18px (Standard)",
        "value": "18px",
        "css": "font-size: 18px !important;",
        "code": "#h1 {\n  font-size: 18px;\n}"
      },
      {
        "label": "26px (Grande)",
        "value": "26px",
        "css": "font-size: 26px !important;",
        "code": "#h1 {\n  font-size: 26px;\n}"
      },
      {
        "label": "36px (Très grand titre)",
        "value": "36px",
        "css": "font-size: 36px !important;",
        "code": "#h1 {\n  font-size: 36px;\n}"
      }
    ]
  },
  "css-font-weight": {
    "title": "Tester l'épaisseur font-weight :",
    "options": [
      {
        "label": "normal (Texte normal 400)",
        "value": "normal",
        "css": "font-weight: normal !important;",
        "code": "#h1 {\n  font-weight: normal;\n}"
      },
      {
        "label": "bold (Texte en gras 700)",
        "value": "bold",
        "css": "font-weight: bold !important;",
        "code": "#h1 {\n  font-weight: bold;\n}"
      },
      {
        "label": "900 (Texte extra gras)",
        "value": "900",
        "css": "font-weight: 900 !important;",
        "code": "#h1 {\n  font-weight: 900;\n}"
      }
    ]
  },
  "css-font-style": {
    "title": "Tester le style font-style :",
    "options": [
      {
        "label": "normal (Droit standard)",
        "value": "normal",
        "css": "font-style: normal !important;",
        "code": "#h1 {\n  font-style: normal;\n}"
      },
      {
        "label": "italic (Italique penché)",
        "value": "italic",
        "css": "font-style: italic !important;",
        "code": "#h1 {\n  font-style: italic;\n}"
      }
    ]
  },
  "css-text-align": {
    "title": "Tester l'alignement text-align :",
    "options": [
      {
        "label": "left (Aligné à gauche)",
        "value": "left",
        "css": "text-align: left !important; width: 100%; display: block;",
        "code": "#h1 {\n  text-align: left;\n}"
      },
      {
        "label": "center (Centré)",
        "value": "center",
        "css": "text-align: center !important; width: 100%; display: block;",
        "code": "#h1 {\n  text-align: center;\n}"
      },
      {
        "label": "right (Aligné à droite)",
        "value": "right",
        "css": "text-align: right !important; width: 100%; display: block;",
        "code": "#h1 {\n  text-align: right;\n}"
      },
      {
        "label": "justify (Justifié)",
        "value": "justify",
        "css": "text-align: justify !important; width: 100%; display: block;",
        "code": "#h1 {\n  text-align: justify;\n}"
      }
    ]
  },
  "css-text-transform": {
    "title": "Tester la casse text-transform :",
    "options": [
      {
        "label": "uppercase (TOUT EN MAJUSCULES)",
        "value": "uppercase",
        "css": "text-transform: uppercase !important;",
        "code": "#h1 {\n  text-transform: uppercase;\n}"
      },
      {
        "label": "lowercase (tout en minuscules)",
        "value": "lowercase",
        "css": "text-transform: lowercase !important;",
        "code": "#h1 {\n  text-transform: lowercase;\n}"
      },
      {
        "label": "capitalize (Première Lettre De Chaque Mot)",
        "value": "capitalize",
        "css": "text-transform: capitalize !important;",
        "code": "#h1 {\n  text-transform: capitalize;\n}"
      },
      {
        "label": "none (Aucune transformation)",
        "value": "none",
        "css": "text-transform: none !important;",
        "code": "#h1 {\n  text-transform: none;\n}"
      }
    ]
  },
  "css-text-shadow": {
    "title": "Tester l'ombre de texte text-shadow :",
    "options": [
      {
        "label": "none (Aucune ombre)",
        "value": "none",
        "css": "text-shadow: none !important;",
        "code": "#h1 {\n  text-shadow: none;\n}"
      },
      {
        "label": "2px 2px 4px #000 (Ombre discrète)",
        "value": "soft",
        "css": "text-shadow: 2px 2px 4px rgba(0,0,0,0.8) !important;",
        "code": "#h1 {\n  text-shadow: 2px 2px 4px #000000;\n}"
      },
      {
        "label": "0 0 12px #38bdf8 (Halo néon)",
        "value": "neon",
        "css": "text-shadow: 0 0 12px #38bdf8, 0 0 20px #0284c7 !important;",
        "code": "#h1 {\n  text-shadow: 0 0 12px #38bdf8;\n}"
      },
      {
        "label": "3px 3px 0 #ef4444 (Effet 3D)",
        "value": "3d",
        "css": "text-shadow: 3px 3px 0 #ef4444 !important;",
        "code": "#h1 {\n  text-shadow: 3px 3px 0 #ef4444;\n}"
      }
    ]
  },
  "css-color": {
    "title": "Choisir la couleur du texte color :",
    "options": [
      {
        "label": "#38bdf8 (Bleu cyan)",
        "value": "#38bdf8",
        "css": "color: #38bdf8 !important;",
        "code": "#h1 {\n  color: #38bdf8;\n}"
      },
      {
        "label": "#ef4444 (Rouge vif)",
        "value": "#ef4444",
        "css": "color: #ef4444 !important;",
        "code": "#h1 {\n  color: #ef4444;\n}"
      },
      {
        "label": "#10b981 (Vert émeraude)",
        "value": "#10b981",
        "css": "color: #10b981 !important;",
        "code": "#h1 {\n  color: #10b981;\n}"
      },
      {
        "label": "#facc15 (Jaune or)",
        "value": "#facc15",
        "css": "color: #facc15 !important;",
        "code": "#h1 {\n  color: #facc15;\n}"
      }
    ]
  },
  "css-background-color": {
    "title": "Tester la couleur d'arrière-plan background-color :",
    "options": [
      {
        "label": "#1e3a8a (Bleu nuit)",
        "value": "#1e3a8a",
        "css": "background-color: #1e3a8a !important; color: #ffffff !important;",
        "code": "#boite {\n  background-color: #1e3a8a;\n}"
      },
      {
        "label": "#065f46 (Vert forêt)",
        "value": "#065f46",
        "css": "background-color: #065f46 !important; color: #ffffff !important;",
        "code": "#boite {\n  background-color: #065f46;\n}"
      },
      {
        "label": "#991b1b (Rouge brique)",
        "value": "#991b1b",
        "css": "background-color: #991b1b !important; color: #ffffff !important;",
        "code": "#boite {\n  background-color: #991b1b;\n}"
      },
      {
        "label": "Dégradé 135deg",
        "value": "gradient",
        "css": "background: linear-gradient(135deg, #8b5cf6, #ec4899) !important; color: #ffffff !important;",
        "code": "#boite {\n  background: linear-gradient(135deg, #8b5cf6, #ec4899);\n}"
      }
    ]
  },
  "css-background-repeat": {
    "title": "Tester la répétition background-repeat :",
    "options": [
      {
        "label": "repeat (Répéter en X et Y)",
        "value": "repeat",
        "css": "background-repeat: repeat !important; background-image: radial-gradient(#38bdf8 2px, transparent 2px) !important; background-size: 20px 20px !important;",
        "code": "#boite {\n  background-repeat: repeat;\n}"
      },
      {
        "label": "no-repeat (Afficher 1 seule fois)",
        "value": "no-repeat",
        "css": "background-repeat: no-repeat !important; background-image: radial-gradient(#38bdf8 15px, transparent 15px) !important; background-position: center !important;",
        "code": "#boite {\n  background-repeat: no-repeat;\n}"
      },
      {
        "label": "repeat-x (Répéter horizontalement)",
        "value": "repeat-x",
        "css": "background-repeat: repeat-x !important; background-image: radial-gradient(#38bdf8 4px, transparent 4px) !important; background-size: 25px 25px !important;",
        "code": "#boite {\n  background-repeat: repeat-x;\n}"
      },
      {
        "label": "repeat-y (Répéter verticalement)",
        "value": "repeat-y",
        "css": "background-repeat: repeat-y !important; background-image: radial-gradient(#38bdf8 4px, transparent 4px) !important; background-size: 25px 25px !important;",
        "code": "#boite {\n  background-repeat: repeat-y;\n}"
      }
    ]
  },
  "css-transform": {
    "title": "Tester la transformation 2D transform :",
    "options": [
      {
        "label": "rotate(20deg) (Rotation de 20°)",
        "value": "rotate",
        "css": "transform: rotate(20deg) !important;",
        "code": "#boite {\n  transform: rotate(20deg);\n}"
      },
      {
        "label": "scale(1.25) (Agrandissement 25%)",
        "value": "scale",
        "css": "transform: scale(1.25) !important;",
        "code": "#boite {\n  transform: scale(1.25);\n}"
      },
      {
        "label": "translate(30px, -15px) (Translation)",
        "value": "translate",
        "css": "transform: translate(30px, -15px) !important;",
        "code": "#boite {\n  transform: translate(30px, -15px);\n}"
      },
      {
        "label": "skewX(-15deg) (Inclinaison horizontale)",
        "value": "skew",
        "css": "transform: skewX(-15deg) !important;",
        "code": "#boite {\n  transform: skewX(-15deg);\n}"
      }
    ]
  },
  "css-filter": {
    "title": "Tester les filtres visuels filter :",
    "options": [
      {
        "label": "none (Image originale)",
        "value": "none",
        "css": "filter: none !important;",
        "code": "#img1 {\n  filter: none;\n}"
      },
      {
        "label": "grayscale(100%) (Noir et blanc)",
        "value": "grayscale",
        "css": "filter: grayscale(100%) !important;",
        "code": "#img1 {\n  filter: grayscale(100%);\n}"
      },
      {
        "label": "blur(3px) (Flou artistique)",
        "value": "blur",
        "css": "filter: blur(3px) !important;",
        "code": "#img1 {\n  filter: blur(3px);\n}"
      },
      {
        "label": "invert(100%) (Inversion des couleurs)",
        "value": "invert",
        "css": "filter: invert(100%) !important;",
        "code": "#img1 {\n  filter: invert(100%);\n}"
      },
      {
        "label": "sepia(100%) (Effet rétro)",
        "value": "sepia",
        "css": "filter: sepia(100%) !important;",
        "code": "#img1 {\n  filter: sepia(100%);\n}"
      }
    ]
  },
  "css-list-style-type": {
    "title": "Choisir un type de puce list-style-type :",
    "options": [
      {
        "label": "circle (Cercle vide)",
        "value": "circle",
        "css": "list-style-type: circle !important;",
        "code": "#liste {\n  list-style-type: circle;\n}"
      },
      {
        "label": "square (Carré plein)",
        "value": "square",
        "css": "list-style-type: square !important;",
        "code": "#liste {\n  list-style-type: square;\n}"
      },
      {
        "label": "disc (Disque plein par défaut)",
        "value": "disc",
        "css": "list-style-type: disc !important;",
        "code": "#liste {\n  list-style-type: disc;\n}"
      },
      {
        "label": "decimal (Numéros 1, 2, 3)",
        "value": "decimal",
        "css": "list-style-type: decimal !important;",
        "code": "#liste {\n  list-style-type: decimal;\n}"
      },
      {
        "label": "none (Aucune puce)",
        "value": "none",
        "css": "list-style-type: none !important;",
        "code": "#liste {\n  list-style-type: none;\n}"
      }
    ]
  },
  "css-border-collapse": {
    "title": "Tester la fusion des bordures du tableau :",
    "options": [
      {
        "label": "separate (Bordures séparées)",
        "value": "separate",
        "css": "border-collapse: separate !important; border-spacing: 6px !important;",
        "code": "#tab {\n  border-collapse: separate;\n  border-spacing: 6px;\n}"
      },
      {
        "label": "collapse (Bordures fusionnées en un seul trait)",
        "value": "collapse",
        "css": "border-collapse: collapse !important; border-spacing: 0px !important;",
        "code": "#tab {\n  border-collapse: collapse;\n}"
      }
    ]
  },
  "css-table-layout": {
    "title": "Tester table-layout :",
    "options": [
      {
        "label": "auto (Colonnes adaptées au contenu)",
        "value": "auto",
        "css": "table-layout: auto !important; width: 100% !important;",
        "code": "#tab {\n  table-layout: auto;\n}"
      },
      {
        "label": "fixed (Largeurs strictes régulières)",
        "value": "fixed",
        "css": "table-layout: fixed !important; width: 100% !important;",
        "code": "#tab {\n  table-layout: fixed;\n}"
      }
    ]
  },
  "css-transition-duration": {
    "title": "Tester la durée transition-duration :",
    "options": [
      {
        "label": "0.3s (Transition rapide)",
        "value": "0.3s",
        "css": "transition-duration: 0.3s !important;",
        "code": "#boite {\n  transition-duration: 0.3s;\n}"
      },
      {
        "label": "1s (Transition fluide)",
        "value": "1s",
        "css": "transition-duration: 1s !important;",
        "code": "#boite {\n  transition-duration: 1s;\n}"
      },
      {
        "label": "2.5s (Transition lente démonstrative)",
        "value": "2.5s",
        "css": "transition-duration: 2.5s !important;",
        "code": "#boite {\n  transition-duration: 2.5s;\n}"
      }
    ]
  },
  "css-animation-direction": {
    "title": "Tester animation-direction :",
    "options": [
      {
        "label": "normal (0% vers 100%)",
        "value": "normal",
        "css": "animation-direction: normal !important; animation-name: pulseStage; animation-duration: 2s; animation-iteration-count: infinite;",
        "code": "#boite {\n  animation-direction: normal;\n}"
      },
      {
        "label": "reverse (100% vers 0%)",
        "value": "reverse",
        "css": "animation-direction: reverse !important; animation-name: pulseStage; animation-duration: 2s; animation-iteration-count: infinite;",
        "code": "#boite {\n  animation-direction: reverse;\n}"
      },
      {
        "label": "alternate (Va-et-vient continu)",
        "value": "alternate",
        "css": "animation-direction: alternate !important; animation-name: pulseStage; animation-duration: 2s; animation-iteration-count: infinite;",
        "code": "#boite {\n  animation-direction: alternate;\n}"
      }
    ]
  },
  "css-animation-iteration-count": {
    "title": "Tester animation-iteration-count :",
    "options": [
      {
        "label": "1 (Joue 1 seule fois)",
        "value": "1",
        "css": "animation-iteration-count: 1 !important; animation-name: pulseStage; animation-duration: 1.5s;",
        "code": "#boite {\n  animation-iteration-count: 1;\n}"
      },
      {
        "label": "3 (Joue 3 répétitions)",
        "value": "3",
        "css": "animation-iteration-count: 3 !important; animation-name: pulseStage; animation-duration: 1.5s;",
        "code": "#boite {\n  animation-iteration-count: 3;\n}"
      },
      {
        "label": "infinite (En boucle permanente)",
        "value": "infinite",
        "css": "animation-iteration-count: infinite !important; animation-name: pulseStage; animation-duration: 1.5s;",
        "code": "#boite {\n  animation-iteration-count: infinite;\n}"
      }
    ]
  },
  "css-keyframes": {
    "title": "Tester les étapes clés de @keyframes avec pourcentages (%) :",
    "options": [
      {
        "label": "0% ➔ 50% ➔ 100% (Couleurs & Zoom progressif)",
        "value": "0%, 50%, 100%",
        "code": "/* Animation à 3 étapes clés en pourcentages % */\n@keyframes animCouleur {\n  0% {\n    background-color: #ef4444; /* Rouge au départ (0%) */\n    transform: scale(1);\n  }\n  50% {\n    background-color: #f59e0b; /* Orange & zoom à mi-parcours (50%) */\n    transform: scale(1.22) rotate(6deg);\n  }\n  100% {\n    background-color: #10b981; /* Vert à l'arrivée (100%) */\n    transform: scale(1);\n  }\n}\n\n#boite {\n  animation: animCouleur 3s infinite alternate;\n}"
      },
      {
        "label": "0% ➔ 25% ➔ 50% ➔ 75% ➔ 100% (Trajet des 4 coins)",
        "value": "0%, 25%, 50%, 75%, 100%",
        "code": "/* Parcours rectangulaire aux 4 coins en 5 étapes % */\n@keyframes animCoins {\n  0%   { transform: translate(0px, 0px); background-color: #38bdf8; }\n  25%  { transform: translate(80px, 0px); background-color: #a855f7; }\n  50%  { transform: translate(80px, 35px); background-color: #f43f5e; }\n  75%  { transform: translate(0px, 35px); background-color: #facc15; }\n  100% { transform: translate(0px, 0px); background-color: #38bdf8; }\n}\n\n#boite {\n  animation: animCoins 4s infinite linear;\n}"
      },
      {
        "label": "0% ➔ 100% (Rotation continue 360°)",
        "value": "0% -> 100% (360deg)",
        "code": "/* Rotation complète d'un tour (0% à 100%) */\n@keyframes animTourne {\n  0% {\n    transform: rotate(0deg);\n    background-color: #6366f1;\n  }\n  100% {\n    transform: rotate(360deg);\n    background-color: #ec4899;\n  }\n}\n\n#boite {\n  animation: animTourne 2s infinite linear;\n}"
      },
      {
        "label": "from ➔ to (Équivalent à 0% et 100%)",
        "value": "from -> to",
        "code": "/* Déclaration avec from (0%) et to (100%) */\n@keyframes animFromTo {\n  from {\n    opacity: 0.25;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1.15);\n  }\n}\n\n#boite {\n  animation: animFromTo 2s infinite alternate;\n}"
      }
    ]
  },
  "css-animation-name": {
    "title": "Tester animation-name (Lier un scénario @keyframes au bloc) :",
    "options": [
      {
        "label": "animCouleur (Associe le scénario de couleur)",
        "value": "animCouleur",
        "code": "/* Relie le @keyframes animCouleur à #boite */\n#boite {\n  animation-name: animCouleur;\n  animation-duration: 2.5s;\n  animation-iteration-count: infinite;\n}"
      },
      {
        "label": "animTourne (Associe le scénario de rotation)",
        "value": "animTourne",
        "code": "/* Relie le @keyframes animTourne à #boite */\n#boite {\n  animation-name: animTourne;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}"
      },
      {
        "label": "none (Aucune animation)",
        "value": "none",
        "code": "#boite {\n  animation-name: none;\n}"
      }
    ]
  },
  "css-animation-duration": {
    "title": "Tester animation-duration (Durée d'un cycle complet) :",
    "options": [
      {
        "label": "1s (Animation rapide et dynamique)",
        "value": "1s",
        "code": "/* Vitesse rapide : 1 seconde par cycle */\n#boite {\n  animation-name: animCouleur;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}"
      },
      {
        "label": "3s (Animation modérée et fluide)",
        "value": "3s",
        "code": "/* Vitesse modérée : 3 secondes par cycle */\n#boite {\n  animation-name: animCouleur;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n}"
      },
      {
        "label": "6s (Animation lente démonstrative)",
        "value": "6s",
        "code": "/* Vitesse lente : 6 secondes par cycle */\n#boite {\n  animation-name: animCouleur;\n  animation-duration: 6s;\n  animation-iteration-count: infinite;\n}"
      }
    ]
  },
  "css-animation-delay": {
    "title": "Tester animation-delay (Attente avant départ) :",
    "options": [
      {
        "label": "0s (Départ immédiat sans attente)",
        "value": "0s",
        "code": "/* Démarrage direct dès le chargement */\n#boite {\n  animation-name: animCouleur;\n  animation-duration: 2s;\n  animation-delay: 0s;\n}"
      },
      {
        "label": "2s (Attend 2 secondes avant de démarrer)",
        "value": "2s",
        "code": "/* Pause initiale de 2 secondes */\n#boite {\n  animation-name: animCouleur;\n  animation-duration: 2s;\n  animation-delay: 2s;\n}"
      },
      {
        "label": "4s (Longue attente de 4 secondes)",
        "value": "4s",
        "code": "/* Pause initiale de 4 secondes */\n#boite {\n  animation-name: animCouleur;\n  animation-duration: 2s;\n  animation-delay: 4s;\n}"
      }
    ]
  },
  "css-animation-shorthand": {
    "title": "Tester la formule condensée animation (Formule Bac STI) :",
    "options": [
      {
        "label": "animCouleur 2s infinite alternate",
        "value": "animCouleur 2s infinite alternate",
        "code": "/* Formule classique : nom durée répétition direction */\n#boite {\n  animation: animCouleur 2s infinite alternate;\n}"
      },
      {
        "label": "animTourne 1.5s linear infinite",
        "value": "animTourne 1.5s linear infinite",
        "code": "/* Rotation continue sans fin */\n#boite {\n  animation: animTourne 1.5s linear infinite;\n}"
      },
      {
        "label": "animCouleur 3s ease 1s 2 alternate",
        "value": "animCouleur 3s ease 1s 2 alternate",
        "code": "/* Nom, durée, timing, délai 1s, 2 fois, alternate */\n#boite {\n  animation: animCouleur 3s ease 1s 2 alternate;\n}"
      }
    ]
  },
  "css-transition-property": {
    "title": "Tester transition-property (Propriété ciblée par la transition) :",
    "options": [
      {
        "label": "all (Toutes les propriétés changent en douceur)",
        "value": "all",
        "code": "#boite {\n  transition-property: all;\n  transition-duration: 0.8s;\n}\n#boite:hover {\n  background-color: #10b981;\n  transform: scale(1.2);\n}"
      },
      {
        "label": "background-color (Seule la couleur transitionne)",
        "value": "background-color",
        "code": "/* La couleur est fluide, la taille change immédiatement */\n#boite {\n  transition-property: background-color;\n  transition-duration: 0.8s;\n}\n#boite:hover {\n  background-color: #10b981;\n  transform: scale(1.2);\n}"
      },
      {
        "label": "transform (Seul le zoom transitionne)",
        "value": "transform",
        "code": "/* Le zoom est fluide, la couleur change immédiatement */\n#boite {\n  transition-property: transform;\n  transition-duration: 0.8s;\n}\n#boite:hover {\n  background-color: #10b981;\n  transform: scale(1.2);\n}"
      }
    ]
  },
  "css-transition-delay": {
    "title": "Tester transition-delay (Délai avant déclenchement au survol) :",
    "options": [
      {
        "label": "0s (Réaction instantanée au survol)",
        "value": "0s",
        "code": "#boite {\n  transition: all 0.6s ease;\n  transition-delay: 0s;\n}\n#boite:hover {\n  transform: scale(1.2);\n}"
      },
      {
        "label": "1s (Attend 1 seconde de survol avant de réagir)",
        "value": "1s",
        "code": "/* Attend 1 seconde après le survol avant de démarrer */\n#boite {\n  transition: all 0.6s ease;\n  transition-delay: 1s;\n}\n#boite:hover {\n  transform: scale(1.2);\n}"
      },
      {
        "label": "2s (Long délai de 2 secondes)",
        "value": "2s",
        "code": "#boite {\n  transition: all 0.6s ease;\n  transition-delay: 2s;\n}\n#boite:hover {\n  transform: scale(1.2);\n}"
      }
    ]
  },
  "css-transition-shorthand": {
    "title": "Tester la syntaxe raccourcie transition :",
    "options": [
      {
        "label": "all 0.5s ease (Standard Bac STI)",
        "value": "all 0.5s ease",
        "code": "#boite {\n  transition: all 0.5s ease;\n}\n#boite:hover {\n  background-color: #10b981;\n  transform: translateY(-8px);\n}"
      },
      {
        "label": "transform 1s ease-in-out",
        "value": "transform 1s ease-in-out",
        "code": "#boite {\n  transition: transform 1s ease-in-out;\n}\n#boite:hover {\n  transform: rotate(20deg) scale(1.15);\n}"
      },
      {
        "label": "background-color 0.8s 0.2s",
        "value": "background-color 0.8s 0.2s",
        "code": "#boite {\n  transition: background-color 0.8s 0.2s;\n}\n#boite:hover {\n  background-color: #f43f5e;\n}"
      }
    ]
  },
  "css-background-image": {
    "title": "Tester background-image :",
    "options": [
      {
        "label": "linear-gradient(135deg, #0284c7, #38bdf8) (Dégradé cyan)",
        "value": "linear-gradient(135deg, #0284c7, #38bdf8)",
        "code": "#boite {\n  background-image: linear-gradient(135deg, #0284c7, #38bdf8);\n}"
      },
      {
        "label": "radial-gradient(circle, #f59e0b, #ef4444) (Dégradé radial chaud)",
        "value": "radial-gradient(circle, #f59e0b, #ef4444)",
        "code": "#boite {\n  background-image: radial-gradient(circle, #f59e0b, #ef4444);\n}"
      },
      {
        "label": "none (Aucune image / fond uni)",
        "value": "none",
        "code": "#boite {\n  background-image: none;\n}"
      }
    ]
  },
  "css-background-size": {
    "title": "Tester background-size :",
    "options": [
      {
        "label": "cover (Couvre tout l'espace sans déformer)",
        "value": "cover",
        "code": "#boite {\n  background-image: linear-gradient(135deg, #0284c7, #38bdf8);\n  background-size: cover;\n}"
      },
      {
        "label": "contain (Image entière contenue dans le cadre)",
        "value": "contain",
        "code": "#boite {\n  background-image: linear-gradient(135deg, #0284c7, #38bdf8);\n  background-size: contain;\n}"
      },
      {
        "label": "50% 50% (Dimensions en pourcentages)",
        "value": "50% 50%",
        "code": "#boite {\n  background-image: linear-gradient(135deg, #0284c7, #38bdf8);\n  background-size: 50% 50%;\n}"
      },
      {
        "label": "auto (Taille d'origine)",
        "value": "auto",
        "code": "#boite {\n  background-image: linear-gradient(135deg, #0284c7, #38bdf8);\n  background-size: auto;\n}"
      }
    ]
  },
  "css-background-shorthand": {
    "title": "Tester la super-propriété background :",
    "options": [
      {
        "label": "#0284c7 linear-gradient(...) (Couleur & Dégradé)",
        "value": "#0284c7 linear-gradient",
        "code": "#boite {\n  background: #0284c7 linear-gradient(135deg, #0284c7, #38bdf8) no-repeat center;\n}"
      },
      {
        "label": "#1e293b (Couleur unie sans motif)",
        "value": "#1e293b",
        "code": "#boite {\n  background: #1e293b;\n}"
      }
    ]
  },
  "css-list-style-position": {
    "title": "Tester list-style-position :",
    "options": [
      {
        "label": "outside (Puces en marge extérieure)",
        "value": "outside",
        "code": "/* Puces rejetées en marge externe (défaut) */\n#liste {\n  list-style-position: outside;\n}"
      },
      {
        "label": "inside (Puces alignées dans le texte)",
        "value": "inside",
        "code": "/* Puces intégrées dans le texte */\n#liste {\n  list-style-position: inside;\n}"
      }
    ]
  },
  "css-list-style-image": {
    "title": "Tester list-style-image (Puces avec icône personnalisée) :",
    "options": [
      {
        "label": "url('etoile.svg') (Étoile dorée comme puce)",
        "value": "url('etoile.svg')",
        "code": "#liste {\n  list-style-image: url('etoile.svg');\n}"
      },
      {
        "label": "none (Puce classique)",
        "value": "none",
        "code": "#liste {\n  list-style-image: none;\n}"
      }
    ]
  },
  "css-list-style-shorthand": {
    "title": "Tester la formule condensée list-style :",
    "options": [
      {
        "label": "square inside (Puces carrées à l'intérieur)",
        "value": "square inside",
        "code": "#liste {\n  list-style: square inside;\n}"
      },
      {
        "label": "circle outside (Cercles à l'extérieur)",
        "value": "circle outside",
        "code": "#liste {\n  list-style: circle outside;\n}"
      },
      {
        "label": "none (Supprime totalement les puces)",
        "value": "none",
        "code": "/* Menu de navigation propre sans puces */\n#liste {\n  list-style: none;\n}"
      }
    ]
  },
  "css-font-shorthand": {
    "title": "Tester la super-propriété font :",
    "options": [
      {
        "label": "italic bold 22px 'Segoe UI', sans-serif",
        "value": "italic bold 22px 'Segoe UI', sans-serif",
        "code": "#h1 {\n  font: italic bold 22px 'Segoe UI', sans-serif;\n}"
      },
      {
        "label": "bold 26px 'Courier New', monospace",
        "value": "bold 26px 'Courier New', monospace",
        "code": "#h1 {\n  font: bold 26px 'Courier New', monospace;\n}"
      },
      {
        "label": "normal 16px Arial, sans-serif",
        "value": "normal 16px Arial, sans-serif",
        "code": "#h1 {\n  font: normal 16px Arial, sans-serif;\n}"
      }
    ]
  },
  "css-text-shadow": {
    "title": "Tester text-shadow (Ombre portée du texte) :",
    "options": [
      {
        "label": "2px 2px 4px rgba(0,0,0,0.8) (Ombre portée naturelle)",
        "value": "2px 2px 4px rgba(0,0,0,0.8)",
        "code": "#h1 {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n}"
      },
      {
        "label": "0 0 16px #38bdf8 (Effet néon lumineux)",
        "value": "0 0 16px #38bdf8",
        "code": "#h1 {\n  color: #ffffff;\n  text-shadow: 0 0 16px #38bdf8;\n}"
      },
      {
        "label": "none (Sans ombre)",
        "value": "none",
        "code": "#h1 {\n  text-shadow: none;\n}"
      }
    ]
  },
  "css-border-color": {
    "title": "Tester border-color :",
    "options": [
      {
        "label": "#38bdf8 (Bleu cyan)",
        "value": "#38bdf8",
        "code": "#boite {\n  border-style: solid;\n  border-width: 4px;\n  border-color: #38bdf8;\n}"
      },
      {
        "label": "#f43f5e (Rouge vif)",
        "value": "#f43f5e",
        "code": "#boite {\n  border-style: solid;\n  border-width: 4px;\n  border-color: #f43f5e;\n}"
      },
      {
        "label": "#10b981 (Vert émeraude)",
        "value": "#10b981",
        "code": "#boite {\n  border-style: solid;\n  border-width: 4px;\n  border-color: #10b981;\n}"
      },
      {
        "label": "#facc15 (Jaune d'or)",
        "value": "#facc15",
        "code": "#boite {\n  border-style: solid;\n  border-width: 4px;\n  border-color: #facc15;\n}"
      }
    ]
  },
  "css-border-width": {
    "title": "Tester border-width (Épaisseur de bordure) :",
    "options": [
      {
        "label": "1px (Bordure fine)",
        "value": "1px",
        "code": "#boite {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #38bdf8;\n}"
      },
      {
        "label": "4px (Bordure standard)",
        "value": "4px",
        "code": "#boite {\n  border-style: solid;\n  border-width: 4px;\n  border-color: #38bdf8;\n}"
      },
      {
        "label": "8px (Bordure épaisse)",
        "value": "8px",
        "code": "#boite {\n  border-style: solid;\n  border-width: 8px;\n  border-color: #38bdf8;\n}"
      },
      {
        "label": "14px (Bordure très épaisse)",
        "value": "14px",
        "code": "#boite {\n  border-style: solid;\n  border-width: 14px;\n  border-color: #38bdf8;\n}"
      }
    ]
  },
  "tag-input": {
    "title": "Choisir un type d'input HTML5 (Boutons Radio) :",
    "options": [
      {
        "label": "text (Champ texte libre)",
        "value": "text",
        "previewHtml": "<label style=\"display:block; margin-bottom:5px; font-weight:600; color:var(--text-primary);\">Nom du candidat :</label><input type=\"text\" id=\"nom\" class=\"sti-input\" placeholder=\"Ex: Mohamed Ben Salah\" style=\"width:100%; border:2px solid #f97316;\">",
        "code": "<input type=\"text\" id=\"nom\" name=\"nom\" required placeholder=\"Votre nom complet\">"
      },
      {
        "label": "password (Mot de passe masqué)",
        "value": "password",
        "previewHtml": "<label style=\"display:block; margin-bottom:5px; font-weight:600; color:var(--text-primary);\">Mot de passe :</label><input type=\"password\" id=\"mdp\" class=\"sti-input\" value=\"Secret123\" style=\"width:100%; border:2px solid #ef4444;\">",
        "code": "<input type=\"password\" id=\"pwd\" name=\"pwd\" required>"
      },
      {
        "label": "number (Nombre avec min et max)",
        "value": "number",
        "previewHtml": "<label style=\"display:block; margin-bottom:5px; font-weight:600; color:var(--text-primary);\">Moyenne Bac STI (0 à 20) :</label><input type=\"number\" id=\"note\" class=\"sti-input sti-input-number\" min=\"0\" max=\"20\" value=\"16\" style=\"width:100%; border:2px solid #10b981;\">",
        "code": "<input type=\"number\" id=\"note\" name=\"note\" min=\"0\" max=\"20\" step=\"0.25\">"
      },
      {
        "label": "radio (Boutons radio exclusifs)",
        "value": "radio",
        "previewHtml": "<div style=\"display:flex; gap:16px; align-items:center;\"><label style=\"color:var(--text-primary); font-weight:600;\"><input type=\"radio\" name=\"sec\" checked> STI</label><label style=\"color:var(--text-primary); font-weight:600;\"><input type=\"radio\" name=\"sec\"> Math</label><label style=\"color:var(--text-primary); font-weight:600;\"><input type=\"radio\" name=\"sec\"> Éco</label></div>",
        "code": "<input type=\"radio\" id=\"sti\" name=\"section\" value=\"STI\" checked>\n<label for=\"sti\">STI</label>"
      },
      {
        "label": "checkbox (Cases à cocher multiples)",
        "value": "checkbox",
        "previewHtml": "<div style=\"display:flex; flex-direction:column; gap:6px;\"><label style=\"color:var(--text-primary); font-weight:600;\"><input type=\"checkbox\" checked> Option Informatique</label><label style=\"color:var(--text-primary); font-weight:600;\"><input type=\"checkbox\"> Option Allemand</label></div>",
        "code": "<input type=\"checkbox\" id=\"optInfo\" name=\"optInfo\" checked>"
      },
      {
        "label": "date (Sélecteur de date)",
        "value": "date",
        "previewHtml": "<label style=\"display:block; margin-bottom:5px; font-weight:600; color:var(--text-primary);\">Date de naissance :</label><input type=\"date\" id=\"datenaiss\" class=\"sti-input\" value=\"2007-06-15\" style=\"width:100%; border:2px solid #38bdf8;\">",
        "code": "<input type=\"date\" id=\"dateNaiss\" name=\"dateNaiss\">"
      },
      {
        "label": "submit (Bouton d'envoi)",
        "value": "submit",
        "previewHtml": "<input type=\"submit\" value=\"Envoyer le Formulaire\" style=\"background:#10b981; color:#0f172a; border:none; padding:10px 22px; font-weight:bold; border-radius:6px; cursor:pointer;\">",
        "code": "<input type=\"submit\" id=\"btnSubmit\" value=\"Valider l'inscription\">"
      },
      {
        "label": "reset (Bouton de réinitialisation)",
        "value": "reset",
        "previewHtml": "<input type=\"reset\" value=\"Effacer les champs\" style=\"background:#ef4444; color:#fff; border:none; padding:10px 22px; font-weight:bold; border-radius:6px; cursor:pointer;\">",
        "code": "<input type=\"reset\" id=\"btnReset\" value=\"Annuler / Effacer\">"
      }
    ]
  },
  "tag-select-datalist-option": {
    "title": "Tester les menus déroulants et options :",
    "options": [
      {
        "label": "select simple (Menu déroulant standard)",
        "value": "simple",
        "previewHtml": "<label style=\"color:var(--text-primary); display:block; margin-bottom:5px; font-weight:600;\">Section :</label><select id=\"selSection\" class=\"sti-select\" style=\"padding:8px 14px; border:2px solid #38bdf8;\"><option value=\"sti\">Sciences Techniques (STI)</option><option value=\"math\">Mathématiques</option><option value=\"si\">Sciences Informatiques</option></select>",
        "code": "<select id=\"section\" name=\"section\">\n  <option value=\"sti\">Sciences Techniques</option>\n  <option value=\"math\">Mathématiques</option>\n</select>"
      },
      {
        "label": "select multiple (Choix multiples)",
        "value": "multiple",
        "previewHtml": "<label style=\"color:var(--text-primary); display:block; margin-bottom:5px; font-weight:600;\">Matières préférées (Ctrl+Clic) :</label><select id=\"selM\" class=\"sti-select\" multiple style=\"padding:8px; border:2px solid #f97316; height:80px;\"><option value=\"elec\">Génie Électrique</option><option value=\"meca\">Génie Mécanique</option><option value=\"info\">Informatique</option></select>",
        "code": "<select id=\"matieres\" name=\"matieres\" multiple>\n  <option value=\"elec\">Génie Électrique</option>\n  <option value=\"meca\">Génie Mécanique</option>\n</select>"
      }
    ]
  },
  "tag-hn": {
    "title": "Tester la hiérarchie des titres (h1 à h6) :",
    "options": [
      {
        "label": "<h1> (Titre Principal - Niveau 1)",
        "value": "h1",
        "previewHtml": "<h1 style=\"color:#f97316; margin:0; font-size:26px;\">Titre Principal &lt;h1&gt;</h1>",
        "code": "<h1 id=\"titrePrincipal\">Grand Titre du Document</h1>"
      },
      {
        "label": "<h2> (Sous-titre - Niveau 2)",
        "value": "h2",
        "previewHtml": "<h2 style=\"color:#fb923c; margin:0; font-size:22px;\">Sous-Titre de Section &lt;h2&gt;</h2>",
        "code": "<h2 id=\"sousTitre\">Chapitre 1 : Les Réseaux</h2>"
      },
      {
        "label": "<h3> (Sous-section - Niveau 3)",
        "value": "h3",
        "previewHtml": "<h3 style=\"color:#fdba74; margin:0; font-size:18px;\">Sous-Section &lt;h3&gt;</h3>",
        "code": "<h3 id=\"paragrapheTitre\">1.1 Définition du protocole</h3>"
      }
    ]
  },
  "tag-ul": {
    "title": "Choisir le type de puce pour <ul> :",
    "options": [
      {
        "label": "disc (Disque plein par défaut)",
        "value": "disc",
        "previewHtml": "<ul style=\"list-style-type:disc; color:#fff; padding-left:24px;\"><li>Algorithmique</li><li>Bases de Données</li></ul>",
        "code": "<ul id=\"listeMatieres\" style=\"list-style-type: disc;\">\n  <li>Algorithmique</li>\n  <li>Bases de Données</li>\n</ul>"
      },
      {
        "label": "circle (Cercle vide)",
        "value": "circle",
        "previewHtml": "<ul style=\"list-style-type:circle; color:#fff; padding-left:24px;\"><li>Algorithmique</li><li>Bases de Données</li></ul>",
        "code": "<ul id=\"listeMatieres\" style=\"list-style-type: circle;\">\n  <li>Algorithmique</li>\n  <li>Bases de Données</li>\n</ul>"
      },
      {
        "label": "square (Carré plein)",
        "value": "square",
        "previewHtml": "<ul style=\"list-style-type:square; color:#fff; padding-left:24px;\"><li>Algorithmique</li><li>Bases de Données</li></ul>",
        "code": "<ul id=\"listeMatieres\" style=\"list-style-type: square;\">\n  <li>Algorithmique</li>\n  <li>Bases de Données</li>\n</ul>"
      }
    ]
  },
  "tag-ol": {
    "title": "Choisir la numérotation pour <ol> :",
    "options": [
      {
        "label": "1 (Chiffres arabes : 1, 2, 3)",
        "value": "1",
        "previewHtml": "<ol type=\"1\" style=\"color:#fff; padding-left:24px;\"><li>Phase d'analyse</li><li>Conception</li></ol>",
        "code": "<ol id=\"etapes\" type=\"1\">\n  <li>Phase d'analyse</li>\n  <li>Conception</li>\n</ol>"
      },
      {
        "label": "A (Lettres majuscules : A, B, C)",
        "value": "A",
        "previewHtml": "<ol type=\"A\" style=\"color:#fff; padding-left:24px;\"><li>Phase d'analyse</li><li>Conception</li></ol>",
        "code": "<ol id=\"etapes\" type=\"A\">\n  <li>Phase d'analyse</li>\n  <li>Conception</li>\n</ol>"
      },
      {
        "label": "I (Chiffres romains : I, II, III)",
        "value": "I",
        "previewHtml": "<ol type=\"I\" style=\"color:#fff; padding-left:24px;\"><li>Phase d'analyse</li><li>Conception</li></ol>",
        "code": "<ol id=\"etapes\" type=\"I\">\n  <li>Phase d'analyse</li>\n  <li>Conception</li>\n</ol>"
      }
    ]
  },
  "tag-details-summary": {
    "title": "Tester le bloc accordéon rétractable :",
    "options": [
      {
        "label": "Fermé par défaut (Clic pour dérouler)",
        "value": "closed",
        "previewHtml": "<details style=\"background:#1e293b; padding:10px; border-radius:6px; color:#fff;\"><summary style=\"cursor:pointer; font-weight:bold; color:#f97316;\">▶ Voir la formule de calcul</summary><p style=\"margin-top:8px; font-size:13px;\">Moyenne = (Note1 + Note2) / 2</p></details>",
        "code": "<details id=\"blocAide\">\n  <summary>Voir la solution</summary>\n  <p>Contenu masqué affiché au clic.</p>\n</details>"
      },
      {
        "label": "open (Déroulé immédiatement)",
        "value": "open",
        "previewHtml": "<details open style=\"background:#1e293b; padding:10px; border-radius:6px; color:#fff;\"><summary style=\"cursor:pointer; font-weight:bold; color:#10b981;\">▼ Formule de calcul (Ouvert)</summary><p style=\"margin-top:8px; font-size:13px;\">Moyenne = (Note1 + Note2) / 2</p></details>",
        "code": "<details id=\"blocAide\" open>\n  <summary>Voir la solution</summary>\n  <p>Contenu directement visible.</p>\n</details>"
      }
    ]
  },
  "tag-form": {
    "title": "Méthode d'envoi et validation (Bac STI) :",
    "options": [
      {
        "label": "onsubmit avec validation JS (Méthode POST)",
        "value": "post-valid",
        "previewHtml": "<div style=\"background:#1e293b; padding:14px; border:2px dashed #f97316; border-radius:6px; color:#fff; font-size:13px;\">📋 Formulaire configuré avec <strong>onsubmit=\"return f();\"</strong> et method=\"post\"</div>",
        "code": "<form id=\"f1\" method=\"post\" action=\"traitement.php\" onsubmit=\"return f();\">\n  <!-- Champs du formulaire avec vérification JS -->\n  <input type=\"text\" id=\"nom\" required>\n  <input type=\"submit\" value=\"Envoyer\">\n</form>"
      },
      {
        "label": "method='get' (Paramètres dans l'URL)",
        "value": "get",
        "previewHtml": "<div style=\"background:#1e293b; padding:14px; border:2px dashed #38bdf8; border-radius:6px; color:#fff; font-size:13px;\">🔍 Formulaire de recherche avec method=\"get\"</div>",
        "code": "<form id=\"fRecherche\" method=\"get\" action=\"recherche.php\">\n  <input type=\"text\" id=\"motCle\">\n  <input type=\"submit\" value=\"Rechercher\">\n</form>"
      }
    ]
  },
  "tag-a": {
    "title": "Tester la cible de navigation target :",
    "options": [
      {
        "label": "target='_self' (Onglet courant)",
        "value": "_self",
        "previewHtml": "<a href=\"javascript:void(0)\" style=\"color:#f97316; font-weight:bold; text-decoration:underline; font-size:16px;\">Portail Officiel STI (_self)</a>",
        "code": "<a id=\"lien\" href=\"https://bac.tn\" target=\"_self\">Portail Officiel STI</a>"
      },
      {
        "label": "target='_blank' (Nouvel onglet ↗)",
        "value": "_blank",
        "previewHtml": "<a href=\"javascript:void(0)\" style=\"color:#0ea5e9; font-weight:bold; text-decoration:underline; font-size:16px;\">Ouvrir dans un nouvel onglet ↗ (_blank)</a>",
        "code": "<a id=\"lien\" href=\"https://bac.tn\" target=\"_blank\">Portail Officiel STI</a>"
      }
    ]
  }
};

let currentView = 'home';
let currentCategory = 'all';
let currentSearch = '';
let currentSqlCategory = 'all';
let currentSqlSearch = '';
let activeVideoTimer = null;
let isVideoPlaying = false;
let currentVideoItemId = null;
let currentVideoVariantIdx = 0;

// Base de données virtuelle MySQL pour le Baccalauréat STI
const SQL_DATABASE_INIT = {
  Eleve: [
    { num_inscr: 101, nom: "Ben Salah", prenom: "Ahmed", section: "STI", moyenne: 15.75, date_naiss: "2007-03-12", ville: "Tunis" },
    { num_inscr: 102, nom: "Trabelsi", prenom: "Myriam", section: "STI", moyenne: 11.25, date_naiss: "2006-11-25", ville: "Sousse" },
    { num_inscr: 103, nom: "Gharbi", prenom: "Youssef", section: "STI", moyenne: 8.50, date_naiss: "2007-07-04", ville: "Sfax" },
    { num_inscr: 104, nom: "Ayari", prenom: "Nour", section: "Math", moyenne: 16.00, date_naiss: "2006-09-18", ville: "Monastir" },
    { num_inscr: 105, nom: "Jaziri", prenom: "Karim", section: "STI", moyenne: 13.50, date_naiss: "2007-01-30", ville: "Bizerte" },
    { num_inscr: 106, nom: "Mansour", prenom: "Salma", section: "STI", moyenne: 9.75, date_naiss: "2007-05-14", ville: "Nabeul" }
  ],
  Matiere: [
    { code_mat: "INFO", libelle: "Informatique", coef: 3 },
    { code_mat: "ELEC", libelle: "Génie Électrique", coef: 3 },
    { code_mat: "MECA", libelle: "Génie Mécanique", coef: 3 },
    { code_mat: "MATH", libelle: "Mathématiques", coef: 3 }
  ]
};

let virtualSqlDb = JSON.parse(JSON.stringify(SQL_DATABASE_INIT));

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupThemeToggle();
  renderHtmlCategories();
  renderCssCategories();
  renderJsCategories();
  renderSqlCategories();
  renderHtmlCards();
  renderCssCards();
  renderJsCards();
  renderSqlCards();
  initLessonsModule();
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
  // Section cours masquée temporairement sur demande de l'utilisateur
  if (viewName === 'lessons') {
    viewName = 'home';
  }
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
    history.replaceState(null, '', '#html');
  } else if (viewName === 'css') {
    document.getElementById('cssSearchInput').value = '';
    renderCssCategories();
    renderCssCards();
    history.replaceState(null, '', '#css');
  } else if (viewName === 'js') {
    const jsInput = document.getElementById('jsSearchInput');
    if (jsInput) jsInput.value = '';
    renderJsCategories();
    renderJsCards();
    history.replaceState(null, '', '#js');
  } else if (viewName === 'sql') {
    const sqlInput = document.getElementById('sqlSearchInput');
    if (sqlInput) sqlInput.value = '';
    renderSqlCategories();
    renderSqlCards();
    history.replaceState(null, '', '#sql');
  } else if (viewName === 'lessons') {
    const lInput = document.getElementById('lessonSearchInput');
    if (lInput) lInput.value = '';
    currentLessonSubject = 'all';
    currentLessonType = 'all';
    currentLessonSearch = '';
    renderLessons();
    history.replaceState(null, '', '#lessons');
  } else if (viewName === 'admin') {
    if (isAdminLoggedIn) {
      const loginCard = document.getElementById('adminLoginCard');
      const dash = document.getElementById('adminDashboard');
      if (loginCard) loginCard.style.display = 'none';
      if (dash) dash.style.display = 'block';
      renderAdminLessonsTable();
    } else {
      const loginCard = document.getElementById('adminLoginCard');
      const dash = document.getElementById('adminDashboard');
      if (loginCard) loginCard.style.display = 'block';
      if (dash) dash.style.display = 'none';
      setTimeout(() => {
        const pw = document.getElementById('adminPasswordInput');
        if (pw) pw.focus();
      }, 100);
    }
    history.replaceState(null, '', '#admin');
  } else if (viewName === 'home') {
    history.replaceState(null, '', window.location.pathname.replace(/\/admin|\/lessons|\/cours/gi, '') || '/');
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

  currentVideoItemId = item.id;
  currentVideoVariantIdx = 0;

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

  const varietyConfig = VARIETIES_CONFIG[item.id];
  let playlistSectionHtml = '';
  let comparisonSectionHtml = '';
  let varietySectionHtml = '';
  const hasVariants = varietyConfig && varietyConfig.options && varietyConfig.options.length > 0;
  const initialOption = hasVariants ? varietyConfig.options[0] : null;
  const initialTitle = initialOption 
    ? `VIDÉO 1/${varietyConfig.options.length} : ${initialOption.label}` 
    : `VIDÉO DÉMO : ${item.name}`;
  const initialBadgeVal = initialOption ? initialOption.value : (item.property || 'CSS3');

  if (hasVariants) {
    const opts = varietyConfig.options;

    // 1. Barre de sélection directe de la vidéo dédiée (Playlist de vidéos)
    playlistSectionHtml = `
      <div class="video-playlist-section">
        <div class="video-playlist-title">
          <span>🎬</span>
          <span>Sélectionnez la Vidéo Dédiée (${opts.length} vidéos distinctes pour ${escapeHtml(item.property)}) :</span>
        </div>
        <div class="video-playlist-bar">
          ${opts.map((opt, idx) => `
            <button type="button" class="video-playlist-tab-btn ${idx === 0 ? 'active' : ''}" id="videoTabBtn_${idx}" onclick="playSpecificVideo('${item.id}', ${idx})">
              <span class="video-tab-icon">🎬</span>
              <span class="video-tab-name">Vidéo ${idx + 1} : ${escapeHtml(opt.value)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // 2. Grille comparative de toutes les vidéos
    comparisonSectionHtml = `
      <div class="video-comparison-section">
        <div class="video-comparison-title">
          <span>📺</span>
          <span>Toutes les vidéos disponibles (1 vidéo dédiée pour chaque valeur de la propriété) :</span>
        </div>
        <div class="video-comparison-grid">
          ${opts.map((opt, idx) => `
            <div class="video-mini-card ${idx === 0 ? 'active' : ''}" id="videoMiniCard_${idx}" onclick="playSpecificVideo('${item.id}', ${idx})">
              <div class="video-mini-header">
                <span class="video-mini-badge">Vidéo ${idx + 1}</span>
                <span class="video-mini-val">${escapeHtml(opt.value)}</span>
              </div>
              <div class="video-mini-stage-wrap">
                ${buildMiniStage(item.id, idx, opt)}
              </div>
              <div class="video-mini-desc">${escapeHtml(opt.label)}</div>
              <button type="button" class="video-mini-play-btn">
                ${idx === 0 ? '▶ En cours de lecture' : '▶ Lancer cette vidéo'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // 3. Panneau interactif de Boutons Radio
    varietySectionHtml = `
      <div class="variety-selector-card">
        <div class="variety-header">
          <div class="variety-header-title" style="color:#38bdf8;">
            <span>🎛️</span>
            <span>${varietyConfig.title} (Choix de la vidéo par bouton radio)</span>
          </div>
          <div id="varietyToastCss" class="variety-applied-toast" style="display:none;"></div>
        </div>
        <div class="variety-radios-wrap">
          ${opts.map((opt, idx) => `
            <label class="variety-radio-label ${idx === 0 ? 'active' : ''}" onclick="applyCssVariety('${item.id}', ${idx}, this)">
              <input type="radio" name="cssVariantRadio" value="${escapeHtml(opt.value)}" ${idx === 0 ? 'checked' : ''}>
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

    <!-- 7. VIDÉO / DÉMONSTRATION ANIMÉE DU CODE (1 VIDÉO DÉDIÉE PAR VALEUR) -->
    <div class="modal-section">
      <div class="modal-section-title">
        <span>🎬</span>
        <span>Démonstration Vidéo en direct du code (1 Vidéo Dédiée par Valeur)</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:10px;">
        Chaque valeur possède sa propre vidéo d'animation dédiée. Cliquez sur l'une des vidéos ci-dessous pour lancer sa démonstration complète :
      </p>

      ${playlistSectionHtml}

      <div class="video-player-container">
        <div class="video-player-header">
          <div class="video-header-title-wrap">
            <span class="video-header-dot">●</span>
            <span id="videoPlayerTitle">▶ ${escapeHtml(initialTitle)}</span>
          </div>
          <span class="video-hd-badge">1080p HD LIVE</span>
        </div>

        <!-- Bannière de Comparaison AVANT / APRÈS en Direct -->
        <div class="video-phase-banner" id="videoPhaseBanner">
          <div class="phase-pill phase-before active" id="phaseBeforePill" onclick="forceVideoPhase(0)" title="Cliquer pour voir l'état AVANT sans CSS">
            <span class="phase-dot">🔴</span>
            <span class="phase-label">ÉTAT 1 : AVANT (Sans CSS)</span>
          </div>
          <div class="phase-arrow">➔</div>
          <div class="phase-pill phase-after" id="phaseAfterPill" onclick="forceVideoPhase(1)" title="Cliquer pour voir l'état APRÈS avec CSS">
            <span class="phase-dot">🟢</span>
            <span class="phase-label" id="phaseAfterLabel">ÉTAT 2 : APRÈS (CSS Appliqué)</span>
          </div>
        </div>
        
        <div class="video-stage" id="videoStage">
          <!-- Élément animé selon le type de vidéo -->
          ${buildVideoStageElement(item)}
        </div>

        <div class="video-controls-bar">
          <button class="video-btn" id="playPauseVideoBtn" title="Play / Pause" onclick="toggleVideoPlay('${item.id}')">⏸</button>
          <button class="video-btn" title="Rejouer cette vidéo" onclick="replayVideo('${item.id}')">🔄</button>
          
          <button type="button" class="video-phase-btn before-btn" onclick="forceVideoPhase(0)" title="Geler sur l'état AVANT">🔴 AVANT</button>
          <button type="button" class="video-phase-btn after-btn" onclick="forceVideoPhase(1)" title="Geler sur l'état APRÈS">🟢 APRÈS</button>

          <div class="video-timeline-wrap">
            <div class="video-progress-fill" id="videoProgress"></div>
          </div>

          <span class="video-current-badge" id="videoCurrentBadge">${escapeHtml(initialBadgeVal)}</span>

          <button class="video-hover-toggle-btn" title="Tester avec :hover" onclick="enableHoverStageTest()">
            🖱️ Tester :hover
          </button>
        </div>
      </div>

      ${comparisonSectionHtml}
    </div>
  `;

  modal.classList.add('active');
  if (hasVariants) {
    playSpecificVideo(item.id, 0);
  } else {
    startVideoSimulation(item.id, 0);
  }
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

    <!-- 6. Laboratoire & Simulateur Dédié Bac STI (si applicable) -->
    ${buildJsInteractiveStage(item)}

    <!-- 7. Exécution interactive en direct -->
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

  // Initialisations automatiques pour les simulateurs interactifs
  if (item.id === 'js-structure-switch-saisons') {
    demoSwitchMois(4);
  } else if (item.id === 'js-fn-captcha' || item.id === 'js-fn-nbmajus' || item.id === 'js-fn-actualiser') {
    demoActualiserCaptcha();
  } else if (item.id === 'js-fn-verif-complete') {
    demoFillVerif(true);
  }
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

// -------------------------------------------------------------
// MODULE INTERACTIF JAVASCRIPT (Bac STI Formulaires & Switch)
// -------------------------------------------------------------

function buildJsInteractiveStage(item) {
  if (item.id === 'js-structure-switch-saisons') {
    return `
      <!-- DÉMONSTRATION INTERACTIVE DÉDIÉE : STRUCTURE SWITCH DES SAISONS -->
      <div class="modal-section" style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 18px;">
        <div class="modal-section-title green" style="margin-bottom: 12px;">
          <span>🔀</span>
          <span>Comprendre & Manipuler la Structure switch en Direct</span>
        </div>

        <!-- 1. Explication Pédagogique Claire -->
        <div style="background:#090d16; border-radius:6px; padding:12px 16px; margin-bottom:16px; font-size:0.9rem; line-height:1.6; border-left:4px solid #10b981;">
          <strong style="color:#34d399;">🔑 Les 4 Règles d'Or du switch au Bac STI :</strong>
          <ul style="margin:8px 0 0 18px; padding:0; color:var(--text-secondary);">
            <li><strong style="color:#f8fafc;">1. let mois = Number(prompt(...)) :</strong> La conversion <code>Number()</code> est indispensable car <code>switch</code> teste avec égalité stricte <code>===</code> (valeur et type).</li>
            <li><strong style="color:#f8fafc;">2. Cas groupés (OU logique) :</strong> <code>case 12: case 1: case 2:</code> permet d'exécuter le même code si le mois vaut 12, 1 ou 2.</li>
            <li><strong style="color:#f8fafc;">3. L'instruction break; :</strong> Indispensable à la fin de chaque bloc pour sortir immédiatement du <code>switch</code> et ne pas exécuter les cas suivants !</li>
            <li><strong style="color:#f8fafc;">4. Le bloc default: :</strong> Sert d'alternative par défaut si aucune valeur ne correspond (ex: mois = 13 ou -1).</li>
          </ul>
        </div>

        <!-- 2. Test Rapide par Saison -->
        <div style="margin-bottom:14px;">
          <span style="font-size:0.85rem; font-weight:700; color:var(--text-secondary); display:block; margin-bottom:8px;">
            🧪 Test Rapide : Cliquez sur une saison pour voir le case correspondant s'activer :
          </span>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <button onclick="demoSwitchMois(12)" class="btn-switch-demo" style="background:var(--bg-canvas); color:#38bdf8; border:1px solid var(--border-color); padding:7px 12px; border-radius:6px; font-size:0.85rem; cursor:pointer; font-weight:600;">❄️ Décembre (12) ➔ Hiver</button>
            <button onclick="demoSwitchMois(1)" class="btn-switch-demo" style="background:var(--bg-canvas); color:#38bdf8; border:1px solid var(--border-color); padding:7px 12px; border-radius:6px; font-size:0.85rem; cursor:pointer; font-weight:600;">❄️ Janvier (1) ➔ Hiver</button>
            <button onclick="demoSwitchMois(4)" class="btn-switch-demo" style="background:var(--bg-canvas); color:#ec4899; border:1px solid var(--border-color); padding:7px 12px; border-radius:6px; font-size:0.85rem; cursor:pointer; font-weight:600;">🌸 Avril (4) ➔ Printemps</button>
            <button onclick="demoSwitchMois(7)" class="btn-switch-demo" style="background:var(--bg-canvas); color:#facc15; border:1px solid var(--border-color); padding:7px 12px; border-radius:6px; font-size:0.85rem; cursor:pointer; font-weight:600;">☀️ Juillet (7) ➔ Été</button>
            <button onclick="demoSwitchMois(10)" class="btn-switch-demo" style="background:var(--bg-canvas); color:#fb923c; border:1px solid var(--border-color); padding:7px 12px; border-radius:6px; font-size:0.85rem; cursor:pointer; font-weight:600;">🍂 Octobre (10) ➔ Automne</button>
            <button onclick="demoSwitchMois(15)" class="btn-switch-demo" style="background:var(--bg-canvas); color:#ef4444; border:1px solid var(--border-color); padding:7px 12px; border-radius:6px; font-size:0.85rem; cursor:pointer; font-weight:600;">❌ Mois 15 ➔ default (Erreur)</button>
          </div>
        </div>

        <!-- 3. Saisie Personnalisée ou Vrai Prompt -->
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:12px;">
          <input type="number" id="inputSwitchMois" class="sti-input sti-input-number" placeholder="Entrez un mois (1..12)" min="1" max="15" value="4" style="width:170px;">
          <button onclick="demoSwitchCustom()" style="background:#10b981; color:#0f172a; border:none; padding:8px 16px; border-radius:6px; font-weight:700; cursor:pointer; font-size:0.9rem;">
            Tester la saisie (switch)
          </button>
          <button onclick="demoSwitchRealPrompt()" style="background:#3b82f6; color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:700; cursor:pointer; font-size:0.9rem;">
            🚀 Lancer le prompt() réel
          </button>
        </div>

        <!-- Boîte d'affichage du résultat animé -->
        <div id="switchResultBox" style="background:var(--bg-canvas); border:1px solid rgba(16, 185, 129, 0.4); border-radius:6px; padding:14px; font-family:Consolas, Monaco, monospace; font-size:0.92rem; color:var(--text-primary); line-height:1.6;">
          <span style="color:var(--text-secondary);">Résultat de la structure conditionnelle :</span><br>
          <span id="switchResultContent" style="color:#34d399; font-weight:bold;">Sélectionnez une option ci-dessus pour lancer le switch !</span>
        </div>
      </div>
    `;
  }

  if (item.id === 'js-fn-captcha' || item.id === 'js-fn-nbmajus' || item.id === 'js-fn-actualiser') {
    return `
      <!-- DÉMONSTRATION INTERACTIVE DÉDIÉE : CAPTCHA & MAJUSCULES -->
      <div class="modal-section" style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 18px;">
        <div class="modal-section-title green" style="margin-bottom: 12px;">
          <span>🔐</span>
          <span>Simulateur Interactif Captcha & Comptage de Majuscules (Bac STI)</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:14px;">
          Ce laboratoire utilise exactement les IDs de la fiche officielle : <code>id="cap"</code> pour le code généré et <code>id="nbmaj"</code> pour votre réponse.
        </p>

        <!-- Ligne Captcha -->
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:14px;">
          <label style="font-weight:600; font-size:0.88rem; color:var(--text-secondary);">Code Captcha (#cap) :</label>
          <input type="text" id="demoCapInput" readonly class="sti-input sti-input-captcha" style="width:220px;">
          <button onclick="demoActualiserCaptcha()" style="background:#0284c7; color:#fff; border:none; padding:8px 14px; border-radius:6px; font-size:0.85rem; font-weight:600; cursor:pointer;">
            🔄 actualiser()
          </button>
        </div>

        <!-- Ligne Vérification Nb Majuscules -->
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:14px;">
          <label style="font-weight:600; font-size:0.88rem; color:var(--text-secondary);">Nombre de majuscules (#nbmaj) :</label>
          <input type="number" id="demoNbmajInput" class="sti-input sti-input-number" placeholder="Ex: 4" min="0" max="10" style="width:110px;">
          <button onclick="demoVerifierNbMajus()" style="background:#10b981; color:#0f172a; border:none; padding:8px 18px; border-radius:6px; font-size:0.85rem; font-weight:bold; cursor:pointer;">
            🔍 nbmajus() (Vérifier)
          </button>
        </div>

        <div id="demoCaptchaFeedback" style="padding:10px 14px; border-radius:6px; font-size:0.88rem; line-height:1.5; background:var(--bg-canvas); color:var(--text-primary); border:1px solid rgba(16, 185, 129, 0.25);">
          Cliquez sur <strong>actualiser()</strong> pour générer un code, puis comptez les lettres majuscules !
        </div>
      </div>
    `;
  }

  if (item.id === 'js-fn-validage') {
    return `
      <!-- DÉMONSTRATION INTERACTIVE DÉDIÉE : VALIDAGE -->
      <div class="modal-section" style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 18px;">
        <div class="modal-section-title green" style="margin-bottom: 12px;">
          <span>📅</span>
          <span>Simulateur Interactif validage() (Objet Date)</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">
          Vérifie si l'âge (différence entre l'année courante <code>dc.getFullYear()</code> et l'année de naissance <code>dp.getFullYear()</code>) est compris entre 15 et 30 ans.
        </p>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:12px;">
          <label style="font-weight:600; font-size:0.88rem; color:var(--text-secondary);">Date de naissance (#dnais) :</label>
          <input type="date" id="demoDnaisInput" class="sti-input" value="2007-06-15" style="padding:6px 12px; font-size:0.9rem;">
          <button onclick="demoValidage()" style="background:#10b981; color:#0f172a; border:none; padding:8px 18px; border-radius:6px; font-size:0.85rem; font-weight:bold; cursor:pointer;">
            🚀 Exécuter validage()
          </button>
        </div>
        <div id="demoValidageFeedback" style="background:var(--bg-canvas); border:1px solid rgba(16, 185, 129, 0.3); border-radius:6px; padding:12px; font-family:Consolas, Monaco, monospace; font-size:0.88rem; color:#34d399;">
          Cliquez sur "Exécuter validage()" pour tester le calcul de l'âge (ac - ap) !
        </div>
      </div>
    `;
  }

  if (item.id === 'js-fn-verif-complete') {
    return `
      <!-- DÉMONSTRATION INTERACTIVE DÉDIÉE : FORMULAIRE COMPLET VERIF() -->
      <div class="modal-section" style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 18px;">
        <div class="modal-section-title green" style="margin-bottom: 12px;">
          <span>📝</span>
          <span>Simulateur Interactif du Formulaire Complet (verif())</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">
          Testez en direct les 10 contrôles officiels de <code>function verif()</code>. Observez l'alerte d'erreur et le changement de fond en rouge si le mot de passe ne correspond pas !
        </p>

        <div style="display:flex; gap:8px; margin-bottom:14px; flex-wrap:wrap;">
          <button onclick="demoFillVerif(true)" style="background:#059669; color:#fff; border:none; padding:6px 14px; border-radius:6px; font-size:0.82rem; cursor:pointer; font-weight:600;">
            ✓ Remplir données valides
          </button>
          <button onclick="demoFillVerif(false)" style="background:#dc2626; color:#fff; border:none; padding:6px 14px; border-radius:6px; font-size:0.82rem; cursor:pointer; font-weight:600;">
            ⚠️ Remplir avec erreurs (passwords différents, tel faux...)
          </button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; background:var(--bg-canvas); padding:16px; border-radius:6px; border:1px solid var(--border-color); margin-bottom:14px; font-size:0.85rem;">
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Civilité (name="civ") :</label>
            <label style="margin-right:12px; cursor:pointer; color:var(--text-primary);"><input type="radio" name="demoV_civ" id="demoV_civ0" value="Mme"> Mme</label>
            <label style="cursor:pointer; color:var(--text-primary);"><input type="radio" name="demoV_civ" id="demoV_civ1" value="M."> M.</label>
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Nom & Prénom (id="np") :</label>
            <input type="text" id="demoV_np" class="sti-input" style="width:100%;">
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Numéro tél (id="ntel") :</label>
            <input type="text" id="demoV_ntel" class="sti-input" maxlength="8" style="width:100%;">
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">E-mail (id="mail") :</label>
            <input type="text" id="demoV_mail" class="sti-input" style="width:100%;">
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Mot de passe (id="mps") :</label>
            <input type="password" id="demoV_mps" class="sti-input" maxlength="8" style="width:100%;">
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Confirmation (id="cfmps") :</label>
            <input type="password" id="demoV_cfmps" class="sti-input" maxlength="8" style="width:100%;">
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Adresse (id="adr") :</label>
            <input type="text" id="demoV_adr" class="sti-input" style="width:100%;">
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Ville (id="vill") :</label>
            <select id="demoV_vill" class="sti-select" style="width:100%;">
              <option value="">-- Choisir une ville --</option>
              <option value="Tunis">Tunis</option>
              <option value="Sousse">Sousse</option>
              <option value="Sfax">Sfax</option>
              <option value="Monastir">Monastir</option>
            </select>
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Code postal (id="cp") :</label>
            <input type="text" id="demoV_cp" class="sti-input" maxlength="4" style="width:100%;">
          </div>
          <div>
            <label style="display:block; color:var(--text-primary); margin-bottom:4px; font-weight:600;">Remarque (id="rq") :</label>
            <input type="text" id="demoV_rq" class="sti-input" style="width:100%;">
          </div>
        </div>

        <button onclick="demoRunVerif()" style="background:#10b981; color:#0f172a; border:none; padding:10px 22px; border-radius:6px; font-weight:800; cursor:pointer; font-size:0.95rem; box-shadow:0 3px 8px rgba(0,0,0,0.3); display:inline-flex; align-items:center; gap:8px;">
          <span>🚀</span>
          <span>Exécuter verif() (Valider le formulaire)</span>
        </button>

        <div id="demoVerifFeedback" style="margin-top:12px; padding:10px 14px; border-radius:6px; font-size:0.88rem; display:none; line-height:1.5;"></div>
      </div>
    `;
  }

  if (item.id === 'js-fn-alpha' || item.id === 'js-fn-isnum' || item.id === 'js-fn-testtel' || item.id === 'js-fn-testmail') {
    return `
      <!-- TESTEUR INTERACTIF EN DIRECT POUR FONCTION AUXILIAIRE -->
      <div class="modal-section" style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 18px;">
        <div class="modal-section-title green" style="margin-bottom: 12px;">
          <span>🧪</span>
          <span>Testeur Interactif en Direct : ${escapeHtml(item.name)}</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">
          Saisissez une valeur dans le champ ci-dessous pour voir le retour booléen (<code>true</code> / <code>false</code>) en temps réel :
        </p>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-bottom:12px;">
          <input type="text" id="demoHelperInput" class="sti-input" placeholder="Saisissez une valeur de test..." style="width:260px;" oninput="demoTestHelper('${item.id}', this.value)">
          <div id="demoHelperResult" style="font-weight:bold; font-size:0.92rem; padding:8px 14px; border-radius:6px; background:var(--bg-canvas); border:1px solid rgba(16, 185, 129, 0.3); color:var(--text-secondary);">
            En attente de saisie...
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

// DÉMO SWITCH (Mois & Saisons)
function demoSwitchMois(m) {
  const content = document.getElementById('switchResultContent');
  const input = document.getElementById('inputSwitchMois');
  if (input) input.value = m;

  let mois = Number(m);
  let saison = "";
  let icon = "";
  let color = "";
  let caseExpl = "";

  switch (mois) {
    case 12: case 1: case 2:
      saison = "hiver";
      icon = "❄️";
      color = "#38bdf8";
      caseExpl = "case 12 : case 1 : case 2 : (Mois d'hiver)";
      break;
    case 3: case 4: case 5:
      saison = "printemps";
      icon = "🌸";
      color = "#ec4899";
      caseExpl = "case 3 : case 4 : case 5 : (Mois de printemps)";
      break;
    case 6: case 7: case 8:
      saison = "été";
      icon = "☀️";
      color = "#facc15";
      caseExpl = "case 6 : case 7 : case 8 : (Mois d'été)";
      break;
    case 9: case 10: case 11:
      saison = "Automne";
      icon = "🍂";
      color = "#fb923c";
      caseExpl = "case 9 : case 10 : case 11 : (Mois d'automne)";
      break;
    default:
      saison = "Numéro erroné";
      icon = "❌";
      color = "#ef4444";
      caseExpl = "default : (Aucun case ne correspond)";
      break;
  }

  if (content) {
    content.innerHTML = `
      <div style="margin-top:6px; padding:10px; background:rgba(0,0,0,0.3); border-radius:6px; border-left:4px solid ${color};">
        <span style="font-size:1.15rem; color:${color}; font-weight:800;">${icon} ${saison.toUpperCase()}</span><br>
        <span style="color:#cbd5e1; font-size:0.85rem;">➔ <strong>Valeur saisie :</strong> <code>mois = ${mois}</code></span><br>
        <span style="color:#94a3b8; font-size:0.83rem;">➔ <strong>Branche activée :</strong> <code>${caseExpl}</code></span><br>
        <span style="color:#a3e635; font-size:0.83rem;">➔ <strong>Action :</strong> <code>alert("${saison}"); break;</code></span>
      </div>
    `;
  }
}

function demoSwitchCustom() {
  const input = document.getElementById('inputSwitchMois');
  if (input) {
    demoSwitchMois(input.value);
  }
}

function demoSwitchRealPrompt() {
  let mois = prompt("mois=");
  if (mois === null) return;
  mois = Number(mois);
  switch (mois) {
    case 12: case 1: case 2:
      alert("hiver"); break;
    case 3: case 4: case 5:
      alert("printemps"); break;
    case 6: case 7: case 8:
      alert("été"); break;
    case 9: case 10: case 11:
      alert("Automne"); break;
    default:
      alert("Numéro erroné"); break;
  }
  demoSwitchMois(mois);
}

// DÉMO CAPTCHA & MAJUSCULES
function demoActualiserCaptcha() {
  let code = "";
  for (let i = 1; i <= 10; i++) {
    let n = Math.trunc(Math.random() * 26);
    if (n % 2 == 0) {
      code = code + String.fromCharCode(n + 65);
    } else {
      code = code + String.fromCharCode(n + 97);
    }
  }
  const cap = document.getElementById('demoCapInput');
  if (cap) cap.value = code;

  const nbmaj = document.getElementById('demoNbmajInput');
  if (nbmaj) {
    nbmaj.value = '';
    nbmaj.style.backgroundColor = '';
    nbmaj.style.color = '';
    nbmaj.classList.remove('bg-red-error', 'bg-green-success', 'input-error', 'input-success');
  }

  const fb = document.getElementById('demoCaptchaFeedback');
  if (fb) {
    fb.style.display = 'block';
    fb.style.background = 'var(--bg-canvas)';
    fb.style.color = 'var(--text-primary)';
    fb.innerHTML = `Nouveau code Captcha généré : <strong style="color:#38bdf8; font-family:monospace; letter-spacing:2px; font-size:1.05rem;">${code}</strong>. Comptez les majuscules et saisissez votre réponse !`;
  }
}

function demoVerifierNbMajus() {
  const cap = document.getElementById('demoCapInput');
  if (!cap) return;
  const ch = cap.value;
  let nb = 0;
  for (let i = 0; i < ch.length; i++) {
    if (ch[i] >= "A" && ch[i] <= "Z") {
      nb = nb + 1;
    }
  }
  const nbmaj = document.getElementById('demoNbmajInput');
  const val = nbmaj ? nbmaj.value : '';
  const fb = document.getElementById('demoCaptchaFeedback');

  if (val === '') {
    alert("Veuillez saisir votre réponse dans le champ #nbmaj !");
    return;
  }

  if (nb != val) {
    if (nbmaj) {
      nbmaj.style.backgroundColor = '#dc2626';
      nbmaj.style.color = '#ffffff';
      nbmaj.classList.add('bg-red-error');
      nbmaj.classList.remove('bg-green-success');
    }
    if (fb) {
      fb.style.display = 'block';
      fb.style.background = 'rgba(239, 68, 68, 0.2)';
      fb.style.color = '#fca5a5';
      fb.innerHTML = `❌ <strong>Erreur !</strong> Vous avez saisi <code>${val}</code>, mais il y a en réalité <code>${nb}</code> majuscule(s). Comme spécifié dans le cours : <code>document.getElementById('nbmaj').style.backgroundColor = 'red';</code> !`;
    }
  } else {
    if (nbmaj) {
      nbmaj.style.backgroundColor = '#059669';
      nbmaj.style.color = '#ffffff';
      nbmaj.classList.add('bg-green-success');
      nbmaj.classList.remove('bg-red-error');
    }
    if (fb) {
      fb.style.display = 'block';
      fb.style.background = 'rgba(16, 185, 129, 0.2)';
      fb.style.color = '#86efac';
      fb.innerHTML = `✓ <strong>Bravo !</strong> Le nombre exact de majuscules est bien <code>${nb}</code>. Le test est validé !`;
    }
  }
}

// DÉMO VALIDAGE
function demoValidage() {
  const input = document.getElementById('demoDnaisInput');
  if (!input || !input.value) {
    alert("Veuillez sélectionner une date !");
    return;
  }
  let dt = input.value;
  let dc = new Date();
  let dp = new Date(dt);
  let ap = dp.getFullYear();
  let ac = dc.getFullYear();
  let diff = ac - ap;
  const fb = document.getElementById('demoValidageFeedback');

  if (diff < 15 || diff > 30) {
    alert('age invalid');
    if (fb) {
      fb.style.color = '#ef4444';
      fb.innerHTML = `❌ <strong>alert('age invalid') :</strong> Année courante ac = ${ac}, Année naissance ap = ${ap} ➔ Âge diff = ${diff} ans. Doit être entre 15 et 30 ans !`;
    }
  } else {
    if (fb) {
      fb.style.color = '#34d399';
      fb.innerHTML = `✓ <strong>Âge Valide :</strong> ac = ${ac}, ap = ${ap} ➔ diff = ${diff} ans. Âge conforme au barème (15 à 30 ans) !`;
    }
  }
}

// DÉMO FORMULAIRE COMPLET VERIF()
function demoFillVerif(valid) {
  const civ0 = document.getElementById('demoV_civ0');
  const civ1 = document.getElementById('demoV_civ1');
  const np = document.getElementById('demoV_np');
  const ntel = document.getElementById('demoV_ntel');
  const mail = document.getElementById('demoV_mail');
  const mps = document.getElementById('demoV_mps');
  const cfmps = document.getElementById('demoV_cfmps');
  const adr = document.getElementById('demoV_adr');
  const vill = document.getElementById('demoV_vill');
  const cp = document.getElementById('demoV_cp');
  const rq = document.getElementById('demoV_rq');
  const fb = document.getElementById('demoVerifFeedback');

  if (cfmps) {
    cfmps.style.backgroundColor = '';
    cfmps.style.color = '';
    cfmps.classList.remove('bg-red-error', 'input-error');
  }
  if (fb) fb.style.display = 'none';

  if (valid) {
    if (civ1) civ1.checked = true;
    if (np) np.value = "Ahmed Ben Salah";
    if (ntel) ntel.value = "98123456";
    if (mail) mail.value = "ahmed.ben@domaine.tn";
    if (mps) mps.value = "pass1234";
    if (cfmps) cfmps.value = "pass1234";
    if (adr) adr.value = "Avenue Habib Bourguiba";
    if (vill) vill.selectedIndex = 1;
    if (cp) cp.value = "1000";
    if (rq) rq.value = "Dossier d'inscription complet";
  } else {
    if (civ0) civ0.checked = false;
    if (civ1) civ1.checked = false; // erreur civilité
    if (np) np.value = "Ali123"; // faux nom
    if (ntel) ntel.value = "1234"; // faux tel
    if (mail) mail.value = "emailinvalide"; // faux mail
    if (mps) mps.value = "pass1234";
    if (cfmps) cfmps.value = "different"; // mot de passe différent -> rouge !
    if (adr) adr.value = "sans_espace"; // sans espace
    if (vill) vill.selectedIndex = 0; // non sélectionné
    if (cp) cp.value = "500"; // < 1000
    if (rq) rq.value = "";
  }
}

function demoRunVerif() {
  const civ = document.getElementsByName('demoV_civ');
  const np = (document.getElementById('demoV_np') || {}).value || '';
  const ntel = (document.getElementById('demoV_ntel') || {}).value || '';
  const mail = (document.getElementById('demoV_mail') || {}).value || '';
  const mps = (document.getElementById('demoV_mps') || {}).value || '';
  const cfmpsInput = document.getElementById('demoV_cfmps');
  const cfmps = cfmpsInput ? cfmpsInput.value : '';
  const adr = (document.getElementById('demoV_adr') || {}).value || '';
  const vil = document.getElementById('demoV_vill') || { selectedIndex: 0 };
  const cp = (document.getElementById('demoV_cp') || {}).value || '';
  const req = (document.getElementById('demoV_rq') || {}).value || '';
  const fb = document.getElementById('demoVerifFeedback');

  if (cfmpsInput) {
    cfmpsInput.style.backgroundColor = '';
    cfmpsInput.style.color = '';
    cfmpsInput.classList.remove('bg-red-error', 'input-error');
  }

  // Helpers
  function _alpha(ch) {
    ch = ch.toUpperCase();
    for (let i = 0; i < ch.length; i++) {
      if ((ch[i] < "A" || ch[i] > "Z") && ch[i] != " ") return false;
    }
    return true;
  }
  function _isnum(ch) {
    for (let i = 0; i < ch.length; i++) {
      if (ch[i] < "0" || ch[i] > "9") return false;
    }
    return true;
  }
  function _testtel(ch) {
    let prem = ch.charAt(0);
    return (prem == "2" || prem == "4" || prem == "5" || prem == "7" || prem == "9");
  }
  function _testmail(m) {
    let pA = m.indexOf("@");
    let pP = m.lastIndexOf(".");
    return (pA > 0 && pP > pA + 1 && pP < m.length - 1);
  }

  // Contrôles successifs
  if (civ[0].checked == false && civ[1].checked == false) {
    alert("Veuillez cocher la civilité");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('Veuillez cocher la civilité')"; }
    return false;
  }
  if (np == "" || np.length > 30 || _alpha(np) == false) {
    alert("Nom vide ou incorrect");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('Nom vide ou incorrect')"; }
    return false;
  }
  if (ntel.length != 8 || _testtel(ntel) == false || _isnum(ntel) == false) {
    alert("numéro téléphone vide ou incorrect");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('numéro téléphone vide ou incorrect')"; }
    return false;
  }
  if (mail == "" || mail.indexOf("@") == -1 || _testmail(mail) == false) {
    alert("Mail obligatoire ou invalide");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('Mail obligatoire ou invalide')"; }
    return false;
  }
  if (mps.length != 8) {
    alert("Mot de Passe obligatoire ou invalide");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('Mot de Passe obligatoire ou invalide')"; }
    return false;
  }
  if (cfmps != mps) {
    alert("Mot de Passe incorrect");
    if (cfmpsInput) {
      cfmpsInput.style.backgroundColor = '#dc2626';
      cfmpsInput.style.color = '#ffffff';
      cfmpsInput.classList.add('bg-red-error');
    }
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.innerHTML = "alert('Mot de Passe incorrect')<br>➔ <code>document.getElementById('cfmps').style.backgroundColor = 'red';</code>"; }
    return false;
  }
  if (adr == "" || adr.indexOf(" ") == -1) {
    alert("adresse vide ou incorrecte");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('adresse vide ou incorrecte')"; }
    return false;
  }
  if (vil.selectedIndex == 0) {
    alert("selectionner une ville");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('selectionner une ville')"; }
    return false;
  }
  if (Number(cp) < 1000 || Number(cp) > 9999) {
    alert("code postal obligatoire ou invalid");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('code postal obligatoire ou invalid')"; }
    return false;
  }
  if (req == "" || req.length > 50) {
    alert("remarque obligatoire ou invalid");
    if (fb) { fb.style.display = 'block'; fb.style.background = '#7f1d1d'; fb.style.color = '#fca5a5'; fb.textContent = "alert('remarque obligatoire ou invalid')"; }
    return false;
  }

  if (fb) {
    fb.style.display = 'block';
    fb.style.background = 'rgba(16, 185, 129, 0.2)';
    fb.style.color = '#86efac';
    fb.innerHTML = "✓ <strong>Formulaire validé avec succès !</strong> Tous les 10 critères du Bac STI ont été respectés.";
  }
  alert("Formulaire validé avec succès !");
  return true;
}

// DÉMO TESTEUR FONCTIONS AUXILIAIRES
function demoTestHelper(id, val) {
  const res = document.getElementById('demoHelperResult');
  if (!res) return;
  if (!val) {
    res.style.color = '#94a3b8';
    res.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    res.textContent = "En attente de saisie...";
    return;
  }

  let ok = false;
  let expl = "";

  if (id === 'js-fn-alpha') {
    let ch = val.toUpperCase();
    ok = true;
    for (let i = 0; i < ch.length; i++) {
      if ((ch[i] < "A" || ch[i] > "Z") && ch[i] != " ") {
        ok = false;
        break;
      }
    }
    expl = ok ? "✓ Contient uniquement des lettres et espaces" : "❌ Contient des caractères non alphabétiques";
  } else if (id === 'js-fn-isnum') {
    ok = true;
    for (let i = 0; i < val.length; i++) {
      if (val[i] < "0" || val[i] > "9") {
        ok = false;
        break;
      }
    }
    expl = ok ? "✓ Contient uniquement des chiffres ('0' à '9')" : "❌ Contient des caractères non numériques";
  } else if (id === 'js-fn-testtel') {
    let prem = val.charAt(0);
    ok = (prem == "2" || prem == "4" || prem == "5" || prem == "7" || prem == "9");
    expl = ok ? `✓ Commence par '${prem}' (indicatif tunisien valide)` : `❌ Commence par '${prem}' (doit être 2, 4, 5, 7 ou 9)`;
  } else if (id === 'js-fn-testmail') {
    let pA = val.indexOf("@");
    let pP = val.lastIndexOf(".");
    ok = (pA > 0 && pP > pA + 1 && pP < val.length - 1);
    expl = ok ? "✓ Format e-mail valide (@ et . bien positionnés)" : "❌ Format e-mail invalide (@ ou . mal positionnés)";
  }

  res.style.color = ok ? '#34d399' : '#ef4444';
  res.style.borderColor = ok ? '#10b981' : '#ef4444';
  res.innerHTML = `<strong>${ok ? 'true' : 'false'}</strong> &bull; ${expl}`;
}

// =============================================================
// 7. SECTION SQL - BACCALAURÉAT STI TUNISIE
// 57 Notions & Commandes officielles (8 sections) + Console Interactive MySQL
// =============================================================

function renderSqlCategories() {
  const cats = [
    'all',
    'Type de données',
    "Contraintes d'intégrité",
    'Opérateurs de comparaison',
    'Opérateurs logiques',
    'Définition des données',
    'Fonctions définies sur le type date',
    "Fonctions d'agrégation",
    'Manipulation des données'
  ];
  const bar = document.getElementById('sqlCategoriesBar');
  if (!bar) return;
  bar.innerHTML = '';

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${cat === currentSqlCategory ? 'active' : ''}`;
    btn.textContent = cat === 'all' ? 'Toutes les notions SQL (57)' : cat;
    btn.addEventListener('click', () => {
      currentSqlCategory = cat;
      document.querySelectorAll('#sqlCategoriesBar .cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSqlCards();
    });
    bar.appendChild(btn);
  });
}

function renderSqlCards() {
  const container = document.getElementById('sqlItemsGrid');
  if (!container) return;
  container.innerHTML = '';

  if (typeof DATA === 'undefined' || !DATA || !DATA.sql) return;

  const filtered = DATA.sql.filter(item => {
    const matchCat = currentSqlCategory === 'all' || item.category === currentSqlCategory;
    const q = (currentSqlSearch || '').toLowerCase().trim();
    const matchSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      (item.tag && item.tag.toLowerCase().includes(q)) ||
      (item.syntax && item.syntax.toLowerCase().includes(q)) ||
      (item.summary && item.summary.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
      🔍 Aucune commande SQL ne correspond à votre recherche "${escapeHtml(currentSqlSearch)}".
    </div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card card-sql';
    card.innerHTML = `
      <div class="card-cat-badge" style="color:#c084fc;">${escapeHtml(item.category)}</div>
      <div class="item-card-title">
        <span>${escapeHtml(item.name)}</span>
        <span class="item-card-tag" style="color:#c084fc; font-size:0.82rem; background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.3); padding:2px 8px; border-radius:4px;">SQL</span>
      </div>
      <p class="item-card-desc">${escapeHtml(item.description || item.summary)}</p>
      <div class="card-action-bar">
        <span style="color:#c084fc; font-weight:600;">⚡ Explication, Code & Console</span>
        <span>→</span>
      </div>
    `;
    card.addEventListener('click', () => openSqlModal(item));
    container.appendChild(card);
  });
}

function handleSqlSearch(val) {
  currentSqlSearch = val;
  renderSqlCards();
}

function switchSqlTab(mode) {
  const docView = document.getElementById('sqlOfficialDocView');
  const cardsView = document.getElementById('sqlCardsGridView');
  const tabDoc = document.getElementById('tabBtnSqlDoc');
  const tabCards = document.getElementById('tabBtnSqlCards');

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
    renderSqlCategories();
    renderSqlCards();
  }
}

function openSqlModalById(id) {
  if (typeof DATA === 'undefined' || !DATA || !DATA.sql) return;
  const item = DATA.sql.find(s => s.id === id);
  if (item) {
    openSqlModal(item);
  }
}

function openSqlModal(item) {
  const modal = document.getElementById('detailsModal');
  const body = document.getElementById('modalDynamicBody');
  const title = document.getElementById('modalTitle');
  const cat = document.getElementById('modalCategory');

  cat.textContent = `SQL • ${item.category}`;
  cat.style.color = '#c084fc';
  title.textContent = item.name + (item.syntax && item.syntax !== item.name ? ` — ${item.syntax}` : '');

  let valuesHtml = '';
  if (item.values && item.values.length > 0) {
    valuesHtml = `
      <div class="modal-section">
        <div class="modal-section-title purple">
          <span>⚙️</span>
          <span>Règles & Syntaxe au Bac STI</span>
        </div>
        <div class="attr-tags-list">
          ${item.values.map(val => `<span class="attr-tag" style="color:#c084fc; background:rgba(168, 85, 247, 0.1); border-color:rgba(168, 85, 247, 0.35); font-weight:600; font-size:0.85rem;">${escapeHtml(val)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <!-- 1. Description & Rôle au Bac -->
    <div class="modal-section">
      <div class="modal-section-title purple">
        <span>📖</span>
        <span>Description & Rôle au Bac STI</span>
      </div>
      <p class="modal-text" style="font-size:0.98rem; line-height:1.65;">
        ${escapeHtml(item.description || item.summary)}
      </p>
    </div>

    <!-- 2. Comment utiliser au Bac -->
    <div class="modal-section">
      <div class="modal-section-title purple">
        <span>📘</span>
        <span>Comment utiliser (Syntaxe & Usage)</span>
      </div>
      <p class="modal-text" style="font-family:Consolas, Monaco, monospace; background:var(--bg-canvas); padding:10px 14px; border-radius:6px; border:1px solid var(--border-color); color:#a855f7; font-weight:600;">
        ${escapeHtml(item.howToUse || item.syntax || '')}
      </p>
    </div>

    <!-- 3. Valeurs & Règles Clés -->
    ${valuesHtml}

    <!-- 4. Définition officielle de l'Annexe -->
    <div class="modal-section">
      <div class="modal-section-title purple">
        <span>🎯</span>
        <span>Texte officiel de l'Annexe Bac STI</span>
      </div>
      <p class="modal-text" style="font-style:italic; color:var(--text-secondary); background:rgba(101, 163, 13, 0.08); padding:10px 14px; border-radius:6px; border-left:4px solid #65a30d;">
        ${escapeHtml(item.summary)}
      </p>
    </div>

    <!-- 5. Code SQL d'exemple -->
    <div class="modal-section">
      <div class="modal-section-title purple">
        <span>💻</span>
        <span>Code SQL d'exemple (Conforme MySQL / phpMyAdmin)</span>
      </div>
      <div class="code-container">
        <div class="code-header">
          <span>REQUETE_BAC.SQL</span>
          <button class="copy-code-btn" onclick="copyCode(this, \`${escapeJsString(item.code)}\`)">Copier le code</button>
        </div>
        <pre class="code-pre"><code>${escapeHtml(item.code)}</code></pre>
      </div>
    </div>

    <!-- 6. Laboratoire & Simulateur MySQL Dédié Bac STI -->
    ${buildSqlInteractiveStage(item)}
  `;

  modal.classList.add('active');

  // Auto-exécution pour affichage instantané de la table MySQL
  setTimeout(() => {
    executeSqlSimFromInput();
  }, 40);
}

function buildSqlInteractiveStage(item) {
  const defaultQuery = item.simQuery || `SELECT * FROM ${item.simTable || 'Eleve'};`;
  return `
    <div class="modal-section">
      <div class="modal-section-title purple">
        <span>🗄️</span>
        <span>Console Interactive MySQL / phpMyAdmin (Baccalauréat STI)</span>
      </div>
      <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:12px; line-height:1.5;">
        Testez en direct cette commande SQL sur la base d'examen scolaire (tables <code>Eleve</code> et <code>Matiere</code>). Vous pouvez modifier la requête ou choisir un scénario type :
      </p>
      
      <!-- Boutons de requêtes types Bac STI -->
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
        ${item.simQuery ? `<button type="button" class="sql-quick-btn" onclick="setSqlSimQuery(\`${escapeJsString(item.simQuery)}\`)">🎯 Requête Type : ${escapeHtml(item.name)}</button>` : ''}
        <button type="button" class="sql-quick-btn" onclick="setSqlSimQuery('SELECT * FROM Eleve;')">📋 Table Eleve (Tous les élèves)</button>
        <button type="button" class="sql-quick-btn" onclick="setSqlSimQuery('SELECT * FROM Matiere;')">📚 Table Matiere (Matières & Coefs)</button>
        <button type="button" class="sql-quick-btn" onclick="setSqlSimQuery('SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne >= 10.00 ORDER BY moyenne DESC;')">🏆 Élèves admis (moyenne >= 10)</button>
      </div>

      <!-- Éditeur de requête -->
      <div style="position:relative;">
        <textarea id="sqlPlaygroundInput" class="sql-query-editor" rows="3" spellcheck="false">${escapeHtml(defaultQuery)}</textarea>
      </div>

      <!-- Boutons d'action -->
      <div style="display:flex; gap:10px; margin-top:10px; flex-wrap:wrap; align-items:center;">
        <button type="button" onclick="executeSqlSimFromInput()" style="background: linear-gradient(135deg, #7c3aed, #9333ea); color: #fff; border:none; padding:10px 22px; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.92rem; display:inline-flex; align-items:center; gap:8px; box-shadow: 0 2px 8px rgba(124,58,237,0.3);">
          <span>🚀</span>
          <span>Exécuter la requête SQL</span>
        </button>
        <button type="button" onclick="resetSqlSimTable()" style="background: var(--bg-card); color: var(--text-secondary); border:1px solid var(--border-color); padding:10px 16px; border-radius:6px; font-weight:600; cursor:pointer; font-size:0.85rem;">
          <span>🔄</span>
          <span>Réinitialiser les données d'origine</span>
        </button>
      </div>

      <!-- Statut & Résultat style phpMyAdmin -->
      <div id="sqlSimStatusBox"></div>
      <div id="sqlSimResultWrap" class="sql-result-table-wrap" style="display:none;"></div>

      ${item.simDescription ? `
        <div style="margin-top:12px; font-size:0.85rem; color:var(--text-muted); padding:10px 14px; background:rgba(168, 85, 247, 0.08); border-left:3px solid #a855f7; border-radius:0 6px 6px 0;">
          💡 <strong>Explication Bac STI :</strong> ${escapeHtml(item.simDescription)}
        </div>
      ` : ''}
    </div>
  `;
}

function setSqlSimQuery(query) {
  const input = document.getElementById('sqlPlaygroundInput');
  if (input) {
    input.value = query;
    executeSqlSimFromInput();
  }
}

function resetSqlSimTable() {
  virtualSqlDb = JSON.parse(JSON.stringify(SQL_DATABASE_INIT));
  const statusBox = document.getElementById('sqlSimStatusBox');
  if (statusBox) {
    statusBox.innerHTML = `
      <div class="sql-status-banner info">
        <span>🔄</span>
        <span>Base de données réinitialisée aux données scolaires d'origine (Eleve et Matiere).</span>
      </div>
    `;
  }
  executeSqlSimFromInput();
}

function executeSqlSimFromInput() {
  const input = document.getElementById('sqlPlaygroundInput');
  const statusBox = document.getElementById('sqlSimStatusBox');
  const resultWrap = document.getElementById('sqlSimResultWrap');
  if (!input || !statusBox || !resultWrap) return;

  const rawQuery = input.value.trim();
  if (!rawQuery) {
    statusBox.innerHTML = `
      <div class="sql-status-banner info">
        <span>⚠️</span>
        <span>Veuillez saisir une commande ou requête SQL à exécuter.</span>
      </div>
    `;
    resultWrap.style.display = 'none';
    return;
  }

  const res = runVirtualSqlQuery(rawQuery, virtualSqlDb);

  if (!res.success) {
    statusBox.innerHTML = `
      <div class="sql-status-banner" style="background:rgba(239, 68, 68, 0.15); color:#f87171; border:1px solid rgba(239, 68, 68, 0.35);">
        <span>❌</span>
        <span><strong>Erreur MySQL :</strong> ${escapeHtml(res.message || 'Syntaxe SQL invalide')}</span>
      </div>
    `;
    resultWrap.style.display = 'none';
    return;
  }

  statusBox.innerHTML = `
    <div class="sql-status-banner success">
      <span>✓</span>
      <span><strong>MySQL a retourné un résultat :</strong> ${escapeHtml(res.message)} (Traitement en ${escapeHtml(res.execTime || '0.0004 sec')})</span>
    </div>
  `;

  if (res.headers && res.headers.length > 0) {
    let theadHtml = res.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('');
    let tbodyHtml = '';

    if (res.rows && res.rows.length > 0) {
      tbodyHtml = res.rows.map(row => {
        let cells = row.map(cell => {
          let str = cell === null || cell === undefined ? '<em>NULL</em>' : escapeHtml(String(cell));
          return `<td>${str}</td>`;
        }).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
    } else {
      tbodyHtml = `<tr><td colspan="${res.headers.length}" style="text-align:center; padding:18px; color:var(--text-muted); font-style:italic;">Aucun enregistrement ne correspond à cette requête (0 ligne).</td></tr>`;
    }

    resultWrap.innerHTML = `
      <table class="sql-result-table">
        <thead>
          <tr>${theadHtml}</tr>
        </thead>
        <tbody>
          ${tbodyHtml}
        </tbody>
      </table>
    `;
    resultWrap.style.display = 'block';
  } else {
    resultWrap.style.display = 'none';
  }
}

function runVirtualSqlQuery(query, db) {
  if (!query || typeof query !== 'string') return { success: false, message: 'Requête vide.' };
  const cleanQ = query.replace(/--.*$/gm, '').trim().replace(/;+$/, '').trim();
  if (!cleanQ) return { success: false, message: 'Requête SQL vide.' };

  const execTime = (Math.random() * 0.0006 + 0.0002).toFixed(4) + ' sec';

  function evalNow() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }
  function evalDate(str) {
    if (!str || str === 'NOW()') return evalNow().split(' ')[0];
    return String(str).split(' ')[0];
  }
  function evalDay(str) {
    const d = new Date(evalDate(str));
    return isNaN(d.getTime()) ? 1 : d.getDate();
  }
  function evalMonth(str) {
    const d = new Date(evalDate(str));
    return isNaN(d.getTime()) ? 1 : d.getMonth() + 1;
  }
  function evalYear(str) {
    const d = new Date(evalDate(str));
    return isNaN(d.getTime()) ? 2026 : d.getFullYear();
  }
  function evalAddDate(str, days) {
    const d = new Date(evalDate(str));
    d.setDate(d.getDate() + Number(days));
    const pad = n => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function evalDateDiff(d1, d2) {
    const date1 = new Date(evalDate(d1));
    const date2 = new Date(evalDate(d2));
    const diffTime = date1.getTime() - date2.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  const upper = cleanQ.toUpperCase();
  if (upper.startsWith('CREATE DATABASE')) {
    return { success: true, message: 'Base de données créée avec succès.', headers: ['Statut'], rows: [['Base de données créée avec succès.']], execTime };
  }
  if (upper.startsWith('DROP DATABASE')) {
    return { success: true, message: 'Base de données supprimée avec succès.', headers: ['Statut'], rows: [['Base de données supprimée.']], execTime };
  }
  if (upper.startsWith('CREATE TABLE')) {
    const match = cleanQ.match(/CREATE\s+TABLE\s+([a-zA-Z0-9_]+)/i);
    const tbl = match ? match[1] : 'NouvelleTable';
    if (!db[tbl]) db[tbl] = [];
    return { success: true, message: 'Table ' + tbl + ' créée avec succès.', headers: ['Statut'], rows: [['Table ' + tbl + ' créée avec succès.']], execTime };
  }
  if (upper.startsWith('DROP TABLE')) {
    const match = cleanQ.match(/DROP\s+TABLE\s+([a-zA-Z0-9_]+)/i);
    const tbl = match ? match[1] : 'Table';
    delete db[tbl];
    return { success: true, message: 'Table ' + tbl + ' supprimée avec succès.', headers: ['Statut'], rows: [['Table ' + tbl + ' supprimée.']], execTime };
  }
  if (upper.startsWith('ALTER TABLE')) {
    return { success: true, message: 'Table modifiée avec succès (ALTER TABLE).', headers: ['Statut'], rows: [['Structure de table modifiée avec succès.']], execTime };
  }
  if (upper.startsWith('INSERT INTO')) {
    const match = cleanQ.match(/INSERT\s+INTO\s+([a-zA-Z0-9_]+)/i);
    const tbl = match ? match[1] : 'Eleve';
    if (!db[tbl]) db[tbl] = [];
    return { success: true, message: '1 ligne insérée dans ' + tbl + '.', headers: ['Statut', 'Lignes affectées'], rows: [['Insertion réussie dans ' + tbl, 1]], execTime };
  }
  if (upper.startsWith('UPDATE')) {
    return { success: true, message: 'Lignes mises à jour avec succès.', headers: ['Statut', 'Lignes modifiées'], rows: [['Mise à jour réussie', 1]], execTime };
  }
  if (upper.startsWith('DELETE FROM') || upper.startsWith('DELETE')) {
    return { success: true, message: 'Lignes supprimées avec succès.', headers: ['Statut', 'Lignes supprimées'], rows: [['Suppression réussie', 1]], execTime };
  }

  // SELECT without FROM (e.g. SELECT NOW() AS x)
  if (upper.startsWith('SELECT') && !upper.includes(' FROM ')) {
    const exprPart = cleanQ.replace(/^SELECT\s+/i, '');
    const cols = exprPart.split(',').map(s => s.trim());
    const headers = [];
    const row = [];
    cols.forEach(colExpr => {
      let alias = colExpr;
      let expr = colExpr;
      if (/ AS /i.test(colExpr)) {
        const parts = colExpr.split(/ AS /i);
        expr = parts[0].trim();
        alias = parts[1].trim();
      }
      alias = alias.replace(/['"`]/g, '');
      headers.push(alias);
      if (/'([^']*)'/.test(expr)) {
        row.push(expr.replace(/^'|'$/g, ''));
      } else if (/NOW\(\)/i.test(expr)) {
        row.push(evalNow());
      } else if (/YEAR\(/i.test(expr)) {
        row.push(2026);
      } else {
        row.push(expr);
      }
    });
    return { success: true, message: '1 ligne retournée.', headers, rows: [row], execTime };
  }

  // SELECT with FROM
  if (upper.startsWith('SELECT')) {
    let fromTbl = 'Eleve';
    const fromMatch = cleanQ.match(/FROM\s+([a-zA-Z0-9_]+)/i);
    if (fromMatch) fromTbl = fromMatch[1];
    let sourceData = db[fromTbl] || db['Eleve'] || [];
    let resultRows = [...sourceData];

    // Filter WHERE
    if (/WHERE\s+(.*?)(ORDER\s+BY|GROUP\s+BY|LIMIT|$)/i.test(cleanQ)) {
      const whereClause = cleanQ.match(/WHERE\s+(.*?)(ORDER\s+BY|GROUP\s+BY|LIMIT|$)/i)[1].trim();
      resultRows = resultRows.filter(r => {
        try {
          if (/num_inscr\s*>\s*(\d+)/i.test(whereClause)) {
            const val = parseInt(whereClause.match(/num_inscr\s*>\s*(\d+)/i)[1]);
            if (r.num_inscr <= val) return false;
          }
          if (/num_inscr\s*=\s*(\d+)/i.test(whereClause)) {
            const val = parseInt(whereClause.match(/num_inscr\s*=\s*(\d+)/i)[1]);
            if (r.num_inscr !== val) return false;
          }
          if (/section\s*=\s*'([^']+)'/i.test(whereClause)) {
            const val = whereClause.match(/section\s*=\s*'([^']+)'/i)[1];
            if (r.section !== val) return false;
          }
          if (/NOT\s*\(\s*section\s*=\s*'([^']+)'\s*\)/i.test(whereClause)) {
            const val = whereClause.match(/NOT\s*\(\s*section\s*=\s*'([^']+)'\s*\)/i)[1];
            if (r.section === val) return false;
          }
          if (/ville\s*=\s*'([^']+)'/i.test(whereClause) && !/OR\s+ville/i.test(whereClause)) {
            const val = whereClause.match(/ville\s*=\s*'([^']+)'/i)[1];
            if (r.ville !== val) return false;
          }
          if (/ville\s*=\s*'([^']+)'\s+OR\s+ville\s*=\s*'([^']+)'/i.test(whereClause)) {
            const m = whereClause.match(/ville\s*=\s*'([^']+)'\s+OR\s+ville\s*=\s*'([^']+)'/i);
            if (r.ville !== m[1] && r.ville !== m[2]) return false;
          }
          if (/ville\s*<>\s*'([^']+)'/i.test(whereClause)) {
            const val = whereClause.match(/ville\s*<>\s*'([^']+)'/i)[1];
            if (r.ville === val) return false;
          }
          if (/moyenne\s*>=\s*([\d\.]+)/i.test(whereClause)) {
            const val = parseFloat(whereClause.match(/moyenne\s*>=\s*([\d\.]+)/i)[1]);
            if (r.moyenne < val) return false;
          }
          if (/moyenne\s*>\s*([\d\.]+)/i.test(whereClause)) {
            const val = parseFloat(whereClause.match(/moyenne\s*>\s*([\d\.]+)/i)[1]);
            if (r.moyenne <= val) return false;
          }
          if (/moyenne\s*<=\s*([\d\.]+)/i.test(whereClause)) {
            const val = parseFloat(whereClause.match(/moyenne\s*<=\s*([\d\.]+)/i)[1]);
            if (r.moyenne > val) return false;
          }
          if (/moyenne\s*<\s*([\d\.]+)/i.test(whereClause)) {
            const val = parseFloat(whereClause.match(/moyenne\s*<\s*([\d\.]+)/i)[1]);
            if (r.moyenne >= val) return false;
          }
          if (/BETWEEN\s+([\d\.]+)\s+AND\s+([\d\.]+)/i.test(whereClause)) {
            const m = whereClause.match(/BETWEEN\s+([\d\.]+)\s+AND\s+([\d\.]+)/i);
            const low = parseFloat(m[1]), high = parseFloat(m[2]);
            if (r.moyenne < low || r.moyenne > high) return false;
          }
          if (/IN\s*\(([^)]+)\)/i.test(whereClause)) {
            const listStr = whereClause.match(/IN\s*\(([^)]+)\)/i)[1];
            const list = listStr.split(',').map(s => s.trim().replace(/^'|'$/g, ''));
            if (!list.includes(r.ville) && !list.includes(String(r.num_inscr))) return false;
          }
          if (/LIKE\s*'([^']+)'/i.test(whereClause)) {
            const pat = whereClause.match(/LIKE\s*'([^']+)'/i)[1];
            const regex = new RegExp('^' + pat.replace(/%/g, '.*').replace(/_/g, '.') + '$', 'i');
            if (!regex.test(r.nom) && !regex.test(r.prenom)) return false;
          }
          if (/MONTH\(date_naiss\)\s*=\s*(\d+)/i.test(whereClause)) {
            const m = parseInt(whereClause.match(/MONTH\(date_naiss\)\s*=\s*(\d+)/i)[1]);
            if (evalMonth(r.date_naiss) !== m) return false;
          }
          if (/code_mat\s*=\s*'([^']+)'/i.test(whereClause)) {
            const val = whereClause.match(/code_mat\s*=\s*'([^']+)'/i)[1];
            if (r.code_mat !== val) return false;
          }
          return true;
        } catch(e) { return true; }
      });
    }

    // Aggregates like COUNT, AVG, MAX, MIN, SUM
    if (/(COUNT|AVG|MAX|MIN|SUM)\(/i.test(cleanQ) && !/GROUP\s+BY/i.test(cleanQ)) {
      const headers = [];
      const row = [];
      if (/COUNT\(\*\)/i.test(cleanQ)) {
        headers.push('total_eleves');
        row.push(resultRows.length);
      }
      if (/COUNT\s*\(\s*CASE/i.test(cleanQ)) {
        headers.push('nb_admis');
        const admis = resultRows.filter(r => (r.moyenne || 0) >= 10).length;
        row.push(admis);
      }
      if (/AVG\(moyenne\)/i.test(cleanQ)) {
        headers.push('moyenne_classe');
        const avg = resultRows.reduce((a, b) => a + (b.moyenne || 0), 0) / (resultRows.length || 1);
        row.push(avg.toFixed(2));
      }
      if (/MAX\(moyenne\)/i.test(cleanQ)) {
        headers.push('meilleure_moyenne');
        const max = Math.max(...resultRows.map(r => r.moyenne || 0));
        row.push(max.toFixed(2));
      }
      if (/MIN\(moyenne\)/i.test(cleanQ)) {
        headers.push('plus_faible_moyenne');
        const min = Math.min(...resultRows.map(r => r.moyenne || 0));
        row.push(min.toFixed(2));
      }
      if (/SUM\(coef\)/i.test(cleanQ)) {
        headers.push('total_coefficients');
        const sum = (db['Matiere'] || []).reduce((a, b) => a + (b.coef || 0), 0);
        row.push(sum);
      }
      if (headers.length > 0) {
        return { success: true, message: '1 ligne retournée.', headers, rows: [row], execTime };
      }
    }

    // GROUP BY section
    if (/GROUP\s+BY\s+section/i.test(cleanQ)) {
      const groups = {};
      resultRows.forEach(r => {
        const sec = r.section || 'Autre';
        if (!groups[sec]) groups[sec] = [];
        groups[sec].push(r);
      });
      const headers = ['section', 'moyenne_section'];
      const rows = Object.keys(groups).map(sec => {
        const list = groups[sec];
        const avg = list.reduce((a, b) => a + (b.moyenne || 0), 0) / (list.length || 1);
        return [sec, avg.toFixed(2)];
      });
      return { success: true, message: rows.length + ' ligne(s) retournée(s).', headers, rows, execTime };
    }

    // ORDER BY
    if (/ORDER\s+BY\s+([a-zA-Z0-9_]+)(\s+(ASC|DESC))?/i.test(cleanQ)) {
      const m = cleanQ.match(/ORDER\s+BY\s+([a-zA-Z0-9_]+)(\s+(ASC|DESC))?/i);
      const col = m[1];
      const desc = (m[3] || '').toUpperCase() === 'DESC';
      resultRows.sort((a, b) => {
        if (a[col] < b[col]) return desc ? 1 : -1;
        if (a[col] > b[col]) return desc ? -1 : 1;
        return 0;
      });
    }

    // LIMIT
    if (/LIMIT\s+(\d+)/i.test(cleanQ)) {
      const lim = parseInt(cleanQ.match(/LIMIT\s+(\d+)/i)[1]);
      resultRows = resultRows.slice(0, lim);
    }

    // Projections
    let headers = [];
    let rows = [];
    const selectMatch = cleanQ.match(/SELECT\s+(DISTINCT\s+)?(.*?)\s+FROM/i);
    const selectPart = selectMatch ? selectMatch[2].trim() : '*';
    if (selectPart === '*' || selectPart.includes('Eleve.*')) {
      if (resultRows.length > 0) {
        headers = Object.keys(resultRows[0]);
        rows = resultRows.map(r => Object.values(r));
      } else {
        headers = ['num_inscr', 'nom', 'prenom', 'section', 'moyenne', 'date_naiss', 'ville'];
      }
    } else {
      const cols = selectPart.split(',').map(s => s.trim());
      headers = cols.map(c => {
        if (/ AS /i.test(c)) return c.split(/ AS /i)[1].trim();
        return c.replace(/^[a-zA-Z0-9_]+\./, '');
      });
      rows = resultRows.map(r => {
        return cols.map(c => {
          let expr = c;
          if (/ AS /i.test(c)) expr = c.split(/ AS /i)[0].trim();
          expr = expr.replace(/^[a-zA-Z0-9_]+\./, '');
          if (expr === 'YEAR(NOW()) - YEAR(date_naiss)') {
            return 2026 - evalYear(r.date_naiss);
          }
          if (expr === 'DAY(date_naiss)') return evalDay(r.date_naiss);
          if (expr === 'MONTH(date_naiss)') return evalMonth(r.date_naiss);
          if (expr === 'YEAR(date_naiss)') return evalYear(r.date_naiss);
          if (expr === 'DATE(NOW())') return evalDate('NOW()');
          if (expr === 'NOW()') return evalNow();
          if (expr === "'mohamed@lycee.tn'") return 'mohamed@lycee.tn';
          if (expr === 'DATEDIFF(NOW(), date_naiss)') return evalDateDiff('NOW()', r.date_naiss);
          if (expr === 'ADDDATE(date_naiss, 365)') return evalAddDate(r.date_naiss, 365);
          if (r[expr] !== undefined) return r[expr];
          return expr;
        });
      });
    }

    return {
      success: true,
      message: resultRows.length + ' ligne(s) retournée(s).',
      headers,
      rows,
      execTime
    };
  }

  return { success: true, message: 'Requête exécutée avec succès.', headers: ['Résultat'], rows: [['OK']], execTime };
}

function closeModal() {
  document.getElementById('detailsModal').classList.remove('active');
  if (activeVideoTimer) clearInterval(activeVideoTimer);
}

// Forcer l'affichage de l'état AVANT (phase 0) ou APRÈS (phase 1)
function forceVideoPhase(phase) {
  if (activeVideoTimer) clearInterval(activeVideoTimer);
  isVideoPlaying = false;
  const playBtn = document.getElementById('playPauseVideoBtn');
  if (playBtn) playBtn.textContent = '▶';
  const stage = document.getElementById('videoStage');
  const box = stage ? (stage.querySelector('#boite') || stage.querySelector('.demo-box') || stage.querySelector('#h1') || stage.querySelector('#tab') || stage.querySelector('#img1') || stage.querySelector('#liste') || stage.firstElementChild) : null;
  applyVideoFrame(currentVideoItemId, box, phase, currentVideoVariantIdx);
}

// Scène interactive dédiée pour les 12 Sélecteurs CSS (Document HTML & Démonstration Avant/Après)
function buildSelectorsStage(itemId) {
  if (itemId === 'css-sel-universal') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>page_web.html (Document complet)</span>
        <span style="font-family:monospace; color:#38bdf8;">*</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="all">&lt;h1 id="titre"&gt;Titre du document&lt;/h1&gt;<span class="selector-badge-target">🎯 CIBLÉ (*)</span></div>
        <div class="selector-target-item" data-sel-match="all">&lt;p class="texte"&gt;Premier paragraphe&lt;/p&gt;<span class="selector-badge-target">🎯 CIBLÉ (*)</span></div>
        <div class="selector-target-item" data-sel-match="all">&lt;div id="boite"&gt;Boîte de division &lt;div&gt;&lt;/div&gt;<span class="selector-badge-target">🎯 CIBLÉ (*)</span></div>
        <div class="selector-target-item" data-sel-match="all">&lt;a id="lien" href="#"&gt;Lien hypertexte &lt;a&gt;&lt;/a&gt;<span class="selector-badge-target">🎯 CIBLÉ (*)</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Style HTML brut)</div>
    </div>`;
  }

  if (itemId === 'css-sel-element') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>page_web.html</span>
        <span style="font-family:monospace; color:#38bdf8;">Sélecteur : p</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="no">&lt;h1&gt;Titre principal (&lt;h1&gt;)&lt;/h1&gt;<span class="selector-badge-target">❌ Ignoré</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;p&gt;Paragraphe 1 de contenu (&lt;p&gt;)&lt;/p&gt;<span class="selector-badge-target">🎯 CIBLÉ (p)</span></div>
        <div class="selector-target-item" data-sel-match="no">&lt;div id="boite"&gt;Boîte de division (&lt;div&gt;)&lt;/div&gt;<span class="selector-badge-target">❌ Ignoré</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;p&gt;Paragraphe 2 de contenu (&lt;p&gt;)&lt;/p&gt;<span class="selector-badge-target">🎯 CIBLÉ (p)</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Style HTML brut)</div>
    </div>`;
  }

  if (itemId === 'css-sel-id') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>page_web.html</span>
        <span style="font-family:monospace; color:#38bdf8;">Sélecteur : #boite</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="no">&lt;div id="menu"&gt;Menu supérieur (id="menu")&lt;/div&gt;<span class="selector-badge-target">❌ Ignoré</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;div id="boite"&gt;Boîte centrale unique (id="boite")&lt;/div&gt;<span class="selector-badge-target">🎯 CIBLÉ (#boite)</span></div>
        <div class="selector-target-item" data-sel-match="no">&lt;div id="footer"&gt;Pied de page (id="footer")&lt;/div&gt;<span class="selector-badge-target">❌ Ignoré</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Style HTML brut)</div>
    </div>`;
  }

  if (itemId === 'css-sel-class') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>page_web.html</span>
        <span style="font-family:monospace; color:#38bdf8;">Sélecteur : .important</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="yes">&lt;h2 class="important"&gt;Titre marqué .important&lt;/h2&gt;<span class="selector-badge-target">🎯 CIBLÉ (.important)</span></div>
        <div class="selector-target-item" data-sel-match="no">&lt;p&gt;Paragraphe ordinaire sans classe&lt;/p&gt;<span class="selector-badge-target">❌ Ignoré</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;p class="important"&gt;Paragraphe urgent marqué .important&lt;/p&gt;<span class="selector-badge-target">🎯 CIBLÉ (.important)</span></div>
        <div class="selector-target-item" data-sel-match="no">&lt;div&gt;Bloc sans classe&lt;/div&gt;<span class="selector-badge-target">❌ Ignoré</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Style HTML brut)</div>
    </div>`;
  }

  if (itemId === 'css-sel-element-attr') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>formulaire.html</span>
        <span style="font-family:monospace; color:#38bdf8;">Sélecteur : input[required]</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="no">&lt;input type="text" placeholder="Prénom (facultatif)"&gt;<span class="selector-badge-target">❌ Ignoré (Pas required)</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;input type="email" required placeholder="Email (obligatoire)"&gt;<span class="selector-badge-target">🎯 CIBLÉ [required]</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;input type="password" required placeholder="Mot de passe"&gt;<span class="selector-badge-target">🎯 CIBLÉ [required]</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Champs de formulaire bruts)</div>
    </div>`;
  }

  if (itemId === 'css-sel-element-attr-val') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>formulaire.html</span>
        <span style="font-family:monospace; color:#38bdf8;">Sélecteur : input[type="submit"]</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="no">&lt;input type="text" value="Ali"&gt;<span class="selector-badge-target">❌ Ignoré (type="text")</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;input type="submit" value="Envoyer le formulaire"&gt;<span class="selector-badge-target">🎯 CIBLÉ [type="submit"]</span></div>
        <div class="selector-target-item" data-sel-match="no">&lt;input type="reset" value="Annuler"&gt;<span class="selector-badge-target">❌ Ignoré (type="reset")</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Champs bruts)</div>
    </div>`;
  }

  if (itemId === 'css-sel-element-class') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>page_web.html</span>
        <span style="font-family:monospace; color:#38bdf8;">Sélecteur : p.important</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="no">&lt;h1 class="important"&gt;Titre marqué .important&lt;/h1&gt;<span class="selector-badge-target">❌ Ignoré (Ce n'est pas un &lt;p&gt;)</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;p class="important"&gt;Paragraphe AVEC classe .important&lt;/p&gt;<span class="selector-badge-target">🎯 CIBLÉ (p.important)</span></div>
        <div class="selector-target-item" data-sel-match="no">&lt;p&gt;Paragraphe ordinaire sans classe&lt;/p&gt;<span class="selector-badge-target">❌ Ignoré (Pas de classe)</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Style HTML brut)</div>
    </div>`;
  }

  if (itemId === 'css-sel-grouped') {
    return `<div class="selector-doc-container">
      <div class="selector-doc-bar">
        <div class="selector-doc-dots"><span class="doc-dot red"></span><span class="doc-dot yellow"></span><span class="doc-dot green"></span></div>
        <span>page_web.html</span>
        <span style="font-family:monospace; color:#38bdf8;">Sélecteurs groupés : h1, p</span>
      </div>
      <div class="selector-doc-content" id="selDocContent">
        <div class="selector-target-item" data-sel-match="yes">&lt;h1 id="titre"&gt;Titre du document (&lt;h1&gt;)&lt;/h1&gt;<span class="selector-badge-target">🎯 CIBLÉ (h1)</span></div>
        <div class="selector-target-item" data-sel-match="yes">&lt;p&gt;Paragraphe de texte (&lt;p&gt;)&lt;/p&gt;<span class="selector-badge-target">🎯 CIBLÉ (p)</span></div>
        <div class="selector-target-item" data-sel-match="no">&lt;div id="boite"&gt;Boîte de division (&lt;div&gt;)&lt;/div&gt;<span class="selector-badge-target">❌ Ignoré (Non listé dans h1, p)</span></div>
      </div>
      <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Aucun élément ciblé (Style HTML brut)</div>
    </div>`;
  }

  if (itemId === 'css-sel-hover') {
    return `<div style="position:relative; width:95%; height:190px; display:flex; align-items:center; justify-content:center;">
      <div id="virtualCursor" class="virtual-mouse-cursor" style="top:20px; right:40px;">🖱️</div>
      <div id="boite" class="demo-box" style="padding:18px 26px; border:2px solid #334155; background:#1e293b; color:#94a3b8; transition:all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);">
        <span>&lt;div id="boite"&gt; • <strong>Survolez-moi !</strong></span>
        <div id="hoverStatusText" style="font-size:0.75rem; margin-top:5px; color:#64748b;">Curseur éloigné (Repos)</div>
      </div>
    </div>`;
  }

  if (itemId === 'css-sel-active') {
    return `<div style="position:relative; width:95%; height:190px; display:flex; align-items:center; justify-content:center;">
      <div id="virtualCursor" class="virtual-mouse-cursor" style="top:25px; right:45px;">🖱️</div>
      <div id="boite" class="demo-box" style="padding:16px 28px; border:2px solid #38bdf8; background:#0284c7; color:#fff; cursor:pointer; transition:all 0.25s ease;">
        <span>🔘 &lt;button id="boite"&gt; • <strong>Cliquez-moi !</strong></span>
        <div id="activeStatusText" style="font-size:0.75rem; margin-top:5px; color:#bae6fd;">Bouton relâché (Repos)</div>
      </div>
    </div>`;
  }

  if (itemId === 'css-sel-link' || itemId === 'css-sel-visited') {
    const isVisited = itemId === 'css-sel-visited';
    return `<div style="text-align:center; padding:20px;">
      <div style="font-size:0.8rem; color:#94a3b8; margin-bottom:12px;">État du lien hypertexte &lt;a id="lien"&gt; :</div>
      <a id="lien" href="javascript:void(0)" style="font-size:1.2rem; transition:all 0.4s ease; text-decoration:underline; color:#60a5fa;">
        🔗 ${isVisited ? 'Lien Déjà Visité (Historique consulté)' : 'Lien Neuf Non Visité (a:link)'}
      </a>
      <div id="linkStatusText" style="margin-top:12px; font-size:0.8rem; color:#64748b;">🔴 AVANT : Style de lien brut par défaut du navigateur</div>
    </div>`;
  }

  // Fallback sélecteurs
  return `<div class="selector-doc-container">
    <div class="selector-doc-bar"><span>page_web.html</span><span style="color:#38bdf8;">Sélecteur CSS</span></div>
    <div class="selector-doc-content" id="selDocContent">
      <div class="selector-target-item" data-sel-match="yes">&lt;div id="boite"&gt;Élément ciblé&lt;/div&gt;<span class="selector-badge-target">🎯 CIBLÉ</span></div>
      <div class="selector-target-item" data-sel-match="no">&lt;div id="autre"&gt;Élément non ciblé&lt;/div&gt;<span class="selector-badge-target">❌ Ignoré</span></div>
    </div>
    <div class="selector-banner-status" id="selBannerStatus">🔴 AVANT : Style brut</div>
  </div>`;
}

// -------------------------------------------------------------
// 7. MOTEUR DU SIMULATEUR VIDÉO POUR CSS3 (CONVENTION BAC STI)
// -------------------------------------------------------------
function buildVideoStageElement(item) {
  const cat = item.category || '';
  const prop = item.property || '';
  const itemId = item.id || '';

  // 0. Sélecteurs CSS
  if (itemId.startsWith('css-sel-')) {
    return buildSelectorsStage(itemId);
  }

  // 0.1 Animation: @keyframes et propriétés animation-*
  if (itemId === 'css-keyframes' || itemId.startsWith('css-animation')) {
    return `<div id="keyframesStageContainer" class="keyframes-stage-container">
      <div class="keyframes-timeline-bar">
        <div class="kf-step-marker step-0 active" id="kfMarker0">
          <span class="kf-pct">0%</span>
          <span class="kf-desc">Départ</span>
        </div>
        <div class="kf-connector" id="kfConn1"></div>
        <div class="kf-step-marker step-50" id="kfMarker50">
          <span class="kf-pct">50%</span>
          <span class="kf-desc">Milieu</span>
        </div>
        <div class="kf-connector" id="kfConn2"></div>
        <div class="kf-step-marker step-100" id="kfMarker100">
          <span class="kf-pct">100%</span>
          <span class="kf-desc">Arrivée</span>
        </div>
      </div>

      <div class="keyframes-arena">
        <div id="boite" class="keyframes-animated-box">
          <span id="kfBoxIcon" style="font-size:1.4rem; display:block; margin-bottom:4px;">✨</span>
          <div id="kfBoxLabel" style="font-weight:800; font-size:1.05rem;">#boite</div>
          <div id="kfBoxSub" style="font-size:0.75rem; opacity:0.85;">@keyframes en cours</div>
        </div>
      </div>

      <div id="keyframesLiveStatus" class="keyframes-live-status">
        <span class="kf-live-dot">●</span>
        <span id="keyframesStatusText">ÉTAT : 0% (Départ de l'animation)</span>
      </div>
    </div>`;
  }

  // 0.2 Transitions: transition-*
  if (itemId.startsWith('css-transition')) {
    return `<div class="transition-stage-container" style="display:flex; flex-direction:column; align-items:center; gap:12px; width:100%;">
      <div style="font-size:0.82rem; color:var(--text-secondary); background:rgba(56,189,248,0.08); padding:6px 14px; border-radius:20px; border:1px solid rgba(56,189,248,0.25);">
        🖱️ Survolez la boîte ou cliquez sur AVANT / APRÈS pour observer la transition fluide
      </div>
      <div id="boite" class="demo-box" style="min-width:180px; padding:22px; display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:15px; background:#1e293b; border:2px solid #38bdf8; border-radius:10px; cursor:pointer;">
        <span>📦 &lt;div id="boite"&gt;</span>
        <small id="transitionStageBadge" style="font-size:0.75rem; color:#38bdf8; margin-top:4px;">transition: all 0.5s ease</small>
      </div>
    </div>`;
  }

  // 0.3 Dimensions & Opacité (width, height, opacity)
  if (itemId === 'css-width' || itemId === 'css-height' || itemId === 'css-opacity') {
    return `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:190px;">
      <div id="boite" class="demo-box" style="transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); width:150px; height:80px; padding:10px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:14px; background:#1e293b; border:2px solid #38bdf8; border-radius:8px;">
        <span>📦 &lt;div id="boite"&gt;</span>
      </div>
    </div>`;
  }

  // 0.4 Bordures (couleur & épaisseur)
  if (itemId === 'css-border-color' || itemId === 'css-border-width') {
    return `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:190px;">
      <div id="boite" class="demo-box" style="transition: all 0.5s ease; width:220px; height:100px; padding:12px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:14px; background:#1e293b; border:3px solid #38bdf8; border-radius:8px;">
        <span>📦 &lt;div id="boite"&gt;</span>
      </div>
    </div>`;
  }

  // 0.5 Arrière-plans (background-*)
  if (itemId.startsWith('css-background')) {
    return `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:190px;">
      <div id="boite" class="demo-box" style="transition: all 0.6s ease; width:250px; height:120px; padding:14px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:14px; background-color:#1e293b; border:2px solid #38bdf8; border-radius:8px; color:#fff;">
        <span>📦 &lt;div id="boite"&gt;</span>
      </div>
    </div>`;
  }

  // 1. Marge extérieure (margin) - Repousse les voisins hors de la boîte
  if (itemId === 'css-margin' || prop === 'margin') {
    return `<div id="parentConteneur" class="box-model-container">
      <div class="box-model-legend">
        <span class="legend-badge legend-margin">🟠 Marge externe (margin)</span>
        <span class="legend-badge legend-border">🔵 Bordure (border)</span>
        <span class="legend-badge legend-content">🟣 Mon Élément (#boite)</span>
      </div>
      <div id="voisinHaut" class="box-model-sibling">⬆️ Élément Voisin Précédent (#voisinHaut)</div>
      <div id="marginVisualizer" style="display:flex; justify-content:center; width:100%; transition:all 0.6s ease;">
        <div id="boite" class="margin-stage-target" style="margin: 15px auto; transition:all 0.6s ease;">
          📦 &lt;div id="boite"&gt;
          <div id="marginIndicatorText" style="font-size:0.75rem; color:#fed7aa; margin-top:3px; font-weight:normal;">margin: 15px auto</div>
        </div>
      </div>
      <div id="voisinBas" class="box-model-sibling">⬇️ Élément Voisin Suivant (#voisinBas)</div>
    </div>`;
  }

  // 2. Marge intérieure (padding) - Espace de respiration entre texte et bordure
  if (itemId === 'css-padding' || prop === 'padding') {
    return `<div id="parentConteneur" class="box-model-container">
      <div class="box-model-legend">
        <span class="legend-badge legend-border">🔵 Bordure (#boite)</span>
        <span class="legend-badge legend-padding">🟢 Marge interne (padding)</span>
        <span class="legend-badge legend-content">📄 Contenu (#contenu)</span>
      </div>
      <div id="boite" class="padding-stage-target" style="padding: 15px; width:85%; transition:all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);">
        <div id="contenu" class="padding-stage-inner" style="width:100%;">
          📄 &lt;span id="contenu"&gt;Texte & Contenu intérieur&lt;/span&gt;
          <div id="paddingIndicatorText" style="font-size:0.75rem; color:#86efac; margin-top:3px; font-weight:normal;">padding: 15px (Aéré)</div>
        </div>
      </div>
    </div>`;
  }

  // 3. Flottement (float) - Enroulement du texte autour du bloc
  if (itemId === 'css-float' || prop === 'float') {
    return `<div id="parentConteneur" class="float-stage-container">
      <div id="boite" class="float-box" style="float: left; width: 110px; margin: 4px 14px 6px 0;">
        📦 #boite<br><small id="floatLabel">float: left</small>
      </div>
      <p id="floatText" style="margin:0; font-size:0.8rem; line-height:1.55;">
        Le texte de ce paragraphe s'enroule harmonieusement autour de l'élément &lt;div id="boite"&gt;. Au Baccalauréat STI, la propriété <strong>float</strong> permet de placer une image ou un bloc à gauche ou à droite tout en laissant le flux de texte continuer autour.
      </p>
      <div style="clear:both;"></div>
    </div>`;
  }

  // 4. Positionnement (position & coordonnées top/left/right/bottom)
  if (itemId === 'css-position' || itemId === 'css-coords-top-bottom-left-right' || prop === 'position' || prop.includes('top')) {
    return `<div id="parentConteneur" class="position-stage-container">
      <div class="position-ghost">👻 Emplacement d'origine dans le flux</div>
      <div id="boite" class="position-target" style="position: relative; top: 25px; left: 45px;">
        📍 &lt;div id="boite"&gt;<br><small id="posBadge" style="font-weight:normal; font-size:0.75rem;">position: relative (top: 25px, left: 45px)</small>
      </div>
    </div>`;
  }

  // 5. Débordement (overflow)
  if (itemId === 'css-overflow' || prop === 'overflow') {
    return `<div id="boite" class="overflow-stage-box" style="overflow: visible;">
      <strong id="overflowBadge" style="color:#38bdf8; display:block; margin-bottom:4px;">overflow: visible;</strong>
      Texte très long dans &lt;div id="boite"&gt; qui dépasse de la hauteur de 85px.
      Au Bac STI, <strong>overflow</strong> permet de masquer (hidden), d'afficher (visible) ou de créer des barres de défilement (scroll ou auto).
    </div>`;
  }

  // 6. Mode d'affichage (display)
  if (itemId === 'css-display' || prop === 'display') {
    return `<div id="parentConteneur" class="display-stage-container">
      <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:8px;">Éléments adjacents dans le flux :</div>
      <div id="elem1" class="display-elem">#elem1</div>
      <div id="boite" class="display-elem highlight" style="display:inline-block; width:130px;">#boite (Mon Élément)</div>
      <div id="elem3" class="display-elem">#elem3</div>
    </div>`;
  }

  // 8. Typographie & Texte (h1)
  if (cat === 'Propriétés de mise en forme du texte' || prop.includes('font') || prop.includes('text') || prop === 'color') {
    return `<div id="h1" class="demo-box" style="font-size:22px; font-weight:bold; transition: all 0.8s ease; text-align:center; min-width:200px; max-width:85%;">
      <span id="h1Text">Titre &lt;h1 id="h1"&gt;</span>
    </div>`;
  }

  // 9. Tableaux (table)
  if (cat === 'Propriétés des tableaux' || prop.includes('table') || prop.includes('collapse')) {
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
  }

  // 10. Images & Filtres
  if (cat === 'Propriétés des images' || prop.includes('filter')) {
    return `<div id="img1" style="width:150px; height:90px; background:linear-gradient(135deg, #f97316, #ef4444); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold; transition:all 0.8s ease; box-shadow:0 4px 10px rgba(0,0,0,0.3); font-size:13px;">
      &lt;img id="img1"&gt;
    </div>`;
  }

  // 11. Liens
  if (prop.includes('a:') || prop.includes('link') || prop.includes('visited') || prop.includes('active')) {
    return `<a id="lien" href="javascript:void(0)" class="demo-box" style="text-decoration:none; transition:all 0.6s ease; font-size:16px;">
      🔗 Lien &lt;a id="lien"&gt;
    </a>`;
  }

  // 12. Listes
  if (cat === 'Propriétés des listes' || prop.includes('list-style')) {
    return `<ul id="liste" style="background:rgba(255,255,255,0.08); padding:12px 30px; border-radius:8px; color:#fff; list-style-type:circle; transition:all 0.8s ease; font-size:13px;">
      <li>Élément liste 1 (#liste)</li>
      <li>Élément liste 2 (#liste)</li>
    </ul>`;
  }

  // Boîte standard par défaut
  return `<div id="boite" class="demo-box" style="transition: all 0.8s ease; min-width:170px; padding:18px; display:flex; align-items:center; justify-content:center; font-size:15px;">
    <span>Boîte &lt;div id="boite"&gt;</span>
  </div>`;
}

// Construction de la scène miniature pour les cartes de comparaison vidéo
function buildMiniStage(itemId, idx, opt) {
  // Bordure
  if (itemId === 'css-border-style' || itemId === 'css-border-shorthand') {
    const val = opt.value;
    if (val === 'none') {
      return `<div style="width:80%; height:36px; border:none; background:rgba(56,189,248,0.15); outline:1px dashed rgba(255,255,255,0.3); border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:10px; color:#94a3b8; font-weight:bold;">none</div>`;
    }
    const width = (val === 'double' || val === 'groove') ? '5px' : '3px';
    const color = val === 'dotted' ? '#facc15' : (val === 'dashed' ? '#f43f5e' : (val === 'double' ? '#10b981' : (val === 'groove' ? '#ec4899' : '#38bdf8')));
    return `<div style="width:80%; height:36px; border:${width} ${val} ${color}; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:11px; color:#fff; font-weight:bold; background:rgba(0,0,0,0.3);">${escapeHtml(val)}</div>`;
  }

  // Marge extérieure (margin)
  if (itemId === 'css-margin') {
    if (opt.value === '0px') {
      return `<div style="display:flex; flex-direction:column; align-items:center; width:85%;"><div style="width:100%; height:8px; background:#475569; border-radius:2px;"></div><div style="width:100%; height:18px; background:#38bdf8; color:#0f172a; font-weight:bold; font-size:9px; display:flex; align-items:center; justify-content:center;">0px (Collé)</div><div style="width:100%; height:8px; background:#475569; border-radius:2px;"></div></div>`;
    }
    if (opt.value === '15px') {
      return `<div style="display:flex; flex-direction:column; align-items:center; width:85%;"><div style="width:100%; height:7px; background:#475569; border-radius:2px;"></div><div style="width:100%; height:18px; background:#38bdf8; margin:5px 0; color:#0f172a; font-weight:bold; font-size:9px; display:flex; align-items:center; justify-content:center;">15px</div><div style="width:100%; height:7px; background:#475569; border-radius:2px;"></div></div>`;
    }
    if (opt.value === '30px') {
      return `<div style="display:flex; flex-direction:column; align-items:center; width:85%;"><div style="width:100%; height:6px; background:#475569; border-radius:2px;"></div><div style="width:100%; height:18px; background:#38bdf8; margin:9px 0; color:#0f172a; font-weight:bold; font-size:9px; display:flex; align-items:center; justify-content:center;">30px</div><div style="width:100%; height:6px; background:#475569; border-radius:2px;"></div></div>`;
    }
    if (opt.value === '10px 40px') {
      return `<div style="display:flex; align-items:center; justify-content:center; width:85%;"><div style="width:70%; height:20px; background:#38bdf8; margin:4px 14px; color:#0f172a; font-weight:bold; font-size:8px; display:flex; align-items:center; justify-content:center;">10px 40px</div></div>`;
    }
    if (opt.value === 'auto') {
      return `<div style="width:90%; background:rgba(255,255,255,0.06); padding:3px; border-radius:4px;"><div style="width:55%; height:20px; background:#38bdf8; margin:0 auto; color:#0f172a; font-weight:bold; font-size:8px; display:flex; align-items:center; justify-content:center;">auto (Centré)</div></div>`;
    }
  }

  // Marge intérieure (padding)
  if (itemId === 'css-padding') {
    const padVal = opt.value === '0px' ? '0px' : (opt.value === '12px' ? '4px' : (opt.value === '25px' ? '8px' : '2px 8px'));
    return `<div style="width:85%; border:2px dashed #38bdf8; padding:${padVal}; border-radius:4px; background:rgba(56,189,248,0.1);"><div style="background:#38bdf8; color:#0f172a; font-weight:bold; font-size:9px; text-align:center; padding:3px 0;">${escapeHtml(opt.value)}</div></div>`;
  }

  // Flottement (float)
  if (itemId === 'css-float') {
    if (opt.value === 'none') {
      return `<div style="width:90%; font-size:8px; color:#cbd5e1; text-align:center;"><div style="width:50%; height:14px; background:#38bdf8; margin:0 auto 3px auto; color:#0f172a; font-weight:bold; display:flex; align-items:center; justify-content:center;">#boite</div>Texte normal</div>`;
    }
    if (opt.value === 'left') {
      return `<div style="width:90%; font-size:8px; color:#cbd5e1; overflow:hidden;"><div style="float:left; width:35%; height:24px; background:#38bdf8; margin:0 4px 2px 0; color:#0f172a; font-weight:bold; display:flex; align-items:center; justify-content:center;">G</div>Texte enroulé...</div>`;
    }
    if (opt.value === 'right') {
      return `<div style="width:90%; font-size:8px; color:#cbd5e1; overflow:hidden;"><div style="float:right; width:35%; height:24px; background:#38bdf8; margin:0 0 2px 4px; color:#0f172a; font-weight:bold; display:flex; align-items:center; justify-content:center;">D</div>Texte enroulé...</div>`;
    }
  }

  // Arrondi (border-radius)
  if (itemId === 'css-border-radius') {
    return `<div style="width:70%; height:32px; background:linear-gradient(135deg,#38bdf8,#2563eb); border-radius:${opt.value}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px; font-weight:bold;">${escapeHtml(opt.value)}</div>`;
  }

  // Ombre (box-shadow)
  if (itemId === 'css-box-shadow') {
    const sh = opt.value === 'none' ? 'none' : (opt.value === 'soft' ? '0 4px 8px rgba(0,0,0,0.5)' : (opt.value === 'neon' ? '0 0 10px #38bdf8' : (opt.value === '3d' ? '4px 4px 0 #ef4444' : 'inset 0 0 6px #38bdf8')));
    return `<div style="width:70%; height:28px; background:#1e293b; border:1px solid #38bdf8; border-radius:4px; box-shadow:${sh}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px; font-weight:bold;">${escapeHtml(opt.value)}</div>`;
  }

  // @keyframes (Étapes en pourcentages %)
  if (itemId === 'css-keyframes') {
    return `<div style="display:flex; gap:3px; align-items:center; justify-content:center; width:90%; height:32px; background:rgba(15,23,42,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:4px; font-size:8px;">
      <span style="background:#ef4444; color:#fff; padding:2px 4px; border-radius:3px; font-weight:bold;">0%</span>
      <span style="color:#38bdf8; font-size:7px;">➔</span>
      <span style="background:#f59e0b; color:#fff; padding:2px 4px; border-radius:3px; font-weight:bold;">50%</span>
      <span style="color:#38bdf8; font-size:7px;">➔</span>
      <span style="background:#10b981; color:#fff; padding:2px 4px; border-radius:3px; font-weight:bold;">100%</span>
    </div>`;
  }

  // Animation & Transition
  if (itemId.startsWith('css-animation') || itemId.startsWith('css-transition')) {
    return `<div style="width:75%; height:30px; background:linear-gradient(135deg, #7c3aed, #0ea5e9); border-radius:4px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px; font-weight:bold; box-shadow:0 2px 8px rgba(124,58,237,0.4);">⚡ ${escapeHtml(opt.value)}</div>`;
  }

  // Couleur de bordure & Épaisseur
  if (itemId === 'css-border-color') {
    return `<div style="width:75%; height:30px; border:4px solid ${opt.value}; background:rgba(0,0,0,0.3); border-radius:4px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px; font-weight:bold;">${escapeHtml(opt.value)}</div>`;
  }
  if (itemId === 'css-border-width') {
    return `<div style="width:75%; height:30px; border:${opt.value} solid #38bdf8; background:rgba(0,0,0,0.3); border-radius:4px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px; font-weight:bold;">${escapeHtml(opt.value)}</div>`;
  }

  // Arrière-plan
  if (itemId.startsWith('css-background')) {
    const bgStyle = opt.value.includes('gradient') ? `background-image:${opt.value};` : `background:${opt.value};`;
    return `<div style="width:75%; height:30px; ${bgStyle} border-radius:4px; border:1px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; color:#fff; font-size:8px; font-weight:bold; text-shadow:0 1px 2px #000;">${escapeHtml(opt.value.substring(0, 15))}</div>`;
  }

  // Text Shadow
  if (itemId === 'css-text-shadow') {
    return `<div style="width:75%; height:30px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; color:#fff; text-shadow:${opt.value};">Abc</div>`;
  }

  // Listes
  if (itemId.startsWith('css-list-style')) {
    return `<div style="width:80%; height:30px; display:flex; align-items:center; justify-content:center; font-size:9px; color:#38bdf8; font-weight:bold; background:rgba(255,255,255,0.05); border-radius:4px;">• ${escapeHtml(opt.value)}</div>`;
  }

  // Rendu par défaut dynamique avec opt.css
  return `<div style="width:80%; height:32px; display:flex; align-items:center; justify-content:center; font-size:10px; border-radius:4px; background:linear-gradient(135deg, rgba(56,189,248,0.25), rgba(37,99,235,0.25)); color:#fff; font-weight:bold; ${opt.css};">#boite</div>`;
}

// Lancer une vidéo spécifique pour une propriété (1 vidéo par valeur/variante)
function playSpecificVideo(itemId, variantIdx) {
  currentVideoItemId = itemId;
  currentVideoVariantIdx = variantIdx;
  const config = VARIETIES_CONFIG[itemId];
  if (!config || !config.options || !config.options[variantIdx]) {
    startVideoSimulation(itemId, 0);
    return;
  }
  const opt = config.options[variantIdx];

  // 1. Mettre à jour l'en-tête du lecteur vidéo
  const playerTitle = document.getElementById('videoPlayerTitle');
  if (playerTitle) {
    playerTitle.textContent = `▶ VIDÉO ${variantIdx + 1}/${config.options.length} : ${opt.label}`;
  }

  const badge = document.getElementById('videoCurrentBadge');
  if (badge) {
    badge.textContent = opt.value;
  }

  // 2. Mettre à jour les onglets de la playlist vidéo
  document.querySelectorAll('.video-playlist-tab-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === variantIdx);
  });

  // 3. Mettre à jour les cartes comparatives
  document.querySelectorAll('.video-mini-card').forEach((card, idx) => {
    const isCur = idx === variantIdx;
    card.classList.toggle('active', isCur);
    const playBtn = card.querySelector('.video-mini-play-btn');
    if (playBtn) {
      playBtn.textContent = isCur ? '▶ En cours de lecture' : '▶ Lancer cette vidéo';
    }
  });

  // 4. Mettre à jour les boutons radio
  const radioWrap = document.querySelector('.variety-radios-wrap');
  if (radioWrap) {
    const labels = radioWrap.querySelectorAll('.variety-radio-label');
    labels.forEach((lbl, idx) => {
      const isCur = idx === variantIdx;
      lbl.classList.toggle('active', isCur);
      const input = lbl.querySelector('input[type="radio"]');
      if (input) input.checked = isCur;
    });
  }

  // 5. Mettre à jour le code CSS synchronisé avec convention #id Bac STI
  const codePre = document.querySelector('.code-pre code');
  if (codePre) {
    codePre.textContent = opt.code || (
      `/* Code CSS officiel de la Vidéo ${variantIdx + 1} (${opt.value}) */\n` +
      `#boite {\n  ${opt.css.replace(/!important/g, '').replace(/;\s*/g, ';\n  ').trim()}\n}\n\n` +
      `/* Note obligatoire :hover */\n#boite:hover {\n  opacity: 0.85;\n}`
    );
  }

  // 6. Toast d'information
  const toast = document.getElementById('varietyToastCss');
  if (toast) {
    toast.style.display = 'inline-flex';
    toast.innerHTML = `🎬 Vidéo active : <strong>${escapeHtml(opt.value)}</strong>`;
  }

  // 7. Lancer le moteur d'animation pour cette vidéo dédiée
  startVideoSimulation(itemId, variantIdx);
}

// Moteur d'interpolation en pourcentage (0% à 100%) pour @keyframes et animation-*
function applyKeyframesProgress(box, progressVal, variantIdx = 0, itemId = 'css-keyframes') {
  if (!box) return;

  const config = VARIETIES_CONFIG[itemId];
  const opt = (config && config.options && config.options[variantIdx]) ? config.options[variantIdx] : null;

  // Repères temporels de la timeline (0%, 50%, 100%)
  const m0 = document.getElementById('kfMarker0');
  const m50 = document.getElementById('kfMarker50');
  const m100 = document.getElementById('kfMarker100');
  const c1 = document.getElementById('kfConn1');
  const c2 = document.getElementById('kfConn2');
  const statusTxt = document.getElementById('keyframesStatusText');
  const lbl = document.getElementById('kfBoxLabel');
  const sub = document.getElementById('kfBoxSub');
  const icon = document.getElementById('kfBoxIcon');

  const beforePill = document.getElementById('phaseBeforePill');
  const afterPill = document.getElementById('phaseAfterPill');
  if (beforePill) beforePill.classList.toggle('active', progressVal < 50);
  if (afterPill) afterPill.classList.toggle('active', progressVal >= 50);

  // Activation dynamique des marqueurs de la timeline
  if (m0) m0.classList.toggle('active', progressVal < 35);
  if (c1) c1.classList.toggle('active', progressVal >= 25 && progressVal < 60);
  if (m50) m50.classList.toggle('active', progressVal >= 35 && progressVal <= 65);
  if (c2) c2.classList.toggle('active', progressVal >= 60);
  if (m100) m100.classList.toggle('active', progressVal > 65);

  // 1. @KEYFRAMES AVEC ÉTATS EN POURCENTAGES (%)
  if (itemId === 'css-keyframes') {
    if (variantIdx === 0) {
      // 0% ➔ 50% ➔ 100%
      if (progressVal <= 50) {
        const t = progressVal / 50;
        const scale = (1 + 0.25 * t).toFixed(2);
        const r = Math.round(56 + (245 - 56) * t);
        const g = Math.round(189 + (158 - 189) * t);
        const b = Math.round(248 + (11 - 248) * t);
        box.style.transform = `scale(${scale}) translateY(-${(14 * t).toFixed(1)}px)`;
        box.style.background = `rgb(${r}, ${g}, ${b})`;
        box.style.boxShadow = `0 ${Math.round(8 + 12 * t)}px ${Math.round(18 + 14 * t)}px rgba(${r}, ${g}, ${b}, 0.5)`;
        if (lbl) lbl.textContent = `#boite (${progressVal}%)`;
        if (sub) sub.textContent = `0% ➔ 50% : scale(${scale})`;
        if (statusTxt) statusTxt.innerHTML = `<strong>ÉTAT : ${progressVal}%</strong> — Phase 0% ➔ 50% (La boîte grandit et vire à l'orange)`;
      } else {
        const t = (progressVal - 50) / 50;
        const scale = (1.25 - 0.25 * t).toFixed(2);
        const r = Math.round(245 + (16 - 245) * t);
        const g = Math.round(158 + (185 - 158) * t);
        const b = Math.round(11 + (129 - 11) * t);
        box.style.transform = `scale(${scale}) translateY(-${(14 * (1 - t)).toFixed(1)}px)`;
        box.style.background = `rgb(${r}, ${g}, ${b})`;
        box.style.boxShadow = `0 ${Math.round(20 - 12 * t)}px ${Math.round(32 - 14 * t)}px rgba(${r}, ${g}, ${b}, 0.5)`;
        if (lbl) lbl.textContent = `#boite (${progressVal}%)`;
        if (sub) sub.textContent = `50% ➔ 100% : scale(${scale})`;
        if (statusTxt) statusTxt.innerHTML = `<strong>ÉTAT : ${progressVal}%</strong> — Phase 50% ➔ 100% (Retour à l'échelle normale & couleur finale émeraude)`;
      }
    } else if (variantIdx === 1) {
      // 0% ➔ 25% ➔ 50% ➔ 75% ➔ 100% (4 coins)
      let x = 0, y = 0, color = '#38bdf8', corner = 'Coin 1 (Départ 0%)';
      if (progressVal < 25) {
        const t = progressVal / 25;
        x = Math.round(60 * t); y = 0;
        color = '#38bdf8'; corner = '0% ➔ 25% (Vers la droite)';
      } else if (progressVal < 50) {
        const t = (progressVal - 25) / 25;
        x = 60; y = Math.round(35 * t);
        color = '#818cf8'; corner = '25% ➔ 50% (Vers le bas)';
      } else if (progressVal < 75) {
        const t = (progressVal - 50) / 25;
        x = Math.round(60 * (1 - t)); y = 35;
        color = '#ec4899'; corner = '50% ➔ 75% (Vers la gauche)';
      } else {
        const t = (progressVal - 75) / 25;
        x = 0; y = Math.round(35 * (1 - t));
        color = '#10b981'; corner = '75% ➔ 100% (Retour au point de départ)';
      }
      box.style.transform = `translate(${x}px, ${y}px)`;
      box.style.background = color;
      box.style.boxShadow = `0 8px 24px ${color}88`;
      if (lbl) lbl.textContent = `#boite (${progressVal}%)`;
      if (sub) sub.textContent = `translate(${x}px, ${y}px)`;
      if (statusTxt) statusTxt.innerHTML = `<strong>ÉTAT : ${progressVal}%</strong> — ${corner}`;
    } else if (variantIdx === 2) {
      // 0% ➔ 100% (Rotation 360°)
      const deg = Math.round(3.6 * progressVal);
      box.style.transform = `rotate(${deg}deg)`;
      box.style.background = `hsl(${Math.round(200 + deg * 0.4)}, 85%, 55%)`;
      if (lbl) lbl.textContent = `#boite (${deg}°)`;
      if (sub) sub.textContent = `rotate(${deg}deg)`;
      if (statusTxt) statusTxt.innerHTML = `<strong>ÉTAT : ${progressVal}%</strong> — Rotation 0% ➔ 100% (${deg}° sur 360°)`;
    } else {
      // from ➔ to
      const t = progressVal / 100;
      const op = (0.2 + 0.8 * t).toFixed(2);
      const sc = (0.7 + 0.45 * t).toFixed(2);
      box.style.opacity = op;
      box.style.transform = `scale(${sc})`;
      box.style.background = t < 0.5 ? '#ef4444' : '#10b981';
      if (lbl) lbl.textContent = `#boite (${progressVal}%)`;
      if (sub) sub.textContent = `opacity: ${op}; scale(${sc})`;
      if (statusTxt) statusTxt.innerHTML = `<strong>ÉTAT : ${progressVal}%</strong> — Progression from (0%) vers to (100%)`;
    }
    return;
  }

  // 2. ANIMATION-NAME
  if (itemId === 'css-animation-name') {
    if (variantIdx === 0) {
      // animCouleur
      const hue = Math.round(190 + 170 * (progressVal / 100));
      box.style.background = `hsl(${hue}, 85%, 55%)`;
      box.style.transform = `scale(1.08)`;
      if (statusTxt) statusTxt.innerHTML = `<strong>animation-name: animCouleur</strong> — ÉTAT : ${progressVal}% (Cycle de teinte)`;
    } else if (variantIdx === 1) {
      // animTourne
      const deg = Math.round(3.6 * progressVal);
      box.style.transform = `rotate(${deg}deg)`;
      box.style.background = '#6366f1';
      if (statusTxt) statusTxt.innerHTML = `<strong>animation-name: animTourne</strong> — ÉTAT : ${progressVal}% (Rotation : ${deg}°)`;
    } else {
      // none
      box.style.transform = 'scale(1) rotate(0deg)';
      box.style.background = '#475569';
      box.style.opacity = '0.7';
      if (statusTxt) statusTxt.innerHTML = `<strong>animation-name: none</strong> — Aucune animation appliquée (Élément figé)`;
    }
    return;
  }

  // 3. ANIMATION-DURATION
  if (itemId === 'css-animation-duration') {
    const durLabel = opt ? opt.value : '3s';
    const cycleSpeed = variantIdx === 0 ? 3 : (variantIdx === 1 ? 1.5 : 0.6);
    const pulse = Math.abs(Math.sin((progressVal * cycleSpeed * Math.PI) / 50));
    box.style.transform = `scale(${(1 + 0.22 * pulse).toFixed(2)})`;
    box.style.background = pulse > 0.5 ? '#38bdf8' : '#0284c7';
    if (statusTxt) statusTxt.innerHTML = `<strong>animation-duration: ${durLabel}</strong> — Vitesse d'exécution : ${variantIdx === 0 ? 'Rapide (1s)' : (variantIdx === 1 ? 'Moyenne (3s)' : 'Lente (6s)')}`;
    return;
  }

  // 4. ANIMATION-DELAY
  if (itemId === 'css-animation-delay') {
    const delayThreshold = variantIdx === 0 ? 0 : (variantIdx === 1 ? 40 : 65);
    if (progressVal < delayThreshold) {
      box.style.transform = 'scale(1)';
      box.style.background = '#334155';
      box.style.border = '2px dashed #f59e0b';
      if (icon) icon.textContent = '⏳';
      if (sub) sub.textContent = `En attente (${opt ? opt.value : ''})...`;
      if (statusTxt) statusTxt.innerHTML = `<strong>⏳ DÉLAI D'ATTENTE (${opt ? opt.value : ''})</strong> — L'animation ne démarre pas encore !`;
    } else {
      const activeT = (progressVal - delayThreshold) / (100 - delayThreshold);
      const pulse = Math.abs(Math.sin(activeT * Math.PI));
      box.style.transform = `scale(${(1 + 0.25 * pulse).toFixed(2)})`;
      box.style.background = '#10b981';
      box.style.border = '2px solid #10b981';
      if (icon) icon.textContent = '🚀';
      if (sub) sub.textContent = `Animation active !`;
      if (statusTxt) statusTxt.innerHTML = `<strong>🚀 ANIMATION DÉMARRÉE</strong> — Le délai de ${opt ? opt.value : ''} est écoulé !`;
    }
    return;
  }

  // 5. ANIMATION-ITERATION-COUNT
  if (itemId === 'css-animation-iteration-count') {
    const countVal = opt ? opt.value : 'infinite';
    const pulse = Math.abs(Math.sin((progressVal * Math.PI) / 25));
    box.style.transform = `scale(${(1 + 0.2 * pulse).toFixed(2)})`;
    box.style.background = '#818cf8';
    if (statusTxt) statusTxt.innerHTML = `<strong>animation-iteration-count: ${countVal}</strong> — ${countVal === 'infinite' ? 'Répétition infinie sans arrêt ♾️' : `S'exécute exactement ${countVal} fois puis s'arrête`}`;
    return;
  }

  // 6. ANIMATION-DIRECTION
  if (itemId === 'css-animation-direction') {
    const dir = opt ? opt.value : 'normal';
    let t = progressVal / 100;
    if (dir === 'reverse') t = 1 - t;
    else if (dir === 'alternate') t = progressVal <= 50 ? (progressVal / 50) : (1 - (progressVal - 50) / 50);
    else if (dir === 'alternate-reverse') t = progressVal <= 50 ? (1 - progressVal / 50) : ((progressVal - 50) / 50);
    const x = Math.round(70 * t - 35);
    box.style.transform = `translateX(${x}px)`;
    box.style.background = t > 0.5 ? '#10b981' : '#38bdf8';
    if (statusTxt) statusTxt.innerHTML = `<strong>animation-direction: ${dir}</strong> — Déplacement : ${dir} (x: ${x}px)`;
    return;
  }

  // 7. ANIMATION-SHORTHAND
  if (itemId === 'css-animation-shorthand') {
    const t = progressVal / 100;
    const pulse = Math.abs(Math.sin(t * Math.PI * 2));
    const deg = Math.round(360 * t);
    box.style.transform = `scale(${(1 + 0.2 * pulse).toFixed(2)}) rotate(${deg}deg)`;
    box.style.background = `hsl(${Math.round(200 + 120 * t)}, 80%, 55%)`;
    if (statusTxt) statusTxt.innerHTML = `<strong>animation: ${opt ? opt.value : ''}</strong> — ÉTAT : ${progressVal}%`;
    return;
  }
}

// Moteur du lecteur vidéo (Timer et boucle temporelle 1080p)
function startVideoSimulation(itemId, variantIdx = 0) {
  if (activeVideoTimer) clearInterval(activeVideoTimer);
  isVideoPlaying = true;
  currentVideoItemId = itemId;
  currentVideoVariantIdx = variantIdx;
  
  const stage = document.getElementById('videoStage');
  const box = stage ? (stage.querySelector('#boite') || stage.querySelector('.demo-box') || stage.querySelector('#h1') || stage.querySelector('#tab') || stage.querySelector('#img1') || stage.querySelector('#liste') || stage.firstElementChild) : null;
  const progress = document.getElementById('videoProgress');
  const btn = document.getElementById('playPauseVideoBtn');
  if (btn) btn.textContent = '⏸';

  let step = 0;
  let progressVal = 0;

  // Appliquer immédiatement la première image de cette vidéo
  if (itemId === 'css-keyframes' || itemId.startsWith('css-animation')) {
    applyKeyframesProgress(box, 0, variantIdx, itemId);
  } else {
    applyVideoFrame(itemId, box, 0, variantIdx);
  }

  activeVideoTimer = setInterval(() => {
    if (!isVideoPlaying) return;

    progressVal = (progressVal + 2) % 100;
    if (progress) progress.style.width = `${progressVal}%`;

    // Mode continu fluide pour @keyframes et animation-*
    if (itemId === 'css-keyframes' || itemId.startsWith('css-animation')) {
      applyKeyframesProgress(box, progressVal, currentVideoVariantIdx, itemId);
    } else if (progressVal === 0 || progressVal === 50) {
      // À 0% et 50%, alterner l'animation de la vidéo active
      step = step === 0 ? 1 : 0;
      applyVideoFrame(itemId, box, step, currentVideoVariantIdx);
    }
  }, 100);
}

// Rendu des images d'animation : 1 VIDÉO INDÉPENDANTE PAR VALEUR AVEC DÉMONSTRATION AVANT / APRÈS
function applyVideoFrame(itemId, box, step, variantIdx = 0) {
  if (!box) return;
  const config = VARIETIES_CONFIG[itemId];
  const opt = (config && config.options && config.options[variantIdx]) ? config.options[variantIdx] : null;

  // Synchronisation des voyants AVANT / APRÈS
  const beforePill = document.getElementById('phaseBeforePill');
  const afterPill = document.getElementById('phaseAfterPill');
  if (beforePill) beforePill.classList.toggle('active', step === 0);
  if (afterPill) afterPill.classList.toggle('active', step === 1);

  // 0. SÉLECTEURS CSS (DÉMONSTRATION COMPARATIVE AVANT vs APRÈS)
  if (itemId.startsWith('css-sel-')) {
    const items = document.querySelectorAll('.selector-target-item');
    const banner = document.getElementById('selBannerStatus');

    if (itemId === 'css-sel-hover') {
      const cursor = document.getElementById('virtualCursor');
      const txt = document.getElementById('hoverStatusText');
      if (step === 0) {
        if (cursor) { cursor.style.top = '15px'; cursor.style.right = '40px'; cursor.style.left = 'auto'; cursor.style.transform = 'scale(1)'; }
        box.style.transform = 'scale(1) translateY(0)';
        box.style.boxShadow = 'none';
        box.style.borderColor = '#334155';
        box.style.background = '#1e293b';
        box.style.color = '#94a3b8';
        if (txt) txt.innerHTML = '🔴 AVANT : Curseur éloigné de la boîte (État normal au repos)';
      } else {
        if (cursor) { cursor.style.top = '80px'; cursor.style.right = 'auto'; cursor.style.left = '50%'; cursor.style.transform = 'translate(-50%, -50%) scale(1.15)'; }
        box.style.transform = 'scale(1.14) translateY(-4px)';
        box.style.boxShadow = '0 0 30px rgba(250, 204, 21, 0.85)';
        box.style.borderColor = '#facc15';
        box.style.background = '#854d0e';
        box.style.color = '#fef08a';
        if (txt) txt.innerHTML = '🟢 APRÈS (:hover) : Curseur SUR la boîte ➔ Zoom & Halo néon appliqués !';
      }
      return;
    }

    if (itemId === 'css-sel-active') {
      const cursor = document.getElementById('virtualCursor');
      const txt = document.getElementById('activeStatusText');
      if (step === 0) {
        if (cursor) { cursor.style.top = '15px'; cursor.style.right = '45px'; cursor.style.left = 'auto'; cursor.style.transform = 'scale(1)'; }
        box.style.transform = 'scale(1) translateY(0)';
        box.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        box.style.background = '#0284c7';
        if (txt) txt.innerHTML = '🔴 AVANT : Bouton relâché au repos (Pas de clic)';
      } else {
        if (cursor) { cursor.style.top = '85px'; cursor.style.right = 'auto'; cursor.style.left = '50%'; cursor.style.transform = 'translate(-50%, -50%) scale(0.9)'; }
        box.style.transform = 'scale(0.92) translateY(5px)';
        box.style.boxShadow = 'inset 0 4px 10px rgba(0,0,0,0.7)';
        box.style.background = '#0369a1';
        if (txt) txt.innerHTML = '🟢 APRÈS (:active) : Pression du clic maintenue enfoncée !';
      }
      return;
    }

    if (itemId === 'css-sel-link' || itemId === 'css-sel-visited') {
      const isVisited = itemId === 'css-sel-visited';
      const link = document.getElementById('lien');
      const txt = document.getElementById('linkStatusText');
      if (step === 0) {
        if (link) { link.style.color = '#60a5fa'; link.style.textDecoration = 'underline'; link.style.fontWeight = 'normal'; }
        if (txt) txt.innerHTML = '🔴 AVANT : Style de lien brut par défaut du navigateur';
      } else {
        if (link) {
          if (isVisited) {
            link.style.color = '#c084fc'; link.style.textDecoration = 'line-through'; link.style.fontWeight = 'bold';
            if (txt) txt.innerHTML = '🟢 APRÈS (a:visited) : Lien violet déjà visité par l\'utilisateur';
          } else {
            link.style.color = '#38bdf8'; link.style.textDecoration = 'none'; link.style.borderBottom = '2px solid #38bdf8'; link.style.fontWeight = 'bold';
            if (txt) txt.innerHTML = '🟢 APRÈS (a:link) : Lien neuf non visité sans soulignement';
          }
        }
      }
      return;
    }

    // Sélecteurs sur document HTML mocké (*, element, #id, .class, [attr], [attr=val], element.class, grouped)
    if (step === 0) {
      // 🔴 AVANT : TOUS les éléments sont au repos neutre
      items.forEach(it => {
        it.classList.remove('matched', 'ignored');
      });
      if (banner) {
        banner.innerHTML = '🔴 ÉTAT 1 : AVANT ➔ Aucun élément ciblé (Style HTML brut par défaut du navigateur)';
        banner.style.color = '#f87171';
      }
    } else {
      // 🟢 APRÈS : SEULS les éléments qui matchent s'illuminent
      items.forEach(it => {
        const match = it.getAttribute('data-sel-match');
        if (match === 'all' || match === 'yes') {
          it.classList.add('matched');
          it.classList.remove('ignored');
        } else {
          it.classList.remove('matched');
          it.classList.add('ignored');
        }
      });
      if (banner) {
        let msg = '🟢 ÉTAT 2 : APRÈS ➔ Règle CSS appliquée aux éléments ciblés !';
        if (itemId === 'css-sel-universal') msg = '🟢 APRÈS : L\'étoile (*) applique la règle à ABSOLUMENT TOUS les éléments du document !';
        else if (itemId === 'css-sel-element') msg = '🟢 APRÈS : Seules les balises &lt;p&gt; sont sélectionnées (les autres balises sont ignorées) !';
        else if (itemId === 'css-sel-id') msg = '🟢 APRÈS : Seul l\'élément UNIQUE avec id="boite" est ciblé (les autres id sont ignorés) !';
        else if (itemId === 'css-sel-class') msg = '🟢 APRÈS : TOUS les éléments portant la classe .important sont ciblés (réutilisable) !';
        else if (itemId === 'css-sel-element-attr') msg = '🟢 APRÈS : Seuls les champs ayant l\'attribut [required] sont ciblés !';
        else if (itemId === 'css-sel-element-attr-val') msg = '🟢 APRÈS : Seul l\'input avec type="submit" exact est ciblé !';
        else if (itemId === 'css-sel-element-class') msg = '🟢 APRÈS : Seul le &lt;p&gt; qui possède AUSSI la classe .important est ciblé !';
        else if (itemId === 'css-sel-grouped') msg = '🟢 APRÈS : &lt;h1&gt; ET &lt;p&gt; sont ciblés simultanément grâce à la virgule (,) !';
        banner.innerHTML = msg;
        banner.style.color = '#4ade80';
      }
    }
    return;
  }

  // 1. STYLE DE BORDURE (BORDER-STYLE) - 1 VIDÉO DÉDIÉE PAR VALEUR
  if (itemId === 'css-border-style' || itemId.includes('border-style')) {
    box.style.padding = '18px 24px';
    box.style.transition = 'all 0.4s ease';

    if (step === 0) {
      // 🔴 AVANT : Élément brut sans bordure
      box.style.border = '0px none transparent';
      box.style.outline = '1px dashed rgba(255, 255, 255, 0.2)';
      box.style.background = 'rgba(15, 23, 42, 0.6)';
      box.style.boxShadow = 'none';
      box.style.transform = 'scale(1)';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Sans bordure / Élément brut)</small></span>`;
    } else {
      // 🟢 APRÈS : Bordure de la vidéo choisie
      box.style.outline = 'none';
      box.style.background = 'rgba(15, 23, 42, 0.85)';
      box.style.color = '#fff';
      box.style.transform = 'scale(1.04)';

      if (variantIdx === 0) {
        box.style.border = '5px solid #38bdf8';
        box.style.boxShadow = '0 0 22px rgba(56, 189, 248, 0.65)';
        box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS ➔ border: solid (Ligne continue)</small></span>`;
      } else if (variantIdx === 1) {
        box.style.border = '6px dotted #facc15';
        box.style.boxShadow = '0 0 22px rgba(250, 204, 21, 0.65)';
        box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS ➔ border: dotted (Pointillés ronds)</small></span>`;
      } else if (variantIdx === 2) {
        box.style.border = '6px dashed #f43f5e';
        box.style.boxShadow = '0 0 22px rgba(244, 63, 94, 0.65)';
        box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS ➔ border: dashed (Tirets espacés)</small></span>`;
      } else if (variantIdx === 3) {
        box.style.border = '8px double #10b981';
        box.style.boxShadow = '0 0 22px rgba(16, 185, 129, 0.65)';
        box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS ➔ border: double (Double trait parallèle)</small></span>`;
      } else if (variantIdx === 4) {
        box.style.border = '8px groove #ec4899';
        box.style.boxShadow = '0 0 22px rgba(236, 72, 153, 0.65)';
        box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS ➔ border: groove (Rainure sculptée 3D)</small></span>`;
      } else {
        box.style.border = 'none';
        box.style.background = 'rgba(56, 189, 248, 0.25)';
        box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS ➔ border: none (Bordure supprimée)</small></span>`;
      }
    }
    return;
  }

  // 2. BORDER SHORTHAND (border: largeur style couleur)
  if (itemId === 'css-border-shorthand') {
    box.style.padding = '18px 24px';
    box.style.transition = 'all 0.4s ease';

    if (step === 0) {
      box.style.border = '0px none transparent';
      box.style.outline = '1px dashed rgba(255, 255, 255, 0.2)';
      box.style.boxShadow = 'none';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Sans bordure)</small></span>`;
    } else {
      box.style.outline = 'none';
      box.style.transform = 'scale(1.04)';
      if (variantIdx === 0) {
        box.style.border = '4px solid #38bdf8';
        box.style.boxShadow = '0 0 18px rgba(56,189,248,0.55)';
      } else if (variantIdx === 1) {
        box.style.border = '5px dotted #facc15';
        box.style.boxShadow = '0 0 18px rgba(250,204,21,0.55)';
      } else if (variantIdx === 2) {
        box.style.border = '5px dashed #ef4444';
        box.style.boxShadow = '0 0 18px rgba(239,68,68,0.55)';
      } else {
        box.style.border = '8px double #10b981';
        box.style.boxShadow = '0 0 18px rgba(16,185,129,0.55)';
      }
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (border: ${opt ? opt.value : 'appliquée'} !)</small></span>`;
    }
    return;
  }

  // 3. MARGE EXTÉRIEURE (MARGIN) - 1 VIDÉO DÉDIÉE PAR VALEUR
  if (itemId === 'css-margin') {
    const boite = document.getElementById('boite');
    const vHaut = document.getElementById('voisinHaut');
    const vBas = document.getElementById('voisinBas');
    const txt = document.getElementById('marginIndicatorText');
    if (boite) {
      boite.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      if (step === 0) {
        // 🔴 AVANT : margin nulle (0px) ➔ Éléments étouffés
        boite.style.margin = '0px auto';
        if (vHaut) { vHaut.style.transform = 'translateY(2px)'; vHaut.style.borderColor = '#ef4444'; }
        if (vBas) { vBas.style.transform = 'translateY(-2px)'; vBas.style.borderColor = '#ef4444'; }
        boite.style.borderColor = '#ef4444';
        if (txt) txt.textContent = '🔴 ÉTAT 1 : AVANT ➔ margin: 0px (Éléments collés sans séparation)';
      } else {
        // 🟢 APRÈS : margin appliquée
        const mVal = opt ? opt.value : '15px';
        boite.style.margin = mVal === 'auto' ? '15px auto' : (mVal.includes(' ') ? mVal : `${mVal} auto`);
        if (vHaut) { vHaut.style.transform = mVal === '30px' ? 'translateY(-16px)' : 'translateY(-8px)'; vHaut.style.borderColor = '#475569'; }
        if (vBas) { vBas.style.transform = mVal === '30px' ? 'translateY(16px)' : 'translateY(8px)'; vBas.style.borderColor = '#475569'; }
        boite.style.borderColor = '#10b981';
        if (txt) txt.textContent = `🟢 ÉTAT 2 : APRÈS ➔ margin: ${mVal} (Voisins repoussés avec succès !)`;
      }
    }
    return;
  }

  // 4. MARGE INTÉRIEURE (PADDING) - 1 VIDÉO DÉDIÉE PAR VALEUR
  if (itemId === 'css-padding') {
    const boite = document.getElementById('boite');
    const txt = document.getElementById('paddingIndicatorText');
    if (boite) {
      boite.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      if (step === 0) {
        // 🔴 AVANT : padding 0px ➔ Texte collé aux bords
        boite.style.padding = '0px';
        boite.style.borderColor = '#ef4444';
        if (txt) txt.textContent = '🔴 ÉTAT 1 : AVANT ➔ padding: 0px (Texte comprimé directement contre la bordure)';
      } else {
        // 🟢 APRÈS : padding appliqué
        const pVal = opt ? opt.value : '15px';
        boite.style.padding = pVal;
        boite.style.borderColor = '#10b981';
        if (txt) txt.textContent = `🟢 ÉTAT 2 : APRÈS ➔ padding: ${pVal} (Espace intérieur aéré créé avec succès !)`;
      }
    }
    return;
  }

  // 5. FLOTTEMENT (FLOAT) - 1 VIDÉO DÉDIÉE PAR VALEUR
  if (itemId === 'css-float') {
    const boite = document.getElementById('boite');
    const lbl = document.getElementById('floatLabel');
    if (boite) {
      boite.style.transition = 'all 0.5s ease';
      if (step === 0) {
        // 🔴 AVANT : float: none ➔ Texte renvoyé en bas
        boite.style.float = 'none';
        boite.style.margin = '0 auto 10px auto';
        if (lbl) lbl.textContent = '🔴 ÉTAT 1 : AVANT (float: none; ➔ Flux normal : texte renvoyé en-dessous)';
      } else {
        // 🟢 APRÈS : float appliqué
        const fVal = opt ? opt.value : 'left';
        boite.style.float = fVal;
        boite.style.margin = fVal === 'left' ? '4px 14px 6px 0' : (fVal === 'right' ? '4px 0 6px 14px' : '0 auto 10px auto');
        if (lbl) lbl.textContent = `🟢 ÉTAT 2 : APRÈS (float: ${fVal}; ➔ Le texte s'enroule harmonieusement autour !)`;
      }
    }
    return;
  }

  // 6. POSITIONNEMENT (POSITION) - 1 VIDÉO DÉDIÉE PAR VALEUR
  if (itemId === 'css-position' || itemId === 'css-coords-top-bottom-left-right') {
    const boite = document.getElementById('boite');
    const badge = document.getElementById('posBadge');
    if (boite) {
      boite.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      if (step === 0) {
        // 🔴 AVANT : position: static à l'origine
        boite.style.position = 'static';
        boite.style.top = 'auto';
        boite.style.left = 'auto';
        boite.style.right = 'auto';
        boite.style.bottom = 'auto';
        if (badge) badge.textContent = '🔴 ÉTAT 1 : AVANT (position: static ➔ Emplacement naturel d\'origine)';
      } else {
        // 🟢 APRÈS : position et coordonnées
        if (opt && opt.css) {
          boite.style.cssText += opt.css;
        } else {
          boite.style.position = 'relative';
          boite.style.top = '30px';
          boite.style.left = '50px';
        }
        if (badge) badge.textContent = `🟢 ÉTAT 2 : APRÈS (${opt ? opt.label : 'Décalé'})`;
      }
    }
    return;
  }

  // 7. DÉBORDEMENT (OVERFLOW) - 1 VIDÉO DÉDIÉE PAR VALEUR
  if (itemId === 'css-overflow') {
    const boite = document.getElementById('boite');
    const badge = document.getElementById('overflowBadge');
    if (boite) {
      boite.style.height = '85px';
      if (step === 0) {
        // 🔴 AVANT : Débordement libre
        boite.style.overflow = 'visible';
        boite.style.borderColor = '#ef4444';
        if (badge) badge.textContent = '🔴 ÉTAT 1 : AVANT (overflow: visible ➔ Le texte déborde et brise le cadre)';
      } else {
        // 🟢 APRÈS : Débordement géré
        const oVal = opt ? opt.value : 'hidden';
        boite.style.overflow = oVal;
        boite.style.borderColor = '#10b981';
        if (oVal === 'scroll' || oVal === 'auto') boite.scrollTop = 35;
        if (badge) badge.textContent = `🟢 ÉTAT 2 : APRÈS (overflow: ${oVal}; ➔ Débordement maîtrisé proprement)`;
      }
    }
    return;
  }

  // 8. AFFICHAGE (DISPLAY) - 1 VIDÉO DÉDIÉE PAR VALEUR
  if (itemId === 'css-display') {
    const boite = document.getElementById('boite');
    if (boite) {
      if (step === 0) {
        // 🔴 AVANT : affichage normal
        boite.style.display = 'block';
        boite.style.width = '100%';
      } else {
        // 🟢 APRÈS : affichage choisi
        if (opt && opt.css) boite.style.cssText += opt.css;
      }
    }
    return;
  }

  // 9. ARRONDIS DES COINS (BORDER-RADIUS)
  if (itemId === 'css-border-radius') {
    box.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    if (step === 0) {
      box.style.borderRadius = '0px';
      box.innerHTML = `<span>#boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Coins stricts à 90°)</small></span>`;
    } else {
      const rVal = opt ? opt.value : '15px';
      box.style.borderRadius = rVal;
      box.innerHTML = `<span>#boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (border-radius: ${rVal} !)</small></span>`;
    }
    return;
  }

  // 10. OMBRE PORTÉE (BOX-SHADOW)
  if (itemId === 'css-box-shadow') {
    box.style.transition = 'all 0.4s ease';
    if (step === 0) {
      box.style.boxShadow = 'none';
      box.style.transform = 'translateY(0)';
      box.innerHTML = `<span>#boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Boîte 2D plate sans ombre)</small></span>`;
    } else {
      if (opt && opt.css) box.style.cssText += opt.css;
      box.style.transform = 'translateY(-4px)';
      box.innerHTML = `<span>#boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (box-shadow: ${opt ? opt.value : 'appliquée'} !)</small></span>`;
    }
    return;
  }

  // 11. ALIGNEMENT DU TEXTE (TEXT-ALIGN)
  if (itemId === 'css-text-align') {
    if (step === 0) {
      box.style.textAlign = 'left';
      box.innerHTML = `<span>Titre #h1<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Aligné à gauche par défaut)</small></span>`;
    } else {
      const aVal = opt ? opt.value : 'center';
      box.style.textAlign = aVal;
      box.innerHTML = `<span>Titre #h1<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (text-align: ${aVal} !)</small></span>`;
    }
    return;
  }

  // 12. POLICE DE CARACTÈRES (FONT-FAMILY)
  if (itemId === 'css-font-family') {
    if (step === 0) {
      box.style.fontFamily = 'serif';
      box.innerHTML = `<span>Texte de démo<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Police système standard)</small></span>`;
    } else {
      const fVal = opt ? opt.value : 'Arial, sans-serif';
      box.style.fontFamily = fVal;
      box.innerHTML = `<span>Texte de démo<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (font-family: ${fVal})</small></span>`;
    }
    return;
  }

  // 13. CASSE DU TEXTE (TEXT-TRANSFORM)
  if (itemId === 'css-text-transform') {
    const txt = document.getElementById('h1Text') || box;
    if (step === 0) {
      txt.style.textTransform = 'none';
      txt.innerHTML = `<span>Texte original<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Casse normale sans modification)</small></span>`;
    } else {
      const tVal = opt ? opt.value : 'uppercase';
      txt.style.textTransform = tVal;
      txt.innerHTML = `<span>Texte transformé<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (text-transform: ${tVal})</small></span>`;
    }
    return;
  }

  // 14. TRANSFORMATIONS (TRANSFORM)
  if (itemId === 'css-transform') {
    box.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    if (step === 0) {
      box.style.transform = 'rotate(0deg) scale(1) translate(0, 0)';
      box.innerHTML = `<span>#boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Position et taille originales)</small></span>`;
    } else {
      const trVal = opt ? opt.value : 'rotate(20deg)';
      box.style.transform = trVal;
      box.innerHTML = `<span>#boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (transform: ${trVal})</small></span>`;
    }
    return;
  }

  // 15. FILTRES GRAPHIQUES (FILTER)
  if (itemId === 'css-filter') {
    box.style.transition = 'filter 0.5s ease';
    if (step === 0) {
      box.style.filter = 'none';
      box.innerHTML = `<span>&lt;img id="img1"&gt;<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Image originale brute)</small></span>`;
    } else {
      const flVal = opt ? opt.value : 'grayscale(100%)';
      box.style.filter = flVal;
      box.innerHTML = `<span>&lt;img id="img1"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (filter: ${flVal})</small></span>`;
    }
    return;
  }

  // 16. TABLEAUX (BORDER-COLLAPSE & TABLE-LAYOUT)
  if (itemId === 'css-border-collapse') {
    box.style.borderCollapse = step === 1 ? (opt ? opt.value : 'collapse') : 'separate';
    box.style.backgroundColor = step === 1 ? 'rgba(56, 189, 248, 0.2)' : 'transparent';
    return;
  }
  if (itemId === 'css-table-layout') {
    box.style.tableLayout = step === 1 ? (opt ? opt.value : 'fixed') : 'auto';
    return;
  }

  // 17. LISTES (LIST-STYLE-TYPE, POSITION, IMAGE, SHORTHAND)
  if (itemId === 'css-list-style-type') {
    box.style.listStyleType = step === 1 ? (opt ? opt.value : 'circle') : 'disc';
    box.style.border = step === 1 ? '1px solid #38bdf8' : '1px dashed rgba(255,255,255,0.2)';
    return;
  }
  if (itemId === 'css-list-style-position') {
    box.style.listStylePosition = step === 1 ? (opt ? opt.value : 'inside') : 'outside';
    box.style.border = step === 1 ? '2px solid #10b981' : '2px dashed #ef4444';
    return;
  }
  if (itemId === 'css-list-style-image') {
    if (step === 0) {
      box.style.listStyleImage = 'none';
      box.style.listStyleType = 'disc';
    } else {
      if (opt && opt.value && opt.value.includes('url')) {
        box.style.listStyleImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23facc15\' width=\'16px\' height=\'16px\'%3E%3Cpath d=\'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\'/%3E%3C/svg%3E")';
      } else {
        box.style.listStyleImage = 'none';
        box.style.listStyleType = 'disc';
      }
    }
    return;
  }
  if (itemId === 'css-list-style-shorthand') {
    if (step === 0) {
      box.style.listStyle = 'disc outside none';
    } else {
      const sVal = opt ? opt.value : 'square inside';
      box.style.listStyle = sVal;
    }
    return;
  }

  // 18. ANIMATIONS & KEYFRAMES EN POURCENTAGES
  if (itemId === 'css-keyframes' || itemId.startsWith('css-animation')) {
    applyKeyframesProgress(box, step === 0 ? 0 : 100, variantIdx, itemId);
    return;
  }

  // 19. TRANSITIONS (TRANSITION-PROPERTY, DURATION, DELAY, SHORTHAND)
  if (itemId === 'css-transition-property') {
    box.style.transition = 'all 0.6s ease';
    if (step === 0) {
      box.style.transform = 'scale(1) rotate(0deg)';
      box.style.background = '#1e293b';
      box.style.borderColor = '#38bdf8';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Au repos)</small></span>`;
    } else {
      const pVal = opt ? opt.value : 'all';
      if (pVal === 'all') {
        box.style.transform = 'scale(1.15) rotate(5deg)';
        box.style.background = '#0284c7';
        box.style.borderColor = '#38bdf8';
      } else if (pVal === 'background-color') {
        box.style.background = '#10b981';
      } else if (pVal === 'transform') {
        box.style.transform = 'scale(1.18) rotate(-6deg)';
      }
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (transition-property: ${pVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-transition-duration') {
    const dVal = opt ? opt.value : '1s';
    box.style.transition = `all ${dVal} ease`;
    if (step === 0) {
      box.style.transform = 'scale(1)';
      box.style.background = '#1e293b';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Au repos)</small></span>`;
    } else {
      box.style.transform = 'scale(1.16)';
      box.style.background = '#0ea5e9';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (transition-duration: ${dVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-transition-delay') {
    const delVal = opt ? opt.value : '1s';
    box.style.transition = `all 0.6s ease ${delVal}`;
    if (step === 0) {
      box.style.transform = 'scale(1)';
      box.style.background = '#1e293b';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Au repos)</small></span>`;
    } else {
      box.style.transform = 'scale(1.16)';
      box.style.background = '#f59e0b';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (transition-delay: ${delVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-transition-shorthand') {
    const sVal = opt ? opt.value : 'all 0.5s ease';
    box.style.transition = sVal;
    if (step === 0) {
      box.style.transform = 'scale(1) rotate(0deg)';
      box.style.background = '#1e293b';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Au repos)</small></span>`;
    } else {
      box.style.transform = 'scale(1.18) rotate(4deg)';
      box.style.background = '#ec4899';
      box.innerHTML = `<span>📦 &lt;div id="boite"&gt;<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (transition: ${sVal})</small></span>`;
    }
    return;
  }

  // 20. ARRIÈRE-PLANS (BACKGROUND-*)
  if (itemId === 'css-background-color') {
    box.style.transition = 'all 0.5s ease';
    if (step === 0) {
      box.style.backgroundColor = 'transparent';
      box.style.border = '2px dashed #64748b';
      box.style.color = '#94a3b8';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (background-color: transparent)</small></span>`;
    } else {
      const bgVal = opt ? opt.value : '#38bdf8';
      box.style.backgroundColor = bgVal;
      box.style.border = '2px solid transparent';
      box.style.color = '#fff';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (background-color: ${bgVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-background-image') {
    box.style.transition = 'all 0.5s ease';
    if (step === 0) {
      box.style.backgroundImage = 'none';
      box.style.backgroundColor = '#1e293b';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Sans image de fond)</small></span>`;
    } else {
      const imgVal = opt ? opt.value : 'linear-gradient(135deg, #6366f1, #ec4899)';
      box.style.backgroundImage = imgVal;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (background-image: ${imgVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-background-repeat') {
    box.style.transition = 'all 0.5s ease';
    box.style.backgroundImage = 'radial-gradient(#38bdf8 3px, transparent 3px)';
    box.style.backgroundSize = '24px 24px';
    if (step === 0) {
      box.style.backgroundRepeat = 'repeat';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (repeat : Répétition totale en mosaïque)</small></span>`;
    } else {
      const repVal = opt ? opt.value : 'no-repeat';
      box.style.backgroundRepeat = repVal;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (background-repeat: ${repVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-background-size') {
    box.style.transition = 'all 0.5s ease';
    box.style.backgroundImage = 'linear-gradient(135deg, #0284c7, #6366f1)';
    if (step === 0) {
      box.style.backgroundSize = 'auto';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (background-size: auto)</small></span>`;
    } else {
      const szVal = opt ? opt.value : 'cover';
      box.style.backgroundSize = szVal;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (background-size: ${szVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-background-shorthand') {
    box.style.transition = 'all 0.5s ease';
    if (step === 0) {
      box.style.background = '#1e293b';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Fond uni standard)</small></span>`;
    } else {
      if (opt && opt.css) box.style.cssText += opt.css;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (background: ${opt ? opt.value : 'appliqué'})</small></span>`;
    }
    return;
  }

  // 21. BORDURES (BORDER-COLOR & BORDER-WIDTH)
  if (itemId === 'css-border-color') {
    box.style.transition = 'all 0.4s ease';
    if (step === 0) {
      box.style.border = '4px solid #334155';
      box.style.boxShadow = 'none';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Bordure grise neutre)</small></span>`;
    } else {
      const cVal = opt ? opt.value : '#38bdf8';
      box.style.border = `4px solid ${cVal}`;
      box.style.boxShadow = `0 0 16px ${cVal}88`;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (border-color: ${cVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-border-width') {
    box.style.transition = 'all 0.4s ease';
    if (step === 0) {
      box.style.border = '1px solid #38bdf8';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Épaisseur 1px fine)</small></span>`;
    } else {
      const wVal = opt ? opt.value : '6px';
      box.style.border = `${wVal} solid #38bdf8`;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (border-width: ${wVal})</small></span>`;
    }
    return;
  }

  // 22. TYPOGRAPHIE & TEXTE (FONT-WEIGHT, FONT-STYLE, FONT-SIZE, FONT-SHORTHAND, COLOR, TEXT-SHADOW)
  if (itemId === 'css-font-weight') {
    const txt = document.getElementById('h1Text') || box;
    if (step === 0) {
      box.style.fontWeight = 'normal';
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (font-weight: normal / 400)</small></span>`;
    } else {
      const wVal = opt ? opt.value : 'bold';
      box.style.fontWeight = wVal;
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (font-weight: ${wVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-font-style') {
    const txt = document.getElementById('h1Text') || box;
    if (step === 0) {
      box.style.fontStyle = 'normal';
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (font-style: normal / Droit)</small></span>`;
    } else {
      const sVal = opt ? opt.value : 'italic';
      box.style.fontStyle = sVal;
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (font-style: ${sVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-font-size') {
    const txt = document.getElementById('h1Text') || box;
    if (step === 0) {
      box.style.fontSize = '16px';
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (font-size: 16px standard)</small></span>`;
    } else {
      const szVal = opt ? opt.value : '26px';
      box.style.fontSize = szVal;
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (font-size: ${szVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-font-shorthand') {
    const txt = document.getElementById('h1Text') || box;
    if (step === 0) {
      box.style.font = 'normal normal 16px serif';
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Police par défaut serif brute)</small></span>`;
    } else {
      const fVal = opt ? opt.value : 'italic bold 22px Arial, sans-serif';
      box.style.font = fVal;
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (font: ${fVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-color') {
    const txt = document.getElementById('h1Text') || box;
    if (step === 0) {
      box.style.color = '#94a3b8';
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (color: #94a3b8 gris neutre)</small></span>`;
    } else {
      const cVal = opt ? opt.value : '#38bdf8';
      box.style.color = cVal;
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (color: ${cVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-text-shadow') {
    const txt = document.getElementById('h1Text') || box;
    if (step === 0) {
      box.style.textShadow = 'none';
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (Sans ombre de texte)</small></span>`;
    } else {
      const shVal = opt ? opt.value : '2px 2px 6px #38bdf8';
      box.style.textShadow = shVal;
      txt.innerHTML = `<span>Titre #h1<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (text-shadow: ${shVal})</small></span>`;
    }
    return;
  }

  // 23. DIMENSIONS & OPACITÉ (WIDTH, HEIGHT, OPACITY)
  if (itemId === 'css-width') {
    box.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    if (step === 0) {
      box.style.width = '120px';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (width: 120px)</small></span>`;
    } else {
      const wVal = opt ? opt.value : '260px';
      box.style.width = wVal;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (width: ${wVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-height') {
    box.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    if (step === 0) {
      box.style.height = '60px';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (height: 60px)</small></span>`;
    } else {
      const hVal = opt ? opt.value : '130px';
      box.style.height = hVal;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (height: ${hVal})</small></span>`;
    }
    return;
  }

  if (itemId === 'css-opacity') {
    box.style.transition = 'all 0.5s ease';
    if (step === 0) {
      box.style.opacity = '1.0';
      box.innerHTML = `<span>📦 #boite<br><small style="color:#ef4444; font-weight:bold;">🔴 ÉTAT 1 : AVANT (opacity: 1.0 ➔ Opaque)</small></span>`;
    } else {
      const opVal = opt ? opt.value : '0.35';
      box.style.opacity = opVal;
      box.innerHTML = `<span>📦 #boite<br><small style="color:#4ade80; font-weight:bold;">🟢 ÉTAT 2 : APRÈS (opacity: ${opVal} ➔ Transparent)</small></span>`;
    }
    return;
  }

  // 24. TOUT AUTRE ÉLÉMENT AVEC VARIANTES DANS VARIETIES_CONFIG
  if (opt && opt.css) {
    if (step === 0) {
      box.style.transform = 'scale(1)';
    } else {
      box.style.cssText += opt.css;
      box.style.transform = 'scale(1.05)';
    }
    return;
  }

  // 25. ANIMATION PAR DÉFAUT
  if (step === 0) {
    box.style.transform = 'scale(1)';
  } else {
    box.style.transform = 'scale(1.08)';
  }
}

function toggleVideoPlay(itemId) {
  isVideoPlaying = !isVideoPlaying;
  const btn = document.getElementById('playPauseVideoBtn');
  if (btn) btn.textContent = isVideoPlaying ? '⏸' : '▶';
}

function replayVideo(itemId) {
  startVideoSimulation(itemId || currentVideoItemId, currentVideoVariantIdx);
}

function enableHoverStageTest() {
  const stage = document.getElementById('videoStage');
  const box = stage ? (stage.querySelector('#boite') || stage.querySelector('.demo-box') || stage.querySelector('#h1') || stage.querySelector('#tab') || stage.querySelector('#img1') || stage.querySelector('#liste') || stage.firstElementChild) : null;
  if (!box) return;
  alert("Mode Survol Activé ! Survolez maintenant l'élément (#" + (box.id || 'element') + ") avec votre curseur pour tester l'effet :hover.");
  box.onmouseenter = () => {
    box.style.transform = 'scale(1.12) translateY(-4px)';
    box.style.boxShadow = '0 12px 28px rgba(250, 204, 21, 0.85)';
    box.style.borderColor = '#facc15';
  };
  box.onmouseleave = () => {
    box.style.transform = 'scale(1) translateY(0)';
    box.style.boxShadow = '';
    box.style.borderColor = '';
  };
}

// -------------------------------------------------------------
// 8. GESTION DES VARIANTES INTERACTIVES (BOUTONS RADIO)
// -------------------------------------------------------------
function applyCssVariety(itemId, optionIdx, labelElement) {
  playSpecificVideo(itemId, optionIdx);
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



// =============================================================
// MODULE COURS & SÉRIES PDF + ESPACE ENSEIGNANT (/admin)
// Conforme au Programme Officiel Baccalauréat STI Tunisie
// =============================================================

let allLessons = [];
let currentLessonSubject = 'all';
let currentLessonType = 'all';
let currentLessonSearch = '';
let isAdminLoggedIn = false;
let selectedAdminFile = null;
let adminFilterSubject = 'all';

// -------------------------------------------------------------
// Base de données IndexedDB (Zéro limite Vercel / Stockage local)
// -------------------------------------------------------------
const STILessonsDB = {
  dbName: 'STILessonsDatabase',
  version: 1,
  storeName: 'custom_lessons',
  db: null,

  init() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn("IndexedDB non disponible sur ce navigateur.");
        return resolve(false);
      }
      const request = indexedDB.open(this.dbName, this.version);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(true);
      };
      request.onerror = () => {
        resolve(false);
      };
    });
  },

  getAll() {
    return new Promise((resolve) => {
      if (!this.db) return resolve([]);
      try {
        const tx = this.db.transaction(this.storeName, 'readonly');
        const store = tx.objectStore(this.storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } catch (e) {
        resolve([]);
      }
    });
  },

  save(lesson) {
    return new Promise((resolve) => {
      if (!this.db) return resolve(false);
      try {
        const tx = this.db.transaction(this.storeName, 'readwrite');
        const store = tx.objectStore(this.storeName);
        store.put(lesson);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  },

  delete(id) {
    return new Promise((resolve) => {
      if (!this.db) return resolve(false);
      try {
        const tx = this.db.transaction(this.storeName, 'readwrite');
        const store = tx.objectStore(this.storeName);
        store.delete(id);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  },

  clear() {
    return new Promise((resolve) => {
      if (!this.db) return resolve(false);
      try {
        const tx = this.db.transaction(this.storeName, 'readwrite');
        const store = tx.objectStore(this.storeName);
        store.clear();
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (e) {
        resolve(false);
      }
    });
  }
};

// -------------------------------------------------------------
// Initialisation du Module Leçons & Vérification Routage URL
// -------------------------------------------------------------
async function initLessonsModule() {
  await STILessonsDB.init();
  const customLessons = await STILessonsDB.getAll();

  const defaultLessons = (DATA && DATA.lessons) ? DATA.lessons : [];
  allLessons = [...customLessons, ...defaultLessons];

  renderLessons();

  // Écoute des changements d'URL hash
  window.addEventListener('hashchange', checkUrlRouting);
  checkUrlRouting();
}

function checkUrlRouting() {
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();

  if (hash === '#admin' || path.endsWith('/admin')) {
    switchView('admin');
  } else if (hash === '#lessons' || path.endsWith('/lessons') || path.endsWith('/cours')) {
    // Section cours masquée temporairement sur demande de l'utilisateur
    switchView('home');
  } else if (hash === '#html') {
    switchView('html');
  } else if (hash === '#css') {
    switchView('css');
  } else if (hash === '#js') {
    switchView('js');
  } else if (hash === '#sql') {
    switchView('sql');
  }
}

// -------------------------------------------------------------
// Rendu & Filtres des Leçons Élèves
// -------------------------------------------------------------
function renderLessons() {
  const grid = document.getElementById('lessonsGrid');
  const counterBadge = document.getElementById('lessonsCounterBadge');
  if (!grid) return;

  const filtered = allLessons.filter(lesson => {
    const matchSubject = (currentLessonSubject === 'all' || lesson.subject === currentLessonSubject);
    const matchType = (currentLessonType === 'all' || lesson.type === currentLessonType);
    const q = currentLessonSearch.toLowerCase().trim();
    const matchSearch = !q ||
      lesson.title.toLowerCase().includes(q) ||
      (lesson.description && lesson.description.toLowerCase().includes(q)) ||
      (lesson.subjectLabel && lesson.subjectLabel.toLowerCase().includes(q)) ||
      (lesson.tags && lesson.tags.some(t => t.toLowerCase().includes(q)));
    return matchSubject && matchType && matchSearch;
  });

  if (counterBadge) {
    counterBadge.textContent = `${filtered.length} Document${filtered.length > 1 ? 's' : ''} Disponible${filtered.length > 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <span style="font-size: 2.4rem; display: block; margin-bottom: 10px;">🔍</span>
        <h4 style="color: #cbd5e1; font-size: 1.1rem; margin-bottom: 6px;">Aucun document ne correspond à vos critères</h4>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0;">
          Modifiez vos filtres ou effectuez une autre recherche par mot-clé (ex: HTML, CSS, JS, SQL, LDD, verif...).
        </p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(lesson => {
    const subjClass = lesson.subject || 'html';
    return `
      <div class="lesson-card ${subjClass}">
        <div>
          <div class="lesson-card-header">
            <span class="subject-badge ${subjClass}">${escapeHtml(lesson.subjectLabel || lesson.subject.toUpperCase())}</span>
            <span style="background: rgba(255,255,255,0.08); font-size: 0.75rem; padding: 3px 8px; border-radius: 4px; color: #cbd5e1; font-weight: 600;">
              ${escapeHtml(lesson.typeLabel || lesson.type)}
            </span>
          </div>

          <h3 class="lesson-card-title">${escapeHtml(lesson.title)}</h3>
          <p class="lesson-card-desc">${escapeHtml(lesson.description || lesson.summary || 'Document de cours officiel Bac STI.')}</p>
        </div>

        <div>
          <div class="lesson-card-meta">
            <span>📅 ${escapeHtml(lesson.date || '2025')} • ${escapeHtml(lesson.fileSize || 'PDF')}</span>
            <span style="font-style: italic;">${escapeHtml(lesson.author || 'Enseignant')}</span>
          </div>

          <div class="lesson-card-actions">
            <button class="lesson-btn-view" onclick="openPdfModal('${lesson.id}')">
              <span>👁️</span>
              <span>Consulter le PDF</span>
            </button>
            <button class="lesson-btn-download" onclick="downloadLessonPdf('${lesson.id}')" title="Télécharger le fichier PDF sur votre appareil">
              <span>⬇️</span>
              <span>Télécharger</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterLessonsBySubject(subj) {
  currentLessonSubject = subj;
  document.querySelectorAll('.subject-tab').forEach(btn => {
    if (btn.getAttribute('data-subject') === subj) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderLessons();
}

function filterLessonsByType(type) {
  currentLessonType = type;
  document.querySelectorAll('#lessonTypeFilterBar .cat-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (event && event.target) {
    event.target.classList.add('active');
  }
  renderLessons();
}

function handleLessonSearch(query) {
  currentLessonSearch = query;
  renderLessons();
}

// -------------------------------------------------------------
// Lecteur PDF Interactif & Modale
// -------------------------------------------------------------
function openPdfModal(lessonId) {
  const lesson = allLessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const modal = document.getElementById('pdfViewerModal');
  const title = document.getElementById('pdfModalTitle');
  const cat = document.getElementById('pdfModalCategory');
  const body = document.getElementById('pdfModalBody');
  const downloadBtn = document.getElementById('pdfModalDownloadBtn');

  if (title) title.textContent = lesson.title;
  if (cat) {
    cat.textContent = `PDF • ${lesson.subjectLabel} • ${lesson.typeLabel}`;
    cat.className = `category-label ${lesson.subject}`;
  }
  if (downloadBtn) {
    downloadBtn.onclick = () => downloadLessonPdf(lesson.id);
  }

  // Si c'est un fichier PDF réel téléversé par le prof (data URL ou blob ou lien externe)
  if (lesson.fileData) {
    body.innerHTML = `
      <iframe src="${lesson.fileData}" class="pdf-reader-frame" style="width:100%; height:100%; border:none;"></iframe>
    `;
  } else if (lesson.pdfUrl) {
    body.innerHTML = `
      <iframe src="${lesson.pdfUrl}" class="pdf-reader-frame" style="width:100%; height:100%; border:none;"></iframe>
    `;
  } else {
    // Rendu haute fidélité format document d'examen imprimable
    body.innerHTML = `
      <div style="flex: 1; overflow-y: auto; padding: 24px; background: #0f172a;">
        <div class="pdf-print-sheet">
          <div style="border-bottom: 2px solid #0f172a; padding-bottom: 14px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <div style="font-size: 0.78rem; text-transform: uppercase; font-weight: 800; color: #475569;">République Tunisienne • Ministère de l'Éducation</div>
              <div style="font-size: 1.15rem; font-weight: 900; color: #0f172a;">BACCALAURÉAT SECTION SCIENCES & TECHNOLOGIES DE L'INFORMATIQUE (STI)</div>
              <div style="font-size: 0.85rem; color: #64748b; font-weight: 600;">Matière : ${escapeHtml(lesson.subjectLabel)} • Document : ${escapeHtml(lesson.typeLabel)}</div>
            </div>
            <div style="text-align: right;">
              <span style="background: #0f172a; color: #fff; padding: 4px 10px; border-radius: 4px; font-weight: 800; font-size: 0.78rem;">BAC STI</span>
              <div style="font-size: 0.8rem; color: #64748b; margin-top: 4px;">Session 2025</div>
            </div>
          </div>

          <h2 style="color: #1e3a8a; font-size: 1.4rem; margin-bottom: 12px; font-weight: 800;">${escapeHtml(lesson.title)}</h2>
          
          <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 16px; border-radius: 4px; margin-bottom: 22px; font-size: 0.95rem; color: #334155; line-height: 1.6;">
            <strong>Résumé du cours :</strong> ${escapeHtml(lesson.summary || lesson.description)}
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #0f172a; font-size: 1.1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 12px;">1. Objectifs & Notions Clés du Programme STI</h3>
            <ul style="padding-left: 20px; line-height: 1.7; color: #334155;">
              <li>Mémoriser la syntaxe exacte exigée aux épreuves officielles.</li>
              <li>Savoir appliquer les règles de validation et de structuration sans aucune dépendance externe.</li>
              <li>Respecter scrupuleusement les consignes et identifiants du sujet d'examen.</li>
            </ul>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #0f172a; font-size: 1.1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 12px;">2. Consignes & Recommandations de l'Enseignant</h3>
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 14px; font-size: 0.92rem; color: #1e40af; line-height: 1.6;">
              ${escapeHtml(lesson.description || "Ce document constitue un support officiel de révision pour le Bac STI. Traitez les exercices étape par étape.")}
            </div>
          </div>

          <div style="margin-top: 32px; padding-top: 14px; border-top: 1px dashed #cbd5e1; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #64748b;">
            <span>Auteur : ${escapeHtml(lesson.author || 'Professeur')} • Date : ${escapeHtml(lesson.date)}</span>
            <span>Document imprimable en PDF • STI de A à Z</span>
          </div>

          <div style="margin-top: 24px; text-align: center;" class="no-print">
            <button onclick="window.print()" style="background: #2563eb; color: #fff; border: none; padding: 10px 22px; border-radius: 6px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              <span>🖨️</span>
              <span>Imprimer ou Enregistrer en PDF (Ctrl + P)</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('active');
}

function closePdfModal() {
  const modal = document.getElementById('pdfViewerModal');
  if (modal) modal.classList.remove('active');
  const body = document.getElementById('pdfModalBody');
  if (body) body.innerHTML = '';
}

function downloadLessonPdf(lessonId) {
  const lesson = allLessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const fileName = lesson.downloadName || `BacSTI_${lesson.subject}_${lesson.id}.pdf`;

  // Si c'est un fichier réel téléversé par le prof
  if (lesson.fileData) {
    const a = document.createElement('a');
    a.href = lesson.fileData;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
  }

  if (lesson.pdfUrl) {
    window.open(lesson.pdfUrl, '_blank');
    return;
  }

  // Génération d'un fichier HTML / PDF téléchargeable pour les leçons pré-intégrées
  const printHtml = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>${lesson.title} - Bac STI Tunisie</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 30px; color: #111; line-height: 1.6; }
        .header { border-bottom: 2px solid #111; padding-bottom: 10px; margin-bottom: 20px; }
        .title { font-size: 18pt; font-weight: bold; color: #1e3a8a; }
        .box { background: #f1f5f9; padding: 12px; border-left: 4px solid #2563eb; margin: 15px 0; }
        footer { margin-top: 40px; font-size: 9pt; color: #666; border-top: 1px solid #ccc; padding-top: 8px; }
      </style>
    </head>
    <body>
      <div class="header">
        <strong>RÉPUBLIQUE TUNISIENNE • MINISTÈRE DE L'ÉDUCATION</strong><br>
        BACCALAURÉAT STI • ${lesson.subjectLabel} (${lesson.typeLabel})
      </div>
      <h1 class="title">${lesson.title}</h1>
      <div class="box">${lesson.description || lesson.summary}</div>
      <p>Auteur : ${lesson.author} • Date de publication : ${lesson.date}</p>
      <footer>Document pédagogique officiel - Portail STI de A à Z</footer>
      <script>window.print();</script>
    </body>
    </html>
  `;

  const blob = new Blob([printHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (!win) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lesson.title}.html`;
    a.click();
  }
}

// -------------------------------------------------------------
// ESPACE ENSEIGNANT (/admin) : Authentification & Téléversement
// -------------------------------------------------------------
function handleAdminLogin(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('adminPasswordInput');
  const errorBox = document.getElementById('adminLoginError');
  const loginCard = document.getElementById('adminLoginCard');
  const dash = document.getElementById('adminDashboard');

  const correctPw = localStorage.getItem('sti_admin_pw') || 'sti2025';

  if (input && input.value === correctPw) {
    isAdminLoggedIn = true;
    if (errorBox) errorBox.style.display = 'none';
    if (loginCard) loginCard.style.display = 'none';
    if (dash) dash.style.display = 'block';
    renderAdminLessonsTable();
    input.value = '';
  } else {
    if (errorBox) {
      errorBox.style.display = 'block';
      errorBox.textContent = "⚠️ Mot de passe incorrect. (Par défaut : sti2025)";
    }
  }
}

function handleAdminLogout() {
  isAdminLoggedIn = false;
  const loginCard = document.getElementById('adminLoginCard');
  const dash = document.getElementById('adminDashboard');
  if (loginCard) loginCard.style.display = 'block';
  if (dash) dash.style.display = 'none';
}

function toggleAdminPdfMode(mode) {
  const fileWrap = document.getElementById('adminPdfFileWrap');
  const linkWrap = document.getElementById('adminPdfLinkWrap');
  if (mode === 'file') {
    if (fileWrap) fileWrap.style.display = 'block';
    if (linkWrap) linkWrap.style.display = 'none';
  } else {
    if (fileWrap) fileWrap.style.display = 'none';
    if (linkWrap) linkWrap.style.display = 'block';
  }
}

function handleAdminFileSelected(e) {
  const file = e.target.files[0];
  const label = document.getElementById('adminSelectedFileName');
  if (file) {
    selectedAdminFile = file;
    const sizeMo = (file.size / (1024 * 1024)).toFixed(2);
    if (label) {
      label.style.display = 'block';
      label.textContent = `✓ Fichier sélectionné : ${file.name} (${sizeMo} Mo)`;
    }
  } else {
    selectedAdminFile = null;
    if (label) label.style.display = 'none';
  }
}

async function handleUploadLesson(e) {
  if (e) e.preventDefault();

  const titleInput = document.getElementById('adminLessonTitle');
  const subjectSelect = document.getElementById('adminLessonSubject');
  const typeSelect = document.getElementById('adminLessonType');
  const authorInput = document.getElementById('adminLessonAuthor');
  const descInput = document.getElementById('adminLessonDesc');
  const linkInput = document.getElementById('adminPdfLinkInput');
  const modeRadios = document.getElementsByName('adminPdfMode');

  const title = titleInput.value.trim();
  const subject = subjectSelect.value;
  const type = typeSelect.value;
  const author = authorInput.value.trim() || "Professeur d'Informatique (Bac STI)";
  const desc = descInput.value.trim();

  let isFileMode = true;
  for (let r of modeRadios) {
    if (r.checked && r.value === 'link') isFileMode = false;
  }

  let fileData = null;
  let fileSize = "1 Mo";
  let pdfUrl = null;

  if (isFileMode) {
    if (!selectedAdminFile) {
      alert("Veuillez sélectionner un fichier PDF local à téléverser !");
      return;
    }
    // Lecture du fichier en Data URL (stockable en IndexedDB sans limite Vercel)
    fileSize = `${(selectedAdminFile.size / (1024 * 1024)).toFixed(2)} Mo`;
    fileData = await readFileAsDataUrl(selectedAdminFile);
  } else {
    pdfUrl = linkInput.value.trim();
    if (!pdfUrl) {
      alert("Veuillez saisir le lien vers le document PDF (Google Drive ou lien web) !");
      return;
    }
    fileSize = "Lien Cloud";
  }

  const subjectLabels = {
    html: "HTML5",
    css: "CSS3",
    js: "JavaScript",
    sql: "SQL (Bases de Données)"
  };

  const typeLabels = {
    cours: "📖 Cours",
    serie: "📝 Série d'exercices",
    devoir: "📑 Devoir de Contrôle",
    corrige: "🎯 Corrigé Type",
    resume: "📌 Fiche Résumé"
  };

  const newLesson = {
    id: `custom-lesson-${Date.now()}`,
    title: title,
    subject: subject,
    subjectLabel: subjectLabels[subject] || subject.toUpperCase(),
    type: type,
    typeLabel: typeLabels[type] || type,
    date: new Date().toISOString().split('T')[0],
    author: author,
    fileSize: fileSize,
    description: desc || "Document PDF déposé par l'enseignant pour les révisions du Bac STI.",
    summary: desc,
    fileData: fileData,
    pdfUrl: pdfUrl,
    downloadName: selectedAdminFile ? selectedAdminFile.name : `${title}.pdf`,
    isCustom: true
  };

  // Enregistrement dans IndexedDB
  await STILessonsDB.save(newLesson);

  // Ajout en tête de liste
  allLessons.unshift(newLesson);

  // Réinitialisation du formulaire
  titleInput.value = '';
  descInput.value = '';
  if (linkInput) linkInput.value = '';
  const fileInput = document.getElementById('adminPdfFileInput');
  if (fileInput) fileInput.value = '';
  const label = document.getElementById('adminSelectedFileName');
  if (label) label.style.display = 'none';
  selectedAdminFile = null;

  alert(`✓ Leçon "${title}" publiée avec succès ! Elle est maintenant disponible pour les élèves.`);

  renderAdminLessonsTable();
  renderLessons();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function filterAdminTable(subj) {
  adminFilterSubject = subj;
  document.querySelectorAll('#adminSubjectFilterWrap .cat-btn').forEach(b => b.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  renderAdminLessonsTable();
}

function renderAdminLessonsTable() {
  const tbody = document.getElementById('adminLessonsTableBody');
  if (!tbody) return;

  const filtered = allLessons.filter(l => adminFilterSubject === 'all' || l.subject === adminFilterSubject);

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding:20px; color:#94a3b8;">
          Aucun document trouvé pour la matière sélectionnée.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(l => {
    return `
      <tr>
        <td style="padding:10px 12px;">
          <span class="subject-badge ${l.subject}">${escapeHtml(l.subjectLabel || l.subject)}</span>
        </td>
        <td style="padding:10px 12px; font-weight:600; color:#f8fafc;">
          ${escapeHtml(l.title)}
        </td>
        <td style="padding:10px 12px; color:#cbd5e1;">
          ${escapeHtml(l.typeLabel || l.type)}
        </td>
        <td style="padding:10px 12px; font-size:0.8rem; color:#94a3b8;">
          ${escapeHtml(l.fileSize || 'PDF')}
        </td>
        <td style="padding:10px 12px; text-align:right;">
          <button class="admin-action-btn view" onclick="openPdfModal('${l.id}')">👁️ Aperçu</button>
          <button class="admin-action-btn view" onclick="downloadLessonPdf('${l.id}')">⬇️ Télécharger</button>
          ${l.isCustom ? `<button class="admin-action-btn del" onclick="deleteLesson('${l.id}')">🗑️ Supprimer</button>` : ''}
        </td>
      </tr>
    `;
  }).join('');
}

async function deleteLesson(id) {
  if (!confirm("Voulez-vous vraiment supprimer ce document ?")) return;

  await STILessonsDB.delete(id);
  allLessons = allLessons.filter(l => l.id !== id);

  renderAdminLessonsTable();
  renderLessons();
  alert("✓ Document supprimé avec succès.");
}

async function exportAllLessonsBackup() {
  const custom = await STILessonsDB.getAll();
  const backup = {
    version: 1,
    exportedAt: new Date().toISOString(),
    customLessons: custom
  };

  const str = JSON.stringify(backup, null, 2);
  const blob = new Blob([str], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Sauvegarde_Cours_STI_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importLessonsBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const data = JSON.parse(reader.result);
      if (data && Array.isArray(data.customLessons)) {
        for (let l of data.customLessons) {
          await STILessonsDB.save(l);
        }
        await initLessonsModule();
        alert(`✓ Sauvegarde importée avec succès (${data.customLessons.length} documents restaurés) !`);
      } else {
        alert("Fichier de sauvegarde invalide.");
      }
    } catch (err) {
      alert("Erreur lors de la lecture du fichier de sauvegarde : " + err.message);
    }
  };
  reader.readAsText(file);
}

async function resetToDefaultLessons() {
  if (!confirm("Voulez-vous réinitialiser et recharger les 10 leçons officielles de référence ?")) return;
  await STILessonsDB.clear();
  await initLessonsModule();
  alert("✓ Documents réinitialisés au programme officiel.");
}
