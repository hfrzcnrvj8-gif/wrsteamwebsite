# Wollny Reifenservice — strona WWW

Marketingowa strona warsztatu **Wollny Reifenservice GmbH** (Sehnde k. Hannoveru) —
reifenservice-hannover.com. Trójjęzyczna (DE domyślnie, EN, PL), z formularzem kontaktowym,
mapą dojazdu, opiniami Google i kompletem stron prawnych (Impressum, Datenschutz, AGB,
Widerrufsrecht).

## Stack

- **Next.js 16** (App Router, React 19, Turbopack) — `npm audit`: 0 podatności.
- **Tailwind CSS** — tokeny designu + utilities w `app/globals.css`.
- **Framer Motion** — animacje sekcji (Reveal, parallax).
- **next-themes** — tryb jasny/ciemny.
- **i18n** — routing `[lang]` (de/en/pl), detekcja w `proxy.ts`, słowniki JSON.
- **Formularz kontaktowy** — walidacja klient+serwer, honeypot, wysyłka przez Resend.

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000 → przekierowanie do /de, /en lub /pl
npm run build    # build produkcyjny (prerender wszystkich języków)
```

## Struktura

```
app/[lang]/            # layout, strona główna, leistungen, kontakt, ueber-uns,
                       # impressum, datenschutz, agb, widerrufsrecht, 404
app/api/contact/       # handler formularza (Resend)
components/            # Hero, Services, Reviews, ContactForm, Footer, ...
i18n/dictionaries/     # de.json · en.json · pl.json (cała treść strony)
lib/site.ts            # telefon, adresy, URL-e (Maps, opinie Google, domena)
proxy.ts               # detekcja języka + redirect
zrodlo-tresci/         # materiały źródłowe ze starej strony (nie deployować)
```

## Konfiguracja (env na hoście)

Zobacz `.env.example`. Kluczowe:
- `NEXT_PUBLIC_SITE_URL=https://www.reifenservice-hannover.com` — canonical/OG/sitemap.
- `RESEND_API_KEY` + `CONTACT_TO_EMAIL` — bez nich formularz tylko loguje do konsoli
  (zwraca sukces!), mail nie wychodzi. Domenę nadawczą trzeba zweryfikować w Resend.
- Opcjonalnie: `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_MAPS_EMBED_URL`,
  `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` (fallbacki w `lib/site.ts`).

## Treść i dane firmy

- Cała treść: `i18n/dictionaries/*.json` (edytuj per język).
- Dane firmowe (telefon, adres, Impressum): `lib/site.ts` + stała `COMPANY`
  w `app/[lang]/impressum/page.tsx`.
- Strony prawne przed publikacją powinien przejrzeć prawnik.

## SEO

Per-locale title/description, canonical + hreflang (de/en/pl + x-default), OG/Twitter
z dynamicznym obrazkiem (`opengraph-image.tsx`), `sitemap.xml`, `robots.txt`. Po deployu:
zgłoś sitemapę w Google Search Console i skonfiguruj przekierowania 301 ze starych URL-i.
