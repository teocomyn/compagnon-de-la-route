import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden border-b border-white/10 bg-night-deep pt-24 md:min-h-[820px] md:pt-20">
      <div className="mx-auto grid min-h-[680px] max-w-screen-2xl md:min-h-[740px] md:grid-cols-12">
        <div className="relative z-10 flex items-center px-6 py-16 md:col-span-7 md:px-10 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-orange-300">
              Formation conducteur de voyageurs
            </p>

            <h1 className="mt-7 text-balance text-[clamp(3rem,5.6vw,6.1rem)] font-extrabold leading-[0.9] tracking-[-0.055em] text-white-90">
              Conduire des voyageurs,
              <span className="mt-2 block text-orange-400">ça se prépare.</span>
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

        <figure className="relative min-h-[520px] border-t border-white/10 md:col-span-5 md:min-h-full md:border-l md:border-t-0">
          <Image
            src="/images/journal/conductrice-bus-poste.jpg"
            alt="Conductrice de bus installée à son poste de conduite"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-[52%_center]"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-night-deep px-6 py-5 md:px-8">
            <figcaption className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white-60">
              <span>Au poste</span>
              <span className="text-orange-300">Transport de voyageurs</span>
            </figcaption>
          </div>
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
