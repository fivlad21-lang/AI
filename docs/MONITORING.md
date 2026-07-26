# Monitoring report — Nomore Real Estate

**When:** 2026-07-26 (pass 2 — UI audit + wordmark)  
**Branch:** `cursor/tz-pro-full-backlog-da6b`  
**Method:** code audit against production screenshots + static build checks  

Live target (after deploy): `https://ai.nomorevlad.vercel.app`  
Deploy mode: Vercel-native Next.js (**no** `output: "export"`) — see `docs/TZ_DEPLOY.md`  
Planned domain (later): `nomore.estate`

---

## 1. Verdict

Shell is strong; remaining blockers are **content** (demo/Unsplash) and **deploy lag** (live still showed old logo/messengers).  
Pass 2 closed the mobile filter overlap and premium wordmark polish.

| Area | Score (1–5) | Note |
|------|-------------|------|
| Visual polish | 4.5 | Text wordmark + horizon favicon; no letter-N tile |
| Trust | 2 | Demo listings + stock photos dominate |
| Lead path | 4.5 | WA / TG / Viber logos in dock + header |
| i18n quality | 4 | Filter keys + about copy cleaned |
| Local SEO | 3 | Unique titles shipped; location intros still open |
| Mobile UX | 4.5 | GlassSelect portal; compare/dock/cookie stacking fixed |
| Ops readiness | 3 | Checklist exists; no CMS/analytics yet |

---

## 2. Pass 2 fixes (this slice)

| Issue | Fix |
|-------|-----|
| Letter **N** mark looked cheap | Text wordmark only; tracking/weight/Estate color; favicon → horizon mark |
| Filter district list overlapped Type/Rooms | `GlassSelect` → `createPortal` + `fixed` + flip-up |
| Dock / CompareBar collision | Compare `z-50` bottom-center; dock lifts when compare or cookies open |
| Header WA text-only on mobile screenshots | Icon-only WA on `<md`, full button on desktop |
| Empty image alts | Hero / compare / shoot gallery |
| About “no more” English leak | Localized without English idiom |

---

## 3. Still open

| Severity | Finding |
|----------|---------|
| **P0 content** | All public listings `demo: true` + Unsplash |
| **P0 deploy** | Merge/redeploy PR so live matches branch |
| **P1** | Location SEO intros on `/buy?location=…` |
| **P1** | Soft 404 under pure static host |
| **P2** | Hero slim-down; localized WA prefills |
| **P3** | Analytics, TG bot, CMS, domain cutover |

---

## 4. Suggested next slice

1. Owner: real listings + own photos.  
2. Location intro copy (P1 SEO).  
3. Hero CTA slim-down (P2).

---

## 5. Test commands

```bash
npm run build
npx serve out -l 3456
# Open /ru/buy — open district select — must not cover Type/Rooms
# Scroll catalog — dock + compare bar must not overlap
```
