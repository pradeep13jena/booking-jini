import Link from "next/link";
import { LuArrowUpRight, LuRocket } from "react-icons/lu";

import { CountUp } from "@/components/reusable/CountUp";
import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { RESULTS } from "./data";

export function Results() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Results"
          icon={<LuRocket className="h-3.5 w-3.5 text-primary" />}
          title="What hotels earn on Bookingjini"
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {RESULTS.map((result, i) => (
            <Reveal as="li" key={result.hotel} index={i}>
              {/* Whole card is the link; hover lifts it and turns the arrow to point right */}
              <Link
                href={result.href}
                className="group flex h-full flex-col rounded-4xl bg-white p-2 shadow-[0_4px_24px_rgba(30,13,1,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(249,117,24,0.12)]"
              >
                <div className="px-5 pt-8 pb-10">
                  <p className="font-heading text-7xl font-medium tracking-tight text-[#1E0D01] md:text-8xl">
                    <CountUp value={result.value} />
                    <span className="ml-1 text-4xl text-primary md:text-5xl">{result.accent}</span>
                  </p>
                  <p className="mt-6 max-w-xs text-base leading-relaxed text-[#1E0D01]/80 md:text-lg">{result.label}</p>
                </div>

                <div className="mt-auto flex items-center gap-3 rounded-3xl bg-[#F7F3EF] p-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#FFEBDD] font-heading text-lg font-medium text-primary">
                    {result.hotel.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading text-lg font-medium text-[#1E0D01] md:text-xl">{result.hotel}</span>
                    <span className="block text-sm text-[#1E0D01]/50">{result.city}</span>
                  </span>
                  <span className="ml-auto flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#FF7A1A] to-[#E0560B] text-white">
                    <LuArrowUpRight aria-hidden className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
