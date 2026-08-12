import { AlertTriangle } from "lucide-react";
import { project } from "@/config/project";
import logo from "@/assets/bits-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="panel flex gap-4 p-6">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-chart-4" />
          <div className="min-w-0 text-sm text-muted-foreground">
            <p className="font-black tracking-[0.14em] text-foreground">DISCLAIMER</p>
            <p className="mt-2">
              $BITS is an independent community meme token. It is not affiliated with, endorsed by,
              or officially connected to Circle, OpenMind, or any related entity. All referenced
              events and posts belong to their original owners and are linked purely as public
              context. $BITS has no utility, no roadmap and no promise of returns — it is a meme.
              Crypto assets are volatile and you can lose everything. Nothing here is financial
              advice. Do your own research.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="" aria-hidden className="h-10 w-10 shrink-0 object-contain" />
            <p className="truncate text-xs font-bold tracking-[0.18em] text-muted-foreground">
              $BITS · {new Date().getFullYear()}
            </p>
          </div>
          <a
            href={project.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-black tracking-[0.18em] text-cyan hover:underline"
          >
            X / TWITTER
          </a>
        </div>
      </div>
    </footer>
  );
}
