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
      switchView(target);
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

    <!-- 3. Code HTML d'exemple -->
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

    <!-- 4. Photo / Rendu visuel du code -->
    <div class="modal-section">
      <div class="modal-section-title orange">
        <span>📸</span>
        <span>Photo / Rendu visuel du résultat</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">
        Voici l'apparence visuelle exacte produite par ce code dans une fenêtre de navigateur :
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
        <div class="browser-viewport">
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

    <!-- 5. Code CSS d'exemple -->
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

    <!-- 6. VIDÉO / DÉMONSTRATION ANIMÉE DU CODE -->
    <div class="modal-section">
      <div class="modal-section-title">
        <span>🎬</span>
        <span>Démonstration Vidéo en direct du code</span>
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
  cat.style.color = '#eab308';
  title.textContent = item.name;

  let valuesHtml = '';
  if (item.values && item.values.length > 0) {
    valuesHtml = `
      <div class="modal-section">
        <div class="modal-section-title yellow">
          <span>⚙️</span>
          <span>Syntaxe & Valeurs Autorisées (Bac STI)</span>
        </div>
        <div class="attr-tags-list">
          ${item.values.map(val => `<span class="attr-tag" style="color:#eab308; background:rgba(234, 179, 8, 0.1); border-color:rgba(234, 179, 8, 0.3); font-weight:600; font-size:0.85rem;">${escapeHtml(val)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <!-- 1. Description & Explication Détaillée -->
    <div class="modal-section">
      <div class="modal-section-title yellow">
        <span>📖</span>
        <span>Description & Explication Détaillée</span>
      </div>
      <p class="modal-text" style="font-size:0.98rem; line-height:1.65;">
        ${item.description || item.summary}
      </p>
    </div>

    <!-- 2. Syntaxe & Valeurs -->
    ${valuesHtml}

    <!-- 3. Rôle dans l'examen Bac STI -->
    <div class="modal-section">
      <div class="modal-section-title yellow">
        <span>🎯</span>
        <span>Rôle au Baccalauréat STI</span>
      </div>
      <p class="modal-text">${item.summary}</p>
    </div>

    <!-- 4. Code JavaScript d'exemple -->
    <div class="modal-section">
      <div class="modal-section-title yellow">
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

    <!-- 5. Exécution interactive en direct -->
    <div class="modal-section">
      <div class="modal-section-title yellow">
        <span>⚡</span>
        <span>Console Interactive : Tester le code en direct</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:10px;">
        Cliquez sur le bouton ci-dessous pour lancer l'exécution de cet exemple dans votre navigateur :
      </p>
      <button onclick="runInteractiveJsTest('${item.id}')" style="background:#eab308; color:#000; border:none; padding:10px 20px; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.95rem; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
        ▶ Exécuter cette fonction en direct
      </button>
      <div id="jsRunOutput" style="margin-top:12px; font-family:monospace; font-size:0.85rem; padding:12px; background:#090d16; color:#a3e635; border-radius:6px; display:none; border:1px solid #1e293b; line-height:1.5;"></div>
    </div>
  `;

  modal.classList.add('active');
}

function runInteractiveJsTest(id) {
  const item = DATA.js.find(j => j.id === id);
  const output = document.getElementById('jsRunOutput');
  if (!output) return;
  output.style.display = 'block';

  if (item && item.testCode) {
    try {
      eval(item.testCode);
      output.innerHTML = `✓ Exécution réussie de <strong>${escapeHtml(item.name)}</strong>.<br>Résultat affiché dans la boîte de dialogue contextuelle.`;
    } catch (e) {
      output.innerHTML = `⚠️ Info d'exécution : ${e.message}`;
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
