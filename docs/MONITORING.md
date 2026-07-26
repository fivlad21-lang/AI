# Monitoring report — Nomore Real Estate

**When:** 2026-07-26  
**Branch:** `cursor/tz-pro-full-backlog-da6b`  
**Method:** production build (`out/`) + static serve + HTTP/content checks across `bg/ru/ua/en`  
**Duration:** ~5 minutes focused crawl + code spot-check  

Live target (after deploy): `https://ai-nomorevlad.vercel.app`  
Planned domain (later): `nomore.estate`

---

## 1. Verdict

**Product shell is solid after UX-Polish 1.1.** Core flows work (home → catalog → listing → WhatsApp/Telegram).  
**Not yet “#1 in Burgas”** — blocked mainly by demo inventory, weak per-page SEO, Unsplash photos, and a few i18n leaks.

| Area | Score (1–5) | Note |
|------|-------------|------|
| Visual polish | 4 | Noise gone, logo/header cleaner |
| Trust | 2 | Demo listings + stock photos dominate |
| Lead path | 4 | WA + TG `@notany` present |
| i18n quality | 3 | RU/UA improved; filter labels still EN |
| Local SEO | 2 | Same title on every page |
| Mobile UX | 4 | Structure ok; hero still dense |
| Ops readiness | 3 | Checklist exists; no CMS/analytics yet |

---

## 2. What passed

- HTTP **200** on home, buy, rent, sell, listing, contacts, guide, blog for all 4 locales  
- Assets: favicon, mark, OG, sitemap (80 URLs), robots.txt  
- UX-Polish checks (RU): 2-line slogan, new microcopy, «Объекты в регионе» without geo subtitle, human testimonials, EUR + дрібні `лв`, `Estate` same size, TG `t.me/notany`, no Trust/Catalog eyebrows  
- Listing: viewing CTA, beach minutes, print, share path present  

---

## 3. Bugs / leaks found

| Severity | Finding | Where |
|----------|---------|--------|
| **High** | Catalog filter labels stay English on RU/BG/UA: `Min €`, `Max €`, `Area m²`, `Min m²`, `Max m²` | `dictionaries.ts` — locales spread `...en.catalog` without overriding those keys |
| **High** | Every page title is only `Nomore Real Estate` (buy/sell/listing/guide identical) | locale `generateMetadata` only; no page-level titles |
| **Med** | Word **shortlist** left in RU/UA/BG CTA strings | `cta.shortlist`, `favorites.sendShortlist` |
| **Med** | Root `/` redirects via **client** `useEffect` → slower + worse for crawlers | `src/app/page.tsx` |
| **Med** | Unknown URLs don’t return real HTTP 404 under static host (`serve` → none / soft) | static export limit |
| **Med** | Cookie/privacy copy still talks about **currency toggle** (removed) | cookies + privacy strings |
| **Low** | Hero/listing/shoot images often `alt=""` | a11y + image SEO |
| **Low** | About copy still mixes English `no more` inside RU/UA/BG | `about.p1` |
| **Low** | Root `<html lang="bg">` always, even on `/ru` (locale wrapper sets `lang` on inner div) | `app/layout.tsx` |
| **Info** | All 6 public listings are `demo: true` + Unsplash | expected for now, kills trust for “#1” |

---

## 4. Improvement backlog (prioritized)

### P0 — do next (trust + correctness)

1. **Translate leftover catalog keys** (`priceMin/Max`, `areaMin/Max`, `area`) for bg/ru/ua.  
2. **Unique `<title>` + description** per route:  
   - Buy: «Купить недвижимость в Бургасе и на побережье · Nomore»  
   - Listing: `{title} · {location} · Nomore`  
   - Sell / Guide / Contacts similarly.  
3. **Replace demo inventory** with 3–6 real objects (or hide catalog behind “скоро” if none). Without this, “#1 Burgas” is impossible.  
4. **Own photos** for hero + sell shoot gallery (drop Unsplash as primary).  
5. Fix **shortlist** wording (напр. «Отправить подборку»).  
6. Update cookie/privacy text (no currency toggle).

### P1 — local SEO (Burgas / coast)

7. Location intros on `/buy?location=sunny-beach` (short H1/lead text per area).  
8. Blog posts targeting: «купить квартиру Бургас», «аренда Несебр», «Акт 16 Болгария».  
9. Server/meta redirect `/` → `/bg` (not client-only).  
10. After domain: update `SITE_URL`, sitemap, robots, canonicals to `nomore.estate`.  
11. Google Business Profile + link on Contacts.  
12. Meaningful `alt` on covers (`2-bed sea view, Sunny Beach`).

### P2 — UX polish for conversion

13. **Hero slim-down:** brand + 2-line slogan + 1 support line + 2 CTAs (Listings / Sell). Move WhatsApp to dock only; demoNote below fold or one line.  
14. Desktop: ensure Sell pill never wraps; heart tooltip localized.  
15. Empty catalog: stronger “напишите бюджет + район” template for WA.  
16. Listing: map link / area page chip (even Google Maps search URL).  
17. Social proof: real initials/cities only when consented; else label as illustrative.  
18. Prefill WA messages localized (now often English “Hi!”).

### P3 — growth / ops

19. Analytics (`NEXT_PUBLIC_GA_ID` or Meta Pixel) + UTM notes on ads.  
20. Telegram **bot** (not only `@notany` deep-link) — see `docs/TELEGRAM.md`.  
21. Light CMS or Airtable → generate `listings.ts` / JSON.  
22. Email or second phone on Contacts.  
23. Performance: self-host critical images, compress OG/brand PNGs (currently large).

---

## 5. “Top-1 in Burgas” — realistic path

To compete with imot.bg / local agencies on the coast:

| Must have | Why |
|-----------|-----|
| Real listings + own media | Trust & Google Images |
| Unique SEO titles + location pages | Rank for “Бургас квартира” etc. |
| Fast WA/TG reply + consistent lead prefixes | Conversion |
| Domain `nomore.estate` + GBP | Brand & Maps |
| RU/UA copy quality (already priority) | Audience fit |

Site UX is already ahead of typical old classifieds. **Content + SEO + real inventory** are the gap, not another glass redesign.

---

## 6. Suggested next implementation slice

**Done (P0 code, 2026-07-26):** i18n filter keys + shortlist; per-page metadata; `/` → `/bg` redirect (`next.config` + `vercel.json`); cookie/privacy copy; logo mark removed (text-only Nomore Estate).

**Still open P0 content:** real listings + own photos (needs owner assets).

**Next code:** hero CTA slim-down (P2); location SEO intros (P1).

---

## 7. Test commands used

```bash
npm run build
npx serve out -l 3456
# HTTP matrix + content asserts across bg/ru/ua/en
```
