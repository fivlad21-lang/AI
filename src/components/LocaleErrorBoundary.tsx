"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = { children: ReactNode; homeHref?: string };
type State = { error: Error | null };

/**
 * Catches render errors in the locale shell so the whole tab does not go white.
 */
export class LocaleErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[Nomore] UI error", error, info.componentStack);
    track("ui_error", {
      message: error.message.slice(0, 120),
      digest: String(info.componentStack ?? "").slice(0, 80),
    });
  }

  render() {
    if (!this.state.error) return this.props.children;
    const home = this.props.homeHref ?? "/bg";
    return (
      <div className="mx-auto flex min-h-[50dvh] max-w-lg flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight">
          Something went wrong
        </p>
        <p className="text-sm text-ink-muted">
          Reload the page or go home. If it keeps happening, write us on WhatsApp.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-full bg-sea px-5 py-2.5 text-sm font-semibold text-white"
            onClick={() => this.setState({ error: null })}
          >
            Try again
          </button>
          <a
            href={home}
            className="glass rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          >
            Home
          </a>
        </div>
      </div>
    );
  }
}
