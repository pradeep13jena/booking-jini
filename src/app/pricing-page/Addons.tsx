import { LuZap } from "react-icons/lu";

import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";
import { ADDON_GROUPS, type AddonPrice } from "./data";

function Price({ price }: { price: AddonPrice }) {
  if ("usage" in price) {
    return (
      <span className="shrink-0 rounded-full border border-primary/20 bg-white px-2.5 py-1 text-xs font-medium whitespace-nowrap text-[#E0560B]">
        {price.usage}
      </span>
    );
  }
  return (
    <span className="shrink-0 whitespace-nowrap">
      <span className="text-base font-semibold text-[#E0560B] md:text-lg">₹{price.amount}</span>
      <span className="text-xs text-[#1E0D01]/50"> /mo</span>
    </span>
  );
}

export function Addons() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="Add-ons"
          icon={<LuZap className="h-3.5 w-3.5 text-primary" />}
          title="Add what you need, when you need it"
          description="Every add-on plugs straight into your plan, grouped by the way your hotel grows."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {ADDON_GROUPS.map((group, i) => (
            <Reveal as="li" key={group.name} index={i % 2} className="rounded-3xl bg-white p-2 shadow-[0_4px_24px_rgba(30,13,1,0.05)]">
              <div className="flex items-center justify-between gap-3 px-3 pt-3 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#1E0D01] text-xs font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl font-medium text-[#1E0D01]">{group.name}</h3>
                </div>
                <span className="rounded-full border border-black/5 bg-[#F7F3EF] px-3 py-1 text-xs text-[#1E0D01]/70">
                  {group.items.length} add-ons
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7F3EF]/70 px-4 py-4 transition-colors duration-300 hover:bg-[#F2EAE2]"
                  >
                    <div>
                      <p className="text-base font-medium text-[#1E0D01]">{item.name}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#1E0D01]/60 md:text-sm">{item.description}</p>
                    </div>
                    <Price price={item.price} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
