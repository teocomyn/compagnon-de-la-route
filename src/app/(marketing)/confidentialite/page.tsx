import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { contactInfo, organizationInfo } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <div>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Politique de confidentialité", href: "/confidentialite" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell mx-auto max-w-4xl pb-16 pt-3 md:pt-5">
        <h1 className="text-4xl font-bold tracking-tight">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-white-45">Dernière mise à jour : 25 août 2026</p>

        <div className="article-prose mt-10">
          <h2>Responsable du traitement</h2>
          <p>
            {organizationInfo.legalName}, SIREN {organizationInfo.siren}, est responsable
            des données transmises via ce site.
          </p>

          <h2>Données collectées</h2>
          <p>
            Le formulaire collecte votre nom, votre adresse e-mail, votre numéro de
            téléphone si vous choisissez de le fournir, le contenu de votre message et
            la preuve de votre consentement. Ne transmettez pas de données de santé, de
            pièce d&apos;identité ou d&apos;information sensible dans le champ libre.
          </p>

          <h2>Finalités et base légale</h2>
          <p>
            Ces données servent à répondre à votre demande, qualifier votre projet et,
            si vous le souhaitez, préparer les étapes précontractuelles d&apos;un parcours.
            Le traitement du formulaire repose sur votre consentement, que vous pouvez
            retirer à tout moment pour l&apos;avenir.
          </p>

          <h2>Destinataires et sous-traitants</h2>
          <p>
            L&apos;accès est limité aux personnes autorisées chez BOAZ et au prestataire
            technique d&apos;acheminement des e-mails configuré pour le formulaire. Les
            données ne sont ni vendues ni utilisées pour une prospection sans accord
            distinct.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Une demande sans suite commerciale est conservée au maximum douze mois à
            compter du dernier échange, sauf obligation légale ou demande de suppression
            recevable. Les données contractuelles suivent les durées légales applicables.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l&apos;accès, la rectification, l&apos;effacement, la limitation,
            la portabilité ou vous opposer à un traitement lorsque la loi le permet. Pour
            exercer vos droits, utilisez le formulaire de contact
            {contactInfo.email ? ` ou écrivez à ${contactInfo.email}` : ""}. Une preuve
            d&apos;identité peut être demandée uniquement en cas de doute raisonnable.
          </p>
          <p>
            Vous pouvez également déposer une réclamation auprès de la CNIL sur cnil.fr.
          </p>

          <h2>Cookies et mesures techniques</h2>
          <p>
            Le site ne doit pas activer de traceur publicitaire sans information et, si
            nécessaire, consentement préalable. L&apos;hébergeur peut conserver des journaux
            techniques nécessaires à la sécurité et au fonctionnement du service.
          </p>
        </div>
      </div>
    </div>
  );
}
