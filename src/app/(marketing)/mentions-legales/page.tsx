import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { contactInfo, organizationInfo, siteName } from "@/lib/constants";
import { legalInfo, legalReadiness } from "@/lib/legal";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Mentions légales",
    alternates: { canonical: "/mentions-legales" },
    robots: legalReadiness.mentions ? undefined : { index: false, follow: true },
  };
}

export default function MentionsLegalesPage() {
  return (
    <div>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions légales", href: "/mentions-legales" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell mx-auto max-w-4xl pb-16 pt-3 md:pt-5">
        <h1 className="text-4xl font-bold tracking-tight">Mentions légales</h1>
        <p className="mt-4 text-sm text-white-45">Dernière mise à jour : 25 août 2026</p>

        <div className="article-prose mt-10">
          <h2>Éditeur du site</h2>
          <p>
            Le site {siteName} est édité par {organizationInfo.legalName}, identifié
            sous le SIREN {organizationInfo.siren} et le SIRET {organizationInfo.siret}.
          </p>
          <p>
            Siège déclaré : {organizationInfo.address}, {organizationInfo.postalCode}{" "}
            {organizationInfo.city}, {organizationInfo.country}.
          </p>
          {contactInfo.email ? <p>Contact : {contactInfo.email}.</p> : null}

          <h2>Organisme de formation</h2>
          <p>
            Numéro de déclaration d&apos;activité : {organizationInfo.trainingDeclarationNumber}{" "}
            auprès du préfet de la région {organizationInfo.trainingDeclarationRegion}. Cet
            enregistrement ne vaut pas agrément de l&apos;État.
          </p>
          <p>
            Certification Qualiopi au titre de la catégorie :{" "}
            {organizationInfo.qualiopiScope.toLowerCase()}.
          </p>

          <h2>Directeur de la publication</h2>
          {legalInfo.publicationDirector ? (
            <p>{legalInfo.publicationDirector}.</p>
          ) : (
            <p className="border-l-2 border-orange-400 py-1 pl-5 text-white-75">
              Information en cours de validation avant la mise en ligne définitive.
            </p>
          )}

          <h2>Hébergement</h2>
          {legalInfo.hostName && legalInfo.hostAddress ? (
            <p>
              {legalInfo.hostName}, {legalInfo.hostAddress}.
            </p>
          ) : (
            <p className="border-l-2 border-orange-400 py-1 pl-5 text-white-75">
              Prestataire et adresse d&apos;hébergement en cours de validation avant la mise
              en ligne définitive.
            </p>
          )}

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, éléments graphiques, marques et contenus de ce site sont
            protégés. Toute reproduction ou adaptation substantielle nécessite une
            autorisation préalable, sauf exception prévue par la loi.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations relatives aux formations, calendriers, financements et
            certifications sont générales. Seuls la fiche programme, le devis, la
            convention ou le contrat transmis avant inscription définissent les
            conditions applicables à un parcours donné.
          </p>
        </div>
      </div>
    </div>
  );
}
