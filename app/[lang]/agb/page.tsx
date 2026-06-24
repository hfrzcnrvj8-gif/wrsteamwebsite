import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n, type Locale } from "@/i18n/config";
import { LegalPage } from "@/components/LegalPage";
import { agb } from "@/lib/legal";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/agb">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${agb.title} — Wollny Reifenservice`,
    alternates: { canonical: `/${lang}/agb` },
  };
}

export default async function AgbPage({ params }: PageProps<"/[lang]/agb">) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);
  return <LegalPage lang={lang} dict={dict} doc={agb} back={dict.privacy.back} />;
}
