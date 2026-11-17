import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteName, siteUrl, siteVerification, socialShareImage } from "@/lib/constants";
import { siteGraph } from "@/lib/schema";

const archivo = Archivo({
  variable: "--font-cdr-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-cdr-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  title: {
    default: `${siteName} · Formations transport de voyageurs`,
    template: `%s · ${siteName}`,
  },
  description:
    "BOAZ accompagne les projets de formation aux métiers du transport de voyageurs, de l’étude des prérequis à la préparation de la prise de poste.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    images: [socialShareImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [socialShareImage.url],
  },
  ...(siteVerification.google || siteVerification.bing
    ? {
        verification: {
          ...(siteVerification.google ? { google: siteVerification.google } : {}),
          ...(siteVerification.bing
            ? { other: { "msvalidate.01": siteVerification.bing } }
            : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a2a24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${ibmPlexMono.variable} relative h-full scroll-smooth`}
    >
      <body className="relative min-h-full overflow-x-clip font-sans text-white antialiased pb-[env(safe-area-inset-bottom)]">
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
