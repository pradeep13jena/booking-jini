import type { IconType } from "react-icons";
import {
  LuArrowRightLeft,
  LuHeadphones,
  LuLockOpen,
  LuPercent,
  LuShieldCheck,
  LuStar,
  LuUsers,
} from "react-icons/lu";

// All content for the Pricing page lives here, so price / copy / feature edits never touch the components.
// Values in [brackets] are placeholders waiting on real numbers.

/* ---------------------------------- Hero ---------------------------------- */

export const HERO_POINTS = [
  "No hidden charges",
  "0% commission on direct bookings",
  "Cancel anytime",
  "24/7 human support",
];

/* ---------------------------------- Plans --------------------------------- */

export type BillingCycle = "monthly" | "yearly";

export const BILLING_CYCLES: { id: BillingCycle; label: string; badge?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly", badge: "Save [XX]%" },
];

export const DEFAULT_BILLING: BillingCycle = "yearly";

// Shown under every price; swaps with the toggle
export const BILLING_NOTE: Record<BillingCycle, string> = {
  monthly: "Billed monthly · excl. GST",
  yearly: "Billed annually · excl. GST",
};

export const PILLARS = ["Sell direct", "Distribute", "Manage", "Retain"] as const;
export type Pillar = (typeof PILLARS)[number];

export type Plan = {
  id: string;
  eyebrow: string;
  name: string;
  tagline: string;
  // Per property, per month. TODO: monthly prices are dummy until finance shares them
  price: Record<BillingCycle, string>;
  pillars: Pillar[];
  featuresTitle: string;
  features: string[];
  popular?: boolean;
  cta: { label: string; href: string };
};

export const PLANS: Plan[] = [
  {
    id: "essential",
    eyebrow: "For independent hotels",
    name: "Essential",
    tagline: "Get found and booked direct.",
    price: { monthly: "[Y,YYY]", yearly: "[X,XXX]" },
    pillars: ["Sell direct", "Distribute"],
    featuresTitle: "Includes:",
    features: [
      "Booking Engine with 0% commission",
      "Channel Manager for 300+ OTAs",
      "Payment gateway and payment links",
      "Google Hotel Center listing",
      "Performance and commission reports",
      "Connects to your existing PMS",
    ],
    cta: { label: "Get started", href: "/contact" },
  },
  {
    id: "growth",
    eyebrow: "For growing hotels",
    name: "Growth",
    tagline: "Grow direct bookings and margin.",
    price: { monthly: "[Y,YYY]", yearly: "[X,XXX]" },
    pillars: ["Sell direct", "Distribute", "Retain"],
    featuresTitle: "Everything in Essential, plus:",
    features: [
      "Hotel website builder",
      "AI Chatbot for guest questions",
      "Rate Shopper for competitor rates",
      "Revenue Management rules",
      "Guest Marketing CRM",
      "Reputation Management",
    ],
    popular: true,
    cta: { label: "Get started", href: "/contact" },
  },
  {
    id: "complete",
    eyebrow: "For full-service hotels",
    name: "Complete",
    tagline: "Run your whole hotel on one platform.",
    price: { monthly: "[Y,YYY]", yearly: "[X,XXX]" },
    pillars: ["Sell direct", "Distribute", "Manage", "Retain"],
    featuresTitle: "Everything in Growth, plus:",
    features: [
      "Bookingjini Host PMS",
      "Housekeeping app",
      "Accounting and GST-ready billing",
      "Point of Sale for restaurant and bar",
      "Upsells before and during the stay",
      "Business Intelligence dashboards",
    ],
    cta: { label: "Get started", href: "/contact" },
  },
];

export const ENTERPRISE_PLAN = {
  eyebrow: "For chains and tourism boards",
  name: "Groups & Government",
  tagline: "Manage every property from one place.",
  price: "Custom",
  priceCaption: "pricing for your portfolio",
  priceNote: "Based on properties, rooms and products",
  featuresTitle: "A custom setup, including:",
  features: [
    "Central Reservation System (CRS)",
    "Group booking engine across properties",
    "Portfolio-wide reporting",
    "Dedicated account manager",
    "Premium onboarding and training",
    "Setups for state tourism corporations",
  ],
  cta: { label: "Get a custom quote", href: "/contact" },
};

export const PLANS_FOOTNOTE =
  "Starting prices for a property with up to [XX] rooms. Your price depends on room count and products. All prices exclude GST.";

/* ------------------------- Included with every plan ------------------------ */

export const INCLUDED: { icon: IconType; tag: string; title: string; description: string }[] = [
  {
    icon: LuPercent,
    tag: "Revenue",
    title: "0% commission on direct bookings",
    description: "Every booking on your own website is yours, with no per-booking cut.",
  },
  {
    icon: LuStar,
    tag: "Setup",
    title: "Free onboarding",
    description: "Our team sets up your rooms, rates and channels with you.",
  },
  {
    icon: LuArrowRightLeft,
    tag: "Setup",
    title: "Data migration",
    description: "We move your bookings and guest data from your old system.",
  },
  {
    icon: LuUsers,
    tag: "Team",
    title: "Staff training",
    description: "Hands-on training for your front desk and managers.",
  },
  {
    icon: LuHeadphones,
    tag: "Support",
    title: "24/7 human support",
    description: "Real people on phone and email, every night of the year.",
  },
  {
    icon: LuLockOpen,
    tag: "Freedom",
    title: "No lock-in",
    description: "Monthly plans with no long-term contract.",
  },
];

