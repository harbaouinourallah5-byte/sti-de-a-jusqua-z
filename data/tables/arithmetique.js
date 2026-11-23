// data/tables/arithmetique.js — Tables d'instructions : Chapitre 4 (Arithmétique)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['arithmetique'] = [
    {
      id: 'arithmetique-primalite',
      title: 'Table — Primalité & Diviseurs',
      topic: 'Test de primalité optimisé et recherche de diviseurs',
      rows: [
        {
          instruction: 'Test de primalité optimisé',
          role: 'Vérifier si un entier n >= 2 est premier en testant jusqu\'à racine carrée de n',
          pseudo: "0) Fonction Premier(n: Entier): Booléen\n1) Si n < 2 Alors Retourner Faux\n   Si (n = 2) ou (n = 3) Alors Retourner Vrai\n   Si (n mod 2 = 0) ou (n mod 3 = 0) Alors Retourner Faux\n   i <-- 5\n   Tant que (i * i <= n) et (n mod i <> 0) et (n mod (i + 2) <> 0) Faire\n     i <-- i + 6\n   Fin Tant que\n   Retourner (i * i > n)\n2) Fin",
          python: "def premier(n):\n    if n < 2: return False\n    if n in (2, 3): return True\n    if n % 2 == 0 or n % 3 == 0: return False\n    i = 5\n    while i * i <= n:\n        if n % i == 0 or n % (i + 2) == 0: return False\n        i += 6\n    return True"
        },
        {
          instruction: 'Somme des diviseurs stricts',
          role: 'Additionner tous les diviseurs stricts d\'un entier pour tester s\'il est parfait/ami',
          pseudo: "somme <-- 1\nPour i de 2 à (n div 2) Faire\n  Si n mod i = 0 Alors somme <-- somme + i",
          python: "somme = sum(i for i in range(1, n // 2 + 1) if n % i == 0)"
        }
      ]
    },
    {
      id: 'arithmetique-pgcd-ppcm',
      title: 'Table — PGCD & PPCM',
      topic: 'Algorithme d\'Euclide et relation fondamentale de divisibilité',
      rows: [
        {
          instruction: 'PGCD (Algorithme d\'Euclide par modulos)',
          role: 'Calcul rapide du plus grand commun diviseur par restes successifs',
          pseudo: "Tant que b <> 0 Faire\n  r <-- a mod b\n  a <-- b\n  b <-- r\nFin Tant que\npgcd <-- a",
          python: "while b != 0:\n    a, b = b, a % b\npgcd = a"
        },
        {
          instruction: 'PGCD (Méthode des soustractions)',
          role: 'Calcul du PGCD par soustractions répétées (conforme sujets historiques)',
          pseudo: "Tant que a <> b Faire\n  Si a > b Alors a <-- a - b\n  Sinon b <-- b - a\nFin Tant que\npgcd <-- a",
          python: "while a != b:\n    if a > b: a -= b\n    else: b -= a\npgcd = a"
        },
        {
          instruction: 'PPCM (Plus Petit Commun Multiple)',
          role: 'Calcul du PPCM via la relation fondamentale PPCM(a, b) = (a * b) DIV PGCD(a, b)',
          pseudo: "ppcm <-- (a * b) div PGCD(a, b)",
          python: "ppcm = (a * b) // pgcd(a, b)"
        }
      ]
    },
    {
      id: 'arithmetique-puissances',
      title: 'Table — Factorielle & Puissances',
      topic: 'Calculs itératifs de factorielles et puissances',
      rows: [
        {
          instruction: 'Factorielle itérative (n!)',
          role: 'Calcul du produit cumulatif des entiers de 1 à n',
          pseudo: "f <-- 1\nPour i de 2 à n Faire\n  f <-- f * i",
          python: "f = 1\nfor i in range(2, n + 1):\n    f *= i"
        },
        {
          instruction: 'Puissance itérative (x^n pour n >= 0)',
          role: 'Calcul de x élevé à la puissance entière n par multiplications répétées',
          pseudo: "p <-- 1\nPour i de 1 à n Faire\n  p <-- p * x",
          python: "p = 1\nfor _ in range(n):\n    p *= x"
        },
        {
          instruction: 'Puissance exposant quelconque (entier relatif)',
          role: 'Calcul de x^n gérant les exposants négatifs via 1 / x^(-n)',
          pseudo: "Si n < 0 Alors Retourner 1 / Puiss(x, -n)\nSinon Retourner Puiss(x, n)",
          python: "def puiss_rel(x, n):\n    if n < 0: return 1.0 / puiss(x, -n)\n    return float(puiss(x, n))"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['arithmetique'];
  }
})(typeof window !== 'undefined' ? window : global);
