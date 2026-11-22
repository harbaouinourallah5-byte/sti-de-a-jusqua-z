/**
 * ===================================================================
 * STI DE A À Z — MODULE DE STOCKAGE LOCAL UNIFIÉ (store.js)
 * Conforme RGPD / Éducation : 100% local au navigateur, zéro serveur.
 * Toutes les lectures/écritures sont enveloppées dans try/catch.
 * ===================================================================
 */
'use strict';

var STI_STORE = (function () {
  var PREFIX = 'sti_v1_';

  function _safeGet(key, defaultVal) {
    try {
      var item = localStorage.getItem(PREFIX + key);
      if (item === null || item === undefined) return defaultVal;
      return JSON.parse(item);
    } catch (e) {
      console.warn('[STI_STORE] Lecture impossible pour ' + key, e);
      return defaultVal;
    }
  }

  function _safeSet(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('[STI_STORE] Écriture impossible pour ' + key, e);
      return false;
    }
  }

  // ── 1. PROGRESSION PAR CHAPITRE (5 ou 6 étapes) ───────────────────────────
  // Clé: progress -> { [chapterSlug]: { step1: bool, step2: bool, step3: bool, step4: bool, step5: bool, step6?: bool } }
  function getChapterProgress(slug) {
    var all = _safeGet('progress', {});
    return all[slug] || { step1: false, step2: false, step3: false, step4: false, step5: false, step6: false };
  }

  function setChapterStep(slug, stepNum, isDone) {
    var all = _safeGet('progress', {});
    if (!all[slug]) {
      all[slug] = { step1: false, step2: false, step3: false, step4: false, step5: false, step6: false };
    }
    all[slug]['step' + stepNum] = !!isDone;
    _safeSet('progress', all);
    // Enregistrer comme dernier chapitre visité
    setLastNav(slug, stepNum);
    return all[slug];
  }

  function getChapterPercentage(slug, totalAvailableSteps) {
    var p = getChapterProgress(slug);
    var count = 0;
    var max = totalAvailableSteps || 5;
    for (var i = 1; i <= max; i++) {
      if (p['step' + i]) count++;
    }
    return Math.round((count / max) * 100);
  }

  // ── 2. ALGORITHMES ÉTUDIÉS ───────────────────────────────────────────────
  // Clé: algo_studied -> Array<string> (IDs d'algorithmes)
  function isAlgoStudied(algoId) {
    var list = _safeGet('algo_studied', []);
    return list.indexOf(algoId) !== -1;
  }

  function toggleAlgoStudied(algoId) {
    var list = _safeGet('algo_studied', []);
    var idx = list.indexOf(algoId);
    if (idx !== -1) {
      list.splice(idx, 1);
    } else {
      list.push(algoId);
    }
    _safeSet('algo_studied', list);
    return list.indexOf(algoId) !== -1;
  }

  function getStudiedAlgosCount() {
    var list = _safeGet('algo_studied', []);
    return list.length;
  }

  // ── 3. DERNIÈRE NAVIGATION (Bouton "Continuer") ───────────────────────────
  // Clé: last_nav -> { chapterSlug: string, step: number, timestamp: number }
  function getLastNav() {
    return _safeGet('last_nav', { chapterSlug: 'fichiers', step: 1, timestamp: Date.now() });
  }

  function setLastNav(slug, stepNum) {
    _safeSet('last_nav', {
      chapterSlug: slug,
      step: stepNum || 1,
      timestamp: Date.now()
    });
  }

  // ── 4. SIMULATEUR D'EXAMEN ───────────────────────────────────────────────
  // Session active (résiste au refresh)
  function getActiveExamSession() {
    var sess = _safeGet('sim_active', null);
    if (!sess) return null;
    // Si temps écoulé depuis plus de 10 min après la fin, expirer
    if (Date.now() > sess.endTimestamp + 10 * 60 * 1000) {
      clearActiveExamSession();
      return null;
    }
    return sess;
  }

  function setActiveExamSession(examId, durationSec, exNum) {
    var sess = {
      examId: examId,
      durationSec: durationSec,
      startTimestamp: Date.now(),
      endTimestamp: Date.now() + durationSec * 1000,
      exNum: exNum || null
    };
    _safeSet('sim_active', sess);
    return sess;
  }

  function clearActiveExamSession() {
    _safeSet('sim_active', null);
  }

  // Historique des essais d'examen
  function getExamHistory(examId) {
    var history = _safeGet('sim_history', []);
    if (!examId) return history;
    return history.filter(function (h) { return h.examId === examId; });
  }

  function saveExamAttempt(attempt) {
    // attempt: { examId, date, timeUsedSec, score, maxScore, exercises: [{ exNum, points, maxPoints, aRevoir }] }
    var history = _safeGet('sim_history', []);
    attempt.id = 'att_' + Date.now();
    attempt.date = attempt.date || new Date().toISOString().substring(0, 10);
    history.unshift(attempt);
    _safeSet('sim_history', history);

    // Mettre à jour les exercices "À revoir"
    if (Array.isArray(attempt.exercises)) {
      attempt.exercises.forEach(function (ex) {
        if (ex.aRevoir) {
          addBookmark('exercise', attempt.examId + '_' + ex.exNum, {
            examId: attempt.examId,
            exNum: ex.exNum,
            score: ex.points,
            max: ex.maxPoints
          });
        }
      });
    }

    return attempt;
  }

  function getLastExamScore(examId) {
    var h = getExamHistory(examId);
    return h.length ? h[0] : null;
  }

  // ── 5. FAVORIS & "À REVOIR" (BOOKMARKS ⭐) ─────────────────────────────────
  // Clé: bookmarks -> Array<{ type: 'algo'|'exercise'|'exam'|'method'|'quiz', id, addedAt, meta? }>
  function getBookmarks(type) {
    var list = _safeGet('bookmarks', []);
    if (!type) return list;
    return list.filter(function (b) { return b.type === type; });
  }

  function isBookmarked(type, id) {
    var list = _safeGet('bookmarks', []);
    return list.some(function (b) { return b.type === type && b.id === id; });
  }

  function addBookmark(type, id, meta) {
    var list = _safeGet('bookmarks', []);
    if (!isBookmarked(type, id)) {
      list.unshift({
        type: type,
        id: id,
        addedAt: Date.now(),
        meta: meta || null
      });
      _safeSet('bookmarks', list);
    }
    return true;
  }

  function removeBookmark(type, id) {
    var list = _safeGet('bookmarks', []);
    list = list.filter(function (b) { return !(b.type === type && b.id === id); });
    _safeSet('bookmarks', list);
    return true;
  }

  function toggleBookmark(type, id, meta) {
    if (isBookmarked(type, id)) {
      removeBookmark(type, id);
      return false;
    } else {
      addBookmark(type, id, meta);
      return true;
    }
  }

  // ── 6. QUIZ HISTORIQUE & STATISTIQUES ─────────────────────────────────────
  function getQuizHistory() {
    return _safeGet('quiz_history', []);
  }

  function saveQuizResult(chapterSlug, mode, score, total, wrongAnswers) {
    var h = _safeGet('quiz_history', []);
    var record = {
      id: 'quiz_' + Date.now(),
      chapterSlug: chapterSlug,
      mode: mode,
      score: score,
      total: total,
      pct: total ? Math.round((score / total) * 100) : 0,
      date: new Date().toISOString().substring(0, 10),
      wrongAnswers: wrongAnswers || []
    };
    h.unshift(record);
    _safeSet('quiz_history', h);

    // Mettre à jour le meilleur score pour ce chapitre
    if (chapterSlug && chapterSlug !== 'mixte') {
      var bests = _safeGet('quiz_bests', {});
      if (!bests[chapterSlug] || record.pct > bests[chapterSlug]) {
        bests[chapterSlug] = record.pct;
        _safeSet('quiz_bests', bests);
      }
      // Si score >= 70%, valider automatiquement l'étape 6 (Quiz) du chapitre
      if (record.pct >= 70) {
        setChapterStep(chapterSlug, 6, true);
      }
    }
    return record;
  }

  function getBestQuizScore(chapterSlug) {
    var bests = _safeGet('quiz_bests', {});
    return bests[chapterSlug] || null;
  }

  // ── 7. EXPORT / IMPORT ET RÉINITIALISATION COMPLÈTE ────────────────────────
  function exportAllData() {
    var data = {
      version: 1,
      exportDate: new Date().toISOString(),
      progress: _safeGet('progress', {}),
      algoStudied: _safeGet('algo_studied', []),
      lastNav: _safeGet('last_nav', null),
      simHistory: _safeGet('sim_history', []),
      bookmarks: _safeGet('bookmarks', []),
      quizHistory: _safeGet('quiz_history', []),
      quizBests: _safeGet('quiz_bests', {})
    };
    return JSON.stringify(data, null, 2);
  }

  function importAllData(jsonStr) {
    try {
      var data = JSON.parse(jsonStr);
      if (!data || typeof data !== 'object') return false;
      if (data.progress) _safeSet('progress', data.progress);
      if (Array.isArray(data.algoStudied)) _safeSet('algo_studied', data.algoStudied);
      if (data.lastNav) _safeSet('last_nav', data.lastNav);
      if (Array.isArray(data.simHistory)) _safeSet('sim_history', data.simHistory);
      if (Array.isArray(data.bookmarks)) _safeSet('bookmarks', data.bookmarks);
      if (Array.isArray(data.quizHistory)) _safeSet('quiz_history', data.quizHistory);
      if (data.quizBests) _safeSet('quiz_bests', data.quizBests);
      return true;
    } catch (e) {
      console.error('[STI_STORE] Erreur lors de l\'importation', e);
      return false;
    }
  }

  function resetAllData() {
    try {
      var keysToRemove = [
        'progress', 'algo_studied', 'last_nav', 'sim_active',
        'sim_history', 'bookmarks', 'quiz_history', 'quiz_bests'
      ];
      keysToRemove.forEach(function (k) {
        localStorage.removeItem(PREFIX + k);
      });
      return true;
    } catch (e) {
      console.warn('[STI_STORE] Erreur lors de la réinitialisation', e);
      return false;
    }
  }

  return {
    // Progression & Chapitres
    getChapterProgress: getChapterProgress,
    setChapterStep: setChapterStep,
    getChapterPercentage: getChapterPercentage,
    // Algorithmes
    isAlgoStudied: isAlgoStudied,
    toggleAlgoStudied: toggleAlgoStudied,
    getStudiedAlgosCount: getStudiedAlgosCount,
    // Navigation
    getLastNav: getLastNav,
    setLastNav: setLastNav,
    // Simulateur
    getActiveExamSession: getActiveExamSession,
    setActiveExamSession: setActiveExamSession,
    clearActiveExamSession: clearActiveExamSession,
    getExamHistory: getExamHistory,
    saveExamAttempt: saveExamAttempt,
    getLastExamScore: getLastExamScore,
    // Favoris / À revoir
    getBookmarks: getBookmarks,
    isBookmarked: isBookmarked,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark,
    toggleBookmark: toggleBookmark,
    // Quiz
    getQuizHistory: getQuizHistory,
    saveQuizResult: saveQuizResult,
    getBestQuizScore: getBestQuizScore,
    // Sauvegarde globale
    exportAllData: exportAllData,
    importAllData: importAllData,
    resetAllData: resetAllData
  };
})();
