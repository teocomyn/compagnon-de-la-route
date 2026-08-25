import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import {
  footerAbout,
  footerFormations,
  footerGuides,
  footerLegal,
  organizationInfo,
  siteName,
} from "@/lib/constants";

const routeMarkers = [
  "Situer le projet",
  "Confirmer le parcours",
  "Préparer le premier service",
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 bg-night px-3 pt-6 text-white sm:px-5 sm:pt-8">
      <div className="mx-auto max-w-screen-2xl overflow-hidden rounded-t-[2.5rem] border border-b-0 border-white/10 bg-night-deep sm:rounded-t-[3.5rem]">
        <div className="relative border-b border-white/10 px-6 pb-10 pt-14 sm:px-10 sm:pb-12 sm:pt-16 lg:px-16 lg:pb-16 lg:pt-20">
          <div
            className="absolute left-1/2 top-0 h-1 w-28 -translate-x-1/2 bg-orange-500 sm:w-40"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-[4px] rotate-45 border border-orange-300 bg-night-deep"
            aria-hidden="true"
          />

          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-orange-300">
                Un projet de formation à vérifier ?
              </p>
              <h2 className="mt-5 max-w-5xl text-balance text-[clamp(2.7rem,5.6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white-90">
                Passez du projet aux
                <span className="block text-orange-300">réponses concrètes.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex min-h-16 w-full items-center justify-between gap-6 rounded-full bg-orange-500 px-7 text-lg font-semibold text-night-deep transition-colors hover:bg-orange-300 sm:w-auto sm:min-w-72"
              >
                Parler à l&apos;équipe
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-night-deep text-orange-300">
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </div>

          <ol className="mt-12 grid border-y border-white/10 md:grid-cols-3 lg:mt-16">
            {routeMarkers.map((marker, index) => (
              <li
                key={marker}
                className={`flex items-center gap-4 py-4 text-sm text-white-60 md:px-6 ${
                  index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""
                }`}
              >
                <span className="font-mono text-[10px] text-orange-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{marker}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-14 px-6 py-14 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-20">
          <div className="lg:col-span-4">
            <Link
              aria-label="Retour à l’accueil de Compagnon de la Route"
              className="inline-flex items-center gap-4"
              href="/"
            >
              <BrandLogo size="footer" />
              <span className="text-lg font-semibold tracking-[-0.025em] text-white-90">
                Compagnon de la Route
              </span>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white-60">
              BOAZ accompagne les projets de formation aux métiers du transport de
              voyageurs. Les modalités sont confirmées avant l&apos;inscription.
            </p>

            <dl className="mt-8 grid gap-2 text-xs leading-6 text-white-45">
              <div>
                <dt className="sr-only">Raison sociale</dt>
                <dd>{organizationInfo.legalName}</dd>
              </div>
              <div>
                <dt className="sr-only">Numéros administratifs</dt>
                <dd>
                  SIRET {organizationInfo.siret} / NDA{" "}
                  {organizationInfo.trainingDeclarationNumber}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Certification</dt>
                <dd>Qualiopi, actions de formation</dd>
              </div>
            </dl>
          </div>

          <nav
            aria-label="Navigation de pied de page"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8"
          >
            <FooterColumn title="Formations" links={footerFormations} />
            <FooterColumn title="Guides" links={footerGuides} />
            <FooterColumn title="Compagnon" links={footerAbout} />
            <FooterColumn title="Informations" links={footerLegal} />
          </nav>
        </div>

        <div className="overflow-hidden border-y border-white/10 px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <div aria-hidden="true" className="select-none">
            <p className="whitespace-nowrap text-[clamp(4rem,11.6vw,11rem)] font-semibold leading-[0.72] tracking-[-0.075em] text-white/[0.055] [-webkit-text-stroke:1px_var(--color-white-10)]">
              COMPAGNON
            </p>
            <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="whitespace-nowrap text-[clamp(3rem,7.4vw,7rem)] font-semibold leading-[0.76] tracking-[-0.065em] text-orange-500">
                DE LA ROUTE
              </p>
              <p className="max-w-56 border-l border-orange-400 pl-4 font-mono text-[9px] uppercase leading-5 tracking-[0.14em] text-white-45">
                Former des conducteurs prêts à prendre leur service
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6 py-6 text-xs text-white-45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p>
            © {new Date().getFullYear()} {siteName}. Tous droits réservés.
          </p>
          <p>Organisme de formation déclaré en région Corse</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orange-300">
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-sm leading-snug text-white-60 transition-colors duration-200 hover:text-white-90"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
