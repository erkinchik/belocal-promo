'use client'

import Image from 'next/image'
import { useI18n } from './i18n'
import { Button } from './ui/Button'
import clsx from 'clsx'

export function Nav() {
  const { t, lang, setLang } = useI18n()
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-4 sm:h-[68px] sm:px-5 md:px-7">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/belocal-logo.png"
            alt="belocal"
            width={130}
            height={26}
            className="h-[22px] w-auto sm:h-[26px]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {[
            { href: '#features', label: 'Возможности' },
            { href: '#showcase', label: 'Приложение' },
            { href: '#how', label: 'Как работает' },
            { href: '#partners', label: 'Партнёрам' },
            { href: '#faq', label: 'Вопросы' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14.5px] font-medium text-ink-2 transition-colors hover:text-brand"
            >
              {t(l.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div
            role="tablist"
            aria-label="Language"
            className="inline-flex h-8 items-center rounded-full border border-line bg-white p-[3px] sm:h-9"
          >
            {(['ru', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-selected={lang === l}
                className={clsx(
                  'h-6 rounded-full px-2.5 text-[11.5px] font-semibold uppercase tracking-wider transition sm:h-7 sm:px-3 sm:text-[12.5px]',
                  lang === l ? 'bg-ink text-white' : 'text-ink-3 hover:text-ink',
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <Button as="a" href="#download" variant="primary" withArrow className="hidden sm:inline-flex">
            {t('Ранний доступ')}
          </Button>
        </div>
      </div>
    </header>
  )
}
