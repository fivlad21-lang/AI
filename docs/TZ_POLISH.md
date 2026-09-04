# ТЗ-POLISH 1.0 — Вилизати вітрину до ідеалу (малий обсяг)

**Статус:** активне · 2026-07-26  
**Контекст:** оболонка готова для 0–15 лотів без CRM; блокер — контент/довіра + дрібний UX.  
**Пов’язано:** `TZ_PRODUCT.md`, `MONITORING.md`, `TZ_MONITORING.md`, `PUBLISH_CHECKLIST.md`  
**Поза скоупом:** CRM з 0, Airtable (поки не болить), парсери, auth, оплата.

---

## 0. Вердикт моніторингу (3 хв)

| Зона | Статус |
|------|--------|
| Каталог / карта / фільтри / listing | OK |
| Mobile drawer / ≤1 WA / opaque selects | OK |
| Auto-locale / 4 UI мови | OK |
| Favorites / compare / sell / review | OK |
| Trust (фото, copy, video) | **Gap** |
| WA i18n consistency | **Gap** |
| GA ID у Vercel | Owner |

**Висновок:** shell = agency-ready. «Ідеал у проді» = реальні лоти + polish нижче.

---

## P0 — довіра (блокер)

| # | Задача | Owner | Status |
|---|--------|-------|--------|
| P0.1 | ≥3–5 published зі своїми фото, `demo: false` | Owner | Open |
| P0.2 | Прибрати placeholder video (rickroll) | Dev | Done / keep clean |
| P0.3 | Non-published поза sitemap + SSG + 404 | Dev | Done |
| P0.4 | About: хто + зона + SLA відповіді | Dev copy + Owner | Partial |
| P0.5 | `NEXT_PUBLIC_GA_ID` у Vercel | Owner | Open |

---

## P1 — продукт / UX

| # | Задача | Status |
|---|--------|--------|
| P1.1 | Локалізовані WA-префіли скрізь | Done (code) |
| P1.2 | Shortlist/listing WA: `title[locale]` | Done |
| P1.3 | Home copy без «examples» (актуальні об’єкти) | Done (copy) |
| P1.4 | Hero / sell свої кадри | Open (Owner) |
| P1.5 | LeadForm / SellForm → GlassSelect | Done |
| P1.6 | Listing OG = cover | Done |
| P1.7 | Privacy ↔ GA consent | Done |
| P1.8 | Locale `not-found` зі словників | Done |

---

## P2 — дрібниці

| # | Задача | Status |
|---|--------|--------|
| P2.1 | Aria menu/close локалізовані | Done |
| P2.2 | Favorites heart на вузькому екрані | Done |
| P2.3 | Локаційні інтро `/buy?location=` | **Done** (`locations.intro` + CatalogView) |
| P2.4 | +2–4 пости блогу | **Done** (+ Act 16, rent season) |
| P2.5 | Авто-sitemap при зміні лотів | **Done** (`npm run sitemap`) |
| P2.6 | Реальні testimonials | Open (Owner) |

---

## 3-хв smoke (acceptance)

1. `/` → мова cookie / Accept-Language  
2. Hero search → buy + map  
3. Listing: карта не накриває хедер · WA локаллю · sticky  
4. Favorites / compare shortlist  
5. Sell + contacts + review  
6. Mobile: drawer full-height · ≤1 WA first screen  
7. Cookies OK → gtag (якщо ID) · `wa_click`  
8. Немає `draft-reserved` у sitemap; reserved → 404  

---

## Не робити зараз

CRM з 0 · Airtable «на всяк випадок» · парсери · TG bot без токена · адмінка на вітрині.
