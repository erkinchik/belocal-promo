'use client'

import { useI18n } from './i18n'

const CITIES = [
  'Тбилиси',
  'Стамбул',
  'Ереван',
  'Лиссабон',
  'Бали',
  'Барселона',
  'Прага',
  'Алматы',
  'Белград',
  'Дубай',
  'Бангкок',
  'Рим',
]

export function Marquee() {
  const { t } = useI18n()
  const items = [...CITIES, ...CITIES]
  return (
    <div className="overflow-hidden border-y border-line bg-white py-3 sm:py-3.5" aria-hidden>
      <div className="flex animate-marquee gap-6 whitespace-nowrap text-[14px] font-semibold tracking-tight text-ink-3 sm:gap-10 sm:text-[18px]">
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-2 sm:gap-3">
            {t(c)}
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
        ))}
      </div>
    </div>
  )
}
