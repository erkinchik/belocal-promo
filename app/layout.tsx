import type { Metadata } from 'next'
import { Manrope, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'belocal — твой локальный гид на основе ИИ',
  description:
    'belocal — карманный AI-гид, который собирает маршрут под твой вкус, бюджет и настроение. Бесплатно для путешественников — навсегда.',
  openGraph: {
    title: 'belocal — be local anywhere in the world',
    description:
      'AI-гид для путешественников. Брони через Booking, GetYourGuide и Tripadvisor.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
