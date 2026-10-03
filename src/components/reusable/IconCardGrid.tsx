import type { ReactNode } from "react";
import type { IconType } from "react-icons";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export type IconCard = { icon: IconType; title: string; description: string };

// Centered heading + 2×2 grid of soft cards, each with a small orange icon
export function IconCardGrid({
  badge,
  badgeIcon,
  title,
  description,
  items,
}: {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  description?: string;
  items: IconCard[];
}) {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading badge={badge} icon={badgeIcon} title={title} description={description} />

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              as="li"
              key={title}
              index={i % 2}
              className="flex flex-col items-center rounded-3xl border-4 border-white/70 bg-linear-to-b from-white to-[#FBF8F3] px-6 py-10 text-center shadow-[0_4px_20px_rgba(30,13,1,0.04)] md:py-12"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-orange-50 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-medium text-[#1E0D01] md:text-xl">{title}</h3>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#1E0D01]/60 md:text-sm">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
