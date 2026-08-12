import { skills } from "@/data/skills";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      lead="The retrieval stack, and the engineering underneath it."
    >
      <div className="grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
        {skills.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.04} className="bg-paper-raised">
            <div className="flex h-full flex-col p-6 sm:p-8">
              <h3 className="text-lg">{category.title}</h3>
              <p className="mt-2 text-xs text-ink-faint">{category.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-x-1.5 gap-y-1.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm bg-paper-sunken px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
