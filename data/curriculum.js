/**
 * =============================================================
 * CURRICULUM OFFICIEL — SOURCE UNIQUE DE VÉRITÉ (STI DE A À Z)
 * Conforme au Baccalauréat STI & Algorithme Bac Informatique (Tunisie)
 * =============================================================
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CURRICULUM = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // SVG Icons haute précision pour chaque matière et chapitre
  const ICONS = {
    html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4.5v9L12 22l-8-6.5v-9L12 2z"></path><path d="M12 22V12"></path></svg>',
    css: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path></svg>',
    js: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    sql: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    algoPratique: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 8h10"></path><path d="M7 12h10"></path><path d="M7 16h10"></path></svg>',
    fichiers: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>',
    recursivite: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>',
    bases: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
    arithmetique: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="8" x2="12" y2="16"></line></svg>',
    approximation: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9 4-6 5 11 6-4"></path></svg>',
    tableaux: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>',
    matrices: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="8" cy="8" r="1"></circle><circle cx="16" cy="8" r="1"></circle><circle cx="8" cy="16" r="1"></circle><circle cx="16" cy="16" r="1"></circle><circle cx="12" cy="12" r="1"></circle></svg>',
    suites: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h2"></path><path d="M8 12h4"></path><path d="M16 12h6"></path><circle cx="5" cy="12" r="1"></circle><circle cx="14" cy="12" r="1"></circle></svg>'
  };

  // Liste des 8 chapitres officiels d'Algorithmique
  const ALGO_CHAPTERS = [
    {
      order: 1,
      slug: 'fichiers',
      title: 'Fichiers (binaires & texte)',
      fullTitle: 'Chapitre 1 : Les fichiers binaires et fichiers texte',
      shortTitle: 'Fichiers Binaires & Texte',
      iconEmoji: '📁',
      iconSvg: ICONS.fichiers,
      color: '#34d399',
      borderColor: '#10b981',
      bgTint: 'rgba(16, 185, 129, 0.1)',
      description: "Fichiers texte (lignes) et fichiers d'enregistrements binaires (module pickle dump/load sous Thonny).",
      coursBrief: {
        keyNotions: [
          "Fichiers texte (.txt) : suite séquentielle de lignes de caractères, manipulés ligne par ligne.",
          "Fichiers d'enregistrements binaires (.dat) : suite d'objets structurés (enregistrements) stockés en binaire.",
          "T.D.N.T obligatoire : déclarer le type Enregistrement puis le type Fichier de <NomEnregistrement>.",
          "Parcours séquentiel canonique : boucle 'Tant que NON Fin_fichier(f) Faire' pour traiter chaque élément."
        ],
        syntaxRules: [
          "Pseudo-code : Ouvrir(f, 'chemin', mode) ('L'=lecture, 'E'=écriture/création, 'A'=ajout). Fermer(f) impératif !",
          "Python / Thonny : with open(path, 'rb') as f: puis pickle.load(f) protégé par un try ... except EOFError:."
        ],
        bacTips: [
          "Ne jamais oublier de fermer le fichier (Fermer(f)) à la fin du sous-programme.",
          "Attention au mode d'ouverture : l'écriture 'E' efface tout le fichier existant, l'ajout 'A' conserve les données."
        ]
      },
      pdfSubjectKey: 'algo-ch1-fichiers',
      legacyPdfKeys: ['algo-ch1-fichiers'],
      legacyCategories: [
        'Chapitre 1 : Les fichiers binaires et fichiers texte',
        'Chapitre 1 : Les fichiers binaires et fichier text',
        'Chapitre 1 : Les structures de données (Fichiers & Enregistrements)',
        'fichiers'
      ],
      tags: ["algo", "algorithme", "fichiers", "texte", "binaire", "pickle", "dump", "load", "eof", "recréer", "ouvrir", "associer"]
    },
    {
      order: 2,
      slug: 'recursivite',
      title: 'Récursivité',
      fullTitle: 'Chapitre 2 : Récursivité',
      shortTitle: 'Récursivité',
      iconEmoji: '🔄',
      iconSvg: ICONS.recursivite,
      color: '#60a5fa',
      borderColor: '#3b82f6',
      bgTint: 'rgba(59, 130, 246, 0.1)',
      description: "Sous-programmes récursifs : cas de base, condition d'arrêt, décomposition et appels récursifs conformes Bac.",
      coursBrief: {
        keyNotions: [
          "Principe : un sous-programme qui s'appelle lui-même sur une instance strictement plus petite du problème.",
          "Cas de base (condition d'arrêt) : cas trivial résolu immédiatement sans aucun appel récursif.",
          "Cas général : appel récursif avec des arguments convergeant obligatoirement vers le cas de base.",
          "Mécanisme interne : empilement des contextes d'appel sur la pile d'exécution, puis dépilement au retour."
        ],
        syntaxRules: [
          "Structure type : Si (condition d'arrêt) Alors Résultat <-- valeur_base Sinon Résultat <-- expression_avec_appel(n-1) Fin Si.",
          "Une fonction récursive doit TOUJOURS renvoyer une valeur dans chacune des branches d'exécution."
        ],
        bacTips: [
          "Erreur fatale au Bac : oublier le cas d'arrêt provoque une récursion infinie (RecursionError sous Python).",
          "Toujours tracer sur papier avec n=3 pour vérifier la valeur de retour finale."
        ]
      },
      pdfSubjectKey: 'algo-ch2-recursivite',
      legacyPdfKeys: ['algo-ch2-recurrence'],
      legacyCategories: [
        'Chapitre 2 : Récursivité',
        'Chapitre 2 : Récurrence',
        'Chapitre 2 : La récursivité',
        'recursivite',
        'recurrence'
      ],
      tags: ["algo", "algorithme", "recurrence", "recursivite", "base", "general", "arret", "pile"]
    },
    {
      order: 3,
      slug: 'bases',
      title: 'Conversion entre les bases',
      fullTitle: 'Chapitre 3 : Conversion entre les bases',
      shortTitle: 'Conversion des Bases',
      iconEmoji: '🔢',
      iconSvg: ICONS.bases,
      color: '#c084fc',
      borderColor: '#a855f7',
      bgTint: 'rgba(168, 85, 247, 0.1)',
      description: "Conversions universelles : base B vers décimal, décimal vers base B (divisions successives) et conversions directes (binaire, octal, hexadécimal).",
      coursBrief: {
        keyNotions: [
          "Bases fondamentales : Binaire (B2 : 0,1), Octal (B8 : 0..7), Décimal (B10 : 0..9), Hexadécimal (B16 : 0..9, A..F).",
          "Décimal ➔ Base B : divisions entières successives par B ; lire les restes dans l'ordre inverse (de bas en haut).",
          "Base B ➔ Décimal : somme pondérée des chiffres multipliés par B^poids (poids 0 à droite).",
          "Conversions directes : B2 ↔ B8 par paquets de 3 bits, B2 ↔ B16 par paquets de 4 bits."
        ],
        syntaxRules: [
          "Base 10 ➔ Base 16 : si reste >= 10, convertir avec Chr(reste + 55) pour obtenir 'A'..'F'.",
          "Python / Thonny : bin(n), oct(n), hex(n) ou int(ch, base) pour tester ses algorithmes."
        ],
        bacTips: [
          "Dans l'algorithme de conversion en chaîne, concaténer à gauche : ch <-- ConvCh(r) + ch pour inverser automatiquement.",
          "Vérifier la validité des chiffres saisis selon la base (ex: pas de '8' en base octale)."
        ]
      },
      pdfSubjectKey: 'algo-ch3-bases',
      legacyPdfKeys: ['algo-ch3-bases'],
      legacyCategories: [
        'Chapitre 3 : Conversion entre les bases',
        'Chapitre 3 : Convertion Entre les Bases',
        'bases'
      ],
      tags: ["algo", "algorithme", "bases", "conversion", "binaire", "octal", "hexadecimal", "decimal"]
    },
    {
      order: 4,
      slug: 'arithmetique',
      title: 'Arithmétique',
      fullTitle: 'Chapitre 4 : Arithmétique',
      shortTitle: 'Arithmétique',
      iconEmoji: '🧮',
      iconSvg: ICONS.arithmetique,
      color: '#f472b6',
      borderColor: '#ec4899',
      bgTint: 'rgba(236, 72, 153, 0.1)',
      description: "Primalité, PGCD (Euclide & soustractions), PPCM, divisibilité, factorielle et décomposition en facteurs premiers.",
      coursBrief: {
        keyNotions: [
          "Nombre premier : entier >= 2 divisible uniquement par 1 et lui-même (tester les diviseurs jusqu'à racine_carree(n)).",
          "PGCD : algorithme d'Euclide par modulos successifs (Tant que b <> 0 : r <-- a mod b ; a <-- b ; b <-- r ; PGCD <-- a).",
          "PPCM : relation fondamentale PPCM(a, b) = (a * b) DIV PGCD(a, b).",
          "Décomposition en facteurs premiers : division successive par les nombres premiers (2, 3, 5...)."
        ],
        syntaxRules: [
          "Test primalité : boucle 'Tant que (i <= Racine_carree(n)) et (n mod i <> 0) Faire i <-- i + 1'.",
          "Contrôle de saisie strict : Répéter n <-- Saisir() Jusqu'à (n > 0)."
        ],
        bacTips: [
          "Les entiers n <= 1 ne sont JAMAIS premiers. Penser à traiter ce cas avant la boucle.",
          "Pour le PGCD par soustractions : Tant que a <> b Faire Si a > b Alors a <-- a - b Sinon b <-- b - a."
        ]
      },
      pdfSubjectKey: 'algo-ch4-arithmetique',
      legacyPdfKeys: ['algo-ch4-arithmetique'],
      legacyCategories: [
        'Chapitre 4 : Arithmétique',
        'arithmetique'
      ],
      tags: ["algo", "algorithme", "arithmetique", "premier", "pgcd", "ppcm", "factorielle", "puissance"]
    },
    {
      order: 5,
      slug: 'approximation',
      title: 'Approximation & optimisation',
      fullTitle: 'Chapitre 5 : Approximation et optimisation',
      shortTitle: 'Approx & Optimisation',
      iconEmoji: '📈',
      iconSvg: ICONS.approximation,
      color: '#f59e0b',
      borderColor: '#d97706',
      bgTint: 'rgba(245, 158, 11, 0.1)',
      description: "Méthodes numériques d'approximation d'aires (milieu, rectangles, trapèzes) et recherche dichotomique.",
      coursBrief: {
        keyNotions: [
          "Approximation numérique : estimation avec une marge d'erreur maximale epsilon (ex: 10^-3 ou 10^-4).",
          "Calcul d'aires par intégration : découpage de l'intervalle [a, b] en n tranches de largeur h = (b - a) / n.",
          "Méthode des rectangles : Somme h * f(x_i) pour chaque subdivision.",
          "Méthode des trapèzes : h * [ (f(a) + f(b)) / 2 + Somme f(x_i) ].",
          "Dichotomie : recherche du zéro d'une fonction continue changeant de signe sur [a, b] (f(a) * f(b) < 0)."
        ],
        syntaxRules: [
          "Critère d'arrêt : Tant que Abs(b - a) > eps Faire milieu <-- (a + b) / 2 ...",
          "Attention à l'utilisation systématique de la fonction valeur absolue Abs() dans le critère."
        ],
        bacTips: [
          "Ne jamais utiliser une simple soustraction sans Abs() : b - a peut être négatif si les bornes sont inversées.",
          "Vérifier le nombre de pas n demandé dans l'énoncé du Bac."
        ]
      },
      pdfSubjectKey: 'algo-ch5-approximation',
      legacyPdfKeys: ['algo-ch5-approximation'],
      legacyCategories: [
        'Chapitre 5 : Approximation et optimisation',
        'Chapitre 5 : Approximation & optimisation',
        'approximation'
      ],
      tags: ["algo", "algorithme", "approximation", "optimisation", "aires", "rectangles", "trapezes", "integration"]
    },
    {
      order: 6,
      slug: 'tableaux',
      title: 'Les tableaux',
      fullTitle: 'Chapitre 6 : Les tableaux',
      shortTitle: 'Les Tableaux',
      iconEmoji: '📊',
      iconSvg: ICONS.tableaux,
      color: '#10b981',
      borderColor: '#059669',
      bgTint: 'rgba(16, 185, 129, 0.1)',
      description: "Tableaux à une dimension (vecteurs) : saisie contrôlée, tris, recherche, manipulation, décalages et algorithmes types.",
      coursBrief: {
        keyNotions: [
          "Tableau à 1D (vecteur) : suite ordonnée de n éléments de même type indicés de 0 à n-1 (ou 1 à n).",
          "Saisie contrôlée : boucle 'Répéter n <-- Saisir() Jusqu'à (n >= 5 et n <= 50)' puis boucle Pour pour remplir.",
          "Recherche : séquentielle (tableau quelconque O(n)) vs dichotomique (tableau impérativement trié O(log n)).",
          "Tris fondamentaux du Bac : Tri à bulles (permutations adjacentes), Tri par sélection (recherche du min), Tri par insertion."
        ],
        syntaxRules: [
          "Permutation sécurisée : aux <-- T[i] ; T[i] <-- T[j] ; T[j] <-- aux.",
          "T.D.N.T : déclarer le type Tab = Tableau de 50 Entiers si demandé par le sujet."
        ],
        bacTips: [
          "Pour la recherche dichotomique, bien vérifier que le tableau est trié au préalable.",
          "Attention aux indices hors limites (IndexError sous Python) : veiller à ce que 0 <= i < n."
        ]
      },
      pdfSubjectKey: 'algo-ch6-tableaux',
      legacyPdfKeys: ['algo-ch6-tableaux'],
      legacyCategories: [
        'Chapitre 6 : Les tableaux',
        'tableaux'
      ],
      tags: ["algo", "algorithme", "tableaux", "vecteurs", "tri", "recherche", "manipulation", "selection", "bulles", "insertion"]
    },
    {
      order: 7,
      slug: 'matrices',
      title: 'Les matrices',
      fullTitle: 'Chapitre 7 : Matrices',
      shortTitle: 'Matrices & Tableaux 2D',
      iconEmoji: '📐',
      iconSvg: ICONS.matrices,
      color: '#38bdf8',
      borderColor: '#0284c7',
      bgTint: 'rgba(56, 189, 248, 0.1)',
      description: "Tableaux à deux dimensions (2D), parcours lignes/colonnes, diagonales, point-selle, tri et motifs géométriques (sablier).",
      coursBrief: {
        keyNotions: [
          "Matrice L x C : tableau à deux dimensions indicé par [i, j] (i pour les lignes 0..L-1, j pour les colonnes 0..C-1).",
          "5 Zones stratégiques : Zone 1 (Init globale) ➔ Zone 2 (Init ligne/col) ➔ Zone 3 (Cellule M[i,j]) ➔ Zone 4 (Fin ligne) ➔ Zone 5 (Résultat final).",
          "Diagonales d'une matrice carrée N x N : Principale (i = j), Secondaire (i + j = N - 1).",
          "Point-selle : élément qui est le minimum sur sa ligne ET le maximum sur sa colonne (ou l'inverse)."
        ],
        syntaxRules: [
          "Parcours ligne par ligne : Pour i de 0 à L-1 faire Pour j de 0 à C-1 faire ...",
          "Parcours colonne par colonne : Pour j de 0 à C-1 faire Pour i de 0 à L-1 faire ..."
        ],
        bacTips: [
          "Règle mnémotechnique Bac : 'dima el i taba3 el ligne, el j taba3 el colonne'.",
          "La boucle imbriquée interne tourne TOUJOURS plus vite que la boucle externe."
        ]
      },
      pdfSubjectKey: 'algo-ch7-matrices',
      legacyPdfKeys: ['algo-ch6-matrices', 'algo-ch7-matrices'],
      legacyCategories: [
        'Chapitre 6 : Matrices',
        'Chapitre 7 : Matrices',
        'matrices'
      ],
      tags: ["algo", "algorithme", "matrice", "matrices", "2d", "diagonale", "point-selle", "sablier", "motif"]
    },
    {
      order: 8,
      slug: 'suites',
      title: 'Les suites',
      fullTitle: 'Chapitre 8 : Les suites',
      shortTitle: 'Les Suites',
      iconEmoji: '🧬',
      iconSvg: ICONS.suites,
      color: '#a855f7',
      borderColor: '#9333ea',
      bgTint: 'rgba(168, 85, 247, 0.1)',
      description: "Suites arithmétiques, géométriques, récurrentes (Fibonacci, Syracuse, Héron) et calcul approché de limites.",
      coursBrief: {
        keyNotions: [
          "Suite arithmétique : U_{n+1} = U_n + r, terme général U_n = U_0 + n * r.",
          "Suite géométrique : U_{n+1} = U_n * q, terme général U_n = U_0 * q^n.",
          "Suites récurrentes d'ordre 2 : Fibonacci (F_n = F_{n-1} + F_{n-2}), Syracuse, méthode de Héron pour racine de a.",
          "Calcul approché d'une limite : itérer jusqu'à ce que |U_{n} - U_{n-1}| < epsilon."
        ],
        syntaxRules: [
          "Calcul itératif récurrent : maintenir u_prec et u_courant et faire pivoter les valeurs à chaque tour de boucle.",
          "Critère d'arrêt : Répéter ... Jusqu'à Abs(u_suiv - u_courant) < eps."
        ],
        bacTips: [
          "Bien initialiser les deux premiers termes avant la boucle Pour ou Répéter.",
          "Pour Syracuse : si n mod 2 = 0 alors n <-- n DIV 2 sinon n <-- 3 * n + 1."
        ]
      },
      pdfSubjectKey: 'algo-ch8-suites',
      legacyPdfKeys: ['algo-ch8-suites'],
      legacyCategories: [
        'Chapitre 8 : Les suites',
        'suites'
      ],
      tags: ["algo", "algorithme", "suites", "recurrence", "terme", "somme", "fibonacci", "syracuse", "heron"]
    }
  ];

  // Modules STI (Web & BD)
  const STI_SUBJECTS = [
    {
      id: 'html',
      label: 'HTML5',
      fullLabel: 'HTML5 (Web Sémantique & Formulaires)',
      iconEmoji: '🌐',
      iconSvg: ICONS.html,
      pdfKey: 'html',
      tags: ["html", "html5", "web", "balise", "formulaire"]
    },
    {
      id: 'css',
      label: 'CSS3',
      fullLabel: 'CSS3 (Feuilles de Style & Animations)',
      iconEmoji: '🎨',
      iconSvg: ICONS.css,
      pdfKey: 'css',
      tags: ["css", "css3", "style", "design", "animation"]
    },
    {
      id: 'js',
      label: 'JavaScript',
      fullLabel: 'JavaScript (Validation verif() & DOM)',
      iconEmoji: '⚡',
      iconSvg: ICONS.js,
      pdfKey: 'js',
      tags: ["js", "javascript", "script", "controle", "validation"]
    },
    {
      id: 'sql',
      label: 'SQL MySQL',
      fullLabel: 'SQL (Bases de Données Relationnelles)',
      iconEmoji: '🗄️',
      iconSvg: ICONS.sql,
      pdfKey: 'sql',
      tags: ["sql", "bdd", "base", "table", "requete", "select"]
    }
  ];

  // Helper Lookups
  const slugMap = new Map();
  const orderMap = new Map();
  const pdfKeyMap = new Map();

  ALGO_CHAPTERS.forEach(ch => {
    slugMap.set(ch.slug, ch);
    orderMap.set(ch.order, ch);
    pdfKeyMap.set(ch.pdfSubjectKey, ch);

    // Aliases rétrocompatibles pour slugs
    if (ch.legacyCategories) {
      ch.legacyCategories.forEach(cat => {
        slugMap.set(cat.toLowerCase(), ch);
      });
    }
    if (ch.legacyPdfKeys) {
      ch.legacyPdfKeys.forEach(k => {
        pdfKeyMap.set(k, ch);
      });
    }
  });

  // Alias rétrocompatibles pour routes (ch1..ch8, recurrence -> recursivite, ch6 -> matrices)
  slugMap.set('ch1', orderMap.get(1));
  slugMap.set('ch2', orderMap.get(2));
  slugMap.set('ch3', orderMap.get(3));
  slugMap.set('ch4', orderMap.get(4));
  slugMap.set('ch5', orderMap.get(5));
  slugMap.set('ch6', slugMap.get('matrices')); // Ancien ch6 était Matrices
  slugMap.set('ch7', slugMap.get('matrices') || orderMap.get(7));
  slugMap.set('ch8', slugMap.get('suites') || orderMap.get(8));
  slugMap.set('recurrence', slugMap.get('recursivite'));

  return {
    chapters: ALGO_CHAPTERS,
    stiSubjects: STI_SUBJECTS,
    icons: ICONS,

    getChapterBySlug(slug) {
      if (!slug) return null;
      const clean = String(slug).trim().toLowerCase();
      // Match exact slug ou alias
      if (slugMap.has(clean)) return slugMap.get(clean);
      // Match "chX"
      const chMatch = clean.match(/^ch([1-8])$/);
      if (chMatch) {
        return orderMap.get(parseInt(chMatch[1], 10)) || null;
      }
      return null;
    },

    getChapterByOrder(order) {
      return orderMap.get(Number(order)) || null;
    },

    getChapterByPdfKey(key) {
      if (!key) return null;
      const clean = String(key).trim().toLowerCase();
      if (pdfKeyMap.has(clean)) return pdfKeyMap.get(clean);
      return null;
    },

    getChapterByCategory(catName) {
      if (!catName) return null;
      const clean = String(catName).trim().toLowerCase();
      for (const ch of ALGO_CHAPTERS) {
        if (ch.fullTitle.toLowerCase() === clean) return ch;
        if (ch.title.toLowerCase() === clean) return ch;
        if (ch.shortTitle.toLowerCase() === clean) return ch;
        if (ch.legacyCategories && ch.legacyCategories.some(c => c.toLowerCase() === clean)) return ch;
      }
      return null;
    },

    matchesCategory(itemCategory, chapter) {
      if (!itemCategory || !chapter) return false;
      const clean = String(itemCategory).trim().toLowerCase();
      if (chapter.fullTitle.toLowerCase() === clean) return true;
      if (chapter.title.toLowerCase() === clean) return true;
      if (chapter.shortTitle.toLowerCase() === clean) return true;
      if (chapter.legacyCategories && chapter.legacyCategories.some(c => c.toLowerCase() === clean)) return true;
      return false;
    },

    getAllChapterCategories() {
      return ALGO_CHAPTERS.map(ch => ch.fullTitle);
    },

    getAllChapterPdfKeys() {
      const keys = [];
      ALGO_CHAPTERS.forEach(ch => {
        keys.push(ch.pdfSubjectKey);
        if (ch.legacyPdfKeys) {
          ch.legacyPdfKeys.forEach(k => {
            if (!keys.includes(k)) keys.push(k);
          });
        }
      });
      return keys;
    },

    getSubjectLabelsMap() {
      const map = {
        html: "HTML5",
        css: "CSS3",
        js: "JavaScript",
        sql: "SQL (Bases de Données)",
        "algo-pratique": "Pratique (Qt ➔ Thonny)",
        "algo-theorique": "Théorique (Algorithme)"
      };
      ALGO_CHAPTERS.forEach(ch => {
        map[ch.pdfSubjectKey] = `Ch ${ch.order} : ${ch.title}`;
        if (ch.legacyPdfKeys) {
          ch.legacyPdfKeys.forEach(k => {
            map[k] = `Ch ${ch.order} : ${ch.title}`;
          });
        }
      });
      return map;
    },

    getSubjectTagsMap() {
      const map = {
        html: ["html", "html5", "web", "balise", "formulaire"],
        css: ["css", "css3", "style", "design", "animation"],
        js: ["js", "javascript", "script", "controle", "validation"],
        sql: ["sql", "bdd", "base", "table", "requete", "select"],
        "algo-pratique": ["algo", "algorithme", "pratique", "qt", "designer", "thonny", "python", "interface"],
        "algo-theorique": ["algo", "algorithme", "theorique", "bac", "tri", "matrice", "pattern", "bases", "recursivite", "tableaux", "suites"]
      };
      ALGO_CHAPTERS.forEach(ch => {
        map[ch.pdfSubjectKey] = ch.tags;
        if (ch.legacyPdfKeys) {
          ch.legacyPdfKeys.forEach(k => {
            map[k] = ch.tags;
          });
        }
      });
      return map;
    },

    getValidSubjects() {
      const subjects = ['html', 'css', 'js', 'sql', 'algo-pratique', 'algo-theorique'];
      ALGO_CHAPTERS.forEach(ch => {
        if (!subjects.includes(ch.pdfSubjectKey)) subjects.push(ch.pdfSubjectKey);
        if (ch.legacyPdfKeys) {
          ch.legacyPdfKeys.forEach(k => {
            if (!subjects.includes(k)) subjects.push(k);
          });
        }
      });
      return subjects;
    },

    formatChapterBadge(order) {
      return `Ch ${order}`;
    },

    getTotalAlgoChapters() {
      return ALGO_CHAPTERS.length;
    }
  };
}));
