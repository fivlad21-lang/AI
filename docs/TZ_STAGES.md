# Nomore — поетапне ТЗ (коротко)

Позиціонування: чесний підбір на узбережжі Бургаса. Не «IT-ріелтор», не AI-вау.
База: вітрина + ліди в Telegram. Стиль: dark glass, 4 мови.

## Етап 0 — Telegram env (owner)
- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_LEADS_CHAT_ID` = user id → `/start` → redeploy

## Етап 1 — Довіра і особа ← done
- Hero структура як є; м’який підзаголовок
- Блок «Хто веде підбір» після how-it-works
- Instagram: `https://www.instagram.com/nomore.estate`
- Domain: `nomoreestate.agency` (див. `docs/DOMAIN.md` — DNS у Vercel UI)

## Етап 2 — Послуги CONSULT / AUDIT ← done
- `/services`: відео-консультація від €49, розбір об’єкта від €79
- Заявки → Telegram (`CONSULT` / `AUDIT`)
- Блок на головній + пункт у меню

## Етап 3 — Відео-стрічка ← skipped (чекає лінки від owner)
- 2–4 короткі відео на головній / в блоці довіри

## Етап 4 — Паспорт лота + тип показу ← done
- На картці лота: паспорт (рік, стан, опалення, паркінг, меблі, щомісячний внесок, акт)
- Тип показу: `offline` (на місці) / `online` (відео) — toggle у формі `#viewing`
- Заявка `VIEW` у Telegram з `Type: offline|online`
- Бейдж «Online viewing», якщо лот підтримує онлайн

## Етап 5 — Калькулятор прихованих витрат ← done
- Лише **sale**: блок на лоті (ціна + maintenance з паспорта) + секція `#costs` у `/guide`
- Діапазони closing (tax/notary/registry) + cash at close + first-year living
- Без % комісії покупця — текст «залежить від угоди»
- Disclaimer + CTA на AUDIT / чат
- Ставки в `src/lib/cost-estimate.ts` (легко підкрутити)

## Етап 6 — Реальний контент / GA / +359
- WhatsApp BG: `+359 886 690 813` ← done (код)
- Форма «Знайди мені дім» (`SEARCH`) на головній + контакти ← done
- Акцент головної на послуги / підбір, не на склад оголошень ← done
- FAQ про підбір без великого каталогу ← done
- Owner: реальні фото лотів, `NEXT_PUBLIC_GA_ID`, кейси
