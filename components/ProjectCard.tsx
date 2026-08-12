import Link from "next/link";
import { ArrowUpRight, Building2, MoveRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import type { Project } from "@/lib/types";

/**
 * A project card degrades cleanly: a project with no case study and no public
 * links shows an explanatory note rather than dead actions (PRD §17 — the
 * available actions must be obvious).
 */
type ProjectCardProps = {
  project: Project;
  /** Nests correctly under whatever heading introduces the group. */
  headingLevel?: 3 | 4;
};

export function ProjectCard({ project, headingLevel = 3 }: ProjectCardProps) {
  const { caseStudy, links } = project;
  const hasActions = Boolean(caseStudy || links?.github || links?.demo);
  const Heading = `h${headingLevel}` as "h3" | "h4";

  return (
    <article className="group flex h-full flex-col bg-paper-raised p-6 transition-colors hover:bg-accent-wash/40 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          {project.context === "professional" ? "Professional" : "Personal"}
        </span>
        {project.status === "in-progress" && (
          <span className="rounded-sm bg-paper-sunken px-2 py-0.5 font-mono text-xs text-ink-faint">
            In progress
          </span>
        )}
      </div>

      <Heading className="mt-4 text-xl">
        {caseStudy ? (
          <Link href={`/projects/${project.slug}`} className="link-rule">
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </Heading>

      <p className="mt-3 flex-1 text-ink-muted">{project.tagline}</p>

      <ul className="mt-6 flex flex-wrap gap-x-1.5 gap-y-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-sm border border-rule px-2.5 py-1 font-mono text-xs text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-7 border-t border-rule pt-5">
        {hasActions ? (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {caseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent uppercase"
              >
                Read case study
                <MoveRight
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            )}

            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-ink-muted uppercase transition-colors hover:text-accent"
              >
                <GithubIcon className="size-3.5" />
                Code
                <span className="sr-only"> for {project.title} on GitHub</span>
              </a>
            )}

            {links?.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-ink-muted uppercase transition-colors hover:text-accent"
              >
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                Live demo
                <span className="sr-only"> of {project.title}</span>
              </a>
            )}
          </div>
        ) : (
          <p className="inline-flex items-center gap-2 font-mono text-xs text-ink-faint">
            <Building2 className="size-3.5" aria-hidden="true" />
            Client work — source and internals not public
          </p>
        )}
      </div>
    </article>
  );
}
