import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { UseCases } from "@/components/UseCases";
import { Approach } from "@/components/Approach";
import { FoundingOffer } from "@/components/FoundingOffer";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/leistungen">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.pages.leistungen.metaTitle,
    description: dict.meta.description,
    alternates: { canonical: `/${lang}/leistungen` },
  };
}

export default async function LeistungenPage({
  params,
}: PageProps<"/[lang]/leistungen">) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const p = dict.pages.leistungen;

  return (
    <>
      <Header lang={lang} dict={dict.nav} />
      <main className="relative overflow-x-clip">
        {/* Page hero */}
        <section className="relative px-6 pb-8 pt-40 md:pt-48">
          <div
            className="orb pointer-events-none absolute left-1/2 top-10 -z-10 h-[40vw] w-[40vw] max-h-[480px] max-w-[480px] -translate-x-1/2 animate-orb-float rounded-full"
            aria-hidden
          />
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <SectionLabel>{p.eyebrow}</SectionLabel>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl">
              {p.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted">
              {p.subtitle}
            </p>
          </Reveal>
        </section>

        <Services dict={dict.services} />
        <UseCases dict={dict.useCases} />
        <Approach dict={dict.approach} />
        <FoundingOffer dict={dict.founding} />

        {/* Contact CTA → dedicated contact page */}
        <section className="relative px-6 pb-32 pt-8 md:pb-44">
          <Reveal className="mx-auto max-w-4xl">
            <div className="glow-border relative overflow-hidden rounded-[2.5rem]">
              <div className="card-surface relative rounded-[2.5rem] px-8 py-16 text-center md:px-16">
                <div
                  className="orb pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[55%] -translate-x-1/2 -translate-y-1/2 animate-orb-float rounded-full"
                  aria-hidden
                />
                <div className="relative">
                  <h2 className="text-balance text-3xl font-semibold tracking-tightest sm:text-4xl">
                    {p.ctaTitle}
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-muted">
                    {p.ctaText}
                  </p>
                  <Link
                    href={`/${lang}/kontakt`}
                    className="btn-primary mt-9 inline-block rounded-full px-8 py-3.5 text-base font-semibold"
                  >
                    {p.ctaButton}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
