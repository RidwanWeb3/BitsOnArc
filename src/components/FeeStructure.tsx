import { useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, DollarSign, Flame, Wallet } from "lucide-react";
import { project } from "@/config/project";
import { toast } from "sonner";
import { useTranslation } from "@/i18n";

export default function FeeStructure() {
  const { t } = useTranslation();

  const onCopyWallet = useCallback(() => {
    navigator.clipboard.writeText(project.feeRecipient);
    toast(t.feeStructure.walletCopied);
  }, [t]);

  return (
    <section id="tokenomics" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-3 py-1 text-[11px] font-black tracking-[0.2em] text-cyan"
          >
            <Wallet size={13} /> {t.feeStructure.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-4xl font-black tracking-tighter sm:text-6xl"
          >
            {t.feeStructure.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base font-bold tracking-wide text-muted-foreground sm:text-lg"
          >
            {t.feeStructure.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="panel mt-12 p-6 sm:p-10"
        >
          <div className="grid items-center gap-4 sm:grid-cols-[auto_1fr_auto]">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan/10 text-cyan">
                <Wallet size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan">
                  {t.feeStructure.walletLabel}
                </p>
                <p className="mt-1 truncate font-mono text-sm font-bold text-foreground sm:text-base">
                  {project.feeRecipient}
                </p>
              </div>
            </div>
            <div />
            <button
              type="button"
              onClick={onCopyWallet}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan/50 px-6 py-3 text-xs font-black tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/10 sm:w-auto"
            >
              <Copy size={15} /> {t.feeStructure.walletCopy}
            </button>
          </div>
        </motion.div>

        <h3 className="mt-14 text-center text-xs font-black uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
          {t.feeStructure.allocationTitle}
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="panel group relative overflow-hidden p-6 sm:p-8 transition-transform hover:-translate-y-1"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-[90px] transition-opacity group-hover:opacity-90"
            />
            <div className="relative flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan/30 bg-primary/10 text-primary">
                <DollarSign size={26} />
              </div>
              <div className="min-w-0">
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-3 py-1 text-[11px] font-black tracking-[0.18em] text-cyan">
                  {project.feeMarketingAsset}
                </p>
                <h4 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                  {t.feeStructure.marketing}
                </h4>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground sm:text-base">
                  {t.feeStructure.marketingDesc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="panel group relative overflow-hidden p-6 sm:p-8 transition-transform hover:-translate-y-1"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-destructive/25 blur-[90px] transition-opacity group-hover:opacity-90"
            />
            <div className="relative flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-destructive/30 bg-destructive/10 text-destructive">
                <Flame size={26} />
              </div>
              <div className="min-w-0">
                <p className="inline-flex items-center gap-2 rounded-full border border-destructive/40 px-3 py-1 text-[11px] font-black tracking-[0.18em] text-destructive">
                  {project.feeBurnAsset}
                </p>
                <h4 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                  {t.feeStructure.burn}
                </h4>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground sm:text-base">
                  {t.feeStructure.burnDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
