// data/tables/bases.js — Tables d'instructions : Chapitre 3 (Conversion entre les bases)
'use strict';

(function (root) {
  root.TABLES_DATA = root.TABLES_DATA || {};
  root.TABLES_DATA['bases'] = [
    {
      id: 'bases-puissances-2',
      title: 'Table — Conversions directes (Puissances de 2)',
      topic: 'Regroupement et éclatement de bits (Bases 2, 8 et 16)',
      rows: [
        {
          instruction: 'Binaire ➔ Octal (blocs de 3 bits)',
          role: 'Regrouper les bits par paquets de 3 depuis la droite et remplacer par le chiffre octal',
          pseudo: "bin2oct(ch)",
          python: "oct(int(ch, 2))[2:]"
        },
        {
          instruction: 'Octal ➔ Binaire (éclatement en 3 bits)',
          role: 'Remplacer chaque chiffre octal par son équivalent binaire sur 3 bits',
          pseudo: "octal2bin(ch)",
          python: "bin(int(ch, 8))[2:]"
        },
        {
          instruction: 'Binaire ➔ Hexadécimal (blocs de 4 bits)',
          role: 'Regrouper les bits par paquets de 4 depuis la droite et remplacer par le symbole hexa (0..9, A..F)',
          pseudo: "bin2hexa(ch)",
          python: "hex(int(ch, 2))[2:].upper()"
        },
        {
          instruction: 'Hexadécimal ➔ Binaire (éclatement en 4 bits)',
          role: 'Remplacer chaque symbole hexadécimal par son quartet de 4 bits',
          pseudo: "hex2bin(ch)",
          python: "bin(int(ch, 16))[2:]"
        }
      ]
    },
    {
      id: 'bases-conversions',
      title: 'Table — Décimal ↔ Base B',
      topic: 'Divisions successives et évaluation polynomiale',
      rows: [
        {
          instruction: 'Décimal ➔ Base B (divisions successives)',
          role: 'Diviser n par B successivement et concaténer les restes à gauche',
          pseudo: "res <-- ''\nTant que n > 0 Faire\n  r <-- n mod b\n  res <-- ConvCh(r) + res\n  n <-- n div b",
          python: "res = ''\nwhile n > 0:\n    r = n % b\n    res = (chr(r + 55) if r >= 10 else str(r)) + res\n    n //= b"
        },
        {
          instruction: 'Base B ➔ Décimal (somme pondérée)',
          role: 'Calculer la somme de chaque chiffre multiplié par B élevé à sa position (poids)',
          pseudo: "val <-- 0 ; p <-- 1\nPour i de Long(ch)-1 à 0 (pas=-1) Faire\n  chiffre <-- Valeur(ch[i])\n  val <-- val + chiffre * p\n  p <-- p * b",
          python: "val = 0\nfor c in ch:\n    chiffre = ord(c.upper()) - 55 if c.isalpha() else int(c)\n    val = val * b + chiffre"
        },
        {
          instruction: 'Conversion des restes >= 10 en caractères',
          role: 'Convertir 10..15 en lettres "A".."F" en utilisant Chr(reste + 55)',
          pseudo: "Si r >= 10 Alors car <-- Chr(r + 55)\nSinon car <-- ConvCh(r)",
          python: "car = chr(r + 55) if r >= 10 else str(r)"
        }
      ]
    },
    {
      id: 'bases-any2any',
      title: 'Table — Conversion Universelle (Base A ➔ Base B)',
      topic: 'Passage universel via le système décimal',
      rows: [
        {
          instruction: 'Base A ➔ Décimal ➔ Base B',
          role: 'Chaîner la conversion vers la base 10 puis vers la base de destination',
          pseudo: "0) Fonction any2any(ch: Chaîne, ba, bb: Entier): Chaîne\n1) dec <-- a2d(ch, ba)\n2) res <-- dec2any(dec, bb)\n3) Retourner res\n4) Fin",
          python: "def any2any(ch, ba, bb):\n    dec = a2d(ch, ba)\n    return dec2any(dec, bb)"
        }
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.TABLES_DATA['bases'];
  }
})(typeof window !== 'undefined' ? window : global);
