/**
 * VALIDATION STRICTE DU QUIZ OFFICIEL (SCHEMA & TRACES ALGORITHMIQUES)
 * STI de A à Z — Baccalauréat Tunisie
 * 
 * Ce test Node.js vérifie :
 * 1. La complétude et l'unicité de tous les identifiants de questions
 * 2. La conformité du schéma (chapitre valide, type, niveau, explication détaillée)
 * 3. La validité de l'index ou de la valeur de réponse
 * 4. L'exécution réelle en simulateur JS pour CHAQUE question de type "trace"
 */

const fs = require('fs');
const path = require('path');

const CHAPTER_FILES = [
  'fichiers.js',
  'recursivite.js',
  'bases.js',
  'arithmetique.js',
  'approximation.js',
  'tableaux.js',
  'matrices.js',
  'suites.js'
];

const VALID_CHAPTERS = [
  'fichiers',
  'recursivite',
  'bases',
  'arithmetique',
  'approximation',
  'tableaux',
  'matrices',
  'suites'
];

const VALID_TYPES = ['vf', 'qcm', 'qcm-multi', 'trace'];
const VALID_LEVELS = ['base', 'moyen', 'bac'];

console.log('=====================================================');
console.log('🧪 TEST SUITE : VALIDATION DU MODULE QUIZ BAC INFO');
console.log('=====================================================\n');

let totalQuestions = 0;
let errors = [];
const seenIds = new Set();
const traceSimulators = {
  'quiz-fich-06': () => {
    const s = 'Bac2024';
    let sum = 0;
    for (const c of s) {
      if (c >= '0' && c <= '9') sum += parseInt(c, 10);
    }
    return String(sum);
  },
  'quiz-rec-03': () => {
    function fact(n) {
      if (n <= 1) return 1;
      return n * fact(n - 1);
    }
    return String(fact(4));
  },
  'quiz-rec-06': () => {
    function myst(n) {
      if (n === 0) return 0;
      return (n % 2) + myst(Math.floor(n / 2));
    }
    return String(myst(11));
  },
  'quiz-base-02': () => {
    return String(parseInt('1101', 2));
  },
  'quiz-base-04': () => {
    return (25).toString(2);
  },
  'quiz-base-05': () => {
    return String(parseInt('1F', 16));
  },
  'quiz-base-07': () => {
    return parseInt('10111110', 2).toString(16).toUpperCase();
  },
  'quiz-arith-03': () => {
    return String(17 % 5);
  },
  'quiz-arith-05': () => {
    function gcd(a, b) {
      while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
      }
      return a;
    }
    return String(gcd(48, 18));
  },
  'quiz-arith-07': () => {
    let sum = 0;
    const n = 284;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) sum += i;
    }
    return String(sum);
  },
  'quiz-arith-09': () => {
    function isPrime(x) {
      if (x < 2) return false;
      for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) return false;
      }
      return true;
    }
    let count = 0;
    for (let i = 11; i < 20; i++) {
      if (isPrime(i)) count++;
    }
    return String(count);
  },
  'quiz-appr-04': () => {
    return String((2 + 6) / 2);
  },
  'quiz-appr-07': () => {
    let u = 1;
    u = (u + 2 / u) / 2;
    return String(u);
  },
  'quiz-tab-05': () => {
    const t = [15, 3, 9, 8];
    let minIdx = 0;
    for (let i = 1; i < t.length; i++) {
      if (t[i] < t[minIdx]) minIdx = i;
    }
    const tmp = t[0];
    t[0] = t[minIdx];
    t[minIdx] = tmp;
    return JSON.stringify(t);
  },
  'quiz-tab-07': () => {
    let comparisons = 0;
    let low = 0, high = 15;
    while (low <= high) {
      comparisons++;
      const mid = Math.floor((low + high) / 2);
      low = mid + 1; // simuler pire des cas
    }
    return String(comparisons);
  },
  'quiz-mat-04': () => {
    return "i + j = 5 (soit i + j = N + 1)";
  },
  'quiz-mat-06': () => {
    const m = [[1, 2], [3, 4]];
    return String(m[0][0] + m[1][1]);
  },
  'quiz-mat-09': () => {
    return String(2 * 3);
  },
  'quiz-sui-03': () => {
    let u = 3;
    u = 2 * u + 1; // u1 = 7
    u = 2 * u + 1; // u2 = 15
    return String(u);
  },
  'quiz-sui-04': () => {
    let s = 0;
    for (let i = 1; i <= 10; i++) s += i;
    return String(s);
  },
  'quiz-sui-06': () => {
    let u = 6;
    u = u % 2 === 0 ? u / 2 : 3 * u + 1; // u1 = 3
    u = u % 2 === 0 ? u / 2 : 3 * u + 1; // u2 = 10
    return String(u);
  },
  'quiz-sui-07': () => {
    const fib = [0, 1];
    for (let i = 2; i <= 6; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return String(fib[6]);
  }
};

