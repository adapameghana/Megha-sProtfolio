import Image from "next/image";
import type { Portrait as PortraitData } from "@/lib/types";

/**
 * Profile photo, set as a framed print rather than the usual circular avatar:
 * a hairline rule and a square-ish crop belong to this page's vocabulary in a
 * way a circle does not.
 *
 * `fill` inside a fixed 4:5 box, rather than explicit width/height, so any
 * photo can be dropped in without its dimensions being declared anywhere. The
 * box reserves the space before the image arrives, so nothing shifts on load.
 *
 * Not preloaded: About sits well below the fold, so the browser's lazy loading
 * is the correct behaviour and the hero is left to load first.
 */
export function Portrait({ src, alt, focus = "50% 30%" }: PortraitData) {
  return (
    <div className="relative aspect-4/5 w-40 overflow-hidden rounded-sm border border-rule bg-paper-sunken sm:w-52 lg:w-60">
      <Image
        src={src}
        alt={alt}
        fill
        /* Matches the widths above, so a phone never downloads a 240px asset */
        sizes="(min-width: 1024px) 15rem, (min-width: 640px) 13rem, 10rem"
        className="object-cover"
        style={{ objectPosition: focus }}
      />
    </div>
  );
}
