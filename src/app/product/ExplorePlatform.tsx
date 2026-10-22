"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuChevronRight, LuCode, LuRocket } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { cn } from "@/lib/utils";
import { PILLARS, PLATFORM_FOUNDATION } from "./data";

const pad = (n: number) => String(n).padStart(2, "0");

export function ExplorePlatform() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pillar = PILLARS[active];

  // Arrow keys move between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e: KeyboardEvent) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + PILLARS.length) % PILLARS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="explore" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="All Products"
          icon={<LuRocket className="h-3.5 w-3.5 text-primary" />}
          title="Explore the platform"
          description="Four pillars that follow your guest from first search to repeat stay, on one login, one guest database and one support team."
        />

        <Reveal className="mt-10 rounded-4xl bg-[#F7F3EF] p-2">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-[2fr_3fr]">
            <div role="tablist" aria-orientation="vertical" aria-label="Product pillars" onKeyDown={onKeyDown} className="flex flex-col gap-2">
              {PILLARS.map((p, i) => {
                const selected = i === active;
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    id={`${baseId}-tab-${i}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex flex-1 items-start gap-4 rounded-3xl p-5 text-left transition-colors duration-300",
                      selected ? "bg-[#1E0D01] text-white" : "bg-white text-[#1E0D01] hover:bg-[#FFFAF6]"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                        selected ? "bg-linear-to-b from-[#FF7A1A] to-[#E0560B] text-white" : "bg-[#FFF1E6] text-primary"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                        {pad(i + 1)} · {p.eyebrow}
                      </span>
                      <span className="mt-1 block font-heading text-2xl font-medium">{p.name}</span>
                      <span className={cn("mt-1 block text-sm leading-relaxed", selected ? "text-white/70" : "text-[#1E0D01]/60")}>
                        {p.tagline}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center self-center rounded-full transition-all duration-300",
                        selected ? "bg-primary text-white" : "bg-[#F7F3EF] text-[#1E0D01]/40 group-hover:translate-x-0.5"
                      )}
                    >
                      <LuChevronRight className="h-4 w-4" />
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${active}`}
              className="relative overflow-hidden rounded-3xl bg-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={pillar.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="relative flex flex-col gap-3 overflow-hidden bg-linear-to-r from-[#FFF4EC] to-white px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8">
                    {/* Oversized outlined pillar number as a watermark */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-6 right-4 font-heading text-[10rem] leading-none font-semibold text-transparent [-webkit-text-stroke:2px_rgba(249,117,24,0.12)]"
                    >
                      {pad(active + 1)}
                    </span>
                    <div className="relative">
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                        {pad(active + 1)} · {pillar.eyebrow}
                      </p>
                      <h3 className="mt-1 font-heading text-4xl font-medium text-[#1E0D01]">{pillar.name}</h3>
                    </div>
                    <p className="relative max-w-xs text-sm leading-relaxed text-[#1E0D01]/60">{pillar.tagline}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-8 px-6 py-7 sm:grid-cols-2 md:px-8">
                    {pillar.categories.map((category) => (
                      <div key={category.name}>
                        <p className="border-b border-black/5 pb-3 text-[11px] font-medium tracking-[0.14em] text-[#1E0D01]/50 uppercase">
                          {category.name}
                        </p>
                        <ul className="mt-2">
                          {category.products.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group flex items-center justify-between gap-3 rounded-lg py-2.5 text-sm text-[#1E0D01] transition-colors duration-200 hover:text-primary"
                              >
                                {item.name}
                                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                                  <LuChevronRight className="h-3 w-3" />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-4 rounded-3xl bg-[#1E0D01] px-5 py-4 text-white md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-b from-[#FF7A1A] to-[#E0560B]">
                <LuCode className="h-4 w-4" />
              </span>
              <div>
                <p className="font-heading text-lg font-medium">{PLATFORM_FOUNDATION.title}</p>
                <p className="text-xs text-white/60">{PLATFORM_FOUNDATION.caption}</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {PLATFORM_FOUNDATION.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block rounded-full border border-white/15 bg-white px-3.5 py-1.5 text-xs font-medium text-[#1E0D01] transition-colors duration-200 hover:bg-primary hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
