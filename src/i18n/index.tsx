import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
export type { Locale, Translations } from "./translations";
import { translations } from "./translations";

const STORAGE_KEY = "bits-locale";

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh") return stored;
  const nav = window.navigator?.language ?? "";
  if (nav.toLowerCase().startsWith("zh")) return "zh";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale());

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore storage errors
    }
    try {
      document.documentElement.setAttribute("lang", translations[l].htmlLang);
    } catch {
      // ignore DOM errors
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "zh" : "en");
  }, [locale, setLocale]);

  useEffect(() => {
    try {
      document.documentElement.setAttribute("lang", translations[locale].htmlLang);
    } catch {
      // ignore
    }
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, t: translations[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return ctx;
}

export function formatYear(str: string): string {
  return str.replace("{year}", String(new Date().getFullYear()));
}
