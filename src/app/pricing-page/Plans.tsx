"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { AnimatedButton } from "@/components/AnimatedButton";
import { Reveal } from "@/components/reusable/Reveal";
import { cn } from "@/lib/utils";
import { CheckDot, DashDot } from "./Marks";
import {
  BILLING_CYCLES,
  BILLING_NOTE,
  DEFAULT_BILLING,
  ENTERPRISE_PLAN,
  PILLARS,
  PLANS,
  PLANS_FOOTNOTE,
  type BillingCycle,
  type Pillar,
  type Plan,
} from "./data";

function BillingToggle({ value, onChange }: { value: BillingCycle; onChange: (cycle: BillingCycle) => void }) {
  return (
    <div role="group" aria-label="Billing cycle" className="inline-flex rounded-full bg-white p-1 shadow-[0_4px_20px_rgba(30,13,1,0.06)]">
      {BILLING_CYCLES.map((cycle) => {
        const active = cycle.id === value;
        return (
          <button
            key={cycle.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(cycle.id)}
            className={cn(
              "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
              active ? "text-white" : "text-[#1E0D01]/70 hover:text-[#1E0D01]"
            )}
          >
            {/* Dark pill slides between the two options */}
            {active && (
              <motion.span
                layoutId="billing-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-[#1E0D01]"
              />
            )}
            <span className="relative">{cycle.label}</span>
            {cycle.badge && (
              <span className="relative rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
                {cycle.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// 2×2 grid of the four product pillars; ones outside the plan are greyed out
function PillarChips({ included, dark = false }: { included: Pillar[]; dark?: boolean }) {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {PILLARS.map((pillar) => {
        const on = included.includes(pillar);
        return (
          <li
            key={pillar}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium",
              dark ? "bg-white/10 text-white" : on ? "bg-[#F7F3EF] text-[#1E0D01]" : "text-[#1E0D01]/40"
            )}
          >
            {on ? <CheckDot className="size-4" /> : <DashDot className="size-4" />}
            {!on && <span className="sr-only">Not included: </span>}
            {pillar}
          </li>
        );
      })}
    </ul>
  );
}

function PlanCard({ plan, cycle }: { plan: Plan; cycle: BillingCycle }) {
  const reduceMotion = useReducedMotion();

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 md:p-6",
        plan.popular
          ? "border-2 border-primary/70 shadow-[0_16px_40px_rgba(249,117,24,0.15)]"
          : "border-2 border-white shadow-[0_4px_24px_rgba(30,13,1,0.06)] hover:shadow-[0_16px_40px_rgba(30,13,1,0.08)]"
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-primary uppercase">{plan.eyebrow}</p>
        {plan.popular && (
          <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-white">Most popular</span>
        )}
      </div>
      <h3 className="mt-3 font-heading text-3xl font-medium text-[#1E0D01]">{plan.name}</h3>
      <p className="mt-1 text-sm text-[#1E0D01]/60">{plan.tagline}</p>

      <div className="mt-5 rounded-2xl bg-[#F7F3EF] p-4">
        <p className="text-xs text-[#1E0D01]/50">From</p>
        {/* Price + note swap with a short slide when the billing toggle changes */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={cycle}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mt-1 font-heading text-4xl font-semibold tracking-tight text-[#1E0D01]">
              ₹{plan.price[cycle]}
            </p>
            <p className="mt-1 text-xs text-[#1E0D01]/60">/ property / month</p>
            <p className="text-xs text-[#1E0D01]/50">{BILLING_NOTE[cycle]}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatedButton
        text={plan.cta.label}
        href={plan.cta.href}
        colorDirection={plan.popular ? "left" : "right"}
        className={cn(
          "mt-5 w-full justify-center py-3 font-semibold",
          plan.popular
            ? "shadow-[0_10px_28px_rgba(249,115,22,0.3)] hover:bg-[#1E0D01] hover:text-white"
            : "bg-[#1E0D01] text-white"
        )}
      />

      <div className="mt-5">
        <PillarChips included={plan.pillars} />
      </div>

      <div className="mt-6 border-t border-black/5 pt-5">
        <p className="text-sm font-medium text-[#1E0D01]">{plan.featuresTitle}</p>
        <ul className="mt-3 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-[#1E0D01]/70">
              <CheckDot className="mt-px size-4.5 bg-none bg-primary/10 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function EnterpriseCard() {
  const plan = ENTERPRISE_PLAN;

  return (
    <article className="relative overflow-hidden rounded-3xl bg-[#1E0D01] p-5 text-white md:p-7">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary/25 blur-3xl" />

      <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] text-primary uppercase">{plan.eyebrow}</p>
          <h3 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">{plan.name}</h3>
          <p className="mt-1 text-sm text-white/60">{plan.tagline}</p>
        </div>
        <AnimatedButton
          text={plan.cta.label}
          href={plan.cta.href}
          colorDirection="left"
          className="self-start font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.35)] md:self-auto"
        />
      </div>

      <div className="relative mt-6 grid grid-cols-1 gap-3 md:grid-cols-[2fr_3fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="font-heading text-5xl font-semibold tracking-tight">{plan.price}</p>
          <p className="mt-1 text-sm text-white/80">{plan.priceCaption}</p>
          <p className="text-xs text-white/50">{plan.priceNote}</p>
          <div className="mt-5">
            <PillarChips included={[...PILLARS]} dark />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-medium">{plan.featuresTitle}</p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
                <CheckDot className="mt-px size-4.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Plans() {
  const [cycle, setCycle] = useState<BillingCycle>(DEFAULT_BILLING);

  return (
    <section id="plans" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <Reveal className="flex justify-center">
          <BillingToggle value={cycle} onChange={setCycle} />
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal as="li" key={plan.id} index={i}>
              <PlanCard plan={plan} cycle={cycle} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-4">
          <EnterpriseCard />
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-[#1E0D01]/50 md:text-sm">
            {PLANS_FOOTNOTE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
