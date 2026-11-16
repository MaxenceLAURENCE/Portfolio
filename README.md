# 🚀 Portfolio Professionnel — Maxence Laurence

> **Étudiant en 3ème année de BUT Informatique à l'IUT du Littoral Côte d'Opale (Calais)**  
> Développeur Full-Stack & DevOps | À la recherche d'un stage de fin d'études (14 à 16 semaines dès le printemps 2026).

Ce dépôt contient le code source de mon portfolio web interactif, conçu pour présenter mes compétences, mes projets phares (APIs RESTful, architectures conteneurisées, applications réactives) et mes SAÉs de BUT.

---

## 💻 Stack Technique

- **Framework :** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Langage :** [TypeScript](https://www.typescriptlang.org/) (Typage strict de bout en bout)
- **Outil de Build & HMR :** [Vite 6](https://vitejs.dev/)
- **Design & Styles :** [Tailwind CSS 3](https://tailwindcss.com/) (Responsive mobile-first, Dark modern theme, Glassmorphism)
- **Icônes :** [Lucide Icons](https://lucide.dev/) (`lucide-vue-next`)
- **Contact sans backend :** [Formspree](https://formspree.io/) API REST asynchrone (`fetch`) avec gestion réactive des états et protection anti-spam (honeypot)
- **Hébergement :** [GitHub Pages](https://pages.github.com/) via GitHub Actions automatisé

---

## 📁 Architecture du Projet

```text
site_portfolio/
├── .github/workflows/
│   └── deploy.yml            # Pipeline GitHub Actions (build & déploiement automatique sur GitHub Pages)
├── public/
│   ├── cv-maxence-laurence.pdf # Fichier CV téléchargeable directement
│   └── favicon.svg           # Favicon vectoriel moderne
├── src/
│   ├── components/
│   │   ├── Navbar.vue        # Barre de navigation fixe avec détection de section active et menu mobile
│   │   ├── Hero.vue          # En-tête percutant avec terminal TypeScript animé, statut de stage et CTAs
│   │   ├── About.vue         # Présentation, piliers d'ingénierie et grille de statistiques
│   │   ├── Projects.vue      # Grille des réalisations avec filtres (Full-Stack, DevOps, SAÉs) et recherche
│   │   ├── ProjectModal.vue  # Modale détaillée (architecture, fonctionnalités clés, points forts, stack)
│   │   ├── Skills.vue        # Boîte à outils organisée par catégories avec niveaux et badges
│   │   ├── Timeline.vue      # Frise chronologique (cursus BUT Info, objectifs de stage, bac)
│   │   ├── Contact.vue       # Formulaire Formspree réactif + coordonnées directes & CV PDF
│   │   └── Footer.vue        # Pied de page avec liens réseaux et mentions
│   ├── data/
│   │   ├── profile.ts        # Informations personnelles, coordonnées, bio et statistiques
│   │   ├── projects.ts       # Fiches détaillées des projets et SAÉs (titres, technos, architecture)
│   │   ├── skills.ts         # Données structurées des compétences techniques
│   │   └── timeline.ts       # Étapes du parcours académique et professionnel
│   ├── types/
│   │   └── index.ts          # Typages TypeScript (Project, SkillCategory, TimelineItem, ProfileInfo)
│   ├── App.vue               # Composant racine
│   ├── main.ts               # Point d'entrée de l'application Vue 3
│   └── style.css             # Directives Tailwind CSS et personnalisations graphiques
├── dist/                     # Fichiers statiques compilés pour la production
├── index.html                # Page d'accueil HTML5
├── package.json              # Dépendances et scripts npm
├── tailwind.config.js        # Configuration de Tailwind CSS
└── vite.config.ts            # Configuration de Vite avec base relative pour GitHub Pages
```

---

## 🛠️ Commandes Disponibles

### 1. Démarrer le serveur de développement en local
```bash
npm run dev
```
> Le site est accessible instantanément sur `http://localhost:5173/` avec rafraîchissement à chaud (*Hot Module Replacement*).

### 2. Compiler pour la production
```bash
npm run build
```
> Valide les types TypeScript via `vue-tsc` puis génère les fichiers statiques optimisés dans le dossier `dist/`.

### 3. Prévisualiser le build de production localement
```bash
npm run preview
```

---

## 📄 Comment remplacer le CV par ton fichier PDF définitif ?

Il te suffit de déposer ton fichier PDF dans le dossier `public/` en le nommant exactement :
```text
public/cv-maxence-laurence.pdf
```
Le bouton de téléchargement de la Navbar, du Hero et de la section Contact pointera immédiatement vers ton nouveau document.

---

## 📬 Comment configurer ton formulaire Formspree ?

1. Crée un compte gratuit sur [Formspree.io](https://formspree.io/).
2. Crée un nouveau formulaire intitulé "Portfolio Contact".
3. Formspree te fournit une URL d'API sous la forme : `https://formspree.io/f/ton_identifiant`.
4. Ouvre le fichier `src/components/Contact.vue` et remplace la variable `formspreeEndpoint` par ton URL :
   ```ts
   const formspreeEndpoint = ref('https://formspree.io/f/ton_identifiant')
   ```
5. Tout est prêt : chaque soumission du formulaire arrivera directement dans ta boîte mail avec protection anti-spam intégrée !

---

## 🌐 Déploiement sur GitHub Pages

Le déploiement est **100% automatisé** grâce au workflow situé dans `.github/workflows/deploy.yml`.

Pour l'activer sur GitHub :
1. Rends-toi sur ton dépôt GitHub (`Portfolio`).
2. Va dans **Settings** > **Pages**.
3. Dans la section **Build and deployment** > **Source**, sélectionne **GitHub Actions**.
4. Pousse tes modifications sur la branche `main` : GitHub Actions se chargera de compiler et publier le site en ~30 secondes !
