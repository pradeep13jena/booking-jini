import type { ReactNode } from "react";
import { LuCheck } from "react-icons/lu";

import { cn } from "@/lib/utils";

export type Segment = {
  title: ReactNode;
  description: string;
  points: string[];
  bestFor?: string;
  cta?: ReactNode;
  visual: ReactNode;
  // Gradient "glow" behind the visual
  panelClassName: string;
  // Puts the visual on the left
  reverse?: boolean;
};

export function SegmentCard({ segment }: { segment: Segment }) {
  const { title, description, points, bestFor, cta, visual, panelClassName, reverse } = segment;

  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_-8px_30px_rgba(30,13,1,0.05)] md:grid-cols-[1fr_1.05fr]">
      <div className={cn("flex flex-col justify-center p-6 md:p-10", reverse && "md:order-2")}>
        <h2 className="max-w-sm font-heading text-2xl leading-tight font-medium tracking-tight text-[#1E0D01] md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#1E0D01]/60">{description}</p>
        <ul className="mt-5 flex flex-col gap-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-[#1E0D01]/80">
              <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1E0D01]" />
              {point}
            </li>
          ))}
        </ul>
        {bestFor && (
          <p className="mt-6 w-fit rounded-md bg-[#F5F5F5] px-3 py-1.5 text-xs text-[#1E0D01]/70">
            Best suited for: {bestFor}
          </p>
        )}
        {cta && <div className="mt-6">{cta}</div>}
      </div>

      <div aria-hidden className={cn("relative flex min-h-72 items-center justify-center overflow-hidden p-5 md:p-8", panelClassName)}>
        <div className="relative w-full">{visual}</div>
      </div>
    </article>
  );
}
