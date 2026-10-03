import type { IconType } from "react-icons";
import { LuBedDouble, LuCircleCheck, LuLink, LuWallet } from "react-icons/lu";

import { Reveal } from "../home/Reveal";
import { SectionHeading } from "../home/SectionHeading";

type Line = { label: string; amount: number };

// Net and the headline difference are derived, so editing a fee keeps every number consistent
const DIRECT: Line[] = [
  { label: "Room Rate", amount: 200 },
  { label: "Card processing", amount: -5 },
  { label: "Internal cost", amount: -3.5 },
  { label: "OTA Commission", amount: 0 },
];
const OTA: Line[] = [
  { label: "Room Rate", amount: 200 },
  { label: "Card processing", amount: -5 },
  { label: "OTA Commission (10%)", amount: -20 },
  { label: "GDS fee", amount: -6 },
];

const net = (lines: Line[]) => lines.reduce((sum, l) => sum + l.amount, 0);
const usd = (n: number) => `${n < 0 ? "-" : ""}$${Math.abs(n).toFixed(2)}`;

function CostCard({
  title,
  icon: Icon,
  lines,
  tone,
  recommended = false,
}: {
  title: string;
  icon: IconType;
  lines: Line[];
  tone: "green" | "orange";
  recommended?: boolean;
}) {
  const green = tone === "green";

  return (
    <div className={`rounded-xl border bg-white p-4 ${green ? "border-emerald-100" : "border-orange-100"}`}>
      <div className="flex items-center gap-2.5">
        <span
          className={`flex size-8 items-center justify-center rounded-full ${green ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-primary"}`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold text-[#1E1B4B]">{title}</h3>
        {recommended && (
          <span className="ml-auto flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-semibold tracking-wider text-emerald-700 uppercase">
            <LuCircleCheck className="h-2.5 w-2.5" /> Recommended
          </span>
        )}
      </div>

      <dl className="mt-4 space-y-2.5 border-b border-black/5 pb-4 text-xs">
        {lines.map((line, i) => (
          <div key={line.label} className="flex justify-between">
            <dt className="text-[#1E1B4B]/60">{line.label}</dt>
            <dd
              className={
                i === 0 ? "font-semibold text-[#1E1B4B]" : line.amount === 0 ? "text-[#1E1B4B]/40" : "font-medium text-primary"
              }
            >
              {usd(line.amount)}
            </dd>
          </div>
        ))}
      </dl>

      <div className={`mt-4 flex items-center justify-between rounded-lg px-3 py-3 ${green ? "bg-emerald-50/70" : "bg-orange-50/80"}`}>
        <span className={`flex items-center gap-2 text-[11px] font-semibold ${green ? "text-emerald-800" : "text-primary"}`}>
          <LuWallet className="h-4 w-4" /> Net to Hotel
        </span>
        <span className={`text-lg font-bold ${green ? "text-emerald-700" : "text-primary"}`}>{usd(net(lines))}</span>
      </div>
    </div>
  );
}

export function OtaCostCompare() {
  const difference = net(DIRECT) - net(OTA);

  return (
    <section className="w-full overflow-hidden">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          title="The real cost of an OTA booking"
          description="Every booking has a distribution cost. A direct booking can cost significantly less."
        />

        <Reveal className="mx-auto mt-8 flex w-fit flex-col items-center gap-2 rounded-lg bg-white p-1.5 shadow-[0_12px_30px_rgba(30,13,1,0.12)] sm:flex-row sm:gap-6 sm:pr-5">
          <span className="rounded-md bg-[#F5F5F5] px-3 py-2 text-xs text-[#1E0D01]">
            The same room. The same guest. A very different return.
          </span>
          <span className="pb-1 text-xs font-semibold text-primary sm:pb-0">+{usd(difference)} difference per night</span>
        </Reveal>

        <Reveal index={1} className="relative mx-auto mt-6 max-w-2xl py-16 md:py-24">
          {/* Organic gradient blob behind the comparison */}
          <div
            aria-hidden
            className="absolute inset-x-[-8%] inset-y-0 rounded-[45%_55%_60%_40%/40%_45%_55%_60%] bg-[radial-gradient(circle_at_70%_25%,#FF6A2B_0%,transparent_45%),radial-gradient(circle_at_25%_80%,#B9A6FF_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#FFD38A_0%,transparent_45%),linear-gradient(135deg,#FFB4A2,#FFC9A8_60%,#FFE3C4)] opacity-90 blur-[2px] md:inset-x-[-12%]"
          />
          <div className="relative grid grid-cols-1 gap-3 rounded-2xl bg-white/70 p-3 backdrop-blur-md sm:grid-cols-2">
            <CostCard title="Direct Booking" icon={LuBedDouble} lines={DIRECT} tone="green" recommended />
            <CostCard title="OTA Booking" icon={LuLink} lines={OTA} tone="orange" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
