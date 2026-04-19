import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["permis-d-conducteur-professionnel"];

export const metadata = seoLandingMetadata(data);

export default function PermisDConducteurProfessionnelPage() {
  return <SeoLandingPage data={data} />;
}
