import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Founder } from "@/components/Founder";
import { Showcase } from "@/components/Showcase";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/ueber-uns">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.pages.ueber.metaTitle,
    description: dict.meta.description,
    alternates: { canonical: `/${lang}/ueber-uns` },
  };
}

export default async function UeberUnsPage({
  params,
}: PageProps<"/[lang]/ueber-uns">) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.nav} />
      <main className="relative overflow-x-clip">
        <Founder dict={dict.founder} />
        <Showcase dict={dict.showcase} />
        <ContactCta dict={dict.pages.contactCta} lang={lang} />
      </main>
      <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
