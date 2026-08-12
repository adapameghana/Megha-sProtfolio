/**
 * Professional introduction (PRD §8.2). Written from the resume's career
 * objective and actual project work — no claims beyond what is evidenced.
 */
export const about = {
  lead: "I build AI systems that answer questions using evidence, not guesswork.",

  paragraphs: [
    "I'm an AI/ML Engineer in Hyderabad working on LLM-powered applications — retrieval-augmented generation, semantic search over unstructured text, and automation that removes manual steps from real business workflows. Most of my work sits at the point where a model has to stop being a demo and start being a service someone depends on.",

    "At Dhanush Info Tech Solutions I've built AI-driven HR automation end to end — an onboarding workflow now in production, a facial recognition attendance module, and a resume screening system that shortlists candidates on job-fit rather than keyword overlap. I also contribute across Saubhagya, a large multi-module platform spanning collection, manufacturing, B2B sales, and admin operations.",

    "Outside of work I build retrieval systems for their own sake. VidMatch came out of a simple frustration: video search indexes titles, not what anyone actually said. Fixing that meant working through chunking strategy, query expansion, and ranking — the unglamorous parts of RAG that decide whether the output is trustworthy.",

    "My background is Python, FastAPI, and the retrieval stack — LangChain, ChromaDB, sentence transformers, and Groq-hosted LLaMA models — with classical machine learning and data engineering underneath it.",
  ],
} as const;
