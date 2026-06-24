import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { LegalPage } from "@/components/LegalPage";
import { datenschutz } from "@/lib/legal";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/datenschutz">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${datenschutz.title} — Wollny Reifenservice`,
    alternates: { canonical: `/${lang}/datenschutz` },
  };
}

export default async function DatenschutzPage({
  params,
}: PageProps<"/[lang]/datenschutz">) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  return (
    <LegalPage
      lang={lang}
      dict={dict}
      doc={datenschutz}
      back={dict.privacy.back}
    />
  );
}
