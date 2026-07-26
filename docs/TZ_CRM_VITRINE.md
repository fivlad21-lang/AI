# ТЗ-CRM-VITRINE 1.0 — Вітрина + CRM API (Nomore)

**Статус:** напрямок з ГС власника (2026-07-26) + актуалізація під Rightmove-патерн  
**Референс UX (не копія):** [rightmove.co.uk](https://www.rightmove.co.uk/) — пошук · список · карта  
**Старий сайт (не латати):** [levestates.com](https://www.levestates.com) — важкий, i18n зламана  
**Фронт вітрини:** цей репо (Nomore) · Live: `https://ai.nomorevlad.vercel.app`  
**Пов’язано:** `TZ.md`, `TZ_PRODUCT.md`, `TZ_DEPLOY.md`, `PUBLISH_CHECKLIST.md`

---

## 0. Рішення (locked)

| # | Тема | Рішення |
|---|------|---------|
| 1 | Роль сайту | **Вітрина** об’єктів + ліди в месенджери. **Без адмінки** на сайті. |
| 2 | CRM | Окремий організм. Сайт лише **читає** об’єкти по API. |
| 3 | Обсяг | ~**300–500** об’єктів (не 10k). |
| 4 | Sync | Cron **1–2×/добу** (або частіше при змінах цін/фото). Не realtime. |
| 5 | Зберігання на сайті | Кеш після sync (JSON / ISR), не «єдине джерело правди». |
| 6 | i18n | Перемикач + (бажано) мова браузера + **описи об’єктів усіма мовами**. |
| 7 | UX-якір | Rightmove: **Buy/Rent → фільтри → Список \| Карта**. Без valuation / акаунтів / commercial. |
| 8 | Старий моноліт | Не допилювати 5 років Pimcore — нова вітрина (Nomore) + API. |

---

## 1. Архітектура

```
┌─────────────┐     cron / webhook      ┌──────────────────┐
│  CRM (бек)  │ ─────────────────────►  │  Sync job        │
│  300–500    │   GET listings+media     │  (Vercel cron /  │
│  objects    │                          │   GitHub Action) │
└─────────────┘                          └────────┬─────────┘
                                                  │ пише
                                                  ▼
                                         ┌──────────────────┐
                                         │  Cache           │
                                         │  listings.json   │
                                         │  (+ image URLs)  │
                                         └────────┬─────────┘
                                                  │ читає
                                                  ▼
                                         ┌──────────────────┐
                                         │  Nomore (Next)   │
                                         │  вітрина + SEO   │
                                         └──────────────────┘
```

**Ліди** лишаються в WhatsApp / Telegram / Viber (як зараз). CRM може пізніше приймати ліди окремим endpoint — **не блокер** для вітрини.

---

## 2. Контракт API (мінімум для sync)

CRM має віддати (REST або аналог) список published-об’єктів. Точний URL/auth — **TBD від бекенду**.

### 2.1. Listing (нормалізована модель сайту)

Розширення поточного `Listing` у `src/data/listings.ts`:

| Поле | Обов’язкове | Примітка |
|------|-------------|----------|
| `id` | так | Стабільний ID з CRM |
| `slug` | так | Унікальний, SEO-friendly |
| `status` | так | `published` \| `reserved` \| `sold` \| `draft` |
| `deal` | так | `sale` \| `rent` |
| `type` | так | apartment / house / villa / studio (+ map з CRM) |
| `location` | так | Мапінг на `LocationId` або нова таксономія |
| `lat`, `lng` | для карти | Районний pin OK, не під’їзд |
| `addressPublic` | бажано | «Sunny Beach, complex X» |
| `priceEur` | так | |
| `pricePeriod` | для оренди | `month` |
| `rooms`, `areaM2` | так | |
| `floor`, `floorsTotal`, `act` | опційно | |
| `features[]` | опційно | |
| `beachMinutes` | бажано | УТП узбережжя |
| `cover`, `gallery[]` | так | URL з CDN CRM (або mirror) |
| `video`, `videoUrl` | опційно | |
| `publishedAt`, `updatedAt` | так | Для інкрементального sync |
| `title` | так | `Record<Locale, string>` |
| `description` | так | `Record<Locale, string>` — **усі 4 мови** |
| `demo` | внутр. | `false` для CRM-даних |

### 2.2. Sync поведінка

1. `GET /api/listings?updatedSince=…` (або full dump, якщо простіше на старті).  
2. Нормалізація → `data/listings.generated.json` (або `.ts`).  
3. Redeploy / `revalidate` каталогу.  
4. Лог: count in / out, errors, skipped drafts.  
5. Частота: **02:00 + 14:00 EET** за замовчуванням.

### 2.3. Що CRM повинен гарантувати

- [ ] Стабільні `id`  
- [ ] Публічні URL фото (HTTPS, без auth cookies)  
- [ ] Мови title/description: щонайменше **ru + ua + bg** (en — fallback)  
- [ ] Прапор «показувати на сайті» / status  
- [ ] Координати або хоча б район для карти  

---

## 3. UX вітрини (Rightmove → Nomore)

### Брати
1. Чіткий вхід: **Купити / Оренда** + пошук/фільтри.  
2. Результати: перемикач **Список | Карта**.  
3. Піни на карті → міні-картка → listing.  
4. Швидкий мобільний шлях: каталог → об’єкт → WhatsApp.

### Не брати
Акаунти як must-have, online valuation, commercial, news-circus, важкий legacy CMS.

### Уже є в Nomore (залишити)
Фільтри, favorites, compare→shortlist, sell Model B, месенджери, 4 локалі UI, sticky WA на listing.

### Додати (черга)
| Пріоритет | Фіча |
|-----------|------|
| P0 | ~~Авто-locale з `Accept-Language` / cookie~~ **Done** (`src/proxy.ts`, cookie `nomore-locale`) |
| P0 | ~~Карта каталогу + `lat/lng`~~ **Done** (Leaflet, dark Carto tiles) |
| P1 | Grid / list щільність (опційно) |
| P1 | CRM sync job + generated cache |
| P2 | Incremental `updatedSince` |
| P2 | Локаційні SEO-сторінки |

---

## 4. i18n (з ГС — актуальне)

1. Перемикач мов у хедері/меню — **є**.  
2. Автовибір мови браузера при першому візиті на `/` — **Done** (cookie після ручного перемикача → Accept-Language → `bg`).  
3. UI-словники — **є**; добивати дірки copy.  
4. **Описи/тайтли об’єктів** приходять з CRM уже перекладені; сайт не machine-translate на льоту.  
5. Prefill WhatsApp — мовою поточного `locale`.

---

## 5. Етапи впровадження

### Етап A — Вітрина без CRM (зараз)
Nomore UI + placeholder/реальні об’єкти вручну.  
Мета: швидкий, красивий, месенджер-first сайт на узбережжі.

### Етап B — Карта + geo-поля
`lat/lng/addressPublic` у моделі · Список|Карта · міні-карта на listing.

### Етап C — CRM sync
Документований endpoint · `npm run sync:listings` / Vercel Cron · деплой кешу · прибрати ручний `listings.ts` як SoT.

### Етап D — Cutover
Канонікал / домен · редіректи зі старого Lev Estates (за потреби) · вимкнути старий фронт.

---

## 6. Acceptance

- [ ] Сайт не містить адмінки об’єктів  
- [ ] Каталог 300–500 об’єктів відкривається < 3s на 4G (LCP свідомий)  
- [ ] Sync 2×/день без ручного коміту listings  
- [ ] Список + карта з пінами  
- [ ] UI + описи об’єктів мовами bg/ru/ua/en  
- [ ] Ліди йдуть у WA/TG/Viber  
- [ ] Core Web Vitals кращі за поточний levestates.com  

---

## 7. Блокери від власника / беку (потрібні відповіді)

1. URL + auth схема CRM API (token / IP allowlist).  
2. Приклад JSON **одного** об’єкта (усі поля + фото).  
3. Чи є готові переклади описів на 4 мови, чи лише ru?  
4. Чи віддає CRM `lat/lng`?  
5. Чи можна публічні CDN-URL фото без сесії?

Без п.1–2 Етап C не стартує.

---

## 8. Що свідомо out of scope

- Перепис CRM UI  
- Realtime websocket sync  
- Особистий кабінет покупця  
- Оплата / бронювання на сайті  
- Machine-translate пайплайн (окремо, якщо CRM без перекладів)

---

## 9. Next actions (операційні)

Див. секцію «Що робимо далі» у відповіді агента / оновлення `TZ_PRODUCT.md` § sync → CRM замість Airtable як основний шлях.
