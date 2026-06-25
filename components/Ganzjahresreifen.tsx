"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import type { Dictionary } from "@/i18n/types";

export function Ganzjahresreifen({ dict }: { dict: Dictionary["ganzjahr"] }) {
  return (
    <section id="ganzjahr" className="relative px-6 py-44 md:py-60">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <SectionLabel>{dict.label}</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg text-muted">{dict.subtitle}</p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:mt-24 md:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full rounded-3xl p-8">
              <h3 className="text-xl font-semibold tracking-tight">
                {dict.prosTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {dict.pros.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 text-brand-red">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface h-full rounded-3xl p-8">
              <h3 className="text-xl font-semibold tracking-tight">
                {dict.consTitle}
              </h3>
              <ul className="mt-6 space-y-4 text-muted">
                {dict.cons.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 text-muted">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="glow-border relative mt-6 overflow-hidden rounded-3xl">
            <div className="card-surface rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red/15 text-lg text-brand-red">
                  ↻
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {dict.careTitle}
                </h3>
              </div>
              <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted">
                {dict.careText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
