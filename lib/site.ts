/**
 * Single source of truth for identity, canonical URL, and SEO defaults.
 */

import type { Portrait } from "@/lib/types";

export const site = {
  name: "Meghana Adapa",
  role: "AI/ML Engineer",
  location: "Hyderabad, India",
  email: "meghasadapa6@gmail.com",

  /**
   * Canonical origin. Drives metadataBase, sitemap, robots, and OG URLs.
   * Set NEXT_PUBLIC_SITE_URL in Vercel once the final domain is decided.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://meghana-portfolio.vercel.app",

  tagline:
    "I build LLM-powered applications — RAG systems, semantic search, and AI automation that takes a product from idea to deployment.",

  description:
    "AI/ML Engineer in Hyderabad building LLM-powered applications, Retrieval-Augmented Generation systems, vector search, and AI automation with Python, FastAPI, LangChain, and ChromaDB.",

  resume: {
    href: "/resume/Meghana_Adapa_Resume.pdf",
    filename: "Meghana_Adapa_Resume.pdf",
  },

  /** Technology keywords surfaced in the hero (PRD §8.1) */
  keywords: [
    "Python",
    "RAG",
    "LangChain",
    "ChromaDB",
    "FastAPI",
    "Vector Search",
    "PostgreSQL",
  ],
} as const;

/**
 * Phone numbers are deliberately not published. A public portfolio page is
 * scraped continuously; email and LinkedIn are enough for a recruiter to
 * reach out. Add them here only if that trade-off is worth it.
 */

/* -------------------------------------------------------------------------- */
/* Portrait                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Profile photo, rendered beside the About prose and published as `image` in
 * the Person structured data.
 *
 * Currently a placeholder silhouette. To swap in the real photo:
 *   1. Save it into `public/images/` (jpg, png, or webp).
 *   2. Point `src` below at the filename you used.
 *   3. Delete `public/images/profile-placeholder.png`.
 *
 * `alt` needs no change — it already names the person, which is what a screen
 * reader should announce once the photo is real.
 *
 * Any dimensions work: the frame is a fixed 4:5 crop and the photo is
 * cover-fitted into it, never stretched. Supply at least 640px on the short
 * edge so it stays sharp on a high-density screen. If the crop cuts the head
 * badly, nudge `focus` — "50% 20%" pulls the frame higher, "50% 50%" centres it.
 *
 * Setting this to `null` removes the photo entirely: About falls back to
 * prose-only and the layout is unchanged.
 */
export const portrait: Portrait | null = {
  src: "/images/profile-placeholder.png",
  alt: site.name,
};
