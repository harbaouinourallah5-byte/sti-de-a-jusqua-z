// data/quiz/arithmetique.js — Quiz interactif conforme Baccalauréat
// Conforme aux épreuves officielles de l'algorithmique (Section Informatique)
'use strict';

var QUIZ_QUESTIONS = [
  {
    "id": "quiz-arith-01",
    "chapter": "arithmetique",
    "type": "vf",
    "level": "base",
    "question": "Un nombre premier est un entier strictement supérieur à 1 qui ne possède que deux diviseurs distincts : 1 et lui-même.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : C'est la définition mathématique exacte. Les nombres 0 et 1 ne sont pas des nombres premiers.",
    "links": {
      "exerciseType": "fonction-inconnue"
    },
    "section": "arithmetique-primalite"
  },
  {
    "id": "quiz-arith-02",
    "chapter": "arithmetique",
    "type": "qcm",
    "level": "base",
    "question": "Quelle est l'optimisation classique de la boucle pour tester si un entier n > 1 est premier ?",
    "options": [
      "Tester les diviseurs d de 2 jusqu'à RacineCarrée(n)",
      "Tester tous les diviseurs de 1 jusqu'à n",
      "Tester uniquement les nombres pairs",
      "Diviser n par 10 à chaque itération"
    ],
    "answer": 0,
    "explanation": "Si un nombre n n'a aucun diviseur inférieur ou égal à sa racine carrée, il n'en aura aucun au-delà (car si d > sqrt(n), alors n/d < sqrt(n)).",
    "links": {
      "exerciseType": "fonction-inconnue"
    },
    "section": "arithmetique-primalite"
  },
  {
    "id": "quiz-arith-03",
    "chapter": "arithmetique",
    "type": "trace",
    "level": "base",
    "question": "Quelle est la valeur de 17 Mod 5 en arithmétique ?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2",
    "explanation": "17 = 5 * 3 + 2, donc le reste de la division euclidienne (Mod) est 2.",
    "links": {
      "exerciseType": "fonction-inconnue"
    },
    "section": "arithmetique-primalite"
  },
  {
    "id": "quiz-arith-04",
    "chapter": "arithmetique",
    "type": "qcm",
    "level": "moyen",
    "question": "Un nombre parfait est un entier naturel égal à :",
    "options": [
      "La somme de ses diviseurs stricts (diviseurs autres que lui-même)",
      "Le double de sa racine carrée",
      "La somme de ses chiffres",
      "Le produit de ses chiffres"
    ],
    "answer": 0,
    "explanation": "Exemple : 6 est parfait car ses diviseurs stricts sont 1, 2, 3 et 1 + 2 + 3 = 6.",
    "links": {
      "exerciseType": "fonction-inconnue"
    },
    "section": "arithmetique-primalite"
  },
  {
    "id": "quiz-arith-05",
    "chapter": "arithmetique",
    "type": "trace",
    "level": "moyen",
    "question": "Quel est le PGCD de 48 et 18 par l'algorithme d'Euclide ?",
    "options": [
      "3",
      "6",
      "8",
      "12"
    ],
    "answer": "6",
    "explanation": "48 = 18 * 2 + 12 ; 18 = 12 * 1 + 6 ; 12 = 6 * 2 + 0. Le dernier reste non nul est 6.",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "fonction-inconnue"
    },
    "section": "arithmetique-pgcd-ppcm"
  },
  {
    "id": "quiz-arith-06",
    "chapter": "arithmetique",
    "type": "vf",
    "level": "moyen",
    "question": "Deux entiers A et B sont dits 'premiers entre eux' si et seulement si leur PGCD est égal à 1.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : Par définition, PGCD(A, B) = 1 signifie que A et B n'admettent aucun diviseur commun autre que 1.",
    "links": {
      "exerciseType": "vf-qcm"
    },
    "section": "arithmetique-pgcd-ppcm"
  },
  {
    "id": "quiz-arith-07",
    "chapter": "arithmetique",
    "type": "trace",
    "level": "bac",
    "question": "Deux entiers M et N sont 'amis' si la somme des diviseurs stricts de M vaut N et réciproquement. Sachant que la somme des diviseurs stricts de 220 vaut 284, quelle doit être la somme des diviseurs stricts de 284 pour former un couple d'amis ?",
    "options": [
      "142",
      "220",
      "284",
      "504"
    ],
    "answer": "220",
    "explanation": "Par définition des nombres amis : SommeDiviseurs(284) = 1 + 2 + 4 + 71 + 142 = 220.",
    "links": {
      "exerciseType": "fonction-inconnue"
    },
    "section": "arithmetique-primalite"
  },
  {
    "id": "quiz-arith-08",
    "chapter": "arithmetique",
    "type": "vf",
    "level": "bac",
    "question": "La formule PPCM(A, B) * PGCD(A, B) = A * B est toujours vérifiée pour deux entiers strictement positifs.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : C'est une propriété arithmétique fondamentale qui permet de calculer le PPCM : PPCM(A, B) = (A * B) Div PGCD(A, B).",
    "links": {
      "exerciseType": "vf-qcm"
    },
    "section": "arithmetique-pgcd-ppcm"
  },
  {
    "id": "quiz-arith-09",
    "chapter": "arithmetique",
    "type": "trace",
    "level": "bac",
    "question": "Combien de nombres premiers existe-t-il strictement entre 10 et 20 ?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "4",
    "explanation": "Les nombres premiers strictement compris entre 10 et 20 sont 11, 13, 17 et 19, soit exactement 4 nombres.",
    "links": {
      "exerciseType": "fonction-inconnue"
    },
    "section": "arithmetique-primalite"
  },
  {
    "id": "quiz-arith-10",
    "chapter": "arithmetique",
    "type": "qcm",
    "level": "base",
    "question": "Quel opérateur pseudo-code officiel calcule le quotient entier d'une division euclidienne ?",
    "options": [
      "Div",
      "Mod",
      "/",
      "//"
    ],
    "answer": 0,
    "explanation": "En pseudo-code tunisien, 'Div' est l'opérateur du quotient entier (ex: 7 Div 2 = 3). 'Mod' calcule le reste.",
    "links": {
      "methodSheet": "tdo-tdnt"
    },
    "section": "arithmetique-puissances"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
