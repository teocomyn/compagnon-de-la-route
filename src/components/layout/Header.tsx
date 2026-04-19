"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { buttonVariants } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-30 h-16 md:h-[72px]",
          "transition-[background,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-white/5 bg-night-deep/80 backdrop-blur-[20px]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Compagnon de la Route, accueil"
          >
            <BrandLogo priority size="header" />
            <span className="hidden text-[16px] font-medium tracking-tight text-white-90 sm:inline">
              Compagnon de la Route
            </span>
          </Link>

          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[15px] text-white-60 transition-colors duration-200 ease-out hover:text-orange-300"
              >
                <span className="relative inline-block">
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-orange-300 transition-all duration-200 ease-out group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/formations"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "hidden min-h-[44px] md:inline-flex",
              )}
            >
              Nos promos en cours
            </Link>
            <Link
              href="/formations"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-orange-500/35 bg-orange-500/10 px-4 text-[13px] font-semibold text-orange-200 transition-colors hover:border-orange-400/50 hover:bg-orange-500/15 md:hidden"
            >
              Promos
            </Link>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white-90 md:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
