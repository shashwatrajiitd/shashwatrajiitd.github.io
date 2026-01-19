import { ComponentType } from 'react'

// Lazy load profile components for code splitting
const DeveloperProfile = () => import('@/profiles/developer').then(m => m.DeveloperProfile)
const RecruiterProfile = () => import('@/profiles/recruiter').then(m => m.RecruiterProfile)
const StalkerProfile = () => import('@/profiles/stalker').then(m => m.StalkerProfile)
const AdventurerProfile = () => import('@/profiles/adventurer').then(m => m.AdventurerProfile)

export type ProfileId = 'developer' | 'recruiter' | 'stalker' | 'adventurer'

export interface ProfileConfig {
  id: ProfileId
  name: string
  displayName: string
  icon: string
  description?: string
}

export const PROFILES: Record<ProfileId, ProfileConfig> = {
  developer: {
    id: 'developer',
    name: 'Developer',
    displayName: 'Developer',
    icon: '/assets/icons/developer.png',
    description: 'AI Software Developer',
  },
  recruiter: {
    id: 'recruiter',
    name: 'Recruiter',
    displayName: 'Recruiter',
    icon: '/assets/icons/recruiter.png',
    description: 'Professional Portfolio',
  },
  stalker: {
    id: 'stalker',
    name: 'Stalker',
    displayName: 'Stalker',
    icon: '/assets/icons/stalker.png',
    description: 'Personal Insights',
  },
  adventurer: {
    id: 'adventurer',
    name: 'Adventurer',
    displayName: 'Adventurer',
    icon: '/assets/icons/adventurer.png',
    description: 'Adventures & Experiences',
  },
}

export function getProfileComponent(profileId: string): ComponentType | null {
  const normalizedId = profileId.toLowerCase() as ProfileId
  
  switch (normalizedId) {
    case 'developer':
      return DeveloperProfile as unknown as ComponentType
    case 'recruiter':
      return RecruiterProfile as unknown as ComponentType
    case 'stalker':
      return StalkerProfile as unknown as ComponentType
    case 'adventurer':
      return AdventurerProfile as unknown as ComponentType
    default:
      return null
  }
}

export function isValidProfileId(id: string): id is ProfileId {
  return id.toLowerCase() in PROFILES
}
