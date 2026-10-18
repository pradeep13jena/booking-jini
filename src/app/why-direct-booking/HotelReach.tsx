import { CountUp } from "@/components/reusable/CountUp";
import { Reveal } from "@/components/reusable/Reveal";

// TODO: confirm figures — the About page and home StatsStrip currently disagree on hotels/boards
const REACH = [
  { value: "4300+", label: "Hotels" },
  { value: "180K+", label: "Keys" },
  { value: "6", label: "State Tourism Boards" },
];

export function HotelReach() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_40%_50%,rgba(255,196,196,0.25),transparent_70%)]"
      />
      <div className="container relative px-6 py-16 md:py-24">
        {/* Bold heading on the left, intro line beside it, vertically centred */}
        <Reveal className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-10">
          <h2 className="font-sans text-4xl leading-[1.05] font-bold tracking-tight text-[#1E0D01] md:text-5xl">
            Built for hotels that
            <br />
            want more control
          </h2>
          <p className="max-w-md text-base leading-relaxed text-[#1E0D01]/60 md:text-lg">
            Bookingjini supports independent hotels, boutique properties, growing hotel groups and homestays.
          </p>
        </Reveal>

        <dl className="mt-14 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-3 md:mt-20">
          {REACH.map((stat, i) => (
            <Reveal key={stat.label} index={i} className="group flex flex-col items-center">
              {/* Faint ring behind each figure; warms up on hover */}
              <dd className="flex aspect-square w-44 items-center justify-center rounded-full border border-black/5 bg-white/20 font-sans text-4xl font-normal text-[#1E0D01] transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-white/50 md:w-52 md:text-5xl">
                <CountUp value={stat.value} />
              </dd>
              <dt className="mt-6 text-sm text-[#1E0D01]/60">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
