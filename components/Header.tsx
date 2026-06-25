"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { LegalMenu } from "./LegalMenu";
import { workshopPhoneHref } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${lang}/leistungen`, label: dict.services },
    { href: `/${lang}/ueber-uns`, label: dict.work },
    { href: `/${lang}/kontakt`, label: dict.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass shadow-xl" : "border border-transparent"
        }`}
      >
        <Link
          href={`/${lang}`}
          aria-label="Wollny Reifenservice — Startseite"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Wollny Reifenservice"
            width={320}
            height={98}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-[var(--fg)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LegalMenu lang={lang} navLinks={links} />
          {/* Mobile: bare emoji, no border */}
          <a href={workshopPhoneHref} aria-label="Anrufen" className="text-2xl leading-none sm:hidden">📞</a>
          {/* Desktop: red outlined pill with label */}
          <a
            href={workshopPhoneHref}
            aria-label="Anrufen"
            className="hidden h-10 items-center gap-1.5 rounded-full border border-brand-red px-4 text-sm text-brand-red transition-transform hover:scale-105 hover:bg-brand-red/10 sm:flex"
          >
            <span>✆</span>
            <span>Anrufen</span>
          </a>

          {/* Mobile: bare calendar emoji */}
          <Link href={`/${lang}/kontakt`} aria-label={dict.book} className="text-2xl leading-none sm:hidden">📅</Link>
          {/* Desktop: filled Termin button — same height/padding as phone */}
          <Link
            href={`/${lang}/kontakt`}
            className="btn-primary hidden h-10 place-items-center rounded-full px-4 text-sm font-semibold sm:grid"
          >
            {dict.book}
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
