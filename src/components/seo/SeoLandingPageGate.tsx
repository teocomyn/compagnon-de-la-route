import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import type { SeoLandingPageData } from "@/lib/seo-landings";

export function SeoLandingPageGate({ data }: { data: SeoLandingPageData }) {
  if (process.env.ENABLE_EDITORIAL_CONTENT !== "true") {
    notFound();
  }

  return <SeoLandingPage data={data} />;
}
