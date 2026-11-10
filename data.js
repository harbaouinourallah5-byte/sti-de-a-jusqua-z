const DATA = {
  "html": [
    {
      "id": "tag-html",
      "category": "Éléments de 1er niveau",
      "tag": "<html>",
      "name": "Racine du document HTML",
      "summary": "Représente la racine d'un document HTML. Tous les autres éléments sont ses descendants.",
      "howToUse": "Englobe l'intégralité du code web après <!DOCTYPE html>. Utilisez l'attribut lang=\"fr\" pour spécifier la langue de la page aux moteurs de recherche et synthétiseurs vocaux.",
      "attributes": [
        "lang (ex: lang=\"fr\")",
        "dir (ltr / rtl)"
      ],
      "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n  <head>\n    <title>Mon Site STI</title>\n  </head>\n  <body>\n    <h1>Bienvenue sur mon site</h1>\n  </body>\n</html>",
      "previewHtml": "<div style=\"border: 2px dashed #f97316; padding: 12px; border-radius: 6px; background: #fff7ed;\">\n        <span style=\"background:#f97316; color:#fff; font-size:11px; font-weight:bold; padding:2px 8px; border-radius:4px;\">&lt;html lang=\"fr\"&gt;</span>\n        <h4 style=\"margin:8px 0 4px 0; color:#1e293b;\">Bienvenue sur mon site</h4>\n        <p style=\"margin:0; font-size:13px; color:#64748b;\">Tout le contenu de la page web réside à l'intérieur de la balise racine &lt;html&gt;.</p>\n      </div>"
    },
    {
      "id": "tag-head",
      "category": "Éléments de 1er niveau",
      "tag": "<head>",
      "name": "Conteneur d'en-tête technique",
      "summary": "Conteneur de métadonnées placé entre la balise <html> et la balise <body>.",
      "howToUse": "Ne contient aucun élément directement visible sur la page. On y déclare l'encodage (charset), le titre de l'onglet (<title>), les styles (<style> ou <link>) et les scripts (<script>).",
      "attributes": [],
      "code": "<head>\n  <meta charset=\"UTF-8\">\n  <title>Cours STI - Révision Web</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
      "previewHtml": "<div style=\"background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:10px 14px; font-size:13px; color:#475569;\">\n        ⚙️ <strong>Métadonnées configurées dans &lt;head&gt; :</strong><br>\n        • Titre d'onglet : <em>Cours STI - Révision Web</em><br>\n        • Encodage : <em>UTF-8</em> (accents supportés)<br>\n        • Feuille de style CSS liée : <em>style.css</em>\n      </div>"
    },
    {
      "id": "tag-body",
      "category": "Éléments de 1er niveau",
      "tag": "<body>",
      "name": "Corps du document",
      "summary": "Définit le corps du document visible par l'utilisateur.",
      "howToUse": "Tous les titres, paragraphes, images, liens, formulaires et tableaux doivent obligatoirement se trouver à l'intérieur de la balise <body>.",
      "attributes": [],
      "code": "<body>\n  <header><h1>Mon Lycée Technique</h1></header>\n  <main><p>Contenu principal visible à l'écran.</p></main>\n  <footer>© 2026 Lycée STI</footer>\n</body>",
      "previewHtml": "<div style=\"border:1px solid #cbd5e1; border-radius:6px; overflow:hidden;\">\n        <div style=\"background:#f1f5f9; padding:6px 12px; font-size:11px; font-weight:bold; color:#475569;\">Affichage Écran (Corps de la page)</div>\n        <div style=\"padding:15px; background:#fff;\">\n          <h4 style=\"margin:0 0 6px 0; color:#0f172a;\">Mon Lycée Technique</h4>\n          <p style=\"margin:0 0 8px 0; font-size:13px; color:#334155;\">Contenu principal visible à l'écran.</p>\n          <small style=\"color:#94a3b8;\">© 2026 Lycée STI</small>\n        </div>\n      </div>"
    },
    {
      "id": "tag-link",
      "category": "Éléments d'en-tête",
      "tag": "<link>",
      "name": "Liaison externe",
      "summary": "Définit la relation entre le document actuel et une ressource externe (CSS, favicon).",
      "howToUse": "Balise orpheline (auto-fermante). 'href' indique le chemin vers le fichier, 'rel' indique la nature du lien (ex: rel=\"stylesheet\").",
      "attributes": [
        "href (adresse du fichier)",
        "rel (stylesheet, icon)",
        "type (text/css)"
      ],
      "code": "<link rel=\"stylesheet\" href=\"style.css\" type=\"text/css\">\n<link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">",
      "previewHtml": "<div style=\"background:#eff6ff; border-left:4px solid #3b82f6; padding:12px; border-radius:4px; font-size:13px; color:#1e40af;\">\n        ✓ <strong>Fichier CSS connecté :</strong> Les couleurs, polices et marges sont appliquées au document !\n      </div>"
    },
    {
      "id": "tag-meta",
      "category": "Éléments d'en-tête",
      "tag": "<meta>",
      "name": "Métadonnées du document",
      "summary": "Définit les métadonnées du document (encodage, responsive viewport, description).",
      "howToUse": "Balise orpheline. Utilisez charset=\"UTF-8\" pour les caractères accentués, et name=\"viewport\" pour rendre le site responsive sur mobile.",
      "attributes": [
        "charset (ex: UTF-8)",
        "name (viewport, description, author)",
        "content (valeur associée)"
      ],
      "code": "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"author\" content=\"Élève STI\">",
      "previewHtml": "<div style=\"display:flex; gap:10px; flex-wrap:wrap;\">\n        <span style=\"background:#f1f5f9; border:1px solid #cbd5e1; padding:6px 12px; border-radius:20px; font-size:12px; color:#334155;\">✓ Accents gérés : é, è, à, ç, ô</span>\n        <span style=\"background:#f1f5f9; border:1px solid #cbd5e1; padding:6px 12px; border-radius:20px; font-size:12px; color:#334155;\">📱 Adapté aux mobiles et tablettes</span>\n      </div>"
    },
    {
      "id": "tag-script",
      "category": "Éléments d'en-tête",
      "tag": "<script>",
      "name": "Intégration de Script JavaScript",
      "summary": "Intègre un script côté client (JavaScript).",
      "howToUse": "Utilisez src=\"monScript.js\" pour charger un fichier séparé, ou écrivez directement le code JavaScript entre <script> et </script>.",
      "attributes": [
        "src (chemin du script)",
        "type (text/javascript)",
        "defer"
      ],
      "code": "<!-- Fichier externe -->\n<script src=\"script.js\"></script>\n\n<!-- Script en ligne -->\n<script>\n  function saluer() {\n    alert(\"Bonjour et bonne révision !\");\n  }\n</script>",
      "previewHtml": "<button onclick=\"alert('Script JavaScript exécuté avec succès !')\" style=\"background:#f59e0b; color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:bold; cursor:pointer;\">\n        ▶ Tester le script (cliquez-moi !)\n      </button>"
    },
    {
      "id": "tag-style",
      "category": "Éléments d'en-tête",
      "tag": "<style>",
      "name": "Styles CSS internes",
      "summary": "Définit les informations de style (CSS) pour un document.",
      "howToUse": "Se place dans <head> pour appliquer des règles de style sans devoir créer de fichier externe .css.",
      "attributes": [
        "type (text/css)",
        "media (screen, print)"
      ],
      "code": "<style>\n  h2 {\n    color: #e11d48;\n    text-decoration: underline;\n  }\n</style>",
      "previewHtml": "<div style=\"padding:10px; background:#fff1f2; border:1px solid #fda4af; border-radius:6px;\">\n        <h3 style=\"color:#e11d48; text-decoration:underline; margin:0;\">Titre stylé grâce à &lt;style&gt;</h3>\n      </div>"
    },
    {
      "id": "tag-title",
      "category": "Éléments d'en-tête",
      "tag": "<title>",
      "name": "Titre de l'onglet du navigateur",
      "summary": "Définit le titre du document affiché sur la barre d'onglets du navigateur.",
      "howToUse": "Obligatoire dans <head>. Il donne le nom de l'onglet et apparaît en gras dans les résultats de recherche Google.",
      "attributes": [],
      "code": "<title>STI - Mon Projet Web</title>",
      "previewHtml": "<div style=\"background:#f1f5f9; border:1px solid #cbd5e1; border-radius:6px; padding:8px 12px; display:inline-flex; align-items:center; gap:8px;\">\n        <span>🌐</span>\n        <strong style=\"color:#1e293b; font-size:13px;\">STI - Mon Projet Web</strong>\n        <span style=\"color:#94a3b8; margin-left:12px; cursor:pointer;\">&times;</span>\n      </div>"
    },
    {
      "id": "tag-header",
      "category": "Structuration d'une page",
      "tag": "<header>",
      "name": "En-tête de page ou de section",
      "summary": "Conteneur pour le contenu d'introduction ou un ensemble de liens de navigation.",
      "howToUse": "Englobe le logo, le titre du site h1 et la barre de menu <nav>.",
      "attributes": [],
      "code": "<header>\n  <h1>STI Révisions</h1>\n  <nav>\n    <a href=\"#html\">HTML</a> | <a href=\"#css\">CSS</a>\n  </nav>\n</header>",
      "previewHtml": "<header style=\"background:#1e293b; color:#fff; padding:12px 18px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;\">\n        <strong style=\"font-size:16px;\">🎓 STI Révisions</strong>\n        <span style=\"font-size:13px; color:#38bdf8;\">HTML5 • CSS3 • JS</span>\n      </header>"
    },
    {
      "id": "tag-nav",
      "category": "Structuration d'une page",
      "tag": "<nav>",
      "name": "Menu de navigation",
      "summary": "Définit un ensemble de liens de navigation majeurs du site.",
      "howToUse": "Encadrez les liens de menus principaux dans <nav> pour améliorer l'accessibilité et le référencement.",
      "attributes": [],
      "code": "<nav>\n  <ul>\n    <li><a href=\"#accueil\">Accueil</a></li>\n    <li><a href=\"#cours\">Cours</a></li>\n    <li><a href=\"#contact\">Contact</a></li>\n  </ul>\n</nav>",
      "previewHtml": "<nav style=\"background:#f8fafc; border:1px solid #e2e8f0; padding:10px; border-radius:6px;\">\n        <span style=\"color:#0284c7; font-weight:600; margin-right:15px; text-decoration:underline; cursor:pointer;\">Accueil</span>\n        <span style=\"color:#64748b; font-weight:600; margin-right:15px; cursor:pointer;\">Cours</span>\n        <span style=\"color:#64748b; font-weight:600; cursor:pointer;\">Contact</span>\n      </nav>"
    },
    {
      "id": "tag-footer",
      "category": "Structuration d'une page",
      "tag": "<footer>",
      "name": "Pied de page",
      "summary": "Définit un pied de page pour un document ou une section.",
      "howToUse": "Placé tout en bas de page. Contient le copyright, mentions d'auteur, date et liens annexes.",
      "attributes": [],
      "code": "<footer>\n  <p>© 2026 Lycée Technique STI. Tous droits réservés.</p>\n</footer>",
      "previewHtml": "<footer style=\"background:#334155; color:#cbd5e1; padding:12px; border-radius:6px; text-align:center; font-size:13px;\">\n        © 2026 Lycée Technique STI. Tous droits réservés.\n      </footer>"
    },
    {
      "id": "tag-section",
      "category": "Structuration d'une page",
      "tag": "<section>",
      "name": "Section thématique",
      "summary": "Définit une section dans un document ayant un sens thématique.",
      "howToUse": "Chaque <section> doit idéalement contenir son propre titre (h2, h3).",
      "attributes": [],
      "code": "<section>\n  <h2>Chapitre 2 : Les Sélecteurs CSS</h2>\n  <p>Apprenez à cibler les éléments avec précision.</p>\n</section>",
      "previewHtml": "<section style=\"border:1px solid #cbd5e1; padding:14px; border-radius:6px; background:#fff;\">\n        <h4 style=\"margin:0 0 6px 0; color:#0284c7;\">Chapitre 2 : Les Sélecteurs CSS</h4>\n        <p style=\"margin:0; font-size:13px; color:#475569;\">Apprenez à cibler les éléments avec précision.</p>\n      </section>"
    },
    {
      "id": "tag-article",
      "category": "Structuration d'une page",
      "tag": "<article>",
      "name": "Contenu autonome (Article)",
      "summary": "Spécifie un contenu indépendant et autonome pouvant être partagé ou réutilisé seul.",
      "howToUse": "Utilisé pour des fiches, des articles d'actualité ou des commentaires.",
      "attributes": [],
      "code": "<article>\n  <h3>Fiche Révision n°1</h3>\n  <p>Les balises de formulaires sont indispensables pour le bac STI.</p>\n</article>",
      "previewHtml": "<article style=\"box-shadow:0 2px 8px rgba(0,0,0,0.06); border:1px solid #e2e8f0; border-radius:6px; padding:12px; background:#fff;\">\n        <h4 style=\"margin:0 0 4px 0; color:#0f172a;\">Fiche Révision n°1</h4>\n        <p style=\"margin:0; font-size:13px; color:#334155;\">Les balises de formulaires sont indispensables pour le bac STI.</p>\n      </article>"
    },
    {
      "id": "tag-aside",
      "category": "Structuration d'une page",
      "tag": "<aside>",
      "name": "Contenu secondaire (Barre latérale)",
      "summary": "Définit un contenu en dehors du contenu principal, souvent sous forme de barre latérale ou encadré d'astuce.",
      "howToUse": "Parfait pour des listes de liens associés, des encadrés 'Remarque' ou des citations.",
      "attributes": [],
      "code": "<aside>\n  <h4>Rappel Formulaire :</h4>\n  <p>N'oubliez pas l'attribut name sur chaque champ pour la transmission des données !</p>\n</aside>",
      "previewHtml": "<aside style=\"background:#fef3c7; border-left:4px solid #f59e0b; padding:10px 14px; border-radius:4px; font-size:13px;\">\n        <strong style=\"color:#b45309;\">💡 Rappel Formulaire :</strong>\n        <p style=\"margin:4px 0 0 0; color:#78350f;\">N'oubliez pas l'attribut name sur chaque champ pour la transmission des données !</p>\n      </aside>"
    },
    {
      "id": "tag-main",
      "category": "Structuration d'une page",
      "tag": "<main>",
      "name": "Cœur du document",
      "summary": "Définit le contenu principal d'un document. Unique par page.",
      "howToUse": "Ne mettez qu'un seul élément <main> par document. Excluez-en les en-têtes et pieds de page répétés.",
      "attributes": [],
      "code": "<main>\n  <h1>Tableau de bord de l'élève</h1>\n  <p>Sélectionnez une matière pour commencer à réviser.</p>\n</main>",
      "previewHtml": "<div style=\"border:2px dashed #94a3b8; padding:12px; border-radius:6px; background:#fafafa;\">\n        <span style=\"font-size:10px; font-weight:bold; color:#64748b; text-transform:uppercase;\">Balise &lt;main&gt;</span>\n        <h4 style=\"margin:4px 0; color:#0f172a;\">Tableau de bord de l'élève</h4>\n        <p style=\"margin:0; font-size:13px; color:#475569;\">Sélectionnez une matière pour commencer à réviser.</p>\n      </div>"
    },
    {
      "id": "tag-cite",
      "category": "Texte et Médias",
      "tag": "<cite>",
      "name": "Titre d'une œuvre",
      "summary": "Définit le titre d'une œuvre (livre, tableau, film, chanson).",
      "howToUse": "Affiche le titre en italique par défaut pour désigner formellement une création artistique ou intellectuelle.",
      "attributes": [],
      "code": "<p>D'après le manuel <cite>Informatique STI Tome 1</cite>, les réseaux sont incontournables.</p>",
      "previewHtml": "<p style=\"font-size:13px; margin:0; color:#334155;\">\n        D'après le manuel <cite style=\"font-style:italic; font-weight:bold; color:#4338ca;\">Informatique STI Tome 1</cite>, les réseaux sont incontournables.\n      </p>"
    },
    {
      "id": "tag-p",
      "category": "Texte et Médias",
      "tag": "<p>",
      "name": "Paragraphe de texte",
      "summary": "Définit un paragraphe de texte.",
      "howToUse": "Balise de type bloc qui insère une marge au-dessus et en dessous automatiquement.",
      "attributes": [],
      "code": "<p>Le langage HTML permet de structurer le contenu de la page web.</p>",
      "previewHtml": "<p style=\"margin:0; padding:8px; font-size:13px; color:#334155; background:#fff; border:1px solid #e2e8f0; border-radius:4px;\">\n        Le langage HTML permet de structurer le contenu de la page web.\n      </p>"
    },
    {
      "id": "tag-source",
      "category": "Texte et Médias",
      "tag": "<source>",
      "name": "Ressource multimédia alternative",
      "summary": "Spécifie plusieurs ressources multimédias pour les éléments multimédias (<video> ou <audio>).",
      "howToUse": "Placé dans une balise vidéo ou audio avec différents formats pour garantir la lecture sur tous les navigateurs.",
      "attributes": [
        "src (chemin du fichier)",
        "type (ex: video/mp4)",
        "media"
      ],
      "code": "<video controls>\n  <source src=\"cours.mp4\" type=\"video/mp4\">\n  <source src=\"cours.webm\" type=\"video/webm\">\n</video>",
      "previewHtml": "<div style=\"background:#f8fafc; border:1px solid #cbd5e1; padding:8px 12px; border-radius:4px; font-size:12px; color:#334155;\">\n        📁 Fournit plusieurs sources : MP4 ou WEBM selon le navigateur utilisé.\n      </div>"
    },
    {
      "id": "tag-hn",
      "category": "Texte et Médias",
      "tag": "<h1> à <h6>",
      "name": "Titres hiérarchiques",
      "summary": "Définit un titre de niveau n (de 1 à 6).",
      "howToUse": "h1 est le titre le plus important (titre principal), jusqu'à h6 pour les subdivisions fines.",
      "attributes": [],
      "code": "<h1>Titre H1</h1>\n<h2>Titre H2</h2>\n<h3>Titre H3</h3>",
      "previewHtml": "<div>\n        <h2 style=\"margin:0 0 4px 0; color:#0f172a; font-size:18px;\">Titre H1 Principal</h2>\n        <h3 style=\"margin:0 0 4px 0; color:#334155; font-size:15px;\">Sous-titre H2</h3>\n        <h4 style=\"margin:0; color:#64748b; font-size:13px;\">Sous-titre H3</h4>\n      </div>"
    },
    {
      "id": "tag-hr",
      "category": "Texte et Médias",
      "tag": "<hr>",
      "name": "Ligne de séparation thématique",
      "summary": "Définit une rupture thématique sous forme de ligne horizontale.",
      "howToUse": "Balise orpheline. Sépare élégamment deux blocs de texte ou de révision.",
      "attributes": [],
      "code": "<p>Fin de la première partie.</p>\n<hr>\n<p>Début de la seconde partie.</p>",
      "previewHtml": "<div>\n        <span style=\"font-size:13px; color:#475569;\">Fin de la première partie.</span>\n        <hr style=\"border:none; border-top:2px solid #cbd5e1; margin:8px 0;\">\n        <span style=\"font-size:13px; color:#475569;\">Début de la seconde partie.</span>\n      </div>"
    },
    {
      "id": "tag-img",
      "category": "Texte et Médias",
      "tag": "<img>",
      "name": "Image intégrée",
      "summary": "Intègre une image dans la page web.",
      "howToUse": "Attributs obligatoires : 'src' (adresse de l'image) et 'alt' (texte descriptif de remplacement).",
      "attributes": [
        "src (chemin ou URL)",
        "alt (texte alternatif obligatoire)",
        "width",
        "height"
      ],
      "code": "<img src=\"schema.png\" alt=\"Schéma réseau en étoile\" width=\"200\">",
      "previewHtml": "<div style=\"display:flex; align-items:center; gap:12px; background:#fff; border:1px solid #e2e8f0; padding:10px; border-radius:6px;\">\n        <div style=\"width:60px; height:50px; background:linear-gradient(135deg, #f97316, #ea580c); border-radius:6px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold; font-size:14px;\">IMG</div>\n        <div>\n          <strong style=\"font-size:13px; color:#0f172a;\">Image affichée (src=\"schema.png\")</strong>\n          <span style=\"font-size:11px; display:block; color:#64748b;\">alt: \"Schéma réseau en étoile\"</span>\n        </div>\n      </div>"
    },
    {
      "id": "tag-figure-figcaption",
      "category": "Texte et Médias",
      "tag": "<figure> & <figcaption>",
      "name": "Illustration et sa légende",
      "summary": "<figure> spécifie un conteneur autonome et <figcaption> définit sa légende descriptive.",
      "howToUse": "Encadrez l'image dans <figure> et placez <figcaption> juste après ou avant pour la légende.",
      "attributes": [],
      "code": "<figure>\n  <img src=\"ordi.jpg\" alt=\"Ordinateur de bord\">\n  <figcaption>Figure 1.1 : Architecture d'un microcontrôleur.</figcaption>\n</figure>",
      "previewHtml": "<figure style=\"margin:0; background:#f8fafc; border:1px solid #e2e8f0; padding:10px; border-radius:6px; text-align:center;\">\n        <div style=\"background:#e2e8f0; height:60px; border-radius:4px; display:flex; align-items:center; justify-content:center; color:#64748b; font-size:12px; font-weight:bold;\">[ Image Schéma ]</div>\n        <figcaption style=\"margin-top:6px; font-size:12px; color:#475569; font-style:italic;\">Figure 1.1 : Architecture d'un microcontrôleur.</figcaption>\n      </figure>"
    },
    {
      "id": "tag-audio",
      "category": "Texte et Médias",
      "tag": "<audio>",
      "name": "Lecteur audio sonore",
      "summary": "Intègre du contenu sonore dans un document.",
      "howToUse": "L'attribut 'controls' est indispensable pour afficher la barre de lecture (Play, Pause, Volume).",
      "attributes": [
        "controls",
        "src (chemin audio)",
        "autoplay",
        "loop"
      ],
      "code": "<audio controls src=\"cours.mp3\">\n  Votre navigateur ne supporte pas la balise audio.\n</audio>",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #cbd5e1; padding:8px 14px; border-radius:24px; display:flex; align-items:center; gap:10px; max-width:280px;\">\n        <button style=\"width:28px; height:28px; border-radius:50%; border:none; background:#0284c7; color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer;\">▶</button>\n        <div style=\"flex:1; height:4px; background:#e2e8f0; border-radius:2px;\"><div style=\"width:40%; height:100%; background:#0284c7;\"></div></div>\n        <span style=\"font-size:11px; color:#64748b;\">1:15</span>\n      </div>"
    },
    {
      "id": "tag-video",
      "category": "Texte et Médias",
      "tag": "<video>",
      "name": "Lecteur vidéo multimédia",
      "summary": "Intègre du contenu vidéo dans un document.",
      "howToUse": "Ajoutez 'controls', spécifiez les dimensions 'width' et 'height', et placez vos balises <source>.",
      "attributes": [
        "controls",
        "src",
        "width",
        "height",
        "poster",
        "autoplay"
      ],
      "code": "<video controls width=\"320\" height=\"180\">\n  <source src=\"experience.mp4\" type=\"video/mp4\">\n</video>",
      "previewHtml": "<div style=\"width:240px; height:120px; background:#0f172a; border-radius:6px; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#fff; position:relative;\">\n        <span style=\"font-size:24px;\">🎬</span>\n        <span style=\"font-size:11px; color:#94a3b8;\">Vidéo HTML5 (320x180)</span>\n      </div>"
    },
    {
      "id": "tag-a",
      "category": "Texte et Médias",
      "tag": "<a>",
      "name": "Lien hypertexte",
      "summary": "Définit un lien hypertexte via l'attribut href vers une autre page ou ancre.",
      "howToUse": "target=\"_blank\" ouvre dans un nouvel onglet. href=\"#id\" renvoie vers une section de la même page.",
      "attributes": [
        "href (adresse URL ou ancre #)",
        "target (_blank, _self)"
      ],
      "code": "<a href=\"https://lyceeste.tn\" target=\"_blank\">Accéder au site officiel</a>",
      "previewHtml": "<a href=\"javascript:void(0)\" style=\"color:#0284c7; text-decoration:underline; font-weight:600; font-size:14px;\">\n        🔗 Accéder au site officiel (nouvel onglet)\n      </a>"
    },
    {
      "id": "tag-br",
      "category": "Texte et Médias",
      "tag": "<br>",
      "name": "Retour à la ligne",
      "summary": "Définit un retour à la ligne sans changer de paragraphe.",
      "howToUse": "Balise orpheline (auto-fermante). Utile pour des adresses ou vers de poésie.",
      "attributes": [],
      "code": "<p>Lycée Technique STI<br>Section Sciences et Technologies<br>Promotion 2026</p>",
      "previewHtml": "<div style=\"font-size:13px; line-height:1.5; color:#334155;\">\n        Lycée Technique STI<br>Section Sciences et Technologies<br>Promotion 2026\n      </div>"
    },
    {
      "id": "tag-address",
      "category": "Texte et Médias",
      "tag": "<address>",
      "name": "Coordonnées de l'auteur",
      "summary": "Définit les coordonnées de l'auteur/propriétaire d'un document ou d'un article.",
      "howToUse": "S'affiche généralement en italique, contient email ou adresse postale.",
      "attributes": [],
      "code": "<address>\n  Contact : <a href=\"mailto:eleve@sti.tn\">eleve@sti.tn</a><br>\n  Tunisie\n</address>",
      "previewHtml": "<address style=\"font-style:italic; font-size:13px; color:#475569; border-left:3px solid #64748b; padding-left:10px;\">\n        Contact : <a href=\"#\" style=\"color:#0284c7;\">eleve@sti.tn</a><br>Tunisie\n      </address>"
    },
    {
      "id": "tag-output",
      "category": "Texte et Médias",
      "tag": "<output>",
      "name": "Résultat d'un calcul",
      "summary": "Définit le résultat d'un calcul ou de l'exécution d'un script.",
      "howToUse": "Souvent couplé à un formulaire ou un événement JavaScript oninput pour afficher le résultat en temps réel.",
      "attributes": [
        "for",
        "name"
      ],
      "code": "<form oninput=\"resultat.value = parseInt(a.value) + parseInt(b.value)\">\n  <input type=\"number\" id=\"a\" value=\"10\"> +\n  <input type=\"number\" id=\"b\" value=\"5\"> =\n  <output name=\"resultat\">15</output>\n</form>",
      "previewHtml": "<div style=\"display:flex; align-items:center; gap:8px; font-size:13px;\">\n        <span style=\"padding:4px 8px; background:#f1f5f9; border-radius:4px;\">10</span> +\n        <span style=\"padding:4px 8px; background:#f1f5f9; border-radius:4px;\">5</span> =\n        <output style=\"background:#dcfce7; color:#15803d; font-weight:bold; padding:4px 8px; border-radius:4px;\">15</output>\n      </div>"
    },
    {
      "id": "tag-mark",
      "category": "Texte et Médias",
      "tag": "<mark>",
      "name": "Texte surligné en surbrillance",
      "summary": "Définit le texte qui doit être marqué ou mis en surbrillance.",
      "howToUse": "Surligne automatiquement le texte en jaune pour attirer l'attention.",
      "attributes": [],
      "code": "<p>Attention, l'attribut <mark>name</mark> est obligatoire pour le formulaire !</p>",
      "previewHtml": "<p style=\"font-size:13px; margin:0; color:#1e293b;\">\n        Attention, l'attribut <mark style=\"background:#fef08a; color:#854d0e; padding:2px 4px; border-radius:2px; font-weight:bold;\">name</mark> est obligatoire pour le formulaire !\n      </p>"
    },
    {
      "id": "tag-details-summary",
      "category": "Texte et Médias",
      "tag": "<details> & <summary>",
      "name": "Bloc dépliable interactif",
      "summary": "<details> spécifie des détails supplémentaires pliables et <summary> son titre visible.",
      "howToUse": "Cliquez sur le titre pour ouvrir ou refermer le volet. L'attribut 'open' le laisse ouvert par défaut.",
      "attributes": [
        "open (booléen)"
      ],
      "code": "<details>\n  <summary>Voir la réponse</summary>\n  <p>La balise correcte est &lt;details&gt;.</p>\n</details>",
      "previewHtml": "<details style=\"background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:8px 12px; cursor:pointer;\" open>\n        <summary style=\"font-weight:bold; color:#0f172a; font-size:13px;\">▶ Voir la réponse</summary>\n        <p style=\"margin:6px 0 0 14px; font-size:12px; color:#15803d; font-weight:600;\">✓ La balise correcte est &lt;details&gt;.</p>\n      </details>"
    },
    {
      "id": "tag-span",
      "category": "Conteneurs",
      "tag": "<span>",
      "name": "Conteneur en ligne (inline)",
      "summary": "Regroupe des éléments ou du texte dans un bloc de contenu en ligne.",
      "howToUse": "Utilisé pour styler un mot ou groupe de mots au milieu d'une phrase sans retour à la ligne.",
      "attributes": [
        "class",
        "id",
        "style"
      ],
      "code": "<p>Voici un mot en <span style=\"color:red; font-weight:bold;\">rouge</span> au milieu du texte.</p>",
      "previewHtml": "<p style=\"font-size:13px; margin:0;\">\n        Voici un mot en <span style=\"color:#ef4444; font-weight:bold; background:#fee2e2; padding:2px 6px; border-radius:3px;\">rouge</span> au milieu du texte.\n      </p>"
    },
    {
      "id": "tag-div",
      "category": "Conteneurs",
      "tag": "<div>",
      "name": "Conteneur générique de bloc (block)",
      "summary": "Grouper plusieurs éléments HTML de type block pour la mise en page.",
      "howToUse": "Balise universelle pour créer des cartes, des boîtes, des grilles flexbox ou grid.",
      "attributes": [
        "class",
        "id",
        "style"
      ],
      "code": "<div class=\"carte-cours\">\n  <h3>Informatique</h3>\n  <p>Apprenez à coder en HTML5.</p>\n</div>",
      "previewHtml": "<div style=\"border:2px solid #38bdf8; background:#f0f9ff; padding:10px; border-radius:6px;\">\n        <h4 style=\"margin:0 0 4px 0; color:#0284c7;\">Informatique</h4>\n        <p style=\"margin:0; font-size:12px; color:#0369a1;\">Conteneur de type bloc occupant la largeur disponible.</p>\n      </div>"
    },
    {
      "id": "tag-iframe",
      "category": "Conteneurs",
      "tag": "<iframe>",
      "name": "Cadre en ligne (Iframe)",
      "summary": "Définit un cadre en ligne pour intégrer un document externe.",
      "howToUse": "Utilisé pour intégrer une carte, une vidéo YouTube ou une page web externe.",
      "attributes": [
        "src (URL de la ressource)",
        "name",
        "width",
        "height"
      ],
      "code": "<iframe src=\"https://example.com\" width=\"300\" height=\"150\" name=\"cadre\"></iframe>",
      "previewHtml": "<div style=\"border:2px dashed #64748b; padding:12px; border-radius:6px; text-align:center; background:#f8fafc;\">\n        <strong style=\"font-size:13px; color:#1e293b;\">🪟 Cadre &lt;iframe&gt; externe</strong>\n        <span style=\"font-size:11px; display:block; color:#64748b;\">Affiche une page isolée à l'intérieur du site.</span>\n      </div>"
    },
    {
      "id": "tag-ul",
      "category": "Listes",
      "tag": "<ul>",
      "name": "Liste à puces non ordonnée",
      "summary": "Définit une liste à puces non ordonnée.",
      "howToUse": "Contient une suite d'éléments <li> sans notion de classement numérique.",
      "attributes": [],
      "code": "<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n</ul>",
      "previewHtml": "<ul style=\"margin:0; padding-left:20px; font-size:13px; color:#334155;\">\n        <li>HTML5</li>\n        <li>CSS3</li>\n        <li>JavaScript</li>\n      </ul>"
    },
    {
      "id": "tag-ol",
      "category": "Listes",
      "tag": "<ol>",
      "name": "Liste ordonnée numérotée",
      "summary": "Définit une liste ordonnée avec numéros ou lettres.",
      "howToUse": "Permet de classer avec des chiffres (1, 2, 3), lettres (A, B, C) ou chiffres romains (I, II).",
      "attributes": [
        "reversed (ordre décroissant)",
        "type (1, a, A, i, I)",
        "start (valeur de début)"
      ],
      "code": "<ol type=\"1\" start=\"1\">\n  <li>Écrire le code</li>\n  <li>Tester sur le navigateur</li>\n  <li>Valider l'examen</li>\n</ol>",
      "previewHtml": "<ol style=\"margin:0; padding-left:20px; font-size:13px; color:#334155;\">\n        <li>Écrire le code</li>\n        <li>Tester sur le navigateur</li>\n        <li>Valider l'examen</li>\n      </ol>"
    },
    {
      "id": "tag-li",
      "category": "Listes",
      "tag": "<li>",
      "name": "Élément d'une liste",
      "summary": "Définit un élément dans une liste à puces <ul> ou ordonnée <ol>.",
      "howToUse": "Se place toujours comme enfant direct de <ul> ou <ol>.",
      "attributes": [
        "value (pour forcer un numéro)"
      ],
      "code": "<li>Élément de la liste</li>",
      "previewHtml": "<div style=\"font-size:13px; color:#334155;\">• Élément de liste &lt;li&gt;</div>"
    },
    {
      "id": "tag-table-complete",
      "category": "Tableau",
      "tag": "<table>",
      "name": "Tableau de données",
      "summary": "Définit un tableau avec thead, tbody, tfoot, caption, tr, th, td.",
      "howToUse": "tr = ligne, th = cellule d'en-tête (en gras et centrée), td = cellule de données standard, caption = légende du tableau.",
      "attributes": [
        "border",
        "cellpadding",
        "cellspacing"
      ],
      "code": "<table>\n  <caption>Moyennes STI</caption>\n  <thead>\n    <tr><th>Matière</th><th>Note</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Informatique</td><td>18/20</td></tr>\n    <tr><td>Technologie</td><td>16/20</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Moyenne</td><td>17/20</td></tr>\n  </tfoot>\n</table>",
      "previewHtml": "<table style=\"width:100%; border-collapse:collapse; font-size:12px;\">\n        <caption style=\"font-weight:bold; margin-bottom:4px; color:#0f172a;\">Moyennes STI</caption>\n        <thead>\n          <tr style=\"background:#f1f5f9;\"><th style=\"border:1px solid #cbd5e1; padding:6px;\">Matière</th><th style=\"border:1px solid #cbd5e1; padding:6px;\">Note</th></tr>\n        </thead>\n        <tbody>\n          <tr><td style=\"border:1px solid #cbd5e1; padding:6px;\">Informatique</td><td style=\"border:1px solid #cbd5e1; padding:6px;\">18/20</td></tr>\n          <tr style=\"background:#f8fafc;\"><td style=\"border:1px solid #cbd5e1; padding:6px;\">Technologie</td><td style=\"border:1px solid #cbd5e1; padding:6px;\">16/20</td></tr>\n        </tbody>\n        <tfoot>\n          <tr style=\"background:#e2e8f0; font-weight:bold;\"><td style=\"border:1px solid #cbd5e1; padding:6px;\">Moyenne</td><td style=\"border:1px solid #cbd5e1; padding:6px;\">17/20</td></tr>\n        </tfoot>\n      </table>"
    },
    {
      "id": "tag-form",
      "category": "Éléments de formulaire",
      "tag": "<form>",
      "name": "Formulaire de saisie & Validation JS",
      "summary": "Crée un formulaire HTML pour transmettre les données saisies par l'utilisateur vers un script serveur après validation.",
      "howToUse": "RÈGLE D'OR STI : Dans nos cours et examens, on N'UTILISE PAS l'attribut 'target' ! À la place, on utilise toujours 'onsubmit=\"return nomDeLaFonction()\"'. L'attribut 'action' donne le fichier cible (ex: traitement.php), 'method' donne la méthode (post ou get), et 'onsubmit' appelle la fonction JavaScript qui valide tous les champs (nom, âge, note...) et renvoie false pour bloquer ou true pour envoyer.",
      "attributes": [
        "action : URL ou fichier de traitement où envoyer les données (ex: traitement.php)",
        "method : 'post' (recommandé pour masquer les données) ou 'get'",
        "onsubmit : onsubmit=\"return valider()\" pour exécuter la fonction JavaScript de validation (retourne true ou false)",
        "⚠️ Note STI : target n'est pas utilisé dans nos formulaires"
      ],
      "code": "<!-- Structure officielle STI d'un Formulaire avec Validation JS -->\n<form action=\"traitement.php\" method=\"post\" onsubmit=\"return validerFormulaire()\">\n  <label for=\"nomEleve\">Nom :</label>\n  <input type=\"text\" id=\"nomEleve\" name=\"nom\">\n\n  <label for=\"noteEleve\">Note :</label>\n  <input type=\"number\" id=\"noteEleve\" name=\"note\">\n\n  <input type=\"submit\" value=\"Valider et Envoyer\">\n</form>\n\n<script>\nfunction validerFormulaire() {\n  // 1. Récupération des valeurs saisies via getElementById\n  let nom = document.getElementById(\"nomEleve\").value;\n  let note = document.getElementById(\"noteEleve\").value;\n\n  // 2. Vérification que le champ nom n'est pas vide\n  if (nom.trim() == \"\") {\n    alert(\"Erreur : Le nom est obligatoire !\");\n    return false; // BLOQUE L'ENVOI DU FORMULAIRE\n  }\n\n  // 3. Vérification de la note (entre 0 et 20)\n  if (isNaN(note) || note < 0 || note > 20) {\n    alert(\"Erreur : La note doit être comprise entre 0 et 20 !\");\n    return false; // BLOQUE L'ENVOI DU FORMULAIRE\n  }\n\n  // 4. Si toutes les conditions sont respectées :\n  alert(\"Formulaire vérifié avec succès ! Envoi des données...\");\n  return true; // AUTORISE L'ENVOI VERS ACTION=\"traitement.php\"\n}\n</script>",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #cbd5e1; border-radius:8px; padding:16px;\">\n        <div style=\"background:#e0f2fe; border-left:4px solid #0284c7; padding:8px 12px; border-radius:4px; margin-bottom:12px; font-size:12px; color:#0369a1;\">\n          💡 <strong>Modèle STI :</strong> <code>&lt;form action=\"traitement.php\" method=\"post\" onsubmit=\"return valider()\"&gt;</code> (sans <em>target</em>).\n        </div>\n        <form onsubmit=\"event.preventDefault(); let n = document.getElementById('demoNom').value.trim(); let note = parseFloat(document.getElementById('demoNote').value); let res = document.getElementById('formDemoFeedback'); if(n === '') { res.innerHTML = '❌ <strong>return false (Envoi bloqué) :</strong> Le champ Nom est vide !'; res.style.background='#fee2e2'; res.style.color='#991b1b'; return false; } if(isNaN(note) || note < 0 || note > 20) { res.innerHTML = '❌ <strong>return false (Envoi bloqué) :</strong> La note doit être entre 0 et 20 !'; res.style.background='#fee2e2'; res.style.color='#991b1b'; return false; } res.innerHTML = '✅ <strong>return true (Envoi validé) :</strong> Données conformes pour &quot;' + n + '&quot; (Note: ' + note + '/20) ! Le formulaire part vers traitement.php.'; res.style.background='#dcfce7'; res.style.color='#166534'; return true;\" style=\"display:flex; flex-direction:column; gap:10px;\">\n          <div>\n            <label style=\"display:block; font-size:12px; font-weight:600; color:#1e293b; margin-bottom:3px;\">Nom de l'élève :</label>\n            <input type=\"text\" id=\"demoNom\" placeholder=\"Tapez un nom...\" style=\"width:100%; box-sizing:border-box; padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;\">\n          </div>\n          <div>\n            <label style=\"display:block; font-size:12px; font-weight:600; color:#1e293b; margin-bottom:3px;\">Note obtenue (sur 20) :</label>\n            <input type=\"number\" id=\"demoNote\" placeholder=\"Ex: 17\" style=\"width:100%; box-sizing:border-box; padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;\">\n          </div>\n          <button type=\"submit\" style=\"background:#16a34a; color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:bold; cursor:pointer; font-size:13px; margin-top:4px;\">\n            Tester la fonction de validation (onsubmit)\n          </button>\n          <div id=\"formDemoFeedback\" style=\"font-size:12px; padding:8px 12px; border-radius:4px; background:#f8fafc; color:#64748b; font-family:monospace;\">\n            En attente de clic sur le bouton de soumission...\n          </div>\n        </form>\n      </div>"
    },
    {
      "id": "tag-fieldset-legend",
      "category": "Éléments de formulaire",
      "tag": "<fieldset> & <legend>",
      "name": "Encadrement et Titre de Formulaire",
      "summary": "<fieldset> regroupe des éléments liés dans un formulaire et <legend> définit sa légende.",
      "howToUse": "Entourez vos champs de coordonnées ou options dans un <fieldset> pour une présentation claire et structurée.",
      "attributes": [],
      "code": "<fieldset>\n  <legend>Identité de l'élève</legend>\n  <label>Nom : <input type=\"text\" name=\"nom\"></label>\n</fieldset>",
      "previewHtml": "<fieldset style=\"border:1px solid #cbd5e1; border-radius:6px; padding:10px; background:#fff;\">\n        <legend style=\"font-weight:bold; color:#0f172a; padding:0 6px; font-size:12px;\">Identité de l'élève</legend>\n        <span style=\"font-size:12px; color:#475569;\">Nom : </span><input type=\"text\" placeholder=\"Votre nom\" style=\"padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px; font-size:12px;\">\n      </fieldset>"
    },
    {
      "id": "tag-label",
      "category": "Éléments de formulaire",
      "tag": "<label>",
      "name": "Libellé de champ",
      "summary": "Définit un libellé textuel pour un élément graphique ou champ de formulaire.",
      "howToUse": "L'attribut 'for' doit correspondre à l'identifiant 'id' du champ cible. Cliquer sur le texte donne le focus au champ.",
      "attributes": [
        "for (id du champ relié)"
      ],
      "code": "<label for=\"emailUtilisateur\">Adresse Email :</label>\n<input type=\"email\" id=\"emailUtilisateur\" name=\"email\">",
      "previewHtml": "<label style=\"font-size:13px; font-weight:600; color:#1e293b; cursor:pointer;\">\n        Adresse Email : <input type=\"email\" placeholder=\"eleve@domaine.tn\" style=\"margin-left:6px; padding:4px 8px; border:1px solid #cbd5e1; border-radius:4px;\">\n      </label>"
    },
    {
      "id": "tag-input",
      "category": "Éléments de formulaire",
      "tag": "<input>",
      "name": "Champs de saisie interactifs",
      "summary": "Définit un champ de saisie (texte, mot de passe, nombre, case, radio, date, bouton).",
      "howToUse": "Le comportement dépend de l'attribut type : text, password, number, checkbox, radio, date, time, submit, button, reset.",
      "attributes": [
        "name (nom de variable envoyé au serveur)",
        "value (valeur par défaut)",
        "placeholder (texte d'aide grisé)",
        "readonly (lecture seule)",
        "required (champ obligatoire)",
        "disabled (désactivé)",
        "min, max (bornes pour number, range, date)",
        "checked (coché par défaut pour checkbox/radio)"
      ],
      "code": "<!-- Types de l'annexe -->\n<input type=\"text\" placeholder=\"Texte\" required>\n<input type=\"password\" placeholder=\"Mot de passe\">\n<input type=\"number\" min=\"0\" max=\"20\">\n<input type=\"date\">\n<input type=\"checkbox\" checked> Accepter\n<input type=\"radio\" name=\"choix\" checked> Choix A",
      "previewHtml": "<div style=\"display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12px;\">\n        <input type=\"text\" placeholder=\"type='text'\" style=\"padding:4px; border:1px solid #cbd5e1; border-radius:4px;\">\n        <input type=\"password\" value=\"secret12\" style=\"padding:4px; border:1px solid #cbd5e1; border-radius:4px;\">\n        <input type=\"number\" value=\"18\" min=\"0\" max=\"20\" style=\"padding:4px; border:1px solid #cbd5e1; border-radius:4px;\">\n        <input type=\"date\" value=\"2026-06-15\" style=\"padding:4px; border:1px solid #cbd5e1; border-radius:4px;\">\n        <label><input type=\"checkbox\" checked> type=\"checkbox\"</label>\n        <label><input type=\"radio\" checked> type=\"radio\"</label>\n      </div>"
    },
    {
      "id": "tag-textarea",
      "category": "Éléments de formulaire",
      "tag": "<textarea>",
      "name": "Zone de texte multilignes",
      "summary": "Définit une zone de saisie de texte multilignes.",
      "howToUse": "Contrôlez le nombre de lignes et colonnes visibles avec rows et cols.",
      "attributes": [
        "name",
        "cols",
        "rows",
        "readonly",
        "required",
        "disabled",
        "placeholder",
        "maxlength"
      ],
      "code": "<textarea name=\"commentaire\" rows=\"3\" cols=\"30\" placeholder=\"Tapez votre message ici...\"></textarea>",
      "previewHtml": "<textarea rows=\"2\" placeholder=\"Tapez votre message multiligne ici...\" style=\"width:100%; padding:6px; border:1px solid #cbd5e1; border-radius:4px; font-size:12px;\"></textarea>"
    },
    {
      "id": "tag-select-datalist-option",
      "category": "Éléments de formulaire",
      "tag": "<select> & <datalist>",
      "name": "Menu déroulant et Suggestions",
      "summary": "<select> définit une liste déroulante et <datalist> une liste de suggestions connectée à un input.",
      "howToUse": "Les choix sont spécifiés avec <option>. Ajoutez selected sur l'option par défaut.",
      "attributes": [
        "selected (sur option)",
        "list (sur input pour relier au datalist)"
      ],
      "code": "<!-- Select -->\n<select name=\"branche\">\n  <option value=\"sti\" selected>Sciences & Technologies (STI)</option>\n  <option value=\"eco\">Économie</option>\n</select>\n\n<!-- Datalist -->\n<input list=\"langages\" name=\"lg\">\n<datalist id=\"langages\">\n  <option value=\"HTML5\">\n  <option value=\"CSS3\">\n  <option value=\"JavaScript\">\n</datalist>",
      "previewHtml": "<div>\n        <label style=\"display:block; font-size:12px; margin-bottom:4px; font-weight:600;\">Menu déroulant &lt;select&gt; :</label>\n        <select style=\"padding:5px; border:1px solid #cbd5e1; border-radius:4px; width:100%; font-size:12px;\">\n          <option selected>Sciences & Technologies (STI)</option>\n          <option>Mathématiques</option>\n          <option>Informatique</option>\n        </select>\n      </div>"
    },
    {
      "id": "event-onclick",
      "category": "Évènements",
      "tag": "onclick",
      "name": "onclick - Clic sur un élément",
      "summary": "Se déclenche lors d'un clic (avec la souris ou appui tactile) sur l'élément.",
      "howToUse": "C'est l'événement le plus utilisé ! Il permet d'exécuter une action dès que l'internaute clique sur un bouton, un lien, une image ou une boîte <div>. En examen STI, on l'utilise pour lancer un calcul, afficher une alerte ou manipuler le DOM.",
      "attributes": [
        "Utilisable sur presque toutes les balises : <button>, <a>, <input>, <div>, <img>"
      ],
      "code": "<!-- Déclenchement direct via onclick -->\n<button onclick=\"saluerUtilisateur()\">Cliquez pour valider</button>\n\n<script>\nfunction saluerUtilisateur() {\n  alert(\"Bravo ! Vous venez de déclencher l'événement onclick.\");\n}\n</script>",
      "previewHtml": "<div style=\"text-align:center; padding:15px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;\">\n        <p style=\"font-size:13px; color:#475569; margin-bottom:10px;\">Cliquez sur le bouton ci-dessous pour tester :</p>\n        <button onclick=\"let c = document.getElementById('clickCounter'); c.textContent = parseInt(c.textContent) + 1; alert('Événement onclick réussi ! Nombre de clics : ' + c.textContent);\" style=\"background:#0284c7; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow:0 2px 4px rgba(0,0,0,0.1);\">\n          🖱️ Cliquez-moi !\n        </button>\n        <div style=\"margin-top:10px; font-size:12px; color:#64748b;\">Compteur de clics : <strong id=\"clickCounter\" style=\"color:#0284c7;\">0</strong></div>\n      </div>"
    },
    {
      "id": "event-onmouseover",
      "category": "Évènements",
      "tag": "onmouseover",
      "name": "onmouseover - Survol par le pointeur de la souris",
      "summary": "Se déclenche lorsque le pointeur de la souris survole ou entre sur la surface de l'élément.",
      "howToUse": "Permet de déclencher un traitement JavaScript au passage de la souris (ex: afficher un menu déroulant, changer une image, agrandir une carte). ATTENTION en STI : :hover est utilisé pour le style CSS pur, tandis qu'onmouseover est utilisé pour exécuter du code JavaScript !",
      "attributes": [
        "<div>, <img>, <a>, <button>, <td>"
      ],
      "code": "<div id=\"boite\" onmouseover=\"survolEntree()\" onmouseout=\"survolSortie()\">\n  Passez votre souris ici !\n</div>\n\n<script>\nfunction survolEntree() {\n  document.getElementById(\"boite\").style.backgroundColor = \"#facc15\";\n  document.getElementById(\"boite\").textContent = \"Souris détectée au-dessus !\";\n}\n</script>",
      "previewHtml": "<div onmouseover=\"this.style.background='#fef08a'; this.style.borderColor='#eab308'; this.querySelector('.hover-txt').textContent='🎯 OUI ! Événement onmouseover déclenché !';\" onmouseout=\"this.style.background='#ffffff'; this.style.borderColor='#cbd5e1'; this.querySelector('.hover-txt').textContent='Déplacez votre curseur au-dessus de cette boîte';\" style=\"border:2px dashed #cbd5e1; border-radius:8px; padding:20px; text-align:center; cursor:pointer; transition:all 0.2s; background:#fff;\">\n        <span style=\"font-size:24px; display:block; margin-bottom:4px;\">🖱️</span>\n        <strong class=\"hover-txt\" style=\"font-size:13px; color:#1e293b;\">Déplacez votre curseur au-dessus de cette boîte</strong>\n      </div>"
    },
    {
      "id": "event-onmouseout",
      "category": "Évènements",
      "tag": "onmouseout",
      "name": "onmouseout - Sortie du pointeur de la souris",
      "summary": "Se déclenche lorsque le pointeur de la souris sort de la surface de l'élément.",
      "howToUse": "Fonctionne presque toujours en tandem avec onmouseover. Quand l'internaute quitte l'élément, onmouseout réinitialise l'apparence originale (fermer un popup, rétablir la couleur initiale, masquer une info-bulle).",
      "attributes": [
        "<div>, <img>, <a>, <button>, <p>"
      ],
      "code": "<img src=\"image1.jpg\" id=\"photo\"\n     onmouseover=\"this.src='image2.jpg'\"\n     onmouseout=\"this.src='image1.jpg'\">",
      "previewHtml": "<div onmouseenter=\"document.getElementById('outStatus').textContent='Curseur à l\\'intérieur...';\" onmouseleave=\"document.getElementById('outStatus').textContent='👋 Le curseur vient de sortir : onmouseout déclenché !';\" style=\"background:#f1f5f9; border:2px solid #94a3b8; border-radius:8px; padding:15px; text-align:center;\">\n        <p style=\"margin:0 0 6px 0; font-size:13px; font-weight:600; color:#334155;\">Zone de test de sortie de souris</p>\n        <span id=\"outStatus\" style=\"font-size:12px; color:#0284c7; font-weight:bold;\">Entrez puis sortez votre souris de ce cadre</span>\n      </div>"
    },
    {
      "id": "event-onfocus",
      "category": "Évènements",
      "tag": "onfocus",
      "name": "onfocus - Prise du focus (Sélection d'un champ)",
      "summary": "Se déclenche au moment où l'élément obtient le focus (clic à l'intérieur ou touche Tab).",
      "howToUse": "Indispensable pour guider l'élève/utilisateur dans un formulaire. Dès qu'un champ est actif, on peut éclairer sa bordure, afficher un message d'aide en dessous ou effacer un texte d'exemple.",
      "attributes": [
        "<input>, <textarea>, <select>, <button>, <a>"
      ],
      "code": "<input type=\"text\" id=\"prenom\" onfocus=\"activerAide()\">\n<span id=\"aide\" style=\"display:none; color:blue;\">Tapez votre prénom en majuscules.</span>\n\n<script>\nfunction activerAide() {\n  document.getElementById(\"aide\").style.display = \"inline\";\n}\n</script>",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #e2e8f0; padding:14px; border-radius:6px;\">\n        <label style=\"display:block; font-size:12px; margin-bottom:4px; font-weight:600; color:#1e293b;\">Cliquez dans ce champ pour tester onfocus :</label>\n        <input type=\"text\" placeholder=\"Cliquez ici...\" onfocus=\"this.style.borderColor='#38bdf8'; this.style.boxShadow='0 0 0 3px rgba(56,189,248,0.3)'; document.getElementById('focusFeedback').innerHTML='🟢 <strong>onfocus activé :</strong> Vous avez sélectionné ce champ !';\" onblur=\"this.style.borderColor='#cbd5e1'; this.style.boxShadow='none'; document.getElementById('focusFeedback').innerHTML='⚪ Champ inactif (en attente de focus)';\" style=\"width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px; outline:none; transition:0.2s;\">\n        <div id=\"focusFeedback\" style=\"margin-top:6px; font-size:12px; color:#0284c7;\">⚪ Champ inactif (en attente de focus)</div>\n      </div>"
    },
    {
      "id": "event-onblur",
      "category": "Évènements",
      "tag": "onblur",
      "name": "onblur - Perte du focus (Sortie d'un champ)",
      "summary": "Se déclenche au moment où l'élément perd le focus (l'utilisateur clique ailleurs).",
      "howToUse": "C'est l'événement N°1 en examen STI pour la vérification immédiate des formulaires ! Dès que l'utilisateur quitte le champ pour passer au suivant, on vérifie si la valeur saisie respecte les conditions (ex: note entre 0 et 20, email avec @, mot de passe non vide).",
      "attributes": [
        "<input>, <textarea>, <select>"
      ],
      "code": "<input type=\"number\" id=\"noteSTI\" onblur=\"verifierNote()\">\n\n<script>\nfunction verifierNote() {\n  let v = document.getElementById(\"noteSTI\").value;\n  if (v < 0 || v > 20) {\n    alert(\"Attention : la note doit être comprise entre 0 et 20 !\");\n  }\n}\n</script>",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #e2e8f0; padding:14px; border-radius:6px;\">\n        <label style=\"display:block; font-size:12px; margin-bottom:4px; font-weight:600; color:#1e293b;\">Tapez une note sur 20 puis cliquez en dehors du champ :</label>\n        <input type=\"number\" id=\"testNoteInput\" placeholder=\"Ex: 18 ou 25\" onblur=\"let val = parseFloat(this.value); let res = document.getElementById('blurResult'); if (isNaN(val)) { res.innerHTML = '⚪ Veuillez taper un nombre.'; } else if (val < 0 || val > 20) { res.innerHTML = '❌ <strong>onblur :</strong> Erreur ! La note ' + val + ' n\\'est pas entre 0 et 20 !'; res.style.color='#dc2626'; } else { res.innerHTML = '✅ <strong>onblur :</strong> Parfait ! Note de ' + val + '/20 valide.'; res.style.color='#16a34a'; }\" style=\"width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;\">\n        <div id=\"blurResult\" style=\"margin-top:6px; font-size:12px; color:#64748b;\">⚪ Tapez une note et cliquez en dehors pour déclencher onblur.</div>\n      </div>"
    },
    {
      "id": "event-oninput",
      "category": "Évènements",
      "tag": "oninput",
      "name": "oninput - Modification immédiate en temps réel",
      "summary": "Se déclenche dès que la valeur d'un élément a changé (à chaque touche frappée).",
      "howToUse": "Réagit en direct à la vitesse de frappe de l'utilisateur ! Utilisé pour compter les caractères en direct, filtrer un tableau dynamiquement pendant qu'on tape, ou synchroniser deux éléments sans attendre la validation.",
      "attributes": [
        "<input type=\"text\">, <input type=\"range\">, <textarea>"
      ],
      "code": "<input type=\"text\" oninput=\"compteur.textContent = this.value.length\">\n<p>Longueur du texte : <span id=\"compteur\">0</span> caractères</p>",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #e2e8f0; padding:14px; border-radius:6px;\">\n        <label style=\"display:block; font-size:12px; margin-bottom:4px; font-weight:600; color:#1e293b;\">Tapez du texte pour voir oninput en temps réel :</label>\n        <input type=\"text\" placeholder=\"Écrivez n'importe quoi...\" oninput=\"document.getElementById('inputCount').textContent = this.value.length; document.getElementById('inputMirror').textContent = this.value || '(aucun texte)';\" style=\"width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;\">\n        <div style=\"margin-top:8px; font-size:12px; display:flex; justify-content:space-between; color:#475569;\">\n          <span>Nombre de caractères : <strong id=\"inputCount\" style=\"color:#0284c7;\">0</strong></span>\n          <span>Aperçu en direct : <em id=\"inputMirror\" style=\"color:#16a34a;\">(aucun texte)</em></span>\n        </div>\n      </div>"
    },
    {
      "id": "event-onchange",
      "category": "Évènements",
      "tag": "onchange",
      "name": "onchange - Valeur modifiée et validée",
      "summary": "Se déclenche lorsque la valeur d'un élément est modifiée et que le changement est validé (après avoir quitté le champ ou changé de sélection).",
      "howToUse": "DIFFÉRENCE CLÉ STI AVEC ONINPUT : oninput se déclenche à chaque lettre tapée, alors qu'onchange attend que l'utilisateur ait fini de modifier et sorte du champ. Sur un <select>, onchange se déclenche dès qu'une nouvelle option est choisie !",
      "attributes": [
        "<select>, <input type=\"checkbox\">, <input type=\"radio\">, <input type=\"text\">"
      ],
      "code": "<select onchange=\"changerSection(this.value)\">\n  <option value=\"STI\">Sciences et Technologies</option>\n  <option value=\"ECO\">Économie</option>\n</select>\n\n<script>\nfunction changerSection(choix) {\n  alert(\"Vous avez choisi : \" + choix);\n}\n</script>",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #e2e8f0; padding:14px; border-radius:6px;\">\n        <label style=\"display:block; font-size:12px; margin-bottom:4px; font-weight:600; color:#1e293b;\">Choisissez une filière dans la liste :</label>\n        <select onchange=\"let box = document.getElementById('changeFeedback'); box.innerHTML = '⚡ <strong>onchange déclenché :</strong> Option choisie : &quot;' + this.value + '&quot; !'; box.style.background='#dcfce7'; box.style.color='#15803d';\" style=\"width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;\">\n          <option value=\"Sciences et Technologies de l'Industrie (STI)\">Sciences et Technologies (STI)</option>\n          <option value=\"Informatique & Programmation\">Informatique & Programmation</option>\n          <option value=\"Électronique & Systèmes Numériques\">Électronique & Systèmes Numériques</option>\n        </select>\n        <div id=\"changeFeedback\" style=\"margin-top:8px; font-size:12px; padding:6px 10px; border-radius:4px; background:#f1f5f9; color:#475569;\">\n          Sélectionnez une option pour déclencher l'événement onchange.\n        </div>\n      </div>"
    },
    {
      "id": "event-onsubmit",
      "category": "Évènements",
      "tag": "onsubmit",
      "name": "onsubmit - Envoi / Soumission du formulaire",
      "summary": "Se déclenche lorsqu'un formulaire est soumis (clic sur le bouton Envoyer / Submit ou touche Entrée).",
      "howToUse": "Se place UNIQUEMENT sur la balise <form>. Permet de contrôler toutes les données saisies avant de les transmettre au serveur. Si une erreur existe, on retourne false (return false;) ou on utilise event.preventDefault() pour bloquer l'envoi !",
      "attributes": [
        "<form>"
      ],
      "code": "<form onsubmit=\"return verifierTout()\">\n  <input type=\"text\" id=\"login\" placeholder=\"Nom d'utilisateur\">\n  <input type=\"submit\" value=\"Se connecter\">\n</form>\n\n<script>\nfunction verifierTout() {\n  let log = document.getElementById(\"login\").value;\n  if (log.trim() === \"\") {\n    alert(\"Le champ identifiant est obligatoire !\");\n    return false; // Bloque la soumission\n  }\n  return true; // Envoi autorisé\n}\n</script>",
      "previewHtml": "<form onsubmit=\"event.preventDefault(); let val = document.getElementById('loginInput').value; let fb = document.getElementById('submitFeedback'); if(!val.trim()){ fb.innerHTML = '❌ <strong>onsubmit bloqué :</strong> Veuillez remplir le champ !'; fb.style.color='#dc2626'; } else { fb.innerHTML = '✅ <strong>onsubmit validé :</strong> Formulaire expédié pour &quot;' + val + '&quot; !'; fb.style.color='#16a34a'; }\" style=\"background:#fff; border:1px solid #e2e8f0; padding:14px; border-radius:6px; display:flex; flex-direction:column; gap:8px;\">\n        <label style=\"font-size:12px; font-weight:600;\">Test de validation formulaire :</label>\n        <div style=\"display:flex; gap:8px;\">\n          <input type=\"text\" id=\"loginInput\" placeholder=\"Entrez votre identifiant...\" style=\"flex:1; padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;\">\n          <button type=\"submit\" style=\"background:#16a34a; color:#fff; border:none; padding:6px 14px; border-radius:4px; font-weight:bold; cursor:pointer;\">Envoyer</button>\n        </div>\n        <div id=\"submitFeedback\" style=\"font-size:12px; color:#64748b;\">Cliquez sur Envoyer pour tester la soumission.</div>\n      </form>"
    },
    {
      "id": "event-onkeydown",
      "category": "Évènements",
      "tag": "onkeydown",
      "name": "onkeydown - Touche du clavier pressée (enfoncée)",
      "summary": "Se déclenche au moment précis où une touche du clavier est enfoncée.",
      "howToUse": "Détecte les touches au moment exact de l'appui, y compris les touches non imprimables (Entrée, Échap, Flèches, Maj, Ctrl). Se produit AVANT l'affichage du caractère dans le champ.",
      "attributes": [
        "<input>, <textarea>, <body>, <window>"
      ],
      "code": "<input type=\"text\" onkeydown=\"detecterTouche(event)\">\n\n<script>\nfunction detecterTouche(e) {\n  if (e.key === \"Enter\") {\n    alert(\"Vous avez appuyé sur la touche ENTRÉE !\");\n  }\n}\n</script>",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #e2e8f0; padding:14px; border-radius:6px;\">\n        <label style=\"display:block; font-size:12px; margin-bottom:4px; font-weight:600;\">Pressez n'importe quelle touche dans ce champ :</label>\n        <input type=\"text\" placeholder=\"Tapez une touche du clavier...\" onkeydown=\"document.getElementById('keyDownInfo').innerHTML = '⌨️ <strong>Touche pressée :</strong> ' + event.key + ' (Code: ' + event.keyCode + ')';\" style=\"width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px;\">\n        <div id=\"keyDownInfo\" style=\"margin-top:6px; font-size:12px; color:#0284c7; font-family:monospace;\">En attente de touche pressée...</div>\n      </div>"
    },
    {
      "id": "event-onkeyup",
      "category": "Évènements",
      "tag": "onkeyup",
      "name": "onkeyup - Touche du clavier relâchée",
      "summary": "Se déclenche au moment où une touche du clavier est relâchée.",
      "howToUse": "Contrairement à onkeydown, au moment où onkeyup se déclenche, la valeur du champ de texte contient DÉJÀ la nouvelle lettre ! Idéal pour convertir automatiquement en majuscules ou lancer une recherche de suggestion.",
      "attributes": [
        "<input>, <textarea>, <body>"
      ],
      "code": "<!-- Mise en majuscules automatique au relâchement de la touche -->\n<input type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\">",
      "previewHtml": "<div style=\"background:#fff; border:1px solid #e2e8f0; padding:14px; border-radius:6px;\">\n        <label style=\"display:block; font-size:12px; margin-bottom:4px; font-weight:600;\">Tapez en minuscules (conversion automatique en majuscules via onkeyup) :</label>\n        <input type=\"text\" placeholder=\"Tapez ici...\" onkeyup=\"this.value = this.value.toUpperCase(); document.getElementById('keyUpInfo').textContent = 'Relâchement détecté : texte mis en MAJUSCULES !';\" style=\"width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:4px; font-size:13px; font-weight:bold; letter-spacing:1px;\">\n        <div id=\"keyUpInfo\" style=\"margin-top:6px; font-size:12px; color:#15803d;\">Tapez une lettre et relâchez la touche.</div>\n      </div>"
    },
    {
      "id": "event-onload",
      "category": "Évènements",
      "tag": "onload",
      "name": "onload - Chargement complet de la page",
      "summary": "Se déclenche lorsque la page est complètement chargée (avec tous ses fichiers, styles, images et scripts).",
      "howToUse": "Se place généralement sur la balise <body onload=\"initialiser()\"> ou sur les balises <img> et <iframe>. Permet de lancer du code dès que la page est entièrement prête à l'affichage.",
      "attributes": [
        "<body>, <img>, <iframe>, <script>"
      ],
      "code": "<body onload=\"initialiserSite()\">\n  <h1>Bienvenue</h1>\n</body>\n\n<script>\nfunction initialiserSite() {\n  alert(\"Page chargée à 100% avec succès !\");\n}\n</script>",
      "previewHtml": "<div style=\"background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:15px; text-align:center;\">\n        <span style=\"font-size:24px;\">🌐</span>\n        <h4 style=\"margin:4px 0; color:#0f172a;\">Simulation de l'événement onload</h4>\n        <p style=\"font-size:12px; color:#64748b; margin-bottom:10px;\">Cliquez ci-dessous pour simuler le chargement complet d'une page :</p>\n        <button onclick=\"let b = document.getElementById('loadSimBar'); b.style.width='0%'; setTimeout(() => b.style.width='100%', 100); setTimeout(() => alert('Événement onload : Le document et ses ressources sont prêts !'), 1200);\" style=\"background:#0284c7; color:#fff; border:none; padding:6px 14px; border-radius:4px; font-weight:bold; cursor:pointer; font-size:12px;\">\n          ▶ Simuler le chargement de la page\n        </button>\n        <div style=\"height:6px; background:#e2e8f0; border-radius:3px; margin-top:12px; overflow:hidden;\">\n          <div id=\"loadSimBar\" style=\"width:0%; height:100%; background:#10b981; transition:width 1s ease;\"></div>\n        </div>\n      </div>"
    },
    {
      "id": "event-onplay",
      "category": "Évènements",
      "tag": "onplay",
      "name": "onplay - Début de lecture audio / vidéo",
      "summary": "Se déclenche lorsque la lecture d'un fichier audio/vidéo commence ou redémarre.",
      "howToUse": "Se place sur les balises multimédias <audio> et <video>. Permet de savoir quand l'utilisateur lance la vidéo (pour afficher des informations, masquer un titre ou démarrer un chronomètre).",
      "attributes": [
        "<audio>, <video>"
      ],
      "code": "<video controls src=\"film.mp4\" onplay=\"afficherStatutLecture()\">\n</video>\n\n<script>\nfunction afficherStatutLecture() {\n  console.log(\"Lecture du média démarrée !\");\n}\n</script>",
      "previewHtml": "<div style=\"background:#0f172a; color:#fff; border-radius:8px; padding:15px; text-align:center;\">\n        <span style=\"font-size:28px;\">🎬</span>\n        <h4 style=\"margin:4px 0; color:#38bdf8;\">Lecteur Multimédia (onplay)</h4>\n        <p style=\"font-size:12px; color:#94a3b8; margin-bottom:10px;\">Cliquez sur Lecture pour déclencher l'événement onplay :</p>\n        <button onclick=\"let st = document.getElementById('mediaStatusPlay'); st.textContent='▶ ÉVÉNEMENT ONPLAY DÉCLENCHÉ : Lecture démarrée !'; st.style.color='#4ade80';\" style=\"background:#22c55e; color:#fff; border:none; padding:8px 16px; border-radius:20px; font-weight:bold; cursor:pointer; font-size:13px;\">\n          ▶ Lancer la lecture\n        </button>\n        <div id=\"mediaStatusPlay\" style=\"margin-top:10px; font-size:12px; color:#94a3b8; font-family:monospace;\">En attente de lecture...</div>\n      </div>"
    },
    {
      "id": "event-onpause",
      "category": "Évènements",
      "tag": "onpause",
      "name": "onpause - Mise en pause audio / vidéo",
      "summary": "Se déclenche lorsqu'un élément audio/vidéo est mis en pause par l'utilisateur ou par le script.",
      "howToUse": "Se place sur les balises multimédias <audio> et <video>. Permet de détecter l'arrêt de la lecture pour enregistrer la position de l'élève ou afficher un menu d'aide.",
      "attributes": [
        "<audio>, <video>"
      ],
      "code": "<audio controls src=\"cours.mp3\" onpause=\"afficherStatutPause()\">\n</audio>\n\n<script>\nfunction afficherStatutPause() {\n  alert(\"Le fichier audio a été mis en pause.\");\n}\n</script>",
      "previewHtml": "<div style=\"background:#0f172a; color:#fff; border-radius:8px; padding:15px; text-align:center;\">\n        <span style=\"font-size:28px;\">⏸</span>\n        <h4 style=\"margin:4px 0; color:#facc15;\">Lecteur Multimédia (onpause)</h4>\n        <p style=\"font-size:12px; color:#94a3b8; margin-bottom:10px;\">Cliquez sur Pause pour déclencher l'événement onpause :</p>\n        <button onclick=\"let st = document.getElementById('mediaStatusPause'); st.textContent='⏸ ÉVÉNEMENT ONPAUSE DÉCLENCHÉ : Média en pause !'; st.style.color='#facc15';\" style=\"background:#eab308; color:#000; border:none; padding:8px 16px; border-radius:20px; font-weight:bold; cursor:pointer; font-size:13px;\">\n          ⏸ Mettre en pause\n        </button>\n        <div id=\"mediaStatusPause\" style=\"margin-top:10px; font-size:12px; color:#94a3b8; font-family:monospace;\">En lecture...</div>\n      </div>"
    },
    {
      "id": "global-attributes",
      "category": "Attributs globaux",
      "tag": "class, id, style...",
      "name": "Attributs Globaux HTML",
      "summary": "Attributs utilisables sur pratiquement toutes les balises HTML.",
      "howToUse": "id (unique par page), class (regroupement pour CSS), style (style en ligne), title (info-bulle au survol), hidden (masquer), lang (langue).",
      "attributes": [
        "class : spécifie un nom de classe pour un élément",
        "id : spécifie un identifiant unique pour un élément HTML",
        "style : spécifie un style en ligne direct",
        "title : spécifie des informations supplémentaires (info-bulle)",
        "hidden : renseigne la visibilité d'un élément (masqué)",
        "lang : spécifie la langue du contenu de l'élément"
      ],
      "code": "<p id=\"unique\" class=\"important\" title=\"Voici l'info-bulle !\" style=\"color: blue;\">\n  Paragraphe avec identifiant, classe et info-bulle.\n</p>",
      "previewHtml": "<p title=\"Voici l'info-bulle (attribut title) !\" style=\"margin:0; color:#2563eb; font-weight:600; cursor:help; font-size:13px;\">\n        Survolez ce texte pour voir l'info-bulle de l'attribut title !\n      </p>"
    }
  ],
  "css": [
    {
      "id": "css-sel-universal",
      "category": "Sélecteurs",
      "property": "*",
      "name": "* - Sélecteur Universel",
      "summary": "Sélectionne tous les éléments du document HTML.",
      "howToUse": "Applique un style général à l'ensemble des balises de la page. En Bac STI, on l'utilise souvent pour réinitialiser les marges à 0.",
      "code": "/* Sélectionne tous les éléments de la page */\n* {\n  margin: 0;\n  padding: 0;\n}",
      "hoverNote": "💡 Note Bac : Pour appliquer un effet au survol d'un élément précis, ciblez son ID avec :hover (ex: #h1:hover { color: red; }).",
      "videoSimType": "boxmodel-sim",
      "description": "Le sélecteur universel symbolisé par l'étoile '*' sélectionne absolument tous les éléments HTML présents dans la page sans exception (html, body, h1, p, div, etc.). En pratique d'examen au Bac, on l'utilise au tout début du fichier CSS pour faire un 'reset' des marges (margin: 0; padding: 0;) afin que tous les navigateurs affichent la page de façon identique.",
      "values": [
        "* (tous les éléments)"
      ]
    },
    {
      "id": "css-sel-element",
      "category": "Sélecteurs",
      "property": "element",
      "name": "element - Sélecteur de balise",
      "summary": "Sélectionne tous les éléments de type element (ex: h1, p, body, table).",
      "howToUse": "Cible directement le nom de la balise HTML pour lui donner un style par défaut sur toute la page.",
      "code": "/* Cible toutes les balises p */\np {\n  font-size: 14px;\n  color: #333333;\n}",
      "hoverNote": "💡 Note Bac : Pour appliquer un effet au survol, écrivez par exemple p:hover { color: blue; } ou sur un ID : #h1:hover { color: blue; }.",
      "videoSimType": "font-sim",
      "description": "Le sélecteur de balise cible tous les éléments qui portent ce nom de balise HTML (par exemple p pour tous les paragraphes, table pour tous les tableaux, h1 pour tous les titres). Il permet d'appliquer une apparence globale et cohérente à un type d'élément sur tout le site.",
      "values": [
        "body",
        "h1 à h6",
        "p",
        "table",
        "tr",
        "td",
        "th",
        "div",
        "span",
        "ul",
        "ol",
        "li",
        "a",
        "img",
        "input",
        "form"
      ]
    },
    {
      "id": "css-sel-id",
      "category": "Sélecteurs",
      "property": "#id",
      "name": "#id - Sélecteur par identifiant",
      "summary": "Cible un élément unique en fonction de la valeur de son attribut id.",
      "howToUse": "C'EST LE SÉLECTEUR N°1 DU BAC STI ! On donne un id à la balise (ex: <h1 id=\"h1\">) et on la cible en CSS avec le dièse # (ex: #h1).",
      "code": "/* Cible l'élément ayant l'attribut id=\"h1\" */\n#h1 {\n  color: #0284c7;\n  text-align: center;\n}",
      "hoverNote": "💡 Note Bac : C'est la syntaxe officielle demandée au Bac pour le survol : #h1:hover { color: red; }.",
      "videoSimType": "font-sim",
      "description": "Le sélecteur par identifiant (#id) est LE sélecteur le plus important et le plus utilisé dans les examens du Baccalauréat STI ! Chaque identifiant est unique dans la page HTML (attribut id=\"h1\"). En CSS, on place obligatoirement le symbole dièse '#' devant le nom de l'identifiant pour appliquer des styles ciblés et précis à cet élément uniquement.",
      "values": [
        "#h1",
        "#p1",
        "#boite",
        "#titre",
        "#tab",
        "#img1",
        "#lien",
        "#menu",
        "#btn",
        "#f"
      ]
    },
    {
      "id": "css-sel-class",
      "category": "Sélecteurs",
      "property": ".class",
      "name": ".class - Sélecteur par classe",
      "summary": "Cible les éléments en fonction de la valeur de leur attribut class.",
      "howToUse": "S'écrit avec un point '.' suivi du nom de la classe. Permet d'appliquer le même style à plusieurs balises différentes ayant la même classe.",
      "code": "/* Cible tous les éléments ayant class=\"rouge\" */\n.rouge {\n  color: red;\n  font-weight: bold;\n}",
      "hoverNote": "💡 Note Bac : Pour appliquer au survol d'une classe : .rouge:hover { color: darkred; }.",
      "videoSimType": "font-sim",
      "description": "Le sélecteur de classe (.class) commence obligatoirement par un point '.' suivi du nom de la classe. Contrairement à un identifiant (#id) qui est unique, une classe peut être partagée par plusieurs éléments différents. Cela permet de donner le même style à un groupe de balises réparties dans toute la page.",
      "values": [
        ".nom_classe (ex: .rouge, .centre, .important, .titre)"
      ]
    },
    {
      "id": "css-sel-element-attr",
      "category": "Sélecteurs",
      "property": "element[attr]",
      "name": "element[attr] - Sélecteur d'attribut présent",
      "summary": "Cible les éléments qui possèdent l'attribut spécifié attr.",
      "howToUse": "Permet de cibler tous les éléments ayant un certain attribut, comme les champs obligatoires avec [required].",
      "code": "/* Cible tous les champs input ayant l'attribut required */\ninput[required] {\n  border: 2px solid #ef4444;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : input[required]:hover { border-color: red; }.",
      "videoSimType": "attr-sim",
      "description": "Le sélecteur d'attribut 'element[attr]' permet de cibler des éléments qui possèdent un attribut HTML spécifique, peu importe sa valeur. Par exemple, input[required] va cibler uniquement les champs obligatoires du formulaire qui ont l'attribut required pour leur donner une bordure d'avertissement rouge.",
      "values": [
        "input[required]",
        "input[disabled]",
        "input[readonly]",
        "a[target]",
        "img[alt]"
      ]
    },
    {
      "id": "css-sel-element-attr-val",
      "category": "Sélecteurs",
      "property": "element[attr=valeur]",
      "name": "element[attr=valeur] - Attribut avec valeur exacte",
      "summary": "Cible les éléments en fonction de la valeur exacte de leur attribut attr.",
      "howToUse": "Très utilisé en examen pour styliser spécifiquement un bouton d'envoi ou un champ texte.",
      "code": "/* Cible spécifiquement le bouton submit */\ninput[type=\"submit\"] {\n  background-color: #16a34a;\n  color: white;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : input[type=\"submit\"]:hover { background-color: #15803d; cursor: pointer; }.",
      "videoSimType": "attr-sim",
      "description": "Le sélecteur 'element[attr=valeur]' cible avec une précision chirurgicale un élément qui possède un attribut égal à une valeur exacte entre guillemets. C'est la méthode reine au Bac pour distinguer les différents champs d'un formulaire : input[type=\"submit\"] pour le bouton d'envoi, input[type=\"text\"] pour la saisie de texte, etc.",
      "values": [
        "input[type=\"text\"]",
        "input[type=\"submit\"]",
        "input[type=\"password\"]",
        "input[type=\"radio\"]",
        "input[type=\"checkbox\"]",
        "a[target=\"_blank\"]"
      ]
    },
    {
      "id": "css-sel-element-class",
      "category": "Sélecteurs",
      "property": "element.class",
      "name": "element.class - Balise avec classe précise",
      "summary": "Cible tous les éléments de type element en fonction de la valeur de leur attribut class.",
      "howToUse": "Cible uniquement la balise spécifiée portant cette classe (ex: p.important ciblera les <p class=\"important\"> mais pas les <h1>).",
      "code": "/* Cible uniquement les paragraphes p avec la classe important */\np.important {\n  color: #dc2626;\n  font-style: italic;\n}",
      "hoverNote": "💡 Note Bac : Au survol : p.important:hover { font-weight: bold; }.",
      "videoSimType": "font-sim",
      "description": "Ce sélecteur combiné 'element.class' associe le nom d'une balise et le nom d'une classe sans espace entre eux (ex: p.important). Il cible exclusivement les balises <p> ayant la classe 'important', en ignorant les autres balises comme <h1> ou <div> qui porteraient aussi cette classe.",
      "values": [
        "p.important",
        "h1.titre",
        "div.cadre",
        "span.gras"
      ]
    },
    {
      "id": "css-sel-link",
      "category": "Sélecteurs",
      "property": "a:link",
      "name": "a:link - Lien non visité",
      "summary": "Cible tous les liens hypertextes qui n'ont pas encore été visités.",
      "howToUse": "Définit la couleur par défaut d'un lien avant que l'internaute ne clique dessus.",
      "code": "/* Cible le lien id=\"lien\" non visité */\n#lien:link {\n  color: #0284c7;\n  text-decoration: none;\n}",
      "hoverNote": "💡 Note Bac : S'associe toujours avec #lien:hover pour changer la couleur quand la souris passe dessus.",
      "videoSimType": "link-states-sim",
      "description": "La pseudo-classe a:link cible spécifiquement les liens hypertextes (<a href=\"...\">) qui n'ont pas encore été visités ou cliqués par l'internaute dans l'historique de son navigateur. Elle permet de définir la couleur et l'apparence par défaut des liens non consultés.",
      "values": [
        ":link (état initial d'un lien non cliqué)"
      ]
    },
    {
      "id": "css-sel-visited",
      "category": "Sélecteurs",
      "property": "a:visited",
      "name": "a:visited - Lien déjà visité",
      "summary": "Cible tous les liens déjà visités dans l'historique du navigateur.",
      "howToUse": "Permet de signaler à l'utilisateur qu'il a déjà cliqué sur ce lien (généralement en violet).",
      "code": "/* Cible le lien id=\"lien\" une fois visité */\n#lien:visited {\n  color: #7c3aed;\n}",
      "hoverNote": "💡 Note Bac : Vous pouvez aussi appliquer un survol sur un lien visité : #lien:visited:hover { text-decoration: underline; }.",
      "videoSimType": "link-states-sim",
      "description": "La pseudo-classe a:visited cible les liens hypertextes que l'internaute a déjà visités au moins une fois dans son navigateur. Par défaut dans les navigateurs, ces liens s'affichent en violet, mais en CSS vous pouvez choisir n'importe quelle couleur pour indiquer que la page a déjà été lue.",
      "values": [
        ":visited (état d'un lien déjà visité)"
      ]
    },
    {
      "id": "css-sel-hover",
      "category": "Sélecteurs",
      "property": "a:hover (et element:hover)",
      "name": ":hover - Survol par le pointeur de la souris",
      "summary": "Cible l'élément au moment où l'utilisateur le survole avec le pointeur de la souris.",
      "howToUse": "LA PSEUDO-CLASSE OBLIGATOIRE DU BAC ! Utilisable sur n'importe quel ID (ex: #h1:hover, #boite:hover, #lien:hover).",
      "code": "/* Change le style au survol du titre id=\"h1\" */\n#h1:hover {\n  color: #ef4444;\n  letter-spacing: 2px;\n}",
      "hoverNote": "💡 C'est le sélecteur :hover lui-même ! Il s'active automatiquement dès que la souris passe sur l'élément.",
      "videoSimType": "font-sim",
      "description": "La pseudo-classe :hover est l'élément interactif fondamental du cours ! Elle s'active automatiquement à l'instant où l'utilisateur place le pointeur de sa souris au-dessus de l'élément (#h1:hover, #boite:hover, a:hover) et se désactive dès que la souris s'en va. C'est la question incontournable de presque tous les sujets d'examen.",
      "values": [
        ":hover (au survol de la souris sur n'importe quel élément)"
      ]
    },
    {
      "id": "css-sel-active",
      "category": "Sélecteurs",
      "property": "a:active",
      "name": "a:active - Lien ou bouton activé (cliqué)",
      "summary": "Cible l'élément à l'instant où l'utilisateur clique dessus et maintient le bouton enfoncé.",
      "howToUse": "Donne un retour visuel immédiat lors du clic (effet d'enfoncement).",
      "code": "/* Cible le lien ou bouton au moment du clic */\n#btn:active {\n  background-color: #facc15;\n  transform: scale(0.98);\n}",
      "hoverNote": "💡 Note Bac : L'ordre classique est :link, :visited, :hover, puis :active.",
      "videoSimType": "link-states-sim",
      "description": "La pseudo-classe a:active cible l'élément à la seconde exacte où l'utilisateur clique dessus et maintient le bouton de la souris enfoncé (pendant le clic physique). Elle donne un retour visuel d'enfoncement ou de confirmation du clic.",
      "values": [
        ":active (pendant le clic de souris)"
      ]
    },
    {
      "id": "css-sel-grouped",
      "category": "Sélecteurs",
      "property": "Sélecteurs groupés (,)",
      "name": "Groupement de sélecteurs avec virgule",
      "summary": "Pour grouper plusieurs sélecteurs dans une même règle, il suffit de les lister en les séparant par des virgules ','.",
      "howToUse": "Évite de répéter le même code CSS pour plusieurs balises ou identifiants.",
      "code": "/* Applique la même police et couleur à #h1, #h2 et #p1 */\n#h1, #h2, #p1 {\n  font-family: Arial, sans-serif;\n  color: #0f172a;\n}",
      "hoverNote": "💡 Note Bac : Pour grouper au survol : #h1:hover, #h2:hover { color: red; }.",
      "videoSimType": "font-sim",
      "description": "Le groupement de sélecteurs permet d'appliquer la même liste de propriétés CSS à plusieurs balises ou identifiants différents à la fois, en les séparant par des virgules (,). Cela évite de copier-coller les mêmes blocs de code et rend votre fichier CSS propre et rapide à corriger par l'examinateur.",
      "values": [
        "séparés par des virgules : #h1, #h2, #p1"
      ]
    },
    {
      "id": "css-table-layout",
      "category": "Propriétés des tableaux",
      "property": "table-layout",
      "name": "table-layout - Disposition du tableau",
      "summary": "Définit la façon de disposer les cellules, lignes et colonnes d'un tableau (valeurs : auto, fixed).",
      "howToUse": "Avec 'fixed', les largeurs de colonnes sont fixées par la première ligne, ce qui accélère l'affichage.",
      "code": "#tab {\n  width: 100%;\n  table-layout: fixed;\n}",
      "hoverNote": "💡 Note Bac : Pour modifier au survol d'une ligne du tableau : #tab tr:hover { background-color: #f1f5f9; }.",
      "videoSimType": "table-sim",
      "description": "La propriété table-layout contrôle l'algorithme utilisé par le navigateur pour calculer la largeur des colonnes d'un tableau HTML. Avec la valeur 'fixed', la largeur des colonnes est déterminée strictement par la première ligne ou par le CSS, ce qui empêche le tableau de se déformer lorsque le texte d'une cellule est très long.",
      "values": [
        "auto (calcul automatique par le contenu)",
        "fixed (largeurs fixes basées sur la première ligne)"
      ]
    },
    {
      "id": "css-border-collapse",
      "category": "Propriétés des tableaux",
      "property": "border-collapse",
      "name": "border-collapse - Fusion des bordures",
      "summary": "Définit si les bordures des cellules sont fusionnées ou séparées (valeurs : separate, collapse).",
      "howToUse": "En examen STI, on utilise presque toujours 'border-collapse: collapse;' pour avoir des bordures nettes et simples entre les cases.",
      "code": "/* Fusionne les bordures des cellules du tableau id=\"tab\" */\n#tab {\n  border-collapse: collapse;\n  width: 100%;\n}",
      "hoverNote": "💡 Note Bac : Pour changer la bordure ou le fond au survol de la souris : #tab td:hover { background-color: #e2e8f0; }.",
      "videoSimType": "table-sim",
      "description": "La propriété border-collapse détermine la manière dont les bordures des cellules d'un tableau (<table id=\"tab\">) se rejoignent. Par défaut (separate), les bordures sont doublées avec un petit espace entre elles. Avec la valeur 'collapse', toutes les bordures des cellules adjacentes fusionnent en une seule ligne nette et fine. C'est la règle obligatoire demandée au Bac sur les tableaux !",
      "values": [
        "collapse (bordures fusionnées en une seule ligne)",
        "separate (bordures séparées et doublées)"
      ]
    },
    {
      "id": "css-font-family",
      "category": "Propriétés de mise en forme du texte",
      "property": "font-family",
      "name": "font-family - Police de caractères",
      "summary": "Spécifie les noms de polices possibles par ordre de préférence.",
      "howToUse": "Indiquez la police souhaitée (ex: Arial, Tahoma, 'Times New Roman') puis la famille générique (sans-serif, serif).",
      "code": "#h1 {\n  font-family: Arial, Tahoma, sans-serif;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #h1:hover { font-family: 'Courier New', monospace; }.",
      "videoSimType": "font-sim",
      "description": "La propriété font-family spécifie la police d'écriture du texte. On peut lister plusieurs noms de polices séparés par des virgules par ordre de préférence au cas où la première ne serait pas installée sur l'ordinateur de l'utilisateur (ex: Arial, Tahoma, sans-serif). Les noms comportant des espaces s'écrivent entre guillemets.",
      "values": [
        "Arial",
        "Tahoma",
        "Verdana",
        "'Times New Roman'",
        "Courier New",
        "sans-serif",
        "serif",
        "monospace"
      ]
    },
    {
      "id": "css-font-weight",
      "category": "Propriétés de mise en forme du texte",
      "property": "font-weight",
      "name": "font-weight - Épaisseur du texte (Graisse)",
      "summary": "Spécifie la manière dont les caractères d'un texte doivent être affichés (bold ; bolder ; lighter ; normal).",
      "howToUse": "Utilisez 'bold' pour mettre le texte en gras dans l'élément ciblé.",
      "code": "/* Met le texte du paragraphe id=\"p1\" en gras */\n#p1 {\n  font-weight: bold;\n}",
      "hoverNote": "💡 Note Bac : Pour mettre en gras au survol : #p1:hover { font-weight: bold; }.",
      "videoSimType": "font-sim",
      "description": "La propriété font-weight définit la graisse ou l'épaisseur des caractères du texte. La valeur 'bold' permet de mettre le texte en gras sans devoir utiliser la balise HTML <b> ou <strong>. Elle accepte aussi des valeurs relatives ou numériques de 100 à 900.",
      "values": [
        "bold (en gras)",
        "normal (épaisseur standard)",
        "bolder (plus gras)",
        "lighter (plus fin)",
        "100 à 900 (paliers numériques)"
      ]
    },
    {
      "id": "css-font-style",
      "category": "Propriétés de mise en forme du texte",
      "property": "font-style",
      "name": "font-style - Style du texte (Italique)",
      "summary": "Spécifie le style d'un texte (italic ; normal).",
      "howToUse": "Utilisez 'italic' pour afficher le texte en italique sans ajouter de balise HTML.",
      "code": "/* Met le titre id=\"h1\" en italique */\n#h1 {\n  font-style: italic;\n}",
      "hoverNote": "💡 Note Bac : Pour passer en italique au survol de la souris : #h1:hover { font-style: italic; }.",
      "videoSimType": "font-sim",
      "description": "La propriété font-style définit l'inclinaison ou le style du texte. La valeur 'italic' incline les caractères en italique, ce qui est souvent demandé au Bac pour les sous-titres, citations ou mentions secondaires.",
      "values": [
        "italic (texte en italique)",
        "normal (texte droit sans inclinaison)",
        "oblique"
      ]
    },
    {
      "id": "css-font-size",
      "category": "Propriétés de mise en forme du texte",
      "property": "font-size",
      "name": "font-size - Taille de la police",
      "summary": "Spécifie la taille d'une police (exprimée en px ou %).",
      "howToUse": "Détermine la grandeur des lettres (ex: 20px, 24px, 150%).",
      "code": "/* Définit la taille du titre id=\"h1\" à 24 pixels */\n#h1 {\n  font-size: 24px;\n}",
      "hoverNote": "💡 Note Bac : Pour agrandir le texte au survol : #h1:hover { font-size: 28px; }.",
      "videoSimType": "font-sim",
      "description": "La propriété font-size contrôle la dimension (hauteur) des caractères du texte. Au Bac, elle s'exprime principalement en pixels (px) pour une taille fixe précise (ex: 24px) ou en pourcentage (%) pour une taille relative à l'élément parent (ex: 150%).",
      "values": [
        "valeur en px (ex: 14px, 18px, 24px, 32px)",
        "valeur en % (ex: 120%, 150%)",
        "small, medium, large, x-large"
      ]
    },
    {
      "id": "css-font-shorthand",
      "category": "Propriétés de mise en forme du texte",
      "property": "font",
      "name": "font - Super-propriété de police",
      "summary": "Super-propriété de font. Combine font-family, font-weight, font-style, font-size.",
      "howToUse": "Permet d'écrire en une seule ligne : style, weight, size puis family.",
      "code": "/* Combine style italique, gras, 20px et police Arial sur #h1 */\n#h1 {\n  font: italic bold 20px Arial;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #h1:hover { font: normal bold 24px Tahoma; }.",
      "videoSimType": "font-sim",
      "description": "La super-propriété 'font' permet de combiner en une seule ligne de code : font-style, font-weight, font-size et font-family dans cet ordre précis. Exemple classique du Bac : font: italic bold 20px Arial;",
      "values": [
        "Combinaison : [style] [weight] [taille en px] [famille de police]"
      ]
    },
    {
      "id": "css-text-align",
      "category": "Propriétés de mise en forme du texte",
      "property": "text-align",
      "name": "text-align - Alignement horizontal",
      "summary": "Spécifie l'alignement horizontal d'un texte (left ; center ; right ; justify).",
      "howToUse": "center pour centrer, right pour aligner à droite, justify pour justifier les deux côtés.",
      "code": "/* Centre le texte du titre id=\"h1\" */\n#h1 {\n  text-align: center;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #h1:hover { text-align: right; }.",
      "videoSimType": "align-transform-sim",
      "description": "La propriété text-align régit l'alignement horizontal du texte à l'intérieur de son bloc conteneur. Elle est indispensable pour centrer les titres principaux (center), aligner les paragraphes à gauche (left), à droite (right) ou répartir les espaces équitablement sur toute la largeur (justify).",
      "values": [
        "left (aligné à gauche)",
        "center (centré au milieu)",
        "right (aligné à droite)",
        "justify (justifié des deux côtés)"
      ]
    },
    {
      "id": "css-text-shadow",
      "category": "Propriétés de mise en forme du texte",
      "property": "text-shadow",
      "name": "text-shadow - Ombre sur le texte",
      "summary": "Définit une ombre au texte (décalage horizontal, vertical, flou, couleur).",
      "howToUse": "Syntaxe : text-shadow: decalageX decalageY flou couleur; (ex: 2px 2px 4px #888888).",
      "code": "/* Ajoute une ombre portée sur le titre id=\"h1\" */\n#h1 {\n  text-shadow: 2px 2px 4px #888888;\n}",
      "hoverNote": "💡 Note Bac : Pour faire briller le titre au survol de la souris : #h1:hover { text-shadow: 0 0 8px #0284c7; }.",
      "videoSimType": "text-shadow-sim",
      "description": "La propriété text-shadow projette une ou plusieurs ombres sous les caractères du texte. On indique dans l'ordre : le décalage horizontal (X), le décalage vertical (Y), le rayon de flou (blur) et la couleur de l'ombre. Elle permet de créer des effets de relief, de profondeur ou de halo lumineux (néon).",
      "values": [
        "decalage-X decalage-Y flou couleur (ex: 2px 2px 4px #888888, 0 0 10px #0284c7)"
      ]
    },
    {
      "id": "css-text-transform",
      "category": "Propriétés de mise en forme du texte",
      "property": "text-transform",
      "name": "text-transform - Transformation de la casse",
      "summary": "Spécifie la façon de transformer les caractères d'un texte en majuscules ou minuscules (uppercase ; lowercase ; capitalize).",
      "howToUse": "uppercase transforme tout en majuscules, lowercase en minuscules, capitalize met la 1ère lettre de chaque mot en majuscule.",
      "code": "/* Met le texte de #h1 en majuscules automatiquement */\n#h1 {\n  text-transform: uppercase;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #h1:hover { text-transform: uppercase; }.",
      "videoSimType": "align-transform-sim",
      "description": "La propriété text-transform modifie la casse du texte sans avoir à réécrire le contenu HTML. 'uppercase' transforme toutes les lettres en majuscules (très fréquent sur les titres #h1 au Bac), 'lowercase' convertit tout en minuscules, et 'capitalize' met la première lettre de chaque mot en majuscule.",
      "values": [
        "uppercase (tout en MAJUSCULES)",
        "lowercase (tout en minuscules)",
        "capitalize (Première Lettre En Majuscule)",
        "none (aucun changement)"
      ]
    },
    {
      "id": "css-color",
      "category": "Propriétés de mise en forme du texte",
      "property": "color",
      "name": "color - Couleur du texte",
      "summary": "Spécifie la couleur du texte.",
      "howToUse": "Peut être un nom de couleur en anglais (red, blue, green) ou un code hexadécimal (#ff0000).",
      "code": "/* Définit la couleur du texte de #h1 en rouge */\n#h1 {\n  color: red;\n}",
      "hoverNote": "💡 Note Bac : C'est la question la plus fréquente au Bac : changer la couleur au survol : #h1:hover { color: blue; }.",
      "videoSimType": "font-sim",
      "description": "La propriété color définit la couleur d'affichage des caractères du texte. Elle s'exprime soit par un nom de couleur standard en anglais (red, blue, green, yellow, black, white), soit par un code hexadécimal commençant par # (ex: #ff0000, #0284c7) ou en rgb().",
      "values": [
        "Noms anglais : red, blue, green, yellow, black, white, orange, purple",
        "Hexadécimal : #ff0000, #0284c7, #333333",
        "rgb(r, g, b)"
      ]
    },
    {
      "id": "css-list-style-type",
      "category": "Propriétés des listes",
      "property": "list-style-type",
      "name": "list-style-type - Type de marqueur",
      "summary": "Définit le type de marqueur d'éléments de liste (circle ; square ; upper-roman ; lower-alpha).",
      "howToUse": "square donne des carrés pleins, circle des cercles vides, upper-roman des chiffres romains I, II, III.",
      "code": "/* Définit des marqueurs carrés pour la liste id=\"liste\" */\n#liste {\n  list-style-type: square;\n}",
      "hoverNote": "💡 Note Bac : Pour changer la puce au survol de la souris : #liste li:hover { list-style-type: circle; color: red; }.",
      "videoSimType": "list-style-sim",
      "description": "La propriété list-style-type change le symbole du marqueur (la puce) situé devant chaque élément d'une liste (<ul> ou <ol>). Elle permet de remplacer les disques pleins par des cercles évidés (circle), des carrés pleins (square), des chiffres romains en majuscules (upper-roman : I, II, III) ou des lettres minuscules (lower-alpha : a, b, c).",
      "values": [
        "square (carré plein)",
        "circle (cercle évidé)",
        "disc (disque plein par défaut)",
        "upper-roman (I, II, III...)",
        "lower-alpha (a, b, c...)",
        "none (aucune puce)"
      ]
    },
    {
      "id": "css-list-style-position",
      "category": "Propriétés des listes",
      "property": "list-style-position",
      "name": "list-style-position - Position du marqueur",
      "summary": "Spécifie la position des marqueurs d'éléments d'une liste à puces (outside ; inside).",
      "howToUse": "outside place la puce à l'extérieur du bloc de texte (défaut), inside place la puce à l'intérieur du texte.",
      "code": "#liste {\n  list-style-position: inside;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #liste:hover { list-style-position: inside; }.",
      "videoSimType": "list-style-sim",
      "description": "La propriété list-style-position contrôle l'emplacement de la puce par rapport au bloc de texte de l'élément de liste. 'outside' (défaut) place la puce à l'extérieur de la colonne de texte, alors que 'inside' intègre la puce directement à l'intérieur du paragraphe de texte.",
      "values": [
        "outside (puce en dehors du paragraphe)",
        "inside (puce alignée dans le paragraphe)"
      ]
    },
    {
      "id": "css-list-style-image",
      "category": "Propriétés des listes",
      "property": "list-style-image",
      "name": "list-style-image - Image personnalisée de puce",
      "summary": "Spécifie une image comme marqueur d'éléments de liste.",
      "howToUse": "Utilise url('monImage.png') pour remplacer la puce classique par une petite image ou icône.",
      "code": "#liste {\n  list-style-image: url('icone.png');\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #liste li:hover { list-style-image: url('icone2.png'); }.",
      "videoSimType": "list-style-sim",
      "description": "La propriété list-style-image remplace les marqueurs géométriques classiques par une petite image graphique personnalisée grâce à la fonction url('nom_image.png').",
      "values": [
        "url('chemin/vers/image.png')",
        "none"
      ]
    },
    {
      "id": "css-list-style-shorthand",
      "category": "Propriétés des listes",
      "property": "list-style",
      "name": "list-style - Super-propriété de liste",
      "summary": "Super-propriété de liste. Combine list-style-type, list-style-position, list-style-image.",
      "howToUse": "Permet de tout regrouper en une ligne, ou de mettre 'none' pour supprimer les puces d'un menu.",
      "code": "/* Supprime les puces ou combine type et position sur #liste */\n#liste {\n  list-style: square inside;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #liste li:hover { list-style: circle outside; }.",
      "videoSimType": "list-style-sim",
      "description": "La super-propriété list-style combine list-style-type, list-style-position et list-style-image en une unique ligne. On l'utilise aussi avec la valeur 'none' (list-style: none;) pour enlever totalement les puces lors de la création d'un menu de navigation horizontal.",
      "values": [
        "none (supprime toutes les puces)",
        "type position image (ex: square inside url('puce.png'))"
      ]
    },
    {
      "id": "css-background-color",
      "category": "Propriétés d'arrière-plan",
      "property": "background-color",
      "name": "background-color - Couleur d'arrière-plan",
      "summary": "Définit la couleur d'arrière-plan d'un élément.",
      "howToUse": "Colore le fond de l'élément (ex: yellow, #e2e8f0, #0284c7).",
      "code": "/* Définit la couleur de fond du titre #h1 en jaune */\n#h1 {\n  background-color: yellow;\n}",
      "hoverNote": "💡 Note Bac : Changement de fond classique au survol : #h1:hover { background-color: orange; }.",
      "videoSimType": "background-sim",
      "description": "La propriété background-color définit la couleur uniforme d'arrière-plan de l'élément (titre, paragraphe, boîte, cellule de tableau, page entière). Elle remplit toute la surface de la boîte jusqu'à sa bordure.",
      "values": [
        "Noms anglais (yellow, red, lightblue)",
        "Code hexadécimal (#facc15, #0f172a)",
        "rgba(r,g,b,a) pour la transparence",
        "transparent"
      ]
    },
    {
      "id": "css-background-image",
      "category": "Propriétés d'arrière-plan",
      "property": "background-image",
      "name": "background-image - Image d'arrière-plan",
      "summary": "Définit une image d'arrière-plan pour un élément.",
      "howToUse": "Indiquez l'URL ou le nom du fichier image entre guillemets dans url('image.jpg').",
      "code": "/* Applique une image de fond à la boîte #boite */\n#boite {\n  background-image: url('fond.jpg');\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { background-image: url('fond2.jpg'); }.",
      "videoSimType": "background-sim",
      "description": "La propriété background-image applique une image en arrière-plan derrière le contenu de l'élément. L'adresse de l'image est indiquée dans la fonction url('nom_fichier.jpg').",
      "values": [
        "url('nom_image.jpg')",
        "none"
      ]
    },
    {
      "id": "css-background-repeat",
      "category": "Propriétés d'arrière-plan",
      "property": "background-repeat",
      "name": "background-repeat - Répétition de l'image de fond",
      "summary": "Définit la façon dont une image d'arrière-plan est répétée (repeat ; repeat-x ; repeat-y ; no-repeat).",
      "howToUse": "no-repeat empêche l'image de se dédoubler ; repeat-x répète uniquement horizontalement.",
      "code": "#boite {\n  background-image: url('motif.png');\n  background-repeat: no-repeat;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { background-repeat: repeat-x; }.",
      "videoSimType": "background-sim",
      "description": "La propriété background-repeat régit la manière dont l'image de fond est dupliquée si elle est plus petite que la boîte. 'no-repeat' empêche l'image de se répéter (très fréquent en examen), 'repeat-x' la répète uniquement sur l'axe horizontal, et 'repeat-y' sur l'axe vertical.",
      "values": [
        "no-repeat (l'image apparaît une seule fois)",
        "repeat (répétée en mosaïque)",
        "repeat-x (répétition horizontale uniquement)",
        "repeat-y (répétition verticale uniquement)"
      ]
    },
    {
      "id": "css-background-size",
      "category": "Propriétés d'arrière-plan",
      "property": "background-size",
      "name": "background-size - Taille de l'image d'arrière-plan",
      "summary": "Spécifie la taille d'une image d'arrière-plan (cover ; contain ; dimensions en px ou %).",
      "howToUse": "cover adapte l'image pour couvrir toute la boîte ; 100% 100% étire l'image exactement à la boîte.",
      "code": "#boite {\n  background-image: url('photo.jpg');\n  background-size: cover;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { background-size: 110%; }.",
      "videoSimType": "background-sim",
      "description": "La propriété background-size redimensionne l'image d'arrière-plan. 'cover' étire et recadre l'image pour recouvrir entièrement toute la boîte sans déformation, tandis que '100% 100%' l'étire exactement aux dimensions de la boîte.",
      "values": [
        "cover (recouvre toute la boîte)",
        "contain (s'adapte sans être coupée)",
        "valeurs en px ou % (ex: 100% 100%, 300px 200px)"
      ]
    },
    {
      "id": "css-background-shorthand",
      "category": "Propriétés d'arrière-plan",
      "property": "background",
      "name": "background - Super-propriété d'arrière-plan",
      "summary": "Super-propriété d'arrière-plan. Combine background-color, background-image, background-repeat, background-size.",
      "howToUse": "Regroupe la couleur, l'image et la répétition en une seule instruction.",
      "code": "/* Super-propriété combinée sur la boîte #boite */\n#boite {\n  background: #f0f0f0 url('motif.png') no-repeat;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { background: #fee2e2 url('motif.png') no-repeat; }.",
      "videoSimType": "background-sim",
      "description": "La super-propriété background rassemble couleur, image, répétition et taille en une seule ligne d'instruction rapide. Exemple Bac : background: #f0f0f0 url('fond.jpg') no-repeat center / cover;",
      "values": [
        "Combinaison : [couleur] url('...') [repeat] [position]"
      ]
    },
    {
      "id": "css-transform",
      "category": "Transformation",
      "property": "transform",
      "name": "transform - Transformations 2D / 3D",
      "summary": "Applique un effet de transformation 2D ou 3D à un élément (rotate() ; skew() ; scale() ; translate()).",
      "howToUse": "rotate(deg) effectue une rotation ; scale(facteur) agrandit ou rétrécit ; translate(x,y) déplace ; skew(deg) incline.",
      "code": "/* Effectue une rotation de 10 degrés sur le titre #h1 */\n#h1 {\n  transform: rotate(10deg);\n}",
      "hoverNote": "💡 Note Bac : Utilisé très souvent avec :hover pour zoomer ou tourner au survol : #h1:hover { transform: scale(1.1) rotate(5deg); }.",
      "videoSimType": "transform-sim",
      "description": "La propriété transform applique des transformations géométriques en 2D ou 3D à l'élément sans altérer le flux normal du document. Les 4 fonctions au programme du Bac sont : rotate(angle en deg) pour tourner, scale(facteur) pour zoomer ou réduire, translate(X, Y) pour déplacer, et skew(angle en deg) pour incliner.",
      "values": [
        "rotate(10deg)",
        "scale(1.2)",
        "scaleX(1.5), scaleY(0.8)",
        "translate(20px, 10px)",
        "skew(15deg)"
      ]
    },
    {
      "id": "css-filter",
      "category": "Propriétés des images",
      "property": "filter",
      "name": "filter - Filtres graphiques",
      "summary": "Définit un filtre pour un élément (blur() ; grayscale() ; sepia() ; brightness() ; contrast()).",
      "howToUse": "grayscale(100%) rend l'image en noir et blanc ; blur(4px) applique un flou.",
      "code": "/* Passe l'image id=\"img1\" en noir et blanc */\n#img1 {\n  filter: grayscale(100%);\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris, on rétablit la couleur naturelle : #img1:hover { filter: grayscale(0%); }.",
      "videoSimType": "filter-sim",
      "description": "La propriété filter applique des effets optiques et graphiques directement sur une image (#img1) ou un conteneur. Au Bac STI, grayscale(100%) est la plus demandée pour afficher une image en noir et blanc complet, et blur(4px) pour appliquer un flou gaussien.",
      "values": [
        "grayscale(100%) (noir et blanc)",
        "grayscale(0%) (couleurs normales)",
        "blur(3px) (flou en pixels)",
        "sepia(100%)",
        "brightness(150%)",
        "contrast(200%)"
      ]
    },
    {
      "id": "css-width",
      "category": "Propriétés des boîtes",
      "property": "width",
      "name": "width - Largeur",
      "summary": "Définit la largeur d'un élément (en pixel px ou en pourcentage %).",
      "howToUse": "Fixe la dimension horizontale de la boîte ou de l'image (ex: width: 300px; ou width: 80%;).",
      "code": "/* Définit la largeur de la boîte #boite à 300px */\n#boite {\n  width: 300px;\n}",
      "hoverNote": "💡 Note Bac : Pour élargir au survol de la souris : #boite:hover { width: 350px; }.",
      "videoSimType": "boxmodel-sim",
      "description": "La propriété width définit la largeur du contenu de la boîte ou de l'image. Elle s'exprime en pixels (px) pour une mesure fixe ou en pourcentage (%) pour s'adapter à la largeur de l'écran ou de l'élément parent.",
      "values": [
        "valeur en px (ex: 200px, 350px, 500px)",
        "valeur en % (ex: 50%, 80%, 100%)",
        "auto"
      ]
    },
    {
      "id": "css-height",
      "category": "Propriétés des boîtes",
      "property": "height",
      "name": "height - Hauteur",
      "summary": "Définit la hauteur d'un élément (en pixel px ou en pourcentage %).",
      "howToUse": "Fixe la dimension verticale de la boîte (ex: height: 150px;).",
      "code": "/* Définit la hauteur de la boîte #boite à 150px */\n#boite {\n  height: 150px;\n}",
      "hoverNote": "💡 Note Bac : Pour agrandir en hauteur au survol : #boite:hover { height: 180px; }.",
      "videoSimType": "boxmodel-sim",
      "description": "La propriété height définit la hauteur du contenu de la boîte. Elle s'exprime généralement en pixels (px). Si le contenu intérieur dépasse cette hauteur, utilisez overflow pour gérer le débordement.",
      "values": [
        "valeur en px (ex: 100px, 150px, 250px)",
        "valeur en % (ex: 100%)",
        "auto"
      ]
    },
    {
      "id": "css-position",
      "category": "Propriétés des boîtes",
      "property": "position",
      "name": "position - Méthode de positionnement",
      "summary": "Spécifie le type de la méthode de positionnement utilisée pour un élément (absolute ; fixed ; relative ; static ; sticky).",
      "howToUse": "relative permet de décaler l'élément par rapport à sa place normale avec top/left ; absolute le place par rapport à son parent.",
      "code": "#boite {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}",
      "hoverNote": "💡 Note Bac : Pour déplacer au survol de la souris : #boite:hover { top: -5px; }.",
      "videoSimType": "position-sim",
      "description": "La propriété position spécifie le mode de calcul des coordonnées de l'élément : 'relative' décale l'élément par rapport à son emplacement initial avec top/left ; 'absolute' le détache du flux pour le placer par rapport au premier parent positionné ; 'fixed' le fige à l'écran lors du défilement ; 'static' est la position par défaut.",
      "values": [
        "static (position normale par défaut)",
        "relative (décalé par rapport à sa place)",
        "absolute (positionné par rapport au parent)",
        "fixed (collé à l'écran pendant le scroll)",
        "sticky"
      ]
    },
    {
      "id": "css-float",
      "category": "Propriétés des boîtes",
      "property": "float",
      "name": "float - Flottement de l'élément",
      "summary": "Place/Fait flotter un élément dans un conteneur (left ; right ; none).",
      "howToUse": "Fait flotter une image à gauche (left) ou à droite (right) pour que le texte coule autour d'elle.",
      "code": "/* Fait flotter l'image #img1 à gauche */\n#img1 {\n  float: left;\n  margin-right: 15px;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #img1:hover { opacity: 0.8; }.",
      "videoSimType": "boxmodel-sim",
      "description": "La propriété float fait flotter un élément (souvent une image #img1 ou un bloc) à gauche (left) ou à droite (right) de son conteneur, permettant au texte suivant d'envelopper son contour.",
      "values": [
        "left (flotte à gauche)",
        "right (flotte à droite)",
        "none (aucun flottement)"
      ]
    },
    {
      "id": "css-padding",
      "category": "Propriétés des boîtes",
      "property": "padding",
      "name": "padding - Marge intérieure",
      "summary": "Propriété abrégée qui définit la marge intérieure d'un élément des 4 cotés.",
      "howToUse": "Crée un espace entre le texte et la bordure de la boîte (ex: padding: 15px;).",
      "code": "/* Marge intérieure de 15px autour du texte de #boite */\n#boite {\n  padding: 15px;\n}",
      "hoverNote": "💡 Note Bac : Pour augmenter la marge intérieure au survol : #boite:hover { padding: 25px; }.",
      "videoSimType": "boxmodel-sim",
      "description": "La propriété padding définit la marge intérieure, c'est-à-dire l'espace vide entre le contenu (texte ou image) et la bordure de la boîte. Elle donne de l'air et évite que le texte ne soit collé contre le bord du cadre.",
      "values": [
        "1 valeur (les 4 côtés : ex 15px)",
        "2 valeurs (Haut/Bas et Gauche/Droite : ex 10px 20px)",
        "4 valeurs (Haut Droite Bas Gauche)"
      ]
    },
    {
      "id": "css-margin",
      "category": "Propriétés des boîtes",
      "property": "margin",
      "name": "margin - Marge extérieure",
      "summary": "Définit les marges d'un élément (espace extérieur autour de la boîte).",
      "howToUse": "Écarte la boîte des autres éléments. 'margin: auto;' centre la boîte horizontalement.",
      "code": "/* Marge extérieure de 20px et centrage */\n#boite {\n  margin: 20px auto;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { margin-top: 10px; }.",
      "videoSimType": "boxmodel-sim",
      "description": "La propriété margin définit la marge extérieure, c'est-à-dire l'espace vide situé tout autour de la boîte pour la séparer des autres éléments voisins. 'margin: auto;' ou 'margin: 0 auto;' permet de centrer horizontalement un bloc dans la page.",
      "values": [
        "valeur en px (ex: 20px)",
        "0 auto (centrage horizontal)",
        "4 valeurs (Haut Droite Bas Gauche)"
      ]
    },
    {
      "id": "css-box-shadow",
      "category": "Propriétés des boîtes",
      "property": "box-shadow",
      "name": "box-shadow - Ombre portée sur la boîte",
      "summary": "Ajoute des ombres à la boîte d'un élément (décalage-x, décalage-y, flou, couleur).",
      "howToUse": "Syntaxe : box-shadow: decalageX decalageY flou couleur; (ex: 5px 5px 10px #888888).",
      "code": "/* Ajoute une ombre portée sur la boîte #boite */\n#boite {\n  box-shadow: 5px 5px 10px #888888;\n}",
      "hoverNote": "💡 Note Bac : Très fréquent au Bac : faire flotter au survol avec une ombre plus marquée : #boite:hover { box-shadow: 10px 10px 20px #555555; }.",
      "videoSimType": "box-shadow-sim",
      "description": "La propriété box-shadow projette une ombre portée tout autour du rectangle de la boîte. On indique dans l'ordre : le décalage horizontal (X), le décalage vertical (Y), le rayon de flou (blur) et la couleur de l'ombre (ex: 5px 5px 10px #888888). Elle donne un relief 3D saisissant aux cartes et boutons.",
      "values": [
        "decalageX decalageY flou couleur (ex: 4px 4px 10px #888888, 0 10px 25px rgba(0,0,0,0.3))"
      ]
    },
    {
      "id": "css-display",
      "category": "Propriétés des boîtes",
      "property": "display",
      "name": "display - Comportement d'affichage",
      "summary": "Spécifie le comportement d'affichage d'un élément (inline ; block ; inline-block ; none).",
      "howToUse": "block donne une largeur de 100% avec saut de ligne ; inline reste sur la même ligne ; none masque l'élément.",
      "code": "/* Transforme le lien #lien en élément de type block */\n#lien {\n  display: block;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #lien:hover { background-color: yellow; }.",
      "videoSimType": "display-opacity-sim",
      "description": "La propriété display change la manière dont un élément s'insère dans la page : 'block' fait occuper à l'élément toute la largeur disponible avec un saut de ligne automatique ; 'inline' l'affiche sur la même ligne sans saut ; 'inline-block' garde l'alignement sur la même ligne tout en permettant de lui donner width, height et padding ; 'none' masque complètement l'élément.",
      "values": [
        "block (bloc avec saut de ligne)",
        "inline (sur la même ligne)",
        "inline-block (en ligne mais avec dimensions)",
        "none (élément masqué)"
      ]
    },
    {
      "id": "css-coords-top-bottom-left-right",
      "category": "Propriétés des boîtes",
      "property": "top, bottom, left, right",
      "name": "top, bottom, left, right - Coordonnées de position",
      "summary": "Spécifie la position verticale, par rapport au haut/bas, et horizontale, par rapport à la gauche/droite d'un élément positionné.",
      "howToUse": "Fonctionne uniquement si la propriété position (relative, absolute ou fixed) est définie.",
      "code": "#boite {\n  position: absolute;\n  top: 50px;\n  left: 100px;\n}",
      "hoverNote": "💡 Note Bac : Pour déplacer au survol de la souris : #boite:hover { top: 40px; }.",
      "videoSimType": "position-sim",
      "description": "Ces 4 propriétés (top, bottom, left, right) définissent le décalage précis en pixels ou pourcentage de l'élément par rapport aux bords haut, bas, gauche et droite. ATTENTION : elles ne fonctionnent que si l'élément possède une propriété position différente de static (position: relative, absolute ou fixed).",
      "values": [
        "valeurs en px (ex: top: 20px; left: 50px;)",
        "valeurs en % (ex: top: 10%; right: 5%;)",
        "auto"
      ]
    },
    {
      "id": "css-overflow",
      "category": "Propriétés des boîtes",
      "property": "overflow",
      "name": "overflow - Gestion du débordement",
      "summary": "Spécifie le comportement du contenu lorsqu'il déborde de la boîte d'un élément (visible ; hidden ; clip ; scroll ; auto).",
      "howToUse": "hidden masque ce qui dépasse ; scroll ajoute toujours des barres de défilement ; auto en ajoute si nécessaire.",
      "code": "/* Masque tout ce qui déborde de la boîte #boite */\n#boite {\n  width: 200px;\n  height: 100px;\n  overflow: hidden;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { overflow: visible; }.",
      "videoSimType": "display-opacity-sim",
      "description": "La propriété overflow détermine ce qui se passe lorsque le contenu intérieur d'un élément dépasse la taille (width ou height) de sa boîte : 'hidden' coupe et masque tout ce qui déborde ; 'scroll' ajoute obligatoirement des barres de défilement horizontale et verticale ; 'auto' n'affiche la barre de défilement que si le contenu déborde réellement ; 'visible' laisse déborder le contenu à l'extérieur.",
      "values": [
        "hidden (masque le contenu qui déborde)",
        "scroll (barres de défilement permanentes)",
        "auto (barre de défilement si nécessaire)",
        "visible (laisse déborder en dehors)"
      ]
    },
    {
      "id": "css-opacity",
      "category": "Propriétés des boîtes",
      "property": "opacity",
      "name": "opacity - Niveau de transparence",
      "summary": "Définit le niveau de transparence d'un élément (de 0.0 complètement transparent à 1.0 opaque).",
      "howToUse": "0.5 rend l'élément semi-transparent à 50%.",
      "code": "/* Rend la boîte #boite semi-transparente */\n#boite {\n  opacity: 0.5;\n}",
      "hoverNote": "💡 Note Bac : Classique d'examen : rendre totalement opaque au survol de la souris : #boite:hover { opacity: 1.0; }.",
      "videoSimType": "display-opacity-sim",
      "description": "La propriété opacity contrôle le degré de transparence globale de l'élément et de tout ce qu'il contient. Sa valeur s'exprime par un nombre décimal entre 0.0 (totalement invisible et transparent) et 1.0 (totalement opaque et visible). Exemple Bac : opacity: 0.5 donne une semi-transparence à 50%.",
      "values": [
        "0.0 (invisible / transparent à 100%)",
        "0.5 (semi-transparent à 50%)",
        "1.0 (opaque normal)"
      ]
    },
    {
      "id": "css-border-color",
      "category": "Propriétés des bordures",
      "property": "border-color",
      "name": "border-color - Couleur des bordures",
      "summary": "Définit la couleur des bordures d'un élément.",
      "howToUse": "Spécifie la couleur du cadre (ex: red, blue, #0284c7).",
      "code": "/* Définit la couleur de bordure de #boite en rouge */\n#boite {\n  border-style: solid;\n  border-color: red;\n}",
      "hoverNote": "💡 Note Bac : Pour changer la couleur de bordure au survol : #boite:hover { border-color: blue; }.",
      "videoSimType": "border-sim",
      "description": "La propriété border-color définit la couleur du trait de bordure autour de l'élément. Elle s'utilise conjointement avec border-style et border-width.",
      "values": [
        "Noms anglais (red, blue, green)",
        "Code hexadécimal (#dc2626, #0284c7)",
        "rgb() / rgba()"
      ]
    },
    {
      "id": "css-border-style",
      "category": "Propriétés des bordures",
      "property": "border-style",
      "name": "border-style - Style du tracé de bordure",
      "summary": "Définit le style des bordures d'un élément (solid ; dashed ; dotted ; double ; none).",
      "howToUse": "solid = trait plein ; dashed = tirets ; dotted = pointillés ; double = double ligne.",
      "code": "/* Bordure en trait plein pour la boîte #boite */\n#boite {\n  border-style: solid;\n}",
      "hoverNote": "💡 Note Bac : Pour passer en pointillés au survol de la souris : #boite:hover { border-style: dashed; }.",
      "videoSimType": "border-sim",
      "description": "La propriété border-style détermine l'aspect graphique du tracé de la bordure. Sans cette propriété (ou si elle vaut 'none'), aucune bordure n'apparaît ! 'solid' trace une ligne continue pleine, 'dashed' trace une ligne de tirets, 'dotted' des pointillés, et 'double' deux lignes parallèles.",
      "values": [
        "solid (trait plein continu)",
        "dashed (ligne de tirets)",
        "dotted (ligne de pointillés)",
        "double (double trait)",
        "none (pas de bordure)"
      ]
    },
    {
      "id": "css-border-radius",
      "category": "Propriétés des bordures",
      "property": "border-radius",
      "name": "border-radius - Rayon des coins arrondis",
      "summary": "Définit le rayon des coins arrondis d'un élément.",
      "howToUse": "10px arrondit légèrement les 4 angles ; 50% transforme un carré en cercle parfait.",
      "code": "/* Arrondit les coins de la boîte #boite de 10px */\n#boite {\n  border: 2px solid #0284c7;\n  border-radius: 10px;\n}",
      "hoverNote": "💡 Note Bac : Pour accentuer l'arrondi au survol : #boite:hover { border-radius: 25px; }.",
      "videoSimType": "border-sim",
      "description": "La propriété border-radius adoucit et arrondit les 4 angles de la boîte. Plus le rayon en pixels est grand, plus les coins sont arrondis. Une valeur de 50% sur une boîte carrée la transforme instantanément en cercle parfait !",
      "values": [
        "valeur en px (ex: 5px, 10px, 20px)",
        "valeur en % (ex: 50% pour un cercle)",
        "border-radius: 10px 20px"
      ]
    },
    {
      "id": "css-border-width",
      "category": "Propriétés des bordures",
      "property": "border-width",
      "name": "border-width - Épaisseur de la bordure",
      "summary": "Définit la largeur des bordures d'un élément (medium ; thin ; thick ; valeur en px).",
      "howToUse": "Définit l'épaisseur du trait (ex: 1px, 2px, 5px).",
      "code": "/* Épaisseur de 3px sur #boite */\n#boite {\n  border-style: solid;\n  border-width: 3px;\n}",
      "hoverNote": "💡 Note Bac : Pour épaissir la bordure au survol de la souris : #boite:hover { border-width: 5px; }.",
      "videoSimType": "border-sim",
      "description": "La propriété border-width spécifie l'épaisseur du trait de la bordure. Elle s'exprime en pixels (px) pour une mesure précise (ex: 1px, 2px, 4px) ou par les mots-clés thin (fin), medium (moyen) ou thick (épais).",
      "values": [
        "valeur en px (ex: 1px, 2px, 3px, 5px)",
        "thin (bordure fine)",
        "medium (bordure moyenne)",
        "thick (bordure épaisse)"
      ]
    },
    {
      "id": "css-border-shorthand",
      "category": "Propriétés des bordures",
      "property": "border",
      "name": "border - Super-propriété de bordure",
      "summary": "Super-propriété de bordure. Combine border-color, border-style, border-width, border-radius.",
      "howToUse": "Syntaxe standard au Bac : border: epaisseur style couleur; (ex: 2px solid red).",
      "code": "/* Définit une bordure complète de 2px solide rouge sur #boite */\n#boite {\n  border: 2px solid red;\n}",
      "hoverNote": "💡 Note Bac : Pour changer la bordure au survol de la souris : #boite:hover { border: 2px solid blue; }.",
      "videoSimType": "border-sim",
      "description": "La super-propriété border est la formule standard incontournable du Baccalauréat STI ! Elle réunit en une seule ligne : l'épaisseur (width), le style de tracé (style) et la couleur (color). Exemple officiel : border: 2px solid red;",
      "values": [
        "epaisseur style couleur (ex: 2px solid red, 1px dashed blue, 3px double #0284c7)"
      ]
    },
    {
      "id": "css-transition-delay",
      "category": "Transition",
      "property": "transition-delay",
      "name": "transition-delay - Délai d'attente",
      "summary": "Spécifie le délai nécessaire avant que la transition commence (en secondes s ou ms).",
      "howToUse": "Ex: 1s attend 1 seconde avant de démarrer l'animation.",
      "code": "#boite {\n  transition-delay: 1s;\n}",
      "hoverNote": "💡 Note Bac : Définit le temps d'attente avant que l'effet :hover ne démarre.",
      "videoSimType": "transition-sim",
      "description": "La propriété transition-delay indique le temps d'attente (délai en secondes 's') avant que la transition ne commence à s'animer après le passage de la souris (:hover). Une valeur de 1s attendra 1 seconde avant de débuter l'effet.",
      "values": [
        "secondes s (ex: 0.5s, 1s, 2s)",
        "millisecondes ms (ex: 500ms)"
      ]
    },
    {
      "id": "css-transition-duration",
      "category": "Transition",
      "property": "transition-duration",
      "name": "transition-duration - Durée de la transition",
      "summary": "Spécifie la durée de la transition (en secondes s).",
      "howToUse": "Définit le temps que met l'effet à s'accomplir (ex: 2s pour 2 secondes).",
      "code": "#boite {\n  transition-duration: 2s;\n}",
      "hoverNote": "💡 Note Bac : Permet de rendre l'effet de #boite:hover doux et progressif pendant 2 secondes.",
      "videoSimType": "transition-sim",
      "description": "La propriété transition-duration détermine la durée totale que met la transformation à s'accomplir en douceur de l'état A vers l'état B. Par exemple, transition-duration: 2s étale l'animation sur 2 secondes entières.",
      "values": [
        "secondes s (ex: 0.3s, 1s, 2s, 3s)",
        "millisecondes ms (ex: 300ms)"
      ]
    },
    {
      "id": "css-transition-property",
      "category": "Transition",
      "property": "transition-property",
      "name": "transition-property - Propriété ciblée",
      "summary": "Spécifie les propriétés CSS sur lesquelles l'effet de transition sera appliqué.",
      "howToUse": "Ex: width pour animer uniquement la largeur, ou all pour toutes les propriétés.",
      "code": "#boite {\n  transition-property: width, background-color;\n}",
      "hoverNote": "💡 Note Bac : Indique quelle propriété changera en douceur lors du survol :hover.",
      "videoSimType": "transition-sim",
      "description": "La propriété transition-property nomme explicitement quelles propriétés CSS précises doivent être animées lors du changement d'état (ex: width, background-color, transform). On peut utiliser le mot-clé 'all' pour animer toutes les propriétés modifiées en même temps.",
      "values": [
        "all (toutes les propriétés)",
        "nom d'une propriété : width, height, background-color, color, transform, opacity"
      ]
    },
    {
      "id": "css-transition-shorthand",
      "category": "Transition",
      "property": "transition",
      "name": "transition - Super-propriété de transition",
      "summary": "Super-propriété de transition. Combine transition-property, transition-duration et transition-delay.",
      "howToUse": "RÈGLE D'OR STI : Se place sur l'élément de base #boite pour rendre le survol :hover fluide !",
      "code": "/* Transition de 2 secondes sur la largeur de #boite */\n#boite {\n  width: 100px;\n  transition: width 2s;\n}\n\n#boite:hover {\n  width: 200px;\n}",
      "hoverNote": "💡 Note Bac : La transition est créée spécifiquement pour adoucir le survol :hover !",
      "videoSimType": "transition-sim",
      "description": "La super-propriété transition condense en une ligne : la propriété ciblée, la durée et le délai. RÈGLE D'OR STI : elle se place toujours sur l'élément de base (#boite) pour que le mouvement soit fluide à l'aller comme au retour du survol de la souris (:hover) !",
      "values": [
        "propriete duree delai (ex: all 0.5s, width 2s 0.5s, background-color 1s)"
      ]
    },
    {
      "id": "css-keyframes",
      "category": "Animation",
      "property": "@keyframes",
      "name": "@keyframes - États clés de l'animation",
      "summary": "Spécifie les états clés de l'animation (étapes de 0% à 100%, ou from / to).",
      "howToUse": "Définit le scénario de l'animation avec son nom (ex: anim1).",
      "code": "/* Déclare les étapes de l'animation anim1 */\n@keyframes anim1 {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: yellow;\n  }\n}",
      "hoverNote": "💡 Note Bac : Une animation déclarée avec @keyframes peut ensuite être déclenchée sur #boite ou #boite:hover.",
      "videoSimType": "animation-sim",
      "description": "La règle @keyframes définit le scénario complet d'une animation personnalisée sans aucun code JavaScript. On lui donne un nom (ex: anim1), puis on décrit les étapes clés intermédiaires soit avec 'from' (départ 0%) et 'to' (arrivée 100%), soit avec des pourcentages (0%, 50%, 100%) en y modifiant les couleurs, dimensions ou positions.",
      "values": [
        "from / to (début et fin)",
        "pourcentages : 0%, 50%, 100%"
      ]
    },
    {
      "id": "css-animation-name",
      "category": "Animation",
      "property": "animation-name",
      "name": "animation-name - Nom de l'animation",
      "summary": "Spécifie le nom de l'animation déclarée dans @keyframes.",
      "howToUse": "Relie la boîte #boite à la règle @keyframes anim1.",
      "code": "#boite {\n  animation-name: anim1;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { animation-name: anim1; }.",
      "videoSimType": "animation-sim",
      "description": "La propriété animation-name fait le lien entre l'élément HTML (#boite) et le scénario d'animation déclaré préalablement dans la règle @keyframes (ex: animation-name: anim1;).",
      "values": [
        "nom_animation (nom déclaré dans @keyframes, ex: anim1, pulsation, defilement)"
      ]
    },
    {
      "id": "css-animation-delay",
      "category": "Animation",
      "property": "animation-delay",
      "name": "animation-delay - Délai avant animation",
      "summary": "Spécifie le délai nécessaire avant que l'animation commence.",
      "howToUse": "Indique le temps d'attente (ex: 1s) avant le démarrage de l'animation.",
      "code": "#boite {\n  animation-delay: 1s;\n}",
      "hoverNote": "💡 Note Bac : Définit le temps d'attente au survol de la souris :hover.",
      "videoSimType": "animation-sim",
      "description": "La propriété animation-delay spécifie le temps d'attente (en secondes) avant le déclenchement de la première itération de l'animation une fois la page chargée ou l'élément survolé.",
      "values": [
        "secondes s (ex: 1s, 2s)",
        "0s (départ immédiat)"
      ]
    },
    {
      "id": "css-animation-duration",
      "category": "Animation",
      "property": "animation-duration",
      "name": "animation-duration - Durée de l'animation",
      "summary": "Spécifie la durée d'un cycle complet de l'animation.",
      "howToUse": "Ex: 3s pour que l'animation prenne 3 secondes de 0% à 100%.",
      "code": "#boite {\n  animation-duration: 3s;\n}",
      "hoverNote": "💡 Note Bac : Au survol : #boite:hover { animation-duration: 1s; }.",
      "videoSimType": "animation-sim",
      "description": "La propriété animation-duration définit le temps nécessaire en secondes (s) pour exécuter un cycle complet de l'animation du début (0%) à la fin (100%).",
      "values": [
        "secondes s (ex: 1s, 2s, 3s, 5s)"
      ]
    },
    {
      "id": "css-animation-iteration-count",
      "category": "Animation",
      "property": "animation-iteration-count",
      "name": "animation-iteration-count - Répétitions",
      "summary": "Spécifie le nombre de répétitions de l'animation (nombre ou infinite).",
      "howToUse": "infinite répète l'animation en boucle sans fin.",
      "code": "#boite {\n  animation-iteration-count: infinite;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris : #boite:hover { animation-iteration-count: infinite; }.",
      "videoSimType": "animation-sim",
      "description": "La propriété animation-iteration-count spécifie combien de fois l'animation doit se rejouer. On peut donner un nombre entier précis (ex: 3 pour trois répétitions) ou le mot-clé 'infinite' pour que l'animation boucle sans fin indéfiniment.",
      "values": [
        "infinite (en boucle infinie sans arrêt)",
        "nombre entier positif (ex: 1, 2, 3, 5)"
      ]
    },
    {
      "id": "css-animation-direction",
      "category": "Animation",
      "property": "animation-direction",
      "name": "animation-direction - Direction de l'animation",
      "summary": "Définit la direction de l'animation (normal ; reverse ; alternate).",
      "howToUse": "alternate fait l'animation de départ vers la fin puis revient en arrière en boucle continue.",
      "code": "#boite {\n  animation-direction: alternate;\n}",
      "hoverNote": "💡 Note Bac : Au survol : #boite:hover { animation-direction: alternate; }.",
      "videoSimType": "animation-sim",
      "description": "La propriété animation-direction détermine le sens de lecture du cycle d'animation : 'normal' joue toujours de 0% vers 100% ; 'reverse' joue à l'envers de 100% vers 0% ; 'alternate' joue de 0% à 100% puis fait marche arrière de 100% à 0% en va-et-vient continu et fluide.",
      "values": [
        "normal (du début vers la fin)",
        "reverse (de la fin vers le début)",
        "alternate (va-et-vient aller-retour fluide)"
      ]
    },
    {
      "id": "css-animation-shorthand",
      "category": "Animation",
      "property": "animation",
      "name": "animation - Super-propriété d'animation",
      "summary": "Super-propriété de l'animation. Combine animation-name, animation-duration, animation-delay, animation-iteration-count, animation-direction.",
      "howToUse": "Syntaxe classique du Bac : animation: nom duree iteration-count direction; (ex: anim1 3s infinite alternate;).",
      "code": "/* Déclenche l'animation complète sur la boîte #boite */\n#boite {\n  animation: anim1 3s infinite alternate;\n}",
      "hoverNote": "💡 Note Bac : Pour lancer l'animation uniquement lorsque la souris survole la boîte : #boite:hover { animation: anim1 2s infinite alternate; }.",
      "videoSimType": "animation-sim",
      "description": "La super-propriété animation est la formule synthétique complète utilisée en examen pour lancer l'animation : animation: nom duree repetition direction; Exemple officiel Bac : animation: anim1 3s infinite alternate;",
      "values": [
        "nom duree iteration-count direction (ex: anim1 3s infinite alternate)"
      ]
    }
  ],
  "js": [
  {
    "id": "js-op-logique-et",
    "category": "Opérateurs logiques",
    "name": "&& - ET logique",
    "summary": "Renvoie true si et seulement si les deux conditions sont vraies en même temps.",
    "description": "L'opérateur '&&' (ET logique) permet d'associer deux conditions dans une structure conditionnelle if. La condition globale ne sera validée que si les deux sous-conditions sont simultanément vraies. Au Bac STI, on l'utilise souvent pour vérifier qu'une note est à la fois >= 0 ET <= 20.",
    "values": [
      "condition1 && condition2",
      "true && true -> true",
      "true && false -> false"
    ],
    "code": "let note = 15;\n\n// Vérifie que la note est comprise entre 0 et 20\nif (note >= 0 && note <= 20) {\n  alert(\"Note valide !\");\n} else {\n  alert(\"Note invalide !\");\n}",
    "testCode": "let note = 16;\nlet valide = (note >= 0 && note <= 20);\nalert(\"Test && : (16 >= 0 && 16 <= 20) renvoie : \" + valide);"
  },
  {
    "id": "js-op-logique-ou",
    "category": "Opérateurs logiques",
    "name": "|| - OU logique",
    "summary": "Renvoie true si au moins l'une des deux conditions est vraie.",
    "description": "L'opérateur '||' (OU logique) s'écrit avec deux barres verticales. Il renvoie true dès qu'au moins l'une des conditions est vérifiée. Très utile en validation de formulaire pour détecter si l'un des deux champs obligatoires a été laissé vide.",
    "values": [
      "condition1 || condition2",
      "true || false -> true",
      "false || false -> false"
    ],
    "code": "let nom = \"\";\nlet prenom = \"Ali\";\n\nif (nom == \"\" || prenom == \"\") {\n  alert(\"Veuillez remplir tous les champs obligatoires !\");\n}",
    "testCode": "let nom = \"\";\nlet test = (nom == \"\" || 5 > 10);\nalert(\"Test || : (\"\" == \"\" || 5 > 10) renvoie : \" + test);"
  },
  {
    "id": "js-op-logique-non",
    "category": "Opérateurs logiques",
    "name": "! - NON logique (Négation)",
    "summary": "Inverse la valeur de vérité d'une condition (transforme true en false et vice-versa).",
    "description": "Le point d'exclamation '!' inverse la valeur booléenne. Si une condition est fausse, !condition devient vrai. En examen, on l'utilise pour vérifier qu'une case n'est pas cochée (!case.checked) ou qu'un champ n'est pas vide (!isNaN(valeur)).",
    "values": [
      "!true -> false",
      "!false -> true"
    ],
    "code": "let majeur = false;\n\nif (!majeur) {\n  alert(\"Accès réservé aux personnes majeures.\");\n}",
    "testCode": "let actif = false;\nalert(\"Test ! : !false renvoie : \" + (!actif));"
  },
  {
    "id": "js-op-comp-egal",
    "category": "Opérateurs de comparaison",
    "name": "== - Égal à",
    "summary": "Compare deux valeurs et renvoie true si elles sont égales.",
    "description": "L'opérateur de comparaison d'égalité '==' compare deux valeurs. ATTENTION au Bac : ne confondez pas un seul égal '=' (qui sert à affecter une valeur à une variable) et le double égal '==' (qui sert à comparer dans un if) !",
    "values": [
      "a == b",
      "5 == 5 -> true",
      "'test' == 'test' -> true"
    ],
    "code": "let section = \"STI\";\n\nif (section == \"STI\") {\n  alert(\"Bienvenue en section STI !\");\n}",
    "testCode": "let a = \"STI\";\nalert(\"Test == : (\"STI\" == \"STI\") -> \" + (a == \"STI\"));"
  },
  {
    "id": "js-op-comp-diff",
    "category": "Opérateurs de comparaison",
    "name": "!= - Différent de",
    "summary": "Renvoie true si les deux valeurs sont différentes.",
    "description": "L'opérateur '!=' vérifie que deux valeurs ne sont pas égales. Par exemple : if (motDePasse != confirmation) { alert('Mots de passe non identiques'); }.",
    "values": [
      "a != b",
      "5 != 3 -> true",
      "5 != 5 -> false"
    ],
    "code": "let pass1 = \"123\";\nlet pass2 = \"abc\";\n\nif (pass1 != pass2) {\n  alert(\"Erreur : les deux mots de passe ne correspondent pas !\");\n}",
    "testCode": "alert(\"Test != : (10 != 20) renvoie : \" + (10 != 20));"
  },
  {
    "id": "js-op-comp-sup",
    "category": "Opérateurs de comparaison",
    "name": "> et >= - Supérieur / Supérieur ou égal",
    "summary": "Vérifie si une valeur est strictement supérieure (>) ou supérieure ou égale (>=) à une autre.",
    "description": "Permet de vérifier des seuils numériques (ex: moyenne >= 10 pour l'admission, âge >= 18).",
    "values": [
      "> (strictement supérieur)",
      ">= (supérieur ou égal)"
    ],
    "code": "let moyenne = 14;\n\nif (moyenne >= 10) {\n  alert(\"Félicitations, vous êtes admis !\");\n}",
    "testCode": "let moy = 14;\nalert(\"Test >= : (14 >= 10) -> \" + (moy >= 10));"
  },
  {
    "id": "js-op-comp-inf",
    "category": "Opérateurs de comparaison",
    "name": "< et <= - Inférieur / Inférieur ou égal",
    "summary": "Vérifie si une valeur est strictement inférieure (<) ou inférieure ou égale (<=) à une autre.",
    "description": "Permet de vérifier qu'une valeur ne dépasse pas une limite autorisée (ex: prix <= 100, note <= 20).",
    "values": [
      "< (strictement inférieur)",
      "<= (inférieur ou égal)"
    ],
    "code": "let score = 5;\n\nif (score < 10) {\n  alert(\"Score insuffisant pour valider le niveau.\");\n}",
    "testCode": "alert(\"Test < : (5 < 10) -> \" + (5 < 10));"
  },
  {
    "id": "js-op-arithm-bases",
    "category": "Opérateurs arithmétiques",
    "name": "+ , - , * , / - Opérations de base",
    "summary": "Effectue l'addition (+), la soustraction (-), la multiplication (*) ou la division (/).",
    "description": "Les 4 opérations mathématiques élémentaires. ATTENTION avec '+' : si l'une des deux variables est une chaîne de caractères (string), '+' fera une concaténation au lieu d'une addition ! Utilisez Number() ou parseInt() pour additionner des nombres saisis dans un formulaire.",
    "values": [
      "a + b (addition ou concaténation)",
      "a - b (soustraction)",
      "a * b (multiplication)",
      "a / b (division)"
    ],
    "code": "let prix = 20;\nlet quantite = 3;\nlet total = prix * quantite; // 60",
    "testCode": "let calc = (10 + 5) * 2 / 3;\nalert(\"Test arithmétique : (10 + 5) * 2 / 3 = \" + calc);"
  },
  {
    "id": "js-op-arithm-modulo",
    "category": "Opérateurs arithmétiques",
    "name": "% - Reste de la division euclidienne (Modulo)",
    "summary": "Retourne le reste de la division entière d'un nombre par un autre.",
    "description": "L'opérateur modulo '%' calcule le reste de la division entière. C'est l'exercice classique du Bac pour déterminer si un nombre est pair ou impair : si (n % 2 == 0), alors le nombre est pair !",
    "values": [
      "a % b",
      "ex: 7 % 2 donne 1",
      "ex: 10 % 2 donne 0"
    ],
    "code": "let n = 15;\n\nif (n % 2 == 0) {\n  alert(n + \" est PAIR\");\n} else {\n  alert(n + \" est IMPAIR\");\n}",
    "testCode": "let nb = 17;\nlet reste = nb % 5;\nalert(\"Reste de la division euclidienne de 17 par 5 (17 % 5) = \" + reste);"
  },
  {
    "id": "js-output-alert",
    "category": "Méthodes pour afficher une sortie",
    "name": "alert() - Boîte de dialogue d'alerte",
    "summary": "Affiche un message d'information dans une boîte de dialogue contextuelle avec un bouton OK.",
    "description": "C'est la méthode de sortie la plus utilisée dans les formulaires pour signaler une erreur de saisie ou un message de succès à l'élève.",
    "values": [
      "alert(message)"
    ],
    "code": "alert(\"Bienvenue sur le portail de révision Bac STI !\");",
    "testCode": "alert(\"Ceci est un message affiché par la fonction alert() !\");"
  },
  {
    "id": "js-output-docwrite",
    "category": "Méthodes pour afficher une sortie",
    "name": "document.write() - Écriture directe dans la page",
    "summary": "Affiche directement du texte ou du code HTML dans le document web.",
    "description": "Écrit du contenu brut à l'endroit exact où le script est exécuté lors du chargement de la page.",
    "values": [
      "document.write(texteOuHtml)"
    ],
    "code": "document.write(\"<h2>Titre généré dynamiquement en JavaScript</h2>\");",
    "testCode": "alert(\"document.write() écrit directement dans le flux HTML de la page.\");"
  },
  {
    "id": "js-output-innerhtml",
    "category": "Méthodes pour afficher une sortie",
    "name": "element.innerHTML - Contenu HTML dynamique",
    "summary": "Permet de lire ou modifier le contenu HTML dynamique situé à l'intérieur d'un élément.",
    "description": "Cité expressément dans la note de l'annexe officielle : pour afficher ou modifier un contenu dynamique sans recharger la page, on utilise la propriété innerHTML (ex: document.getElementById('resultat').innerHTML = '<b>Bravo !</b>';).",
    "values": [
      "element.innerHTML = 'nouveau contenu HTML'"
    ],
    "code": "// Remplace le texte de la division par un résultat en vert\ndocument.getElementById(\"resultat\").innerHTML = \"<strong style='color:green;'>Calcul réussi !</strong>\";",
    "testCode": "let div = document.getElementById(\"detailsModal\");\nalert(\"Propriété innerHTML : permet d'insérer du texte ou des balises HTML à l'intérieur d'un élément !\");"
  },
  {
    "id": "js-input-prompt",
    "category": "Méthode pour saisir une entrée",
    "name": "prompt() - Boîte de dialogue de saisie",
    "summary": "Affiche une boîte de dialogue avec une zone de saisie pour demander une information à l'utilisateur.",
    "description": "Ouvre une petite fenêtre modale demandant à l'utilisateur de taper un texte. La fonction retourne la chaîne tapée, ou null si l'utilisateur clique sur Annuler. Toujours couplée à parseInt() si on demande un nombre.",
    "values": [
      "prompt(message [, valeurParDefaut])"
    ],
    "code": "let prenom = prompt(\"Veuillez saisir votre prénom :\");\n\nif (prenom != null && prenom != \"\") {\n  alert(\"Bonjour \" + prenom + \" !\");\n}",
    "testCode": "let p = prompt(\"Quel est votre prénom ?\");\nif (p) alert(\"Enchanté, \" + p + \" !\");"
  },
  {
    "id": "js-fn-isnan",
    "category": "Fonctions / Méthodes JS",
    "name": "isNaN(ch) - Test de validité numérique",
    "summary": "Retourne true si l'argument ch n'est pas convertible en un nombre, sinon retourne false.",
    "description": "LA FONCTION INDISPENSABLE DU BAC STI ! isNaN signifie 'is Not a Number'. Elle permet de vérifier si ce que l'utilisateur a tapé dans un champ est bien un nombre ou du texte invalide. Si isNaN(valeur) vaut true, c'est une erreur !",
    "values": [
      "isNaN('123') -> false (c'est un nombre valide)",
      "isNaN('abc') -> true (ce n'est PAS un nombre)"
    ],
    "code": "let saisie = document.getElementById(\"age\").value;\n\nif (isNaN(saisie)) {\n  alert(\"Erreur : veuillez entrer un âge numérique !\");\n  return false;\n}",
    "testCode": "let test1 = isNaN(\"125\");\nlet test2 = isNaN(\"Tunis\");\nalert(\"isNaN('125') = \" + test1 + \" (valide)\nisNaN('Tunis') = \" + test2 + \" (invalide, ce n'est pas un nombre !)\");"
  },
  {
    "id": "js-fn-number",
    "category": "Fonctions / Méthodes JS",
    "name": "Number(ch) - Conversion en nombre",
    "summary": "Convertit une chaîne ch en un nombre. Si la conversion n'est pas possible, retourne NaN.",
    "description": "Permet de convertir n'importe quelle chaîne numérique ('42', '3.14') en valeur de type Number manipulable pour les opérations arithmétiques.",
    "values": [
      "Number('45') -> 45",
      "Number('abc') -> NaN"
    ],
    "code": "let texte = \"50\";\nlet total = Number(texte) + 10; // Donne 60 (et non '5010')",
    "testCode": "let n = Number(\"42.5\");\nalert(\"Number('42.5') donne : \" + n + \" (Type: \" + typeof n + \")\");"
  },
  {
    "id": "js-fn-parsefloat",
    "category": "Fonctions / Méthodes JS",
    "name": "parseFloat(ch) - Conversion en réel",
    "summary": "Convertit une chaîne ch en un nombre réel (à virgule flottante).",
    "description": "Lit une chaîne de caractères et extrait le nombre décimal correspondant (ex: '15.75' donne le nombre 15.75). Très utilisé pour les moyennes ou les prix.",
    "values": [
      "parseFloat('14.5') -> 14.5",
      "parseFloat('10') -> 10"
    ],
    "code": "let moy = parseFloat(\"15.75\");\nif (moy >= 10) {\n  alert(\"Admis avec \" + moy);\n}",
    "testCode": "let r = parseFloat(\"17.85 DT\");\nalert(\"parseFloat('17.85 DT') extrait : \" + r);"
  },
  {
    "id": "js-fn-parseint",
    "category": "Fonctions / Méthodes JS",
    "name": "parseInt(ch [,b]) - Conversion en entier",
    "summary": "Convertit une chaîne ch en un entier exprimé dans la base b (par défaut base 10).",
    "howToUse": "Indispensable pour transformer une valeur d'input de formulaire en nombre entier avant de faire une addition ou une boucle.",
    "values": [
      "parseInt('42') -> 42",
      "parseInt('101', 2) -> 5 (en binaire base 2)",
      "parseInt('FF', 16) -> 255 (en hexadécimal)"
    ],
    "code": "let annee = parseInt(\"2026\");\nlet age = 2026 - parseInt(\"2008\"); // 18",
    "testCode": "let e = parseInt(\"25 élèves\");\nalert(\"parseInt('25 élèves') extrait l'entier : \" + e);"
  },
  {
    "id": "js-fn-string",
    "category": "Fonctions / Méthodes JS",
    "name": "String(a) - Conversion en chaîne de caractères",
    "summary": "Convertit la valeur a en une chaîne de caractères textuelle.",
    "description": "Permet de convertir un nombre, un booléen ou une date en texte afin de pouvoir lui appliquer des méthodes de chaînes comme length ou charAt.",
    "values": [
      "String(125) -> '125'",
      "String(true) -> 'true'"
    ],
    "code": "let code = 1045;\nlet texteCode = String(code); // '1045'\nalert(\"Longueur : \" + texteCode.length);",
    "testCode": "let s = String(2026);\nalert(\"String(2026) donne la chaîne : '\" + s + \"' de longueur \" + s.length);"
  },
  {
    "id": "js-dom-getelementbyid",
    "category": "Sélection d'éléments HTML",
    "name": "document.getElementById(id)",
    "summary": "Permet de sélectionner un élément HTML unique en fonction de la valeur de son attribut id.",
    "description": "LA MÉTHODE DE SÉLECTION FONDAMENTALE DU BAC STI ! Elle cherche dans tout le document l'élément qui porte l'id spécifié (ex: document.getElementById('nom')). On accède ensuite à sa valeur avec .value, à son contenu avec .innerHTML ou à son style avec .style.",
    "values": [
      "document.getElementById('identifiant')"
    ],
    "code": "// Récupère la valeur tapée dans l'input id=\"nomEleve\"\nlet nom = document.getElementById(\"nomEleve\").value;\n\n// Modifie la couleur du titre id=\"h1\"\ndocument.getElementById(\"h1\").style.color = \"red\";",
    "testCode": "let body = document.getElementById(\"detailsModal\");\nalert(\"document.getElementById('detailsModal') trouvé avec succès dans la page !\");"
  },
  {
    "id": "js-dom-getelementsbyname",
    "category": "Sélection d'éléments HTML",
    "name": "document.getElementsByName(nom)",
    "summary": "Permet de sélectionner tous les éléments HTML ayant le même attribut name (retourne une collection / tableau).",
    "description": "Très utilisé pour les boutons radio (<input type=\"radio\" name=\"genre\">) qui partagent tous le même nom de groupe. Comme elle renvoie un tableau, on utilise [0], [1] pour accéder à chaque choix et vérifier s'il est coché avec .checked.",
    "values": [
      "document.getElementsByName('nomDuGroupe')"
    ],
    "code": "let choix = document.getElementsByName(\"genre\");\n\nif (choix[0].checked) {\n  alert(\"Option 1 choisie\");\n} else if (choix[1].checked) {\n  alert(\"Option 2 choisie\");\n}",
    "testCode": "alert(\"document.getElementsByName('nav') sélectionne tous les boutons du même groupe sous forme de tableau !\");"
  },
  {
    "id": "js-math-abs",
    "category": "Méthodes de l'objet Math",
    "name": "Math.abs(x) - Valeur absolue",
    "summary": "Retourne la valeur absolue d'un nombre (rend le nombre toujours positif).",
    "description": "Élimine le signe négatif : Math.abs(-15) retourne 15. Math.abs(15) retourne 15.",
    "values": [
      "Math.abs(-x) -> x"
    ],
    "code": "let ecart = Math.abs(10 - 25); // Donne 15",
    "testCode": "alert(\"Math.abs(-42) = \" + Math.abs(-42));"
  },
  {
    "id": "js-math-sqrt",
    "category": "Méthodes de l'objet Math",
    "name": "Math.sqrt(x) - Racine carrée",
    "summary": "Retourne la racine carrée d'un nombre positif x.",
    "description": "Calcule la racine carrée. Exemple : Math.sqrt(25) donne 5.",
    "values": [
      "Math.sqrt(x)"
    ],
    "code": "let r = Math.sqrt(64); // 8",
    "testCode": "alert(\"Math.sqrt(81) = \" + Math.sqrt(81));"
  },
  {
    "id": "js-math-round",
    "category": "Méthodes de l'objet Math",
    "name": "Math.round(x) - Arrondi à l'entier le plus proche",
    "summary": "Retourne l'entier le plus proche du nombre décimal x.",
    "description": "Si la partie décimale est >= 0.5, arrondit vers le haut, sinon vers le bas. Exemple : Math.round(14.6) donne 15, Math.round(14.2) donne 14.",
    "values": [
      "Math.round(4.7) -> 5",
      "Math.round(4.3) -> 4"
    ],
    "code": "let moyenne = Math.round(13.7); // 14",
    "testCode": "alert(\"Math.round(14.6) donne : \" + Math.round(14.6));"
  },
  {
    "id": "js-math-trunc",
    "category": "Méthodes de l'objet Math",
    "name": "Math.trunc(x) - Troncature entière",
    "summary": "Retourne la troncature entière d'un nombre en retirant sa partie décimale.",
    "description": "Coupe simplement les chiffres après la virgule sans arrondir. Exemple : Math.trunc(14.9) donne 14.",
    "values": [
      "Math.trunc(15.99) -> 15"
    ],
    "code": "let entier = Math.trunc(19.85); // 19",
    "testCode": "alert(\"Math.trunc(19.89) = \" + Math.trunc(19.89));"
  },
  {
    "id": "js-math-random",
    "category": "Méthodes de l'objet Math",
    "name": "Math.random() - Nombre aléatoire",
    "summary": "Retourne un réel aléatoire dans l'intervalle [0, 1[ (entre 0 inclus et 1 exclu).",
    "description": "Pour obtenir un entier aléatoire entre 1 et N en STI, on utilise la formule classique : Math.trunc(Math.random() * N) + 1 ou Math.floor.",
    "values": [
      "Math.random() -> nombre entre 0.000... et 0.999..."
    ],
    "code": "// Nombre aléatoire entier entre 1 et 20 pour une note\nlet tirage = Math.trunc(Math.random() * 20) + 1;\nalert(\"Note tirée au sort : \" + tirage + \"/20\");",
    "testCode": "let rand = Math.trunc(Math.random() * 100) + 1;\nalert(\"Tirage aléatoire entre 1 et 100 : \" + rand);"
  },
  {
    "id": "js-str-concat",
    "category": "Les chaînes de caractères",
    "name": "+ (Concaténation de chaînes)",
    "summary": "Opérateur de concaténation pour assembler plusieurs chaînes de caractères ensemble.",
    "description": "Permet de coller bout à bout des variables et des textes fixes.",
    "values": [
      "ch1 + ch2"
    ],
    "code": "let message = \"Bonjour \" + \"Ali\" + \" !\"; // \"Bonjour Ali !\"",
    "testCode": "let s = \"Bac \" + \"STI \" + 2026;\nalert(\"Concaténation : \" + s);"
  },
  {
    "id": "js-str-length",
    "category": "Les chaînes de caractères",
    "name": "ch.length - Longueur de la chaîne",
    "summary": "Propriété qui retourne le nombre total de caractères de la chaîne ch.",
    "description": "Très utilisé au Bac pour vérifier si un mot de passe a la taille minimale exigée (ex: if (pass.length < 8)).",
    "values": [
      "ch.length (nombre entier)"
    ],
    "code": "let mot = \"Tunisie\";\nalert(mot.length); // 7",
    "testCode": "let ch = \"Baccalauréat STI\";\nalert(\"Longueur de '\" + ch + \"' : \" + ch.length + \" caractères\");"
  },
  {
    "id": "js-str-indexof",
    "category": "Les chaînes de caractères",
    "name": "ch.indexOf(ch1 [,p]) - Première occurrence",
    "summary": "Retourne la position de la 1ère occurrence de ch1 dans ch, à partir de la position p (sinon retourne -1).",
    "description": "Recherche un caractère ou sous-chaîne. Si l'élément est trouvé, renvoie son indice (commence à 0). S'il n'existe pas, renvoie -1. Idéal pour vérifier la présence du symbole '@' dans un email !",
    "values": [
      "ch.indexOf('@') -> indice ou -1 si absent"
    ],
    "code": "let email = \"eleve@sti.tn\";\nif (email.indexOf(\"@\") == -1) {\n  alert(\"Adresse email invalide : il manque le caractère @ !\");\n}",
    "testCode": "let email = \"prof@sti.tn\";\nalert(\"Position du '@' dans '\" + email + \"' : \" + email.indexOf(\"@\"));"
  },
  {
    "id": "js-str-lastindexof",
    "category": "Les chaînes de caractères",
    "name": "ch.lastIndexOf(ch1 [,p]) - Dernière occurrence",
    "summary": "Retourne la position de la dernière occurrence de ch1 dans ch (sinon retourne -1).",
    "description": "Cherche en partant de la fin de la chaîne pour trouver la dernière apparition du motif recherché.",
    "values": [
      "ch.lastIndexOf(ch1)"
    ],
    "code": "let texte = \"site.sti.tn\";\nlet posPoint = texte.lastIndexOf(\".\"); // Position du dernier point",
    "testCode": "let txt = \"informatique.sti.tn\";\nalert(\"Dernier point '.' trouvé à la position : \" + txt.lastIndexOf(\".\"));"
  },
  {
    "id": "js-str-substring",
    "category": "Les chaînes de caractères",
    "name": "ch.substring(d, f) - Extraction de sous-chaîne",
    "summary": "Retourne une sous-chaîne de ch de la position d à la position f (non incluse).",
    "description": "Extrait une portion de texte. Attention : l'indice de fin 'f' est exclu (non compris).",
    "values": [
      "ch.substring(debut, fin)"
    ],
    "code": "let ch = \"Sciences Technique\";\nlet extrait = ch.substring(0, 8); // \"Sciences\"",
    "testCode": "let phrase = \"Baccalauréat\";\nalert(\"phrase.substring(0, 3) = \" + phrase.substring(0, 3));"
  },
  {
    "id": "js-str-replace",
    "category": "Les chaînes de caractères",
    "name": "ch.replace(ch1, ch2) - Remplacement",
    "summary": "Retourne une chaîne dans laquelle la 1ère occurrence de ch1 dans ch est remplacée par ch2.",
    "description": "Remplace le premier motif trouvé par un nouveau texte.",
    "values": [
      "ch.replace(ancien, nouveau)"
    ],
    "code": "let phrase = \"Bonjour Paul\";\nlet modif = phrase.replace(\"Paul\", \"Sami\"); // \"Bonjour Sami\"",
    "testCode": "let t = \"Le chat dort\";\nalert(\"t.replace('chat', 'chien') -> \" + t.replace(\"chat\", \"chien\"));"
  },
  {
    "id": "js-str-tolowercase",
    "category": "Les chaînes de caractères",
    "name": "ch.toLowerCase() - Minuscules",
    "summary": "Convertit tous les caractères de la chaîne ch en minuscules.",
    "description": "Met tout le texte en minuscules pour uniformiser une saisie.",
    "values": [
      "ch.toLowerCase()"
    ],
    "code": "let code = \"ABCDE\";\nlet min = code.toLowerCase(); // \"abcde\"",
    "testCode": "let c = \"TUNISIE STI\";\nalert(\"toLowerCase() donne : \" + c.toLowerCase());"
  },
  {
    "id": "js-str-touppercase",
    "category": "Les chaînes de caractères",
    "name": "ch.toUpperCase() - Majuscules",
    "summary": "Convertit tous les caractères de la chaîne ch en majuscules.",
    "description": "Très utilisé en validation pour forcer le nom de famille ou le code postal en MAJUSCULES.",
    "values": [
      "ch.toUpperCase()"
    ],
    "code": "let nom = \"gharbi\";\nlet maj = nom.toUpperCase(); // \"GHARBI\"",
    "testCode": "let pays = \"tunisie\";\nalert(\"toUpperCase() donne : \" + pays.toUpperCase());"
  },
  {
    "id": "js-str-trim",
    "category": "Les chaînes de caractères",
    "name": "ch.trim() - Suppression des espaces",
    "summary": "Supprime tous les espaces existants au début et à la fin de la chaîne ch.",
    "description": "Indispensable pour vérifier qu'un champ n'est pas rempli uniquement avec des espaces blancs vides ! if (champ.value.trim() == '') alert('Vide !');",
    "values": [
      "ch.trim()"
    ],
    "code": "let login = \"   ali   \";\nlet nettoye = login.trim(); // \"ali\"",
    "testCode": "let test = \"   Bac STI   \";\nalert(\"Avant trim() : '\" + test + \"' (longueur: \" + test.length + \")\nAprès trim() : '\" + test.trim() + \"' (longueur: \" + test.trim().length + \")\");"
  },
  {
    "id": "js-str-fromcharcode",
    "category": "Les chaînes de caractères",
    "name": "String.fromCharCode(num, ...)",
    "summary": "Retourne une chaîne formée par la conversion des codes ASCII passés en paramètres.",
    "description": "Transforme un code numérique ASCII en caractère (ex: 65 donne 'A', 97 donne 'a').",
    "values": [
      "String.fromCharCode(codeAscii)"
    ],
    "code": "let lettre = String.fromCharCode(65); // Donne \"A\"",
    "testCode": "alert(\"String.fromCharCode(65, 66, 67) donne : \" + String.fromCharCode(65, 66, 67));"
  },
  {
    "id": "js-date-creation",
    "category": "L'objet Date",
    "name": "new Date() et new Date(ch)",
    "summary": "new Date() retourne la date courante. new Date(ch) crée un objet Date à partir d'une chaîne.",
    "description": "Permet de manipuler le jour, le mois et l'année pour vérifier l'âge d'un candidat ou la date d'inscription.",
    "values": [
      "new Date()",
      "new Date('2026-06-15')"
    ],
    "code": "let aujourdhui = new Date();\nlet dateBac = new Date(\"2026-06-10\");",
    "testCode": "let d = new Date();\nalert(\"Date courante : \" + d.toString());"
  },
  {
    "id": "js-date-getdate",
    "category": "L'objet Date",
    "name": "d.getDate() - Jour du mois",
    "summary": "Retourne le jour du mois sous forme de nombre entier (entre 1 et 31).",
    "description": "Extrait le numéro du jour du mois de la date d.",
    "values": [
      "d.getDate() (1 à 31)"
    ],
    "code": "let d = new Date();\nlet jour = d.getDate(); // ex: 10",
    "testCode": "let d = new Date();\nalert(\"Jour du mois actuel (d.getDate()) : \" + d.getDate());"
  },
  {
    "id": "js-date-getmonth",
    "category": "L'objet Date",
    "name": "d.getMonth() - Numéro du mois (0 à 11)",
    "summary": "Retourne le numéro du mois (entre 0 pour Janvier et 11 pour Décembre).",
    "description": "PIÈGE CLASSIQUE DU BAC : En JavaScript, les mois commencent à 0 ! Janvier = 0, Février = 1, Mars = 2... Décembre = 11. Pour afficher le mois humain, on ajoute toujours + 1 : (d.getMonth() + 1).",
    "values": [
      "d.getMonth() (0 = Janvier, ..., 11 = Décembre)"
    ],
    "code": "let d = new Date();\nlet moisReel = d.getMonth() + 1; // Ajoute 1 pour avoir 1 à 12",
    "testCode": "let d = new Date();\nalert(\"Mois JS (d.getMonth()) : \" + d.getMonth() + \"\n(Soit le mois civil : \" + (d.getMonth() + 1) + \")\");"
  },
  {
    "id": "js-date-getfullyear",
    "category": "L'objet Date",
    "name": "d.getFullYear() - Année sur 4 chiffres",
    "summary": "Retourne la valeur de l'année sur 4 chiffres (ex: 2026).",
    "description": "Permet de calculer l'âge exact en soustrayant l'année de naissance de l'année actuelle.",
    "values": [
      "d.getFullYear() (ex: 2026)"
    ],
    "code": "let d = new Date();\nlet anneeCourante = d.getFullYear(); // 2026\nlet anneeNais = 2008;\nlet age = anneeCourante - anneeNais; // 18",
    "testCode": "let d = new Date();\nalert(\"Année actuelle (d.getFullYear()) : \" + d.getFullYear());"
  },
  {
    "id": "js-date-tostring",
    "category": "L'objet Date",
    "name": "d.toString() - Conversion en chaîne",
    "summary": "Retourne une chaîne de caractères complète représentant la date d.",
    "description": "Convertit l'objet Date en texte lisible avec le jour, le mois, l'année et l'heure.",
    "values": [
      "d.toString()"
    ],
    "code": "let d = new Date();\nlet texteDate = d.toString();",
    "testCode": "let d = new Date();\nalert(\"d.toString() : \" + d.toString());"
  },
  {
    "id": "js-array-basics",
    "category": "L'objet Array",
    "name": "Tableaux [] et propriété length",
    "summary": "Création avec littéraux [] et propriété length représentant le nombre d'éléments du tableau.",
    "description": "Pour créer un tableau en JavaScript au Bac STI, on utilise les crochets littéraux []. Les indices commencent à 0 (premier élément = tab[0]). La propriété tab.length donne le nombre total d'éléments.",
    "values": [
      "let tab = [elem1, elem2, ...];",
      "tab.length"
    ],
    "code": "// Création du tableau de matières\nlet matieres = [\"Informatique\", \"Technologie\", \"Mathématiques\"];\n\nalert(\"Nombre de matières : \" + matieres.length); // 3\nalert(\"Première matière : \" + matieres[0]); // \"Informatique\"",
    "testCode": "let t = [\"HTML5\", \"CSS3\", \"JavaScript\"];\nalert(\"Tableau : [\" + t.join(\", \") + \"]\nNombre d'éléments (t.length) : \" + t.length);"
  },
  {
    "id": "js-dom-attr-modif",
    "category": "Modification HTML & Styles",
    "name": "element.attribut = valeur",
    "summary": "Change la valeur de l'attribut d'un élément HTML (value, checked, disabled, readonly, src, muted).",
    "description": "Permet de modifier directement un attribut HTML. La liste au programme se limite à : value (pour lire/écrire le texte d'un champ), checked (cocher true/false), disabled (désactiver true/false), readonly (lecture seule), src (changer la source d'une image) et muted.",
    "values": [
      "element.value = 'texte'",
      "element.checked = true / false",
      "element.disabled = true / false",
      "element.readonly = true / false",
      "element.src = 'nouvelle_image.jpg'",
      "element.muted = true / false"
    ],
    "code": "// Coche une case\ndocument.getElementById(\"accepter\").checked = true;\n\n// Désactive un bouton\ndocument.getElementById(\"btnEnvoyer\").disabled = true;\n\n// Change une image\ndocument.getElementById(\"logo\").src = \"nouveau_logo.png\";",
    "testCode": "alert(\"Manipulation d'attributs :\nelement.value pour lire le texte\nelement.checked pour cocher\nelement.disabled pour désactiver\");"
  },
  {
    "id": "js-dom-style-modif",
    "category": "Modification HTML & Styles",
    "name": "element.style.propriété = valeur",
    "summary": "Change le style CSS d'un élément HTML (color, background, border, font, width, height).",
    "description": "Permet d'appliquer du style CSS en direct via JavaScript. La liste officielle de l'annexe se limite à : color, background, border, font, width, height.",
    "values": [
      "element.style.color = 'red'",
      "element.style.background = 'yellow'",
      "element.style.border = '2px solid red'",
      "element.style.width = '200px'",
      "element.style.height = '100px'"
    ],
    "code": "let boite = document.getElementById(\"boite\");\nboite.style.color = \"blue\";\nboite.style.background = \"#facc15\";\nboite.style.border = \"2px dashed red\";",
    "testCode": "let modal = document.getElementById(\"detailsModal\");\nalert(\"element.style.propriété permet de changer color, background, border, width, height en direct !\");"
  },
  {
    "id": "js-dom-method-play-pause",
    "category": "Modification HTML & Styles",
    "name": "element.play() et element.pause()",
    "summary": "Effectue une action sur un élément HTML multimédia audio ou vidéo.",
    "description": "Se limite à la manipulation des méthodes de lecture multimédia : play() pour démarrer la lecture et pause() pour l'arrêter.",
    "values": [
      "element.play() (lance la lecture)",
      "element.pause() (met en pause)"
    ],
    "code": "let video = document.getElementById(\"maVideo\");\nvideo.play(); // Lance la vidéo\nvideo.pause(); // Met la vidéo en pause",
    "testCode": "alert(\"element.play() et element.pause() contrôlent les balises <audio> et <video> !\");"
  },
  {
    "id": "js-dom-selectedindex",
    "category": "Modification HTML & Styles",
    "name": "selectedIndex - Indice du menu déroulant <select>",
    "summary": "Pour une liste déroulante (<select>), utilise la propriété selectedIndex pour récupérer l'indice de l'option sélectionnée.",
    "description": "NOTE SPÉCIALE BAC STI : Sur une balise <select id=\"menu\">, selectedIndex renvoie le numéro de l'option choisie (0 pour la première option, 1 pour la deuxième, etc.). Si aucune option n'est choisie (ou l'option par défaut), on vérifie souvent : if (menu.selectedIndex == 0) alert('Veuillez faire un choix !');",
    "values": [
      "select.selectedIndex (0, 1, 2... ou -1 si rien)"
    ],
    "code": "let menu = document.getElementById(\"filiere\");\n\nif (menu.selectedIndex == 0) {\n  alert(\"Erreur : Veuillez sélectionner une filière !\");\n  return false;\n} else {\n  alert(\"Option choisie n° : \" + menu.selectedIndex);\n}",
    "testCode": "alert(\"select.selectedIndex : renvoie 0 pour la 1ère option, 1 pour la 2ème, etc. Indispensable pour valider les <select> !\");"
  }
]
};
