/**
 * Rend un bloc JSON-LD. Le caractère « < » est échappé pour qu'une chaîne
 * contenant « </script> » ne puisse jamais refermer la balise (recommandation
 * de la documentation Next.js sur le JSON-LD).
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
