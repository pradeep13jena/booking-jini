import type { IconType } from "react-icons";
import {
  FaAward,
  FaChartLine,
  FaHeadset,
  FaLandmark,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

// Bracketed copy still needs confirmed facts before launch
const TRUST_POINTS: { icon: IconType; title: string; description: string }[] = [
  {
    icon: FaLandmark,
    title: "Trusted by government",
    description:
      "Ten state tourism boards run their hotel bookings on Bookingjini.",
  },
  {
    icon: FaChartLine,
    title: "Proven at scale",
    description:
      "42 lakh+ room nights booked and ₹10 crore+ processed every single day.",
  },
  {
    icon: FaHeadset,
    title: "Human support, 24/7",
    description:
      "Real people who have worked in hotel operations, on phone and email.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure payments",
    description:
      "PayU, Stripe and [others]. [Add compliance only if certified]",
  },
  {
    icon: FaUserShield,
    title: "Your guests stay yours",
    description:
      "Direct bookings give you the guest's details, so you can bring them back without paying again.",
  },
  {
    icon: FaAward,
    title: "[X] years in hotel tech",
    description: "Built for Indian hospitality since [founding year].",
  },
];

export function TrustGrid() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Why hotels trust us"
          title="Built to be relied on, every night of the year"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} index={i % 3}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-white bg-linear-to-b from-white to-[#FAF9F7] px-6 py-10 text-center shadow-[0_4px_24px_rgba(30,13,1,0.06)]">
                {/* Orange icon tile inside a soft halo */}
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/5">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-linear-to-b from-[#FF8A2A] to-[#E0560B] text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-[#1E0D01]">
                  {title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#1E0D01]/60">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
