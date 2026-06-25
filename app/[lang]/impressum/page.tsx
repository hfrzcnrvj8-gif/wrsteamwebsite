import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { Reveal } from "@/components/Reveal";

// ────────────────────────────────────────────────────────────────────────────
// FILL IN YOUR REAL COMPANY DATA HERE.
// This is the only block you need to edit. Replace every "[ ... ]" placeholder
// with your actual legal details. Delete any line that does not apply to you
// (e.g. `register` / `vat` if you are not registered / not VAT-registered).
// ────────────────────────────────────────────────────────────────────────────
const COMPANY = {
  name: "Wollny Reifenservice GmbH",
  address: ["Borsigring 38", "31319 Sehnde", "Deutschland"],
  represented: "Sebastian Wollny, Rafael Wollny",
  email: "info@Reifenberatung.com",
  phone: "0 51 38 / 45 20",
  fax: "0 51 38 / 30 08",
  register: "Handelsregister: Amtsgericht Hildesheim, B201772",
  vat: "USt-IdNr: DE265685242",
  responsible: "Sebastian Wollny, Rafael Wollny",
  dispute:
    "Wir sind bereit, an einem außergerichtlichen Schlichtungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
} as const;

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/impressum">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: `${dict.impressum.title} — Wollny Reifenservice` };
}

export default async function ImpressumPage({
  params,
}: PageProps<"/[lang]/impressum">) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.impressum;

  return (
    <main className="relative mx-auto min-h-screen max-w-3xl px-6 py-28 md:py-36">
      <div
        className="orb pointer-events-none fixed -top-40 left-1/2 -z-10 h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] -translate-x-1/2 rounded-full opacity-30"
        aria-hidden
      />
      <Reveal>
        <Link
          href={`/${lang}`}
          className="text-sm text-muted transition-colors hover:text-[var(--fg)]"
        >
          ← {t.back}
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tightest sm:text-5xl">
          <span className="text-liquid">{t.title}</span>
        </h1>
        <p className="mt-3 text-sm text-muted">{t.intro}</p>
      </Reveal>

      <div className="mt-12 space-y-10">
        <Reveal>
          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              {t.labels.provider}
            </h2>
            <address className="mt-3 not-italic leading-relaxed text-muted">
              {COMPANY.name}
              {COMPANY.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </section>
        </Reveal>

        <Reveal delay={0.04}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              {t.labels.represented}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              {COMPANY.represented}
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              {t.labels.contact}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              <span className="block">Telefon: {COMPANY.phone}</span>
              <span className="block">Fax: {COMPANY.fax}</span>
              <span className="block">{COMPANY.email}</span>
            </p>
          </section>
        </Reveal>

        {COMPANY.register && (
          <Reveal delay={0.12}>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">
                {t.labels.register}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {COMPANY.register}
              </p>
            </section>
          </Reveal>
        )}

        {COMPANY.vat && (
          <Reveal delay={0.16}>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">
                {t.labels.vat}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{COMPANY.vat}</p>
            </section>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              {t.labels.responsible}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              {COMPANY.responsible}
              <span className="mt-2 block text-sm opacity-80">
                {t.responsibleNote}
              </span>
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.24}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{COMPANY.dispute}</p>
            <p className="mt-3 leading-relaxed text-muted">
              Plattform der EU-Kommission zur Online-Streitbeilegung (OS):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-liquid underline-offset-2 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.24}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              {t.disclaimerTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{t.disclaimer}</p>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
