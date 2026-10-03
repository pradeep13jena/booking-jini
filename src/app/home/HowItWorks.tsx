import type { IconType } from "react-icons";
import { FaBolt, FaBuilding, FaHouseUser, FaProjectDiagram } from "react-icons/fa";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

// Card tint fades from warm peach to near-neutral across the three steps
const STEPS: { icon: IconType; title: string; description: string; bg: string }[] = [
  {
    icon: FaHouseUser,
    title: "Free revenue check",
    description:
      "We show you exactly how much you lose to OTA commission today.",
    bg: "bg-[#FFE9DA]",
  },
  {
    icon: FaBuilding,
    title: "We set everything up",
    description:
      "Our team moves your rates, rooms and channels, and trains your staff.",
    bg: "bg-[#FFF0E5]",
  },
  {
    icon: FaProjectDiagram,
    title: "Watch direct bookings grow",
    description:
      "Track revenue and savings from one dashboard, every day.",
    bg: "bg-[#FBF3EE]",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="How it works"
          icon={<FaBolt className="h-3.5 w-3.5 text-primary" />}
          title="Live in [X] days. We do the heavy lifting."
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, description, bg }, i) => (
            <Reveal
              as="li"
              key={title}
              index={i}
              className={`flex h-full flex-col rounded-3xl p-5 ${bg}`}
            >
              <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-white text-xs font-medium text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="mx-auto my-10 flex size-14 items-center justify-center rounded-xl bg-white shadow-[0_4px_16px_rgba(249,117,24,0.12)]">
                <Icon className="h-7 w-7 text-primary" />
              </span>

              <h3 className="mt-auto text-lg font-semibold text-[#1E0D01]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E0D01]/60">
                {description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
