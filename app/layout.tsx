import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BeLocal - Coming Soon',
  description: 'BeLocal is coming soon. Stay tuned for an exciting new way to explore local experiences.',
  openGraph: {
    title: 'BeLocal - Coming Soon',
    description: 'BeLocal is coming soon. Stay tuned for an exciting new way to explore local experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

