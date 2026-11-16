import type { ProfileInfo } from '../types'

export const profileData: ProfileInfo = {
  name: 'Maxence Laurence',
  role: 'Développeur Full-Stack & DevOps',
  tagline: "Étudiant en BUT 3 Informatique, passionné par l'écosystème TypeScript, les architectures cloud conteneurisées et les interfaces réactives.",
  status: "À la recherche d'un stage de fin d'études",
  statusDetail: "Stage de 14 à 16 semaines dès le printemps 2026 — Ouvert au présentiel et au télétravail",
  location: 'Calais / Hauts-de-France • Mobilité régionale & Remote',
  email: 'maxence.laurence.pro@gmail.com',
  githubUrl: 'https://github.com/MaxenceLAURENCE',
  linkedinUrl: 'https://www.linkedin.com/in/maxence-laurence/',
  cvPath: './cv-maxence-laurence.pdf',
  bioParagraphs: [
    "Actuellement en 3ème année de BUT Informatique à l'IUT du Littoral Côte d'Opale (Calais), je conçois des solutions logicielles de bout en bout : de l'architecture d'APIs RESTful rigoureusement typées jusqu'à l'orchestration de conteneurs Docker en passant par des interfaces web modernes et fluides.",
    "Mon approche repose sur l'hygiène de code, le typage strict (TypeScript), les tests automatisés (Vitest, TDD) et l'intégration continue (CI/CD GitHub Actions). Curieux et autonome, je m'intéresse autant aux couches hautes (Vue 3, Pinia, Tailwind) qu'aux couches systèmes (cryptographie asymétrique, protocoles réseaux, scripts d'orchestration Linux).",
    "Je recherche un stage de fin d'études formateur où je pourrai m'investir au sein d'une équipe technique exigeante, relever des défis d'ingénierie logicielle et apporter une réelle valeur ajoutée."
  ],
  stats: [
    { value: '3e', label: 'Année BUT Info', sub: 'IUT Calais' },
    { value: '6+', label: 'Projets Phares', sub: 'Web, DevOps & Mobile' },
    { value: '100%', label: 'Typage Strict', sub: 'TypeScript & CI/CD' },
    { value: '14-16', label: 'Semaines de stage', sub: 'Dès printemps 2026' }
  ]
}
