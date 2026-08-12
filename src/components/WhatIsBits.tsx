import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { project } from "@/config/project";

export default function WhatIsBits() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel p-8 sm:p-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-3 py-1 text-[11px] font-black tracking-[0.2em] text-cyan">
            <ShieldCheck size={13} /> VERIFIED FACTS
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tighter sm:text-6xl">WHAT IS BITS?</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground sm:text-xl">
            <p>Bits is OpenMind's robot dog.</p>
            <p>
              In a real Circle × OpenMind demonstration, Bits used USDC and an agentic commerce
              system to perform a machine-to-machine payment and recharge itself.
            </p>
            <p className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              A robot dog literally paid its own bill.
            </p>
          </div>
          <a
            href={project.circleProof}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-black tracking-[0.12em] text-primary-foreground transition-transform hover:scale-105"
          >
            VERIFY THE ORIGINAL POST <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
