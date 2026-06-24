import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { LegalPage } from "@/components/LegalPage";
import { widerruf } from "@/lib/legal";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/widerrufsrecht">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${widerruf.title} — Wollny Reifenservice`,
    alternates: { canonical: `/${lang}/widerrufsrecht` },
  };
}

export default async function WiderrufPage({
  params,
}: PageProps<"/[lang]/widerrufsrecht">) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  return (
    <LegalPage lang={lang} dict={dict} doc={widerruf} back={dict.privacy.back} />
  );
}
