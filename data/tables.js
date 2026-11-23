// data/tables.js — Accès unifié aux tables d'instructions pour les 9 chapitres
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};

  root.TABLES_DATA.getTableById = function (tableId) {
    if (!tableId) return null;
    for (const chSlug in root.TABLES_DATA) {
      if (Array.isArray(root.TABLES_DATA[chSlug])) {
        const found = root.TABLES_DATA[chSlug].find(t => t.id === tableId);
        if (found) return found;
      }
    }
    return null;
  };

  root.TABLES_DATA.getTablesForChapter = function (chapterSlug) {
    if (!chapterSlug) return [];
    return root.TABLES_DATA[chapterSlug] || [];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA;
  }
})(typeof window !== 'undefined' ? window : global);
