// data/quiz/tableaux.js — Quiz interactif conforme Baccalauréat
// Conforme aux épreuves officielles de l'algorithmique (Section Informatique)
'use strict';

var QUIZ_QUESTIONS = [
  {
    "id": "quiz-tab-01",
    "chapter": "tableaux",
    "type": "vf",
    "level": "base",
    "question": "En pseudo-code tunisien officiel, les indices d'un tableau T de N éléments débutent conventionnellement à 1 et se terminent à N.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : En pseudo-code tunisien, l'indexation va de 1 à N. En Python sous Thonny, elle va de 0 à N-1.",
    "links": {
      "exerciseType": "tableaux-tris"
    },
    "section": "tableaux-remplissage"
  },
  {
    "id": "quiz-tab-02",
    "chapter": "tableaux",
    "type": "qcm",
    "level": "base",
    "question": "Quel est le principe fondamental du Tri à Bulles (Bubble Sort) ?",
    "options": [
      "Comparer les éléments adjacents et les permuter s'ils sont dans le désordre",
      "Chercher le minimum et le placer en première position",
      "Insérer chaque élément à sa place dans la sous-liste déjà triée",
      "Diviser le tableau en deux moitiés indépendantes"
    ],
    "answer": 0,
    "explanation": "Le tri à bulles fait remonter progressivement les éléments les plus grands vers la fin du tableau par des échanges successifs de voisins.",
    "links": {
      "exerciseType": "tableaux-tris"
    },
    "section": "tableaux-tris"
  },
  {
    "id": "quiz-tab-03",
    "chapter": "tableaux",
    "type": "qcm",
    "level": "moyen",
    "question": "Dans le Tri par Sélection (Selection Sort), quelle opération est répétée à chaque étape i de 1 à N-1 ?",
    "options": [
      "Rechercher le minimum parmi les éléments de i à N et l'échanger avec T[i]",
      "Décaler tous les éléments du tableau vers la droite",
      "Trier d'abord les nombres pairs puis les impairs",
      "Diviser le tableau par deux à chaque itération"
    ],
    "answer": 0,
    "explanation": "À l'étape i, on sélectionne le plus petit élément du sous-tableau non trié T[i..N] et on le permute avec T[i].",
    "links": {
      "exerciseType": "tableaux-tris"
    },
    "section": "tableaux-tris"
  },
  {
    "id": "quiz-tab-04",
    "chapter": "tableaux",
    "type": "vf",
    "level": "moyen",
    "question": "La recherche dichotomique peut s'appliquer sur n'importe quel tableau, même non trié.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "explanation": "Faux : La recherche dichotomique exige impérativement que le tableau soit préalablement trié pour éliminer une moitié à chaque étape.",
    "links": {
      "exerciseType": "tableaux-tris"
    },
    "section": "tableaux-recherche"
  },
  {
    "id": "quiz-tab-05",
    "chapter": "tableaux",
    "type": "trace",
    "level": "moyen",
    "question": "Soit T = [15, 3, 9, 8]. Quel est le contenu de T après le 1er passage du Tri par Sélection (recherche du minimum entre les cases 1 et 4 et échange avec T[1]) ?",
    "options": [
      "[3, 9, 8, 15]",
      "[3, 15, 9, 8]",
      "[15, 3, 8, 9]",
      "[3, 8, 9, 15]"
    ],
    "answer": "[3, 15, 9, 8]",
    "explanation": "Le minimum de [15, 3, 9, 8] est 3 (indice 2). On échange T[1]=15 avec T[2]=3. Le tableau devient [3, 15, 9, 8].",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "tableaux-tris"
    },
    "section": "tableaux-tris"
  },
  {
    "id": "quiz-tab-06",
    "chapter": "tableaux",
    "type": "vf",
    "level": "bac",
    "question": "Dans le Tri par Insertion, l'algorithme insère chaque élément T[i] à sa place dans la tranche déjà ordonnée T[1..i-1] en décalant les éléments plus grands.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : C'est le principe du joueur de cartes qui classe chaque nouvelle carte parmi celles déjà triées dans sa main.",
    "links": {
      "exerciseType": "tableaux-tris"
    },
    "section": "tableaux-tris"
  },
  {
    "id": "quiz-tab-07",
    "chapter": "tableaux",
    "type": "trace",
    "level": "bac",
    "question": "Combien de comparaisons effectue au maximum la recherche dichotomique dans un tableau trié de 16 éléments ?",
    "options": [
      "4",
      "5",
      "8",
      "16"
    ],
    "answer": "5",
    "explanation": "À chaque étape, l'espace de recherche est divisé par 2 (16 -> 8 -> 4 -> 2 -> 1), soit au maximum floor(log2(16)) + 1 = 5 comparaisons.",
    "links": {
      "exerciseType": "tableaux-tris"
    },
    "section": "tableaux-recherche"
  },
  {
    "id": "quiz-tab-08",
    "chapter": "tableaux",
    "type": "qcm",
    "level": "bac",
    "question": "Pour permuter le contenu de deux cases T[i] et T[j] en pseudo-code, quelle séquence est correcte ?",
    "options": [
      "aux <-- T[i] ; T[i] <-- T[j] ; T[j] <-- aux",
      "T[i] <-- T[j] ; T[j] <-- T[i]",
      "aux <-- T[j] ; T[j] <-- aux ; T[i] <-- aux",
      "T[i] <-- aux ; aux <-- T[j] ; T[j] <-- T[i]"
    ],
    "answer": 0,
    "explanation": "Il faut impérativement sauvegarder T[i] dans une variable tampon 'aux' avant d'écraser sa valeur.",
    "links": {
      "methodSheet": "avant-de-rendre"
    },
    "section": "tableaux-transformations"
  },
  {
    "id": "quiz-tab-09",
    "chapter": "tableaux",
    "type": "vf",
    "level": "base",
    "question": "Lorsqu'une procédure doit remplir ou trier un tableau passé en paramètre, ce dernier doit obligatoirement être précédé de '@' (ou 'Var') dans l'en-tête.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : Le passage par variable (@) permet de répercuter les modifications apportées au tableau sur le programme appelant.",
    "links": {
      "methodSheet": "avant-de-rendre",
      "exerciseType": "corriger-erreurs"
    },
    "section": "tableaux-remplissage"
  },
  {
    "id": "quiz-tab-10",
    "chapter": "tableaux",
    "type": "qcm",
    "level": "moyen",
    "question": "Dans le T.D.N.T, quelle syntaxe officielle permet de définir un type tableau de 20 entiers ?",
    "options": [
      "Tab = Tableau de 20 Entiers",
      "Tab = Array(20) of Integer",
      "Tab : Tableau[20]",
      "Tableau Tab de 20 Entiers"
    ],
    "answer": 0,
    "explanation": "En pseudo-code tunisien, la déclaration d'un type tableau au T.D.N.T est : NomType = Tableau de N <Type>.",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "tableaux-remplissage"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
