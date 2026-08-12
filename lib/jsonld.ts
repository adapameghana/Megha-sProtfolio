import { site, portrait } from "@/lib/site";
import { social } from "@/data/social";
import { experience } from "@/data/experience";

/**
 * Person structured data. This is what lets a search engine understand that
 * the page is about a named individual with a role and verified profiles,
 * rather than guessing from the text.
 *
 * Every field is fact-checked against the resume — schema.org markup that
 * overstates is worse than none.
 */
export function personJsonLd() {
  const currentRole = experience.find((role) => role.end === null);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    email: `mailto:${site.email}`,
    url: site.url,
    /* Absolute, not root-relative: a consumer of this markup is not resolving
       against the page it was found on. Omitted entirely when unset — an
       empty `image` is worse than none. */
    ...(portrait && { image: `${site.url}${portrait.src}` }),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: social.filter((link) => link.id !== "email").map((link) => link.href),
    ...(currentRole && {
      worksFor: {
        "@type": "Organization",
        name: currentRole.company,
      },
    }),
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Vector Databases",
      "Semantic Search",
      "Natural Language Processing",
      "Python",
      "FastAPI",
    ],
  };
}

export function caseStudyJsonLd(project: {
  title: string;
  tagline: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${project.title} — Case Study`,
    description: project.tagline,
    url: `${site.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };
}
