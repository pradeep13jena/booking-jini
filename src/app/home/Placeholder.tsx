import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

// Highlights copy that still needs real content, e.g. [Hotel name, city]
export function Placeholder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <mark
      className={cn(
        "rounded bg-primary/15 px-1 text-primary [box-decoration-break:clone]",
        className
      )}
    >
      {children}
    </mark>
  );
}
