import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Distinctions } from "@/components/sections/Distinctions";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { MarqueePartners } from "@/components/magicui/MarqueePartners";
import { Pedagogy } from "@/components/sections/Pedagogy";
import { PrereqImmersive } from "@/components/sections/PrereqImmersive";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBuilding } from "@/components/sections/TrustBuilding";
import { WhyBecome } from "@/components/sections/WhyBecome";
import { faqItems } from "@/lib/faq";
import { siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Formation Conducteur de voyageurs · ${siteName}`,
  description:
    "Formation certifiante de 30 jours (210h) pour devenir conducteur de bus et cars. Financée OPCO, CPF, France Travail. 98% de réussite, 2000+ stagiaires formés.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Formation Conducteur de voyageurs · ${siteName}`,
    description:
      "Formation certifiante de 30 jours (210h) pour devenir conducteur de bus et cars.",
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
      <MarqueePartners />
      <Statement />
      <WhyBecome />
      <PrereqImmersive />
      <Stats />
      <TrustBuilding />
      <Pedagogy />
      <ComparisonTable />
      <Distinctions />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
