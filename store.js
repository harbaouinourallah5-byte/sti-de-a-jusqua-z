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

  // ── 1. PROGRESSION PAR CHAPITRE (4 étapes standardisées) ────────────────
  // Clé: progress -> { [chapterSlug]: { step1: bool, step2: bool, step3: bool, step4: bool } }
  function getChapterProgress(slug) {
    var all = _safeGet('progress', {});
    var cur = all[slug] || { step1: false, step2: false, step3: false, step4: false };
    // Migration : si l'ancienne étape 5 (exercices) était cochée, la reporter sur l'étape 4
    if (cur.step5 && !cur.step4) {
      cur.step4 = true;
    }
    return cur;
  }

  function setChapterStep(slug, stepNum, isDone) {
    var all = _safeGet('progress', {});
    if (!all[slug]) {
      all[slug] = { step1: false, step2: false, step3: false, step4: false };
    }
    all[slug]['step' + stepNum] = !!isDone;
    _safeSet('progress', all);
    // Enregistrer comme dernier chapitre visité
    setLastNav(slug, stepNum);
    return all[slug];
  }

  function getChapterStepAvailability(slug) {
    // Étape 1 : Cours en bref (toujours présent)
    var step1 = true;
    var step2 = false; // Algorithmes types
    var step3 = false; // Quiz du chapitre
    var step4 = false; // Exercices d'examens
    var step5 = false; // Séries & Documents
    var step6 = false; // Cartes mémoire du chapitre

    try {
      if (typeof DATA !== 'undefined' && DATA && DATA.algo_theorique && typeof CURRICULUM !== 'undefined') {
        var ch = CURRICULUM.getChapterBySlug(slug);
        if (ch) {
          step2 = DATA.algo_theorique.some(function(x) { return CURRICULUM.matchesCategory(x.category, ch); });
        }
      }
      if (typeof QUIZ_DATA !== 'undefined' && typeof QUIZ_DATA.getQuestionsByChapter === 'function') {
        var qList = QUIZ_DATA.getQuestionsByChapter(slug);
        step3 = qList && qList.length > 0;
      }
      if (typeof EXERCISES_DATA !== 'undefined' && typeof EXERCISES_DATA.getByChapter === 'function') {
        var exList = EXERCISES_DATA.getByChapter(slug);
        step4 = exList && exList.length > 0;
      }
      if (typeof DOCUMENTS_DATA !== 'undefined' && typeof DOCUMENTS_DATA.getByChapter === 'function') {
        var sList = DOCUMENTS_DATA.getByChapter(slug);
        step5 = sList && sList.length > 0;
      }
      if (typeof getAllFlashcardCards === 'function') {
        var fList = getAllFlashcardCards().filter(function(c) { return c.chapterSlug === slug; });
        step6 = fList && fList.length > 0;
      } else if (step2) {
        step6 = true;
      }
    } catch (e) {
      console.warn('[STI_STORE] getChapterStepAvailability error', e);
    }

    return { 1: step1, 2: step2, 3: step3, 4: step4, 5: step5, 6: step6 };
  }

  function getChapterPercentage(slug) {
    var avail = getChapterStepAvailability(slug);
    var p = getChapterProgress(slug);
    var availableCount = 0;
    var doneCount = 0;

    for (var i = 1; i <= 6; i++) {
      if (avail[i]) {
        availableCount++;
        if (p['step' + i]) doneCount++;
      }
    }
    if (availableCount === 0) return 0;
    return Math.round((doneCount / availableCount) * 100);
  }

  function getFirstUnfinishedStep(slug) {
    var avail = getChapterStepAvailability(slug);
    var p = getChapterProgress(slug);
    for (var i = 1; i <= 6; i++) {
      if (avail[i] && !p['step' + i]) {
        return i;
      }
    }
    return 1;
  }

  function getChapterProgressSummary(slug) {
    var avail = getChapterStepAvailability(slug);
    var p = getChapterProgress(slug);
    var availableCount = 0;
    var doneCount = 0;
    var steps = {};

    for (var i = 1; i <= 6; i++) {
      var isAvail = !!avail[i];
      var isDone = !!p['step' + i];
      if (isAvail) {
        availableCount++;
        if (isDone) doneCount++;
      }
      steps[i] = { available: isAvail, done: isDone };
    }

    var percent = availableCount > 0 ? Math.round((doneCount / availableCount) * 100) : 0;
    return {
      slug: slug,
      percent: percent,
      doneCount: doneCount,
      availableCount: availableCount,
      steps: steps,
      firstUnfinished: getFirstUnfinishedStep(slug)
    };
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
  // Clé: bookmarks -> Array<{ type: 'algo'|'exercise'|'exam'|'method'|'quiz', id, addedAt, note?, meta? }>
  function getBookmarks(type) {
    var list = _safeGet('bookmarks', []);
    if (!type) return list;
    return list.filter(function (b) { return b.type === type; });
  }

  function getBookmarksCount(type) {
    var list = getBookmarks(type);
    return list.length;
  }

  function isBookmarked(type, id) {
    var list = _safeGet('bookmarks', []);
    return list.some(function (b) { return b.type === type && b.id === id; });
  }

  function addBookmark(type, id, meta, note) {
    var list = _safeGet('bookmarks', []);
    if (!isBookmarked(type, id)) {
      list.unshift({
        type: type,
        id: id,
        addedAt: Date.now(),
        note: note || (meta && meta.note) || '',
        meta: meta || null
      });
      _safeSet('bookmarks', list);
    }
    return true;
  }

  function setBookmarkNote(type, id, note) {
    var list = _safeGet('bookmarks', []);
    for (var i = 0; i < list.length; i++) {
      if (list[i].type === type && list[i].id === id) {
        list[i].note = note;
        break;
      }
    }
    _safeSet('bookmarks', list);
    return true;
  }

  function removeBookmark(type, id) {
    var list = _safeGet('bookmarks', []);
    list = list.filter(function (b) { return !(b.type === type && b.id === id); });
    _safeSet('bookmarks', list);
    return true;
  }

  function toggleBookmark(type, id, meta, note) {
    if (isBookmarked(type, id)) {
      removeBookmark(type, id);
      return false;
    } else {
      addBookmark(type, id, meta, note);
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

  function getQuizStats() {
    var history = getQuizHistory();
    var totalQuizzes = history.length;
    var totalScore = 0;
    var totalQuestions = 0;
    var byChapter = {};

    history.forEach(function (h) {
      totalScore += (h.score || 0);
      totalQuestions += (h.total || 0);
      if (h.chapterSlug) {
        if (!byChapter[h.chapterSlug]) {
          byChapter[h.chapterSlug] = { attempts: 0, totalScore: 0, totalQuestions: 0, bestPct: 0 };
        }
        var ch = byChapter[h.chapterSlug];
        ch.attempts++;
        ch.totalScore += (h.score || 0);
        ch.totalQuestions += (h.total || 0);
        if (h.pct > ch.bestPct) ch.bestPct = h.pct;
      }
    });

    return {
      totalQuizzes: totalQuizzes,
      totalScore: totalScore,
      totalQuestions: totalQuestions,
      overallPercent: totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0,
      byChapter: byChapter
    };
  }

  // ── 6b. GESTION DES COMPÉTENCES "À SAVOIR" (CHECKLIST DES SECTIONS) ───────────
  function getSkillsTickedMap() {
    return _safeGet('skills_ticked', {});
  }

  function isSkillTicked(skillId) {
    if (!skillId) return false;
    var map = getSkillsTickedMap();
    return map[skillId] === true;
  }

  function setSkillTicked(skillId, isTicked) {
    if (!skillId) return false;
    var map = getSkillsTickedMap();
    if (isTicked) {
      map[skillId] = true;
    } else {
      delete map[skillId];
    }
    _safeSet('skills_ticked', map);
    return !!isTicked;
  }

  function toggleSkillTicked(skillId) {
    var current = isSkillTicked(skillId);
    return setSkillTicked(skillId, !current);
  }

  function getSectionSkillProgress(chapterSlug, sectionSlug) {
    if (typeof CURRICULUM === 'undefined') return { ticked: 0, total: 0, percent: 0 };
    var sec = CURRICULUM.getSection(chapterSlug, sectionSlug);
    if (!sec || !sec.skills || sec.skills.length === 0) return { ticked: 0, total: 0, percent: 100 };
    var map = getSkillsTickedMap();
    var ticked = 0;
    sec.skills.forEach(function (sk) {
      if (map[sk.id] === true) ticked++;
    });
    var total = sec.skills.length;
    var percent = Math.round((ticked / total) * 100);
    return { ticked: ticked, total: total, percent: percent };
  }

  function getChapterSkillProgress(chapterSlug) {
    if (typeof CURRICULUM === 'undefined') return { ticked: 0, total: 0, percent: 0 };
    var sections = CURRICULUM.getChapterSections(chapterSlug);
    if (!sections || sections.length === 0) return { ticked: 0, total: 0, percent: 0 };
    var map = getSkillsTickedMap();
    var total = 0;
    var ticked = 0;
    sections.forEach(function (sec) {
      if (sec.skills) {
        sec.skills.forEach(function (sk) {
          total++;
          if (map[sk.id] === true) ticked++;
        });
      }
    });
    var percent = total > 0 ? Math.round((ticked / total) * 100) : 0;
    return { ticked: ticked, total: total, percent: percent };
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
      skillsTicked: _safeGet('skills_ticked', {}),
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
      if (data.skillsTicked && typeof data.skillsTicked === 'object') _safeSet('skills_ticked', data.skillsTicked);
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
        'progress', 'algo_studied', 'last_nav', 'sim_active', 'skills_ticked',
        'sim_history', 'bookmarks', 'quiz_history', 'quiz_bests',
        'study_plan', 'flashcards_leitner'
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

  // ── 7. PLANNING DE RÉVISION PERSONNALISÉ (FEATURE 3) ──────────────────
  function getStudyPlan() {
    return _safeGet('study_plan', null);
  }

  function saveStudyPlan(plan) {
    return _safeSet('study_plan', plan);
  }

  function clearStudyPlan() {
    return _safeSet('study_plan', null);
  }

  function togglePlanTask(taskId, isDone) {
    var plan = getStudyPlan();
    if (!plan || !plan.days) return null;
    var foundTask = null;

    for (var d = 0; d < plan.days.length; d++) {
      var day = plan.days[d];
      if (day.tasks) {
        for (var t = 0; t < day.tasks.length; t++) {
          if (day.tasks[t].id === taskId) {
            day.tasks[t].done = !!isDone;
            foundTask = day.tasks[t];
            break;
          }
        }
      }
      if (foundTask) break;
    }

    if (foundTask) {
      saveStudyPlan(plan);
      // Synchronisation avec les étapes du chapitre
      if (foundTask.chapter) {
        if (foundTask.stepNum) {
          setChapterStep(foundTask.chapter, foundTask.stepNum, isDone);
        } else if (foundTask.taskType === 'cours') {
          setChapterStep(foundTask.chapter, 1, isDone);
        } else if (foundTask.taskType === 'algos') {
          setChapterStep(foundTask.chapter, 2, isDone);
        } else if (foundTask.taskType === 'series') {
          setChapterStep(foundTask.chapter, 3, isDone);
        } else if (foundTask.taskType === 'exam-exos') {
          setChapterStep(foundTask.chapter, 5, isDone);
        }
      }
    }
    return plan;
  }

  function getTodayPlan() {
    var plan = getStudyPlan();
    if (!plan || !plan.days || plan.days.length === 0) return null;
    var todayStr = new Date().toISOString().split('T')[0];
    for (var i = 0; i < plan.days.length; i++) {
      if (plan.days[i].date === todayStr) {
        return { day: plan.days[i], index: i, totalDays: plan.days.length };
      }
    }
    // Si la date exacte n'est pas trouvée (ex: jour de repos ou hors plage), chercher le prochain jour avec tâches non faites
    for (var j = 0; j < plan.days.length; j++) {
      var hasUndone = (plan.days[j].tasks || []).some(function (t) { return !t.done; });
      if (hasUndone) {
        return { day: plan.days[j], index: j, totalDays: plan.days.length, isNextAvailable: true };
      }
    }
    return { day: plan.days[0], index: 0, totalDays: plan.days.length };
  }

  function getOverduePlanTasks() {
    var plan = getStudyPlan();
    if (!plan || !plan.days) return [];
    var todayStr = new Date().toISOString().split('T')[0];
    var overdue = [];

    for (var i = 0; i < plan.days.length; i++) {
      var d = plan.days[i];
      if (d.date < todayStr && d.tasks) {
        for (var t = 0; t < d.tasks.length; t++) {
          if (!d.tasks[t].done) {
            overdue.push(d.tasks[t]);
          }
        }
      }
    }
    return overdue;
  }

  // ── 8. CARTES MÉMOIRE — SYSTÈME LEITNER À 3 BOÎTES (FEATURE 4) ────────
  // Clé: flashcards_leitner -> { [cardId]: { box: 1|2|3, nextReview: 'YYYY-MM-DD', lastReviewed: 'YYYY-MM-DD', reviewCount: n, successes: s } }
  function getFlashcardsState() {
    return _safeGet('flashcards_leitner', {});
  }

  function getCardState(cardId) {
    var all = getFlashcardsState();
    var todayStr = new Date().toISOString().split('T')[0];
    return all[cardId] || { box: 1, nextReview: todayStr, lastReviewed: null, reviewCount: 0, successes: 0, unreviewed: true };
  }

  function recordCardReview(cardId, wasSuccess) {
    var all = getFlashcardsState();
    var current = all[cardId] || { box: 1, reviewCount: 0, successes: 0 };
    var today = new Date();
    var todayStr = today.toISOString().split('T')[0];

    var newBox = 1;
    var intervalDays = 1;

    if (wasSuccess) {
      if (current.box === 1) {
        newBox = 2;
        intervalDays = 3;
      } else {
        newBox = 3;
        intervalDays = 7;
      }
    } else {
      newBox = 1;
      intervalDays = 1;
    }

    var nextDateObj = new Date(today.getTime() + (intervalDays * 24 * 3600 * 1000));
    var nextReviewStr = nextDateObj.toISOString().split('T')[0];

    all[cardId] = {
      box: newBox,
      lastReviewed: todayStr,
      nextReview: nextReviewStr,
      reviewCount: (current.reviewCount || 0) + 1,
      successes: (current.successes || 0) + (wasSuccess ? 1 : 0),
      unreviewed: false
    };

    _safeSet('flashcards_leitner', all);
    return all[cardId];
  }

  function resetDeckCards(cardIds) {
    if (!cardIds || !cardIds.length) return false;
    var all = getFlashcardsState();
    cardIds.forEach(function (id) {
      delete all[id];
    });
    return _safeSet('flashcards_leitner', all);
  }

  function getDeckProgress(cardIds) {
    if (!cardIds || !cardIds.length) {
      return { total: 0, box1: 0, box2: 0, box3: 0, unreviewed: 0, dueToday: 0, masteredPct: 0 };
    }
    var all = getFlashcardsState();
    var todayStr = new Date().toISOString().split('T')[0];

    var b1 = 0, b2 = 0, b3 = 0, unrev = 0, due = 0;

    cardIds.forEach(function (id) {
      var item = all[id];
      if (!item) {
        unrev++;
        due++; // Jamais révisée -> due immédiatement
      } else {
        if (item.box === 1) b1++;
        else if (item.box === 2) b2++;
        else if (item.box === 3) b3++;

        if (!item.nextReview || item.nextReview <= todayStr) {
          due++;
        }
      }
    });

    var masteredPct = cardIds.length > 0 ? Math.round((b3 / cardIds.length) * 100) : 0;

    return {
      total: cardIds.length,
      box1: b1,
      box2: b2,
      box3: b3,
      unreviewed: unrev,
      dueToday: due,
      masteredPct: masteredPct
    };
  }

  return {
    // Progression & Chapitres
    getChapterProgress: getChapterProgress,
    setChapterStep: setChapterStep,
    getChapterPercentage: getChapterPercentage,
    getChapterStepAvailability: getChapterStepAvailability,
    getFirstUnfinishedStep: getFirstUnfinishedStep,
    getChapterProgressSummary: getChapterProgressSummary,
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
    getBookmarksCount: getBookmarksCount,
    isBookmarked: isBookmarked,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark,
    toggleBookmark: toggleBookmark,
    setBookmarkNote: setBookmarkNote,
    // Quiz
    getQuizHistory: getQuizHistory,
    getSkillsTickedMap: getSkillsTickedMap,
    isSkillTicked: isSkillTicked,
    setSkillTicked: setSkillTicked,
    toggleSkillTicked: toggleSkillTicked,
    getSectionSkillProgress: getSectionSkillProgress,
    getChapterSkillProgress: getChapterSkillProgress,
    saveQuizResult: saveQuizResult,
    getBestQuizScore: getBestQuizScore,
    getQuizStats: getQuizStats,
    // Planning d'étude
    getStudyPlan: getStudyPlan,
    saveStudyPlan: saveStudyPlan,
    clearStudyPlan: clearStudyPlan,
    togglePlanTask: togglePlanTask,
    getTodayPlan: getTodayPlan,
    getOverduePlanTasks: getOverduePlanTasks,
    // Cartes mémoire Leitner
    getFlashcardsState: getFlashcardsState,
    getCardState: getCardState,
    recordCardReview: recordCardReview,
    resetDeckCards: resetDeckCards,
    getDeckProgress: getDeckProgress,
    // Sauvegarde globale
    exportAllData: exportAllData,
    importAllData: importAllData,
    resetAllData: resetAllData
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STI_STORE;
}
