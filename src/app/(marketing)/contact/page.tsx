import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { GlassCard } from "@/components/ui/GlassCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contactInfo, siteName } from "@/lib/constants";
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
      <div className="section-shell grid max-w-[1200px] gap-12 pt-3 lg:grid-cols-2 lg:items-start lg:pt-6">
        <div className="space-y-6">
          <Eyebrow>Prenons la route ensemble</Eyebrow>
          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Restons en contact et construisons votre avenir
          </h1>
          <p className="text-lg leading-relaxed text-white-60">
            Une question sur le financement, le rythme, ou votre éligibilité ? Nous
            préférons l&apos;échange direct à la promesse floue : écrivez-nous, nous
            revenons vers vous avec des réponses actionnables.
          </p>
          <div className="space-y-3 text-[15px] text-white-75">
            <p>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
                Téléphone
              </span>
              <br />
              <a className="hover:text-orange-300" href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
                E-mail
              </span>
              <br />
              <a className="hover:text-orange-300" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </p>
            <p>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange-300">
                Adresse
              </span>
              <br />
              {contactInfo.address}
            </p>
          </div>
        </div>

        <GlassCard className="p-8 md:p-10">
          <ContactForm />
        </GlassCard>
      </div>

      <div className="section-shell mx-auto mt-16 max-w-[1200px] overflow-hidden rounded-xl border border-white/10">
        <iframe
          title="Carte — zone d’intervention"
          src={contactInfo.mapsEmbedUrl}
          className="h-[360px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="border-t border-white/10 bg-white/[0.02] p-6 text-sm text-white-45">
          Les informations légales de l’organisme sont disponibles sur demande et dans
          nos documents contractuels.
        </div>
      </div>
    </div>
  );
}
