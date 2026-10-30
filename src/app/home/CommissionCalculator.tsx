"use client";

import { useEffect, useId, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { LuCalculator } from "react-icons/lu";

import { AnimatedButton } from "@/components/AnimatedButton";
import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

type InputKey = "rooms" | "price" | "occupancy" | "otaShare" | "commission" | "directCost";
type Inputs = Record<InputKey, number>;

// Defaults are the worked example: 60 rooms, ₹4,500, 68% full, 62% OTA, 18% commission, 8% direct cost
const INPUTS: {
  key: InputKey;
  label: string;
  hint?: string;
  min: number;
  max: number;
  step: number;
  initial: number;
  format: "rupee" | "percent" | "count";
}[] = [
  { key: "rooms", label: "Number of rooms", min: 5, max: 300, step: 1, initial: 60, format: "count" },
  { key: "price", label: "Average room price per night", min: 1000, max: 20000, step: 100, initial: 4500, format: "rupee" },
  { key: "occupancy", label: "How full you are over the year", min: 20, max: 100, step: 1, initial: 68, format: "percent" },
  { key: "otaShare", label: "Share of bookings from OTAs", min: 0, max: 100, step: 1, initial: 62, format: "percent" },
  { key: "commission", label: "Average OTA commission", hint: "Usually 15–25% in India", min: 10, max: 30, step: 1, initial: 18, format: "percent" },
  { key: "directCost", label: "Cost of a direct booking", hint: "Booking engine, ads and card fees", min: 0, max: 15, step: 1, initial: 8, format: "percent" },
];

const INITIAL = Object.fromEntries(INPUTS.map((input) => [input.key, input.initial])) as Inputs;

// The one-year plan moves at most 12 of every 100 bookings from OTAs to direct
const MAX_MOVE = 12;

const QUARTERS = [
  { goal: "Fix the basics", todo: "Same price everywhere, Google listing, easy booking on your website, WhatsApp button" },
  { goal: "Win people who are browsing", todo: "Google ads on your hotel name, remind people who left, perks for booking direct" },
  { goal: "Keep in touch with guests", todo: "Save guest contacts, WhatsApp before and after stays, special packages" },
  { goal: "Keep it going", todo: "Review results monthly, reward repeat guests, ask OTAs for lower commission" },
];

const calculate = ({ rooms, price, occupancy, otaShare, commission, directCost }: Inputs) => {
  const nights = rooms * 365 * (occupancy / 100);
  const income = nights * price;
  // Can't move more bookings than the OTAs bring in
  const moved = Math.min(MAX_MOVE, otaShare);
  // A direct booking isn't free, so only the gap between the two costs is saved
  const margin = Math.max(0, commission - directCost) / 100;

  return {
    nights,
    income,
    otaPaid: income * (otaShare / 100) * (commission / 100),
    yearlySaving: income * (moved / 100) * margin,
    perBooking: price * margin,
    directNow: 100 - otaShare,
    moved,
  };
};

const rupees = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

// Indian short form: 804168 → "₹8 L", 67014000 → "₹6.7 Cr"
const short = (n: number) => {
  const [div, unit] = n >= 1e7 ? [1e7, " Cr"] : n >= 1e5 ? [1e5, " L"] : n >= 1e3 ? [1e3, "K"] : [1, ""];
  return `₹${Number((n / div).toFixed(1))}${unit}`;
};

const formatInput = (value: number, format: (typeof INPUTS)[number]["format"]) =>
  format === "rupee" ? rupees(value) : format === "percent" ? `${value}%` : String(value);

// Tweens between values; writes to the DOM so dragging a slider doesn't re-render per frame
function AnimatedAmount({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const prev = useRef(value);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const paint = (n: number) => {
      if (ref.current) ref.current.textContent = short(n);
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
    <p ref={ref} className={className} aria-live="polite">
      {short(value)}
    </p>
  );
}

function Slider({
  config,
  value,
  onChange,
}: {
  config: (typeof INPUTS)[number];
  value: number;
  onChange: (value: number) => void;
}) {
  const id = useId();

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <label htmlFor={id} className="text-sm text-[#1E0D01]">
          {config.label}
          {config.hint && <span className="block text-xs text-[#1E0D01]/50">{config.hint}</span>}
        </label>
        <output htmlFor={id} className="text-sm font-semibold text-primary tabular-nums">
          {formatInput(value, config.format)}
        </output>
      </div>

      <input
        id={id}
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-[#5C5752] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-black/20 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black/20 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgba(30,13,1,0.25)] [&::-webkit-slider-thumb]:transition-transform active:[&::-webkit-slider-thumb]:scale-110"
      />
    </div>
  );
}

export function CommissionCalculator() {
  const [inputs, setInputs] = useState<Inputs>(INITIAL);
  const result = calculate(inputs);
  const directAfter = result.directNow + result.moved;

  const rows = [
    { label: "Rooms sold in a year", value: `${Math.round(result.nights).toLocaleString("en-IN")} nights` },
    { label: "Room income in a year", value: short(result.income) },
    { label: "Saved per booking moved to direct", value: rupees(result.perBooking) },
    { label: "Direct bookings in one year", value: `${result.directNow}% → ${directAfter}%` },
  ];

  return (
    <section id="commission-calculator" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Commission calculator"
          icon={<LuCalculator className="h-3.5 w-3.5 text-primary" />}
          title="How much are OTAs costing you?"
          description="Move the sliders to match your hotel. The estimate updates as you go."
        />

        <Reveal className="mt-10 grid grid-cols-1 overflow-hidden rounded-3xl bg-white md:grid-cols-2">
          <div className="flex flex-col gap-8 p-6 md:p-8">
            {INPUTS.map((config) => (
              <Slider
                key={config.key}
                config={config}
                value={inputs[config.key]}
                onChange={(value) => setInputs((prev) => ({ ...prev, [config.key]: value }))}
              />
            ))}
          </div>

          <div className="relative flex flex-col overflow-hidden border-t border-black/5 bg-[#F7F5F3] p-6 md:border-t-0 md:border-l md:p-8">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[#FFD9BF]/60 blur-3xl" />

            <p className="relative text-sm text-[#1E0D01]/60">You pay OTAs every year</p>
            <AnimatedAmount
              value={result.otaPaid}
              className="relative mt-1 font-heading text-5xl font-bold tracking-tight text-[#1E0D01] tabular-nums md:text-6xl"
            />

            <p className="relative mt-6 text-sm text-[#1E0D01]/60">You could keep every year</p>
            <AnimatedAmount
              value={result.yearlySaving}
              className="relative mt-1 font-heading text-5xl font-bold tracking-tight text-primary tabular-nums md:text-6xl"
            />

            <dl className="relative mt-6">
              {rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 border-t border-black/5 py-4">
                  <dt className="text-sm text-[#1E0D01]">{row.label}</dt>
                  <dd className="text-sm font-semibold text-[#1E0D01] tabular-nums">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="relative mt-2 text-xs leading-relaxed text-[#1E0D01]/50 lg:mt-auto lg:pt-6">
              Estimate for illustration only. It moves at most {MAX_MOVE} of every 100 bookings to direct and counts
              what direct bookings cost you. Your free revenue check uses your real booking data.
            </p>
            <AnimatedButton
              text="Get My Exact Number"
              href="/contact"
              colorDirection="left"
              className="relative mt-5 self-start font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.35)]"
            />
          </div>
        </Reveal>

        {/* One-year plan: direct share climbs a quarter of the way each quarter */}
        <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {QUARTERS.map((q, i) => {
            const from = result.directNow + (result.moved * i) / 4;
            const to = result.directNow + (result.moved * (i + 1)) / 4;
            return (
              <Reveal as="li" key={q.goal} index={i} className="rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Quarter {i + 1}</span>
                  <span className="text-xs text-[#1E0D01]/50 tabular-nums">
                    {Number(from.toFixed(1))}% → {Number(to.toFixed(1))}% direct
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#1E0D01]">{q.goal}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#1E0D01]/60">{q.todo}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
