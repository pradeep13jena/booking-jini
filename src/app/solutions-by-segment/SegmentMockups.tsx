import Image from "next/image";
import type { IconType } from "react-icons";
import {
  LuBedDouble,
  LuCalendarDays,
  LuChevronRight,
  LuFlag,
  LuGlobe,
  LuHotel,
  LuHouse,
  LuLandmark,
  LuMapPin,
  LuRefreshCw,
  LuStar,
  LuUsers,
  LuWorkflow,
} from "react-icons/lu";

import { DUMMY } from "./dummy-images";

// Decorative product visuals for the segment cards — markup only, except the two photos

const panel = "rounded-xl bg-white/95 shadow-[0_12px_32px_rgba(30,13,1,0.1)] backdrop-blur";
const tinyLabel = "text-[7px] font-semibold tracking-widest text-[#1E1B4B]/40 uppercase";

function StatusChip({ children, tone }: { children: string; tone: "green" | "amber" | "violet" }) {
  const tones = {
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return <span className={`rounded-full px-1.5 py-0.5 text-[7px] font-medium ${tones[tone]}`}>{children}</span>;
}

// Independent hotels: property card + occupancy + direct bookings trend
export function PropertyMockup() {
  return (
    <div className="relative mx-auto h-56 max-w-md">
      <div className={`absolute top-4 left-0 w-[62%] p-2.5 ${panel}`}>
        <div className="relative h-20 overflow-hidden rounded-md">
          <Image src={DUMMY.boutiqueHotel} alt="" fill sizes="240px" className="object-cover" />
        </div>
        <div className="mt-2 flex items-start gap-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
            <LuHotel className="h-3 w-3" />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-[#1E1B4B]">Boutique Hotel Property</p>
            <p className="flex items-center gap-0.5 text-[7px] text-[#1E1B4B]/50">
              <LuMapPin className="h-2 w-2" /> Dubai, UAE
            </p>
          </div>
        </div>
        <div className="mt-2 flex gap-4 border-t border-black/5 pt-2 text-[7px] text-[#1E1B4B]/60">
          <span className="flex items-center gap-1"><LuBedDouble className="h-2.5 w-2.5" /> 120 Rooms</span>
          <span className="flex items-center gap-1"><LuStar className="h-2.5 w-2.5" /> 4.8</span>
        </div>
      </div>

      <div className={`absolute top-0 right-0 w-[42%] p-2.5 ${panel}`}>
        <div className="flex items-center justify-between">
          <span className="flex size-5 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
            <LuUsers className="h-2.5 w-2.5" />
          </span>
          <span className={tinyLabel}>Occupancy</span>
        </div>
        <div className="mt-1 flex items-end justify-between">
          <span className="text-xl font-semibold text-[#1E1B4B]">88%</span>
          <span className="text-[7px] text-emerald-600">↑ +12% <span className="text-[#1E1B4B]/40">vs last month</span></span>
        </div>
        <div className="mt-1.5 h-1 rounded-full bg-black/5">
          <div className="h-full w-[88%] rounded-full bg-emerald-500" />
        </div>
      </div>

      <div className={`absolute right-[-2%] bottom-2 w-[46%] p-2.5 ${panel}`}>
        <div className="flex items-center gap-1.5">
          <span className="flex size-5 items-center justify-center rounded-md bg-violet-50 text-violet-600">
            <LuCalendarDays className="h-2.5 w-2.5" />
          </span>
          <span className={tinyLabel}>Direct bookings</span>
        </div>
        <div className="mt-1 flex items-end justify-between">
          <span className="text-xl font-semibold text-[#1E1B4B]">+45%</span>
          <span className="text-[7px] text-emerald-600">↑ +45%</span>
        </div>
        <svg viewBox="0 0 120 24" className="mt-1 h-6 w-full" fill="none">
          <path d="M0 18 C15 20, 25 10, 40 14 S65 22, 80 12 S105 8, 118 6" stroke="#8B7CF6" strokeWidth="1.5" />
          <circle cx="118" cy="6" r="2" fill="#6D5DF5" />
        </svg>
      </div>
    </div>
  );
}

const ARRIVALS = [
  { room: "101", name: "Sarah Khan", note: "Guest checked in", time: "Today, 2:15 PM", status: "Checked in", tone: "green" as const },
  { room: "104", name: "Ahmed Raza", note: "Awaiting housekeeping", time: "Today, 3:00 PM", status: "In Progress", tone: "amber" as const },
  { room: "202", name: "Priya Sharma", note: "Late check-in request", time: "Today, 10:00 PM", status: "Requested", tone: "violet" as const },
];

// Growing hotels: one operations hub replacing separate tools
export function OpsHubMockup() {
  return (
    <div className={`mx-auto max-w-md p-3 ${panel}`}>
      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
            <LuHotel className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-[#1E1B4B]">Operations Hub</p>
            <p className="text-[7px] text-[#1E1B4B]/50">Manage daily operations, guest arrivals and room activity across your property.</p>
          </div>
        </div>
        <StatusChip tone="green">● Synced</StatusChip>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { icon: LuWorkflow, label: "Distribution", value: "14 Active Channels", note: "+2 new this week" },
          { icon: LuRefreshCw, label: "Rates status", value: "Automated", note: "All rates up to date" },
        ].map(({ icon: Icon, label, value, note }) => (
          <div key={label} className="flex items-center gap-2 rounded-lg bg-[#F7F7FB] p-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-white text-indigo-500">
              <Icon className="h-3 w-3" />
            </span>
            <div className="min-w-0">
              <p className={tinyLabel}>{label}</p>
              <p className="text-[9px] font-semibold text-[#1E1B4B]">{value}</p>
              <p className="text-[6px] text-emerald-600">{note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-lg border border-black/5 p-2">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-[9px] font-semibold text-[#1E1B4B]">
            <LuCalendarDays className="h-3 w-3 text-indigo-500" /> Daily Arrivals Calendar
          </p>
          <span className="rounded border border-black/10 px-1 text-[6px] text-[#1E1B4B]/60">View All</span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {ARRIVALS.map((a) => (
            <li key={a.room} className="flex items-center gap-2 border-t border-black/5 pt-1.5 text-[7px]">
              <span className="rounded bg-[#F7F7FB] px-1.5 py-1 font-semibold text-[#1E1B4B]">{a.room}</span>
              <span className="w-20">
                <span className="block font-semibold text-[#1E1B4B]">{a.name}</span>
                <span className="text-[#1E1B4B]/40">{a.note}</span>
              </span>
              <span className="flex-1 text-[#1E1B4B]/60">{a.time}</span>
              <StatusChip tone={a.tone}>{a.status}</StatusChip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CABIN_BOOKINGS = [
  { month: "Jul", day: "14", name: "Forest Cabin", detail: "2 Guests • 2 Nights", status: "Confirmed", tone: "green" as const },
  { month: "Jul", day: "16", name: "Lakeside Cabin", detail: "1 Guest • 3 Nights", status: "Upcoming", tone: "violet" as const },
];

// Homestays: listing photo + a simple booking calendar
export function CabinBookingMockup() {
  return (
    <div className="relative mx-auto h-60 max-w-md">
      <div className="absolute top-2 left-0 h-44 w-[66%] overflow-hidden rounded-lg shadow-[0_12px_32px_rgba(30,13,1,0.15)]">
        <Image src={DUMMY.cabin} alt="" fill sizes="300px" className="object-cover" />
        <span className="absolute top-2 left-2 flex items-center gap-1 rounded bg-white/90 px-1.5 py-0.5 text-[7px] font-medium text-[#1E1B4B]">
          <LuHouse className="h-2.5 w-2.5" /> Cabin
        </span>
      </div>

      <div className={`absolute top-12 right-0 w-[52%] p-2.5 ${panel}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex gap-1.5">
            <span className="flex size-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
              <LuCalendarDays className="h-3 w-3" />
            </span>
            <div>
              <p className="text-[10px] font-semibold text-[#1E1B4B]">Booking Calendar</p>
              <p className="text-[6px] text-[#1E1B4B]/50">View and manage your bookings and availability</p>
            </div>
          </div>
          <StatusChip tone="green">● Live</StatusChip>
        </div>
        <div className="mt-2 flex justify-between">
          <span className={tinyLabel}>Upcoming bookings</span>
          <span className="text-[6px] text-violet-600">View all →</span>
        </div>
        <ul className="mt-1.5 space-y-1.5">
          {CABIN_BOOKINGS.map((b) => (
            <li key={b.name} className="flex items-center gap-2 rounded-md border border-black/5 p-1.5">
              <span className="flex flex-col items-center rounded bg-emerald-50 px-1.5 py-0.5 leading-none">
                <span className="text-[5px] text-emerald-700 uppercase">{b.month}</span>
                <span className="text-[10px] font-semibold text-[#1E1B4B]">{b.day}</span>
              </span>
              <span className="flex-1">
                <span className="block text-[8px] font-semibold text-[#1E1B4B]">{b.name}</span>
                <span className="text-[6px] text-[#1E1B4B]/50">{b.detail}</span>
              </span>
              <StatusChip tone={b.tone}>{b.status}</StatusChip>
              <LuChevronRight className="h-2.5 w-2.5 text-[#1E1B4B]/30" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Tourism boards: a central platform linked to several regional boards
// [left %, top %] — connector lines are drawn to the same points, so keep them in sync
const BOARDS: { name: string; note: string; icon: IconType; tone: string; at: [number, number] }[] = [
  { name: "UAE Tourism Board", note: "Reach travellers across the UAE", icon: LuFlag, tone: "bg-emerald-50 text-emerald-600", at: [20, 18] },
  { name: "Saudi Tourism Board", note: "Unified inventory from Saudi Arabia", icon: LuGlobe, tone: "bg-violet-50 text-violet-600", at: [80, 18] },
  { name: "Qatar Tourism Board", note: "Grow your presence in Qatar", icon: LuMapPin, tone: "bg-blue-50 text-blue-600", at: [18, 55] },
  { name: "Oman Tourism Board", note: "Welcome guests from Oman", icon: LuLandmark, tone: "bg-amber-50 text-amber-600", at: [82, 55] },
  { name: "Bahrain Tourism Board", note: "Support your visitors in Bahrain", icon: LuStar, tone: "bg-rose-50 text-rose-500", at: [50, 85] },
];
const HUB: [number, number] = [50, 45];

export function TourismNetworkMockup() {
  return (
    <div className={`relative mx-auto aspect-4/3 max-w-md ${panel} bg-[#F8F9FC]`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {BOARDS.map((b) => (
          <line
            key={b.name}
            x1={HUB[0]}
            y1={HUB[1]}
            x2={b.at[0]}
            y2={b.at[1]}
            stroke="#8B7CF6"
            strokeOpacity=".35"
            strokeDasharray="1.5 1.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 px-4 py-2.5 text-white shadow-[0_10px_24px_rgba(99,102,241,0.4)]"
        style={{ left: `${HUB[0]}%`, top: `${HUB[1]}%` }}
      >
        <LuLandmark className="h-3.5 w-3.5" />
        <span className="text-[7px] font-medium">Central Platform</span>
      </div>

      {BOARDS.map(({ name, note, icon: Icon, tone, at }) => (
        <div
          key={name}
          className="absolute flex w-[34%] -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-md bg-white p-1.5 shadow-[0_4px_12px_rgba(30,13,1,0.06)]"
          style={{ left: `${at[0]}%`, top: `${at[1]}%` }}
        >
          <span className={`flex size-5 shrink-0 items-center justify-center rounded ${tone}`}>
            <Icon className="h-2.5 w-2.5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[7px] font-semibold text-[#1E1B4B]">{name}</span>
            <span className="block truncate text-[5px] text-[#1E1B4B]/50">{note}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

