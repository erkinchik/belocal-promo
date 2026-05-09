'use client'

import { I18nProvider } from '@/components/i18n'
import { DemoBar } from '@/components/DemoBar'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Marquee } from '@/components/Marquee'
import { Showcase } from '@/components/Showcase'
import { HowItWorks } from '@/components/HowItWorks'
import { Partners } from '@/components/Partners'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Wordmark } from '@/components/Wordmark'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <I18nProvider>
      <main className="bg-paper text-ink">
        <DemoBar />
        <Nav />
        <Hero />
        <Features />
        <Marquee />
        <Showcase />
        <HowItWorks />
        <Partners />
        <FAQ />
        <CTA />
        <Wordmark />
        <Footer />
      </main>
    </I18nProvider>
  )
}
