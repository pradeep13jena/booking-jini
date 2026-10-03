import { LuBuilding, LuCircleUser, LuReceiptText, LuShieldCheck } from "react-icons/lu";

import { IconCardGrid, type IconCard } from "@/components/reusable/IconCardGrid";

const REASONS: IconCard[] = [
  {
    icon: LuReceiptText,
    title: "Keep more of every reservation",
    description: "Lower distribution costs mean more booking value stays with the hotel.",
  },
  {
    icon: LuCircleUser,
    title: "Own the guest relationship",
    description: "Build a direct connection with guests instead of relying entirely on a third-party platform.",
  },
  {
    icon: LuBuilding,
    title: "Build a stronger hotel brand",
    description: "Turn your own website into a meaningful revenue channel.",
  },
  {
    icon: LuShieldCheck,
    title: "Reduce OTA dependence",
    description: "Use OTAs for reach without making them the only source of demand.",
  },
];

export function WhyDirectMatters() {
  return <IconCardGrid title="Why direct bookings matter" items={REASONS} />;
}
