/**
 * Wrapper conservé pour le layout marketing. Le défilement fluide est assuré
 * par `scroll-behavior: smooth` sur `html` dans `globals.css`.
 * Lenis a été retiré : il pouvait bloquer le scroll en fin de page longue
 * (limite de scroll mal recalculée).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
