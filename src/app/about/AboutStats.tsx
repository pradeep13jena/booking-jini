import { CountUp } from "@/components/reusable/CountUp";
import { Reveal } from "@/components/reusable/Reveal";

// `accent` is the orange tail after the counted number
const STATS = [
  { value: "9,300", accent: "+", label: "Hotels on the platform" },
  { value: "2.8", accent: " lakh", label: "Rooms managed" },
  { value: "₹10", accent: " Cr+", label: "Processed every day" },
  { value: "10", accent: "", label: "State tourism boards" },
];

export function AboutStats() {
  return (
    <section className="w-full">
      <div className="container px-6 py-12 md:py-16">
        <Reveal>
          <dl className="grid grid-cols-2 gap-2 rounded-3xl bg-white p-2 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-2 rounded-2xl bg-[#F7F3EF] px-5 py-5 transition-colors duration-300 hover:bg-[#F2EAE2] md:px-6 md:py-6"
              >
                <dt className="text-xs text-[#1E0D01]/70">{stat.label}</dt>
                <dd className="font-heading text-3xl font-medium tracking-tight text-[#1E0D01] md:text-5xl">
                  <CountUp value={stat.value} />
                  <span className="text-primary">{stat.accent}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
