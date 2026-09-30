"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Fades children up as they scroll into view; `index` staggers siblings.
// Use as="li" when it's a direct child of a list so the markup stays valid.
export function Reveal({
  as = "div",
  index = 0,
  className,
  children,
}: {
  as?: "div" | "li";
  index?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
