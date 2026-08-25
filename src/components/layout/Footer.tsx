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

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-night-deep text-white">
      <div className="border-b border-white/10 bg-orange-500 text-night-deep">
        <div className="section-shell mx-auto flex max-w-screen-2xl flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold">Un projet de formation à vérifier ?</p>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 border-b border-night-deep pb-1 font-semibold"
          >
            Parler à l&apos;équipe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="section-shell mx-auto max-w-screen-2xl">
        <div className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-20 lg:py-20">
          <div className="max-w-xl">
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

            <p className="mt-7 max-w-lg text-sm leading-7 text-white-60">
              BOAZ accompagne les projets de formation aux métiers du transport de
              voyageurs. Les modalités du parcours sont confirmées avant l&apos;inscription.
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
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4"
          >
            <FooterColumn title="Formations" links={footerFormations} />
            <FooterColumn title="Guides" links={footerGuides} />
            <FooterColumn title="Compagnon" links={footerAbout} />
            <FooterColumn title="Informations" links={footerLegal} />
          </nav>
        </div>

        <div className="overflow-hidden border-y border-white/10 py-8 md:py-10">
          <p
            aria-hidden="true"
            className="whitespace-nowrap text-center text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.75] tracking-[-0.075em] text-white/[0.07]"
          >
            COMPAGNON DE LA ROUTE
          </p>
        </div>

        <div className="flex flex-col gap-2 py-6 text-xs text-white-45 sm:flex-row sm:items-center sm:justify-between">
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
      <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
        {title}
      </h3>
      <ul className="mt-5 space-y-3.5">
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
