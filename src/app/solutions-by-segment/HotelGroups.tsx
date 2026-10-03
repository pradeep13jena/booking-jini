import { LuChartColumn, LuDatabase, LuRocket, LuSparkles } from "react-icons/lu";

import { ControlRoomSection, type ControlRoomFeature } from "@/components/reusable/ControlRoomSection";

const FEATURES: ControlRoomFeature[] = [
  {
    icon: LuChartColumn,
    title: "Central Management",
    description: "Push uniform rates and availability across all inventory branches with one single command.",
  },
  {
    icon: LuDatabase,
    title: "Consistent Processes",
    description: "Establish standardized operational workflows for reservation staff at every property.",
  },
  {
    icon: LuChartColumn,
    title: "Consolidated Visibility",
    description: "Keep watch over your entire multi-property portfolio with single-pane performance metrics.",
  },
  {
    icon: LuSparkles,
    title: "Coordinated Distribution",
    description: "Maximize group yield by coordinating individual channel allocations and room block states.",
  },
];

export function HotelGroups() {
  return (
    <ControlRoomSection
      badge="Hotel groups & chains"
      badgeIcon={<LuRocket className="h-3.5 w-3.5 text-primary" />}
      title="One control room for multiple properties"
      description="Bookingjini helps hotel groups create greater consistency across properties while keeping reservations, operations and reporting connected under one master architecture."
      features={FEATURES}
      cta={{ text: "Explore solutions for hotel groups", href: "/contact" }}
    />
  );
}
