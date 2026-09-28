"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface AnimatedButtonProps {
  text: string;
  href: string;
}

export function AnimatedButton({ text, href }: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(249,115,22,0.25)] transition-all duration-300 hover:shadow-[0_10px_28px_rgba(249,115,22,0.4)] active:scale-[0.98]"
    >
      {/* Text — moves upward */}
      <span className="relative h-5 overflow-hidden">
        <span className="flex flex-col transition-transform duration-150 ease-out group-hover:-translate-y-5">
          <span className="flex h-5 items-center whitespace-nowrap">
            {text}
          </span>

          <span className="flex h-5 items-center whitespace-nowrap">
            {text}
          </span>
        </span>
      </span>

      {/* Arrow — moves horizontally */}
      <span className="relative h-4 w-4 overflow-hidden">
        <span className="flex transition-transform duration-150 ease-out group-hover:-translate-x-4">

          <FaChevronRight className="h-4 w-4 shrink-0" />
          <FaChevronRight className="h-4 w-4 shrink-0" />
        </span>
      </span>
    </Link>
  );
}
