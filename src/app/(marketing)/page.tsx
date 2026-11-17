import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GuidesShortcut } from "@/components/sections/GuidesShortcut";
import { Hero } from "@/components/sections/Hero";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { Pathways } from "@/components/sections/Pathways";
import { Pedagogy } from "@/components/sections/Pedagogy";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { TrustBuilding } from "@/components/sections/TrustBuilding";
import { JsonLd } from "@/components/seo/JsonLd";
import { CdrBentoSection } from "@/components/ui/cdr-bento-section";
import { faqItems } from "@/lib/faq";
import { faqNode, schemaIds, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const homeTitle = "Compagnon de la Route, label transport porté par BOAZ";
const homeDescription =
  "Compagnon de la Route, label transport porté par BOAZ : les parcours de formation conducteur de voyageurs (bus et car) et exploitant-régulateur.";

export const metadata: Metadata = buildMetadata({
  title: homeTitle,
  absoluteTitle: true,
  description: homeDescription,
  ogDescription:
    "Deux métiers complémentaires, avec le statut et les modalités de chaque parcours présentés sans promesse non confirmée.",
  path: "/",
});

function HomeJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          webPageNode({
            path: "/",
            name: homeTitle,
            description: homeDescription,
            extra: { about: { "@id": schemaIds.organization } },
          }),
          faqNode(
            "/",
            faqItems.map((item) => ({ question: item.q, answer: item.a })),
          ),
        ],
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <PartnerMarquee />
      <Pathways />
      <Statement />
      <CdrBentoSection />
      <Stats />
      <TrustBuilding />
      <Pedagogy />
      <FAQ />
      <GuidesShortcut />
      <FinalCTA />
    </>
  );
}
