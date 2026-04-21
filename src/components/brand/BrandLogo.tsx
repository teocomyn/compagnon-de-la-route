import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/brand-logo-car.png";

/** Fichier source carré (1024×1024), marque centrée, fond transparent. */
const INTRINSIC = { width: 1024, height: 1024 };

type BrandLogoProps = {
  size?: "header" | "footer" | "orbital";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  size = "header",
  priority,
  className,
}: BrandLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Logo Compagnon de la Route, lettres CAR, le A stylisé en route"
      width={INTRINSIC.width}
      height={INTRINSIC.height}
      sizes={
        size === "header" ? "40px" : size === "footer" ? "48px" : "64px"
      }
      priority={priority}
      className={cn(
        "shrink-0 object-contain",
        size === "header" && "h-10 w-10",
        size === "footer" && "h-12 w-12",
        size === "orbital" && "h-[52px] w-[52px] shrink-0",
        className,
      )}
    />
  );
}
