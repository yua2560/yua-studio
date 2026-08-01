import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f4f8fd 0%, #e7f0fb 45%, #ece7fb 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#3d5a80",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 56,
            fontWeight: 800,
            color: "#1f2f45",
          }}
        >
          Music / Video / Education / Web
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#2c4160",
          }}
        >
          Creative studio for your expression
        </div>
      </div>
    ),
    { ...size }
  );
}
