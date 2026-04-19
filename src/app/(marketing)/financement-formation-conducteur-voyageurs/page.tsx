import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["financement-formation-conducteur-voyageurs"];

export const metadata = seoLandingMetadata(data);

export default function FinancementFormationConducteurVoyageursPage() {
  return <SeoLandingPage data={data} />;
}
