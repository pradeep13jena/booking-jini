"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "9,300+", label: "hotels" },
  { value: "2.8 lakh", label: "rooms managed" },
  { value: "10", label: "State Tourism Boards" },
  { value: "₹10 Cr+", label: "Processed Daily" },
];

// Placeholder avatars — swap for real customer photos via next/image
const AVATARS = [
  { initials: "RK", className: "from-rose-400 to-pink-600" },
  { initials: "AS", className: "from-slate-300 to-slate-500" },
  { initials: "MP", className: "from-amber-500 to-orange-700" },
];

export function StatsStrip({ delay = 0 }: { delay?: number }) {
  const initial = useReducedMotion() ? false : { opacity: 0, y: 16 };

  return (
    <section className="w-full">
      <div className="container flex justify-center px-6 py-7">
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
          className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-black/10 bg-white/40 py-2 pr-5 pl-2 text-base text-[#1E0D01] md:text-xl"
        >
          {/* Dots on the pill's ends, matching the frame dots */}
          <span aria-hidden className="absolute top-1/2 left-0 hidden size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-frame bg-white md:block" />
          <span aria-hidden className="absolute top-1/2 right-0 hidden size-2.5 translate-x-1/2 -translate-y-1/2 rounded-full border border-frame bg-white md:block" />

          <div className="flex -space-x-3">
            {AVATARS.map((a) => (
              <span
                key={a.initials}
                className={`flex size-9 items-center justify-center rounded-full border-2 border-white bg-linear-to-br text-xs font-semibold text-white ${a.className}`}
              >
                {a.initials}
              </span>
            ))}
          </div>

          {STATS.map((stat) => (
            <Fragment key={stat.label}>
              <span aria-hidden className="hidden h-6 w-px bg-black/15 md:block" />
              <span className="whitespace-nowrap">
                <span className="font-semibold">{stat.value}</span>{" "}
                <span className="text-[#1E0D01]/70">{stat.label}</span>
              </span>
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
