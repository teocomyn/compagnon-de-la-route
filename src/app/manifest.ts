import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Compagnon de la Route",
    short_name: "CDR",
    description:
      "Le label transport porté par BOAZ pour préparer les métiers du transport de voyageurs.",
    start_url: "/",
    display: "standalone",
    background_color: "#061f1a",
    theme_color: "#0a2a24",
    lang: "fr",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
