"use client";

import type { ReactNode } from "react";
import { FaQuestion } from "react-icons/fa";

import { AnimatedButton } from "@/components/AnimatedButton";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EXTRANETS = [
  { name: "Extranet A", rate: "₹4,200" },
  { name: "Extranet B", rate: "₹4,200" },
  // Mismatched rate — highlighted to show the "one slip" problem
  { name: "Extranet C", rate: "₹3,900", mismatch: true },
];

const GUEST_FIELDS = [
  { label: "Guest", value: "Repeat · 3rd stay" },
  { label: "Email", value: "••••@relay.ota" },
  { label: "Phone", value: "+91 ••••• •••••" },
];


function StatCard({
  value,
  accent,
  title,
  description,
  children,
}: {
  value: string;
  accent?: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-[#EEEDEB] p-6">
      {children}
      <p className="mt-auto pt-8 font-heading text-4xl font-bold text-[#1E0D01]">
        {value}
        {accent && <span className="text-primary">{accent}</span>}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-[#1E0D01]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#1E0D01]/60">
        {description}
      </p>
    </div>
  );
}

export function ProfitLeak() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="The hidden cost of a full hotel"
          title="Your rooms are full. So why isn't your profit?"
          description="Occupancy looks good on paper. Then the OTA invoices, the rate mistakes and the extra staff hours eat the margin."
        />

        {/* Bento grid: tall dark card left, two stat cards + wide CTA card right */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal index={0} className="md:row-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#1E0D01] p-8 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/40 blur-3xl"
              />

              <p className="relative text-xs font-medium tracking-[0.2em] text-white/60 uppercase">
                Every OTA booking
              </p>

              <p className="relative mt-auto pt-16 font-heading text-7xl font-bold tracking-tight md:text-8xl">
                15–25<span className="text-primary">%</span>
              </p>
              <h3 className="relative mt-4 text-2xl font-semibold">
                Lost to commission
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/70">
                Every OTA booking gives away a slice of the room rate before the
                guest even checks in.
              </p>

              {/* Room rate split bar */}
              <div className="relative mt-8 border-t border-white/10 pt-6">
                <div className="flex justify-between text-xs">
                  <span className="text-white/70">Room rate</span>
                  <span className="font-semibold">₹10,000</span>
                </div>
                <div className="mt-2 flex h-2 gap-0.5 overflow-hidden rounded-full">
                  <span className="w-[75%] rounded-l-full bg-white" />
                  <span className="w-[10%] bg-primary" />
                  <span className="w-[15%] rounded-r-full bg-[repeating-linear-gradient(135deg,var(--color-primary)_0_3px,transparent_3px_6px)]" />
                </div>
                <div className="mt-2 flex justify-between text-xs">
                  <span className="font-semibold">You keep ₹7,500–8,500</span>
                  <span className="text-primary">OTA takes ₹1,500–2,500</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal index={1}>
            <StatCard
              value="5"
              accent="+"
              title="Extranets to update"
              description="Your team changes the same rate again and again. One slip means an overbooking."
            >
              <ul className="space-y-2">
                {EXTRANETS.map((e) => (
                  <li
                    key={e.name}
                    className={cn(
                      "flex justify-between rounded-lg border border-transparent bg-white px-3 py-2 text-xs",
                      e.mismatch && "border-primary/40 text-primary"
                    )}
                  >
                    <span className={e.mismatch ? "" : "text-[#1E0D01]/60"}>
                      {e.name}
                    </span>
                    <span className="font-semibold">{e.rate}</span>
                  </li>
                ))}
              </ul>
            </StatCard>
          </Reveal>

          <Reveal index={2}>
            <StatCard
              value="0"
              title="Guest data you own"
              description="The OTA keeps the email and phone number, so your repeat guest books through them again."
            >
              <dl className="divide-y divide-black/5 rounded-lg bg-white px-3 text-xs">
                {GUEST_FIELDS.map((f) => (
                  <div key={f.label} className="flex justify-between py-2.5">
                    <dt className="text-[#1E0D01]/60">{f.label}</dt>
                    <dd className="font-semibold text-[#1E0D01]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </StatCard>
          </Reveal>

          <Reveal index={3} className="md:col-span-2">
            <div className="flex h-full flex-col gap-5 rounded-3xl bg-linear-to-r from-[#EEEDEB] from-50% to-[#FBE1D1] p-6 sm:flex-row sm:items-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <FaQuestion className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1E0D01]">
                  Real margin
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#1E0D01]/60">
                  Numbers live in different tools, so nobody sees what the hotel
                  actually earns.
                </p>
              </div>
              <AnimatedButton
                text="Calculate yours"
                href="/calculator"
                colorDirection="left"
                className="self-start px-5 py-3 font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)] sm:self-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
