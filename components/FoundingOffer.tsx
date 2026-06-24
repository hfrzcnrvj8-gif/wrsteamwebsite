"use client";

import Link from "next/link";
import { PhotoBand } from "./PhotoBand";
import { SectionLabel } from "./SectionLabel";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function FoundingOffer({
  dict,
  lang,
}: {
  dict: Dictionary["founding"];
  lang: Locale;
}) {
  return (
    <PhotoBand
      src="/images/web/img_5278.jpg"
      align="left"
      objectPosition="center 45%"
    >
      <SectionLabel>{dict.label}</SectionLabel>
      <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl">
        {dict.title}
      </h2>
      <p className="mt-6 text-white/80">{dict.description}</p>

      <ul className="mt-7 space-y-3">
        {dict.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-white/90">
            <span className="mt-0.5 text-brand-red">✓</span>
            <span className="text-sm sm:text-base">{point}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/${lang}/kontakt`}
        className="btn-primary mt-8 inline-block rounded-full px-7 py-3 text-sm font-semibold"
      >
        {dict.cta}
      </Link>
    </PhotoBand>
  );
}
