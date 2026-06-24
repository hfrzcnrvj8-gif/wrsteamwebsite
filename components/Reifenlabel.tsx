"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import type { Dictionary } from "@/i18n/types";

export function Reifenlabel({ dict }: { dict: Dictionary["reifenlabel"] }) {
  return (
    <section id="reifenlabel" className="relative px-6 py-44 md:py-60">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <SectionLabel>{dict.label}</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg text-muted">{dict.subtitle}</p>
        </Reveal>

        <div className="mt-20 grid gap-6 sm:grid-cols-3 md:mt-24">
          {dict.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="card-surface h-full rounded-3xl p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-red/15 text-sm font-bold tracking-tight text-brand-red">
                  {item.grade}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-muted">{dict.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
