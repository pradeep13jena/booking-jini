"use client";

import { useReducedMotion } from "framer-motion";
import { LuHouse, LuUsers } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { HUB_CENTER, HUB_NODES, HUB_SIZE, type HubNode } from "./data";

// Design-space (1200 × 700) → percentage of the diagram box
const px = (x: number) => `${(x / HUB_SIZE.w) * 100}%`;
const py = (y: number) => `${(y / HUB_SIZE.h) * 100}%`;

const LINKS = HUB_NODES.flatMap((node) => node.links);
const DOT_DURATION = 2.6;

function NodeCard({ node }: { node: HubNode }) {
  const Icon = node.icon;
  return (
    <div className="flex h-full items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_4px_24px_rgba(30,13,1,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(249,117,24,0.12)]">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF1E6] text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-heading text-lg leading-tight font-medium text-[#1E0D01] xl:text-xl">{node.name}</h3>
        <p className="mt-1 text-sm text-[#1E0D01]/70">{node.detail}</p>
      </div>
    </div>
  );
}

function CenterCard() {
  return (
    <div className="relative h-full rounded-[2rem] bg-white p-2 shadow-[0_30px_80px_rgba(249,117,24,0.18)]">
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-[#1E0D01] px-6 py-8 text-center text-white">
        <span className="flex size-12 items-center justify-center rounded-xl bg-linear-to-b from-[#FF7A1A] to-[#E0560B]">
          <LuHouse className="h-5 w-5" />
        </span>
        <p className="mt-4 font-heading text-3xl font-medium xl:text-4xl">{HUB_CENTER.title}</p>
        <p className="mt-2 text-sm text-white/80 xl:text-base">{HUB_CENTER.caption}</p>
      </div>
    </div>
  );
}

export function HubDiagram() {
  const reduceMotion = useReducedMotion();
  const { box } = HUB_CENTER;

  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Government partners"
          icon={<LuUsers className="h-3.5 w-3.5 text-primary" />}
          title="Trusted by state tourism boards and government undertakings"
          description="Tourism departments choose partners carefully. These bodies run bookings for their state properties on Bookingjini."
        />

        {/* Desktop: hub-and-spoke diagram that scales as one piece */}
        <Reveal className="relative mt-12 hidden aspect-[12/7] w-full lg:block">
          {/* Warm glow behind the hub */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,117,24,0.12),transparent_30%)]"
          />

          <svg aria-hidden viewBox={`0 0 ${HUB_SIZE.w} ${HUB_SIZE.h}`} className="absolute inset-0 h-full w-full">
            {LINKS.map(({ label, from, to }) => {
              const d = `M ${from[0]} ${from[1]} L ${to[0]} ${to[1]}`;
              return (
                <g key={label}>
                  <path d={d} stroke="#F97518" strokeOpacity={0.45} strokeWidth={1.5} strokeDasharray="4 6" fill="none" />
                  {/* One dot per line: travels start → end, then restarts from the start.
                      With reduced motion it simply rests at the start point. */}
                  {reduceMotion ? (
                    <circle cx={from[0]} cy={from[1]} r={4} fill="#F97518" />
                  ) : (
                    <circle r={4} fill="#F97518">
                      <animateMotion dur={`${DOT_DURATION}s`} repeatCount="indefinite" path={d} />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Cards are placed from the design-space coordinates in data.ts */}
          {HUB_NODES.map((node, i) => (
            <div key={node.name} className="absolute" style={{ left: px(node.box.x), top: py(node.box.y), width: px(node.box.w) }}>
              <Reveal index={i % 3}>
                <NodeCard node={node} />
              </Reveal>
            </div>
          ))}

          <div className="absolute" style={{ left: px(box.x), top: py(box.y), width: px(box.w), height: py(box.h) }}>
            <CenterCard />
          </div>

          {/* Label pills sit on each line's midpoint, above the cards */}
          {LINKS.map(({ label, from, to }) => (
            <span
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap text-[#E0560B] shadow-[0_2px_10px_rgba(30,13,1,0.04)] xl:text-sm"
              style={{ left: px((from[0] + to[0]) / 2), top: py((from[1] + to[1]) / 2) }}
            >
              {label}
            </span>
          ))}
        </Reveal>

        {/* Mobile / tablet: hub first, then the products as a simple grid */}
        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          <Reveal className="mx-auto w-full max-w-sm">
            <CenterCard />
          </Reveal>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {HUB_NODES.map((node, i) => (
              <Reveal as="li" key={node.name} index={i % 2}>
                <NodeCard node={node} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
