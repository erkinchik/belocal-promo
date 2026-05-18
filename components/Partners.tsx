'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from './i18n'
import { Wrap, Kicker } from './ui/Section'
import { Button } from './ui/Button'

const PLACE_BENEFITS = [
  'Карточка заведения с фото, меню и часами',
  'Прямые брони без посредников',
  'Аналитика: откуда пришёл гость, что заказал',
  'Промо-слот в чате ИИ при совпадении запроса',
]

const CREATOR_BENEFITS = [
  'До 30% с продажи маршрута',
  'Реферальные ссылки и промокоды',
  'Студия маршрутов: точки, текст, фото',
  'Профиль с подписчиками и отзывами',
]

const STATS = [
  { value: '0%', label: 'комиссия для бета-партнёров' },
  { value: '120+', label: 'городов в roadmap' },
  { value: '30%', label: 'доля креатора с маршрута' },
  { value: 'Q3 ’26', label: 'публичный запуск' },
]

function CardList({ items, light }: { items: string[]; light?: boolean }) {
  const { t } = useI18n()
  return (
    <ul className={`mb-6 mt-4 flex flex-col gap-2.5 text-[14.5px] ${light ? 'text-white/80' : 'text-ink-2'}`}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5">
          <span className={`font-bold ${light ? 'text-brand-300' : 'text-brand'}`}>→</span>
          {t(it)}
        </li>
      ))}
    </ul>
  )
}

export function Partners() {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="partners"
      className="border-y border-line py-14 sm:py-20 md:py-[120px]"
      style={{ background: 'linear-gradient(180deg, #FAFAF7, #F2F1EC)' }}
    >
      <Wrap>
        <div className="mb-10 md:mb-14">
          <Kicker>{t('Партнёрам · креаторам')}</Kicker>
          <h2 className="mb-3 mt-3 text-[clamp(28px,6vw,60px)] font-bold leading-[1.08] tracking-[-0.03em] sm:mb-3.5 sm:mt-3.5 sm:leading-[1.05]">
            {t('Бесплатно для всех,')} <span className="font-italic-serif text-brand">{t('кто едет.')}</span>
          </h2>
          <p className="max-w-[640px] text-[15.5px] text-ink-2 sm:text-[18px]">
            {t('Зарабатывают те, кто помогает находить настоящее — места и локальные эксперты.')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {/* For Places */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-line bg-white p-5 sm:min-h-[340px] sm:rounded-3xl sm:p-7"
          >
            <span className="absolute right-4 top-4 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-3 sm:right-6 sm:top-6 sm:text-[11px]">
              {t('Для мест')}
            </span>
            <div>
              <h3 className="mb-2 max-w-[80%] text-[22px] font-semibold leading-tight tracking-[-0.025em] sm:text-[28px]">
                {t('Кафе, бары, отели, гиды')}
              </h3>
              <p className="max-w-[42ch] text-[14px] text-ink-3 sm:text-[15px]">
                {t('Попадай в маршруты ИИ, получай брони и реальный поток гостей. Бета-партнёры платят 0% комиссии до конца 2026 года.')}
              </p>
            </div>
            <CardList items={PLACE_BENEFITS} />
            <Button as="a" href="#partner-form" variant="primary" withArrow>
              {t('Стать партнёром')}
            </Button>
          </motion.div>

          {/* For Creators */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-line bg-ink p-5 text-white sm:min-h-[340px] sm:rounded-3xl sm:p-7"
          >
            <span className="absolute right-4 top-4 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/50 sm:right-6 sm:top-6 sm:text-[11px]">
              {t('Для креаторов')}
            </span>
            <div>
              <h3 className="mb-2 max-w-[80%] text-[22px] font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[28px]">
                {t('Локалы, гиды, тревел-блогеры')}
              </h3>
              <p className="max-w-[42ch] text-[14px] text-white/70 sm:text-[15px]">
                {t('Загружай авторские маршруты — получай долю от каждой брони и партнёрский процент с подписок. ИИ предложит твой контент в нужном контексте.')}
              </p>
            </div>
            <CardList items={CREATOR_BENEFITS} light />
            <Button as="a" href="#partner-form" variant="light" withArrow>
              {t('Стать креатором')}
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <StatsBar />

        {/* Form */}
        <div
          id="partner-form"
          className="mt-6 grid items-center gap-6 rounded-2xl border border-line bg-white p-5 sm:mt-8 sm:gap-8 sm:rounded-3xl sm:p-8 lg:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <h3 className="mb-2 text-[20px] font-semibold tracking-[-0.02em] sm:text-[24px]">{t('Оставь заявку')}</h3>
            <p className="text-[13.5px] text-ink-3 sm:text-[14.5px]">{t('Свяжемся в течение 48 часов. Без спама — это обещание.')}</p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="h-12 w-full rounded-full border border-line bg-paper px-4 text-[14.5px] text-ink outline-none transition-colors focus:border-brand sm:h-[52px] sm:min-w-[220px] sm:flex-1 sm:px-5 sm:text-[15px]"
            />
            <select className="h-12 w-full rounded-full border border-line bg-paper px-4 text-[14.5px] text-ink-2 outline-none focus:border-brand sm:h-[52px] sm:w-auto sm:px-5 sm:text-[15px]">
              <option>{t('Я — место')}</option>
              <option>{t('Я — креатор')}</option>
              <option>{t('Другое')}</option>
            </select>
            <Button
              size="lg"
              variant={submitted ? 'primary' : 'primary'}
              withArrow={!submitted}
              type="submit"
              disabled={submitted}
              className={`w-full justify-center sm:w-auto ${submitted ? '!bg-accent-mint' : ''}`}
            >
              {submitted ? t('Спасибо ✓') : t('Отправить')}
            </Button>
          </form>
        </div>
      </Wrap>
    </section>
  )
}

function StatsBar() {
  const { t } = useI18n()
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="rounded-2xl border border-line bg-white p-4 sm:p-6"
        >
          <div className="font-italic-serif text-[32px] leading-none tracking-[-0.02em] text-brand sm:text-[44px]">
            {s.value}
          </div>
          <div className="mt-1.5 text-[12px] text-ink-3 sm:text-[13px]">{t(s.label)}</div>
        </motion.div>
      ))}
    </div>
  )
}
