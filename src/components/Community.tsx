import { ArrowUpRight } from "lucide-react";
import { project } from "@/config/project";
import mascot from "@/assets/bits-mascot.png";

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden border-t border-border bg-deep py-24">
      <div aria-hidden className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <img src={mascot} alt="" aria-hidden className="animate-float mx-auto w-40 sm:w-52" />
        <h2 className="mt-6 text-4xl font-black tracking-tighter sm:text-6xl">JOIN THE PACK</h2>
        <p className="mt-3 text-muted-foreground sm:text-lg">
          One place only. Everything $BITS happens on X.
        </p>
        <a
          href={project.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-glow mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-black tracking-[0.14em] text-primary-foreground transition-transform hover:scale-105"
        >
          FOLLOW $BITS ON X <ArrowUpRight size={16} />
        </a>
        <p className="mt-5 text-xs font-bold tracking-[0.2em] text-muted-foreground">
          NO TELEGRAM. NO DISCORD. JUST X.
        </p>
      </div>
    </section>
  );
}
