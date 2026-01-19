'use client'

import { PROFILES } from '@/config/profiles'
import Image from 'next/image'

interface ProfileSelectionProps {
  onProfileSelect: (profileName: string) => void
}

export function ProfileSelection({ onProfileSelect }: ProfileSelectionProps) {
  return (
    <div 
      id="profile-selection" 
      className="profile-selection active"
      style={{ 
        display: 'flex',
        opacity: 1,
        visibility: 'visible'
      }}
    >
      <h1 className="profiles-title">Who&apos;s Watching?</h1>
      <div className="profiles-container">
        {Object.values(PROFILES).map((profile) => (
          <div
            key={profile.id}
            className="profile-card"
            onClick={() => onProfileSelect(profile.name)}
            style={{ cursor: 'pointer' }}
          >
            <div className="profile-img-container">
              <Image
                src={profile.icon}
                alt={profile.displayName}
                className="profile-img"
                width={180}
                height={180}
                unoptimized
              />
            </div>
            <span className="profile-name">{profile.displayName}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
