'use client'

import { motion } from 'framer-motion'
import { useI18n } from './i18n'
import { Wrap } from './ui/Section'
import { Button } from './ui/Button'

export function CTA() {
  const { t } = useI18n()
  return (
    <section id="download" className="pb-[60px] pt-16">
      <Wrap>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative grid items-center gap-10 overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-white md:grid-cols-[1.4fr_1fr] md:px-14 md:py-20"
        >
          {/* gradient orbs */}
          <div className="pointer-events-none absolute -bottom-[200px] -right-[200px] h-[520px] w-[520px] rounded-full opacity-45"
            style={{ background: 'radial-gradient(circle, #0353A4 0%, transparent 70%)' }}
          />
          <div className="pointer-events-none absolute -top-[100px] left-[30%] h-[280px] w-[280px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #0353A4 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <h3 className="mb-4 text-[clamp(36px,4.4vw,58px)] font-bold leading-[1.05] tracking-[-0.03em]">
              {t('Будь среди').replace(' первых.', '')}{' '}
              <span className="font-italic-serif text-brand-300">{t('первых.')}</span>
            </h3>
            <p className="mb-7 max-w-[48ch] text-[17px] text-white/65">
              {t('Оставь заявку на ранний доступ — и получи belocal бесплатно до публичного запуска.')}
            </p>
            <div className="flex flex-wrap gap-3">
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
              className="w-[220px] rounded-3xl bg-white p-[18px] text-center text-ink shadow-[0_30px_50px_-10px_rgba(0,0,0,0.4)]"
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
