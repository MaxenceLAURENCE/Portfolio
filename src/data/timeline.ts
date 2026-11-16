import type { TimelineItem } from '../types'

export const timelineData: TimelineItem[] = [
  {
    period: 'Printemps 2026 (En recherche)',
    title: 'Stage de fin d’études — Développeur Full-Stack / DevOps',
    organization: 'Entreprise d’accueil / ESN / Startup tech',
    location: 'Hauts-de-France, Paris / Île-de-France ou Remote',
    type: 'milestone',
    badge: 'Objectif Actuel',
    description: "Stage conventionné de 14 à 16 semaines de fin de BUT 3. Objectif : s'intégrer dans une équipe de développement pour concevoir des applications web robustes, automatiser des pipelines CI/CD ou contribuer à des architectures logicielles modernes.",
    achievements: [
      'Disponibilité : Dès le printemps 2026 pour 14 à 16 semaines',
      'Technologies cibles : TypeScript, Vue 3 / React, Node.js, Docker, PostgreSQL, CI/CD',
      'Ouvert à une poursuite en CDI junior ou alternance bac+5 selon opportunités'
    ]
  },
  {
    period: '2023 — 2026 (En cours)',
    title: 'BUT Informatique (Bachelor Universitaire de Technologie)',
    organization: 'IUT du Littoral Côte d’Opale (ULCO)',
    location: 'Calais (62)',
    type: 'education',
    badge: 'Formation en cours',
    description: 'Formation universitaire en 3 ans axée sur l’ingénierie logicielle, le développement full-stack, l’administration système, les bases de données et la conduite de projets en équipe.',
    achievements: [
      'Parcours Réalisation d’Applications : conception, développement, validation',
      'Réalisation de nombreuses SAÉs (Situations d’Apprentissage et d’Évaluation) en conditions professionnelles',
      'Maîtrise approfondie des architectures Web (REST, WebSockets), du cloud et de la conteneurisation Docker',
      'Participation à des hackathons nationaux (Nuit de l’Info 2024)'
    ],
    technologies: ['TypeScript', 'Vue 3', 'Docker', 'PostgreSQL', 'Python', 'Git', 'Linux']
  },
  {
    period: '2023',
    title: 'Baccalauréat Général — Spécialités Scientifiques & Numériques',
    organization: 'Lycée Général',
    location: 'Hauts-de-France',
    type: 'education',
    badge: 'Diplôme obtenu',
    description: 'Enseignements de spécialité en Mathématiques et Sciences Numériques & Informatique (NSI), consolidant les bases algorithmiques et la rigueur d’analyse.',
    achievements: [
      'Solides bases en logique, algorithmique et résolution de problèmes',
      'Premiers projets de programmation en Python et Web'
    ]
  }
]
