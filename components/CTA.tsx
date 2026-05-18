'use client'

import { motion } from 'framer-motion'
import { useI18n } from './i18n'
import { Wrap } from './ui/Section'
import { Button } from './ui/Button'

export function CTA() {
  const { t } = useI18n()
  return (
    <section id="download" className="pb-12 pt-10 sm:pb-[60px] sm:pt-16">
      <Wrap>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative grid items-center gap-8 overflow-hidden rounded-[24px] bg-ink px-6 py-10 text-white sm:gap-10 sm:rounded-[32px] sm:px-8 sm:py-14 md:grid-cols-[1.4fr_1fr] md:px-14 md:py-20"
        >
          {/* gradient orbs */}
          <div className="pointer-events-none absolute -bottom-[200px] -right-[200px] h-[520px] w-[520px] rounded-full opacity-45"
            style={{ background: 'radial-gradient(circle, #0353A4 0%, transparent 70%)' }}
          />
          <div className="pointer-events-none absolute -top-[100px] left-[30%] h-[280px] w-[280px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #0353A4 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <h3 className="mb-3 text-[clamp(28px,6vw,58px)] font-bold leading-[1.08] tracking-[-0.03em] sm:mb-4 sm:leading-[1.05]">
              {t('Будь среди').replace(' первых.', '')}{' '}
              <span className="font-italic-serif text-brand-300">{t('первых.')}</span>
            </h3>
            <p className="mb-6 max-w-[48ch] text-[14.5px] text-white/65 sm:mb-7 sm:text-[17px]">
              {t('Оставь заявку на ранний доступ — и получи belocal бесплатно до публичного запуска.')}
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <Button as="a" href="#" variant="light" size="lg" withArrow>
                {t('App Store')}
              </Button>
              <Button as="a" href="#" variant="ghost" size="lg" className="!text-white !border !border-white/25 hover:!bg-white/5">
                {t('Google Play')}
              </Button>
            </div>
          </div>

          <div className="relative z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-[180px] rounded-2xl bg-white p-4 text-center text-ink shadow-[0_30px_50px_-10px_rgba(0,0,0,0.4)] sm:w-[220px] sm:rounded-3xl sm:p-[18px]"
            >
              <div className="qr-grid relative mb-2.5 aspect-square rounded-[10px] border border-line">
                {/* QR corners */}
                <span className="absolute left-[6px] top-[6px] h-[30px] w-[30px] rounded-md border-[5px] border-ink bg-white" />
                <span className="absolute right-[6px] top-[6px] h-[30px] w-[30px] rounded-md border-[5px] border-ink bg-white" />
                <span className="absolute bottom-[6px] left-[6px] h-[30px] w-[30px] rounded-md border-[5px] border-ink bg-white" />
                <span className="absolute left-1/2 top-1/2 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] bg-brand text-[14px] font-extrabold text-white">
                  b
                </span>
              </div>
              <div className="text-[13px] font-semibold tracking-tight">{t('Сканируй камерой')}</div>
              <div className="mt-0.5 text-[11.5px] text-ink-3">{t('установка за 12 секунд')}</div>
            </motion.div>
          </div>
        </motion.div>
      </Wrap>
    </section>
  )
}
