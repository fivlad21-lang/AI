# ТЗ-PRO 1.0 — Nomore Real Estate

**Статус:** затверджено замовником (2026-07-26)  
**Бренд:** Nomore Real Estate  
**Плановий домен:** `nomore.estate` — **купівля пізніше** (не блокує реліз)  
**Live (поки):** `https://ai-nomorevlad.vercel.app`  
**Референс відчуття:** [nomorelab.wtf](https://nomorelab.wtf) — dark + glass + CTA + блоки; **без** курс-крику  

---

## 0. Затверджені рішення

| # | Тема | Рішення |
|---|------|---------|
| 1 | Зйомка для власників | **B** — фото/відео без окремої оплати; комісія з угоди |
| 2 | Домен | `nomore.estate` — купити **пізніше** |
| 3 | Default locale | **`bg`**. Пріоритет якості copy: **RU + UA** |
| 4 | WhatsApp | **+380 93 385 18 04** → `wa.me/380933851804` |
| 5 | Слоган A | *Homes by the sea. No more hassle.* (+ BG/RU/UA) |
| 6 | Каталог старт | Демо-об’єкти з міткою Demo |
| 7 | Візуал | Синьо-чорний, glass; стриманіше за LAB |
| 8 | Telegram @ | **@notany** (dock deep-link). Bot token — TBD; ліди також через WhatsApp |
| 9 | Беклог | **Реалізувати все** (§10 A1–G4, HIGH/MED/LOW) |
| 10 | Логотипи | Згенерувати wordmark + mark + favicon + OG |

---

## 1. Продукт

### 1.1. Хто ми
Ріелторське агентство в **області Бургас** і на узбережжі (Сонячний Берег, Несебр, Равда, Поморіє, Созополь, Святий Влас).  
Послуги: **купівля / продаж + оренда**.

### 1.2. Сенс «Nomore»
1. **No more** — немає хаосу й порожніх оголошень без нормальних фото.  
2. **На морі** — житло біля моря.

### 1.3. Аудиторія
24+: професіонали, пари, remote, іноземці UA/RU, локали BG.  
Тон: спокійно, сучасно, по суті.

### 1.4. Слогани
| Locale | Текст |
|--------|--------|
| EN | Homes by the sea. No more hassle. |
| BG | Жилище край морето. Без излишното. |
| RU | Жильё у моря. Без лишнего. |
| UA | Житло на морі. Без зайвого. |

---

## 2. Візуал

Coastal dark-tech. Палітра: `#070B12` / sea `#3B82F6` / lagoon лише для Demo.  
Шрифти: **Unbounded** (display) + **Manrope** (body).  
Hero: один склад — бренд, слоган, 1 речення, CTA, full-bleed візуал.  
Без purple glow, cream+terracotta, газетного layout, «зібрано за N хв».

**Бренд-ассети:** `/public/brand/` — wordmark, mark, favicon, OG.

---

## 3. IA

`/{locale}/...` · `locale ∈ {bg,ru,ua,en}` · `/` → `/bg`

| Path | Сторінка |
|------|----------|
| `/` | Home |
| `/buy` `/rent` | Каталоги |
| `/listings/[slug]` | Об’єкт |
| `/sell` | Продати з Nomore |
| `/about` | Про нас |
| `/contacts` | Контакти |
| `/favorites` | Обране |
| `/compare` | Порівняння |
| `/guide` | Гід / FAQ |
| `/privacy` | Privacy / cookies / disclaimer |
| `/blog` | Гайд-статті (stubs) |

---

## 4. Модель Listing

```ts
Listing {
  id, slug, demo: boolean
  status: 'published' | 'reserved' | 'sold' | 'draft'
  deal: 'sale' | 'rent'
  type: 'apartment' | 'house' | 'villa' | 'studio'
  location: LocationId
  priceEur, pricePeriod?, rooms, areaM2
  floor?, floorsTotal?, act?
  features: string[]
  beachMinutes?: number
  cover, gallery: string[]
  video?: boolean
  videoUrl?: string
  publishedAt: string
  title, description: Record<Locale, string>
}
```

Публічний каталог показує лише `status === 'published'`.  
Валюта UI: **EUR / BGN** (фікс 1.95583).

---

## 5. Ліди

Форми → WhatsApp з префіксами `[BUY]` `[RENT]` `[SELL]` `[VIEW]` `[SHORTLIST]` `[FAQ]`.  
Telegram dock: `@notany` → `t.me/notany`. Bot API — коли буде token.  
Static export → без server `/api/leads` у v1; шлях описано в ops.

---

## 6. Модель B (власники)

Фото + вертикальне відео + сайт + соцмережі + ліди.  
Зйомка без окремої оплати — комісія з угоди.

---

## 7. Tech

Next.js App Router + TS · Tailwind 4 · `output: "export"` · Vercel · Unbounded + Manrope · listings у TS.

---

## 8. DoD

1. Мобілка: каталог → об’єкт → WA < 60 сек  
2. ≤ 1 клік до Sell з ключових сторінок  
3. На `/sell` за 5 сек: зйомка + соцмережі + комісія  
4. 4 мови без змішаних рядків  
5. Hero = бренд Nomore  
6. Production 200  
7. Домен — окремим кроком пізніше  

---

## 9. Відкриті питання (не блокують)

1. Купівля `nomore.estate`  
2. Telegram bot token + chat id (username вже: `@notany`)  
3. Реальні об’єкти замість демо  

---

## 10. Беклог реалізації (все)

### A — Brand
- **A1** Логотипи: wordmark, mark, favicon, OG  
- **A2** Brand kit у header/footer  
- **A3** Власні hero-ассети / якісні stock  
- **A4** Опційний hero video (якщо є URL)  
- **A5** Brand microcopy  

### B — Trust
- **B1** Guide/FAQ  
- **B2** Shoot gallery на `/sell`  
- **B3** Багатший About  
- **B4** Testimonials  
- **B5** Privacy / cookies / disclaimer  
- **B6** Мови + ясність гео  

### C — Catalog
- **C1** Фільтри: ціна, площа, features  
- **C2** Sort  
- **C3** Compare  
- **C4** Favorites page  
- **C5** Lightbox + swipe  
- **C6** Video на listing  
- **C7** Beach minutes / area clarity  
- **C8** Share  
- **C9** Shortlist PDF-текст через WA  
- **C10** Шлях заміни демо (checklist + status)  

### D — Leads
- **D1** Telegram bot path (stub / готовність)  
- **D2** TG dock stub  
- **D3** Viewing calendar  
- **D4** Auto-reply UX copy  
- **D5** Later CRM  

### E — Polish
- **E1** Skeletons / transitions  
- **E2** Empty / error states  
- **E3** Custom glass dropdowns  
- **E4** EUR/BGN  
- **E5** Cookie banner  
- **E6** Branded 404  
- **E7** Print-friendly listing  

### F — SEO / growth
- **F1** OG / sitemap / hreflang  
- **F2** JSON-LD  
- **F3** Blog/guide links  
- **F4** Analytics stub  
- **F5** UTM notes  

### G — Ops
- **G1** Light CMS path (TS data + checklist)  
- **G2** Publish checklist  
- **G3** Listing statuses  
- **G4** Domain — **пізніше**  

---

## 11. UX-Polish 1.1 (затверджено)

1. Logo A: `Nomore` + `Estate` одного розміру  
2. Microcopy: «Понятные объекты. Удобный процесс. Жильё на берегу моря.» (+ локалі)  
3. Без global noise overlay  
4. Без англ. eyebrows (Trust/Catalog/Process/…)  
5. Людські відгуки  
6. «Объекты в регионе» без geo-підзаголовка  
7. Header: Buy · Rent · Sell · Contacts + ♥ + langs + WA  
8. Слоган hero у 2 рядки (`taglineLine1` / `taglineLine2`)  
9. Ціна: EUR основне + дрібні лв (без toggle)  
10. Telegram: `@notany`  
