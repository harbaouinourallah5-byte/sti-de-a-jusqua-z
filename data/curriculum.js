/**
 * =============================================================
 * CURRICULUM DU BACCALAURÉAT — SOURCE UNIQUE DE VÉRITÉ (STI DE A À Z)
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
    rappels: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path><path d="M6 14h6"></path></svg>',
    fichiers: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>',
    recursivite: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>',
    bases: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
    arithmetique: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="8" x2="12" y2="16"></line></svg>',
    approximation: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9 4-6 5 11 6-4"></path></svg>',
    tableaux: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>',
    matrices: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="8" cy="8" r="1"></circle><circle cx="16" cy="8" r="1"></circle><circle cx="8" cy="16" r="1"></circle><circle cx="16" cy="16" r="1"></circle><circle cx="12" cy="12" r="1"></circle></svg>',
    suites: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h2"></path><path d="M8 12h4"></path><path d="M16 12h6"></path><circle cx="5" cy="12" r="1"></circle><circle cx="14" cy="12" r="1"></circle></svg>'
  };

  // Liste des 9 chapitres d'Algorithmique (Chapitre 0 : Rappels + Chapitres 1 à 8)
  const ALGO_CHAPTERS = [
    {
      order: 0,
      slug: 'rappels',
      title: 'Rappels & Structures de base',
      fullTitle: 'Chapitre 0 : Rappels & Prérequis',
      shortTitle: 'Rappels & Bases',
      iconEmoji: '🧱',
      iconSvg: ICONS.rappels,
      color: '#94a3b8',
      borderColor: '#64748b',
      bgTint: 'rgba(100, 116, 139, 0.1)',
      description: "Structures de contrôle (Si, Pour, Tant que, Répéter), sous-programmes (fonctions, procédures) et conventions T.D.O / T.D.N.T.",
      coursBrief: {
        keyNotions: [
          "Structures conditionnelles : Si..Alors..SinonSi..Sinon..Fin Si pour aiguiller selon une condition logique.",
          "Boucles : Pour (itérations dénombrées), Tant que (condition préalable), Répéter..Jusqu'à (au moins un tour, arrêt sur condition).",
          "Sous-programmes : Fonction (retourne une valeur unique) vs Procédure (action / modification).",
          "Conventions T.D.O & T.D.N.T : déclaration obligatoire de tous les objets locaux/globaux et types personnalisés."
        ],
        syntaxRules: [
          "Passage de paramètres : par valeur (copie) ou par variable (VAR ou @) pour modifier la variable appelante.",
          "Typage strict : Entier, Réel, Booléen, Caractère, Chaîne."
        ],
        bacTips: [
          "Ne jamais modifier la variable d'itération i à l'intérieur d'une boucle Pour.",
          "Utiliser Répéter..Jusqu'à pour les contrôles de saisie, jamais Pour ni Tant que."
        ]
      },
      pdfSubjectKey: 'algo-ch0-rappels',
      legacyPdfKeys: [],
      legacyCategories: [
        'Chapitre 0 : Rappels & Prérequis',
        'Chapitre 0 : Rappels',
        'rappels'
      ],
      tags: ["algo", "rappels", "structures", "boucle", "condition", "fonction", "procedure", "tdo", "tdnt"],
      sections: [
        {
          slug: 'structures-controle',
          order: 1,
          title: 'Structures de contrôle',
          summary: "Structures conditionnelles (Si..Alors..Sinon) et itératives (Pour, Tant que, Répéter..Jusqu'à). Choix de la boucle adaptée selon que le nombre d'itérations est connu d'avance ou dépend d'une condition d'arrêt.",
          skills: [
            { id: 'skill-rappels-si', text: "Je sais utiliser une structure conditionnelle Si..Alors..SinonSi..Fin Si", algoId: 'algo-struct-si-sinonsi' },
            { id: 'skill-rappels-pour', text: "Je sais utiliser la boucle Pour lorsque le nombre d'itérations est fixé", algoId: 'algo-struct-boucle-pour' },
            { id: 'skill-rappels-tantque', text: "Je sais utiliser Tant que lorsque la condition doit être testée avant d'entrer", algoId: 'algo-struct-boucle-tantque' },
            { id: 'skill-rappels-repeter', text: "Je sais utiliser Répéter..Jusqu'à pour les contrôles de saisie (au moins un passage)", algoId: 'algo-struct-boucle-repeter' }
          ],
          tables: ['rappels-structures']
        },
        {
          slug: 'sous-programmes',
          order: 2,
          title: 'Sous-programmes (Procédures & Fonctions)',
          summary: "Distinction fondamentale entre Fonction (retourne obligatoirement une valeur unique de type simple) et Procédure (exécute des actions, ne retourne rien). Passage de paramètres par valeur (copie locale) vs par variable/adresse (@ en pseudo-code, modification répercutée).",
          skills: [
            { id: 'skill-rappels-proc-fonc', text: "Je sais choisir entre fonction (retourne une valeur) et procédure (action / affichage)", algoId: 'algo-struct-sousprogrammes' },
            { id: 'skill-rappels-passage-param', text: "Je sais distinguer le passage par valeur et le passage par variable (@)", algoId: 'algo-struct-sousprogrammes' }
          ],
          tables: ['rappels-sous-programmes']
        },
        {
          slug: 'tdo-tdnt',
          order: 3,
          title: 'T.D.O & T.D.N.T',
          summary: "Conventions de déclaration au Bac Informatique : Tableau de Déclaration des Objets (T.D.O) locaux et globaux, et Tableau de Déclaration des Nouveaux Types (T.D.N.T) pour les types personnalisés (tableaux, enregistrements). Règles de validité des identificateurs et typage strict.",
          skills: [
            { id: 'skill-rappels-tdo', text: "Je sais remplir correctement un T.D.O (Objet, Type, Rôle)", algoId: 'algo-struct-tdo-tdnt' },
            { id: 'skill-rappels-tdnt', text: "Je sais déclarer de nouveaux types dans le T.D.N.T avant de les utiliser dans le T.D.O", algoId: 'algo-struct-tdo-tdnt' }
          ],
          tables: ['rappels-tdo-tdnt']
        }
      ]
    },
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
      tags: ["algo", "algorithme", "fichiers", "texte", "binaire", "pickle", "dump", "load", "eof", "recréer", "ouvrir", "associer"],
      sections: [
        {
          slug: 'fichiers-texte',
          order: 1,
          title: 'Fichiers texte (.txt)',
          summary: "Manipulation des fichiers texte séquentiels (.txt) : création ('w'), lecture ligne par ligne ('r') et ajout ('a'). Utilisation de Ouvrir, Lire / Lire_ligne, Ecrire / Ecrire_nl et Fermer.",
          skills: [
            { id: 'skill-fichiers-creer', text: "Je sais créer et remplir un fichier texte", algoId: 'algo-fichier-texte-creer' },
            { id: 'skill-fichiers-lire', text: "Je sais lire et afficher le contenu d'un fichier texte jusqu'à la fin de fichier", algoId: 'algo-fichier-texte-afficher' }
          ],
          tables: ['fichiers-table-a', 'fichiers-table-c']
        },
        {
          slug: 'fichiers-binaires',
          order: 2,
          title: 'Fichiers binaires (.dat)',
          summary: "Fichiers d'enregistrements binaires (.dat) : enregistrements structurés, module pickle (dump/load). Déclaration T.D.N.T d'un enregistrement et lecture séquentielle avec gestion de Fin_Fichier.",
          skills: [
            { id: 'skill-fichiers-enreg', text: "Je sais déclarer un type Enregistrement dans le T.D.N.T et créer un fichier binaire", algoId: 'algo-fichier-binaire-remplir' },
            { id: 'skill-fichiers-eof', text: "Je sais parcourir un fichier binaire séquentiellement avec Tant que NON Fin_Fichier", algoId: 'algo-fichier-binaire-afficher' }
          ],
          tables: ['fichiers-table-b', 'fichiers-table-c']
        },
        {
          slug: 'fichiers-transfert',
          order: 3,
          title: "Transferts et modèles d'exercices",
          summary: "Transfert et conversion de données entre fichiers texte, fichiers binaires et tableaux en mémoire. Algorithmes types d'extraction, filtrage et sauvegarde des données.",
          skills: [
            { id: 'skill-fichiers-transf', text: "Je sais transférer les données d'un fichier vers un tableau ou un autre fichier", algoId: 'algo-fichier-texte-transfert' }
          ],
          tables: ['fichiers-table-d']
        }
      ]
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
      tags: ["algo", "algorithme", "recurrence", "recursivite", "base", "general", "arret", "pile"],
      sections: [
        {
          slug: 'recurrence-bases',
          order: 1,
          title: 'Fondements de la récursivité',
          summary: "Fondements de la récursivité : condition d'arrêt (cas de base) et étape récursive. Comprendre le rôle de la pile d'exécution et savoir tracer les appels récursifs sur papier.",
          skills: [
            { id: 'skill-rec-base', text: "Je sais identifier le cas de base et le cas récursif d'une fonction", algoId: 'algo-recurrence-intro' },
            { id: 'skill-rec-trace', text: "Je sais tracer l'arbre des appels récursifs d'une suite ou fonction", algoId: 'algo-fibo-rec' }
          ],
          tables: ['recursivite-bases']
        },
        {
          slug: 'recursivite-numerique',
          order: 2,
          title: 'Arithmétique & calculs récursifs',
          summary: "Algorithmes arithmétiques et numériques récursifs classiques du Bac : factorielle, puissance, PGCD euclidien, somme des chiffres et conversion.",
          skills: [
            { id: 'skill-rec-fact', text: "Je sais écrire une factorielle ou une puissance récursive", algoId: 'algo-fact-rec' },
            { id: 'skill-rec-pgcd', text: "Je sais implémenter l'algorithme d'Euclide récursif pour le PGCD", algoId: 'algo-pgcd-rec' },
            { id: 'skill-rec-chiffres', text: "Je sais décomposer un entier récursivement (somme des chiffres, conversion)", algoId: 'algo-somme-chiffres-rec' }
          ],
          tables: ['recursivite-numerique']
        },
        {
          slug: 'recursivite-chaines-tableaux',
          order: 3,
          title: 'Chaînes & tableaux récursifs',
          summary: "Traitement récursif sur les structures séquentielles : vérification de palindrome et recherche dichotomique récursive. Réduction de taille par découpage d'indices.",
          skills: [
            { id: 'skill-rec-palin', text: "Je sais tester un palindrome de façon récursive", algoId: 'algo-palindrome-rec' },
            { id: 'skill-rec-dicho', text: "Je sais écrire la recherche dichotomique sous forme récursive", algoId: 'algo-recherche-dicho-rec' }
          ],
          tables: ['recursivite-structures']
        }
      ]
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
      tags: ["algo", "algorithme", "bases", "conversion", "binaire", "octal", "hexadecimal", "decimal"],
      sections: [
        {
          slug: 'bases-puissances-2',
          order: 1,
          title: 'Conversions directes (Puissances de 2)',
          summary: "Conversions directes entre bases puissances de 2 (Base 2, Base 8, Base 16) par regroupement de bits (3 bits pour l'octal, 4 bits pour l'hexadécimal).",
          skills: [
            { id: 'skill-bases-regroup', text: "Je sais convertir un binaire en octal ou hexadécimal par paquets de bits", algoId: 'algo-bin2hexa' },
            { id: 'skill-bases-eclate', text: "Je sais éclater un chiffre octal ou hexadécimal en binaire", algoId: 'algo-hex2bin' }
          ],
          tables: ['bases-puissances-2']
        },
        {
          slug: 'bases-dec-any',
          order: 2,
          title: 'Décimal ↔ Base B',
          summary: "Conversions universelles : Décimal vers Base B par divisions successives (lecture des restes inversée) et Base B vers Décimal par méthode polynomiale ou de Horner.",
          skills: [
            { id: 'skill-bases-dec2any', text: "Je sais convertir un entier décimal en une base B quelconque (2 à 16)", algoId: 'algo-dec2any' },
            { id: 'skill-bases-any2dec', text: "Je sais évaluer une chaîne en base B vers le système décimal", algoId: 'algo-a2d' }
          ],
          tables: ['bases-conversions']
        },
        {
          slug: 'bases-any2any',
          order: 3,
          title: 'Conversion universelle (Base A ➔ Base B)',
          summary: "Conversion universelle d'une base source A vers une base cible B par passage intermédiaire via la base 10 (Base A ➔ Décimal ➔ Base B).",
          skills: [
            { id: 'skill-bases-trans', text: "Je sais chaîner les deux algorithmes pour convertir d'une base A à une base B", algoId: 'algo-any2any' }
          ],
          tables: ['bases-any2any']
        }
      ]
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
      tags: ["algo", "algorithme", "arithmetique", "premier", "pgcd", "ppcm", "factorielle", "puissance"],
      sections: [
        {
          slug: 'arithmetique-primalite',
          order: 1,
          title: 'Primalité & diviseurs',
          summary: "Test de primalité d'un entier n >= 2 par recherche de diviseurs jusqu'à racine_carree(n). Génération de nombres premiers et recherche de diviseurs.",
          skills: [
            { id: 'skill-arith-premier', text: "Je sais tester si un nombre est premier de manière optimisée", algoId: 'algo-premier' }
          ],
          tables: ['arithmetique-primalite']
        },
        {
          slug: 'arithmetique-pgcd-ppcm',
          order: 2,
          title: 'PGCD & PPCM',
          summary: "Calcul du PGCD par l'algorithme d'Euclide (modulos) ou par soustractions successives. Calcul du PPCM via la relation fondamentale PPCM(a,b) = (a * b) DIV PGCD(a,b).",
          skills: [
            { id: 'skill-arith-pgcd', text: "Je sais calculer le PGCD et le PPCM de deux entiers", algoId: 'algo-pgcd-ppcm' }
          ],
          tables: ['arithmetique-pgcd-ppcm']
        },
        {
          slug: 'arithmetique-puissances',
          order: 3,
          title: 'Factorielle & puissances',
          summary: "Calcul de factorielle, de puissances entières, puissances à exposant négatif et puissances d'exposant quelconque avec contrôle de validité.",
          skills: [
            { id: 'skill-arith-puiss', text: "Je sais calculer n! et x^n de manière itérative", algoId: 'algo-puissance' }
          ],
          tables: ['arithmetique-puissances']
        }
      ]
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
      tags: ["algo", "algorithme", "approximation", "optimisation", "aires", "rectangles", "trapezes", "integration"],
      sections: [
        {
          slug: 'approximation-aires',
          order: 1,
          title: "Approximation d'aires & intégrales",
          summary: "Méthodes numériques d'intégration approchée : méthode des rectangles (point gauche, point milieu, point droit) et méthode des trapèzes pour estimer l'intégrale d'une fonction.",
          skills: [
            { id: 'skill-approx-h', text: "Je sais calculer le pas h = (b - a) / n d'une subdivision", algoId: 'algo-aire-milieu' },
            { id: 'skill-approx-rect', text: "Je sais approcher une aire par la méthode des rectangles (milieu / gauche / droite)", algoId: 'algo-aire-milieu' },
            { id: 'skill-approx-trap', text: "Je sais approcher une aire par la méthode des trapèzes", algoId: 'algo-aire-trapezes' }
          ],
          tables: ['approximation-methodes']
        }
      ]
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
      tags: ["algo", "algorithme", "tableaux", "vecteurs", "tri", "recherche", "manipulation", "selection", "bulles", "insertion"],
      sections: [
        {
          slug: 'tableaux-remplissage',
          order: 1,
          title: 'Saisie & Remplissage',
          summary: "Saisie contrôlée de la taille du tableau (Répéter..Jusqu'à) et remplissage selon diverses contraintes (valeurs quelconques, respectant une condition, ou éléments strictement distincts).",
          skills: [
            { id: 'skill-tab-saisie', text: "Je sais contrôler la saisie de la taille d'un tableau (5 <= n <= 50)", algoId: 'algo-tab-saisie' },
            { id: 'skill-tab-remplir-dist', text: "Je sais remplir un tableau avec des valeurs distinctes", algoId: 'algo-remplir-distinct' }
          ],
          tables: ['tableaux-remplissage']
        },
        {
          slug: 'tableaux-recherche',
          order: 2,
          title: 'Recherche séquentielle & dichotomique',
          summary: "Recherche séquentielle sur tableau quelconque (O(n)) vs recherche dichotomique sur tableau trié (O(log n)). Maintien des bornes début, fin et milieu.",
          skills: [
            { id: 'skill-tab-rech-seq', text: "Je sais effectuer une recherche séquentielle dans un tableau", algoId: 'algo-tab-recherche-seq' },
            { id: 'skill-tab-rech-dicho', text: "Je sais programmer la recherche dichotomique itérative sur un tableau trié", algoId: 'algo-tab-recherche-dicho' }
          ],
          tables: ['tableaux-recherche']
        },
        {
          slug: 'tableaux-tris',
          order: 3,
          title: 'Tris fondamentaux (Bulles, Sélection, Insertion)',
          summary: "Les 3 tris au programme du Bac : Tri à bulles (avec variable drapeau d'optimisation), Tri par sélection du minimum, et Tri par insertion progressive.",
          skills: [
            { id: 'skill-tab-tri-bulles', text: "Je sais implémenter et expliquer le tri à bulles optimisé", algoId: 'algo-tab-tri-bulles' },
            { id: 'skill-tab-tri-selection', text: "Je sais implémenter le tri par sélection du minimum", algoId: 'algo-tab-tri-selection' },
            { id: 'skill-tab-tri-insertion', text: "Je sais implémenter le tri par insertion", algoId: 'algo-tab-tri-insertion' }
          ],
          tables: ['tableaux-tris']
        },
        {
          slug: 'tableaux-chaines',
          order: 4,
          title: 'Chaînes & caractères',
          summary: "Manipulation de chaînes et conversion entre chaînes et tableaux de caractères : test de palindrome, saisie sécurisée et extraction de mots.",
          skills: [
            { id: 'skill-tab-palindrome', text: "Je sais vérifier si une chaîne ou un tableau est un palindrome", algoId: 'algo-palindrome' },
            { id: 'skill-tab-lirech', text: "Je sais contrôler la saisie d'une chaîne alphabétique non vide", algoId: 'algo-lirech' }
          ],
          tables: ['tableaux-chaines']
        },
        {
          slug: 'tableaux-transformations',
          order: 5,
          title: 'Transformations & inversions',
          summary: "Transformations de vecteurs : décalage circulaire à gauche ou à droite, rotation et inversion sur place des éléments d'un tableau.",
          skills: [
            { id: 'skill-tab-inversion', text: "Je sais inverser les éléments d'un tableau sur place", algoId: 'algo-tab-inversion' },
            { id: 'skill-tab-decalage', text: "Je sais effectuer un décalage circulaire des éléments", algoId: 'algo-tab-decalage-gauche' }
          ],
          tables: ['tableaux-transformations']
        }
      ]
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
      tags: ["algo", "algorithme", "matrice", "matrices", "2d", "diagonale", "point-selle", "sablier", "motif"],
      sections: [
        {
          slug: 'matrices-bases',
          order: 1,
          title: 'Création & Initialisation',
          summary: "Définition et initialisation d'une matrice L x C : déclaration T.D.N.T, boucle imbriquée pour la saisie et l'affichage sous forme de grille tabulée.",
          skills: [
            { id: 'skill-mat-decl', text: "Je sais déclarer une matrice dans le T.D.N.T et l'initialiser", algoId: 'algo-mat-declaration-creation' },
            { id: 'skill-mat-affich', text: "Je sais afficher proprement une matrice en lignes et colonnes", algoId: 'algo-mat-remplissage-affichage' }
          ],
          tables: ['matrices-bases']
        },
        {
          slug: 'matrices-parcours',
          order: 2,
          title: 'Parcours & Motifs',
          summary: "Techniques de parcours : parcours standard par lignes ou par colonnes, parcours inversé, parcours en zig-zag et parcours de motifs géométriques (sablier).",
          skills: [
            { id: 'skill-mat-parcours-col', text: "Je sais parcourir une matrice colonne par colonne", algoId: 'algo-mat-parcours-lignes-colonnes' },
            { id: 'skill-mat-sablier', text: "Je sais extraire ou remplir un motif géométrique (sablier, croix)", algoId: 'algo-mat-pattern-sablier' }
          ],
          tables: ['matrices-parcours']
        },
        {
          slug: 'matrices-diagonales',
          order: 3,
          title: 'Diagonales & Matrices carrées',
          summary: "Matrices carrées N x N : repérage et traitement de la diagonale principale (i = j), de la diagonale secondaire (i + j = N - 1) et test de symétrie.",
          skills: [
            { id: 'skill-mat-diags', text: "Je sais parcourir les deux diagonales d'une matrice carrée", algoId: 'algo-mat-diagonales' },
            { id: 'skill-mat-sym', text: "Je sais vérifier si une matrice est symétrique ou diagonale", algoId: 'algo-mat-verifications-speciales' }
          ],
          tables: ['matrices-diagonales']
        },
        {
          slug: 'matrices-tris-calculs',
          order: 4,
          title: 'Calculs, tris & point-selle',
          summary: "Calculs sur matrices : somme par ligne/colonne, statistiques globales (min, max, moyenne), transposition, recherche d'élément et calcul d'un point-selle.",
          skills: [
            { id: 'skill-mat-transp', text: "Je sais calculer la transposée d'une matrice", algoId: 'algo-mat-transposee' },
            { id: 'skill-mat-point-selle', text: "Je sais chercher un point-selle (min sur ligne et max sur colonne)", algoId: 'algo-mat-exercice-point-selle' },
            { id: 'skill-mat-tri', text: "Je sais trier les lignes ou les colonnes d'une matrice", algoId: 'algo-tri-mat-ligne' }
          ],
          tables: ['matrices-calculs']
        },
        {
          slug: 'matrices-fichiers',
          order: 5,
          title: 'Matrices & Fichiers',
          summary: "Sauvegarde et chargement d'une matrice dans un fichier binaire : stockage sous forme de lignes d'enregistrements ou d'objet matriciel avec pickle.",
          skills: [
            { id: 'skill-mat-fich', text: "Je sais enregistrer une matrice dans un fichier binaire", algoId: 'algo-mat-fichiers-binaires' }
          ],
          tables: ['matrices-fichiers']
        }
      ]
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
      tags: ["algo", "algorithme", "suites", "recurrence", "terme", "somme", "fibonacci", "syracuse", "heron"],
      sections: [
        {
          slug: 'suites-classiques',
          order: 1,
          title: 'Suites arithmétiques & géométriques',
          summary: "Suites arithmétiques (terme général U_n = U_0 + n*r, somme des termes) et suites géométriques (U_n = U_0 * q^n, somme des termes). Formules directes et calcul itératif.",
          skills: [
            { id: 'skill-suites-arith-geom', text: "Je sais calculer le n-ième terme et la somme d'une suite arithmétique ou géométrique", algoId: 'algo-suite-arithmetique' }
          ],
          tables: ['suites-classiques']
        },
        {
          slug: 'suites-recurrentes',
          order: 2,
          title: 'Suites récurrentes & convergence',
          summary: "Suites définies par récurrence U_{n+1} = f(U_n) : maintien des termes successifs, calcul de termes consécutifs et critère d'arrêt de convergence |U_{n+1} - U_n| < epsilon.",
          skills: [
            { id: 'skill-suites-rec-pivot', text: "Je sais calculer les termes d'une suite récurrente avec 2 variables pivot", algoId: 'algo-suite-recurrente-f' },
            { id: 'skill-suites-eps', text: "Je sais itérer jusqu'à la convergence avec une marge d'erreur epsilon", algoId: 'algo-suite-convergence-eps' }
          ],
          tables: ['suites-recurrentes']
        },
        {
          slug: 'suites-heron-syracuse',
          order: 3,
          title: 'Suites remarquables (Héron, Syracuse)',
          summary: "Suites remarquables du Bac : algorithme de Héron pour l'approximation de racine carrée et suite de Syracuse (Collatz) avec calcul du temps de vol et de l'altitude maximale.",
          skills: [
            { id: 'skill-suites-heron', text: "Je sais programmer la suite de Héron pour approcher racine(a)", algoId: 'algo-suite-heron' },
            { id: 'skill-suites-syracuse', text: "Je sais calculer le temps de vol et l'altitude de la suite de Syracuse", algoId: 'algo-suite-syracuse' }
          ],
          tables: ['suites-heron-syracuse']
        }
      ]
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

  // Alias rétrocompatibles pour routes (ch0..ch8, recurrence -> recursivite, ch6 -> matrices)
  slugMap.set('ch0', orderMap.get(0));
  slugMap.set('ch1', orderMap.get(1));
  slugMap.set('ch2', orderMap.get(2));
  slugMap.set('ch3', orderMap.get(3));
  slugMap.set('ch4', orderMap.get(4));
  slugMap.set('ch5', orderMap.get(5));
  slugMap.set('ch6', orderMap.get(6));
  slugMap.set('ch7', orderMap.get(7));
  slugMap.set('ch8', orderMap.get(8));
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
      // Match "chX" (0..8)
      const chMatch = clean.match(/^ch([0-8])$/);
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
        if (ch.slug.toLowerCase() === clean) return ch;
        if (ch.legacyCategories && ch.legacyCategories.some(c => c.toLowerCase() === clean)) return ch;
      }
      return null;
    },

    getChapterSections(slug) {
      const ch = this.getChapterBySlug(slug);
      return (ch && ch.sections) ? ch.sections : [];
    },

    getSection(chapterSlug, sectionSlug) {
      const ch = this.getChapterBySlug(chapterSlug);
      if (!ch || !ch.sections) return null;
      return ch.sections.find(s => s.slug === sectionSlug) || null;
    },

    matchesCategory(itemOrCat, chapter) {
      if (!itemOrCat || !chapter) return false;
      // Si l'objet possède la propriété chapter explicite
      if (typeof itemOrCat === 'object') {
        if (itemOrCat.chapter && itemOrCat.chapter === chapter.slug) return true;
        if (itemOrCat.secondaryChapters && Array.isArray(itemOrCat.secondaryChapters) && itemOrCat.secondaryChapters.includes(chapter.slug)) return true;
      }
      const raw = typeof itemOrCat === 'string' ? itemOrCat : (itemOrCat.category || '');
      const clean = String(raw).trim().toLowerCase();
      if (chapter.fullTitle.toLowerCase() === clean) return true;
      if (chapter.title.toLowerCase() === clean) return true;
      if (chapter.shortTitle.toLowerCase() === clean) return true;
      if (chapter.slug.toLowerCase() === clean) return true;
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
        map[ch.pdfSubjectKey] = ch.order === 0 ? ch.fullTitle : `Ch ${ch.order} : ${ch.title}`;
        if (ch.legacyPdfKeys) {
          ch.legacyPdfKeys.forEach(k => {
            map[k] = ch.order === 0 ? ch.fullTitle : `Ch ${ch.order} : ${ch.title}`;
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
        "algo-theorique": ["algo", "algorithme", "theorique", "bac", "tri", "matrice", "pattern", "bases", "recursivite", "tableaux", "suites", "rappels"]
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
      return order === 0 ? 'Prérequis' : `Ch ${order}`;
    },

    getTotalAlgoChapters() {
      return ALGO_CHAPTERS.length;
    }
  };
}));
