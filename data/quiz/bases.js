// data/quiz/bases.js — Quiz interactif conforme Baccalauréat
// Conforme aux épreuves officielles de l'algorithmique (Section Informatique)
'use strict';

var QUIZ_BASES = [
  {
    "id": "quiz-base-01",
    "chapter": "bases",
    "type": "vf",
    "level": "base",
    "question": "En base 16 (hexadécimal), les symboles utilisés vont de 0 à 9 puis de 'A' à 'F', où 'A' vaut 10 et 'F' vaut 15.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : La base 16 comprend 16 chiffres : les 10 chiffres décimaux (0 à 9) et les 6 lettres A=10, B=11, C=12, D=13, E=14, F=15.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-puissances-2"
  },
  {
    "id": "quiz-base-02",
    "chapter": "bases",
    "type": "trace",
    "level": "base",
    "question": "Quelle est la valeur en base 10 du nombre binaire '1101' ?",
    "options": [
      "11",
      "13",
      "15",
      "9"
    ],
    "answer": "13",
    "explanation": "Calcul des puissances de 2 : 1*8 + 1*4 + 0*2 + 1*1 = 8 + 4 + 0 + 1 = 13.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-dec-any"
  },
  {
    "id": "quiz-base-03",
    "chapter": "bases",
    "type": "qcm",
    "level": "base",
    "question": "Pour convertir un entier de la base 10 vers une base B quelconque (B <= 16), quelle méthode algorithmique utilise-t-on ?",
    "options": [
      "Les divisions successives par B en collectant les restes dans l'ordre inverse",
      "Les multiplications successives par B",
      "L'addition simple des puissances de B",
      "Le calcul de la racine carrée de B"
    ],
    "answer": 0,
    "explanation": "On effectue des divisions euclidiennes entières successives par B : les restes (n Mod B) constituent les chiffres de droite à gauche.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-dec-any"
  },
  {
    "id": "quiz-base-04",
    "chapter": "bases",
    "type": "trace",
    "level": "moyen",
    "question": "Quelle est l'écriture binaire du nombre décimal 25 ?",
    "options": [
      "10101",
      "11001",
      "11100",
      "10011"
    ],
    "answer": "11001",
    "explanation": "Décomposition : 25 = 16 + 8 + 1 = 2^4 + 2^3 + 2^0, soit '11001' en base 2.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-dec-any"
  },
  {
    "id": "quiz-base-05",
    "chapter": "bases",
    "type": "trace",
    "level": "moyen",
    "question": "Quelle est la valeur décimale du nombre hexadécimal '1F' ?",
    "options": [
      "29",
      "31",
      "16",
      "35"
    ],
    "answer": "31",
    "explanation": "1 * 16^1 + 15 * 16^0 = 16 + 15 = 31.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-dec-any"
  },
  {
    "id": "quiz-base-06",
    "chapter": "bases",
    "type": "qcm",
    "level": "moyen",
    "question": "Pour passer directement de la base 2 à la base 16 sans passer par la base 10, comment regroupe-t-on les bits ?",
    "options": [
      "Par blocs de 4 bits en partant de la droite",
      "Par blocs de 3 bits en partant de la gauche",
      "Par blocs de 8 bits",
      "Ce n'est pas possible sans passer par la base 10"
    ],
    "answer": 0,
    "explanation": "Puisque 16 = 2^4, chaque symbole hexadécimal correspond exactement à un bloc de 4 bits (quartet) en partant de la droite.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-puissances-2"
  },
  {
    "id": "quiz-base-07",
    "chapter": "bases",
    "type": "trace",
    "level": "bac",
    "question": "Quel est l'équivalent hexadécimal exact du nombre binaire '10111110' ?",
    "options": [
      "AE",
      "BE",
      "CF",
      "BD"
    ],
    "answer": "BE",
    "explanation": "Découpage en quartets : '1011' (vaut 11 en décimal, soit 'B') et '1110' (vaut 14 en décimal, soit 'E'). Le résultat est 'BE'.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-puissances-2"
  },
  {
    "id": "quiz-base-08",
    "chapter": "bases",
    "type": "vf",
    "level": "moyen",
    "question": "En base 8 (octal), chaque chiffre correspond exactement à un regroupement de 3 bits en base 2.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : Comme 8 = 2^3, chaque symbole octal (de 0 à 7) est représenté par exactement 3 bits binaires (de '000' à '111').",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-puissances-2"
  },
  {
    "id": "quiz-base-09",
    "chapter": "bases",
    "type": "qcm",
    "level": "bac",
    "question": "Lors de la conversion décimale vers la base 16, si le reste d'une division vaut 12, quel symbole doit être ajouté ?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "En base 16 : 10 = 'A', 11 = 'B', 12 = 'C', 13 = 'D', 14 = 'E', 15 = 'F'. Le reste 12 devient donc 'C'.",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-dec-any"
  },
  {
    "id": "quiz-base-10",
    "chapter": "bases",
    "type": "vf",
    "level": "base",
    "question": "En Python sous Thonny, l'appel bin(10) renvoie la chaîne '0b1010'.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : bin() produit la chaîne binaire préfixée par '0b'. Pour extraire uniquement les chiffres binaires, on prend la tranche bin(10)[2:].",
    "links": {
      "exerciseType": "conversion-bases"
    },
    "section": "bases-puissances-2"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_BASES;
}
