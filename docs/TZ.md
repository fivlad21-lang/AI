# ТЗ v2.1 — Nomore Real Estate (затверджено)

Статус: **locked для реалізації**  
Оновлено: 2026-07-26

---

## Затверджені рішення

| # | Питання | Рішення |
|---|---------|---------|
| 1 | Модель зйомки для власників | **B** — зйомка без окремої оплати, робота за комісією з угоди |
| 2 | Домен | **nomore.estate** |
| 3 | Default locale | **`bg`** (UI стартує болгарською). Основний контент/реклама орієнтовані на **RU + UA** аудиторію — якість цих локалей пріоритетна |
| 4 | WhatsApp / телефон | **+380 93 385 18 04** (`wa.me/380933851804`) |
| 5 | Слоган (hero) | **A (море):** *Homes by the sea. No more hassle.* (+ локалі) |
| 6 | Каталог на старті | **Демо-об’єкти** (мітка Example / демо) |
| 7 | Візуал | **Синьо-чорна** сучасна тема, **glass** (прозоре скло) кнопки, стильні шрифти, сильний UX каталогу |
| — | Telegram username / bot | TBD — до отримання: ліди через WhatsApp deep-link |

---

## 1. Бренд

**Nomore** = *no more* (немає більше хаосу) + *на морі* (життя біля моря).

**Позиціонування:** сучасне ріелторське агентство в Бургасі та на узбережжі. Купівля, продаж, оренда. Нормальні фото/відео, швидка відповідь у месенджері, без «сайтів 2005».

**Tone:** спокійно, сучасно, 24+; трохи характеру; без люкс-пафосу і без корпоративщини.

### Слогани (A)
| Locale | Текст |
|--------|--------|
| EN | Homes by the sea. No more hassle. |
| BG | Жилище край морето. Без излишното. |
| RU | Жильё у моря. Без лишнего. |
| UA | Житло на морі. Без зайвого. |

---

## 2. Послуга «Продати з Nomore» (модель B)

Окрема кнопка й сторінка `/sell`.

**Обіцянка:** професійна фото- та відеозйомка + публікація в соцмережах Nomore + робота з лідами. Зйомка **без окремої оплати** — агентство працює **за комісією з угоди**.

Не обіцяти: гарантовані строки продажу, фейкові охоплення.

### Точки входу
- Header: **Sell / Продати з Nomore**
- Home hero: secondary CTA
- Home блок для власників
- Footer link
- Сторінка `/sell` з формою `[SELL]`, чекбокс «Потрібна зйомка» = on за замовчуванням

---

## 3. Візуальна система (blue-black + glass)

### Настрій
Темний coastal-tech: ніч біля моря, скло, чітка типографіка. Не purple-glow, не cream-terracotta, не газетний layout.

### Палітра
```
--bg:          #070B12
--bg-elevated: #0E1522
--bg-soft:     #151D2E
--ink:         #E8EEF7
--ink-muted:   #8B9BB4
--sea:         #3B82F6
--sea-deep:    #1D4ED8
--lagoon:      #22D3EE
--line:        rgba(232,238,247,0.12)
--glass:       rgba(255,255,255,0.06)
--glass-border:rgba(255,255,255,0.14)
--danger:      #F87171
--ok:          #34D399
```

### Glass controls
Кнопки/чіпи/панелі фільтрів:
- `background: var(--glass)`
- `backdrop-filter: blur(16px)`
- `border: 1px solid var(--glass-border)`
- hover: світліший glass + sea accent

Primary CTA може бути solid `sea` для контрасту; secondary — glass.

### Типографіка
| Роль | Шрифт |
|------|--------|
| Display | **Unbounded** (кирилиця + латиниця) |
| Body / UI | **Manrope** |

### Motion
1. Hero text fade/rise  
2. Cards stagger on scroll  
3. Gallery crossfade  
4. Messenger dock fade-in after scroll  

### Hero
Full-bleed темний візуал (градієнт/фото моря). Бренд + слоган + 1 речення + CTA: **Дивитись об’єкти** (primary) · **Продати з Nomore** (glass) · WhatsApp link.

---

## 4. Географія і послуги

- Бургас, Сонячний Берег, Несебр, Равда, Поморіє, Созополь, Святий Влас, інші точки округу  
- Buy + Rent  
- Мови: `bg` | `ru` | `ua` | `en` · URL `/{locale}/...` · default redirect `/` → `/bg`

---

## 5. IA (сторінки)

| Path | Призначення |
|------|-------------|
| `/{locale}` | Home |
| `/{locale}/buy` | Каталог продаж |
| `/{locale}/rent` | Каталог оренда |
| `/{locale}/listings/[slug]` | Об’єкт |
| `/{locale}/sell` | Швидкий продаж + зйомка |
| `/{locale}/about` | Бренд / no more + на морі |
| `/{locale}/contacts` | Контакти + форма «шукаю» |
| `/{locale}/favorites` | Обране (localStorage) |

---

## 6. Каталог і об’єкт

Фільтри: deal, type, location, price, rooms, area, features (sea view, parking, furnished, act16…).  
Картка: велике фото, ціна EUR, локація, кімнати/м², бейджі (Sale/Rent, Video, Demo), ♥.  
Сторінка: галерея, факти, опис, фічі, sticky WA + «Заявка на перегляд», схожі.

Демо: 6 об’єктів, бейдж **Demo**, у футері/картці пояснення що приклади.

---

## 7. Форми → WhatsApp (v1)

Поки немає Telegram bot: сабміт збирає поля і відкриває `wa.me/380933851804?text=...`.  
Префікси: `[BUY]` / `[RENT]` / `[SELL]` / `[VIEW]`.

Пізніше: `/api/leads` → Telegram без зміни UI.

---

## 8. Месенджери

- Floating glass dock: WhatsApp (обов’язково); Telegram — коли буде username  
- Header icons  
- Listing sticky bar  
- Deep-link з контекстом об’єкта/форми

---

## 9. Фази

**A (зараз):** дизайн-система, i18n, Home, Sell, Contacts, WA, демо-каталог Buy/Rent + detail, favorites, about.  
**B:** CMS, реальні об’єкти, Telegram bot.  
**C:** Guide/FAQ, галерея зйомок, відео на об’єктах, SEO polish.

---

## 10. DoD Phase A

- [ ] Синьо-чорний UI + glass кнопки  
- [ ] 4 мови, default BG  
- [ ] Демо-каталог buy/rent + detail  
- [ ] Sell з моделлю B і окремою кнопкою  
- [ ] WhatsApp +380933851804 працює з префіл-текстом  
- [ ] Mobile-first, без горизонтального скролу  
- [ ] Задеплоєно на Vercel (ai-nomorevlad / nomore.estate після покупки домену)
