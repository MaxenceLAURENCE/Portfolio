export type ProjectCategory = 'all' | 'fullstack' | 'devops' | 'mobile-sys' | 'sae'

export interface Project {
  id: string
  title: string
  subtitle: string
  shortDescription: string
  fullDescription: string
  category: 'fullstack' | 'devops' | 'mobile-sys' | 'sae'
  tags: string[]
  technologies: string[]
  featured: boolean
  githubUrl?: string
  demoUrl?: string
  saeCode?: string
  architecture?: string
  keyFeatures: string[]
  highlights?: string[]
}

export interface SkillItem {
  name: string
  level?: string
  highlight?: boolean
  description?: string
}

export interface SkillCategory {
  title: string
  description: string
  icon: string
  color: string
  skills: SkillItem[]
}

export interface TimelineItem {
  period: string
  title: string
  organization: string
  location: string
  type: 'education' | 'experience' | 'milestone'
  badge: string
  description: string
  achievements: string[]
  technologies?: string[]
}

export interface ProfileInfo {
  name: string
  role: string
  tagline: string
  status: string
  statusDetail: string
  location: string
  email: string
  githubUrl: string
  linkedinUrl: string
  cvPath: string
  bioParagraphs: string[]
  stats: {
    value: string
    label: string
    sub?: string
  }[]
}
