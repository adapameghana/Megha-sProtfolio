import { site } from "@/lib/site";
import { social } from "@/data/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-faint">
          © {year} {site.name}
          <span className="mx-2 text-rule-strong">·</span>
          Built with Next.js &amp; Tailwind CSS
        </p>

        <ul className="flex items-center gap-6">
          {social.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                {...(link.id !== "email"
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="link-rule font-mono text-xs tracking-widest text-ink-muted uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
