# Monitoring — Nomore Real Estate

**Updated:** 2026-07-26  
**Live:** `https://ai.nomorevlad.vercel.app`  
**Branch:** `cursor/tz-pro-full-backlog-da6b`  
**Roadmap:** `TZ_PRODUCT.md` · CRM: `TZ_CRM_VITRINE.md` · Deploy: `TZ_DEPLOY.md`

**Out of scope for now:** listing scrapers / FSBO parsers (separate later if needed). Focus = **вітрина + ліди + стабільність**.

---

## 1. Current verdict

Оболонка на рівні агентства (lead-first home, hero search, map, i18n, messengers).  
Головний gap довіри — **сток-фото + placeholder-об’єкти** (`demo: true` лише внутрішньо).

| Area | Score /5 | Note |
|------|----------|------|
| Visual polish | 4.5 | Brand + glass UI |
| Trust | 3.0 | No Demo labels; Unsplash temporary |
| Lead path | 4.5 | WA primary; TG/Viber dock |
| i18n | 4.5 | Auto-locale `/` + 4 UI locales |
| Local SEO | 3.0 | Location intros / blog still open |
| Mobile UX | 4.5 | Drawer, ≤1 WA on home first screen, opaque selects |
| Ops | 3.0 | Manual `listings.ts` until CRM API |
| Analytics | 2.0 | Stub only — set `NEXT_PUBLIC_GA_ID` |

---

## 2. What to monitor (three layers)

### A. Product (owner / weekly)
Manual smoke — §4. Goal: no broken lead path, no regress on mobile menu/search.

### B. Analytics (when GA is on)
Wire via `src/components/Analytics.tsx` + `NEXT_PUBLIC_GA_ID`.

| Event / metric | Why |
|----------------|-----|
| Sessions by locale (`bg/ru/ua/en`) | Auto-locale working? |
| Home → WA «Отримати підбірку» | Lead-first CTA |
| Hero search submit → `/buy`|/rent` | Search usefulness |
| Catalog filter / map toggle | Discovery |
| Listing → WA / viewing | Conversion |
| Review submit (WA `[REVIEW]`) | Trust loop |
| Sell form / contacts lead | Owner pipeline |

### C. Tech / ops
| Check | Where |
|-------|--------|
| Deploy success | Vercel project (canonical host) |
| Runtime / build errors | Vercel logs |
| LCP / CLS / INP | Vercel Speed Insights or CrUX (after GA/domain) |
| Output Directory | **empty** (no `out`) |
| Canonical | `ai.nomorevlad.vercel.app` until `nomore.estate` |

---

## 3. Open backlog (monitoring lens)

| Sev | Item | Owner |
|-----|------|--------|
| P0 | Real photos + texts; `demo: false` on live lots | Owner |
| P0 | Enable GA (`NEXT_PUBLIC_GA_ID`) | Owner + env |
| P1 | About + reply SLA | Owner copy |
| P1 | Location SEO intros; 2–3 blog posts | Content |
| P1 | Localized WA prefills everywhere | Dev |
| P2 | Domain + Google Business + Search Console | Owner |
| P2 | CRM API sync 1–2×/day | Backend + `TZ_CRM_VITRINE` |
| — | **Parser / scout FSBO** | Deferred — not now |

---

## 4. Weekly smoke checklist

```bash
npm run build
```

**Desktop**
- [ ] `/` → locale by cookie / Accept-Language (not hard-locked to `/bg` only)
- [ ] Home: brand + WA shortlist + **hero search** → `/buy` or `/rent` with query
- [ ] `/buy`: filters, List|Map, card → listing (mini-map, WA)
- [ ] Favorites / compare → shortlist WA
- [ ] Leave review → WA `[REVIEW]`
- [ ] No visible «Demo» / «Демо» in UI

**Mobile**
- [ ] Header: **no** WA icon; burger opens **full-height** drawer (overlay covers viewport)
- [ ] Drawer: slide from right; close overlay / ✕ / Esc
- [ ] Home first screen: **≤1 WhatsApp** (hero shortlist); dock only after scroll
- [ ] Hero search dropdowns **opaque** (no bleed through blue CTA)
- [ ] GlassSelect filters on `/buy` open above content

**Messengers**
- [ ] WA / TG / Viber reachable (dock after scroll or contacts/sell)
- [ ] Prefills open correct chat

**Deploy**
- [ ] Vercel Output Directory empty
- [ ] Preview/production host matches `src/lib/site.ts`

---

## 5. After each deploy (5 min)

1. Open production URL (not a stale preview slug).  
2. Hard refresh once if `/` locale or CSS looks cached.  
3. Smoke: home search + one listing + mobile drawer.  
4. Confirm latest commit hash on Vercel ≈ `git log -1`.

---

## 6. Scorecard refresh cadence

Re-score §1 **every 2 weeks** or after a major slice (content, CRM, domain).  
Keep this file as the single ops checklist; product priorities stay in `TZ_PRODUCT.md`.
