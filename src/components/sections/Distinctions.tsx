import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";

const items = [
  {
    year: "2025",
    title: 'Lauréat "Meilleure Formation Mobilité"',
    issuer: "Observatoire National du Transport",
  },
  {
    year: "2024",
    title: "Prix de l'Engagement Social",
    issuer: "Fondation Mobilité Inclusive",
  },
  {
    year: "2024",
    title: "Trophée de l'Innovation Pédagogique",
    issuer: "France Travail",
  },
  {
    year: "2023",
    title: "Certification Qualité Qualiopi",
    issuer: "Qualiopi",
  },
];

export function Distinctions() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <SectionHeader
          eyebrow="Reconnaissance"
          title="Distinctions & engagements"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <ScrollReveal key={it.title}>
              <div className="flex gap-6 rounded-xl border border-white/10 bg-white/[0.02] p-8">
                <div className="font-mono text-[48px] font-semibold leading-none tracking-[-0.04em] text-white-25">
                  {it.year}
                </div>
                <div className="space-y-2">
                  <p className="text-[18px] font-semibold leading-snug text-white-90">
                    {it.title}
                  </p>
                  <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-white-45">
                    {it.issuer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
