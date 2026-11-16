import type { SkillCategory } from '../types'

export const skillsData: SkillCategory[] = [
  {
    title: 'Langages de Programmation',
    description: 'Typage strict, programmation orientée objet, scripts système et requêtage',
    icon: 'Code2',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'TypeScript', level: 'Avancé', highlight: true, description: 'Typage strict de bout en bout, interfaces, génériques' },
      { name: 'JavaScript (ES6+)', level: 'Avancé', highlight: true, description: 'Async/Await, Promises, manipulation DOM moderne' },
      { name: 'Python 3', level: 'Avancé', highlight: true, description: 'POO, scripts d’automatisation, Docker SDK, NumPy' },
      { name: 'Dart / Flutter', level: 'Intermédiaire', description: 'Développement mobile cross-platform, state management' },
      { name: 'SQL (PostgreSQL)', level: 'Avancé', description: 'Jointures complexes, triggers, procédures stockées' },
      { name: 'Bash / Shell', level: 'Intermédiaire', description: 'Automatisation de tâches Linux, scripts de déploiement' },
      { name: 'C', level: 'Académique', description: 'Gestion mémoire, pointeurs, structures de données' },
      { name: 'PHP 8', level: 'Intermédiaire', description: 'POO, typage strict, architecture MVC' }
    ]
  },
  {
    title: 'Frontend Moderne & Réactif',
    description: 'Création d’interfaces fluides, réactives, modulaires et accessibles',
    icon: 'Layout',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Vue.js 3', level: 'Avancé', highlight: true, description: 'Composition API, <script setup>, composables personnalisés' },
      { name: 'Vite', level: 'Avancé', highlight: true, description: 'Bundler moderne, HMR, optimisation de build statique' },
      { name: 'Tailwind CSS', level: 'Avancé', highlight: true, description: 'Design responsive mobile-first, Dark/Light mode' },
      { name: 'Pinia', level: 'Avancé', description: 'State management global typé pour Vue 3' },
      { name: 'HTML5 Sémantique & CSS3', level: 'Avancé', description: 'Accessibilité (a11y), flexbox, grid, animations' },
      { name: 'Socket.io-client', level: 'Intermédiaire', description: 'Synchronisation d’état client en temps réel' }
    ]
  },
  {
    title: 'Backend & Bases de Données',
    description: 'Conception d’APIs RESTful, sécurité stateless et intégrité des données',
    icon: 'Server',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Node.js & Express', level: 'Avancé', highlight: true, description: 'Architecture multicouche (Controllers, Services)' },
      { name: 'Prisma ORM', level: 'Avancé', highlight: true, description: 'Modélisation de schémas, migrations, relations' },
      { name: 'PostgreSQL 16', level: 'Avancé', highlight: true, description: 'Modélisation relationnelle, indexation, contraintes' },
      { name: 'Socket.io (WebSockets)', level: 'Avancé', description: 'Salons multijoueurs, diffusion d’événements en direct' },
      { name: 'OpenAPI 3.0 / Swagger', level: 'Avancé', description: 'Documentation interactive d’APIs' },
      { name: 'Sécurité JWT & Bcrypt', level: 'Avancé', description: 'Authentification stateless sécurisée, hachage' },
      { name: 'Vitest & Supertest', level: 'Avancé', description: 'Tests unitaires et d’intégration avec mocks' }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Conteneurisation, automatisation CI/CD et administration Linux',
    icon: 'Terminal',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Docker & Docker Compose', level: 'Avancé', highlight: true, description: 'Multi-stage builds, DevContainers, orchestration' },
      { name: 'GitHub Actions (CI/CD)', level: 'Avancé', highlight: true, description: 'Pipelines automatisés de tests, lint et déploiement' },
      { name: 'Traefik Proxy', level: 'Intermédiaire', description: 'Reverse proxy dynamique, routage et certificats TLS' },
      { name: 'Linux (Debian / Ubuntu)', level: 'Avancé', description: 'Administration système, permissions, services systemd' },
      { name: 'Git & Hygiène de Code', level: 'Avancé', description: 'Conventional Commits, Husky, branches et revues de code' },
      { name: 'Docker Socket API', level: 'Intermédiaire', description: 'Pilotage de conteneurs par programmation (Python SDK)' }
    ]
  }
]
