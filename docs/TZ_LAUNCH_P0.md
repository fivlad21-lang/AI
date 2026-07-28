# Launch Fix P0 — Telegram leads, WA cleanup, Viber, agent photo

See also product backlog in `TZ.md` / `TZ_POLISH.md`.

## Done (code)

- [x] `/api/leads` never leaks raw Telegram errors to UI
- [x] Name/contact validation (client + server)
- [x] Viber dock: no `target=_blank` (fixes `about:invalid`)
- [x] Listing viewing → Telegram (`VIEW`); sticky CTA scrolls to `#viewing`
- [x] Strip duplicate WhatsApp CTAs (keep header + dock)
- [x] Contacts: agent photo ‖ lead form
- [x] Real agent photo from upload

## Owner (required for leads)

- [ ] Vercel: `TELEGRAM_BOT_TOKEN` + `TELEGRAM_LEADS_CHAT_ID` = **your user id** (not bot id)
- [ ] Open the bot → `/start` once → redeploy
