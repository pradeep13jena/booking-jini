import { LuArrowRight, LuCheck, LuHotel, LuRocket, LuTriangleAlert, LuUnplug } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { WarmGradientSection } from "@/components/reusable/WarmGradientSection";

const SCATTERED = ["Booking system", "OTA portals", "Property software", "Guest info", "Spreadsheets", "Manual entries"];

const CONNECTED = [
  { title: "Less fragmentation", description: "No repeat data entry across tools." },
  { title: "Clearer information", description: "One central platform as the single source of truth." },
  { title: "Simpler daily work", description: "Intuitive check-ins completed in two clicks." },
];

export function SystemComparison() {
  return (
    <WarmGradientSection>
      <SectionHeading
        badge="System comparison"
        icon={<LuRocket className="h-3.5 w-3.5 text-primary" />}
        title="Your hotel should not run on disconnected tools"
      />

      <Reveal className="mt-10 rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(80,10,10,0.2)] md:p-4">
        <div className="grid grid-cols-1 items-center gap-4 rounded-xl bg-linear-to-br from-[#FFF3E8] to-[#FFE8D6] p-4 md:grid-cols-[1fr_auto_1fr] md:p-6">
          {/* Before */}
          <div className="h-full rounded-xl bg-white p-5 shadow-[0_4px_16px_rgba(30,13,1,0.05)]">
            <h3 className="flex items-center gap-2 font-semibold text-[#1E0D01]">
              <span className="flex size-7 items-center justify-center rounded-md bg-[#F5F5F5] text-[#1E0D01]/60">
                <LuUnplug className="h-4 w-4" />
              </span>
              Disconnected operation
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SCATTERED.map((tool) => (
                <li key={tool} className="flex items-center gap-1.5 rounded-md border border-black/10 bg-[#FAFAFA] px-2.5 py-1 text-xs text-[#1E0D01]/70">
                  <span className="size-1.5 rounded-full bg-primary/70" />
                  {tool}
                </li>
              ))}
            </ul>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-primary uppercase">
              <LuTriangleAlert className="h-3 w-3" /> {SCATTERED.length} places to keep in sync
            </p>
            <p className="mt-5 border-t border-black/10 pt-4 text-sm leading-relaxed text-[#1E0D01]/70">
              Staff repeatedly copy the same data between systems that never talk to each other — errors, delays,
              overbookings, and friction at reception.
            </p>
          </div>

          <LuArrowRight aria-hidden className="mx-auto h-5 w-5 rotate-90 text-primary md:rotate-0" />

          {/* After */}
          <div className="h-full rounded-xl bg-white p-5 shadow-[0_4px_16px_rgba(30,13,1,0.05)]">
            <h3 className="flex items-center gap-2 font-semibold text-[#1E0D01]">
              <span className="flex size-7 items-center justify-center rounded-md bg-primary text-white">
                <LuHotel className="h-4 w-4" />
              </span>
              One connected property environment
            </h3>
            <ul className="mt-4 space-y-2.5">
              {CONNECTED.map((item, i) => (
                <li key={item.title} className="flex items-start gap-3 rounded-lg bg-orange-50/70 p-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded bg-primary text-white">
                    <LuCheck className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-[#1E0D01]">
                      {item.title}
                      <span className="font-mono text-[9px] text-primary/60">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <span className="mt-0.5 block text-xs text-[#1E0D01]/60">{item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </WarmGradientSection>
  );
}
