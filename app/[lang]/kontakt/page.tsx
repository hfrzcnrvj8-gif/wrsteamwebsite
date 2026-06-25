import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/kontakt">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.pages.kontakt.metaTitle,
    description: dict.meta.description,
    alternates: { canonical: `/${lang}/kontakt` },
  };
}

export default async function KontaktPage({
  params,
}: PageProps<"/[lang]/kontakt">) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  const p = dict.pages.kontakt;

  return (
    <>
      <Header lang={lang} dict={dict.nav} />
      <main id="main" className="relative overflow-x-clip">
        {/* Page hero */}
        <section className="relative px-6 pb-4 pt-40 md:pt-48">
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

        <CTA dict={dict.cta} lang={lang} />
        <Faq dict={dict.faq} />
      </main>
      <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
