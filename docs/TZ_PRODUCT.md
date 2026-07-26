# ТЗ-PRODUCT 1.1 — Довести Nomore до «живого» агентства

**Статус:** затверджено напрямок (2026-07-26)  
**Live:** `https://ai.nomorevlad.vercel.app`  
**Домен пізніше:** `nomore.estate`  
**Пов’язано:** `TZ.md`, `TZ_DEPLOY.md`, `TZ_CRM_VITRINE.md`, `MONITORING.md`, `PUBLISH_CHECKLIST.md`

---

## 0. Вердикт

Оболонка (каталог, фільтри, обране, порівняння, sell, месенджери, i18n) уже на рівні сучасного агентства.  
Блокер довіри — **контент** (зараз placeholder-об’єкти + сток-фото). Публічних міток Demo **немає** — об’єкти замінюються «під капотом» через `listings.ts`.

| Зона | Зараз | Ціль |
|------|-------|------|
| Trust | низький (сток) | свої фото + реальні адреси/райони |
| Lead | високий | локалізовані WA + аналітика |
| SEO | середній | локаційні інтро + блог |
| Ops | ручний TS | CRM API sync 1–2×/день (`TZ_CRM_VITRINE.md`) |
| Visual | сильний shell | свої hero/shoot |

---

## 1. Що лишаємо (не чіпати як «зайве»)

- Compare (до 3) + shortlist у WhatsApp  
- Favorites  
- Sell / Model B  
- WA + Telegram + Viber  
- EUR primary + дрібні лв  
- Text wordmark без літери N  

---

## 2. Що прибрано з UI (цей слайс)

- Бейдж Demo на картках і listing  
- `demoNote` на головній  
- FAQ «чому Demo»  
- Слова «демо» в описах об’єктів, privacy, footer  
- Внутрішнє поле `demo: true` в даних **залишається** для вашої заміни пізніше  

---

## 3. P0 — наступні кроки власника

1. Замінити фото/тексти в `src/data/listings.ts` на реальні (див. `PUBLISH_CHECKLIST.md`).  
2. Покласти свої зображення в `/public/listings/{slug}/`.  
3. Виставити `demo: false` на живих об’єктах.  
4. About: коротко хто ви + SLA відповіді.  
5. Увімкнути GA (`NEXT_PUBLIC_GA_ID`).

---

## 4. P1 — продукт

6. Локаційні інтро на `/buy?location=…`  
7. ~~Поля `lat` / `lng` / `addressPublic` + карта каталогу~~ **Done** — Leaflet, Список|Карта, міні-карта на listing  
8. 3–6 статей блогу під запити Бургас / Акт 16 / оренда  
9. Локалізовані префіли WhatsApp  
9b. Авто-locale з браузера на `/`

## 5. P2 — зростання / CRM

10. **CRM API sync** (основний шлях) — `TZ_CRM_VITRINE.md`  
11. Домен + Google Business  
12. Кейси зйомки на `/sell` своїми кадрами  
13. Telegram bot / `/api/leads` (опційно)  
14. Airtable — лише fallback, якщо CRM API ще немає

## 6. Не робити зараз

Auth, оплата, повний CRM, бронювання з бекенд-календарем, ще один UI «карта сайту».

## 7. Карта

Так, лаконічно: перемикач «Список / На карті» на buy/rent; міні-карта на listing. Піни по району, не по під’їзду.

## 8. Наповнення об’єктами

**Зараз:** редагувати `listings.ts` + checklist + deploy.  
**Ціль:** CRM → cron sync → `listings.generated.json` → вітрина (`TZ_CRM_VITRINE.md`).

## 9. Моніторинг (щотижня)

- [ ] `/bg|/ru|/ua|/en` home, buy, listing, sell, contacts = OK  
- [ ] WA / TG / Viber з dock  
- [ ] Немає видимих «Demo/Демо» у UI  
- [ ] Фільтр району на мобільному  
- [ ] `/` → `/bg`, Output Directory у Vercel порожній  

## 10. Acceptance «повноцінне агентство»

- [ ] ≥5 published з власними фото  
- [ ] Немає Unsplash як основного візуалу  
- [ ] About з людьми/процесом  
- [ ] Карта або свідоме відкладення  
- [ ] GA + кліки в WA вимірюються  
- [ ] Стабільний канонікал / домен  
