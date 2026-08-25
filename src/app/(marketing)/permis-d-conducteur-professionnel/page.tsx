import { VerifiedGuidePage } from "@/components/guides/VerifiedGuidePage";
import { verifiedGuideMetadata, verifiedGuides } from "@/lib/verified-guides";

const guide = verifiedGuides.license;

export const metadata = verifiedGuideMetadata(guide);

export default function PermisDConducteurProfessionnelPage() {
  return <VerifiedGuidePage guide={guide} />;
}
