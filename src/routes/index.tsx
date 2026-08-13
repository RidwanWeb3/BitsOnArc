import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MemeStatement from "@/components/MemeStatement";
import WhatIsBits from "@/components/WhatIsBits";
import BitsHistory from "@/components/BitsHistory";
import BitsTerminal from "@/components/BitsTerminal";
import MemeGallery from "@/components/MemeGallery";
import FeeStructure from "@/components/FeeStructure";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n";
import { en, zh, type Locale } from "@/i18n/translations";

function resolveInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("bits-locale");
  if (stored === "en" || stored === "zh") return stored;
  const nav = window.navigator?.language ?? "";
  if (nav.toLowerCase().startsWith("zh")) return "zh";
  return "en";
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const loc = resolveInitialLocale();
    const t = (loc === "zh" ? zh : en);
    const TITLE = t.page.title;
    const DESC = t.page.description;
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESC },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "/" },
        { property: "og:image", content: "/og-banner.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "/og-banner.png" },
      ],
      links: [{ rel: "canonical", href: "/" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "$BITS",
            description: DESC,
          }),
        },
      ],
    };
  },
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MemeStatement />
        <WhatIsBits />
        <BitsHistory />
        <BitsTerminal />
        <MemeGallery />
        <FeeStructure />
        <Community />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
