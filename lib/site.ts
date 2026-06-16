import type { Locale } from "@/i18n/config";

// Canonical production URL. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. on the host) so sitemap, robots and canonical/OG tags point at the
// real domain. Falls back to the production domain.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.reifenservice-hannover.com"
).replace(/\/$/, "");

// Direct-call link for the booking CTA. Set NEXT_PUBLIC_BOOKING_URL to override
// (e.g. an online scheduling tool); falls back to a click-to-call link.
export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? "tel:+4951384520";

// Google Maps directions link to the workshop.
export const mapsUrl =
  process.env.NEXT_PUBLIC_MAPS_URL ??
  "https://www.google.com/maps/search/?api=1&query=Wollny+Reifenservice+Borsigring+38+31319+Sehnde";

// Maps our locale codes to Open Graph locale identifiers.
export const ogLocale: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_US",
  de: "de_DE",
};
