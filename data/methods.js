/**
 * FICHES MÉTHODE OFFICIELLES POUR LE BACCALAURÉAT INFORMATIQUE (SECTION SCIENCES DE L'INFORMATIQUE)
 * STI de A à Z — Conforme au programme officiel tunisien
 * 
 * 6 Fiches Méthode incontournables :
 * 1. tdo-tdnt          : T.D.N.T et T.D.O (Déclarations & Validité des instructions)
 * 2. trace-execution   : Trace d'exécution (Tableau de trace & Déduction de rôle)
 * 3. fonction-inconnue : Déduire le rôle d'une fonction inconnue (Méthode des 3 tests)
 * 4. procedures-fichiers: Procédures sur fichiers (Texte & Enregistrements / Typés)
 * 5. recursivite       : Écrire un algorithme récursif sans faute (Base & Récurence)
 * 6. avant-de-rendre   : Checklist avant de rendre la copie (Le rituel des 10 min)
 */

const METHODS_DATA = [
  {
    id: 'tdo-tdnt',
    slug: 'tdo-tdnt',
    title: 'T.D.N.T et T.D.O : Déclarations & Validité',
    subtitle: 'Maîtriser les tableaux de déclarations et éviter les erreurs éliminatoires au Bac',
    icon: '📋',
    category: 'Méthodologie fondamentale',
    relatedType: 'tdo-tdnt',
    relatedChapters: ['enregistrements', 'tableaux'],
    aRetenir: [
      "Le T.D.N.T (Nouveaux Types) ne sert QUE pour définir les Enregistrements (Structure), les types tableaux personnalisés et les types scalaires énumérés.",
      "Le T.D.O (Objets) déclare les constantes et variables (locales à un sous-programme ou globales à l'algorithme). Une constante a pour Nature 'Constante = valeur'.",
      "Règle d'or : Ne JAMAIS redéclarer un paramètre formel dans le T.D.O local d'un sous-programme ! C'est une faute éliminatoire.",
      "Toute variable utilisée dans le corps de l'algorithme (ex: compteurs 'i', 'j', accumulateurs 's', drapeaux 'trouve') doit obligatoirement figurer dans le T.D.O.",
      "Compatibilité stricte des types : un Réel ne peut pas être affecté à un Entier sans conversion explicite (Arrondi ou Ent)."
    ],
    exempleTitre: "Exemple Type : Déclaration d'un fichier d'élèves et traitement",
    exempleSteps: [
      "Étape 1 : Définir le type tableau de notes dans le T.D.N.T.",
      "Étape 2 : Définir la structure de l'élève (Enregistrement) dans le T.D.N.T.",
      "Étape 3 : Déclarer les variables de travail et fichiers dans le T.D.O local."
    ],
    codePseudo: `// 1. T.D.N.T (Tableau de Déclaration des Nouveaux Types)
// Type            | Définition
// ----------------+------------------------------------------------
// TabNotes        = Tableau de 5 Réels
// Eleve           = Structure
//                 |   nom : Chaîne
//                 |   notes : TabNotes
//                 |   moyenne : Réel
//                 | Fin Eleve
// FichEleves      = Fichier de Eleve

// 2. T.D.O Local de la procédure 'Calculer_Moyennes'
// Objet           | Type / Nature
// ----------------+------------------------------------------------
// i, j            | Entier           (Compteurs de boucle)
// somme           | Réel             (Accumulateur)
// e               | Eleve            (Enregistrement temporaire)
// F               | FichEleves       (Fichier binaire d'enregistrements)`,
    codePython: `# Équivalent Python officiel Bac Info
class Eleve:
    def __init__(self, nom="", notes=None, moyenne=0.0):
        self.nom = nom
        self.notes = notes if notes is not None else [0.0] * 5
        self.moyenne = moyenne

# Manipulation avec pickle pour le fichier binaire d'enregistrements
import pickle`,
    erreursFrequentes: [
      "Redéclarer un paramètre d'entrée dans le T.D.O local de la procédure.",
      "Confondre le nom du type (défini au T.D.N.T) avec le nom de la variable (déclarée au T.D.O).",
      "Oublier de déclarer la variable de contrôle de la boucle 'Pour i de ...' dans le T.D.O.",
      "Affecter un tableau à un autre directement en pseudo-code sans boucle élément par élément."
    ]
  },
  {
    id: 'trace-execution',
    slug: 'trace-execution',
    title: "Trace d'exécution & Tableau d'évolution",
    subtitle: "Remplir un tableau de trace sans se tromper et en déduire le rôle exact",
    icon: '📊',
    category: 'Analyse & Déduction',
    relatedType: 'fonction-inconnue',
    relatedChapters: ['tableaux', 'recursivite', 'chaines'],
    aRetenir: [
      "Dresser un tableau de trace avec une colonne par variable modifiée, une pour la condition de boucle, et une pour la sortie/retour.",
      "Suivre scrupuleusement l'ordre séquentiel des instructions : ne jamais anticiper ni sauter une itération.",
      "Noter l'état des variables avant le premier passage (initialisation), puis à la FIN de chaque itération.",
      "Pour les sous-programmes récursifs : représenter l'empilement des appels (pile d'exécution) jusqu'au cas de base, puis le dépilement des valeurs de retour.",
      "Pour déduire le rôle : observer la transformation entre l'état initial et la valeur finale."
    ],
    exempleTitre: "Exemple Type : Trace d'une fonction sur les entiers",
    exempleSteps: [
      "Étape 1 : Repérer les paramètres initiaux (ici a = 36, b = 24).",
      "Étape 2 : Évaluer la condition du TantQue à chaque tour.",
      "Étape 3 : Consigner dans le tableau de trace chaque réaffectation.",
      "Étape 4 : Conclure sur le rôle mathématique précis."
    ],
    codePseudo: `Fonction Traitement (a, b : Entier) : Entier
Début
  TantQue (a <> b) Faire
    Si (a > b) Alors
      a <-- a - b
    Sinon
      b <-- b - a
    Fin Si
  Fin TantQue
  Retourner a
Fin

// TABLEAU DE TRACE pour a = 36 et b = 24 :
// +----------+-------+-------+---------------+---------------+
// | Itération|   a   |   b   | Condition     | Action        |
// +----------+-------+-------+---------------+---------------+
// | Initial  |  36   |  24   | 36 <> 24 VRAI | a > b : 36-24 |
// | Tour 1   |  12   |  24   | 12 <> 24 VRAI | b > a : 24-12 |
// | Tour 2   |  12   |  12   | 12 <> 12 FAUX | Sortie boucle |
// +----------+-------+-------+---------------+---------------+
// Valeur retournée : 12.
// Rôle : Calcule le PGCD de deux entiers par l'algorithme des soustractions successives.`,
    codePython: `def traitement(a, b):
    while a != b:
        if a > b:
            a = a - b
        else:
            b = b - a
    return a

print(traitement(36, 24))  # Affiche 12 (PGCD)`,
    erreursFrequentes: [
      "Modifier mentalement plusieurs variables en même temps sans écrire chaque étape intermédiaire.",
      "Oublier de vérifier la condition d'arrêt à la sortie de la dernière itération.",
      "Donner une explication narrative du code au lieu d'un rôle synthétique ('Elle calcule le PGCD')."
    ]
  },
  {
    id: 'fonction-inconnue',
    slug: 'fonction-inconnue',
    title: 'Identifier le rôle d’une fonction inconnue',
    subtitle: 'La méthode des 3 tests pour identifier n’importe quelle fonction mystère au Bac',
    icon: '🔍',
    category: 'Analyse & Déduction',
    relatedType: 'fonction-inconnue',
    relatedChapters: ['chaines', 'arithmetique', 'recursivite'],
    aRetenir: [
      "Méthode des 3 tests : 1) Cas trivial (0, chaîne vide, liste à 1 élément). 2) Cas standard représentatif. 3) Cas limite ou particulier (nombre impair, négatif, palindrome).",
      "Analyser le type de retour : si le retour est un Booléen, il s'agit d'un TEST de propriété (premier, parfait, symétrique, ordonné...).",
      "Repérer les motifs classiques : 'Div 10' et 'Mod 10' = extraction de chiffres ; 'Sous_Chaine' ou 'Pos' = traitement de texte ; accumulations 's <-- s + ...' = somme ou moyenne.",
      "Rédiger la réponse en une phrase claire commençant par 'La fonction vérifie si...' ou 'La fonction renvoie le...'"
    ],
    exempleTitre: "Exemple Type : Fonction mystère sur une chaîne",
    exempleSteps: [
      "Étape 1 : Tester avec 'BAC' (longueur 3, non symétrique).",
      "Étape 2 : Tester avec 'RADAR' (longueur 5, palindrome).",
      "Étape 3 : Identifier le pivot et la comparaison miroir."
    ],
    codePseudo: `Fonction Mystere (ch : Chaîne) : Booléen
Variables
  i, n : Entier
  ok : Booléen
Début
  n <-- Longueur(ch)
  ok <-- Vrai
  Pour i de 1 à (n Div 2) Faire
    Si (ch[i] <> ch[n - i + 1]) Alors
      ok <-- Faux
    Fin Si
  Fin Pour
  Retourner ok
Fin

// ANALYSE DES TESTS :
// Test 1 : ch = "BAC"   -> i=1 : ch[1]='B' <> ch[3]='C' -> ok = Faux.
// Test 2 : ch = "RADAR" -> i=1 ('R'=='R'), i=2 ('A'=='A') -> ok = Vrai.
// FORMULATION DU RÔLE :
// "La fonction Mystere vérifie si la chaîne 'ch' est un palindrome (renvoie Vrai si oui, Faux sinon)."`,
    codePython: `def mystere(ch):
    n = len(ch)
    ok = True
    for i in range(n // 2):
        if ch[i] != ch[n - 1 - i]:
            ok = False
    return ok`,
    erreursFrequentes: [
      "Se contenter de dire 'La fonction compare les lettres' : c'est la description du code, pas son RÔLE.",
      "Ne tester qu'un seul jeu d'essai et déduire une règle générale erronée.",
      "Oublier de préciser les conditions d'entrée (ex: 'pour tout entier n strictement positif')."
    ]
  },
  {
    id: 'procedures-fichiers',
    slug: 'procedures-fichiers',
    title: 'Procédures sur fichiers : Texte & Enregistrements',
    subtitle: 'Schéma universel pour manipuler les fichiers sans risque de fuite ni boucle infinie',
    icon: '📁',
    category: 'Manipulation de données',
    relatedType: 'fichiers',
    relatedChapters: ['fichiers', 'enregistrements'],
    aRetenir: [
      "Les 4 étapes obligatoires : 1. Associer(F, chemin)  2. Ouvrir / Réécrire(F)  3. Traitement boucle  4. Fermer(F).",
      "Fermer(F) est ABSOLUMENT obligatoire : l'oublier entraîne un retrait systématique de points au Bac.",
      "Fichier texte vs Enregistrement : sur un fichier texte, on lit avec 'Lire_Ligne(F, s)' ou 'Lire(F, c)' ; sur un fichier typé, on lit un enregistrement complet 'Lire(F, e)'.",
      "Condition d'arrêt universelle : 'TantQue Non Fin_fichier(F) Faire'. Ne jamais lire après que Fin_fichier soit devenu Vrai.",
      "En Python Bac : utiliser 'open()' avec 'r', 'w' ou 'a', ou 'pickle.load(f)' / 'pickle.dump(e, f)' en mode 'rb' / 'wb'."
    ],
    exempleTitre: "Exemple Type : Filtrage et transfert d'un fichier binaire vers un fichier texte",
    exempleSteps: [
      "Étape 1 : Ouvrir le fichier source binaire en lecture et le fichier cible texte en écriture.",
      "Étape 2 : Parcourir le fichier binaire élément par élément jusqu'à la fin.",
      "Étape 3 : Si la condition est vérifiée (moyenne >= 10), écrire la ligne formatée dans le fichier cible.",
      "Étape 4 : Fermer les DEUX fichiers hermétiquement."
    ],
    codePseudo: `Procédure Filtrer_Admis (nomSource, nomCible : Chaîne)
// T.D.O Local :
// Objet        | Type / Nature
// -------------+-------------------------------
// fSource      | Fichier de Eleve (Binaire)
// fCible       | Fichier Texte
// e            | Eleve
// ligne        | Chaîne
Début
  Associer(fSource, nomSource)
  Associer(fCible, nomCible)
  Ouvrir(fSource)
  Réécrire(fCible)

  TantQue Non Fin_fichier(fSource) Faire
    Lire(fSource, e)
    Si (e.moyenne >= 10.0) Alors
      ligne <-- e.nom + " : " + ConvCh(e.moyenne)
      Écrire_Ligne(fCible, ligne)
    Fin Si
  Fin TantQue

  Fermer(fSource)
  Fermer(fCible)
Fin`,
    codePython: `import pickle

def filtrer_admis(nom_source, nom_cible):
    with open(nom_source, "rb") as f_src, open(nom_cible, "w", encoding="utf-8") as f_dst:
        while True:
            try:
                e = pickle.load(f_src)
                if e.moyenne >= 10.0:
                    f_dst.write(f"{e.nom} : {e.moyenne}\\n")
            except EOFError:
                break`,
    erreursFrequentes: [
      "Oublier de fermer l'un des deux fichiers (ou les deux).",
      "Faire un 'Lire(F, e)' avant le 'TantQue Non Fin_fichier' ET en fin de boucle sans adapter la logique (lecture fantôme).",
      "Confondre 'Ouvrir' (lecture seule, le fichier doit exister) et 'Réécrire' (crée ou écrase le fichier).",
      "Oublier de convertir les valeurs numériques en chaînes avec 'ConvCh()' avant d'écrire dans un fichier texte."
    ]
  },
  {
    id: 'recursivite',
    slug: 'recursivite',
    title: 'Écrire un algorithme récursif sans faute',
    subtitle: 'La structure infaillible en deux blocs : Cas de base et Cas général',
    icon: '🔄',
    category: 'Algorithmique avancée',
    relatedType: 'ecrire-recursif',
    relatedChapters: ['recursivite', 'tri'],
    aRetenir: [
      "Tout sous-programme récursif s'articule autour de DEUX piliers obligatoires : le cas de base (arrêt) et le cas général (récurrence).",
      "Cas de base (Condition d'arrêt) : situation triviale résolue directement SANS appel récursif (ex: n=0, n=1, chaîne vide).",
      "Cas général (Appel récursif) : appel de la fonction sur un paramètre strictement plus petit convergeant vers le cas de base (ex: n - 1, n Div 10).",
      "Toute fonction récursive doit retourner une valeur dans TOUTES ses branches (dans le Si et dans le Sinon).",
      "Interdiction formelle d'utiliser des boucles (Pour, TantQue, Répéter) dans une fonction demandée 'purement récursive'."
    ],
    exempleTitre: "Exemple Type : Somme des chiffres d'un entier strictement positif",
    exempleSteps: [
      "Étape 1 : Identifier le cas de base. Si n < 10, le nombre n'a qu'un chiffre, sa somme est n lui-même.",
      "Étape 2 : Identifier le cas général. Dernier chiffre = (n Mod 10), reste du nombre = (n Div 10).",
      "Étape 3 : Écrire la relation : Somme(n) = (n Mod 10) + Somme(n Div 10)."
    ],
    codePseudo: `Fonction Somme_Chiffres (n : Entier) : Entier
Début
  Si (n < 10) Alors
    Retourner n
  Sinon
    Retourner (n Mod 10) + Somme_Chiffres(n Div 10)
  Fin Si
Fin

// TRACE D'APPEL RÉCURSIF pour n = 352 :
// Somme_Chiffres(352)
//   = 2 + Somme_Chiffres(35)
//       = 2 + (5 + Somme_Chiffres(3))
//           = 2 + (5 + 3)   [Cas de base atteint car 3 < 10]
//           = 2 + 8
//   = 10`,
    codePython: `def somme_chiffres(n):
    if n < 10:
        return n
    else:
        return (n % 10) + somme_chiffres(n // 10)

print(somme_chiffres(352))  # Affiche 10`,
    erreursFrequentes: [
      "Oublier le 'Retourner' devant l'appel récursif (la fonction s'appelle mais perd le résultat en route).",
      "Paramètre récursif qui ne converge pas (ex: passer 'n' au lieu de 'n - 1' -> boucle infinie / RecursionError).",
      "Utiliser une variable globale ou locale pour accumuler le résultat au lieu d'exploiter la valeur de retour de la fonction."
    ]
  },
  {
    id: 'avant-de-rendre',
    slug: 'avant-de-rendre',
    title: 'Avant de rendre la copie : Checklist des 10 min',
    subtitle: 'Le rituel de relecture systématique pour sécuriser entre 2 et 4 points précieux au Bac',
    icon: '✅',
    category: 'Stratégie d’examen',
    relatedType: 'corriger-erreurs',
    relatedChapters: ['enregistrements', 'fichiers', 'tableaux', 'tri'],
    aRetenir: [
      "Consacrer TOUJOURS les 10 à 15 dernières minutes de l'épreuve à la checklist sans commencer un nouvel exercice.",
      "Vérification T.D.O : chaque variable de boucle 'i', 'j' et variable intermédiaire est-elle bien déclarée ?",
      "Vérification Paramètres : les paramètres modifiés par une procédure portent-ils bien la mention '@' ou 'Var' ?",
      "Vérification Fichiers : chaque 'Ouvrir' ou 'Réécrire' a-t-il son 'Fermer' correspondant avant le 'Fin' ?",
      "Vérification Tableaux : les indices de tableau sont-ils dans les bornes (1..N en pseudo-code, 0..N-1 en Python) ?",
      "Vérification Fonctions : chaque fonction a-t-elle bien un type de retour et au moins un 'Retourner' exécutable ?"
    ],
    exempleTitre: "Grille de Relecture Express (10 points de contrôle)",
    exempleSteps: [
      "Point 1 : T.D.O locaux complets pour chaque sous-programme.",
      "Point 2 : Absence de redéclaration des paramètres dans les T.D.O.",
      "Point 3 : Passages par adresse (@ ou Var) sur les paramètres modifiés.",
      "Point 4 : Fermeture hermétique de tous les fichiers ouverts.",
      "Point 5 : Tests mentaux sur cas limites (ex: N = 1, chaîne vide, liste triée)."
    ],
    codePseudo: `// GRILLE SYNTHÉTIQUE DE CONTRÔLE AVANT DÉPÔT :
// [ ] 1. En-têtes : nom de l'algorithme, types d'entrée et de sortie spécifiés.
// [ ] 2. Procédures : @ ou Var présent devant les variables modifiées en sortie.
// [ ] 3. Fonctions : instruction 'Retourner <valeur>' présente dans toutes les branches.
// [ ] 4. T.D.O Local : aucune variable fantôme (i, j, k, tmp, s, trouve déclarés).
// [ ] 5. Paramètres : AUCUN paramètre formel ne figure dans le T.D.O local.
// [ ] 6. Fichiers : chaque 'Associer' suivi de 'Ouvrir/Réécrire' ET 'Fermer'.
// [ ] 7. Chaînes : respect de la casse et indices 1..Longueur(ch).
// [ ] 8. Récursion : condition d'arrêt explicite + convergence prouvée.
// [ ] 9. Numérotation : numéros des questions et exercices clairement encadrés.
// [ ] 10. Lisibilité : indentation soignée, ratures minimales et lisibles.`,
    codePython: `# Astuce Relecture Pratique Python (Qt Designer & Thonny) :
# 1. Vérifier que tous les widgets existent dans l'interface .ui (noms exacts).
# 2. Vérifier la conversion des types : int(ui.lineEdit.text()) ou float().
# 3. Vérifier les blocs try/except lors de la saisie utilisateur.
# 4. Vérifier que la fenêtre s'affiche avec app.exec_() ou app.exec().`,
    erreursFrequentes: [
      "Rendre la copie 15 minutes avant la fin sans relire : c'est là qu'on laisse des points bêtes sur les T.D.O !",
      "Oublier le '@' devant un tableau ou une variable passée à une procédure de remplissage ou de tri.",
      "Confondre l'affectation '<--' avec le test d'égalité '=' dans les conditions Si.",
      "Utiliser une fonction non standard sans l'avoir définie au préalable."
    ]
  },
  {
    id: 'fonctions-predefinies',
    slug: 'fonctions-predefinies',
    title: 'Fonctions et procédures prédéfinies',
    subtitle: 'Catalogue officiel des 16 primitives sur chaînes et fichiers (Signatures, retours & pièges)',
    icon: '⚙️',
    category: 'Primitives & Syntaxe',
    relatedType: 'fonctions-predefinies',
    relatedChapters: ['fichiers', 'tableaux'],
    aRetenir: [
      "Distinction fondamentale : une Fonction retourne une valeur utilisable dans une expression ou affectation (ex: 'x <-- F(a)'), tandis qu'une Procédure effectue une action et modifie ses paramètres par adresse (@ ou Var) sans retourner de résultat direct.",
      "Primitives sur chaînes : 'Pos', 'Majus', 'Long', 'Chr', 'Ord', 'Sous_chaine' sont des Fonctions. En revanche, 'Effacer', 'Valeur' et 'Convch' sont des Procédures qui agissent par effet de bord sur leurs arguments (@).",
      "Indices de chaînes : en pseudo-code officiel tunisien, le 1er caractère est à l'indice 1 et le dernier à l'indice 'Long(ch)'. Si 'Pos(sous, ch)' ne trouve aucune occurrence, elle retourne 0 (jamais -1).",
      "Primitives sur fichiers : toute manipulation suit le cycle impératif Associer(F, nom) -> Ouvrir(F) (ou Reecrire) -> boucle avec Fin_Fichier(F) -> Fermer(F).",
      "Sécurité numérique : après l'appel à la procédure 'Valeur(ch, val, err)', il faut impérativement tester 'Si err = 0' avant d'utiliser la valeur 'val'."
    ],
    exempleTitre: "Catalogue de référence : 16 primitives officielles",
    exempleSteps: [
      "Vérifier la nature : Fonction (avec affectation) vs Procédure (appel direct sans affectation).",
      "Contrôler la validité des paramètres : types compatibles, ordre et respect des passages par variable (@).",
      "Gérer les cas limites et sentinelles : indice 0 pour Pos, code d'erreur err <> 0 pour Valeur.",
      "Fermer impérativement chaque fichier ouvert avant la fin du sous-programme via Fermer(F)."
    ],
    codePseudo: `// =========================================================================
// 1. PRIMITIVES SUR LES CARACTÈRES ET CHAÎNES DE CARACTÈRES
// =========================================================================

// 1. Pos(sous_ch, ch) : Entier
// -> Retourne : La position (1..Long) de la 1ère occurrence de sous_ch dans ch, ou 0 si absente.
// -> Exemple  : p <-- Pos("bac", "le bac 2026")  // p vaut 4
// -> Piège    : Croire que l'indice démarre à 0 comme en Python.

// 2. Majus(ch) : Chaîne  (ou Majus(c : Caractère) : Caractère)
// -> Retourne : La chaîne ou le caractère converti en lettres majuscules.
// -> Exemple  : txt <-- Majus("informatique")  // txt vaut "INFORMATIQUE"
// -> Piège    : Écrire 'Majus(ch)' sans affecter le résultat ('ch <-- Majus(ch)' est requis).

// 3. Effacer(@ch : Chaîne, pos : Entier, nb : Entier) [Procédure]
// -> Action   : Supprime 'nb' caractères de 'ch' à partir de la position 'pos'.
// -> Exemple  : ch <-- "Bonjour"; Effacer(ch, 4, 4)  // ch devient "Bon"
// -> Piège    : L'utiliser comme une fonction 'ch <-- Effacer(ch, 1, 2)' au lieu d'une procédure.

// 4. Sous_chaine(ch : Chaîne, pos : Entier, nb : Entier) : Chaîne
// -> Retourne : Une portion de 'nb' caractères extraite de 'ch' à partir de l'indice 'pos'.
// -> Exemple  : s <-- Sous_chaine("Tunisie", 1, 3)  // s vaut "Tun"
// -> Piège    : Confondre 'nb' (longueur à extraire) avec la position finale.

// 5. Valeur(ch : Chaîne, @val : Entier/Réel, @err : Entier) [Procédure]
// -> Action   : Convertit la chaîne numérique 'ch' en nombre 'val'. 'err' vaut 0 si succès.
// -> Exemple  : Valeur("2026", n, e)  // n vaut 2026, e vaut 0
// -> Piège    : Oublier de vérifier 'Si err = 0' avant d'utiliser la variable 'val'.

// 6. Convch(val : Entier/Réel, @ch : Chaîne) [Procédure]
// -> Action   : Convertit le nombre 'val' en sa chaîne de caractères dans 'ch'.
// -> Exemple  : Convch(125, s)  // s devient "125"
// -> Piège    : Écrire 's <-- Convch(125)' (Convch est une procédure, pas une fonction).

// 7. Long(ch : Chaîne) : Entier
// -> Retourne : Le nombre total de caractères de la chaîne 'ch' (0 pour chaîne vide "").
// -> Exemple  : n <-- Long("Sciences")  // n vaut 8
// -> Piège    : Tenter d'accéder à 'ch[Long(ch) + 1]' (débordement d'indice).

// 8. Chr(code : Entier) : Caractère
// -> Retourne : Le caractère ASCII correspondant au code numérique 'code' (0..255).
// -> Exemple  : c <-- Chr(65)  // c vaut 'A'
// -> Piège    : Passer un entier en dehors de la plage 0..255 ou confondre avec Ord.

// 9. Ord(car : Caractère) : Entier
// -> Retourne : Le code ASCII entier correspondant au caractère 'car'.
// -> Exemple  : code <-- Ord('A')  // code vaut 65
// -> Piège    : Passer une chaîne de plusieurs caractères au lieu d'un seul caractère.

// =========================================================================
// 2. PRIMITIVES SUR LES FICHIERS (TEXTE ET ENREGISTREMENTS)
// =========================================================================

// 10. Ouvrir(@F : Fichier) [Procédure]
// -> Action   : Ouvre un fichier existant en lecture/écriture, positionne le pointeur au début.
// -> Exemple  : Associer(F, "notes.txt"); Ouvrir(F)
// -> Piège    : Appeler 'Ouvrir' sans 'Associer' préalable, ou sur un fichier inexistant.

// 11. Lire(@F : Fichier, @var : TypeElement) [Procédure]
// -> Action   : Lit un élément (ou enregistrement) dans 'var' et avance le pointeur.
// -> Exemple  : Lire(F, e)  // e reçoit l'enregistrement courant
// -> Piège    : Lire au-delà de la fin de fichier sans tester 'Fin_Fichier(F)'.

// 12. Lire_ligne(@F : Fichier_Texte, @ch : Chaîne) [Procédure]
// -> Action   : Lit toute une ligne de texte jusqu'au saut de ligne dans la chaîne 'ch'.
// -> Exemple  : Lire_ligne(F, ligne)
// -> Piège    : L'utiliser sur un fichier binaire (primitive réservée aux fichiers texte).

// 13. Ecrire(@F : Fichier, val : TypeElement) [Procédure]
// -> Action   : Écrit la valeur ou l'enregistrement 'val' à la position courante du pointeur.
// -> Exemple  : Ecrire(F, e)
// -> Piège    : Oublier 'Fermer(F)' après l'écriture, empêchant l'enregistrement sur le disque.

// 14. Ecrire_nl(@F : Fichier_Texte, val : Chaîne) [Procédure]
// -> Action   : Écrit la ligne 'val' dans 'F' en ajoutant automatiquement un saut de ligne.
// -> Exemple  : Ecrire_nl(F, "Bac 2026")
// -> Piège    : Confondre avec 'Ecrire' (qui n'insère pas de retour à la ligne).

// 15. Fermer(@F : Fichier) [Procédure]
// -> Action   : Ferme la liaison physique avec le fichier et vide le tampon d'écriture.
// -> Exemple  : Fermer(F)
// -> Piège    : Oublier la fermeture en fin d'algorithme (perte de données écrites).

// 16. Fin_Fichier(@F : Fichier) : Booléen [Fonction]
// -> Retourne : VRAI si la tête de lecture est arrivée à la fin du fichier, FAUX sinon.
// -> Exemple  : TantQue (Non Fin_Fichier(F)) Faire Lire(F, e); Traiter(e); Fin TantQue
// -> Piège    : Écrire 'TantQue (Fin_Fichier(F))' (condition inversée) ou lire avant de tester.`,
    codePython: `# Équivalents Python officiels (Thonny / Bac Informatique) :

# 1. Pos -> ch.find(sous) + 1  (en base 1 ; ou s.find(sub) base 0)
pos = s.find("bac") + 1 if "bac" in s else 0

# 2. Majus -> s.upper()
s = s.upper()

# 3. Effacer -> s = s[:pos-1] + s[pos-1+nb:]  (les chaînes Python sont immuables)
s = s[:3] + s[7:]

# 4. Sous_chaine -> s[pos-1 : pos-1+nb]
sub = s[0:3]

# 5. Valeur -> conversion sécurisée try/except
try:
    val = int("2026")
    err = 0
except ValueError:
    err = 1

# 6. Convch -> str(val)
ch = str(125)

# 7. Long -> len(s)
n = len("Sciences")

# 8. Chr -> chr(code)
c = chr(65)

# 9. Ord -> ord(car)
k = ord('A')

# 10. Ouvrir / Associer -> f = open("notes.txt", "r") ou open(..., "w")
# 11. Lire (pickle)     -> e = pickle.load(f)
# 12. Lire_ligne        -> ligne = f.readline().strip()
# 13. Ecrire (pickle)   -> pickle.dump(e, f)
# 14. Ecrire_nl         -> f.write("Bac 2026\n")
# 15. Fermer            -> f.close()
# 16. Fin_Fichier       -> boucle while True avec try/except EOFError pour pickle`,
    erreursFrequentes: [
      "Confondre une Fonction et une Procédure : tenter d'affecter le résultat d'une procédure comme 'Convch' (ex: 'ch <-- Convch(12)') ou 'Effacer'.",
      "Oublier que les indices de chaînes et tableaux commencent à 1 en pseudo-code tunisien, alors que Python commence à 0.",
      "Oublier de tester 'Si err = 0' avant d'utiliser la variable numérique issue de 'Valeur(ch, val, err)'.",
      "Inverser la condition de parcours de fichier : écrire 'TantQue Fin_Fichier(F)' au lieu de 'TantQue Non Fin_Fichier(F)'.",
      "Oublier l'instruction 'Fermer(F)' en fin d'algorithme."
    ]
  }

];

// Helper methods
const METHODS_HELPER = {
  getAll: () => METHODS_DATA,
  getBySlug: (slug) => METHODS_DATA.find(m => m.slug === slug || m.id === slug) || null,
  getByType: (typeSlug) => METHODS_DATA.filter(m => m.relatedType === typeSlug)
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { METHODS_DATA, METHODS_HELPER };
}
