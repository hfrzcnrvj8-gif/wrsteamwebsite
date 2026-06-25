"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import { workshopPhoneHref, workshopPhone } from "@/lib/site";

export function LegalMenu({
  lang,
  navLinks,
  bookLabel,
}: {
  lang: Locale;
  navLinks?: Array<{ href: string; label: string }>;
  bookLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const legalLinks = [
    { href: `/${lang}/agb`, label: "AGB" },
    { href: `/${lang}/widerrufsrecht`, label: "Widerrufsrecht" },
    { href: `/${lang}/datenschutz`, label: "Datenschutz" },
    { href: `/${lang}/impressum`, label: "Impressum" },
  ];

  return (
    <div
      className="relative"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Menü"
        className="glass flex h-10 min-w-[4.5rem] items-center justify-center rounded-full px-4 text-base transition-transform hover:scale-105"
      >
        <span className="-mt-1.5 tracking-widest">···</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="glass absolute right-0 top-12 w-56 overflow-hidden rounded-2xl p-1.5 shadow-2xl"
          >
            {/* Mobile-only CTAs: call + appointment */}
            <li className="md:hidden">
              <a
                href={workshopPhoneHref}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red/10"
              >
                <span>✆</span>
                <span>{workshopPhone}</span>
              </a>
            </li>
            <li className="md:hidden">
              <Link
                href={`/${lang}/kontakt`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-[var(--fg)]"
              >
                {bookLabel ?? "Termin vereinbaren"} →
              </Link>
            </li>

            {/* Separator before nav */}
            <li className="my-1 mx-1 border-t border-white/10 md:hidden" role="separator" />

            {/* Main nav — mobile only */}
            {navLinks?.map((l) => (
              <li key={l.href} className="md:hidden">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 hover:text-[var(--fg)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Separator before legal */}
            <li className="my-1 mx-1 border-t border-white/10" role="separator" />

            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-white/10 hover:text-[var(--fg)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
