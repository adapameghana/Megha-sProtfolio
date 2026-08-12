import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { personJsonLd } from "@/lib/jsonld";

/**
 * Single-page composition. Section order matches `lib/nav.ts`, which also
 * drives the nav and the scroll spy.
 */
export default function Home() {
  return (
    <main id="main" className="flex-1">
      <script
        type="application/ld+json"
        // Structured data must be serialised into the document, not rendered
        // as text. The payload is authored in lib/jsonld.ts, never user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
