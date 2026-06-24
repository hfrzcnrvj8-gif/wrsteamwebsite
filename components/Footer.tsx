import Link from "next/link";
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
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Link
            href={`/${lang}`}
            className="text-xl font-semibold tracking-tightest"
          >
            Wollny Reifenservice<span className="text-liquid">.</span>
          </Link>
          <p className="mt-4 text-sm text-muted">{dict.tagline}</p>
          <address className="mt-5 space-y-1 text-sm not-italic text-muted">
            {dict.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <div className="flex flex-col gap-4 text-sm md:items-end">
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
          <p className="text-xs text-muted">{dict.madeIn}</p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t pt-6 text-xs text-muted hairline">
        © {year} Wollny Reifenservice GmbH. {dict.rights}
      </div>
    </footer>
  );
}
