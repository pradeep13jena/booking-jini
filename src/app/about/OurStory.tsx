import type { ReactNode } from "react";
import { LuArrowRight, LuBookOpen } from "react-icons/lu";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-[#1E0D01]">{children}</strong>
);

const CHAPTERS: { title: string; body: ReactNode }[] = [
  {
    title: "The trip",
    body: (
      <>
        On a trip to the United States, our founder <B>Sibasish Mishra</B>, a former banker, noticed something that
        did not add up. The hotel he was staying at paid <B>30 to 35% commission</B> to booking agencies. The manager
        quietly suggested he book direct next time, for 15% off.
      </>
    ),
  },
  {
    title: "The problem",
    body: (
      <>
        Back in India he saw the same problem everywhere, only harder. Independent hotels offered their best rates on
        their own websites, yet guests still booked through OTAs. Small hotels had no affordable technology to compete.
      </>
    ),
  },
  {
    title: "The start",
    body: (
      <>
        In <B>late 2017</B>, Bookingjini went live with a pilot for the <B>Odisha Tourism Development Corporation</B>.
        We had five people and twenty hotels. The goal has not changed since: give every hotel, from a 10-room homestay
        to a 200-room group, the tools to win guests directly and run the business profitably.
      </>
    ),
  },
];

const eyebrow = "text-[11px] font-medium tracking-[0.15em] uppercase";

export function OurStory() {
  return (
    <section id="our-story" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Our story"
          icon={<LuBookOpen className="h-3.5 w-3.5 text-primary" />}
          title={
            <>
              It started with one hotel manager and a <span className="text-primary">better offer.</span>
            </>
          }
        />

        {/* Agency vs direct comparison */}
        <div className="relative mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-white p-6 md:p-8">
            <p className={`${eyebrow} text-[#1E0D01]/60`}>Booked through an agency</p>
            <p className="mt-8 font-heading text-6xl leading-none font-medium tracking-tight text-[#1E0D01] md:text-8xl">
              30–35<span className="text-primary">%</span>
            </p>
            <p className="mt-4 max-w-56 text-sm leading-relaxed text-[#1E0D01]/60">
              commission a hotel was paying an online agency on each booking
            </p>
          </Reveal>

          <Reveal index={1} className="relative overflow-hidden rounded-3xl bg-[#1E0D01] p-6 md:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,rgba(249,117,24,0.45),transparent_55%)]"
            />
            <div className="relative">
              <p className={`${eyebrow} text-primary`}>Booked direct</p>
              <p className="mt-8 font-heading text-6xl leading-none font-medium tracking-tight text-white md:text-8xl">
                15<span className="text-primary">%</span>
              </p>
              <p className="mt-4 max-w-56 text-sm leading-relaxed text-white/70">
                discount the same hotel offered to book with them directly
              </p>
            </div>
          </Reveal>

          {/* "vs" badge straddling the two cards (stacked or side by side) */}
          <span className="absolute top-1/2 left-1/2 z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-white shadow-[0_8px_24px_rgba(249,117,24,0.45)] ring-4 ring-white md:size-14">
            vs
          </span>
        </div>

        <Reveal className="group mt-3 flex flex-col gap-3 rounded-2xl bg-[#FDE6D6] px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#1E0D01]/70">
            The hotel would rather give the guest a discount than give the agency a commission.
          </p>
          <p className="inline-flex items-center gap-2 font-heading text-xl font-medium text-primary md:text-2xl">
            That gap became our company.
            <LuArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </p>
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CHAPTERS.map(({ title, body }, i) => (
            <Reveal
              as="li"
              key={title}
              index={i}
              className="group rounded-3xl bg-white p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(30,13,1,0.08)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F5F1ED] text-xs text-[#1E0D01]/60 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Grey rule that fills orange on hover */}
                <span aria-hidden className="relative h-px flex-1 bg-black/10">
                  <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </div>
              <h3 className="mt-6 font-heading text-2xl font-medium text-[#1E0D01]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1E0D01]/60">{body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-8 md:flex-row md:items-end md:justify-between">
          <blockquote className="flex items-start gap-4">
            <RiDoubleQuotesL aria-hidden className="h-8 w-8 shrink-0 text-primary" />
            {/* TODO: replace with the founder's quote */}
            <p className="font-heading text-2xl font-medium text-[#1E0D01] md:text-3xl">
              We built Bookingjini with a simple belief: hotels should focus on hospitality, not the complexities of technology. Our purpose is to empower every hotelier with the tools, independence, and intelligence to grow on their own terms.
            </p>
          </blockquote>
          <p className="shrink-0 text-sm text-[#1E0D01]/60">Sibasish Mishra, Founder &amp; CEO</p>
        </Reveal>
      </div>
    </section>
  );
}
