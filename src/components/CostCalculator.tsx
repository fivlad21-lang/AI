"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { GlassButton } from "@/components/GlassButton";
import { formatEur } from "@/components/PriceText";
import { estimatePurchaseCosts, formatPctRange } from "@/lib/cost-estimate";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

function parseMoney(raw: string) {
  const n = Number(String(raw).replace(/[^\d]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export function CostCalculator({
  locale,
  dict,
  initialPriceEur = 100000,
  initialMaintenanceEur = 40,
  compact = false,
}: {
  locale: Locale;
  dict: Dictionary;
  initialPriceEur?: number;
  initialMaintenanceEur?: number;
  compact?: boolean;
}) {
  const c = dict.costs;
  const [price, setPrice] = useState(String(initialPriceEur));
  const [fee, setFee] = useState(String(initialMaintenanceEur));

  const estimate = useMemo(
    () => estimatePurchaseCosts(parseMoney(price), parseMoney(fee)),
    [price, fee],
  );

  const field =
    "glass mt-1.5 w-full rounded-xl px-3 py-2.5 text-sm tabular-nums outline-none focus:ring-2 focus:ring-sea/50";

  const range = (min: number, max: number) =>
    `${formatEur(min, locale)} – ${formatEur(max, locale)}`;

  return (
    <section
      id="costs"
      className={`glass print:hidden ${compact ? "rounded-3xl p-5" : "rounded-[1.75rem] p-6 md:p-8"}`}
    >
      <h2 className="font-display text-lg font-semibold tracking-tight md:text-xl">{c.title}</h2>
      <p className="mt-1 text-sm text-ink-muted">{c.subtitle}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {c.price}
          <input
            className={field}
            inputMode="numeric"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {c.maintenance}
          <input
            className={field}
            inputMode="numeric"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </label>
      </div>

      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
          <dt className="text-ink-muted">
            {c.closing}{" "}
            <span className="text-xs">({formatPctRange()})</span>
          </dt>
          <dd className="font-semibold tabular-nums">
            {range(estimate.closingMin, estimate.closingMax)}
          </dd>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
          <dt className="text-ink-muted">{c.cashAtClose}</dt>
          <dd className="font-semibold tabular-nums">
            {range(estimate.cashAtCloseMin, estimate.cashAtCloseMax)}
          </dd>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <dt className="text-ink-muted">{c.firstYear}</dt>
          <dd className="font-semibold tabular-nums">
            {range(estimate.yearMin, estimate.yearMax)}
          </dd>
        </div>
      </dl>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">{c.commissionNote}</p>
      <p className="mt-2 text-xs leading-relaxed text-ink-muted">{c.disclaimer}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <GlassButton href={`/${locale}/services#audit`} variant="primary">
          {c.ctaAudit}
        </GlassButton>
        <Link href={`/${locale}/contacts`} className="self-center text-sm text-sea">
          {c.ctaChat} →
        </Link>
      </div>
    </section>
  );
}
