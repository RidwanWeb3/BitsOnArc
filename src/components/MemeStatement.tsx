import { motion } from "framer-motion";
import mascot from "@/assets/bits-mascot.png";
import { useTranslation } from "@/i18n";

export default function MemeStatement() {
  const { t } = useTranslation();
  const line1Parts = t.memeStatement.line1.split("\n");
  return (
    <section className="relative overflow-hidden bg-deep py-24 sm:py-32">
      <img
        src={mascot}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 w-[520px] max-w-[70%] -translate-y-1/2 opacity-10"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black leading-[0.88] tracking-tighter sm:text-8xl"
        >
          {line1Parts.map((p, i) => (
            <span key={i}>
              {p}
              {i < line1Parts.length - 1 && <br />}
            </span>
          ))}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-glow mt-3 text-5xl font-black leading-[0.88] tracking-tighter text-cyan sm:text-8xl"
        >
          {t.memeStatement.line2}
        </motion.h2>

        <div className="mt-14 flex flex-wrap gap-4 text-3xl font-black tracking-tighter sm:text-5xl">
          {t.memeStatement.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i }}
              className={i === 2 ? "gradient-text" : ""}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
