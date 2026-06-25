"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { googleReviewsUrl } from "@/lib/site";
import type { Dictionary } from "@/i18n/types";

export function Reviews({ dict }: { dict: Dictionary["reviews"] }) {
  return (
    <section id="reviews" className="relative px-6 py-44 md:py-60">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <SectionLabel>{dict.label}</SectionLabel>
        </div>
        <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl">
          {dict.title}
        </h2>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-end gap-3">
            <span className="text-6xl font-semibold tracking-tightest sm:text-7xl">
              {dict.rating}
            </span>
            <span className="mb-2 text-lg text-muted">{dict.outOf}</span>
          </div>
          <div
            className="flex gap-1 text-2xl"
            style={{ color: "#f5c563" }}
            aria-hidden
          >
            ★★★★★
          </div>
          <p className="text-sm text-muted">{dict.count}</p>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-muted">{dict.subtitle}</p>

        {dict.quotes.length > 0 && (
          <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {dict.quotes.map((q) => (
              <figure
                key={q.name}
                className="card-surface flex h-full flex-col rounded-3xl p-6"
              >
                <div
                  className="text-sm tracking-wide"
                  style={{ color: "#f5c563" }}
                  aria-hidden
                >
                  ★★★★★
                </div>
                <blockquote className="mt-3 flex-1 text-pretty leading-relaxed text-white/90">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium">
                  {q.name}
                  <span className="ml-2 font-normal text-muted">
                    · {dict.via}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-9 inline-block rounded-full px-8 py-3.5 text-base font-semibold"
        >
          {dict.cta}
        </a>
      </Reveal>
    </section>
  );
}
