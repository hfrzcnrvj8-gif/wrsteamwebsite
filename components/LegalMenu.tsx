"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n/config";

// Collapsible header menu for the legal pages (kept German — legal docs are DE).
export function LegalMenu({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: `/${lang}/agb`, label: "AGB" },
    { href: `/${lang}/widerrufsrecht`, label: "Widerrufsrecht" },
    { href: `/${lang}/datenschutz`, label: "Datenschutz" },
    { href: `/${lang}/impressum`, label: "Impressum" },
  ];

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Rechtliches"
        className="glass grid h-10 w-10 place-items-center rounded-full text-base transition-transform hover:scale-105"
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
            className="glass absolute right-0 top-12 w-48 overflow-hidden rounded-2xl p-1.5 shadow-2xl"
          >
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
