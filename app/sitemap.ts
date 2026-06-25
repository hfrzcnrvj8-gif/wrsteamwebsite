import type { MetadataRoute } from "next";
import { i18n } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

const routePriority: Record<string, number> = {
  "": 1.0,
  "/leistungen": 0.8,
  "/kontakt": 0.8,
  "/ueber-uns": 0.6,
  "/agb": 0.3,
  "/widerrufsrecht": 0.3,
  "/datenschutz": 0.3,
  "/impressum": 0.3,
};

const routes = Object.keys(routePriority);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.flatMap((route) =>
    i18n.locales.map((lang) => ({
      url: `${siteUrl}/${lang}${route}`,
      lastModified: now,
      changeFrequency: (route === "" || route === "/leistungen" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: routePriority[route] ?? 0.5,
      alternates: {
        languages: Object.fromEntries(
          i18n.locales.map((l) => [l, `${siteUrl}/${l}${route}`])
        ),
      },
    }))
  );
}
