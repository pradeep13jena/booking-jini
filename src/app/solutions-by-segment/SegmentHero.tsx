import type { IconType } from "react-icons";
import { LuBuilding2, LuExpand, LuHouse, LuMapPin, LuShoppingBag } from "react-icons/lu";

import { ArrowPillLink, OutlinePillLink } from "@/components/PillLinks";
import { Reveal } from "../home/Reveal";

// Positions are % of the diagram box; connector paths below use the same coordinates
type Node = { title: string; note: string; icon: IconType; tone: string; x: number; y: number };

const TOP: Node[] = [
  { title: "Boutique", note: "Unique stays, curated for you.", icon: LuShoppingBag, tone: "bg-blue-50 text-blue-500", x: 19, y: 18 },
  { title: "Mid-size", note: "Comfort, space and flexibility.", icon: LuExpand, tone: "bg-violet-50 text-violet-500", x: 50, y: 18 },
  { title: "Hotel Group", note: "Scale your business with ease.", icon: LuBuilding2, tone: "bg-emerald-50 text-emerald-600", x: 81, y: 18 },
];
const BOTTOM: Node[] = [
  { title: "Homestay Network", note: "Local stays, bigger experiences.", icon: LuHouse, tone: "bg-orange-50 text-primary", x: 35, y: 82 },
  { title: "Tourism Boards", note: "Partnering for sustainable tourism.", icon: LuMapPin, tone: "bg-cyan-50 text-cyan-600", x: 65, y: 82 },
];
const HUB = { x: 62, y: 50 };

function SegmentNode({ node }: { node: Node }) {
  const Icon = node.icon;
  return (
    <div
      className="absolute flex w-[29%] -translate-x-1/2 -translate-y-1/2 items-start gap-1.5 rounded-lg bg-white p-2 shadow-[0_4px_14px_rgba(30,13,1,0.06)] md:gap-2 md:p-2.5"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <span className={`flex size-6 shrink-0 items-center justify-center rounded-md md:size-7 ${node.tone}`}>
        <Icon className="h-3 w-3 md:h-3.5 md:w-3.5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[9px] font-semibold text-[#1E1B4B] md:text-[11px]">{node.title}</span>
        <span className="mt-0.5 block text-[7px] leading-snug text-[#1E1B4B]/50 md:text-[8px]">{node.note}</span>
      </span>
    </div>
  );
}

function SegmentDiagram() {
  // Elbow connector from a node's edge to the hub's edge
  const path = (n: Node, fromBottom: boolean) => {
    const startY = fromBottom ? n.y + 8 : n.y - 8;
    const endY = fromBottom ? HUB.y - 6 : HUB.y + 6;
    const midY = (startY + endY) / 2;
    const hubX = HUB.x + (n.x - HUB.x) * 0.35;
    return `M${n.x} ${startY} C${n.x} ${midY}, ${hubX} ${midY}, ${hubX} ${endY}`;
  };

  return (
    <div aria-hidden className="relative aspect-4/3 w-full rounded-2xl bg-linear-to-b from-white via-[#FFF6EE] to-[#FFDDBE] md:aspect-[1.3]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
        {TOP.map((n) => (
          <path key={n.title} d={path(n, true)} stroke="#8B9CF6" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        ))}
        {BOTTOM.map((n) => (
          <path key={n.title} d={path(n, false)} stroke="#8B9CF6" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>

      <div
        className="absolute w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-linear-to-r from-[#1E2A78] via-[#2B2F8F] to-[#3B2C9B] px-3 py-3 text-center text-[10px] font-semibold text-white shadow-[0_10px_30px_rgba(43,47,143,0.35)] ring-1 ring-white/20 md:text-xs"
        style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
      >
        Bookingjini Central Platform
      </div>

      {[...TOP, ...BOTTOM].map((node) => (
        <SegmentNode key={node.title} node={node} />
      ))}
    </div>
  );
}

export function SegmentHero() {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        {/* Text slides in from the right, one line after another */}
        <div>
          <Reveal from="right">
            <h1 className="font-heading text-4xl leading-[1.15] font-medium tracking-tight text-[#1E0D01] md:text-5xl">
              One platform. Built around how you operate.
            </h1>
          </Reveal>
          <Reveal from="right" index={1}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">
              Every hotel business works differently. Bookingjini gives independent hotels, growing properties, hotel
              groups, homestays and tourism boards one connected platform to sell, manage and grow.
            </p>
          </Reveal>
          <Reveal from="right" index={2} className="mt-8 flex flex-wrap items-center gap-3">
            <ArrowPillLink href="/contact" text="Book a demo" />
            <OutlinePillLink href="/products" text="Explore the platform" />
          </Reveal>
        </div>

        <Reveal index={1}>
          <SegmentDiagram />
        </Reveal>
      </div>
    </section>
  );
}
