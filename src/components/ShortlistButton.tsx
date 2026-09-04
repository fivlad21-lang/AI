"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Listing } from "@/data/listings";
import { GlassButton } from "@/components/GlassButton";
import { track } from "@/lib/analytics";
import { waShortlist } from "@/lib/wa-messages";

/** Sends shortlist text to Telegram bot DM (not WhatsApp). */
export function ShortlistButton({
  locale,
  dict,
  items,
  place,
  label,
}: {
  locale: Locale;
  dict: Dictionary;
  items: Listing[];
  place: "favorites" | "compare";
  label: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const send = async () => {
    setStatus("sending");
    const text = waShortlist(locale, items, place);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "SHORTLIST",
          locale,
          name: "Shortlist",
          contact: "site-shortlist",
          comment: text,
          source: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !data?.ok) {
        setStatus("error");
        return;
      }
      track("form_submit", { place, kind: "SHORTLIST" });
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <GlassButton
        type="button"
        variant="primary"
        onClick={send}
        disabled={status === "sending" || items.length === 0}
      >
        {status === "sending" ? dict.forms.sending : label}
      </GlassButton>
      {status === "ok" && <p className="mt-2 text-xs text-ok">{dict.forms.success}</p>}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-300">{dict.forms.error}</p>
      )}
    </div>
  );
}
