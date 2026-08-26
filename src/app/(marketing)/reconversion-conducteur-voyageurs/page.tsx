import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { seoClusterGuides } from "@/lib/seo-cluster-guides";
import { verifiedGuideMetadata } from "@/lib/verified-guides";

const guide = seoClusterGuides.careerChange;

export const metadata = verifiedGuideMetadata(guide);

export default function ReconversionConducteurVoyageursPage() {
  return <VerifiedGuidePage guide={guide} />;
}
