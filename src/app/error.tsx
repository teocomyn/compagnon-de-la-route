"use client";

import { useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="px-6 py-16 md:px-8">
      <div className="mx-auto flex min-h-[60vh] max-w-[720px] flex-col items-center justify-center text-center">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-300">
          Erreur temporaire
        </p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em]">
          La page n&apos;a pas pu être affichée
        </h1>
        <p className="mt-4 text-lg text-white-60">
          Vous pouvez relancer l&apos;affichage ou revenir à l&apos;accueil.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => retry()}
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            Réessayer
          </button>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
