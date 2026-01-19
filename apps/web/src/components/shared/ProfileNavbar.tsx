'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { PROFILES } from '@/config/profiles'
import { ROUTES } from '@/config/routes'

interface ProfileNavbarProps {
  profileId: string
  links: Array<{ label: string; targetId: string }>
}

export function ProfileNavbar({ profileId, links }: ProfileNavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()
  const currentProfile = PROFILES[profileId as keyof typeof PROFILES]

  const handleProfileSwitch = (newProfileId: string) => {
    setDropdownOpen(false)
    router.push(ROUTES.PROFILE(newProfileId))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`${profileId}-navbar`}>
      <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <Image
          src="/assets/logo.png"
          alt="Shashwat Raj"
          className="navbar-logo"
          width={202}
          height={33}
        />
      </div>
      <button className="mobile-menu-toggle" aria-label="Toggle menu">
        <i className="fas fa-bars"></i>
      </button>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.targetId}>
            <a
              href={`#${l.targetId}`}
              onClick={(e) => {
                e.preventDefault()
                try {
                  window.location.hash = l.targetId
                } catch {
                  // ignore
                }
                const el = document.getElementById(l.targetId)
                if (!el) return
                el.scrollIntoView({ behavior: 'auto', block: 'start' })
                window.scrollBy({ top: -80, left: 0 })
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <div className="nav-cta">
          <button className="btn btn-resume" onClick={() => {
            // TODO: Implement download resume
            const link = document.createElement('a')
            link.href = '/assets/resume/shashwat_resume.pdf'
            link.download = 'shashwat_resume.pdf'
            link.click()
          }}>
            <i className="fas fa-download"></i>
            <span className="resume-text">Resume</span>
          </button>
        </div>
        <div className={`profile-selector-container ${dropdownOpen ? 'active' : ''}`}>
          <div
            className="profile-tile-wrapper"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="profile-tile">
              <Image
                src={currentProfile?.icon || '/assets/icons/developer.png'}
                alt={currentProfile?.displayName || 'Profile'}
                className="profile-tile-img"
                id="current-profile-img"
                width={32}
                height={32}
              />
            </div>
            <i className="fas fa-chevron-down profile-dropdown-icon"></i>
          </div>
          <div className="profile-dropdown">
            {Object.values(PROFILES).map((profile) => (
              <div
                key={profile.id}
                className="profile-dropdown-item"
                onClick={() => handleProfileSwitch(profile.id)}
              >
                <Image
                  src={profile.icon}
                  alt={profile.displayName}
                  className="profile-dropdown-img"
                  width={32}
                  height={32}
                />
                <span className="profile-dropdown-name">{profile.displayName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
