import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import {
  brandInfo,
  organizationInfo,
  orgPostalAddress,
  siteName,
  siteUrl,
} from "@/lib/constants";

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
  title: {
    default: `${siteName} · Formation conducteur de voyageurs`,
    template: `%s · ${siteName}`,
  },
  description:
    "BOAZ accompagne les projets de formation aux métiers du transport de voyageurs, de l’étude des prérequis à la préparation de la prise de poste.",
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

function OrganizationJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        name: brandInfo.ownerName,
        legalName: organizationInfo.legalName,
        url: siteUrl,
        description:
          "BOAZ porte le label Compagnon de la Route et accompagne des projets de formation aux métiers du transport de voyageurs.",
        brand: { "@id": `${siteUrl}/#brand` },
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
      },
      {
        "@type": "Brand",
        "@id": `${siteUrl}/#brand`,
        name: siteName,
        description: brandInfo.description,
        url: `${siteUrl}/le-label`,
      },
    ],
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
      className={`${archivo.variable} ${ibmPlexMono.variable} relative h-full scroll-smooth`}
    >
      <body className="relative min-h-full overflow-x-clip font-sans text-white antialiased pb-[env(safe-area-inset-bottom)]">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
