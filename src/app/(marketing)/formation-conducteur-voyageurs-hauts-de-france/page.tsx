import { SeoLandingPageGate } from "@/components/seo/SeoLandingPageGate";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["formation-conducteur-voyageurs-hauts-de-france"];

export const metadata = seoLandingMetadata(data);

export default function FormationConducteurVoyageursHautsDeFrancePage() {
  return <SeoLandingPageGate data={data} />;
}
