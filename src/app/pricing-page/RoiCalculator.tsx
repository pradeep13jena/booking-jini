"use client";

import { useEffect, useId, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { LuZap } from "react-icons/lu";

import { AnimatedButton } from "@/components/AnimatedButton";
import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { PLANS, ROI_DISCLAIMER, ROI_INPUTS, ROI_PLAN_ID, type RoiInputKey } from "./data";

type Inputs = Record<RoiInputKey, number>;

const INITIAL = Object.fromEntries(ROI_INPUTS.map((input) => [input.key, input.initial])) as Inputs;
const PLAN_PRICE = PLANS.find((plan) => plan.id === ROI_PLAN_ID)?.price.yearly;

// Commission that moves from OTAs to direct each month
const monthlySaving = ({ revenue, otaShare, commission, moveToDirect }: Inputs) =>
  revenue * (otaShare / 100) * (commission / 100) * (moveToDirect / 100);

const rupees = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

// Indian short form: 315900 → { num: "3.2", unit: "L" }, 10000000 → { num: "1", unit: "Cr" }
const short = (n: number) => {
  const [div, unit] = n >= 1e7 ? [1e7, "Cr"] : n >= 1e5 ? [1e5, "L"] : n >= 1e3 ? [1e3, "K"] : [1, ""];
  return { num: String(Number((n / div).toFixed(1))), unit };
};

const formatInput = (value: number, format: "rupee" | "percent") =>
  format === "rupee" ? rupees(value) : `${value}%`;

const formatBound = (value: number, format: "rupee" | "percent") => {
  if (format === "percent") return `${value}%`;
  const { num, unit } = short(value);
  return `₹${num} ${unit}`;
};

// Big yearly figure tweens between values; writes to the DOM so dragging doesn't re-render per frame
function YearlyFigure({ value }: { value: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const unitRef = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  const reduceMotion = useReducedMotion();
  const initial = short(value);

  useEffect(() => {
    const paint = (n: number) => {
      const { num, unit } = short(n);
      if (numRef.current) numRef.current.textContent = `₹${num}`;
      if (unitRef.current) unitRef.current.textContent = unit;
    };
    if (reduceMotion) {
      paint(value);
      prev.current = value;
      return;
    }
    const controls = animate(prev.current, value, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate: (n) => {
        prev.current = n;
        paint(n);
      },
    });
    return () => controls.stop();
  }, [value, reduceMotion]);

  return (
    <p className="mt-3 font-heading text-7xl font-semibold tracking-tight tabular-nums md:text-8xl" aria-live="polite">
      <span ref={numRef}>₹{initial.num}</span>
      <span ref={unitRef} className="ml-1 text-4xl text-primary md:text-5xl">
        {initial.unit}
      </span>
    </p>
  );
}

function Slider({
  index,
  config,
  value,
  onChange,
}: {
  index: number;
  config: (typeof ROI_INPUTS)[number];
  value: number;
  onChange: (value: number) => void;
}) {
  const id = useId();
  const pct = ((value - config.min) / (config.max - config.min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="flex items-center gap-3 text-sm font-medium text-[#1E0D01] md:text-base">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#F7F3EF] text-xs text-[#1E0D01]/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          {config.label}
        </label>
        <output
          htmlFor={id}
          className="rounded-full bg-[#FFF1E6] px-3 py-1 text-sm font-semibold text-[#E0560B] tabular-nums md:text-base"
        >
          {formatInput(value, config.format)}
        </output>
      </div>

      {/* Filled part of the track is painted with an inline gradient up to the thumb */}
      <input
        id={id}
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: `linear-gradient(to right, #F97518 ${pct}%, #EFE7DF ${pct}%)` }}
        className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(249,117,24,0.35)] [&::-webkit-slider-thumb]:transition-transform active:[&::-webkit-slider-thumb]:scale-110"
      />
      <div className="mt-2 flex justify-between text-xs text-[#1E0D01]/40">
        <span>{formatBound(config.min, config.format)}</span>
        <span>{formatBound(config.max, config.format)}</span>
      </div>
    </div>
  );
}

export function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>(INITIAL);
  const monthly = monthlySaving(inputs);

  return (
    <section id="roi" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Return on investment"
          icon={<LuZap className="h-3.5 w-3.5 text-primary" />}
          title="See how fast Bookingjini pays for itself"
          description="Move a share of your OTA bookings to your own website and keep the commission."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="flex flex-col gap-9 rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(30,13,1,0.05)] md:p-8">
            {ROI_INPUTS.map((config, i) => (
              <Slider
                key={config.key}
                index={i}
                config={config}
                value={inputs[config.key]}
                onChange={(value) => setInputs((prev) => ({ ...prev, [config.key]: value }))}
              />
            ))}
          </Reveal>

          <Reveal index={1} className="relative flex flex-col overflow-hidden rounded-3xl bg-[#1E0D01] p-6 text-white md:p-8">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl" />

            <p className="relative text-sm text-white/70 md:text-base">Commission you could keep every year</p>
            <div className="relative">
              <YearlyFigure value={monthly * 12} />
            </div>

            <dl className="relative mt-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                <dt className="text-sm text-white/80">Saved every month</dt>
                <dd className="font-heading text-xl font-semibold tabular-nums">{rupees(monthly)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="text-sm text-white/80">Growth plan from</dt>
                <dd>
                  <span className="font-heading text-xl font-semibold text-primary">₹{PLAN_PRICE}</span>
                  <span className="text-xs text-white/50"> /month</span>
                </dd>
              </div>
            </dl>

            <p className="relative mt-10 text-xs leading-relaxed text-white/50 lg:mt-auto lg:pt-10">{ROI_DISCLAIMER}</p>
            <AnimatedButton
              text="Get My Exact Number"
              href="/contact"
              colorDirection="left"
              className="relative mt-4 w-full justify-center py-3.5 text-base font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.35)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
