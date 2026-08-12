import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Calendar, Cpu } from "lucide-react";
import { project } from "@/config/project";
import XEmbed from "./XEmbed";
import banner from "@/assets/bits-banner.png";
import { useTranslation } from "@/i18n";

function ProofPanel({
  handle,
  date,
  subject,
  url,
  label,
}: {
  handle: string;
  date: string;
  subject: string;
  url: string;
  label: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="panel flex h-full flex-col justify-between gap-6 p-6">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-3 py-1 text-[11px] font-black tracking-[0.2em] text-cyan">
          <BadgeCheck size={13} /> {t.history.proof.badge}
        </span>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground">
              {t.history.proof.postedBy}
            </dt>
            <dd className="text-lg font-black">{handle}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-muted-foreground">
              <Calendar size={12} /> {t.history.proof.date}
            </dt>
            <dd className="text-lg font-black">{date}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-muted-foreground">
              <Cpu size={12} /> {t.history.proof.subject}
            </dt>
            <dd className="text-lg font-black">{subject}</dd>
          </div>
        </dl>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/50 px-6 py-3 text-xs font-black tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/10"
      >
        {label} <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

function TimelineItem({
  index,
  tag,
  title,
  children,
}: {
  index: string;
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="relative pl-10 sm:pl-14"
    >
      <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-cyan/50 bg-deep text-xs font-black text-cyan sm:h-11 sm:w-11 sm:text-sm">
        {index}
      </span>
      <p className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground">{tag}</p>
      <h3 className="mt-1 text-2xl font-black tracking-tight sm:text-4xl">{title}</h3>
      <div className="mt-4">{children}</div>
    </motion.li>
  );
}

export default function BitsHistory() {
  const { t } = useTranslation();
  const events = t.history.events;
  return (
    <section id="history" className="relative border-y border-border bg-deep/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-4xl font-black tracking-tighter sm:text-7xl">{t.history.title}</h2>
        <p className="mt-2 text-sm font-bold tracking-[0.2em] text-cyan sm:text-base">
          {t.history.subtitle}
        </p>

        <ol className="mt-14 space-y-16 border-l border-border/70 pl-4 sm:pl-6">
          {events[0] && (
            <TimelineItem index={events[0].index} tag={events[0].tag} title={events[0].title}>
              <p className="max-w-3xl text-muted-foreground sm:text-lg">{events[0].body}</p>
              {events[0].linkLabel && (
                <a
                  href={project.circleDevDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-cyan hover:underline"
                >
                  {events[0].linkLabel} <ArrowUpRight size={14} />
                </a>
              )}
            </TimelineItem>
          )}

          {events[1] && (
            <TimelineItem index={events[1].index} tag={events[1].tag} title={events[1].title}>
              <p className="max-w-3xl text-muted-foreground sm:text-lg">{events[1].body}</p>
              <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <XEmbed url={project.circleProof} label={t.history.circleProofLabel} />
                <ProofPanel
                  handle="@circle"
                  date="February 17, 2026"
                  subject="Bits × OpenMind × USDC"
                  url={project.circleProof}
                  label={t.history.proof.viewOriginal}
                />
              </div>
            </TimelineItem>
          )}

          {events[2] && (
            <TimelineItem index={events[2].index} tag={events[2].tag} title={events[2].title}>
              <p className="max-w-3xl text-muted-foreground sm:text-lg">{events[2].body}</p>
              <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <XEmbed url={project.openMindProof} label={t.history.openMindProofLabel} />
                <ProofPanel
                  handle="@openmind_agi"
                  date="February 17, 2026"
                  subject="Autonomous robot payments"
                  url={project.openMindProof}
                  label={t.history.proof.viewOriginal}
                />
              </div>
            </TimelineItem>
          )}

          {events[3] && (
            <TimelineItem index={events[3].index} tag={events[3].tag} title={events[3].title}>
              <p className="max-w-3xl text-muted-foreground sm:text-lg">{events[3].body}</p>
              <img
                src={banner}
                alt={t.history.bannerAlt}
                loading="lazy"
                className="mt-6 w-full rounded-2xl border border-border object-cover"
              />
            </TimelineItem>
          )}
        </ol>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="panel p-6">
            <h4 className="text-xs font-black tracking-[0.22em] text-cyan">{t.history.verifiedTitle}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.history.verifiedList.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
          <div className="panel p-6">
            <h4 className="text-xs font-black tracking-[0.22em] text-muted-foreground">
              {t.history.memeTitle}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.history.memeList.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
