# ТЗ-MONITORING 1.0 — Баги + покращення вітрини

**Статус:** впроваджується (2026-07-26)  
**Пов’язано:** `MONITORING.md`, `TZ_PRODUCT.md`  
**Поза скоупом:** парсери FSBO, enterprise APM, BI-дашборди

---

## 1. Цілі

1. Бачити runtime/JS помилки на проді (Vercel + error boundary).  
2. Міряти трафік і ліди (GA4 після згоди на cookies).  
3. Розуміти UX-воронку: home → search/catalog → listing → WhatsApp.  
4. Щотижневий ритуал покращень з даних (`MONITORING.md`).

---

## 2. Стек

| Шар | Інструмент |
|-----|------------|
| Продукт / події | GA4 · `NEXT_PUBLIC_GA_ID` · `src/lib/analytics.ts` |
| Згода | Cookie banner → analytics лише після OK |
| Помилки UI | `LocaleErrorBoundary` |
| Деплой / логи | Vercel |
| Швидкість | Vercel Speed Insights (увімкнути в дашборді, опційно) |
| Ручний smoke | `MONITORING.md` § weekly |

---

## 3. Події GA4 (мінімум)

| Event | Params | Де |
|-------|--------|-----|
| `page_view` | path (gtag config) | зміна route |
| `wa_click` | `place` | MessengerButton / forms → WA |
| `tg_click` / `viber_click` | `place` | dock / footer / contacts |
| `hero_search` | `deal`, `has_location`, `has_type` | HeroSearch submit |
| `catalog_view` | `view` = list\|map, `deal` | CatalogView toggle |
| `review_open` | — | відкриття форми відгуку |
| `review_submit` | `stars` | відправка відгуку в WA |

`place` приклади: `hero`, `header`, `drawer`, `dock`, `listing`, `catalog`, `footer`, `contacts`, `sell`, `review`, `lead_form`, `sell_form`, `viewing`.

---

## 4. Owner setup

1. Google Analytics → GA4 property → Measurement ID `G-XXXXXXXX`.  
2. Vercel → Environment Variables → `NEXT_PUBLIC_GA_ID=G-…` (Production; Preview optional).  
3. Redeploy.  
4. Realtime: відкрити сайт, прийняти cookies, клікнути WA — подія в GA.  
5. (Опційно) Vercel → Speed Insights.

Без ID сайт працює як раніше (no-op).

---

## 5. Acceptance

- [ ] З ID + cookies OK — realtime pageviews  
- [ ] `wa_click` з hero  
- [ ] `hero_search` після «Показати»  
- [ ] Без ID / до cookies — немає gtag-скриптів  
- [ ] Error boundary не валить весь shell  
- [ ] Privacy/cookie copy згадує analytics  

---

## 6. Щотижневий ритуал

Див. `MONITORING.md` § weekly + GA reports (locales, `wa_click`, top pages).  
Одне покращення на тиждень з гіпотези.
