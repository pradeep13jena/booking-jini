import { StatCards, type StatCard } from "@/components/reusable/StatCards";

const STATS: StatCard[] = [
  { value: "9,300", accent: "+", label: "Hotels on the platform" },
  { value: "2.8", accent: " lakh", label: "Rooms managed" },
  { value: "₹10", accent: " Cr+", label: "Processed every day" },
  { value: "6+", label: "countries" },
];

export function AboutStats() {
  return <StatCards stats={STATS} />;
}
