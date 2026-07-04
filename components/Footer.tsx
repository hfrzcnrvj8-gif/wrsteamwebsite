"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mapsUrl } from "@/lib/site";
import { FooterLangLinks } from "./FooterLangLinks";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Footer({
  lang,
  dict,
  nav,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
  nav: Dictionary["nav"];
}) {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const handleLogoClick = () => {
    if (pathname === `/${lang}` || pathname === `/${lang}/`) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="relative border-t px-6 py-16 hairline">
      <div className="mx-auto max-w-6xl">

        {/* Logo */}
        <Link href={`/${lang}`} aria-label="Wollny Reifenservice — Startseite" className="inline-flex" onClick={handleLogoClick}>
          <Image src="/logo.png" alt="Wollny Reifenservice" width={320} height={98} className="h-9 w-auto" />
        </Link>

        {/* Data columns */}
        <div className="mt-10 grid gap-10 sm:grid-cols-3">

          {/* Adresse */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Adresse</p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block space-y-1.5 text-sm text-muted transition-colors hover:text-[var(--fg)]">
              <p>Borsigring 38</p>
              <p>31319 Sehnde</p>
              <p>Region Hannover · Deutschland</p>
            </a>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Kontakt</p>
            <div className="mt-3 space-y-1.5 text-sm">
              <a href="tel:+4951384520" className="block text-muted transition-colors hover:text-[var(--fg)]">Tel. 05138 4520</a>
              <p className="text-muted">Fax 05138 3008</p>
              <a href="mailto:Post@Reifenberatung.com" className="block text-muted transition-colors hover:text-[var(--fg)]">Post@Reifenberatung.com</a>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">{dict.hoursLabel}</p>
            <dl className="mt-3 space-y-1.5 text-sm">
              {dict.hours.map((h) => (
                <div key={h.day} className="flex gap-4">
                  <dt className="w-20 shrink-0 text-muted">{h.day}</dt>
                  <dd className="font-medium">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t hairline" />

        {/* Bottom nav row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          <nav aria-label="Seitennavigation" className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href={`/${lang}/leistungen`} className="transition-colors hover:text-[var(--fg)]">{nav.services}</Link>
            <Link href={`/${lang}/ueber-uns`}  className="transition-colors hover:text-[var(--fg)]">{nav.work}</Link>
            <Link href={`/${lang}/kontakt`}    className="transition-colors hover:text-[var(--fg)]">{nav.contact}</Link>
          </nav>
          <span className="hidden text-border sm:block" aria-hidden>|</span>
          <nav aria-label="Rechtliche Informationen" className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href={`/${lang}/agb`}           className="transition-colors hover:text-[var(--fg)]">{dict.agb}</Link>
            <Link href={`/${lang}/widerrufsrecht`} className="transition-colors hover:text-[var(--fg)]">{dict.widerruf}</Link>
            <Link href={`/${lang}/datenschutz`}   className="transition-colors hover:text-[var(--fg)]">{dict.privacy}</Link>
            <Link href={`/${lang}/impressum`}     className="transition-colors hover:text-[var(--fg)]">{dict.impressum}</Link>
          </nav>
          <FooterLangLinks current={lang} />
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t pt-6 text-xs text-muted hairline sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} Wollny Reifenservice GmbH. {dict.rights}
        </span>
        <a
          href="https://leggeralabs.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
        >
          <span>powered by</span>
          <Image
            src="/leggera-labs.png"
            alt="LEGGERA LABS"
            width={4293}
            height={428}
            className="h-3 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
