import type { Project } from "@/lib/types";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

type Group = {
  key: string;
  label: string;
  items: Project[];
};

/**
 * Professional work is headed by its employer when there is exactly one.
 * Add work from a second company and this falls back to a neutral heading
 * automatically — no component change needed.
 */
function professionalLabel(items: Project[]): string {
  const companies = [...new Set(items.map((p) => p.company).filter(Boolean))];
  return companies.length === 1 ? `At ${companies[0]}` : "Professional Work";
}

/** Case studies lead their group — they are the ones worth clicking. */
function byDepth(a: Project, b: Project): number {
  return Number(Boolean(b.caseStudy)) - Number(Boolean(a.caseStudy));
}

function buildGroups(projects: Project[]): Group[] {
  const personal = projects.filter((p) => p.context === "personal").sort(byDepth);
  const professional = projects.filter((p) => p.context === "professional").sort(byDepth);

  const groups: Group[] = [];

  if (personal.length > 0) {
    groups.push({
      key: "personal",
      label: "Personal Projects",
      items: personal,
    });
  }

  if (professional.length > 0) {
    groups.push({
      key: "professional",
      label: professionalLabel(professional),
      items: professional,
    });
  }

  return groups;
}

type ProjectGroupsProps = {
  projects: Project[];
  /**
   * Level for the group headings. The homepage sits under a section h2 so
   * groups are h3 there; the /projects page sits under its own h1, so groups
   * are h2. Cards always nest one level below.
   */
  headingLevel?: 2 | 3;
};

export function ProjectGroups({ projects, headingLevel = 3 }: ProjectGroupsProps) {
  const groups = buildGroups(projects);
  const GroupHeading = `h${headingLevel}` as "h2" | "h3";
  const cardHeadingLevel = (headingLevel + 1) as 3 | 4;

  return (
    <div className="space-y-16">
      {groups.map((group) => (
        <section key={group.key} aria-labelledby={`group-${group.key}`}>
          <div className="border-b border-rule-strong pb-4">
            <GroupHeading
              id={`group-${group.key}`}
              className="font-mono text-xs tracking-widest text-ink uppercase"
            >
              {group.label}
            </GroupHeading>
          </div>

          <div
            className={`mt-px grid gap-px overflow-hidden border-x border-b border-rule bg-rule ${
              group.items.length > 1 ? "lg:grid-cols-2" : ""
            }`}
          >
            {group.items.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <ProjectCard project={project} headingLevel={cardHeadingLevel} />
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
