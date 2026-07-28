"use client";

import { useMemo, useState, type FormEvent } from "react";
import { GlassButton } from "@/components/GlassButton";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { track } from "@/lib/analytics";
import { validateLeadFields } from "@/lib/lead-validation";

function nextDays(count: number) {
  const out: Date[] = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  for (let i = 1; i <= count + 6 && out.length < count; i++) {
    const x = new Date(d);
    x.setDate(d.getDate() + i);
    const day = x.getDay();
    if (day === 0) continue;
    out.push(x);
  }
  return out;
}

const SLOTS = ["10:00", "12:00", "15:00", "17:30"];

function mapError(code: string | undefined, dict: Dictionary) {
  if (code === "name") return dict.forms.invalidName;
  if (code === "contact") return dict.forms.invalidContact;
  return dict.forms.error;
}

export function ViewingCalendar({
  locale,
  dict,
  listingTitle,
  listingUrl,
}: {
  locale: Locale;
  dict: Dictionary;
  listingTitle: string;
  listingUrl: string;
}) {
  const days = useMemo(() => nextDays(5), []);
  const [dayIdx, setDayIdx] = useState(0);
  const [slot, setSlot] = useState(SLOTS[0]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const day = days[dayIdx];
  const dayLabel = day
    ? day.toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "";

  const field =
    "glass mt-1.5 w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sea/50";

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const fieldErr = validateLeadFields(name, contact);
    if (fieldErr) {
      setStatus("error");
      setError(mapError(fieldErr, dict));
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "VIEW",
          locale,
          name,
          contact,
          slot: `${dayLabel} ${slot}`,
          comment: listingTitle,
          source: listingUrl,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) {
        setStatus("error");
        setError(mapError(data?.error, dict));
        return;
      }
      track("form_submit", { place: "viewing", kind: "VIEW" });
      setStatus("ok");
      setName("");
      setContact("");
    } catch {
      setStatus("error");
      setError(dict.forms.error);
    }
  };

  return (
    <form id="viewing" onSubmit={submit} className="glass rounded-3xl p-5 print:hidden">
      <h2 className="font-display text-lg font-semibold">{dict.listing.viewingTitle}</h2>
      <p className="mt-1 text-sm text-ink-muted">{dict.listing.viewingHint}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {days.map((d, i) => {
          const label = d.toLocaleDateString(undefined, {
            weekday: "short",
            day: "numeric",
            month: "short",
          });
          return (
            <button
              key={d.toISOString()}
              type="button"
              onClick={() => setDayIdx(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                i === dayIdx ? "bg-sea text-white" : "glass text-ink-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {SLOTS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSlot(s)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              s === slot ? "bg-sea text-white" : "glass text-ink-muted hover:text-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-4 space-y-3">
        <label className="block text-xs font-semibold uppercase text-ink-muted">
          {dict.forms.name}
          <input required className={field} value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="block text-xs font-semibold uppercase text-ink-muted">
          {dict.forms.contact}
          <input
            required
            className={field}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+359 / @username"
          />
        </label>
      </div>
      <p className="mt-4 text-xs text-ink-muted">{dict.listing.autoReply}</p>
      <GlassButton type="submit" variant="primary" className="mt-4 w-full" disabled={status === "sending"}>
        {status === "sending" ? dict.forms.sending : dict.cta.applyViewing}
      </GlassButton>
      {status === "ok" && <p className="mt-2 text-xs text-ok">{dict.forms.success}</p>}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-300">{error || dict.forms.error}</p>
      )}
    </form>
  );
}
