# 🎓 STI de A à Z - Portail de Révision Web (HTML5, CSS3, JavaScript)

Portail d'étude et de révision complet spécialement conçu selon le programme et les annexes officielles du **Baccalauréat STI & Informatique**.

---

## 🌟 Contenu du Portail :

### 1. 🌐 HTML5 (57 Notions & Tableau Officiel 3 Colonnes)
* **Structure identique à l'Annexe JS :** Réplique conforme en 3 colonnes de la feuille officielle d'examen avec onglets de bascule.
* **Système interactif de Boutons Radio (Variantes en direct) :**
  - `<input>` : choix en un clic du type (`text`, `password`, `email`, `number`, `date`, `range`, `checkbox`, `radio`, `submit`) avec actualisation animée instantanée du rendu et du code source.
  - `<h1>` à `<h6>` : bascule instantanée entre les niveaux de titre.
  - `<ul>` / `<ol>` : sélection des styles de puces (`disc`, `circle`, `square`, `1, 2, 3`, `A, B, C`, `I, II, III`).
  - `<details>` : test de l'état ouvert (`<details open>`) ou fermé.
  - `<form>` : choix de la méthode (`post` vs `get`).
  - `<a>` : choix de la cible (`_self` vs `_blank`).
* **Éléments de 1er niveau :** `<html>`, `<head>`, `<body>`.
* **Éléments d'en-tête :** `<link>`, `<meta>`, `<script>`, `<style>`, `<title>`.
* **Structuration :** `<header>`, `<nav>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<main>`.
* **Texte & Médias :** `<cite>`, `<p>`, `<source>`, `<h1> à <h6>`, `<hr>`, `<img>`, `<figure>`, `<figcaption>`, `<audio>`, `<video>`, `<a>`, `<br>`, `<address>`, `<output>`, `<mark>`, `<details>`, `<summary>`.
* **Conteneurs :** `<span>`, `<div>`, `<iframe>`.
* **Listes :** `<ul>`, `<ol>`, `<li>`.
* **Tableaux :** `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<caption>`, `<tr>`, `<th>`, `<td>`.
* **Formulaires :** `<form action="..." method="..." onsubmit="return validerFormulaire()">`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<textarea>`, `<select>`, `<datalist>`, `<option>`.
* **13 Événements détaillés individuellement :** `onclick`, `onmouseover`, `onmouseout`, `onfocus`, `onblur`, `oninput`, `onchange`, `onsubmit`, `onkeydown`, `onkeyup`, `onload`, `onplay`, `onpause`.
* **Attributs globaux :** `class`, `id`, `style`, `title`, `hidden`, `lang`.

### 2. 🎨 CSS3 (61 Propriétés & Tableau Officiel 3 Colonnes)
* **Structure identique à l'Annexe JS :** Réplique conforme en 3 colonnes de la feuille officielle avec onglets de bascule.
* **Système interactif de Boutons Radio (Animation des Variantes en direct) :**
  - `border-style` : boutons radio pour tester instantanément `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge` avec animation fluide de la boîte !
  - `border` : combinaisons prêtes (traits pleins cyan, pointillés jaunes, tirets rouges, double vert...).
  - `border-radius` : bascule entre bords carrés (`0px`), arrondis légers (`8px`), prononcés (`20px`) et cercles (`50%`).
  - `border-width` & `border-color` : choix d'épaisseurs (`thin`, `medium`, `thick`, `10px`) et de couleurs vives.
  - `text-align` : `left`, `center`, `right`, `justify`.
  - `text-transform` : `uppercase`, `lowercase`, `capitalize`, `none`.
  - `font-weight` : `normal`, `bold`, `bolder`, `lighter`.
  - `font-style` : `normal`, `italic`.
  - `display` : `block`, `inline-block`, `none`.
  - `transform` : `rotate()`, `scale()`, `translate()`, `skew()`.
  - `filter` : `none`, `blur()`, `grayscale()`, `sepia()`, `invert()`.
  - `opacity` : `1`, `0.75`, `0.5`, `0.2`.
  - `box-shadow` : ombres douces, néon cyan, rétro rouge.
  - `list-style-type` : `disc`, `circle`, `square`, `upper-roman`, `lower-alpha`.
  - `border-collapse` : `collapse` (fusionné) vs `separate` (séparé).
  - `overflow` : `visible`, `hidden`, `scroll`, `auto`.
  - `background-repeat` : `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.
* **Sélecteurs par ID (#id) :** `#h1`, `#p1`, `#boite`, `#titre`, `#tab`, `#img1`, `#lien`, `#liste`.
* **Note systématique :hover** sur toutes les propriétés.
* **Simulateur Vidéo Démo Live** avec lecteur animé (Play, Pause, Replay, Test au survol).

### 3. ⚡ JavaScript (53 Notions & Tableau Officiel 3 Colonnes)
* **100% conforme à l'Annexe JS du Bac STI (Réplique exacte du document officiel en 3 colonnes).**
* **Chaque ligne du tableau officiel est cliquable** pour ouvrir la fiche explicative, le code d'examen et tester en direct.
* **Opérateurs :** Logiques (`&&`, `||`, `!`), comparaison (`==`, `!=`, `>`, `>=`, `<`, `<=`), arithmétiques (`+`, `-`, `*`, `/`, `%`).
* **Affichage & Saisie :** `alert()`, `document.write()`, `element.innerHTML` (note officielle), `prompt()`.
* **Conversions & Tests :** `isNaN()`, `Number()`, `parseFloat()`, `parseInt()`, `String()`.
* **DOM :** `document.getElementById()`, `document.getElementsByName()`.
* **Objet Math :** `abs()`, `sqrt()`, `round()`, `trunc()`, `random()`.
* **Chaînes (String) :** `+`, `length`, `indexOf()`, `lastIndexOf()`, `substring()`, `replace()`, `toLowerCase()`, `toUpperCase()`, `trim()`, `String.fromCharCode()`.
* **Objet Date :** `new Date()`, `new Date(ch)`, `getDate()`, `getMonth()`, `getFullYear()`, `toString()`.
* **Objet Array :** `[]` (littéraux de tableau), `length`.
* **Modification HTML :** `element.attribut = valeur` (value, checked, disabled, readonly, src, muted), `element.style.propriété = valeur` (color, background, border, font, width, height), `element.play()`, `element.pause()`, `selectedIndex` (menu déroulant `<select>`).
* **Console Interactive :** Bouton pour exécuter chaque fonction directement dans le navigateur avec affichage de la sortie console en direct !

---

## 🚀 Utilisation :
Ouvrez simplement le fichier `index.html` dans votre navigateur web préféré (Chrome, Edge, Firefox).
