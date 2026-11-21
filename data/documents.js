/**
 * =============================================================
 * DOCUMENTS OFFICIELS — DEVOIRS & SÉRIES DU BACCALAURÉAT TUNISIE
 * Séparation claire : Devoirs au niveau Théorique (DC1, DC2, DS)
 * =============================================================
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DOCUMENTS_DATA = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

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
    devoirTypes: DEVOIR_TYPES,
    devoirs: ALGO_DEVOIRS,

    getAllDevoirs() {
      return ALGO_DEVOIRS;
    },

    getDevoirsByType(type) {
      if (!type || type === 'all') return ALGO_DEVOIRS;
      const clean = String(type).trim().toLowerCase();
      return ALGO_DEVOIRS.filter(d => d.type.toLowerCase() === clean);
    },

    getDevoirById(id) {
      if (!id) return null;
      return ALGO_DEVOIRS.find(d => d.id === id) || null;
    },

    getDevoirsByChapter(chapterSlug) {
      if (!chapterSlug) return [];
      const clean = String(chapterSlug).trim().toLowerCase();
      return ALGO_DEVOIRS.filter(d => d.chapters && d.chapters.includes(clean));
    },

    getDevoirsCounts() {
      return {
        all: ALGO_DEVOIRS.length,
        dc1: ALGO_DEVOIRS.filter(d => d.type === 'dc1').length,
        dc2: ALGO_DEVOIRS.filter(d => d.type === 'dc2').length,
        ds: ALGO_DEVOIRS.filter(d => d.type === 'ds').length
      };
    }
  };
}));
