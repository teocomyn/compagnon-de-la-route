import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { buttonVariants } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SeoLandingPageData } from "@/lib/seo-landings";
import { siteName, siteUrl } from "@/lib/constants";

function WebPageJsonLd({ data }: { data: SeoLandingPageData }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.metaTitle,
    description: data.metaDescription,
    url: `${siteUrl.replace(/\/$/, "")}/${data.slug}`,
    isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function SeoFaqBlock({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="section-y border-t border-white/10">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-white-90">
            Vérifier les points importants.
          </h2>
          <div className="mt-10 border-t border-white/10">
            {items.map((item) => (
              <details key={item.q} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 marker:content-none">
                  <span className="font-semibold text-white-90">{item.q}</span>
                  <span
                    className="font-mono text-orange-300 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 pr-10 text-[15px] leading-7 text-white-60">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeoLandingPage({ data }: { data: SeoLandingPageData }) {
  return (
    <>
      <WebPageJsonLd data={data} />
      {data.faq?.length ? <FaqJsonLd items={data.faq} /> : null}

      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs items={data.breadcrumbs} />
        </BreadcrumbBar>
      </div>

      <div className="section-shell pt-4">
        <p className="mx-auto max-w-6xl border-l-2 border-orange-400 py-1 pl-5 text-sm leading-7 text-white-75">
          Page en relecture éditoriale. Les modalités exactes du parcours, du financement et de la
          certification figurent dans les documents transmis avant inscription.
        </p>
      </div>

      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="section-shell grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white-90">
              {data.h1}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white-60">{data.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/formations/conducteur-voyageurs"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Voir la formation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Étudier mon projet
              </Link>
            </div>
          </div>

          <figure className="border border-white/15 lg:col-span-5">
            <div className="relative aspect-[3/2] lg:aspect-[4/5]">
              <Image
                src="/images/journal/conductrice-bus-poste.jpg"
                alt="Conductrice de voyageurs installée au poste de conduite"
                fill
                loading="eager"
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-white/15 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white-60">
              Métier / transport de voyageurs
            </figcaption>
          </figure>
        </div>
      </section>

      {data.stats?.length ? (
        <section className="border-y border-white/10">
          <div className="section-shell grid md:grid-cols-3">
            {data.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`py-8 md:px-8 md:py-10 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-orange-300">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white-60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-y">
        <div className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Points à examiner</Eyebrow>
            <h2 className="mt-4 max-w-4xl text-[clamp(2.25rem,4.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white-90">
              Les informations utiles avant de décider.
            </h2>
            <div className="mt-12 grid border-y border-white/10 md:grid-cols-3">
              {data.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`py-8 md:px-8 md:py-10 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}
                >
                  <p className="font-mono text-xs text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-8 text-xl font-semibold text-white-90">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white-60">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 section-y">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl article-prose">
            {data.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.faq?.length ? <SeoFaqBlock items={data.faq} /> : null}

      {data.relatedLinks?.length ? (
        <section className="section-y pt-4">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl">
              <Eyebrow>Pour aller plus loin</Eyebrow>
              <ul className="mt-8 border-t border-white/10">
                {data.relatedLinks.map((link) => (
                  <li key={link.href} className="border-b border-white/10">
                    <Link
                      href={link.href}
                      className="flex min-h-16 items-center justify-between gap-4 py-4 font-medium text-white-80 transition-colors hover:text-orange-300"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
