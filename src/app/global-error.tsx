"use client";

export default function GlobalError({ retry }: { retry: () => void }) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          background: "#061a16",
          color: "#f7fbfa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main style={{ maxWidth: "640px", textAlign: "center" }}>
          <title>Erreur temporaire · Compagnon de la Route</title>
          <h1>Le site rencontre une erreur temporaire</h1>
          <p style={{ color: "#b7c7c3", lineHeight: 1.6 }}>
            Réessayez dans quelques instants. Aucune donnée de formulaire n&apos;est
            considérée comme envoyée tant qu&apos;une confirmation ne s&apos;affiche pas.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: "24px",
              minHeight: "48px",
              padding: "0 24px",
              border: 0,
              borderRadius: "999px",
              background: "#f26b2a",
              color: "#061a16",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </main>
      </body>
    </html>
  );
}
