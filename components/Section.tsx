import type { ReactNode } from "react";
import { sectionNumber, type SectionId } from "@/lib/nav";
import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id: SectionId;
  title: string;
  /** Optional standfirst under the heading */
  lead?: string;
  children: ReactNode;
};

/**
 * Editorial section frame: a hairline rule, a numbered mono marker in the
 * left rail, and the heading set in the display serif.
 *
 * The rail collapses above the heading below `lg` rather than being dropped,
 * so the numbering survives on mobile.
 */
export function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <div className="shell border-t border-rule py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="label">
                <span className="text-accent">{sectionNumber(id)}</span>
                <span className="mx-2 text-rule-strong">/</span>
                {title}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            {lead ? (
              <Reveal>
                <h2
                  id={`${id}-heading`}
                  className="measure mt-6 text-2xl lg:mt-0 lg:text-3xl"
                >
                  {lead}
                </h2>
              </Reveal>
            ) : (
              <h2 id={`${id}-heading`} className="sr-only">
                {title}
              </h2>
            )}

            <div className={lead ? "mt-12" : "mt-6 lg:mt-0"}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
