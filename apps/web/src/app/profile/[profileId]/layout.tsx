import { ReactNode } from 'react'

export default async function ProfileLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params

  return (
    <div id={`${profileId}-page`} className="profile-page active">
      {children}
    </div>
  )
}
