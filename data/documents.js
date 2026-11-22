// data/documents.js — Source unique des documents PDF (examens, séries, extraits)
// Généré automatiquement depuis documents.json — NE PAS MODIFIER À LA MAIN
// Chargé avant app.js dans index.html
'use strict';
var DOCUMENTS_DATA = (function () {

  var _docs = [
    // ── EXAMENS ────────────────────────────────────────────────────────────────
    {
      id: 'ds1-4si2-4si3-2025-12-09',
      kind: 'examen',
      examType: 'devoir-synthese',
      title: 'Devoir de synthèse n°1 — 4SI2/4SI3',
      date: '2025-12-09',
      classes: '4SI2, 4SI3',
      school: 'Lycée Sidi Thabet (Ariana)',
      teacher: 'Mme Olfa Hichri',
      duration: '3h',
      pages: 4,
      module: 'algo-theorique',
      chapters: ['recursivite', 'fichiers', 'matrices', 'tableaux'],
      file: 'pdf/examens/2025-12-09_ds1_4si2-4si3_hichri.pdf',
      correction: null,
      incomplete: false,
      notes: '',
      source: ''
    },
    {
      id: 'ds2-4si123-2023-03-13',
      kind: 'examen',
      examType: 'devoir-synthese',
      title: 'Devoir de synthèse n°2 — 4SI 1, 2 et 3',
      date: '2023-03-13',
      classes: '4SI 1, 2, 3',
      school: 'Lycée Sidi Thabet',
      teacher: 'Olfa Hichri, Khemais Bitri, Aymen Jamazi',
      duration: '3h',
      pages: 3,
      module: 'algo-theorique',
      chapters: ['tableaux', 'fichiers', 'bases', 'arithmetique', 'matrices', 'suites'],
      file: 'pdf/examens/2023-03-13_ds2_4si1-2-3_sidi-thabet.pdf',
      correction: null,
      incomplete: false,
      notes: '',
      source: ''
    },
    {
      id: 'bac-style-a',
      kind: 'examen',
      examType: 'bac',
      title: 'Examen type Bac (5 pages) — année et session non imprimées',
      date: 'inconnue',
      classes: "Sciences de l'informatique",
      school: 'République Tunisienne',
      teacher: '',
      duration: '3h (coef 2)',
      pages: 5,
      module: 'algo-theorique',
      chapters: ['recursivite', 'fichiers', 'tableaux', 'arithmetique', 'bases', 'matrices', 'suites'],
      file: 'pdf/examens/bac-style_A_5-pages_annee-inconnue.pdf',
      correction: null,
      incomplete: false,
      notes: 'Année/session à confirmer.',
      source: ''
    },
    {
      id: 'dc3-4si4-2026-04-17',
      kind: 'examen',
      examType: 'devoir-controle',
      title: 'Devoir de contrôle n°3 — 4SI4',
      date: '2026-04-17',
      classes: '4SI4',
      school: 'Lycée Sidi Thabet',
      teacher: 'Aymen Jamazi',
      duration: '1h30',
      pages: 2,
      module: 'algo-theorique',
      chapters: ['recursivite', 'approximation', 'matrices'],
      file: 'pdf/examens/2026-04-17_dc3_4si4_jamazi.pdf',
      correction: null,
      incomplete: false,
      notes: '',
      source: ''
    },
    {
      id: 'bac-style-b',
      kind: 'examen',
      examType: 'bac',
      title: 'Examen type Bac (4 pages) — année et session non imprimées',
      date: 'inconnue',
      classes: "Sciences de l'informatique",
      school: 'République Tunisienne',
      teacher: '',
      duration: '3h (coef 2)',
      pages: 4,
      module: 'algo-theorique',
      chapters: ['recursivite', 'fichiers', 'matrices', 'bases'],
      file: 'pdf/examens/bac-style_B_4-pages_annee-inconnue.pdf',
      correction: null,
      incomplete: false,
      notes: 'Année/session à confirmer. Les pages étaient mélangées dans le scan : ordre rétabli 1/4, 2/4, 3/4, 4/4.',
      source: ''
    },
    {
      id: 'ds2-4si14-2026-03-03',
      kind: 'examen',
      examType: 'devoir-synthese',
      title: 'Devoir de synthèse n°2 — 4SI 1 et 4',
      date: '2026-03-03',
      classes: '4SI 1, 4',
      school: 'Lycée Sidi Thabet',
      teacher: '',
      duration: '3h',
      pages: 3,
      module: 'algo-theorique',
      chapters: ['fichiers', 'recursivite', 'arithmetique', 'matrices', 'suites'],
      file: 'pdf/examens/2026-03-03_ds2_4si1-4_sidi-thabet.pdf',
      correction: null,
      incomplete: false,
      notes: "Pages remises dans l'ordre (scan mélangé).",
      source: ''
    },
    {
      id: 'ds1-4si14-2025-12-09',
      kind: 'examen',
      examType: 'devoir-synthese',
      title: 'Devoir de synthèse n°1 — 4SI 1 et 4',
      date: '2025-12-09',
      classes: '4SI 1, 4',
      school: 'Lycée Sidi Thabet',
      teacher: '',
      duration: '3h',
      pages: 4,
      module: 'algo-theorique',
      chapters: ['tableaux', 'recursivite', 'matrices', 'fichiers'],
      file: 'pdf/examens/2025-12-09_ds1_4si1-4_sidi-thabet.pdf',
      correction: null,
      incomplete: false,
      notes: "Pages remises dans l'ordre (scan mélangé). Le titre de la page 1 est un peu abîmé par le nettoyage.",
      source: ''
    },
    {
      id: 'dc2-4si1-2024-03-07',
      kind: 'examen',
      examType: 'devoir-controle',
      title: 'Devoir de contrôle n°2 — 4SI1',
      date: '2024-03-07',
      classes: '4SI1',
      school: 'Lycée Sidi Thabet',
      teacher: 'Aymen Jamazi',
      duration: '1h30',
      pages: 1,
      module: 'algo-theorique',
      chapters: ['arithmetique', 'fichiers'],
      file: 'pdf/examens/2024-03-07_dc2_4si1_jamazi.pdf',
      correction: null,
      incomplete: false,
      notes: 'Vérifier si le sujet complet tient sur cette seule page.',
      source: ''
    },
    {
      id: 'bac-controle-2022',
      kind: 'examen',
      examType: 'bac',
      title: 'Bac session de contrôle 2022 (pages 1 à 3 sur 4)',
      date: '2022',
      classes: "Sciences de l'informatique",
      school: 'République Tunisienne',
      teacher: '',
      duration: '3h (coef 2)',
      pages: 3,
      module: 'algo-theorique',
      chapters: ['recursivite', 'fichiers', 'matrices', 'suites'],
      file: 'pdf/examens/bac-session-controle-2022_incomplet-pages-1-a-3-sur-4.pdf',
      correction: null,
      incomplete: true,
      notes: 'La page 4 (fin Exercice 3 + Exercice 4) manque.',
      source: ''
    },
    {
      id: 'ds3-ben-arous-2025-05-06',
      kind: 'examen',
      examType: 'devoir-synthese',
      title: 'Devoir de synthèse n°3 — Ben Arous',
      date: '2025-05-06',
      classes: "4ème Sciences de l'informatique",
      school: "Commissariat régional de l'éducation de Ben Arous",
      teacher: '',
      duration: '3h',
      pages: 3,
      module: 'algo-theorique',
      chapters: ['fichiers', 'matrices', 'suites', 'bases'],
      file: 'pdf/examens/2025-05-06_ds3_ben-arous.pdf',
      correction: null,
      incomplete: true,
      notes: 'Filigrane mesdevoirs.tn conservé. Une page (Exercice 3) manque peut-être entre les pages 2 et 3.',
      source: 'mesdevoirs.tn'
    },
    {
      id: 'a-identifier-p38',
      kind: 'examen',
      examType: 'inconnu',
      title: 'Examen incomplet à identifier (exercices 2 et 3)',
      date: 'inconnue',
      classes: '',
      school: '',
      teacher: '',
      duration: '',
      pages: 1,
      module: 'algo-theorique',
      chapters: ['recursivite', 'approximation'],
      file: 'pdf/examens/a-identifier_exercices-2-et-3.pdf',
      correction: null,
      incomplete: true,
      notes: "Une seule page (Ex 2 récursivité, Ex 3 approximation) avec filigrane mesdevoirs.tn. L'en-tête et l'exercice 1 manquent.",
      source: 'mesdevoirs.tn'
    },

    // ── SÉRIES ─────────────────────────────────────────────────────────────────
    {
      id: 'serie-12-premier-palindrome',
      kind: 'serie',
      title: 'Série n°12 — Nombre premier palindrome (Qt)',
      module: 'algo-pratique',
      chapters: ['arithmetique'],
      teacher: 'Mounir Saadani',
      file: 'pdf/series/pratique/serie-12-premier-palindrome.pdf',
      correction: null,
      notes: 'Filigrane conservé.',
      source: 'Mounir Saadani'
    },
    {
      id: 'serie-13-nombre-riche',
      kind: 'serie',
      title: 'Série n°13 — Nombre riche (Qt)',
      module: 'algo-pratique',
      chapters: ['arithmetique', 'fichiers'],
      teacher: 'Mounir Saadani',
      file: 'pdf/series/pratique/serie-13-nombre-riche.pdf',
      correction: null,
      notes: 'Filigrane conservé.',
      source: 'Mounir Saadani'
    },
    {
      id: 'serie-16-conversion-base-b',
      kind: 'serie',
      title: 'Série n°16 — Conversion décimal vers base B (Qt)',
      module: 'algo-pratique',
      chapters: ['bases', 'fichiers'],
      teacher: 'Mounir Saadani',
      file: 'pdf/series/pratique/serie-16-conversion-base-b.pdf',
      correction: null,
      notes: 'Filigrane conservé.',
      source: 'Mounir Saadani'
    },
    {
      id: 'tp3-matrices-tri',
      kind: 'serie',
      title: 'TP3 — Applications sur les matrices + tri',
      module: 'algo-theorique',
      chapters: ['matrices', 'tableaux'],
      teacher: 'Olfa Hichri',
      file: 'pdf/series/matrices/tp3-matrices-et-tri.pdf',
      correction: null,
      notes: '',
      source: 'Mme Olfa Hichri'
    },

    // ── EXTRAITS ───────────────────────────────────────────────────────────────
    {
      id: 'x-inconnue-pr2024',
      kind: 'extrait',
      title: 'Fonction Inconnue (Pr 2024)',
      module: 'algo-theorique',
      chapters: ['recursivite'],
      teacher: 'Aymen Jamazi',
      file: 'pdf/extraits/recursivite/inconnue-pr2024.pdf',
      correction: null,
      notes: '',
      source: 'Révision BAC, Prof. Aymen Jamazi — exercice 1'
    },
    {
      id: 'x-trait-qcm',
      kind: 'extrait',
      title: 'Exécution manuelle : fonction Trait (QCM)',
      module: 'algo-theorique',
      chapters: ['recursivite', 'bases'],
      teacher: 'Aymen Jamazi',
      file: 'pdf/extraits/recursivite/trait-qcm-execution-manuelle.pdf',
      correction: null,
      notes: '',
      source: 'Révision Bac blanc, Prof. Aymen Jamazi'
    },
    {
      id: 'x-nom-triangulaire-pr2024',
      kind: 'extrait',
      title: 'Nom triangulaire (Pr 2024)',
      module: 'algo-theorique',
      chapters: ['fichiers'],
      teacher: 'Aymen Jamazi',
      file: 'pdf/extraits/fichiers/nom-triangulaire-pr2024.pdf',
      correction: null,
      notes: '',
      source: 'Révision BAC, Prof. Aymen Jamazi — exercice 2 (2 pages recollées)'
    },
    {
      id: 'x-probleme-bac2017',
      kind: 'extrait',
      title: 'Problème Bac 2017 : moteur de recherche local',
      module: 'algo-theorique',
      chapters: ['fichiers', 'tableaux', 'matrices'],
      teacher: 'Aymen Jamazi',
      file: 'pdf/extraits/fichiers/probleme-bac2017-moteur-de-recherche.pdf',
      correction: null,
      notes: '',
      source: "Annale écrite 'Bac 2017 Pr' sur la feuille"
    },
    {
      id: 'x-quadruplets-pr2021',
      kind: 'extrait',
      title: 'Quadruplets de nombres premiers jumeaux (Pr 2021)',
      module: 'algo-theorique',
      chapters: ['arithmetique', 'approximation', 'tableaux'],
      teacher: 'Aymen Jamazi',
      file: 'pdf/extraits/arithmetique/quadruplets-premiers-jumeaux-pr2021.pdf',
      correction: null,
      notes: '',
      source: 'Révision BAC, Prof. Aymen Jamazi — exercice 3'
    },
    {
      id: 'x-optimisation-1-2',
      kind: 'extrait',
      title: "Problèmes d'optimisation 1 et 2",
      module: 'algo-theorique',
      chapters: ['approximation'],
      teacher: 'Aymen Jamazi',
      file: 'pdf/extraits/approximation/optimisation-problemes-1-et-2.pdf',
      correction: null,
      notes: '',
      source: 'Révision Bac blanc, Prof. Aymen Jamazi'
    },
    {
      id: 'x-optimisation-3-pr2015',
      kind: 'extrait',
      title: "Problème 3 (Pr 2015) : stade et piste d'athlétisme",
      module: 'algo-theorique',
      chapters: ['approximation'],
      teacher: 'Aymen Jamazi',
      file: 'pdf/extraits/approximation/optimisation-probleme-3-pr2015.pdf',
      correction: null,
      notes: '',
      source: 'Révision Bac blanc, Prof. Aymen Jamazi'
    }
  ];

  // ── API publique ─────────────────────────────────────────────────────────────
  function getAllDocuments() { return _docs; }

  function getExamens() {
    return _docs.filter(function(d){ return d.kind === 'examen'; })
      .sort(function(a, b){
        // newest first (date "inconnue" goes to the bottom)
        var da = a.date === 'inconnue' ? '0000' : a.date;
        var db = b.date === 'inconnue' ? '0000' : b.date;
        return db.localeCompare(da);
      });
  }

  function getSeries() {
    return _docs.filter(function(d){ return d.kind === 'serie'; });
  }

  function getExtraits() {
    return _docs.filter(function(d){ return d.kind === 'extrait'; });
  }

  function getByChapter(slug) {
    return _docs.filter(function(d){
      return Array.isArray(d.chapters) && d.chapters.indexOf(slug) !== -1;
    });
  }

  function getByModule(module) {
    return _docs.filter(function(d){ return d.module === module; });
  }

  function getPratiqueSerials() {
    return _docs.filter(function(d){
      return d.kind === 'serie' && d.module === 'algo-pratique';
    });
  }

  function getDocumentById(id) {
    return _docs.find(function(d){ return d.id === id; }) || null;
  }

  function getCounts() {
    return {
      total:    _docs.length,
      examens:  _docs.filter(function(d){ return d.kind === 'examen'; }).length,
      series:   _docs.filter(function(d){ return d.kind === 'serie'; }).length,
      extraits: _docs.filter(function(d){ return d.kind === 'extrait'; }).length
    };
  }

  /** Années disponibles pour le filtre (sans "inconnue") */
  function getYears() {
    var years = {};
    _docs.forEach(function(d){
      if (d.date && d.date !== 'inconnue') {
        var y = d.date.substring(0, 4);
        years[y] = true;
      }
    });
    return Object.keys(years).sort(function(a,b){ return b - a; });
  }

  /** Établissements disponibles pour le filtre */
  function getSchools() {
    var schools = {};
    _docs.forEach(function(d){
      if (d.school) schools[d.school] = true;
    });
    return Object.keys(schools).sort();
  }

    // ── DEVOIRS INTERACTIFS (DC1, DC2, DS AVEC ÉNONCÉS, TDO & PYTHON) ───
const DEVOIR_TYPES = {
    dc1: {
      id: 'dc1',
      label: 'Devoir de Contrôle N°1',
      shortLabel: 'DC N°1',
      icon: '📝',
      trimestre: '1er Trimestre',
      color: '#38bdf8',
      bgTint: 'rgba(56, 189, 248, 0.12)',
      border: '#0284c7',
      description: 'Évaluation sommative du 1er trimestre : Fichiers (texte & binaires) et Récursivité.'
    },
    dc2: {
      id: 'dc2',
      label: 'Devoir de Contrôle N°2',
      shortLabel: 'DC N°2',
      icon: '📝',
      trimestre: '2ème Trimestre',
      color: '#c084fc',
      bgTint: 'rgba(192, 132, 252, 0.12)',
      border: '#9333ea',
      description: 'Évaluation sommative du 2ème trimestre : Bases de numération, Arithmétique, Approximation et Tableaux.'
    },
    ds: {
      id: 'ds',
      label: 'Devoir de Synthèse',
      shortLabel: 'Devoir de Synthèse',
      icon: '🏆',
      trimestre: 'Synthèse / Bac Blanc',
      color: '#f59e0b',
      bgTint: 'rgba(245, 158, 11, 0.12)',
      border: '#d97706',
      description: 'Épreuves de synthèse complètes (DS1, DS2, DS3 / Bac Blanc) couvrant plusieurs chapitres conformément au barème officiel national.'
    }
  };

const ALGO_DEVOIRS = [
    // -------------------------------------------------------------
    // 1. DEVOIRS DE CONTRÔLE N°1 (DC1 - 1er Trimestre)
    // -------------------------------------------------------------
    {
      id: 'devoir-dc1-pilote-2025',
      type: 'dc1',
      typeLabel: 'Devoir de Contrôle N°1',
      title: 'Devoir de Contrôle N°1 — Lycée Pilote (Fichiers & Récursivité)',
      lycee: 'Lycée Pilote de Tunis',
      annee: '2024 / 2025',
      trimestre: '1er Trimestre',
      duree: '2 heures',
      coef: 3,
      chapters: ['fichiers', 'recursivite'],
      summary: 'Épreuve complète en deux parties : analyse récursive avec trace d\'exécution (pile d\'appels) et gestion d\'un fichier binaire d\'élèves avec pickle.',
      enonce: [
        {
          titre: 'Exercice 1 : Récursivité & Trace d\'exécution (6 points)',
          details: 'On considère la fonction récursive suivante :\n' +
            'Fonction mystere(a : Entier, b : Entier) : Entier\n' +
            'Début\n' +
            '  Si b = 0 Alors\n' +
            '    mystere <-- 0\n' +
            '  Sinon Si b Mod 2 = 0 Alors\n' +
            '    mystere <-- mystere(a * 2, b Div 2)\n' +
            '  Sinon\n' +
            '    mystere <-- a + mystere(a * 2, b Div 2)\n' +
            '  Fin Si\n' +
            'Fin\n\n' +
            '1) Donner la trace d\'exécution (arbre des appels) pour mystere(7, 5).\n' +
            '2) Déduire le rôle de cette fonction (Multiplication russe à la Russe).\n' +
            '3) Donner le T.D.O local et la traduction Python correspondante.'
        },
        {
          titre: 'Exercice 2 : Gestion de Fichiers Binaires d\'Enregistrements (14 points)',
          details: 'Une école souhaite archiver les candidats au Bac dans un fichier binaire "candidats.dat".\n' +
            'Chaque candidat est défini par : cin (chaine de 8 chiffres), nom_prenom (chaine), moy_bac (réel entre 0 et 20), mention (chaine calculée).\n\n' +
            'Travail demandé :\n' +
            '1) Définir la structure Candidat (T.D.N.T).\n' +
            '2) Rédiger la procédure remplir(f_cand, n) qui enregistre n candidats en vérifiant l\'unicité du CIN.\n' +
            '3) Rédiger la procédure transferer(f_cand, f_admis) qui extrait dans un second fichier binaire "admis.dat" les candidats ayant une moyenne >= 10.0 en attribuant la mention exacte (Passable, Assez Bien, Bien, Très Bien).\n' +
            '4) Écrire le module d\'affichage complet et le programme principal.'
        }
      ],
      corrige: {
        resume: 'Corrigé type officiel conforme aux normes d\'évaluation de l\'Inspection Générale de Tunisie.',
        tdo: [
          { objet: 'Candidat', type: 'Enregistrement (cin: Chaine, nom_prenom: Chaine, moy_bac: Reel, mention: Chaine)' },
          { objet: 'f_cand, f_admis', type: 'Fichier de Candidat' },
          { objet: 'n', type: 'Entier (nombre de candidats, 2 <= n <= 50)' }
        ],
        codePython: 
`# Corrigé DC1 - Algorithme & Python (Lycée Pilote)
import pickle

# --- Exercice 1 : Multiplication Égyptienne / Russe Récursive ---
def mystere(a: int, b: int) -> int:
    if b == 0:
        return 0
    elif b % 2 == 0:
        return mystere(a * 2, b // 2)
    else:
        return a + mystere(a * 2, b // 2)

# Trace pour mystere(7, 5) :
# mystere(7, 5) = 7 + mystere(14, 2)
# mystere(14, 2) = mystere(28, 1)
# mystere(28, 1) = 28 + mystere(56, 0)
# mystere(56, 0) = 0
# Résultat = 7 + 28 + 0 = 35 (soit 7 * 5)

# --- Exercice 2 : Fichiers d'Enregistrements Binaires ---
def saisir_candidat():
    while True:
        cin = input("CIN (8 chiffres) : ")
        if len(cin) == 8 and cin.isdigit():
            break
    nom = input("Nom & Prénom : ").strip()
    while True:
        try:
            moy = float(input("Moyenne Bac (0..20) : "))
            if 0 <= moy <= 20:
                break
        except ValueError:
            pass
    return {"cin": cin, "nom": nom, "moy": moy, "mention": ""}

def determiner_mention(moy: float) -> str:
    if moy >= 16: return "Très Bien"
    elif moy >= 14: return "Bien"
    elif moy >= 12: return "Assez Bien"
    elif moy >= 10: return "Passable"
    return "Refusé"

def creer_fichier_candidats(nom_fic: str, n: int):
    with open(nom_fic, "wb") as f:
        for _ in range(n):
            cand = saisir_candidat()
            cand["mention"] = determiner_mention(cand["moy"])
            pickle.dump(cand, f)

def filtrer_admis(fic_source: str, fic_dest: str):
    nb_admis = 0
    with open(fic_source, "rb") as fs, open(fic_dest, "wb") as fd:
        while True:
            try:
                c = pickle.load(fs)
                if c["moy"] >= 10.0:
                    pickle.dump(c, fd)
                    nb_admis += 1
            except EOFError:
                break
    return nb_admis`
      }
    },
    {
      id: 'devoir-dc1-bourguiba-2024',
      type: 'dc1',
      typeLabel: 'Devoir de Contrôle N°1',
      title: 'Devoir de Contrôle N°1 — Lycée Bourguiba (Récursivité Avancée & Fichiers Texte)',
      lycee: 'Lycée Pilote Bourguiba',
      annee: '2023 / 2024',
      trimestre: '1er Trimestre',
      duree: '2 heures',
      coef: 3,
      chapters: ['fichiers', 'recursivite'],
      summary: 'Étude d\'un algorithme de recherche dichotomique récursive, inversion de chaîne et analyse statistique d\'un fichier texte de notes.',
      enonce: [
        {
          titre: 'Exercice 1 : Recherche Dichotomique Récursive (7 points)',
          details: 'Écrire en pseudo-code puis en Python une fonction récursive DichoR(T, bas, haut, val) qui recherche val dans un tableau trié T entre les indices bas et haut. Renvoyer l\'indice de l\'élément ou -1 si non trouvé.'
        },
        {
          titre: 'Exercice 2 : Fichier Texte "resultats.txt" (13 points)',
          details: 'On dispose d\'un fichier texte contenant sur chaque ligne le nom d\'un élève et sa note séparés par un tiret (ex: "Sami Ben Ali-14.50").\nÉcrire un programme qui calcule la moyenne de la classe, identifie la note maximale et écrit les majors dans un fichier "majors.txt".'
        }
      ],
      corrige: {
        resume: 'Corrigé complet avec dichotomie récursive rigoureuse et lecture ligne par ligne avec strip() et split("-").',
        tdo: [
          { objet: 'T', type: 'Tableau d\'Entiers trié' },
          { objet: 'bas, haut, val', type: 'Entiers' },
          { objet: 'DichoR', type: 'Fonction Entier' }
        ],
        codePython:
`def dicho_recursive(t, bas, haut, val):
    if bas > haut:
        return -1
    milieu = (bas + haut) // 2
    if t[milieu] == val:
        return milieu
    elif t[milieu] > val:
        return dicho_recursive(t, bas, milieu - 1, val)
    else:
        return dicho_recursive(t, milieu + 1, haut, val)`
      }
    },

    // -------------------------------------------------------------
    // 2. DEVOIRS DE CONTRÔLE N°2 (DC2 - 2ème Trimestre)
    // -------------------------------------------------------------
    {
      id: 'devoir-dc2-pilote-2025',
      type: 'dc2',
      typeLabel: 'Devoir de Contrôle N°2',
      title: 'Devoir de Contrôle N°2 — Lycée Pilote (Arithmétique & Tableaux)',
      lycee: 'Lycée Pilote de Sousse',
      annee: '2024 / 2025',
      trimestre: '2ème Trimestre',
      duree: '2 heures',
      coef: 3,
      chapters: ['bases', 'arithmetique', 'tableaux'],
      summary: 'Conversion de nombres en bases quelconques (2 à 16), détection de nombres narcissiques/premiers et algorithmes de tri de tableaux (Tri à bulles et Tri Sélection).',
      enonce: [
        {
          titre: 'Exercice 1 : Arithmétique & Nombres Admirables (8 points)',
          details: 'Un entier N est dit "admirable" s\'il est égal à la somme de ses diviseurs stricts à l\'exception d\'un diviseur d dont le double est retranché.\n1) Écrire une fonction SommeDiviseurs(n).\n2) Écrire une fonction EstAdmirable(n).\n3) Remplir un tableau avec tous les nombres admirables compris entre 12 et 500.'
        },
        {
          titre: 'Exercice 2 : Tableaux & Algorithmes de Tri (12 points)',
          details: 'Soit un tableau T de N chaînes représentant des codes produits.\n1) Procédure Saisir(T, N) avec vérification du format (2 lettres majuscules suivies de 3 chiffres).\n2) Procédure TriSelection(T, N) triant le tableau par ordre croissant.\n3) Fonction RechercheDicho(T, N, code) vérifiant la présence du produit.'
        }
      ],
      corrige: {
        resume: 'Corrigé complet avec gestion mathématique exacte des diviseurs stricts et tri sélection conforme Bac.',
        tdo: [
          { objet: 'N', type: 'Entier' },
          { objet: 'T', type: 'Tableau de N Chaines' },
          { objet: 'EstAdmirable', type: 'Fonction Booléen' }
        ],
        codePython:
`def diviseurs_stricts(n):
    return [i for i in range(1, n) if n % i == 0]

def est_admirable(n):
    divs = diviseurs_stricts(n)
    s = sum(divs)
    for d in divs:
        if s - 2 * d == n:
            return True
    return False

def tri_selection(t):
    n = len(t)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if t[j] < t[min_idx]:
                min_idx = j
        if min_idx != i:
            t[i], t[min_idx] = t[min_idx], t[i]`
      }
    },
    {
      id: 'devoir-dc2-menzah-2024',
      type: 'dc2',
      typeLabel: 'Devoir de Contrôle N°2',
      title: 'Devoir de Contrôle N°2 — Lycée El Menzah (Bases de Numération & Matrices)',
      lycee: 'Lycée Menzah 6',
      annee: '2023 / 2024',
      trimestre: '2ème Trimestre',
      duree: '2 heures',
      coef: 3,
      chapters: ['bases', 'matrices'],
      summary: 'Conversion de nombres hexadécimaux et binaires, matrice carrée et détection des points-selle et éléments de la diagonale principale.',
      enonce: [
        {
          titre: 'Exercice 1 : Conversion Universelle de Base (6 points)',
          details: 'Écrire un module qui convertit un nombre donné sous forme de chaîne en base B1 (2 <= B1 <= 16) vers sa représentation en base B2 (2 <= B2 <= 16).'
        },
        {
          titre: 'Exercice 2 : Analyse de Matrice Carrée (14 points)',
          details: 'Soit une matrice M d\'ordre N (3 <= N <= 10).\n1) Remplissage par des entiers distincts.\n2) Recherche des points-selle (minimum sur sa ligne et maximum sur sa colonne).\n3) Inversion de la diagonale principale avec la diagonale secondaire.'
        }
      ],
      corrige: {
        resume: 'Corrigé complet avec fonction décimale pivot et parcours optimal des matrices 2D.',
        tdo: [
          { objet: 'M', type: 'Matrice de N x N Entiers' },
          { objet: 'B1, B2', type: 'Entiers' }
        ],
        codePython:
`def base_to_dec(ch, base):
    digits = "0123456789ABCDEF"
    val = 0
    for c in ch.upper():
        val = val * base + digits.index(c)
    return val

def dec_to_base(n, base):
    if n == 0: return "0"
    digits = "0123456789ABCDEF"
    res = ""
    while n > 0:
        res = digits[n % base] + res
        n //= base
    return res

def trouver_points_selle(m):
    l = len(m)
    c = len(m[0])
    points = []
    for i in range(l):
        min_ligne = min(m[i])
        for j in range(c):
            if m[i][j] == min_ligne:
                col_vals = [m[k][j] for k in range(l)]
                if m[i][j] == max(col_vals):
                    points.append((i, j, m[i][j]))
    return points`
      }
    },

    // -------------------------------------------------------------
    // 3. DEVOIRS DE SYNTHÈSE (DS - Synthèses 1, 2, 3 / Bac Blanc)
    // -------------------------------------------------------------
    {
      id: 'devoir-ds1-national-2025',
      type: 'ds',
      typeLabel: 'Devoir de Synthèse',
      title: 'Devoir de Synthèse N°1 — Épreuve Complète du 1er Trimestre',
      lycee: 'Direction Régionale de Tunis',
      annee: '2024 / 2025',
      trimestre: 'Synthèse Trimestre 1',
      duree: '3 heures',
      coef: 3,
      chapters: ['fichiers', 'recursivite', 'bases'],
      summary: 'Grand sujet de synthèse du premier trimestre : compression récursive, encodage binaire et base de données d\'un hôpital sur fichier binaire.',
      enonce: [
        {
          titre: 'Partie 1 : Algorithmes Théoriques & Récursivité (8 points)',
          details: 'Analyse d\'une suite récursive croisée U(n) et V(n) modélisant une population biologique. Étude de complexité et pile d\'appels récursifs.'
        },
        {
          titre: 'Partie 2 : Problème Informatique Global (12 points)',
          details: 'Traitement automatisé du fichier des consultations médicales. Calcul des statistiques, archivage par spécialité et génération d\'un rapport texte.'
        }
      ],
      corrige: {
        resume: 'Corrigé officiel détaillé avec T.D.O global et modularité totale conforme aux critères d\'évaluation nationaux.',
        tdo: [
          { objet: 'f_consult', type: 'Fichier de Consultation' },
          { objet: 'stats', type: 'Tableau de Réels' }
        ],
        codePython:
`# Synthèse 1 : Fonctions croisées récursives
def suite_u(n):
    if n == 0: return 2
    return 3 * suite_u(n - 1) + 2 * suite_v(n - 1)

def suite_v(n):
    if n == 0: return 1
    return suite_u(n - 1) + suite_v(n - 1)`
      }
    },
    {
      id: 'devoir-ds2-national-2025',
      type: 'ds',
      typeLabel: 'Devoir de Synthèse',
      title: 'Devoir de Synthèse N°2 — Épreuve Complète du 2ème Trimestre',
      lycee: 'Lycée Pilote de Sfax',
      annee: '2024 / 2025',
      trimestre: 'Synthèse Trimestre 2',
      duree: '3 heures',
      coef: 3,
      chapters: ['bases', 'arithmetique', 'approximation', 'tableaux', 'matrices'],
      summary: 'Grand problème du deuxième trimestre : méthode des rectangles et trapèzes pour estimer une surface, chiffrement matriciel et tris multiples.',
      enonce: [
        {
          titre: 'Problème : Cryptographie Matricielle & Calcul d\'Aire (20 points)',
          details: '1) Approximation d\'une intégrale f(x) = 1/(1+x^2) par la méthode des trapèzes pour estimer Pi/4.\n2) Chiffrement d\'un texte par multiplication matricielle (Hill Cipher simplifié modulo 26).\n3) Déchiffrement et vérification de conformité.'
        }
      ],
      corrige: {
        resume: 'Corrigé complet avec implémentation de la méthode des trapèzes et multiplication matricielle modulaire.',
        tdo: [
          { objet: 'a, b', type: 'Reels (bornes d\'integration)' },
          { objet: 'n', type: 'Entier (nombre de sous-intervalles)' },
          { objet: 'Cle', type: 'Matrice 2x2 d\'Entiers' }
        ],
        codePython:
`def f(x):
    return 1.0 / (1.0 + x * x)

def trapezes(a, b, n):
    h = (b - a) / n
    somme = (f(a) + f(b)) / 2.0
    for i in range(1, n):
        somme += f(a + i * h)
    return h * somme

# Estimation de Pi (car intégrale de 0 à 1 de 4/(1+x^2) = Pi)
def estimer_pi(n=1000):
    return 4.0 * trapezes(0, 1, n)`
      }
    },
    {
      id: 'devoir-ds3-bac-blanc-2025',
      type: 'ds',
      typeLabel: 'Devoir de Synthèse',
      title: 'Devoir de Synthèse N°3 (Bac Blanc) — Épreuve Complète Nationale',
      lycee: 'Inspection Générale de la Pédagogie (Sujet Type National)',
      annee: '2024 / 2025',
      trimestre: 'Épreuve Type Baccalauréat',
      duree: '3 heures',
      coef: 3,
      chapters: ['fichiers', 'recursivite', 'arithmetique', 'tableaux', 'matrices', 'suites'],
      summary: 'Épreuve type du Baccalauréat National d\'Informatique : analyse rigoureuse, T.D.O, T.D.N.T, algorithme principal et 5 modules imbriqués avec matrices et suites.',
      enonce: [
        {
          titre: 'Problème National : Système d\'Analyse & Traitement d\'Images Binaires (20 points)',
          details: 'Une image binaire en niveaux de gris est modélisée par une matrice M de dimensions L x C contenant des entiers de 0 à 255.\n' +
            'Le sujet demande de :\n' +
            '1) Charger l\'image depuis un fichier binaire compressé avec pickle.\n' +
            '2) Appliquer un filtre de lissage (moyenne des 8 voisins de chaque pixel intérieur).\n' +
            '3) Détecter la zone de motif géométrique en forme de sablier.\n' +
            '4) Calculer la suite des variances par ligne et sauvegarder les résultats dans un fichier texte "rapport.txt".'
        }
      ],
      corrige: {
        resume: 'Corrigé officiel type Baccalauréat avec grille d\'évaluation complète par critère (qualité algorithmique, TDO, TDNT, Python).',
        tdo: [
          { objet: 'M, M_filtree', type: 'Matrice de L x C Entiers' },
          { objet: 'L, C', type: 'Entiers (2 <= L, C <= 30)' },
          { objet: 'f_img', type: 'Fichier de Pixels' }
        ],
        codePython:
`# Bac Blanc : Filtrage d'une matrice 2D par moyenne des 8 voisins
def filtrer_matrice(m, l, c):
    res = [[m[i][j] for j in range(c)] for i in range(l)]
    for i in range(1, l - 1):
        for j in range(1, c - 1):
            voisins = [
                m[i-1][j-1], m[i-1][j], m[i-1][j+1],
                m[i][j-1],               m[i][j+1],
                m[i+1][j-1], m[i+1][j], m[i+1][j+1]
            ]
            res[i][j] = sum(voisins) // 8
    return res`
      }
    }
  ];

  return {
    // ── Devoirs interactifs (épreuves avec TDO & corrigés Python) ──────────────
    devoirTypes: DEVOIR_TYPES,
    devoirs: ALGO_DEVOIRS,
    getAllDevoirs: function() { return ALGO_DEVOIRS; },
    getDevoirsByType: function(type) {
      if (!type || type === 'all') return ALGO_DEVOIRS;
      var clean = String(type).trim().toLowerCase();
      return ALGO_DEVOIRS.filter(function(d){ return d.type.toLowerCase() === clean; });
    },
    getDevoirById: function(id) {
      if (!id) return null;
      return ALGO_DEVOIRS.find(function(d){ return d.id === id; }) || null;
    },
    getDevoirsByChapter: function(chapterSlug) {
      if (!chapterSlug) return [];
      var clean = String(chapterSlug).trim().toLowerCase();
      return ALGO_DEVOIRS.filter(function(d){ return d.chapters && d.chapters.indexOf(clean) !== -1; });
    },
    getDevoirsCounts: function() {
      return {
        all: ALGO_DEVOIRS.length,
        dc1: ALGO_DEVOIRS.filter(function(d){ return d.type === 'dc1'; }).length,
        dc2: ALGO_DEVOIRS.filter(function(d){ return d.type === 'dc2'; }).length,
        ds: ALGO_DEVOIRS.filter(function(d){ return d.type === 'ds'; }).length
      };
    },

    getAllDocuments:    getAllDocuments,
    getExamens:        getExamens,
    getSeries:         getSeries,
    getExtraits:       getExtraits,
    getByChapter:      getByChapter,
    getByModule:       getByModule,
    getPratiqueSerials: getPratiqueSerials,
    getDocumentById:   getDocumentById,
    getCounts:         getCounts,
    getYears:          getYears,
    getSchools:        getSchools
  };
})();
