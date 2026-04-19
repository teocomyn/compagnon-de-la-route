import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { GridBackground } from "@/components/magicui/GridBackground";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <GridBackground />
      <a
        href="#contenu-principal"
        className="fixed top-0 left-[-9999px] z-[100] rounded-md bg-orange-500 px-4 py-3 font-semibold text-night-deep shadow-lg focus:left-4 focus:top-[max(0.75rem,env(safe-area-inset-top,0px))] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-night-deep"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu-principal" className="relative z-10">
        {children}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
