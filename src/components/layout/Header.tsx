"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { buttonVariants } from "@/components/ui/Button";
import { VariableFontHover } from "@/components/ui/variable-font-hover";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 18);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "pointer-events-auto relative mx-auto flex h-16 max-w-screen-2xl items-center border-b px-4 transition-[background-color,border-color] duration-200 md:h-[72px] md:px-6",
            scrolled
              ? "border-white/15 bg-night-deep/95"
              : "border-white/10 bg-night-deep/90",
          )}
        >
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-md pr-2 focus-visible:outline-offset-4 md:gap-3"
            aria-label="Compagnon de la Route, accueil"
          >
            <BrandLogo priority size="header" className="h-9 w-9 md:h-10 md:w-10" />
            <span className="hidden text-[15px] font-semibold tracking-[-0.02em] text-white-90 sm:inline">
              Compagnon de la Route
            </span>
            <span
              className="hidden h-5 w-px bg-white/10 xl:block"
              aria-hidden="true"
            />
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white-45 xl:inline">
              Formation mobilité
            </span>
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => {
              const active = isActiveRoute(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex min-h-11 items-center px-1 text-[14px] transition-colors focus-visible:outline-offset-4",
                    active ? "text-orange-300" : "text-white-60 hover:text-white-90",
                  )}
                >
                  <VariableFontHover
                    label={link.label}
                    fromFontVariationSettings={active ? "'wght' 650" : "'wght' 430"}
                    toFontVariationSettings="'wght' 720"
                    staggerDuration={0.018}
                    staggerFrom="center"
                  />
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 bg-orange-400 transition-[width,opacity] duration-300",
                      active
                        ? "w-4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-2 group-hover:opacity-70",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/formations/conducteur-voyageurs"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "hidden min-h-11 lg:inline-flex",
              )}
            >
              Voir le parcours
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/formations/conducteur-voyageurs"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-orange-400/40 px-4 text-[13px] font-semibold text-orange-200 transition-colors hover:border-orange-300 hover:text-orange-100 lg:hidden"
            >
              Parcours
            </Link>

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/15 text-white-90 transition-colors hover:border-white/30 lg:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        pathname={pathname}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
