// data/exercises.js — Base officielle des types d'exercices et des exercices d'examens
// Conforme au Baccalauréat STI & Algorithme Bac Informatique (Tunisie)
'use strict';

var EXERCISES_DATA = (function () {

  // ── 1. LES 11 TYPES D'EXERCICES DU BACCALAURÉAT ───────────────────────────
  var TYPES = [
    {
      slug: 'fonction-inconnue',
      label: 'Fonction inconnue',
      expected: 'Trace d\'exécution manuelle, tableau des variables + déduction du rôle de la fonction',
      icon: 'search',
      methodSheetId: 'fonction-inconnue',
      chapters: ['recursivite', 'fichiers']
    },
    {
      slug: 'vf-qcm',
      label: 'Vrai/Faux & QCM',
      expected: 'V/F ou cocher la bonne réponse (tris, suites, fichiers, récursivité)',
      icon: 'check-circle',
      methodSheetId: 'avant-de-rendre',
      chapters: ['fichiers', 'recursivite', 'tableaux', 'suites']
    },
    {
      slug: 'tdo-tdnt',
      label: 'Déclarations T.D.N.T & T.D.O',
      expected: 'Déclarations T.D.N.T / T.D.O et analyse de la validité d\'instructions',
      icon: 'clipboard',
      methodSheetId: 'tdo-tdnt',
      chapters: ['fichiers', 'tableaux', 'matrices']
    },
    {
      slug: 'ecrire-recursif',
      label: 'Écrire un sous-programme récursif',
      expected: 'Écrire une fonction ou procédure récursive avec cas de base et décomposition',
      icon: 'repeat',
      methodSheetId: 'recursivite',
      chapters: ['recursivite', 'tableaux', 'approximation']
    },
    {
      slug: 'fichiers',
      label: 'Procédures sur fichiers',
      expected: 'Manipulation de fichiers texte ou d\'enregistrements binaires (pickle)',
      icon: 'folder',
      methodSheetId: 'fichiers',
      chapters: ['fichiers', 'tableaux', 'arithmetique']
    },
    {
      slug: 'contenu-fichier',
      label: 'Contenu d\'un fichier après exécution',
      expected: 'Donner le contenu d\'un fichier ou d\'un tableau après exécution du programme',
      icon: 'file-text',
      methodSheetId: 'fichiers',
      chapters: ['fichiers', 'matrices']
    },
    {
      slug: 'matrices',
      label: 'Problème sur une matrice',
      expected: 'Parcours 2D, calculs diagonales, point-selle, filtrage ou motifs matriciels',
      icon: 'compass',
      methodSheetId: 'matrices',
      chapters: ['matrices', 'tableaux']
    },
    {
      slug: 'suites-approx',
      label: 'Suites & Approximation avec epsilon',
      expected: 'Calcul de terme de suite récurrente ou approximation numérique d\'aires',
      icon: 'trending-up',
      methodSheetId: 'suites',
      chapters: ['suites', 'approximation']
    },
    {
      slug: 'tableaux-tris',
      label: 'Tableaux, tris & chaînes',
      expected: 'Algorithmes de tri, recherche, manipulation de vecteurs et chaînes de caractères',
      icon: 'bar-chart',
      methodSheetId: 'tableaux',
      chapters: ['tableaux', 'fichiers']
    },
    {
      slug: 'conversion-bases',
      label: 'Conversion entre les bases',
      expected: 'Conversions universelles (base B vers 10, 10 vers B) et directes (bin/oct/hex)',
      icon: 'binary',
      methodSheetId: 'bases',
      chapters: ['bases', 'tableaux']
    },
    {
      slug: 'corriger-erreurs',
      label: 'Corriger les erreurs d\'un algorithme',
      expected: 'Identifier et corriger les erreurs de syntaxe, types ou logique d\'un algorithme',
      icon: 'wrench',
      methodSheetId: 'avant-de-rendre',
      chapters: ['recursivite', 'fichiers']
    }
  ];

  // ── 2. SEED OFFICIEL DES EXERCICES DES SUJETS D'EXAMENS ─────────────────────
  var EXERCISES = [
    // --- ds1-4si2-4si3-2025-12-09 ---
    {
      id: 'ds1-4si2-4si3-2025-12-09-ex1',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique","tableaux-remplissage"],
      examId: 'ds1-4si2-4si3-2025-12-09',
      exNum: 'Exercice 1',
      points: 5.5,
      types: ['fonction-inconnue', 'ecrire-recursif'],
      chapters: ['recursivite', 'tableaux'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'ds1-4si2-4si3-2025-12-09-ex2',
      section: 'fichiers-texte',
      sections: ["fichiers-texte","matrices-parcours"],
      examId: 'ds1-4si2-4si3-2025-12-09',
      exNum: 'Exercice 2',
      points: 2.25,
      types: ['contenu-fichier'],
      chapters: ['fichiers', 'matrices'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds1-4si2-4si3-2025-12-09-ex3',
      section: 'tdo-tdnt',
      sections: ["tdo-tdnt","fichiers-binaires","tableaux-remplissage","matrices-parcours"],
      examId: 'ds1-4si2-4si3-2025-12-09',
      exNum: 'Exercice 3',
      points: 4.75,
      types: ['matrices', 'fichiers', 'tdo-tdnt'],
      chapters: ['matrices', 'tableaux', 'fichiers'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds1-4si2-4si3-2025-12-09-ex4',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","fichiers-transfert"],
      examId: 'ds1-4si2-4si3-2025-12-09',
      exNum: 'Exercice 4',
      points: 3.5,
      types: ['fichiers'],
      chapters: ['fichiers'],
      pdfPage: 3,
      isExtrait: false
    },
    {
      id: 'ds1-4si2-4si3-2025-12-09-ex5',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","tableaux-tris"],
      examId: 'ds1-4si2-4si3-2025-12-09',
      exNum: 'Exercice 5',
      points: 4,
      types: ['fichiers', 'tableaux-tris'],
      chapters: ['fichiers', 'tableaux'],
      pdfPage: 4,
      isExtrait: false
    },

    // --- ds2-4si123-2023-03-13 ---
    {
      id: 'ds2-4si123-2023-03-13-ex1',
      section: 'tdo-tdnt',
      sections: ["tdo-tdnt","recurrence-bases","tableaux-remplissage"],
      examId: 'ds2-4si123-2023-03-13',
      exNum: 'Exercice 1',
      points: 4.75,
      types: ['vf-qcm', 'tdo-tdnt'],
      chapters: ['tableaux', 'recursivite', 'fichiers'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'ds2-4si123-2023-03-13-ex2',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","bases-dec-any"],
      examId: 'ds2-4si123-2023-03-13',
      exNum: 'Exercice 2',
      points: 4,
      types: ['fichiers', 'conversion-bases'],
      chapters: ['bases', 'fichiers'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds2-4si123-2023-03-13-ex3',
      section: 'arithmetique-primalite',
      sections: ["arithmetique-primalite","tableaux-tris"],
      examId: 'ds2-4si123-2023-03-13',
      exNum: 'Exercice 3',
      points: 3.25,
      types: ['tableaux-tris'],
      chapters: ['arithmetique'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds2-4si123-2023-03-13-ex4',
      section: 'arithmetique-primalite',
      sections: ["arithmetique-primalite","matrices-parcours","suites-recurrentes"],
      examId: 'ds2-4si123-2023-03-13',
      exNum: 'Exercice 4',
      points: 8,
      types: ['matrices', 'suites-approx'],
      chapters: ['arithmetique', 'suites', 'matrices'],
      pdfPage: 3,
      isExtrait: false
    },

    // --- bac-style-a ---
    {
      id: 'bac-style-a-ex1',
      section: 'tdo-tdnt',
      sections: ["tdo-tdnt","recursivite-numerique"],
      examId: 'bac-style-a',
      exNum: 'Exercice 1',
      points: 3.25,
      types: ['fonction-inconnue', 'corriger-erreurs', 'tdo-tdnt'],
      chapters: ['recursivite', 'fichiers'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'bac-style-a-ex2',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","tableaux-tris"],
      examId: 'bac-style-a',
      exNum: 'Exercice 2',
      points: 2.75,
      types: ['fichiers', 'tableaux-tris'],
      chapters: ['fichiers'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'bac-style-a-ex3',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","bases-dec-any","arithmetique-primalite"],
      examId: 'bac-style-a',
      exNum: 'Exercice 3',
      points: 5,
      types: ['fichiers', 'conversion-bases'],
      chapters: ['arithmetique', 'bases', 'fichiers'],
      pdfPage: 3,
      isExtrait: false
    },
    {
      id: 'bac-style-a-ex4',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","matrices-parcours","suites-recurrentes"],
      examId: 'bac-style-a',
      exNum: 'Exercice 4',
      points: 9,
      types: ['matrices', 'suites-approx', 'fichiers'],
      chapters: ['matrices', 'suites', 'fichiers'],
      pdfPage: 3,
      isExtrait: false
    },

    // --- dc3-4si4-2026-04-17 ---
    {
      id: 'dc3-4si4-2026-04-17-ex1',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique"],
      examId: 'dc3-4si4-2026-04-17',
      exNum: 'Exercice 1',
      points: 3,
      types: ['fonction-inconnue'],
      chapters: ['recursivite'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'dc3-4si4-2026-04-17-ex2',
      section: 'approximation-aires',
      sections: ["approximation-aires","suites-recurrentes"],
      examId: 'dc3-4si4-2026-04-17',
      exNum: 'Exercice 2',
      points: 8,
      types: ['suites-approx'],
      chapters: ['approximation', 'suites'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'dc3-4si4-2026-04-17-ex3',
      section: 'approximation-aires',
      sections: ["approximation-aires","matrices-parcours"],
      examId: 'dc3-4si4-2026-04-17',
      exNum: 'Exercice 3',
      points: 9,
      types: ['matrices', 'suites-approx'],
      chapters: ['approximation', 'matrices'],
      pdfPage: 2,
      isExtrait: false
    },

    // --- bac-style-b ---
    {
      id: 'bac-style-b-ex1',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique"],
      examId: 'bac-style-b',
      exNum: 'Exercice 1',
      points: 4,
      types: ['fonction-inconnue', 'ecrire-recursif'],
      chapters: ['recursivite'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'bac-style-b-ex2',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","matrices-parcours"],
      examId: 'bac-style-b',
      exNum: 'Exercice 2',
      points: 6,
      types: ['matrices', 'fichiers'],
      chapters: ['matrices', 'fichiers'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'bac-style-b-ex3',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","bases-dec-any","tableaux-remplissage"],
      examId: 'bac-style-b',
      exNum: 'Exercice 3',
      points: 10,
      types: ['fichiers', 'conversion-bases'],
      chapters: ['fichiers', 'bases', 'tableaux'],
      pdfPage: 3,
      isExtrait: false
    },

    // --- ds2-4si14-2026-03-03 ---
    {
      id: 'ds2-4si14-2026-03-03-ex1',
      section: 'fichiers-texte',
      sections: ["fichiers-texte","fichiers-binaires"],
      examId: 'ds2-4si14-2026-03-03',
      exNum: 'Exercice 1',
      points: 2,
      types: ['vf-qcm'],
      chapters: ['fichiers'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'ds2-4si14-2026-03-03-ex2',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique"],
      examId: 'ds2-4si14-2026-03-03',
      exNum: 'Exercice 2',
      points: 2.5,
      types: ['fonction-inconnue'],
      chapters: ['recursivite'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds2-4si14-2026-03-03-ex3',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","arithmetique-primalite"],
      examId: 'ds2-4si14-2026-03-03',
      exNum: 'Exercice 3',
      points: 4.5,
      types: ['fichiers'],
      chapters: ['fichiers', 'arithmetique'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds2-4si14-2026-03-03-ex4',
      section: 'arithmetique-primalite',
      sections: ["arithmetique-primalite","matrices-parcours","suites-recurrentes"],
      examId: 'ds2-4si14-2026-03-03',
      exNum: 'Exercice 4',
      points: 11,
      types: ['matrices', 'suites-approx', 'fichiers'],
      chapters: ['arithmetique', 'matrices', 'suites'],
      pdfPage: 3,
      isExtrait: false
    },

    // --- ds1-4si14-2025-12-09 ---
    {
      id: 'ds1-4si14-2025-12-09-ex1',
      section: 'recurrence-bases',
      sections: ["recurrence-bases","tableaux-remplissage"],
      examId: 'ds1-4si14-2025-12-09',
      exNum: 'Exercice 1',
      points: 3,
      types: ['vf-qcm'],
      chapters: ['tableaux', 'recursivite', 'fichiers'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'ds1-4si14-2025-12-09-ex2',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique","tableaux-remplissage"],
      examId: 'ds1-4si14-2025-12-09',
      exNum: 'Exercice 2',
      points: 6,
      types: ['fonction-inconnue', 'ecrire-recursif'],
      chapters: ['recursivite', 'tableaux'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'ds1-4si14-2025-12-09-ex3',
      section: 'matrices-parcours',
      sections: ["matrices-parcours","matrices-bases"],
      examId: 'ds1-4si14-2025-12-09',
      exNum: 'Exercice 3',
      points: 4,
      types: ['matrices', 'fichiers'],
      chapters: ['matrices'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds1-4si14-2025-12-09-ex4',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","tableaux-tris"],
      examId: 'ds1-4si14-2025-12-09',
      exNum: 'Exercice 4',
      points: 4,
      types: ['fichiers', 'tableaux-tris'],
      chapters: ['fichiers'],
      pdfPage: 3,
      isExtrait: false
    },
    {
      id: 'ds1-4si14-2025-12-09-ex5',
      section: 'tableaux-tris',
      sections: ["tableaux-tris"],
      examId: 'ds1-4si14-2025-12-09',
      exNum: 'Exercice 5',
      points: 3,
      types: ['tableaux-tris'],
      chapters: ['tableaux'],
      pdfPage: 4,
      isExtrait: false
    },

    // --- dc2-4si1-2024-03-07 ---
    {
      id: 'dc2-4si1-2024-03-07-ex1',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","arithmetique-primalite"],
      examId: 'dc2-4si1-2024-03-07',
      exNum: 'Exercice 1',
      points: null,
      types: ['fichiers'],
      chapters: ['arithmetique', 'fichiers'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'dc2-4si1-2024-03-07-ex2',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","fichiers-transfert"],
      examId: 'dc2-4si1-2024-03-07',
      exNum: 'Exercice 2',
      points: null,
      types: ['fichiers'],
      chapters: ['fichiers'],
      pdfPage: 1,
      isExtrait: false
    },

    // --- bac-controle-2022 ---
    {
      id: 'bac-controle-2022-ex1',
      section: 'tdo-tdnt',
      sections: ["tdo-tdnt","fichiers-binaires"],
      examId: 'bac-controle-2022',
      exNum: 'Exercice 1',
      points: 3.5,
      types: ['tdo-tdnt'],
      chapters: ['fichiers'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'bac-controle-2022-ex2',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique","approximation-aires"],
      examId: 'bac-controle-2022',
      exNum: 'Exercice 2',
      points: 5.5,
      types: ['ecrire-recursif', 'suites-approx'],
      chapters: ['recursivite', 'approximation'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'bac-controle-2022-ex3',
      section: 'tableaux-remplissage',
      sections: ["tableaux-remplissage","matrices-parcours"],
      examId: 'bac-controle-2022',
      exNum: 'Exercice 3',
      points: 4.5,
      types: ['matrices'],
      chapters: ['matrices', 'tableaux'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'bac-controle-2022-ex4',
      section: 'bases-dec-any',
      sections: ["bases-dec-any","tableaux-remplissage"],
      examId: 'bac-controle-2022',
      exNum: 'Exercice 4',
      points: 6.5,
      types: ['conversion-bases'],
      chapters: ['bases', 'tableaux'],
      pdfPage: 3,
      isExtrait: false
    },

    // --- ds3-ben-arous-2025-05-06 ---
    {
      id: 'ds3-ben-arous-2025-05-06-ex1',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","matrices-parcours","suites-recurrentes"],
      examId: 'ds3-ben-arous-2025-05-06',
      exNum: 'Exercice 1',
      points: 3,
      types: ['vf-qcm'],
      chapters: ['fichiers', 'matrices', 'suites'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'ds3-ben-arous-2025-05-06-ex2',
      section: 'bases-dec-any',
      sections: ["bases-dec-any","tableaux-remplissage"],
      examId: 'ds3-ben-arous-2025-05-06',
      exNum: 'Exercice 2',
      points: null,
      types: ['conversion-bases'],
      chapters: ['bases', 'tableaux'],
      pdfPage: 2,
      isExtrait: false
    },
    {
      id: 'ds3-ben-arous-2025-05-06-ex4',
      section: 'arithmetique-primalite',
      sections: ["arithmetique-primalite","matrices-parcours","suites-recurrentes"],
      examId: 'ds3-ben-arous-2025-05-06',
      exNum: 'Exercice 4',
      points: 5,
      types: ['matrices', 'fichiers'],
      chapters: ['arithmetique', 'matrices', 'suites'],
      pdfPage: 3,
      isExtrait: false
    },

    // --- a-identifier-p38 ---
    {
      id: 'a-identifier-p38-ex2',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique"],
      examId: 'a-identifier-p38',
      exNum: 'Exercice 2',
      points: 3,
      types: ['fonction-inconnue', 'ecrire-recursif'],
      chapters: ['recursivite'],
      pdfPage: 1,
      isExtrait: false
    },
    {
      id: 'a-identifier-p38-ex3',
      section: 'approximation-aires',
      sections: ["approximation-aires"],
      examId: 'a-identifier-p38',
      exNum: 'Exercice 3',
      points: 4,
      types: ['suites-approx'],
      chapters: ['approximation'],
      pdfPage: 1,
      isExtrait: false
    },

    // --- EXTRAITS (documents.json kind:"extrait") ---
    {
      id: 'x-inconnue-pr2024-ex',
      section: 'recursivite-numerique',
      sections: ["recursivite-numerique"],
      examId: 'x-inconnue-pr2024',
      exNum: 'Extrait',
      points: null,
      types: ['fonction-inconnue'],
      chapters: ['recursivite'],
      pdfPage: 1,
      isExtrait: true
    },
    {
      id: 'x-trait-qcm-ex',
      section: 'recurrence-bases',
      sections: ["recurrence-bases","bases-dec-any"],
      examId: 'x-trait-qcm',
      exNum: 'Extrait QCM',
      points: null,
      types: ['vf-qcm'],
      chapters: ['recursivite', 'bases'],
      pdfPage: 1,
      isExtrait: true
    },
    {
      id: 'x-nom-triangulaire-pr2024-ex',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires"],
      examId: 'x-nom-triangulaire-pr2024',
      exNum: 'Extrait',
      points: null,
      types: ['fichiers'],
      chapters: ['fichiers'],
      pdfPage: 1,
      isExtrait: true
    },
    {
      id: 'x-probleme-bac2017-ex',
      section: 'fichiers-binaires',
      sections: ["fichiers-binaires","tableaux-tris","matrices-parcours"],
      examId: 'x-probleme-bac2017',
      exNum: 'Problème',
      points: null,
      types: ['fichiers', 'tableaux-tris', 'matrices'],
      chapters: ['fichiers', 'tableaux', 'matrices'],
      pdfPage: 1,
      isExtrait: true
    },
    {
      id: 'x-quadruplets-pr2021-ex',
      section: 'arithmetique-primalite',
      sections: ["arithmetique-primalite","approximation-aires","tableaux-tris"],
      examId: 'x-quadruplets-pr2021',
      exNum: 'Extrait',
      points: null,
      types: ['suites-approx', 'tableaux-tris'],
      chapters: ['arithmetique', 'approximation', 'tableaux'],
      pdfPage: 1,
      isExtrait: true
    },
    {
      id: 'x-optimisation-1-2-ex',
      section: 'approximation-aires',
      sections: ["approximation-aires"],
      examId: 'x-optimisation-1-2',
      exNum: 'Extrait',
      points: null,
      types: ['suites-approx'],
      chapters: ['approximation'],
      pdfPage: 1,
      isExtrait: true
    },
    {
      id: 'x-optimisation-3-pr2015-ex',
      section: 'approximation-aires',
      sections: ["approximation-aires"],
      examId: 'x-optimisation-3-pr2015',
      exNum: 'Extrait',
      points: null,
      types: ['suites-approx'],
      chapters: ['approximation'],
      pdfPage: 1,
      isExtrait: true
    }
  ];

  // ── 3. MÉTHODES UTILITAIRES PUBLIQUES ──────────────────────────────────────
  function getAllTypes() {
    return TYPES;
  }

  function getTypeMeta(slug) {
    return TYPES.find(function (t) { return t.slug === slug; }) || null;
  }

  function getAllExercises() {
    return EXERCISES;
  }

  function getById(id) {
    for (var i = 0; i < EXERCISES.length; i++) {
      if (EXERCISES[i].id === id) return EXERCISES[i];
    }
    return null;
  }

  function getByType(typeSlug) {
    return EXERCISES.filter(function (ex) {
      return ex.types && ex.types.indexOf(typeSlug) !== -1;
    });
  }

  function getBySection(sectionSlug) {
    return EXERCISES.filter(function (ex) {
      if (ex.sections && ex.sections.indexOf(sectionSlug) !== -1) return true;
      if (ex.section === sectionSlug) return true;
      return false;
    });
  }

  function getByChapter(chapterSlug) {
    return EXERCISES.filter(function (ex) {
      return ex.chapters && ex.chapters.indexOf(chapterSlug) !== -1;
    });
  }

  function getByExam(examId) {
    return EXERCISES.filter(function (ex) {
      return ex.examId === examId;
    });
  }

  function getCountsByType() {
    var counts = {};
    TYPES.forEach(function (t) {
      counts[t.slug] = getByType(t.slug).length;
    });
    return counts;
  }

  return {
    getAllTypes: getAllTypes,
    getTypeMeta: getTypeMeta,
    getAllExercises: getAllExercises,
    getById: getById,
    getByType: getByType,
    getBySection: getBySection,
    getByChapter: getByChapter,
    getByExam: getByExam,
    getCountsByType: getCountsByType
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXERCISES_DATA;
}

