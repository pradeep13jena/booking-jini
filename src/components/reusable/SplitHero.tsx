import type { ReactNode } from "react";
import { LuCircleCheck } from "react-icons/lu";

import { ArrowPillLink, OutlinePillLink } from "@/components/PillLinks";
import { Reveal } from "./Reveal";

type Cta = { text: string; href: string };

// Inner-page hero: copy + CTAs on the left (sliding in from the side), a visual on the right
export function SplitHero({
  title,
  description,
  primaryCta,
  secondaryCta,
  highlights,
  visual,
  titleFrom = "right",
}: {
  title: ReactNode;
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  // Small proof points under the CTAs, e.g. "300+ Channels / OTAs, GDS & Meta"
  highlights?: { title: string; caption: string }[];
  visual: ReactNode;
  titleFrom?: "left" | "right";
}) {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        {/* Copy slides in one line after another */}
        <div>
          <Reveal from={titleFrom}>
            <h1 className="font-heading text-4xl leading-[1.15] font-medium tracking-tight text-[#1E0D01] md:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal from="right" index={1}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">{description}</p>
          </Reveal>
          <Reveal from="right" index={2} className="mt-8 flex flex-wrap items-center gap-3">
            <ArrowPillLink href={primaryCta.href} text={primaryCta.text} />
            {secondaryCta && <OutlinePillLink href={secondaryCta.href} text={secondaryCta.text} />}
          </Reveal>
          {highlights && (
            <Reveal from="right" index={3}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                {highlights.map((h) => (
                  <li key={h.title} className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-orange-50 text-primary">
                      <LuCircleCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block text-sm text-[#1E0D01]">{h.title}</span>
                      <span className="block text-[11px] text-[#1E0D01]/50">{h.caption}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        <Reveal index={1}>{visual}</Reveal>
      </div>
    </section>
  );
}
