import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuBot,
  LuBoxes,
  LuCog,
  LuFlame,
  LuLayers,
  LuLayoutPanelLeft,
  LuRocket,
  LuUsers,
  LuZap,
} from "react-icons/lu";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PRODUCTS: {
  icon: IconType;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: LuCog,
    title: "Booking Engine",
    description: "More direct bookings, zero commission.",
    href: "/products/booking-engine",
  },
  {
    icon: LuLayers,
    title: "Channel Manager",
    description: "Sell on 300+ channels without overbooking.",
    href: "/products/channel-manager",
  },
  {
    icon: LuLayoutPanelLeft,
    title: "Bookingjini Host PMS",
    description: "Manage hotel operations from one screen.",
    href: "/products/pms",
  },
  {
    icon: LuUsers,
    title: "CRM",
    description: "Build stronger guest relationships.",
    href: "/products/crm",
  },
  {
    icon: LuRocket,
    title: "CRS",
    description: "Manage multiple properties centrally.",
    href: "/products/crs",
  },
  {
    icon: LuFlame,
    title: "Rate Shopper",
    description: "Make smarter pricing decisions.",
    href: "/products/rate-shopper",
  },
  {
    icon: LuBot,
    title: "Jini Assist",
    description: "Turn website visitors into bookers.",
    href: "/products/jini-assist",
  },
  {
    icon: LuZap,
    title: "Website Builder",
    description: "Build a hotel website designed to convert.",
    href: "/products/website-builder",
  },
];

export function Platform() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="One connected platform"
          icon={<LuBoxes className="h-3.5 w-3.5 text-primary" />}
          title="Everything your hotel needs. Connected."
          description="One platform. Eight connected capabilities."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map(({ icon: Icon, title, description, href }, i) => (
            <Reveal key={title} index={i % 4}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_24px_rgba(30,13,1,0.06)]"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-black/5 bg-white text-[#1E0D01] transition-colors duration-300 group-hover:text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-6 font-semibold text-[#1E0D01]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1E0D01]/60">
                  {description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
