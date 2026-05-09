'use client'

import { useI18n } from './i18n'

export function DemoBar() {
  const { t } = useI18n()
  return (
    <div className="border-b border-black bg-ink px-5 py-2.5 text-center text-[13px] font-medium tracking-tight text-white">
      <span className="mr-2 inline-block h-[7px] w-[7px] animate-pulse-ring rounded-full bg-accent-amber" />
      {t('Проект в разработке · это живое демо будущего продукта.')}{' '}
      <a
        href="#partners"
        className="ml-2 text-brand-300 underline underline-offset-2 hover:text-white"
      >
        {t('Стать ранним партнёром →')}
      </a>
    </div>
  )
}
