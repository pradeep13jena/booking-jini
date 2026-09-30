"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaRegSmile } from "react-icons/fa";

import { AnimatedButton } from "@/components/AnimatedButton";
import {
  HEADLINE_LINES,
  HERO_CONTENT_DELAY,
  LINE_DURATION,
  LINE_STAGGER,
} from "./timing";

const EASE = [0.65, 0, 0.35, 1] as const;

// Vertical inset is negative so descenders (y, g) aren't clipped mid-reveal
const lineVariants: Variants = {
  hidden: { clipPath: "inset(-20% 100% -20% 0%)" },
  visible: (i: number) => ({
    clipPath: "inset(-20% 0% -20% 0%)",
    transition: { duration: LINE_DURATION, delay: 0.2 + i * LINE_STAGGER, ease: EASE },
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

export function Hero() {
  // Skip the animation entirely for users who prefer reduced motion
  const initial = useReducedMotion() ? false : "hidden";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Soft warm glow behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_45%,rgba(255,196,196,0.35),transparent_70%)]"
      />

      <div className="container relative flex flex-col items-center px-6 pt-12 pb-16 text-center md:pt-14 md:pb-20">
        <motion.div
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={HERO_CONTENT_DELAY}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1E0D01] backdrop-blur-sm md:text-base"
        >
          <FaRegSmile className="h-5 w-5 text-primary" />
          Zero commission on every direct booking
        </motion.div>

        <h1 className="mt-5 font-heading text-5xl leading-[1.1] font-medium tracking-tight text-[#1E0D01] md:text-7xl">
          {HEADLINE_LINES.map((line, i) => (
            <motion.span
              key={line}
              variants={lineVariants}
              initial={initial}
              animate="visible"
              custom={i}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={HERO_CONTENT_DELAY + 0.1}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#1E0D01]/60 md:text-lg"
        >
          9,300+ hotels use Bookingjini to win more direct bookings, pay less to
          OTAs, and run rates, channels and the front desk from one screen.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={HERO_CONTENT_DELAY + 0.2}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-7"
        >
          <AnimatedButton
            text="Get My Free Revenue Check"
            href="/contact"
            colorDirection="left"
            className="px-7 py-4 text-lg font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)]"
          />
          <Link
            href="/pricing"
            className="rounded-full bg-white px-6 py-3.5 text-lg font-semibold text-[#1E0D01] transition-colors duration-300 hover:bg-white/70"
          >
            See what OTAs cost you
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={HERO_CONTENT_DELAY + 0.3}
          className="mt-6 text-sm text-[#1E0D01]/50 md:text-base"
        >
          20 minutes · Real numbers for your hotel · No obligation
        </motion.p>
      </div>
    </section>
  );
}
