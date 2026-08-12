import { social } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="shell flex py-10">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
