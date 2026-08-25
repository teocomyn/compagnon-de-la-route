import { Play, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { OrangeGlow } from "@/components/magicui/OrangeGlow";
import { cn } from "@/lib/utils";

const glassItems = [
  { label: "L'exigence" },
  { label: "L'excellence" },
  { label: "L'engagement" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-[120px] md:pb-24">
      <OrangeGlow className="right-[-10%] top-[-8%] md:right-[5%]" />

      <div className="section-shell relative z-10 grid max-w-[1440px] grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <div className="max-w-2xl space-y-8 text-center md:text-left">
          <div>
            <Eyebrow className="flex items-center gap-2 text-orange-300">
              <span
                className="inline-flex h-2 w-2 animate-pulse rounded-full bg-orange-400"
                aria-hidden
              />
              Parcours conducteur · sécurité · service voyageurs
            </Eyebrow>
          </div>

          <h1 className="text-[clamp(2.75rem,6vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white-90">
            Formation Conducteur de voyageurs
          </h1>

          <p className="text-lg leading-relaxed text-white-60 md:text-[18px]">
            Préparez un projet professionnel solide dans le transport de voyageurs.
            Votre niveau, les prérequis, la durée, le calendrier et le financement
            sont vérifiés avant l&apos;inscription. L&apos;accompagnement vise l&apos;emploi,
            sans vous vendre une embauche garantie.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/formations/conducteur-voyageurs"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "group relative overflow-hidden",
              )}
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -inset-10 rounded-full bg-white/10 blur-2xl" />
              </span>
              <Play className="h-5 w-5" aria-hidden />
              Découvrir le parcours
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "justify-center",
              )}
            >
              Échanger sur mon projet
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-[4/5]">
            <Image
              src="/images/hero-bus.jpg"
              alt="Conductrice au volant d’un car, souriante, gilet haute visibilité"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-night/20" />

            <div className="absolute bottom-6 left-4 right-4 space-y-3 md:left-6">
              {glassItems.map((g) => (
                <div key={g.label}>
                  <GlassCard className="flex items-center gap-3 px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-mint-400/25 bg-mint-500/10">
                      <Trophy className="h-5 w-5 text-mint-400" aria-hidden />
                    </span>
                    <span className="text-[15px] font-medium text-white-90">
                      {g.label}
                    </span>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
