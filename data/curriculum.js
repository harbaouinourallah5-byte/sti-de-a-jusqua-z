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
