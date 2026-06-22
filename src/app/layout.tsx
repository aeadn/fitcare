import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "FIT'CARE — Barbershop",
  description: "La confiance & l'estime de soi — Barbershop partenaire Fitness Park",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "FIT'CARE",
  },
  icons: {
    apple: '/icons/icon-192x192.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js'))}`,
          }}
        />
      </body>
    </html>
  )
}
