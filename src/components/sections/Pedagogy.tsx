import { BookOpen, Rocket, UserRound } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const items = [
  {
    title: "Apprentissage pratique",
    text: "Des mises en situation et exercices reliés aux réalités du métier",
    icon: BookOpen,
  },
  {
    title: "Préparation à l’insertion",
    text: "Compréhension du métier, posture professionnelle et préparation au recrutement",
    icon: Rocket,
  },
  {
    title: "Accompagnement individuel",
    text: "Un suivi ajusté au positionnement et aux besoins identifiés",
    icon: UserRound,
  },
];

export function Pedagogy() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <SectionHeader
          eyebrow="Méthode"
          title="Pédagogie axée résultats"
          lead="Une progression claire : technique, relation, responsabilité."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                  <it.icon className="h-5 w-5 text-orange-300" aria-hidden />
                </div>
                <h3 className="mb-2 text-[20px] font-semibold tracking-[-0.01em]">
                  {it.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white-60">{it.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
