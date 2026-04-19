import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="px-6 py-16 md:px-8">
      <div className="mx-auto flex min-h-[60vh] max-w-[720px] flex-col items-center justify-center text-center">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-300">
          404
        </p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em]">
          Page introuvable
        </h1>
        <p className="mt-4 text-lg text-white-60">
          La route que vous cherchez n&apos;existe pas (ou plus).
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-10")}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
