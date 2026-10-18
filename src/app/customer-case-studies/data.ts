import type { StaticImageData } from "next/image";

import type { StatCard } from "@/components/reusable/StatCards";

// All listings for the Customer case studies page live here, so content edits never touch the components.
// Logos: add a static import (e.g. `import sayeman from "@/components/assets/customers/sayeman.png"`)
// and set `logo` — entries without one fall back to a text wordmark.

// Static imports only: next/image reads their size, so no width/height is needed per logo
export type Logo = StaticImageData;

export const RESULT_STATS: StatCard[] = [
  { value: "−49", accent: "%", label: "OTA commission in 90 days" },
  { value: "₹1.8L → ", accent: "₹92K", label: "Monthly OTA commission, after 90 days" },
  { value: "6", accent: "x", label: "Website bookings, ₹40 lakh to ₹2.4 crore" },
];

export type IndependentHotel = { id: string; name: string; logo?: Logo };

// TODO: the design repeats "Hotel" / "Hotel Crest" as filler — replace with the real hotel names
export const INDEPENDENT_HOTELS: IndependentHotel[] = [
  { id: "sayeman", name: "Sayeman Beach Resort" },
  { id: "holiday-resort", name: "Holiday Resort Puri" },
  { id: "landmark-towers", name: "The Landmark Towers" },
  { id: "sanpra", name: "Sanpra Bay View Hotel" },
  { id: "ramayana", name: "Ramayana" },
  { id: "hotel-crest-1", name: "Hotel Crest" },
  { id: "hotel-la", name: "Hotel LA" },
  { id: "landmark-shimla", name: "Hotel Landmark Shimla" },
  { id: "triton", name: "Hotel Triton" },
  { id: "damson-plum", name: "Damson Plum" },
  { id: "urban-park", name: "Hotel Urban Park" },
  { id: "empires", name: "Empires Hotel" },
  { id: "hotel-1", name: "Hotel" },
  { id: "golden-tree", name: "Golden Tree" },
  { id: "palm-court", name: "The Palm Court" },
  { id: "papaya-tree", name: "Papaya Tree" },
  { id: "hotel-crest-2", name: "Hotel Crest" },
  { id: "hotel-crest-3", name: "Hotel Crest" },
  { id: "lohmod", name: "The Lohmod" },
  { id: "lineage", name: "Lineage" },
  { id: "grand-radiant", name: "The Grand Radiant" },
  { id: "grand-continental", name: "Grand Continental" },
  { id: "hotel-2", name: "Hotel" },
  { id: "royal-ark", name: "The Royal Ark" },
  { id: "irada", name: "Hotel Irada" },
  { id: "radhika", name: "Radhika Beach Resort & Spa" },
  { id: "seagull-hotels", name: "Seagull Hotels Ltd" },
  { id: "seagull-resort", name: "Seagull Resort & Spa Village" },
  { id: "norkhil", name: "Norkhil" },
  { id: "miracle-regency", name: "Hotel Miracle Regency" },
];

export const HOTELS_FOOTNOTE =
  "And 9,300+ more hotels across India, Bangladesh, Sri Lanka, Nepal, the UK, Thailand and Australia.";

export type GovernmentPartner = { name: string; body?: string; logo?: Logo };

export const GOVERNMENT_PARTNERS: GovernmentPartner[] = [
  { name: "Andaman Tourism", body: "Andaman & Nicobar Islands" },
  { name: "TTDC", body: "Tamil Nadu Tourism Development Corporation" },
  { name: "KTDC", body: "Kerala Tourism Development Corporation" },
  { name: "Haryana Tourism", body: "Government of Haryana" },
  { name: "CITCO", body: "Chandigarh Industrial & Tourism Development Corporation" },
  { name: "Centaur Hotels" },
  { name: "WBLDC", body: "West Bengal Livestock Development Corporation" },
  { name: "Meghalaya Tourism" },
  { name: "New Delhi YMCA" },
  { name: "HPECOSOC", body: "Himachal Pradesh Eco-Tourism Society" },
];
