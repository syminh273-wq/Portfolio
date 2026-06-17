import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import en from "./translations/en";
import vi from "./translations/vi";

const TRANSLATIONS = { en, vi };
const STORAGE_KEY = "locale";
const DEFAULT_LOCALE = "en";

const I18nContext = createContext({
  locale: DEFAULT_LOCALE,
  t: (key) => key,
  setLocale: () => {},
  switchLocale: () => {},
});

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && TRANSLATIONS[stored] ? stored : DEFAULT_LOCALE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((newLocale) => {
    if (TRANSLATIONS[newLocale]) {
      setLocaleState(newLocale);
    }
  }, []);

  const switchLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "vi" : "en"));
  }, []);

  const t = useCallback(
    (key) => {
      const dict = TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];
      return dict[key] != null ? dict[key] : key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, switchLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export const AVAILABLE_LOCALES = Object.keys(TRANSLATIONS);
