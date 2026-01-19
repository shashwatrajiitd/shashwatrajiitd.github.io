'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProfileSelection } from '@/components/netflix/ProfileSelection'
import { SplashScreen } from '@/components/netflix/SplashScreen'

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)
  const [showProfiles, setShowProfiles] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show splash screen first
    const splashTimer = setTimeout(() => {
      setShowSplash(false)
      setShowProfiles(true)
    }, 4000) // Match original 4s animation

    return () => clearTimeout(splashTimer)
  }, [])

  const handleProfileSelect = (profileName: string) => {
    router.push(`/profile/${profileName.toLowerCase()}`)
  }

  return (
    <>
      {showSplash && <SplashScreen />}
      {showProfiles && (
        <ProfileSelection onProfileSelect={handleProfileSelect} />
      )}
    </>
  )
}
