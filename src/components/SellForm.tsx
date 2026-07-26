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

export function SellForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [deal, setDeal] = useState("sell");
  const [type, setType] = useState("apartment");
  const [location, setLocation] = useState("burgas");
  const [description, setDescription] = useState("");
  const [needShoot, setNeedShoot] = useState(true);

  const field =
    "glass mt-1.5 w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sea/50";

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "[SELL] Nomore quick sale request",
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Deal: ${deal}`,
      `Type: ${type}`,
      `Location: ${location}`,
      `Shooting: ${needShoot ? "yes" : "no"}`,
      `Description: ${description}`,
      `Locale: ${locale}`,
      "",
      dict.listing.autoReply,
    ].join("\n");
    track("wa_click", { place: "sell_form" });
    window.open(whatsappUrl(text), "_blank");
  };

  return (
    <form onSubmit={submit} className="glass-strong space-y-4 rounded-[1.75rem] p-5 md:p-7">
      <h3 className="font-display text-xl font-semibold tracking-tight">{dict.sell.formTitle}</h3>
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
          placeholder="+359 / +380…"
        />
      </label>
      <div className="relative z-10 grid gap-3 sm:grid-cols-2">
        <GlassSelect
          label={dict.forms.dealSell}
          value={deal}
          onChange={setDeal}
          options={[
            { value: "sell", label: dict.forms.dealSell },
            { value: "rent", label: dict.forms.dealRent },
          ]}
        />
        <GlassSelect
          label={dict.forms.type}
          value={type}
          onChange={setType}
          options={Object.entries(dict.types).map(([k, v]) => ({ value: k, label: v }))}
        />
      </div>
      <GlassSelect
        label={dict.forms.location}
        value={location}
        onChange={setLocation}
        options={locations.map((l) => ({ value: l.id, label: l.label[locale] }))}
      />
      <label className="block text-xs font-semibold uppercase text-ink-muted">
        {dict.forms.description}
        <textarea
          className={`${field} min-h-24`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label className="flex items-center gap-3 text-sm text-ink">
        <input
          type="checkbox"
          checked={needShoot}
          onChange={(e) => setNeedShoot(e.target.checked)}
          className="h-4 w-4 accent-sea"
        />
        {dict.forms.needShoot}
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
