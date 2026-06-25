"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
  const pathname = usePathname();

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

  const handleNavClick = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => handleNavClick(l.href)}
                className="transition-colors hover:text-[var(--fg)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* ··· opens nav + CTAs on mobile, legal on all */}
          <LegalMenu lang={lang} navLinks={links} bookLabel={dict.book} />

          {/* Desktop only: Termin pill */}
          <Link
            href={`/${lang}/kontakt`}
            onClick={() => handleNavClick(`/${lang}/kontakt`)}
            className="hidden h-10 place-items-center rounded-full border border-brand-red px-4 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white sm:grid"
          >
            {dict.book}
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
