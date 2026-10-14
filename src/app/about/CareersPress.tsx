import Link from "next/link";
import { LuArrowDown, LuArrowRight } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";

// TODO: point at the real press kit file and add the press email
const PRESS_KIT_URL = "#";

export function CareersPress() {
  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 gap-4 px-6 py-16 md:grid-cols-[1.6fr_1fr] md:py-20">
        <Reveal className="rounded-3xl border border-black/5 bg-white p-8 md:p-10">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">Careers</span>
            <span className="font-mono text-xs text-[#1E0D01]/40">01</span>
          </div>
          <h2 className="mt-8 font-heading text-5xl leading-[1.05] font-semibold tracking-tight text-[#1E0D01] md:text-6xl">
            Help hotels
            <br />
            across <span className="text-primary">India</span> grow.
          </h2>
          <hr className="my-8 border-black/10" />
          <p className="max-w-sm text-base leading-relaxed text-[#1E0D01]/60">
            We hire people who care about hoteliers and like solving hard problems in a growing company.
          </p>
          <Link
            href="/careers"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E0D01] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary"
          >
            See open roles
            <LuArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal index={1} className="flex flex-col rounded-3xl bg-[#FDE6D6] p-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">Press &amp; media</span>
            <span className="font-mono text-xs text-[#1E0D01]/40">02</span>
          </div>
          <h3 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-[#1E0D01]">
            Writing about Bookingjini?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#1E0D01]/60">
            Logos, founder photos and company facts are in our press kit.
          </p>

          <div className="mt-auto pt-10">
            <a
              href={PRESS_KIT_URL}
              download
              className="group flex items-center justify-between rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#1E0D01] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(249,117,24,0.18)]"
            >
              Download press kit
              <LuArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <p className="mt-3 text-xs text-[#1E0D01]/60">Media contact</p>
            <p className="font-heading text-lg font-semibold text-primary">[press email]</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
