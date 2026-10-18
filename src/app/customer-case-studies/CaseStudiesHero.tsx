import { FaStar } from "react-icons/fa";

import { ArrowPillLink, OutlinePillLink } from "@/components/PillLinks";
import { Reveal } from "@/components/reusable/Reveal";

export function CaseStudiesHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Warm glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_35%,rgba(255,196,170,0.3),transparent_70%)]"
      />
      <div className="container relative flex flex-col items-center px-6 pt-14 pb-16 text-center md:pt-20 md:pb-20">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-[#1E0D01]">
            <FaStar className="h-3.5 w-3.5 text-primary" />
            Customer success
          </span>
        </Reveal>
        <Reveal index={1}>
          <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#1E0D01] md:text-6xl">
            Hotels that grow with{" "}
            <span className="bg-linear-to-b from-[#FFA552] to-primary bg-clip-text text-transparent">Bookingjini.</span>
          </h1>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">
            From independent hotels to state tourism boards, 9,300+ properties use Bookingjini to win more direct
            bookings and pay less commission. Here are some of them, and what changed.
          </p>
        </Reveal>
        <Reveal index={3} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ArrowPillLink href="#hotels" text="Read customer stories" />
          <OutlinePillLink href="/contact" text="Get My Free Revenue Check" />
        </Reveal>
      </div>
    </section>
  );
}
