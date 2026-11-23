/**
 * MODULE PRINCIPAL DES QUIZ BAC INFORMATIQUE
 * STI de A à Z — Conforme au programme officiel tunisien
 * 
 * Regroupe les 8 chapitres et les 80 questions certifiées.
 */

const QUIZ_DATA = {
  chapters: {
    fichiers: (typeof QUIZ_FICHIERS !== 'undefined') ? QUIZ_FICHIERS : [],
    recursivite: (typeof QUIZ_RECURSIVITE !== 'undefined') ? QUIZ_RECURSIVITE : [],
    bases: (typeof QUIZ_BASES !== 'undefined') ? QUIZ_BASES : [],
    arithmetique: (typeof QUIZ_ARITHMETIQUE !== 'undefined') ? QUIZ_ARITHMETIQUE : [],
    approximation: (typeof QUIZ_APPROXIMATION !== 'undefined') ? QUIZ_APPROXIMATION : [],
    tableaux: (typeof QUIZ_TABLEAUX !== 'undefined') ? QUIZ_TABLEAUX : [],
    matrices: (typeof QUIZ_MATRICES !== 'undefined') ? QUIZ_MATRICES : [],
    suites: (typeof QUIZ_SUITES !== 'undefined') ? QUIZ_SUITES : []
  },

  getAllQuestions() {
    return [
      ...((typeof QUIZ_FICHIERS !== 'undefined') ? QUIZ_FICHIERS : []),
      ...((typeof QUIZ_RECURSIVITE !== 'undefined') ? QUIZ_RECURSIVITE : []),
      ...((typeof QUIZ_BASES !== 'undefined') ? QUIZ_BASES : []),
      ...((typeof QUIZ_ARITHMETIQUE !== 'undefined') ? QUIZ_ARITHMETIQUE : []),
      ...((typeof QUIZ_APPROXIMATION !== 'undefined') ? QUIZ_APPROXIMATION : []),
      ...((typeof QUIZ_TABLEAUX !== 'undefined') ? QUIZ_TABLEAUX : []),
      ...((typeof QUIZ_MATRICES !== 'undefined') ? QUIZ_MATRICES : []),
      ...((typeof QUIZ_SUITES !== 'undefined') ? QUIZ_SUITES : [])
    ];
  },

  getQuestionsBySection(sectionSlug) {
    if (!sectionSlug || sectionSlug === 'all') return this.getAllQuestions();
    return this.getAllQuestions().filter(q => q.section === sectionSlug);
  },

  getQuestionsByChapter(chapterSlug) {
    if (!chapterSlug || chapterSlug === 'all') {
      return this.getAllQuestions();
    }
    return this.chapters[chapterSlug] || [];
  },

  getQuestionsFiltered(chapterSlug = 'all', level = 'all', sectionSlug = 'all') {
    let list = this.getQuestionsByChapter(chapterSlug);
    if (level && level !== 'all') {
      list = list.filter(q => q.level === level);
    }
    if (sectionSlug && sectionSlug !== 'all') {
      list = list.filter(q => q.section === sectionSlug);
    }
    return list;
  },

  _orig_getQuestionsFiltered(chapterSlug = 'all', level = 'all') {
    let list = this.getQuestionsByChapter(chapterSlug);
    if (level && level !== 'all') {
      list = list.filter(q => q.level === level);
    }
    return list;
  },

  getRandomBatch(chapterSlug = 'all', level = 'all', count = 5) {
    const pool = [...this.getQuestionsFiltered(chapterSlug, level)];
    // Mélange Fisher-Yates
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(count, pool.length));
  },

  getQuestionById(id) {
    return this.getAllQuestions().find(q => q.id === id) || null;
  },

  getById(id) {
    return this.getQuestionById(id);
  },

  getAll() {
    return this.getAllQuestions();
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_DATA;
}
