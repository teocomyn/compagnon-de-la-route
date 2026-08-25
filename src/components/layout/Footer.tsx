import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { buttonVariants } from "@/components/ui/Button";
import { FooterReveal } from "@/components/ui/footer-section";
import {
  footerAbout,
  footerFormations,
  footerGuides,
  footerLegal,
  organizationInfo,
  siteName,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-10 px-2 pt-16 text-white sm:px-3 md:pt-24">
      <div className="relative mx-auto max-w-screen-2xl overflow-hidden rounded-t-[2rem] border-x border-t border-white/10 bg-night-deep shadow-2xl shadow-black/20 md:rounded-t-[3rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-orange-500/15 via-orange-500/5 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-orange-300/80 shadow-lg shadow-orange-500/60"
        />

        <div className="section-shell relative">
          <FooterReveal className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12 md:py-14">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-orange-300">
                <span className="cdr-pulse-dot h-2 w-2 rounded-full bg-orange-500" />
                Une nouvelle route professionnelle
              </p>
              <h2 className="mt-5 text-[clamp(2.15rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white-90">
                Et si votre prochaine étape commençait ici&nbsp;?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white-60 md:text-base">
                Échangeons sur votre projet et sur les modalités du parcours avant toute
                inscription.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                className={buttonVariants({ size: "lg", variant: "primary" })}
                href="/contact"
              >
                Parler de mon projet
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                className={buttonVariants({ size: "lg", variant: "secondary" })}
                href="/formations/conducteur-voyageurs"
              >
                Voir le parcours
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </FooterReveal>

          <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.45fr)] lg:gap-16 lg:py-16">
            <FooterReveal className="max-w-lg" delay={0.05}>
              <Link
                aria-label="Retour à l’accueil de Compagnon de la Route"
                className="group inline-flex items-center gap-4"
                href="/"
              >
                <span className="rounded-2xl border border-white/10 bg-white/[0.045] p-2 transition-colors duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                  <BrandLogo size="footer" />
                </span>
                <span>
                  <span className="block text-lg font-semibold tracking-[-0.025em] text-white-90">
                    Compagnon de la Route
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-orange-300">
                    Formation · Mobilité · Territoire
                  </span>
                </span>
              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-white-60">
                Une préparation exigeante et humaine aux métiers du transport de voyageurs,
                avec des modalités confirmées avant inscription.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/20 bg-mint-400/[0.07] px-3 py-2 text-xs text-mint-300">
                  <CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5" />
                  Qualiopi · actions de formation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white-60">
                  <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-orange-300" />
                  Casaglione · Corse
                </span>
              </div>

              <p className="mt-7 max-w-md text-xs leading-6 text-white-45">
                {organizationInfo.legalName}
                <br />
                SIRET {organizationInfo.siret} · NDA{" "}
                {organizationInfo.trainingDeclarationNumber}
              </p>
            </FooterReveal>

            <nav aria-label="Navigation de pied de page" className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8">
              <FooterColumn delay={0.1} title="Formations" links={footerFormations} />
              <FooterColumn delay={0.16} title="Guides" links={footerGuides} />
              <FooterColumn delay={0.22} title="Compagnon" links={footerAbout} />
              <FooterColumn delay={0.28} title="Informations" links={footerLegal} />
            </nav>
          </div>

          <FooterReveal
            className="relative overflow-hidden border-y border-white/10 py-8 md:py-11"
            delay={0.1}
          >
            <div aria-hidden="true" className="select-none">
              <p className="whitespace-nowrap text-center text-[clamp(3.2rem,10.5vw,9.5rem)] font-semibold leading-[0.76] tracking-[-0.075em] text-white/[0.075]">
                COMPAGNON
              </p>
              <div className="mt-5 flex items-center gap-4 md:mt-8 md:gap-8">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/30 to-orange-500" />
                <span className="font-mono text-[clamp(0.82rem,2.3vw,1.75rem)] font-medium uppercase tracking-[0.28em] text-orange-300">
                  De la route
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-orange-500/30 to-orange-500" />
              </div>
            </div>
          </FooterReveal>

          <div className="flex flex-col gap-3 py-6 text-xs text-white-45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {siteName}. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint-400" />
              Organisme de formation déclaré en région Corse
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  delay,
  title,
  links,
}: {
  delay: number;
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <FooterReveal delay={delay}>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
        {title}
      </h3>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="group inline-flex items-start gap-1.5 text-sm leading-snug text-white-60 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-white-90"
              href={link.href}
            >
              <span>{link.label}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </FooterReveal>
  );
}
