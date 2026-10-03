import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { LuBriefcase, LuChartLine, LuCircleCheck, LuConciergeBell, LuZap } from "react-icons/lu";

import { SectionHeading } from "./SectionHeading";
import { StickyStack } from "./StickyStack";
import { FrontDeskMockup, ManagerMockup, OwnerMockup } from "./RoleMockups";

const ROLES: { icon: IconType; role: string; title: string; points: string[]; mockup: ReactNode }[] = [
  {
    icon: LuBriefcase,
    role: "Owners",
    title: "See what you actually earn, after commissions.",
    points: [
      "Revenue and commission in one report",
      "Track direct vs OTA share month by month",
      "One subscription replaces several tools",
    ],
    mockup: <OwnerMockup />,
  },
  {
    icon: LuChartLine,
    role: "General Managers",
    title: "Price smarter and keep rate parity.",
    points: [
      "Rate shopper shows competitor prices daily",
      "Push rates to every channel at once",
      "CRM campaigns that bring guests back direct",
    ],
    mockup: <ManagerMockup />,
  },
  {
    icon: LuConciergeBell,
    role: "Front Office",
    title: "One screen. No double bookings.",
    points: [
      "Check-ins, bookings and inventory together",
      "Inventory syncs across channels in real time",
      "Help from someone who has run a desk",
    ],
    mockup: <FrontDeskMockup />,
  },
];

function RoleCard({ role }: { role: (typeof ROLES)[number] }) {
  const { icon: Icon } = role;

  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-[0_-8px_30px_rgba(30,13,1,0.05)] md:grid-cols-2">
      <div className="flex flex-col justify-center p-5 md:p-10">
        <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest text-primary uppercase">
          <Icon className="h-3.5 w-3.5" />
          {role.role}
        </span>
        <h3 className="mt-3 max-w-sm font-heading text-2xl font-medium tracking-tight text-[#1E0D01] md:text-3xl">
          {role.title}
        </h3>
        <ul className="mt-5 flex flex-col gap-2.5">
          {role.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-[#1E0D01]/70">
              <LuCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden
        className="relative h-64 overflow-hidden rounded-xl bg-linear-to-br from-[#FAFAFA] via-[#FDF3EC] to-[#FBE3D3] md:h-80"
      >
        {role.mockup}
      </div>
    </article>
  );
}

export function RoleStack() {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <SectionHeading
          badge="For everyone at your hotel"
          icon={<LuZap className="h-3.5 w-3.5 text-primary" />}
          title="One platform. A clear win for each role."
        />

        <StickyStack className="mt-10 md:mt-14">
          {ROLES.map((role) => (
            <RoleCard key={role.role} role={role} />
          ))}
        </StickyStack>
      </div>
    </section>
  );
}
