/**
 * Single source of truth for identity, canonical URL, and SEO defaults.
 */

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
