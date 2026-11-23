// data/tables/rappels.js — Tables d'instructions : Chapitre 0 (Rappels & Prérequis)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['rappels'] = [
    {
      id: 'rappels-structures',
      title: 'Table — Structures de contrôle (Conditionnelles & Boucles)',
      topic: 'Syntaxe canonique des structures de contrôle en pseudo-code et Python',
      rows: [
        {
          instruction: 'Conditionnelle simple',
          role: "Exécuter un bloc d'instructions seulement si la condition logique est vraie",
          pseudo: "Si condition Alors\n  instructions\nFin Si",
          python: "if condition:\n    instructions"
        },
        {
          instruction: 'Alternative complète',
          role: 'Choisir entre deux blocs exclusifs selon la valeur de la condition',
          pseudo: "Si condition Alors\n  bloc_vrai\nSinon\n  bloc_faux\nFin Si",
          python: "if condition:\n    bloc_vrai\nelse:\n    bloc_faux"
        },
        {
          instruction: 'Conditionnelle multi-branches',
          role: 'Aiguiller parmi plusieurs conditions exclusives ordonnées',
          pseudo: "Si cond1 Alors\n  bloc_1\nSinon Si cond2 Alors\n  bloc_2\nSinon\n  bloc_defaut\nFin Si",
          python: "if cond1:\n    bloc_1\nelif cond2:\n    bloc_2\nelse:\n    bloc_defaut"
        },
        {
          instruction: 'Boucle Pour',
          role: "Répéter un bloc un nombre fixé de fois avec variable d'itération (ordre croissant)",
          pseudo: "Pour i de 0 à n-1 [pas=1] Faire\n  instructions\nFin Pour",
          python: "for i in range(n):\n    instructions"
        },
        {
          instruction: 'Boucle Tant que',
          role: "Répéter tant qu'une condition préalable reste vraie (0 à k itérations)",
          pseudo: "Tant que condition Faire\n  instructions\nFin Tant que",
          python: "while condition:\n    instructions"
        },
        {
          instruction: 'Boucle Répéter ... Jusqu\'à',
          role: "Exécuter au moins une fois et répéter jusqu'à ce que la condition d'arrêt devienne vraie",
          pseudo: "Répéter\n  instructions\nJusqu'à condition_arret",
          python: "while True:\n    instructions\n    if condition_arret:\n        break"
        }
      ]
    },
    {
      id: 'rappels-sous-programmes',
      title: 'Table — Sous-programmes (Fonctions & Procédures)',
      topic: 'Déclaration, signature et passage de paramètres',
      rows: [
        {
          instruction: 'Fonction (valeur de retour)',
          role: 'Calcule et retourne obligatoirement une valeur unique de type simple',
          pseudo: "0) Fonction nom(p1: type1): type_retour\n1) Résultat <-- valeur\n2) Fin",
          python: "def nom(p1):\n    return valeur"
        },
        {
          instruction: 'Procédure (action / modification)',
          role: 'Exécute des actions (remplissage, affichage, tri) sans renvoyer de valeur',
          pseudo: "0) Procédure nom(p1: type1; VAR p2: type2)\n1) instructions\n2) Fin",
          python: "def nom(p1, p2):\n    # p2 modifié directement si muable\n    pass"
        },
        {
          instruction: 'Passage par valeur',
          role: "Paramètre en entrée seule : copie locale, la variable appelante reste inchangée",
          pseudo: "nom(x: entier)",
          python: "def nom(x):  # x est une copie locale pour types immuables"
        },
        {
          instruction: 'Passage par variable (VAR)',
          role: 'Paramètre en entrée/sortie : la modification est répercutée sur la variable d\'origine',
          pseudo: "nom(VAR x: entier)",
          python: "def nom(t):  # listes modifiées sur place (in-place)"
        }
      ]
    },
    {
      id: 'rappels-tdo-tdnt',
      title: 'Table — Conventions T.D.O & T.D.N.T',
      topic: 'Déclarations des variables et types personnalisés',
      rows: [
        {
          instruction: 'T.D.O Local (Fonction / Procédure)',
          role: 'Déclarer tous les objets internes au sous-programme (compteurs, auxiliaires)',
          pseudo: "Objet | Type | Rôle\ni, j  | Entier | Compteurs de boucle\naux   | Entier | Variable d'échange",
          python: "# Initialisation explicite dans la fonction\ni = j = aux = 0"
        },
        {
          instruction: 'T.D.O Global',
          role: 'Déclarer les variables principales utilisées dans le programme principal',
          pseudo: "Objet | Type | Rôle\nt     | Tab  | Tableau d'entiers\nn     | Entier | Taille effective du tableau",
          python: "# Variables de niveau module\nt = []\nn = 0"
        },
        {
          instruction: 'T.D.N.T (Nouveaux Types)',
          role: 'Déclarer les types personnalisés (tableaux de dimension fixée, enregistrements)',
          pseudo: "Type | Définition\nTab  = Tableau de 50 Entiers\nEtud = Enregistrement (nom: Chaîne; moy: Réel)",
          python: "# Structures Python : listes ou dictionnaires / classes\n# à valider avec ton professeur"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['rappels'];
  }
})(typeof window !== 'undefined' ? window : global);
