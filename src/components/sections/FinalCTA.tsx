import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { OrangeGlow } from "@/components/magicui/OrangeGlow";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <OrangeGlow className="left-1/2 top-[60%] -translate-x-1/2" />
      <div className="relative z-10 mx-auto max-w-[980px] px-6 text-center md:px-8">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-orange-500/[0.08] to-transparent px-8 py-14 md:px-14">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white-90">
            Prêt à vérifier si ce parcours vous correspond ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white-60">
            Échangez avec nous sur votre situation, les prérequis et les modalités
            réellement disponibles.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/formations/conducteur-voyageurs"
              className={cn(buttonVariants({ variant: "primary", size: "xl" }))}
            >
              Découvrir le parcours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
