import type { ReactNode } from "react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reusable/Reveal";

// Small pill label with an orange icon chip, used above About section headings
export function Pill({ icon: Icon, children, className }: { icon: IconType; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 py-1 pr-3 pl-1 text-xs font-medium text-[#1E0D01]",
        className
      )}
    >
      {/* <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-3 w-3" />
      </span> */}
      {children}
    </span>
  );
}

// Pill + heading on the left, short description pinned bottom-right on desktop
export function SplitHeading({
  icon,
  badge,
  title,
  description,
}: {
  icon: IconType;
  badge: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <Pill icon={icon}>{badge}</Pill>
        <h2 className="mt-4 max-w-md font-heading text-3xl leading-tight font-medium tracking-tight text-[#1E0D01] md:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-xs text-sm leading-relaxed text-[#1E0D01]/60 md:text-right">{description}</p>
    </Reveal>
  );
}
