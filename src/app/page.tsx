"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}`);
  }, []);

  return (
    <div className="hero-grid grid min-h-dvh place-items-center px-6 text-center">
      <p className="font-display text-2xl">Nomore estate</p>
    </div>
  );
}
