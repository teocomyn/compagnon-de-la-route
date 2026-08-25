import {
  Compass,
  MapPin,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Une utilité sociale reconnue",
    icon: Users,
  },
  {
    title: "Acteur de votre territoire",
    icon: MapPin,
  },
  {
    title: "Un secteur qui recrute",
    icon: TrendingUp,
  },
  {
    title: "Un véritable projet de vie",
    icon: Sparkles,
  },
  {
    title: "Mobilité et liberté d'action",
    icon: Compass,
  },
  {
    title: "Stabilité et sécurité de l'emploi",
    icon: Shield,
  },
];

export function WhyBecome() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <SectionHeader
          eyebrow="Raisons d'y croire"
          title="Pourquoi devenir compagnon de la route ?"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={cn(
                "group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_24px_70px_-30px_rgba(242,107,42,0.22)]",
              )}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-mint-400/25 bg-mint-500/10">
                <f.icon className="h-6 w-6 text-mint-400" aria-hidden />
              </div>
              <h3 className="text-[20px] font-semibold leading-snug tracking-[-0.01em] text-white-90">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
