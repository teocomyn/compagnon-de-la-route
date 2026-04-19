import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["formation-conducteur-autocar-tourisme"];

export const metadata = seoLandingMetadata(data);

export default function FormationConducteurAutocarTourismePage() {
  return <SeoLandingPage data={data} />;
}
