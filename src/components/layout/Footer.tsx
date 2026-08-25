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
    <footer className="relative border-t border-white/10 bg-night-deep text-white">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <BrandLogo size="footer" />
              <span className="font-semibold">{siteName}</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white-60">
              Un parcours exigeant et humain pour préparer les métiers du transport de
              voyageurs, avec des modalités confirmées avant inscription.
            </p>
            <p className="text-xs leading-relaxed text-white-60">
              {organizationInfo.legalName} · SIRET {organizationInfo.siret} · NDA{" "}
              {organizationInfo.trainingDeclarationNumber}
            </p>
          </div>

          <FooterColumn title="Formations" links={footerFormations} />
          <FooterColumn title="Guides" links={footerGuides} />
          <FooterColumn title="À propos" links={footerAbout} />
          <FooterColumn title="Informations" links={footerLegal} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white-60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteName}. Tous droits réservés.</p>
          <p>Qualiopi · catégorie actions de formation</p>
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
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="text-sm text-white-60 hover:text-orange-200" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
