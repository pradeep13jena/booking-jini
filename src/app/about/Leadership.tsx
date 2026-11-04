import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { LuSmile } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import {
  anshulChauhan,
  gourabNandy,
  harishSharma,
  himanshuGoel,
  manojPandia,
  manojPandiaTeam,
  namrataSwain,
  pallabGoswami,
  sibasishMishra,
  swostiMishra,
} from "@/lib/image";
import { SplitHeading } from "./Headings";

type Leader = { name: string; role: string; photo: string | StaticImageData };

// Board of directors, shown right below the Founder section
export const TOP_LEADERS: Leader[] = [
  { name: "Sibasish Mishra", role: "Founder & CEO", photo: sibasishMishra },
  { name: "Swosti Mishra", role: "Director", photo: swostiMishra },
  { name: "Manoj Pandia", role: "Director of Technology", photo: manojPandia },
  { name: "Himanshu Goel", role: "Board Member", photo: himanshuGoel },
  // TODO: confirm Harish Sharma's title (design still shows a placeholder)
  { name: "Harish Sharma", role: "Board Member", photo: harishSharma },
];

// Key leadership, shown right below the Investors section
export const LEADERS: Leader[] = [
  { name: "Gourab Nandy", role: "Sales Vice President", photo: gourabNandy },
  { name: "Anshul Chauhan", role: "Evangelist", photo: anshulChauhan },
  { name: "Namrata Swain", role: "AVP - Operations", photo: namrataSwain },
  { name: "Manoj Pandia", role: "Chief Architect", photo: manojPandiaTeam },
  { name: "Pallab Goswami", role: "Vice President", photo: pallabGoswami },
];

// Same card grid for both lists; each usage passes its own heading text
export function Leadership({
  leaders,
  badge,
  title,
  description,
}: {
  leaders: Leader[];
  badge: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SplitHeading icon={LuSmile} badge={badge} title={title} description={description} />

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {leaders.map((leader, i) => (
            <Reveal
              as="li"
              key={leader.name}
              index={i}
              className="group relative aspect-4/5 overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={leader.photo}
                alt={leader.name}
                fill
                sizes="(min-width: 1024px) 230px, (min-width: 640px) 33vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
