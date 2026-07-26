# ТЗ v3 — Nomore Real Estate

**Статус:** готове до реалізації  
**Бренд:** Nomore Real Estate  
**Домен:** `nomore.estate`  
**Референс відчуття:** [nomorelab.wtf](https://nomorelab.wtf) — dark + glass + чіткі CTA + блокова структура, **без** курс-крику й строкатої палітри  

---

## 0. Затверджені рішення

| # | Тема | Рішення |
|---|------|---------|
| 1 | Зйомка для власників | **B** — фото/відео без окремої оплати; агентство на **комісії з угоди** |
| 2 | Домен | **nomore.estate** (~$14.99/рік на Vercel; купівля окремим підтвердженням) |
| 3 | Default locale | **`bg`**. Контент/реклама пріоритетно **RU + UA** |
| 4 | WhatsApp | **+380 93 385 18 04** → `wa.me/380933851804` |
| 5 | Слоган (A) | *Homes by the sea. No more hassle.* (+ локалі) |
| 6 | Каталог | **Демо-об’єкти** з міткою Demo |
| 7 | Візуал | Синьо-чорний, glass, стильні шрифти; стриманіше за LAB |
| 8 | Telegram bot / @username | TBD → ліди через WhatsApp, поки немає бота |

---

## 1. Продукт і позиціонування

### 1.1. Хто ми
Ріелторське агентство в **області Бургас** і на узбережжі (у т.ч. **Сонячний Берег**, Несебр, Равда, Поморіє, Созополь, Святий Влас).  
Послуги: **купівля / продаж + оренда**.

### 1.2. Сенс «Nomore»
1. **No more** — немає більше хаосу, «сайтів 2005», порожніх оголошень без нормальних фото.  
2. **На морі** — житло й життя біля моря.

### 1.3. Для кого
Аудиторія **24+**: молоді професіонали, пари, remote, іноземці (UA/RU), локали BG.  
Тон: спокійно, сучасно, по суті; трохи характеру; без люкс-пафосу і без курс-маркетингу.

### 1.4. Одне речення
Nomore Real Estate — сучасне агентство в Бургасі: показуємо об’єкти чисто, відповідаємо швидко в WhatsApp, знімаємо й просуваємо об’єкти власників у соцмережах.

### 1.5. Слогани
| Locale | Текст |
|--------|--------|
| EN | Homes by the sea. No more hassle. |
| BG | Жилище край морето. Без излишното. |
| RU | Жильё у моря. Без лишнего. |
| UA | Житло на морі. Без зайвого. |

Підзаголовок: купівля / продаж / оренда · Бургас і узбережжя · чіткі оголошення · швидка відповідь.

### 1.6. Чим відрізняємось
- Сучасний dark/glass UI (як LAB, але тихіше)  
- Mobile-first каталог  
- WhatsApp у один тап  
- 4 мови  
- Зйомка + соцмережі для власників (модель B)  
- Швидкість і великі фото замість таблиць imot.bg  

---

## 2. Візуальна система

### 2.1. Настрій
**Coastal dark-tech** = Nomore Lab мінус крик + нерухомість.  
Темний фон, матове скло, один морський акцент, домінанта — фото об’єктів / узбережжя.

**Не робити:** purple glow, rainbow градієнти, cream+terracotta кліше, газетний layout, «зібрано за 1:32», тарифні countdown-картки.

### 2.2. Палітра
```
--bg:           #070B12
--bg-elevated:  #0E1522
--bg-soft:      #151D2E
--ink:          #E8EEF7
--ink-muted:    #8B9BB4
--sea:          #3B82F6      /* primary */
--sea-deep:     #1D4ED8
--lagoon:       #67E8F9      /* rare accent only */
--line:         rgba(232,238,247,0.12)
--glass:        rgba(255,255,255,0.06)
--glass-border: rgba(255,255,255,0.14)
--ok:           #34D399
--warn:         #FBBF24
```
Lagoon — лише бейджі Demo / дрібні акценти, не половина UI.

### 2.3. Glass
Кнопки secondary, фільтри, чіпи, панелі:
- `background: var(--glass)`
- `backdrop-filter: blur(16–20px)`
- `border: 1px solid var(--glass-border)`
- hover: трохи світліше скло  
Primary CTA: solid `--sea` (контраст на темному).

### 2.4. Типографіка
| Роль | Шрифт |
|------|--------|
| Display / H1–H2 | **Unbounded** |
| Body / UI | **Manrope** |

Ціни: `tabular-nums`. Не Inter / Roboto / Arial як бренд.

### 2.5. Компоненти
- Картки — лише для взаємодії (об’єкт, фільтр, форма). Не картки в hero.  
- Скруглення 16–24px.  
- Тіні мінімальні; глибина через шари/скло/фото.  
- Іконки: тонкі line, один набір.

### 2.6. Hero (перший екран)
Один склад:
1. Бренд (hero-level)  
2. Слоган  
3. 1 підтримуюче речення  
4. CTA-група: **Дивитись об’єкти** (primary) · **Продати з Nomore** (glass) · WhatsApp (text/ghost)  
5. Один домінантний візуал (full-bleed фото/градієнт моря)

Без: статистик, бейджів «#1», плаваючих стікерів на фото, тарифів.

### 2.7. Motion (2–4)
1. Hero text rise/fade  
2. Cards stagger on scroll  
3. Gallery crossfade  
4. Messenger dock з’являється після ~30% scroll  

---

## 3. Інформаційна архітектура

URL: `/{locale}/...` · `locale ∈ {bg, ru, ua, en}`  
`/` → редірект на `/bg`.

| Path | Сторінка | Мета |
|------|----------|------|
| `/{locale}` | Home | Бренд, featured, how-to, owners, CTA |
| `/{locale}/buy` | Купити | Каталог sale + фільтри |
| `/{locale}/rent` | Оренда | Каталог rent + фільтри |
| `/{locale}/listings/[slug]` | Об’єкт | Галерея, факти, WA, заявка |
| `/{locale}/sell` | Продати з Nomore | Зйомка + модель B + форма |
| `/{locale}/about` | Про нас | Double meaning + підхід |
| `/{locale}/contacts` | Контакти | WA + форма «шукаю» |
| `/{locale}/favorites` | Обране | localStorage (Phase A/B) |
| `/{locale}/guide` | Гід / FAQ | Phase C |

### Навігація (header)
`Buy` · `Rent` · **`Sell with Nomore`** (акцент glass) · `About` · `Contacts` · lang switch · WhatsApp (desktop)

---

## 4. Home — секції

1. **Hero** — як у 2.6  
2. **Featured (demo)** — 3 картки + лінк у каталог  
3. **Як працюємо** — 3 кроки (`01/02/03` у стилі LAB, спокійно)  
4. **Зона роботи** — чіпи локацій → `/buy?location=`  
5. **Для власників** — зйомка/комісія + CTA → `/sell`  
6. **Footer** — навігація, WA, мови, demo disclaimer  

---

## 5. Каталог (Buy / Rent)

- Compact glass filters; mobile-friendly selects  
- Сітка 1 / 2 / 3  
- Query: `location`, `type`, `rooms` (+ price у v2)  
- Картка: фото, Sale/Rent/Demo/Video, ціна EUR, title, локація, м², ♥  
- Empty → WhatsApp  

---

## 6. Сторінка об’єкта

Галерея → бейджі/title/ціна → факти → опис → фічі → sticky **Заявка на перегляд** + WhatsApp → схожі.

---

## 7. Модель даних Listing

```ts
Listing {
  id: string
  slug: string
  demo: boolean
  deal: 'sale' | 'rent'
  type: 'apartment' | 'house' | 'villa' | 'studio'
  location: LocationId
  priceEur: number
  pricePeriod?: 'month'
  rooms: number | 'studio'
  areaM2: number
  floor?: number
  floorsTotal?: number
  act?: '14' | '15' | '16'
  features: string[]
  cover: string
  gallery: string[]
  video?: boolean
  title: Record<Locale, string>
  description: Record<Locale, string>
}
```

Валюта UI: **EUR**. Демо: ≥6 об’єктів.  
Локації: `burgas`, `sunny-beach`, `nesebar`, `ravda`, `pomorie`, `sozopol`, `sveti-vlas`.

---

## 8. Продати з Nomore (`/sell`)

### Модель B
Проф. фото + вертикальне відео + сайт + пости в соцмережах Nomore + ліди.  
Зйомка **без окремої оплати** — комісія з угоди.

### Структура
Hero + model B callout → що входить → кроки 01–04 → форма `[SELL]`  
Чекбокс «Потрібна зйомка» = ON за замовчуванням.

### Точки входу
Header · Home hero · Home owners · Footer · `/sell`

---

## 9. Форми → WhatsApp (v1)

| Форма | Префікс |
|-------|---------|
| Шукаю житло | `[BUY]` / `[RENT]` |
| Перегляд | `[VIEW]` |
| Швидкий продаж | `[SELL]` |

v2: `POST /api/leads` → Telegram Bot.

---

## 10. Месенджери

Floating glass WhatsApp dock · header WA · listing sticky · deep-links з контекстом.  
Telegram UI — коли буде `@username`.

---

## 11. i18n

4 мови, словники UI, listing fields на всі локалі, switch зберігає path.  
Якість RU/UA — пріоритет.

---

## 12. Що беремо з nomorelab.wtf

**Беремо:** dark base, glass, воронка увага→довіра→дія, одна CTA на секцію, нумерація `01/02/03`, бренд Nomore, типографіка/motion.  
**Не беремо:** кислотну строкатість, тарифи/дефіцит, meta «зібрано за N хв», course-copy.  
**Формула:** Lab − крик + великі фото нерухомості + каталог.

---

## 13. Tech

Next.js App Router + TS · Tailwind 4 · static export · listings у TS · forms → WhatsApp · Vercel · Unbounded + Manrope.

**Не в v1:** кабінет, оплата, heavy map, Reels-фід на home, CRM.

---

## 14. Фази

**A — Foundation:** дизайн, i18n, Home/Buy/Rent/Listing/Sell/About/Contacts, демо, WhatsApp, домен.  
**B — Real inventory:** CMS, реальні фото, Telegram bot, фільтр ціни.  
**C — Trust:** Guide/FAQ, галерея зйомок, відео, SEO, аналітика.

---

## 15. Definition of Done (публічний реліз)

1. Мобілка: каталог → об’єкт → WhatsApp < 60 сек  
2. ≤ 1 клік до **Продати з Nomore** з ключових сторінок  
3. На `/sell` за 5 сек зрозуміло: зйомка + соцмережі + комісія  
4. 4 мови без змішаних UI-рядків  
5. Hero = бренд Nomore без навбару  
6. Production 200 без SSO  
7. Після покупки домену: `https://nomore.estate`  

---

## 16. Залишилось від замовника

1. Підтвердити покупку `nomore.estate` ($14.99) + дані реєстранта  
2. Telegram `@username` / bot token + chat id  
3. Реальні об’єкти й фото  
4. (Опційно) логотип для соцмереж  
