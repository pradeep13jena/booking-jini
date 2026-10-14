import Image from "next/image";
import { LuSmile } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SplitHeading } from "./Headings";
import { DUMMY } from "./dummy-images";

const LEADERS = [
  { name: "Gourab Nandy", role: "Sales Vice President" },
  { name: "Anshul Chauhan", role: "Evangelist" },
  { name: "Namrata Swain", role: "AVP - Operations" },
  { name: "Manoj Pandia", role: "Chief Architect" },
  { name: "Pallab Goswami", role: "Vice President" },
];

export function Leadership() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SplitHeading
          icon={LuSmile}
          badge="Key leadership"
          title="The team running Bookingjini every day"
          description="The people leading sales, operations, technology and customer growth for 9,300+ hotels."
        />

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {LEADERS.map((leader, i) => (
            <Reveal
              as="li"
              key={leader.name}
              index={i}
              className="group relative aspect-4/5 overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={DUMMY.leadership[i]}
                alt={leader.name}
                fill
                sizes="(min-width: 1024px) 230px, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Navy fade so the caption stays readable on any photo */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1a1d2b]/90 via-[#1a1d2b]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <p className="text-sm font-semibold text-white md:text-base">{leader.name}</p>
                <p className="mt-1 text-xs text-white/80 md:text-sm">{leader.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
