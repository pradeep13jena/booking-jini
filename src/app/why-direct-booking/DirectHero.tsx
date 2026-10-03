import type { IconType } from "react-icons";
import {
  LuBuilding,
  LuCalendarCheck,
  LuCircleCheck,
  LuGitCompareArrows,
  LuGlobe,
  LuMonitor,
  LuUser,
  LuUserCheck,
} from "react-icons/lu";

import { ArrowPillLink, OutlinePillLink } from "@/components/PillLinks";
import { Reveal } from "../home/Reveal";

type Node = { icon: IconType; label?: string; caption?: string; ring: string };

// One row of the flow: icon → arrow → icon → arrow → icon
function FlowPath({ nodes, arrow }: { nodes: Node[]; arrow: string }) {
  return (
    <div className="flex items-start justify-between">
      {nodes.map((node, i) => (
        <div key={i} className="contents">
          {i > 0 && <span className={`mt-5 h-0 flex-1 border-t-2 mx-2 ${arrow}`} />}
          <div className="flex w-20 flex-col items-center text-center">
            <span className={`flex size-10 items-center justify-center rounded-full border-2 bg-white ${node.ring}`}>
              <node.icon className="h-4 w-4" />
            </span>
            {node.label && <span className="mt-2 text-[10px] font-semibold text-[#1E0D01]">{node.label}</span>}
            {node.caption && (
              <span className="mt-0.5 font-mono text-[8px] tracking-wider text-[#1E0D01]/40 uppercase">{node.caption}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function CommissionFlowMockup() {
  return (
    <div aria-hidden className="rounded-xl bg-white p-4 shadow-[0_10px_30px_rgba(30,13,1,0.06)] md:p-5">
      <div className="flex items-start justify-between gap-3 border-b border-black/5 pb-3">
        <div>
          <p className="font-mono text-[9px] tracking-widest text-primary uppercase">— Revenue architecture</p>
          <p className="mt-1 text-sm font-semibold text-[#1E0D01]">Commission flow models</p>
        </div>
        <span className="flex items-center gap-1 rounded-md border border-black/10 px-2 py-1 text-[9px] font-medium text-[#1E0D01]">
          <LuGitCompareArrows className="h-3 w-3" /> Compare path fees
        </span>
      </div>

      {/* Direct path */}
      <div className="mt-3 rounded-lg border-2 border-emerald-400/70 bg-emerald-50/40 p-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-[#1E0D01]/70 uppercase">
            <span className="size-1.5 rounded-full bg-emerald-500" /> Direct booking path
          </span>
          <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-medium text-emerald-700">
            <LuCircleCheck className="h-2.5 w-2.5" /> Active channel
          </span>
        </div>
        <div className="mt-3">
          <FlowPath
            arrow="border-dashed border-emerald-500"
            nodes={[
              { icon: LuMonitor, label: "Hotel website", caption: "Discovery", ring: "border-black/10 text-[#1E0D01]/60" },
              { icon: LuCalendarCheck, label: "Bookingjini", caption: "Booking engine", ring: "border-primary text-primary" },
              { icon: LuUserCheck, label: "Loyal guest", caption: "Repeat stay", ring: "border-emerald-500 text-emerald-600" },
            ]}
          />
        </div>
        <div className="mt-3 flex items-center justify-between rounded-md bg-emerald-100/70 px-3 py-2">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-800">
            <LuCircleCheck className="h-3 w-3" /> Zero OTA commission
          </span>
          <span className="rounded bg-white px-1.5 py-0.5 font-mono text-[9px] text-emerald-700">₹12,000 net</span>
        </div>
      </div>

      {/* OTA path */}
      <div className="mt-3 rounded-lg border border-black/10 bg-[#FAFAFA] p-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-[#1E0D01]/50 uppercase">
            <span className="size-1.5 rounded-full bg-black/20" /> OTA booking path
          </span>
          <span className="rounded-full bg-black/5 px-2 py-0.5 text-[8px] font-medium text-[#1E0D01]/60">Third party</span>
        </div>
        <div className="mt-3">
          <FlowPath
            arrow="border-red-400"
            nodes={[
              { icon: LuUser, ring: "border-black/10 text-[#1E0D01]/50" },
              { icon: LuGlobe, ring: "border-red-400 text-red-500" },
              { icon: LuBuilding, ring: "border-black/10 text-[#1E0D01]/50" },
            ]}
          />
        </div>
        <div className="mt-3 flex items-center justify-between rounded-md bg-red-50 px-3 py-2">
          <span className="text-[10px] font-semibold text-red-700">15–25% OTA commission</span>
          <span className="rounded bg-white px-1.5 py-0.5 font-mono text-[9px] text-red-600">₹9,600 net</span>
        </div>
      </div>
    </div>
  );
}

export function DirectHero() {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        {/* Text slides in from the right, one line after another */}
        <div>
          <Reveal from="right">
            <h1 className="font-heading text-4xl leading-[1.15] font-medium tracking-tight text-[#1E0D01] md:text-5xl">
              Your most valuable booking channel should be your own
            </h1>
          </Reveal>
          <Reveal from="right" index={1}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">
              OTAs help travellers find hotels, but high commissions of 15–25% can cut into profits. A direct channel
              allows hotels to retain more revenue and strengthen guest relationships.
            </p>
          </Reveal>
          <Reveal from="right" index={2} className="mt-8 flex flex-wrap items-center gap-3">
            <ArrowPillLink href="/contact" text="Get started" />
            <OutlinePillLink href="/contact" text="Contact us" />
          </Reveal>
        </div>

        <Reveal index={1} className="rounded-2xl bg-linear-to-b from-white via-[#FFF6EE] to-[#FFDDBE] p-4 md:p-6">
          <CommissionFlowMockup />
        </Reveal>
      </div>
    </section>
  );
}
