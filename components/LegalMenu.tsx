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
      {/* Hamburger → X on all breakpoints, no border/background */}
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Menü"
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${open ? "translate-y-[6px] rotate-45" : ""}`} />
        <span className={`block h-px w-5 bg-current transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
        <span className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="glass-overlay absolute right-0 top-12 w-56 overflow-hidden rounded-2xl p-1.5 shadow-2xl"
          >
            {/* Mobile-only CTAs: visually grouped card */}
            <li className="md:hidden px-0.5 pt-0.5 pb-1">
              <div className="rounded-xl bg-white/6 overflow-hidden">
                <a
                  href={workshopPhoneHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 text-sm transition-colors hover:bg-white/8"
                >
                  <span className="font-semibold">Anrufen</span>
                  <span className="text-xs text-muted">{workshopPhone}</span>
                </a>
                <div className="mx-3 border-t border-white/8" />
                <Link
                  href={`/${lang}/kontakt`}
                  onClick={() => setOpen(false)}
                  className="block px-3.5 py-3 text-sm font-semibold transition-colors hover:bg-white/8"
                >
                  {bookLabel ?? "Termin vereinbaren"}
                </Link>
              </div>
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
