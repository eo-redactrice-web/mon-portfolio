# Portfolio — Rédactrice web SEO cybersécurité

Site statique HTML / CSS / JS vanilla, prêt à déployer sur GitHub Pages.

---

## 📁 Structure du projet

```
portfolio/
├── index.html               ← Page principale (toutes les sections)
├── assets/
│   ├── css/style.css        ← Design system + tous les styles
│   ├── js/script.js         ← Nav mobile, scroll reveal, form, etc.
│   └── img/                 ← Vos visuels (placeholder, og-image…)
├── robots.txt
├── sitemap.xml
├── .nojekyll                ← Indique à GitHub Pages de ne pas utiliser Jekyll
└── README.md
```

---

## ✏️ Avant la mise en ligne — les choses à personnaliser

Tout ce qui doit être remplacé est marqué dans le code par `Emmanuelle Ouine`, `votre-domaine`, `eo-redactrice-web` ou `emmanuelle-ouine-redactrice-web-seo`. Faites une recherche globale (`Ctrl/Cmd + F` dans VS Code) sur ces chaînes et remplacez-les.

### Dans `index.html`

| Élément à modifier | Où le trouver |
|---|---|
| Titre, description, OG | Balises `<title>`, `<meta name="description">`, `<meta property="og:*">` |
| Nom dans le logo | `.logo-name` (header + footer) |
| URL canonique | `<link rel="canonical">` et `og:url` |
| JSON-LD | Bloc `<script type="application/ld+json">` — emmanuelle ouine, votre LinkedIn, votre GitHub |
| Email de contact | Section Contact + footer |
| Liens LinkedIn / GitHub | Section Contact + footer |
| Études de cas | Section `#portfolio` — remplacer par vos vrais cas (anonymisés ou non) |
| Articles | Section `#articles` — remplacer les `href="#"` par vos URL réelles |
| Stats du hero | `.hero-stats` |
| Disponibilité (status bar) | `.status-text` en haut du `<body>` |

### Dans `assets/js/script.js`

Ligne marquée `// IMPORTANT : remplacer ci-dessous par votre vraie adresse` — mettez votre email pro pour le formulaire (mailto).

### Image Open Graph

Créez une image **1200×630 px** au format PNG ou JPG, déposez-la dans `assets/img/og-image.png`. C'est l'image qui s'affiche quand on partage votre site sur LinkedIn, Slack, X, etc.

---

## 🚀 Déploiement sur GitHub Pages

### Étape 1 — Créer le dépôt

1. Créez un nouveau dépôt public sur GitHub. Deux options :
   - **`eo-redactrice-web.github.io`** → le site sera accessible à `https://eo-redactrice-web.github.io/` (recommandé).
   - **`portfolio`** ou autre nom → le site sera à `https://eo-redactrice-web.github.io/portfolio/`.

### Étape 2 — Pousser les fichiers

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/eo-redactrice-web/eo-redactrice-web.github.io.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages

1. Allez dans **Settings → Pages** sur GitHub.
2. Source : **Deploy from a branch**.
3. Branch : **main**, dossier : **/(root)**.
4. Sauvegardez. Quelques minutes plus tard, votre site est en ligne.

### Étape 4 — Domaine personnalisé (optionnel mais recommandé)

Un domaine du type `votre-nom.fr` fait beaucoup plus pro qu'une URL `github.io`.

1. Achetez un domaine (OVH, Gandi, Cloudflare Registrar…).
2. Dans votre dépôt, créez un fichier `CNAME` à la racine contenant uniquement votre domaine, ex. `votre-nom.fr`.
3. Chez votre registrar, ajoutez un enregistrement DNS de type `CNAME` pointant `www` vers `eo-redactrice-web.github.io`, et idéalement un A record pour la racine vers les IP de GitHub Pages.
4. Dans **Settings → Pages → Custom domain**, entrez le domaine. Activez **Enforce HTTPS**.

---

## ✉️ Brancher un vrai formulaire de contact

Par défaut, le formulaire ouvre le client mail de l'utilisateur (`mailto:`). C'est simple mais limité. Pour une vraie soumission silencieuse :

