/**
 * QUIZ : Approximation & Optimisation
 * Chapitre : approximation
 * STI de A à Z — Baccalauréat Tunisie
 */

const QUIZ_APPROXIMATION = [
  {
    id: 'quiz-appr-01',
    chapter: 'approximation',
    type: 'vf',
    level: 'base',
    question: "Dans un calcul d'approximation avec une précision eps (epsilon > 0), la condition d'arrêt classique de la boucle TantQue s'écrit généralement 'TantQue Abs(U_n - U_prec) >= eps Faire'.",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : On continue les calculs tant que l'écart entre deux approximations successives reste supérieur ou égal au seuil de précision eps.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-02',
    chapter: 'approximation',
    type: 'qcm',
    level: 'base',
    question: "Quelle fonction standard du pseudo-code officiel Bac permet de calculer la valeur absolue d'un réel ?",
    options: [
      "Abs(x)",
      "ValAbs(x)",
      "Modulo(x)",
      "Positif(x)"
    ],
    answer: 0,
    explanation: "Abs(x) renvoie la valeur absolue d'un nombre (ex: Abs(-3.5) = 3.5).",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-03',
    chapter: 'approximation',
    type: 'qcm',
    level: 'moyen',
    question: "Dans la méthode de dichotomie pour résoudre f(x) = 0 sur [a, b], quelle condition initiale sur f(a) et f(b) est indispensable ?",
    options: [
      "f(a) * f(b) < 0 (les images sont de signes opposés)",
      "f(a) = f(b)",
      "f(a) + f(b) > 0",
      "a = b"
    ],
    answer: 0,
    explanation: "D'après le théorème des valeurs intermédiaires, si f(a) et f(b) sont de signes contraires, l'équation f(x)=0 admet au moins une solution sur [a, b].",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-04',
    chapter: 'approximation',
    type: 'trace',
    level: 'moyen',
    question: "Soit l'intervalle initial [2, 6]. Quel est le point milieu 'm' calculé dès la première étape de la dichotomie ?",
    options: ["3", "4", "5", "4.5"],
    answer: "4",
    explanation: "m = (a + b) / 2 = (2 + 6) / 2 = 8 / 2 = 4.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-05',
    chapter: 'approximation',
    type: 'vf',
    level: 'moyen',
    question: "À chaque étape de la méthode de dichotomie, la longueur de l'intervalle de recherche est exactement divisée par 2.",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : Le sous-intervalle retenu a pour largeur (b - a) / 2, ce qui assure une convergence exponentielle rapide.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-06',
    chapter: 'approximation',
    type: 'qcm',
    level: 'bac',
    question: "Pour approximer Pi par la formule de Leibniz (Pi/4 = 1 - 1/3 + 1/5 - 1/7 + ...), quelle expression donne le signe alterné du terme au rang k (k >= 0) ?",
    options: [
      "(-1)^k (ou gestion d'un drapeau signe <-- -signe)",
      "Toujours positif",
      "Toujours négatif",
      "Aléatoire"
    ],
    answer: 0,
    explanation: "Pour k=0 le signe est +1, pour k=1 il vaut -1, pour k=2 il vaut +1. On alterne avec signe <-- -signe à chaque tour.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-07',
    chapter: 'approximation',
    type: 'trace',
    level: 'bac',
    question: "Soit la méthode de Héron pour approximer Racine(2) avec U0 = 1. Sachant que U_(n+1) = (U_n + 2/U_n) / 2, quelle est la valeur décimale exacte de U1 ?",
    options: ["1.25", "1.414", "1.5", "1.75"],
    answer: "1.5",
    explanation: "U1 = (1 + 2/1) / 2 = (1 + 2) / 2 = 3 / 2 = 1.5.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-08',
    chapter: 'approximation',
    type: 'vf',
    level: 'bac',
    question: "Pour éviter une boucle infinie lors d'une approximation par suite, il est recommandé d'ajouter un compteur d'itérations maximal (ex: iter < 10000).",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : Ce garde-fou protège le programme si la précision demandée est trop exigeante par rapport à la précision des flottants.",
    links: { exerciseType: 'suites-approx' }
  },
  {
    id: 'quiz-appr-09',
    chapter: 'approximation',
    type: 'qcm',
    level: 'moyen',
    question: "Dans le T.D.O, quel type doit-on obligatoirement attribuer à la constante ou variable eps (epsilon) ?",
    options: [
      "Réel",
      "Entier",
      "Chaîne",
      "Booléen"
    ],
    answer: 0,
    explanation: "Epsilon représente un seuil de tolérance décimal (ex: 0.0001 = 10^-4), c'est obligatoirement un Réel.",
    links: { methodSheet: 'tdo-tdnt', exerciseType: 'tdo-tdnt' }
  },
  {
    id: 'quiz-appr-10',
    chapter: 'approximation',
    type: 'vf',
    level: 'base',
    question: "Plus la valeur d'epsilon choisie est petite (ex: 10^-6 au lieu de 10^-2), plus le nombre d'itérations requises augmente.",
    options: ['Vrai', 'Faux'],
    answer: 0, // Vrai
    explanation: "Vrai : Une précision plus élevée nécessite de calculer davantage de termes pour réduire l'erreur en dessous du seuil.",
    links: { exerciseType: 'suites-approx' }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_APPROXIMATION;
}
