import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["faq-conducteur-de-voyageurs"];

export const metadata = seoLandingMetadata(data);

export default function FaqConducteurDeVoyageursPage() {
  return <SeoLandingPage data={data} />;
}
