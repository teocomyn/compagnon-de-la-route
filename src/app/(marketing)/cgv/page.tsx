import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { organizationInfo } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV",
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <div>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "CGV", href: "/cgv" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell mx-auto max-w-[900px] pb-16 pt-3 md:pt-5">
        <h1 className="text-4xl font-bold tracking-tight">Conditions générales de vente</h1>
        <p className="mt-4 text-sm text-white-45">Version de travail · 25 août 2026</p>

        <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/10 p-5 text-[15px] leading-relaxed text-white-75">
          Ce socle doit être rapproché des conventions et contrats réellement utilisés
          par BOAZ. Les coordonnées du médiateur de la consommation doivent être ajoutées
          avant toute vente à un particulier.
        </div>

        <div className="article-prose mt-10">
          <h2>1. Objet et prestataire</h2>
          <p>
            Les présentes conditions encadrent les prestations de formation proposées
            par {organizationInfo.legalName}, SIRET {organizationInfo.siret}. La fiche
            programme, le devis et la convention ou le contrat précisent la prestation
            effectivement commandée.
          </p>

          <h2>2. Inscription</h2>
          <p>
            Une demande en ligne ne vaut pas inscription. L&apos;engagement devient effectif
            après vérification des prérequis, acceptation des documents contractuels et,
            le cas échéant, confirmation écrite du financement.
          </p>

          <h2>3. Prix et paiement</h2>
          <p>
            Le prix, les taxes applicables, l&apos;échéancier et le reste à charge éventuel
            figurent sur le devis ou le contrat. Aucune prise en charge par un financeur
            n&apos;est considérée acquise avant son accord écrit.
          </p>

          <h2>4. Rétractation, annulation et report</h2>
          <p>
            Les délais de rétractation et règles applicables dépendent du statut du
            bénéficiaire et du mode de contractualisation. Les conditions de report,
            remplacement, abandon et facturation sont indiquées dans le contrat ou la
            convention remis avant signature, conformément aux règles impératives.
          </p>

          <h2>5. Déroulement et obligations</h2>
          <p>
            Le bénéficiaire s&apos;engage à respecter le règlement intérieur, les consignes
            de sécurité, les horaires et les modalités d&apos;évaluation. BOAZ met en œuvre
            les moyens décrits dans la fiche programme, sans garantir l&apos;obtention d&apos;une
            certification, d&apos;un financement ou d&apos;un emploi.
          </p>

          <h2>6. Accessibilité et réclamations</h2>
          <p>
            Toute situation de handicap ou besoin d&apos;aménagement doit être signalé le
            plus tôt possible afin d&apos;étudier une solution raisonnable. Les réclamations
            peuvent être adressées via la page Contact et font l&apos;objet d&apos;une réponse
            tracée.
          </p>

          <h2>7. Données personnelles et litiges</h2>
          <p>
            Les traitements de données sont décrits dans la politique de confidentialité.
            En cas de différend, les parties recherchent d&apos;abord une solution amiable.
            Les règles de médiation et de compétence juridictionnelle impératives restent
            applicables.
          </p>
        </div>
      </div>
    </div>
  );
}
