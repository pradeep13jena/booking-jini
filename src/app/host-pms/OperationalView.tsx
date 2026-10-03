import type { IconType } from "react-icons";
import {
  LuCalendar,
  LuChartBar,
  LuClock,
  LuLayoutDashboard,
  LuRocket,
  LuSettings,
  LuTrendingUp,
  LuUsers,
  LuBedDouble,
} from "react-icons/lu";

import { FeatureShowcase, type ShowcaseItem } from "@/components/reusable/FeatureShowcase";

const FEATURES: ShowcaseItem[] = [
  { title: "Property overview", description: "Live high-level indicators highlighting check-ins, guest actions, and empty rooms." },
  { title: "Reservation activity", description: "Interactive room matrix giving front-desk absolute control over room selection." },
  { title: "Operational view", description: "Clean checklist formats displaying dirty, pending, and clean rooms for instant housekeeping allocation." },
  { title: "Guest information", description: "Simple sidebar details storing registration info, dynamic room bills, and specialized requirements." },
];

const NAV: { label: string; icon: IconType }[] = [
  { label: "Dashboard", icon: LuLayoutDashboard },
  { label: "Reservations", icon: LuCalendar },
  { label: "Rooms", icon: LuBedDouble },
  { label: "Guests", icon: LuUsers },
  { label: "Reports", icon: LuChartBar },
  { label: "Settings", icon: LuSettings },
];

const TILES = [
  { label: "Occupancy", value: "78%", note: "117 of 150 rooms sold", accent: true },
  { label: "Arrivals", value: "14", note: "5 already checked in" },
  { label: "Departures", value: "9", note: "All cleared by 11:30" },
  { label: "Housekeeping", value: "5 dirty", note: "2 out of order" },
];

// Room matrix: [start, span] in day columns out of 7, shade per booking
const DAYS = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
const ROOMS: { room: string; bars: [number, number, string][] }[] = [
  { room: "101 Standard", bars: [[1, 2, "bg-orange-300"]] },
  { room: "102 Deluxe", bars: [[1.5, 2, "bg-orange-400"]] },
  { room: "103 Standard", bars: [[0, 2.5, "bg-orange-600"]] },
  { room: "104 Suite", bars: [[0.5, 2, "bg-orange-800"]] },
];

const GUESTS = [
  { initials: "RD", name: "Robert Dev", room: "Room 102", status: "Checked in", tone: "bg-primary text-white", time: "9:14 AM" },
  { initials: "AS", name: "Aria Smith", room: "Room 206", status: "Pending deposit", tone: "bg-orange-50 text-primary", time: "09:30 AM" },
];

// Static Host PMS dashboard mockup
function PropertyOverviewMockup() {
  return (
    <div className="flex overflow-hidden rounded-xl bg-white shadow-[0_12px_32px_rgba(30,13,1,0.08)]">
      <aside className="flex w-[22%] shrink-0 flex-col border-r border-black/5 p-2">
        <p className="flex items-center gap-1 text-[8px] font-semibold text-[#1E0D01]">
          <span className="flex size-4 items-center justify-center rounded bg-primary text-[7px] text-white">G</span>
          Host PMS
        </p>
        <ul className="mt-3 space-y-1">
          {NAV.map(({ label, icon: Icon }, i) => (
            <li
              key={label}
              className={`flex items-center gap-1 rounded px-1 py-0.5 text-[6px] ${i === 0 ? "bg-orange-50 font-semibold text-primary" : "text-[#1E0D01]/50"}`}
            >
              <Icon className="h-2 w-2" /> {label}
            </li>
          ))}
        </ul>
        <div className="mt-auto rounded-md bg-[#FAFAFA] p-1.5">
          <p className="text-[5px] tracking-widest text-[#1E0D01]/40 uppercase">Today&apos;s revenue</p>
          <p className="text-[9px] font-semibold text-[#1E0D01]">$14,820</p>
          <p className="flex items-center gap-0.5 text-[5px] text-emerald-600">
            <LuTrendingUp className="h-1.5 w-1.5" /> 8.4% vs last week
          </p>
        </div>
      </aside>

      <div className="min-w-0 flex-1 p-2.5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold text-[#1E0D01]">Property overview</p>
            <p className="text-[6px] text-[#1E0D01]/50">Grand Plaza Resort &amp; Spa</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="flex items-center gap-0.5 rounded border border-black/10 px-1 py-0.5 text-[6px] text-[#1E0D01]/60">
              <LuClock className="h-1.5 w-1.5" /> Today · Oct 24
            </span>
            <span className="rounded bg-primary px-1.5 py-0.5 text-[6px] font-semibold text-white">+ Check-in</span>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {TILES.map((t) => (
            <div key={t.label} className={`rounded-md border p-1.5 ${t.accent ? "border-orange-200 bg-orange-50/70" : "border-black/5"}`}>
              <p className="text-[5px] tracking-widest text-[#1E0D01]/50 uppercase">{t.label}</p>
              <p className="text-[11px] font-semibold text-[#1E0D01]">{t.value}</p>
              {t.accent && <span className="my-0.5 block h-0.5 w-3/4 rounded-full bg-primary" />}
              <p className="text-[5px] text-[#1E0D01]/50">{t.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-md border border-black/5 p-1.5">
          <div className="flex items-center justify-between text-[6px]">
            <span className="flex items-center gap-1 font-semibold text-[#1E0D01]">
              Live room matrix <span className="rounded-full bg-orange-50 px-1 text-[5px] text-primary">● Updating live</span>
            </span>
            <span className="text-[#1E0D01]/40">Room allocation · next 7 nights</span>
          </div>
          <div className="mt-1.5 grid grid-cols-[22%_1fr] text-[5px] text-[#1E0D01]/40">
            <span />
            <span className="grid grid-cols-7">
              {DAYS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </span>
          </div>
          {ROOMS.map((r) => (
            <div key={r.room} className="mt-1 grid grid-cols-[22%_1fr] items-center text-[5px] text-[#1E0D01]/70">
              <span>{r.room}</span>
              <span className="relative h-2 rounded-sm bg-black/3">
                {r.bars.map(([start, span, tone], i) => (
                  <span
                    key={i}
                    className={`absolute top-0 h-full rounded-sm ${tone}`}
                    style={{ left: `${(start / 7) * 100}%`, width: `${(span / 7) * 100}%` }}
                  />
                ))}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2">
          <div className="flex justify-between text-[6px]">
            <span className="font-semibold text-[#1E0D01]">Recent active guests</span>
            <span className="text-primary">View all</span>
          </div>
          <ul className="mt-1 space-y-1">
            {GUESTS.map((g) => (
              <li key={g.name} className="flex items-center gap-1.5 rounded-md border border-black/5 px-1.5 py-1 text-[6px]">
                <span className="flex size-3.5 items-center justify-center rounded-full bg-orange-50 text-[4px] font-semibold text-primary">
                  {g.initials}
                </span>
                <span className="w-[28%] font-semibold text-[#1E0D01]">{g.name}</span>
                <span className="flex-1 text-[#1E0D01]/50">{g.room}</span>
                <span className={`rounded px-1 py-0.5 text-[5px] font-medium ${g.tone}`}>{g.status}</span>
                <span className="text-[#1E0D01]/40">{g.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function OperationalView() {
  return (
    <FeatureShowcase
      badge="One operational view"
      badgeIcon={<LuRocket className="h-3.5 w-3.5 text-primary" />}
      title={
        <>
          See your distribution
          <br />
          from one place
        </>
      }
      items={FEATURES}
      visual={<PropertyOverviewMockup />}
    />
  );
}
