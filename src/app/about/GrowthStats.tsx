import { LuChevronRight } from "react-icons/lu";

import { CountUp } from "../home/CountUp";
import { Reveal } from "../home/Reveal";
import { SectionHeading } from "../home/SectionHeading";

const STATS = [
  { value: "4300+", label: "Hotels on the platform" },
  { value: "180841", label: "Keys under management" },
  { value: "42L+", label: "Room nights booked" },
  { value: "16L+", label: "Bookings processed" },
  { value: "6", label: "State tourism boards" },
  { value: "7+ crore", label: "Transaction value processed per day" },
];

export function GrowthStats() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Bookingjini today"
          icon={<LuChevronRight className="h-3.5 w-3.5 text-primary" />}
          title="Growing with the hotels we serve"
        />

        <Reveal className="mt-10 rounded-2xl bg-white px-6 py-10 md:px-12 md:py-14">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-y-14">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-2">
                <dt className="max-w-44 text-xs leading-relaxed text-[#1E0D01]/60 md:text-sm">{stat.label}</dt>
                <dd className="text-2xl font-medium text-[#1E0D01] md:text-4xl">
                  <CountUp value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
