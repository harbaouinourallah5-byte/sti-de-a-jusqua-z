// data/quiz/rappels.js — Quiz interactif conforme Baccalauréat
// Conforme aux épreuves officielles de l'algorithmique (Section Informatique)
'use strict';

var QUIZ_RAPPELS = [
  {
    "id": "quiz-rap-01",
    "chapter": "rappels",
    "type": "qcm",
    "level": "base",
    "question": "Pour effectuer un contrôle de saisie obligeant l'utilisateur à entrer une valeur n >= 5, quelle boucle est la plus adaptée en pseudo-code Bac ?",
    "options": [
      "Pour i de 1 à n Faire",
      "Répéter ... Jusqu'à (n >= 5)",
      "Si (n < 5) Alors ... Fin Si",
      "Tant que (n >= 5) Faire"
    ],
    "answer": 1,
    "explanation": "La boucle Répéter ... Jusqu'à s'exécute au moins une fois (pour lire n), puis répète la lecture tant que la condition d'arrêt (n >= 5) n'est pas satisfaite.",
    "links": {
      "methodSheet": "avant-de-rendre",
      "exerciseType": "tdo-tdnt"
    },
    "section": "structures-controle"
  },
  {
    "id": "quiz-rap-02",
    "chapter": "rappels",
    "type": "vf",
    "level": "base",
    "question": "En pseudo-code Bac, une Fonction peut retourner plusieurs valeurs directement via son type de retour, sans utiliser de paramètres passés par variable (@).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "explanation": "Faux : Une Fonction retourne obligatoirement une seule valeur (de type simple). Pour renvoyer plusieurs résultats, on utilise une Procédure avec des paramètres passés par variable (@).",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "sous-programmes"
  },
  {
    "id": "quiz-rap-03",
    "chapter": "rappels",
    "type": "trace",
    "level": "moyen",
    "question": "Quelle valeur est affichée après l'appel suivant ?\nProcédure Maj(@x : Entier ; y : Entier)\nDébut\n  x <- x + 10\n  y <- y + 10\nFin\nProgramme principal : a <- 5 ; b <- 5 ; Maj(a, b) ; Ecrire(a + b)",
    "options": [
      "10",
      "20",
      "30",
      "15"
    ],
    "answer": "20",
    "explanation": "Le paramètre x est passé par variable (@x) : a devient 5 + 10 = 15. Le paramètre y est passé par valeur : b reste inchangé (5). Ainsi a + b = 15 + 5 = 20.",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "fonction-inconnue"
    },
    "section": "sous-programmes"
  },
  {
    "id": "quiz-rap-04",
    "chapter": "rappels",
    "type": "qcm",
    "level": "base",
    "question": "Quel symbole place-t-on dans l'entête d'une procédure en pseudo-code Bac pour indiquer un passage de paramètre par variable (adresse) ?",
    "options": [
      "#",
      "@",
      "&",
      "$"
    ],
    "answer": 1,
    "explanation": "Au Bac Tunisie, le préfixe @ devant un paramètre formel d'une procédure indique que toute modification faite dans la procédure modifie la variable d'origine.",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "sous-programmes"
  },
  {
    "id": "quiz-rap-05",
    "chapter": "rappels",
    "type": "qcm",
    "level": "moyen",
    "question": "Où doit-on déclarer un type Tableau personnalisé (ex : Tab = Tableau de 50 Entiers) selon les conventions officielles ?",
    "options": [
      "Dans le T.D.O local uniquement",
      "Dans le T.D.N.T (Tableau de Déclaration des Nouveaux Types)",
      "Dans la ligne Résultat",
      "Dans le bloc Début..Fin"
    ],
    "answer": 1,
    "explanation": "Tout type composé (Tableau, Matrice, Enregistrement, Fichier) doit d'abord être nommé et défini dans le T.D.N.T avant d'être utilisé dans un T.D.O.",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "tdo-tdnt"
  },
  {
    "id": "quiz-rap-06",
    "chapter": "rappels",
    "type": "trace",
    "level": "moyen",
    "question": "Que vaut la variable S à la fin de cet algorithme ?\nS <- 0\nPour i de 1 à 5 Faire\n  Si (i mod 2 = 0) Alors S <- S + i Fin Si\nFin Pour",
    "options": [
      "6",
      "9",
      "15",
      "4"
    ],
    "answer": "6",
    "explanation": "Pour i dans {1, 2, 3, 4, 5}, seuls les entiers pairs i = 2 et i = 4 vérifient (i mod 2 = 0). S vaut donc 2 + 4 = 6.",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "fonction-inconnue"
    },
    "section": "structures-controle"
  },
  {
    "id": "quiz-rap-07",
    "chapter": "rappels",
    "type": "vf",
    "level": "moyen",
    "question": "À l'intérieur d'une boucle 'Pour i de 1 à n Faire', il est recommandé de modifier la valeur de i avec 'i <- i + 2' pour sauter des éléments.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "explanation": "Faux : Modifier le compteur d'une boucle Pour est interdit en algorithmique structurée Bac. Si le pas ou l'avancement varie, il faut utiliser 'Tant que'.",
    "links": {
      "methodSheet": "avant-de-rendre",
      "exerciseType": "corriger-erreurs"
    },
    "section": "structures-controle"
  },
  {
    "id": "quiz-rap-08",
    "chapter": "rappels",
    "type": "qcm",
    "level": "bac",
    "question": "Que renvoie l'expression Sous_Chaîne(\"ALGORITHME\", 0, 4) selon la convention algorithmique tunisienne (indexation à partir de 0, borne finale exclue) ?",
    "options": [
      "\"ALGO\"",
      "\"ALGOR\"",
      "\"LGOR\"",
      "\"ALG\""
    ],
    "answer": 0,
    "explanation": "En algorithmique Bac (Tunisie), les chaînes sont indexées à partir de 0 et Sous_Chaîne(ch, d, f) extrait de l'indice d jusqu'à f - 1 (ici indices 0 à 3 : \"ALGO\").",
    "links": {
      "methodSheet": "fonctions-predefinies",
      "exerciseType": "tableaux-tris"
    },
    "section": "structures-controle"
  },
  {
    "id": "quiz-rap-09",
    "chapter": "rappels",
    "type": "qcm",
    "level": "moyen",
    "question": "Dans la syntaxe 'Si cond Alors ... Fin Si', que contient la dernière colonne d'un T.D.O ?",
    "options": [
      "Type / Nature",
      "Valeur initiale",
      "Portée (Local / Global)",
      "Rôle de l'objet"
    ],
    "answer": 3,
    "explanation": "En Terminale Info (Tunisie), un T.D.O comporte 3 colonnes : Objet, Type/Nature (Entier, Réel, Fonction, Procédure...) et Rôle.",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "tdo-tdnt"
  },
  {
    "id": "quiz-rap-10",
    "chapter": "rappels",
    "type": "trace",
    "level": "bac",
    "question": "Combien de fois la boucle suivante s'exécute-t-elle ?\nk <- 20\nTant que (k > 5) Faire\n  k <- k div 2\nFin Tant que",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2",
    "explanation": "Au départ k = 20 (> 5) : itération 1 -> k = 20 div 2 = 10 (> 5) : itération 2 -> k = 10 div 2 = 5. Maintenant k > 5 (5 > 5) est faux, la boucle s'arrête après 2 itérations.",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "fonction-inconnue"
    },
    "section": "structures-controle"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_RAPPELS;
}
