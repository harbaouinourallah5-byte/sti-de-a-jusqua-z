// data/tables/matrices.js — Tables d'instructions : Chapitre 7 (Matrices & Tableaux 2D)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['matrices'] = [
    {
      id: 'matrices-bases',
      title: 'Table — Création & Initialisation de Matrices',
      topic: 'Déclaration T.D.N.T, boucle imbriquée et affichage tabulé',
      rows: [
        {
          instruction: 'Déclaration T.D.N.T d\'une Matrice',
          role: 'Définir un tableau à 2 dimensions (L lignes, C colonnes)',
          pseudo: "Mat = Tableau de 20, 20 Entiers",
          python: "M = [[0] * C for _ in range(L)]"
        },
        {
          instruction: 'Remplissage ligne par ligne',
          role: 'Saisir chaque cellule M[i, j] via une boucle Pour externe i et interne j',
          pseudo: "Pour i de 0 à L-1 Faire\n  Pour j de 0 à C-1 Faire\n    Lire(M[i, j])",
          python: "for i in range(L):\n    for j in range(C):\n        M[i][j] = int(input())"
        },
        {
          instruction: 'Affichage tabulé en grille',
          role: 'Afficher les éléments d\'une même ligne séparés par des espaces puis saut de ligne',
          pseudo: "Pour i de 0 à L-1 Faire\n  Pour j de 0 à C-1 Faire\n    Ecrire_sans_nl(M[i, j], ' ')\n  Ecrire_nl()",
          python: "for row in M:\n    print(*(f'{x:4d}' for x in row))"
        }
      ]
    },
    {
      id: 'matrices-parcours',
      title: 'Table — Parcours & Motifs géométriques',
      topic: 'Parcours lignes/colonnes, 5 zones stratégiques et motifs',
      rows: [
        {
          instruction: 'Parcours par colonnes',
          role: 'Boucle externe sur les colonnes j, boucle interne sur les lignes i',
          pseudo: "Pour j de 0 à C-1 Faire\n  Pour i de 0 à L-1 Faire\n    Traiter(M[i, j])",
          python: "for j in range(C):\n    for i in range(L):\n        traiter(M[i][j])"
        },
        {
          instruction: 'Parcours de bas en haut',
          role: 'Parcourir les lignes en ordre décroissant depuis la dernière vers la première',
          pseudo: "Pour i de L-1 à 0 (pas=-1) Faire\n  Pour j de 0 à C-1 Faire\n    Traiter(M[i, j])",
          python: "for i in range(L - 1, -1, -1):\n    for j in range(C):\n        traiter(M[i][j])"
        },
        {
          instruction: 'Motif du Sablier / Diagonales',
          role: 'Filtrer les cellules appartenant au motif supérieur et inférieur du sablier',
          pseudo: "Pour i de 0 à N-1 Faire\n  Pour j de 0 à N-1 Faire\n    Si ((i <= j) et (i + j <= N - 1)) ou ((i >= j) et (i + j >= N - 1)) Alors\n      Traiter(M[i, j])",
          python: "for i in range(N):\n    for j in range(N):\n        if (i <= j and i + j <= N - 1) or (i >= j and i + j >= N - 1):\n            traiter(M[i][j])"
        }
      ]
    },
    {
      id: 'matrices-diagonales',
      title: 'Table — Diagonales & Matrices Carrées',
      topic: 'Diagonale principale, diagonale secondaire et symétries',
      rows: [
        {
          instruction: 'Diagonale Principale',
          role: 'Cellules de coordonnées i = j dans une matrice carrée N x N',
          pseudo: "Pour i de 0 à N-1 Faire\n  Traiter(M[i, i])",
          python: "diag_p = [M[i][i] for i in range(N)]"
        },
        {
          instruction: 'Diagonale Secondaire',
          role: 'Cellules vérifiant la relation i + j = N - 1 (j = N - 1 - i)',
          pseudo: "Pour i de 0 à N-1 Faire\n  Traiter(M[i, N - 1 - i])",
          python: "diag_s = [M[i][N - 1 - i] for i in range(N)]"
        },
        {
          instruction: 'Test de Symétrie (M[i, j] = M[j, i])',
          role: 'Vérifier l\'égalité des cellules symétriques par rapport à la diagonale principale',
          pseudo: "sym <-- Vrai\nPour i de 0 à N-2 Faire\n  Pour j de i+1 à N-1 Faire\n    Si M[i, j] <> M[j, i] Alors sym <-- Faux",
          python: "sym = all(M[i][j] == M[j][i] for i in range(N) for j in range(i + 1, N))"
        }
      ]
    },
    {
      id: 'matrices-calculs',
      title: 'Table — Calculs, Tris & Point-Selle',
      topic: 'Statistiques sur lignes/colonnes et recherche d\'extrêmes',
      rows: [
        {
          instruction: 'Somme par Ligne (Vecteur des totaux)',
          role: 'Calculer la somme de chaque ligne et la stocker dans une case d\'un vecteur T',
          pseudo: "Pour i de 0 à L-1 Faire\n  s <-- 0\n  Pour j de 0 à C-1 Faire\n    s <-- s + M[i, j]\n  t[i] <-- s",
          python: "totaux = [sum(row) for row in M]"
        },
        {
          instruction: 'Transposée d\'une matrice',
          role: 'Construire la matrice transposée MT de taille C x L où MT[j, i] = M[i, j]',
          pseudo: "Pour i de 0 à L-1 Faire\n  Pour j de 0 à C-1 Faire\n    MT[j, i] <-- M[i, j]",
          python: "MT = [[M[i][j] for i in range(L)] for j in range(C)]"
        },
        {
          instruction: 'Recherche d\'un Point-Selle',
          role: 'Élément qui est le minimum sur sa ligne ET le maximum sur sa colonne',
          pseudo: "Pour i de 0 à L-1 Faire\n  j_min <-- 0\n  Pour j de 1 à C-1 Faire\n    Si M[i, j] < M[i, j_min] Alors j_min <-- j\n  # Vérifier si M[i, j_min] est le max de la colonne j_min\n  est_max <-- Vrai\n  Pour k de 0 à L-1 Faire\n    Si M[k, j_min] > M[i, j_min] Alors est_max <-- Faux\n  Si est_max Alors Ecrire('Point-selle :', M[i, j_min])",
          python: "# à valider avec ton professeur (selon énoncé spécifique)"
        }
      ]
    },
    {
      id: 'matrices-fichiers',
      title: 'Table — Matrices & Fichiers Binaires',
      topic: 'Sauvegarde et restitution de matrices avec pickle',
      rows: [
        {
          instruction: 'Enregistrer une matrice dans un fichier binaire',
          role: 'Sérialiser chaque ligne de la matrice ou l\'objet matrice complet',
          pseudo: "Ouvrir(f, 'mat.dat', 'E')\nPour i de 0 à L-1 Faire\n  Ecrire(f, M[i])\nFermer(f)",
          python: "with open('mat.dat', 'wb') as f:\n    pickle.dump(M, f)"
        },
        {
          instruction: 'Charger une matrice depuis un fichier binaire',
          role: 'Désérialiser et reconstituer la grille matricielle en mémoire',
          pseudo: "Ouvrir(f, 'mat.dat', 'L')\ni <-- 0\nTant que NON Fin_Fichier(f) Faire\n  Lire(f, M[i])\n  i <-- i + 1\nFermer(f)",
          python: "with open('mat.dat', 'rb') as f:\n    M = pickle.load(f)"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['matrices'];
  }
})(typeof window !== 'undefined' ? window : global);
