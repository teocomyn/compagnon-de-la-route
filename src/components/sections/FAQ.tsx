import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/faq";

export function FAQ() {
  return (
    <section className="section-shell section-y border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-16">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
            Questions courantes
          </p>
          <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.045em] text-white-90">
            Avant de vous engager
          </h2>
        </div>

        <div className="border-t border-white/15">
          {faqItems.map((item) => (
            <details key={item.q} className="group border-b border-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left font-semibold text-white-90 marker:content-none">
                <span>{item.q}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-orange-300 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-7 text-white-60">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
