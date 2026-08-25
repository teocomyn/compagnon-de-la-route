import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { BorderBeamPanel } from "@/components/ui/border-beam-panel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contactInfo, organizationInfo, siteName } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${siteName} pour construire votre projet de formation conducteur de voyageurs.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-28">
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell pt-3 lg:pt-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-6">
          <Eyebrow>Votre situation</Eyebrow>
          <h1 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
            Parlez-nous de votre projet.
          </h1>
          <p className="text-lg leading-relaxed text-white-60">
            Indiquez votre situation, vos disponibilités et la question la plus urgente.
            Nous pourrons alors vérifier les prérequis, les modalités et les pistes de
            financement pertinentes.
          </p>
          <div className="space-y-3 text-[15px] text-white-75">
            {contactInfo.phone ? (
              <p>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
                  Téléphone
                </span>
                <br />
                <a className="hover:text-orange-300" href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  {contactInfo.phone}
                </a>
              </p>
            ) : null}
            {contactInfo.email ? (
              <p>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
                  E-mail
                </span>
                <br />
                <a className="hover:text-orange-300" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
            ) : null}
            <p>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
                Zone d&apos;accompagnement
              </span>
              <br />
              {contactInfo.serviceArea}
            </p>
          </div>
        </div>

        <BorderBeamPanel
          beams={2}
          colors={["var(--color-orange-500)", "var(--color-orange-100)"]}
          thickness={2}
          idleSpeed={16}
          hoverSpeed={72}
          radius={16}
          seed={3}
          className="border-white/15 bg-night-deep p-6 md:p-10"
        >
          <ContactForm />
        </BorderBeamPanel>
        </div>
      </div>

      <div className="section-shell mx-auto mt-16 max-w-6xl border-t border-white/15 py-6 md:py-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
          Organisme de formation déclaré
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white-60">
          {organizationInfo.legalName} · SIRET {organizationInfo.siret} · NDA{" "}
          {organizationInfo.trainingDeclarationNumber} · {organizationInfo.address},{" "}
          {organizationInfo.postalCode} {organizationInfo.city}, {organizationInfo.country}.
        </p>
      </div>
    </div>
  );
}
