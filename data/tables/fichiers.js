// data/tables/fichiers.js — Tables d'instructions : Chapitre 1 (Fichiers binaires & texte)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['fichiers'] = [
    {
      id: 'fichiers-table-a',
      title: 'Table A — Fichier texte (.txt)',
      topic: 'Opérations primitives sur fichiers texte séquentiels',
      rows: [
        {
          instruction: 'Associer',
          role: 'Relier la variable fichier logique au nom physique sur disque',
          pseudo: "Associer(f, 'donnees.txt')",
          python: "chemin = 'donnees.txt'"
        },
        {
          instruction: 'Ouvrir en écriture ("E" / "w")',
          role: 'Créer un nouveau fichier texte ou écraser le contenu s\'il existe déjà',
          pseudo: "Ouvrir(f, 'donnees.txt', 'E')",
          python: "f = open('donnees.txt', 'w', encoding='utf-8')"
        },
        {
          instruction: 'Ouvrir en lecture ("L" / "r")',
          role: 'Ouvrir un fichier texte existant pour lecture séquentielle',
          pseudo: "Ouvrir(f, 'donnees.txt', 'L')",
          python: "f = open('donnees.txt', 'r', encoding='utf-8')"
        },
        {
          instruction: 'Ouvrir en ajout ("A" / "a")',
          role: 'Ouvrir un fichier pour ajouter des données à la fin sans effacer le contenu',
          pseudo: "Ouvrir(f, 'donnees.txt', 'A')",
          python: "f = open('donnees.txt', 'a', encoding='utf-8')"
        },
        {
          instruction: 'Lire_ligne',
          role: 'Lire une ligne de texte complète depuis le fichier',
          pseudo: "Lire_ligne(f, ch)",
          python: "ch = f.readline().rstrip('\\n')"
        },
        {
          instruction: 'Ecrire_nl',
          role: 'Écrire une chaîne de caractères suivie d\'un retour à la ligne',
          pseudo: "Ecrire_nl(f, ch)",
          python: "f.write(ch + '\\n')"
        },
        {
          instruction: 'Fin_Fichier',
          role: 'Tester si la fin du fichier texte est atteinte (plus de ligne à lire)',
          pseudo: "Tant que NON Fin_Fichier(f) Faire",
          python: "while True:\n    line = f.readline()\n    if not line: break"
        },
        {
          instruction: 'Fermer',
          role: 'Fermer impérativement le fichier pour vider les tampons et libérer la ressource',
          pseudo: "Fermer(f)",
          python: "f.close()  # ou utiliser with open(...) as f:"
        }
      ]
    },
    {
      id: 'fichiers-table-b',
      title: 'Table B — Fichier binaire (.dat)',
      topic: 'Opérations primitives sur fichiers d\'enregistrements avec pickle',
      rows: [
        {
          instruction: 'Associer & Ouvrir en écriture binaire',
          role: 'Créer un nouveau fichier binaire ou réinitialiser un fichier d\'enregistrements',
          pseudo: "Associer(f, 'eleves.dat')\nOuvrir(f, 'eleves.dat', 'E')",
          python: "f = open('eleves.dat', 'wb')"
        },
        {
          instruction: 'Associer & Ouvrir en lecture binaire',
          role: 'Ouvrir un fichier binaire existant pour lecture séquentielle d\'enregistrements',
          pseudo: "Associer(f, 'eleves.dat')\nOuvrir(f, 'eleves.dat', 'L')",
          python: "f = open('eleves.dat', 'rb')"
        },
        {
          instruction: 'Ecrire (binaire / pickle.dump)',
          role: 'Sérialiser un enregistrement (ou objet structuré) dans le fichier binaire',
          pseudo: "Ecrire(f, e)",
          python: "pickle.dump(e, f)"
        },
        {
          instruction: 'Lire (binaire / pickle.load)',
          role: 'Désérialiser l\'enregistrement suivant depuis le flux binaire',
          pseudo: "Lire(f, e)",
          python: "e = pickle.load(f)"
        },
        {
          instruction: 'Fin_Fichier (EOF)',
          role: 'Détecter la fin de fichier binaire (levée d\'exception EOFError sous Python)',
          pseudo: "Tant que NON Fin_Fichier(f) Faire\n  Lire(f, e)\n  Traiter(e)",
          python: "try:\n    while True:\n        e = pickle.load(f)\n        traiter(e)\nexcept EOFError:\n    pass"
        },
        {
          instruction: 'Fermer (binaire)',
          role: 'Fermer le fichier binaire après écriture ou lecture',
          pseudo: "Fermer(f)",
          python: "f.close()"
        }
      ]
    },
    {
      id: 'fichiers-table-c',
      title: 'Table C — Texte vs Binaire',
      topic: 'Comparaison directe des caractéristiques des deux types de fichiers',
      rows: [
        {
          instruction: 'Format de stockage',
          role: 'Chaînes lisibles par un éditeur texte vs flux d\'octets sérialisés',
          pseudo: "Fichier de Texte (.txt)",
          python: "Fichier Binaire (.dat) via pickle"
        },
        {
          instruction: 'Type des données',
          role: 'Uniquement des caractères (lignes) vs objets structurés (Enregistrement)',
          pseudo: "Chaque élément lu est une Chaîne",
          python: "Chaque élément est un Enregistrement (dict / classe)"
        },
        {
          instruction: 'Modes d\'ouverture',
          role: 'Mode texte standard vs mode binaire avec préfixe "b"',
          pseudo: "'L' (Lecture), 'E' (Écriture), 'A' (Ajout)",
          python: "'r', 'w', 'a' (texte) vs 'rb', 'wb', 'ab' (binaire)"
        },
        {
          instruction: 'Module requis',
          role: 'Aucun module sous Python vs import du module pickle obligatoire',
          pseudo: "Primitives natives de base",
          python: "import pickle"
        },
        {
          instruction: 'Détection de Fin de Fichier',
          role: 'Ligne vide en lecture séquentielle vs levée de l\'exception EOFError',
          pseudo: "Condition Fin_Fichier(f) = Vrai",
          python: "try: ... except EOFError:"
        }
      ]
    },
    {
      id: 'fichiers-table-d',
      title: 'Table D — Modèles d\'exercices types',
      topic: 'Algorithmes canoniques de manipulation de fichiers récurrents au Bac',
      rows: [
        {
          instruction: 'Création & Remplissage d\'un fichier texte',
          role: 'Saisir des lignes au clavier et les écrire jusqu\'à une condition d\'arrêt',
          pseudo: "Ouvrir(f, nom, 'E')\nRépéter\n  Saisir(ch)\n  Si ch <> 'FIN' Alors Ecrire_nl(f, ch)\nJusqu'à (ch = 'FIN')\nFermer(f)",
          python: "with open(nom, 'w', encoding='utf-8') as f:\n    while True:\n        ch = input('Ligne : ')\n        if ch == 'FIN': break\n        f.write(ch + '\\n')"
        },
        {
          instruction: 'Parcours & Affichage d\'un fichier binaire',
          role: 'Lire tous les enregistrements un à un et afficher les champs requis',
          pseudo: "Ouvrir(f, nom, 'L')\nTant que NON Fin_Fichier(f) Faire\n  Lire(f, e)\n  Ecrire('Élève :', e.nom, e.moyenne)\nFermer(f)",
          python: "with open(nom, 'rb') as f:\n    try:\n        while True:\n            e = pickle.load(f)\n            print(e['nom'], e['moyenne'])\n    except EOFError:\n        pass"
        },
        {
          instruction: 'Transfert Fichier ➔ Tableau',
          role: 'Charger les données du fichier en mémoire dans un vecteur pour traitement rapide',
          pseudo: "i <-- 0\nOuvrir(f, nom, 'L')\nTant que NON Fin_Fichier(f) Faire\n  Lire(f, t[i])\n  i <-- i + 1\nFermer(f)\nn <-- i",
          python: "t = []\nwith open(nom, 'rb') as f:\n    try:\n        while True:\n            t.append(pickle.load(f))\n    except EOFError:\n        pass\nn = len(t)"
        },
        {
          instruction: 'Recherche avec arrêt prématuré',
          role: 'Parcourir le fichier jusqu\'à trouver l\'élément ou atteindre la fin',
          pseudo: "trouve <-- Faux\nOuvrir(f, nom, 'L')\nTant que (NON Fin_Fichier(f)) et (NON trouve) Faire\n  Lire(f, e)\n  Si e.id = cible Alors trouve <-- Vrai\nFermer(f)",
          python: "trouve = False\nwith open(nom, 'rb') as f:\n    try:\n        while not trouve:\n            e = pickle.load(f)\n            if e['id'] == cible: trouve = True\n    except EOFError:\n        pass"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['fichiers'];
  }
})(typeof window !== 'undefined' ? window : global);
