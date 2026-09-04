import { NextResponse } from "next/server";
import { sendTelegramLead } from "@/lib/telegram";
import { validateLeadFields } from "@/lib/lead-validation";

export const runtime = "nodejs";

type LeadBody = {
  kind?: string;
  locale?: string;
  name?: string;
  contact?: string;
  deal?: string;
  type?: string;
  location?: string;
  budget?: string;
  comment?: string;
  description?: string;
  slot?: string;
  listingUrl?: string;
  needShoot?: boolean;
  source?: string;
};

function clean(s: unknown, max = 500) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

function looksLikeUrl(raw: string) {
  if (raw.length < 8 || raw.length > 500) return false;
  return /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}([\/?#].*)?$/i.test(raw);
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const contact = clean(body.contact, 120);
  const kind = clean(body.kind, 32) || "LEAD";
  const listingUrl = clean(body.listingUrl, 500);

  if (kind === "SHORTLIST") {
    const comment = clean(body.comment, 2000);
    if (!comment) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }
  } else {
    const fieldError = validateLeadFields(name, contact);
    if (fieldError) {
      return NextResponse.json({ ok: false, error: fieldError }, { status: 400 });
    }
  }

  if (kind === "AUDIT" && !looksLikeUrl(listingUrl)) {
    return NextResponse.json({ ok: false, error: "link" }, { status: 400 });
  }

  const locale = clean(body.locale, 8) || "-";
  const lines = [
    `[${kind}] Nomore`,
    `Name: ${name || "—"}`,
    `Contact: ${contact || "—"}`,
    body.deal ? `Deal: ${clean(body.deal, 40)}` : null,
    body.type ? `Type: ${clean(body.type, 40)}` : null,
    body.location ? `Location: ${clean(body.location, 60)}` : null,
    body.budget ? `Budget: ${clean(body.budget, 60)}` : null,
    body.slot ? `Slot: ${clean(body.slot, 80)}` : null,
    listingUrl ? `Listing URL: ${listingUrl}` : null,
    typeof body.needShoot === "boolean"
      ? `Shooting: ${body.needShoot ? "yes" : "no"}`
      : null,
    body.comment ? `Comment: ${clean(body.comment, 2000)}` : null,
    body.description ? `Description: ${clean(body.description, 1200)}` : null,
    `Locale: ${locale}`,
    body.source ? `Source: ${clean(body.source, 200)}` : null,
  ].filter(Boolean) as string[];

  const result = await sendTelegramLead(lines.join("\n"));
  if (!result.ok) {
    console.error("[leads]", result.error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
