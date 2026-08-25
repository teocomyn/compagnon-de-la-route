"use client";

import { VariableFontHover } from "@/components/ui/variable-font-hover";

const navLinks = ["Formations", "Guides", "Journal", "Qui sommes-nous ?", "Contact"];

export default function VariableFontHoverNav() {
  return (
    <nav className="flex min-h-50 flex-wrap items-center justify-center gap-8 px-6">
      {navLinks.map((link) => (
        <VariableFontHover
          className="cursor-pointer text-base text-white-60 transition-colors hover:text-white-90"
          fromFontVariationSettings="'wght' 400"
          key={link}
          label={link}
          staggerDuration={0.03}
          staggerFrom="center"
          toFontVariationSettings="'wght' 700"
        />
      ))}
    </nav>
  );
}
