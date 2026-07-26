"use client";

import { Suspense } from "react";
import { Analytics } from "@/components/Analytics";

/** Suspense boundary for useSearchParams inside Analytics. */
export function AnalyticsGate() {
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
}
