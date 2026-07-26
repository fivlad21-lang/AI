# Monitoring — Nomore Real Estate

**Updated:** 2026-07-26  
**Live:** `https://ai.nomorevlad.vercel.app`  
**Branch:** `cursor/tz-pro-full-backlog-da6b`  
**TZ (enable stack):** `docs/TZ_MONITORING.md`  
**Polish (ideal small inventory):** `docs/TZ_POLISH.md`  
**Roadmap:** `TZ_PRODUCT.md` · CRM: `TZ_CRM_VITRINE.md` · Deploy: `TZ_DEPLOY.md`

**Out of scope for now:** listing scrapers / FSBO parsers. Focus = **вітрина + ліди + стабільність + GA4**.

---

## 0. Enable GA4 (owner, 5 min)

1. Create GA4 property → copy Measurement ID `G-…`.  
2. Vercel → Project → Settings → Environment Variables → `NEXT_PUBLIC_GA_ID=G-…` (Production).  
3. Redeploy.  
4. Open site → accept cookies (OK) → Realtime in GA should show you.  
5. Click hero WhatsApp → Events: `wa_click` (`place=hero`).  
6. Optional: Vercel → Speed Insights.

Without the env var the site stays no-op (no gtag scripts until consent + ID).

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
| Mobile UX | 4.5 | Drawer, ≤1 WA on home first screen |
| Ops | 3.0 | Manual `listings.ts` until CRM API |
| Analytics | 3.5 | GA4 wired; needs `NEXT_PUBLIC_GA_ID` in Vercel |

---

## 2. What to monitor (three layers)

### A. Product (owner / weekly)
Manual smoke — §4.

### B. Analytics (GA4 after cookie OK)
Code: `src/lib/analytics.ts`, `src/components/Analytics.tsx`.

| Event / metric | Why |
|----------------|-----|
| Sessions by locale path | Auto-locale working? |
| `wa_click` by `place` | Lead sources |
| `hero_search` | Search usefulness |
| `catalog_view` list/map | Discovery |
| `review_open` / `review_submit` | Trust loop |
| `ui_error` | Caught render failures |

### C. Tech / ops
| Check | Where |
|-------|--------|
| Deploy success | Vercel |
| Runtime / build errors | Vercel logs |
| Output Directory | **empty** (no `out`) |
| Canonical | `ai.nomorevlad.vercel.app` until `nomore.estate` |

---

## 3. Open backlog (monitoring lens)

| Sev | Item | Owner |
|-----|------|--------|
| P0 | Set `NEXT_PUBLIC_GA_ID` in Vercel | Owner |
| P0 | Real photos + texts; `demo: false` | Owner |
| P1 | About + reply SLA | Owner copy |
| P1 | Location SEO intros; 2–3 blog posts | Content |
| P2 | Domain + Search Console + Speed Insights | Owner |
| P2 | CRM API sync | Backend |
| — | Parser / scout FSBO | Deferred |

---

## 4. Weekly smoke checklist

```bash
npm run build
```

**Desktop**
- [ ] `/` → locale by cookie / Accept-Language  
- [ ] Home: WA shortlist + hero search → catalog  
- [ ] `/buy`: filters, List|Map, listing → WA  
- [ ] Leave review → WA `[REVIEW]`  
- [ ] No visible «Demo» / «Демо»

**Mobile**
- [ ] Full-height drawer; ≤1 WA on first screen  
- [ ] Opaque GlassSelect menus  

**Analytics (when ID set)**
- [ ] After cookie OK, gtag loads (Network: `gtag/js`)  
- [ ] Before OK / without ID — no gtag  
- [ ] Realtime + `wa_click` visible in GA  

**Deploy**
- [ ] Vercel Output Directory empty  
- [ ] Production host matches `src/lib/site.ts`

---

## 5. Weekly improvement ritual (15 min)

1. GA: top pages, locales, `wa_click` by `place`.  
2. Vercel: failed deploys / error spikes.  
3. Smoke §4.  
4. Pick **one** improvement for next week (hypothesis from data).

---

## 6. After each deploy

1. Production URL (not stale preview).  
2. Hard refresh if locale/CSS looks cached.  
3. Smoke: home search + listing + mobile drawer.  
4. If GA ID set: cookie OK → one `wa_click`.
