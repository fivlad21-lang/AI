# ТЗ-DEPLOY 1.0 — Аудит деплою Nomore

**Статус:** затверджено + **fix deployed** (2026-07-26)  
**Канонічний live URL:** `https://ai.nomorevlad.vercel.app`  
**Також на проєкті може бути:** `https://ai-nomorevlad.vercel.app` (дефіс = project slug)  
**Плановий домен (пізніше):** `nomore.estate`  
**Репо:** `fivlad21-lang/AI`  
**Гілка:** `cursor/tz-pro-full-backlog-da6b`

---

## 0. Мета

Один Vercel-проєкт → сайт відкривається без платформенного `404: NOT_FOUND` → canonical / sitemap збігаються з live host.

---

## 1. Root cause (що зламалось)

| # | Проблема | Ефект |
|---|----------|--------|
| A | Два Vercel-проєкти на один GitHub repo | Подвійні деплої |
| B | Hyphen vs dot hostname у docs/коді | Плутанина URL |
| C | **`output: "export"` + ручний Output Directory=`out`** | Build **Ready**, але CDN віддає білий `404: NOT_FOUND` |
| D | Redirects у `next.config` ігноруються при static export | Крихкий `/` → `/bg` |

**Фікс у коді:** прибрано `output: "export"`. Деплой як **звичайний Next.js на Vercel** (SSG через `generateStaticParams` лишається). Redirect `/` → `/bg` працює через `next.config` + `vercel.json` + `app/page.tsx`.

---

## 2. Канон URL

```
https://ai.nomorevlad.vercel.app
```

- Без trailing slash.
- Env: `NEXT_PUBLIC_SITE_URL=https://ai.nomorevlad.vercel.app`
- Fallback у `src/lib/site.ts` — той самий host.
- Після `nomore.estate`: оновити Domains + env + fallback + sitemap/robots.

---

## 3. Owner checklist (Vercel UI) — обовʼязково один раз

1. **Один** Git-linked проєкт; дубль Disconnect/Delete.
2. Settings → **Build & Development**:
   - Framework Preset: **Next.js**
   - Root Directory: *(empty)*
   - **Output Directory: EMPTY** ← не `out`, не `.next`
   - Build Command: default (`next build` / `npm run build`)
3. Env: `NEXT_PUBLIC_SITE_URL=https://ai.nomorevlad.vercel.app`
4. **Redeploy → Clear cache and redeploy**
5. Smoke:
   - `https://ai.nomorevlad.vercel.app/` → 308/307 → `/bg`
   - `https://ai.nomorevlad.vercel.app/bg` → сайт Nomore
   - `https://ai-nomorevlad.vercel.app/bg` → те саме (якщо alias живий)

---

## 4. Code changes (цей фікс)

| Файл | Зміна |
|------|--------|
| `next.config.ts` | Без `output: "export"`; redirects `/`→`/bg`; Image remotePatterns |
| `vercel.json` | Redirect `/`→`/bg` |
| `src/app/page.tsx` | `redirect('/bg')` fallback |
| `src/lib/site.ts` | Canonical host з крапкою |
| `public/sitemap.xml`, `robots.txt` | Canonical host |
| `.env.example` | `NEXT_PUBLIC_SITE_URL` |

---

## 5. Acceptance

- [ ] Немає білого Vercel `NOT_FOUND` на Production
- [ ] `/` редіректить на `/bg`
- [ ] `/bg` показує Nomore (wordmark без N, месенджери з іконками)
- [ ] Output Directory у Dashboard порожній
- [ ] Один Git-linked проєкт

---

## 6. Якщо знову NOT_FOUND

1. Відкрий Deployment → Build Logs: чи є `Compiled successfully` без export/`out`.
2. Перевір Output Directory = empty.
3. Clear cache redeploy.
4. Не імпортуй репо в другий Vercel project.
