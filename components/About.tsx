import { about } from "@/data/about";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" title="About" lead={about.lead}>
      <div className="measure space-y-6">
        {about.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <p className="text-ink-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
