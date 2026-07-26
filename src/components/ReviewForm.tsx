"use client";

import { useId, useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { GlassButton } from "@/components/GlassButton";
import { MessengerGlyph } from "@/components/MessengerButton";
import { whatsappUrl } from "@/lib/contacts";

export function ReviewForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [stars, setStars] = useState(5);
  const [hover, setHover] = useState(0);
  const [description, setDescription] = useState("");
  const groupId = useId();

  const field =
    "glass mt-1.5 w-full rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sea/50";

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (stars < 1) return;
    const text = [
      `[REVIEW] Nomore`,
      `Stars: ${"★".repeat(stars)}${"☆".repeat(5 - stars)} (${stars}/5)`,
      `Name: ${name}`,
      `Contact: ${contact || "-"}`,
      `Review: ${description}`,
      `Locale: ${locale}`,
    ].join("\n");
    window.open(whatsappUrl(text), "_blank");
  };

  const active = hover || stars;

  return (
    <div id="leave-review" className="mt-10 scroll-mt-28">
      {!open ? (
        <GlassButton type="button" variant="glass" onClick={() => setOpen(true)}>
          {dict.cta.leaveReview}
        </GlassButton>
      ) : (
        <form onSubmit={submit} className="glass max-w-xl space-y-4 rounded-3xl p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {dict.review.title}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{dict.review.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-ink-muted hover:text-ink"
              aria-label={dict.cta.reset}
            >
              ✕
            </button>
          </div>

          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {dict.review.stars}
            </legend>
            <div
              className="mt-2 flex gap-1"
              role="radiogroup"
              aria-labelledby={groupId}
              onMouseLeave={() => setHover(0)}
            >
              <span id={groupId} className="absolute h-px w-px overflow-hidden opacity-0">
                {dict.review.stars}
              </span>
              {[1, 2, 3, 4, 5].map((n) => {
                const on = n <= active;
                return (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={stars === n}
                    aria-label={`${n}`}
                    onMouseEnter={() => setHover(n)}
                    onFocus={() => setHover(n)}
                    onBlur={() => setHover(0)}
                    onClick={() => setStars(n)}
                    className={`text-2xl leading-none transition ${
                      on ? "text-amber-300" : "text-ink-muted/40 hover:text-amber-200/70"
                    }`}
                  >
                    ★
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="block text-xs font-semibold uppercase text-ink-muted">
            {dict.forms.name}
            <input
              required
              className={field}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>

          <label className="block text-xs font-semibold uppercase text-ink-muted">
            {dict.forms.contact}{" "}
            <span className="font-normal normal-case tracking-normal">({dict.review.optional})</span>
            <input
              className={field}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              autoComplete="tel"
            />
          </label>

          <label className="block text-xs font-semibold uppercase text-ink-muted">
            {dict.review.description}
            <textarea
              required
              minLength={10}
              className={`${field} min-h-28`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <GlassButton type="submit" variant="primary" className="w-full">
            <MessengerGlyph kind="whatsapp" className="h-4 w-4" />
            {dict.review.submit}
          </GlassButton>
          <p className="text-xs text-ink-muted">{dict.review.hint}</p>
        </form>
      )}
    </div>
  );
}
