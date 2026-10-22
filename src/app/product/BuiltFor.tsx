import { LuUsers } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { PLAN_INCLUDES, PROPERTY_TYPES } from "./data";

export function BuiltFor() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Built For"
          icon={<LuUsers className="h-3.5 w-3.5 text-primary" />}
          title="Made for every kind of stay"
          description="From a 10-room homestay to a 40-property chain or a state tourism corporation, the same platform scales with you."
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {PROPERTY_TYPES.map(({ name, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={name}
              index={i % 4}
              className="group flex flex-col rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(30,13,1,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(249,117,24,0.12)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#FFF1E6] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs text-[#1E0D01]/40">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 font-heading text-lg font-medium text-[#1E0D01] md:text-xl">{name}</h3>
            </Reveal>
          ))}
        </ul>

        <Reveal className="relative mt-4 overflow-hidden rounded-4xl bg-[#1E0D01] p-7 text-white md:p-10">
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Included</p>
              <h2 className="mt-3 font-heading text-4xl leading-tight font-medium md:text-5xl">
                Every plan
                <br />
                includes
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {PLAN_INCLUDES.map(({ name, description, icon: Icon }) => (
                <li key={name} className="flex gap-4 border-t border-white/10 py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-b from-[#FF7A1A] to-[#E0560B]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-medium">{name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
