import type { Certification, EducationItem } from "@/lib/types";

/**
 * TODO(content): add `institution` for each qualification — the resume does
 * not name them, and a degree with no institution reads as incomplete to a
 * recruiter. Everything else here is verbatim from the resume.
 */
export const education: EducationItem[] = [
  {
    qualification: "Master of Computer Applications",
    year: "2025",
    score: "89%",
  },
  {
    qualification: "Bachelor of Science, Computer Science",
    year: "2023",
    score: "75%",
  },
  {
    qualification: "Intermediate — Mathematics",
    year: "2020",
    score: "92%",
  },
  {
    qualification: "SSC",
    year: "2018",
    score: "88%",
  },
];

export const certifications: Certification[] = [
  {
    title: "Generative AI for Data Analysis and Data Science",
    issuer: "LinkedIn",
  },
  {
    title: "Web Development Workshop",
    issuer: "Microsoft Learn",
  },
  {
    title: "Career Skills in Software Development",
    issuer: "LinkedIn Learning",
  },
  {
    title: "SQL and Front-End Development",
    issuer: "Great Learning",
  },
];
