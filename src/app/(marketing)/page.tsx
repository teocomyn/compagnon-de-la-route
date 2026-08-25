import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Pedagogy } from "@/components/sections/Pedagogy";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { TrustBuilding } from "@/components/sections/TrustBuilding";
import { WhyBecome } from "@/components/sections/WhyBecome";
import { faqItems } from "@/lib/faq";
import { siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Formation Conducteur de voyageurs · ${siteName}`,
  description:
    "Construisez votre projet de conducteur de voyageurs avec un positionnement, un parcours formalisé et un accompagnement vers l’emploi.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Formation Conducteur de voyageurs · ${siteName}`,
    description:
      "Un parcours exigeant et humain pour préparer le métier de conducteur de voyageurs.",
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
    name: `Formation Conducteur de voyageurs · ${siteName}`,
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
      <Statement />
      <WhyBecome />
      <Stats />
      <TrustBuilding />
      <Pedagogy />
      <FAQ />
      <FinalCTA />
    </>
  );
}
