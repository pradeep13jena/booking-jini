import { LuTarget } from "react-icons/lu";

import { SectionHeading } from "@/components/reusable/SectionHeading";
import { Milestones } from "./Milestones";

export function Mission() {
  return (
    <section className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_10%,rgba(255,196,196,0.3),transparent_70%)]"
      />
      <div className="container relative px-6 py-16 md:py-20">
        <SectionHeading
          badge="Our mission"
          weight="semibold"
          icon={<LuTarget className="h-3.5 w-3.5 text-primary" />}
          title="Help every hotel earn more revenue at lower cost, from one connected platform."
          description="More direct bookings. Less commission. Fewer hours lost to manual work. Everything we build is measured against those three outcomes for the hotelier."
        />
        <Milestones />
      </div>
    </section>
  );
}
