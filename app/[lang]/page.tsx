import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemVision } from "@/components/ProblemVision";
import { Services } from "@/components/Services";
import { Technik } from "@/components/Technik";
import { FoundingOffer } from "@/components/FoundingOffer";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <StructuredData lang={lang} dict={dict} />
      <Header lang={lang} dict={dict.nav} />
      <main className="relative overflow-x-clip">
        <Hero dict={dict.hero} lang={lang} />
        <ProblemVision dict={dict.problem} />
        <Services dict={dict.services} />
        <Technik dict={dict.technik} />
        <FoundingOffer dict={dict.founding} lang={lang} />
        <ContactCta dict={dict.pages.contactCta} lang={lang} />
      </main>
      <Footer lang={lang} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
