import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { cn } from "@/lib/utils";

// Black pill with a white arrow badge — primary CTA on inner-page heroes
export function ArrowPillLink({ href, text, className }: { href: string; text: string; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-black py-1.5 pr-1.5 pl-5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 active:scale-[0.98]",
        className
      )}
    >
      {text}
      <span className="flex size-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
        <LuArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

// Outlined pill — secondary CTA next to ArrowPillLink
export function OutlinePillLink({ href, text, className }: { href: string; text: string; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full border border-black px-5 py-2.5 text-sm font-medium text-[#1E0D01] transition-colors duration-300 hover:bg-black hover:text-white",
        className
      )}
    >
      {text}
    </Link>
  );
}
