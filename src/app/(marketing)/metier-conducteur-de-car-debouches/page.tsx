import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["metier-conducteur-de-car-debouches"];

export const metadata = seoLandingMetadata(data);

export default function MetierConducteurDeCarDebouchesPage() {
  return <SeoLandingPage data={data} />;
}
