// data/quiz/fichiers.js — Quiz interactif conforme Baccalauréat
// Conforme aux épreuves officielles de l'algorithmique (Section Informatique)
'use strict';

var QUIZ_FICHIERS = [
  {
    "id": "quiz-fich-01",
    "chapter": "fichiers",
    "type": "vf",
    "level": "base",
    "question": "En pseudo-code conforme au Bac, l'instruction Ouvrir(F) permet de créer un nouveau fichier ou d'écraser un fichier existant pour y écrire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "explanation": "Faux : C'est Réécrire(F) qui crée ou écrase un fichier pour y écrire. Ouvrir(F) ouvre un fichier existant en mode lecture seule.",
    "links": {
      "methodSheet": "procedures-fichiers",
      "exerciseType": "fichiers"
    },
    "section": "fichiers-texte"
  },
  {
    "id": "quiz-fich-02",
    "chapter": "fichiers",
    "type": "qcm",
    "level": "base",
    "question": "Quelle instruction obligatoire doit TOUJOURS être appelée après avoir terminé les opérations de lecture ou d'écriture sur un fichier ?",
    "options": [
      "Libérer(F)",
      "Fermer(F)",
      "Effacer(F)",
      "Réinitialiser(F)"
    ],
    "answer": 1,
    "explanation": "Fermer(F) est indispensable pour valider l'enregistrement complet des données sur le disque et libérer les ressources système.",
    "links": {
      "methodSheet": "procedures-fichiers",
      "exerciseType": "fichiers"
    },
    "section": "fichiers-texte"
  },
  {
    "id": "quiz-fich-03",
    "chapter": "fichiers",
    "type": "qcm",
    "level": "moyen",
    "question": "Dans un fichier d'enregistrements (binaire typé), comment s'effectue la lecture d'un élément 'e' depuis le fichier 'F' ?",
    "options": [
      "Lire_Ligne(F, e)",
      "Lire(F, e)",
      "F.readline(e)",
      "Charger(F, e)"
    ],
    "answer": 1,
    "explanation": "En pseudo-code officiel Bac, Lire(F, e) lit un enregistrement complet typé depuis un fichier binaire. Lire_Ligne est réservé aux fichiers texte.",
    "links": {
      "methodSheet": "procedures-fichiers",
      "exerciseType": "fichiers"
    },
    "section": "fichiers-binaires"
  },
  {
    "id": "quiz-fich-04",
    "chapter": "fichiers",
    "type": "vf",
    "level": "moyen",
    "question": "La fonction Fin_fichier(F) renvoie Vrai dès que le pointeur de lecture atteint la fin du fichier, ce qui permet de stopper la boucle 'TantQue Non Fin_fichier(F) Faire'.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : Fin_fichier(F) est le prédicat officiel d'arrêt standard pour parcourir un fichier séquentiel jusqu'au bout.",
    "links": {
      "methodSheet": "procedures-fichiers",
      "exerciseType": "fichiers"
    },
    "section": "fichiers-binaires"
  },
  {
    "id": "quiz-fich-05",
    "chapter": "fichiers",
    "type": "qcm",
    "level": "moyen",
    "question": "En Python sous Thonny, quel module de la bibliothèque standard est officiellement utilisé pour manipuler des fichiers binaires d'enregistrements ou d'objets ?",
    "options": [
      "os",
      "pickle",
      "json",
      "sys"
    ],
    "answer": 1,
    "explanation": "Le module pickle (pickle.dump et pickle.load en modes 'wb' et 'rb') est la solution officielle au Bac pour sérialiser et désérialiser des objets dans des fichiers binaires.",
    "links": {
      "methodSheet": "procedures-fichiers"
    },
    "section": "fichiers-binaires"
  },
  {
    "id": "quiz-fich-06",
    "chapter": "fichiers",
    "type": "trace",
    "level": "bac",
    "question": "Quelle est la valeur numérique finale de 's' après exécution de l'algorithme suivant ?\ns <-- 0\nch <-- 'Bac2024'\nPour i de 1 à Longueur(ch) Faire\n  Si (ch[i] >= '0' Et ch[i] <= '9') Alors\n    s <-- s + Valeur(ch[i])\n  Fin Si\nFin Pour",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "answer": "8",
    "explanation": "Les chiffres de la chaîne sont '2', '0', '2', '4'. La somme accumulée dans s est : 2 + 0 + 2 + 4 = 8.",
    "links": {
      "methodSheet": "trace-execution",
      "exerciseType": "fonction-inconnue"
    },
    "section": "fichiers-transfert"
  },
  {
    "id": "quiz-fich-07",
    "chapter": "fichiers",
    "type": "qcm",
    "level": "bac",
    "question": "En Python, que se passe-t-il si l'on appelle 'pickle.load(f)' alors que le fichier est déjà arrivé à sa fin ?",
    "options": [
      "La fonction renvoie None",
      "Elle lève l'exception EOFError",
      "Elle renvoie une chaîne vide",
      "Elle redémarre au début du fichier"
    ],
    "answer": 1,
    "explanation": "pickle.load() lève l'exception EOFError (End Of File) lorsqu'il n'y a plus d'octets à lire, d'où la structure standard try...except EOFError: break.",
    "links": {
      "methodSheet": "procedures-fichiers"
    },
    "section": "fichiers-binaires"
  },
  {
    "id": "quiz-fich-08",
    "chapter": "fichiers",
    "type": "vf",
    "level": "bac",
    "question": "Dans le T.D.O d'un sous-programme manipulant un fichier local 'F', il est obligatoire de déclarer 'F' avec pour type le nom défini dans le T.D.N.T (ou 'Fichier Texte').",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "explanation": "Vrai : Toute variable fichier utilisée dans un sous-programme est un objet et doit obligatoirement figurer dans son T.D.O local.",
    "links": {
      "methodSheet": "tdo-tdnt",
      "exerciseType": "tdo-tdnt"
    },
    "section": "fichiers-transfert"
  },
  {
    "id": "quiz-fich-09",
    "chapter": "fichiers",
    "type": "qcm",
    "level": "moyen",
    "question": "Pour écrire une nouvelle ligne dans un fichier texte 'F' en pseudo-code officiel, quelle primitive utilise-t-on ?",
    "options": [
      "Écrire_Ligne(F, s)",
      "Ajouter_Texte(F, s)",
      "Inserer(F, s)",
      "Put(F, s)"
    ],
    "answer": 0,
    "explanation": "Écrire_Ligne(F, s) écrit la chaîne 's' suivie d'un saut de ligne dans le fichier texte désigné par 'F'.",
    "links": {
      "methodSheet": "procedures-fichiers",
      "exerciseType": "fichiers"
    },
    "section": "fichiers-texte"
  },
  {
    "id": "quiz-fich-10",
    "chapter": "fichiers",
    "type": "vf",
    "level": "base",
    "question": "L'instruction Associer(F, 'notes.txt') ouvre directement le fichier 'notes.txt' et commence la lecture des données.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "explanation": "Faux : Associer établit uniquement la liaison logique entre la variable F et le nom physique du fichier. Il faut ensuite appeler Ouvrir(F) ou Réécrire(F).",
    "links": {
      "methodSheet": "procedures-fichiers",
      "exerciseType": "fichiers"
    },
    "section": "fichiers-texte"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_FICHIERS;
}
