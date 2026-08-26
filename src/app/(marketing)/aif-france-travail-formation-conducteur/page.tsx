import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { seoClusterGuides } from "@/lib/seo-cluster-guides";
import { verifiedGuideMetadata } from "@/lib/verified-guides";

const guide = seoClusterGuides.franceTravail;

export const metadata = verifiedGuideMetadata(guide);

export default function AifFranceTravailPage() {
  return <VerifiedGuidePage guide={guide} />;
}
