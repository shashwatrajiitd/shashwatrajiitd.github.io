import { notFound } from 'next/navigation'
import { isValidProfileId } from '@/config/profiles'

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params
  const normalizedId = profileId.toLowerCase()

  if (!isValidProfileId(normalizedId)) {
    notFound()
  }

  switch (normalizedId) {
    case 'developer':
      {
        const { DeveloperProfile } = await import('@/profiles/developer')
        return <DeveloperProfile />
      }
    case 'recruiter':
      {
        const { RecruiterProfile } = await import('@/profiles/recruiter')
        return <RecruiterProfile />
      }
    case 'stalker':
      {
        const { StalkerProfile } = await import('@/profiles/stalker')
        return <StalkerProfile />
      }
    case 'adventurer':
      {
        const { AdventurerProfile } = await import('@/profiles/adventurer')
        return <AdventurerProfile />
      }
    default:
      notFound()
  }
}
