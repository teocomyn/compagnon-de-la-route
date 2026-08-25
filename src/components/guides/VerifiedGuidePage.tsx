import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { buttonVariants } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { VerifiedGuide } from "@/lib/verified-guides";
import { cn } from "@/lib/utils";

export function VerifiedGuidePage({ guide }: { guide: VerifiedGuide }) {
  return (
    <>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: guide.title, href: `/${guide.slug}` },
            ]}
          />
        </BreadcrumbBar>
      </div>

      <main>
        <section className="section-shell pb-14 pt-5 md:pb-20 md:pt-10">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>{guide.eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.35rem,6vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white-90">
              {guide.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white-60 md:text-xl">
              {guide.description}
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white-40">
              <ShieldCheck className="h-4 w-4 text-orange-300" aria-hidden />
              Sources officielles vérifiées le {guide.reviewedAt}
            </p>
          </div>
        </section>

        <section className="section-shell pb-16" aria-labelledby="guide-summary">
          <div className="mx-auto max-w-5xl">
            <h2 id="guide-summary" className="sr-only">
              À retenir
            </h2>
            <div className="grid border-l border-t border-white/15 md:grid-cols-3">
              {guide.summary.map((item, index) => (
                <div key={item} className="border-b border-r border-white/15 p-6">
                  <span className="font-mono text-xs text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-[15px] leading-7 text-white-75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pb-16 md:pb-24">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <article className="article-prose max-w-none">
              {guide.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <aside className="mt-12 border-l-2 border-orange-400 bg-white/[0.025] p-6 md:p-8">
                <p className="!mb-0 text-base font-medium leading-relaxed text-white-90">
                  {guide.notice}
                </p>
              </aside>
            </article>

            <aside className="border-t border-white/15 py-6 lg:sticky lg:top-28">
              <Eyebrow>Sources officielles</Eyebrow>
              <ul className="mt-5 space-y-5">
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                    >
                      <span className="flex items-start gap-2 text-sm font-semibold text-white-90 transition-colors group-hover:text-orange-200">
                        {source.label}
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-white-40">
                        {source.detail}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "mt-7 w-full",
                )}
              >
                Poser une question
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </aside>
          </div>
        </section>
      </main>

      <FinalCTA />
    </>
  );
}
