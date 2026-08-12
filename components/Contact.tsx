import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { social } from "@/data/social";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
} as const;

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      lead="Open to AI/ML engineering roles — and happy to talk about retrieval systems either way."
    >
      <Reveal>
        <a
          href={`mailto:${site.email}`}
          className="link-rule inline-block font-display text-3xl font-semibold tracking-tight break-all text-accent"
        >
          {site.email}
        </a>
      </Reveal>

      <Reveal delay={0.06}>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-3">
          {social.map((link) => {
            const Icon = icons[link.id];
            const isExternal = link.id !== "email";

            return (
              <li key={link.id} className="bg-paper-raised">
                <a
                  href={link.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-accent-wash/40"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-4 text-accent" aria-hidden="true" />
                    <span>
                      <span className="block font-mono text-xs tracking-widest uppercase">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-xs break-all text-ink-faint">
                        {link.handle}
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight
                    className="size-4 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
