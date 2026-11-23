/**
 * CATALOGUE DES ERREURS CLASSIQUES DU BACCALAURÉAT INFORMATIQUE
 * STI de A à Z — Conforme au programme officiel tunisien (Section Sciences de l'Informatique)
 *
 * Chaque erreur recense :
 * - id : identifiant unique
 * - chapter : slug du chapitre associé
 * - title : titre synthétique du piège
 * - category : catégorie thématique
 * - buggyCode : extrait de pseudo-code erroné
 * - counterExample : cas d'école ou contre-exemple montrant l'échec
 * - fixCode : code corrigé et optimisé
 * - explanation : explication détaillée du piège
 * - questionIds : questions de quiz associées pour l'entraînement
 */

var ERRORS_DATA = [
  // ── 1. TABLEAUX : Échange sans variable temporaire ──
  {
    id: 'err-tab-swap',
    chapter: 'tableaux',
    category: 'Tableaux & Tris',
    title: "Permutation de deux cases sans variable temporaire (Écrasement)",
    buggyCode: `// ERREUR CLASSIQUE :
T[i] <-- T[j]
T[j] <-- T[i]  // T[i] ayant déjà été écrasé, sa valeur originale est perdue !`,
    counterExample: "Si T[1] = 5 et T[2] = 9 : après T[1] <-- T[2], T[1] vaut 9. Puis T[2] <-- T[1] met 9 dans T[2]. Résultat : T = [9, 9] au lieu de [9, 5] !",
    fixCode: `// CORRECTION OFFICIELLE :
aux <-- T[i]
T[i] <-- T[j]
T[j] <-- aux  // Nécessite de déclarer 'aux' dans le T.D.O local !`,
    explanation: "Une affectation écrase immédiatement la valeur en mémoire. Pour échanger deux cases, il est impératif d'utiliser une variable auxiliaire (temporaire) de même type que les éléments du tableau.",
    questionIds: ['quiz-tab-08']
  },

  // ── 2. TABLEAUX : Débordement d'indices ──
  {
    id: 'err-tab-index',
    chapter: 'tableaux',
    category: 'Indices & Bornes',
    title: "Indice 0 ou dépassement de taille N (Débordement)",
    buggyCode: `// ERREUR CLASSIQUE (Confusion avec Python/C) :
Pour i de 0 à N - 1 Faire
  Ecrire(T[i])  // T[0] n'existe pas en pseudo-code tunisien !
Fin Pour`,
    counterExample: "Dans un tableau déclaré de 1 à N, accéder à T[0] ou T[N+1] provoque une erreur de débordement d'indice (IndexError) et une note nulle sur l'instruction au Bac.",
    fixCode: `// CORRECTION OFFICIELLE :
Pour i de 1 à N Faire
  Ecrire(T[i])
Fin Pour`,
    explanation: "En pseudo-code tunisien officiel, les tableaux et les chaînes sont indexés de 1 à N (ou Longueur(ch)), JAMAIS de 0 à N - 1. Pensez-y lors de la traduction depuis Python.",
    questionIds: ['quiz-tab-01']
  },

  // ── 3. FICHIERS : Ouvrir vs Réécrire ──
  {
    id: 'err-fich-open',
    chapter: 'fichiers',
    category: 'Gestion des Fichiers',
    title: "Confondre Ouvrir(F) et Réécrire(F) pour créer un fichier",
    buggyCode: `// ERREUR CLASSIQUE :
Associer(F, "resultats.txt")
Ouvrir(F)  // Échoue si le fichier n'existe pas encore sur le disque !
Ecrire_nl(F, "Nouveau contenu")`,
    counterExample: "Si 'resultats.txt' n'existe pas encore, 'Ouvrir(F)' génère une erreur d'entrée/sortie (FileNotFound). De plus, 'Ouvrir(F)' n'efface pas le contenu antérieur.",
    fixCode: `// CORRECTION OFFICIELLE :
Associer(F, "resultats.txt")
Reecrire(F)  // Crée un fichier vierge ou écrase l'ancien contenu
Ecrire_nl(F, "Nouveau contenu")
Fermer(F)`,
    explanation: "Ouvrir(F) ouvre un fichier préexistant en mode lecture seule ou lecture/écriture séquentielle. Pour initialiser un nouveau fichier vierge ou écraser l'ancien, il faut impérativement utiliser Réécrire(F).",
    questionIds: ['quiz-fich-01']
  },

  // ── 4. FICHIERS : Oubli de fermeture Fermer(F) ──
  {
    id: 'err-fich-close',
    chapter: 'fichiers',
    category: 'Gestion des Fichiers',
    title: "Oubli systématique de l'instruction Fermer(F)",
    buggyCode: `// ERREUR CLASSIQUE :
Associer(F, "notes.dat")
Reecrire(F)
Pour i de 1 à N Faire
  Ecrire(F, T[i])
Fin Pour
// Fin de la procédure sans Fermer(F) !`,
    counterExample: "Sur ordinateur, les données écrites restent bloquées dans la mémoire tampon (buffer) et le fichier sur disque reste vide ou corrompu (taille 0 octet).",
    fixCode: `// CORRECTION OFFICIELLE :
Associer(F, "notes.dat")
Reecrire(F)
Pour i de 1 à N Faire
  Ecrire(F, T[i])
Fin Pour
Fermer(F)  // Valide l'écriture et libère le fichier`,
    explanation: "Toute ouverture par Ouvrir(F) ou Réécrire(F) doit être clôturée par Fermer(F). C'est l'un des oublis les plus fréquemment pénalisés lors des corrections du Bac.",
    questionIds: ['quiz-fich-02']
  },

  // ── 5. FICHIERS : Condition d'arrêt Fin_Fichier ──
  {
    id: 'err-fich-eof',
    chapter: 'fichiers',
    category: 'Gestion des Fichiers',
    title: "Inversion de la boucle de parcours d'un fichier",
    buggyCode: `// ERREUR CLASSIQUE :
TantQue (Fin_Fichier(F)) Faire  // Faux ! La boucle ne démarre même pas !
  Lire(F, e)
  Traiter(e)
Fin TantQue`,
    counterExample: "Au début du fichier, Fin_Fichier(F) vaut FAUX. Si la condition est TantQue Fin_Fichier(F), la boucle s'arrête immédiatement sans lire le moindre enregistrement.",
    fixCode: `// CORRECTION OFFICIELLE :
TantQue (Non Fin_Fichier(F)) Faire
  Lire(F, e)
  Traiter(e)
Fin TantQue`,
    explanation: "La condition doit être 'Non Fin_Fichier(F)'. En Python, cela se traduit soit par une boucle while True avec un bloc try/except EOFError pour pickle, soit while line != '': pour un fichier texte.",
    questionIds: ['quiz-fich-04', 'quiz-fich-07']
  },

  // ── 6. RÉCURSIVITÉ : Cas de base manquant ou non atteint ──
  {
    id: 'err-rec-base',
    chapter: 'recursivite',
    category: 'Sous-Programmes Récursifs',
    title: "Omission ou condition erronée du cas de base (Boucle infinie)",
    buggyCode: `// ERREUR CLASSIQUE :
Fonction Somme(n : Entier) : Entier
Début
  // Aucun test d'arrêt sur n = 0 ou n = 1 !
  Retourner n + Somme(n - 1)
Fin`,
    counterExample: "Appel Somme(3) -> 3 + Somme(2) -> 2 + Somme(1) -> 1 + Somme(0) -> 0 + Somme(-1) -> Somme(-2)... Dépassement de la pile (Stack Overflow / RecursionError).",
    fixCode: `// CORRECTION OFFICIELLE :
Fonction Somme(n : Entier) : Entier
Début
  Si (n = 0) Alors
    Retourner 0  // Cas de base explicite !
  Sinon
    Retourner n + Somme(n - 1)
  Fin Si
Fin`,
    explanation: "Tout algorithme récursif doit comporter au moins un cas de base qui n'effectue aucun appel récursif et retourne directement un résultat. Sans cas de base, l'algorithme ne converge pas.",
    questionIds: ['quiz-rec-01', 'quiz-rec-08']
  },

  // ── 7. RÉCURSIVITÉ : Non-convergence du paramètre ──
  {
    id: 'err-rec-convergence',
    chapter: 'recursivite',
    category: 'Sous-Programmes Récursifs',
    title: "Rappel récursif sans modification du paramètre",
    buggyCode: `// ERREUR CLASSIQUE :
Fonction Factorielle(n : Entier) : Entier
Début
  Si (n <= 1) Alors
    Retourner 1
  Sinon
    Retourner n * Factorielle(n)  // Erreur : rappel avec 'n' au lieu de 'n - 1' !
  Fin Si
Fin`,
    counterExample: "Factorielle(4) rappelle Factorielle(4) indéfiniment sans jamais se rapprocher de n = 1.",
    fixCode: `// CORRECTION OFFICIELLE :
Fonction Factorielle(n : Entier) : Entier
Début
  Si (n <= 1) Alors
    Retourner 1
  Sinon
    Retourner n * Factorielle(n - 1)  // Convergence vers le cas de base
  Fin Si
Fin`,
    explanation: "Chaque appel récursif doit obligatoirement transmettre un argument plus proche du cas d'arrêt (décroissance stricte, division par 2, raccourcissement de chaîne).",
    questionIds: ['quiz-rec-02', 'quiz-rec-03']
  },

  // ── 8. MATRICES : Inversion des indices ligne et colonne ──
  {
    id: 'err-mat-indices',
    chapter: 'matrices',
    category: 'Matrices & 2D',
    title: "Inversion des indices M[i, j] (Confusion Ligne / Colonne)",
    buggyCode: `// ERREUR CLASSIQUE pour une matrice de L lignes et C colonnes (L <> C) :
Pour i de 1 à C Faire
  Pour j de 1 à L Faire
    Ecrire(M[i, j])  // Indice i dépasse L si C > L !
  Fin Pour
Fin Pour`,
    counterExample: "Dans une matrice 3x5 (3 lignes, 5 colonnes), tester M[4, 1] provoque une erreur de borne, car la première coordonnée désigne la ligne (qui va de 1 à 3).",
    fixCode: `// CORRECTION OFFICIELLE :
Pour i de 1 à L Faire       // 1. Lignes
  Pour j de 1 à C Faire     // 2. Colonnes
    Ecrire(M[i, j])
  Fin Pour
Fin Pour`,
    explanation: "En pseudo-code et mathématiques, la première coordonnée 'i' représente TOUJOURS la ligne, et la seconde 'j' représente la colonne. La boucle externe parcourt les lignes (1..L).",
    questionIds: ['quiz-mat-01', 'quiz-mat-09']
  },

  // ── 9. MATRICES : Aliasage des lignes en Python ──
  {
    id: 'err-mat-alias',
    chapter: 'matrices',
    category: 'Matrices & Python',
    title: "Initialisation de matrice par multiplication de listes en Python",
    buggyCode: `# ERREUR CLASSIQUE PYTHON :
M = [[0] * 3] * 3  # Crée 3 références vers la MÊME ligne !
M[0][0] = 5
print(M)  # Résultat : [[5, 0, 0], [5, 0, 0], [5, 0, 0]] !`,
    counterExample: "Modifier un seul élément M[0][0] modifie en réalité toutes les lignes de la matrice car elles pointent vers le même objet en mémoire.",
    fixCode: `# CORRECTION OFFICIELLE :
M = [[0 for j in range(3)] for i in range(3)]  # Lignes indépendantes
M[0][0] = 5
print(M)  # Résultat : [[5, 0, 0], [0, 0, 0], [0, 0, 0]]`,
    explanation: "En Python, l'opérateur `*` duplique les références. Pour créer des lignes indépendantes, il faut utiliser une compréhension de liste ou une boucle.",
    questionIds: ['quiz-mat-08']
  },

  // ── 10. APPROXIMATION : Oubli de la valeur absolue ──
  {
    id: 'err-appr-abs',
    chapter: 'approximation',
    category: 'Méthodes Numériques',
    title: "Oubli de la fonction Abs() dans le test d'écart d'approximation",
    buggyCode: `// ERREUR CLASSIQUE :
TantQue (U - V > eps) Faire  // Si U < V, (U - V) est négatif donc <= eps immédiatement !
  U <-- V
  V <-- Calculer_Suivant(U)
Fin TantQue`,
    counterExample: "Si U = 1 et V = 1.414, (U - V) = -0.414. La condition -0.414 > 0.001 est FAUSSE dès le départ, la boucle s'arrête prématurément sans approximer.",
    fixCode: `// CORRECTION OFFICIELLE :
Répéter
  U <-- V
  V <-- Calculer_Suivant(U)
Jusqu'à (Abs(V - U) <= eps)  // Toujours comparer la valeur absolue de l'écart !`,
    explanation: "La convergence d'une suite ou la précision d'une méthode de dichotomie se mesure toujours en valeur absolue Abs(V - U) <= eps, car l'écart peut être négatif.",
    questionIds: ['quiz-appr-01', 'quiz-appr-02']
  },

  // ── 11. ARITHMÉTIQUE : Bornes de test pour un nombre premier ──
  {
    id: 'err-arith-borne',
    chapter: 'arithmetique',
    category: 'Arithmétique & Primalité',
    title: "Tester la primalité jusqu'à N au lieu de Racine(N)",
    buggyCode: `// ERREUR CLASSIQUE (Non optimisée) :
Pour i de 2 à N - 1 Faire
  Si (N Mod i = 0) Alors
    premier <-- Faux
  Fin Si
Fin Pour`,
    counterExample: "Pour N = 1 000 000 007 (grand premier), tester jusqu'à N effectue 1 milliard d'opérations et dépasse le temps limite (Time Limit Exceeded). Avec Racine(N), seulement 31 622 tests !",
    fixCode: `// CORRECTION OFFICIELLE :
i <-- 2
premier <-- (N > 1)
TantQue (premier) Et (i * i <= N) Faire
  Si (N Mod i = 0) Alors
    premier <-- Faux
  Sinon
    i <-- i + 1
  Fin Si
Fin TantQue`,
    explanation: "Si un nombre N admet un diviseur, il en admet obligatoirement un inférieur ou égal à Racine(N). La boucle doit s'arrêter dès que i * i > N ou dès qu'un diviseur est trouvé.",
    questionIds: ['quiz-arith-02']
  },

  // ── 12. BASES : Oubli d'inversion des restes successifs ──
  {
    id: 'err-base-inv',
    chapter: 'bases',
    category: 'Bases de Numération',
    title: "Oubli d'inverser la chaîne des restes de divisions successives",
    buggyCode: `// ERREUR CLASSIQUE :
TantQue (n > 0) Faire
  r <-- n Mod 2
  res <-- res + Convch(r)  // Ajoute les restes de gauche à droite !
  n <-- n Div 2
Fin TantQue`,
    counterExample: "Pour n = 13 (binaire 1101) : les restes successifs sont 1, 0, 1, 1. Si on les concatène à la suite, on obtient '1011' (valeur 11) au lieu de '1101' (valeur 13) !",
    fixCode: `// CORRECTION OFFICIELLE :
TantQue (n > 0) Faire
  r <-- n Mod 2
  Convch(r, ch_r)
  res <-- ch_r + res  // Concaténation À GAUCHE pour inverser !
  n <-- n Div 2
Fin TantQue`,
    explanation: "La méthode des divisions successives calcule les restes à partir du chiffre le moins significatif (de droite à gauche). Il faut donc insérer chaque nouveau reste au début de la chaîne résultat.",
    questionIds: ['quiz-base-03', 'quiz-base-04']
  }
];

// Module export & helper
var ERRORS_HELPER = {
  getAll: function() { return ERRORS_DATA; },
  getByChapter: function(slug) {
    if (!slug || slug === 'all') return ERRORS_DATA;
    return ERRORS_DATA.filter(function(e) { return e.chapter === slug; });
  },
  getById: function(id) {
    return ERRORS_DATA.find(function(e) { return e.id === id; }) || null;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ERRORS_DATA: ERRORS_DATA, ERRORS_HELPER: ERRORS_HELPER };
}
