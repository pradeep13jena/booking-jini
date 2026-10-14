"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reusable/Reveal";
import { Pill } from "./Headings";

const MILESTONES: { year: string; title: string; description: string; tag?: string }[] = [
  {
    year: "Early 2017",
    title: "The idea",
    description: "A conversation with a hotel manager in the US shows how much hotels lose to agency commissions.",
  },
  {
    year: "Late 2017",
    title: "Bookingjini goes live in Bhubaneswar",
    description: "Pilot with Odisha Tourism Development Corporation. Five people, twenty hotels. Backed by a Startup Odisha grant.",
    tag: "First state tourism partner",
  },
  {
    year: "2018",
    title: "Pre-seed funding",
    description:
      "$100,000 from Neotechub and angel investors, including hotelier Kapil Chopra, Founder & CEO of Postcard Hotels and Resorts.",
  },
  {
    year: "2019",
    title: "Seed round",
    description: "Led by Mumbai Angels Network to grow the team and scale operations. 1,000+ hotels on the platform.",
  },
  {
    year: "2021",
    title: "Growing through the pandemic",
    description: "2,200+ hotels across 120+ Indian cities. Bookingjini mobile apps launch on Android and iOS.",
  },
  {
    year: "2022",
    title: "Beyond India",
    description: "3,000+ hotels, with properties in Bangladesh, Sri Lanka, Nepal and the UK.",
  },
  {
    year: "2024",
    title: "Our AI journey begins",
    description: "We start building AI into how hotels sell rooms, serve guests and run their day.",
  },
  {
    year: "2025",
    title: "Bookingjini turns profitable",
    description: "A sustainable business, built to support hotels for the long term.",
    tag: "Profitable",
  },
  {
    year: "Today",
    title: "One connected platform for 9,300+ hotels",
    description: "2.8 lakh rooms, ₹10 crore processed every day, and 10 state tourism boards.",
    tag: "Still growing",
  },
];

const LAST = MILESTONES.length - 1;
// Vertical offset of each dot from the top of its row; keeps dot, year and card title aligned
const DOT_TOP = "top-9";

// Timeline whose active entry follows the scroll; the sticky card on the left mirrors it
export function Milestones() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-index]");
    if (!items?.length) return;

    // A thin band across the middle of the viewport: whichever row crosses it becomes active
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -54% 0px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const current = MILESTONES[active];

  return (
    <div className="mt-12 grid grid-cols-1 gap-10 rounded-3xl bg-white/40 p-4 md:mt-16 md:grid-cols-[1fr_1.35fr] md:p-8">
      <Reveal className="md:sticky md:top-28 md:self-start">
        <Pill icon={LuArrowRight}>Milestones</Pill>
        <h3 className="mt-5 font-heading text-4xl leading-[1.05] font-medium tracking-tight text-[#1E0D01] md:text-5xl">
          From 20 hotels
          <br />
          to <span className="text-primary">9,300+</span>
        </h3>

        {/* Only meaningful while sticky, so desktop only */}
        <div className="mt-8 hidden rounded-3xl bg-white p-6 shadow-[0_8px_32px_rgba(30,13,1,0.05)] md:block md:p-8">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#1E0D01]/60">Now reading</span>
            <span className="text-primary tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(MILESTONES.length).padStart(2, "0")}
            </span>
          </div>
          <div className="relative mt-4 h-16 overflow-hidden md:h-20" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={current.year}
                initial={reduceMotion ? false : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduceMotion ? undefined : { y: "-100%", opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="font-heading text-5xl leading-none font-medium tracking-tight whitespace-nowrap text-[#1E0D01] md:text-7xl"
              >
                {current.year}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-6 h-1 overflow-hidden rounded-full bg-[#ECE6DF]">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${((active + 1) / MILESTONES.length) * 100}%` }}
            />
          </div>
        </div>
      </Reveal>

      <ol ref={listRef}>
        {MILESTONES.map(({ year, title, description, tag }, i) => {
          const isActive = i === active;
          const isPast = i < active;
          return (
            <li
              key={year}
              data-index={i}
              aria-current={isActive ? "step" : undefined}
              className="grid grid-cols-[64px_20px_1fr] gap-x-3 pb-4 last:pb-0 md:grid-cols-[100px_28px_1fr] md:gap-x-4"
            >
              <span
                className={cn(
                  "pt-7 font-heading text-sm font-medium transition-colors duration-300 md:text-lg",
                  isActive ? "text-primary" : isPast ? "text-[#1E0D01]" : "text-[#1E0D01]/50"
                )}
              >
                {year}
              </span>

              {/* Rail: grey base, orange fill up to the active dot */}
              <div className="relative">
                {i > 0 && (
                  <span aria-hidden className="absolute top-0 left-1/2 h-9 w-px -translate-x-1/2 bg-[#E5DED6]">
                    <span
                      className={cn(
                        "absolute inset-0 origin-top bg-primary transition-transform duration-300",
                        i <= active ? "scale-y-100" : "scale-y-0"
                      )}
                    />
                  </span>
                )}
                {i < LAST && (
                  <span aria-hidden className={cn("absolute bottom-0 left-1/2 w-px -translate-x-1/2 bg-[#E5DED6]", DOT_TOP)}>
                    <span
                      className={cn(
                        "absolute inset-0 origin-top bg-primary transition-transform duration-500",
                        isPast ? "scale-y-100" : "scale-y-0"
                      )}
                    />
                  </span>
                )}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300",
                    DOT_TOP,
                    isActive
                      ? "border-primary bg-primary shadow-[0_0_0_6px_rgba(249,117,24,0.18)]"
                      : isPast
                        ? "border-primary bg-primary"
                        : "border-[#1E0D01]/25 bg-white"
                  )}
                />
              </div>

              <div
                className={cn(
                  "rounded-2xl border bg-white p-5 transition-all duration-300 md:p-6",
                  isActive
                    ? "border-primary/50 shadow-[inset_3px_0_0_var(--color-primary),0_12px_32px_rgba(249,117,24,0.1)]"
                    : "border-transparent"
                )}
              >
                <h4 className="font-heading text-lg font-medium text-[#1E0D01] md:text-xl">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">{description}</p>
                {tag && (
                  <span className="mt-3 inline-block rounded-full bg-[#FDE6D6] px-3 py-1 text-xs text-primary">{tag}</span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
