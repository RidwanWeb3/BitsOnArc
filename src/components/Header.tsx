import { useEffect, useState } from "react";
import { Menu, X as XIcon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/bits-logo.png";
import { project } from "@/config/project";
import { useTranslation, type Locale } from "@/i18n";

export default function Header() {
  const { t, locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.history, href: "#history" },
    { label: t.nav.tokenomics, href: "#tokenomics" },
    { label: t.nav.memes, href: "#memes" },
    { label: t.nav.community, href: "#community" },
  ];

  const locales: { value: Locale; label: string; flag: string }[] = [
    { value: "en", label: "EN", flag: "🇺🇸" },
    { value: "zh", label: "中文", flag: "🇨🇳" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <img src={logo} alt="$BITS logo" className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12" />
          <span className="truncate text-xl font-black tracking-tight sm:text-2xl">
            <span className="gradient-text">$</span>BITS
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-bold tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Change language"
            >
              <Languages size={18} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 top-11 overflow-hidden rounded-xl border border-border bg-background/95 shadow-lg backdrop-blur"
                >
                  <div className="flex flex-col p-1">
                    {locales.map((l) => (
                      <button
                        key={l.value}
                        type="button"
                        onClick={() => {
                          setLocale(l.value);
                          setLangOpen(false);
                        }}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-black tracking-[0.12em] transition-colors ${
                          locale === l.value
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href={project.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow hidden rounded-full bg-primary px-5 py-2.5 text-xs font-black tracking-[0.14em] text-primary-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            {t.header.buy}
          </a>
          <button
            aria-label={t.header.toggleMenu}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground md:hidden"
          >
            {open ? <XIcon size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-bold tracking-[0.18em] text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                {locales.map((l) => (
                  <button
                    key={l.value}
                    type="button"
                    onClick={() => setLocale(l.value)}
                    className={`flex-1 rounded-lg border px-3 py-2 text-xs font-black tracking-[0.12em] transition-colors ${
                      locale === l.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:bg-secondary"
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
              <a
                href={project.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-black tracking-[0.14em] text-primary-foreground"
              >
                {t.header.buy}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
