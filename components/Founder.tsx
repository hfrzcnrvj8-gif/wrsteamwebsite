"use client";

import { PhotoBand } from "./PhotoBand";
import { SectionLabel } from "./SectionLabel";
import type { Dictionary } from "@/i18n/types";

export function Founder({ dict }: { dict: Dictionary["founder"] }) {
  return (
    <PhotoBand
      src="/images/web/betrieb.jpg"
      align="right"
      objectPosition="center 52%"
    >
      <SectionLabel>{dict.label}</SectionLabel>
      <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl md:text-5xl">
        {dict.title}
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-white/80">{dict.body}</p>

      <blockquote className="mt-8 border-l-2 border-brand-red/70 pl-5 text-lg italic text-white/90">
        “{dict.quote}”
      </blockquote>

      <p className="mt-6 font-semibold tracking-tight text-white">
        {dict.name}
        <span className="ml-2 font-normal text-white/65">— {dict.role}</span>
      </p>
    </PhotoBand>
  );
}
