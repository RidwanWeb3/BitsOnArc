import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MemeStatement from "@/components/MemeStatement";
import WhatIsBits from "@/components/WhatIsBits";
import BitsHistory from "@/components/BitsHistory";
import BitsTerminal from "@/components/BitsTerminal";
import MemeGallery from "@/components/MemeGallery";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const TITLE = "$BITS — The Dog That Pays Its Own Bills";
const DESC =
  "$BITS is the community meme of Bits, OpenMind's robot dog that paid for its own charge in USDC. No owner. No leash. Just USDC.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
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
  }),
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
        <Community />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
