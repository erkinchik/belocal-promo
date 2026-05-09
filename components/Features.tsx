'use client'

import { motion } from 'framer-motion'
import { useI18n } from './i18n'
import { Section, Kicker } from './ui/Section'
import { Button } from './ui/Button'

function CardShell({
  className,
  children,
  delay = 0,
}: {
  className?: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}

function CardTag({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-[0.14em] ${
        light ? 'text-white/50' : 'text-ink-3'
      }`}
    >
      {children}
    </span>
  )
}

export function Features() {
  const { t } = useI18n()
  return (
    <Section id="features">
      <div className="mb-14 grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <Kicker>{t('Возможности')}</Kicker>
          <h2 className="mb-3.5 mt-3.5 text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
            {t('Один помощник на').replace(' всё путешествие.', '')} <span className="font-italic-serif text-brand">{t('всё путешествие.')}</span>
          </h2>
          <p className="max-w-[640px] text-[18px] text-ink-2">
            {t('От Лиссабона до Бали — один помощник на каждое направление. Брони отелей и экскурсий — через Booking, GetYourGuide и Tripadvisor.')}
          </p>
        </div>
        <Button as="a" href="#showcase" variant="dark" withArrow>
          {t('Все функции')}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(180px,auto)]">
        {/* C1 - AI Chat */}
        <CardShell className="!bg-ink !text-white lg:col-span-3" delay={0}>
          <CardTag light>{t('01 · Чат с ИИ')}</CardTag>
          <div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white">
              {t('Говори как с другом')}
            </h3>
            <p className="max-w-[36ch] text-[15px] text-white/65">
              {t('Опиши настроение, бюджет и время — получишь маршрут, бронь и причины, почему именно это.')}
            </p>
          </div>
          <div className="mt-6 flex flex-1 items-center justify-center">
            <div className="flex w-full flex-col gap-2">
              <div className="max-w-[78%] self-end rounded-[14px_14px_4px_14px] bg-brand px-3 py-2 text-[12px] font-medium text-white">
                {t('«Закат в Лиссабоне с видом на реку, до €40»')}
              </div>
              <div className="max-w-[78%] self-start rounded-[14px_14px_14px_4px] border border-white/15 bg-white/10 px-3 py-2 text-[12px] text-white">
                {t('3 точки в Алфаме — столики свободны после 19:30')}
              </div>
              <div className="inline-flex max-w-fit gap-1 self-start rounded-[14px] border border-white/15 bg-white/10 px-3 py-2.5">
                <span className="h-[5px] w-[5px] animate-blink rounded-full bg-white" />
                <span className="h-[5px] w-[5px] animate-blink rounded-full bg-white [animation-delay:0.2s]" />
                <span className="h-[5px] w-[5px] animate-blink rounded-full bg-white [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        </CardShell>

        {/* C2 - Map */}
        <CardShell className="lg:col-span-3" delay={0.05}>
          <CardTag>{t('02 · Карта')}</CardTag>
          <div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight tracking-[-0.02em]">
              {t('Места, где ходят местные')}
            </h3>
            <p className="max-w-[36ch] text-[15px] text-ink-3">
              {t('Без туристических ловушек. Только проверенные кафе, виды и тропы — с актуальными часами.')}
            </p>
          </div>
          <div className="mt-6 flex h-full flex-1 items-center justify-center">
            <div className="map-grid relative h-full min-h-[160px] w-full overflow-hidden rounded-[14px] bg-gradient-to-b from-brand-50 to-brand-100">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none">
                <motion.path
                  d="M 30 160 C 80 120, 140 180, 200 100 S 320 50, 370 80"
                  stroke="#0353A4"
                  strokeWidth="2.5"
                  strokeDasharray="6 5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />
              </svg>
              <span className="absolute h-[18px] w-[18px] rotate-[-45deg] rounded-[50%_50%_50%_0] border-2 border-white bg-brand shadow-[0_4px_10px_rgba(2,37,88,0.3)]" style={{ top: '74%', left: '7%' }} />
              <span className="absolute h-[18px] w-[18px] rotate-[-45deg] rounded-[50%_50%_50%_0] border-2 border-white bg-ink" style={{ top: '48%', left: '48%' }} />
              <span className="absolute h-[18px] w-[18px] rotate-[-45deg] rounded-[50%_50%_50%_0] border-2 border-white bg-brand" style={{ top: '36%', left: '88%' }} />
            </div>
          </div>
        </CardShell>

        {/* C3 - Itinerary */}
        <CardShell className="lg:col-span-2" delay={0.1}>
          <CardTag>{t('03 · Маршрут')}</CardTag>
          <div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight tracking-[-0.02em]">
              {t('Готовый план дня')}
            </h3>
            <p className="max-w-[36ch] text-[15px] text-ink-3">
              {t('За 30 секунд — расписание с переходами и резервами времени.')}
            </p>
          </div>
          <div className="mt-6">
            <div className="flex flex-col gap-2">
              {[
                ['10:00', 'Кофе в Copenhagen', 'кофе'],
                ['12:30', 'Старый Стамбул', 'пешком'],
                ['19:00', 'Çiya · ужин', 'бронь'],
              ].map(([when, where, tag]) => (
                <div
                  key={where}
                  className="flex items-center justify-between rounded-[12px] border border-line bg-paper px-3 py-2.5 text-[13px]"
                >
                  <span className="text-[11.5px] font-semibold uppercase tracking-wider text-ink-3">
                    {when}
                  </span>
                  <span className="font-semibold">{t(where)}</span>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand">
                    {t(tag)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardShell>

        {/* C4 - Partners */}
        <CardShell className="!bg-brand !text-white lg:col-span-2" delay={0.15}>
          <CardTag light>{t('04 · Партнёры')}</CardTag>
          <div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white">
              {t('Брони через тех, кому доверяют миллионы')}
            </h3>
          </div>
          <div className="mt-6 flex w-full flex-col gap-2.5">
            {[
              ['Booking.com', 'отели'],
              ['Google Maps', 'места'],
              ['GetYourGuide', 'экскурсии'],
              ['Tripadvisor', 'отзывы'],
            ].map(([name, kind]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-[12px] border border-white/15 bg-white/10 px-3.5 py-2.5 text-[13px] font-semibold text-white"
              >
                {name}
                <span className="text-[12px] font-medium text-brand-300">{t(kind)}</span>
              </div>
            ))}
          </div>
        </CardShell>

        {/* C5 - Community */}
        <CardShell className="lg:col-span-2" delay={0.2}>
          <CardTag>{t('05 · Сообщество')}</CardTag>
          <div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight tracking-[-0.02em]">
              {t('Подсказки от местных')}
            </h3>
            <p className="max-w-[36ch] text-[15px] text-ink-3">{t('Реальные жители — не блогеры.')}</p>
          </div>
          <div className="mt-6 flex items-center">
            {[
              { i: 'Н', bg: 'bg-brand' },
              { i: 'Г', bg: 'bg-[#1a4a8c]' },
              { i: 'А', bg: 'bg-[#2D6BB5]' },
              { i: 'М', bg: 'bg-ink' },
              { i: '+12', bg: 'bg-[#345E91]' },
            ].map(({ i, bg }, idx) => (
              <div
                key={idx}
                className={`-ml-2.5 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-paper text-[13px] font-semibold text-white first:ml-0 ${bg} ${idx === 4 ? 'text-[12px]' : ''}`}
              >
                {i}
              </div>
            ))}
          </div>
        </CardShell>
      </div>
    </Section>
  )
}
