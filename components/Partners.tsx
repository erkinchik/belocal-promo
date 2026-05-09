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
      className="border-y border-line py-[88px] md:py-[120px]"
      style={{ background: 'linear-gradient(180deg, #FAFAF7, #F2F1EC)' }}
    >
      <Wrap>
        <div className="mb-14">
          <Kicker>{t('Партнёрам · креаторам')}</Kicker>
          <h2 className="mb-3.5 mt-3.5 text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
            {t('Бесплатно для всех,')} <span className="font-italic-serif text-brand">{t('кто едет.')}</span>
          </h2>
          <p className="max-w-[640px] text-[18px] text-ink-2">
            {t('Зарабатывают те, кто помогает находить настоящее — места и локальные эксперты.')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* For Places */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[340px] overflow-hidden rounded-3xl border border-line bg-white p-7"
          >
            <span className="absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">
              {t('Для мест')}
            </span>
            <div>
              <h3 className="mb-2 max-w-[80%] text-[28px] font-semibold leading-tight tracking-[-0.025em]">
                {t('Кафе, бары, отели, гиды')}
              </h3>
              <p className="max-w-[42ch] text-[15px] text-ink-3">
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
            className="relative min-h-[340px] overflow-hidden rounded-3xl border border-line bg-ink p-7 text-white"
          >
            <span className="absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
              {t('Для креаторов')}
            </span>
            <div>
              <h3 className="mb-2 max-w-[80%] text-[28px] font-semibold leading-tight tracking-[-0.025em] text-white">
                {t('Локалы, гиды, тревел-блогеры')}
              </h3>
              <p className="max-w-[42ch] text-[15px] text-white/70">
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
          className="mt-8 grid items-center gap-8 rounded-3xl border border-line bg-white p-8 lg:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <h3 className="mb-2 text-[24px] font-semibold tracking-[-0.02em]">{t('Оставь заявку')}</h3>
            <p className="text-[14.5px] text-ink-3">{t('Свяжемся в течение 48 часов. Без спама — это обещание.')}</p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-wrap gap-2.5">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="h-[52px] min-w-[220px] flex-1 rounded-full border border-line bg-paper px-5 text-[15px] text-ink outline-none transition-colors focus:border-brand"
            />
            <select className="h-[52px] rounded-full border border-line bg-paper px-5 text-[15px] text-ink-2 outline-none focus:border-brand">
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
              className={submitted ? '!bg-accent-mint' : ''}
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
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="rounded-2xl border border-line bg-white p-6"
        >
          <div className="font-italic-serif text-[44px] leading-none tracking-[-0.02em] text-brand">
            {s.value}
          </div>
          <div className="mt-1.5 text-[13px] text-ink-3">{t(s.label)}</div>
        </motion.div>
      ))}
    </div>
  )
}