/* --------------------------------- Add-ons -------------------------------- */

// `amount` renders as "₹amount /mo"; `usage` renders as a pill (e.g. "Per booking")
export type AddonPrice = { amount: string } | { usage: string };

export type AddonGroup = {
  name: string;
  items: { name: string; description: string; price: AddonPrice }[];
};

export const ADDON_GROUPS: AddonGroup[] = [
  {
    name: "Sell direct",
    items: [
      {
        name: "Digital Marketing",
        description: "Managed Google and Meta campaigns that drive direct bookings.",
        price: { amount: "[X,XXX]" },
      },
      {
        name: "Metasearch Advertising",
        description: "Your live rates on Trivago, Tripadvisor and Google ads.",
        price: { usage: "Pay per stay" },
      },
      {
        name: "Upsells",
        description: "Sell upgrades and add-ons before and during the stay.",
        price: { amount: "[XXX]" },
      },
    ],
  },
  {
    name: "Distribute",
    items: [
      {
        name: "GDS Connectivity",
        description: "Reach corporate travellers and travel agents worldwide.",
        price: { usage: "Per booking" },
      },
      {
        name: "Dynamic Pricing",
        description: "Rates that move automatically with demand and your rules.",
        price: { amount: "[X,XXX]" },
      },
      {
        name: "Demand Forecasting",
        description: "See demand early and set restrictions in time.",
        price: { amount: "[X,XXX]" },
      },
    ],
  },
  {
    name: "Manage",
    items: [
      {
        name: "ePOS & Embedded Payments",
        description: "Restaurant and outlet billing posted to the guest folio.",
        price: { amount: "[X,XXX]" },
      },
      {
        name: "Automated Reconciliation",
        description: "Match every payment to its booking automatically.",
        price: { amount: "[XXX]" },
      },
      {
        name: "Accounts Receivable",
        description: "Track dues from companies and travel agents.",
        price: { amount: "[XXX]" },
      },
    ],
  },
  {
    name: "Retain",
    items: [
      {
        name: "WhatsApp Messaging",
        description: "Pre-arrival, in-stay and post-stay messages.",
        price: { usage: "Per message" },
      },
      {
        name: "Digital Check-In",
        description: "Paperless check-in on the guest's phone.",
        price: { amount: "[XXX]" },
      },
      {
        name: "Guest Intelligence",
        description: "Guest history, preferences and value at a glance.",
        price: { amount: "[XXX]" },
      },
    ],
  },
];

/* ------------------------------ Compare table ----------------------------- */

// true = included, false = not included, "addon" = available as add-on, any other string is shown as text
export type CompareValue = boolean | "addon" | (string & {});

export const COMPARE_COLUMNS: { name: string; caption: string; popular?: boolean }[] = [
  { name: "Essential", caption: "Sell & distribute" },
  { name: "Growth", caption: "Most popular", popular: true },
  { name: "Complete", caption: "All 4 pillars" },
  { name: "Groups & Govt.", caption: "Custom" },
];

export type CompareGroup = {
  name: string;
  // Groups without an icon get an auto number badge (01, 02…)
  icon?: IconType;
  // One value per column, in COMPARE_COLUMNS order
  rows: { feature: string; values: [CompareValue, CompareValue, CompareValue, CompareValue] }[];
};

// Groups shown before "Show all features" is clicked
export const COMPARE_VISIBLE_GROUPS = 2;

