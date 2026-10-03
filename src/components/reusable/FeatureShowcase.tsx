import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

export type ShowcaseItem = { title: string; description: string };

// Left-aligned heading, then a numbered feature list beside one static product visual
export function FeatureShowcase({
  badge,
  badgeIcon,
  title,
  items,
  visual,
}: {
  badge: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  items: ShowcaseItem[];
  visual: ReactNode;
}) {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-[#1E0D01]">
            {badgeIcon}
            {badge}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#1E0D01] md:text-5xl">{title}</h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 border-t border-black/10 pt-6 md:grid-cols-2">
          <ol>
            {items.map((item, i) => (
              <Reveal as="li" key={item.title} index={i} className="flex items-start justify-between gap-4 border-b border-black/10 px-3 py-5">
                <div>
                  <h3 className="font-heading text-xl font-medium text-[#1E0D01] md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#1E0D01]/60">{item.description}</p>
                </div>
                <span className="text-sm text-[#1E0D01]/30">{String(i + 1).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </ol>

          <Reveal index={1} className="rounded-2xl bg-linear-to-b from-white via-[#FFF6EE] to-[#FFDDBE] p-5 md:p-8">
            <div aria-hidden>{visual}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
