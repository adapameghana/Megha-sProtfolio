import { Award } from "lucide-react";
import { certifications, education } from "@/data/education";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <Section id="education" title="Education" lead="Academic background and certifications.">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
        <div>
          <ul className="divide-y divide-rule border-y border-rule">
            {education.map((item, i) => (
              <Reveal key={item.qualification} delay={i * 0.04}>
                <li className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <h3 className="font-sans text-base font-medium tracking-normal">
                      {item.qualification}
                    </h3>
                    {item.institution && (
                      <p className="mt-1 text-xs text-ink-muted">{item.institution}</p>
                    )}
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="font-mono text-xs text-ink-muted">{item.year}</p>
                    {item.score && (
                      <p className="mt-1 font-mono text-xs text-accent">{item.score}</p>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-12 lg:mt-0">
          <p className="label">Certifications</p>
          <ul className="mt-5 space-y-4">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.04}>
                <li className="flex gap-3">
                  <Award className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-sans text-base font-medium tracking-normal">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-ink-faint">{cert.issuer}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
