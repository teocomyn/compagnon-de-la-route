import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["reussir-embauche-conducteur-car"];

export const metadata = seoLandingMetadata(data);

export default function ReussirEmbaucheConducteurCarPage() {
  return <SeoLandingPage data={data} />;
}
