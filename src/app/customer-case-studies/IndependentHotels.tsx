import Image from "next/image";
import { LuRocket } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { HOTELS_FOOTNOTE, INDEPENDENT_HOTELS } from "./data";

export function IndependentHotels() {
  return (
    <section id="hotels" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Independent hotels"
          icon={<LuRocket className="h-3.5 w-3.5 text-primary" />}
          title="Independent hotels that trust us"
          description="Some of the leading independent hotels and resorts that run their bookings on Bookingjini."
        />

        <Reveal className="mt-10">
          {/* gap-px over a tinted background draws the hairline grid between cells */}
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-[#EFEAE4] sm:grid-cols-3 lg:grid-cols-6">
            {INDEPENDENT_HOTELS.map((hotel) => (
              <li
                key={hotel.id}
                className="group flex h-20 items-center justify-center bg-white px-3 text-center transition-colors duration-300 hover:bg-[#FCF9F6] md:h-24"
              >
                {hotel.logo ? (
                  <Image
                    src={hotel.logo}
                    alt={hotel.name}
                    className={`max-h-12 w-auto object-contain opacity-100 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${hotel.mono ? "brightness-0" : ""}`}
                  />
                ) : (
                  <span className="text-xs font-medium text-[#C2AE9B] transition-colors duration-300 group-hover:text-[#1E0D01]">
                    {hotel.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal index={1}>
          <p className="mt-8 text-center text-sm text-[#1E0D01]/70">{HOTELS_FOOTNOTE}</p>
        </Reveal>
      </div>
    </section>
  );
}
