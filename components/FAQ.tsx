'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import clsx from 'clsx'
import { useI18n } from './i18n'
import { Wrap, Kicker } from './ui/Section'

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Сколько стоит belocal?',
    a: 'Базовый тариф бесплатный — 5 маршрутов в месяц, чат с ИИ, карта местных. Pro за 390 ₽/мес снимает лимиты, добавляет офлайн и брони.',
  },
  {
    q: 'Как ИИ узнаёт, что мне нравится?',
    a: 'Ничего сам не угадывает — учитывает то, что ты сохраняешь, лайкаешь и говоришь в чате. Можно стереть профиль за один тап.',
  },
  {
    q: 'Как работают брони?',
    a: 'belocal работает напрямую с Booking.com, GetYourGuide и Tripadvisor: отели, экскурсии и билеты бронируются прямо в чате по их фиксированным ценам. Данные о местах берём из Google Maps.',
  },
  {
    q: 'Какие города уже есть?',
    a: '120+ городов: вся Грузия, Армения, Турция, Балканы, Юго-Восточная Азия, ЕС, ОАЭ. Список расширяем каждую неделю.',
  },
  {
    q: 'На каких языках работает?',
    a: 'Русский, английский, турецкий, грузинский, испанский. Чат понимает запрос на одном языке и ответит на нём же.',
  },
]

export function FAQ() {
  const { t } = useI18n()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="pb-14 pt-10 sm:pb-20 sm:pt-16 md:pb-[120px]">
      <Wrap>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <Kicker>{t('Вопросы')}</Kicker>
            <h2 className="mb-3 mt-3 text-[clamp(28px,6vw,60px)] font-bold leading-[1.08] tracking-[-0.03em] sm:mb-3.5 sm:mt-3.5 sm:leading-[1.05]">
              {t('Коротко о').replace(' главном.', '')}{' '}
              <span className="font-italic-serif text-brand">{t('главном.')}</span>
            </h2>
            <p className="max-w-[640px] text-[15.5px] text-ink-2 sm:text-[18px]">
              {t('Не нашёл свой? Напиши в')}{' '}
              <a href="#" className="text-brand underline">
                @belocal_help
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              const panelId = `faq-panel-${i}`
              const buttonId = `faq-trigger-${i}`
              return (
                <div
                  key={i}
                  className={clsx('border-t border-line', i === FAQS.length - 1 && 'border-b')}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-3 py-4 text-left text-[15.5px] font-semibold tracking-tight text-ink outline-none transition-colors focus-visible:text-brand sm:gap-4 sm:py-5 sm:text-[18px]"
                  >
                    {t(f.q)}
                    <span
                      className={clsx(
                        'flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line transition-all duration-200',
                        isOpen ? 'rotate-45 border-brand bg-brand text-white' : 'text-ink-3',
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-[60ch] pb-4 text-[14px] leading-relaxed text-ink-3 sm:pb-5 sm:text-[15.5px]">
                          {t(f.a)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </Wrap>
    </section>
  )
}
