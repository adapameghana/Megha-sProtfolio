import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { caseStudyProjects, getProject } from "@/data/projects";
import { site } from "@/lib/site";

/* Prerender one image per case study instead of rendering on demand. */
export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* `alt` must be a static export on an image route, so it stays generic — the
   image itself carries the project title. */
export const alt = `Project case study by ${site.name}`;

const PAPER = "#FAF8F3";
const INK = "#1A1814";
const INK_MUTED = "#575147";
const ACCENT = "#0B5D51";
const RULE = "#E3DDD0";

export default async function CaseStudyOgImage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: PAPER,
          color: INK,
        }}
      >
        <div style={{ width: 16, height: "100%", backgroundColor: ACCENT }} />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 24,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              Case Study
            </div>

            <div style={{ fontSize: 88, marginTop: 24, letterSpacing: -2 }}>{project.title}</div>

            <div style={{ width: 120, height: 3, backgroundColor: ACCENT, marginTop: 32 }} />

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.45,
                color: INK_MUTED,
                marginTop: 32,
                maxWidth: 900,
              }}
            >
              {project.tagline}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {project.stack.slice(0, 4).map((tech) => (
                <div
                  key={tech}
                  style={{
                    display: "flex",
                    fontSize: 22,
                    color: INK_MUTED,
                    border: `1px solid ${RULE}`,
                    borderRadius: 4,
                    padding: "8px 16px",
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div style={{ fontSize: 24, color: INK }}>{site.name}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
