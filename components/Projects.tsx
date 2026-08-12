import Link from "next/link";
import { MoveRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectGroups } from "@/components/ProjectGroups";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      lead="Retrieval systems, AI automation, and the platform work around them."
    >
      <ProjectGroups projects={featuredProjects} />

      {/* Always rendered: /projects is the canonical listing and the
          destination the case-study pages link back to. */}
      <Reveal>
        <Link
          href="/projects"
          className="group mt-12 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent uppercase"
        >
          All projects
          <MoveRight
            className="size-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </Reveal>
    </Section>
  );
}
