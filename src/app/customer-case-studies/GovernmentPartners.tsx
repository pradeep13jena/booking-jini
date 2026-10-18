import Image from "next/image";
import { LuUsers } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { GOVERNMENT_PARTNERS } from "./data";

export function GovernmentPartners() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Government partners"
          icon={<LuUsers className="h-3.5 w-3.5 text-primary" />}
          weight="semibold"
          title="Trusted by state tourism boards and government undertakings"
          description="Tourism departments choose partners carefully. These bodies run bookings for their state properties on Bookingjini."
        />

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-2">
          {GOVERNMENT_PARTNERS.map((partner, i) => (
            <Reveal as="li" key={partner.name} index={i % 2}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-transparent bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_12px_28px_rgba(249,117,24,0.08)]">
                <span className="flex h-14 w-20 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white p-2 md:w-24">
                  {partner.logo ? (
                    <Image src={partner.logo} alt={`${partner.name} logo`} className="max-h-10 w-auto object-contain" />
                  ) : (
                    // TODO: placeholder until the partner logo is added in data.ts
                    <span className="font-heading text-sm font-semibold text-primary">{partner.name.split(" ")[0]}</span>
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="font-sans text-base font-medium text-[#1E0D01]">{partner.name}</h3>
                  {partner.body && <p className="mt-0.5 text-xs leading-snug text-[#1E0D01]/60">{partner.body}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
