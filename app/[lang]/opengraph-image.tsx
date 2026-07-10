import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";

export const alt =
  "Wollny Reifenservice — Reifen, Felgen & Achsvermessung in Sehnde bei Hannover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PANEL_WIDTH = 560;

const starsSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="24" viewBox="0 0 140 24">${Array.from(
  { length: 5 }
)
  .map((_, i) => {
    const cx = 14 + i * 28;
    const points = Array.from({ length: 10 })
      .map((_, p) => {
        const angle = (Math.PI / 5) * p - Math.PI / 2;
        const r = p % 2 === 0 ? 11 : 4.6;
        return `${cx + r * Math.cos(angle)},${12 + r * Math.sin(angle)}`;
      })
      .join(" ");
    return `<polygon points="${points}" fill="#f5c563" />`;
  })
  .join("")}</svg>`;
const starsDataUrl = `data:image/svg+xml;base64,${Buffer.from(starsSvg).toString("base64")}`;

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const [line1, line2] = dict.hero.titleLines;

  const photoBuffer = readFileSync(
    join(process.cwd(), "public/images/og-workshop-panel.jpg")
  );
  const photoDataUrl = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  const logoBuffer = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0b",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Right: photo, full-bleed */}
        <img
          src={photoDataUrl}
          alt=""
          width={size.width - PANEL_WIDTH}
          height={size.height}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: size.width - PANEL_WIDTH,
            height: size.height,
            objectFit: "cover",
          }}
        />

        {/* Soft blend from panel into photo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: PANEL_WIDTH - 140,
            width: 260,
            height: size.height,
            display: "flex",
            background:
              "linear-gradient(90deg, #0a0a0b 0%, rgba(10,10,11,0.85) 35%, rgba(10,10,11,0) 100%)",
          }}
        />

        {/* Subtle top/bottom vignette on the photo half for polish */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: size.width - PANEL_WIDTH,
            height: size.height,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(10,10,11,0.35) 0%, rgba(10,10,11,0) 22%, rgba(10,10,11,0) 78%, rgba(10,10,11,0.5) 100%)",
          }}
        />

        {/* Left: solid text panel */}
        <div
          style={{
            position: "relative",
            width: PANEL_WIDTH,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 44px 56px 64px",
          }}
        >
          {/* Logo */}
          <img
            src={logoDataUrl}
            alt=""
            width={320}
            height={98}
            style={{ height: 52, width: 170 }}
          />

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 46,
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#F4F4F5",
              }}
            >
              {line1}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 46,
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#FF4433",
              }}
            >
              {line2}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                width: 64,
                height: 5,
                borderRadius: 999,
                background: "#E60000",
              }}
            />
          </div>

          {/* Rating + tagline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={starsDataUrl} alt="" width={140} height={24} style={{ height: 22, width: 128 }} />
              <span style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#F4F4F5", marginLeft: 14 }}>
                4,9 / 5
              </span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 14,
                fontSize: 21,
                color: "#9A9AA2",
              }}
            >
              Reifen · Felgen · Achsvermessung
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 4,
                fontSize: 21,
                color: "#9A9AA2",
              }}
            >
              seit 1987 · Sehnde bei Hannover
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
