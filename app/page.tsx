import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

/**
 * Single-page composition. Section order matches `lib/nav.ts`, which also
 * drives the nav and the scroll spy.
 */
export default function Home() {
  return (
    <main id="main" className="flex-1">
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
