# Meghana Adapa — AI/ML Engineer Portfolio

Personal portfolio website showcasing AI/ML engineering work: Machine Learning, Generative AI,
LLM applications, RAG systems, NLP, and backend development.

Built as a production-grade web application rather than a static personal page — content is
separated from presentation so new projects and experience can be added without touching
component code.

## Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Framework      | Next.js 16 (App Router) |
| Language       | TypeScript              |
| Styling        | Tailwind CSS v4         |
| Icons          | Lucide React            |
| Animation      | Framer Motion (subtle)  |
| Deployment     | Vercel                  |
| Source Control | Git + GitHub            |

No backend or database — all content is served from typed data files and rendered statically.

## Features

- Single-page homepage: Hero, About, Skills, Projects, Experience, Education, Contact
- Dedicated case-study pages for major projects at `/projects/[slug]`
- Downloadable resume PDF
- Responsive from 320px to 1920px, no horizontal scroll
- Semantic HTML, keyboard navigable, visible focus states, `prefers-reduced-motion` respected
- SEO metadata, Open Graph cards, sitemap, robots.txt, and Person JSON-LD
- Design tokens as CSS variables, so a dark theme is a config change rather than a restyle

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, global metadata
│   ├── page.tsx                # Single-page homepage (all sections)
│   ├── globals.css             # Design tokens + base styles
│   └── projects/
│       ├── page.tsx            # Full project index
│       └── [slug]/page.tsx     # Dynamic case-study pages
├── components/                 # Reusable UI components
├── data/                       # All portfolio content lives here
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   └── social.ts
├── lib/                        # Types and shared helpers
├── public/
│   ├── images/
│   ├── projects/               # Project screenshots, architecture diagrams
│   └── resume/                 # Meghana_Adapa_Resume.pdf
└── docs/                       # Project requirement document
```

To add a new project, add an entry to `data/projects.ts` — the card, the index listing, and the
case-study page are all generated from it.

## Local Setup

Requires Node.js 20+.

```bash
git clone https://github.com/<username>/meghana-portfolio.git
cd meghana-portfolio
npm install
npm run dev
```

The site runs at http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch.

1. Push the repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel detects Next.js and needs no build configuration.
4. Every push to `main` triggers a production deployment; pull requests get preview URLs.

## Content & Security Notes

- No API keys, credentials, or private environment variables are committed. `.env*` is gitignored.
- Project case studies contain only information cleared for public sharing.
- Performance metrics are reported only where genuinely measured.
