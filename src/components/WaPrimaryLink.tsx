"use client";

import type { ReactNode } from "react";
import { GlassButton } from "@/components/GlassButton";
import { track } from "@/lib/analytics";

/** Primary external WA link with analytics (safe for RSC parents). */
export function WaPrimaryLink({
  href,
  place,
  children,
  className,
}: {
  href: string;
  place: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <GlassButton
      href={href}
      external
      variant="primary"
      className={className}
      onClick={() => track("wa_click", { place })}
    >
      {children}
    </GlassButton>
  );
}
