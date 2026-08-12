import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectGroups } from "@/components/ProjectGroups";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI and machine learning projects by Meghana Adapa — retrieval-augmented generation, semantic search, and AI automation built with Python, FastAPI, LangChain, and ChromaDB.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="main" className="flex-1">
      <div className="shell py-16 sm:py-24">
        <p className="label">Projects</p>
        <h1 className="measure mt-6 text-3xl">
          Retrieval systems, AI automation, and the platform work around them.
        </h1>

        <div className="mt-16">
          <ProjectGroups projects={projects} headingLevel={2} />
        </div>
      </div>
    </main>
  );
}
