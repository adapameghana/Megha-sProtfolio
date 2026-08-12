import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/data/projects";
import { site } from "@/lib/site";

/**
 * Only routes that actually resolve are listed. Projects without a case study
 * have no page and are deliberately absent — listing them would advertise
 * URLs that 404.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudyProjects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
