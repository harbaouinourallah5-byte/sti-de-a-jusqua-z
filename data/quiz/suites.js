/**
 * QUIZ : Les Suites Numériques & Suites Récurrentes
 * Chapitre : suites
 * STI de A à Z — Baccalauréat Tunisie
 */

const QUIZ_SUITES = [
  {
    id: 'quiz-sui-01',
    chapter: 'suites',
    type: 'vf',
    level: 'base',
    question: "Dans une suite arithmétique de premier terme U0 et de raison constante r, la relation de récurrence est U_(n+1) = U_n + r.",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : Par définition, chaque terme s'obtient en ajoutant la constante r au terme précédent.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-02',
    chapter: 'suites',
    type: 'qcm',
    level: 'base',
    question: "Dans une suite géométrique de premier terme U0 et de raison q, quelle est l'expression explicite de U_n en fonction de n ?",
    options: [
      "U_n = U0 * q^n",
      "U_n = U0 + n * q",
      "U_n = (U0 + q) * n",
      "U_n = U0 / q^n"
    ],
    answer: 0,
    explanation: "Par multiplications successives par q, le terme général d'une suite géométrique s'écrit U_n = U0 * q^n.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-03',
    chapter: 'suites',
    type: 'trace',
    level: 'base',
    question: "Soit la suite définie par U0 = 3 et U_(n+1) = 2 * U_n + 1. Quelle est la valeur numérique de U2 ?",
    options: ["7", "14", "15", "16"],
    answer: "15",
    explanation: "U1 = 2 * 3 + 1 = 7. U2 = 2 * 7 + 1 = 15.",
    links: { methodSheet: 'trace-execution', exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-04',
    chapter: 'suites',
    type: 'trace',
    level: 'moyen',
    question: "Quelle est la valeur de la somme des 10 premiers entiers S = 1 + 2 + 3 + ... + 10 ?",
    options: ["45", "50", "55", "60"],
    answer: "55",
    explanation: "Formule : S = N * (N + 1) / 2 = 10 * 11 / 2 = 110 / 2 = 55.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-05',
    chapter: 'suites',
    type: 'vf',
    level: 'moyen',
    question: "La suite de Syracuse applique la règle : si U_n est pair alors U_(n+1) = U_n Div 2, sinon U_(n+1) = 3 * U_n + 1.",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : C'est la formulation algorithmique officielle du problème de Collatz/Syracuse.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-06',
    chapter: 'suites',
    type: 'trace',
    level: 'moyen',
    question: "Pour la suite de Syracuse avec U0 = 6, quelle est la valeur de U2 ?",
    options: ["10", "3", "12", "16"],
    answer: "10",
    explanation: "U0=6 (pair) -> U1 = 6 Div 2 = 3. U1=3 (impair) -> U2 = 3 * 3 + 1 = 10.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-07',
    chapter: 'suites',
    type: 'trace',
    level: 'bac',
    question: "Dans la suite de Fibonacci avec F0 = 0, F1 = 1 et F_n = F_(n-1) + F_(n-2), quelle est la valeur exacte de F6 ?",
    options: ["5", "8", "13", "21"],
    answer: "8",
    explanation: "F0=0, F1=1, F2=1, F3=2, F4=3, F5=5, F6=8.",
    links: { methodSheet: 'recursivite', exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-08',
    chapter: 'suites',
    type: 'vf',
    level: 'bac',
    question: "Calculer la suite de Fibonacci de manière récursive naïve sans mémoïsation engendre une complexité exponentielle en O(2^n).",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : L'arbre des appels récursifs duplique de très nombreux calculs identiques, ce qui justifie l'approche itérative en O(n).",
    links: { methodSheet: 'recursivite' }
  },
  {
    id: 'quiz-sui-09',
    chapter: 'suites',
    type: 'qcm',
    level: 'moyen',
    question: "Pour calculer le n-ième terme d'une suite récurrente d'ordre 1 de façon itérative, combien de variables sont nécessaires en mémoire ?",
    options: [
      "Deux variables simples (le terme courant et le précédent)",
      "Un tableau complet de taille n",
      "Au moins cinq variables",
      "Un fichier temporaire sur disque"
    ],
    answer: 0,
    explanation: "On n'a besoin que de retenir le terme précédent pour calculer le nouveau, ce qui garantit une complexité spatiale minimale O(1).",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-sui-10',
    chapter: 'suites',
    type: 'vf',
    level: 'base',
    question: "Une suite géométrique de raison q vérifiant |q| < 1 converge vers 0 lorsque n devient infiniment grand.",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : Comme |q| < 1, q^n tend vers 0, donc U_n = U0 * q^n converge vers 0.",
    links: { exerciseType: 'suites-approx' }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_SUITES;
}
