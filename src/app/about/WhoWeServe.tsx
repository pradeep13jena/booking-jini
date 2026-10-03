import type { IconType } from "react-icons";
import { LuBuilding2, LuCrown, LuTrendingUp, LuUsers, LuZap } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";

const SEGMENTS: { icon: IconType; title: string; description: string }[] = [
  { icon: LuCrown, title: "Independent & boutique hotels", description: "Grow direct revenue and simplify operations." },
  { icon: LuTrendingUp, title: "Growing hotels", description: "Replace fragmented systems with one connected platform." },
  { icon: LuBuilding2, title: "Hotel groups & chains", description: "Manage multiple properties with greater control." },
  { icon: LuZap, title: "Homestays", description: "Simple technology without unnecessary complexity." },
  { icon: LuUsers, title: "Tourism boards", description: "Technology built to support hospitality operations at scale." },
];

export function WhoWeServe() {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        {/* Heading stays in view while the list scrolls past on desktop */}
        <Reveal className="md:sticky md:top-28 md:self-start">
          <h2 className="font-heading text-3xl font-medium tracking-tight text-[#1E0D01] md:text-4xl">
            Built for the hospitality businesses driving the industry
          </h2>
        </Reveal>

        <ul className="flex flex-col gap-8">
          {SEGMENTS.map(({ icon: Icon, title, description }, i) => (
            <Reveal as="li" key={title} index={i} className="relative pl-5">
              {/* Orange accent rail that fades out downward */}
              <span aria-hidden className="absolute top-0 left-0 h-full w-0.5 bg-linear-to-b from-primary to-primary/0" />
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-white text-primary shadow-[0_2px_8px_rgba(30,13,1,0.06)]">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-medium text-[#1E0D01]">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#1E0D01]/60">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
