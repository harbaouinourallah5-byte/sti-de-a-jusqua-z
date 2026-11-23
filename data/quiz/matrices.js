// data/quiz/matrices.js — Quiz interactif conforme Baccalauréat
// Conforme aux épreuves officielles de l'algorithmique (Section Informatique)
'use strict';

var QUIZ_QUESTIONS = [
  {
    "id": "quiz-mat-01",
    "chapter": "matrices",
    "type": "vf",
    "level": "base",
    "question": "Dans une matrice M de L lignes et C colonnes, la case M[i, j] désigne l'élément situé à la ligne i et à la colonne j.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : Par convention, le premier indice i référence la ligne (1..L) et le second indice j référence la colonne (1..C).",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-bases"
  },
  {
    "id": "quiz-mat-02",
    "chapter": "matrices",
    "type": "qcm",
    "level": "base",
    "question": "Dans le T.D.N.T, comment déclare-t-on un type matrice carrée de 5 lignes et 5 colonnes d'entiers ?",
    "options": [
      "Mat = Tableau de 5, 5 Entiers",
      "Mat = Matrix(5, 5)",
      "Mat : 5x5 Entiers",
      "Mat = Tableau 2D"
    ],
    "answer": 0,
    "explanation": "La syntaxe officielle en pseudo-code tunisien est : NomType = Tableau de L, C <TypeElément>.",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "matrices-bases"
  },
  {
    "id": "quiz-mat-03",
    "chapter": "matrices",
    "type": "qcm",
    "level": "moyen",
    "question": "Dans une matrice carrée M de taille N x N, quelle condition vérifient les éléments de la diagonale principale ?",
    "options": [
      "i = j",
      "i + j = N + 1",
      "i < j",
      "i > j"
    ],
    "answer": 0,
    "explanation": "Les éléments de la diagonale principale ont le même indice de ligne et de colonne : M[1,1], M[2,2], ..., M[N,N] (i = j).",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-diagonales"
  },
  {
    "id": "quiz-mat-04",
    "chapter": "matrices",
    "type": "trace",
    "level": "moyen",
    "question": "Dans une matrice carrée d'ordre N = 4, quelle égalité caractérise les indices des éléments de la diagonale secondaire ?",
    "options": [
      "i = j",
      "i + j = 5 (soit i + j = N + 1)",
      "i - j = 1",
      "i * j = 4"
    ],
    "answer": "i + j = 5 (soit i + j = N + 1)",
    "explanation": "La diagonale secondaire relie M[1,4], M[2,3], M[3,2] et M[4,1]. Pour chaque élément, i + j = 4 + 1 = 5.",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-diagonales"
  },
  {
    "id": "quiz-mat-05",
    "chapter": "matrices",
    "type": "vf",
    "level": "moyen",
    "question": "Une matrice carrée M est dite symétrique si et seulement si pour toutes lignes i et colonnes j : M[i, j] = M[j, i].",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : Une matrice est symétrique si elle est identique à sa transposée, c'est-à-dire si M[i, j] = M[j, i].",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-diagonales"
  },
  {
    "id": "quiz-mat-06",
    "chapter": "matrices",
    "type": "trace",
    "level": "bac",
    "question": "Soit la matrice 2x2 M = [[1, 2], [3, 4]]. Quelle est la somme des éléments de sa diagonale principale ?",
    "options": [
      "4",
      "5",
      "7",
      "10"
    ],
    "answer": "5",
    "explanation": "Diagonale principale : M[1,1] + M[2,2] = 1 + 4 = 5.",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-tris-calculs"
  },
  {
    "id": "quiz-mat-07",
    "chapter": "matrices",
    "type": "qcm",
    "level": "bac",
    "question": "Pour parcourir les éléments situés STRICTEMENT au-dessus de la diagonale principale d'une matrice carrée N x N, quelles bornes utilise-t-on pour la boucle j ?",
    "options": [
      "Pour j de (i + 1) à N Faire",
      "Pour j de 1 à (i - 1) Faire",
      "Pour j de 1 à N Faire",
      "Pour j de i à N Faire"
    ],
    "answer": 0,
    "explanation": "Au-dessus de la diagonale principale, la colonne j est strictement supérieure à la ligne i, donc j commence à i + 1.",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-parcours"
  },
  {
    "id": "quiz-mat-08",
    "chapter": "matrices",
    "type": "vf",
    "level": "bac",
    "question": "En Python sous Thonny, une matrice de 3 lignes et 4 colonnes de zéros indépendants se crée avec : [[0] * 4 for _ in range(3)].",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : La compréhension de liste crée 3 listes indépendantes. Utiliser [[0]*4]*3 dupliquerait les références et propagerait les modifications.",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-bases"
  },
  {
    "id": "quiz-mat-09",
    "chapter": "matrices",
    "type": "trace",
    "level": "moyen",
    "question": "Dans une matrice 3x3 initialisée par M[i, j] = i * j, quelle est la valeur de M[2, 3] ?",
    "options": [
      "5",
      "6",
      "8",
      "9"
    ],
    "answer": "6",
    "explanation": "M[2, 3] = 2 * 3 = 6.",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-tris-calculs"
  },
  {
    "id": "quiz-mat-10",
    "chapter": "matrices",
    "type": "vf",
    "level": "base",
    "question": "Le parcours exhaustif d'une matrice nécessite usuellement deux boucles imbriquées : une boucle externe pour les lignes et une interne pour les colonnes.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : La boucle externe itère sur les lignes (i de 1 à L) et la boucle interne itère sur les colonnes (j de 1 à C).",
    "links": {
      "exerciseType": "matrices"
    },
    "section": "matrices-parcours"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
