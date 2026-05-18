'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useI18n } from './i18n'
import { Button } from './ui/Button'
import { Wrap } from './ui/Section'
import { PhoneMock } from './PhoneMock'

export function Hero() {
  const { t, lang } = useI18n()
  return (
    <section className="relative overflow-hidden pt-12 md:pt-[72px]">
      <Wrap>
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-9 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="min-w-0 max-w-full overflow-hidden"
          >
            <h1 className="mb-4 break-words text-[clamp(32px,7.5vw,88px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:leading-[1.02]">
              {lang === 'ru' ? (
                <>
                  Путешествуй <span className="font-italic-serif text-brand">как местный</span>,<br />а не как турист.
                </>
              ) : (
                <>
                  Travel <span className="font-italic-serif text-brand">like a local</span>,<br />not like a tourist.
                </>
              )}
            </h1>
            <p className="mb-4 text-[clamp(16px,2.4vw,22px)] text-brand font-italic-serif tracking-tight sm:mb-5">
              Be local anywhere in the world.
            </p>
            <p className="mb-6 max-w-[560px] text-[15.5px] leading-relaxed text-ink-2 sm:mb-7 sm:text-[clamp(17px,1.6vw,20px)]">
              {t('belocal — карманный AI-гид, который собирает маршрут под твой вкус, бюджет и настроение. Бесплатно для путешественников — навсегда.')}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href="#download" variant="primary" size="lg" withArrow>
                {t('Попасть в ранний доступ')}
              </Button>
              <Button as="a" href="#showcase" variant="ghost" size="lg">
                {t('Смотреть демо')}
              </Button>
            </div>
            <div className="mt-5 flex items-center gap-4 text-[13.5px] text-ink-3">
              <span className="inline-flex gap-0.5 text-accent-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>{t('700+ путешественников в вейтлисте')}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="min-w-0 max-w-full"
          >
            <PhoneMock />
          </motion.div>
        </div>
      </Wrap>

      {/* Trust strip */}
      <Wrap>
        <div className="mt-12 border-y border-line py-5 sm:mt-16 sm:py-7 md:mt-24">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-14 sm:gap-y-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3 sm:text-[12px]">
              {t('Интегрировано с')}
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] font-semibold tracking-tight text-ink-2 opacity-65 sm:gap-x-9 sm:gap-y-4 sm:text-[18px]">
              {['Booking.com', 'Google Maps', 'GetYourGuide', 'Tripadvisor'].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-block h-3.5 w-3.5 rounded bg-ink sm:h-[18px] sm:w-[18px]" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
