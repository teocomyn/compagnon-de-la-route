import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden border-b border-white/10 bg-night-deep pt-24 md:min-h-[820px] md:pt-20">
      <div className="mx-auto grid min-h-[680px] max-w-screen-2xl md:min-h-[740px] md:grid-cols-12">
        <div className="relative z-10 order-2 flex items-center px-6 py-16 md:order-1 md:col-span-7 md:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-orange-300">
              Formation conducteur de voyageurs
            </p>

            <h1
              aria-label="Compagnon de la route, plus qu'un métier, une mission"
              className="mt-7 text-balance text-[clamp(2.8rem,4.8vw,5.25rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-white-90"
            >
              <span aria-hidden="true" className="block">
                Compagnon de la route,
              </span>
              <span aria-hidden="true" className="mt-2 block text-orange-400">
                plus qu&apos;un métier,
              </span>
              <span aria-hidden="true" className="block text-orange-400">
                une mission
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.65] text-white-60">
              Permis, sécurité, relation avec les passagers, prise de service : le
              parcours part de votre situation. La durée, le calendrier, le prix et le
              financement sont confirmés par écrit avant l&apos;inscription.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/formations/conducteur-voyageurs"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}
              >
                Voir la formation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Étudier mon projet
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl border-y border-white/10 sm:grid-cols-2">
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

        <figure className="relative order-1 min-h-[480px] border-t border-white/10 md:order-2 md:col-span-5 md:min-h-full md:border-l md:border-t-0">
          <div className="grid h-full min-h-[480px] grid-cols-2 grid-rows-[1fr_1fr_0.72fr] md:min-h-[740px] md:grid-cols-[34%_33%_33%] md:grid-rows-[60%_40%]">
            <div className="relative col-start-1 row-span-2 row-start-1 overflow-hidden border-r border-white/15 md:col-start-1 md:row-span-2">
              <Image
                src="/images/hero/route-nuit.jpg"
                alt="Route de montagne de nuit dessinée par les feux des véhicules"
                fill
                loading="eager"
                sizes="(max-width: 768px) 50vw, 15vw"
                className="object-cover object-center"
              />
              <span className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-night-deep/90 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-orange-300">
                01 · La route
              </span>
            </div>

            <div className="relative col-start-2 row-span-2 row-start-1 overflow-hidden md:col-span-2 md:col-start-2 md:row-span-1 md:border-b md:border-white/15">
              <Image
                src="/images/hero/autocar-montagne.jpeg"
                alt="Autocar stationné au pied de montagnes enneigées"
                fill
                loading="eager"
                sizes="(max-width: 768px) 50vw, 28vw"
                className="object-cover object-[42%_center]"
              />
              <span className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-night-deep/90 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-orange-300">
                02 · Voyager
              </span>
            </div>

            <div className="relative col-start-1 row-start-3 overflow-hidden border-r border-t border-white/15 md:col-start-2 md:row-start-2 md:border-t-0">
              <Image
                src="/images/hero/conducteur-bus.jpg"
                alt="Conducteur de bus souriant au poste de conduite"
                fill
                sizes="(max-width: 768px) 50vw, 14vw"
                className="object-cover object-center"
              />
              <span className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-night-deep/90 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-orange-300">
                03 · Le poste
              </span>
            </div>

            <div className="relative col-start-2 row-start-3 overflow-hidden border-t border-white/15 md:col-start-3 md:row-start-2 md:border-t-0">
              <Image
                src="/images/hero/bus-mouvement.jpeg"
                alt="Bus urbain bleu photographié en mouvement"
                fill
                sizes="(max-width: 768px) 50vw, 14vw"
                className="object-cover object-[55%_center]"
              />
              <span className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-night-deep/90 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-orange-300">
                04 · Le mouvement
              </span>
            </div>
          </div>

          <figcaption className="sr-only">
            La route, le voyage, le poste de conduite et le mouvement au cœur du métier.
          </figcaption>
          <div
            className="absolute left-0 top-0 hidden h-32 w-2 bg-orange-500 md:block"
            aria-hidden="true"
          />
        </figure>
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
