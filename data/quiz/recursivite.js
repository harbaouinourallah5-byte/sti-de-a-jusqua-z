// data/quiz/recursivite.js — Quiz interactif conforme Baccalauréat
// Conforme aux épreuves officielles de l'algorithmique (Section Informatique)
'use strict';

var QUIZ_QUESTIONS = [
  {
    "id": "quiz-rec-01",
    "chapter": "recursivite",
    "type": "vf",
    "level": "base",
    "question": "Un sous-programme récursif peut fonctionner correctement sans aucun cas de base (condition d'arrêt).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "explanation": "Faux : Sans cas de base, le sous-programme s'appelle indéfiniment jusqu'au débordement critique de la pile d'exécution (RecursionError).",
    "links": {
      "methodSheet": "recursivite",
      "exerciseType": "ecrire-recursif"
    },
    "section": "recurrence-bases"
  },
  {
    "id": "quiz-rec-02",
    "chapter": "recursivite",
    "type": "qcm",
    "level": "base",
    "question": "Dans une fonction récursive, qu'appelle-t-on la 'convergence' ?",
    "options": [
      "Le fait que les paramètres se rapprochent strictement du cas de base à chaque appel",
      "La conversion automatique des réels en entiers",
      "L'obligation d'utiliser une boucle Pour",
      "Le calcul de la moyenne de deux valeurs"
    ],
    "answer": 0,
    "explanation": "La convergence garantit que chaque appel récursif réduit la taille du problème afin d'atteindre obligatoirement la condition d'arrêt.",
    "links": {
      "methodSheet": "recursivite",
      "exerciseType": "ecrire-recursif"
    },
    "section": "recurrence-bases"
  },
  {
    "id": "quiz-rec-03",
    "chapter": "recursivite",
    "type": "trace",
    "level": "moyen",
    "question": "Quelle est la valeur retournée par Fact(4) pour la fonction suivante ?\nFonction Fact(n : Entier) : Entier\nDébut\n  Si (n <= 1) Alors Retourner 1\n  Sinon Retourner n * Fact(n - 1) Fin Si\nFin",
    "options": [
      "12",
      "20",
      "24",
      "48"
    ],
    "answer": "24",
    "explanation": "Fact(4) = 4 * Fact(3) = 4 * (3 * Fact(2)) = 4 * 3 * (2 * Fact(1)) = 4 * 3 * 2 * 1 = 24.",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "fonction-inconnue"
    },
    "section": "recursivite-numerique"
  },
  {
    "id": "quiz-rec-04",
    "chapter": "recursivite",
    "type": "vf",
    "level": "moyen",
    "question": "En pseudo-code conforme au Bac, il est recommandé d'utiliser une boucle TantQue à l'intérieur d'une fonction récursive pour accélérer les calculs.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "explanation": "Faux : Une fonction récursive résout la répétition par ses propres appels. Mélanger boucles et récursivité est une faute de conception pénalisée au Bac.",
    "links": {
      "methodSheet": "recursivite",
      "exerciseType": "ecrire-recursif"
    },
    "section": "recurrence-bases"
  },
  {
    "id": "quiz-rec-05",
    "chapter": "recursivite",
    "type": "qcm",
    "level": "bac",
    "question": "On considère la fonction récursive suivante :\nFonction Myst(n : Entier) : Entier\nDébut\n  Si (n = 0) Alors Retourner 0\n  Sinon Retourner (n Mod 2) + Myst(n Div 2) Fin Si\nFin\nQuel est le rôle de cette fonction pour un entier n >= 0 ?",
    "options": [
      "Elle compte le nombre de chiffres de n en base 10",
      "Elle calcule le nombre de bits à 1 dans l'écriture binaire de n",
      "Elle vérifie si n est divisible par 2",
      "Elle inverse l'ordre des chiffres de n"
    ],
    "answer": 1,
    "explanation": "(n Mod 2) extrait le bit de poids faible et (n Div 2) décale vers la droite. La somme accumulée donne exactement le nombre de bits à 1 (poids de Hamming).",
    "links": {
      "methodSheet": "fonction-inconnue",
      "exerciseType": "fonction-inconnue"
    },
    "section": "recursivite-numerique"
  },
  {
    "id": "quiz-rec-06",
    "chapter": "recursivite",
    "type": "trace",
    "level": "bac",
    "question": "Pour la fonction Myst(n) précédente : Myst(n) = (n Mod 2) + Myst(n Div 2) avec Myst(0)=0. Quelle valeur exacte est retournée pour n = 11 ?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "3",
    "explanation": "11 en binaire vaut 1011 (trois bits à 1). Trace : 1 + Myst(5) = 1 + 1 + Myst(2) = 1 + 1 + 0 + Myst(1) = 1 + 1 + 0 + 1 + 0 = 3.",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "fonction-inconnue"
    },
    "section": "recursivite-numerique"
  },
  {
    "id": "quiz-rec-07",
    "chapter": "recursivite",
    "type": "vf",
    "level": "base",
    "question": "Chaque appel récursif réserve une nouvelle zone mémoire (contexte d'appel) sur la pile d'exécution du processeur.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : La pile d'exécution mémorise les paramètres et l'adresse de retour de chaque appel jusqu'à l'atteinte du cas de base.",
    "links": {
      "methodSheet": "recursivite"
    },
    "section": "recurrence-bases"
  },
  {
    "id": "quiz-rec-08",
    "chapter": "recursivite",
    "type": "qcm",
    "level": "moyen",
    "question": "Quelle omission fréquente fait perdre des points sur une fonction récursive au Bac ?",
    "options": [
      "Oublier le mot-clé 'Retourner' devant l'appel récursif",
      "Déclarer des variables locales avec des entiers",
      "Donner un nom explicite à la fonction",
      "Mettre des parenthèses autour des conditions Si"
    ],
    "answer": 0,
    "explanation": "Écrire simplement 'MonAppel(n-1)' au lieu de 'Retourner MonAppel(n-1)' fait perdre la valeur calculée par l'appel récursif.",
    "links": {
      "methodSheet": "recursivite",
      "exerciseType": "ecrire-recursif"
    },
    "section": "recurrence-bases"
  },
  {
    "id": "quiz-rec-09",
    "chapter": "recursivite",
    "type": "vf",
    "level": "bac",
    "question": "Une fonction récursive terminale est une fonction où l'appel récursif constitue la toute dernière opération exécutée, sans calcul en attente.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : En récursion terminale, le résultat est accumulé au fur et à mesure, évitant de conserver des contextes en attente sur la pile.",
    "links": {
      "methodSheet": "recursivite"
    },
    "section": "recurrence-bases"
  },
  {
    "id": "quiz-rec-10",
    "chapter": "recursivite",
    "type": "qcm",
    "level": "moyen",
    "question": "Dans le T.D.O local d'une fonction récursive, doit-on déclarer les paramètres formels reçus par la fonction ?",
    "options": [
      "Oui, c'est obligatoire pour tous les paramètres",
      "Non, jamais ! Les paramètres formels ne doivent pas figurer dans le T.D.O local",
      "Uniquement s'ils sont de type Entier",
      "Seulement s'ils sont modifiés par un appel récursif"
    ],
    "answer": 1,
    "explanation": "Règle absolue du Bac : les paramètres formels sont déjà déclarés dans l'en-tête. Les redéclarer dans le T.D.O local est une faute pénalisante.",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "recurrence-bases"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
