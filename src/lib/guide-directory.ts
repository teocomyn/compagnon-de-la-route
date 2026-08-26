import { seoClusterGuideList } from "@/lib/seo-cluster-guides";
import {
  verifiedGuideList,
  verifiedGuidesReviewedAtIso,
  type VerifiedGuide,
} from "@/lib/verified-guides";

export type GuideDirectoryEntry = Pick<
  VerifiedGuide,
  "slug" | "eyebrow" | "title" | "description" | "reviewedAtIso"
>;

export const pillarGuide: GuideDirectoryEntry = {
  slug: "devenir-conducteur-de-voyageurs",
  eyebrow: "Guide pilier",
  title: "Devenir conducteur de bus ou de car",
  description:
    "Le parcours complet : permis D, qualification professionnelle, aptitude médicale, financement, formation et candidature.",
  reviewedAtIso: "2026-08-26",
};

export const guideDirectoryList: readonly GuideDirectoryEntry[] = [
  pillarGuide,
  ...verifiedGuideList.map((guide) => ({
    ...guide,
    reviewedAtIso: guide.reviewedAtIso ?? verifiedGuidesReviewedAtIso,
  })),
  ...seoClusterGuideList,
];
