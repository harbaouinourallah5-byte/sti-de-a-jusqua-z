// data/tables/tableaux.js — Tables d'instructions : Chapitre 6 (Les Tableaux)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['tableaux'] = [
    {
      id: 'tableaux-remplissage',
      title: 'Table — Saisie & Remplissage de Tableaux',
      topic: 'Contrôles de saisie, remplissage conditionnel et unicité',
      rows: [
        {
          instruction: 'Contrôle de saisie de la taille (n)',
          role: 'Forcer l\'utilisateur à saisir une dimension valide (ex: 5 <= n <= 50)',
          pseudo: "Répéter\n  Ecrire('Donner n (5..50) : ')\n  Lire(n)\nJusqu'à (n >= 5 et n <= 50)",
          python: "n = 0\nwhile not (5 <= n <= 50):\n    n = int(input('Donner n (5..50) : '))"
        },
        {
          instruction: 'Remplissage avec condition sur chaque case',
          role: 'Contrôler individuellement chaque case saisie (ex: entier positif non nul)',
          pseudo: "Pour i de 0 à n-1 Faire\n  Répéter\n    Lire(t[i])\n  Jusqu'à (t[i] > 0)",
          python: "t = []\nfor i in range(n):\n    val = 0\n    while val <= 0:\n        val = int(input(f'T[{i}] : '))\n    t.append(val)"
        },
        {
          instruction: 'Remplissage avec éléments strictement distincts',
          role: 'Vérifier qu\'un élément n\'est pas déjà présent dans les cases précédentes avant de l\'ajouter',
          pseudo: "Pour i de 0 à n-1 Faire\n  Répéter\n    Lire(val)\n  Jusqu'à NON Existe(t, i, val)\n  t[i] <-- val",
          python: "t = []\nwhile len(t) < n:\n    val = int(input())\n    if val not in t:\n        t.append(val)"
        }
      ]
    },
    {
      id: 'tableaux-recherche',
      title: 'Table — Recherche Séquentielle & Dichotomique',
      topic: 'Recherche dans tableau quelconque vs tableau trié',
      rows: [
        {
          instruction: 'Recherche séquentielle',
          role: 'Parcourir élément par élément jusqu\'à trouver x ou atteindre la fin (O(n))',
          pseudo: "i <-- 0 ; pos <-- -1\nTant que (i < n) et (pos = -1) Faire\n  Si t[i] = x Alors pos <-- i\n  i <-- i + 1",
          python: "pos = -1\nfor i in range(len(t)):\n    if t[i] == x:\n        pos = i; break"
        },
        {
          instruction: 'Recherche dichotomique itérative',
          role: 'Recherche rapide par réduction de moitié sur tableau trié (O(log n))',
          pseudo: "deb <-- 0 ; fin <-- n - 1 ; pos <-- -1\nTant que (deb <= fin) et (pos = -1) Faire\n  mil <-- (deb + fin) div 2\n  Si t[mil] = x Alors pos <-- mil\n  Sinon Si t[mil] > x Alors fin <-- mil - 1\n  Sinon deb <-- mil + 1\nFin Tant que",
          python: "deb, fin, pos = 0, len(t) - 1, -1\nwhile deb <= fin and pos == -1:\n    mil = (deb + fin) // 2\n    if t[mil] == x: pos = mil\n    elif t[mil] > x: fin = mil - 1\n    else: deb = mil + 1"
        }
      ]
    },
    {
      id: 'tableaux-tris',
      title: 'Table — Tris fondamentaux (Bulles, Sélection, Insertion)',
      topic: 'Les 3 algorithmes de tri exigibles au Baccalauréat',
      rows: [
        {
          instruction: 'Tri à bulles optimisé (drapeau permut)',
          role: 'Permuter les éléments adjacents t[i] > t[i+1] et stopper dès qu\'aucun échange n\'a lieu',
          pseudo: "Répéter\n  permut <-- Faux\n  Pour i de 0 à n-2 Faire\n    Si t[i] > t[i+1] Alors\n      Permuter(t[i], t[i+1])\n      permut <-- Vrai\nJusqu'à (NON permut)",
          python: "while True:\n    permut = False\n    for i in range(len(t) - 1):\n        if t[i] > t[i + 1]:\n            t[i], t[i + 1] = t[i + 1], t[i]\n            permut = True\n    if not permut: break"
        },
        {
          instruction: 'Tri par sélection du minimum',
          role: 'Trouver le minimum dans le reste du tableau et le permuter avec la case courante t[i]',
          pseudo: "Pour i de 0 à n-2 Faire\n  min_pos <-- i\n  Pour j de i+1 à n-1 Faire\n    Si t[j] < t[min_pos] Alors min_pos <-- j\n  Si min_pos <> i Alors Permuter(t[i], t[min_pos])",
          python: "for i in range(len(t) - 1):\n    min_pos = i\n    for j in range(i + 1, len(t)):\n        if t[j] < t[min_pos]: min_pos = j\n    t[i], t[min_pos] = t[min_pos], t[i]"
        },
        {
          instruction: 'Tri par insertion',
          role: 'Insérer l\'élément courant t[i] dans la portion triée à gauche en décalant vers la droite',
          pseudo: "Pour i de 1 à n-1 Faire\n  aux <-- t[i] ; j <-- i\n  Tant que (j > 0) et (t[j-1] > aux) Faire\n    t[j] <-- t[j-1]\n    j <-- j - 1\n  t[j] <-- aux",
          python: "for i in range(1, len(t)):\n    aux, j = t[i], i\n    while j > 0 and t[j - 1] > aux:\n        t[j] = t[j - 1]\n        j -= 1\n    t[j] = aux"
        }
      ]
    },
    {
      id: 'tableaux-chaines',
      title: 'Table — Chaînes & Caractères',
      topic: 'Vérification de palindrome et contrôles de texte',
      rows: [
        {
          instruction: 'Test de palindrome itératif',
          role: 'Vérifier la symétrie des caractères entre deb et fin',
          pseudo: "i <-- 0 ; j <-- Long(ch) - 1 ; pal <-- Vrai\nTant que (i < j) et pal Faire\n  Si ch[i] <> ch[j] Alors pal <-- Faux\n  i <-- i + 1 ; j <-- j - 1",
          python: "pal = ch == ch[::-1]"
        },
        {
          instruction: 'Contrôle alphabétique strict',
          role: 'Vérifier que tous les caractères d\'une chaîne sont des lettres',
          pseudo: "ok <-- (Long(ch) > 0)\nPour i de 0 à Long(ch)-1 Faire\n  Si NON (Majus(ch[i]) dans ['A'..'Z']) Alors ok <-- Faux",
          python: "ok = ch.isalpha()"
        }
      ]
    },
    {
      id: 'tableaux-transformations',
      title: 'Table — Transformations & Inversions',
      topic: 'Opérations géométriques sur vecteurs',
      rows: [
        {
          instruction: 'Inversion des éléments sur place',
          role: 'Permuter symétriquement les cases t[i] et t[n-1-i] jusqu\'au milieu',
          pseudo: "Pour i de 0 à (n div 2) - 1 Faire\n  Permuter(t[i], t[n - 1 - i])",
          python: "t.reverse()"
        },
        {
          instruction: 'Décalage circulaire à gauche',
          role: 'Décaler toutes les cases vers la gauche et replacer la 1ère case à la fin',
          pseudo: "aux <-- t[0]\nPour i de 0 à n-2 Faire\n  t[i] <-- t[i + 1]\nt[n - 1] <-- aux",
          python: "t = t[1:] + [t[0]]"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['tableaux'];
  }
})(typeof window !== 'undefined' ? window : global);
