"use client";

import { useMemo, useState } from "react";
import { GlassButton } from "@/components/GlassButton";
import { MessengerGlyph } from "@/components/MessengerButton";
import type { Dictionary } from "@/i18n/dictionaries";
import { whatsappUrl } from "@/lib/contacts";

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

export function ViewingCalendar({
  dict,
  listingTitle,
  listingUrl,
}: {
  dict: Dictionary;
  listingTitle: string;
  listingUrl: string;
}) {
  const days = useMemo(() => nextDays(5), []);
  const [dayIdx, setDayIdx] = useState(0);
  const [slot, setSlot] = useState(SLOTS[0]);

  const day = days[dayIdx];
  const dayLabel = day
    ? day.toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "";

  const wa = whatsappUrl(
    `[VIEW] ${listingTitle}\nSlot: ${dayLabel} ${slot}\n${listingUrl}\n\n(${dict.listing.autoReply})`,
  );

  return (
    <div className="glass rounded-3xl p-5 print:hidden">
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
      <p className="mt-4 text-xs text-ink-muted">{dict.listing.autoReply}</p>
      <GlassButton href={wa} external variant="primary" className="mt-4">
        <MessengerGlyph kind="whatsapp" className="h-4 w-4" />
        {dict.cta.applyViewing}
      </GlassButton>
    </div>
  );
}
