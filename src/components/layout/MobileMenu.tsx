"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/Button";
import { brandInfo, navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const panelRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 80);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-night-deep/95"
            aria-label="Fermer le menu"
            tabIndex={-1}
            onClick={onClose}
          />

          <motion.nav
            ref={panelRef}
            id="mobile-navigation"
            className="absolute inset-x-0 bottom-0 top-16 flex flex-col overflow-y-auto border-t border-white/10 bg-night-deep px-6 pb-6 pt-8 sm:left-auto sm:w-[min(30rem,100vw)] sm:border-l sm:px-8 md:top-[72px]"
            initial={reducedMotion ? false : { x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={reducedMotion ? undefined : { x: 16, opacity: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            aria-label="Navigation mobile"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              Explorer le site
            </p>

            <ul className="mt-6 border-t border-white/10">
              {navLinks.map((link, index) => {
                const active = isActiveRoute(pathname, link.href);

                return (
                  <li
                    key={link.href}
                    className="border-b border-white/10"
                  >
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className="group flex min-h-16 items-center justify-between gap-5 py-3 focus-visible:outline-offset-4"
                    >
                      <span
                        className={cn(
                          "text-xl tracking-[-0.025em] transition-colors sm:text-2xl",
                          active
                            ? "font-semibold text-orange-300"
                            : "font-medium text-white-90 group-hover:text-orange-200",
                        )}
                      >
                        {link.label}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-white-25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <ArrowRight
                          className="h-4 w-4 text-white-45 transition-transform group-hover:translate-x-1 group-hover:text-orange-300"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href="/formations/conducteur-voyageurs"
                onClick={onClose}
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "w-full justify-between",
                )}
              >
                Découvrir la formation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <div className="mt-5 flex items-center gap-2 text-xs text-white-45">
                <BadgeCheck className="h-4 w-4 text-mint-400" aria-hidden="true" />
                {brandInfo.relationship} · Qualiopi, actions de formation
              </div>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
