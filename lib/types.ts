/**
 * Content contracts for the portfolio.
 *
 * Everything rendered on the site is typed here and authored in `data/`.
 * Adding a project means adding an object — no component changes.
 */

export type SocialLink = {
  id: "github" | "linkedin" | "email";
  label: string;
  handle: string;
  href: string;
};

/* -------------------------------------------------------------------------- */
/* Portrait                                                                    */
/* -------------------------------------------------------------------------- */

export type Portrait = {
  /** Path under `public/`, always starting with `/` — e.g. "/images/meghana.jpg" */
  src: string;
  /**
   * Describes the person, not the file. A screen reader reads this aloud, so
   * "Meghana Adapa" is right and "profile picture" is not.
   */
  alt: string;
  /**
   * `object-position` for the fixed 4:5 frame. Portraits usually want the crop
   * weighted above centre so a head sits in the upper third rather than being
   * cut off. Only change this if the default crops the photo badly.
   */
  focus?: string;
};

/* -------------------------------------------------------------------------- */
/* Skills                                                                      */
/* -------------------------------------------------------------------------- */

export type SkillCategory = {
  /** Short heading, e.g. "Generative AI & LLMs" */
  title: string;
  /** One line on how these are actually used — avoids a bare keyword dump */
  summary: string;
  items: string[];
};

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  /** Display string, e.g. "Sep 2025 — Present" */
  period: string;
  /** ISO date, sorts the timeline without parsing display strings */
  start: string;
  /** ISO date, or null when current */
  end: string | null;
  summary: string;
  /** Grouped bodies of work; a flat bullet list flattens real scope */
  highlights: {
    title: string;
    description: string;
  }[];
  technologies: string[];
};

/* -------------------------------------------------------------------------- */
/* Education                                                                   */
/* -------------------------------------------------------------------------- */

export type EducationItem = {
  qualification: string;
  institution?: string;
  year: string;
  /** e.g. "89%" — optional per PRD §13 */
  score?: string;
};

export type Certification = {
  title: string;
  issuer: string;
};

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export type ProjectStatus = "shipped" | "in-progress";

/**
 * Where the work was done. Drives the disclosure notice on case studies:
 * professional work gets an explicit "no confidential detail" framing.
 */
export type ProjectContext = "personal" | "professional";

export type ArchitectureStep = {
  label: string;
  detail: string;
};

/**
 * The full case-study shape (PRD §11). Only `caseStudy` is optional —
 * a project can appear as a card without a dedicated page.
 */
export type Project = {
  slug: string;
  title: string;
  /** One line, used on cards and as the meta description */
  tagline: string;
  context: ProjectContext;
  /**
   * Employer, for professional work. Drives the group heading on the projects
   * listing, so work from a second employer groups itself correctly later.
   */
  company?: string;
  status: ProjectStatus;
  /** Display period, e.g. "2025" */
  period?: string;
  role?: string;
  /** Surfaced on the homepage when true */
  featured: boolean;
  /** Badges on the card — keep to the 4-5 that matter most */
  stack: string[];
  links?: {
    github?: string;
    demo?: string;
  };

  caseStudy?: {
    problem: string;
    objective: string;
    solution: string;
    /** Rendered as a numbered flow diagram, not an image asset */
    architecture: {
      caption: string;
      steps: ArchitectureStep[];
    };
    /** Full stack, grouped — broader than the card's `stack` */
    techStack: {
      group: string;
      items: string[];
    }[];
    features: {
      title: string;
      description: string;
    }[];
    implementation: string[];
    challenges: {
      challenge: string;
      solution: string;
    }[];
    /**
     * PRD §11: only genuinely measured outcomes. Qualitative statements are
     * fine; invented percentages are not. Omit entirely when nothing was
     * measured — the section will not render.
     */
    results?: string[];
    futureWork: string[];
  };
};
