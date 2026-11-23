// data/tables/approximation.js — Tables d'instructions : Chapitre 5 (Approximation & Optimisation)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['approximation'] = [
    {
      id: 'approximation-methodes',
      title: 'Table — Approximation d\'Aires & Intégration Numérique',
      topic: 'Méthodes des rectangles et des trapèzes sur [a, b] découpé en n tranches',
      rows: [
        {
          instruction: 'Pas de subdivision (h)',
          role: 'Largeur constante de chaque tranche découpée sur l\'intervalle [a, b]',
          pseudo: "h <-- (b - a) / n",
          python: "h = (b - a) / n"
        },
        {
          instruction: 'Méthode des rectangles (Point Milieu)',
          role: 'Approcher l\'aire en évaluant la fonction au centre de chaque intervalle [x_i, x_{i+1}]',
          pseudo: "somme <-- 0\nPour i de 0 à n-1 Faire\n  somme <-- somme + f(a + (i + 0.5) * h)\naire <-- h * somme",
          python: "aire = h * sum(f(a + (i + 0.5) * h) for i in range(n))"
        },
        {
          instruction: 'Méthode des rectangles (Point Gauche)',
          role: 'Approcher l\'aire en évaluant la fonction à la borne inférieure de chaque tranche',
          pseudo: "somme <-- 0\nPour i de 0 à n-1 Faire\n  somme <-- somme + f(a + i * h)\naire <-- h * somme",
          python: "aire = h * sum(f(a + i * h) for i in range(n))"
        },
        {
          instruction: 'Méthode des rectangles (Point Droit)',
          role: 'Approcher l\'aire en évaluant la fonction à la borne supérieure de chaque tranche',
          pseudo: "somme <-- 0\nPour i de 1 à n Faire\n  somme <-- somme + f(a + i * h)\naire <-- h * somme",
          python: "aire = h * sum(f(a + (i + 1) * h) for i in range(n))"
        },
        {
          instruction: 'Méthode des Trapèzes',
          role: 'Approcher chaque tranche par un trapèze : h * [(f(a) + f(b)) / 2 + somme intermédiaire]',
          pseudo: "somme <-- 0\nPour i de 1 à n-1 Faire\n  somme <-- somme + f(a + i * h)\naire <-- h * ((f(a) + f(b)) / 2 + somme)",
          python: "somme = sum(f(a + i * h) for i in range(1, n))\naire = h * ((f(a) + f(b)) / 2.0 + somme)"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['approximation'];
  }
})(typeof window !== 'undefined' ? window : global);
