"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LuCheck, LuChevronRight } from "react-icons/lu";

import { AnimatedButton } from "@/components/AnimatedButton";
import { Reveal } from "@/components/reusable/Reveal";
import { cn } from "@/lib/utils";
import { PILLARS, productCount, type Pillar } from "./data";

const pad = (n: number) => String(n).padStart(2, "0");

// Tab bar sticks under the navbar; clicking a tab scrolls to that pillar instead of swapping content
function PillarTabs({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  return (
    <div className="sticky top-24 z-40 flex justify-center px-6 py-4">
      <nav
        aria-label="Jump to pillar"
        className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-white bg-white/80 p-1.5 shadow-[0_8px_30px_rgba(30,13,1,0.08)] backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PILLARS.map((pillar, i) => {
          const selected = i === active;
          return (
            <a
              key={pillar.id}
              href={`#${pillar.id}`}
              aria-current={selected ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSelect(i);
              }}
              className={cn(
                "relative flex shrink-0 items-center gap-2.5 rounded-full py-2 pr-5 pl-2 font-heading text-base font-medium transition-colors duration-300 md:text-lg",
                selected ? "text-white" : "text-[#1E0D01] hover:text-primary"
              )}
            >
              {selected && (
                <motion.span
                  layoutId="pillar-tab"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-[#1E0D01]"
                />
              )}
              <span
                className={cn(
                  "relative flex size-8 items-center justify-center rounded-full font-sans text-sm font-medium transition-colors duration-300",
                  selected ? "bg-primary text-white" : "bg-[#FFF1E6] text-primary"
                )}
              >
                {pad(i + 1)}
              </span>
              <span className="relative">{pillar.name}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

function PillarBlock({ pillar, index }: { pillar: Pillar; index: number }) {
  const Icon = pillar.icon;
  const count = productCount(pillar);

  return (
    <article id={pillar.id} className="grid scroll-mt-48 grid-cols-1 gap-10 py-14 md:py-20 lg:grid-cols-[2fr_3fr] lg:gap-14">
      {/* Intro stays in view while the (sometimes long) product list scrolls */}
      <Reveal className="lg:sticky lg:top-48 lg:self-start">
        <div className="flex items-center gap-4">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-[#1E0D01] text-white">
            <Icon className="h-6 w-6" />
          </span>
          <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase md:text-base">
            {pad(index + 1)} · {pillar.eyebrow}
          </p>
        </div>
        <h2 className="mt-6 font-heading text-5xl font-medium tracking-tight text-[#1E0D01] md:text-7xl">{pillar.name}</h2>
        <p className="mt-6 text-base leading-relaxed text-[#1E0D01]/70 md:text-lg">{pillar.description}</p>

        <ul className="mt-8 space-y-4 border-y border-black/10 py-7">
          {pillar.highlights.map((point) => (
            <li key={point} className="flex items-start gap-3 text-base text-[#1E0D01]">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-primary">
                <LuCheck aria-hidden className="h-3 w-3" strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-5">
          <AnimatedButton
            text={`Explore ${pillar.name}`}
            href={pillar.href}
            colorDirection="left"
            className="px-6 py-3.5 text-base font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)]"
          />
          <span className="text-base text-[#1E0D01]/60">{count} products</span>
        </div>
      </Reveal>

      <div className="flex flex-col gap-4">
        {pillar.categories.map((category, c) => (
          <Reveal key={category.name} index={c} className="rounded-3xl bg-white p-2 shadow-[0_4px_24px_rgba(30,13,1,0.05)]">
            <div className="flex items-center justify-between px-4 pt-3 pb-4">
              <h3 className="font-sans text-sm font-medium tracking-[0.14em] text-[#1E0D01]/70 uppercase">{category.name}</h3>
              <span className="text-sm text-[#1E0D01]/50">{category.products.length} products</span>
            </div>
            <ul>
              {category.products.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li key={item.slug} id={item.slug} className="scroll-mt-48 border-t border-black/5">
                    <Link
                      href={item.href}
                      className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-1 rounded-2xl px-4 py-4 transition-colors duration-300 hover:bg-[#FCF9F6] md:grid-cols-[auto_1fr_1.15fr_auto]"
                    >
                      <span className="row-span-2 flex size-12 items-center justify-center rounded-xl bg-[#FFF1E6] text-primary transition-transform duration-300 group-hover:scale-105 md:row-span-1">
                        <ItemIcon className="h-5 w-5" />
                      </span>
                      <span className="pt-1 font-heading text-lg leading-snug font-medium text-[#1E0D01] md:text-xl">{item.name}</span>
                      <span className="col-start-2 row-start-2 text-sm leading-relaxed text-[#1E0D01]/70 md:col-start-auto md:row-start-auto md:pt-1 md:text-base">
                        {item.description}
                      </span>
                      <span className="col-start-3 row-span-2 row-start-1 flex size-8 items-center justify-center self-center rounded-full bg-[#F7F3EF] text-[#1E0D01]/40 transition-all duration-300 group-hover:bg-primary group-hover:text-white md:col-start-auto md:row-span-1 md:row-start-auto">
                        <LuChevronRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </article>
  );
}

export function PillarSections() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  // Scroll-spy: the pillar crossing the middle of the viewport lights up its tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = PILLARS.findIndex((pillar) => pillar.id === entry.target.id);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    PILLARS.forEach((pillar) => {
      const el = document.getElementById(pillar.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const select = (index: number) => {
    setActive(index);
    document.getElementById(PILLARS[index].id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    // Keep the URL shareable without triggering a second (instant) jump
    history.replaceState(null, "", `#${PILLARS[index].id}`);
  };

  return (
    <section className="relative w-full">
      <PillarTabs active={active} onSelect={select} />
      <div className="container divide-y divide-black/10 px-6">
        {PILLARS.map((pillar, i) => (
          <PillarBlock key={pillar.id} pillar={pillar} index={i} />
        ))}
      </div>
    </section>
  );
}
