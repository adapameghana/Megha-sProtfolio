import { about } from "@/data/about";
import { portrait } from "@/lib/site";
import { Section } from "@/components/Section";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";

/**
 * The photo lives here rather than in the hero: the hero is deliberately
 * typographic, and About is where a reader has just asked who this is. It also
 * uses space the prose cannot — paragraphs are capped at `--measure`, leaving
 * the right of this column empty at desktop widths.
 *
 * With no portrait set the flex wrapper has a single child and the section
 * renders exactly as it did before.
 */
export function About() {
  return (
    <Section id="about" title="About" lead={about.lead}>
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
        {portrait && (
          /* Photo first in the DOM so it reads above the prose on a phone;
             `order-last` moves it to the right of the text from `sm` up. */
          <Reveal className="shrink-0 sm:order-last">
            <Portrait {...portrait} />
          </Reveal>
        )}

        <div className="measure space-y-6">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="text-ink-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
