import { useEffect, useState } from "react";
import { Menu, X as XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/bits-logo.png";
import { project } from "@/config/project";

const links = [
  { label: "HOME", href: "#home" },
  { label: "HISTORY", href: "#history" },
  { label: "MEMES", href: "#memes" },
  { label: "COMMUNITY", href: "#community" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a
            href={project.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow hidden rounded-full bg-primary px-5 py-2.5 text-xs font-black tracking-[0.14em] text-primary-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            BUY $BITS
          </a>
          <button
            aria-label="Toggle menu"
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
              <a
                href={project.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-black tracking-[0.14em] text-primary-foreground"
              >
                BUY $BITS
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
