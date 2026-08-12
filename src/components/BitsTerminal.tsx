import { useEffect, useRef, useState } from "react";
import { useTranslation, type Translations } from "@/i18n";

type TerminalLines = Translations["terminal"]["lines"];

export default function BitsTerminal() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const term = t.terminal as Translations["terminal"];
  const LINES: TerminalLines = term.lines;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e?.isIntersecting && setActive(true),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    if (count >= LINES.length) {
      const r = setTimeout(() => setCount(0), 3500);
      return () => clearTimeout(r);
    }
    const timer = setTimeout(() => setCount((c) => c + 1), 620);
    return () => clearTimeout(timer);
  }, [active, count, LINES.length]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-4xl font-black tracking-tighter sm:text-6xl">
          {term.title ? `${term.title} ` : ""}
          <span className="gradient-text">{term.titleAccent}</span>
          {" "}{term.titleSuffix}
        </h2>
        <p className="mt-2 text-center text-xs font-bold tracking-[0.22em] text-muted-foreground">
          {term.subtitle}
        </p>

        <div
          ref={ref}
          className="panel glow-ring relative mt-8 overflow-hidden font-mono text-sm sm:text-base"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-chart-4/80" />
            <span className="h-3 w-3 rounded-full bg-success/80" />
            <span className="ml-2 text-[11px] tracking-[0.2em] text-muted-foreground">
              bits@openmind:~
            </span>
          </div>
          <div className="min-h-[340px] space-y-1.5 p-5">
            {LINES.slice(0, count).map((l, i) => (
              <p key={i} className={l.c}>
                {l.t}
              </p>
            ))}
            <span className="caret inline-block h-4 w-2 bg-cyan align-middle" />
          </div>
        </div>
      </div>
    </section>
  );
}
