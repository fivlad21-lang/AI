import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { GlassButton } from "@/components/GlassButton";
import { formatFromPrice, services } from "@/data/services";

export function HomeServices({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="border-y border-white/[0.06] bg-bg-elevated/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {dict.services.homeTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
              {dict.services.homeText}
            </p>
          </div>
          <GlassButton href={`/${locale}/services`} variant="primary">
            {dict.services.homeCta}
          </GlassButton>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s) => {
            const copy = s.id === "consult" ? dict.services.consult : dict.services.audit;
            return (
              <Link
                key={s.id}
                href={`/${locale}/services#${s.id}`}
                className="glass group rounded-[1.5rem] p-5 transition hover:bg-white/[0.08] md:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-sea">
                  {formatFromPrice(locale, s.priceFromEur)}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                  {copy.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy.text}</p>
                <p className="mt-4 text-sm font-semibold text-ink group-hover:text-sea">
                  {dict.services.request} →
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
