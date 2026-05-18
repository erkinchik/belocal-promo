'use client'

import { useI18n } from './i18n'

export function DemoBar() {
  const { t } = useI18n()
  return (
    <div className="border-b border-black bg-ink px-4 py-2 text-center text-[11.5px] font-medium tracking-tight text-white sm:px-5 sm:py-2.5 sm:text-[13px]">
      <span className="mr-2 inline-block h-[6px] w-[6px] animate-pulse-ring rounded-full bg-accent-amber sm:h-[7px] sm:w-[7px]" />
      {t('Проект в разработке · это живое демо будущего продукта.')}{' '}
      <a
        href="#partners"
        className="ml-1 inline-block text-brand-300 underline underline-offset-2 hover:text-white sm:ml-2"
      >
        {t('Стать ранним партнёром →')}
      </a>
    </div>
  )
}
