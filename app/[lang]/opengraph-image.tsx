import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";

export const alt =
  "Wollny Reifenservice — Reifen, Felgen & Achsvermessung in Sehnde bei Hannover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
    join(process.cwd(), "public/images/og-workshop.jpg")
  );
  const photoDataUrl = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#F4F4F5",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoDataUrl}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Legibility scrim */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(10,10,11,0.75) 0%, rgba(10,10,11,0.35) 38%, rgba(10,10,11,0.55) 68%, rgba(10,10,11,0.92) 100%)",
          }}
        />

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 40 }}>
          <span style={{ fontWeight: 700, letterSpacing: "-0.03em" }}>
            Wollny Reifenservice
          </span>
          <span style={{ color: "#E60000", marginLeft: 2 }}>.</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
            }}
          >
            {line1}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              backgroundImage:
                "linear-gradient(120deg, #FF3B3B, #E60000 45%, #B30000)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {line2}
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
          <span style={{ color: "#C9C9D1" }}>
            Reifen · Felgen · Achsvermessung · seit 1987 · Sehnde bei Hannover
          </span>
          <span style={{ color: "#f5c563", marginLeft: 18 }}>4,9 / 5</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
