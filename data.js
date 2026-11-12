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
      "summary": "Définit la relation entre le document actuel et une ressource externe (feuille de style CSS).",
      "howToUse": "Balise orpheline (auto-fermante) placée dans la section <head>. L'attribut 'href' indique le chemin vers le fichier CSS (ex: style.css), 'rel=\"stylesheet\"' indique qu'il s'agit d'une feuille de style, et 'type=\"text/css\"' indique son type MIME.",
      "attributes": [
        "href (adresse du fichier CSS)",
        "rel (stylesheet)",
        "type (text/css)"
      ],
      "code": "<!-- Liaison officielle avec la feuille de style CSS externe (Bac STI) -->\n<link rel=\"stylesheet\" href=\"style.css\" type=\"text/css\">",
      "previewHtml": "<div style=\"background:#eff6ff; border-left:4px solid #3b82f6; padding:12px; border-radius:4px; font-size:13px; color:#1e40af;\">\n        ✓ <strong>Feuille de style CSS connectée :</strong> Le fichier <code>style.css</code> est relié au document HTML !\n      </div>"
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
      "summary": "Marge INTÉRIEURE : espace de respiration interne entre le contenu (texte) et la bordure.",
      "howToUse": "Crée un espace d'aération interne entre le contenu texte (#contenu) et la bordure extérieure de la boîte (#boite). Ne repousse pas les voisins extérieurs.",
      "code": "/* Marge intérieure de 15px autour du texte de #boite */\n#boite {\n  padding: 15px;\n}",
      "hoverNote": "💡 Note Bac : Pour augmenter la marge intérieure au survol : #boite:hover { padding: 25px; }.",
      "videoSimType": "boxmodel-sim",
      "description": "La propriété padding définit la marge INTÉRIEURE située DEDANS la boîte, entre le contenu (texte, bouton ou image) et la bordure (border). Elle apporte du confort de lecture et de l'aération en évitant que les lettres ne touchent les bords du cadre. Contrairement à margin (qui repousse les voisins dehors), padding gonfle la boîte de l'intérieur.",
      "values": [
        "1 valeur (ex: 15px pour les 4 côtés)",
        "2 valeurs (ex: 10px 20px : Haut/Bas puis Gauche/Droite)",
        "4 valeurs (Haut Droite Bas Gauche dans le sens des aiguilles d'une montre)"
      ]
    },
    {
      "id": "css-margin",
      "category": "Propriétés des boîtes",
      "property": "margin",
      "name": "margin - Marge extérieure",
      "summary": "Marge EXTÉRIEURE : espace situé en dehors de la boîte qui repousse les éléments voisins.",
      "howToUse": "Repousse les éléments voisins en dehors de la boîte. 'margin: 20px auto;' permet d'espacer de 20px en haut/bas et de centrer horizontalement l'élément dans son conteneur.",
      "code": "/* Marge extérieure de 20px et centrage horizontal */\n#boite {\n  margin: 20px auto;\n}",
      "hoverNote": "💡 Note Bac : Au survol de la souris pour créer un décalage externe : #boite:hover { margin-top: 10px; }.",
      "videoSimType": "boxmodel-sim",
      "description": "La propriété margin définit la marge EXTÉRIEURE située HORS du cadre de l'élément (#boite). Contrairement au padding (qui agit à l'intérieur), margin repousse physiquement les autres éléments frères ou les bords du conteneur parent. L'écriture 'margin: auto;' ou 'margin: 0 auto;' est la technique officielle au Baccalauréat STI pour centrer parfaitement un bloc (<div id=\"boite\">, <table id=\"tab\">) sur la page.",
      "values": [
        "valeur en px (ex: 20px)",
        "0 auto ou auto (centrage horizontal automatique)",
        "4 valeurs (Haut Droite Bas Gauche dans le sens des aiguilles d'une montre)"
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
      "summary": "Spécifie les étapes clés de l'animation en pourcentages (0%, 50%, 100%) ou avec from / to.",
      "howToUse": "Définit le scénario de l'animation avec son nom et ses étapes en pourcentages %.",
      "code": "/* Déclaration des étapes clés avec pourcentages (%) */\n@keyframes animCouleur {\n  0% {\n    background-color: #ef4444;\n    transform: scale(1);\n  }\n  50% {\n    background-color: #f59e0b;\n    transform: scale(1.2) rotate(6deg);\n  }\n  100% {\n    background-color: #10b981;\n    transform: scale(1);\n  }\n}\n\n#boite {\n  animation: animCouleur 3s infinite alternate;\n}",
      "hoverNote": "💡 Note Bac : Une animation déclarée avec @keyframes peut ensuite être déclenchée sur #boite ou #boite:hover.",
      "videoSimType": "animation-sim",
      "description": "La règle @keyframes définit les étapes intermédiaires d'une animation en utilisant des pourcentages (%) : 0% (début), 50% (milieu), 100% (fin), ou from / to. À chaque pourcentage, vous définissez les styles CSS (couleurs, positions, rotations, dimensions) que le navigateur anime de manière fluide et continue.",
      "values": [
        "0% (début de l'animation)",
        "50% (étape intermédiaire à mi-parcours)",
        "100% (fin de l'animation)",
        "25%, 75% (étapes clés supplémentaires)",
        "from (équivalent à 0%)",
        "to (équivalent à 100%)"
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
    "id": "js-op-et",
    "section": "Opérateurs logiques",
    "category": "Opérateurs logiques",
    "name": "&& (ET logique)",
    "tag": "&&",
    "syntax": "condition1 && condition2",
    "summary": "ET",
    "description": "Opérateur logique ET. Renvoie true si et seulement si toutes les conditions liées sont vraies en même temps. Très utilisé dans les contrôles de formulaire pour combiner plusieurs validations.",
    "howToUse": "Dans une structure conditionnelle if (...), relier deux expressions avec &&. Si la première est fausse, JavaScript s'arrête (court-circuit).",
    "values": [
      "condition1 && condition2",
      "true && true -> true",
      "true && false -> false"
    ],
    "code": "// Validation d'une note de Bac entre 0 et 20\nfunction validerNote() {\n  var note = Number(document.getElementById(\"note\").value);\n  if (note >= 0 && note <= 20) {\n    alert(\"Note valide (\" + note + \"/20)\");\n    return true;\n  } else {\n    alert(\"Erreur : la note doit être comprise entre 0 et 20 !\");\n    return false;\n  }\n}",
    "runnableCode": "var note = 14;\nvar estValide = (note >= 0 && note <= 20);\nconsole.log(\"Note = \" + note + \" -> Est valide (note >= 0 && note <= 20) : \" + estValide);"
  },
  {
    "id": "js-op-ou",
    "section": "Opérateurs logiques",
    "category": "Opérateurs logiques",
    "name": "|| (OU logique)",
    "tag": "||",
    "syntax": "condition1 || condition2",
    "summary": "OU",
    "description": "Opérateur logique OU. Renvoie true si au moins l'une des conditions est vraie. Renvoie false uniquement si toutes les conditions sont fausses.",
    "howToUse": "Utiliser || pour autoriser plusieurs choix alternatifs ou détecter si un champ parmi plusieurs est manquant.",
    "values": [
      "condition1 || condition2",
      "false || true -> true",
      "false || false -> false"
    ],
    "code": "// Vérifier si au moins un des champs obligatoires est vide\nfunction verifierChamps() {\n  var nom = document.getElementById(\"nom\").value;\n  var email = document.getElementById(\"email\").value;\n  if (nom == \"\" || email == \"\") {\n    alert(\"Attention : vous devez remplir le nom OU l'email !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "var ville = \"Sousse\";\nvar estTunisie = (ville == \"Tunis\" || ville == \"Sousse\" || ville == \"Sfax\");\nconsole.log(\"Ville = \" + ville + \" -> Ville en Tunisie : \" + estTunisie);"
  },
  {
    "id": "js-op-non",
    "section": "Opérateurs logiques",
    "category": "Opérateurs logiques",
    "name": "! (NON logique)",
    "tag": "!",
    "syntax": "!condition",
    "summary": "NON",
    "description": "Opérateur logique NON (négation). Inverse la valeur booléenne : transforme true en false, et transforme false en true.",
    "howToUse": "Placer le point d'exclamation devant une variable booléenne ou une condition pour tester son contraire.",
    "values": [
      "!true -> false",
      "!false -> true",
      "!isNaN(val) -> teste si c'est un nombre"
    ],
    "code": "// Vérifier si une case à cocher n'est PAS cochée\nfunction validerReglement() {\n  var accepte = document.getElementById(\"chk_accord\").checked;\n  if (!accepte) {\n    alert(\"Vous devez accepter le règlement avant d'envoyer !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "var connecte = false;\nconsole.log(\"Connecté : \" + connecte);\nconsole.log(\"!connecte (Non connecté) : \" + (!connecte));"
  },
  {
    "id": "js-comp-egal",
    "section": "Opérateurs de comparaison",
    "category": "Opérateurs de comparaison",
    "name": "== (Egal)",
    "tag": "==",
    "syntax": "a == b",
    "summary": "Egal",
    "description": "Teste l'égalité de valeur entre deux expressions. Renvoie true si les deux valeurs sont équivalentes après conversion implicite de type.",
    "howToUse": "Attention à ne pas confondre avec le simple signe d'affectation =. Dans un test if, utiliser toujours ==.",
    "values": [
      "a == b",
      "10 == '10' -> true",
      "'bac' == 'bac' -> true"
    ],
    "code": "// Vérifier la confirmation d'un mot de passe\nfunction verifierMdp() {\n  var p1 = document.getElementById(\"pass1\").value;\n  var p2 = document.getElementById(\"pass2\").value;\n  if (p1 == p2) {\n    alert(\"Mots de passe identiques !\");\n    return true;\n  } else {\n    alert(\"Erreur : les mots de passe ne correspondent pas !\");\n    return false;\n  }\n}",
    "runnableCode": "var code = \"BAC2026\";\nconsole.log(\"Test (code == 'BAC2026') : \" + (code == \"BAC2026\"));"
  },
  {
    "id": "js-comp-diff",
    "section": "Opérateurs de comparaison",
    "category": "Opérateurs de comparaison",
    "name": "!= (Différent)",
    "tag": "!=",
    "syntax": "a != b",
    "summary": "Différent",
    "description": "Teste la non-égalité entre deux expressions. Renvoie true si les valeurs sont différentes.",
    "howToUse": "Très utile pour s'assurer qu'un champ texte n'est pas vide (ch != '') ou qu'une sélection n'est pas celle par défaut.",
    "values": [
      "a != b",
      "5 != 10 -> true",
      "ch != '' -> true si non vide"
    ],
    "code": "// Contrôler qu'un champ texte n'est pas vide\nfunction verifierChamp() {\n  var nom = document.getElementById(\"nom\").value;\n  if (nom != \"\") {\n    alert(\"Nom renseigné : \" + nom);\n    return true;\n  } else {\n    alert(\"Le champ nom ne doit pas être vide !\");\n    return false;\n  }\n}",
    "runnableCode": "var prenom = \"Nour\";\nconsole.log(\"Prénom : \" + prenom + \" -> (prenom != '') : \" + (prenom != \"\"));"
  },
  {
    "id": "js-comp-sup",
    "section": "Opérateurs de comparaison",
    "category": "Opérateurs de comparaison",
    "name": "> (Supérieur à)",
    "tag": ">",
    "syntax": "a > b",
    "summary": "Supérieur à",
    "description": "Renvoie true si la valeur de gauche est strictement plus grande que la valeur de droite.",
    "howToUse": "Utiliser > pour vérifier des seuils stricts (ex: montant > 0, moyenne > 10).",
    "values": [
      "a > b",
      "15 > 10 -> true",
      "10 > 10 -> false"
    ],
    "code": "// Vérifier si un prix est strictement positif\nfunction verifierPrix() {\n  var prix = Number(document.getElementById(\"prix\").value);\n  if (prix > 0) {\n    alert(\"Prix valide !\");\n  } else {\n    alert(\"Le prix doit être strictement supérieur à 0 !\");\n  }\n}",
    "runnableCode": "var note = 13.5;\nconsole.log(\"Note = 13.5 -> (note > 10) : \" + (note > 10));"
  },
  {
    "id": "js-comp-supegal",
    "section": "Opérateurs de comparaison",
    "category": "Opérateurs de comparaison",
    "name": ">= (Supérieur ou égal à)",
    "tag": ">=",
    "syntax": "a >= b",
    "summary": "Supérieur ou égal à",
    "description": "Renvoie true si la valeur de gauche est plus grande ou égale à celle de droite.",
    "howToUse": "Indispensable pour les conditions de majorité ou d'admission (ex: age >= 18, moyenne >= 10).",
    "values": [
      "a >= b",
      "18 >= 18 -> true",
      "20 >= 10 -> true"
    ],
    "code": "// Vérification de la majorité\nfunction verifierAge() {\n  var age = Number(document.getElementById(\"age\").value);\n  if (age >= 18) {\n    alert(\"Accès autorisé (Majeur)\");\n  } else {\n    alert(\"Accès refusé : vous devez avoir au moins 18 ans !\");\n  }\n}",
    "runnableCode": "var age = 18;\nconsole.log(\"Age = 18 -> (age >= 18) : \" + (age >= 18));"
  },
  {
    "id": "js-comp-inf",
    "section": "Opérateurs de comparaison",
    "category": "Opérateurs de comparaison",
    "name": "< (Inférieur)",
    "tag": "<",
    "syntax": "a < b",
    "summary": "Inférieur",
    "description": "Renvoie true si la valeur de gauche est strictement inférieure à la valeur de droite.",
    "howToUse": "Utiliser pour tester un plafond strict ou les indices dans une boucle (ex: for (var i=0; i < tab.length; i++)).",
    "values": [
      "a < b",
      "5 < 10 -> true",
      "10 < 10 -> false"
    ],
    "code": "// Vérifier la longueur minimale\nfunction verifierTaille() {\n  var texte = document.getElementById(\"comm\").value;\n  if (texte.length < 10) {\n    alert(\"Votre commentaire est trop court (min 10 caractères) !\");\n  }\n}",
    "runnableCode": "var temperature = 5;\nconsole.log(\"Température = 5 -> (temperature < 10) : \" + (temperature < 10));"
  },
  {
    "id": "js-comp-infegal",
    "section": "Opérateurs de comparaison",
    "category": "Opérateurs de comparaison",
    "name": "<= (Inférieur ou égal à)",
    "tag": "<=",
    "syntax": "a <= b",
    "summary": "Inférieur ou égal à",
    "description": "Renvoie true si la valeur de gauche est plus petite ou égale à celle de droite.",
    "howToUse": "Utiliser pour valider un nombre qui ne doit pas dépasser un maximum (ex: note <= 20).",
    "values": [
      "a <= b",
      "20 <= 20 -> true",
      "15 <= 20 -> true"
    ],
    "code": "// Borne supérieure d'une note\nfunction controlerPlafond() {\n  var note = Number(document.getElementById(\"note\").value);\n  if (note <= 20) {\n    alert(\"Note dans la limite autorisée.\");\n  } else {\n    alert(\"La note ne peut pas dépasser 20 !\");\n  }\n}",
    "runnableCode": "var note = 20;\nconsole.log(\"Note = 20 -> (note <= 20) : \" + (note <= 20));"
  },
  {
    "id": "js-arithm-add",
    "section": "Opérateurs arithmétiques",
    "category": "Opérateurs arithmétiques",
    "name": "+ (Addition)",
    "tag": "+",
    "syntax": "a + b",
    "summary": "Addition",
    "description": "Additionne deux valeurs numériques. Attention : si l'une des valeurs est une chaîne, le symbole '+' effectue une concaténation au lieu d'une addition !",
    "howToUse": "Toujours convertir les valeurs issues d'un formulaire avec Number() ou parseInt() avant de les additionner.",
    "values": [
      "a + b",
      "10 + 5 -> 15",
      "Number('10') + Number('5') -> 15"
    ],
    "code": "// Calculer la somme de deux nombres saisis\nfunction calculerSomme() {\n  var n1 = Number(document.getElementById(\"txt1\").value);\n  var n2 = Number(document.getElementById(\"txt2\").value);\n  var total = n1 + n2;\n  alert(\"La somme est : \" + total);\n}",
    "runnableCode": "var a = 12.5;\nvar b = 7.5;\nconsole.log(\"a = \" + a + \", b = \" + b + \" -> Somme (a + b) = \" + (a + b));"
  },
  {
    "id": "js-arithm-sous",
    "section": "Opérateurs arithmétiques",
    "category": "Opérateurs arithmétiques",
    "name": "- (Soustraction)",
    "tag": "-",
    "syntax": "a - b",
    "summary": "Soustraction",
    "description": "Soustrait le second nombre du premier.",
    "howToUse": "Effectue une soustraction arithmétique. Contrairement au +, le - convertit automatiquement les chaînes en nombres si possible.",
    "values": [
      "a - b",
      "20 - 8 -> 12"
    ],
    "code": "// Calculer le prix net après remise\nfunction calculerRemise() {\n  var brut = Number(document.getElementById(\"prixBrut\").value);\n  var remise = Number(document.getElementById(\"remise\").value);\n  var net = brut - remise;\n  document.getElementById(\"resNet\").innerHTML = \"Net à payer : \" + net + \" DT\";\n}",
    "runnableCode": "var brut = 100;\nvar remise = 15;\nconsole.log(\"Brut : \" + brut + \", Remise : \" + remise + \" -> Net : \" + (brut - remise));"
  },
  {
    "id": "js-arithm-mult",
    "section": "Opérateurs arithmétiques",
    "category": "Opérateurs arithmétiques",
    "name": "* (Multiplication)",
    "tag": "*",
    "syntax": "a * b",
    "summary": "Multiplication",
    "description": "Multiplie deux nombres et renvoie le produit.",
    "howToUse": "Utiliser pour les calculs de totaux (quantité * prix) ou de coefficients de matières au Bac.",
    "values": [
      "a * b",
      "5 * 4 -> 20",
      "prix * quantite"
    ],
    "code": "// Calcul du total d'une commande\nfunction calculerTotal() {\n  var qte = parseInt(document.getElementById(\"qte\").value);\n  var pu = parseFloat(document.getElementById(\"pu\").value);\n  var total = qte * pu;\n  alert(\"Total commande : \" + total + \" DT\");\n}",
    "runnableCode": "var qte = 4;\nvar pu = 12.5;\nconsole.log(qte + \" x \" + pu + \" DT = \" + (qte * pu) + \" DT\");"
  },
  {
    "id": "js-arithm-div",
    "section": "Opérateurs arithmétiques",
    "category": "Opérateurs arithmétiques",
    "name": "/ (Division)",
    "tag": "/",
    "syntax": "a / b",
    "summary": "Division",
    "description": "Divise le dividende par le diviseur et renvoie le quotient exact.",
    "howToUse": "Penser à vérifier que le diviseur b est différent de 0 pour éviter une valeur spéciale Infinity.",
    "values": [
      "a / b",
      "15 / 2 -> 7.5",
      "somme / nb"
    ],
    "code": "// Calcul de la moyenne arithmétique\nfunction calculerMoyenne() {\n  var noteTech = Number(document.getElementById(\"tech\").value);\n  var noteMath = Number(document.getElementById(\"math\").value);\n  var moyenne = (noteTech + noteMath) / 2;\n  alert(\"Moyenne : \" + moyenne + \"/20\");\n}",
    "runnableCode": "var total = 45;\nvar nb = 3;\nconsole.log(\"Moyenne (45 / 3) = \" + (total / nb));"
  },
  {
    "id": "js-arithm-modulo",
    "section": "Opérateurs arithmétiques",
    "category": "Opérateurs arithmétiques",
    "name": "% (Reste de la division euclidienne)",
    "tag": "%",
    "syntax": "a % b",
    "summary": "Reste de la division euclidienne",
    "description": "Opérateur modulo. Calcule et renvoie le reste entier de la division euclidienne de a par b. Très fréquent au Bac pour déterminer la parité ou tester des diviseurs.",
    "howToUse": "Pour savoir si n est pair : (n % 2 == 0). Pour tester si n est divisible par 5 : (n % 5 == 0).",
    "values": [
      "a % b",
      "10 % 3 -> 1",
      "8 % 2 -> 0 (pair)",
      "7 % 2 -> 1 (impair)"
    ],
    "code": "// Tester si un entier est pair ou impair\nfunction testerParite() {\n  var n = parseInt(document.getElementById(\"nombre\").value);\n  if (n % 2 == 0) {\n    alert(n + \" est un nombre PAIR.\");\n  } else {\n    alert(n + \" est un nombre IMPAIR.\");\n  }\n}",
    "runnableCode": "var n1 = 17, n2 = 24;\nconsole.log(n1 + \" % 2 = \" + (n1 % 2) + \" (Impair)\");\nconsole.log(n2 + \" % 2 = \" + (n2 % 2) + \" (Pair)\");"
  },
  {
    "id": "js-out-alert",
    "section": "Méthodes pour afficher une sortie*",
    "category": "Méthodes pour afficher une sortie*",
    "name": "alert()",
    "tag": "alert()",
    "syntax": "alert(message)",
    "summary": "Affiche un message dans une boîte de dialogue.",
    "description": "Affiche un message textuel à l'utilisateur dans une boîte de dialogue modale du navigateur dotée d'un bouton OK. L'exécution du script est mise en pause jusqu'à ce que l'utilisateur clique sur OK.",
    "howToUse": "C'est la méthode reine demandée au Baccalauréat STI pour signaler à l'internaute une erreur de saisie ou un succès de validation.",
    "values": [
      "alert('Message')",
      "alert('Erreur : champ obligatoire !')"
    ],
    "code": "// Alerte d'information Bac STI\nfunction verifierChamp() {\n  var nom = document.getElementById(\"nom\").value;\n  if (nom == \"\") {\n    alert(\"Erreur : veuillez remplir votre nom !\");\n    return false;\n  }\n  alert(\"Bienvenue \" + nom + \" ! Formulaire validé.\");\n  return true;\n}",
    "runnableCode": "console.log(\"Appel alert('Bonjour candidat Bac STI !')\");\nalert(\"Bonjour candidat Bac STI !\");*/"
  },
  {
    "id": "js-out-docwrite",
    "section": "Méthodes pour afficher une sortie*",
    "category": "Méthodes pour afficher une sortie*",
    "name": "Document.write()",
    "tag": "document.write()",
    "syntax": "document.write(chaineHTML)",
    "summary": "Affiche directement dans le document HTML.",
    "description": "Écrit directement une chaîne de caractères ou du code HTML dans le document au moment du chargement de la page.",
    "howToUse": "Appelée directement dans la balise <script> du fichier HTML pour insérer du contenu généré dynamiquement.",
    "values": [
      "document.write('Texte')",
      "document.write('<h1>Titre</h1>')"
    ],
    "code": "<!-- Exemple d'insertion directe dans la page -->\n<script>\n  var annee = new Date().getFullYear();\n  document.write(\"<p>Copyright &copy; \" + annee + \" - Section STI Lycée Technique</p>\");\n</script>",
    "runnableCode": "console.log(\"document.write() écrit directement dans le corps de la page HTML.\");"
  },
  {
    "id": "js-out-innerhtml",
    "section": "Méthodes pour afficher une sortie*",
    "category": "Méthodes pour afficher une sortie*",
    "name": "innerHTML (Note officielle)",
    "tag": "element.innerHTML",
    "syntax": "element.innerHTML = 'contenu'",
    "summary": "*Pour afficher/modifier un contenu dynamique, on peut utiliser la propriété innerHTML d'un élément HTML.",
    "description": "Propriété officielle mise en avant par la note de bas de tableau de l'annexe. Elle permet de lire ou d'injecter du texte formaté ou de nouvelles balises HTML à l'intérieur d'un élément repéré par son id.",
    "howToUse": "document.getElementById('idBloc').innerHTML = '<b>Texte formaté</b>';",
    "values": [
      "element.innerHTML = 'texte'",
      "element.innerHTML = '<b>Gras</b>'"
    ],
    "code": "// Afficher un message de validation stylé sans recharger la page\nfunction afficherStatut() {\n  var zone = document.getElementById(\"zoneMessage\");\n  zone.innerHTML = \"<span style='color: green; font-weight: bold;'>✔ Données enregistrées avec succès !</span>\";\n}",
    "runnableCode": "// Exemple conceptuel\nvar contenu = \"<span style='color:green;'>Succès !</span>\";\nconsole.log(\"Contenu injecté via innerHTML : \" + contenu);"
  },
  {
    "id": "js-in-prompt",
    "section": "Méthode pour saisir une entrée",
    "category": "Méthode pour saisir une entrée",
    "name": "prompt()",
    "tag": "prompt()",
    "syntax": "prompt(message [, valeurParDefaut])",
    "summary": "Affiche une boîte de dialogue avec une zone de saisie.",
    "description": "Ouvre une fenêtre modale contenant un message, une zone de texte permettant à l'utilisateur de saisir une valeur, ainsi que les boutons OK et Annuler. Renvoie la chaîne saisie sous forme de texte, ou null si l'utilisateur clique sur Annuler.",
    "howToUse": "var rep = prompt('Question ?', 'Valeur initiale'); Penser à convertir la réponse avec Number() si vous attendez un chiffre.",
    "values": [
      "prompt('Message')",
      "prompt('Message', 'Par défaut')"
    ],
    "code": "// Demander le nom d'un élève\nfunction demanderNom() {\n  var nom = prompt(\"Veuillez saisir votre prénom :\", \"Nour\");\n  if (nom != null && nom != \"\") {\n    alert(\"Bonjour \" + nom + \" !\");\n  } else {\n    alert(\"Saisie annulée.\");\n  }\n}",
    "runnableCode": "// Simulation console\nconsole.log(\"prompt() ouvre une boîte de saisie pour l'utilisateur.\");"
  },
  {
    "id": "js-fn-isnan",
    "section": "Fonctions/Méthodes JS",
    "category": "Fonctions/Méthodes JS",
    "name": "isNaN(ch)",
    "tag": "isNaN(ch)",
    "syntax": "isNaN(ch)",
    "summary": "Retourne true si l'argument ch n'est pas convertible en un nombre, sinon retourne false.",
    "description": "Indispensable pour contrôler la validité des champs numériques d'un formulaire au Bac STI (numéro de téléphone, code postal, âge, prix). Si l'utilisateur tape des lettres dans un champ réservé aux nombres, isNaN(...) renvoie true.",
    "howToUse": "if (isNaN(document.getElementById('tel').value)) { alert('Numéro invalide !'); return false; }",
    "values": [
      "isNaN('123') -> false",
      "isNaN('abc') -> true",
      "isNaN('') -> false (vide compte comme 0)"
    ],
    "code": "// Validation d'un code postal tunisien (4 chiffres)\nfunction validerCodePostal() {\n  var cp = document.getElementById(\"cp\").value;\n  if (isNaN(cp) || cp.length != 4) {\n    alert(\"Le code postal doit être un NOMBRE composé d'exactement 4 chiffres !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "console.log(\"isNaN('2026') : \" + isNaN(\"2026\") + \" (C'est un nombre valide)\");\nconsole.log(\"isNaN('BAC2026') : \" + isNaN(\"BAC2026\") + \" (Ce n'est PAS un nombre)\");"
  },
  {
    "id": "js-fn-number",
    "section": "Fonctions/Méthodes JS",
    "category": "Fonctions/Méthodes JS",
    "name": "Number(ch)",
    "tag": "Number(ch)",
    "syntax": "Number(ch)",
    "summary": "Convertit une chaîne ch en un nombre*. (*Si la conversion n'est pas possible, la fonction retourne NaN.)",
    "description": "Convertit une chaîne de caractères représentant un nombre (entier ou flottant) en valeur numérique réelle. Si la chaîne ne peut pas être convertie, retourne la valeur spéciale NaN (Not a Number).",
    "howToUse": "var note = Number(document.getElementById('note').value);",
    "values": [
      "Number('15.5') -> 15.5",
      "Number('42') -> 42",
      "Number('xyz') -> NaN"
    ],
    "code": "// Calcul de la TVA avec Number()\nfunction calculerTVA() {\n  var prixHT = Number(document.getElementById(\"ht\").value);\n  if (isNaN(prixHT) || prixHT <= 0) {\n    alert(\"Prix HT invalide !\");\n    return;\n  }\n  var tva = prixHT * 0.19;\n  var ttc = prixHT + tva;\n  alert(\"Montant TTC : \" + ttc.toFixed(3) + \" DT\");\n}",
    "runnableCode": "var s1 = \"12.75\";\nvar n1 = Number(s1);\nconsole.log(\"Number('\" + s1 + \"') = \" + n1 + \" (Type: \" + typeof n1 + \")\");\nconsole.log(\"Number('ABC') = \" + Number(\"ABC\") + \" (Non convertible)\");"
  },
  {
    "id": "js-fn-parsefloat",
    "section": "Fonctions/Méthodes JS",
    "category": "Fonctions/Méthodes JS",
    "name": "parseFloat(ch)",
    "tag": "parseFloat(ch)",
    "syntax": "parseFloat(ch)",
    "summary": "Convertit une chaîne ch en un réel.",
    "description": "Analyse une chaîne textuelle et extrait un nombre décimal à virgule flottante. Lit les caractères jusqu'au premier caractère non numérique.",
    "howToUse": "var reel = parseFloat('14.25'); Utiliser le point '.' comme séparateur décimal.",
    "values": [
      "parseFloat('14.5') -> 14.5",
      "parseFloat('10.25 DT') -> 10.25",
      "parseFloat('abc') -> NaN"
    ],
    "code": "// Calcul de moyenne avec parseFloat\nfunction calculerMoyenneReelle() {\n  var n1 = parseFloat(document.getElementById(\"note1\").value);\n  var n2 = parseFloat(document.getElementById(\"note2\").value);\n  var moy = (n1 + n2) / 2;\n  document.getElementById(\"res\").innerHTML = \"Moyenne : \" + moy;\n}",
    "runnableCode": "var str = \"17.85 sur 20\";\nvar val = parseFloat(str);\nconsole.log(\"parseFloat('\" + str + \"') = \" + val);"
  },
  {
    "id": "js-fn-parseint",
    "section": "Fonctions/Méthodes JS",
    "category": "Fonctions/Méthodes JS",
    "name": "parseInt(ch [,b])",
    "tag": "parseInt(ch [,b])",
    "syntax": "parseInt(ch [,b])",
    "summary": "Convertit une chaîne ch en un entier exprimé dans la base b.",
    "description": "Analyse une chaîne de caractères et retourne un nombre entier selon la base numérique spécifiée par b (2 pour binaire, 8 pour octal, 10 pour décimal, 16 pour hexadécimal).",
    "howToUse": "parseInt('1010', 2) convertit du binaire en décimal. parseInt('FF', 16) convertit de l'hexadécimal. Si b est omis, la base 10 est utilisée.",
    "values": [
      "parseInt('42', 10) -> 42",
      "parseInt('1010', 2) -> 10",
      "parseInt('1F', 16) -> 31"
    ],
    "code": "// Conversion binaire vers décimal (programme STI)\nfunction convertirBinaire() {\n  var binaire = document.getElementById(\"txtBinaire\").value;\n  var decimal = parseInt(binaire, 2);\n  if (isNaN(decimal)) {\n    alert(\"Format binaire incorrect !\");\n  } else {\n    alert(\"En décimal : \" + decimal);\n  }\n}",
    "runnableCode": "console.log(\"parseInt('1101', 2) = \" + parseInt(\"1101\", 2) + \" (Binaire -> Décimal)\");\nconsole.log(\"parseInt('2A', 16) = \" + parseInt(\"2A\", 16) + \" (Hexa -> Décimal)\");\nconsole.log(\"parseInt('25', 10) = \" + parseInt(\"25\", 10) + \" (Décimal)\");"
  },
  {
    "id": "js-fn-string",
    "section": "Fonctions/Méthodes JS",
    "category": "Fonctions/Méthodes JS",
    "name": "String(a)",
    "tag": "String(a)",
    "syntax": "String(a)",
    "summary": "Convertit la valeur a en une chaîne.",
    "description": "Convertit n'importe quel type de données JavaScript (nombre, booléen, date, etc.) en sa représentation textuelle sous forme d'objet String.",
    "howToUse": "var s = String(2026); Permet ensuite d'utiliser toutes les méthodes de chaînes comme .length, .indexOf()...",
    "values": [
      "String(123) -> '123'",
      "String(true) -> 'true'",
      "String(new Date()) -> texte"
    ],
    "code": "// Tester le nombre de chiffres d'un entier\nfunction compterChiffres() {\n  var nombre = 15894;\n  var str = String(nombre);\n  alert(\"Le nombre \" + nombre + \" possède \" + str.length + \" chiffres.\");\n}",
    "runnableCode": "var num = 2026;\nvar str = String(num);\nconsole.log(\"String(\" + num + \") = '\" + str + \"' -> Longueur : \" + str.length + \" caractères.\");"
  },
  {
    "id": "js-dom-getelementbyid",
    "section": "Méthodes pour sélectionner des éléments HTML",
    "category": "Sélection d'éléments HTML",
    "name": "document.getElementById()",
    "tag": "document.getElementById()",
    "syntax": "document.getElementById(id)",
    "summary": "permet de sélectionner un élément unique en fonction de son identifiant.",
    "description": "C'est la méthode de sélection HTML centrale du programme officiel STI. Elle recherche dans le document la balise portant l'attribut id='nomId' et en retourne la référence directe.",
    "howToUse": "var elt = document.getElementById('monId'); elt.value pour les champs, elt.innerHTML pour les blocs.",
    "values": [
      "document.getElementById('id')",
      "document.getElementById('nom').value",
      "document.getElementById('titre').style"
    ],
    "code": "// Récupérer la valeur d'un champ avec son ID\nfunction validerIdentifiant() {\n  var champ = document.getElementById(\"login\");\n  if (champ.value == \"\") {\n    alert(\"Veuillez saisir votre login !\");\n    champ.focus();\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "console.log(\"document.getElementById('champ').value récupère la saisie.\");"
  },
  {
    "id": "js-dom-getelementsbyname",
    "section": "Méthodes pour sélectionner des éléments HTML",
    "category": "Sélection d'éléments HTML",
    "name": "document.getElementsByName()",
    "tag": "document.getElementsByName()",
    "syntax": "document.getElementsByName(nom)",
    "summary": "permet de sélectionner tous les éléments ayant le même nom.",
    "description": "Retourne une liste (NodeList) de tous les éléments HTML du document qui partagent la même valeur pour leur attribut name='monNom'. Indispensable au Bac pour vérifier quel bouton radio a été coché par l'internaute !",
    "howToUse": "var radios = document.getElementsByName('genre'); puis boucler pour tester radios[i].checked.",
    "values": [
      "document.getElementsByName('name')",
      "radios[i].checked -> true si sélectionné"
    ],
    "code": "// Vérifier si un bouton radio est coché dans un groupe\nfunction verifierRadio() {\n  var options = document.getElementsByName(\"civilite\");\n  var coche = false;\n  for (var i = 0; i < options.length; i++) {\n    if (options[i].checked) {\n      coche = true;\n      break;\n    }\n  }\n  if (!coche) {\n    alert(\"Veuillez choisir une civilité (M. ou Mme) !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "console.log(\"document.getElementsByName('groupe') retourne une liste de tous les éléments du groupe radio.\");"
  },
  {
    "id": "js-math-abs",
    "section": "Méthodes de l'objet Math (Math)",
    "category": "Méthodes de l'objet Math",
    "name": "abs(x)",
    "tag": "Math.abs(x)",
    "syntax": "Math.abs(x)",
    "summary": "Retourne la valeur absolue.",
    "description": "Donne la valeur absolue d'un nombre x, c'est-à-dire le nombre positif correspondant (|x| sans son signe négatif).",
    "howToUse": "Math.abs(-12) donne 12. Math.abs(5) donne 5.",
    "values": [
      "Math.abs(-15) -> 15",
      "Math.abs(15) -> 15"
    ],
    "code": "// Calculer l'écart absolu entre deux notes\nfunction calculerEcart() {\n  var note1 = Number(document.getElementById(\"n1\").value);\n  var note2 = Number(document.getElementById(\"n2\").value);\n  var ecart = Math.abs(note1 - note2);\n  alert(\"L'écart absolu est de : \" + ecart + \" points.\");\n}",
    "runnableCode": "var diff = 10 - 18;\nconsole.log(\"Différence brute : \" + diff);\nconsole.log(\"Math.abs(\" + diff + \") = \" + Math.abs(diff));"
  },
  {
    "id": "js-math-sqrt",
    "section": "Méthodes de l'objet Math (Math)",
    "category": "Méthodes de l'objet Math",
    "name": "sqrt(x)",
    "tag": "Math.sqrt(x)",
    "syntax": "Math.sqrt(x)",
    "summary": "Retourne la racine carrée.",
    "description": "Calcule la racine carrée positive d'un nombre (√x). Si x est négatif, la fonction retourne NaN.",
    "howToUse": "Math.sqrt(9) donne 3. Math.sqrt(25) donne 5.",
    "values": [
      "Math.sqrt(16) -> 4",
      "Math.sqrt(25) -> 5",
      "Math.sqrt(2) -> 1.4142..."
    ],
    "code": "// Théorème de Pythagore pour STI\nfunction calculerHypotenuse() {\n  var a = Number(document.getElementById(\"coteA\").value);\n  var b = Number(document.getElementById(\"coteB\").value);\n  var h = Math.sqrt(a * a + b * b);\n  alert(\"Hypoténuse : \" + h.toFixed(2));\n}",
    "runnableCode": "console.log(\"Math.sqrt(64) = \" + Math.sqrt(64));\nconsole.log(\"Math.sqrt(2) = \" + Math.sqrt(2).toFixed(4));"
  },
  {
    "id": "js-math-round",
    "section": "Méthodes de l'objet Math (Math)",
    "category": "Méthodes de l'objet Math",
    "name": "round(x)",
    "tag": "Math.round(x)",
    "syntax": "Math.round(x)",
    "summary": "Retourne l'entier le plus proche.",
    "description": "Arrondit la valeur x à l'entier le plus proche. Si la partie décimale est supérieure ou égale à 0.5, arrondit vers le haut, sinon vers le bas.",
    "howToUse": "Math.round(14.4) donne 14. Math.round(14.5) donne 15.",
    "values": [
      "Math.round(4.4) -> 4",
      "Math.round(4.5) -> 5",
      "Math.round(4.9) -> 5"
    ],
    "code": "// Arrondir une moyenne générale\nfunction arrondirMoyenne() {\n  var moy = 13.65;\n  var arr = Math.round(moy);\n  alert(\"Moyenne arrondie : \" + arr);\n}",
    "runnableCode": "console.log(\"Math.round(12.4) = \" + Math.round(12.4));\nconsole.log(\"Math.round(12.5) = \" + Math.round(12.5));\nconsole.log(\"Math.round(12.9) = \" + Math.round(12.9));"
  },
  {
    "id": "js-math-trunc",
    "section": "Méthodes de l'objet Math (Math)",
    "category": "Méthodes de l'objet Math",
    "name": "trunc(x)",
    "tag": "Math.trunc(x)",
    "syntax": "Math.trunc(x)",
    "summary": "Retourne la troncature entière d'un nombre en retirant sa partie décimale.",
    "description": "Supprime purement et simplement les chiffres après la virgule, sans effectuer d'arrondi. Renvoie la partie entière brute.",
    "howToUse": "Math.trunc(14.89) donne 14. Math.trunc(-14.89) donne -14.",
    "values": [
      "Math.trunc(17.9) -> 17",
      "Math.trunc(5.1) -> 5",
      "Math.trunc(-3.8) -> -3"
    ],
    "code": "// Extraire la partie entière d'un nombre\nfunction tronquerValeur() {\n  var val = 18.95;\n  var entier = Math.trunc(val);\n  alert(\"Partie entière : \" + entier); // 18\n}",
    "runnableCode": "console.log(\"Math.trunc(15.99) = \" + Math.trunc(15.99) + \" (sans arrondi)\");\nconsole.log(\"Math.round(15.99) = \" + Math.round(15.99) + \" (avec arrondi)\");"
  },
  {
    "id": "js-math-random",
    "section": "Méthodes de l'objet Math (Math)",
    "category": "Méthodes de l'objet Math",
    "name": "random()",
    "tag": "Math.random()",
    "syntax": "Math.random()",
    "summary": "Retourne un réel aléatoire dans [0, 1[.",
    "description": "Génère un nombre décimal pseudo-aléatoire compris entre 0 inclus et 1 exclu (0 <= r < 1).",
    "howToUse": "Pour tirer un entier au sort entre min et max : Math.floor(Math.random() * (max - min + 1)) + min.",
    "values": [
      "Math.random() -> réel entre 0 et 1",
      "Math.trunc(Math.random() * 6) + 1 -> dé à 6 faces"
    ],
    "code": "// Générer un code de vérification aléatoire à 4 chiffres\nfunction genererCodeCaptcha() {\n  var code = Math.trunc(Math.random() * 9000) + 1000;\n  document.getElementById(\"captcha\").innerHTML = \"Code : \" + code;\n}",
    "runnableCode": "var r = Math.random();\nconsole.log(\"Réel aléatoire : \" + r);\nconsole.log(\"Tirage entier entre 1 et 100 : \" + (Math.trunc(r * 100) + 1));"
  },
  {
    "id": "js-str-concat",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "+ (Concaténation)",
    "tag": "ch1 + ch2",
    "syntax": "ch1 + ch2",
    "summary": "Opérateur de concaténation.",
    "description": "Assemble et concatène deux ou plusieurs chaînes de caractères les unes au bout des autres pour en former une seule.",
    "howToUse": "var nomComplet = nom + ' ' + prenom;",
    "values": [
      "'Bac ' + 'STI' -> 'Bac STI'",
      "'Note : ' + 15 -> 'Note : 15'"
    ],
    "code": "// Concaténer le nom et le prénom saisis\nfunction afficherBienvenue() {\n  var prenom = document.getElementById(\"prenom\").value;\n  var nom = document.getElementById(\"nom\").value;\n  var message = \"Bienvenue, \" + prenom + \" \" + nom + \" !\";\n  alert(message);\n}",
    "runnableCode": "var s1 = \"Révision Web \";\nvar s2 = \"Baccalauréat STI\";\nconsole.log(s1 + s2);"
  },
  {
    "id": "js-str-length",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.length",
    "tag": "ch.length",
    "syntax": "ch.length",
    "summary": "Propriété qui retourne la longueur de ch.",
    "description": "Propriété qui renvoie le nombre total de caractères contenus dans la chaîne de caractères ch (y compris les espaces).",
    "howToUse": "Indispensable pour contrôler la longueur d'un mot de passe (mdp.length >= 8) ou d'un numéro de CIN tunisien (cin.length == 8).",
    "values": [
      "'STI'.length -> 3",
      "'Tunisie'.length -> 7",
      "cin.length == 8"
    ],
    "code": "// Validation de la carte d'identité (CIN tunisienne : 8 chiffres)\nfunction validerCIN() {\n  var cin = document.getElementById(\"cin\").value;\n  if (cin.length != 8 || isNaN(cin)) {\n    alert(\"Le numéro de CIN doit comporter exactement 8 chiffres !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "var mot = \"Informatique\";\nconsole.log(\"Mot : '\" + mot + \"' -> Longueur (ch.length) : \" + mot.length);"
  },
  {
    "id": "js-str-indexof",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.indexOf(ch1 [,p])",
    "tag": "ch.indexOf(ch1 [,p])",
    "syntax": "ch.indexOf(ch1 [,p])",
    "summary": "Retourne la position de la 1ère occurrence de ch1 dans ch, en effectuant la recherche à partir de la position p (sinon -1).",
    "description": "Cherche la première position où apparaît ch1 dans ch à partir de l'indice p (0 par défaut). Retourne l'indice (base 0) ou -1 si la sous-chaîne est introuvable.",
    "howToUse": "C'est l'outil officiel du Bac pour vérifier si une adresse email contient un arobase : if (email.indexOf('@') == -1) { ... }",
    "values": [
      "ch.indexOf('@') -> position ou -1",
      "ch.indexOf('a', 3) -> cherche à partir de l'indice 3"
    ],
    "code": "// Vérification de la présence de l'arobase dans l'email\nfunction validerEmail() {\n  var email = document.getElementById(\"email\").value;\n  var pos = email.indexOf(\"@\");\n  if (pos == -1 || pos == 0 || pos == email.length - 1) {\n    alert(\"Adresse email invalide : l'arobase '@' est absent ou mal positionné !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "var mail = \"candidat@bac.tn\";\nconsole.log(\"ch.indexOf('@') dans '\" + mail + \"' : position \" + mail.indexOf(\"@\"));\nconsole.log(\"ch.indexOf('xyz') : \" + mail.indexOf(\"xyz\") + \" (Introuvable -> -1)\");"
  },
  {
    "id": "js-str-lastindexof",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.lastIndexOf(ch1 [,p])",
    "tag": "ch.lastIndexOf(ch1 [,p])",
    "syntax": "ch.lastIndexOf(ch1 [,p])",
    "summary": "Retourne la position de la dernière occurrence de ch1 dans ch à partir de la position p.",
    "description": "Recherche la dernière apparition de ch1 en parcourant la chaîne de droite à gauche. Retourne l'indice trouvé ou -1.",
    "howToUse": "Utile pour trouver la dernière extension d'un nom de fichier (ex: le dernier point '.') ou vérifier la position du point après l'@ dans un email.",
    "values": [
      "ch.lastIndexOf('.') -> position du dernier point",
      "retourne -1 si introuvable"
    ],
    "code": "// Vérifier la position du dernier point dans un email\nfunction verifierPointEmail() {\n  var email = document.getElementById(\"email\").value;\n  var posPoint = email.lastIndexOf(\".\");\n  var posArobase = email.indexOf(\"@\");\n  if (posPoint < posArobase) {\n    alert(\"Le point doit se trouver APRÈS l'arobase !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "var phrase = \"bac.sti.revision.html\";\nconsole.log(\"Dernier point dans '\" + phrase + \"' : position \" + phrase.lastIndexOf(\".\"));"
  },
  {
    "id": "js-str-substring",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.substring(d, f)",
    "tag": "ch.substring(d, f)",
    "syntax": "ch.substring(d, f)",
    "summary": "Retourne une sous-chaîne de ch de la position d à la position f (non incluse).",
    "description": "Extrait et renvoie une portion de la chaîne ch commençant à l'indice d (inclus) jusqu'à l'indice f (non inclus).",
    "howToUse": "ch.substring(0, 3) extrait les 3 premiers caractères (indices 0, 1 et 2).",
    "values": [
      "'Baccalauréat'.substring(0, 3) -> 'Bac'",
      "'Technologie'.substring(4, 8) -> 'nolo'"
    ],
    "code": "// Extraire les deux premiers chiffres d'un code postal pour identifier le gouvernorat\nfunction extraireGouvernorat() {\n  var cp = document.getElementById(\"cp\").value;\n  var codeGouv = cp.substring(0, 2);\n  alert(\"Code gouvernorat : \" + codeGouv);\n}",
    "runnableCode": "var ch = \"Technologie\";\nconsole.log(\"'\" + ch + \"'.substring(0, 4) = '\" + ch.substring(0, 4) + \"'\");"
  },
  {
    "id": "js-str-replace",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.replace(ch1, ch2)",
    "tag": "ch.replace(ch1, ch2)",
    "syntax": "ch.replace(ch1, ch2)",
    "summary": "Retourne une chaîne dans laquelle la 1ère occurrence de ch1 dans ch est remplacée par ch2.",
    "description": "Recherche la première occurrence de la sous-chaîne ch1 et la remplace par le texte ch2. La chaîne d'origine n'est pas modifiée, une nouvelle chaîne est retournée.",
    "howToUse": "var propre = ch.replace(',', '.'); pour remplacer une virgule par un point avant conversion en réel.",
    "values": [
      "ch.replace(',', '.')",
      "'Bonjour Ali'.replace('Ali', 'Sami') -> 'Bonjour Sami'"
    ],
    "code": "// Remplacer la virgule décimale par un point\nfunction corrigerNombre() {\n  var saisie = document.getElementById(\"prix\").value;\n  var corrigee = saisie.replace(\",\", \".\");\n  var prix = parseFloat(corrigee);\n  alert(\"Prix converti : \" + prix);\n}",
    "runnableCode": "var str = \"15,75 DT\";\nvar res = str.replace(\",\", \".\");\nconsole.log(\"Avant : \" + str + \" -> Après replace(',', '.') : \" + res);"
  },
  {
    "id": "js-str-tolowercase",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.toLowerCase()",
    "tag": "ch.toLowerCase()",
    "syntax": "ch.toLowerCase()",
    "summary": "Convertit tous les caractères de ch en minuscules.",
    "description": "Renvoie une nouvelle chaîne dans laquelle toutes les lettres majuscules ont été converties en minuscules.",
    "howToUse": "Très utile pour comparer deux chaînes sans tenir compte de la casse : if (ch1.toLowerCase() == ch2.toLowerCase()).",
    "values": [
      "'BAC'.toLowerCase() -> 'bac'",
      "'Tunisie'.toLowerCase() -> 'tunisie'"
    ],
    "code": "// Normaliser une adresse email en minuscules\nfunction normaliserEmail() {\n  var champ = document.getElementById(\"email\");\n  champ.value = champ.value.toLowerCase();\n}",
    "runnableCode": "var nom = \"BAC TECHNIQUE 2026\";\nconsole.log(\"'\" + nom + \"'.toLowerCase() = '\" + nom.toLowerCase() + \"'\");"
  },
  {
    "id": "js-str-touppercase",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.toUpperCase()",
    "tag": "ch.toUpperCase()",
    "syntax": "ch.toUpperCase()",
    "summary": "Convertit tous les caractères de ch en majuscules.",
    "description": "Renvoie une nouvelle chaîne avec tous les caractères convertis en majuscules.",
    "howToUse": "Utilisé pour formater automatiquement les noms de famille ou les codes de série.",
    "values": [
      "'sti'.toUpperCase() -> 'STI'",
      "'tunis'.toUpperCase() -> 'TUNIS'"
    ],
    "code": "// Mettre le nom en majuscules\nfunction formaterNom() {\n  var champNom = document.getElementById(\"nom\");\n  champNom.value = champNom.value.toUpperCase();\n}",
    "runnableCode": "var ville = \"tunis\";\nconsole.log(\"'\" + ville + \"'.toUpperCase() = '\" + ville.toUpperCase() + \"'\");"
  },
  {
    "id": "js-str-trim",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "ch.trim()",
    "tag": "ch.trim()",
    "syntax": "ch.trim()",
    "summary": "Supprime tous les espaces existants au début et à la fin de ch.",
    "description": "Nettoie une chaîne de caractères en retirant les espaces superflus avant le premier mot et après le dernier mot. Les espaces situés à l'intérieur ne sont pas touchés.",
    "howToUse": "if (document.getElementById('nom').value.trim() == '') { alert('Champ vide !'); }",
    "values": [
      "'  test  '.trim() -> 'test'",
      "Supprime espaces, tabulations et retours chariot aux extrémités"
    ],
    "code": "// Nettoyer la saisie avant validation\nfunction validerSansEspaces() {\n  var nom = document.getElementById(\"nom\").value.trim();\n  if (nom == \"\") {\n    alert(\"Vous ne pouvez pas valider avec uniquement des espaces !\");\n    return false;\n  }\n  return true;\n}",
    "runnableCode": "var brut = \"   Technologie STI   \";\nconsole.log(\"Brut : '\" + brut + \"' (longueur: \" + brut.length + \")\");\nvar propre = brut.trim();\nconsole.log(\"Après trim() : '\" + propre + \"' (longueur: \" + propre.length + \")\");"
  },
  {
    "id": "js-str-fromcharcode",
    "section": "Les chaînes de caractères",
    "category": "Les chaînes de caractères",
    "name": "String.fromCharCode(num, ..., numN)",
    "tag": "String.fromCharCode()",
    "syntax": "String.fromCharCode(num1, num2, ...)",
    "summary": "Retourne une chaîne formée par la concaténation des résultats de conversion des codes ASCII passés en paramètres.",
    "description": "Méthode statique de l'objet String qui convertit un ou plusieurs codes numériques ASCII / UTF-16 en leurs caractères correspondants.",
    "howToUse": "String.fromCharCode(65) donne 'A'. String.fromCharCode(97) donne 'a'.",
    "values": [
      "String.fromCharCode(65) -> 'A'",
      "String.fromCharCode(66) -> 'B'",
      "String.fromCharCode(65, 66, 67) -> 'ABC'"
    ],
    "code": "// Générer l'alphabet majuscule avec les codes ASCII 65 à 90\nfunction genererAlphabet() {\n  var alpha = \"\";\n  for (var code = 65; code <= 90; code++) {\n    alpha += String.fromCharCode(code) + \" \";\n  }\n  alert(\"Alphabet : \" + alpha);\n}",
    "runnableCode": "console.log(\"String.fromCharCode(65, 66, 67) = \" + String.fromCharCode(65, 66, 67));\nconsole.log(\"Code 83, 84, 73 -> \" + String.fromCharCode(83, 84, 73) + \" (STI)\");"
  },
  {
    "id": "js-date-now",
    "section": "L'objet Date",
    "category": "L'objet Date",
    "name": "new Date()",
    "tag": "new Date()",
    "syntax": "var d = new Date();",
    "summary": "Retourne la date courante.",
    "description": "Instancie et initialise un nouvel objet Date représentant la date et l'heure système actuelles au moment de l'exécution.",
    "howToUse": "var aujourdhui = new Date(); puis appeler .getDate(), .getMonth(), .getFullYear() sur cette variable.",
    "values": [
      "new Date() -> objet Date courante"
    ],
    "code": "// Récupérer la date du jour\nfunction afficherDateDuJour() {\n  var d = new Date();\n  alert(\"Date courante : \" + d.toString());\n}",
    "runnableCode": "var ajd = new Date();\nconsole.log(\"new Date() : \" + ajd.toString());"
  },
  {
    "id": "js-date-parse",
    "section": "L'objet Date",
    "category": "L'objet Date",
    "name": "new Date(ch)",
    "tag": "new Date(ch)",
    "syntax": "var d = new Date(ch);",
    "summary": "Retourne un objet Date à partir d'une chaine de caractères ch représentant une date.",
    "description": "Crée un objet Date à partir d'une chaîne textuelle formatée (ex: '2026-06-15'). Permet ensuite de comparer deux dates ou d'extraire des éléments.",
    "howToUse": "var dNaiss = new Date(document.getElementById('dateNaiss').value);",
    "values": [
      "new Date('2026-06-15')",
      "new Date('2007-03-22')"
    ],
    "code": "// Calculer l'âge à partir d'un champ HTML5 <input type=\"date\">\nfunction calculerAge() {\n  var dateSaisie = document.getElementById(\"dateNaiss\").value;\n  var dNaiss = new Date(dateSaisie);\n  var auj = new Date();\n  var age = auj.getFullYear() - dNaiss.getFullYear();\n  alert(\"Âge approximatif : \" + age + \" ans.\");\n}",
    "runnableCode": "var d = new Date(\"2026-06-15\");\nconsole.log(\"new Date('2026-06-15') : \" + d.toString());"
  },
  {
    "id": "js-date-getdate",
    "section": "L'objet Date",
    "category": "L'objet Date",
    "name": "d.getDate()",
    "tag": "d.getDate()",
    "syntax": "d.getDate()",
    "summary": "Retourne le jour du mois (entre 1 et 31).",
    "description": "Extrait et retourne le quantième du mois (nombre entier de 1 à 31) pour l'objet Date d.",
    "howToUse": "var jour = d.getDate();",
    "values": [
      "d.getDate() -> 1 à 31"
    ],
    "code": "// Afficher le jour actuel\nfunction afficherJour() {\n  var d = new Date();\n  alert(\"Nous sommes le \" + d.getDate() + \" du mois.\");\n}",
    "runnableCode": "var d = new Date();\nconsole.log(\"Jour actuel (d.getDate()) : \" + d.getDate());"
  },
  {
    "id": "js-date-getmonth",
    "section": "L'objet Date",
    "category": "L'objet Date",
    "name": "d.getMonth()",
    "tag": "d.getMonth()",
    "syntax": "d.getMonth()",
    "summary": "Retourne le numéro du mois (entre 1 et 11).",
    "description": "Extrait le mois de l'objet Date. Note officielle de l'annexe Bac STI : mentionne le numéro du mois. En JavaScript standard, les mois sont indexés de 0 (Janvier) à 11 (Décembre), donc pour un affichage usuel, on ajoute généralement +1.",
    "howToUse": "var mois = d.getMonth() + 1; // 1 pour Janvier, 12 pour Décembre",
    "values": [
      "0 = Janvier",
      "1 = Février",
      "11 = Décembre",
      "Note Bac : entre 1 et 11"
    ],
    "code": "// Formater le mois de la date courante\nfunction afficherMois() {\n  var d = new Date();\n  var mois = d.getMonth() + 1;\n  alert(\"Mois numéro : \" + mois);\n}",
    "runnableCode": "var d = new Date();\nconsole.log(\"Mois natif (0 à 11) : \" + d.getMonth());\nconsole.log(\"Mois usuel (+1) : \" + (d.getMonth() + 1));"
  },
  {
    "id": "js-date-getfullyear",
    "section": "L'objet Date",
    "category": "L'objet Date",
    "name": "d.getFullYear()",
    "tag": "d.getFullYear()",
    "syntax": "d.getFullYear()",
    "summary": "Retourne la valeur de l'année sur 4 chiffres.",
    "description": "Retourne l'année complète sous forme d'un entier à 4 chiffres (ex: 2026). Ne pas utiliser getYear() qui est déprécié.",
    "howToUse": "var annee = d.getFullYear();",
    "values": [
      "d.getFullYear() -> ex: 2026"
    ],
    "code": "// Afficher l'année actuelle pour la session du Bac\nfunction afficherSession() {\n  var d = new Date();\n  alert(\"Session du Baccalauréat : \" + d.getFullYear());\n}",
    "runnableCode": "var d = new Date();\nconsole.log(\"Année sur 4 chiffres (d.getFullYear()) : \" + d.getFullYear());"
  },
  {
    "id": "js-date-tostring",
    "section": "L'objet Date",
    "category": "L'objet Date",
    "name": "d.toString()",
    "tag": "d.toString()",
    "syntax": "d.toString()",
    "summary": "Retourne une chaine de caractères représentant la date d.",
    "description": "Convertit l'objet Date d en chaîne textuelle lisible complète incluant le jour, le mois, le numéro du jour, l'année, l'heure et le fuseau horaire.",
    "howToUse": "var str = d.toString();",
    "values": [
      "d.toString() -> 'Tue Nov 10 2026 20:30:00 GMT...'"
    ],
    "code": "// Journaliser l'envoi d'un formulaire\nfunction enregistrerDateEnvoi() {\n  var d = new Date();\n  document.getElementById(\"dateEnvoi\").value = d.toString();\n}",
    "runnableCode": "var d = new Date();\nconsole.log(\"d.toString() : \" + d.toString());"
  },
  {
    "id": "js-arr-literal",
    "section": "L'objet Array",
    "category": "L'objet Array",
    "name": "[] (Littéraux de tableau)",
    "tag": "[ ]",
    "syntax": "var tab = [elem1, elem2, ...];",
    "summary": "Pour créer un tableau, utiliser les littéraux de tableau [].",
    "description": "Règle officielle de l'annexe : pour instancier un tableau en JavaScript, on utilise la notation littérale entre crochets []. Les éléments sont séparés par des virgules et peuvent être de n'importe quel type.",
    "howToUse": "var t = ['Technique', 'Math', 'Sciences']; Accès au 1er élément par t[0].",
    "values": [
      "var t = [] -> tableau vide",
      "var t = [10, 15, 20] -> tableau de nombres"
    ],
    "code": "// Déclarer et manipuler un tableau de filières\nfunction listerFilieres() {\n  var filieres = [\"STI (Sciences & Technologies)\", \"Mathématiques\", \"Sciences Expérimentales\", \"Économie & Gestion\"];\n  alert(\"Première filière : \" + filieres[0]);\n}",
    "runnableCode": "var matieres = [\"Techno\", \"Math\", \"Info\", \"Physique\"];\nconsole.log(\"Tableau créé avec [] :\", matieres);\nconsole.log(\"Premier élément : \" + matieres[0]);"
  },
  {
    "id": "js-arr-length",
    "section": "L'objet Array",
    "category": "L'objet Array",
    "name": "length (Tableau)",
    "tag": "tab.length",
    "syntax": "tab.length",
    "summary": "Propriété qui représente le nombre d'éléments dans un tableau.",
    "description": "Propriété de l'objet Array renvoyant le nombre exact d'éléments contenus dans le tableau. Essentielle pour les conditions d'arrêt des boucles for.",
    "howToUse": "for (var i = 0; i < tab.length; i++) { ... }",
    "values": [
      "tab.length -> nombre entier >= 0"
    ],
    "code": "// Calculer la moyenne des notes d'un tableau\nfunction moyenneTableau() {\n  var notes = [12, 14, 16, 18];\n  var somme = 0;\n  for (var i = 0; i < notes.length; i++) {\n    somme += notes[i];\n  }\n  var moy = somme / notes.length;\n  alert(\"Moyenne des \" + notes.length + \" notes : \" + moy);\n}",
    "runnableCode": "var t = [\"A\", \"B\", \"C\", \"D\", \"E\"];\nconsole.log(\"Nombre d'éléments dans le tableau (tab.length) : \" + t.length);"
  },
  {
    "id": "js-dom-attr-val",
    "section": "Modification du contenu, des attributs ou des styles des éléments HTML",
    "category": "Modification HTML & Styles",
    "name": "element.attribut = valeur",
    "tag": "element.attribut = valeur",
    "syntax": "element.attribut = valeur",
    "summary": "Change la valeur de l'attribut d'un élément HTML.",
    "description": "Permet de modifier dynamiquement les attributs d'une balise HTML. Règle officielle de l'annexe Bac STI : 'Se limiter à la manipulation des attributs value, checked, disabled, readonly, src, muted.'",
    "howToUse": "document.getElementById('monBouton').disabled = true; document.getElementById('photo').src = 'nouveau.jpg';",
    "values": [
      "value : valeur textuelle d'un champ",
      "checked : true ou false pour checkbox/radio",
      "disabled : true ou false pour désactiver un bouton",
      "readonly : true ou false pour lecture seule",
      "src : chemin de l'image ou du média",
      "muted : true ou false pour couper le son"
    ],
    "code": "// Exemple Bac STI : manipulation des attributs officiels\nfunction modifierAttributs() {\n  // 1. Modifier la valeur (value)\n  document.getElementById(\"prenom\").value = \"Nour\";\n\n  // 2. Cocher une case (checked)\n  document.getElementById(\"chk_accord\").checked = true;\n\n  // 3. Désactiver un bouton (disabled)\n  document.getElementById(\"btnEnvoyer\").disabled = true;\n\n  // 4. Mettre en lecture seule (readonly)\n  document.getElementById(\"login\").readonly = true;\n\n  // 5. Modifier la source d'une image (src)\n  document.getElementById(\"logo\").src = \"images/bac_reussite.png\";\n\n  // 6. Rendre muette une vidéo (muted)\n  document.getElementById(\"maVideo\").muted = true;\n}",
    "runnableCode": "console.log(\"element.attribut = valeur modifie: value, checked, disabled, readonly, src, muted.\");"
  },
  {
    "id": "js-dom-style-prop",
    "section": "Modification du contenu, des attributs ou des styles des éléments HTML",
    "category": "Modification HTML & Styles",
    "name": "element.style.propriété = valeur",
    "tag": "element.style.propriété = valeur",
    "syntax": "element.style.propriete = 'valeur'",
    "summary": "Change le style d'un élément HTML.",
    "description": "Permet de modifier dynamiquement le style CSS en ligne d'un élément HTML. Règle officielle de l'annexe Bac STI : 'Se limiter à la manipulation des propriétés color, background, border, font, width, height.'",
    "howToUse": "document.getElementById('titre').style.color = 'red';",
    "values": [
      "color : couleur du texte ('red', '#ff0000')",
      "background : fond de l'élément ('yellow', '#eee')",
      "border : bordure ('1px solid red')",
      "font : police combinée ('bold 16px Arial')",
      "width : largeur ('300px', '50%')",
      "height : hauteur ('150px')"
    ],
    "code": "// Exemple Bac STI : manipulation des styles officiels\nfunction appliquerStylesSTI() {\n  var boite = document.getElementById(\"boite\");\n  \n  // Les 6 propriétés officielles de l'annexe :\n  boite.style.color = \"red\";\n  boite.style.background = \"#fff3cd\";\n  boite.style.border = \"2px dashed #f59e0b\";\n  boite.style.font = \"bold 16px 'Segoe UI', sans-serif\";\n  boite.style.width = \"400px\";\n  boite.style.height = \"120px\";\n}",
    "runnableCode": "console.log(\"element.style.propriété modifie : color, background, border, font, width, height.\");"
  },
  {
    "id": "js-dom-method-play",
    "section": "Modification du contenu, des attributs ou des styles des éléments HTML",
    "category": "Modification HTML & Styles",
    "name": "element.play()",
    "tag": "element.play()",
    "syntax": "element.play()",
    "summary": "Effectue une action sur un élément HTML (méthode play()).",
    "description": "Lance la lecture d'un élément multimédia HTML5 (<audio> ou <video>). Fait partie des 2 méthodes multimédia officielles autorisées par l'annexe ('Se limiter à la manipulation des méthodes play(), pause()').",
    "howToUse": "document.getElementById('monAudio').play();",
    "values": [
      "element.play() lance la lecture"
    ],
    "code": "// Démarrer la lecture d'un enregistrement audio\nfunction demarrerAudio() {\n  var lecteur = document.getElementById(\"audioCours\");\n  lecteur.play();\n  alert(\"Lecture audio démarrée !\");\n}",
    "runnableCode": "console.log(\"element.play() démarre la lecture audio ou vidéo.\");"
  },
  {
    "id": "js-dom-method-pause",
    "section": "Modification du contenu, des attributs ou des styles des éléments HTML",
    "category": "Modification HTML & Styles",
    "name": "element.pause()",
    "tag": "element.pause()",
    "syntax": "element.pause()",
    "summary": "Effectue une action sur un élément HTML (méthode pause()).",
    "description": "Met en pause la lecture en cours d'un fichier audio ou vidéo HTML5. Seconde méthode multimédia officielle autorisée par l'annexe STI.",
    "howToUse": "document.getElementById('maVideo').pause();",
    "values": [
      "element.pause() met en pause"
    ],
    "code": "// Mettre en pause une vidéo explicative\nfunction arreterVideo() {\n  var video = document.getElementById(\"videoDemo\");\n  video.pause();\n  alert(\"Vidéo mise en pause.\");\n}",
    "runnableCode": "console.log(\"element.pause() met en pause la lecture multimédia.\");"
  },
  {
    "id": "js-dom-selectedindex",
    "section": "Modification du contenu, des attributs ou des styles des éléments HTML",
    "category": "Modification HTML & Styles",
    "name": "selectedIndex (<select>)",
    "tag": "select.selectedIndex",
    "syntax": "selectElement.selectedIndex",
    "summary": "Pour une liste déroulante (<select>), utiliser la propriété selectedIndex pour récupérer l'indice de l'option sélectionnée.",
    "description": "Note officielle de l'annexe : renvoie le numéro d'indice (commençant à 0) de l'option active dans un menu déroulant <select>. Si l'option 0 est '--- Choisissez ---', la condition (liste.selectedIndex == 0) permet de vérifier que l'utilisateur a bien fait un choix !",
    "howToUse": "if (document.getElementById('filiere').selectedIndex == 0) { alert('Veuillez choisir une option !'); return false; }",
    "values": [
      "0 = première option (<option>)",
      "1 = deuxième option",
      "selectedIndex == -1 si rien n'est sélectionné"
    ],
    "code": "// Validation d'une liste déroulante au Bac STI\nfunction validerListe() {\n  var menu = document.getElementById(\"selectVille\");\n  if (menu.selectedIndex == 0) {\n    alert(\"Veuillez sélectionner votre ville dans la liste !\");\n    return false;\n  }\n  var optionChoisie = menu.options[menu.selectedIndex].text;\n  alert(\"Ville choisie : \" + optionChoisie);\n  return true;\n}",
    "runnableCode": "console.log(\"select.selectedIndex donne l'indice de l'option choisie (0 pour la première).\");"
  }
,
  {
    "id": "js-fn-verif-complete",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function verif() (Validation Complète Formulaire)",
    "tag": "function verif()",
    "syntax": "function verif() { ... return false; }",
    "summary": "Fonction complète de contrôle et validation de formulaire du Bac STI : vérification de la civilité (radio), nom/prénom, téléphone (8 chiffres), email (@ et .), mot de passe et confirmation (avec style.backgroundColor='red'), adresse, sélection de la ville (selectedIndex), code postal (4 chiffres) et remarque.",
    "description": "Fonction maîtresse de contrôle d'un formulaire HTML du Bac STI. Elle récupère les valeurs de chaque champ via getElementById et getElementsByName, puis applique les règles de validation successives : si une règle n'est pas respectée, un alert() s'affiche, le champ erroné est éventuellement coloré en rouge et la fonction retourne false pour bloquer l'envoi.",
    "howToUse": "Associer à l'événement onsubmit du formulaire : <form onsubmit=\"return verif()\" action=\"reponse.php\" method=\"post\"> ou au bouton : <input type=\"submit\" value=\"Envoyer\" onclick=\"return verif()\">.",
    "values": [
      "civ[0].checked == false && civ[1].checked == false",
      "np == '' || np.length > 30 || alpha(np) == false",
      "ntel.length != 8 || testtel(ntel) == false || isnum(ntel) == false",
      "mail == '' || mail.indexOf('@') == -1 || testmail(mail) == false",
      "mps.length != 8",
      "cfmps != mps -> style.backgroundColor = 'red'",
      "adr == '' || adr.indexOf(' ') == -1",
      "vil.selectedIndex == 0",
      "Number(cp) < 1000 || Number(cp) > 9999",
      "req == '' || req.length > 50"
    ],
    "code": "function verif() {\n  // Récupération des valeurs des champs\n  let np = document.getElementById(\"np\").value;\n  let ntel = document.getElementById(\"ntel\").value;\n  let mail = document.getElementById(\"mail\").value;\n  let mps = document.getElementById(\"mps\").value;\n  let cfmps = document.getElementById(\"cfmps\").value;\n  let adr = document.getElementById(\"adr\").value;\n  let vil = document.getElementById(\"vill\");\n  let cp = document.getElementById(\"cp\").value;\n  let req = document.getElementById(\"rq\").value;\n\n  // Validation du cocher civilité 1ére méthode\n  /* let f = document.getElementById('f').checked;\n     let h = document.getElementById('h').checked;\n     if (f == false && h == false) {\n       alert('Veuillez cocher la civilité');\n       return false;\n     }\n  */\n\n  // Validation du cocher civilité 2ème Méthode\n  let civ = document.getElementsByName(\"civ\");\n  if (civ[0].checked == false && civ[1].checked == false) {\n    alert(\"Veuillez cocher la civilité\");\n    return false;\n  }\n\n  // Validation du champ Nom et prénom\n  if (np == \"\" || np.length > 30 || alpha(np) == false) {\n    alert(\"Nom vide ou incorrect\");\n    return false;\n  }\n\n  // Validation du champ Numéro téléphone\n  if (ntel.length != 8 || testtel(ntel) == false || isnum(ntel) == false) {\n    alert(\"numéro téléphone vide ou incorrect\");\n    return false;\n  }\n\n  // Validation du champ Mail\n  if (mail == \"\" || mail.indexOf(\"@\") == -1 || testmail(mail) == false) {\n    alert(\"Mail obligatoire ou invalide\");\n    return false;\n  }\n\n  // Validation du champ mot de passe\n  if (mps.length != 8) {\n    alert(\"Mot de Passe obligatoire ou invalide\");\n    return false;\n  }\n\n  // Validation du confirmation du mot de passe\n  if (cfmps != mps) {\n    alert(\"Mot de Passe incorrect\");\n    document.getElementById('cfmps').style.backgroundColor = 'red';\n    return false;\n  }\n\n  // Validation du champ Adresse\n  if (adr == \"\" || adr.indexOf(\" \") == -1) {\n    alert(\"adresse vide ou incorrecte\");\n    return false;\n  }\n\n  // Validation du cocher ville\n  if (vil.selectedIndex == 0) {\n    alert(\"selectionner une ville\");\n    return false;\n  }\n\n  // Validation du champ code postal\n  if (Number(cp) < 1000 || Number(cp) > 9999) {\n    alert(\"code postal obligatoire ou invalid\");\n    return false;\n  }\n\n  // Validation du champ Remarque\n  if (req == \"\" || req.length > 50) {\n    alert(\"remarque obligatoire ou invalid\");\n    return false;\n  }\n} /// fin fonction verif",
    "runnableCode": "console.log(\"=== SIMULATION DE VERIF() AU BAC STI ===\");\nconsole.log(\"1. Civilité : civ[0].checked et civ[1].checked vérifiés.\");\nconsole.log(\"2. Nom et Prénom : longueur <= 30 et alpha(np) == true.\");\nconsole.log(\"3. Tél : 8 chiffres exacts, premier chiffre valide (testtel) et isnum.\");\nconsole.log(\"4. Mail : non vide, présence de '@' et format testmail valide.\");\nconsole.log(\"5. Mot de passe : longueur == 8.\");\nconsole.log(\"6. Confirmation : si cfmps != mps, style.backgroundColor = 'red'.\");\nconsole.log(\"7. Adresse : présence obligatoire d'au moins un espace ' ' (indexOf != -1).\");\nconsole.log(\"8. Ville : menu déroulant vil.selectedIndex != 0.\");\nconsole.log(\"9. Code postal : Number(cp) entre 1000 et 9999 (4 chiffres).\");\nconsole.log(\"10. Remarque : non vide et longueur <= 50 caractères.\");\nconsole.log(\"✓ Tous les contrôles sont conformes au barème officiel du Bac STI !\");"
  },
  {
    "id": "js-fn-validage",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function validage() (Validation Date de Naissance & Âge)",
    "tag": "function validage()",
    "syntax": "function validage() { ... }",
    "summary": "Calcule l'âge d'un utilisateur à partir de sa date de naissance (#dnais) et vérifie s'il est compris entre 15 et 30 ans en exploitant l'objet Date (new Date(), getFullYear()).",
    "description": "Fonction classique d'examen du Bac STI pour valider l'âge d'un candidat :\\n1. Récupère la chaîne de date depuis l'input date id='dnais'.\\n2. Instancie dc = new Date() pour obtenir l'année courante (ac = dc.getFullYear()).\\n3. Instancie dp = new Date(dt) pour convertir la saisie et extraire l'année de naissance (ap = dp.getFullYear()).\\n4. Calcule la différence diff = ac - ap.\\n5. Si diff < 15 ou diff > 30, affiche une boîte d'alerte 'age invalid'.",
    "howToUse": "Appeler sur l'événement onblur ou onchange du champ date : <input type=\"date\" id=\"dnais\" onchange=\"validage()\"> ou dans verif().",
    "values": [
      "let dc = new Date();",
      "let dp = new Date(dt);",
      "let ap = dp.getFullYear();",
      "let ac = dc.getFullYear();",
      "let diff = ac - ap;",
      "if (diff < 15 || diff > 30) alert('age invalid');"
    ],
    "code": "function validage() {\n  let dt = document.getElementById('dnais').value;\n  let dc = new Date(); // Retourne la date courante\n  let dp = new Date(dt); // Convertir la variable dt en un objet date\n  let ap = dp.getFullYear(); // Retourne l'année à partir de la date dp sur 4 chiffres\n  let ac = dc.getFullYear();\n  let diff = ac - ap;\n  if (diff < 15 || diff > 30) {\n    alert('age invalid');\n  }\n}",
    "runnableCode": "const anneeCourante = new Date().getFullYear();\nconst anneeNaissanceTest = anneeCourante - 18; // 18 ans\nconst diff = anneeCourante - anneeNaissanceTest;\nconsole.log(\"Année courante (ac) : \" + anneeCourante);\nconsole.log(\"Année de naissance test (ap) : \" + anneeNaissanceTest);\nconsole.log(\"Âge calculé (diff = ac - ap) : \" + diff + \" ans\");\nif (diff < 15 || diff > 30) {\n  console.log(\"Résultat : ❌ Âge invalide (doit être entre 15 et 30 ans)\");\n} else {\n  console.log(\"Résultat : ✓ Âge valide pour le Bac STI !\");\n}"
  },
  {
    "id": "js-fn-captcha",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function Captcha() (Génération Code Aléatoire)",
    "tag": "function Captcha()",
    "syntax": "function Captcha() { ... }",
    "summary": "Génère un code Captcha aléatoire de 10 caractères composé de majuscules (ASCII 65-90) et de minuscules (ASCII 97-122) grâce à Math.trunc, Math.random() et String.fromCharCode().",
    "description": "Algorithme officiel du Bac STI pour créer un code de sécurité Captcha aléatoire :\\n1. Initialise une chaîne code vide.\\n2. Boucle de 1 à 10 pour générer 10 caractères.\\n3. Tire un nombre entier n aléatoire entre 0 et 25 via Math.trunc(Math.random() * 26).\\n4. Si n est pair (n % 2 == 0), convertit en majuscule : String.fromCharCode(n + 65) (A-Z).\\n5. Sinon, convertit en minuscule : String.fromCharCode(n + 97) (a-z).\\n6. Insère le code généré dans le champ input id='cap'.",
    "howToUse": "Appeler au chargement de la page : <body onload=\"Captcha()\"> ou lors d'une réinitialisation.",
    "values": [
      "Math.trunc(Math.random() * 26)",
      "if (n % 2 == 0) String.fromCharCode(n + 65)",
      "else String.fromCharCode(n + 97)",
      "document.getElementById('cap').value = code"
    ],
    "code": "function Captcha() {\n  let code = \"\";\n  for (let i = 1; i <= 10; i++) {\n    let n = Math.trunc(Math.random() * 26);\n    if (n % 2 == 0) {\n      code = code + String.fromCharCode(n + 65);\n    } else {\n      code = code + String.fromCharCode(n + 97);\n    }\n  }\n  document.getElementById('cap').value = code;\n}",
    "runnableCode": "let code = \"\";\nfor (let i = 1; i <= 10; i++) {\n  let n = Math.trunc(Math.random() * 26);\n  if (n % 2 == 0) {\n    code = code + String.fromCharCode(n + 65);\n  } else {\n    code = code + String.fromCharCode(n + 97);\n  }\n}\nconsole.log(\"Code Captcha généré (10 caractères) : \" + code);\nconsole.log(\"Longueur : \" + code.length + \" caractères (mélange de majuscules et minuscules)\");"
  },
  {
    "id": "js-fn-nbmajus",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function nbmajus() (Comptage des Majuscules)",
    "tag": "function nbmajus()",
    "syntax": "function nbmajus() { ... }",
    "summary": "Compte le nombre de lettres majuscules présentes dans le Captcha (#cap) et compare avec la valeur saisie par l'utilisateur (#nbmaj). En cas d'erreur, colore le champ en rouge.",
    "description": "Procédure d'évaluation d'un Captcha par comptage :\\n1. Récupère la chaîne du Captcha depuis document.getElementById('cap').value.\\n2. Parcourt la chaîne caractère par caractère avec une boucle for.\\n3. Si le caractère est compris entre 'A' et 'Z' (ch[i] >= 'A' && ch[i] <= 'Z'), incrémente le compteur nb.\\n4. Récupère la réponse de l'utilisateur val = document.getElementById('nbmaj').value.\\n5. Si nb != val, applique un style rouge : document.getElementById('nbmaj').style.backgroundColor = 'red'.",
    "howToUse": "Appeler au clic du bouton de vérification ou dans la fonction globale verif().",
    "values": [
      "for (let i = 0; i < ch.length; i++)",
      "if (ch[i] >= 'A' && ch[i] <= 'Z') nb = nb + 1",
      "document.getElementById('nbmaj').style.backgroundColor = 'red'"
    ],
    "code": "function nbmajus() {\n  let ch = document.getElementById('cap').value;\n  let nb = 0;\n  for (let i = 0; i < ch.length; i++) {\n    if (ch[i] >= \"A\" && ch[i] <= \"Z\") {\n      nb = nb + 1;\n    }\n  }\n  let val = document.getElementById('nbmaj').value;\n  if (nb != val) {\n    document.getElementById('nbmaj').style.backgroundColor = 'red';\n  }\n}",
    "runnableCode": "const testChaine = \"AbCDeFgHiJ\";\nlet nb = 0;\nfor (let i = 0; i < testChaine.length; i++) {\n  if (testChaine[i] >= \"A\" && testChaine[i] <= \"Z\") {\n    nb = nb + 1;\n  }\n}\nconsole.log(\"Chaîne analysée : \" + testChaine);\nconsole.log(\"Nombre de majuscules trouvées : \" + nb + \" sur \" + testChaine.length + \" caractères\");\nconsole.log(\"Test utilisateur saisissant 5 : \" + (nb == 5 ? \"✓ Correct !\" : \"❌ Incorrect -> fond rouge !\"));"
  },
  {
    "id": "js-fn-actualiser",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function actualiser() (Régénérer le Captcha)",
    "tag": "function actualiser()",
    "syntax": "function actualiser() { ... }",
    "summary": "Permet à l'utilisateur de renouveler le code Captcha aléatoire s'il le trouve illisible, en régénérant 10 nouveaux caractères et en actualisant le champ #cap.",
    "description": "Fonction liée au bouton d'actualisation du Captcha :\\n1. Réinitialise le code aléatoire.\\n2. Exécute la boucle for de 10 itérations avec tirage aléatoire Math.random() et conversion ASCII String.fromCharCode().\\n3. Met à jour la valeur affichée dans document.getElementById('cap').value.\\n4. Réinitialise également si nécessaire la couleur de fond du champ réponse.",
    "howToUse": "Associer à un bouton rafraîchir : <button type=\"button\" onclick=\"actualiser()\">🔄 Actualiser le Captcha</button>.",
    "values": [
      "code = ''",
      "Math.trunc(Math.random() * 26)",
      "document.getElementById('cap').value = code"
    ],
    "code": "function actualiser() {\n  let code = \"\";\n  for (let i = 1; i <= 10; i++) {\n    let n = Math.trunc(Math.random() * 26);\n    if (n % 2 == 0) {\n      code = code + String.fromCharCode(n + 65);\n    } else {\n      code = code + String.fromCharCode(n + 97);\n    }\n  }\n  document.getElementById('cap').value = code;\n}",
    "runnableCode": "let code = \"\";\nfor (let i = 1; i <= 10; i++) {\n  let n = Math.trunc(Math.random() * 26);\n  if (n % 2 == 0) {\n    code = code + String.fromCharCode(n + 65);\n  } else {\n    code = code + String.fromCharCode(n + 97);\n  }\n}\nconsole.log(\"Ancien code : aB3kL9pQxZ\");\nconsole.log(\"Nouveau code actualisé : \" + code);\nconsole.log(\"✓ Champ #cap mis à jour avec succès !\");"
  },
  {
    "id": "js-structure-switch-saisons",
    "section": "Structures Conditionnelles (Bac STI)",
    "category": "Structures de Contrôle (switch)",
    "name": "switch (variable) (Saisons de l'Année)",
    "tag": "switch (mois)",
    "syntax": "switch (expression) { case c1: ... break; default: ... break; }",
    "summary": "Structure conditionnelle à choix multiples (switch) : détermine la saison de l'année à partir du numéro du mois (1 à 12) avec regroupement de cas multiples (case 12: case 1: case 2:), instruction break et clause default.",
    "description": "Guide complet sur l'utilisation de switch au Baccalauréat STI :\\n\\n1. Saisie & Conversion :\\n   let mois = prompt('mois=');\\n   mois = Number(mois); // OBLIGATOIRE : switch compare avec === (valeur et type exacts).\\n\\n2. Regroupement de cas multiples (OU logique) :\\n   Quand plusieurs valeurs produisent le même traitement, on empile les étiquettes case sans instruction intermédiaire :\\n   - case 12: case 1: case 2: -> 'hiver'\\n   - case 3: case 4: case 5: -> 'printemps'\\n   - case 6: case 7: case 8: -> 'été'\\n   - case 9: case 10: case 11: -> 'Automne'\\n\\n3. Le rôle crucial de 'break;' :\\n   L'instruction 'break;' termine immédiatement le bloc switch. Sans break, JavaScript continuerait à exécuter aveuglément les blocs suivants (comportement fall-through), ce qui provoquerait des affichages erronés !\\n\\n4. La clause 'default:' :\\n   Sert de filet de sécurité lorsque la valeur saisie ne correspond à aucun des cas listés (par exemple si l'utilisateur saisit 13, 0 ou -5). Affiche 'Numéro erroné'.",
    "howToUse": "Utiliser switch dès qu'une variable peut prendre plusieurs valeurs fixes et distinctes (numéros de mois, choix de menu, codes postaux régionaux). Structure plus claire et rapide qu'une longue série de if ... else if.",
    "values": [
      "switch (mois) { ... }",
      "case 12: case 1: case 2: -> hiver",
      "case 3: case 4: case 5: -> printemps",
      "case 6: case 7: case 8: -> été",
      "case 9: case 10: case 11: -> Automne",
      "break; (interrompt le switch)",
      "default: alert('Numéro erroné'); break;"
    ],
    "code": "<script>\n// déterminer la saison à partir du numéro du mois saisi\nlet mois = prompt(\"mois=\");\nmois = Number(mois);\nswitch (mois) {\n  case 12: case 1: case 2:\n    alert(\"hiver\");\n    break;\n  case 3: case 4: case 5:\n    alert(\"printemps\");\n    break;\n  case 6: case 7: case 8:\n    alert(\"été\");\n    break;\n  case 9: case 10: case 11:\n    alert(\"Automne\");\n    break;\n  default:\n    alert(\"Numéro erroné\");\n    break;\n}\n</script>",
    "runnableCode": "function getSaison(m) {\n  m = Number(m);\n  switch (m) {\n    case 12: case 1: case 2:\n      return \"❄️ hiver\";\n    case 3: case 4: case 5:\n      return \"🌸 printemps\";\n    case 6: case 7: case 8:\n      return \"☀️ été\";\n    case 9: case 10: case 11:\n      return \"🍂 Automne\";\n    default:\n      return \"❌ Numéro erroné\";\n  }\n}\n\nconsole.log(\"=== DÉMONSTRATION STRUCTURE SWITCH (BAC STI) ===\");\nconsole.log(\"Mois 1 (Janvier)   -> \" + getSaison(1));\nconsole.log(\"Mois 4 (Avril)     -> \" + getSaison(4));\nconsole.log(\"Mois 7 (Juillet)   -> \" + getSaison(7));\nconsole.log(\"Mois 10 (Octobre)  -> \" + getSaison(10));\nconsole.log(\"Mois 12 (Décembre) -> \" + getSaison(12));\nconsole.log(\"Mois 15 (Invalide) -> \" + getSaison(15));\nconsole.log(\"✓ Fonction switch testée sur tous les cas possibles !\");"
  },
  {
    "id": "js-fn-alpha",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function alpha(ch) (Contrôle Chaîne Alphabétique)",
    "tag": "function alpha(ch)",
    "syntax": "function alpha(ch) { ... return true; }",
    "summary": "Vérifie si une chaîne ch passée en paramètre est strictement alphabétique (composée uniquement de lettres A-Z et d'espaces). Utilisée dans verif() pour valider le Nom et Prénom.",
    "description": "Fonction auxiliaire indispensable du Bac STI :\\n1. Convertit la chaîne en majuscules avec ch = ch.toUpperCase() pour simplifier les comparaisons.\\n2. Parcourt chaque caractère avec une boucle for.\\n3. Si un caractère n'est ni compris entre 'A' et 'Z', ni égal à un espace ' ', retourne immédiatement false.\\n4. Si toute la chaîne a été vérifiée sans erreur, retourne true.",
    "howToUse": "if (alpha(np) == false) { alert('Nom vide ou incorrect'); return false; }",
    "values": [
      "ch = ch.toUpperCase()",
      "for (let i = 0; i < ch.length; i++)",
      "if ((ch[i] < 'A' || ch[i] > 'Z') && ch[i] != ' ') return false;",
      "return true;"
    ],
    "code": "function alpha(ch) {\n  ch = ch.toUpperCase();\n  for (let i = 0; i < ch.length; i++) {\n    if ((ch[i] < \"A\" || ch[i] > \"Z\") && ch[i] != \" \") {\n      return false;\n    }\n  }\n  return true;\n}",
    "runnableCode": "function alpha(ch) {\n  ch = ch.toUpperCase();\n  for (let i = 0; i < ch.length; i++) {\n    if ((ch[i] < \"A\" || ch[i] > \"Z\") && ch[i] != \" \") {\n      return false;\n    }\n  }\n  return true;\n}\nconsole.log(\"alpha('Mohamed Ben Ali') : \" + alpha('Mohamed Ben Ali')); // true\nconsole.log(\"alpha('Ali123') : \" + alpha('Ali123')); // false\nconsole.log(\"alpha('Sarra!') : \" + alpha('Sarra!')); // false"
  },
  {
    "id": "js-fn-isnum",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function isnum(ch) (Contrôle Chaîne Numérique)",
    "tag": "function isnum(ch)",
    "syntax": "function isnum(ch) { ... return true; }",
    "summary": "Vérifie si une chaîne ch ne contient que des chiffres de '0' à '9'. Utilisée dans verif() pour valider le Numéro de téléphone ou le Code Postal.",
    "description": "Fonction classique de contrôle numérique au Bac STI :\\n1. Parcourt tous les caractères de la chaîne avec une boucle for.\\n2. Si un caractère est strictement inférieur à '0' ou supérieur à '9', retourne false.\\n3. Si tous les caractères sont des chiffres, retourne true.",
    "howToUse": "if (isnum(ntel) == false) { alert('Le numéro de téléphone doit être numérique !'); return false; }",
    "values": [
      "for (let i = 0; i < ch.length; i++)",
      "if (ch[i] < '0' || ch[i] > '9') return false;",
      "return true;"
    ],
    "code": "function isnum(ch) {\n  for (let i = 0; i < ch.length; i++) {\n    if (ch[i] < \"0\" || ch[i] > \"9\") {\n      return false;\n    }\n  }\n  return true;\n}",
    "runnableCode": "function isnum(ch) {\n  for (let i = 0; i < ch.length; i++) {\n    if (ch[i] < \"0\" || ch[i] > \"9\") {\n      return false;\n    }\n  }\n  return true;\n}\nconsole.log(\"isnum('98123456') : \" + isnum('98123456')); // true\nconsole.log(\"isnum('9812A456') : \" + isnum('9812A456')); // false\nconsole.log(\"isnum('2024') : \" + isnum('2024')); // true"
  },
  {
    "id": "js-fn-testtel",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function testtel(ch) (Contrôle Indicatif Téléphone)",
    "tag": "function testtel(ch)",
    "syntax": "function testtel(ch) { ... return true; }",
    "summary": "Vérifie si le premier chiffre d'un numéro de téléphone tunisien à 8 chiffres commence par un préfixe valide (2, 4, 5, 7 ou 9).",
    "description": "Contrôle d'indicatif téléphonique officiel du Bac STI tunisien :\\n1. Récupère le premier chiffre : let prem = ch.charAt(0); ou ch[0].\\n2. Vérifie s'il est égal à 2, 4, 5, 7 ou 9 (opérateurs de comparaison et OU logique ||).\\n3. Si oui, retourne true ; sinon retourne false.",
    "howToUse": "if (testtel(ntel) == false) { alert('Numéro de téléphone invalide (doit commencer par 2, 4, 5, 7 ou 9) !'); return false; }",
    "values": [
      "let prem = ch.charAt(0);",
      "prem == '2' || prem == '4' || prem == '5' || prem == '7' || prem == '9'"
    ],
    "code": "function testtel(ch) {\n  let prem = ch.charAt(0);\n  return (prem == \"2\" || prem == \"4\" || prem == \"5\" || prem == \"7\" || prem == \"9\");\n}",
    "runnableCode": "function testtel(ch) {\n  let prem = ch.charAt(0);\n  return (prem == \"2\" || prem == \"4\" || prem == \"5\" || prem == \"7\" || prem == \"9\");\n}\nconsole.log(\"testtel('98123456') : \" + testtel('98123456')); // true (commence par 9)\nconsole.log(\"testtel('52123456') : \" + testtel('52123456')); // true (commence par 5)\nconsole.log(\"testtel('18123456') : \" + testtel('18123456')); // false (1 invalide)"
  },
  {
    "id": "js-fn-testmail",
    "section": "Contrôles de Saisie & Formulaires (Bac STI)",
    "category": "Validation de Formulaires Bac STI",
    "name": "function testmail(mail) (Contrôle Format Adresse Email)",
    "tag": "function testmail(mail)",
    "syntax": "function testmail(mail) { ... return true; }",
    "summary": "Vérifie la conformité d'une adresse email : présence du caractère '@' non au début, et d'un point '.' placé après le '@' sans être le dernier caractère.",
    "description": "Contrôle d'adresse e-mail standard au Bac STI :\\n1. Trouve la position de l'arobase : let pArobase = mail.indexOf('@');\\n2. Trouve la position du dernier point : let pPoint = mail.lastIndexOf('.');\\n3. Vérifie que pArobase > 0 (il y a du texte avant '@').\\n4. Vérifie que pPoint > pArobase + 1 (il y a du texte entre '@' et '.').\\n5. Vérifie que pPoint < mail.length - 1 (il y a une extension après le point).",
    "howToUse": "if (testmail(mail) == false) { alert('Adresse email obligatoire ou invalide !'); return false; }",
    "values": [
      "let pArobase = mail.indexOf('@');",
      "let pPoint = mail.lastIndexOf('.');",
      "pArobase > 0 && pPoint > pArobase + 1 && pPoint < mail.length - 1"
    ],
    "code": "function testmail(mail) {\n  let pArobase = mail.indexOf(\"@\");\n  let pPoint = mail.lastIndexOf(\".\");\n  return (pArobase > 0 && pPoint > pArobase + 1 && pPoint < mail.length - 1);\n}",
    "runnableCode": "function testmail(mail) {\n  let pArobase = mail.indexOf(\"@\");\n  let pPoint = mail.lastIndexOf(\".\");\n  return (pArobase > 0 && pPoint > pArobase + 1 && pPoint < mail.length - 1);\n}\nconsole.log(\"testmail('eleve@domaine.tn') : \" + testmail('eleve@domaine.tn')); // true\nconsole.log(\"testmail('invalide.sans.arobase') : \" + testmail('invalide.sans.arobase')); // false\nconsole.log(\"testmail('@debut.com') : \" + testmail('@debut.com')); // false\nconsole.log(\"testmail('eleve@pointfinal.') : \" + testmail('eleve@pointfinal.')); // false"
  }
],
  "lessons": [
  {
    "id": "lesson-html-01",
    "title": "Cours Officiel : Structuration Web Sémantique & Balises HTML5",
    "subject": "html",
    "subjectLabel": "HTML5",
    "type": "cours",
    "typeLabel": "📖 Cours",
    "date": "2025-01-10",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.2 Mo",
    "description": "Guide complet sur la hiérarchie du document HTML5 au Bac STI : <header>, <nav>, <main>, <section>, <article>, <aside> et <footer>. Règles de sémantique et bonnes pratiques d'examen.",
    "summary": "Ce document présente les éléments structurants officiels de l'annexe HTML5. Il détaille la place de chaque balise dans le document (DOCTYPE, html, head, body) et illustre une maquette de page web complète conforme aux épreuves pratiques et théoriques du Baccalauréat STI.",
    "downloadName": "Cours_HTML5_Structuration_Semantique_BacSTI.pdf",
    "tags": [
      "HTML5",
      "Structuration",
      "Sémantique",
      "header",
      "nav",
      "section",
      "footer"
    ]
  },
  {
    "id": "lesson-html-02",
    "title": "Série N°1 : Tableaux, Médias & Formulaires HTML5",
    "subject": "html",
    "subjectLabel": "HTML5",
    "type": "serie",
    "typeLabel": "📝 Série d'exercices",
    "date": "2025-01-18",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "850 Ko",
    "description": "Série d'entraînement pratique : création d'un formulaire d'inscription complet avec tous les contrôles autorisés (type text, password, date, radio, select, textarea) et intégration de tableaux structurés.",
    "summary": "Exercice 1 : Réalisation d'un tableau d'emploi du temps avec fusion de cellules (rowspan et colspan) et légende <caption>. Exercice 2 : Intégration d'un formulaire de commande avec <fieldset>, <legend>, boutons radio et menu déroulant.",
    "downloadName": "Serie_01_HTML5_Tableaux_Formulaires_BacSTI.pdf",
    "tags": [
      "HTML5",
      "Formulaires",
      "Tableaux",
      "input",
      "select",
      "fieldset"
    ]
  },
  {
    "id": "lesson-css-01",
    "title": "Cours Officiel : Modèle de Boîtes (Box Model), Positionnement & Sélecteurs CSS3",
    "subject": "css",
    "subjectLabel": "CSS3",
    "type": "cours",
    "typeLabel": "📖 Cours",
    "date": "2025-01-22",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.5 Mo",
    "description": "Étude approfondie du Box Model : margin, padding, border, dimensionnement (width, height), gestion du flux (float, position: static, relative, absolute, fixed) et application des 12 sélecteurs avec la règle :hover.",
    "summary": "Analyse détaillée des marges intérieures (padding) vs extérieures (margin), comportement du flottement (float: left / right) et règles de survol dynamique indispensables pour l'évaluation pratique du Baccalauréat.",
    "downloadName": "Cours_CSS3_BoxModel_Selecteurs_BacSTI.pdf",
    "tags": [
      "CSS3",
      "Box Model",
      "margin",
      "padding",
      "float",
      "position",
      ":hover"
    ]
  },
  {
    "id": "lesson-css-02",
    "title": "Série N°2 : Transitions, Transformations & Animations @keyframes",
    "subject": "css",
    "subjectLabel": "CSS3",
    "type": "serie",
    "typeLabel": "📝 Série d'exercices",
    "date": "2025-02-02",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "920 Ko",
    "description": "Exercices d'application sur les propriétés dynamiques du CSS3 : transition-duration, transition-timing-function, transform: rotate/scale, et déclaration d'animations avec @keyframes.",
    "summary": "Mise en pratique progressive : création d'un bouton animé avec effet de zoom au survol, rotation d'une icône à 360°, et boucle d'animation continue (animation-iteration-count: infinite).",
    "downloadName": "Serie_02_CSS3_Animations_Transitions_BacSTI.pdf",
    "tags": [
      "CSS3",
      "Animation",
      "@keyframes",
      "transform",
      "transition"
    ]
  },
  {
    "id": "lesson-js-01",
    "title": "Cours Officiel : Contrôles de Saisie & Validation de Formulaire (function verif)",
    "subject": "js",
    "subjectLabel": "JavaScript",
    "type": "cours",
    "typeLabel": "📖 Cours",
    "date": "2025-02-12",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.8 Mo",
    "description": "Les 10 règles d'or de la fonction maîtresse verif() : vérification de la civilité, nom, téléphone à 8 chiffres, format mail, mot de passe avec confirmation en rouge, adresse avec espace, ville et code postal.",
    "summary": "Polycopié de référence détaillant chaque étape de la fonction verif(), l'utilisation de document.getElementById() et getElementsByName(), ainsi que les fonctions auxiliaires alpha(ch), isnum(ch), testtel(ch) et testmail(ch).",
    "downloadName": "Cours_JS_Validation_Formulaire_verif_BacSTI.pdf",
    "tags": [
      "JavaScript",
      "verif()",
      "Formulaire",
      "Validation",
      "alpha",
      "isnum",
      "DOM"
    ]
  },
  {
    "id": "lesson-js-02",
    "title": "Série N°3 : Dates (validage), Sécurité Captcha, Majuscules & Structure switch",
    "subject": "js",
    "subjectLabel": "JavaScript",
    "type": "serie",
    "typeLabel": "📝 Série d'exercices",
    "date": "2025-02-20",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.1 Mo",
    "description": "Sujets d'examen récents : calcul de l'âge avec l'objet Date (ac - ap), génération aléatoire de code Captcha alphanumérique (10 caractères), comptage de majuscules et structure switch (saisons).",
    "summary": "Exercice 1 : Fonction validage() pour vérifier si un candidat a entre 15 et 30 ans. Exercice 2 : Module de sécurité Captcha() et contrôle nbmajus(). Exercice 3 : Structure conditionnelle switch (mois) avec cas groupés et clause default.",
    "downloadName": "Serie_03_JS_Dates_Captcha_Switch_BacSTI.pdf",
    "tags": [
      "JavaScript",
      "validage()",
      "Date",
      "Captcha()",
      "nbmajus()",
      "switch"
    ]
  },
  {
    "id": "lesson-sql-01",
    "title": "Cours Officiel : Langage de Définition de Données (LDD : CREATE, ALTER, DROP)",
    "subject": "sql",
    "subjectLabel": "SQL (Bases de Données)",
    "type": "cours",
    "typeLabel": "📖 Cours",
    "date": "2025-02-28",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.4 Mo",
    "description": "Création de tables relationnelles (CREATE TABLE), types de données SQL (INT, VARCHAR, DATE, DECIMAL), contraintes d'intégrité (PRIMARY KEY, FOREIGN KEY / REFERENCES, NOT NULL, UNIQUE, CHECK).",
    "summary": "Ce cours couvre l'intégralité du programme officiel de Base de Données du Bac STI Tunisie pour le volet LDD : définition des colonnes, spécification des clés primaires simples et composées, et établissement des relations avec clés étrangères (FOREIGN KEY).",
    "downloadName": "Cours_SQL_LDD_Create_Alter_Table_BacSTI.pdf",
    "tags": [
      "SQL",
      "LDD",
      "CREATE TABLE",
      "PRIMARY KEY",
      "FOREIGN KEY",
      "ALTER TABLE"
    ]
  },
  {
    "id": "lesson-sql-02",
    "title": "Cours Officiel : Langage de Manipulation de Données (LMD : SELECT, INSERT, UPDATE, DELETE)",
    "subject": "sql",
    "subjectLabel": "SQL (Bases de Données)",
    "type": "cours",
    "typeLabel": "📖 Cours",
    "date": "2025-03-05",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.6 Mo",
    "description": "Guide complet des requêtes SQL d'interrogation et de mise à jour : SELECT avec clauses WHERE, LIKE, BETWEEN, IN, ORDER BY. Opérations d'insertion (INSERT INTO), modification (UPDATE) et suppression (DELETE).",
    "summary": "Manuel méthodique pour formuler des requêtes d'interrogation précises. Syntaxe des opérateurs de comparaison (=, !=, <, >, <=, >=), opérateurs logiques (AND, OR, NOT), recherche par motif (LIKE '%mot%') et tri des résultats (ORDER BY col ASC/DESC).",
    "downloadName": "Cours_SQL_LMD_Select_Insert_Update_Delete_BacSTI.pdf",
    "tags": [
      "SQL",
      "LMD",
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE",
      "WHERE"
    ]
  },
  {
    "id": "lesson-sql-03",
    "title": "Série N°4 : Requêtes Complexes, Jointures (INNER JOIN) & Fonctions d'Agrégation",
    "subject": "sql",
    "subjectLabel": "SQL (Bases de Données)",
    "type": "serie",
    "typeLabel": "📝 Série d'exercices",
    "date": "2025-03-15",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.3 Mo",
    "description": "Entraînement intensif au Bac STI : jointures entre plusieurs tables (INNER JOIN ... ON), fonctions de calculs statistiques (COUNT, SUM, AVG, MIN, MAX), regroupement GROUP BY et condition de groupe HAVING.",
    "summary": "15 requêtes progressives issues d'anciennes sessions du Baccalauréat STI tunisien : extraction des données croisées, calcul du chiffre d'affaires, moyenne des notes par filière, et sélection des groupes avec HAVING COUNT(*) > 5.",
    "downloadName": "Serie_04_SQL_Jointures_Agregation_GroupBy_BacSTI.pdf",
    "tags": [
      "SQL",
      "INNER JOIN",
      "GROUP BY",
      "HAVING",
      "COUNT",
      "SUM",
      "AVG"
    ]
  },
  {
    "id": "lesson-sql-04",
    "title": "Devoir de Synthèse Type Bac STI : Base de Données Relationnelle & Requêtes SQL",
    "subject": "sql",
    "subjectLabel": "SQL (Bases de Données)",
    "type": "devoir",
    "typeLabel": "📑 Devoir de Synthèse",
    "date": "2025-03-25",
    "author": "Professeur d'Informatique (Bac STI)",
    "fileSize": "1.9 Mo",
    "description": "Épreuve complète simulant l'examen national du Bac STI : analyse d'un schéma relationnel, écriture des ordres de création LDD, et résolution de 8 requêtes SQL d'examen avec barème de notation officiel.",
    "summary": "Sujet de synthèse complet avec corrigé indicatif : modélisation d'une base de gestion de commandes en ligne (Clients, Produits, Commandes, LignesCommandes), contrôle de cohérence, et requêtes d'évaluation.",
    "downloadName": "Devoir_Synthese_SQL_Base_Donnees_BacSTI.pdf",
    "tags": [
      "SQL",
      "Devoir de Synthèse",
      "Bac STI",
      "Examen",
      "Schéma Relationnel"
    ]
  }
],
  "sql": [
  {
    "id": "sql-type-int",
    "category": "Type de données",
    "name": "INT",
    "tag": "INT",
    "syntax": "colonne INT",
    "summary": "Entier",
    "description": "Type de données numérique représentant des nombres entiers (positifs, négatifs ou zéro). C'est le type privilégié au Bac STI pour les identifiants uniques, numéros d'inscription, codes postaux ou quantités entières.",
    "howToUse": "S'utilise lors de la déclaration d'une colonne dans CREATE TABLE. Souvent associé à la contrainte PRIMARY KEY (et éventuellement AUTO_INCREMENT en MySQL).",
    "values": [
      "Entier signé ou non signé",
      "Ex: 101, 2025, 0, -15",
      "Taille standard : 4 octets"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  age INT CHECK (age >= 15 AND age <= 30)\n);",
    "simQuery": "SELECT num_inscr, nom, prenom FROM Eleve WHERE num_inscr > 102;",
    "simTable": "Eleve",
    "simDescription": "Filtre les élèves dont le numéro d'inscription entier (INT) est supérieur à 102."
  },
  {
    "id": "sql-type-decimal",
    "category": "Type de données",
    "name": "DECIMAL",
    "tag": "DECIMAL",
    "syntax": "colonne DECIMAL(p, s)",
    "summary": "Réel",
    "description": "Type de données numérique à virgule fixe représentant un nombre réel exact. 'p' (précision) est le nombre total de chiffres, et 's' (échelle) est le nombre de chiffres après la virgule. Très utilisé pour les moyennes (ex: 15.75) et les prix.",
    "howToUse": "Pour une moyenne au Bac STI de 0 à 20 avec deux décimales, on écrit : moyenne DECIMAL(4, 2). Par exemple, 17.50 occupe 4 chiffres au total dont 2 décimales.",
    "values": [
      "DECIMAL(taille_totale, decimales)",
      "Ex: DECIMAL(4, 2) pour une moyenne (de 00.00 à 99.99)",
      "Ex: DECIMAL(6, 3) pour un montant en dinars tunisiens (millimes)"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  moyenne DECIMAL(4, 2) CHECK (moyenne BETWEEN 0 AND 20)\n);",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne >= 10.00 ORDER BY moyenne DESC;",
    "simTable": "Eleve",
    "simDescription": "Affiche les élèves ayant une moyenne réelle (DECIMAL) supérieure ou égale à 10.00."
  },
  {
    "id": "sql-type-char",
    "category": "Type de données",
    "name": "CHAR",
    "tag": "CHAR",
    "syntax": "colonne CHAR(longueur_fixe)",
    "summary": "Chaîne de caractères de longueur fixe.",
    "howToUse": "À utiliser obligatoirement lorsque toutes les valeurs ont rigoureusement la même taille connue à l'avance : CIN (8 chiffres), code matière (4 lettres), code postal (4 chiffres), genre ('M'/'F').",
    "description": "Chaîne de caractères dont la taille en mémoire est fixe. Si la chaîne saisie est plus courte que la longueur définie, MySQL la complète automatiquement par des espaces.",
    "values": [
      "CHAR(N) où N est le nombre fixe de caractères",
      "Ex: cin CHAR(8)",
      "Ex: code_mat CHAR(4)",
      "Ex: genre CHAR(1)"
    ],
    "code": "CREATE TABLE Matiere (\n  code_mat CHAR(4) PRIMARY KEY,\n  libelle VARCHAR(30) NOT NULL,\n  coef INT NOT NULL\n);",
    "simQuery": "SELECT * FROM Matiere WHERE code_mat = 'INFO';",
    "simTable": "Matiere",
    "simDescription": "Recherche la matière dont le code fixe (CHAR(4)) est exactement 'INFO'."
  },
  {
    "id": "sql-type-varchar",
    "category": "Type de données",
    "name": "VARCHAR",
    "tag": "VARCHAR",
    "syntax": "colonne VARCHAR(longueur_max)",
    "summary": "Chaîne de caractères de longueur variable dont la longueur maximale fixée.",
    "description": "Chaîne de caractères de taille variable. Contrairement à CHAR, VARCHAR n'occupe en mémoire que la longueur réelle du texte saisi + 1 octet pour la taille. Idéal pour les noms, prénoms, adresses et villes.",
    "howToUse": "Définir la longueur maximale autorisée entre parenthèses. Si l'élève saisit moins de caractères, aucun espace n'est gaspillé en mémoire.",
    "values": [
      "VARCHAR(N) où N est la limite maximale",
      "Ex: nom VARCHAR(30)",
      "Ex: email VARCHAR(50)",
      "Ex: adresse VARCHAR(60)"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  prenom VARCHAR(30) NOT NULL,\n  ville VARCHAR(25) DEFAULT 'Tunis'\n);",
    "simQuery": "SELECT nom, prenom, ville FROM Eleve WHERE ville = 'Sousse';",
    "simTable": "Eleve",
    "simDescription": "Extrait les données textuelles variables (VARCHAR) des élèves résidant à Sousse."
  },
  {
    "id": "sql-type-text",
    "category": "Type de données",
    "name": "TEXT",
    "tag": "TEXT",
    "syntax": "colonne TEXT",
    "summary": "Chaîne de caractères de longueur variable.",
    "description": "Type destiné au stockage de textes très longs sans avoir à spécifier une limite stricte lors de la création de la table (jusqu'à 65 535 caractères).",
    "howToUse": "Utilisé pour les colonnes contenant des paragraphes, des observations de fin d'année, des résumés de TP ou des remarques d'enseignant.",
    "values": [
      "TEXT",
      "Capacité maximale : 64 Ko",
      "Pas besoin de spécifier de taille entre parenthèses"
    ],
    "code": "CREATE TABLE FicheObservation (\n  id_fiche INT PRIMARY KEY,\n  num_inscr INT,\n  remarque TEXT\n);",
    "simQuery": "SELECT num_inscr, nom, ville FROM Eleve;",
    "simTable": "Eleve",
    "simDescription": "Exemple de colonnes textuelles dans la base de données relationnelle."
  },
  {
    "id": "sql-type-date",
    "category": "Type de données",
    "name": "DATE",
    "tag": "DATE",
    "syntax": "colonne DATE",
    "summary": "Date.",
    "description": "Type de données temporel stockant une date civile au format international strict 'AAAA-MM-JJ' (Année sur 4 chiffres, Mois sur 2 chiffres, Jour sur 2 chiffres).",
    "howToUse": "En SQL, toute valeur DATE doit être entourée d'apostrophes (ou guillemets), par exemple : '2007-06-15'. Compatible avec les fonctions YEAR(), MONTH(), DAY(), DATEDIFF().",
    "values": [
      "Format strict : 'AAAA-MM-JJ'",
      "Ex: '2007-03-12'",
      "Ex: '2026-11-11'"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  date_naiss DATE NOT NULL\n);",
    "simQuery": "SELECT nom, prenom, date_naiss FROM Eleve WHERE date_naiss >= '2007-01-01';",
    "simTable": "Eleve",
    "simDescription": "Sélectionne les élèves nés à partir du 1er janvier 2007 (type DATE au format 'AAAA-MM-JJ')."
  },
  {
    "id": "sql-type-time",
    "category": "Type de données",
    "name": "TIME",
    "tag": "TIME",
    "syntax": "colonne TIME",
    "summary": "Temps.",
    "description": "Stocke une heure ou une durée au format standard 'HH:MM:SS' (Heures : Minutes : Secondes).",
    "howToUse": "S'emploie pour enregistrer les heures d'épreuves du Bac STI (ex: heure début '08:00:00' et heure fin '10:00:00').",
    "values": [
      "Format standard : 'HH:MM:SS'",
      "Ex: '08:30:00'",
      "Ex: '14:00:00'"
    ],
    "code": "CREATE TABLE Seance (\n  id_seance INT PRIMARY KEY,\n  code_mat CHAR(4),\n  heure_debut TIME,\n  heure_fin TIME\n);",
    "simQuery": "SELECT NOW() AS heure_actuelle;",
    "simTable": "Eleve",
    "simDescription": "Affiche l'heure courante du serveur SQL."
  },
  {
    "id": "sql-type-datetime",
    "category": "Type de données",
    "name": "DATETIME",
    "tag": "DATETIME",
    "syntax": "colonne DATETIME",
    "summary": "Date et Heure.",
    "description": "Combine à la fois une date et une heure au format combiné 'AAAA-MM-JJ HH:MM:SS'. Permet un horodatage précis à la seconde près.",
    "howToUse": "Utilisé pour enregistrer la date et l'heure exactes d'une inscription en ligne, du dépôt d'un devoir ou d'une modification.",
    "values": [
      "Format : 'AAAA-MM-JJ HH:MM:SS'",
      "Ex: '2026-11-11 08:30:00'",
      "Ex: NOW()"
    ],
    "code": "CREATE TABLE Inscription (\n  num_inscr INT PRIMARY KEY,\n  date_heure_inscr DATETIME DEFAULT NOW()\n);",
    "simQuery": "SELECT nom, NOW() AS date_heure_consultation FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Exemple de valeur combinée Date et Heure (DATETIME)."
  },
  {
    "id": "sql-constraint-not-null",
    "category": "Contraintes d'intégrité",
    "name": "NOT NULL",
    "tag": "NOT NULL",
    "syntax": "colonne type NOT NULL",
    "summary": "Interdit une valeur nulle.",
    "description": "Contrainte d'intégrité de niveau colonne qui oblige l'utilisateur à obligatoirement saisir une valeur. Le champ ne peut jamais être laissé vide ou indéfini (NULL).",
    "howToUse": "Se place immédiatement après le type de la colonne dans CREATE TABLE ou ALTER TABLE ADD/MODIFY. Indispensable pour les noms, prénoms et mots de passe.",
    "values": [
      "NOT NULL",
      "Obligatoire sur les attributs essentiels",
      "Une clé primaire (PRIMARY KEY) est automatiquement NOT NULL"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  prenom VARCHAR(30) NOT NULL\n);",
    "simQuery": "SELECT nom, prenom FROM Eleve WHERE nom IS NOT NULL;",
    "simTable": "Eleve",
    "simDescription": "Garantit que tous les élèves retournés possèdent un nom non nul."
  },
  {
    "id": "sql-constraint-default",
    "category": "Contraintes d'intégrité",
    "name": "DEFAULT",
    "tag": "DEFAULT",
    "syntax": "colonne type DEFAULT valeur_par_defaut",
    "summary": "Attribut une valeur par défaut.",
    "description": "Attribue automatiquement une valeur prédéfinie à la colonne si l'utilisateur ne spécifie aucune valeur lors de l'insertion (INSERT INTO).",
    "howToUse": "Spécifier la constante par défaut après le mot-clé DEFAULT : un nombre (DEFAULT 0), un texte entre apostrophes (DEFAULT 'STI') ou une fonction (DEFAULT NOW()).",
    "values": [
      "DEFAULT valeur",
      "Ex: section VARCHAR(10) DEFAULT 'STI'",
      "Ex: ville VARCHAR(20) DEFAULT 'Tunis'",
      "Ex: coef INT DEFAULT 3"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  section VARCHAR(10) DEFAULT 'STI',\n  ville VARCHAR(20) DEFAULT 'Tunis'\n);",
    "simQuery": "SELECT nom, section, ville FROM Eleve WHERE section = 'STI';",
    "simTable": "Eleve",
    "simDescription": "Affiche les élèves dont la section correspond à la valeur par défaut ('STI')."
  },
  {
    "id": "sql-constraint-check",
    "category": "Contraintes d'intégrité",
    "name": "CHECK",
    "tag": "CHECK",
    "syntax": "CHECK (condition)",
    "summary": "Spécifie que les valeurs de la colonne doivent respecter une condition.",
    "description": "Contrainte d'intégrité du domaine qui valide les données insérées en vérifiant qu'elles satisfont une condition logique booléenne (comparaisons, encadrements, listes de valeurs).",
    "howToUse": "Placer l'expression entre parenthèses. Par exemple pour une moyenne scolaire : CHECK (moyenne >= 0 AND moyenne <= 20) ou CHECK (moyenne BETWEEN 0 AND 20).",
    "values": [
      "CHECK (colonne >= min AND colonne <= max)",
      "CHECK (colonne BETWEEN a AND b)",
      "CHECK (section IN ('STI', 'Math', 'SI', 'Eco'))"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  moyenne DECIMAL(4, 2),\n  CONSTRAINT chk_moy CHECK (moyenne BETWEEN 0 AND 20)\n);",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne BETWEEN 0 AND 20;",
    "simTable": "Eleve",
    "simDescription": "Valide que toutes les moyennes respectent la règle de gestion définie par le CHECK (0 à 20)."
  },
  {
    "id": "sql-constraint-primary-key",
    "category": "Contraintes d'intégrité",
    "name": "PRIMARY KEY",
    "tag": "PRIMARY KEY",
    "syntax": "colonne type PRIMARY KEY  ou  PRIMARY KEY (colonne1, colonne2)",
    "summary": "Définit une clé primaire.",
    "description": "Identifie de manière unique et certaine chaque enregistrement (ligne) d'une table relationnelle. Une table ne peut avoir qu'une seule clé primaire. Elle garantit à la fois l'unicité et l'interdiction de valeur nulle (UNIQUE + NOT NULL).",
    "howToUse": "Peut être déclarée au niveau colonne (pour une clé simple) ou au niveau table en bas de CREATE TABLE (obligatoire pour une clé primaire composée de plusieurs colonnes).",
    "values": [
      "PRIMARY KEY",
      "Clé simple : num_inscr INT PRIMARY KEY",
      "Clé composée : PRIMARY KEY (num_inscr, code_mat)"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL\n);\n\n-- Clé primaire composée pour une table de liaison :\nCREATE TABLE Note (\n  num_inscr INT,\n  code_mat CHAR(4),\n  note_ds DECIMAL(4, 2),\n  PRIMARY KEY (num_inscr, code_mat)\n);",
    "simQuery": "SELECT num_inscr, nom, prenom FROM Eleve WHERE num_inscr = 101;",
    "simTable": "Eleve",
    "simDescription": "Recherche un enregistrement unique garanti par sa clé primaire (PRIMARY KEY = 101)."
  },
  {
    "id": "sql-constraint-unique",
    "category": "Contraintes d'intégrité",
    "name": "UNIQUE",
    "tag": "UNIQUE",
    "syntax": "colonne type UNIQUE",
    "summary": "Spécifie l'unicité des valeurs d'une colonne.",
    "description": "Interdit les doublons dans une colonne. Contrairement à la clé primaire, une table peut contenir plusieurs contraintes UNIQUE, et celles-ci peuvent autoriser la valeur NULL.",
    "howToUse": "Indispensable pour des colonnes comme le numéro de carte d'identité nationale (CIN), l'adresse e-mail ou le numéro de téléphone.",
    "values": [
      "UNIQUE",
      "Ex: cin CHAR(8) UNIQUE",
      "Ex: email VARCHAR(50) UNIQUE",
      "Ex: num_tel CHAR(8) UNIQUE"
    ],
    "code": "CREATE TABLE Candidat (\n  num_inscr INT PRIMARY KEY,\n  cin CHAR(8) NOT NULL UNIQUE,\n  email VARCHAR(50) UNIQUE\n);",
    "simQuery": "SELECT num_inscr, nom, prenom FROM Eleve GROUP BY num_inscr;",
    "simTable": "Eleve",
    "simDescription": "Illustration de l'unicité des identifiants sans aucun doublon."
  },
  {
    "id": "sql-constraint-foreign-key",
    "category": "Contraintes d'intégrité",
    "name": "FOREIGN KEY",
    "tag": "FOREIGN KEY",
    "syntax": "FOREIGN KEY (colonne) REFERENCES table_mere(colonne_pk)",
    "summary": "Définit une clé étrangère.",
    "description": "Établit un lien d'intégrité référentielle entre une colonne de la table fille et la clé primaire de la table mère. Empêche l'insertion d'une référence qui n'existe pas dans la table mère.",
    "howToUse": "Déclarée dans la table fille qui pointe vers la table mère. Doit impérativement avoir le même type de données que la clé primaire référencée.",
    "values": [
      "FOREIGN KEY (col_fille) REFERENCES table_mere(col_mere)",
      "Garantit la cohérence des liens relationnels",
      "Peut être complétée par ON UPDATE CASCADE ou ON DELETE CASCADE"
    ],
    "code": "CREATE TABLE Note (\n  id_note INT PRIMARY KEY,\n  num_inscr INT,\n  code_mat CHAR(4),\n  note_ds DECIMAL(4, 2),\n  FOREIGN KEY (num_inscr) REFERENCES Eleve(num_inscr),\n  FOREIGN KEY (code_mat) REFERENCES Matiere(code_mat)\n);",
    "simQuery": "SELECT Eleve.num_inscr, Eleve.nom, Matiere.libelle FROM Eleve, Matiere WHERE Eleve.num_inscr = 101 AND Matiere.code_mat = 'INFO';",
    "simTable": "Eleve",
    "simDescription": "Associe les tables par leurs clés relationnelles (FOREIGN KEY)."
  },
  {
    "id": "sql-constraint-references",
    "category": "Contraintes d'intégrité",
    "name": "REFERENCES",
    "tag": "REFERENCES",
    "syntax": "REFERENCES table_mere (colonne_pk)",
    "summary": "Fait référence à une clé primaire d'une autre table.",
    "description": "Mot-clé inséparable de la déclaration de clé étrangère (FOREIGN KEY). Il indique explicitement le nom de la table parente ainsi que sa colonne clé primaire ciblée.",
    "howToUse": "S'écrit sous la forme REFERENCES NomTable(NomColonne). La colonne cible doit obligatoirement être indexée ou clé primaire dans la table mère.",
    "values": [
      "REFERENCES table_parente(cle_primaire)",
      "Ex: REFERENCES Eleve(num_inscr)",
      "Ex: REFERENCES Matiere(code_mat)"
    ],
    "code": "ALTER TABLE Note\nADD CONSTRAINT fk_eleve\nFOREIGN KEY (num_inscr) REFERENCES Eleve(num_inscr)\nON DELETE CASCADE;",
    "simQuery": "SELECT num_inscr, nom, prenom FROM Eleve WHERE num_inscr IN (SELECT num_inscr FROM Eleve);",
    "simTable": "Eleve",
    "simDescription": "Vérification des correspondances de clés avec REFERENCES."
  },
  {
    "id": "sql-constraint-on-update-cascade",
    "category": "Contraintes d'intégrité",
    "name": "ON UPDATE CASCADE",
    "tag": "ON UPDATE CASCADE",
    "syntax": "FOREIGN KEY (...) REFERENCES ... ON UPDATE CASCADE",
    "summary": "Met à jour la clé étrangère en cas de mise à jour de la clé primaire.",
    "description": "Règle de propagation automatique des modifications : si la clé primaire de la table mère est modifiée par un UPDATE, toutes les clés étrangères correspondantes dans la table fille sont automatiquement mises à jour avec la nouvelle valeur.",
    "howToUse": "S'ajoute à la suite de la clause FOREIGN KEY ... REFERENCES ... dans CREATE TABLE ou ALTER TABLE.",
    "values": [
      "ON UPDATE CASCADE",
      "Évite les incohérences en cas de renommage d'identifiant",
      "Alternative au blocage (RESTRICT)"
    ],
    "code": "CREATE TABLE Note (\n  num_inscr INT,\n  code_mat CHAR(4),\n  note_ds DECIMAL(4, 2),\n  PRIMARY KEY (num_inscr, code_mat),\n  FOREIGN KEY (num_inscr) REFERENCES Eleve(num_inscr)\n    ON UPDATE CASCADE\n    ON DELETE CASCADE\n);",
    "simQuery": "SELECT num_inscr, nom, prenom FROM Eleve;",
    "simTable": "Eleve",
    "simDescription": "Règle de propagation de mise à jour en cascade (ON UPDATE CASCADE)."
  },
  {
    "id": "sql-constraint-on-delete-cascade",
    "category": "Contraintes d'intégrité",
    "name": "ON DELETE CASCADE",
    "tag": "ON DELETE CASCADE",
    "syntax": "FOREIGN KEY (...) REFERENCES ... ON DELETE CASCADE",
    "summary": "Supprime automatiquement tous les enregistrements de la table fille suite à la suppression de l'enregistrement correspondant de la table mère.",
    "description": "Règle de suppression automatique : si un enregistrement parent est supprimé de la table mère (via DELETE FROM), tous ses enregistrements enfants associés dans la table fille sont automatiquement effacés du système pour éviter les données orphelines.",
    "howToUse": "À spécifier à la fin de la déclaration FOREIGN KEY ... REFERENCES ... Indispensable pour nettoyer automatiquement les notes ou lignes de commande d'un élève ou client supprimé.",
    "values": [
      "ON DELETE CASCADE",
      "Supprime les enregistrements fils automatiquement",
      "Prévient les enregistrements orphelins dans la base"
    ],
    "code": "ALTER TABLE Inscription\nADD CONSTRAINT fk_inscr_eleve\nFOREIGN KEY (num_inscr) REFERENCES Eleve(num_inscr)\nON DELETE CASCADE;",
    "simQuery": "SELECT num_inscr, nom, section FROM Eleve WHERE num_inscr = 101;",
    "simTable": "Eleve",
    "simDescription": "Démonstration de la règle de suppression en cascade (ON DELETE CASCADE)."
  },
  {
    "id": "sql-op-equal",
    "category": "Opérateurs de comparaison",
    "name": "=",
    "tag": "=",
    "syntax": "colonne = valeur",
    "summary": "Égale à",
    "description": "Opérateur de comparaison qui teste la stricte égalité entre deux expressions, colonnes ou constantes dans une clause WHERE ou HAVING.",
    "howToUse": "Pour les chaînes et dates, entourer la valeur d'apostrophes : WHERE section = 'STI' ou WHERE date_naiss = '2007-03-12'. Pour les nombres, écrire sans guillemets : WHERE num_inscr = 101.",
    "values": [
      "colonne = valeur",
      "Sensible à la casse selon le classement (collation)",
      "Ex: section = 'STI'"
    ],
    "code": "SELECT nom, prenom, moyenne FROM Eleve\nWHERE section = 'STI';",
    "simQuery": "SELECT num_inscr, nom, prenom, section FROM Eleve WHERE section = 'STI';",
    "simTable": "Eleve",
    "simDescription": "Filtre les élèves dont la section est strictement égale à 'STI'."
  },
  {
    "id": "sql-op-diff",
    "category": "Opérateurs de comparaison",
    "name": "<>",
    "tag": "<>",
    "syntax": "colonne <> valeur",
    "summary": "Différent de",
    "description": "Opérateur de comparaison standard du SQL pour vérifier qu'une valeur est différente d'une autre. En MySQL, != est également accepté comme synonyme.",
    "howToUse": "S'utilise dans la clause WHERE pour exclure des enregistrements particuliers, par exemple : WHERE ville <> 'Tunis'.",
    "values": [
      "colonne <> valeur",
      "Ex: section <> 'Math'",
      "Ex: ville <> 'Tunis'"
    ],
    "code": "SELECT nom, prenom, ville FROM Eleve\nWHERE ville <> 'Tunis';",
    "simQuery": "SELECT nom, prenom, ville FROM Eleve WHERE ville <> 'Tunis';",
    "simTable": "Eleve",
    "simDescription": "Sélectionne tous les élèves dont la ville est différente de 'Tunis'."
  },
  {
    "id": "sql-op-gt",
    "category": "Opérateurs de comparaison",
    "name": ">",
    "tag": ">",
    "syntax": "colonne > valeur",
    "summary": "Supérieur à",
    "description": "Opérateur de comparaison stricte vérifiant si la valeur de gauche est strictement plus grande que la valeur de droite.",
    "howToUse": "Applicable aux nombres (moyenne > 10), dates (date_naiss > '2007-01-01') et chaînes selon l'ordre alphabétique.",
    "values": [
      "colonne > valeur",
      "Ex: moyenne > 10.00",
      "Ex: age > 18"
    ],
    "code": "SELECT nom, prenom, moyenne FROM Eleve\nWHERE moyenne > 12.00\nORDER BY moyenne DESC;",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne > 12.00;",
    "simTable": "Eleve",
    "simDescription": "Affiche les élèves ayant une moyenne strictement supérieure à 12.00."
  },
  {
    "id": "sql-op-lt",
    "category": "Opérateurs de comparaison",
    "name": "<",
    "tag": "<",
    "syntax": "colonne < valeur",
    "summary": "Inférieur à",
    "description": "Opérateur de comparaison stricte vérifiant si la valeur de gauche est strictement inférieure à la valeur de droite.",
    "howToUse": "Très utilisé pour identifier les élèves ajournés (moyenne < 10) ou des dates antérieures à un seuil.",
    "values": [
      "colonne < valeur",
      "Ex: moyenne < 10.00",
      "Ex: coef < 3"
    ],
    "code": "SELECT nom, prenom, moyenne FROM Eleve\nWHERE moyenne < 10.00;",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne < 10.00;",
    "simTable": "Eleve",
    "simDescription": "Extrait les élèves dont la moyenne est strictement inférieure à 10.00."
  },
  {
    "id": "sql-op-gte",
    "category": "Opérateurs de comparaison",
    "name": ">=",
    "tag": ">=",
    "syntax": "colonne >= valeur",
    "summary": "Supérieur ou égale à",
    "description": "Opérateur de comparaison large vérifiant si la valeur est supérieure ou égale à la borne spécifiée (la valeur borne est incluse).",
    "howToUse": "Critère officiel d'admission au Baccalauréat tunisien : WHERE moyenne >= 10.00.",
    "values": [
      "colonne >= valeur",
      "Borne incluse",
      "Ex: moyenne >= 10.00",
      "Ex: coef >= 3"
    ],
    "code": "SELECT nom, prenom, moyenne FROM Eleve\nWHERE moyenne >= 10.00\nORDER BY moyenne DESC;",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne >= 10.00 ORDER BY moyenne DESC;",
    "simTable": "Eleve",
    "simDescription": "Affiche tous les élèves admis au Bac STI (moyenne >= 10.00)."
  },
  {
    "id": "sql-op-lte",
    "category": "Opérateurs de comparaison",
    "name": "<=",
    "tag": "<=",
    "syntax": "colonne <= valeur",
    "summary": "Inférieur ou égale à",
    "description": "Opérateur de comparaison large vérifiant si la valeur est inférieure ou égale à la borne spécifiée (borne incluse).",
    "howToUse": "S'utilise pour borner des notes, des prix ou des dates : WHERE moyenne <= 15.00.",
    "values": [
      "colonne <= valeur",
      "Borne incluse",
      "Ex: moyenne <= 15.00",
      "Ex: date_naiss <= '2007-12-31'"
    ],
    "code": "SELECT nom, prenom, moyenne FROM Eleve\nWHERE moyenne <= 12.00;",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne <= 12.00;",
    "simTable": "Eleve",
    "simDescription": "Affiche les élèves ayant une moyenne inférieure ou égale à 12.00."
  },
  {
    "id": "sql-op-in",
    "category": "Opérateurs de comparaison",
    "name": "IN",
    "tag": "IN",
    "syntax": "colonne IN (valeur1, valeur2, ...)",
    "summary": "Dans",
    "description": "Vérifie si la valeur d'une colonne appartient à un ensemble de valeurs données entre parenthèses. Évite d'écrire de multiples conditions OR successives.",
    "howToUse": "Lister les valeurs séparées par des virgules entre parenthèses : WHERE ville IN ('Tunis', 'Sousse', 'Sfax'). Peut également recevoir le résultat d'une sous-requête SQL.",
    "values": [
      "IN (val1, val2, ...)",
      "Équivalent à (col = val1 OR col = val2 ...)",
      "Peut être inversé avec NOT IN"
    ],
    "code": "SELECT nom, prenom, ville FROM Eleve\nWHERE ville IN ('Tunis', 'Sousse');",
    "simQuery": "SELECT nom, prenom, ville FROM Eleve WHERE ville IN ('Tunis', 'Sousse');",
    "simTable": "Eleve",
    "simDescription": "Extrait les élèves résidant dans la liste de villes ('Tunis' ou 'Sousse')."
  },
  {
    "id": "sql-op-between",
    "category": "Opérateurs de comparaison",
    "name": "BETWEEN",
    "tag": "BETWEEN",
    "syntax": "colonne BETWEEN borne_min AND borne_max",
    "summary": "Entre deux valeurs d'un intervalle.",
    "description": "Vérifie si une valeur est comprise dans un intervalle fermé (les deux bornes minimale et maximale sont incluses). Équivalent à : (colonne >= borne_min AND colonne <= borne_max).",
    "howToUse": "Attention : la borne inférieure doit obligatoirement être écrite en premier, suivie du mot-clé AND puis de la borne supérieure : WHERE moyenne BETWEEN 10 AND 15.",
    "values": [
      "BETWEEN min AND max",
      "Bornes min et max INCLUSES",
      "Applicable aux nombres, dates et lettres"
    ],
    "code": "SELECT nom, prenom, moyenne FROM Eleve\nWHERE moyenne BETWEEN 10.00 AND 15.00\nORDER BY moyenne ASC;",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne BETWEEN 10.00 AND 15.00;",
    "simTable": "Eleve",
    "simDescription": "Filtre les élèves dont la moyenne est comprise entre 10.00 et 15.00 inclus."
  },
  {
    "id": "sql-op-like",
    "category": "Opérateurs de comparaison",
    "name": "LIKE",
    "tag": "LIKE",
    "syntax": "colonne LIKE 'motif'",
    "summary": "Recherche de motif/valeur.",
    "description": "Recherche textuelle basée sur des caractères génériques (jokers) : le symbole '%' remplace zéro, un ou plusieurs caractères ; le symbole '_' remplace exactement un seul caractère.",
    "howToUse": "Motifs classiques au Bac STI : LIKE 'A%' (commence par A), LIKE '%Ben%' (contient Ben), LIKE '%s' (finit par s), LIKE '_a%' (deuxième lettre est 'a').",
    "values": [
      "'%' : 0, 1 ou plusieurs caractères",
      "'_' : exactement un seul caractère",
      "Ex: nom LIKE 'B%'",
      "Ex: nom LIKE '%Salah%'"
    ],
    "code": "SELECT nom, prenom FROM Eleve\nWHERE nom LIKE 'B%';\n\n-- Recherche contenant le mot 'Salah' :\nSELECT nom, prenom FROM Eleve\nWHERE nom LIKE '%Salah%';",
    "simQuery": "SELECT num_inscr, nom, prenom FROM Eleve WHERE nom LIKE 'B%';",
    "simTable": "Eleve",
    "simDescription": "Recherche tous les élèves dont le nom commence par la lettre 'B' (LIKE 'B%')."
  },
  {
    "id": "sql-op-is",
    "category": "Opérateurs de comparaison",
    "name": "IS",
    "tag": "IS",
    "syntax": "colonne IS NULL  ou  colonne IS NOT NULL",
    "summary": "Filtre les résultats contenant la valeur NULL.",
    "description": "En SQL, la valeur NULL représente l'absence d'information (valeur inconnue ou indéfinie). Elle ne peut jamais être testée avec l'opérateur '=' (écrire '= NULL' renvoie toujours false). On utilise impérativement l'opérateur IS.",
    "howToUse": "Écrire 'colonne IS NULL' pour trouver les champs vides, ou 'colonne IS NOT NULL' pour trouver les champs renseignés.",
    "values": [
      "IS NULL : valeur non renseignée",
      "IS NOT NULL : valeur renseignée",
      "Interdiction d'utiliser '= NULL' !"
    ],
    "code": "SELECT nom, prenom FROM Eleve\nWHERE ville IS NOT NULL;\n\n-- Trouver les élèves sans remarque :\nSELECT nom, prenom FROM Eleve\nWHERE remarque IS NULL;",
    "simQuery": "SELECT nom, prenom, moyenne FROM Eleve WHERE moyenne IS NOT NULL;",
    "simTable": "Eleve",
    "simDescription": "Sélectionne les enregistrements dont la moyenne est bien renseignée (IS NOT NULL)."
  },
  {
    "id": "sql-op-and",
    "category": "Opérateurs logiques",
    "name": "AND",
    "tag": "AND",
    "syntax": "condition1 AND condition2",
    "summary": "ET",
    "description": "Opérateur logique ET. Renvoie vrai si et seulement si toutes les conditions combinées sont simultanément vraies.",
    "howToUse": "Utilisé pour restreindre les résultats en exigeant plusieurs critères simultanés : par exemple, être de la section STI ET avoir une moyenne >= 10.",
    "values": [
      "VRAI AND VRAI = VRAI",
      "VRAI AND FAUX = FAUX",
      "Ex: section = 'STI' AND moyenne >= 10"
    ],
    "code": "SELECT nom, prenom, moyenne FROM Eleve\nWHERE section = 'STI' AND moyenne >= 10.00;",
    "simQuery": "SELECT nom, prenom, section, moyenne FROM Eleve WHERE section = 'STI' AND moyenne >= 10.00;",
    "simTable": "Eleve",
    "simDescription": "Combine deux critères avec AND : section = 'STI' ET moyenne >= 10.00."
  },
  {
    "id": "sql-op-or",
    "category": "Opérateurs logiques",
    "name": "OR",
    "tag": "OR",
    "syntax": "condition1 OR condition2",
    "summary": "OU",
    "description": "Opérateur logique OU. Renvoie vrai dès qu'au moins l'une des conditions est vraie. Renvoie faux uniquement si toutes les conditions sont fausses.",
    "howToUse": "Utilisé pour élargir la sélection à plusieurs alternatives : par exemple, habiter à Tunis OU habiter à Sousse.",
    "values": [
      "VRAI OR FAUX = VRAI",
      "FAUX OR FAUX = FAUX",
      "Ex: ville = 'Tunis' OR ville = 'Sousse'"
    ],
    "code": "SELECT nom, prenom, ville FROM Eleve\nWHERE ville = 'Tunis' OR ville = 'Sousse';",
    "simQuery": "SELECT nom, prenom, ville FROM Eleve WHERE ville = 'Tunis' OR ville = 'Sousse';",
    "simTable": "Eleve",
    "simDescription": "Sélectionne les élèves satisfaisant au moins une condition (ville = 'Tunis' OR ville = 'Sousse')."
  },
  {
    "id": "sql-op-not",
    "category": "Opérateurs logiques",
    "name": "NOT",
    "tag": "NOT",
    "syntax": "NOT condition",
    "summary": "NON",
    "description": "Opérateur logique de négation. Inverse le résultat booléen d'une condition : transforme vrai en faux, et faux en vrai.",
    "howToUse": "Se place devant une condition, ou combiné avec des opérateurs comme NOT IN, NOT BETWEEN, NOT LIKE, IS NOT NULL.",
    "values": [
      "NOT (VRAI) = FAUX",
      "NOT (FAUX) = VRAI",
      "Ex: NOT (section = 'Math')",
      "Ex: nom NOT LIKE 'B%'"
    ],
    "code": "SELECT nom, prenom, section FROM Eleve\nWHERE NOT (section = 'Math');",
    "simQuery": "SELECT nom, prenom, section FROM Eleve WHERE NOT (section = 'Math');",
    "simTable": "Eleve",
    "simDescription": "Exclut les élèves de la section Math grâce à l'opérateur de négation NOT."
  },
  {
    "id": "sql-ldd-create-db",
    "category": "Définition des données",
    "name": "CREATE DATABASE",
    "tag": "CREATE DATABASE",
    "syntax": "CREATE DATABASE nom",
    "summary": "Crée une base de données.",
    "description": "Instruction du Langage de Définition de Données (LDD) qui crée un nouvel espace de stockage de base de données vide avec le nom spécifié.",
    "howToUse": "S'exécute une seule fois au tout début d'un projet informatique ou d'une épreuve pratique avant de créer les tables. En MySQL, on peut ajouter IF NOT EXISTS pour éviter les erreurs si la base existe déjà.",
    "values": [
      "CREATE DATABASE nom_base",
      "Ex: CREATE DATABASE Gestion_Lycee;",
      "Ex: CREATE DATABASE IF NOT EXISTS BacSTI_2026;"
    ],
    "code": "-- Création de la base de données du lycée\nCREATE DATABASE Gestion_Lycee;\nUSE Gestion_Lycee;",
    "simQuery": "SELECT 'Base de données active : Gestion_Lycee' AS Statut;",
    "simTable": "Eleve",
    "simDescription": "Simulation de création d'une nouvelle base de données (CREATE DATABASE)."
  },
  {
    "id": "sql-ldd-drop-db",
    "category": "Définition des données",
    "name": "DROP DATABASE",
    "tag": "DROP DATABASE",
    "syntax": "DROP DATABASE nom",
    "summary": "Supprime une base de données.",
    "description": "Supprime définitivement une base de données existante ainsi que l'intégralité des tables, enregistrements et index qu'elle contient.",
    "howToUse": "Attention : action irréversible ! À manipuler avec précaution.",
    "values": [
      "DROP DATABASE nom_base",
      "Supprime toutes les tables et données",
      "Ex: DROP DATABASE Gestion_Lycee;"
    ],
    "code": "DROP DATABASE Gestion_Lycee;",
    "simQuery": "SELECT 'Base de données supprimée avec succès' AS Statut;",
    "simTable": "Eleve",
    "simDescription": "Supprime définitivement une base de données (DROP DATABASE)."
  },
  {
    "id": "sql-ldd-create-table",
    "category": "Définition des données",
    "name": "CREATE TABLE",
    "tag": "CREATE TABLE",
    "syntax": "CREATE TABLE table1 ( colonne1 type [contrainte], colonne2 type [contrainte], ... [[CONSTRAINT] [nom] [contrainte], ...] )",
    "summary": "Crée une table.",
    "description": "Instruction fondamentale du LDD pour concevoir la structure relationnelle d'une table : liste des colonnes, leurs types de données respectifs, et leurs contraintes d'intégrité (PRIMARY KEY, NOT NULL, DEFAULT, CHECK, FOREIGN KEY).",
    "howToUse": "Ouvrir une parenthèse après le nom de table, déclarer chaque colonne séparée par une virgule, et refermer la parenthèse avec un point-virgule.",
    "values": [
      "CREATE TABLE nom (col1 type1, col2 type2, ...)",
      "Définition des clés primaires et contraintes",
      "Respecter l'ordre : tables mères créées avant les tables filles"
    ],
    "code": "CREATE TABLE Eleve (\n  num_inscr INT PRIMARY KEY,\n  nom VARCHAR(30) NOT NULL,\n  prenom VARCHAR(30) NOT NULL,\n  section VARCHAR(10) DEFAULT 'STI',\n  moyenne DECIMAL(4, 2) CHECK (moyenne BETWEEN 0 AND 20),\n  date_naiss DATE NOT NULL,\n  ville VARCHAR(25) DEFAULT 'Tunis'\n);",
    "simQuery": "SELECT * FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Structure complète de la table Eleve créée avec CREATE TABLE."
  },
  {
    "id": "sql-ldd-alter-add",
    "category": "Définition des données",
    "name": "ALTER TABLE ... ADD",
    "tag": "ALTER TABLE ADD",
    "syntax": "ALTER TABLE table1 ADD colonne type [contrainte]",
    "summary": "Ajoute une colonne à une table.",
    "description": "Permet d'ajouter une nouvelle colonne dans une table existante sans avoir à détruire ni recréer la table, préservant ainsi toutes les données déjà enregistrées.",
    "howToUse": "Spécifier le nom de la table, le mot-clé ADD, puis le nom de la nouvelle colonne avec son type et ses contraintes éventuelles.",
    "values": [
      "ALTER TABLE nom_table ADD nom_colonne type [contraintes]",
      "Ex: ALTER TABLE Eleve ADD email VARCHAR(50);",
      "Ex: ALTER TABLE Eleve ADD mention VARCHAR(15);"
    ],
    "code": "-- Ajouter une colonne 'email' dans la table Eleve\nALTER TABLE Eleve ADD email VARCHAR(50);",
    "simQuery": "SELECT num_inscr, nom, prenom, 'mohamed@lycee.tn' AS email FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Résultat après ajout de la colonne 'email' avec ALTER TABLE ADD."
  },
  {
    "id": "sql-ldd-alter-drop",
    "category": "Définition des données",
    "name": "ALTER TABLE ... DROP colonne",
    "tag": "ALTER TABLE DROP colonne",
    "syntax": "ALTER TABLE table1 DROP colonne",
    "summary": "Supprime une colonne.",
    "description": "Supprime physiquement une colonne existante ainsi que toutes les valeurs qu'elle contenait dans la table.",
    "howToUse": "Écrire ALTER TABLE nom_table DROP COLUMN nom_colonne (le mot-clé COLUMN est optionnel en MySQL).",
    "values": [
      "ALTER TABLE table DROP colonne",
      "Action définitive pour les données de cette colonne",
      "Ex: ALTER TABLE Eleve DROP ville;"
    ],
    "code": "-- Supprimer la colonne 'remarque' de la table Eleve\nALTER TABLE Eleve DROP remarque;",
    "simQuery": "SELECT num_inscr, nom, prenom, moyenne FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Affichage de la table après suppression d'une colonne avec ALTER TABLE DROP."
  },
  {
    "id": "sql-ldd-alter-modify",
    "category": "Définition des données",
    "name": "ALTER TABLE ... ALTER / MODIFY",
    "tag": "ALTER TABLE MODIFY",
    "syntax": "ALTER TABLE table1 ALTER* colonne type  (* on peut utiliser MODIFY au lieu de ALTER)",
    "summary": "Modifie le type d'une colonne.",
    "description": "Modifie le type de données ou la taille maximale d'une colonne existante (par exemple agrandir un VARCHAR(20) en VARCHAR(40)). En MySQL, la syntaxe la plus utilisée en TP au Bac STI est MODIFY.",
    "howToUse": "Écrire ALTER TABLE nom_table MODIFY nom_colonne nouveau_type. Attention : si la table contient déjà des données, le nouveau type doit être compatible.",
    "values": [
      "ALTER TABLE table MODIFY colonne nouveau_type",
      "Équivalent officiel : ALTER colonne type",
      "Ex: ALTER TABLE Eleve MODIFY nom VARCHAR(45) NOT NULL;"
    ],
    "code": "-- Agrandir la taille du champ 'nom' de 30 à 45 caractères\nALTER TABLE Eleve MODIFY nom VARCHAR(45) NOT NULL;",
    "simQuery": "SELECT num_inscr, nom, prenom FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Modification du type et de la taille d'une colonne (ALTER / MODIFY)."
  },
  {
    "id": "sql-ldd-alter-rename",
    "category": "Définition des données",
    "name": "ALTER TABLE ... RENAME / CHANGE",
    "tag": "ALTER TABLE RENAME / CHANGE",
    "syntax": "ALTER TABLE table1 RENAME** nom1 TO nom2  (** on peut utiliser CHANGE au lieu de RENAME)",
    "summary": "Modifie le nom d'une colonne.",
    "description": "Permet de renommer une colonne existante. L'annexe officielle précise qu'on peut utiliser RENAME COLUMN ancien_nom TO nouveau_nom ou CHANGE ancien_nom nouveau_nom type.",
    "howToUse": "Syntaxe 1 : ALTER TABLE table RENAME COLUMN ancien TO nouveau;\nSyntaxe 2 (MySQL classique) : ALTER TABLE table CHANGE ancien nouveau type;",
    "values": [
      "ALTER TABLE table RENAME col_ancien TO col_nouveau",
      "ALTER TABLE table CHANGE col_ancien col_nouveau type",
      "Ex: ALTER TABLE Eleve RENAME COLUMN moyenne TO moyenne_bac;"
    ],
    "code": "-- Renommer la colonne 'moyenne' en 'moyenne_bac'\nALTER TABLE Eleve RENAME COLUMN moyenne TO moyenne_bac;\n\n-- Variante MySQL avec CHANGE :\nALTER TABLE Eleve CHANGE moyenne moyenne_bac DECIMAL(4, 2);",
    "simQuery": "SELECT num_inscr, nom, moyenne AS moyenne_bac FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Renommage d'une colonne de table (RENAME / CHANGE)."
  },
  {
    "id": "sql-ldd-alter-add-constraint",
    "category": "Définition des données",
    "name": "ALTER TABLE ... ADD CONSTRAINT",
    "tag": "ALTER TABLE ADD CONSTRAINT",
    "syntax": "ALTER TABLE table1 ADD CONSTRAINT [nom] contrainte",
    "summary": "Ajoute une contrainte sur une colonne d'une table.",
    "description": "Permet d'ajouter a posteriori une contrainte d'intégrité nommée (PRIMARY KEY, UNIQUE, CHECK ou FOREIGN KEY) sur une table déjà existante.",
    "howToUse": "Donner un nom explicite à la contrainte pour pouvoir la gérer facilement plus tard : par exemple, 'chk_moy' ou 'fk_inscr'.",
    "values": [
      "ADD CONSTRAINT nom PRIMARY KEY (...)",
      "ADD CONSTRAINT nom FOREIGN KEY (...) REFERENCES ...",
      "ADD CONSTRAINT nom CHECK (...)"
    ],
    "code": "-- Ajouter une clé étrangère avec contrainte nommée\nALTER TABLE Note\nADD CONSTRAINT fk_note_eleve\nFOREIGN KEY (num_inscr) REFERENCES Eleve(num_inscr)\nON DELETE CASCADE;\n\n-- Ajouter une contrainte CHECK :\nALTER TABLE Eleve\nADD CONSTRAINT chk_age\nCHECK (age >= 15 AND age <= 30);",
    "simQuery": "SELECT 'Contrainte ajoutée avec succès sur la table' AS Resultat;",
    "simTable": "Eleve",
    "simDescription": "Ajout d'une contrainte d'intégrité nommée (ADD CONSTRAINT)."
  },
  {
    "id": "sql-ldd-alter-drop-constraint",
    "category": "Définition des données",
    "name": "ALTER TABLE ... DROP CONSTRAINT",
    "tag": "ALTER TABLE DROP CONSTRAINT",
    "syntax": "ALTER TABLE table1 DROP CONSTRAINT nom",
    "summary": "Supprime une contrainte.",
    "description": "Supprime une contrainte d'intégrité existante par son nom (par exemple supprimer une règle CHECK devenue obsolète). Pour une clé primaire sans nom : ALTER TABLE table DROP PRIMARY KEY.",
    "howToUse": "Spécifier le nom attribué à la contrainte lors de sa création : ALTER TABLE Eleve DROP CONSTRAINT chk_age.",
    "values": [
      "ALTER TABLE table DROP CONSTRAINT nom_contrainte",
      "Pour clé primaire : ALTER TABLE table DROP PRIMARY KEY;",
      "Pour clé étrangère : ALTER TABLE table DROP FOREIGN KEY nom_cle;"
    ],
    "code": "-- Supprimer la contrainte CHECK 'chk_age'\nALTER TABLE Eleve DROP CONSTRAINT chk_age;",
    "simQuery": "SELECT 'Contrainte supprimée avec succès' AS Resultat;",
    "simTable": "Eleve",
    "simDescription": "Suppression d'une contrainte d'intégrité (DROP CONSTRAINT)."
  },
  {
    "id": "sql-ldd-alter-enable-disable",
    "category": "Définition des données",
    "name": "ALTER TABLE ... ENABLE / DISABLE CONSTRAINT",
    "tag": "ENABLE / DISABLE CONSTRAINT",
    "syntax": "ALTER TABLE table1 ENABLE/ DISABLE CONSTRAINT nom",
    "summary": "Active/Désactive une contrainte.",
    "description": "Permet de désactiver temporairement la vérification d'une contrainte d'intégrité (par exemple lors de chargements massifs de données de test) sans devoir la supprimer, puis de la réactiver ensuite.",
    "howToUse": "Syntaxe officielle de l'annexe : ALTER TABLE table1 DISABLE CONSTRAINT nom; puis ALTER TABLE table1 ENABLE CONSTRAINT nom;",
    "values": [
      "DISABLE CONSTRAINT : désactivation temporaire",
      "ENABLE CONSTRAINT : réactivation et vérification",
      "Mentionné textuellement dans l'annexe Bac STI"
    ],
    "code": "-- Désactiver la contrainte pour insérer des données de test\nALTER TABLE Eleve DISABLE CONSTRAINT chk_age;\n\n-- Réactiver la contrainte une fois terminé\nALTER TABLE Eleve ENABLE CONSTRAINT chk_age;",
    "simQuery": "SELECT 'État contrainte : ACTIVÉE (ENABLE)' AS Statut;",
    "simTable": "Eleve",
    "simDescription": "Activation / Désactivation d'une contrainte (ENABLE / DISABLE)."
  },
  {
    "id": "sql-ldd-drop-table",
    "category": "Définition des données",
    "name": "DROP TABLE",
    "tag": "DROP TABLE",
    "syntax": "DROP TABLE table1",
    "summary": "Supprime une table.",
    "description": "Supprime définitivement la table spécifiée, sa structure relationnelle et l'intégralité de ses enregistrements.",
    "howToUse": "Attention : si la table est référencée par une clé étrangère (table mère), il faut d'abord supprimer la table fille ou retirer la contrainte de clé étrangère avant de pouvoir la supprimer.",
    "values": [
      "DROP TABLE nom_table",
      "Action irréversible",
      "Ordre de suppression : supprimer les tables filles avant les tables mères"
    ],
    "code": "-- Supprimer la table temporaire 'Test'\nDROP TABLE Test;",
    "simQuery": "SELECT 'Table supprimée avec succès' AS Statut;",
    "simTable": "Eleve",
    "simDescription": "Suppression complète d'une table relationnelle (DROP TABLE)."
  },
  {
    "id": "sql-fn-date",
    "category": "Fonctions définies sur le type date",
    "name": "DATE()",
    "tag": "DATE()",
    "syntax": "DATE(expression)",
    "summary": "Retourne une date extraite à partir d'une chaîne contenant une valeur au format DATE ou DATETIME.",
    "description": "Extrait la portion 'Date' (AAAA-MM-JJ) à partir d'une valeur ou chaîne représentant un DATETIME ou un horodatage avec heure.",
    "howToUse": "Très utile lorsqu'une colonne est de type DATETIME ('2026-11-11 14:30:00') et que l'on souhaite uniquement comparer ou afficher la date '2026-11-11'.",
    "values": [
      "DATE('AAAA-MM-JJ HH:MM:SS') -> 'AAAA-MM-JJ'",
      "Ex: DATE(NOW())",
      "Ex: DATE('2026-11-11 12:45:00') -> '2026-11-11'"
    ],
    "code": "SELECT nom, DATE(NOW()) AS date_aujourdhui\nFROM Eleve\nLIMIT 3;",
    "simQuery": "SELECT nom, prenom, DATE(NOW()) AS date_jour FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Extrait la date du jour sans les heures à l'aide de DATE(NOW())."
  },
  {
    "id": "sql-fn-day",
    "category": "Fonctions définies sur le type date",
    "name": "DAY()",
    "tag": "DAY()",
    "syntax": "DAY(date)",
    "summary": "Retourne le jour.",
    "description": "Extrait le numéro du jour du mois (valeur entière de 1 à 31) à partir d'une date donnée.",
    "howToUse": "S'écrit DAY(colonne_date). Équivalent à DAYOFMONTH(date) en MySQL.",
    "values": [
      "DAY(date) -> nombre entier (1 à 31)",
      "Ex: DAY('2007-03-12') -> 12",
      "Ex: DAY(NOW())"
    ],
    "code": "SELECT nom, prenom, date_naiss, DAY(date_naiss) AS jour_naissance\nFROM Eleve;",
    "simQuery": "SELECT nom, prenom, date_naiss, DAY(date_naiss) AS jour FROM Eleve;",
    "simTable": "Eleve",
    "simDescription": "Extrait le numéro du jour de naissance pour chaque élève avec DAY()."
  },
  {
    "id": "sql-fn-month",
    "category": "Fonctions définies sur le type date",
    "name": "MONTH()",
    "tag": "MONTH()",
    "syntax": "MONTH(date)",
    "summary": "Retourne le mois.",
    "description": "Extrait le numéro du mois (valeur entière de 1 pour Janvier à 12 pour Décembre) à partir d'une date.",
    "howToUse": "Permet de filtrer des événements survenus pendant un mois particulier, par exemple les élèves nés au mois de mars : WHERE MONTH(date_naiss) = 3.",
    "values": [
      "MONTH(date) -> nombre entier (1 à 12)",
      "Ex: MONTH('2007-03-12') -> 3",
      "Ex: MONTH(NOW())"
    ],
    "code": "SELECT nom, prenom, date_naiss, MONTH(date_naiss) AS mois_naissance\nFROM Eleve\nWHERE MONTH(date_naiss) = 3;",
    "simQuery": "SELECT nom, prenom, date_naiss, MONTH(date_naiss) AS mois FROM Eleve WHERE MONTH(date_naiss) = 3;",
    "simTable": "Eleve",
    "simDescription": "Filtre les élèves nés au mois de mars (MONTH(date_naiss) = 3)."
  },
  {
    "id": "sql-fn-year",
    "category": "Fonctions définies sur le type date",
    "name": "YEAR()",
    "tag": "YEAR()",
    "syntax": "YEAR(date)",
    "summary": "Retourne l'année.",
    "description": "Extrait l'année sur 4 chiffres (ex: 2007, 2026) à partir d'une date valide.",
    "howToUse": "Classique absolu du Bac STI pour calculer l'âge d'un élève : YEAR(NOW()) - YEAR(date_naiss).",
    "values": [
      "YEAR(date) -> entier sur 4 chiffres",
      "Ex: YEAR('2007-03-12') -> 2007",
      "Ex: YEAR(NOW()) -> 2026"
    ],
    "code": "SELECT nom, prenom, date_naiss,\n  YEAR(NOW()) - YEAR(date_naiss) AS age\nFROM Eleve;",
    "simQuery": "SELECT nom, prenom, date_naiss, YEAR(NOW()) - YEAR(date_naiss) AS age FROM Eleve;",
    "simTable": "Eleve",
    "simDescription": "Calcule l'âge des élèves grâce à la formule Bac STI : YEAR(NOW()) - YEAR(date_naiss)."
  },
  {
    "id": "sql-fn-now",
    "category": "Fonctions définies sur le type date",
    "name": "NOW()",
    "tag": "NOW()",
    "syntax": "NOW()",
    "summary": "Retourne la date et l'heure courantes.",
    "description": "Fonction système sans argument qui renvoie la date et l'heure actuelles de l'ordinateur/serveur au format 'AAAA-MM-JJ HH:MM:SS'.",
    "howToUse": "S'emploie sans paramètre entre parenthèses. Très souvent combinée avec YEAR(NOW()) pour les calculs d'âge ou DEFAULT NOW() pour les dates d'enregistrement.",
    "values": [
      "NOW()",
      "Renvoie 'AAAA-MM-JJ HH:MM:SS'",
      "Ex: SELECT NOW();"
    ],
    "code": "SELECT NOW() AS date_heure_courante,\n       YEAR(NOW()) AS annee_courante;",
    "simQuery": "SELECT NOW() AS date_et_heure_actuelle, YEAR(NOW()) AS annee_actuelle;",
    "simTable": "Eleve",
    "simDescription": "Appel de la fonction système NOW() retournant la date et l'heure actuelles."
  },
  {
    "id": "sql-fn-adddate",
    "category": "Fonctions définies sur le type date",
    "name": "ADDDATE()",
    "tag": "ADDDATE()",
    "syntax": "ADDDATE(date, INTERVAL valeur unité)  ou  ADDDATE(date, nb_jours)",
    "summary": "Ajoute un nombre de jours ou un intervalle de temps à une date.",
    "description": "Effectue une addition arithmétique sur une date en lui ajoutant soit un nombre entier de jours (syntaxe simplifiée), soit un intervalle explicite (ex: INTERVAL 15 DAY, INTERVAL 3 MONTH, INTERVAL 1 YEAR).",
    "howToUse": "Syntaxe 1 : ADDDATE(date, 7) ajoute 7 jours.\nSyntaxe 2 : ADDDATE(date, INTERVAL 1 YEAR) ajoute une année complète.",
    "values": [
      "ADDDATE(date, nb_jours)",
      "ADDDATE(date, INTERVAL N DAY/MONTH/YEAR)",
      "Ex: ADDDATE('2026-11-11', 10) -> '2026-11-21'"
    ],
    "code": "-- Ajouter 15 jours à la date du jour\nSELECT NOW() AS aujourdhui,\n       ADDDATE(NOW(), 15) AS dans_15_jours;\n\n-- Ajouter 1 an avec INTERVAL :\nSELECT ADDDATE('2007-06-15', INTERVAL 1 YEAR) AS date_plus_1an;",
    "simQuery": "SELECT nom, date_naiss, ADDDATE(date_naiss, 365) AS naiss_plus_1an FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Ajout d'un intervalle de temps à une date avec ADDDATE()."
  },
  {
    "id": "sql-fn-datediff",
    "category": "Fonctions définies sur le type date",
    "name": "DATEDIFF()",
    "tag": "DATEDIFF()",
    "syntax": "DATEDIFF(date1, date2)",
    "summary": "Retourne la différence entre deux dates en jours.",
    "description": "Calcule le nombre entier de jours écoulés entre deux dates (date1 - date2). Si date1 est postérieure à date2, le résultat est positif ; si date1 est antérieure, le résultat est négatif.",
    "howToUse": "Toujours placer la date la plus récente en premier paramètre (ex: DATEDIFF(NOW(), date_naiss)) pour obtenir un nombre de jours positif.",
    "values": [
      "DATEDIFF(date1, date2) -> nombre de jours entier",
      "Ex: DATEDIFF('2026-11-20', '2026-11-10') -> 10 jours",
      "Ex: DATEDIFF(NOW(), date_naiss)"
    ],
    "code": "SELECT nom, prenom, date_naiss,\n       DATEDIFF(NOW(), date_naiss) AS jours_vecus\nFROM Eleve\nLIMIT 3;",
    "simQuery": "SELECT nom, prenom, date_naiss, DATEDIFF(NOW(), date_naiss) AS jours_ecoules FROM Eleve LIMIT 3;",
    "simTable": "Eleve",
    "simDescription": "Calcul du nombre de jours de différence entre deux dates (DATEDIFF)."
  },
  {
    "id": "sql-fn-avg",
    "category": "Fonctions d'agrégation",
    "name": "AVG()",
    "tag": "AVG()",
    "syntax": "AVG(colonne_numerique)",
    "summary": "Retourne la moyenne.",
    "description": "Fonction d'agrégation (statistique) calculant la moyenne arithmétique de toutes les valeurs numériques d'une colonne sélectionnée. Les valeurs NULL sont automatiquement ignorées.",
    "howToUse": "S'utilise dans la clause SELECT. Peut être combinée avec WHERE pour filtrer les lignes à inclure, ou avec GROUP BY pour calculer la moyenne par groupe (ex: par section ou par classe).",
    "values": [
      "AVG(colonne)",
      "Ignore les valeurs NULL",
      "Ex: SELECT AVG(moyenne) FROM Eleve;",
      "Ex: SELECT section, AVG(moyenne) FROM Eleve GROUP BY section;"
    ],
    "code": "-- Moyenne générale des élèves de la section STI\nSELECT AVG(moyenne) AS moyenne_generale_sti\nFROM Eleve\nWHERE section = 'STI';",
    "simQuery": "SELECT section, AVG(moyenne) AS moyenne_section FROM Eleve GROUP BY section;",
    "simTable": "Eleve",
    "simDescription": "Calcule la moyenne arithmétique (AVG) groupée par section."
  },
  {
    "id": "sql-fn-count",
    "category": "Fonctions d'agrégation",
    "name": "COUNT()",
    "tag": "COUNT()",
    "syntax": "COUNT(*)  ou  COUNT(colonne)  ou  COUNT(DISTINCT colonne)",
    "summary": "Retourne le nombre d'enregistrements.",
    "description": "Compte le nombre de lignes répondant aux critères de la requête. COUNT(*) compte toutes les lignes sans exception ; COUNT(colonne) compte les lignes où la colonne n'est pas NULL ; COUNT(DISTINCT colonne) compte les valeurs distinctes sans doublon.",
    "howToUse": "La formule la plus fréquente au Bac STI : SELECT COUNT(*) FROM Eleve WHERE moyenne >= 10; pour connaître le nombre d'élèves admis.",
    "values": [
      "COUNT(*) : compte toutes les lignes",
      "COUNT(colonne) : compte les valeurs non nulles",
      "COUNT(DISTINCT col) : compte les valeurs uniques"
    ],
    "code": "-- Nombre total d'élèves admis (moyenne >= 10)\nSELECT COUNT(*) AS nb_admis\nFROM Eleve\nWHERE moyenne >= 10.00;",
    "simQuery": "SELECT COUNT(*) AS total_eleves, COUNT(CASE WHEN moyenne >= 10 THEN 1 END) AS nb_admis FROM Eleve;",
    "simTable": "Eleve",
    "simDescription": "Compte le nombre total d'enregistrements avec COUNT(*)."
  },
  {
    "id": "sql-fn-max",
    "category": "Fonctions d'agrégation",
    "name": "MAX()",
    "tag": "MAX()",
    "syntax": "MAX(colonne)",
    "summary": "Retourne le maximum.",
    "description": "Renvoie la valeur la plus élevée parmi toutes les valeurs d'une colonne (la meilleure note, le prix le plus cher, ou la date la plus récente).",
    "howToUse": "S'applique aux colonnes numériques, monétaires ou temporelles. Exemple classique : SELECT MAX(moyenne) FROM Eleve; pour trouver la meilleure moyenne de la promotion.",
    "values": [
      "MAX(colonne)",
      "Ex: MAX(moyenne)",
      "Ex: MAX(date_naiss) -> le plus jeune"
    ],
    "code": "-- Trouver la meilleure moyenne de la section STI\nSELECT MAX(moyenne) AS meilleure_moyenne\nFROM Eleve\nWHERE section = 'STI';",
    "simQuery": "SELECT MAX(moyenne) AS meilleure_moyenne, MIN(moyenne) AS plus_faible_moyenne FROM Eleve;",
    "simTable": "Eleve",
    "simDescription": "Détermine la note maximale (MAX) enregistrée dans la classe."
  },
  {
    "id": "sql-fn-min",
    "category": "Fonctions d'agrégation",
    "name": "MIN()",
    "tag": "MIN()",
    "syntax": "MIN(colonne)",
    "summary": "Retourne le minimum.",
    "description": "Renvoie la valeur la plus basse parmi toutes les valeurs de la colonne sélectionnée (la note la plus faible, le prix le moins cher, ou la date la plus ancienne).",
    "howToUse": "S'applique aux nombres, dates ou chaînes. Exemple : SELECT MIN(moyenne) FROM Eleve; pour trouver la note plancher.",
    "values": [
      "MIN(colonne)",
      "Ex: MIN(moyenne)",
      "Ex: MIN(date_naiss) -> le plus âgé"
    ],
    "code": "-- Trouver la plus faible moyenne enregistrée\nSELECT MIN(moyenne) AS moyenne_minimale\nFROM Eleve;",
    "simQuery": "SELECT MIN(moyenne) AS moyenne_minimale FROM Eleve;",
    "simTable": "Eleve",
    "simDescription": "Trouve la note minimale (MIN) parmi tous les élèves."
  },
  {
    "id": "sql-fn-sum",
    "category": "Fonctions d'agrégation",
    "name": "SUM()",
    "tag": "SUM()",
    "syntax": "SUM(colonne_numerique)",
    "summary": "Retourne la somme.",
    "description": "Additionne et totalise l'ensemble des valeurs numériques d'une colonne. Ignore automatiquement les valeurs NULL.",
    "howToUse": "S'emploie pour totaliser des montants, des coefficients ou des points : par exemple, calculer le total des coefficients d'un ensemble de matières : SELECT SUM(coef) FROM Matiere.",
    "values": [
      "SUM(colonne_numerique)",
      "Ignore les valeurs NULL",
      "Ex: SUM(coef)",
      "Ex: SUM(montant)"
    ],
    "code": "-- Totaliser les coefficients de toutes les matières obligatoires\nSELECT SUM(coef) AS total_coefficients\nFROM Matiere;",
    "simQuery": "SELECT SUM(coef) AS total_coefficients_matieres FROM Matiere;",
    "simTable": "Matiere",
    "simDescription": "Calcule la somme totale (SUM) des coefficients des matières."
  },
  {
    "id": "sql-lmd-select",
    "category": "Manipulation des données",
    "name": "SELECT",
    "tag": "SELECT",
    "syntax": "SELECT [DISTINCT] expression [, col, ... ou *] [[AS] alias]\nFROM table1 [[AS] alias] [, table2, ...]\n[WHERE condition]\n[GROUP BY critère]\n[HAVING condition]\n[ORDER BY expression [ASC/DESC]]",
    "summary": "Spécification des colonnes du résultat, des tables, Condition, Organisation du résultat en groupes, Application d'un filtre, Tri du résultat.",
    "description": "Commande centrale d'interrogation du Langage de Manipulation de Données (LMD). Permet d'extraire, filtrer, regrouper et trier les données d'une ou plusieurs tables relationnelles selon les 6 clauses officielles de l'annexe du Bac STI :\n• SELECT : choix des colonnes projetées (ou DISTINCT pour éliminer les doublons)\n• FROM : choix des tables sources et jointures\n• WHERE : condition de filtrage des lignes\n• GROUP BY : regroupement par critère (souvent avec fonctions d'agrégation)\n• HAVING : condition de filtrage appliquée aux groupes\n• ORDER BY : tri croissant (ASC par défaut) ou décroissant (DESC).",
    "howToUse": "L'ordre des clauses doit être scrupuleusement respecté : SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY.",
    "values": [
      "SELECT : projection des colonnes",
      "FROM : tables sources",
      "WHERE : filtre sur lignes",
      "GROUP BY : regroupement",
      "HAVING : filtre sur groupes",
      "ORDER BY [ASC/DESC] : tri"
    ],
    "code": "-- 1. Requête simple avec tri :\nSELECT nom, prenom, moyenne\nFROM Eleve\nWHERE section = 'STI'\nORDER BY moyenne DESC;\n\n-- 2. Requête avec agrégation et regroupement :\nSELECT ville, COUNT(*) AS nb_eleves, AVG(moyenne) AS moy_ville\nFROM Eleve\nGROUP BY ville\nHAVING COUNT(*) >= 1\nORDER BY moy_ville DESC;",
    "simQuery": "SELECT nom, prenom, section, moyenne, ville FROM Eleve WHERE moyenne >= 10.00 ORDER BY moyenne DESC;",
    "simTable": "Eleve",
    "simDescription": "Interrogation complète avec sélection, condition WHERE et tri ORDER BY DESC."
  },
  {
    "id": "sql-lmd-insert",
    "category": "Manipulation des données",
    "name": "INSERT INTO",
    "tag": "INSERT INTO",
    "syntax": "INSERT INTO table [(liste colonnes)] VALUES (liste valeurs)",
    "summary": "Insertion des données dans une table.",
    "description": "Commande LMD qui insère une nouvelle ligne (enregistrement) dans une table. Les valeurs doivent respecter l'ordre et le type des colonnes déclarées.",
    "howToUse": "Deux manières équivalentes au Bac STI :\n1. En précisant les colonnes : INSERT INTO Eleve (num_inscr, nom, prenom, section, moyenne, date_naiss, ville) VALUES (107, 'Bouazizi', 'Amine', 'STI', 14.50, '2007-08-22', 'Kairouan');\n2. Sans préciser les colonnes : INSERT INTO Eleve VALUES (107, 'Bouazizi', 'Amine', 'STI', 14.50, '2007-08-22', 'Kairouan');",
    "values": [
      "INSERT INTO table (col1, col2) VALUES (val1, val2)",
      "Chaînes et dates entre apostrophes",
      "Nombres sans guillemets",
      "Respecter les contraintes (PK, NOT NULL, CHECK)"
    ],
    "code": "INSERT INTO Eleve (num_inscr, nom, prenom, section, moyenne, date_naiss, ville)\nVALUES (107, 'Bouazizi', 'Amine', 'STI', 14.50, '2007-08-22', 'Kairouan');",
    "simQuery": "SELECT * FROM Eleve WHERE num_inscr = 101;",
    "simTable": "Eleve",
    "simDescription": "Exemple d'enregistrement prêt à être inséré ou consulté dans la table Eleve."
  },
  {
    "id": "sql-lmd-update",
    "category": "Manipulation des données",
    "name": "UPDATE",
    "tag": "UPDATE",
    "syntax": "UPDATE table1 SET colonne = expression [WHERE condition]",
    "summary": "Modification des valeurs d'une colonne.",
    "description": "Commande LMD permettant de modifier le contenu d'une ou plusieurs colonnes pour les lignes sélectionnées par la clause WHERE.",
    "howToUse": "ATTENTION : Si la clause WHERE est omise, TOUTES les lignes de la table seront modifiées sans avertissement ! Au Bac STI, la clause WHERE est quasiment toujours obligatoire.",
    "values": [
      "UPDATE table SET col = nouvelle_valeur WHERE condition",
      "Possibilité de modifier plusieurs colonnes séparées par une virgule",
      "Ex: UPDATE Eleve SET moyenne = 16.00 WHERE num_inscr = 101;"
    ],
    "code": "-- Corriger la moyenne d'un élève après un recomptage\nUPDATE Eleve\nSET moyenne = 16.25\nWHERE num_inscr = 101;\n\n-- Mettre à jour plusieurs colonnes à la fois :\nUPDATE Eleve\nSET section = 'STI', ville = 'Sousse'\nWHERE num_inscr = 104;",
    "simQuery": "SELECT num_inscr, nom, prenom, moyenne FROM Eleve WHERE num_inscr = 101;",
    "simTable": "Eleve",
    "simDescription": "Modification ciblée d'une ligne avec UPDATE ... SET ... WHERE."
  },
  {
    "id": "sql-lmd-delete",
    "category": "Manipulation des données",
    "name": "DELETE FROM",
    "tag": "DELETE FROM",
    "syntax": "DELETE FROM table1 [WHERE condition]",
    "summary": "Suppression des enregistrements d'une table.",
    "description": "Commande LMD permettant d'effacer une ou plusieurs lignes d'une table selon une condition spécifiée dans la clause WHERE. Contrairement à DROP TABLE, DELETE supprime les données mais conserve intacte la structure de la table.",
    "howToUse": "ATTENTION : Sans clause WHERE, DELETE FROM table1 vide entièrement la table ! Toujours cibler les lignes à effacer avec WHERE.",
    "values": [
      "DELETE FROM table WHERE condition",
      "Conserve la structure de la table",
      "Ex: DELETE FROM Eleve WHERE num_inscr = 106;",
      "Ex: DELETE FROM Eleve WHERE moyenne < 08.00;"
    ],
    "code": "-- Supprimer l'élève dont le numéro est 106\nDELETE FROM Eleve\nWHERE num_inscr = 106;\n\n-- Supprimer tous les élèves ajournés avec moyenne < 8 :\nDELETE FROM Eleve\nWHERE moyenne < 08.00;",
    "simQuery": "SELECT num_inscr, nom, prenom, moyenne FROM Eleve WHERE moyenne >= 10.00;",
    "simTable": "Eleve",
    "simDescription": "Suppression ciblée de lignes dans une table (DELETE FROM ... WHERE)."
  }
]
};