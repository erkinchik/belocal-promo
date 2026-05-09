'use client'

import { motion } from 'framer-motion'
import { useI18n } from './i18n'

export function PhoneMock() {
  const { t } = useI18n()

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[540px] overflow-hidden rounded-[28px] border border-line sm:aspect-[4/5] sm:rounded-[36px]"
      style={{
        background:
          'radial-gradient(120% 80% at 80% 0%, #DCE7F4 0%, rgba(220,231,244,0) 60%), linear-gradient(180deg,#EEF3FA 0%,#F4F1E8 100%)',
      }}
    >
      <div className="absolute inset-0 stage-grid" />

      {/* phone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 aspect-[9/19] h-[92%] rounded-[32px] bg-[#0E0E0E] p-1.5 shadow-[0_30px_80px_-10px_rgba(2,37,88,0.35),0_8px_22px_rgba(0,0,0,0.18)] sm:h-[88%] sm:rounded-[38px] sm:p-2"
        style={{ x: '-50%', y: '-50%' }}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[26px] bg-white sm:rounded-[34px]">
          <div className="absolute left-1/2 top-1 z-10 h-[18px] w-[60px] -translate-x-1/2 rounded-[12px] bg-[#0E0E0E] sm:top-1.5 sm:h-[22px] sm:w-[80px] sm:rounded-[14px]" />
          <div className="flex items-center justify-between px-3 pb-1 pt-2 text-[9px] font-semibold text-ink sm:px-[18px] sm:pb-1.5 sm:pt-3 sm:text-[11px]">
            <span>9:41</span>
            <span className="inline-flex items-center gap-1.5">●●● ▮▮▮</span>
          </div>
          <div className="flex items-center gap-2 border-b border-line px-2.5 pb-2 pt-1.5 sm:gap-2.5 sm:px-3.5 sm:pb-2.5 sm:pt-2">
            <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white sm:h-[30px] sm:w-[30px] sm:text-[12px]">
              b
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="text-[10.5px] sm:text-[12.5px]">belocal</strong>
              <span className="text-[9px] text-ink-3 sm:text-[10.5px]">{t('онлайн · отвечает за 2 сек')}</span>
            </div>
          </div>
          <div className="flex flex-1 min-h-0 flex-col gap-1.5 overflow-hidden bg-gradient-to-b from-white to-[#F7F8FB] px-2 py-2 sm:gap-2 sm:px-3 sm:py-2.5">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-[82%] self-end rounded-[12px] rounded-br-[4px] bg-brand px-2.5 py-1.5 text-[9.5px] leading-snug text-white sm:max-w-[78%] sm:rounded-[14px] sm:rounded-br-[4px] sm:px-3 sm:py-2.5 sm:text-[11.5px]"
            >
              {t('Хочу провести вечер в Тбилиси. Люблю вино и тихие улочки')}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="max-w-[82%] self-start rounded-[12px] rounded-bl-[4px] border border-line bg-white px-2.5 py-1.5 text-[9.5px] leading-snug text-ink sm:max-w-[78%] sm:rounded-[14px] sm:rounded-bl-[4px] sm:px-3 sm:py-2.5 sm:text-[11.5px]"
            >
              {t('Собрал маршрут на 4 часа — сванская хинкальная, винный бар в подвале XIX в. и серные бани в финале.')}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="overflow-hidden rounded-[12px] border border-line bg-white text-[9.5px] sm:rounded-[14px] sm:text-[11px]"
            >
              <div className="relative h-10 bg-gradient-to-br from-brand to-[#67A0DC] sm:h-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.4),transparent_60%)]" />
              </div>
              <div className="flex items-center justify-between gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-2">
                <div className="min-w-0">
                  <strong className="block truncate text-[9.5px] sm:text-[11.5px]">{t('Винный бар «Vino Underground»')}</strong>
                  <span className="text-[9px] text-ink-3 sm:text-[10.5px]">{t('Старый Тбилиси · 8 мин')}</span>
                </div>
                <span className="flex-shrink-0 text-[9.5px] font-bold text-brand sm:text-[11px]">{t('от ₾18')}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="hidden max-w-[78%] self-end rounded-[14px] rounded-br-[4px] bg-brand px-3 py-2.5 text-[11.5px] leading-snug text-white sm:block"
            >
              {t('А что-то ещё?')}
            </motion.div>
          </div>
          <div className="mx-2 mb-2 flex h-6 items-center justify-between rounded-full border border-line bg-white px-2.5 text-[9px] text-ink-3 sm:mx-3 sm:mb-3 sm:h-8 sm:px-3 sm:text-[11px]">
            <span>{t('Сообщение…')}</span>
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand text-[10px] text-white sm:h-[22px] sm:w-[22px] sm:text-[12px]">
              →
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
