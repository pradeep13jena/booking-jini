import { CountUp } from "../home/CountUp";
import { Reveal } from "../home/Reveal";

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(255,196,196,0.25),transparent_70%)]"
      />
      <div className="container relative px-6 py-16 md:py-20">
        <Reveal className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 md:px-6">
          <h2 className="font-heading text-3xl font-medium tracking-tight text-[#1E0D01] md:text-4xl">
            Built for hotels that
            <br />
            want more control
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#1E0D01]/60">
            Bookingjini supports independent hotels, boutique properties, growing hotel groups and homestays.
          </p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-14">
          {REACH.map((stat, i) => (
            <Reveal key={stat.label} index={i} className="flex flex-col items-center">
              {/* Faint ring behind each figure */}
              <dd className="flex aspect-square w-40 items-center justify-center rounded-full border border-black/5 bg-white/30 text-3xl text-[#1E0D01] md:w-44">
                <CountUp value={stat.value} />
              </dd>
              <dt className="mt-4 text-xs text-[#1E0D01]/60">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
