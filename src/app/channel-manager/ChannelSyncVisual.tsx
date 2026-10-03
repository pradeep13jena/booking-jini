import type { IconType } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { LuRefreshCw } from "react-icons/lu";
import { SiAirbnb, SiBookingdotcom, SiTripadvisor } from "react-icons/si";

// Hero visual: a central inventory calendar syncing out to four OTAs.
// [x, y] are % of the panel; connector lines are drawn to the same points.
const CHANNELS: { name: string; icon: IconType; tone: string; at: [number, number] }[] = [
  { name: "Airbnb", icon: SiAirbnb, tone: "text-[#FF5A5F]", at: [50, 14] },
  { name: "Booking.com", icon: SiBookingdotcom, tone: "text-white bg-[#003580] rounded-md p-1", at: [20, 36] },
  { name: "Google", icon: FcGoogle, tone: "", at: [80, 36] },
  { name: "Tripadvisor", icon: SiTripadvisor, tone: "text-white bg-[#34E0A1] rounded-full p-1", at: [50, 86] },
];
const HUB: [number, number] = [50, 50];

// 5×4 grid of calendar cells; values pick the cell shade
const CELLS = [
  0, 1, 0, 1, 1,
  1, 2, 1, 1, 1,
  1, 1, 1, 2, 1,
  1, 1, 0, 1, 1,
];

export function ChannelSyncVisual() {
  return (
    <div aria-hidden className="relative aspect-[1.35] w-full overflow-hidden rounded-2xl bg-linear-to-b from-white via-[#FFF6EE] to-[#FFDDBE]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
        {CHANNELS.map((c) => (
          <line
            key={c.name}
            x1={HUB[0]}
            y1={HUB[1]}
            x2={c.at[0]}
            y2={c.at[1]}
            stroke="#3B82F6"
            strokeOpacity=".4"
            strokeDasharray="2 3"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Soft halo behind the hub */}
      <div className="absolute top-1/2 left-1/2 aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F1F1F4]/80" />

      {/* Inventory calendar */}
      <div className="absolute top-1/2 left-1/2 w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-2 shadow-[0_10px_30px_rgba(30,42,120,0.12)]">
        <div className="flex gap-1">
          <span className="h-1 w-1/4 rounded-full bg-blue-200" />
          <span className="h-1 w-1/4 rounded-full bg-black/10" />
          <span className="h-1 w-1/4 rounded-full bg-black/10" />
        </div>
        <div className="mt-2 grid grid-cols-5 gap-1">
          {CELLS.map((shade, i) => (
            <span
              key={i}
              className={`aspect-square rounded-xs ${shade === 2 ? "bg-blue-500" : shade === 1 ? "bg-blue-100" : "bg-black/5"}`}
            />
          ))}
        </div>
        <span className="absolute -right-3 -bottom-3 flex size-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_6px_16px_rgba(59,130,246,0.45)] ring-4 ring-white">
          <LuRefreshCw className="h-4 w-4 animate-[spin_4s_linear_infinite] motion-reduce:animate-none" />
        </span>
      </div>

      {CHANNELS.map(({ name, icon: Icon, tone, at }) => (
        <span key={name} style={{ left: `${at[0]}%`, top: `${at[1]}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
          {/* OTA logo tile at the end of its connector */}
          <span className="flex size-10 items-center justify-center rounded-xl bg-white shadow-[0_6px_18px_rgba(30,13,1,0.08)] md:size-12">
            <Icon className={`h-6 w-6 md:h-7 md:w-7 ${tone}`} />
          </span>
        </span>
      ))}
    </div>
  );
}
