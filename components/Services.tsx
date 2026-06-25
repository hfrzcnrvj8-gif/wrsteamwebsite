"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import type { Dictionary } from "@/i18n/types";

export function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="services" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <SectionLabel>{dict.label}</SectionLabel>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tightest sm:text-5xl md:text-6xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg text-muted">{dict.subtitle}</p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:mt-24 lg:grid-cols-2">
          {dict.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="glow-border group relative h-full overflow-hidden rounded-3xl">
                <div className="card-surface relative h-full rounded-3xl p-8 md:p-10">
                  <div
                    className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(230,0,0,0.45), transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute right-8 top-6 select-none text-6xl font-bold leading-none tracking-tighter text-white/[0.06]" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-muted">{item.description}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="glass rounded-full px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
