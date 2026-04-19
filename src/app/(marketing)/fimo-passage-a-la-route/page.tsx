import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoLandingMetadata, seoLandingPages } from "@/lib/seo-landings";

const data = seoLandingPages["fimo-passage-a-la-route"];

export const metadata = seoLandingMetadata(data);

export default function FimoPassageALaRoutePage() {
  return <SeoLandingPage data={data} />;
}
