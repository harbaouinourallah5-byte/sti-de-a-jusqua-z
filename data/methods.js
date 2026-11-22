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
