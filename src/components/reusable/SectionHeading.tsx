import type { ReactNode } from "react";
import { FaRegSmile } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

// Badge pill + h2 + optional description, shared by home sections
export function SectionHeading({
  badge,
  icon = <FaRegSmile className="h-3.5 w-3.5 text-primary" />,
  title,
  description,
  align = "center",
  font = "heading",
  weight = font === "sans" ? "semibold" : "medium",
}: {
  badge?: string;
  icon?: ReactNode;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  // "sans" sets the title in Inter (semibold) instead of Urbanist
  font?: "heading" | "sans";
  weight?: "medium" | "semibold";
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left"
      )}
    >
      {badge && (
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-[#1E0D01]">
          {icon}
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "max-w-3xl text-3xl tracking-tight text-[#1E0D01] md:text-5xl",
          font === "sans" ? "font-sans" : "font-heading",
          weight === "semibold" ? "font-semibold" : "font-medium"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
