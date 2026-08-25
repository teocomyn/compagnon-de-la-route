import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HeroSlider } from "@/components/sections/HeroSlider";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-night-deep pt-16 md:min-h-[820px] md:pt-20">
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-screen-2xl md:min-h-[740px] md:grid-cols-12">
        <div className="relative z-20 flex items-end px-5 pb-24 pt-10 [@media(max-height:720px)]:pb-20 [@media(max-height:720px)]:pt-6 md:order-1 md:col-span-7 md:items-center md:px-10 md:py-16 lg:px-16 xl:px-20">
          <div className="w-full max-w-4xl">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-orange-300 md:text-[11px] md:tracking-[0.18em]">
              Formation conducteur de voyageurs
            </p>

            <h1
              aria-label="Compagnon de la route, plus qu'un métier, une mission"
              className="mt-4 max-w-[14ch] text-balance text-[clamp(2.05rem,8.8vw,2.75rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-white [@media(max-height:720px)]:text-[2.05rem] md:mt-7 md:max-w-none md:text-[clamp(2.8rem,4.8vw,5.25rem)] md:leading-[0.9] md:tracking-[-0.055em] md:text-white-90"
            >
              <span aria-hidden="true" className="block">
                Compagnon de la route,
              </span>
              <span aria-hidden="true" className="mt-2 block text-orange-300 md:text-orange-400">
                plus qu&apos;un métier,
              </span>
              <span aria-hidden="true" className="block text-orange-300 md:text-orange-400">
                une mission
              </span>
            </h1>

            <p className="mt-5 max-w-[34rem] text-sm leading-[1.55] text-white-75 [@media(max-height:720px)]:mt-4 md:hidden">
              Un parcours cadré selon votre situation, avec les modalités confirmées
              avant l&apos;inscription.
            </p>
            <p className="mt-8 hidden max-w-2xl text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.65] text-white-60 md:block">
              Permis, sécurité, relation avec les passagers, prise de service : le
              parcours part de votre situation. La durée, le calendrier, le prix et le
              financement sont confirmés par écrit avant l&apos;inscription.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 [@media(max-height:720px)]:mt-5 sm:flex-row sm:items-center md:mt-9 md:gap-3">
              <Link
                href="/formations/conducteur-voyageurs"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "group w-full justify-between sm:w-auto sm:justify-center",
                )}
              >
                Découvrir le parcours
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-full border-white/25 bg-night-deep/70 text-white [@media(max-height:720px)]:hidden sm:w-auto md:bg-transparent md:[@media(max-height:720px)]:inline-flex",
                )}
              >
                Étudier mon projet
              </Link>
            </div>

            <p className="mt-5 border-l-2 border-orange-400 pl-3 text-xs leading-5 text-white-75 [@media(max-height:720px)]:hidden md:hidden">
              <span className="font-semibold text-white">BOAZ · Qualiopi</span>
              <span className="block">Organisme de formation déclaré en Corse</span>
            </p>

            <div className="mt-12 hidden max-w-2xl border-y border-white/10 sm:grid-cols-2 md:grid">
              <p className="border-b border-white/10 py-4 pr-5 text-sm leading-6 text-white-60 sm:border-b-0 sm:border-r">
                <span className="block font-semibold text-white-90">BOAZ</span>
                Organisme de formation déclaré en Corse
              </p>
              <p className="py-4 text-sm leading-6 text-white-60 sm:pl-5">
                <span className="block font-semibold text-white-90">Qualiopi</span>
                Certification pour les actions de formation
              </p>
            </div>
          </div>
        </div>

        <HeroSlider />
      </div>

      <div className="border-t border-white/10 bg-orange-500 text-night-deep">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 overflow-hidden px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] md:px-10">
          <span>Sécurité à bord</span>
          <span className="hidden sm:inline">Maîtrise du véhicule</span>
          <span>Service aux voyageurs</span>
        </div>
      </div>
    </section>
  );
}
