"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import type { Dictionary } from "@/i18n/types";

const icons = ["◎", "⊙", "⚖"];

export function Technik({ dict }: { dict: Dictionary["technik"] }) {
  return (
    <section id="technik" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <SectionLabel>{dict.label}</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg text-muted">{dict.subtitle}</p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:mt-24 md:grid-cols-3">
          {dict.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="glow-border group relative h-full overflow-hidden rounded-3xl">
                <div className="card-surface relative h-full rounded-3xl p-8">
                  <span className="text-liquid text-3xl">
                    {icons[i] ?? "◆"}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted">{item.description}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    <span className="h-1 w-1 rounded-full bg-brand-red shadow-[0_0_10px_2px_rgba(230,0,0,0.6)]" />
                    <span className="text-liquid">{item.impact}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-xs text-muted">{dict.attribution}</p>
        </Reveal>
      </div>
    </section>
  );
}
