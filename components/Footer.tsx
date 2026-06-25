import Link from "next/link";
import Image from "next/image";
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
  return (
    <footer className="relative border-t px-6 py-16 hairline">
      <div className="mx-auto max-w-6xl">

        {/* Top — flat grid: cols 1+2 share rows, col 3 (hours) spans all */}
        <div className="grid items-start gap-x-16 gap-y-2.5 md:grid-cols-[1fr_1fr_auto]">

          {/* Row 1, col 1 — logo */}
          <Link href={`/${lang}`} aria-label="Wollny Reifenservice — Startseite" className="inline-flex self-start">
            <Image src="/logo.png" alt="Wollny Reifenservice" width={320} height={98} className="h-9 w-auto" />
          </Link>

          {/* Row 1, col 2 — "KONTAKT" label aligned to bottom of logo row */}
          <p className="self-end pb-0.5 text-xs uppercase tracking-[0.14em] text-muted">Kontakt</p>

          {/* Col 3 — hours, spans all 4 rows */}
          <div className="row-span-4 border-l pl-10 hairline max-md:hidden">
            <h3 className="text-xs uppercase tracking-[0.14em] text-muted">{dict.hoursLabel}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              {dict.hours.map((h) => (
                <div key={h.day} className="flex gap-4">
                  <dt className="w-20 shrink-0 text-muted">{h.day}</dt>
                  <dd className="font-medium">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Row 2 */}
          <p className="text-sm text-muted">Borsigring 38</p>
          <a href="tel:+4951384520" className="text-sm text-muted transition-colors hover:text-[var(--fg)]">Tel. 05138 4520</a>

          {/* Row 3 */}
          <p className="text-sm text-muted">31319 Sehnde</p>
          <p className="text-sm text-muted">Fax 05138 3008</p>

          {/* Row 4 */}
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted transition-colors hover:text-[var(--fg)]">
            Region Hannover · Deutschland
          </a>
          <a href="mailto:Post@Reifenberatung.com" className="text-sm text-muted transition-colors hover:text-[var(--fg)]">
            Post@Reifenberatung.com
          </a>

          {/* Hours visible on mobile (below cols 1+2) */}
          <div className="col-span-2 mt-2 md:hidden">
            <h3 className="text-xs uppercase tracking-[0.14em] text-muted">{dict.hoursLabel}</h3>
            <dl className="mt-3 space-y-2 text-sm">
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
          href="https://patrykpiecyk.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          powered by{" "}
          <span className="leggera-gradient font-semibold tracking-wide">
            LEGGERA LABS
          </span>
          <span className="font-semibold text-[#22d3ee]"> .</span>
        </a>
      </div>
    </footer>
  );
}
