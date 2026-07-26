import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="border-y border-white/[0.06] bg-bg-elevated/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <p className="section-label">Trust</p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {dict.home.trustTitle}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.id}
              className="glass animate-rise rounded-3xl p-6"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="text-[15px] leading-relaxed text-ink">“{t.quote[locale]}”</p>
              <footer className="mt-5 text-sm text-ink-muted">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="mx-1.5">·</span>
                {t.role[locale]}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