### Option 1 — Formspree (gratuit jusqu'à 50 envois/mois)
1. Créez un compte sur [formspree.io](https://formspree.io).
2. Récupérez votre URL de formulaire.
3. Dans `index.html`, ajoutez `action="https://formspree.io/f/votre-id"` et `method="POST"` sur la balise `<form>`.
4. Supprimez le `e.preventDefault()` dans `script.js` (ou laissez Formspree gérer via JS).

### Option 2 — Web3Forms (gratuit, illimité)
Très simple : ajoutez juste un champ caché `<input type="hidden" name="access_key" value="VOTRE-CLE">` et postez sur `https://api.web3forms.com/submit`.

### Option 3 — Cloudflare Workers + Resend / SendGrid
Pour les plus techniques : permet une maîtrise totale (anti-spam, validation, logs).

---

## 🔍 SEO — ce qui est déjà fait

- Balises `title`, `description`, `og:*`, `twitter:*` ✅
- Données structurées JSON-LD (`Person` + `ProfessionalService`) ✅
- HTML sémantique (`<main>`, `<section>`, `<article>`, `<nav>`) ✅
- Hiérarchie H1 → H2 → H3 cohérente ✅
- Attributs `alt`, `aria-*` et `lang="fr"` ✅
- `robots.txt` et `sitemap.xml` ✅

### À faire après mise en ligne
1. Soumettre le sitemap à **Google Search Console** : `https://votre-domaine.fr/sitemap.xml`.
2. Mettre à jour `sitemap.xml` avec la vraie URL et la date de dernière modification.
3. Vérifier la vitesse via **PageSpeed Insights**. Le site est très léger nativement, vous devriez être au-dessus de 95.
4. Si vous publiez des articles complets sur le site, créer une page par article et les ajouter au sitemap.

---

## 🎨 Personnaliser le design

Tout le design est piloté par des **variables CSS** dans `:root` (en haut de `style.css`).

```css
--color-bg: #08090b;          /* fond principal */
--color-accent: #5eead4;      /* couleur d'accent — la seule "vive" */
--font-sans: 'Geist', ...;    /* police principale */
```

Modifier `--color-accent` change instantanément la couleur des CTA, des labels et des chips. Modifier `--font-sans` change toute la typographie.

### Suggestions d'accents alternatifs (palette cyber-credible)
- `#5eead4` (menthe — choix actuel, équilibré)
- `#67e8f9` (cyan plus froid, plus "infra")
- `#a3e635` (vert citron, plus offensif)
- `#fbbf24` (ambre, casse les codes, premium éditorial)

---

## 🛠️ Améliorations futures suggérées

Par ordre d'impact :

1. **Blog intégré** — héberger vos articles directement sur le portfolio (`/articles/nis2/`, `/articles/dora/`…). Plus de PageRank concentré sur votre domaine, meilleure preuve d'expertise. Faisable en HTML statique ou avec un générateur léger (Eleventy, Astro).
2. **Page dédiée par étude de cas** — chaque case study mérite sa page longue (`/cas/saas-xdr/`). C'est le contenu qui convertit le mieux en B2B.
3. **Témoignages clients** — une section avec 2 à 4 quotes de clients (avec photo + poste). Mettre à jour le JSON-LD avec `Review` pour le SEO.
4. **Logos clients** — bandeau discret en bas du hero, façon Stripe. Demander l'autorisation aux clients.
5. **Mode clair** — un toggle pour les utilisateurs qui préfèrent. Le design est prévu pour, il suffit d'ajouter une seconde série de variables CSS dans `[data-theme="light"]`.
6. **Analytics respectueuses** — Plausible ou Umami (RGPD-friendly, pas de bannière cookies). Évitez Google Analytics, ça envoie un mauvais signal à votre audience cybersécurité.
7. **Newsletter** — capturer les visiteurs qui ne sont pas prêts à acheter. ConvertKit, Buttondown, ou auto-hébergé (Listmonk).
8. **Pages de service détaillées** — `/services/articles-seo/`, `/services/livres-blancs/`, etc. Chacune optimisée pour des requêtes commerciales.

---

## 📜 Licence

Vos contenus, votre code après personnalisation : tout vous appartient.

---

**Bon lancement.**
