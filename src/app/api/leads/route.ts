import { NextResponse } from "next/server";
import { sendTelegramLead } from "@/lib/telegram";

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
  needShoot?: boolean;
  source?: string;
};

function clean(s: unknown, max = 500) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const contact = clean(body.contact, 120);
  if (!name || !contact) {
    return NextResponse.json(
      { ok: false, error: "Name and contact are required" },
      { status: 400 },
    );
  }

  const kind = clean(body.kind, 32) || "LEAD";
  const locale = clean(body.locale, 8) || "-";
  const lines = [
    `[${kind}] Nomore`,
    `Name: ${name}`,
    `Contact: ${contact}`,
    body.deal ? `Deal: ${clean(body.deal, 40)}` : null,
    body.type ? `Type: ${clean(body.type, 40)}` : null,
    body.location ? `Location: ${clean(body.location, 60)}` : null,
    body.budget ? `Budget: ${clean(body.budget, 60)}` : null,
    typeof body.needShoot === "boolean"
      ? `Shooting: ${body.needShoot ? "yes" : "no"}`
      : null,
    body.comment ? `Comment: ${clean(body.comment, 800)}` : null,
    body.description ? `Description: ${clean(body.description, 1200)}` : null,
    `Locale: ${locale}`,
    body.source ? `Source: ${clean(body.source, 200)}` : null,
  ].filter(Boolean) as string[];

  const result = await sendTelegramLead(lines.join("\n"));
  if (!result.ok) {
    console.error("[leads]", result.error);
    return NextResponse.json(
      { ok: false, error: result.error || "Failed to send" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
