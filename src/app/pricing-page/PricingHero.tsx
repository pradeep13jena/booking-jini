"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaRegSmile } from "react-icons/fa";
import { LuCircleCheck } from "react-icons/lu";

import { HERO_POINTS } from "./data";

const EASE = [0.65, 0, 0.35, 1] as const;

// Same left-to-right wipe as the home hero; negative inset keeps descenders (p, y) visible
const lineVariants: Variants = {
  hidden: { clipPath: "inset(-20% 100% -20% 0%)" },
  visible: (i: number) => ({
    clipPath: "inset(-20% 0% -20% 0%)",
    transition: { duration: 0.9, delay: 0.15 + i * 0.45, ease: EASE },
  }),
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// Supporting copy starts as the second headline line finishes
const CONTENT_DELAY = 1.1;

export function PricingHero() {
  const initial = useReducedMotion() ? false : "hidden";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Soft pink glow, matching the home hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(255,196,196,0.35),transparent_70%)]"
      />

      <div className="container relative flex flex-col items-center px-6 pt-20 pb-24 text-center md:pt-28 md:pb-32">
        <motion.span
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1E0D01] backdrop-blur-sm md:text-base"
        >
          <FaRegSmile className="h-4 w-4 text-primary" />
          Plans & pricing
        </motion.span>

        <h1 className="mt-5 font-heading text-5xl leading-[1.05] font-semibold tracking-tight text-[#1E0D01] md:text-7xl">
          <motion.span variants={lineVariants} initial={initial} animate="visible" custom={0} className="block">
            Simple pricing
          </motion.span>
          <motion.span variants={lineVariants} initial={initial} animate="visible" custom={1} className="block">
            that{" "}
            <span className="bg-linear-to-b from-[#FFB347] to-primary bg-clip-text text-transparent">pays</span> for
            itself.
          </motion.span>
        </h1>

        <motion.p
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={CONTENT_DELAY}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#1E0D01]/60 md:text-lg"
        >
          Pick the plan that fits your hotel today and add more as you grow. Every plan keeps 100% of your
          direct-booking revenue in your pocket.
        </motion.p>

        <motion.ul
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={CONTENT_DELAY + 0.15}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
        >
          {HERO_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-base text-[#1E0D01] md:text-lg">
              <span className="flex size-9 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(249,117,24,0.12)]">
                <LuCircleCheck className="h-4.5 w-4.5 text-primary" />
              </span>
              {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
