'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from './i18n'
import { Button } from './ui/Button'
import clsx from 'clsx'

const LINKS = [
  { href: '#features', label: 'Возможности' },
  { href: '#showcase', label: 'Приложение' },
  { href: '#how', label: 'Как работает' },
  { href: '#partners', label: 'Партнёрам' },
  { href: '#faq', label: 'Вопросы' },
]

export function Nav() {
  const { t, lang, setLang } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-4 sm:h-[68px] sm:px-5 md:px-7">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/belocal-logo.png"
            alt="belocal"
            width={192}
            height={59}
            className="h-[22px] w-auto sm:h-[26px]"
            style={{ width: 'auto' }}
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
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
          <Button as="a" href="#download" variant="primary" withArrow className="hidden lg:inline-flex">
            {t('Ранний доступ')}
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-line-strong lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          'lg:hidden',
          'overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-300 ease-out',
          menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="mx-auto flex max-w-[1240px] flex-col gap-1 px-4 py-3 sm:px-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink-2 transition-colors hover:bg-white hover:text-brand"
            >
              {t(l.label)}
            </a>
          ))}
          <Button
            as="a"
            href="#download"
            variant="primary"
            withArrow
            className="mt-2 justify-center"
            onClick={() => setMenuOpen(false)}
          >
            {t('Ранний доступ')}
          </Button>
        </nav>
      </div>
    </header>
  )
}
