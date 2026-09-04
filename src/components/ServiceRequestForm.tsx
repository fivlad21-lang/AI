"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { ServiceDef } from "@/data/services";
import { GlassButton } from "@/components/GlassButton";
import { track } from "@/lib/analytics";
import { validateLeadFields } from "@/lib/lead-validation";

function mapError(code: string | undefined, dict: Dictionary) {
  if (code === "name") return dict.forms.invalidName;
  if (code === "contact") return dict.forms.invalidContact;
  if (code === "link") return dict.services.invalidLink;
  return dict.forms.error;
}

function looksLikeUrl(raw: string) {
  const s = raw.trim();
  if (s.length < 8 || s.length > 500) return false;
  return /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}([\/?#].*)?$/i.test(s);
}

export function ServiceRequestForm({
  locale,
  dict,
  service,
}: {
  locale: Locale;
  dict: Dictionary;
  service: ServiceDef;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const copy = service.id === "consult" ? dict.services.consult : dict.services.audit;
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
    if (service.needsLink && !looksLikeUrl(link)) {
      setStatus("error");
      setError(dict.services.invalidLink);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: service.kind,
          locale,
          name,
          contact,
          listingUrl: service.needsLink ? link.trim() : undefined,
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
      track("form_submit", { place: "services", kind: service.kind });
      setStatus("ok");
      setName("");
      setContact("");
      setLink("");
      setComment("");
    } catch {
      setStatus("error");
      setError(dict.forms.error);
    }
  };

  return (
    <form id={service.id} onSubmit={submit} className="glass space-y-4 rounded-[1.75rem] p-5 md:p-6">
      <div>
        <h2 className="font-display text-xl font-semibold tracking-tight">{copy.title}</h2>
        <p className="mt-1 text-sm font-semibold text-sea">{copy.price}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.text}</p>
      </div>
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
      {service.needsLink && (
        <label className="block text-xs font-semibold uppercase text-ink-muted">
          {dict.services.linkLabel}
          <input
            required
            className={field}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://…"
          />
        </label>
      )}
      <label className="block text-xs font-semibold uppercase text-ink-muted">
        {dict.forms.comment}
        <textarea
          className={`${field} min-h-20`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <GlassButton type="submit" variant="primary" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? dict.forms.sending : dict.services.request}
      </GlassButton>
      {status === "ok" && <p className="text-xs text-ok">{dict.forms.success}</p>}
      {status === "error" && (
        <p className="text-xs text-red-300">{error || dict.forms.error}</p>
      )}
      <p className="text-xs text-ink-muted">{dict.services.note}</p>
    </form>
  );
}
