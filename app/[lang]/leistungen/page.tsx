import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { UseCases } from "@/components/UseCases";
import { Ganzjahresreifen } from "@/components/Ganzjahresreifen";
import { Approach } from "@/components/Approach";
import { Motorcycle } from "@/components/Motorcycle";
import { ContactCta } from "@/components/ContactCta";
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
        <Ganzjahresreifen dict={dict.ganzjahr} />
        <Approach dict={dict.approach} />
        <Motorcycle dict={dict.motorcycle} lang={lang} />
        <ContactCta dict={dict.pages.contactCta} lang={lang} />
      </main>
      <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
