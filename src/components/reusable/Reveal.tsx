"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const OFFSET = {
  bottom: { y: 24 },
  right: { x: 48 },
  left: { x: -48 },
};

// Fades children in as they scroll into view; `index` staggers siblings.
// `from` sets the side they travel in from ("right" slides right → left, "left" the opposite).
// Use as="li" when it's a direct child of a list so the markup stays valid.
export function Reveal({
  as = "div",
  index = 0,
  from = "bottom",
  className,
  children,
}: {
  as?: "div" | "li";
  index?: number;
  from?: keyof typeof OFFSET;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      initial={reduceMotion ? false : { opacity: 0, ...OFFSET[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
