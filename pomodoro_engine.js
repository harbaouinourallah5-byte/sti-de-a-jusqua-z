/**
 * ===================================================================
 * STI DE A À Z — POMODORO STUDY ENGINE & YOUTUBE AMBIENT MUSIC
 * ===================================================================
 * Minuteur de révision Pomodoro (25/50 min, objectif d'heures)
 * et Lecteur d'ambiance sonore YouTube (lofi, piano, coran, liens personnalisés).
 */

const PomodoroEngine = (function () {
  // État par défaut du Pomodoro
  const state = {
    mode: 'work',              // 'work' ou 'break'
    durationOption: 25,        // 25 ou 50 minutes d'étude
    breakDuration: 5,          // 5 min (pour 25) ou 10 min (pour 50)
    targetHours: 2,            // Objectif total d'heures d'étude choisi par l'élève
    totalCycles: 4,            // Calculé automatiquement
    currentCycle: 1,           // Cycle d'étude actuel (1 à totalCycles)
    timeLeft: 25 * 60,         // Secondes restantes
    totalSecondsForCurrent: 25 * 60,
    isRunning: false,
    intervalId: null,
    soundEnabled: true,
    
    // État Musique YouTube
    currentVideoId: 'jfKfPfyJRdk', // Lofi Girl par défaut
    currentVideoTitle: 'Lofi Girl — Beats to relax/study to',
    isMusicPlaying: false,
    ytPlayer: null
  };

  // Liste des ambiances d'étude prédéfinies
  const PRESET_STREAMS = {
    lofi: {
      id: 'jfKfPfyJRdk',
      title: '☕ Lofi Girl — Beats to relax / study to',
      badge: 'Lofi Beats',
      desc: 'Rythmes doux et mélodies apaisantes pour une concentration durable'
    },
    piano: {
      id: '4xDzrJKXOOY',
      title: '🎹 Piano Calme & Concentration Douce',
      badge: 'Piano d\'Étude',
      desc: 'Mélodies classiques et néoclassiques épurées pour réviser sans distraction'
    },
    rain: {
      id: 'mPZkdNFkNps',
      title: '🌧️ Pluie Cozy & Bruit Blanc Ambiance',
      badge: 'Pluie & Nature',
      desc: 'Son immersif de pluie douce pour masquer les bruits environnants'
    },
    synthwave: {
      id: 'f02mOEt11OQ',
      title: '🌌 Synthwave Chill & Deep Focus Spatiale',
      badge: 'Synthwave Chill',
      desc: 'Sons électroniques rétro et futuristes calmes pour la programmation'
    },
    quran: {
      id: '2OEL4P1Rz04',
      title: '📖 Récitation Apaisante du Saint Coran (Étude & Sérénité)',
      badge: 'Coran Apaisant',
      desc: 'Récitations calmes et méditatives pour une sérénité maximale pendant l\'effort'
    }
  };

  // -------------------------------------------------------------
  // Initialisation et Chargement des Préférences
  // -------------------------------------------------------------
  function init() {
    loadPreferences();
    calculateTotalCycles();
    resetTimer(false);
    updateAllDisplays();
    setupYouTubeContainer();
  }

  function loadPreferences() {
    try {
      const savedDuration = localStorage.getItem('sti_pomo_duration');
      if (savedDuration) {
        state.durationOption = parseInt(savedDuration, 10) === 50 ? 50 : 25;
        state.breakDuration = state.durationOption === 50 ? 10 : 5;
      }
      const savedHours = localStorage.getItem('sti_pomo_hours');
      if (savedHours) {
        state.targetHours = Math.max(1, Math.min(8, parseInt(savedHours, 10)));
      }
      const savedYt = localStorage.getItem('sti_pomo_yt_id');
      if (savedYt) {
        state.currentVideoId = savedYt;
      }
      const savedTitle = localStorage.getItem('sti_pomo_yt_title');
      if (savedTitle) {
        state.currentVideoTitle = savedTitle;
      }
    } catch (e) {
      console.warn('Could not read localStorage for Pomodoro:', e);
    }
  }

  function savePreferences() {
    try {
      localStorage.setItem('sti_pomo_duration', state.durationOption);
      localStorage.setItem('sti_pomo_hours', state.targetHours);
      localStorage.setItem('sti_pomo_yt_id', state.currentVideoId);
      localStorage.setItem('sti_pomo_yt_title', state.currentVideoTitle);
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }

  // -------------------------------------------------------------
  // Calcul Dynamique des Cycles selon le Nombre d'Heures
  // -------------------------------------------------------------
  function calculateTotalCycles() {
    // Si session de 25 min : chaque heure correspond à ~2 cycles de 25 min
    // Si session de 50 min : chaque heure correspond à 1 cycle de 50 min
    if (state.durationOption === 25) {
      state.totalCycles = state.targetHours * 2;
    } else {
      state.totalCycles = state.targetHours;
    }
    if (state.currentCycle > state.totalCycles) {
      state.currentCycle = 1;
    }
  }

  function setDurationOption(minutes) {
    if (minutes !== 25 && minutes !== 50) return;
    state.durationOption = minutes;
    state.breakDuration = minutes === 50 ? 10 : 5;
    calculateTotalCycles();
    savePreferences();
    resetTimer(false);
    updateAllDisplays();
    highlightDurationButtons();
  }

  function setTargetHours(hours) {
    state.targetHours = Math.max(1, Math.min(8, parseInt(hours, 10)));
    calculateTotalCycles();
    savePreferences();
    updateAllDisplays();
  }

  // -------------------------------------------------------------
  // Gestion du Minuteur (Start, Pause, Reset, Skip)
  // -------------------------------------------------------------
  function startTimer() {
    if (state.isRunning) return;
    state.isRunning = true;
    
    // Auto-démarrage de la musique si présente et en pause
    if (!state.isMusicPlaying && state.currentVideoId) {
      playYouTubeMusic();
    }

    state.intervalId = setInterval(() => {
      if (state.timeLeft > 0) {
        state.timeLeft--;
        updateAllDisplays();
      } else {
        handleSessionComplete();
      }
    }, 1000);

    updateAllDisplays();
    showFloatingWidget();
  }

  function pauseTimer() {
    if (!state.isRunning) return;
    state.isRunning = false;
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
    updateAllDisplays();
  }

  function toggleTimer() {
    if (state.isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function resetTimer(stopRunning = true) {
    if (stopRunning) {
      pauseTimer();
    }
    state.mode = 'work';
    state.timeLeft = state.durationOption * 60;
    state.totalSecondsForCurrent = state.timeLeft;
    updateAllDisplays();
  }

  function skipSession() {
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
    state.isRunning = false;

    if (state.mode === 'work') {
      // Passer directement à la pause et lancer immédiatement le minuteur
      state.mode = 'break';
      state.timeLeft = state.breakDuration * 60;
      state.totalSecondsForCurrent = state.timeLeft;
      playNotificationChime();
      showNotificationToast(`☕ Pause relaxante de ${state.breakDuration} min démarrée automatiquement !`);
      startTimer();
    } else {
      // Passer au cycle d'étude suivant et lancer immédiatement le minuteur
      if (state.currentCycle < state.totalCycles) {
        state.currentCycle++;
      } else {
        state.currentCycle = 1;
      }
      state.mode = 'work';
      state.timeLeft = state.durationOption * 60;
      state.totalSecondsForCurrent = state.timeLeft;
      playNotificationChime();
      showNotificationToast(`🚀 Session d'étude ${state.currentCycle}/${state.totalCycles} (${state.durationOption} min) démarrée automatiquement !`);
      startTimer();
    }
  }

  function handleSessionComplete() {
    playNotificationChime();

    // Arrêter et réinitialiser complètement l'intervalle actuel
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
    state.isRunning = false;

    if (state.mode === 'work') {
      // 1. Fin de session d'étude (25 min ou 50 min) -> Démarrage AUTOMATIQUE de la pause
      state.mode = 'break';
      state.timeLeft = state.breakDuration * 60;
      state.totalSecondsForCurrent = state.timeLeft;
      showNotificationToast(`☕ Session d'étude terminée ! Votre pause relaxante de ${state.breakDuration} minutes a démarré automatiquement.`);
      // Démarrage immédiat sans avoir à cliquer sur Démarrer
      startTimer();
    } else {
      // 2. Fin de la pause -> Démarrage AUTOMATIQUE de la session d'étude suivante (2ème session, etc.)
      if (state.currentCycle < state.totalCycles) {
        state.currentCycle++;
        state.mode = 'work';
        state.timeLeft = state.durationOption * 60;
        state.totalSecondsForCurrent = state.timeLeft;
        showNotificationToast(`🎯 Pause terminée ! Début automatique de la session d'étude ${state.currentCycle}/${state.totalCycles} (${state.durationOption} min).`);
        // Démarrage immédiat sans avoir à cliquer sur Démarrer
        startTimer();
      } else {
        // 3. Objectif total accompli (toutes les heures choisies sont terminées)
        state.currentCycle = 1;
        state.mode = 'work';
        state.timeLeft = state.durationOption * 60;
        state.totalSecondsForCurrent = state.timeLeft;
        showNotificationToast(`🏆 Félicitations ! Vous avez accompli votre objectif de ${state.targetHours}h d'étude avec brio.`);
        updateAllDisplays();
      }
    }
  }

  // -------------------------------------------------------------
  // Synthèse Sonore Apaisante (Web Audio API Bell Chime)
  // -------------------------------------------------------------
  function playNotificationChime() {
    if (!state.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Double note harmonieuse (accord D5 -> A5 calme)
      const now = ctx.currentTime;
      [
        { freq: 587.33, start: now, duration: 1.6, gain: 0.25 },
        { freq: 880.00, start: now + 0.2, duration: 1.8, gain: 0.28 }
      ].forEach(note => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, note.start);
        gainNode.gain.setValueAtTime(note.gain, note.start);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, note.start + note.duration);
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.start(note.start);
        osc.stop(note.start + note.duration);
      });
    } catch (err) {
      console.log('Chime playback error:', err);
    }
  }

  // -------------------------------------------------------------
  // Lecteur de Musique d'Ambiance YouTube
  // -------------------------------------------------------------
  function extractYouTubeId(url) {
    if (!url) return null;
    url = url.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|watch|live)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  }

  function setupYouTubeContainer() {
    let container = document.getElementById('youtubePlayerContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'youtubePlayerContainer';
      container.style.position = 'fixed';
      container.style.bottom = '-9999px';
      container.style.left = '-9999px';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.overflow = 'hidden';
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '-1';
      document.body.appendChild(container);
    }
  }

  function loadYouTubeTrack(videoId, title = 'Ambiance YouTube') {
    if (!videoId) return;
    state.currentVideoId = videoId;
    state.currentVideoTitle = title;
    savePreferences();
    playYouTubeMusic();
  }

  function playYouTubeMusic() {
    setupYouTubeContainer();
    const container = document.getElementById('youtubePlayerContainer');
    if (!container) return;

    // IFrame officielle YouTube avec autoplay & loop
    const embedUrl = `https://www.youtube-nocookie.com/embed/${state.currentVideoId}?autoplay=1&enablejsapi=1&loop=1&playlist=${state.currentVideoId}&origin=${encodeURIComponent(window.location.origin)}`;
    container.innerHTML = `
      <iframe id="youtubeEmbedIframe"
        width="320" height="180"
        src="${embedUrl}"
        title="Ambiance d'étude"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;

    state.isMusicPlaying = true;
    updateMusicDisplay();
    showFloatingWidget();
  }

  function stopYouTubeMusic() {
    const container = document.getElementById('youtubePlayerContainer');
    if (container) {
      container.innerHTML = '';
    }
    state.isMusicPlaying = false;
    updateMusicDisplay();
  }

  function toggleYouTubeMusic() {
    if (state.isMusicPlaying) {
      stopYouTubeMusic();
    } else {
      playYouTubeMusic();
    }
  }

  function handleCustomYouTubeSubmit(urlValue) {
    const vidId = extractYouTubeId(urlValue);
    if (!vidId) {
      alert("⚠️ Le lien YouTube est invalide. Veuillez coller une URL valide (ex: https://www.youtube.com/watch?v=...) ou l'ID de la vidéo.");
      return;
    }
    loadYouTubeTrack(vidId, 'Vidéo YouTube personnalisée');
    showNotificationToast('🎵 Musique YouTube chargée avec succès !');
  }

  function selectPresetStream(presetKey) {
    const preset = PRESET_STREAMS[presetKey];
    if (!preset) return;
    loadYouTubeTrack(preset.id, preset.title);
    highlightActivePreset(presetKey);
    showNotificationToast(`🎵 Ambiance lancée : ${preset.badge}`);
  }

  // -------------------------------------------------------------
  // Affichage & Mises à Jour Graphiques
  // -------------------------------------------------------------
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateAllDisplays() {
    const timeStr = formatTime(state.timeLeft);

    // 1. Bouton Fil d'Ariane
    const breadcrumbTime = document.getElementById('breadcrumbPomodoroTime');
    if (breadcrumbTime) {
      breadcrumbTime.textContent = timeStr;
    }
    const breadcrumbBtn = document.getElementById('breadcrumbPomodoroBtn');
    if (breadcrumbBtn) {
      breadcrumbBtn.classList.toggle('running', state.isRunning);
      breadcrumbBtn.classList.toggle('break-mode', state.mode === 'break');
    }

    // 2. Navigation Sidebar Badge
    const sidebarTime = document.getElementById('sidebarPomodoroTimerDisplay');
    if (sidebarTime) {
      sidebarTime.textContent = timeStr;
      sidebarTime.style.color = state.mode === 'break' ? '#34d399' : '#fb923c';
    }

    // 3. Modale Principale
    const modalTime = document.getElementById('pomoModalTimeDisplay');
    if (modalTime) {
      modalTime.textContent = timeStr;
    }
    const modalStatus = document.getElementById('pomoModalStatusBadge');
    if (modalStatus) {
      modalStatus.textContent = state.mode === 'work' ? '🎯 Session d\'Étude' : '☕ Pause Relaxante';
      modalStatus.className = `pomo-status-pill ${state.mode}`;
    }
    const modalCycleText = document.getElementById('pomoModalCycleText');
    if (modalCycleText) {
      modalCycleText.textContent = `Session ${state.currentCycle} sur ${state.totalCycles} • Objectif : ${state.targetHours}h`;
    }

    // Bouton Play/Pause Modale
    const playBtn = document.getElementById('pomoModalPlayBtn');
    if (playBtn) {
      playBtn.innerHTML = state.isRunning ? '<span>⏸️</span><span>Pause</span>' : '<span>▶️</span><span>Démarrer</span>';
      playBtn.className = `pomo-ctl-btn primary ${state.isRunning ? 'running' : ''}`;
    }

    // Anneau SVG ou barre de progression
    const progressPercent = Math.max(0, Math.min(100, ((state.totalSecondsForCurrent - state.timeLeft) / state.totalSecondsForCurrent) * 100));
    const progressBar = document.getElementById('pomoModalProgressBar');
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
      progressBar.style.background = state.mode === 'break' ? 'linear-gradient(90deg, #10b981, #34d399)' : 'linear-gradient(90deg, #ea580c, #f59e0b)';
    }

    // Indicateurs ronds de cycles (dots)
    renderCycleDots();

    // 4. Widget Flottant Mini-Dock
    const dockTime = document.getElementById('pomodoroDockTime');
    if (dockTime) {
      dockTime.textContent = timeStr;
    }
    const dockStatus = document.getElementById('pomodoroDockStatus');
    if (dockStatus) {
      dockStatus.textContent = state.mode === 'work' ? `Étude (${state.currentCycle}/${state.totalCycles})` : `Pause (${state.breakDuration}m)`;
    }
    const dockPlayBtn = document.getElementById('dockPlayPauseBtn');
    if (dockPlayBtn) {
      dockPlayBtn.textContent = state.isRunning ? '⏸️' : '▶️';
    }
    const dockPulse = document.getElementById('pomodoroDockPulse');
    if (dockPulse) {
      dockPulse.className = `pomodoro-dock-pulse ${state.isRunning ? 'active' : ''} ${state.mode}`;
    }

    // 5. Titre de l'onglet de navigateur
    if (state.isRunning) {
      document.title = `(${timeStr}) ${state.mode === 'work' ? 'Étude' : 'Pause'} • STI de A à Z`;
    } else {
      document.title = "STI de A à Z — Mode Étude Calme (STI & Algorithme Bac Info)";
    }

    updateMusicDisplay();
  }

  function renderCycleDots() {
    const dotsContainer = document.getElementById('pomoModalCycleDots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';

    for (let i = 1; i <= state.totalCycles; i++) {
      const dot = document.createElement('span');
      dot.className = `pomo-cycle-dot ${i === state.currentCycle ? 'active' : (i < state.currentCycle ? 'done' : '')}`;
      dot.title = `Session ${i}/${state.totalCycles}`;
      dotsContainer.appendChild(dot);
    }
  }

  function updateMusicDisplay() {
    const musicTitle = document.getElementById('pomoMusicCurrentTitle');
    if (musicTitle) {
      musicTitle.textContent = state.currentVideoTitle;
    }
    const musicStatus = document.getElementById('pomoMusicStatus');
    if (musicStatus) {
      musicStatus.innerHTML = state.isMusicPlaying
        ? '<span class="audio-wave-bars"><span></span><span></span><span></span></span> Musique en cours de lecture'
        : '🔇 Musique en pause';
    }
    const dockMusicIcon = document.getElementById('pomodoroDockMusicIcon');
    if (dockMusicIcon) {
      dockMusicIcon.style.display = state.isMusicPlaying ? 'inline-flex' : 'none';
    }
    const toggleMusicBtn = document.getElementById('pomoToggleMusicBtn');
    if (toggleMusicBtn) {
      toggleMusicBtn.textContent = state.isMusicPlaying ? 'Arrêter la musique ⏹️' : 'Lancer la musique ▶️';
      toggleMusicBtn.classList.toggle('active', state.isMusicPlaying);
    }
  }

  function highlightDurationButtons() {
    const btn25 = document.getElementById('pomoBtnDuration25');
    const btn50 = document.getElementById('pomoBtnDuration50');
    if (btn25) btn25.classList.toggle('active', state.durationOption === 25);
    if (btn50) btn50.classList.toggle('active', state.durationOption === 50);
  }

  function highlightActivePreset(presetKey) {
    document.querySelectorAll('.pomo-preset-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-preset') === presetKey);
    });
  }

  // -------------------------------------------------------------
  // Widget Flottant & Tiroir / Modale
  // -------------------------------------------------------------
  function showFloatingWidget() {
    const dock = document.getElementById('pomodoroFloatingWidget');
    if (dock) dock.style.display = 'flex';
  }

  function hideFloatingWidget(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const dock = document.getElementById('pomodoroFloatingWidget');
    if (dock) dock.style.display = 'none';
  }

  function openDrawer() {
    const modal = document.getElementById('pomodoroModal');
    if (!modal) return;
    modal.classList.add('active');
    updateAllDisplays();
    highlightDurationButtons();

    const hoursSelect = document.getElementById('pomoHoursSelect');
    if (hoursSelect) {
      hoursSelect.value = state.targetHours;
    }
  }

  function closeDrawer() {
    const modal = document.getElementById('pomodoroModal');
    if (modal) modal.classList.remove('active');
    // Si le minuteur tourne ou la musique joue, s'assurer que le widget flottant reste visible
    if (state.isRunning || state.isMusicPlaying) {
      showFloatingWidget();
    }
  }

  function showNotificationToast(msg) {
    let toast = document.getElementById('pomoToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pomoToast';
      toast.className = 'pomo-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 4500);
  }

  // Interface publique
  return {
    init,
    startTimer,
    pauseTimer,
    toggleTimer,
    resetTimer,
    skipSession,
    setDurationOption,
    setTargetHours,
    loadYouTubeTrack,
    playYouTubeMusic,
    stopYouTubeMusic,
    toggleYouTubeMusic,
    handleCustomYouTubeSubmit,
    selectPresetStream,
    openDrawer,
    closeDrawer,
    showFloatingWidget,
    hideFloatingWidget,
    getState: () => ({ ...state })
  };
})();

// Déclenchement automatique au chargement
document.addEventListener('DOMContentLoaded', () => {
  PomodoroEngine.init();
});
