"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

// Exception to the full-bleed photo bands: the motorcycle shot is portrait,
// so it lives in a contained frame next to the copy instead of as a backdrop.
export function Motorcycle({
  dict,
  lang,
}: {
  dict: Dictionary["motorcycle"];
  lang: Locale;
}) {
  return (
    <section id="motorrad" className="relative px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="order-2 md:order-1">
            <SectionLabel>{dict.label}</SectionLabel>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl">
              {dict.title}
            </h2>
            <p className="mt-6 text-pretty text-muted">{dict.body}</p>
            <Link
              href={`/${lang}/kontakt`}
              className="btn-primary mt-8 inline-block rounded-full px-7 py-3 text-sm font-semibold"
            >
              {dict.cta}
            </Link>
          </div>

          <div className="order-1 md:order-2">
            <div className="glow-border relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[2rem] sm:max-w-sm">
              <Image
                src="/images/web/motorrad.jpg"
                alt={dict.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
