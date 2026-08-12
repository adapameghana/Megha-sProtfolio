import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Tokens are inlined: Satori resolves no CSS variables or Tailwind classes. */
const PAPER = "#FAF8F3";
const INK = "#1A1814";
const INK_MUTED = "#575147";
const ACCENT = "#0B5D51";
const RULE = "#E3DDD0";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: PAPER,
          color: INK,
        }}
      >
        {/* Accent spine */}
        <div style={{ width: 16, height: "100%", backgroundColor: ACCENT }} />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 24,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              {site.role}
            </div>

            <div style={{ fontSize: 104, marginTop: 24, letterSpacing: -2 }}>{site.name}</div>

            <div style={{ width: 120, height: 3, backgroundColor: ACCENT, marginTop: 36 }} />

            <div
              style={{
                fontSize: 32,
                lineHeight: 1.45,
                color: INK_MUTED,
                marginTop: 36,
                maxWidth: 860,
              }}
            >
              {site.tagline}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {site.keywords.slice(0, 5).map((keyword) => (
              <div
                key={keyword}
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: INK_MUTED,
                  border: `1px solid ${RULE}`,
                  borderRadius: 4,
                  padding: "8px 16px",
                }}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
