import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Rising signal bars — "more revenue"
function BarsIcon() {
  return (
    <span aria-hidden className="flex items-end gap-1">
      {[0.2, 0.35, 0.5, 0.75, 1].map((opacity, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-primary"
          style={{ height: 8 + i * 5, opacity }}
        />
      ))}
    </span>
  );
}

// Commission slider pushed almost to zero — "lower cost"
function SliderIcon() {
  return (
    <span aria-hidden className="flex h-2 w-16 overflow-hidden rounded-full">
      <span className="flex-1 bg-white" />
      <span className="w-3 bg-primary" />
    </span>
  );
}

// Many screens collapsing into one — "less work"
function ScreensIcon() {
  return (
    <span aria-hidden className="flex items-center gap-1.5">
      <span className="grid grid-cols-2 gap-0.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="size-1.5 rounded-xs border border-black/20" />
        ))}
      </span>
      <span className="h-px w-3 bg-black/20" />
      <span className="size-5 rounded-md bg-primary" />
    </span>
  );
}

interface Outcome {
  label: string;
  icon: ReactNode;
  value: ReactNode;
  title: string;
  description: string;
  note: ReactNode;
  featured?: boolean;
}

const OUTCOMES: Outcome[] = [
  {
    label: "More revenue",
    icon: <BarsIcon />,
    value: (
      <>
        10–15<span className="text-primary">%</span>
      </>
    ),
    title: "more direct bookings",
    description:
      "Your website becomes a sales channel. Booking engine, rate shopper and CRM work together to bring guests back to you.",
    note: (
      <>
        Hotels on Bookingjini have grown website revenue up to{" "}
        <span className="font-semibold text-primary">6x</span>.
      </>
    ),
  },
  {
    label: "Lower cost",
    icon: <SliderIcon />,
    value: (
      <>
        <span className="text-primary">₹</span>0
      </>
    ),
    title: "commission on direct bookings",
    description:
      "Every booking you move from an OTA to your own website puts the commission back in your pocket.",
    note: (
      <>
        Example: a ₹10,000 booking at 18% commission saves you{" "}
        <span className="text-primary">₹1,800</span>.
      </>
    ),
    featured: true,
  },
  {
    label: "Less work",
    icon: <ScreensIcon />,
    value: "1",
    title: "screen for your whole team",
    description:
      "Change a rate once and it updates on every channel. No double bookings. No copying between systems.",
    note: (
      <>
        Saves <Placeholder>[X] hours</Placeholder> per front desk shift every
        week.
      </>
    ),
  },
];

export function Outcomes() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="More revenue. Less cost."
          title="What changes when your hotel runs on Bookingjini"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
          {OUTCOMES.map((o, i) => (
            <Reveal
              key={o.label}
              index={i}
              // Featured card sits slightly taller than its neighbours
              className={cn(o.featured && "md:-my-2")}
            >
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl p-6 md:p-7",
                  o.featured ? "bg-[#1E0D01] text-white" : "bg-white text-[#1E0D01]"
                )}
              >
                {o.featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -left-16 size-64 rounded-full bg-primary/35 blur-3xl"
                  />
                )}

                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                    {o.label}
                  </span>
                  {o.icon}
                </div>

                <p className="relative mt-10 font-heading text-6xl font-bold tracking-tight md:text-7xl">
                  {o.value}
                </p>
                <h3 className="relative mt-4 text-xl font-semibold">{o.title}</h3>
                <p
                  className={cn(
                    "relative mt-2 mb-8 text-sm leading-relaxed",
                    o.featured ? "text-white/65" : "text-[#1E0D01]/60"
                  )}
                >
                  {o.description}
                </p>

                <div
                  className={cn(
                    // mt-auto pins the note to the card bottom so notes align across cards
                    "relative mt-auto rounded-2xl p-4 text-sm",
                    o.featured
                      ? "border border-white/10 bg-white/5 font-semibold"
                      : "bg-[#F3F2F0]"
                  )}
                >
                  {o.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
