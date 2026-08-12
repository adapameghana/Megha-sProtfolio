import type { SkillCategory } from "@/lib/types";

/**
 * Sourced from the resume. Deliberately no proficiency bars or percentages
 * (PRD §17) — the summary line does the work a bar pretends to do.
 */
export const skills: SkillCategory[] = [
  {
    title: "Generative AI & LLMs",
    summary:
      "Building retrieval pipelines end to end — chunking, embedding, storage, ranking, and grounded generation.",
    items: [
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings",
      "Vector Stores",
      "Semantic Search",
      "Similarity Search",
      "Prompt Engineering",
      "LangChain",
      "ChromaDB",
    ],
  },
  {
    title: "AI Frameworks & APIs",
    summary:
      "Serving models behind clean HTTP interfaces that a product team can actually consume.",
    items: [
      "FastAPI",
      "REST APIs",
      "Groq API",
      "SentenceTransformers",
      "Hugging Face Transformers",
    ],
  },
  {
    title: "Machine Learning",
    summary:
      "Classical modelling from exploratory analysis through training and evaluation.",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "Scikit-learn",
      "Exploratory Data Analysis",
      "Feature Engineering",
    ],
  },
  {
    title: "Programming & Data",
    summary: "The day-to-day toolkit for moving and reshaping data.",
    items: ["Python", "Pandas", "NumPy", "SQL", "PostgreSQL", "Git"],
  },
  {
    title: "Data Engineering",
    summary:
      "Getting raw, messy input into a shape a model or a product can trust.",
    items: [
      "Data Preprocessing",
      "Data Cleaning",
      "Data Pipelines",
      "Data Validation",
      "Feature Engineering",
    ],
  },
  {
    title: "Methodology & Tooling",
    summary:
      "AI-assisted development practice — specification first, then build with the model in the loop.",
    items: [
      "BMAD Method",
      "AI-Assisted Development",
      "Claude Code",
      "Kiro",
      "Trae",
      "Antigravity",
      "Fork",
    ],
  },
];
