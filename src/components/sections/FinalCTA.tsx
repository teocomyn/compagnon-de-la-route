import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="border-y border-orange-300 bg-orange-500 text-night-deep">
      <div className="section-shell mx-auto grid max-w-screen-2xl gap-8 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-20">
        <div className="max-w-4xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
            Prochaine étape
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2.5rem,5.5vw,6rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
            Obtenez des réponses adaptées à votre situation.
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "border-night-deep bg-night-deep text-white-90 hover:border-night hover:bg-night",
            )}
          >
            Étudier mon projet
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/formations/conducteur-voyageurs"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "border-night-deep/35 text-night-deep hover:border-night-deep hover:text-night-deep",
            )}
          >
            Voir la formation
          </Link>
        </div>
      </div>
    </section>
  );
}
