"use client";

import { PhotoBand } from "./PhotoBand";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import type { Dictionary } from "@/i18n/types";

// One full-bleed photo per showcase item, matched to the captions in the
// dictionary (Achsvermessung · Reifenmontage · Felgen & Kompletträder).
const photos = [
  "/images/web/img_8554.jpg",
  "/images/web/img_4997.jpg",
  "/images/web/felgen.jpg",
];

export function Showcase({ dict }: { dict: Dictionary["showcase"] }) {
  return (
    <>
      <section id="showcase" className="relative px-6 pt-44 md:pt-60">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>{dict.label}</SectionLabel>
            <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
              {dict.title}
            </h2>
            <p className="mt-6 text-lg text-muted">{dict.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {dict.items.map((item, i) => (
        <PhotoBand
          key={item.title}
          src={photos[i] ?? photos[0]}
          alt={item.caption}
          align="left"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_8px_2px_rgba(230,0,0,0.6)]" />
            {item.title}
          </span>
          <p className="mt-5 text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {item.caption}
          </p>
        </PhotoBand>
      ))}
    </>
  );
}