export const COMPARE_GROUPS: CompareGroup[] = [
  {
    name: "Sell direct",
    rows: [
      { feature: "Booking Engine (0% commission)", values: [true, true, true, true] },
      { feature: "Payment gateway and payment links", values: [true, true, true, true] },
      { feature: "Google Hotel Center", values: [true, true, true, true] },
      { feature: "Hotel website builder", values: [false, true, true, true] },
      { feature: "AI Chatbot", values: [false, true, true, true] },
      { feature: "Upsells", values: ["addon", "addon", true, true] },
      { feature: "Digital Marketing", values: ["addon", "addon", "addon", "addon"] },
      { feature: "Metasearch Advertising", values: ["addon", "addon", "addon", "addon"] },
    ],
  },
  {
    name: "Distribute",
    rows: [
      { feature: "Channel Manager (300+ OTAs)", values: [true, true, true, true] },
      { feature: "Real-time rate and inventory sync", values: [true, true, true, true] },
      { feature: "Rate Shopper", values: [false, true, true, true] },
      { feature: "Revenue Management", values: [false, true, true, true] },
      { feature: "Dynamic Pricing", values: ["addon", "addon", "addon", true] },
      { feature: "Demand Forecasting & Controls", values: ["addon", "addon", "addon", true] },
      { feature: "GDS Connectivity", values: ["addon", "addon", "addon", true] },
      { feature: "Central Reservation System (CRS)", values: [false, false, false, true] },
    ],
  },
  {
    name: "Manage",
    rows: [
      { feature: "Integration with your existing PMS", values: [true, true, true, true] },
      { feature: "Bookingjini Host PMS", values: [false, false, true, true] },
      { feature: "Housekeeping app", values: [false, false, true, true] },
      { feature: "Accounting and GST-ready billing", values: [false, false, true, true] },
      { feature: "Point of Sale", values: ["addon", "addon", true, true] },
      { feature: "Automated Reconciliation", values: ["addon", "addon", "addon", true] },
      { feature: "Reports", values: ["Standard", "Standard", "Advanced BI", "Portfolio-wide"] },
    ],
  },
  {
    name: "Retain",
    rows: [
      { feature: "Guest Marketing CRM", values: [false, true, true, true] },
      { feature: "Reputation Management", values: [false, true, true, true] },
      { feature: "Digital Check-In", values: ["addon", "addon", true, true] },
      { feature: "WhatsApp Messaging", values: ["addon", "addon", "addon", "addon"] },
      { feature: "Guest Intelligence", values: ["addon", "addon", true, true] },
    ],
  },
  {
    name: "Support & Security",
    icon: LuShieldCheck,
    rows: [
      { feature: "24/7 human support (phone and email)", values: [true, true, true, true] },
      { feature: "Guided onboarding and training", values: [true, true, true, "Premium"] },
      { feature: "Dedicated account manager", values: [false, false, true, true] },
      { feature: "Secure payments and data protection", values: [true, true, true, true] },
    ],
  },
];

/* ----------------------------- ROI calculator ----------------------------- */

export type RoiInputKey = "revenue" | "otaShare" | "commission" | "moveToDirect";

// Yearly saving = revenue × OTA share × commission × share moved to direct × 12
export const ROI_INPUTS: {
  key: RoiInputKey;
  label: string;
  min: number;
  max: number;
  step: number;
  initial: number;
  format: "rupee" | "percent";
}[] = [
  { key: "revenue", label: "Monthly room revenue", min: 200000, max: 10000000, step: 50000, initial: 1500000, format: "rupee" },
  { key: "otaShare", label: "Share of bookings from OTAs", min: 0, max: 100, step: 1, initial: 65, format: "percent" },
  { key: "commission", label: "Average OTA commission", min: 5, max: 35, step: 1, initial: 18, format: "percent" },
  { key: "moveToDirect", label: "Bookings you move to direct", min: 0, max: 50, step: 1, initial: 15, format: "percent" },
];

export const ROI_DISCLAIMER =
  "Estimate for illustration only. Your actual savings depend on your hotel, market and channel mix.";

// Plan quoted next to the savings figure
export const ROI_PLAN_ID = "growth";

/* --------------------------------- Results -------------------------------- */

export const RESULTS: {
  value: string;
  accent: string;
  label: string;
  hotel: string;
  city: string;
  href: string;
}[] = [
  {
    value: "₹9",
    accent: "Cr",
    label: "revenue in Year One for a brand-new hotel",
    hotel: "Hotel Ramayana",
    city: "Ayodhya",
    href: "/customer-case-studies",
  },
  {
    value: "54",
    accent: "%",
    label: "of a legacy hotel’s business collected through payment links",
    hotel: "Holiday Resorts",
    city: "Puri",
    href: "/customer-case-studies",
  },
  {
    value: "30",
    accent: "%",
    label: "of a resort’s revenue now from direct bookings",
    hotel: "Tripura Resorts",
    city: "Hyderabad",
    href: "/customer-case-studies",
  },
];

/* ---------------------------------- FAQs ---------------------------------- */

export const PRICING_FAQS: { question: string; answer: string }[] = [
  {
    question: "How is my price calculated?",
    answer:
      "Prices shown are starting prices per property, per month. Your final price depends on your room count and the products you choose. Your account manager confirms the exact price before you sign. All prices exclude GST.",
  },
  {
    question: "Do you charge commission on direct bookings?",
    answer:
      "No. Every plan includes 0% commission on bookings made through your own website and booking engine, so the full room rate stays with you.",
  },
  {
    question: "Is there a contract or lock-in?",
    answer: "No. Monthly plans have no long-term contract, so you can cancel anytime.",
  },
  {
    question: "Are there setup or hidden fees?",
    answer:
      "No hidden charges. Onboarding, data migration and staff training are included with every plan. Add-ons are priced separately and only if you choose them.",
  },
  {
    question: "Can I keep my existing PMS?",
    answer:
      "Yes. Every plan connects to your existing PMS. If you want to move to Bookingjini Host PMS, it is included in the Complete plan.",
  },
  {
    question: "Can I change plans later?",
    answer: "[Answer to be written]",
  },
  {
    question: "Do you work with state tourism corporations?",
    answer:
      "Yes. Our Groups & Government plan includes setups for state tourism corporations, with a Central Reservation System and portfolio-wide reporting.",
  },
  {
    question: "How quickly can I go live?",
    answer: "[Answer to be written]",
  },
];
