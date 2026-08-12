import { project } from "@/config/project";
import logo from "@/assets/bits-logo.png";
import { useTranslation, formatYear } from "@/i18n";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="" aria-hidden className="h-10 w-10 shrink-0 object-contain" />
            <p className="truncate text-xs font-bold tracking-[0.18em] text-muted-foreground">
              {formatYear(t.footer.rights)}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={project.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-black tracking-[0.18em] text-cyan hover:underline"
            >
              {t.footer.telegram}
            </a>
            <a
              href={project.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-black tracking-[0.18em] text-cyan hover:underline"
            >
              {t.footer.x}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
