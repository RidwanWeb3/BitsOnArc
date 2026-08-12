import { ArrowUpRight } from "lucide-react";
import { project } from "@/config/project";
import mascot from "@/assets/bits-mascot.png";
import { useTranslation } from "@/i18n";

export default function Community() {
  const { t } = useTranslation();
  return (
    <section id="community" className="relative overflow-hidden border-t border-border bg-deep py-24">
      <div aria-hidden className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <img src={mascot} alt="" aria-hidden className="animate-float mx-auto w-40 sm:w-52" />
        <h2 className="mt-6 text-4xl font-black tracking-tighter sm:text-6xl">{t.community.title}</h2>
        <p className="mt-3 text-muted-foreground sm:text-lg">{t.community.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={project.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-black tracking-[0.14em] text-primary-foreground transition-transform hover:scale-105"
          >
            {t.community.joinTelegram} <ArrowUpRight size={16} />
          </a>
          <a
            href={project.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan/50 bg-transparent px-9 py-4 text-sm font-black tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/10"
          >
            {t.community.followX} <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="mt-5 text-xs font-bold tracking-[0.2em] text-muted-foreground">
          {t.community.note}
        </p>
      </div>
    </section>
  );
}
