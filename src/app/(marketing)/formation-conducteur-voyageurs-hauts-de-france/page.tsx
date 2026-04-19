import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["formation-conducteur-voyageurs-hauts-de-france"];

export const metadata = seoLandingMetadata(data);

export default function FormationConducteurVoyageursHautsDeFrancePage() {
  return <SeoLandingPage data={data} />;
}
