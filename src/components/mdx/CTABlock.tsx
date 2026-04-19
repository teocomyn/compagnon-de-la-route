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
        "my-10 rounded-2xl border border-orange-500/25 bg-gradient-to-b from-orange-500/[0.1] to-transparent px-6 py-8 text-center sm:px-10",
      )}
    >
      <h3 className="text-xl font-bold tracking-[-0.02em] text-white-90 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white-60">{description}</p>
      <div className="mt-6 flex justify-center">
        <Link href={href} className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
