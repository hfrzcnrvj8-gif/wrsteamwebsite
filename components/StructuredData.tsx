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
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/icon.png`,
        telephone: "+49 5138 4520",
        faxNumber: "+49 5138 3008",
        email: "info@Reifenberatung.com",
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: 52.3158,
          longitude: 9.9591,
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
            opens: "07:00",
            closes: "15:30",
          },
        ],
        makesOffer: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reifenwechsel" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D-Achsvermessung (Hunter)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auswuchten (Hunter, SmartWeight®)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ultraschall-Radwäsche" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Felgen & Kompletträder" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rädereinlagerung" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reifen- & Radservice für Elektro- und Hybridfahrzeuge (HV-Fachkraft Stufe 1S)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reifenservice für Transporter & Wohnmobile" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reifenreparatur" } },
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
