'use client'

import { useEffect } from 'react'
import { ProfileNavbar } from '@/components/shared/ProfileNavbar'
import { ContinueWatching } from '@/components/shared/ContinueWatching'
import { StalkerHero } from './sections/Hero'
import { StalkerAbout } from './sections/About'
import { StalkerExperience } from './sections/Experience'
import { StalkerSkills } from './sections/Skills'
import { StalkerEducation } from './sections/Education'
import { StalkerAchievements } from './sections/Achievements'
import { StalkerContact } from './sections/Contact'

export function StalkerProfile() {
  useEffect(() => {
    const id = 'profile-css-stalker'
    const href = '/styles/profiles/stalker.css'
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
        profileId="stalker"
        links={[
          { label: 'About', targetId: 'stalker-about' },
          { label: 'Professional', targetId: 'stalker-experience' },
          { label: 'Skills', targetId: 'stalker-skills' },
          { label: 'Education', targetId: 'stalker-education' },
          { label: 'Achievements', targetId: 'stalker-achievements' },
          { label: 'Hire Me', targetId: 'stalker-contact' },
        ]}
      />
      <div className="instagram-layout">
        <main className="instagram-main">
          <StalkerHero />
          <StalkerAbout />
          <ContinueWatching
            title="Continue Watching for Stalker"
            items={[
              { label: 'Experience', targetId: 'stalker-experience', iconClass: 'fas fa-briefcase', gradient: '135deg, #667eea 0%, #764ba2 100%' },
              { label: 'Skills', targetId: 'stalker-skills', iconClass: 'fas fa-code', gradient: '135deg, #f093fb 0%, #f5576c 100%' },
              { label: 'Education', targetId: 'stalker-education', iconClass: 'fas fa-graduation-cap', gradient: '135deg, #4facfe 0%, #00f2fe 100%' },
              { label: 'Achievements', targetId: 'stalker-achievements', iconClass: 'fas fa-trophy', gradient: '135deg, #fa709a 0%, #fee140 100%' },
              { label: 'Contact', targetId: 'stalker-contact', iconClass: 'fas fa-envelope', gradient: '135deg, #30cfd0 0%, #330867 100%' },
            ]}
          />
          <StalkerExperience />
          <StalkerSkills />
          <StalkerEducation />
          <StalkerAchievements />
          <StalkerContact />
        </main>
      </div>
    </>
  )
}

