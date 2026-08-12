import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Calendar, Cpu } from "lucide-react";
import { project } from "@/config/project";
import XEmbed from "./XEmbed";
import banner from "@/assets/bits-banner.png";

function ProofPanel({
  handle,
  date,
  subject,
  url,
}: {
  handle: string;
  date: string;
  subject: string;
  url: string;
}) {
  return (
    <div className="panel flex h-full flex-col justify-between gap-6 p-6">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-3 py-1 text-[11px] font-black tracking-[0.2em] text-cyan">
          <BadgeCheck size={13} /> OFFICIAL PROOF
        </span>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground">POSTED BY</dt>
            <dd className="text-lg font-black">{handle}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-muted-foreground">
              <Calendar size={12} /> DATE
            </dt>
            <dd className="text-lg font-black">{date}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-muted-foreground">
              <Cpu size={12} /> SUBJECT
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
        VIEW ORIGINAL ON X <ArrowUpRight size={14} />
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
  return (
    <section id="history" className="relative border-y border-border bg-deep/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-4xl font-black tracking-tighter sm:text-7xl">$BITS HISTORY</h2>
        <p className="mt-2 text-sm font-bold tracking-[0.2em] text-cyan sm:text-base">
          FROM ROBOT DOG TO INTERNET MEME.
        </p>

        <ol className="mt-14 space-y-16 border-l border-border/70 pl-4 sm:pl-6">
          <TimelineItem index="01" tag="HISTORY — EVENT 01" title="THE AUTONOMOUS PAYMENT IDEA">
            <p className="max-w-3xl text-muted-foreground sm:text-lg">
              Circle had already been building infrastructure for autonomous USDC payments, laying
              the groundwork for machines and AI agents to transact programmatically. This is
              background context, not a claim about Bits specifically.
            </p>
            <a
              href={project.circleDevDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-cyan hover:underline"
            >
              CIRCLE DEVELOPER MATERIAL <ArrowUpRight size={14} />
            </a>
          </TimelineItem>

          <TimelineItem index="02" tag="HISTORY — EVENT 02 · FEBRUARY 17, 2026" title="THE DOG ARRIVED.">
            <p className="max-w-3xl text-muted-foreground sm:text-lg">
              Circle and OpenMind demonstrated autonomous AI transactions onchain using Bits,
              OpenMind's robot dog.
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <XEmbed
                url={project.circleProof}
                label="Circle on X — Bits × OpenMind autonomous USDC payment"
              />
              <ProofPanel
                handle="@circle"
                date="February 17, 2026"
                subject="Bits × OpenMind × USDC"
                url={project.circleProof}
              />
            </div>
          </TimelineItem>

          <TimelineItem index="03" tag="HISTORY — EVENT 03" title="OPENMIND CONFIRMS IT">
            <p className="max-w-3xl text-muted-foreground sm:text-lg">
              OpenMind also published its own post about the collaboration and autonomous robot
              payments — independent confirmation from both sides.
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <XEmbed
                url={project.openMindProof}
                label="OpenMind on X — autonomous robot payments"
              />
              <ProofPanel
                handle="@openmind_agi"
                date="February 17, 2026"
                subject="Autonomous robot payments"
                url={project.openMindProof}
              />
            </div>
          </TimelineItem>

          <TimelineItem index="04" tag="HISTORY — EVENT 04" title="THE MEME WAS BORN.">
            <p className="max-w-3xl text-muted-foreground sm:text-lg">
              Crypto Twitter did what it always does. $BITS — an independent community meme — turned
              a self-charging robot dog into the internet's favourite financial role model.
            </p>
            <img
              src={banner}
              alt="$BITS meme banner"
              loading="lazy"
              className="mt-6 w-full rounded-2xl border border-border object-cover"
            />
          </TimelineItem>
        </ol>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="panel p-6">
            <h4 className="text-xs font-black tracking-[0.22em] text-cyan">VERIFIED FACTS</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>· Bits is an OpenMind robot dog.</li>
              <li>· Circle and OpenMind collaborated on autonomous AI transactions.</li>
              <li>· Circle's official X post explicitly mentions Bits.</li>
              <li>· Bits used USDC.</li>
              <li>· The demonstration involved machine-to-machine nanopayments.</li>
              <li>· The payment was used to recharge Bits.</li>
            </ul>
          </div>
          <div className="panel p-6">
            <h4 className="text-xs font-black tracking-[0.22em] text-muted-foreground">THE MEME</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>· $BITS</li>
              <li>· "The dog that pays its own bills."</li>
              <li>· "I don't bark. I pay."</li>
              <li>· "No owner. No leash. Just USDC."</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
