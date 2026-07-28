# Telegram lead delivery (bot → owner DM)

Site forms (`SellForm`, `LeadForm`) POST to `/api/leads`. The API sends a plain-text message to **your Telegram DM** via Bot API — not a channel, not personal WhatsApp.

Floating dock (WA / Telegram / Viber) stays for chat; footer and contacts no longer duplicate messenger button rows.

## Owner setup (once)

1. Open [@BotFather](https://t.me/BotFather) → `/newbot` → copy the **bot token**.
2. Start a chat with your bot and tap **/start** (required so the bot can message you).
3. Get your numeric user id via [@userinfobot](https://t.me/userinfobot) or [@getidsbot](https://t.me/getidsbot).
4. In **Vercel → Project → Settings → Environment Variables** set:
   - `TELEGRAM_BOT_TOKEN` = bot token from BotFather
   - `TELEGRAM_LEADS_CHAT_ID` = your user id (e.g. `123456789`)
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

Kinds: `SELL`, `BUY`, `RENT`, etc. (from the form `kind` / prefix).

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| API 502 / “Telegram is not configured” | Both env vars missing or empty |
| `chat not found` / `Forbidden` | You must `/start` the bot once; chat id must be **your user id**, not a channel |
| Forms say success but nothing arrives | Wrong chat id, or bot token from a different bot |

Public Telegram deep-link for visitors remains `@notany` in `src/lib/contacts.ts` (dock).
