import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({
  lang,
  dict,
  doc,
  back,
}: {
  lang: Locale;
  dict: Dictionary;
  doc: LegalDoc;
  back: string;
}) {
  return (
    <>
      <Header lang={lang} dict={dict.nav} />
      <main className="relative mx-auto min-h-screen max-w-3xl px-6 py-32 md:py-40">
        <div
          className="orb pointer-events-none fixed -top-40 left-1/2 -z-10 h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] -translate-x-1/2 rounded-full opacity-25"
          aria-hidden
        />
        <div>
          <Link
            href={`/${lang}`}
            className="text-sm text-muted transition-colors hover:text-[var(--fg)]"
          >
            ← {back}
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tightest sm:text-5xl">
            <span className="text-liquid">{doc.title}</span>
          </h1>
          {doc.intro && (
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
              {doc.intro}
            </p>
          )}
        </div>

        <div className="mt-12 space-y-8">
          {doc.sections.map((s, i) => (
            <section key={i}>
              {s.heading && (
                <h2 className="text-lg font-semibold tracking-tight">
                  {s.heading}
                </h2>
              )}
              {s.blocks.length > 0 && (
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                  {s.blocks.map((b, j) =>
                    typeof b === "string" ? (
                      <p key={j}>{b}</p>
                    ) : (
                      <ul key={j} className="ml-5 list-disc space-y-1.5">
                        {b.list.map((li, k) => (
                          <li key={k}>{li}</li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
