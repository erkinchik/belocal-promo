'use client'

import { motion } from 'framer-motion'
import { useI18n } from './i18n'
import { Section, Kicker } from './ui/Section'

const STEPS = [
  {
    num: 1,
    title: 'Опиши идею своими словами',
    text: '«Выходные в горах с видом на закат и хорошим хинкали» — этого достаточно. ИИ задаст 1-2 уточняющих вопроса.',
    tag: '≈ 30 секунд',
  },
  {
    num: 2,
    title: 'Получи маршрут под себя',
    text: 'Места, переходы, тайминг и бронь — собрано в один план. Подвинь, замени, удали — всё гибко.',
    tag: '+ карта · бронь',
  },
  {
    num: 3,
    title: 'Иди и наслаждайся',
    text: 'belocal ведёт по маршруту, подсказывает контекст и бронирует отели, экскурсии и столики в один тап.',
    tag: 'в один тап',
  },
]

export function HowItWorks() {
  const { t } = useI18n()
  return (
    <Section id="how">
      <div className="mb-14">
        <Kicker>{t('Как работает')}</Kicker>
        <h2 className="mb-3.5 mt-3.5 text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
          {t('Три шага —')} <span className="font-italic-serif text-brand">{t('и ты в дороге.')}</span>
        </h2>
        <p className="max-w-[640px] text-[18px] text-ink-2">
          {t('Никаких длинных форм. Скажи, чего хочешь — belocal сделает остальное.')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            className="relative flex min-h-[260px] flex-col gap-4 rounded-3xl border border-line bg-paper-2 p-8 transition-transform hover:-translate-y-1"
          >
            <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-line bg-white font-italic-serif text-[16px] font-bold text-brand">
              {s.num}
            </span>
            <h4 className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">{t(s.title)}</h4>
            <p className="flex-1 text-[14.5px] text-ink-3">{t(s.text)}</p>
            <span className="self-start rounded-full bg-brand-50 px-2.5 py-1 text-[11.5px] font-semibold text-brand">
              {t(s.tag)}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
