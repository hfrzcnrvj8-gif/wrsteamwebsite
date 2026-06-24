"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function ContactCta({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["pages"]["contactCta"];
}) {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glow-border relative overflow-hidden rounded-[2.5rem]">
          <div className="card-surface relative rounded-[2.5rem] px-8 py-16 text-center md:px-16">
            <div
              className="orb pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[55%] -translate-x-1/2 -translate-y-1/2 animate-orb-float rounded-full"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tightest sm:text-4xl md:text-5xl">
                {dict.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">{dict.text}</p>
              <Link
                href={`/${lang}/kontakt`}
                className="btn-primary mt-9 inline-block rounded-full px-8 py-3.5 text-base font-semibold"
              >
                {dict.button}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
