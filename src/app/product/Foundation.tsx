import Link from "next/link";
import { LuArrowRight, LuCheck, LuCode, LuUsers } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { FOUNDATION_LINKS, OPEN_API, SECURITY, SECURITY_ICON as ShieldIcon } from "./data";

function LearnMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-200 hover:text-[#E0560B]"
    >
      Learn more
      <LuArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

export function Foundation() {
  return (
    <section id="foundation" className="w-full scroll-mt-24">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Platform foundation"
          icon={<LuUsers className="h-3.5 w-3.5 text-primary" />}
          title="Open, secure and built to connect"
          description="Every Bookingjini product runs on the same foundation, so your data stays in one place and works with the tools you already use."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-[4fr_3fr]">
          {/* Open API */}
          <Reveal className="relative flex flex-col overflow-hidden rounded-3xl bg-[#1E0D01] p-7 text-white md:p-8">
            <div aria-hidden className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-primary/30 blur-3xl" />
            <span className="relative flex size-11 items-center justify-center rounded-xl bg-linear-to-b from-[#FF7A1A] to-[#E0560B]">
              <LuCode className="h-5 w-5" />
            </span>
            <h3 className="relative mt-5 font-heading text-3xl font-medium md:text-4xl">{OPEN_API.title}</h3>
            <p className="relative mt-3 max-w-sm text-base leading-relaxed text-white/80">{OPEN_API.description}</p>
            <div className="relative">
              <LearnMore href={OPEN_API.href} />
            </div>

            <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 lg:mt-auto">
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Connected to</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {OPEN_API.connections.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/20"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Security & Compliance */}
          <Reveal index={1} className="flex flex-col rounded-3xl bg-white p-7 shadow-[0_4px_24px_rgba(30,13,1,0.05)] md:p-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#FFF1E6] text-primary">
              <ShieldIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-3xl font-medium text-[#1E0D01]">{SECURITY.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-[#1E0D01]/70">{SECURITY.description}</p>
            <div>
              <LearnMore href={SECURITY.href} />
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-2">
              {SECURITY.badges.map((badge) => (
                <li key={badge.name} className="flex items-center gap-3 rounded-xl bg-[#F7F3EF] p-3.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    <LuCheck aria-hidden className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#1E0D01]">{badge.name}</span>
                    <span className="block text-xs text-[#1E0D01]/60">{badge.caption}</span>
                  </span>
                </li>
              ))}
            </ul>
            {SECURITY.note && <p className="mt-4 text-xs text-primary">{SECURITY.note}</p>}
          </Reveal>
        </div>

        <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          {FOUNDATION_LINKS.map(({ title, description, icon: Icon, href }, i) => (
            <Reveal as="li" key={title} index={i}>
              <Link
                href={href}
                className="group flex h-full items-center gap-4 rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(30,13,1,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(249,117,24,0.12)]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF1E6] text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-heading text-xl font-medium text-[#1E0D01] md:text-2xl">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#1E0D01]/70">{description}</span>
                </span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#FF7A1A] to-[#E0560B] text-white">
                  <LuArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
