// data/tables/recursivite.js — Tables d'instructions : Chapitre 2 (Récursivité)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['recursivite'] = [
    {
      id: 'recursivite-bases',
      title: 'Table — Fondements de la Récursivité',
      topic: 'Composants obligatoires d\'une fonction récursive',
      rows: [
        {
          instruction: 'Cas de base (Condition d\'arrêt)',
          role: 'Cas trivial immédiatement résolu sans effectuer d\'appel récursif',
          pseudo: "Si n <= 1 Alors\n  Retourner 1",
          python: "if n <= 1:\n    return 1"
        },
        {
          instruction: 'Cas général (Étape récursive)',
          role: 'Appel récursif avec paramètre strictement plus proche du cas de base',
          pseudo: "Sinon\n  Retourner n * Fact(n - 1)",
          python: "else:\n    return n * fact(n - 1)"
        },
        {
          instruction: 'Pile d\'exécution (Mécanisme)',
          role: 'Empilement LIFO des contextes lors des appels, puis dépilement au retour',
          pseudo: "À valider avec ton professeur (tracé papier obligatoire)",
          python: "# Géré automatiquement par l'interpréteur Python"
        }
      ]
    },
    {
      id: 'recursivite-numerique',
      title: 'Table — Arithmétique & Calculs récursifs',
      topic: 'Algorithmes récursifs numériques classiques du Bac',
      rows: [
        {
          instruction: 'Factorielle récursive (n!)',
          role: 'Calcul récursif de la factorielle d\'un entier naturel',
          pseudo: "0) Fonction Fact(n: Entier): Entier\n1) Si n <= 1 Alors Retourner 1\n   Sinon Retourner n * Fact(n - 1)\n   Fin Si\n2) Fin",
          python: "def fact(n):\n    if n <= 1: return 1\n    return n * fact(n - 1)"
        },
        {
          instruction: 'PGCD récursif (Euclide)',
          role: 'Calcul du plus grand commun diviseur par récursivité terminale',
          pseudo: "0) Fonction PGCD(a, b: Entier): Entier\n1) Si b = 0 Alors Retourner a\n   Sinon Retourner PGCD(b, a mod b)\n   Fin Si\n2) Fin",
          python: "def pgcd(a, b):\n    if b == 0: return a\n    return pgcd(b, a % b)"
        },
        {
          instruction: 'Puissance récursive (x^n)',
          role: 'Calcul de x élevé à la puissance n (n >= 0)',
          pseudo: "0) Fonction Puiss(x: Réel, n: Entier): Réel\n1) Si n = 0 Alors Retourner 1\n   Sinon Retourner x * Puiss(x, n - 1)\n   Fin Si\n2) Fin",
          python: "def puiss(x, n):\n    if n == 0: return 1\n    return x * puiss(x, n - 1)"
        },
        {
          instruction: 'Somme des chiffres récursive',
          role: 'Additionner récursivement tous les chiffres d\'un entier positif',
          pseudo: "0) Fonction Somme_Chiffres(n: Entier): Entier\n1) Si n < 10 Alors Retourner n\n   Sinon Retourner (n mod 10) + Somme_Chiffres(n div 10)\n   Fin Si\n2) Fin",
          python: "def somme_chiffres(n):\n    if n < 10: return n\n    return (n % 10) + somme_chiffres(n // 10)"
        }
      ]
    },
    {
      id: 'recursivite-structures',
      title: 'Table — Chaînes & Tableaux récursifs',
      topic: 'Manipulation récursive de séquences indicées',
      rows: [
        {
          instruction: 'Palindrome récursif',
          role: 'Vérifier la symétrie d\'une chaîne ou sous-chaîne entre deb et fin',
          pseudo: "0) Fonction Pal_Rec(ch: Chaîne, deb, fin: Entier): Booléen\n1) Si deb >= fin Alors Retourner Vrai\n   Sinon Si ch[deb] <> ch[fin] Alors Retourner Faux\n   Sinon Retourner Pal_Rec(ch, deb + 1, fin - 1)\n   Fin Si\n2) Fin",
          python: "def pal_rec(ch, deb, fin):\n    if deb >= fin: return True\n    if ch[deb] != ch[fin]: return False\n    return pal_rec(ch, deb + 1, fin - 1)"
        },
        {
          instruction: 'Recherche dichotomique récursive',
          role: 'Localiser la valeur x dans un tableau trié entre les indices deb et fin',
          pseudo: "0) Fonction Dicho_Rec(t: Tab, deb, fin, x: Entier): Entier\n1) Si deb > fin Alors Retourner -1\n   Sinon\n     mil <-- (deb + fin) div 2\n     Si t[mil] = x Alors Retourner mil\n     Sinon Si t[mil] > x Alors Retourner Dicho_Rec(t, deb, mil - 1, x)\n     Sinon Retourner Dicho_Rec(t, mil + 1, fin, x)\n     Fin Si\n   Fin Si\n2) Fin",
          python: "def dicho_rec(t, deb, fin, x):\n    if deb > fin: return -1\n    mil = (deb + fin) // 2\n    if t[mil] == x: return mil\n    elif t[mil] > x: return dicho_rec(t, deb, mil - 1, x)\n    else: return dicho_rec(t, mil + 1, fin, x)"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['recursivite'];
  }
})(typeof window !== 'undefined' ? window : global);
