import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { CTABlock } from "@/components/mdx/CTABlock";
import { FAQItem } from "@/components/mdx/FAQItem";
import { slugifyHeading } from "@/lib/utils";

function getText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getText((children as { props?: { children?: React.ReactNode } }).props?.children);
  }
  return "";
}

export function getMdxComponents(): MDXComponents {
  return {
    Callout,
    CTABlock,
    FAQItem,
    h2: ({ children }) => {
      const id = slugifyHeading(getText(children));
      return (
        <h2 id={id} className="scroll-mt-28">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = slugifyHeading(getText(children));
      return (
        <h3 id={id} className="scroll-mt-28">
          {children}
        </h3>
      );
    },
    a: ({ href, children, ...rest }) => {
      const external = href?.startsWith("http");
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-300 underline decoration-orange-500/40 underline-offset-2 transition-colors hover:text-orange-200"
            {...rest}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href ?? "#"}
          className="text-orange-300 underline decoration-orange-500/40 underline-offset-2 transition-colors hover:text-orange-200"
        >
          {children}
        </Link>
      );
    },
    img: (props) => {
      const { src, alt } = props as { src?: string; alt?: string };
      if (!src) return null;
      return (
        <span className="relative my-8 block aspect-video w-full overflow-hidden rounded-xl border border-white/10">
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, min(900px, 72ch)"
          />
        </span>
      );
    },
  };
}
