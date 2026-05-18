'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'ru' | 'en'

const DICT: Record<string, string> = {
  // demo bar
  'Проект в разработке · это живое демо будущего продукта.':
    'Project in development · this is a live demo of the upcoming product.',
  'Стать ранним партнёром →': 'Become an early partner →',
  // nav
  Возможности: 'Features',
  Приложение: 'App',
  'Как работает': 'How it works',
  Партнёрам: 'Partners',
  Вопросы: 'FAQ',
  'Ранний доступ': 'Early access',
  // hero
  'Путешествуй как местный, а не как турист.':
    'Travel like a local, not like a tourist.',
  'как местный': 'like a local',
  'Be local anywhere in the world.': 'Be local anywhere in the world.',
  'belocal — карманный AI-гид, который собирает маршрут под твой вкус, бюджет и настроение. Бесплатно для путешественников — навсегда.':
    'belocal is a pocket AI guide that builds an itinerary around your taste, budget and mood. Free for travelers — forever.',
  'Попасть в ранний доступ': 'Get early access',
  'Смотреть демо': 'Watch demo',
  '700+ путешественников в вейтлисте': '700+ travelers on the waitlist',
  'онлайн · отвечает за 2 сек': 'online · replies in 2 sec',
  'Хочу провести вечер в Тбилиси. Люблю вино и тихие улочки':
    'Want to spend an evening in Tbilisi. I love wine and quiet streets',
  'Собрал маршрут на 4 часа — сванская хинкальная, винный бар в подвале XIX в. и серные бани в финале.':
    'Built a 4-hour route — a Svan khinkali spot, a 19th-century wine cellar bar, and sulfur baths to finish.',
  'Винный бар «Vino Underground»': 'Vino Underground wine bar',
  'Старый Тбилиси · 8 мин': 'Old Tbilisi · 8 min',
  'от ₾18': 'from ₾18',
  'А что-то ещё?': 'Anything else?',
  'Сообщение…': 'Message…',
  // trust
  'Интегрировано с': 'Integrated with',
  // features
  'Один помощник на': 'One companion for',
  'Один помощник на всё путешествие.': 'One companion for the whole trip.',
  'всё путешествие.': 'the whole trip.',
  'От Лиссабона до Бали — один помощник на каждое направление. Брони отелей и экскурсий — через Booking, GetYourGuide и Tripadvisor.':
    'From Lisbon to Bali — one companion for every destination. Hotel and tour bookings via Booking, GetYourGuide and Tripadvisor.',
  'Все функции': 'All features',
  '01 · Чат с ИИ': '01 · AI chat',
  'Говори как с другом': 'Talk like to a friend',
  'Опиши настроение, бюджет и время — получишь маршрут, бронь и причины, почему именно это.':
    'Describe mood, budget and time — get an itinerary, bookings and the reasons behind every pick.',
  '«Закат в Лиссабоне с видом на реку, до €40»':
    '"Sunset in Lisbon with a river view, under €40"',
  '3 точки в Алфаме — столики свободны после 19:30':
    '3 spots in Alfama — tables free after 7:30 pm',
  '02 · Карта': '02 · Map',
  'Места, где ходят местные': 'Places where locals go',
  'Без туристических ловушек. Только проверенные кафе, виды и тропы — с актуальными часами.':
    'No tourist traps. Only vetted cafés, views and trails — with live hours.',
  '03 · Маршрут': '03 · Itinerary',
  'Готовый план дня': 'A ready day plan',
  'За 30 секунд — расписание с переходами и резервами времени.':
    'In 30 seconds — schedule with transit and buffer time.',
  'Кофе в Copenhagen': 'Coffee at Copenhagen',
  'Старый Стамбул': 'Old Istanbul',
  'Çiya · ужин': 'Çiya · dinner',
  кофе: 'coffee',
  пешком: 'walk',
  бронь: 'booking',
  '04 · Партнёры': '04 · Partners',
  'Брони через тех, кому доверяют миллионы':
    'Bookings via brands trusted by millions',
  отели: 'hotels',
  места: 'places',
  экскурсии: 'tours',
  отзывы: 'reviews',
  '05 · Сообщество': '05 · Community',
  'Подсказки от местных': 'Tips from real locals',
  'Реальные жители — не блогеры.': 'Real residents — not bloggers.',
  // showcase
  'Три экрана —': 'Three screens —',
  'Три экрана — один маршрут.': 'Three screens — one journey.',
  'один маршрут.': 'one journey.',
  'Чат, карта и план. Они общаются друг с другом: спросил в чате — отметилось на карте — попало в маршрут.':
    'Chat, map and plan — they talk to each other. Ask in chat → it pins on the map → it lands in the itinerary.',
  'AI-собеседник': 'AI companion',
  'Спрашивай как друга — без меню, фильтров и форм.':
    'Ask like a friend — no menus, filters or forms.',
  'Что съесть в Стамбуле, не туристическое':
    'What to eat in Istanbul, off the tourist track',
  'Нашёл 3 локанты, где обедают местные. Все в Кадыкёе:':
    'Found 3 lokantas where locals eat. All in Kadıköy:',
  'анатолийская · 4 мин': 'Anatolian · 4 min',
  'Закажи столик на 19:00': 'Book a table for 7:00 pm',
  'Готово. Бронь придёт на почту.': 'Done. Confirmation in your inbox.',
  'Карта местных': "Locals' map",
  'Только проверенные места — без турловушек.':
    'Only vetted places — no tourist traps.',
  'Сололаки, Тбилиси': 'Sololaki, Tbilisi',
  '12 мест': '12 spots',
  'пекарня · открыто до 22:00': 'bakery · open till 10 pm',
  'Дневной маршрут': 'Day route',
  'План с переходами и резервом — синхронизирован с календарём.':
    'Plan with transit and buffers — synced to your calendar.',
  'Суббота · Ереван': 'Saturday · Yerevan',
  'Кофе в Lumen': 'Coffee at Lumen',
  '10:00 · 1 ч': '10:00 · 1 h',
  'Каскад · смотровая': 'Cascade · viewpoint',
  '12:30 · 2 ч': '12:30 · 2 h',
  'Винный квартал Areni': 'Areni wine quarter',
  '16:00 · 1.5 ч': '16:00 · 1.5 h',
  'Sherep · ужин': 'Sherep · dinner',
  '19:00 · бронь': '19:00 · booking',
  // how
  'Три шага —': 'Three steps —',
  'Три шага — и ты в дороге.': "Three steps — and you're on the road.",
  'и ты в дороге.': "and you're on the road.",
  'Никаких длинных форм. Скажи, чего хочешь — belocal сделает остальное.':
    'No long forms. Say what you want — belocal handles the rest.',
  'Опиши идею своими словами': 'Describe the idea in your words',
  '«Выходные в горах с видом на закат и хорошим хинкали» — этого достаточно. ИИ задаст 1-2 уточняющих вопроса.':
    '"A weekend in the mountains with sunset views and good khinkali" — that\'s enough. The AI will ask 1-2 follow-ups.',
  '≈ 30 секунд': '≈ 30 seconds',
  'Получи маршрут под себя': 'Get a tailored route',
  'Места, переходы, тайминг и бронь — собрано в один план. Подвинь, замени, удали — всё гибко.':
    'Places, transit, timing and bookings — in one plan. Move, swap, delete — everything is flexible.',
  '+ карта · бронь': '+ map · booking',
  'Иди и наслаждайся': 'Go and enjoy',
  'belocal ведёт по маршруту, подсказывает контекст и бронирует отели, экскурсии и столики в один тап.':
    'belocal guides you, adds context and books hotels, tours and tables in one tap.',
  'в один тап': 'in one tap',
  // partners
  'Партнёрам · креаторам': 'Partners · creators',
  'Бесплатно для всех,': 'Free for everyone',
  'Бесплатно для всех, кто едет.': 'Free for everyone who travels.',
  'кто едет.': 'who travels.',
  'Зарабатывают те, кто помогает находить настоящее — места и локальные эксперты.':
    'Those who help travelers find the real thing earn — places and local experts.',
  'Для мест': 'For places',
  'Кафе, бары, отели, гиды': 'Cafés, bars, hotels, guides',
  'Попадай в маршруты ИИ, получай брони и реальный поток гостей. Бета-партнёры платят 0% комиссии до конца 2026 года.':
    'Get into AI itineraries, receive bookings and real guest flow. Beta partners pay 0% commission until end of 2026.',
  'Карточка заведения с фото, меню и часами':
    'Place card with photos, menu and hours',
  'Прямые брони без посредников': 'Direct bookings without middlemen',
  'Аналитика: откуда пришёл гость, что заказал':
    'Analytics: source and order details',
  'Промо-слот в чате ИИ при совпадении запроса':
    'Promo slot in AI chat on matching queries',
  'Стать партнёром': 'Become a partner',
  'Для креаторов': 'For creators',
  'Локалы, гиды, тревел-блогеры': 'Locals, guides, travel bloggers',
  'Загружай авторские маршруты — получай долю от каждой брони и партнёрский процент с подписок. ИИ предложит твой контент в нужном контексте.':
    'Upload signature routes — earn a share of every booking and a referral cut from subscriptions. The AI surfaces your content in the right context.',
  'До 30% с продажи маршрута': 'Up to 30% of route sales',
  'Реферальные ссылки и промокоды': 'Referral links and promo codes',
  'Студия маршрутов: точки, текст, фото': 'Route studio: pins, text, photos',
  'Профиль с подписчиками и отзывами': 'Profile with followers and reviews',
  'Стать креатором': 'Become a creator',
  'комиссия для бета-партнёров': 'commission for beta partners',
  'городов в roadmap': 'cities on roadmap',
  'доля креатора с маршрута': 'creator share per route',
  'публичный запуск': 'public launch',
  'Оставь заявку': 'Leave a request',
  'Свяжемся в течение 48 часов. Без спама — это обещание.':
    "We'll get back within 48 hours. No spam — that's a promise.",
  'Я — место': "I'm a place",
  'Я — креатор': "I'm a creator",
  Другое: 'Other',
  Отправить: 'Send',
  'Спасибо ✓': 'Thanks ✓',
  'you@email.com': 'you@email.com',
  // FAQ
  'Коротко о': 'In short, the',
  'Коротко о главном.': 'In short, the essentials.',
  'главном.': 'essentials.',
  'Не нашёл свой? Напиши в': "Didn't find yours? Reach us at",
  'Сколько стоит belocal?': 'How much does belocal cost?',
  'Базовый тариф бесплатный — 5 маршрутов в месяц, чат с ИИ, карта местных. Pro за 390 ₽/мес снимает лимиты, добавляет офлайн и брони.':
    "The base tier is free — 5 routes per month, AI chat, locals' map. Pro for ₽390/month removes limits, adds offline and bookings.",
  'Как ИИ узнаёт, что мне нравится?': 'How does the AI learn what I like?',
  'Ничего сам не угадывает — учитывает то, что ты сохраняешь, лайкаешь и говоришь в чате. Можно стереть профиль за один тап.':
    "It doesn't guess — it uses what you save, like and say in chat. You can wipe the profile with one tap.",
  'Как работают брони?': 'How do bookings work?',
  'belocal работает напрямую с Booking.com, GetYourGuide и Tripadvisor: отели, экскурсии и билеты бронируются прямо в чате по их фиксированным ценам. Данные о местах берём из Google Maps.':
    'belocal works directly with Booking.com, GetYourGuide and Tripadvisor: hotels, tours and tickets are booked right in the chat at their fixed prices. Place data comes from Google Maps.',
  'Какие города уже есть?': 'Which cities are available?',
  '120+ городов: вся Грузия, Армения, Турция, Балканы, Юго-Восточная Азия, ЕС, ОАЭ. Список расширяем каждую неделю.':
    '120+ cities: all of Georgia, Armenia, Turkey, the Balkans, Southeast Asia, the EU, the UAE. We add more every week.',
  'На каких языках работает?': 'Which languages are supported?',
  'Русский, английский, турецкий, грузинский, испанский. Чат понимает запрос на одном языке и ответит на нём же.':
    'Russian, English, Turkish, Georgian, Spanish. The chat understands a query in one language and replies in the same.',
  // CTA
  'Будь среди': 'Be among',
  'Будь среди первых.': 'Be among the first.',
  'первых.': 'the first.',
  'Оставь заявку на ранний доступ — и получи belocal бесплатно до публичного запуска.':
    'Sign up for early access — and get belocal free until public launch.',
  'App Store': 'App Store',
  'Google Play': 'Google Play',
  'Сканируй камерой': 'Scan with your camera',
  'установка за 12 секунд': 'installs in 12 seconds',
  'anywhere in the world.': 'anywhere in the world.',
  // footer
  'Карманный ИИ-гид для тех, кто едет жить, а не фотографироваться.':
    'A pocket AI guide for those who travel to live, not to take photos.',
  Продукт: 'Product',
  Скриншоты: 'Screenshots',
  Цены: 'Pricing',
  Компания: 'Company',
  'О нас': 'About',
  Блог: 'Blog',
  Контакты: 'Contact',
  'Юр. инфо': 'Legal',
  Условия: 'Terms',
  Конфиденциальность: 'Privacy',
  Cookies: 'Cookies',
  Лицензии: 'Licenses',
  '© 2026 belocal. Сделано путешественниками.':
    '© 2026 belocal. Made by travelers.',
  'Тбилиси · Лиссабон · Алматы': 'Tbilisi · Lisbon · Almaty',
  // cities
  Тбилиси: 'Tbilisi',
  Стамбул: 'Istanbul',
  Ереван: 'Yerevan',
  Лиссабон: 'Lisbon',
  Бали: 'Bali',
  Барселона: 'Barcelona',
  Прага: 'Prague',
  Алматы: 'Almaty',
  Белград: 'Belgrade',
  Дубай: 'Dubai',
  Бангкок: 'Bangkok',
  Рим: 'Rome',
}

type I18nValue = { lang: Lang; t: (s: string) => string; setLang: (l: Lang) => void }
const I18nCtx = createContext<I18nValue>({
  lang: 'ru',
  t: (s) => s,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')

  useEffect(() => {
    try {
      const saved = (localStorage.getItem('belocal_lang') as Lang | null) ?? 'ru'
      setLangState(saved)
      document.documentElement.lang = saved
    } catch {}
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('belocal_lang', l)
    } catch {}
    document.documentElement.lang = l
  }

  const t = (s: string) => (lang === 'en' ? DICT[s] ?? s : s)

  return <I18nCtx.Provider value={{ lang, t, setLang }}>{children}</I18nCtx.Provider>
}

export const useI18n = () => useContext(I18nCtx)
