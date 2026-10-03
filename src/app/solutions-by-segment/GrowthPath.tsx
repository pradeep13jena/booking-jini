import type { IconType } from "react-icons";
import { FaBuilding, FaCircleNodes, FaHouseUser } from "react-icons/fa6";

import { Reveal } from "@/components/reusable/Reveal";

const STAGES: { icon: IconType; title: string; description: string; tint: string }[] = [
  { icon: FaHouseUser, title: "Independent property", description: "Direct bookings + Simple operations", tint: "bg-[#FDEBDD]" },
  { icon: FaBuilding, title: "Growing hotel", description: "Connected systems + Better visibility", tint: "bg-[#FEF1E6]" },
  { icon: FaCircleNodes, title: "Hotel group", description: "Central control & management", tint: "bg-[#FAF5F1]" },
];

export function GrowthPath() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <Reveal className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">How it works</p>
            <h2 className="mt-2 font-heading text-4xl font-medium tracking-tight text-[#1E0D01] md:text-5xl">
              Built to grow with
              <br />
              your business
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#1E0D01]/60 md:pb-2">
            Start with what your hotel needs today and stay connected as your operation becomes more complex.
          </p>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {STAGES.map(({ icon: Icon, title, description, tint }, i) => (
            <Reveal as="li" key={title} index={i} className={`flex flex-col rounded-2xl p-5 md:p-6 ${tint}`}>
              <span className="flex size-10 items-center justify-center rounded-full border-2 border-white text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mx-auto my-10 flex size-18 items-center justify-center rounded-xl bg-white text-primary md:my-14">
                <Icon className="h-9 w-9" />
              </span>
              <h3 className="font-heading text-lg font-medium text-[#1E0D01] md:text-xl">{title}</h3>
              <p className="mt-1 text-sm text-[#1E0D01]/60">{description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
