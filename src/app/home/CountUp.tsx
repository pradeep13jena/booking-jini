"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Splits "7+ crore" → ["", "7", "+ crore"], "₹10 Cr+" → ["₹", "10", " Cr+"]
const parse = (value: string) => {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return {
    prefix,
    suffix,
    target: Number(digits.replace(/,/g, "")),
    decimals: digits.split(".")[1]?.length ?? 0,
    grouped: digits.includes(","),
  };
};

// Counts from 0 up to the number inside `value` the first time it scrolls into view.
// The final text is always in the DOM (sr-only) so crawlers and screen readers never see "0".
export function CountUp({ value, duration = 1.8 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const parts = parse(value);

  useEffect(() => {
    const el = ref.current;
    const parsed = parse(value);
    if (!el || !parsed || !inView || reduceMotion) return;

    const { prefix, suffix, target, decimals, grouped } = parsed;
    const format = (n: number) =>
      prefix +
      (grouped
        ? n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        : n.toFixed(decimals)) +
      suffix;

    // Writes straight to the DOM so the count doesn't re-render React every frame
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        el.textContent = format(n);
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, duration, value]);

  // Nothing numeric to animate (or reduced motion) → plain text
  if (!parts || reduceMotion) return <>{value}</>;

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden className="tabular-nums">
        {parts.prefix}0{parts.suffix}
      </span>
    </>
  );
}
