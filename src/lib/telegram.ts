/**
 * Send lead text to the owner's Telegram DM via Bot API.
 * Requires TELEGRAM_BOT_TOKEN + TELEGRAM_LEADS_CHAT_ID (user must /start the bot once).
 */
export async function sendTelegramLead(text: string): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_LEADS_CHAT_ID?.trim();

  if (!token || !chatId) {
    return { ok: false, error: "Telegram is not configured" };
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  const data = (await res.json().catch(() => null)) as {
    ok?: boolean;
    description?: string;
  } | null;

  if (!res.ok || !data?.ok) {
    return {
      ok: false,
      error: data?.description || `Telegram HTTP ${res.status}`,
    };
  }

  return { ok: true };
}
