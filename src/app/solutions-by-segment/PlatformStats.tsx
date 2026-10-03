import { CountUp } from "../home/CountUp";
import { Reveal } from "../home/Reveal";

const STATS = [
  { value: "4,300+", label: "Hotels" },
  { value: "180,841", label: "Keys under management" },
  { value: "42L+", label: "Room nights booked" },
  { value: "Up to 25%", label: "Reported revenue uplift" },
];

export function PlatformStats() {
  return (
    <section className="w-full">
      <div className="container px-6 py-14 md:py-16">
        <Reveal className="relative overflow-hidden rounded-2xl bg-linear-to-b from-[#E8820E] to-[#FBB57A] px-6 py-8 md:px-8 md:py-10">
          {/* Decorative concentric arcs in the corner */}
          <span aria-hidden className="absolute -right-24 -bottom-40 size-96 rounded-full border-[36px] border-white/20" />

          <dl className="relative grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse gap-2 px-2 md:px-4 ${i % 2 ? "border-l border-white/25" : ""} ${i === 2 ? "lg:border-l lg:border-white/25" : ""}`}
              >
                <dt className="text-xs text-white/90 md:text-sm">{stat.label}</dt>
                <dd className="font-heading text-2xl font-semibold text-white md:text-4xl">
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
