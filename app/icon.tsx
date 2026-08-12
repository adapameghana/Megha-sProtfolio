import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Replaces the create-next-app default favicon with the portfolio's mark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B5D51",
          color: "#FAF8F3",
          fontSize: 22,
          borderRadius: 6,
        }}
      >
        M
      </div>
    ),
    size,
  );
}
