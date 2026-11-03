import type { ReactNode } from "react";
import { LuEye, LuHeart, LuTarget } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

// Each vision line has one highlighted phrase
const VISION: ReactNode[] = [
  <>To create a <strong>world-class experience for travellers</strong>, so what they dream of becomes reality.</>,
  <>To be the <strong>most preferred partner for hoteliers</strong> to transform their business.</>,
  <>To create the <strong>largest hotel community across the globe</strong> by 2027.</>,
  <>To emerge as the <strong>most preferred Growth Engine</strong> for the hotel industry.</>,
];

const VALUES: { title: string; description: string }[] = [
  { title: "We can do", description: "Every problem a hotel brings us is one we set out to solve." },
  { title: "We celebrate success", description: "Our hotels' wins are our wins, and we celebrate them together." },
  { title: "We believe in speed", description: "Hotels can't wait, so we move fast: in support, setup and every release." },
  { title: "We do things differently", description: "We question how hotel tech has always worked, and build something better." },
];

const pad = (n: number) => String(n).padStart(2, "0");

// Small icon tile + uppercase label used at the top of each card
function CardLabel({ icon, label, tone }: { icon: ReactNode; label: string; tone: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={
          tone === "light"
            ? "flex size-8 items-center justify-center rounded-lg bg-white/20 text-white"
            : "flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary"
        }
      >
        {icon}
      </span>
      <span className={`text-xs font-semibold tracking-widest uppercase ${tone === "light" ? "text-white" : "text-primary"}`}>
        {label}
      </span>
    </div>
  );
}

export function MissionVisionValues() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="What drives us"
          title="Our mission, vision and values"
          description="The ideas on our office wall, and behind every product we build for hotels."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Mission */}
          <Reveal className="relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-br from-[#FF8A2A] to-[#E0560B] p-6 text-white md:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.3),transparent_45%)]"
            />
            <div className="relative">
              <CardLabel icon={<LuTarget className="h-4 w-4" />} label="Mission" tone="light" />
            </div>
            <h3 className="relative mt-8 font-heading text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl">
              We make travel faster, cheaper and better with our innovative technology.
            </h3>
            <div className="relative mt-auto pt-10">
              <hr className="mb-6 border-white/30" />
              <p className="text-sm leading-relaxed text-white/90">
                We act as a catalyst to match the traveller&apos;s story with the story of the room.
              </p>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal
            index={1}
            className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#F7F5F3] p-6 md:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(249,117,24,0.12),transparent_45%)]"
            />
            <div className="relative">
              <CardLabel icon={<LuEye className="h-4 w-4" />} label="Vision" tone="dark" />
              <ol className="mt-6">
                {VISION.map((line, i) => (
                  <li
                    key={i}
                    className="flex gap-6 border-b border-black/10 py-4 text-sm leading-relaxed text-[#1E0D01]/60 last:border-b-0 [&_strong]:font-semibold [&_strong]:text-[#1E0D01]"
                  >
                    <span className="shrink-0 font-mono text-xs font-semibold text-primary">{pad(i + 1)}</span>
                    <p>{line}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <Reveal className="mt-4 rounded-3xl border border-black/5 bg-white p-6 md:p-8">
          <CardLabel icon={<LuHeart className="h-4 w-4" />} label="Values" tone="dark" />
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ title, description }, i) => (
              <li
                key={title}
                className="rounded-2xl bg-[#F7F7F7] p-5 transition-colors duration-300 hover:bg-primary/5"
              >
                <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
                  {pad(i + 1)}
                </span>
                <h4 className="mt-4 font-heading text-lg font-semibold text-[#1E0D01]">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#1E0D01]/60">{description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
