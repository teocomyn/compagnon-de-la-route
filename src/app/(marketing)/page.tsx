import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { Pathways } from "@/components/sections/Pathways";
import { Pedagogy } from "@/components/sections/Pedagogy";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { TrustBuilding } from "@/components/sections/TrustBuilding";
import { CdrBentoSection } from "@/components/ui/cdr-bento-section";
import { faqItems } from "@/lib/faq";
import { siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations transport de voyageurs",
  description:
    "Compagnon de la Route, label transport porté par BOAZ : découvrez les parcours conducteur de voyageurs et exploitant-régulateur.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Formations transport de voyageurs · ${siteName}`,
    description:
      "Deux métiers complémentaires, avec le statut et les modalités de chaque parcours présentés sans promesse non confirmée.",
    url: "/",
    type: "website",
  },
};

function FaqJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function WebPageJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Formations transport de voyageurs · ${siteName}`,
    url: `${siteUrl}/`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd />
      <FaqJsonLd />
      <Hero />
      <PartnerMarquee />
      <Pathways />
      <Statement />
      <CdrBentoSection />
      <Stats />
      <TrustBuilding />
      <Pedagogy />
      <FAQ />
      <FinalCTA />
    </>
  );
}
