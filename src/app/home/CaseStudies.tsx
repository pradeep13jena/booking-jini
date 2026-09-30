"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

import { AnimatedButton } from "@/components/AnimatedButton";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface Testimonial {
  initials: string;
  name: string;
  quote: ReactNode;
  meta: ReactNode;
}

// Copy in <Placeholder> is waiting on real customer quotes
const TESTIMONIALS: Testimonial[] = [
  {
    initials: "HR",
    name: "Himalayan Retreat",
    quote: (
      <Placeholder>
        [Result in numbers, e.g. our OTA share dropped from 70% to 45% in one
        season.]
      </Placeholder>
    ),
    meta: (
      <>
        <Placeholder>[Name, Owner]</Placeholder> ·{" "}
        <Placeholder>[City · rooms]</Placeholder>
      </>
    ),
  },
  {
    initials: "AG",
    name: "Anamika Gupta",
    quote: (
      <Placeholder>
        [Time saved, e.g. rate updates that took 2 hours now take 5 minutes.]
      </Placeholder>
    ),
    meta: (
      <>
        <Placeholder>[Role]</Placeholder> · Hotel Mistywoods
      </>
    ),
  },
  {
    initials: "WA",
    name: "Weekend Address",
    quote: (
      <Placeholder>
        [Support story, e.g. a real person picked up at 2 am and fixed it.]
      </Placeholder>
    ),
    meta: (
      <>
        <Placeholder>[Name, GM]</Placeholder> ·{" "}
        <Placeholder>[City · rooms]</Placeholder>
      </>
    ),
  },
];

// Before/after bars grow up from the baseline when scrolled into view
function GrowthChart() {
  const reduceMotion = useReducedMotion();
  const grow = (delay: number) => ({
    initial: reduceMotion ? false : { scaleY: 0 },
    whileInView: { scaleY: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] as const },
  });

  return (
    <div className="relative mt-10">
      <div className="relative flex h-48 items-end justify-between border-b border-white/10">
        <div className="flex w-[30%] flex-col items-start">
          <span className="mb-2 text-sm text-white/70">₹40 L</span>
          <motion.span
            {...grow(0.1)}
            className="block h-6 w-full origin-bottom rounded-t-lg bg-white/15"
          />
        </div>

        {/* Curved growth arrow between the bars */}
        <svg
          aria-hidden
          viewBox="0 0 140 90"
          className="absolute bottom-6 left-[32%] w-[34%] text-primary"
          fill="none"
        >
          <path
            d="M2 82 C 50 82, 70 20, 132 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M122 4 L133 8 L125 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex h-full w-[30%] flex-col items-end justify-end">
          <span className="mb-2 font-heading text-xl font-bold">₹2.4 Cr</span>
          <motion.span
            {...grow(0.4)}
            className="block h-[80%] w-full origin-bottom rounded-t-lg bg-linear-to-b from-[#FF8A2A] to-[#E0560B]"
          />
        </div>
      </div>
      <div className="mt-3 flex justify-between text-xs">
        <span className="w-[30%] text-center text-white/60">Before</span>
        <span className="w-[30%] text-center font-semibold">After</span>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Customer results"
          icon={<FaStar className="h-3.5 w-3.5 text-primary" />}
          title="Real hotels. Real rupees."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Case study */}
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#1E0D01] p-7 text-white md:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-primary/30 blur-3xl"
              />

              <p className="relative text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                Case study
              </p>
              <h3 className="relative mt-3 max-w-sm font-heading text-3xl leading-tight font-bold md:text-4xl">
                From ₹40 lakh to ₹2.4 crore in website bookings.
              </h3>
              <p className="relative mt-4 max-w-md text-sm leading-relaxed text-white/70">
                <Placeholder>[Hotel name, city, rooms]</Placeholder> grew direct
                revenue 6x in <Placeholder>[time period]</Placeholder> by using
                the Bookingjini booking engine, website and CRM together.
              </p>

              <div className="relative mt-auto">
                <GrowthChart />
              </div>

              <AnimatedButton
                text="Read how they did it"
                href="/customer"
                colorDirection="left"
                className="relative mt-8 self-start font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.35)]"
              />
            </div>
          </Reveal>

          {/* Testimonials */}
          <div className="flex flex-col gap-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.initials} index={i + 1} className="flex-1">
                <figure className="relative flex h-full flex-col rounded-3xl bg-white p-6">
                  <FaQuoteRight
                    aria-hidden
                    className="absolute top-6 right-6 h-6 w-6 text-black/10"
                  />
                  <div
                    className="flex gap-1 text-primary"
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FaStar key={s} className="h-3 w-3" />
                    ))}
                  </div>

                  <blockquote className="mt-4 pr-8 text-sm leading-relaxed text-[#1E0D01]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3 border-t border-black/5 pt-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1E0D01] text-xs font-semibold text-white">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#1E0D01]">
                        {t.name}
                      </span>
                      <span className="block text-xs text-[#1E0D01]/60">
                        {t.meta}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
