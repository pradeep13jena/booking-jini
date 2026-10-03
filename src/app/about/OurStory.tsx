"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { LuUsers } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";

const STORY =
  "Bookingjini is headquartered in Bhubaneswar, Odisha, with a team of 60+ people working to make hotel technology simpler and more accessible. Today, Bookingjini primarily serves the Indian hospitality market, with ambitions to expand into the US, UK and Oceania.";

const FACTS = [
  { value: "2017", label: "Founded" },
  { value: "60+", label: "Team Members" },
];

// One word whose opacity follows its slice of the scroll progress
function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

export function OurStory() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  // 0 when the paragraph enters the lower part of the viewport, 1 once it reaches the middle
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = STORY.split(" ");

  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 gap-8 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-[#1E0D01]">
            <LuUsers className="h-3.5 w-3.5 text-primary" />
            Our Story
          </span>
        </Reveal>

        <div>
          <p className="text-sm text-[#1E0D01]/60">Built in India. Growing beyond it.</p>
          <p ref={ref} className="mt-3 text-xl leading-snug text-[#1E0D01] md:text-3xl">
            {reduceMotion
              ? STORY
              : words.map((word, i) => (
                  <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                    {word}
                  </Word>
                ))}
          </p>

          <dl className="mt-10 flex gap-14">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse gap-2">
                <dt className="text-xs text-[#1E0D01]/60">{fact.label}</dt>
                <dd className="text-3xl text-[#1E0D01] md:text-4xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
