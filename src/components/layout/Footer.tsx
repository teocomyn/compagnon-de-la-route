import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  footerAbout,
  footerFormations,
  footerGuides,
  footerLegal,
  siteName,
} from "@/lib/constants";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Badge } from "@/components/ui/Badge";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-[15px] text-white-60 transition-colors hover:text-orange-300"
    >
      {children}
      <ChevronRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-deep/60">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <BrandLogo size="footer" />
              <span className="text-[16px] font-medium">{siteName}</span>
            </div>
            <p className="text-[15px] leading-relaxed text-white-60">
              Porté par BOAZ · Formation artisanale, exigeante et humaine · Label
              Compagnon de la Route
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success">Qualiopi</Badge>
              <Badge variant="neutral">GEIQ Mobilité</Badge>
              <Badge variant="neutral">OPCO</Badge>
              <Badge variant="neutral">France Travail</Badge>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              Formations
            </p>
            <ul className="flex flex-col gap-3">
              {footerFormations.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              Guides
            </p>
            <ul className="flex flex-col gap-3">
              {footerGuides.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              À propos
            </p>
            <ul className="flex flex-col gap-3">
              {footerAbout.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              Informations
            </p>
            <ul className="flex flex-col gap-3">
              {footerLegal.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 text-sm text-white-45 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {siteName}. Tous droits réservés.
            </p>
            <p>Créé avec soin par Teo Comyn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
