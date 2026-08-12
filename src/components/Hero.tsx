import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy } from "lucide-react";
import banner from "@/assets/bits-banner.png";
import mascot from "@/assets/bits-mascot.png";
import { project, isCaLive } from "@/config/project";
import { toast } from "sonner";

const CLICK_LINES = [
  "PAYMENT CONFIRMED.",
  "BITS HAS PAID THE BILL.",
  "NO HUMAN REQUIRED.",
  "GOOD BOY.",
  "USDC SENT.",
  "HE'S GOT HIS OWN WALLET.",
];

function Coins() {
  const coins = [
    { left: "6%", top: "18%", d: 0, s: 46 },
    { left: "18%", top: "68%", d: 1.2, s: 32 },
    { left: "82%", top: "22%", d: 0.6, s: 40 },
    { left: "91%", top: "62%", d: 1.8, s: 28 },
    { left: "70%", top: "80%", d: 2.4, s: 34 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {coins.map((c, i) => (
        <div
          key={i}
          className="animate-float absolute grid place-items-center rounded-full border border-cyan/40 bg-primary/20 font-black text-cyan"
          style={{
            left: c.left,
            top: c.top,
            width: c.s,
            height: c.s,
            animationDelay: `${c.d}s`,
            fontSize: c.s / 2.4,
          }}
        >
          $
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [bubble, setBubble] = useState<string | null>(null);

  const onCopyCa = useCallback(() => {
    if (!isCaLive) {
      toast("CA is coming soon, good boy 🐕");
      return;
    }
    navigator.clipboard.writeText(project.contractAddress);
    toast("Contract address copied ✓");
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20">
      <div aria-hidden className="grid-bg absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
      />
      <Coins />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-border shadow-[var(--glow-blue)]"
        >
          <img
            src={banner}
            alt="$BITS — robot dog paying for its own charging with USDC"
            className="aspect-[16/9] w-full object-cover object-[62%_center] sm:aspect-[3/1] sm:object-center"
            fetchPriority="high"
          />
        </motion.div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-glow text-6xl font-black leading-[0.9] tracking-tighter sm:text-8xl"
            >
              <span className="gradient-text">$</span>BITS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-2xl font-black tracking-tight sm:text-4xl"
            >
              THE DOG THAT PAYS ITS OWN BILLS.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-3 text-sm font-bold tracking-[0.2em] text-cyan sm:text-base"
            >
              I DON'T BARK. I PAY WITH USDC.
            </motion.p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={project.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-glow inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-black tracking-[0.14em] text-primary-foreground transition-transform hover:scale-105"
              >
                BUY $BITS <ArrowUpRight size={16} />
              </a>
              <button
                onClick={onCopyCa}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/50 px-8 py-4 text-sm font-black tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/10"
              >
                <Copy size={15} /> COPY CA · {project.contractAddress}
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <button
              type="button"
              className="group relative block w-full cursor-pointer"
              onMouseEnter={() => setBubble("GOOD BOY. GOOD PAYMENT.")}
              onMouseLeave={() => setBubble(null)}
              onClick={() =>
                setBubble(CLICK_LINES[Math.floor(Math.random() * CLICK_LINES.length)]!)
              }
              aria-label="Pet Bits"
            >
              <img
                src={mascot}
                alt="$BITS robot dog mascot holding a USDC payment phone"
                className="animate-float w-full drop-shadow-[0_0_40px_oklch(0.58_0.24_260/0.5)] transition-transform group-hover:scale-105"
              />
              {bubble && (
                <motion.span
                  key={bubble}
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan/50 bg-deep/90 px-4 py-2 text-xs font-black tracking-wider text-cyan"
                >
                  {bubble}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-border bg-deep/60 py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap text-sm font-black tracking-[0.2em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>NO OWNER.</span><span className="text-cyan">NO LEASH.</span>
              <span>JUST USDC.</span><span className="text-cyan">GOOD BOY. GOOD PAYMENT.</span>
              <span>I DON'T BARK. I PAY.</span>
              <span className="text-cyan">REAL DOGS NEED FOOD. BITS NEEDS USDC.</span>
              <span>HE DOESN'T ASK FOR MONEY. HE HAS A WALLET.</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
