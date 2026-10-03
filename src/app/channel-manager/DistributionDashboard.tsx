import { LuBedDouble, LuRefreshCw, LuRocket, LuShieldCheck } from "react-icons/lu";
import { SiAirbnb, SiBookingdotcom, SiExpedia } from "react-icons/si";

import { FeatureShowcase, type ShowcaseItem } from "@/components/reusable/FeatureShowcase";

const FEATURES: ShowcaseItem[] = [
  { title: "Inventory overview", description: "Track overall allocation metrics on a daily or weekly level." },
  { title: "Rate management", description: "Easily adjust dynamic rates and promotional room costs." },
  { title: "Channel status", description: "Real-time sync indicators for connected partners." },
  { title: "Booking activity", description: "Live feed of bookings streaming directly to PMS." },
];

const RATES = [
  { room: "Deluxe Suite", note: "King • 2 Guests", prices: ["$120", "$130", "$140"] },
  { room: "Standard Room", note: "Queen • 2 Guests", prices: ["$95", "$95", "$95"] },
];

const OTAS = [
  { name: "Booking.com", sync: "99.9%", badge: <SiBookingdotcom className="h-full w-full rounded-sm bg-[#003580] p-0.5 text-white" /> },
  { name: "Expedia", sync: "100%", badge: <SiExpedia className="h-full w-full rounded-sm bg-[#FDDB32] p-0.5 text-[#1E243A]" /> },
  { name: "Airbnb", sync: "99.1%", badge: <SiAirbnb className="h-full w-full rounded-sm bg-[#FF5A5F] p-0.5 text-white" /> },
  // No Agoda mark in react-icons — lettered stand-in
  { name: "Agoda", sync: "98.8%", badge: <span className="flex h-full w-full items-center justify-center rounded-sm bg-[#5542F6] text-[7px] font-bold text-white">a</span> },
];

// Static channel-manager dashboard mockup
function DashboardMockup() {
  return (
    <div className="relative rounded-xl bg-white p-3 shadow-[0_12px_32px_rgba(30,13,1,0.08)]">
      <div className="flex items-center justify-between border-b border-black/5 pb-2">
        <span className="flex items-center gap-1.5 font-mono text-[8px] font-semibold tracking-wider text-[#1E1B4B]">
          <span className="flex size-4 items-center justify-center rounded bg-blue-600 text-[7px] text-white">B</span>
          B-J_CHANNEL_MANAGER_V2.0
        </span>
        <span className="flex gap-1.5">
          <span className="size-3 rounded-full bg-black/5" />
          <span className="size-3 rounded-full bg-blue-100" />
        </span>
      </div>

      <div className="mt-3 grid grid-cols-[1.25fr_1fr] gap-2.5">
        <div className="space-y-2.5">
          <div className="rounded-lg bg-blue-50/60 p-2.5">
            <p className="text-[7px] tracking-widest text-[#1E1B4B]/50 uppercase">● Central allocation</p>
            <div className="mt-1 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-[#1E1B4B]">142 / 150</p>
                <p className="text-[7px] text-[#1E1B4B]/50">Rooms available today</p>
              </div>
              <span className="flex size-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <LuBedDouble className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-black/5 p-2">
            <p className="flex items-center gap-1 text-[8px] font-semibold text-[#1E1B4B]">
              <span className="size-2.5 rounded-sm bg-blue-100" /> Rates &amp; Allocation Matrix
            </p>
            <table className="mt-1.5 w-full text-left text-[7px]">
              <thead className="text-[#1E1B4B]/40">
                <tr>
                  <th className="py-1 font-normal">Room Type</th>
                  <th className="font-normal">Mon</th>
                  <th className="font-normal">Tue</th>
                  <th className="font-normal">Wed</th>
                </tr>
              </thead>
              <tbody className="text-[#1E1B4B]">
                {RATES.map((r) => (
                  <tr key={r.room} className="border-t border-black/5">
                    <td className="py-1.5">
                      <span className="block font-semibold">{r.room}</span>
                      <span className="text-[6px] text-[#1E1B4B]/40">{r.note}</span>
                    </td>
                    {r.prices.map((p, i) => (
                      <td key={i}>
                        <span className="block">{p}</span>
                        <span className="text-[6px] text-emerald-600">● 10</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="relative rounded-lg bg-emerald-50/50 p-2.5">
            <p className="text-[7px] tracking-widest text-[#1E1B4B]/50 uppercase">● Synced OTAs</p>
            <p className="mt-1 text-lg font-semibold text-[#1E1B4B]">18 Active</p>
            <svg viewBox="0 0 80 20" className="absolute right-2 bottom-2 h-5 w-16" fill="none">
              <path d="M0 18 L15 15 L28 16 L42 10 L55 12 L68 5 L80 2" stroke="#10B981" strokeWidth="1.5" />
            </svg>
            <span className="absolute -top-2 -right-2 flex items-center gap-0.5 rounded-full bg-white px-1.5 py-0.5 text-[6px] font-medium text-emerald-700 shadow-[0_4px_10px_rgba(16,185,129,0.2)]">
              <LuShieldCheck className="h-2 w-2" /> 0 Overbookings
            </span>
          </div>

          <div className="space-y-1 p-1">
            {OTAS.map((o) => (
              <div key={o.name} className="flex items-center gap-1.5 rounded-md border border-black/5 px-1.5 py-1 text-[7px]">
                <span className="size-3.5 shrink-0">{o.badge}</span>
                <span className="flex-1 font-semibold text-[#1E1B4B]">{o.name}</span>
                <span className="text-[#1E1B4B]/40">Sync {o.sync}</span>
                <span className="rounded-full bg-emerald-50 px-1 text-[6px] text-emerald-700">● Active</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute -bottom-3 -left-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[7px] font-semibold text-blue-600 shadow-[0_6px_16px_rgba(59,130,246,0.2)]">
        <LuRefreshCw className="h-2.5 w-2.5" /> Instant Sync
      </span>
    </div>
  );
}

export function DistributionDashboard() {
  return (
    <FeatureShowcase
      badge="Our Dashboard"
      badgeIcon={<LuRocket className="h-3.5 w-3.5 text-primary" />}
      title={
        <>
          See your distribution
          <br />
          from one place
        </>
      }
      items={FEATURES}
      visual={<DashboardMockup />}
    />
  );
}
