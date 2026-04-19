"use client";

import { partners } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MarqueePartners({ className }: { className?: string }) {
  const items = [...partners, ...partners];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/5 py-10",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent"
        aria-hidden
      />
      <div className="flex w-max animate-marquee gap-16 motion-reduce:animate-none">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 font-mono text-[13px] font-medium uppercase tracking-[0.2em] text-white/45"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
