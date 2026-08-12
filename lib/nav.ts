/**
 * Homepage sections, in document order.
 *
 * This one array drives the desktop nav, the mobile menu, the scroll-spy
 * observer, and the section numbering — so nav and page can never drift.
 * Education is included here: PRD §6 lists it in the information
 * architecture, and §16's nav list omitting it was an inconsistency.
 */
export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

/** Zero-padded index used as the editorial section marker, e.g. "03". */
export function sectionNumber(id: SectionId): string {
  const i = sections.findIndex((s) => s.id === id);
  return String(i + 1).padStart(2, "0");
}