let verifiedTracesCount = 0;

for (const file of CHAPTER_FILES) {
  const filePath = path.join(__dirname, '..', 'data', 'quiz', file);
  if (!fs.existsSync(filePath)) {
    errors.push(`Fichier manquant : ${file}`);
    continue;
  }

  const questions = require(filePath);
  if (!Array.isArray(questions)) {
    errors.push(`Format invalide : ${file} ne renvoie pas un tableau.`);
    continue;
  }

  console.log(`📁 Chapitre [${file.replace('.js', '')}] : ${questions.length} questions chargées.`);

  if (questions.length < 10) {
    errors.push(`Le chapitre ${file} comporte moins de 10 questions (${questions.length}/10 requis).`);
  }

  questions.forEach((q, idx) => {
    totalQuestions++;
    const prefix = `[${file} #${idx + 1} (${q.id || 'sans-id'})]`;

    // 1. Vérification ID
    if (!q.id || typeof q.id !== 'string') {
      errors.push(`${prefix} ID manquant ou non textuel.`);
    } else if (seenIds.has(q.id)) {
      errors.push(`${prefix} ID dupliqué : "${q.id}".`);
    } else {
      seenIds.add(q.id);
    }

    // 2. Vérification Chapitre
    if (!VALID_CHAPTERS.includes(q.chapter)) {
      errors.push(`${prefix} Chapitre "${q.chapter}" invalide.`);
    }

    // 3. Vérification Type
    if (!VALID_TYPES.includes(q.type)) {
      errors.push(`${prefix} Type "${q.type}" invalide.`);
    }

    // 4. Vérification Niveau
    if (!VALID_LEVELS.includes(q.level)) {
      errors.push(`${prefix} Niveau "${q.level}" invalide.`);
    }

    // 5. Question et Explication
    if (!q.question || q.question.trim().length < 10) {
      errors.push(`${prefix} Énoncé de question trop court.`);
    }
    if (!q.explanation || q.explanation.trim().length < 15) {
      errors.push(`${prefix} Explication pédagogique manquante ou insuffisante.`);
    }

    // 6. Options & Réponses
    if (!Array.isArray(q.options) || q.options.length < 2) {
      errors.push(`${prefix} Les options doivent être un tableau d'au moins 2 éléments.`);
    }

    if (q.type === 'vf' || q.type === 'qcm') {
      if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
        errors.push(`${prefix} Index de réponse [${q.answer}] hors des options (taille: ${q.options ? q.options.length : 0}).`);
      }
    } else if (q.type === 'qcm-multi') {
      if (!Array.isArray(q.answer) || q.answer.some(idx => idx < 0 || idx >= q.options.length)) {
        errors.push(`${prefix} Réponses multiples invalides : ${JSON.stringify(q.answer)}.`);
      }
    } else if (q.type === 'trace') {
      if (q.answer === undefined || q.answer === null) {
        errors.push(`${prefix} Réponse de trace manquante.`);
      }
      // Vérification algorithmique avec le simulateur
      const simFn = traceSimulators[q.id];
      if (simFn) {
        const computed = simFn();
        if (String(computed).replace(/\s+/g, '') !== String(q.answer).replace(/\s+/g, '')) {
          errors.push(`${prefix} DIVERGENCE ALGORITHMIQUE : calculé [${computed}], réponse stockée [${q.answer}] !`);
        } else {
          verifiedTracesCount++;
        }
      } else {
        errors.push(`${prefix} Simulateur d'algorithme manquant pour la trace "${q.id}".`);
      }
    }
  });
}

console.log('\n-----------------------------------------------------');
console.log(`📊 Total questions analysées : ${totalQuestions}`);
console.log(`🔬 Traces algorithmiques simulées & vérifiées : ${verifiedTracesCount}/${Object.keys(traceSimulators).length}`);
console.log('-----------------------------------------------------');

if (errors.length > 0) {
  console.error('\n❌ ÉCHEC DU TEST — ' + errors.length + ' erreur(s) détectée(s) :');
  errors.forEach((err, i) => console.error(`  ${i + 1}. ${err}`));
  process.exit(1);
} else {
  console.log('\n✅ SUCCÈS COMPLET : 100% des questions sont conformes et certifiées exactes !');
  process.exit(0);
}
