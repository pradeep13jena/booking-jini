import { LuCheck, LuMinus, LuPlus } from "react-icons/lu";

import { cn } from "@/lib/utils";

// Small status marks shared by the plan cards and the compare table

export function CheckDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#FF8A2A] to-[#E0560B] text-white",
        className
      )}
    >
      <LuCheck aria-hidden className="h-[55%] w-[55%]" strokeWidth={3} />
    </span>
  );
}

export function DashDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full bg-[#1E0D01]/5 text-[#1E0D01]/30",
        className
      )}
    >
      <LuMinus aria-hidden className="h-[55%] w-[55%]" />
    </span>
  );
}

export function AddonPill() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-primary/50 bg-white px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[#E0560B] md:text-sm">
      <LuPlus aria-hidden className="h-3 w-3" />
      Add-on
    </span>
  );
}
