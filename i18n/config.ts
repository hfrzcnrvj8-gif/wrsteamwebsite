export const i18n = {
  defaultLocale: "de",
  locales: ["de", "en", "pl"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
  de: "Deutsch",
};
