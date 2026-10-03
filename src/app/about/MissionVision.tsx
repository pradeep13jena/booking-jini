import Image from "next/image";
import type { IconType } from "react-icons";
import { LuCircleCheck, LuOctagonAlert, LuSmile } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { DUMMY } from "./dummy-images";

const PILLARS: { icon: IconType; title: string; description: string }[] = [
  {
    icon: LuOctagonAlert,
    title: "Make travel faster, cheaper and better with technology",
    description:
      "Give independent hotels the tools to own their guest relationships, sell directly and compete on equal footing with the biggest hospitality brands.",
  },
  {
    icon: LuCircleCheck,
    title: "To become the operating system for hotels worldwide",
    description:
      "To become the most trusted growth engine in hospitality and build a global hotel community powered by connected technology.",
  },
];

export function MissionVision() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          align="left"
          badge="Mission & Vision"
          icon={<LuSmile className="h-3.5 w-3.5 text-primary" />}
          title={
            <>
              Small hotels deserve
              <br />
              better technology
            </>
          }
          description="Independent hotels often manage bookings, distribution, property operations, guests and marketing through separate systems that do not work together."
        />

        <Reveal className="relative mt-10 overflow-hidden rounded-3xl">
          {/* Image is a backdrop on desktop; on mobile the cards stack under it */}
          <div className="relative aspect-video md:absolute md:inset-0 md:aspect-auto">
            <Image
              src={DUMMY.office}
              alt="Bookingjini office interior"
              fill
              sizes="(min-width: 1200px) 1150px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative bg-white/90 p-3 md:mx-auto md:my-24 md:max-w-3xl md:rounded-2xl md:p-3 md:backdrop-blur-sm lg:my-28">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PILLARS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-xl border border-black/5 bg-[#F7F7F7] p-5">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-black/5 bg-white text-[#1E0D01]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-10 font-semibold text-[#1E0D01]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1E0D01]/60">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
