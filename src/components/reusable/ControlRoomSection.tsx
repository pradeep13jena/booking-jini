import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { LuActivity, LuBuilding2, LuChevronRight, LuCloud, LuDatabase, LuLink, LuPlane } from "react-icons/lu";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WarmGradientSection } from "./WarmGradientSection";

// Systems the hub fans out to; `y` is the row centre in % of the diagram
const OUTPUTS: { icon: IconType; tone: string; dot: string; y: number }[] = [
  { icon: LuLink, tone: "bg-blue-50 text-blue-500", dot: "#60A5FA", y: 16 },
  { icon: LuPlane, tone: "bg-emerald-50 text-emerald-500", dot: "#34D399", y: 39 },
  { icon: LuCloud, tone: "bg-violet-50 text-violet-500", dot: "#A78BFA", y: 62 },
  { icon: LuDatabase, tone: "bg-orange-50 text-orange-500", dot: "#FB923C", y: 85 },
];

// Property → central hub → connected systems
function HubDiagram() {
  return (
    <div aria-hidden className="relative aspect-[2.2] w-full overflow-hidden rounded-lg bg-[#F5F7FB] md:aspect-[2.6]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
        <line x1="22" y1="50" x2="38" y2="50" stroke="#93A5D9" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        {OUTPUTS.map((o) => (
          <path
            key={o.y}
            d={`M62 50 C70 50, 66 ${o.y}, 74 ${o.y}`}
            stroke="#B8C2E0"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="absolute top-1/2 left-[15%] flex size-[13%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white shadow-[0_6px_18px_rgba(30,42,120,0.08)]">
        <LuBuilding2 className="h-5 w-5 text-blue-500 md:h-7 md:w-7" />
      </div>

      {/* Hub with soft halo */}
      <div className="absolute top-1/2 left-1/2 aspect-square w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9EEF8]" />
      <div className="absolute top-1/2 left-1/2 flex h-[30%] w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-linear-to-b from-[#1F2A44] to-[#0F172A] shadow-[0_10px_30px_rgba(15,23,42,0.35)]">
        <span className="flex size-7 items-center justify-center rounded-md bg-white text-[#0F172A]">
          <LuActivity className="h-4 w-4" />
        </span>
      </div>

      {OUTPUTS.map(({ icon: Icon, tone, dot, y }) => (
        <div
          key={y}
          className="absolute left-[74%] flex w-[20%] -translate-y-1/2 items-center gap-2 rounded-lg bg-white p-1.5 shadow-[0_4px_12px_rgba(30,42,120,0.06)] md:p-2"
          style={{ top: `${y}%` }}
        >
          <span className="absolute top-1/2 -left-1 size-1.5 -translate-y-1/2 rounded-full" style={{ background: dot }} />
          <span className={`flex size-5 shrink-0 items-center justify-center rounded md:size-6 ${tone}`}>
            <Icon className="h-3 w-3" />
          </span>
          <span className="h-1.5 flex-1 rounded-full bg-[#E5E9F2]" />
        </div>
      ))}
    </div>
  );
}

export type ControlRoomFeature = { icon: IconType; title: string; description: string };

// Full-bleed orange → red section with the hub diagram.
// Optional extras below the diagram: feature tiles, a one-line note, and a white pill CTA.
export function ControlRoomSection({
  badge,
  badgeIcon,
  title,
  description,
  features,
  note,
  cta,
}: {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  description: string;
  features?: ControlRoomFeature[];
  note?: string;
  cta?: { text: string; href: string };
}) {
  return (
    <WarmGradientSection>
        <SectionHeading badge={badge} icon={badgeIcon} title={title} description={description} />

        <Reveal className="mt-10 rounded-xl bg-white p-3 shadow-[0_20px_50px_rgba(80,10,10,0.2)] md:p-4">
          <HubDiagram />
        </Reveal>

        {features && (
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, i) => (
              <Reveal
                as="li"
                key={title}
                index={i}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <Icon className="h-6 w-6 text-[#FFB347]" />
                <h3 className="mt-6 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">{description}</p>
              </Reveal>
            ))}
          </ul>
        )}

        {note && (
          <Reveal className="mt-10 text-center text-sm font-semibold text-white">
            <p>{note}</p>
          </Reveal>
        )}

        {cta && (
          <Reveal className="mt-10 flex justify-center">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#1E0D01] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-colors duration-300 hover:text-primary"
            >
              {cta.text}
              <LuChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        )}
    </WarmGradientSection>
  );
}
