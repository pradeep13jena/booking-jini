import Image from "next/image";
import type { IconType } from "react-icons";
import { LuCircleCheck, LuConciergeBell, LuHeadset, LuPlus, LuUsers } from "react-icons/lu";

import { Reveal } from "./Reveal";

// TEMP: placeholder support-team faces (host allowed in next.config.ts) — swap for real photos
const AVATARS = [5, 11, 32, 15, 33, 8, 26, 14, 44].map((id) => `https://i.pravatar.cc/80?img=${id}`);

const DEFAULT_DESCRIPTION =
  "When your revenue system needs attention, you should be able to talk to someone. Bookingjini gives hotel teams access to real people who understand hospitality operations.";

const POINTS = [
  "24/7 technical call and email support",
  "A single support team for the platform ecosystem.",
  "People who understand hotel operations.",
];

const CHANNELS: { icon: IconType; title: string; subtitle: string; iconClass: string; plusClass: string }[] = [
  { icon: LuHeadset, title: "24/7 Call & Email Support", subtitle: "Always available", iconClass: "bg-violet-50 text-violet-600", plusClass: "bg-violet-600" },
  { icon: LuUsers, title: "Platform Support Team", subtitle: "One team across the ecosystem", iconClass: "bg-blue-50 text-blue-600", plusClass: "bg-blue-600" },
  { icon: LuConciergeBell, title: "Hotel Operations Experts", subtitle: "Support from people who understand your business", iconClass: "bg-emerald-50 text-emerald-600", plusClass: "bg-emerald-600" },
];

// `description` lets each page tune the intro line; the rest of the block is fixed
export function HumanSupport({ description = DEFAULT_DESCRIPTION }: { description?: string }) {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
            <LuUsers className="h-3.5 w-3.5" />
            24/7 human support
          </span>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#1E0D01] md:text-4xl">
            Technology backed by real people
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1E0D01]/60">{description}</p>
          <ul className="mt-8 flex flex-col gap-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-[#1E0D01]">
                <LuCircleCheck className="h-4 w-4 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal index={1} className="rounded-2xl bg-white/50 px-4 py-10 md:px-8 md:py-16">
          <ul className="mx-auto flex max-w-sm flex-col gap-3">
            {CHANNELS.map(({ icon: Icon, title, subtitle, iconClass, plusClass }, i) => (
              <li key={title} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-[0_4px_16px_rgba(30,13,1,0.06)]">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${iconClass}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#1E0D01]">{title}</p>
                  <p className="text-xs text-[#1E0D01]/60">{subtitle}</p>
                </div>
                <span className={`flex size-5 shrink-0 items-center justify-center rounded-full text-white ${plusClass}`}>
                  <LuPlus className="h-3 w-3" />
                </span>
                <div className="hidden shrink-0 -space-x-2 sm:flex">
                  {AVATARS.slice(i * 3, i * 3 + 3).map((src) => (
                    <Image key={src} src={src} alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
