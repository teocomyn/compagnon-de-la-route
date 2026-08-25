import Image from "next/image";

const partners = [
  {
    name: "Fédération Française des Geiq",
    src: "/images/partners/federation-geiq.webp",
    width: 480,
    height: 150,
    imageClassName: "w-[230px] sm:w-[270px]",
  },
  {
    name: "BPV Objectifs",
    src: "/images/partners/bpv.svg",
    width: 355,
    height: 200,
    imageClassName: "w-[150px] sm:w-[170px]",
  },
  {
    name: "Geiq Mobilité",
    src: "/images/partners/geiq-mobilite.webp",
    width: 160,
    height: 117,
    imageClassName: "w-[118px] sm:w-[132px]",
  },
] as const;

function PartnerList({ decorative = false }: { decorative?: boolean }) {
  return (
    <ul
      className="partner-marquee__group"
      aria-hidden={decorative ? "true" : undefined}
    >
      {partners.map((partner) => (
        <li className="partner-marquee__item" key={partner.name}>
          <Image
            src={partner.src}
            alt={decorative ? "" : partner.name}
            width={partner.width}
            height={partner.height}
            sizes="(max-width: 640px) 230px, 320px"
            className={`h-auto max-h-20 max-w-full object-contain ${partner.imageClassName}`}
          />
        </li>
      ))}
    </ul>
  );
}

export function PartnerMarquee() {
  return (
    <section
      aria-labelledby="partner-marquee-title"
      className="border-b border-white/10 bg-night-deep"
      data-testid="partner-marquee"
    >
      <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-[19rem_minmax(0,1fr)]">
        <header className="flex items-center justify-between gap-6 border-b border-white/10 px-6 py-7 lg:border-b-0 lg:border-r lg:px-10 xl:px-16">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              Réseau terrain
            </p>
            <h2
              id="partner-marquee-title"
              className="mt-2 text-xl font-bold tracking-[-0.025em] text-white-90"
            >
              Un réseau mobilisé.
            </h2>
          </div>
          <span
            className="font-mono text-xs font-semibold tracking-[0.16em] text-white-45"
            aria-hidden="true"
          >
            03
          </span>
        </header>

        <div
          className="partner-marquee overflow-hidden"
          role="group"
          aria-label="Organismes du réseau"
        >
          <div className="partner-marquee__track">
            <PartnerList />
            <PartnerList decorative />
          </div>
        </div>
      </div>
    </section>
  );
}
