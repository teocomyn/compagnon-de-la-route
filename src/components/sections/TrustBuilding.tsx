import { Check } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";
import { siteName } from "@/lib/constants";

const points = [
  "Parcours co-construits avec les entreprises et les GEIQ Transport & Mobilité",
  "Méthodes actives et innovantes, ancrées dans la réalité opérationnelle",
  "Programme reconnu et financé (France Travail, OPCO, branches professionnelles)",
  "Accompagnement individualisé et suivi après la formation pour sécuriser l'intégration",
];

export function TrustBuilding() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.625rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white-90">
              Exigence, excellence et engagement
            </h2>
            <p className="text-lg leading-relaxed text-white-60">
              Le cabinet BOAZ et{" "}
              <span className="text-white-90">{siteName}</span> refusent la
              complaisance : nous formons des professionnels fiables pour les passagers,
              les entreprises et les territoires. Chaque étape du parcours vous rend
              autonome et crédible face aux recruteurs.
            </p>
            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-white-75">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/images/trust-formateur.jpg"
              alt="Intérieur d’un véhicule et route, ambiance conduite professionnelle"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-night/40 via-transparent to-night/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
