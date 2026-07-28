"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { locations } from "@/data/locations";
import { GlassButton } from "@/components/GlassButton";
import { GlassSelect } from "@/components/GlassSelect";
import { track } from "@/lib/analytics";
import { validateLeadFields } from "@/lib/lead-validation";

function mapError(code: string | undefined, dict: Dictionary) {
  if (code === "name") return dict.forms.invalidName;
  if (code === "contact") return dict.forms.invalidContact;
  return dict.forms.error;
}

export function LeadForm({
  locale,
  dict,
  prefix = "[BUY]",
}: {
  locale: Locale;
  dict: Dictionary;
  prefix?: string;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [deal, setDeal] = useState("buy");
  const [location, setLocation] = useState("burgas");
  const [budget, setBudget] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

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
    const kind = prefix.replace(/[\[\]]/g, "") || "BUY";
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          locale,
          name,
          contact,
          deal,
          location,
          budget,
          comment,
          source: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) {
        setStatus("error");
        setError(mapError(data?.error, dict));
        return;
      }
      track("form_submit", { place: "lead_form", kind });
      setStatus("ok");
      setName("");
      setContact("");
      setBudget("");
      setComment("");
    } catch {
      setStatus("error");
      setError(dict.forms.error);
    }
  };

  return (
    <form onSubmit={submit} className="glass space-y-4 rounded-3xl p-5 md:p-6">
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
      <div className="relative z-10 grid gap-3 sm:grid-cols-2">
        <GlassSelect
          label={dict.forms.deal}
          value={deal}
          onChange={setDeal}
          options={[
            { value: "buy", label: dict.nav.buy },
            { value: "rent", label: dict.nav.rent },
          ]}
        />
        <GlassSelect
          label={dict.forms.location}
          value={location}
          onChange={setLocation}
          options={locations.map((l) => ({ value: l.id, label: l.label[locale] }))}
        />
      </div>
      <label className="block text-xs font-semibold uppercase text-ink-muted">
        {dict.forms.budget}
        <input className={field} value={budget} onChange={(e) => setBudget(e.target.value)} />
      </label>
      <label className="block text-xs font-semibold uppercase text-ink-muted">
        {dict.forms.comment}
        <textarea className={`${field} min-h-20`} value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <GlassButton type="submit" variant="primary" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? dict.forms.sending : dict.cta.send}
      </GlassButton>
      {status === "ok" && <p className="text-xs text-ok">{dict.forms.success}</p>}
      {status === "error" && (
        <p className="text-xs text-red-300">{error || dict.forms.error}</p>
      )}
      <p className="text-xs text-ink-muted">{dict.forms.replyNote}</p>
    </form>
  );
}
