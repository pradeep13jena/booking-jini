"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import { cn } from "@/lib/utils";

type ColorDirection = "right" | "left";

interface AnimatedButtonProps {
  text: string;
  href: string;
  colorDirection?: ColorDirection;
  className?: string;
}

// right: white → primary on hover; left: primary → white on hover
const colorVariants: Record<ColorDirection, string> = {
  right:
    "bg-white text-black hover:bg-primary hover:text-white hover:shadow-[0_10px_28px_rgba(249,115,22,0.4)]",
  left: "bg-primary text-white hover:bg-white hover:text-black hover:shadow-[0_10px_28px_rgba(0,0,0,0.15)]",
};

export function AnimatedButton({
  text,
  href,
  colorDirection = "right",
  className,
}: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 active:scale-[0.98]",
        colorVariants[colorDirection],
        className
      )}
    >
      {/* Text — moves upward; sized in lh so it scales with any text-* class */}
      <span className="relative h-[1lh] overflow-hidden">
        <span className="flex flex-col transition-transform duration-150 ease-out group-hover:-translate-y-[1lh]">
          <span className="flex h-[1lh] items-center whitespace-nowrap">
            {text}
          </span>

          <span className="flex h-[1lh] items-center whitespace-nowrap">
            {text}
          </span>
        </span>
      </span>

      {/* Arrow — moves horizontally; sized in em to match the text */}
      <span className="relative h-[1em] w-[1em] overflow-hidden">
        <span className="flex transition-transform duration-150 ease-out group-hover:-translate-x-[1em]">
          <FaChevronRight className="h-[1em] w-[1em] shrink-0" />
          <FaChevronRight className="h-[1em] w-[1em] shrink-0" />
        </span>
      </span>
    </Link>
  );
}
