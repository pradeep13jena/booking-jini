"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "./data";

const ARROW =
  "flex size-11 items-center justify-center rounded-xl border border-black/5 bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40";

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  // Arrow state follows the real scroll position, so swiping on touch keeps them in sync
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setEdges({
        start: track.scrollLeft <= 4,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Moves by exactly one card (+ gap) per click
  const slide = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            badge="Testimonials"
            weight="semibold"
            title="Trusted by Founders"
            description="See how SaaS founders and lean teams are using our AI tools to launch smarter."
          />
          <Reveal index={1} className="flex gap-3">
            <button type="button" aria-label="Previous testimonial" disabled={edges.start} onClick={() => slide(-1)} className={ARROW}>
              <LuArrowLeft className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Next testimonial" disabled={edges.end} onClick={() => slide(1)} className={ARROW}>
              <LuArrowRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        <Reveal index={1} className="mt-10">
          <ul
            ref={trackRef}
            aria-label="Customer testimonials"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t) => (
              <li
                key={t.name}
                className="flex shrink-0 basis-full snap-start flex-col rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(30,13,1,0.06)] sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt=""
                    width={48}
                    height={48}
                    className="size-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-medium text-[#1E0D01]">{t.name}</p>
                    <p className="text-xs text-[#1E0D01]/60">{t.meta}</p>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-1.5">
                  <span className="flex gap-1 text-primary" role="img" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FaStar key={s} className={cn("h-3.5 w-3.5", s >= t.rating && "text-black/10")} />
                    ))}
                  </span>
                  <span className="text-sm text-[#1E0D01]">{t.rating.toFixed(1)}</span>
                </div>

                <blockquote className="mt-5 text-base leading-relaxed text-[#1E0D01]">&ldquo;{t.quote}&rdquo;</blockquote>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
