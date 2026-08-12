import type { SocialLink } from "@/lib/types";
import { site } from "@/lib/site";

export const social: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "adapameghana",
    href: "https://github.com/adapameghana",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "adapa-meghana",
    href: "https://www.linkedin.com/in/adapa-meghana-2667a8272",
  },
  {
    id: "email",
    label: "Email",
    handle: site.email,
    href: `mailto:${site.email}`,
  },
];
