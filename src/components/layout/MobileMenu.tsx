"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-night-deep/90 backdrop-blur-xl"
            aria-label="Fermer le menu"
            onClick={onClose}
          />
          <motion.nav
            className="relative z-50 mx-auto flex h-full max-w-lg flex-col gap-6 px-8 pt-28"
            initial={{ x: 32, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 32, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Navigation mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-2xl font-semibold tracking-tight text-white-90 transition-colors hover:text-orange-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/formations"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "mt-4 w-full justify-center",
              )}
            >
              Nos promos en cours
            </Link>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
