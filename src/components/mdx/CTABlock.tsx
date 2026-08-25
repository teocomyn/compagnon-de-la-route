import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CTABlockProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export function CTABlock({ title, description, href, ctaLabel }: CTABlockProps) {
  return (
    <div
      className={cn(
        "my-10 border-y border-orange-400/40 py-8 sm:flex sm:items-end sm:justify-between sm:gap-10",
      )}
    >
      <div className="max-w-2xl">
        <h3 className="text-xl font-bold tracking-[-0.02em] text-white-90 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-white-60">{description}</p>
      </div>
      <div className="mt-6 shrink-0 sm:mt-0">
        <Link href={href} className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
