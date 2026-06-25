"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";

export function FooterLangLinks({ current }: { current: Locale }) {
  const pathname = usePathname();

  const redirectedPath = (locale: Locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  };

  return (
    <div className="flex gap-3 text-sm">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPath(locale)}
          className={`transition-colors hover:text-[var(--fg)] ${
            locale === current
              ? "font-medium text-[var(--fg)]"
              : "text-muted"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
