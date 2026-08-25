import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  organizationInfo,
  orgPostalAddress,
  siteName,
  siteUrl,
} from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    "Organisme de formation pour les métiers du transport de voyageurs : parcours humains, exigence terrain et accompagnement professionnel.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    images: [{ url: "/images/og/default.jpg", width: 1920, height: 1282, alt: siteName }],
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
    legalName: organizationInfo.legalName,
    url: siteUrl,
    description:
      "Formation aux métiers du transport de voyageurs : sécurité, relation client et accompagnement professionnel.",
    address: {
      "@type": "PostalAddress",
      streetAddress: orgPostalAddress.streetAddress,
      postalCode: orgPostalAddress.postalCode,
      addressLocality: orgPostalAddress.addressLocality,
      addressRegion: orgPostalAddress.addressRegion,
      addressCountry: orgPostalAddress.addressCountry,
    },
    identifier: [
      { "@type": "PropertyValue", name: "SIREN", value: organizationInfo.siren },
      {
        "@type": "PropertyValue",
        name: "Numéro de déclaration d’activité",
        value: organizationInfo.trainingDeclarationNumber,
      },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} relative h-full scroll-smooth`}
    >
      <body className="relative min-h-full overflow-x-clip font-sans text-white antialiased pb-[env(safe-area-inset-bottom)]">
        <EducationalOrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
