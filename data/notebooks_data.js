/**
 * ===================================================================
 * STI DE A À Z — DONNÉES DU CRÉATEUR DE CAHIERS NUMÉRIQUES
 * 10 Couvertures authentiques + Thèmes automatiques coordonnés
 * 20 Mises en page + Polices + Fonds + Éléments vectoriels SVG
 * ===================================================================
 */
'use strict';

var NOTEBOOKS_DATA = (function () {

  // ── 1. POLICES DISPONIBLES (7 STYLES DEMANDÉS) ─────────────────────────
  var FONTS = [
    { id: 'elegant-playfair',   name: 'Playfair Display',   styleLabel: 'Élégante',       css: "'Playfair Display', Georgia, serif" },
    { id: 'elegant-cormorant',  name: 'Cormorant Garamond', styleLabel: 'Élégante',       css: "'Cormorant Garamond', Georgia, serif" },
    { id: 'handwritten-script', name: 'Dancing Script',     styleLabel: 'Manuscrite',     css: "'Dancing Script', cursive" },
    { id: 'handwritten-caveat', name: 'Caveat',             styleLabel: 'Manuscrite',     css: "'Caveat', cursive" },
    { id: 'minimal-inter',      name: 'Inter',              styleLabel: 'Minimaliste',    css: "'Inter', system-ui, sans-serif" },
    { id: 'minimal-dm',         name: 'DM Sans',            styleLabel: 'Minimaliste',    css: "'DM Sans', system-ui, sans-serif" },
    { id: 'modern-poppins',     name: 'Poppins',            styleLabel: 'Moderne',        css: "'Poppins', system-ui, sans-serif" },
    { id: 'modern-space',       name: 'Space Grotesk',      styleLabel: 'Moderne',        css: "'Space Grotesk', system-ui, sans-serif" },
    { id: 'classic-lora',       name: 'Lora',               styleLabel: 'Classique',      css: "'Lora', Georgia, serif" },
    { id: 'classic-basker',     name: 'Libre Baskerville',  styleLabel: 'Classique',      css: "'Libre Baskerville', Georgia, serif" },
    { id: 'cute-quicksand',     name: 'Quicksand',          styleLabel: 'Mignonne',       css: "'Quicksand', system-ui, sans-serif" },
    { id: 'cute-patrick',       name: 'Patrick Hand',       styleLabel: 'Mignonne',       css: "'Patrick Hand', cursive" },
    { id: 'pro-jakarta',        name: 'Plus Jakarta Sans',  styleLabel: 'Professionnelle', css: "'Plus Jakarta Sans', system-ui, sans-serif" },
    { id: 'pro-ibm',            name: 'IBM Plex Sans',      styleLabel: 'Professionnelle', css: "'IBM Plex Sans', system-ui, sans-serif" }
  ];

  // ── 2. LES 10 COUVERTURES & LEURS THÈMES AUTOMATIQUES ──────────────────
  var COVERS = [
    {
      id: 'cover-01-black-luxury',
      name: 'Noir Luxe & Or',
      category: 'Luxe & Minimaliste',
      image: 'img/notebooks/covers/cover-01-black-luxury.png',
      backImage: null,
      isWrap: false,
      description: 'Noir mat profond, typographie éditoriale crème et accents dorés raffinés.',
      theme: {
        themeName: 'Luxe Noir & Or',
        accent: '#C59B38',
        accentSoft: 'rgba(197, 155, 56, 0.13)',
        accentText: '#FFFFFF',
        border: '#B8922E',
        borderStyle: 'double-gold',
        paperBg: '#FAF8F4',
        paperTint: '#F1ECE1',
        headingColor: '#18181B',
        textColor: '#27272A',
        mutedColor: '#71717A',
        fontHeading: "'Playfair Display', Georgia, serif",
        fontBody: "'Inter', system-ui, sans-serif",
        checkboxStyle: 'diamond',
        pattern: 'luxury-lines',
        stickers: ['sparkle-gold', 'star-outline', 'crown', 'divider-ornate'],
        coverTitleDefaults: { x: 50, y: 53, fontSize: 24, color: '#F3EFE6', fontFamily: "'Playfair Display', Georgia, serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(20, 20, 20, 0.65)' },
        coverNameDefaults:  { x: 50, y: 74, fontSize: 16, color: '#E5C468', fontFamily: "'Inter', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(20, 20, 20, 0.55)' }
      }
    },
    {
      id: 'cover-02-pink-coral',
      name: 'Rose Pop & Corail',
      category: 'Moderne & Audacieux',
      image: 'img/notebooks/covers/cover-02-pink-coral.png',
      backImage: null,
      isWrap: false,
      description: 'Rose vibrant et corail moderne, idéal pour un planner énergique et structuré.',
      theme: {
        themeName: 'Corail Moderne',
        accent: '#E13D5A',
        accentSoft: 'rgba(225, 61, 90, 0.12)',
        accentText: '#FFFFFF',
        border: '#F472B6',
        borderStyle: 'bold-clean',
        paperBg: '#FFF9FB',
        paperTint: '#FFE8EF',
        headingColor: '#BE185D',
        textColor: '#3B1826',
        mutedColor: '#9D4E6B',
        fontHeading: "'Poppins', system-ui, sans-serif",
        fontBody: "'DM Sans', system-ui, sans-serif",
        checkboxStyle: 'rounded',
        pattern: 'dots-soft',
        stickers: ['heart-filled', 'sparkle', 'star-filled', 'flower-minimal'],
        coverTitleDefaults: { x: 50, y: 58, fontSize: 25, color: '#FFFFFF', fontFamily: "'Poppins', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(214, 69, 49, 0.88)' },
        coverNameDefaults:  { x: 50, y: 70, fontSize: 16, color: '#831843', fontFamily: "'Poppins', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(255, 255, 255, 0.85)' }
      }
    },
    {
      id: 'cover-03-burgundy-floral',
      name: 'Bordeaux & Cerisier',
      category: 'Floral & Romantique',
      image: 'img/notebooks/covers/cover-03-burgundy-floral.png',
      backImage: 'img/notebooks/covers/cover-03-burgundy-floral-back.png',
      isWrap: false,
      description: 'Bordeaux profond orné de fleurs de cerisier, nœuds roses et arabesques ivoire.',
      theme: {
        themeName: 'Bordeaux Floral',
        accent: '#9F1239',
        accentSoft: 'rgba(159, 18, 57, 0.11)',
        accentText: '#FFFFFF',
        border: '#D47B8C',
        borderStyle: 'floral-ornate',
        paperBg: '#FFFBFB',
        paperTint: '#FCECEF',
        headingColor: '#881337',
        textColor: '#3B1820',
        mutedColor: '#8A4F5C',
        fontHeading: "'Cormorant Garamond', Georgia, serif",
        fontBody: "'Lora', Georgia, serif",
        checkboxStyle: 'heart',
        pattern: 'floral-corners',
        stickers: ['flower-cherry', 'bow-coquette', 'divider-ornate', 'heart-outline'],
        coverTitleDefaults: { x: 50, y: 50, fontSize: 23, color: '#FFF5F6', fontFamily: "'Cormorant Garamond', Georgia, serif", bold: true, italic: true, align: 'center', pillBg: 'rgba(110, 20, 26, 0.78)' },
        coverNameDefaults:  { x: 52, y: 81, fontSize: 17, color: '#FFF1F2', fontFamily: "'Playfair Display', Georgia, serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(110, 20, 26, 0.65)' }
      }
    },
    {
      id: 'cover-04-vintage-diary',
      name: 'Parchemin & Arabesques',
      category: 'Classique & Vintage',
      image: 'img/notebooks/covers/cover-04-vintage-diary.png',
      backImage: 'img/notebooks/covers/cover-04-vintage-diary-back.png',
      isWrap: false,
      description: 'Papier kraft ancien avec cadre gravé à l’encre noire et cartouche traditionnel.',
      theme: {
        themeName: 'Parchemin Classique',
        accent: '#7C4A2D',
        accentSoft: 'rgba(124, 74, 45, 0.12)',
        accentText: '#FFFFFF',
        border: '#8C6239',
        borderStyle: 'vintage-frame',
        paperBg: '#FBF5E9',
        paperTint: '#F2E5CE',
        headingColor: '#4A2511',
        textColor: '#2D1A0E',
        mutedColor: '#7A5C43',
        fontHeading: "'Libre Baskerville', Georgia, serif",
        fontBody: "'Lora', Georgia, serif",
        checkboxStyle: 'square',
        pattern: 'parchment',
        stickers: ['divider-ornate', 'leaf-botanical', 'quill', 'frame-vintage'],
        coverTitleDefaults: { x: 50, y: 54, fontSize: 24, color: '#2B180C', fontFamily: "'Libre Baskerville', Georgia, serif", bold: true, italic: true, align: 'center', pillBg: 'rgba(251, 245, 233, 0.55)' },
        coverNameDefaults:  { x: 50, y: 80.5, fontSize: 15, color: '#231308', fontFamily: "'Libre Baskerville', Georgia, serif", bold: true, italic: false, align: 'center', pillBg: 'transparent' }
      }
    },
    {
      id: 'cover-05-blue-vintage-floral',
      name: 'Bleu Rayé & Tasse Fleurie',
      category: 'Floral & Doux',
      image: 'img/notebooks/covers/cover-05-blue-vintage-floral.png',
      backImage: null,
      isWrap: true,
      description: 'Rayures bleu ciel et crème, médaillon floral vintage et étiquette nominative.',
      theme: {
        themeName: 'Bleu Vintage Floral',
        accent: '#547AA5',
        accentSoft: 'rgba(84, 122, 165, 0.12)',
        accentText: '#FFFFFF',
        border: '#8EAED0',
        borderStyle: 'double-thin',
        paperBg: '#FCFBF7',
        paperTint: '#EBF2FA',
        headingColor: '#2E4F75',
        textColor: '#243344',
        mutedColor: '#637B96',
        fontHeading: "'Playfair Display', Georgia, serif",
        fontBody: "'Inter', system-ui, sans-serif",
        checkboxStyle: 'circle',
        pattern: 'stripes-soft',
        stickers: ['flower-daisy', 'bow-coquette', 'leaf-botanical', 'heart-outline'],
        coverTitleDefaults: { x: 50, y: 61, fontSize: 20, color: '#2E4F75', fontFamily: "'Playfair Display', Georgia, serif", bold: true, italic: true, align: 'center', pillBg: 'rgba(252, 251, 247, 0.90)' },
        coverNameDefaults:  { x: 54, y: 78, fontSize: 15, color: '#243344', fontFamily: "'Dancing Script', cursive", bold: true, italic: false, align: 'center', pillBg: 'transparent' }
      }
    },
    {
      id: 'cover-06-pink-bunny-coquette',
      name: 'Lapin Coquette & Rubans',
      category: 'Mignon & Coquette',
      image: 'img/notebooks/covers/cover-06-pink-bunny-coquette.png',
      backImage: null,
      isWrap: true,
      description: 'Rayures pêche-rosé, petit lapin dans une couronne de tulipes et rubans coquette.',
      theme: {
        themeName: 'Coquette Pastel',
        accent: '#E27396',
        accentSoft: 'rgba(226, 115, 150, 0.13)',
        accentText: '#FFFFFF',
        border: '#F2B5C7',
        borderStyle: 'scalloped-soft',
        paperBg: '#FFF9FB',
        paperTint: '#FFEFF4',
        headingColor: '#A63A5B',
        textColor: '#4B2834',
        mutedColor: '#9E6274',
        fontHeading: "'Quicksand', system-ui, sans-serif",
        fontBody: "'Quicksand', system-ui, sans-serif",
        checkboxStyle: 'heart',
        pattern: 'dots-blush',
        stickers: ['bow-coquette', 'heart-filled', 'flower-cherry', 'cherry'],
        coverTitleDefaults: { x: 50, y: 67, fontSize: 19, color: '#A63A5B', fontFamily: "'Quicksand', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(255, 249, 251, 0.92)' },
        coverNameDefaults:  { x: 52, y: 79, fontSize: 15, color: '#6E253C', fontFamily: "'Patrick Hand', cursive", bold: true, italic: false, align: 'center', pillBg: 'transparent' }
      }
    },
    {
      id: 'cover-07-pink-floral-butterfly',
      name: 'Jardin Rose & Papillon',
      category: 'Floral & Coquette',
      image: 'img/notebooks/covers/cover-07-pink-floral-butterfly.png',
      backImage: null,
      isWrap: true,
      description: 'Semis de petites roses sur fond blanc avec cadre aquarelle tulipe et papillon.',
      theme: {
        themeName: 'Roses & Papillon',
        accent: '#DB2777',
        accentSoft: 'rgba(219, 39, 119, 0.10)',
        accentText: '#FFFFFF',
        border: '#F472B6',
        borderStyle: 'dashed-cute',
        paperBg: '#FFFCFD',
        paperTint: '#FDF2F8',
        headingColor: '#9D174D',
        textColor: '#3D1E2E',
        mutedColor: '#965675',
        fontHeading: "'Dancing Script', cursive",
        fontBody: "'Patrick Hand', cursive",
        checkboxStyle: 'heart',
        pattern: 'floral-minimal',
        stickers: ['butterfly', 'flower-cherry', 'heart-filled', 'leaf-botanical'],
        coverTitleDefaults: { x: 50, y: 70, fontSize: 22, color: '#9D174D', fontFamily: "'Dancing Script', cursive", bold: true, italic: false, align: 'center', pillBg: 'rgba(255, 255, 255, 0.92)' },
        coverNameDefaults:  { x: 50, y: 80, fontSize: 16, color: '#BE185D', fontFamily: "'Quicksand', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(253, 242, 248, 0.92)' }
      }
    },
    {
      id: 'cover-08-grey-purple-botanical',
      name: 'Gris Perle & Lavande',
      category: 'Minimaliste & Botanique',
      image: 'img/notebooks/covers/cover-08-grey-purple-botanical.png',
      backImage: null,
      isWrap: true,
      description: 'Épuré, apaisant et élégant avec feuillage aquarelle lavande et sauge.',
      theme: {
        themeName: 'Botanique Lavande',
        accent: '#7A6F9B',
        accentSoft: 'rgba(122, 111, 155, 0.12)',
        accentText: '#FFFFFF',
        border: '#B8B0CC',
        borderStyle: 'thin-elegant',
        paperBg: '#FCFCFD',
        paperTint: '#F2EFF8',
        headingColor: '#4B4268',
        textColor: '#2D2A38',
        mutedColor: '#726B87',
        fontHeading: "'Cormorant Garamond', Georgia, serif",
        fontBody: "'DM Sans', system-ui, sans-serif",
        checkboxStyle: 'circle',
        pattern: 'none',
        stickers: ['leaf-botanical', 'sparkle', 'divider-ornate', 'frame-minimal'],
        coverTitleDefaults: { x: 50, y: 54, fontSize: 25, color: '#4B4268', fontFamily: "'Cormorant Garamond', Georgia, serif", bold: true, italic: true, align: 'center', pillBg: 'rgba(245, 244, 242, 0.85)' },
        coverNameDefaults:  { x: 50, y: 65, fontSize: 15, color: '#7A6F9B', fontFamily: "'DM Sans', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(245, 244, 242, 0.80)' }
      }
    },
    {
      id: 'cover-09-purple-pink-dreamy',
      name: 'Crépuscule Rêveur',
      category: 'Céleste & Poétique',
      image: 'img/notebooks/covers/cover-09-purple-pink-dreamy.png',
      backImage: null,
      isWrap: true,
      description: 'Nuages pastel au coucher du soleil, reflets d’eau étoilés violet et rose.',
      theme: {
        themeName: 'Ciel Crépuscule',
        accent: '#7C3AED',
        accentSoft: 'rgba(124, 58, 237, 0.12)',
        accentText: '#FFFFFF',
        border: '#C4B5FD',
        borderStyle: 'glow-soft',
        paperBg: '#FDFBFF',
        paperTint: '#F3EEFF',
        headingColor: '#5B21B6',
        textColor: '#2C2144',
        mutedColor: '#76619E',
        fontHeading: "'Caveat', cursive",
        fontBody: "'Plus Jakarta Sans', system-ui, sans-serif",
        checkboxStyle: 'rounded',
        pattern: 'stars-subtle',
        stickers: ['star-filled', 'cloud', 'moon', 'sparkle'],
        coverTitleDefaults: { x: 50, y: 78, fontSize: 24, color: '#FFFFFF', fontFamily: "'Caveat', cursive", bold: true, italic: false, align: 'center', pillBg: 'rgba(59, 43, 102, 0.72)' },
        coverNameDefaults:  { x: 50, y: 87, fontSize: 15, color: '#FDE68A', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(59, 43, 102, 0.68)' }
      }
    },
    {
      id: 'cover-10-blue-city-sky',
      name: 'Horizon Bleu & Ville',
      category: 'Bleu & Moderne',
      image: 'img/notebooks/covers/cover-10-blue-city-sky.png',
      backImage: null,
      isWrap: true,
      description: 'Ciel bleu lumineux, ligne d’horizon urbaine et esprit dynamique.',
      theme: {
        themeName: 'Azur Minimaliste',
        accent: '#0284C7',
        accentSoft: 'rgba(2, 132, 199, 0.12)',
        accentText: '#FFFFFF',
        border: '#7DD3FC',
        borderStyle: 'modern-clean',
        paperBg: '#FAFDFF',
        paperTint: '#E0F2FE',
        headingColor: '#0369A1',
        textColor: '#0F172A',
        mutedColor: '#475569',
        fontHeading: "'Space Grotesk', system-ui, sans-serif",
        fontBody: "'IBM Plex Sans', system-ui, sans-serif",
        checkboxStyle: 'square',
        pattern: 'grid-subtle',
        stickers: ['cloud', 'star-outline', 'compass', 'line-geometric'],
        coverTitleDefaults: { x: 50, y: 12, fontSize: 22, color: '#FFFFFF', fontFamily: "'Space Grotesk', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(3, 105, 161, 0.80)' },
        coverNameDefaults:  { x: 50, y: 21, fontSize: 15, color: '#E0F2FE', fontFamily: "'IBM Plex Sans', system-ui, sans-serif", bold: true, italic: false, align: 'center', pillBg: 'rgba(15, 23, 42, 0.65)' }
      }
    }
  ];

  // ── 3. LES 20 MISES EN PAGE (FIDÈLES AUX 20 PNG FOURNIS) ───────────────
  var PAGE_LAYOUTS = [
    { id: '01-classic-lined',   num: 1,  name: 'Notes lignées classiques',     category: 'Notes',       previewImage: 'img/notebooks/layouts/01-classic-lined-notes.png',    icon: '📝' },
    { id: '02-dotted-notes',    num: 2,  name: 'Notes pointillées (Bullet)',   category: 'Notes',       previewImage: 'img/notebooks/layouts/02-dotted-notes.png',           icon: '⠿' },
    { id: '03-grid-notes',      num: 3,  name: 'Notes quadrillées',            category: 'Notes',       previewImage: 'img/notebooks/layouts/03-grid-notes.png',             icon: '⊞' },
    { id: '04-blank-journal',   num: 4,  name: 'Page libre (Dream Big)',       category: 'Journal',     previewImage: 'img/notebooks/layouts/04-blank-journal.png',          icon: '✨' },
    { id: '05-to-do-checklist', num: 5,  name: 'Liste To-Do interactive',      category: 'Tâches',      previewImage: 'img/notebooks/layouts/05-to-do-checklist.png',        icon: '☑️' },
    { id: '06-daily-planner',   num: 6,  name: 'Planificateur du jour',        category: 'Planning',    previewImage: 'img/notebooks/layouts/06-daily-planner.png',          icon: '☀️' },
    { id: '07-weekly-planner',  num: 7,  name: 'Planificateur hebdomadaire',   category: 'Planning',    previewImage: 'img/notebooks/layouts/07-weekly-planner.png',         icon: '📅' },
    { id: '08-monthly-planner', num: 8,  name: 'Planificateur mensuel',        category: 'Planning',    previewImage: 'img/notebooks/layouts/08-monthly-planner.png',        icon: '🗓️' },
    { id: '09-study-notes',     num: 9,  name: 'Fiches de révision (Études)',  category: 'Études',      previewImage: 'img/notebooks/layouts/09-study-notes.png',            icon: '🎓' },
    { id: '10-project-planner', num: 10, name: 'Planificateur de projet',      category: 'Tâches',      previewImage: 'img/notebooks/layouts/10-project-planner.png',        icon: '📁' },
    { id: '11-brain-dump',      num: 11, name: 'Brain Dump (Idées rapides)',   category: 'Notes',       previewImage: 'img/notebooks/layouts/11-brain-dump.png',             icon: '⚡' },
    { id: '12-habit-tracker',   num: 12, name: 'Suivi des habitudes',          category: 'Suivi',       previewImage: 'img/notebooks/layouts/12-habit-tracker.png',          icon: '🔁' },
    { id: '13-goals-planner',   num: 13, name: 'Planificateur d’objectifs',    category: 'Suivi',       previewImage: 'img/notebooks/layouts/13-goals-planner.png',          icon: '🎯' },
    { id: '14-gratitude',       num: 14, name: 'Journal de gratitude',         category: 'Journal',     previewImage: 'img/notebooks/layouts/14-gratitude-journal.png',      icon: '💛' },
    { id: '15-mood-tracker',    num: 15, name: 'Suivi de l’humeur',            category: 'Suivi',       previewImage: 'img/notebooks/layouts/15-mood-tracker.png',           icon: '😊' },
    { id: '16-reading-journal', num: 16, name: 'Journal de lecture',           category: 'Journal',     previewImage: 'img/notebooks/layouts/16-reading-journal.png',        icon: '📖' },
    { id: '17-daily-reflection', num: 17, name: 'Bilan & Réflexion du jour',   category: 'Journal',     previewImage: 'img/notebooks/layouts/17-daily-reflection.png',       icon: '💭' },
    { id: '18-scrapbook',       num: 18, name: 'Scrapbook & Souvenirs',        category: 'Créatif',     previewImage: 'img/notebooks/layouts/18-scrapbook-memories.png',     icon: '📷' },
    { id: '19-daily-schedule',  num: 19, name: 'Emploi du temps horaire',      category: 'Planning',    previewImage: 'img/notebooks/layouts/19-daily-schedule.png',         icon: '⏰' },
    { id: '20-decorative-lined', num: 20, name: 'Notes lignées décoratives',   category: 'Notes',       previewImage: 'img/notebooks/layouts/20-decorative-lined-notes.png', icon: '🎀' }
  ];

  // ── 4. MOTIFS DE FOND & TEXTURES DE PAPIER ─────────────────────────────
  var PATTERNS = [
    { id: 'none',           name: 'Papier Uni',        cssClass: 'nb-pat-none' },
    { id: 'dots-soft',      name: 'Points Doux',       cssClass: 'nb-pat-dots' },
    { id: 'dots-blush',     name: 'Points Pastel',     cssClass: 'nb-pat-dots-blush' },
    { id: 'grid-subtle',    name: 'Quadrillage Fin',   cssClass: 'nb-pat-grid' },
    { id: 'stripes-soft',   name: 'Rayures Vintage',   cssClass: 'nb-pat-stripes' },
    { id: 'parchment',      name: 'Parchemin Ancien',  cssClass: 'nb-pat-parchment' },
    { id: 'luxury-lines',   name: 'Cadre Luxe',        cssClass: 'nb-pat-luxury' },
    { id: 'floral-corners', name: 'Coins Floraux',     cssClass: 'nb-pat-floral' },
    { id: 'floral-minimal', name: 'Fleurs Subtiles',   cssClass: 'nb-pat-floral-min' },
    { id: 'stars-subtle',   name: 'Ciel Étoilé',       cssClass: 'nb-pat-stars' }
  ];

  var BORDERS = [
    { id: 'thin-elegant',   name: 'Fin Élégant' },
    { id: 'double-thin',    name: 'Double Ligne' },
    { id: 'double-gold',    name: 'Cadre Luxe Doré' },
    { id: 'bold-clean',     name: 'Moderne Épais' },
    { id: 'dashed-cute',    name: 'Pointillés Mignons' },
    { id: 'scalloped-soft', name: 'Arrondi Doux' },
    { id: 'floral-ornate',  name: 'Orné Floral' },
    { id: 'vintage-frame',  name: 'Cadre Vintage' },
    { id: 'glow-soft',      name: 'Halo Doux' },
    { id: 'modern-clean',   name: 'Épuré Moderne' }
  ];

  var PAPER_COLORS = [
    { name: 'Ivoire Pur',      bg: '#FFFFFF',    tint: '#F8FAFC' },
    { name: 'Crème Chaud',     bg: '#FAF8F4',    tint: '#F1ECE1' },
    { name: 'Parchemin',       bg: '#FBF5E9',    tint: '#F2E5CE' },
    { name: 'Rose Poudré',     bg: '#FFF9FB',    tint: '#FFEFF4' },
    { name: 'Pêche Douce',     bg: '#FFFBF7',    tint: '#FFEDD5' },
    { name: 'Lavande Claire',  bg: '#FDFBFF',    tint: '#F3EEFF' },
    { name: 'Bleu Nuage',      bg: '#FAFDFF',    tint: '#E0F2FE' },
    { name: 'Sauge Douce',     bg: '#F9FCF9',    tint: '#ECFDF5' }
  ];

  // ── 5. ÉLÉMENTS & STICKERS VECTORIELS (CRISP SVG) ──────────────────────
  var ELEMENTS = [
    { id: 'heart-filled',   name: 'Cœur plein',       cat: 'Cœurs',     svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
    { id: 'heart-outline',  name: 'Cœur contour',     cat: 'Cœurs',     svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
    { id: 'star-filled',    name: 'Étoile pleine',    cat: 'Étoiles',   svg: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
    { id: 'star-outline',   name: 'Étoile contour',   cat: 'Étoiles',   svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
    { id: 'sparkle',        name: 'Étincelle',        cat: 'Étoiles',   svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"/></svg>' },
    { id: 'sparkle-gold',   name: 'Éclat Luxe',       cat: 'Étoiles',   svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z"/><circle cx="19" cy="5" r="1.4"/><circle cx="5" cy="19" r="1.2"/></svg>' },
    { id: 'bow-coquette',   name: 'Nœud Coquette',    cat: 'Nœuds',     svg: '<svg viewBox="0 0 64 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M32 18C24 6 8 6 8 16C8 24 24 24 32 18Z" fill="currentColor" fill-opacity="0.22"/><path d="M32 18C40 6 56 6 56 16C56 24 40 24 32 18Z" fill="currentColor" fill-opacity="0.22"/><path d="M30 20L20 36M34 20L44 36"/><circle cx="32" cy="18" r="4" fill="currentColor"/></svg>' },
    { id: 'flower-cherry',  name: 'Fleur Cerisier',   cat: 'Fleurs',    svg: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M24 24C18 10 30 10 24 24ZM24 24C38 18 38 30 24 24ZM24 24C30 38 18 38 24 24ZM24 24C10 30 10 18 24 24ZM24 24C12 12 24 6 24 24Z" fill="currentColor" fill-opacity="0.25"/><circle cx="24" cy="24" r="3.5" fill="currentColor"/></svg>' },
    { id: 'flower-daisy',   name: 'Marguerite',       cat: 'Fleurs',    svg: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="24" cy="12" r="5" fill="currentColor" fill-opacity="0.18"/><circle cx="35" cy="19" r="5" fill="currentColor" fill-opacity="0.18"/><circle cx="31" cy="32" r="5" fill="currentColor" fill-opacity="0.18"/><circle cx="17" cy="32" r="5" fill="currentColor" fill-opacity="0.18"/><circle cx="13" cy="19" r="5" fill="currentColor" fill-opacity="0.18"/><circle cx="24" cy="23" r="5" fill="currentColor"/></svg>' },
    { id: 'flower-minimal', name: 'Fleur minimaliste', cat: 'Fleurs',   svg: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 10c2-4 7-3 5 1 4 0 5 5 1 6 3 3-1 7-5 4-4 3-8-1-5-4-4-1-3-6 1-6-2-4 3-5 3-1z" fill="currentColor" fill-opacity="0.18"/><circle cx="16" cy="16" r="2.2" fill="currentColor"/></svg>' },
    { id: 'leaf-botanical', name: 'Branche Feuilles', cat: 'Feuilles',  svg: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 38C18 30 28 20 38 10"/><path d="M18 30C12 26 12 18 20 18C20 26 18 30 18 30Z" fill="currentColor" fill-opacity="0.2"/><path d="M26 22C32 22 36 28 28 32C24 28 26 22 26 22Z" fill="currentColor" fill-opacity="0.2"/><path d="M28 20C24 14 28 8 34 12C34 18 28 20 28 20Z" fill="currentColor" fill-opacity="0.2"/></svg>' },
    { id: 'butterfly',      name: 'Papillon',         cat: 'Illustrations', svg: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 22C16 10 6 12 8 22C9 27 16 28 24 24C32 28 39 27 40 22C42 12 32 10 24 22Z" fill="currentColor" fill-opacity="0.24"/><path d="M24 25C18 28 12 36 17 39C21 41 24 33 24 25C24 33 27 41 31 39C36 36 30 28 24 25Z" fill="currentColor" fill-opacity="0.16"/><line x1="24" y1="16" x2="24" y2="34"/></svg>' },
    { id: 'crown',          name: 'Couronne',         cat: 'Illustrations', svg: '<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 22L2 8L11 15L18 5L25 15L34 8L32 22H4Z" fill="currentColor" fill-opacity="0.22"/><line x1="4" y1="25" x2="32" y2="25"/></svg>' },
    { id: 'cloud',          name: 'Nuage Doux',       cat: 'Illustrations', svg: '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 26H36C40.4 26 44 22.4 44 18C44 13.8 40.8 10.4 36.7 10C35.2 5.4 30.9 2 25.8 2C19.6 2 14.5 6.8 14.1 12.9C9.6 13.4 6 17.2 6 21.8C6 24.2 9.6 26 14 26Z" fill="currentColor" fill-opacity="0.18"/></svg>' },
    { id: 'moon',           name: 'Croissant de Lune', cat: 'Étoiles',  svg: '<svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' },
    { id: 'cherry',         name: 'Cerises',          cat: 'Stickers',  svg: '<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6C16 12 12 18 11 23M18 6C21 12 24 18 25 23"/><circle cx="11" cy="26" r="5" fill="currentColor" fill-opacity="0.3"/><circle cx="25" cy="26" r="5" fill="currentColor" fill-opacity="0.3"/></svg>' },
    { id: 'divider-ornate', name: 'Séparateur Orné',  cat: 'Lignes',    svg: '<svg viewBox="0 0 160 20" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="4" y1="10" x2="64" y2="10"/><path d="M80 4L85 10L80 16L75 10Z" fill="currentColor"/><line x1="96" y1="10" x2="156" y2="10"/></svg>' },
    { id: 'line-geometric', name: 'Ligne Géométrique', cat: 'Lignes',   svg: '<svg viewBox="0 0 160 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="8" x2="154" y2="8"/><circle cx="10" cy="8" r="3" fill="currentColor"/><circle cx="150" cy="8" r="3" fill="currentColor"/></svg>' },
    { id: 'frame-minimal',  name: 'Cadre Étiquette',  cat: 'Cadres',    svg: '<svg viewBox="0 0 120 60" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="112" height="52" rx="10"/></svg>' },
    { id: 'frame-vintage',  name: 'Cadre Orné',       cat: 'Cadres',    svg: '<svg viewBox="0 0 120 60" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="112" height="52" rx="4"/><rect x="8" y="8" width="104" height="44" rx="2" stroke-dasharray="4 3"/></svg>' },
    { id: 'quill',          name: 'Plume',            cat: 'Illustrations', svg: '<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M29 5C20 6 12 14 9 27L5 31M9 27C18 26 26 18 29 5Z" fill="currentColor" fill-opacity="0.18"/></svg>' },
    { id: 'compass',        name: 'Boussole',         cat: 'Illustrations', svg: '<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="14"/><polygon points="22 14 19 19 14 22 17 17 22 14" fill="currentColor"/></svg>' },
    { id: 'sticker-goal',   name: 'Badge Objectif',   cat: 'Stickers',  svg: '<svg viewBox="0 0 90 28"><rect x="1" y="1" width="88" height="26" rx="13" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="45" y="18" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="sans-serif">OBJECTIF ★</text></svg>' },
    { id: 'sticker-note',   name: 'Badge Important',  cat: 'Stickers',  svg: '<svg viewBox="0 0 96 28"><rect x="1" y="1" width="94" height="26" rx="6" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.5"/><text x="48" y="18" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="sans-serif">IMPORTANT !</text></svg>' }
  ];

  // ── 6. CRÉATION DE DONNÉES INITIALES SELON LA MISE EN PAGE ─────────────
  function createDefaultPageData(layoutId, customTitle) {
    var todayStr = new Date().toLocaleDateString('fr-FR');
    var layout = getLayoutById(layoutId) || PAGE_LAYOUTS[0];
    return {
      id: 'pg_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6),
      title: customTitle || layout.name,
      layoutId: layout.id,
      styleOverride: null, // { paperBg, accent, border, borderStyle, pattern, patternOpacity, bgImage, fontHeading, fontBody, headingColor, textColor }
      fields: {
        headerDate: todayStr,
        subject: '',
        projectTitle: '',
        projectDeadline: '',
        bookTitle: '',
        bookAuthor: '',
        bookRating: 4,
        monthName: new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
        notesText: '',
        notesSecondary: '',
        reminderText: '',
        priorities: ['', '', ''],
        gratitude: ['', '', ''],
        schedule: [
          { time: '08:00', text: '', done: false },
          { time: '10:00', text: '', done: false },
          { time: '12:00', text: '', done: false },
          { time: '14:00', text: '', done: false },
          { time: '16:00', text: '', done: false },
          { time: '18:00', text: '', done: false },
          { time: '20:00', text: '', done: false }
        ],
        weeklyDays: {
          Lundi: '', Mardi: '', Mercredi: '', Jeudi: '', Vendredi: '', Samedi: '', Dimanche: ''
        },
        monthlyCells: Array(35).fill(''),
        habits: [
          { id: 'hb_1', name: 'Réviser 1 chapitre Algo', days: [true, false, true, false, false, false, false] },
          { id: 'hb_2', name: 'Boire 1.5L d’eau', days: [true, true, false, false, false, false, false] },
          { id: 'hb_3', name: 'Exercice pratique Qt / Python', days: [false, true, false, false, false, false, false] }
        ],
        moods: Array(35).fill(''), // '', 'happy', 'calm', 'neutral', 'tired', 'stressed'
        scrapbookImage: '',
        scrapbookCaption: 'Mon souvenir du jour...'
      },
      tasks: (layout.id === '05-to-do-checklist' || layout.id === '10-project-planner' || layout.id === '13-goals-planner')
        ? [
            { id: 'tk_1', text: 'Relire la fiche méthode du chapitre', desc: '', category: 'Études', priority: 'high', deadline: '', done: false },
            { id: 'tk_2', text: 'Faire 1 quiz rapide', desc: '', category: 'Bac Info', priority: 'medium', deadline: '', done: false },
            { id: 'tk_3', text: 'Organiser mes notes de la semaine', desc: '', category: 'Personnel', priority: 'low', deadline: '', done: false }
          ]
        : [],
      elements: [] // { id, type: 'text'|'sticker'|'image', x, y, width, height, rotation, opacity, ... }
    };
  }

  function getCoverById(id) {
    return COVERS.find(function (c) { return c.id === id; }) || COVERS[0];
  }

  function getLayoutById(id) {
    return PAGE_LAYOUTS.find(function (l) { return l.id === id; }) || PAGE_LAYOUTS[0];
  }

  function getElementById(id) {
    return ELEMENTS.find(function (e) { return e.id === id; }) || null;
  }

  function cloneTheme(theme) {
    return JSON.parse(JSON.stringify(theme));
  }

  return {
    FONTS: FONTS,
    COVERS: COVERS,
    PAGE_LAYOUTS: PAGE_LAYOUTS,
    PATTERNS: PATTERNS,
    BORDERS: BORDERS,
    PAPER_COLORS: PAPER_COLORS,
    ELEMENTS: ELEMENTS,
    getCoverById: getCoverById,
    getLayoutById: getLayoutById,
    getElementById: getElementById,
    createDefaultPageData: createDefaultPageData,
    cloneTheme: cloneTheme
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NOTEBOOKS_DATA;
}
