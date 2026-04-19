import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["formation-transport-scolaire-conducteur"];

export const metadata = seoLandingMetadata(data);

export default function FormationTransportScolaireConducteurPage() {
  return <SeoLandingPage data={data} />;
}
