# Content Checklist

Everything the site renders lives in `data/` and `lib/site.ts`. This file tracks
what is still missing or worth revisiting, with the exact location to edit.

Nothing here blocks a deploy — the site builds and renders correctly as is.

---

## Open gaps

### 1. Institution names — `data/education.ts`

All four qualifications render without an institution, because the resume does
not name them. A degree with no institution reads as incomplete to a recruiter.

Add `institution` to each entry:

```ts
{
  qualification: "Master of Computer Applications",
  institution: "…",   // <- add
  year: "2025",
  score: "89%",
}
```

### 2. Internship highlights — `data/experience.ts`

The AI/ML Intern entry (Jul – Sep 2025) has an empty `highlights` array, so it
renders as a bare role with no substance. The resume lists nothing for it.

Add 2–3 concrete items — what was built, what technique, what outcome:

```ts
highlights: [
  { title: "…", description: "…" },
],
```

### 3. VidMatch repository URL — `data/projects.ts`

`links.github` is `undefined`, so the case study shows no "View code" button and
the card shows no "Code" action. This is the single highest-value gap: a
recruiter who reads the case study currently has no way to see the code.

```ts
links: {
  github: "https://github.com/adapameghana/…",
  demo: undefined,   // add if it is ever hosted
},
```

### 4. Confirm the VidMatch pipeline — `data/projects.ts`

The resume describes an **11-step pipeline**. Nine stages are represented in
`caseStudy.architecture.steps`, reconstructed from the ones the resume names.
Confirm the real ordering and add whatever is missing — a technical interviewer
may well ask you to walk through it.

Currently: ingestion → chunking → embedding → vector store → query expansion →
semantic retrieval → hybrid ranking → grounded explanation → API response.

### 5. Production URL — Vercel environment variable

`lib/site.ts` falls back to `https://meghana-portfolio.vercel.app`. Set
`NEXT_PUBLIC_SITE_URL` in the Vercel project to the real domain, or the sitemap,
canonical URLs, and Open Graph image URLs will all point at the wrong host.

---

## Decisions worth revisiting

### Phone numbers are not published

Both numbers from the resume are deliberately omitted. A public page is scraped
continuously, and email plus LinkedIn is enough for a recruiter. Add them to
`lib/site.ts` if that trade-off is worth it to you.

### Skills follow the resume, not the PRD

PRD §9 lists Whisper, Llama.cpp, WebSockets, Docker, and Uvicorn. None appear on
the resume, so none are claimed on the site — PRD §11 is explicit about not
inventing. Add them to `data/skills.ts` if the experience is real.

### No performance metrics are claimed

`caseStudy.results` is absent from VidMatch, so the Results section does not
render. Add measured numbers there if retrieval quality is ever benchmarked —
but only measured ones.

### Project count

PRD §29 asks for at least four strong projects; there are currently three, one
with a case study. Two honest ways to close the gap:

- **This portfolio** — a real shipped Next.js application with genuine
  engineering decisions worth writing up.
- **A classical ML project** — the resume claims Scikit-learn, regression,
  classification, and clustering, but no project demonstrates them. That gap is
  visible to a technical interviewer.

---

## How to add a project

Add one object to the `projects` array in `data/projects.ts`. The card, the
group placement, the listing, and the case-study page are all generated from it.

- `context: "personal" | "professional"` decides which group it appears under.
- `company` on professional work drives the group heading.
- Omit `caseStudy` entirely and the project renders as a card with no dead link.
- `featured: true` surfaces it on the homepage; everything appears on `/projects`.
