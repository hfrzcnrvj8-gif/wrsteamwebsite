"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n/config";

// Collapsible header menu for the legal pages (kept German — legal docs are DE).
// On mobile the `navLinks` (main navigation) are prepended so users can navigate
// without the desktop nav bar.
export function LegalMenu({
  lang,
  navLinks,
}: {
  lang: Locale;
  navLinks?: Array<{ href: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const links = [
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
        className="glass grid h-10 place-items-center rounded-full px-3.5 text-base transition-transform hover:scale-105"
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
            className="glass absolute right-0 top-12 w-52 overflow-hidden rounded-2xl p-1.5 shadow-2xl"
          >
            {/* Main nav — only shown on mobile where the nav bar is hidden */}
            {navLinks && navLinks.length > 0 && (
              <>
                {navLinks.map((l) => (
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
                <li className="md:hidden my-1 mx-1 border-t border-white/10" role="separator" />
              </>
            )}
            {links.map((l) => (
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
