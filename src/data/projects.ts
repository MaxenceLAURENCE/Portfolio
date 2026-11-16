import type { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: 'lol-esports-betting',
    title: 'LoL eSports Betting Platform',
    subtitle: 'Plateforme Full-Stack de paris eSport conteneurisée sous Docker',
    shortDescription: "Architecture 3-Tiers robuste avec API Express en TypeScript, PostgreSQL 16 avec triggers d'intégrité, reverse-proxy Traefik et CI/CD.",
    fullDescription: "Conception complète d'une plateforme de paris en ligne sur des compétitions eSport de League of Legends. L'application sépare rigoureusement la logique métier, la gestion des transactions financières virtuelles et l'infrastructure de déploiement.",
    category: 'fullstack',
    tags: ['Full-Stack', 'DevOps', 'Docker', 'PostgreSQL', 'TypeScript'],
    technologies: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL 16', 'Docker', 'Traefik', 'GitHub Actions', 'Vitest'],
    featured: true,
    githubUrl: 'https://github.com/MaxenceLAURENCE/lol-esports-betting-platform',
    saeCode: 'SAÉ BUT Informatique 2 - Web & API Dockerisée',
    architecture: 'Architecture 3-Tiers : Frontend web, Backend REST Express typé, Base relationnelle PostgreSQL 16, le tout orchestré avec Docker Compose et sécurisé par Traefik.',
    keyFeatures: [
      'Reverse proxy Traefik avec gestion automatique des certificats SSL/TLS et routage de sous-domaines',
      'Segmentation réseau Docker isolée (réseau public web vs réseau privé lan)',
      'Modélisation de données transactionnelles avec triggers et contraintes SQL pour garantir la consistance financière',
      'Pipeline CI/CD complet GitHub Actions (linting, tests unitaires avec Vitest, validation des builds)',
      'Environnement de développement standardisé via DevContainers'
    ],
    highlights: [
      'Lead DevOps sur le projet de groupe',
      'Mise en place des tests automatisés et de la conformité conventionnelle des commits'
    ]
  },
  {
    id: 'pokemon-tcg-api',
    title: 'Pokémon TCG REST API',
    subtitle: 'API RESTful professionnelle & temps réel pour jeu de cartes',
    shortDescription: 'Backend 100% TypeScript structuré selon les standards industriels : documentation Swagger/OpenAPI 3.0, Prisma ORM, JWT et WebSockets.',
    fullDescription: "Développement d'une API RESTful complète dédiée à la gestion d'un jeu de cartes à collectionner Pokémon. Le projet intègre une gestion rigoureuse des types, une sécurité éprouvée (JWT, Bcrypt) et un canal temps réel avec Socket.io.",
    category: 'fullstack',
    tags: ['Backend', 'API REST', 'TypeScript', 'WebSockets', 'Prisma'],
    technologies: ['Node.js', 'Express', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Socket.io', 'Swagger OpenAPI 3.0', 'Vitest', 'Husky'],
    featured: true,
    githubUrl: 'https://github.com/MaxenceLAURENCE/pokemon-tcg-rest-api',
    architecture: 'Architecture RESTful multicouche (Controllers, Services, Repositories) avec validation stricte des entrées et typage de bout en bout.',
    keyFeatures: [
      'Documentation interactive en direct via Swagger UI / spécification OpenAPI 3.0 (/docs)',
      'Canal de communication bidirectionnel temps réel via WebSockets (Socket.io) pour les événements de jeu',
      'Authentification stateless sécurisée par tokens JWT et hachage Bcrypt',
      'Couverture de tests d’intégration et unitaires avec Vitest et Supertest (base de test isolée)',
      'Hygiène Git stricte grâce à Husky et Commitlint (Conventional Commits)'
    ],
    highlights: [
      'Architecture prête pour la production',
      'Typage strict sans aucun "any"'
    ]
  },
  {
    id: 'pokemon-tcg-spa',
    title: 'Pokémon TCG — Vue 3 SPA',
    subtitle: 'Single Page Application réactive connectée en WebSockets',
    shortDescription: 'Interface utilisateur moderne développée avec Vue 3 (Composition API), Vite, TypeScript et Pinia pour des parties en temps réel.',
    fullDescription: "Frontend interactif conçu pour interagir directement avec l'API Pokémon TCG. Permet aux joueurs de naviguer dans leur collection, de créer des salons multijoueurs et d'interagir en temps réel sur un plateau de jeu interactif.",
    category: 'fullstack',
    tags: ['Frontend', 'Vue 3', 'TypeScript', 'Vite', 'Pinia'],
    technologies: ['Vue.js 3', 'TypeScript', 'Vite', 'Pinia', 'Socket.io-client', 'Tailwind CSS', 'Naive UI'],
    featured: true,
    githubUrl: 'https://github.com/MaxenceLAURENCE/pokemon-tcg-vue3-spa',
    architecture: 'Single Page Application Vue 3 avec Composition API (<script setup>), architecture modulaire par composants et store réactif Pinia.',
    keyFeatures: [
      'Synchronisation instantanée des actions de jeu (pioche, pose de cartes) via socket.io-client',
      'Gestion globale et optimisée de l’état applicatif avec Pinia (authentification, collection, état de partie)',
      'Interface responsive avec transitions visuelles et bascule fluide thème sombre / clair',
      'Composants typés et réutilisables (DeckBuilder, GameBoard, CardViewer)'
    ],
    highlights: [
      'Parfaite cohérence avec le backend TypeScript',
      'Expérience utilisateur fluide sans rechargement de page'
    ]
  },
  {
    id: 'minecraft-server-bot',
    title: 'Minecraft Server Orchestrator & Bot',
    subtitle: "Administration d'infrastructures conteneurisées pilotée par Discord",
    shortDescription: "Orchestration Docker automatisée en Python 3.11 : pilotage direct du socket Docker hôte pour administrer des serveurs de jeux via un bot Discord.",
    fullDescription: "Système complet de gestion et supervision automatisée de serveurs de jeu moddés (Minecraft NeoForge). Le bot Discord communique directement avec l'API du démon Docker sur l'hôte Linux pour démarrer, arrêter, sauvegarder et monitorer l'infrastructure.",
    category: 'devops',
    tags: ['DevOps', 'Python', 'Docker API', 'Discord.py', 'Linux'],
    technologies: ['Python 3.11', 'Docker SDK', 'Discord.py', 'Docker Compose', 'Bash', 'Linux'],
    featured: true,
    githubUrl: 'https://github.com/MaxenceLAURENCE/minecraft-server-discord-bot',
    architecture: 'Communication asynchrone via /var/run/docker.sock entre le conteneur du bot Discord et les conteneurs applicatifs de jeu.',
    keyFeatures: [
      'Contrôle programmatique du démon Docker hôte via le SDK Python docker-py',
      'Arrêt propre sécurisé avec sauvegarde des chunks et messages de prévention dans le chat de jeu',
      'Surveillance active de l’état du serveur et de la latence réseau avec mcstatus',
      'Scripts Bash d’automatisation pour les sauvegardes compressées régulières',
      'Gestion sécurisée des secrets d’environnement et isolation des conteneurs'
    ],
    highlights: [
      'Side-project d’automatisation utilisé en conditions réelles',
      'Zéro intervention manuelle nécessaire sur le serveur SSH'
    ]
  },
  {
    id: 'alto-e2ee-messenger',
    title: 'Alto — Messagerie Chiffrée E2EE',
    subtitle: 'App mobile sécurisée avec cryptographie asymétrique RSA & QR Code',
    shortDescription: "Application mobile de messagerie chiffrée de bout en bout en Flutter/Dart avec échange hors-bande de clés publiques par QR Code.",
    fullDescription: "Projet de cybersécurité appliquée visant à garantir l'inviolabilité absolue des communications. Chaque appareil génère sa propre paire de clés asymétriques RSA 2048-bits. Le serveur de relais ne dispose à aucun moment du texte en clair.",
    category: 'mobile-sys',
    tags: ['Cybersécurité', 'Mobile', 'Flutter', 'Cryptographie', 'Dart'],
    technologies: ['Flutter', 'Dart', 'RSA 2048 Encryption', 'QR Code Scan', 'Secure Storage', 'SQLite'],
    featured: true,
    githubUrl: 'https://github.com/MaxenceLAURENCE/alto-e2ee-messenger',
    saeCode: 'SAÉ BUT Informatique - R4.11 Alto Mobile & Sécurité',
    architecture: 'Architecture mobile Flutter modulaire avec couche cryptographique dédiée et stockage sécurisé matériel (KeyStore / Keychain).',
    keyFeatures: [
      'Génération locale et isolée des clés asymétriques RSA 2048-bits sur le terminal mobile',
      'Appairage physique hors-bande via caméra et QR Code pour échanger les clés publiques sans risque d’attaque Man-in-the-Middle',
      'Chiffrement hybride et signature numérique des messages avant expédition réseau',
      'Stockage local chiffré des clés privées et historique de conversation'
    ],
    highlights: [
      'Note d’excellence en SAÉ Sécurité / Mobile',
      'Modèle Zéro-Connaissance (Zero-Knowledge Architecture)'
    ]
  },
  {
    id: 'astro-fits-enhancer',
    title: 'Astro FITS Image Enhancer',
    subtitle: "Traitement d'images astronomiques & réduction d'étoiles par IA/Algorithmes",
    shortDescription: "Logiciel scientifique de traitement de fichiers bruts .fits (Astropy, NumPy, OpenCV) avec interface PyQt5 et terminal interactif émulé.",
    fullDescription: "Outil scientifique développé pour traiter des images astronomiques issues de télescopes (fichiers scientifiques .fits). Le logiciel effectue une réduction d'étoiles pour mettre en valeur les nébuleuses et galaxies grâce à des algorithmes de morphologie mathématique.",
    category: 'mobile-sys',
    tags: ['Algorithmique', 'Python', 'NumPy', 'OpenCV', 'PyQt5'],
    technologies: ['Python', 'OpenCV', 'NumPy', 'Astropy', 'PyQt5', 'Algorithmique matricielle'],
    featured: false,
    githubUrl: 'https://github.com/MaxenceLAURENCE/astro-fits-image-enhancer',
    saeCode: 'SAÉ BUT Informatique - Traitement de Données & Calcul Scientifique',
    architecture: 'Pipeline de traitement d’image vectorisé sous NumPy avec découplage complet entre le moteur de calcul et l’interface graphique.',
    keyFeatures: [
      'Lecture et manipulation des matrices spectrales de données brutes .fits (FITS standard)',
      'Détection automatique des étoiles par flux lumineux avec l’algorithme DAOStarFinder',
      'Érosion morphologique, masquage par seuillage et filtrage gaussien pour isoler les structures gazeuses',
      'Double interface utilisateur : GUI Desktop avec curseurs en temps réel (PyQt5) + shell de commandes interactif'
    ],
    highlights: [
      'Optimisation des temps de calcul grâce à la vectorisation NumPy',
      'Manipulation de véritables données scientifiques de télescopes'
    ]
  },
  {
    id: 'nuit-info-2024',
    title: "Nuit de l'Info 2024",
    subtitle: 'Hackathon national de développement web intensif en équipe',
    shortDescription: "Conception et livraison en 16h d'une application web interactive sur un thème imposé, en respectant les défis techniques des partenaires.",
    fullDescription: "Participation au hackathon national étudiant de la Nuit de l'Info. En équipe pluridisciplinaire, création d'une application web responsive intégrant accessibilité, performance et défis de code sous forte contrainte temporelle.",
    category: 'sae',
    tags: ['Hackathon', 'Vue 3', 'Travail d’équipe', 'Agile', 'Web'],
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Git collaboratif', 'Node.js'],
    featured: false,
    saeCode: 'Compétence BUT : Travailler dans une équipe informatique',
    keyFeatures: [
      'Développement en méthode Agile / Scrum accélérée sur 16 heures consécutives',
      'Gestion stricte des branches Git et des revues de code en continu',
      'Design responsive mobile-first accessible et fluide sous Tailwind CSS'
    ],
    highlights: [
      'Livraison du projet complet dans les délais stricts',
      'Excellente synergie d’équipe et gestion du stress'
    ]
  },
  {
    id: 'sae-virtualisation-r408',
    title: 'Virtualisation & Services Réseaux R4.08',
    subtitle: 'Déploiement et sécurisation de parcs virtuels et conteneurs Linux',
    shortDescription: "Configuration de serveurs d'infrastructure d'entreprise : hyperviseurs, conteneurs Docker, segmentation VLAN, proxy et règles iptables.",
    fullDescription: "Projet d'administration système et réseaux centré sur la virtualisation, l'isolation de services et la résilience d'infrastructure d'entreprise.",
    category: 'devops',
    tags: ['DevOps', 'Linux', 'Réseaux', 'Sécurité', 'Docker'],
    technologies: ['Linux Debian', 'Docker', 'Proxmox', 'Bash', 'iptables / UFW', 'VLAN', 'Nginx'],
    featured: false,
    saeCode: 'SAÉ BUT Informatique - R4.08 Virtualisation',
    keyFeatures: [
      'Mise en place d’une architecture cloisonnée avec pare-feu et segmentation réseau',
      'Déploiement automatisé de conteneurs de services avec volumes persistants',
      'Scripts Bash d’automatisation pour le monitoring d’état et les sauvegardes périodiques'
    ],
    highlights: [
      'Validation de la compétence BUT : Administrer des systèmes informatiques communicants complexes'
    ]
  }
]
