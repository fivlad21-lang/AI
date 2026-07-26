"use client";

import { WhatsAppIcon } from "@/components/MessengerIcons";
import { track } from "@/lib/analytics";

export function StickyListingCta({
  href,
  label,
  priceLabel,
}: {
  href: string;
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
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("wa_click", { place: "listing_sticky" })}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {label}
        </a>
      </div>
    </div>
  );
}
