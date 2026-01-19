'use client'

import { useEffect } from 'react'
import { ProfileNavbar } from '@/components/shared/ProfileNavbar'
import { ContinueWatching } from '@/components/shared/ContinueWatching'
import { RecruiterHero } from './sections/Hero'
import { RecruiterAbout } from './sections/About'
import { RecruiterHighlights } from './sections/Highlights'
import { RecruiterExperience } from './sections/Experience'
import { RecruiterCoreSkills } from './sections/CoreSkills'
import { RecruiterEducation } from './sections/Education'
import { RecruiterAchievements } from './sections/Achievements'
import { RecruiterContact } from './sections/Contact'

export function RecruiterProfile() {
  useEffect(() => {
    const id = 'profile-css-recruiter'
    const href = '/styles/profiles/recruiter.css'
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
        profileId="recruiter"
        links={[
          { label: 'About', targetId: 'recruiter-about' },
          { label: 'Professional', targetId: 'recruiter-experience' },
          { label: 'Skills', targetId: 'recruiter-skills' },
          { label: 'Education', targetId: 'recruiter-education' },
          { label: 'Achievements', targetId: 'recruiter-achievements' },
          { label: 'Hire Me', targetId: 'recruiter-contact' },
        ]}
      />
      <div className="instagram-layout">
        <main className="instagram-main">
          <RecruiterHero />
          <RecruiterAbout />
          <ContinueWatching
            title="Continue Watching for Recruiter"
            items={[
              { label: 'Experience', targetId: 'recruiter-experience', iconClass: 'fas fa-briefcase', gradient: '135deg, #667eea 0%, #764ba2 100%' },
              { label: 'Skills', targetId: 'recruiter-skills', iconClass: 'fas fa-code', gradient: '135deg, #f093fb 0%, #f5576c 100%' },
              { label: 'Education', targetId: 'recruiter-education', iconClass: 'fas fa-graduation-cap', gradient: '135deg, #4facfe 0%, #00f2fe 100%' },
              { label: 'Achievements', targetId: 'recruiter-achievements', iconClass: 'fas fa-trophy', gradient: '135deg, #fa709a 0%, #fee140 100%' },
              { label: 'Contact', targetId: 'recruiter-contact', iconClass: 'fas fa-envelope', gradient: '135deg, #30cfd0 0%, #330867 100%' },
            ]}
          />
          <RecruiterHighlights />
          <RecruiterExperience />
          <RecruiterCoreSkills />
          <RecruiterEducation />
          <RecruiterAchievements />
          <RecruiterContact />
        </main>
      </div>
    </>
  )
}
