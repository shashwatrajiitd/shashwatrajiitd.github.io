import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/netflix-theme.css'

export const metadata: Metadata = {
  title: 'Shashwat Raj | ML Engineer',
  description: 'AI Engineer | IIT Delhi | Building Scalable AI Systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <div className="aura-glow"></div>
        {children}
      </body>
    </html>
  )
}
