import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MoveRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  /* A 404 must never be indexed — it would compete with the real pages. */
  robots: { index: false, follow: true },
};

/**
 * Reached by a mistyped URL, or by a project that has no case study
 * (professional work is intentionally card-only).
 */
export default function NotFound() {
  return (
    <main id="main" className="shell flex flex-1 flex-col justify-center py-24 sm:py-32">
      <p className="label">Error 404</p>

      <h1 className="mt-6 text-4xl">This page doesn&apos;t exist.</h1>

      <p className="measure mt-6 text-lg text-ink-muted">
        The link may be out of date, or the URL mistyped. Some projects are listed as cards
        without a dedicated case study, so they have no page of their own.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 font-mono text-xs tracking-widest text-paper uppercase transition-colors hover:bg-accent-hover"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          Back home
        </Link>

        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent uppercase"
        >
          Browse projects
          <MoveRight
            className="size-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </main>
  );
}
