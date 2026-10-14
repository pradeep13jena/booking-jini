"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Reveal } from "@/components/reusable/Reveal";

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-[#1E0D01]">{children}</strong>
);

const POINTS: ReactNode[] = [
  <>
    <B>Sibasish Mishra</B> founded Bookingjini in Bhubaneswar in 2017 and has led it as CEO since. Before Bookingjini he
    worked in banking and built earlier ventures as a serial entrepreneur.
  </>,
  <>
    He saw the problem first-hand as a traveller: hotels handing 30 to 35% of their room rate to booking agencies. He
    set out to give independent Indian hotels the same direct-booking technology the big chains have, at a price a
    10-room property can afford.
  </>,
  <>
    Under his leadership Bookingjini has grown from 20 hotels to 9,300+, and earned the trust of 10 state tourism
    boards.{" "}
    {/* TODO: replace placeholder with confirmed bio details */}
    <mark className="rounded bg-[#FDE6D6] px-1 text-primary">[Add education, earlier companies and any awards]</mark>
  </>,
];

const FACTS = [
  { value: "2017", label: "Founded Bookingjini" },
  { value: "Ex-banker", label: "Finance background" },
  { value: "Bhubaneswar", label: "Built from Odisha" },
];

// Bullet dot that fills orange while its paragraph sits in the reading zone
function ScrollDot() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      initial={reduceMotion ? false : { backgroundColor: "#FFFFFF" }}
      whileInView={{ backgroundColor: "#F97518" }}
      viewport={{ margin: "0px 0px -35% 0px" }}
      transition={{ duration: 0.3 }}
      className="absolute top-1.5 left-0 size-2.5 rounded-full border-2 border-primary bg-white"
    />
  );
}

export function Founder() {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 gap-3 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:py-20">
        {/* TODO: swap the gradient for the founder's portrait (next/image, fill + object-cover) */}
        <Reveal className="relative min-h-96 overflow-hidden rounded-3xl bg-linear-to-b from-[#ECE9E4] via-[#DCD8D2] to-[#8E8881]">
          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between rounded-2xl bg-white p-4">
            <div>
              <p className="font-heading text-lg font-medium text-[#1E0D01]">Sibasish Mishra</p>
              <p className="text-xs text-primary">Founder &amp; CEO</p>
            </div>
            <p className="text-[11px] tracking-widest text-[#1E0D01]/50">EST. 2017</p>
          </div>
        </Reveal>

        <Reveal index={1} className="rounded-3xl bg-white p-6 md:p-10">
          <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-[#1E0D01] md:text-4xl">
            A banker who saw hotels losing <span className="text-primary">a third</span> of every booking, and built the
            fix.
          </h2>
          <ul className="mt-8">
            {POINTS.map((point, i) => (
              <li key={i} className="relative pb-6 pl-7 last:pb-0">
                {/* Connector between dots */}
                {i < POINTS.length - 1 && (
                  <span aria-hidden className="absolute top-5 bottom-1 left-[4.5px] w-px bg-primary/20" />
                )}
                <ScrollDot />
                <p className="text-sm leading-relaxed text-[#1E0D01]/60">{point}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-[#1E0D01] p-6 md:col-span-2 md:grid-cols-2 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(249,117,24,0.4),transparent_45%)]"
          />
          <blockquote className="relative">
            <RiDoubleQuotesL aria-hidden className="h-8 w-8 text-primary" />
            {/* TODO: replace with the founder's quote */}
            <p className="mt-4 font-heading text-2xl font-medium text-white md:text-3xl">[Founder quote in his own words]</p>
            <footer className="mt-4 text-sm text-white/50">Sibasish Mishra</footer>
          </blockquote>

          <dl className="relative">
            {FACTS.map((fact) => (
              <div
                key={fact.value}
                className="group flex items-baseline justify-between gap-4 border-t border-white/10 py-4 last:border-b"
              >
                <dt className="font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-primary">
                  {fact.value}
                </dt>
                <dd className="text-xs text-white/50">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
