import type { IconType } from "react-icons";
import { LuHandCoins, LuIndianRupee, LuListChecks, LuMessageSquareQuote, LuReceiptText, LuShieldCheck, LuSmile } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

const VALUES: { icon: IconType; title: string; description: string }[] = [
  {
    icon: LuHandCoins,
    title: "The hotel's profit comes first",
    description: "We judge every feature by one question: does it help the hotel earn more or spend less?",
  },
  {
    icon: LuMessageSquareQuote,
    title: "A real person, any hour",
    description: "Hotels never close, so neither does our support. Our team has worked in hotel operations.",
  },
  {
    icon: LuListChecks,
    title: "Simple enough for the front desk",
    description: "If a new staff member cannot use it on day one, we have not finished building it.",
  },
  {
    icon: LuShieldCheck,
    title: "Your guests, your data",
    description: "Direct bookings give hotels their guest relationships back. We keep that data safe and theirs.",
  },
  {
    icon: LuIndianRupee,
    title: "Built for Indian hospitality",
    description: "Rupee pricing, local payment gateways, GST-ready billing and the OTAs Indian travellers use.",
  },
  {
    icon: LuReceiptText,
    title: "Clear numbers, no surprises",
    description: "Transparent pricing and reports that show what the hotel actually earns.",
  },
];

export function Values() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="What we stand for"
          icon={<LuSmile className="h-3.5 w-3.5 text-primary" />}
          title="How we work with hotels"
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <Reveal as="li" key={title} index={i % 3}>
              <div className="group flex h-full flex-col items-center rounded-3xl border border-white bg-linear-to-b from-white to-[#FAF7F4] px-6 py-10 text-center shadow-[0_4px_24px_rgba(30,13,1,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(249,117,24,0.12)]">
                {/* Orange icon tile inside a soft halo */}
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-linear-to-b from-[#FF8A2A] to-[#E0560B] text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                </span>
                <h3 className="mt-6 max-w-60 font-heading text-xl font-medium text-[#1E0D01] md:text-2xl">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#1E0D01]/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
