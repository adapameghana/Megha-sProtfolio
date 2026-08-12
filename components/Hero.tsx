import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="shell pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Reveal>
        <p className="label">
          {site.role}
          <span className="mx-2 text-rule-strong">—</span>
          {site.location}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 id="hero-heading" className="mt-8 text-5xl">
          {site.name}
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10 border-t border-rule pt-10 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <p className="measure text-xl text-ink-muted">{site.tagline}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-sm bg-accent px-6 py-3.5 font-mono text-xs tracking-widest text-paper uppercase transition-colors hover:bg-accent-hover"
              >
                View Projects
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href={site.resume.href}
                download={site.resume.filename}
                className="group inline-flex items-center gap-2.5 rounded-sm border border-rule-strong px-6 py-3.5 font-mono text-xs tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowDownToLine
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                Download Resume
              </a>
            </div>
          </div>

          {/* Technology keywords — PRD §8.1 */}
          <div className="mt-12 lg:col-span-5 lg:mt-0">
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {site.keywords.map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-sm border border-rule bg-paper-raised px-3 py-1.5 font-mono text-xs text-ink-muted"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
