import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Stats } from "@/components/sections/Stats";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/lib/testimonials";
import type { Metadata } from "next";
import { TestimonialCard } from "./TestimonialCard";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Témoignages de stagiaires : exigence, terrain, insertion professionnelle. Compagnon de la Route.",
  alternates: { canonical: "/temoignages" },
};

function ReviewsJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Compagnon de la Route",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(testimonials.length),
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function TemoignagesPage() {
  return (
    <>
      <ReviewsJsonLd />
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Témoignages", href: "/temoignages" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <section className="section-shell pb-16 pt-3 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-[980px]">
          <Eyebrow>Ils ont choisi la route</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Nos témoignages formation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white-60">
            Découvrez comment la formation Compagnon de la Route transforme des
            parcours et donne un nouvel élan professionnel.
          </p>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </section>

      <Stats />

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium italic leading-[1.35] text-white-75">
            Chaque histoire compte. Derrière chaque volant, il y a un parcours, une
            ambition, un nouveau départ.
          </p>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-white/10 bg-forest-surface/40 p-6 text-center sm:p-10">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">
            Rejoignez-les
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white-60">
            Prenez rendez-vous : un échange vaut mieux qu’une promesse.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
