// data/tables/suites.js — Tables d'instructions : Chapitre 8 (Les Suites)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['suites'] = [
    {
      id: 'suites-classiques',
      title: 'Table — Suites Arithmétiques & Géométriques',
      topic: 'Formules directes et calcul itératif du terme général et de la somme',
      rows: [
        {
          instruction: 'Suite Arithmétique (Terme général)',
          role: 'Calcul direct du terme d\'indice n : U_n = U_0 + n * r',
          pseudo: "un <-- u0 + n * r",
          python: "un = u0 + n * r"
        },
        {
          instruction: 'Suite Arithmétique (Somme des n+1 termes)',
          role: 'Calcul de S = U_0 + ... + U_n = (n + 1) * (U_0 + U_n) / 2',
          pseudo: "somme <-- (n + 1) * (u0 + un) / 2",
          python: "somme = (n + 1) * (u0 + un) / 2.0"
        },
        {
          instruction: 'Suite Géométrique (Terme général)',
          role: 'Calcul direct du terme d\'indice n : U_n = U_0 * q^n',
          pseudo: "un <-- u0 * Puissance(q, n)",
          python: "un = u0 * (q ** n)"
        },
        {
          instruction: 'Suite Géométrique (Somme des n+1 termes)',
          role: 'Calcul de S = U_0 * (1 - q^(n+1)) / (1 - q) pour raison q <> 1',
          pseudo: "somme <-- u0 * (1 - Puissance(q, n + 1)) / (1 - q)",
          python: "somme = u0 * (1 - q ** (n + 1)) / (1 - q)"
        }
      ]
    },
    {
      id: 'suites-recurrentes',
      title: 'Table — Suites Récurrentes & Convergence',
      topic: 'Calcul itératif avec variables pivot et seuil de convergence epsilon',
      rows: [
        {
          instruction: 'Pivot récurrent d\'ordre 1 (U_{n+1} = f(U_n))',
          role: 'Mettre à jour la variable courante u à chaque tour de boucle',
          pseudo: "Pour i de 1 à n Faire\n  u <-- f(u)",
          python: "for _ in range(n):\n    u = f(u)"
        },
        {
          instruction: 'Pivot récurrent d\'ordre 2 (Suite de Fibonacci)',
          role: 'Faire pivoter deux termes consécutifs pour calculer le suivant',
          pseudo: "a <-- 0 ; b <-- 1\nPour i de 2 à n Faire\n  c <-- a + b\n  a <-- b\n  b <-- c",
          python: "a, b = 0, 1\nfor _ in range(2, n + 1):\n    a, b = b, a + b"
        },
        {
          instruction: 'Critère d\'arrêt de convergence (Epsilon)',
          role: 'Itérer jusqu\'à ce que la distance entre 2 termes consécutifs soit inférieure à eps',
          pseudo: "Répéter\n  u_prec <-- u\n  u <-- f(u_prec)\nJusqu'à Abs(u - u_prec) < eps",
          python: "while True:\n    u_prec = u\n    u = f(u_prec)\n    if abs(u - u_prec) < eps:\n        break"
        }
      ]
    },
    {
      id: 'suites-heron-syracuse',
      title: 'Table — Suites remarquables (Héron, Syracuse)',
      topic: 'Suites célèbres récurrentes au Baccalauréat',
      rows: [
        {
          instruction: 'Méthode de Héron (Approximation de racine de a)',
          role: 'Convergence ultra-rapide vers sqrt(a) : U_{n+1} = 0.5 * (U_n + a / U_n)',
          pseudo: "u <-- a / 2\nRépéter\n  u_prec <-- u\n  u <-- 0.5 * (u_prec + a / u_prec)\nJusqu'à Abs(u - u_prec) < eps",
          python: "u = a / 2.0\nwhile True:\n    u_prec = u\n    u = 0.5 * (u_prec + a / u_prec)\n    if abs(u - u_prec) < eps:\n        break"
        },
        {
          instruction: 'Suite de Syracuse (Temps de vol)',
          role: 'Calculer le nombre d\'itérations pour atteindre la valeur 1 selon parité',
          pseudo: "vol <-- 0\nTant que n <> 1 Faire\n  Si n mod 2 = 0 Alors n <-- n div 2\n  Sinon n <-- 3 * n + 1\n  vol <-- vol + 1",
          python: "vol = 0\nwhile n != 1:\n    n = n // 2 if n % 2 == 0 else 3 * n + 1\n    vol += 1"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['suites'];
  }
})(typeof window !== 'undefined' ? window : global);
