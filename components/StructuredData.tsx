import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { siteUrl } from "@/lib/site";

// Emits JSON-LD for richer local-search results (AutoRepair / TireShop).
export function StructuredData({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "TireShop", "LocalBusiness"],
        "@id": `${siteUrl}/#business`,
        name: "Wollny Reifenservice GmbH",
        url: `${siteUrl}/${lang}`,
        description: dict.meta.description,
        logo: `${siteUrl}/icon.svg`,
        image: `${siteUrl}/icon.svg`,
        telephone: "+49 5138 4520",
        email: "Post@Reifenberatung.com",
        foundingDate: "1987",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Borsigring 38",
          postalCode: "31319",
          addressLocality: "Sehnde",
          addressRegion: "Niedersachsen",
          addressCountry: "DE",
        },
        areaServed: ["Sehnde", "Hannover", "Region Hannover"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "15:00",
          },
        ],
        makesOffer: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reifenwechsel" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D-Achsvermessung" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Felgen & Kompletträder" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reifeneinlagerung" } },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/${lang}`,
        name: "Wollny Reifenservice GmbH",
        description: dict.meta.description,
        inLanguage: lang,
        publisher: { "@id": `${siteUrl}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
