import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { seoClusterGuides } from "@/lib/seo-cluster-guides";
import { verifiedGuideMetadata } from "@/lib/verified-guides";

const guide = seoClusterGuides.permitExam;

export const metadata = verifiedGuideMetadata(guide);

export default function ExamenPermisDPage() {
  return <VerifiedGuidePage guide={guide} />;
}
