# Telegram lead delivery (bot → owner DM)

Site forms (`SellForm`, `LeadForm`, viewing request, shortlist) POST to `/api/leads`. The API sends a plain-text message to **your Telegram DM** via Bot API — not a channel, not personal WhatsApp.

Floating dock (WA / Telegram / Viber) stays for live chat. Header keeps **one** WhatsApp button. Duplicate WA CTAs on pages were removed.

## Owner setup (once)

1. Open [@BotFather](https://t.me/BotFather) → `/newbot` → copy the **bot token**.
2. Start a chat with **your** bot and tap **/start** (required so the bot can message you).
3. Get **your** numeric **user id** via [@userinfobot](https://t.me/userinfobot) or [@getidsbot](https://t.me/getidsbot).  
   **Do not** use the bot’s own id.
4. In **Vercel → Project → Settings → Environment Variables** set:
   - `TELEGRAM_BOT_TOKEN` = bot token from BotFather
   - `TELEGRAM_LEADS_CHAT_ID` = **your user id** (e.g. `123456789`)
5. Redeploy.

Locally, copy `.env.example` → `.env.local` and fill the same keys.

## Message shape

```
[SELL] Nomore
Name: …
Contact: …
Deal: …
…
Locale: ua
Source: https://…
```

Kinds: `SELL`, `BUY`, `RENT`, `VIEW`, `SHORTLIST`, etc.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| API 502 / forms show generic error | Check Vercel logs; both env vars must be set |
| `Forbidden: the bot can't send messages to the bot` | `TELEGRAM_LEADS_CHAT_ID` is the **bot id** — replace with **your user id**, then `/start` the bot |
| `chat not found` / `Forbidden` | You must `/start` the bot once; chat id must be **your user id**, not a channel |
| Forms say success but nothing arrives | Wrong chat id, or bot token from a different bot |

Public Telegram deep-link for visitors remains `@notany` in `src/lib/contacts.ts` (dock).
