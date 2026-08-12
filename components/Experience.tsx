import { experience } from "@/data/experience";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      lead="Building AI products inside a working engineering team."
    >
      <ol className="relative">
        {experience.map((role, i) => (
          <Reveal
            key={`${role.company}-${role.role}`}
            delay={i * 0.05}
            as="li"
            className="relative border-l border-rule pb-14 pl-6 last:pb-0 sm:pl-10"
          >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[4.5px] size-2 rounded-full bg-accent"
              />

              <p className="label">{role.period}</p>

              <h3 className="mt-3 text-xl">{role.role}</h3>
              <p className="mt-1 font-mono text-xs text-ink-muted">
                {role.company}
                <span className="mx-2 text-rule-strong">·</span>
                {role.location}
              </p>

              <p className="measure mt-5 text-ink-muted">{role.summary}</p>

              {role.highlights.length > 0 && (
                <ul className="mt-7 space-y-5">
                  {role.highlights.map((highlight) => (
                    <li key={highlight.title} className="border-l-2 border-accent-wash pl-5">
                      <h4 className="font-sans text-base font-medium tracking-normal">
                        {highlight.title}
                      </h4>
                      <p className="measure mt-1.5 text-xs text-ink-muted">
                        {highlight.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-7 flex flex-wrap gap-x-1.5 gap-y-1.5">
                {role.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="chip"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
