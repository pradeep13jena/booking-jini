"use client";

import { Children, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

// Clears the sticky navbar; each later card sits a little lower so earlier edges peek out
const STICKY_TOP = 112;
const STACK_OFFSET = 16;
const SCALE_STEP = 0.04;

function StackItem({
  index,
  total,
  progress,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  // Shrinks once the next card starts covering it; earlier cards end up smallest
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * SCALE_STEP]);

  return (
    <li className="sticky" style={{ top: STICKY_TOP + index * STACK_OFFSET }}>
      <motion.div style={reduceMotion ? undefined : { scale }} className="origin-top">
        {children}
      </motion.div>
    </li>
  );
}

// Each child becomes a card that pins under the navbar while the next one scrolls over it.
// Children need an opaque background so covered cards don't show through.
export function StickyStack({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLUListElement>(null);
  // 0 when the list's top reaches the sticky line, 1 when its bottom leaves the viewport bottom
  const { scrollYProgress } = useScroll({ target: ref, offset: [`start ${STICKY_TOP}px`, "end end"] });
  const items = Children.toArray(children);

  return (
    // Gap between items is the scroll distance before the next card slides over
    <ul ref={ref} className={cn("flex flex-col gap-[25vh]", className)}>
      {items.map((child, i) => (
        <StackItem key={i} index={i} total={items.length} progress={scrollYProgress}>
          {child}
        </StackItem>
      ))}
    </ul>
  );
}
