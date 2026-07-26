# ТЗ-DEPLOY 1.0 — Аудит деплою Nomore

**Статус:** затверджено (2026-07-26)  
**Канонічний live URL:** `https://ai.nomorevlad.vercel.app`  
**Плановий домен (пізніше):** `nomore.estate`  
**Репо:** `fivlad21-lang/AI`  
**Гілка робіт:** `cursor/tz-pro-full-backlog-da6b`

---

## 0. Мета

Один Vercel-проєкт → один канонічний hostname → сайт відкривається без платформенного `404: NOT_FOUND`, а canonical / sitemap / OG / лінки в WhatsApp збігаються з реальним доменом.

---

## 1. Де пішло не так (таймлайн)

| # | Момент | Що сталось | Симптом |
|---|--------|------------|---------|
| A | Import репо в Vercel двічі | Два проєкти (`pokemon3301`, `ai`, …) на один GitHub repo | Подвійні деплої одного коміту |
| B | Різні hostname | Project slug vs team subdomain | Плутанина «який лінк правильний» |
| C | **Hyphen vs dot** | У коді було `ai-nomorevlad.vercel.app`; у Domains Valid = `ai.nomorevlad.vercel.app` | Sitemap / canonical / share-лінки вели не туди |
| D | Production rebuild битого деплою | Status Ready, output порожній / не той Output Directory | Білий Vercel `404: NOT_FOUND` |
| E | `output: "export"` | Redirects у `next.config` не застосовуються до static export | `/` → `/bg` лише через `vercel.json` (або статичний `index`) |

**Коренева помилка в репо (виправлено в цьому ТЗ):** дефолтний `SITE_URL` з **дефісом** замість **крапки**.

---

## 2. Канон (locked)

```
https://ai.nomorevlad.vercel.app
```

- Без trailing slash.
- Не плутати з `ai-nomorevlad.vercel.app` (дефіс) і не з тимчасовими `*-phi-gold.vercel.app`.
- Після купівлі `nomore.estate`: оновити Domains + `NEXT_PUBLIC_SITE_URL` + fallback у `src/lib/site.ts` + sitemap/robots.

---

## 3. Owner checklist (Vercel UI)

Зробити в Dashboard один раз:

1. Залишити **один** Git-linked проєкт; дубль — Disconnect Git або Delete.
2. Settings → Domains: Production = `ai.nomorevlad.vercel.app` (Valid Configuration).
3. Settings → General: Framework = **Next.js**; Root Directory = `.`; Output Directory = **порожньо** (або явно `out`).
4. Git: Production Branch = `main` (або явна prod-гілка).
5. Env (Production + Preview):  
   `NEXT_PUBLIC_SITE_URL=https://ai.nomorevlad.vercel.app`
6. Redeploy Production після зміни env.
7. Перевірити логи останнього Ready: є export / `out/`, немає fail на post-build.
8. Відкрити:
   - `https://ai.nomorevlad.vercel.app/bg` → 200 + сайт
   - `https://ai.nomorevlad.vercel.app/` → redirect або landing на `/bg`
   - `https://ai.nomorevlad.vercel.app/ru/buy` → каталог

---

## 4. Code scope (реалізація ТЗ)

| Файл | Зміна |
|------|--------|
| `src/lib/site.ts` | Fallback `SITE_URL` → `https://ai.nomorevlad.vercel.app` |
| `public/sitemap.xml` | Усі `<loc>` на канон |
| `public/robots.txt` | Sitemap URL на канон |
| `docs/TZ.md`, `docs/MONITORING.md` | Live URL |
| `docs/TZ_DEPLOY.md` | Цей документ |
| `.env.example` | `NEXT_PUBLIC_SITE_URL` |

Поза скоупом: купівля `nomore.estate`, контент listings, UI-баги.

---

## 5. Acceptance

- [ ] Один Git-linked Vercel project
- [ ] `https://ai.nomorevlad.vercel.app/bg` = 200 + Nomore UI
- [ ] Немає білого Vercel `NOT_FOUND` на Production domain
- [ ] У HTML canonical / sitemap host = `ai.nomorevlad.vercel.app`
- [ ] Env `NEXT_PUBLIC_SITE_URL` виставлений і задеплоєний
- [ ] Дубль-проєкт відключений

---

## 6. Smoke після деплою

```bash
# локально
npm run build
# після Vercel Ready:
curl -sI https://ai.nomorevlad.vercel.app/bg | head -n 5
curl -sI https://ai.nomorevlad.vercel.app/ | head -n 8
# у HTML головної: canonical містить ai.nomorevlad.vercel.app
```

UI: text wordmark (без літери N), horizon favicon, WA/TG/Viber іконки в dock.
