"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { sections } from "@/lib/nav";
import { site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  /* Hairline appears only once the page has moved, so the hero sits clean. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy — drives the active nav state (PRD §16). */
  useEffect(() => {
    if (!isHome) return;

    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      /* Band across the upper-middle of the viewport: a section counts as
         active once its body is in the reading position, not its first pixel. */
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  /* Lock the page behind the open mobile panel. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`sticky top-0 z-40 bg-paper/85 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex items-center justify-between"
        style={{ height: "var(--nav-h)" }}
      >
        <Link
          href="/"
          className="font-display text-xl leading-none font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {sections.map((s) => {
              const isActive = isHome && active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={href(s.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`link-rule font-mono text-xs tracking-widest uppercase transition-colors hover:text-accent ${
                      isActive ? "text-accent" : "text-ink-muted"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={site.resume.href}
            download={site.resume.filename}
            className="group inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 font-mono text-xs tracking-widest text-paper uppercase transition-colors hover:bg-accent-hover"
          >
            <ArrowDownToLine
              className="size-3.5 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
            Resume
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex items-center justify-center p-2 lg:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-rule bg-paper lg:hidden"
          style={{ height: "calc(100dvh - var(--nav-h))" }}
        >
          <div className="shell flex h-full flex-col py-8">
            <ul className="flex flex-col">
              {sections.map((s, i) => (
                <li key={s.id} className="border-b border-rule">
                  <a
                    href={href(s.id)}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl font-semibold tracking-tight">
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={site.resume.href}
              download={site.resume.filename}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3.5 font-mono text-xs tracking-widest text-paper uppercase"
            >
              <ArrowDownToLine className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
