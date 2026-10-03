import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { LuMonitor, LuStar } from "react-icons/lu";

import { AnimatedButton } from "@/components/AnimatedButton";
import { StickyStack } from "../home/StickyStack";
import { ChannelBalanceMockup, GrowthCaseMockup, WebsiteDashboardMockup } from "./StrategyMockups";

const CASE_STATS = [
  { value: "10-15%", label: "Increase in direct bookings" },
  { value: "6-8%", label: "Reduction in manual work" },
  { value: "Zero commission", label: "On direct Booking Engine reservations" },
];

// Shared shell: text on the left, visual in a tinted panel on the right
function StrategyCard({
  badge,
  title,
  children,
  visual,
  panelClassName = "bg-[#F5F5F5]",
  footer,
}: {
  badge?: { icon: IconType; label: string };
  title: string;
  children: ReactNode;
  visual: ReactNode;
  panelClassName?: string;
  footer?: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-2 shadow-[0_-8px_30px_rgba(30,13,1,0.05)]">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div className="p-5 md:p-8">
          {badge && (
            <span className="mb-3 flex items-center gap-1.5 text-xs font-medium text-primary">
              <badge.icon className="h-3.5 w-3.5" />
              {badge.label}
            </span>
          )}
          <h2 className="font-heading text-2xl leading-tight font-medium tracking-tight text-[#1E0D01] md:text-3xl">
            {title}
          </h2>
          <div className="mt-3 text-sm leading-relaxed text-[#1E0D01]/60">{children}</div>
        </div>
        <div aria-hidden className={`flex h-full items-center rounded-xl p-4 md:p-6 ${panelClassName}`}>
          <div className="w-full">{visual}</div>
        </div>
      </div>
      {footer}
    </article>
  );
}

export function DirectStrategy() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        {/* Cards pin and stack while scrolling, same as the home RoleStack */}
        <StickyStack>
        <StrategyCard
          badge={{ icon: LuMonitor, label: "Your direct channel" }}
          title="Your website should do more than look good"
          visual={<WebsiteDashboardMockup />}
        >
          Travellers often research a hotel before making a reservation. Your website should give them a clear path
          from interest to booking. With the right direct-booking experience, your website can become one of your
          hotel&apos;s strongest sales channels.
        </StrategyCard>

        <StrategyCard
          title="OTAs can be part of the strategy. They should not own it."
          visual={<ChannelBalanceMockup />}
          panelClassName="bg-linear-to-br from-[#F2F7FF] via-[#F4FBF8] to-[#F7F3FF]"
        >
          The goal is not to stop using OTAs. They remain useful for reach and discovery. The opportunity is to create
          a healthier balance between third-party distribution and your own direct channel.
        </StrategyCard>

        <StrategyCard
          badge={{ icon: LuStar, label: "Customer success" }}
          title="From ₹40 lakh to ₹2.4 crore in website-driven bookings"
          visual={<GrowthCaseMockup />}
          panelClassName="bg-[#F5F5F5] bg-[radial-gradient(rgba(30,13,1,0.08)_1px,transparent_1px)] bg-size-[10px_10px]"
          footer={
            <dl className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {CASE_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-1 rounded-lg bg-[#F5F5F5] p-4">
                  <dt className="text-xs text-[#1E0D01]/60">{stat.label}</dt>
                  <dd className="text-xl font-semibold text-[#1E0D01] md:text-2xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          }
        >
          <p>
            One Bookingjini customer grew annual website-driven bookings from ₹40 lakh to ₹2.4 crore using our
            integrated booking engines and direct marketing trigger integrations.
          </p>
          <AnimatedButton
            text="Read customer stories"
            href="/customer"
            colorDirection="left"
            className="mt-6 font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)]"
          />
        </StrategyCard>
        </StickyStack>
      </div>
    </section>
  );
}
