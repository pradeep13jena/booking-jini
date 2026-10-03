"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LuDatabase, LuGlobe, LuHeart, LuSearch, LuTrendingUp, LuTriangleAlert, LuX } from "react-icons/lu";

// Decorative visuals for DirectStrategy — markup only, so they stay crisp and need no assets

const KPIS = [
  { label: "Revenue this month", value: "₹4,82,600", note: "+18% vs last month" },
  { label: "Bookings", value: "68 Direct / 12 OTA", note: "Direct share 85%" },
  { label: "Channel sync", value: "98% Connection", note: "All channels live" },
  { label: "Front desk", value: "14 Checked-in Today", note: "3 arrivals pending" },
];
// [direct, ota] heights in % for each week
const WEEKS: [number, number][] = [
  [30, 18], [55, 25], [42, 30], [70, 22], [48, 35], [82, 28], [95, 30],
];

export function WebsiteDashboardMockup() {
  return (
    <div className="rounded-lg bg-white p-3 shadow-[0_10px_30px_rgba(30,13,1,0.06)]">
      <div className="flex items-center gap-3 border-b border-black/5 pb-2">
        <span className="flex gap-1">
          <span className="size-1.5 rounded-full bg-red-400" />
          <span className="size-1.5 rounded-full bg-amber-400" />
          <span className="size-1.5 rounded-full bg-emerald-400" />
        </span>
        <span className="flex flex-1 items-center gap-1 rounded-full bg-[#F5F5F5] px-2 py-0.5 text-[7px] text-[#1E0D01]/40">
          <LuSearch className="h-2 w-2" /> yourhotel.com/book
        </span>
        <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-600">Live</span>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="rounded-md border border-black/5 p-1.5">
            <p className="text-[6px] tracking-wide text-[#1E0D01]/40 uppercase">{kpi.label}</p>
            <p className="mt-0.5 text-[8px] font-semibold text-[#1E0D01]">{kpi.value}</p>
            <p className="text-[6px] text-emerald-600">{kpi.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-md border border-black/5 p-2">
        <div className="flex justify-between text-[6px] text-[#1E0D01]/50 uppercase">
          <span>Bookings by channel</span>
          <span className="flex gap-2">
            <span className="flex items-center gap-0.5"><span className="size-1 rounded-full bg-teal-600" />Direct</span>
            <span className="flex items-center gap-0.5"><span className="size-1 rounded-full bg-sky-400" />OTA</span>
          </span>
        </div>
        <div className="mt-2 flex h-16 items-end justify-between gap-2 border-b border-black/5">
          {WEEKS.map(([direct, ota], i) => (
            <div key={i} className="flex h-full flex-1 items-end justify-center gap-0.5">
              <span className="w-1.5 rounded-t-xs bg-teal-600" style={{ height: `${direct}%` }} />
              <span className="w-1.5 rounded-t-xs bg-sky-400" style={{ height: `${ota}%` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-md bg-amber-50 px-2 py-1">
        <span className="flex items-center gap-1 text-[7px] text-amber-800">
          <LuTriangleAlert className="h-2 w-2" /> Rate parity alert: OTA price lower than website for 2 dates
        </span>
        <span className="rounded bg-primary px-1.5 py-0.5 text-[6px] font-semibold text-white">Fix now</span>
      </div>
    </div>
  );
}

const BALANCE = [
  { icon: LuGlobe, title: "OTA bookings", text: "Reach new travellers & increase discovery", tone: "text-sky-500 bg-sky-50", dot: "bg-sky-400" },
  { icon: LuDatabase, title: "Healthy balance", text: "", tone: "text-emerald-600 bg-emerald-50", dot: "bg-emerald-500" },
  { icon: LuHeart, title: "Direct bookings", text: "Own the guest, earn loyalty", tone: "text-violet-500 bg-violet-50", dot: "bg-violet-500" },
];

export function ChannelBalanceMockup() {
  return (
    <div className="relative px-1 py-6">
      <div className="grid grid-cols-3 items-center gap-2">
        {BALANCE.map(({ icon: Icon, title, text, tone }, i) =>
          i === 1 ? (
            <div key={title} className="flex flex-col items-center text-center">
              <span className={`flex size-8 items-center justify-center rounded-lg ${tone}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="mt-2 text-[8px] font-semibold tracking-wider text-[#1E0D01]/70 uppercase">{title}</span>
            </div>
          ) : (
            <div key={title} className="rounded-xl bg-white p-3 shadow-[0_8px_24px_rgba(30,13,1,0.06)]">
              <span className={`flex size-7 items-center justify-center rounded-full ${tone}`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2 text-[9px] font-semibold tracking-wide text-[#1E0D01] uppercase">{title}</p>
              <p className="mt-1 text-[8px] leading-snug text-[#1E0D01]/50">{text}</p>
            </div>
          )
        )}
      </div>
      {/* Connecting line with a node under each column */}
      <div className="relative mx-[16%] mt-6 h-px bg-linear-to-r from-sky-300 via-emerald-300 to-violet-300">
        {BALANCE.map((b, i) => (
          <span
            key={b.title}
            className={`absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-white ${b.dot}`}
            style={{ left: `${i * 50}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function GrowthCaseMockup() {
  const reduceMotion = useReducedMotion();
  // Bars rise from the baseline the first time the chart scrolls into view
  const grow = (delay: number) => ({
    initial: reduceMotion ? false : { scaleY: 0 },
    whileInView: { scaleY: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="rounded-xl bg-white p-4 shadow-[0_10px_30px_rgba(30,13,1,0.06)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-widest text-[#1E0D01]/40 uppercase">Case study: direct</p>
          <p className="mt-0.5 text-[11px] font-semibold text-[#1E0D01]">Booking Revenue Increase</p>
        </div>
        <span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-semibold text-emerald-700">
          <LuTrendingUp className="h-2.5 w-2.5" /> +500%
        </span>
      </div>

      <div className="mt-4 flex h-36 items-end justify-between gap-3">
        <div className="flex w-[34%] flex-col">
          <span className="text-[10px] text-[#1E0D01]/40">₹40 Lakh</span>
          <motion.span {...grow(0.1)} className="mt-1 h-6 origin-bottom rounded-sm bg-[#1E1B4B]" />
          <span className="mt-1.5 text-center text-[6px] tracking-wider text-[#1E0D01]/40 uppercase">Before Bookingjini</span>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <span className="flex size-7 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
            <LuX className="h-3 w-3" />
          </span>
          <span className="mt-1 text-[6px] font-semibold tracking-wider text-emerald-700 uppercase">6X multiplier</span>
        </div>

        <div className="flex w-[34%] flex-col">
          <span className="text-right text-xs font-semibold text-[#1E0D01]">₹2.4 Crore</span>
          <motion.span
            {...grow(0.35)}
            className="mt-1 h-24 origin-bottom rounded-sm bg-linear-to-b from-emerald-400 to-teal-700 shadow-[0_10px_24px_rgba(16,185,129,0.3)]"
          />
          <span className="mt-1.5 text-center text-[6px] tracking-wider text-[#1E0D01]/40 uppercase">With Bookingjini</span>
        </div>
      </div>
    </div>
  );
}
