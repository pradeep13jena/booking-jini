import { LuCheck, LuHeadphones, LuMail, LuRefreshCw } from "react-icons/lu";

// Decorative product mockups for RoleStack — pure markup so they stay crisp and need no assets

const DARK = "bg-[#2A1A12]";
const LIGHT_ORANGE = "bg-[#F4A26B]";

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`absolute rounded-xl bg-white p-3 shadow-[0_10px_30px_rgba(30,13,1,0.08)] ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-semibold tracking-widest text-[#1E0D01]/50 uppercase">{children}</p>;
}

function Legend({ items }: { items: { label: string; swatch: string }[] }) {
  return (
    <div className="flex gap-3 text-[10px] text-[#1E0D01]/60">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1">
          <span className={`size-1.5 rounded-xs ${item.swatch}`} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

// Small status chip in the top-left of each panel
function Chip({ children, dots = false }: { children: React.ReactNode; dots?: boolean }) {
  return (
    <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/80 py-1 pr-3 pl-1 shadow-[0_4px_14px_rgba(30,13,1,0.06)]">
      <span className="flex size-6 items-center justify-center rounded-md bg-primary text-white">{children}</span>
      {dots ? (
        <span className="flex gap-1">
          <span className="size-1 rounded-full bg-primary" />
          <span className="size-1 rounded-full bg-primary/50" />
          <span className="size-1 rounded-full bg-primary/30" />
        </span>
      ) : (
        <span className="h-1.5 w-8 rounded-full bg-black/10" />
      )}
    </div>
  );
}

// Owners: direct vs OTA bars + a net-earnings report
const OWNER_BARS = [
  [70, 15], [62, 22], [58, 28], [55, 35], [50, 45], [44, 58], [40, 70],
];

export function OwnerMockup() {
  return (
    <>
      <Chip>
        <LuCheck className="h-3.5 w-3.5" />
      </Chip>
      <Card className="bottom-0 left-5 w-[58%] rounded-b-none pb-0">
        <Legend items={[{ label: "Direct", swatch: "bg-primary" }, { label: "OTA", swatch: DARK }]} />
        <div className="mt-3 flex h-28 items-end gap-1.5">
          {OWNER_BARS.map(([ota, direct], i) => (
            <div key={i} className="flex flex-1 flex-col gap-0.5">
              <span className={`rounded-t-sm ${DARK}`} style={{ height: ota }} />
              <span className={i % 2 ? "bg-primary" : LIGHT_ORANGE} style={{ height: direct * 0.5 }} />
            </div>
          ))}
        </div>
      </Card>
      <Card className="top-[22%] right-4 w-[44%]">
        <CardTitle>Report</CardTitle>
        <p className="mt-3 text-[10px] text-[#1E0D01]/70">Revenue</p>
        <span className={`mt-1 block h-1.5 w-full rounded-full ${DARK}`} />
        <p className="mt-3 text-[10px] text-[#1E0D01]/70">Commission</p>
        <span className="mt-1 block h-1.5 w-1/3 rounded-full bg-[repeating-linear-gradient(135deg,var(--color-primary)_0_3px,transparent_3px_5px)]" />
        <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-2.5">
          <span className="text-[10px] font-semibold text-[#1E0D01]">Net earned</span>
          <span className="h-1.5 w-10 rounded-full bg-primary" />
        </div>
      </Card>
    </>
  );
}

// General managers: competitor rate lines + one-click rate push
const RATE_ROWS = ["w-10", "w-8", "w-12", "w-9"];

export function ManagerMockup() {
  return (
    <>
      <Chip>
        <LuMail className="h-3.5 w-3.5" />
      </Chip>
      <Card className="bottom-0 left-5 w-[58%] rounded-b-none">
        <CardTitle>Rate shopper</CardTitle>
        <div className="mt-2 flex gap-3 text-[10px] text-[#1E0D01]/60">
          <span>— You</span>
          <span>-- Competitors</span>
        </div>
        <svg viewBox="0 0 200 90" className="mt-2 h-24 w-full" fill="none">
          <path d="M0 70 C30 10, 50 10, 75 45 S120 85, 150 30 S190 20, 200 50" stroke="#1E0D01" strokeOpacity=".35" strokeDasharray="3 3" />
          <path d="M0 30 C25 80, 55 85, 85 50 S130 10, 160 60 S190 75, 200 40" stroke="#1E0D01" strokeOpacity=".35" strokeDasharray="3 3" />
          <path d="M0 62 C40 60, 80 58, 120 56 S180 52, 200 50" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="198" cy="50" r="3.5" fill="var(--color-primary)" />
        </svg>
      </Card>
      <Card className="top-[18%] right-4 w-[44%]">
        <CardTitle>Push rates</CardTitle>
        <div className="mt-2 flex items-center justify-between rounded-md bg-primary px-2 py-1.5 text-white">
          <span className="text-xs font-semibold">₹4,200</span>
          <span className="text-[9px]">All channels</span>
        </div>
        <ul className="mt-2 space-y-1.5 border-l border-primary/40 pl-2">
          {RATE_ROWS.map((w, i) => (
            <li key={i} className="flex items-center justify-between text-[10px] text-[#1E0D01]">
              <span className={`h-1.5 rounded-full bg-black/10 ${w}`} />
              <span className="flex items-center gap-1">
                ₹4,200 <LuCheck className="h-3 w-3 text-primary" />
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}

// Front office: booking timeline + live inventory
// [offset, width, tone] per bar, in grid columns out of 8
const BOOKING_ROWS: [number, number, string][][] = [
  [[0, 3, DARK], [3, 2, LIGHT_ORANGE]],
  [[2, 4, "bg-primary"]],
  [[1, 3, DARK], [5, 2, LIGHT_ORANGE]],
  [[0, 2, LIGHT_ORANGE], [3, 4, DARK]],
  [[0, 3, LIGHT_ORANGE], [4, 3, LIGHT_ORANGE]],
];

export function FrontDeskMockup() {
  return (
    <>
      <Chip dots>
        <LuHeadphones className="h-3.5 w-3.5" />
      </Chip>
      <Card className="bottom-0 left-5 w-[58%] rounded-b-none pb-0">
        <CardTitle>Bookings</CardTitle>
        <div className="mt-2">
          <Legend items={[{ label: "Check-in", swatch: "bg-primary" }, { label: "Stay", swatch: DARK }]} />
        </div>
        <div className="mt-3 flex justify-between px-1">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className={`size-1 rounded-full ${i === 4 ? "bg-primary" : "bg-black/15"}`} />
          ))}
        </div>
        <div className="mt-2 space-y-1.5">
          {BOOKING_ROWS.map((row, r) => (
            <div key={r} className="relative h-3.5">
              {row.map(([start, span, tone], b) => (
                <span
                  key={b}
                  className={`absolute top-0 h-full rounded-sm ${tone}`}
                  style={{ left: `${(start / 8) * 100}%`, width: `${(span / 8) * 100 - 2}%` }}
                />
              ))}
            </div>
          ))}
        </div>
      </Card>
      <Card className="top-[22%] right-4 w-[44%]">
        <CardTitle>Inventory</CardTitle>
        <div className="mt-2 flex items-center justify-between rounded-md bg-primary px-2 py-1.5 text-white">
          <span className="text-[10px] font-semibold">4 rooms left</span>
          <span className="flex items-center gap-1 text-[9px]">
            <span className="size-1 rounded-full bg-white" /> Live
          </span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {RATE_ROWS.map((w, i) => (
            <li key={i} className="flex items-center justify-between text-[10px] text-[#1E0D01]">
              <span className={`h-1.5 rounded-full bg-black/10 ${w}`} />
              <span className="flex items-center gap-1">
                4 <LuRefreshCw className="h-2.5 w-2.5 text-primary" />
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
