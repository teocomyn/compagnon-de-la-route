import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["certification-formation-conducteur-voyageurs"];

export const metadata = seoLandingMetadata(data);

export default function CertificationFormationConducteurVoyageursPage() {
  return <SeoLandingPage data={data} />;
}
