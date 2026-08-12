import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Building2, MoveRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { caseStudyProjects, getProject } from "@/data/projects";
import { caseStudyJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — Case Study`,
      description: project.tagline,
      url: `/projects/${project.slug}`,
    },
  };
}

/* -------------------------------------------------------------------------- */

function Block({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-rule py-12 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <h2 className="label lg:col-span-3">{title}</h2>
      <div className="mt-5 lg:col-span-9 lg:mt-0">{children}</div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  /* Unknown slug, or a project that deliberately has no case study — both are
     a 404 rather than an empty page. */
  if (!project?.caseStudy) notFound();

  const { caseStudy, links } = project;

  return (
    <main id="main" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(project)) }}
      />
      <article className="shell py-12 sm:py-16">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-ink-muted uppercase transition-colors hover:text-accent"
        >
          <ArrowLeft
            className="size-3.5 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-10 border-b border-rule pb-12">
          <p className="label">
            {project.context === "professional" ? "Professional" : "Personal Project"}
            {project.period && (
              <>
                <span className="mx-2 text-rule-strong">—</span>
                {project.period}
              </>
            )}
          </p>

          <h1 className="mt-6 text-4xl">{project.title}</h1>
          <p className="measure mt-6 text-xl text-ink-muted">{project.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-sm border border-ink-faint px-4 py-2.5 font-mono text-xs tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="size-3.5" />
                View code
              </a>
            )}
            {links?.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-sm border border-ink-faint px-4 py-2.5 font-mono text-xs tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                Live demo
              </a>
            )}
            {project.role && (
              <p className="font-mono text-xs text-ink-faint">Role — {project.role}</p>
            )}
          </div>

          {project.context === "professional" && (
            <p className="mt-8 flex gap-3 rounded-sm bg-paper-sunken p-4 font-mono text-xs text-ink-muted">
              <Building2 className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              <span>
                Work carried out for {project.company ?? "an employer"}. This page describes the
                problem and the engineering approach only — no internal architecture, source, or
                client data.
              </span>
            </p>
          )}
        </header>

        {/* Problem */}
        <Block title="Problem">
          <p className="measure text-lg text-ink-muted">{caseStudy.problem}</p>
        </Block>

        {/* Objective */}
        <Block title="Objective">
          <p className="measure text-ink-muted">{caseStudy.objective}</p>
        </Block>

        {/* Solution */}
        <Block title="Solution">
          <p className="measure text-ink-muted">{caseStudy.solution}</p>
        </Block>

        {/* Architecture — real text, not an image: it stays legible at any
            width, needs no alt text, and survives a theme change. */}
        <Block title="Architecture">
          <p className="measure text-xs text-ink-faint">{caseStudy.architecture.caption}</p>

          <ol className="mt-8">
            {caseStudy.architecture.steps.map((step, i) => (
              <li
                key={step.label}
                className="relative border-l border-rule pb-8 pl-6 last:border-transparent last:pb-0 sm:pl-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-1 -left-px flex size-6 -translate-x-1/2 items-center justify-center rounded-full bg-accent font-mono text-xs text-paper"
                >
                  {i + 1}
                </span>
                <h3 className="font-sans text-base font-medium tracking-normal">{step.label}</h3>
                <p className="measure mt-1.5 text-xs text-ink-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Block>

        {/* Tech stack */}
        <Block title="Technology">
          <dl className="space-y-6">
            {caseStudy.techStack.map((group) => (
              <div key={group.group} className="sm:flex sm:gap-8">
                <dt className="font-mono text-xs tracking-widest text-ink-faint uppercase sm:w-32 sm:shrink-0 sm:pt-1">
                  {group.group}
                </dt>
                <dd className="mt-2 sm:mt-0">
                  <ul className="flex flex-wrap gap-x-1.5 gap-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="chip"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Block>

        {/* Features */}
        <Block title="Key Features">
          <ul className="grid gap-6 sm:grid-cols-2">
            {caseStudy.features.map((feature) => (
              <li key={feature.title}>
                <h3 className="font-sans text-base font-medium tracking-normal">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs text-ink-muted">{feature.description}</p>
              </li>
            ))}
          </ul>
        </Block>

        {/* Implementation */}
        <Block title="Implementation">
          <ul className="measure space-y-4">
            {caseStudy.implementation.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-ink-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Block>

        {/* Challenges */}
        <Block title="Challenges">
          <ul className="space-y-8">
            {caseStudy.challenges.map((item) => (
              <li key={item.challenge}>
                <p className="measure text-ink">{item.challenge}</p>
                <p className="measure mt-3 border-l-2 border-accent pl-5 text-xs text-ink-muted">
                  <span className="font-mono tracking-widest text-accent uppercase">
                    Solution —{" "}
                  </span>
                  {item.solution}
                </p>
              </li>
            ))}
          </ul>
        </Block>

        {/* Results — omitted entirely when nothing was measured (PRD §11) */}
        {caseStudy.results && caseStudy.results.length > 0 && (
          <Block title="Results">
            <ul className="measure space-y-3">
              {caseStudy.results.map((result, i) => (
                <li key={i} className="text-ink-muted">
                  {result}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {/* Future work */}
        <Block title="Future Work">
          <ul className="measure space-y-3">
            {caseStudy.futureWork.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-rule-strong" aria-hidden="true" />
                <span className="text-ink-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Block>

        <div className="border-t border-rule pt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent uppercase"
          >
            See all projects
            <MoveRight
              className="size-3.5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </article>
    </main>
  );
}
