# Telegram leads (D1 / D2)

## Current state
- Site is **static export** → no Next.js API routes on Vercel for this deploy mode.
- Floating dock: **WhatsApp** (`+380 93 385 18 04`), **Telegram** [@notany](https://t.me/notany), **Viber** (`+49 151 40166765`).
- Form leads primarily go to **WhatsApp** with prefixes `[BUY]` `[RENT]` `[SELL]` `[VIEW]` `[SHORTLIST]` `[FAQ]`.
- Messenger buttons use brand SVG logos (not WA/TG text badges).

## When ready
1. Create bot via `@BotFather`, get token.
2. Get your chat id (or channel id).
3. Set `TELEGRAM_USERNAME` in `src/lib/contacts.ts` (public deep-link for users).
4. Either:
   - **A)** Add `POST /api/leads` that forwards to Telegram Bot API (static export already removed for Vercel), or
   - **B)** Point forms to an external webhook (Make / n8n / Cloudflare Worker) that posts to Telegram.

## Payload shape (ready)
```
{
  prefix: "[BUY]" | "[RENT]" | "[SELL]" | "[VIEW]" | "[SHORTLIST]" | "[FAQ]",
  locale, name, contact, fields..., sourceUrl
}
```
