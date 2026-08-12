import type { ExperienceItem } from "@/lib/types";

/**
 * Descriptions stay at the level the resume states them: what was built and
 * what it does. No internal architecture, client names, or data details —
 * this is employer work (PRD §24).
 *
 * TODO(content): confirm the start month of the engineer role. The resume
 * says only "Current", so the display period is kept to the year.
 */
export const experience: ExperienceItem[] = [
  {
    company: "Dhanush Info Tech Solutions",
    role: "AI/ML Engineer",
    location: "Hyderabad, India",
    period: "2025 — Present",
    start: "2025-10-01",
    end: null,
    summary:
      "Building AI-driven internal products — automating HR workflows end to end and contributing across a large multi-module digital platform.",
    highlights: [
      {
        title: "Smart HR — Automated Employee Onboarding",
        description:
          "Built and deployed an end-to-end AI-driven onboarding workflow, streamlining the onboarding process and cutting manual effort for the HR team.",
      },
      {
        title: "Face Recognition Check-in / Check-out",
        description:
          "Developed a facial recognition module for automated attendance tracking, enabling secure, contactless check-in and check-out.",
      },
      {
        title: "Applicant Tracking System — Resume Shortlisting",
        description:
          "Built an AI-powered resume screening module that automates candidate shortlisting on job-fit matching, reducing manual recruiter effort in the hiring pipeline.",
      },
      {
        title: "Saubhagya — Enterprise Digital Platform",
        description:
          "Contributed across the Gaushala (cattle and batch tracking), Manufacturing, Sales (B2B e-commerce), and Admin modules — covering data validation, production tracking, and role-based access management. Built using the BMAD methodology with AI/LLM integration.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Groq API",
      "PostgreSQL",
      "REST APIs",
      "BMAD Method",
    ],
  },
  {
    company: "Dhanush Info Tech Solutions",
    role: "AI/ML Intern",
    location: "Hyderabad, India",
    period: "Jul — Sep 2025",
    start: "2025-07-01",
    end: "2025-09-30",
    summary:
      "Three-month internship applying machine learning and generative AI techniques to internal product work, leading to a full-time engineering role.",
    // TODO(content): add 2-3 concrete highlights from the internship. The
    // resume lists none, and an entry with no detail is a weak spot a
    // technical interviewer will notice.
    highlights: [],
    technologies: ["Python", "Machine Learning", "FastAPI"],
  },
];
