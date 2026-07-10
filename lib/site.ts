import type { Locale } from "@/i18n/config";

// Workshop phone number — used for tel: links across the site.
export const workshopPhone = "05138 4520";
export const workshopPhoneHref = `tel:${workshopPhone.replace(/\s+/g, "")}`;

// Canonical production URL. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. on the host) so sitemap, robots and canonical/OG tags point at the
// real domain. Falls back to the live Vercel demo URL — switch this (or set
// NEXT_PUBLIC_SITE_URL) to https://www.reifenservice-hannover.com once that
// domain is actually pointed at this deployment; until then it's the client's
// old site behind Cloudflare bot protection, which breaks link-preview
// crawlers (WhatsApp/iMessage/Facebook) trying to fetch og:image from it.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wrsteamwebsite.vercel.app"
).replace(/\/$/, "");

// Direct-call link for the booking CTA. Set NEXT_PUBLIC_BOOKING_URL to override
// (e.g. an online scheduling tool); falls back to a click-to-call link.
export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? "tel:+4951384520";

// Link to the Google reviews of the workshop.
export const googleReviewsUrl =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
  "https://www.google.com/search?q=Wollny+Reifenservice+GmbH+Sehnde+Bewertungen";

// Google Maps directions link to the workshop.
export const mapsUrl =
  process.env.NEXT_PUBLIC_MAPS_URL ??
  "https://www.google.com/maps/search/?api=1&query=Wollny+Reifenservice+Borsigring+38+31319+Sehnde";

// Google Maps embed URL (iframe). Set NEXT_PUBLIC_MAPS_EMBED_URL to override
// with a styled Embed API URL once a Maps API key is available.
export const mapsEmbedUrl =
  process.env.NEXT_PUBLIC_MAPS_EMBED_URL ??
  "https://maps.google.com/maps?q=Wollny+Reifenservice+GmbH,+Borsigring+38,+31319+Sehnde&output=embed&hl=de&z=16";

// Maps our locale codes to Open Graph locale identifiers.
export const ogLocale: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_US",
  de: "de_DE",
};
