# Domain: nomoreestate.agency

**Canonical URL:** `https://nomoreestate.agency`  
**Instagram:** `https://www.instagram.com/nomore.estate`  
**Vercel project:** `ai` (team `nomorevlad`)

Code fallbacks (`SITE_URL`, sitemap, robots) already point to the new domain.
The old host `ai.nomorevlad.vercel.app` can stay as a secondary alias.

## Owner steps (Vercel UI) — required once

1. Open [Vercel → Project `ai` → Settings → Domains](https://vercel.com/nomorevlad/ai/settings/domains)
2. Add:
   - `nomoreestate.agency`
   - `www.nomoreestate.agency` (optional, redirect to apex)
3. At your domain registrar, set DNS as Vercel shows, typically one of:
   - **A** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
   - or Vercel nameservers if you move DNS fully to Vercel
4. Settings → Environment Variables → set for Production (and Preview if you want):
   - `NEXT_PUBLIC_SITE_URL=https://nomoreestate.agency`
5. **Redeploy** Production (Clear cache recommended).
6. Smoke:
   - `https://nomoreestate.agency/` → `/bg`
   - Instagram button visible on home author block
   - Forms still post to Telegram

## Note
Domain was purchased outside this agent session (`nomoreestate.agency` is taken / not available to buy again). Linking happens in Vercel Domains + registrar DNS — not via repo push alone.
