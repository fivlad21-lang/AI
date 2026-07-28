"use client";

export function StickyListingCta({
  label,
  priceLabel,
}: {
  label: string;
  priceLabel: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0a101a]/95 px-4 py-3 backdrop-blur-xl print:hidden md:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <p className="min-w-0 flex-1 truncate text-sm font-semibold tabular-nums text-ink">
          {priceLabel}
        </p>
        <a
          href="#viewing"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sea px-4 py-2.5 text-sm font-semibold text-white"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
