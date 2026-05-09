'use client'

import Image from 'next/image'
import { Wrap } from './ui/Section'
import { useI18n } from './i18n'

const COLS = [
  {
    title: 'Продукт',
    links: [
      ['Возможности', '#features'],
      ['Скриншоты', '#showcase'],
      ['Как работает', '#how'],
      ['Цены', '#'],
    ],
  },
  {
    title: 'Компания',
    links: [
      ['О нас', '#'],
      ['Блог', '#'],
      ['Партнёрам', '#partners'],
      ['Контакты', '#'],
    ],
  },
  {
    title: 'Юр. инфо',
    links: [
      ['Условия', '#'],
      ['Конфиденциальность', '#'],
      ['Cookies', '#'],
      ['Лицензии', '#'],
    ],
  },
]

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="mt-6 border-t border-line py-16 pb-10">
      <Wrap>
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-12">
          <div>
            <a href="#" className="mb-4 inline-block">
              <Image src="/belocal-logo.png" alt="belocal" width={130} height={26} className="h-[26px] w-auto" />
            </a>
            <p className="mb-4 max-w-[32ch] text-[14.5px] text-ink-3">
              {t('Карманный ИИ-гид для тех, кто едет жить, а не фотографироваться.')}
            </p>
            <div className="flex gap-2.5">
              {[
                {
                  label: 'Telegram',
                  d: 'M21.7 4.3 2.4 11.6c-1.1.4-1.1 1 .1 1.4l4.9 1.6 2 6.4c.2.7.7.8 1.2.4l2.7-2.4 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.2-.4-1.7-1.1-1.7Z',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 3h3l-7 8 8 10h-6l-5-6-6 6H2l8-9L2 3h6l4 5z" />
                </svg>
              </a>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-ink-3">{t(col.title)}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[14.5px] text-ink-2 transition-colors hover:text-brand">
                      {t(label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[13px] text-ink-3">
          <span>{t('© 2026 belocal. Сделано путешественниками.')}</span>
          <span>{t('Тбилиси · Лиссабон · Алматы')}</span>
        </div>
      </Wrap>
    </footer>
  )
}
