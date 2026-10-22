import { LuSettings } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { INCLUDED } from "./data";

export function Included() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Included with every plan"
          icon={<LuSettings className="h-3.5 w-3.5 text-primary" />}
          title="No surprises. Everything you need to go live."
        />

        <Reveal className="mt-10">
          <ul className="grid grid-cols-1 gap-2 rounded-4xl bg-white p-2 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map(({ icon: Icon, tag, title, description }) => (
              // Hover warms the card and fills the icon tile orange
              <li
                key={title}
                className="group flex flex-col rounded-3xl bg-[#F7F3EF] p-6 transition-colors duration-300 hover:bg-linear-to-br hover:from-[#FFEBDD] hover:to-[#FBF3EC] md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white text-primary shadow-[0_4px_14px_rgba(30,13,1,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:bg-linear-to-b group-hover:from-[#FF7A1A] group-hover:to-[#E0560B] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="pt-3 text-xs font-medium tracking-[0.18em] text-[#E0560B] uppercase md:text-sm">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-14 font-heading text-xl leading-snug font-medium text-[#1E0D01] md:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1E0D01]/70 md:text-base">{description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
