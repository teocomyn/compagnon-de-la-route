import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { orgPostalAddress, siteName, siteUrl } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} · Formation conducteur de voyageurs`,
    template: `%s · ${siteName}`,
  },
  description:
    "Organisme de formation certifiant pour conducteurs de voyageurs : bus, cars scolaires, tourisme. Parcours humains, exigence terrain, insertion professionnelle.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    images: [{ url: "/images/og/default.jpg", width: 1920, height: 1069, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a2a24",
};

function EducationalOrganizationJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteName,
    url: siteUrl,
    description:
      "Formation certifiante pour conducteurs de voyageurs : sécurité, relation client, insertion professionnelle.",
    address: {
      "@type": "PostalAddress",
      addressRegion: orgPostalAddress.addressRegion,
      addressCountry: orgPostalAddress.addressCountry,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "France",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="relative min-h-full overflow-x-clip font-sans text-white antialiased pb-[env(safe-area-inset-bottom)]">
        <EducationalOrganizationJsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
