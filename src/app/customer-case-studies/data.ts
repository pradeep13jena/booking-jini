import type { StaticImageData } from "next/image";

import type { StatCard } from "@/components/reusable/StatCards";
import {
  damsonPlum,
  empires,
  goldenTree,
  grandContinental,
  grandRadiant,
  holidayResort,
  hotelIrada,
  hotelLa,
  landmarkShimla,
  landmarkTowers,
  leeGarden,
  lineage,
  lohmod,
  nagpalRegency,
  norkhil,
  palmCourt,
  papayaTree,
  radhika,
  ramayana,
  redMaple,
  royalArk,
  sanpra,
  sayeman,
  seagull,
  travancoreCourt,
  triton,
  urbanPark,
  w,
  sjs
} from "@/lib/image";

// All listings for the Customer case studies page live here, so content edits never touch the components.
// Logos: add a static import to src/lib/image.ts and set `logo` — entries without one fall back to a text wordmark.

// Static imports only: next/image reads their size, so no width/height is needed per logo
export type Logo = StaticImageData;

export const RESULT_STATS: StatCard[] = [
  { value: "−49", accent: "%", label: "OTA commission in 90 days" },
  { value: "₹1.8L → ", accent: "₹92K", label: "Monthly OTA commission, after 90 days" },
  { value: "6", accent: "x", label: "Website bookings, ₹40 lakh to ₹2.4 crore" },
];

// `mono`: the logo is white artwork, so it's rendered as a dark silhouette to stay visible on the white grid
export type IndependentHotel = { id: string; name: string; logo?: Logo; mono?: boolean };

// TODO: "hotel-2" is still design filler — sjs.jpeg / w.png in src/lib/image.ts are unnamed candidates
export const INDEPENDENT_HOTELS: IndependentHotel[] = [
  { id: "sayeman", name: "Sayeman Beach Resort", logo: sayeman },
  { id: "holiday-resort", name: "Holiday Resort Puri", logo: holidayResort },
  { id: "landmark-towers", name: "The Landmark Towers", logo: landmarkTowers, mono: true },
  { id: "sanpra", name: "Sanpra Bay View Hotel", logo: sanpra },
  { id: "ramayana", name: "Ramayana", logo: ramayana },
  { id: "lee-garden", name: "Hotel Lee Garden", logo: leeGarden },
  { id: "hotel-la", name: "Hotel LA", logo: hotelLa },
  { id: "landmark-shimla", name: "Hotel Landmark Shimla", logo: landmarkShimla },
  { id: "triton", name: "Hotel Triton", logo: triton },
  { id: "damson-plum", name: "Damson Plum", logo: damsonPlum },
  { id: "urban-park", name: "Hotel Urban Park", logo: urbanPark },
  { id: "empires", name: "Empires Hotel", logo: empires },
  { id: "nagpal-regency", name: "Hotel Nagpal Regency", logo: nagpalRegency },
  { id: "golden-tree", name: "Golden Tree", logo: goldenTree },
  { id: "palm-court", name: "The Palm Court", logo: palmCourt },
  { id: "papaya-tree", name: "Papaya Tree", logo: papayaTree },
  { id: "travancore-court", name: "Travancore Court", logo: travancoreCourt },
  { id: "red-maple", name: "The Red Maple Hill Hotel", logo: redMaple, mono: true },
  { id: "lohmod", name: "The Lohmod", logo: lohmod },
  { id: "lineage", name: "Lineage", logo: lineage },
  { id: "grand-radiant", name: "The Grand Radiant", logo: grandRadiant, mono: true },
  { id: "grand-continental", name: "Grand Continental", logo: grandContinental },
  { id: "hotel-2", name: "Hotel" },
  { id: "royal-ark", name: "The Royal Ark", logo: royalArk },
  { id: "irada", name: "Hotel Irada", logo: hotelIrada, mono: true },
  { id: "radhika", name: "Radhika Beach Resort & Spa", logo: radhika },
  { id: "seagull-resort", name: "Seagull Resort & Spa Village", logo: seagull },
  { id: "norkhil", name: "Norkhil", logo: norkhil },
  { id: "SJS", name: "Hotel Miracle Regency", logo: sjs },
  { id: "W", name: "W", logo: w},
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
