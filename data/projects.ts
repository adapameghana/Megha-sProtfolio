import type { Project } from "@/lib/types";

/**
 * PRD §10 asks for 4-5 strong projects. The resume currently supports one
 * personal project (VidMatch) plus professional work at Dhanush Info Tech.
 *
 * The two professional entries appear as cards only — no case study — until
 * it is confirmed what may be published (PRD §11, §24). Their `caseStudy`
 * field is intentionally absent, and the UI degrades to a card without it.
 */
export const projects: Project[] = [
  {
    slug: "vidmatch",
    title: "VidMatch",
    tagline:
      "A RAG chatbot that recommends YouTube videos by semantically searching what is actually said in them, not their titles.",
    context: "personal",
    status: "shipped",
    period: "2025",
    role: "Sole developer",
    featured: true,
    stack: ["FastAPI", "ChromaDB", "RAG", "Groq LLaMA 3.1", "SentenceTransformers"],
    links: {
      // TODO(content): add the repository URL.
      github: undefined,
      demo: undefined,
    },
    caseStudy: {
      problem:
        "Searching for a video means searching its title, description, and tags — metadata written to attract clicks rather than to describe content. A precise question like “how do vector databases handle metadata filtering” returns videos that merely mention the words, while a twelve-minute tutorial that answers it directly at minute seven never surfaces, because the answer lives in speech that nothing indexes.",
      objective:
        "Make the spoken content of a video searchable, and recommend videos on what they actually explain — then say why each one was recommended, so the answer can be trusted without watching all of them.",
      solution:
        "A full-stack Retrieval-Augmented Generation application over video transcripts. Transcripts are chunked and embedded with all-MiniLM-L6-v2 and stored in ChromaDB. An incoming query is expanded before retrieval, matched semantically against transcript chunks, re-scored with a hybrid ranking pass, and the surviving candidates are passed to Groq-hosted LLaMA 3.1, which writes a short grounded explanation of why each video answers the question.",
      architecture: {
        caption:
          "Ingestion runs offline; the query path runs per request. The LLM is only reached after retrieval and ranking, so it explains evidence rather than recalling it.",
        // TODO(content): the resume describes an 11-step pipeline. The named
        // stages are captured here — confirm the full ordering and add any
        // stage that is missing before this ships.
        steps: [
          {
            label: "Transcript ingestion",
            detail: "Spoken transcripts are pulled per video and normalised into plain text.",
          },
          {
            label: "Chunking",
            detail:
              "Transcripts are split into overlapping passages so a retrieved chunk carries enough context to stand on its own.",
          },
          {
            label: "Embedding",
            detail:
              "Each chunk is encoded with the all-MiniLM-L6-v2 sentence transformer into a dense vector.",
          },
          {
            label: "Vector store",
            detail:
              "Vectors and their source metadata are persisted in ChromaDB for similarity search.",
          },
          {
            label: "Query expansion",
            detail:
              "The user's question is broadened before retrieval so that vocabulary mismatch between question and speech does not lose good candidates.",
          },
          {
            label: "Semantic retrieval",
            detail:
              "The expanded query is embedded and matched against the store to pull the closest transcript chunks.",
          },
          {
            label: "Hybrid ranking",
            detail:
              "Retrieved chunks are re-scored and aggregated up to the video level, so a video supported by several strong passages outranks one with a single lucky match.",
          },
          {
            label: "Grounded explanation",
            detail:
              "Groq-hosted LLaMA 3.1 receives the ranked evidence and writes a short reason for each recommendation, constrained to the retrieved text.",
          },
          {
            label: "API response",
            detail: "FastAPI returns the ranked videos with their explanations to the client.",
          },
        ],
      },
      techStack: [
        { group: "Retrieval", items: ["ChromaDB", "SentenceTransformers (all-MiniLM-L6-v2)", "Semantic search", "Hybrid ranking"] },
        { group: "Generation", items: ["Groq API", "LLaMA 3.1", "Prompt engineering"] },
        { group: "Application", items: ["Python", "FastAPI", "REST APIs"] },
      ],
      features: [
        {
          title: "Search by what is said",
          description:
            "Recommendations are driven by transcript content, so a video is found for the answer it gives rather than the title it was given.",
        },
        {
          title: "Query expansion",
          description:
            "A short question is broadened before retrieval, recovering relevant videos that use different vocabulary than the user did.",
        },
        {
          title: "Hybrid ranking",
          description:
            "Chunk-level matches are aggregated to video level so consistently relevant videos beat ones with a single strong passage.",
        },
        {
          title: "Explained recommendations",
          description:
            "Each result carries a generated reason grounded in the retrieved transcript, so the ranking is inspectable instead of opaque.",
        },
      ],
      implementation: [
        "Ingestion and query serving are separated: embedding a transcript corpus is slow and happens offline, while the request path only embeds the query and reads from the store.",
        "Chunks overlap so that a sentence split across a boundary is not lost to retrieval.",
        "all-MiniLM-L6-v2 was chosen for its size-to-quality ratio — it embeds a full transcript corpus quickly on modest hardware while staying strong enough for semantic matching.",
        "Groq was used for inference because recommendation feels broken at conversational latency; fast token throughput keeps the explanation step from dominating response time.",
        "The generation step is constrained to the retrieved chunks, so the model explains evidence rather than inventing plausible reasons.",
      ],
      challenges: [
        {
          challenge:
            "Short queries and spoken transcripts use different vocabulary, so literal semantic matching missed relevant videos.",
          solution:
            "Added a query expansion stage ahead of retrieval, widening the query before it is embedded rather than loosening the similarity threshold — which would have pulled in noise.",
        },
        {
          challenge:
            "Ranking on the single best-matching chunk favoured videos that touched a topic once over videos that covered it thoroughly.",
          solution:
            "Introduced a hybrid ranking pass that aggregates chunk scores per video, so sustained relevance outranks one lucky passage.",
        },
        {
          challenge:
            "Transcript chunks split mid-explanation lost the context needed to be useful on their own.",
          solution:
            "Moved to overlapping chunks so each passage retains the lead-in that makes it interpretable in isolation.",
        },
      ],
      // No `results` field: nothing was formally benchmarked, and PRD §11 is
      // explicit that metrics must not be invented. Add measured numbers here
      // if retrieval quality is ever evaluated.
      futureWork: [
        "Evaluate retrieval quality against a labelled query set to replace qualitative judgement with a measured baseline.",
        "Add a re-ranking cross-encoder over the top candidates and measure whether it justifies its latency cost.",
        "Cache expanded queries and their embeddings to cut repeat-query latency.",
        "Expose timestamp deep links so a result opens at the passage that matched.",
      ],
    },
  },

  {
    slug: "smart-hr-ats",
    title: "Smart HR — AI Resume Shortlisting",
    tagline:
      "An AI-powered resume screening module that shortlists candidates on job-fit matching, inside a wider HR platform covering onboarding and attendance.",
    context: "professional",
    company: "Dhanush Info Tech Solutions",
    status: "in-progress",
    period: "2025 — Present",
    role: "AI/ML Engineer",
    featured: true,
    stack: ["Python", "FastAPI", "NLP", "Semantic Matching", "PostgreSQL"],
  },

  {
    slug: "saubhagya",
    title: "Saubhagya — Enterprise Digital Platform",
    tagline:
      "A large-scale multi-module platform spanning collection, manufacturing, B2B sales, and admin operations, built with the BMAD methodology and AI/LLM integration.",
    context: "professional",
    company: "Dhanush Info Tech Solutions",
    status: "in-progress",
    period: "2025 — Present",
    role: "AI/ML Engineer",
    featured: true,
    stack: ["Python", "FastAPI", "PostgreSQL", "LLM Integration", "BMAD Method"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const caseStudyProjects = projects.filter((p) => p.caseStudy);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
