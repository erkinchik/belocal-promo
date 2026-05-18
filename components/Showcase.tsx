'use client'

import { motion } from 'framer-motion'
import { useI18n } from './i18n'
import { Wrap, Kicker } from './ui/Section'

function PhoneFrame({
  label,
  title,
  text,
  children,
  delay = 0,
}: {
  label: string
  title: string
  text: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="relative overflow-hidden rounded-[26px] border border-line bg-gradient-to-b from-brand-50 to-[#F4F1E8] px-5 pt-7 sm:rounded-[32px] sm:px-7 sm:pt-9"
    >
      <div className="mb-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand sm:text-[12.5px]">{label}</div>
      <div className="mb-3 text-[18px] font-semibold leading-tight tracking-[-0.02em] sm:mb-3.5 sm:text-[22px]">{title}</div>
      <div className="mb-5 min-h-[40px] text-[13.5px] text-ink-3 sm:mb-6 sm:min-h-[48px] sm:text-[14.5px]">{text}</div>
      <div className="-mb-10 mx-auto aspect-[9/17] w-[78%] rounded-t-[32px] rounded-b-[18px] bg-[#0E0E0E] p-[7px] pb-0 shadow-[0_28px_50px_-12px_rgba(2,37,88,0.28)]">
        <div className="relative h-full w-full overflow-hidden rounded-t-[26px] rounded-b-[8px] bg-white">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export function Showcase() {
  const { t } = useI18n()
  return (
    <section id="showcase" className="border-y border-line bg-white py-14 sm:py-20 md:py-[120px]">
      <Wrap>
        <div className="mb-10 grid items-end gap-6 sm:gap-10 md:mb-14 md:grid-cols-[1fr_auto]">
          <div>
            <Kicker>{t('Приложение')}</Kicker>
            <h2 className="mb-3 mt-3 text-[clamp(28px,6vw,60px)] font-bold leading-[1.08] tracking-[-0.03em] sm:mb-3.5 sm:mt-3.5 sm:leading-[1.05]">
              {t('Три экрана —')} <span className="font-italic-serif text-brand">{t('один маршрут.')}</span>
            </h2>
            <p className="max-w-[640px] text-[15.5px] text-ink-2 sm:text-[18px]">
              {t('Чат, карта и план. Они общаются друг с другом: спросил в чате — отметилось на карте — попало в маршрут.')}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-[380px] grid-cols-1 gap-5 sm:gap-6 md:mt-8 md:max-w-none md:grid-cols-3">
          {/* Frame 1 - Chat */}
          <PhoneFrame label="01 · Chat" title={t('AI-собеседник')} text={t('Спрашивай как друга — без меню, фильтров и форм.')} delay={0}>
            <div className="flex flex-col gap-2 px-3 py-3.5">
              <div className="max-w-[80%] self-end rounded-[13px] rounded-br-[4px] bg-brand px-2.5 py-2 text-[11.5px] text-white">
                {t('Что съесть в Стамбуле, не туристическое')}
              </div>
              <div className="max-w-[80%] self-start rounded-[13px] rounded-bl-[4px] bg-[#F2F2F0] px-2.5 py-2 text-[11.5px] text-ink">
                {t('Нашёл 3 локанты, где обедают местные. Все в Кадыкёе:')}
              </div>
              <div className="flex items-center gap-2 self-start rounded-[13px] border border-line bg-white p-2 text-[11px]">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand to-[#76A6DD]" />
                <div>
                  <strong className="block text-[11.5px]">Çiya Sofrası</strong>
                  <span className="text-[10.5px] text-ink-3">{t('анатолийская · 4 мин')}</span>
                </div>
              </div>
              <div className="max-w-[80%] self-end rounded-[13px] rounded-br-[4px] bg-brand px-2.5 py-2 text-[11.5px] text-white">
                {t('Закажи столик на 19:00')}
              </div>
              <div className="max-w-[80%] self-start rounded-[13px] rounded-bl-[4px] bg-[#F2F2F0] px-2.5 py-2 text-[11.5px] text-ink">
                {t('Готово. Бронь придёт на почту.')}
              </div>
            </div>
          </PhoneFrame>

          {/* Frame 2 - Map */}
          <PhoneFrame label="02 · Map" title={t('Карта местных')} text={t('Только проверенные места — без турловушек.')} delay={0.1}>
            <div className="map-grid-lg relative h-full bg-gradient-to-b from-brand-50 to-brand-100">
              <div className="absolute inset-x-3 top-3.5 z-10 flex items-center justify-between rounded-full bg-white px-3.5 py-2 text-[11.5px] font-medium shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
                <span>{t('Сололаки, Тбилиси')}</span>
                <span className="font-bold text-brand">{t('12 мест')}</span>
              </div>
              {[
                { top: '38%', left: '24%', alt: false },
                { top: '50%', left: '54%', alt: true },
                { top: '32%', left: '74%', alt: false },
                { top: '62%', left: '36%', alt: true },
              ].map((p, i) => (
                <span
                  key={i}
                  className={`absolute h-8 w-8 rotate-[-45deg] rounded-[50%_50%_50%_0] border-[3px] border-white shadow-[0_4px_12px_rgba(2,37,88,0.3)] ${p.alt ? 'bg-ink' : 'bg-brand'}`}
                  style={{ top: p.top, left: p.left }}
                />
              ))}
              <div className="absolute inset-x-2.5 bottom-2.5 flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <div className="h-[46px] w-[46px] rounded-[10px] bg-gradient-to-br from-brand to-[#7BA9DD]" />
                <div className="flex-1 text-[11px]">
                  <strong className="mb-0.5 block text-[12px]">Tone Bakery</strong>
                  <span className="text-ink-3">{t('пекарня · открыто до 22:00')}</span>
                </div>
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand text-[14px] text-white">
                  →
                </div>
              </div>
            </div>
          </PhoneFrame>

          {/* Frame 3 - Plan */}
          <PhoneFrame label="03 · Plan" title={t('Дневной маршрут')} text={t('План с переходами и резервом — синхронизирован с календарём.')} delay={0.2}>
            <div className="flex h-full flex-col gap-2 bg-white px-3 py-3.5">
              <div className="text-[13px] font-bold tracking-tight">{t('Суббота · Ереван')}</div>
              {[
                ['1', 'Кофе в Lumen', '10:00 · 1 ч'],
                ['2', 'Каскад · смотровая', '12:30 · 2 ч'],
                ['3', 'Винный квартал Areni', '16:00 · 1.5 ч'],
                ['4', 'Sherep · ужин', '19:00 · бронь'],
              ].map(([num, name, time], i) => (
                <div key={num}>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-brand text-[10.5px] font-bold text-white">
                      {num}
                    </div>
                    <div className="text-[11.5px] leading-tight">
                      <strong className="block">{t(name)}</strong>
                      <span className="text-[10.5px] text-ink-3">{t(time)}</span>
                    </div>
                  </div>
                  {i < 3 && <div className="ml-[30px] mt-1.5 h-px bg-line" />}
                </div>
              ))}
            </div>
          </PhoneFrame>
        </div>
      </Wrap>
    </section>
  )
}
