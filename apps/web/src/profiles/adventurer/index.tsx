'use client'

import { useEffect } from 'react'
import { ProfileNavbar } from '@/components/shared/ProfileNavbar'
import { ContinueWatching } from '@/components/shared/ContinueWatching'
import { AdventurerHero } from './sections/Hero'
import { AdventurerAbout } from './sections/About'
import { AdventurerExperience } from './sections/Experience'
import { AdventurerSkills } from './sections/Skills'
import { AdventurerEducation } from './sections/Education'
import { AdventurerAchievements } from './sections/Achievements'
import { AdventurerContact } from './sections/Contact'

export function AdventurerProfile() {
  useEffect(() => {
    const id = 'profile-css-adventurer'
    const href = '/styles/profiles/adventurer.css'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    }
  }, [])

  return (
    <>
      <ProfileNavbar
        profileId="adventurer"
        links={[
          { label: 'About', targetId: 'adventurer-about' },
          { label: 'Professional', targetId: 'adventurer-experience' },
          { label: 'Skills', targetId: 'adventurer-skills' },
          { label: 'Education', targetId: 'adventurer-education' },
          { label: 'Achievements', targetId: 'adventurer-achievements' },
          { label: 'Hire Me', targetId: 'adventurer-contact' },
        ]}
      />
      <div className="instagram-layout">
        <main className="instagram-main">
          <AdventurerHero />
          <AdventurerAbout />
          <ContinueWatching
            title="Continue Watching for Adventurer"
            items={[
              { label: 'Experience', targetId: 'adventurer-experience', iconClass: 'fas fa-briefcase', gradient: '135deg, #667eea 0%, #764ba2 100%' },
              { label: 'Skills', targetId: 'adventurer-skills', iconClass: 'fas fa-code', gradient: '135deg, #f093fb 0%, #f5576c 100%' },
              { label: 'Education', targetId: 'adventurer-education', iconClass: 'fas fa-graduation-cap', gradient: '135deg, #4facfe 0%, #00f2fe 100%' },
              { label: 'Achievements', targetId: 'adventurer-achievements', iconClass: 'fas fa-trophy', gradient: '135deg, #fa709a 0%, #fee140 100%' },
              { label: 'Contact', targetId: 'adventurer-contact', iconClass: 'fas fa-envelope', gradient: '135deg, #30cfd0 0%, #330867 100%' },
            ]}
          />
          <AdventurerExperience />
          <AdventurerSkills />
          <AdventurerEducation />
          <AdventurerAchievements />
          <AdventurerContact />
        </main>
      </div>
    </>
  )
}

