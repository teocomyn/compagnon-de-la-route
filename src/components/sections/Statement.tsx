import { OrangeGlow } from "@/components/magicui/OrangeGlow";

export function Statement() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <OrangeGlow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="md" />
      <div className="relative z-10 mx-auto max-w-[980px] px-6 text-center md:px-8">
        <p className="text-[clamp(1.5rem,3.2vw,3rem)] font-medium leading-[1.3] text-white-75">
          Former un conducteur de voyageurs, ce n&apos;est pas seulement transmettre un
          métier, c&apos;est accompagner une personne dans un{" "}
          <span className="text-orange-300">projet de vie</span>. Chez{" "}
          <span className="text-orange-300">
            Compagnon de la Route
          </span>
          , porté par BOAZ, nous construisons des{" "}
          <span className="text-orange-300">parcours exigeants et humains</span>, avec
          une information claire avant l&apos;inscription et un accompagnement adapté au{" "}
          <span className="text-orange-300">projet professionnel</span>.
        </p>
      </div>
    </section>
  );
}
