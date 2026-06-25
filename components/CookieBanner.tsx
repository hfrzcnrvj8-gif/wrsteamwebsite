"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/i18n/config";

const STORAGE_KEY = "wrs_cookie_consent";

const t = {
  de: {
    text: "Wir möchten Analyse-Cookies einsetzen, um unsere Website zu verbessern. Sie können jederzeit widersprechen.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    privacy: "Datenschutz",
  },
  en: {
    text: "We'd like to use analytics cookies to improve our website. You can withdraw consent at any time.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy policy",
  },
  pl: {
    text: "Chcielibyśmy używać plików cookie analitycznych w celu ulepszania strony. Zgodę można wycofać w dowolnym momencie.",
    accept: "Akceptuj",
    decline: "Odrzuć",
    privacy: "Polityka prywatności",
  },
};

export function CookieBanner({ lang }: { lang: Locale }) {
  const [visible, setVisible] = useState(false);
  const s = t[lang] ?? t.de;

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const respond = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label={lang === "de" ? "Cookie-Einstellungen" : lang === "pl" ? "Ustawienia plików cookie" : "Cookie settings"}
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-2xl"
        >
          <div className="glass-overlay flex flex-col gap-3 rounded-2xl px-4 py-4 shadow-2xl sm:flex-row sm:items-center sm:gap-4 sm:rounded-3xl sm:px-6 sm:py-5">
            <p className="flex-1 text-xs leading-snug text-muted sm:text-sm sm:leading-relaxed">
              {s.text}{" "}
              <Link
                href={`/${lang}/datenschutz`}
                className="text-liquid underline-offset-2 hover:underline"
              >
                {s.privacy}
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2 sm:gap-3">
              <button
                onClick={() => respond("declined")}
                className="glass rounded-full px-4 py-2 text-xs font-medium transition-opacity hover:opacity-80 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {s.decline}
              </button>
              <button
                onClick={() => respond("accepted")}
                className="btn-primary rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {s.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
