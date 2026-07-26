"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { locations } from "@/data/locations";
import { GlassButton } from "@/components/GlassButton";
import { GlassSelect } from "@/components/GlassSelect";
import { MessengerGlyph } from "@/components/MessengerButton";
import { whatsappUrl } from "@/lib/contacts";
import { track } from "@/lib/analytics";

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

  const field =
    "glass mt-1.5 w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sea/50";

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `${prefix} Nomore lead`,
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Deal: ${deal}`,
      `Location: ${location}`,
      `Budget: ${budget || "-"}`,
      `Comment: ${comment || "-"}`,
      `Locale: ${locale}`,
      "",
      dict.listing.autoReply,
    ].join("\n");
    track("wa_click", { place: "lead_form" });
    window.open(whatsappUrl(text), "_blank");
  };

  return (
    <form onSubmit={submit} className="glass space-y-4 rounded-3xl p-5 md:p-6">
      <label className="block text-xs font-semibold uppercase text-ink-muted">
        {dict.forms.name}
        <input required className={field} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="block text-xs font-semibold uppercase text-ink-muted">
        {dict.forms.contact}
        <input required className={field} value={contact} onChange={(e) => setContact(e.target.value)} />
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
      <GlassButton type="submit" variant="primary" className="w-full">
        <MessengerGlyph kind="whatsapp" className="h-4 w-4" />
        {dict.cta.send}
      </GlassButton>
      <p className="text-xs text-ink-muted">{dict.forms.success}</p>
      <p className="text-xs text-ink-muted">{dict.listing.autoReply}</p>
    </form>
  );
}
