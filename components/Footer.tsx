import Link from "next/link";
import Image from "next/image";
import { mapsUrl } from "@/lib/site";
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
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.7fr_1fr_1fr] md:gap-10">
        <div className="col-span-2 max-w-sm md:col-span-1">
          <Link
            href={`/${lang}`}
            aria-label="Wollny Reifenservice — Startseite"
            className="inline-flex"
          >
            <Image
              src="/logo.png"
              alt="Wollny Reifenservice"
              width={320}
              height={98}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-muted">{dict.tagline}</p>
          <address className="mt-5 space-y-1.5 text-sm not-italic text-muted">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit transition-colors hover:text-[var(--fg)]"
            >
              Borsigring 38, 31319 Sehnde
            </a>
            <span className="block">
              <a
                href="tel:+4951384520"
                className="transition-colors hover:text-[var(--fg)]"
              >
                Tel. 05138 4520
              </a>{" "}
              · Fax 05138 3008
            </span>
            <a
              href="mailto:Post@Reifenberatung.com"
              className="block w-fit transition-colors hover:text-[var(--fg)]"
            >
              Post@Reifenberatung.com
            </a>
          </address>
          <p className="mt-4 text-xs text-muted">{dict.madeIn}</p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <Link
            href={`/${lang}/leistungen`}
            className="text-muted transition-colors hover:text-[var(--fg)]"
          >
            {nav.services}
          </Link>
          <Link
            href={`/${lang}/ueber-uns`}
            className="text-muted transition-colors hover:text-[var(--fg)]"
          >
            {nav.work}
          </Link>
          <Link
            href={`/${lang}/kontakt`}
            className="text-muted transition-colors hover:text-[var(--fg)]"
          >
            {nav.contact}
          </Link>
        </nav>

        <nav className="flex flex-col gap-3 text-sm">
          <Link
            href={`/${lang}/agb`}
            className="text-muted transition-colors hover:text-[var(--fg)]"
          >
            {dict.agb}
          </Link>
          <Link
            href={`/${lang}/widerrufsrecht`}
            className="text-muted transition-colors hover:text-[var(--fg)]"
          >
            {dict.widerruf}
          </Link>
          <Link
            href={`/${lang}/datenschutz`}
            className="text-muted transition-colors hover:text-[var(--fg)]"
          >
            {dict.privacy}
          </Link>
          <Link
            href={`/${lang}/impressum`}
            className="text-muted transition-colors hover:text-[var(--fg)]"
          >
            {dict.impressum}
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t pt-6 text-xs text-muted hairline sm:flex-row sm:items-center sm:justify-between">
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
