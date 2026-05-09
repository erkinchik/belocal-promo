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
        <div className="grid items-start gap-9 md:grid-cols-[1.05fr_0.95fr] md:gap-14 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="mb-4 text-[clamp(44px,6.4vw,88px)] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
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
            <p className="mb-5 text-[clamp(18px,1.6vw,22px)] text-brand font-italic-serif tracking-tight">
              Be local anywhere in the world.
            </p>
            <p className="mb-7 max-w-[560px] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2">
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
          >
            <PhoneMock />
          </motion.div>
        </div>
      </Wrap>

      {/* Trust strip */}
      <Wrap>
        <div className="mt-24 border-y border-line py-7">
          <div className="flex flex-wrap items-center justify-between gap-x-14 gap-y-8">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-3">
              {t('Интегрировано с')}
            </div>
            <div className="flex flex-wrap items-center gap-x-9 gap-y-4 text-[18px] font-semibold tracking-tight text-ink-2 opacity-65">
              {['Booking.com', 'Google Maps', 'GetYourGuide', 'Tripadvisor'].map((b) => (
                <span key={b} className="inline-flex items-center gap-2">
                  <span className="inline-block h-[18px] w-[18px] rounded bg-ink" />
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
