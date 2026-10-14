import { LuLandmark } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { Pill } from "./Headings";

const BOARDS = [
  "WBLDC",
  "Haryana Tourism",
  "Chandigarh Tourism",
  "TTDC",
  "Andaman Tourism",
  "Kerala Tourism",
  "Centaur",
  "Meghalaya Tourism",
  "Nagaland Tourism",
  "HPECOSO",
];

export function GovernmentTrust() {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <Reveal>
          <Pill icon={LuLandmark}>Trusted by government</Pill>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-medium tracking-tight text-[#1E0D01] md:text-4xl">
            10 state tourism boards run their hotel bookings on Bookingjini.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1E0D01]/60">
            Government tourism bodies choose partners carefully. They trust us to take bookings for state-run properties,
            process payments and keep inventory accurate for millions of travellers.
          </p>
        </Reveal>

        <Reveal index={1} className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10">
          {/* Oversized count watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-4 -bottom-16 font-heading text-[14rem] leading-none font-medium text-primary/10 select-none md:text-[18rem]"
          >
            10
          </span>
          <ul className="relative flex flex-wrap gap-x-3 gap-y-2 font-heading text-xl font-medium text-[#1E0D01] md:text-2xl">
            {BOARDS.map((board, i) => (
              <li key={board} className="flex items-center gap-3">
                <span className="cursor-default transition-colors duration-200 hover:text-primary">{board}</span>
                {i < BOARDS.length - 1 && (
                  <span aria-hidden className="text-primary">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
