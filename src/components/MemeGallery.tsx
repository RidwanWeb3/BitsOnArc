import { motion } from "framer-motion";
import meme1 from "@/assets/bits-meme1.png";
import meme2 from "@/assets/bits-meme2.png";
import meme3 from "@/assets/bits-meme3.png";

const memes = [
  { src: meme1, alt: "$BITS will change your life meme", caption: "$BITS WILL CHANGE YOUR LIFE." },
  { src: meme2, alt: "Feeding the robot dog a USDC coin", caption: "FEED HIM USDC. HE HANDLES THE REST." },
  { src: meme3, alt: "Playing with the robot dog in front of an agentic economy whiteboard", caption: "THE AGENTIC ECONOMY, EXPLAINED." },
];

export default function MemeGallery() {
  return (
    <section id="memes" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-4xl font-black tracking-tighter sm:text-7xl">MEME VAULT</h2>
        <p className="mt-2 text-sm font-bold tracking-[0.2em] text-cyan">
          RIGHT-CLICK. SAVE. POST. REPEAT.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memes.map((m, i) => (
            <motion.figure
              key={m.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="panel group overflow-hidden"
            >
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="p-4 text-xs font-black tracking-[0.14em] text-muted-foreground">
                {m.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
