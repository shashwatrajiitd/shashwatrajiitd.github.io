// Shared TypeScript types for the monorepo

export type ProfileId = 'developer' | 'recruiter' | 'stalker' | 'adventurer'

export interface Profile {
  id: ProfileId
  name: string
  displayName: string
  icon: string
  description?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export interface Skill {
  name: string
  category: string
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner'
}

export interface Achievement {
  title: string
  description: string
  year: string
}

export interface ContactInfo {
  email: string
  linkedin?: string
  github?: string
  location: string
}
