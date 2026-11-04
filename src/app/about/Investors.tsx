import Image, { type StaticImageData } from "next/image";
import { LuArrowUpRight, LuSmile } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import {
  difcDubai,
  inflectionPoint,
  letsVenture,
  mumbaiAngels,
  neotechub,
  tieIndiaAngels,
  vc888,
} from "@/lib/image";
import { SplitHeading } from "./Headings";

// TODO: add `href` for Neotechub, TiE India Angels and 888vc once confirmed.
const INVESTORS: { name: string; logo: StaticImageData; href?: string }[] = [
  { name: "Mumbai Angels", logo: mumbaiAngels, href: "https://www.mumbaiangels.com" },
  { name: "Neotechub", logo: neotechub },
  { name: "LetsVenture", logo: letsVenture, href: "https://www.letsventure.com" },
  { name: "Inflection Point Ventures", logo: inflectionPoint, href: "https://www.ipventures.in" },
  { name: "TiE India Angels", logo: tieIndiaAngels },
  { name: "888vc", logo: vc888 },
  { name: "DIFC Dubai", logo: difcDubai, href: "https://www.difc.ae" },
];

export function Investors() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SplitHeading
          icon={LuSmile}
          badge="Key investors"
          title="Backed by leading investment firms"
          description="From Mumbai to Dubai, our investors back hospitality technology built in India for hotels everywhere."
        />

        {/* 3 wide cards on top, 4 narrower below */}
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-12">
          {INVESTORS.map((investor, i) => {
            const Card = investor.href ? "a" : "div";
            return (
              <Reveal as="li" key={investor.name} index={i % 4} className={i < 3 ? "md:col-span-4" : "md:col-span-3"}>
                <Card
                  {...(investor.href && { href: investor.href, target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex h-full min-h-44 flex-col rounded-3xl bg-white p-5 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(30,13,1,0.08)] md:min-h-56"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#1E0D01]/50 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-[#F3EFEA] text-[#1E0D01]/60 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <LuArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  {/* Fixed-height box; object-contain fits wide and square logos alike */}
                  <span className="flex flex-1 items-center justify-center py-6">
                    <span className="relative h-14 w-full max-w-44 md:h-16">
                      <Image
                        src={investor.logo}
                        alt={`${investor.name} logo`}
                        fill
                        sizes="176px"
                        className="object-contain"
                      />
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[#1E0D01]/60 transition-colors duration-300 group-hover:text-[#1E0D01]">
                    {/* Orange dash slides in on hover */}
                    <span aria-hidden className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {investor.name}
                  </span>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
