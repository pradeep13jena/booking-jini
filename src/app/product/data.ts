import type { IconType } from "react-icons";
import {
  LuAppWindow,
  LuBed,
  LuBookOpen,
  LuBot,
  LuBuilding,
  LuBuilding2,
  LuCalendarDays,
  LuChartColumn,
  LuCircleCheck,
  LuCode,
  LuCoffee,
  LuCreditCard,
  LuDatabase,
  LuFileText,
  LuGift,
  LuGlobe,
  LuGraduationCap,
  LuHandshake,
  LuHeadphones,
  LuHeart,
  LuHotel,
  LuHouse,
  LuKeyRound,
  LuLandmark,
  LuLock,
  LuMegaphone,
  LuMessageSquare,
  LuMonitor,
  LuReceipt,
  LuRocket,
  LuShare2,
  LuShieldCheck,
  LuShoppingCart,
  LuSlidersHorizontal,
  LuSmartphone,
  LuSprayCan,
  LuStar,
  LuTarget,
  LuTentTree,
  LuTrendingUp,
  LuUser,
  LuUserRound,
  LuUsers,
  LuWallet,
} from "react-icons/lu";

// All content for the Product page lives here, so copy / products / pillars never touch the components.
// Values in [brackets] are placeholders waiting on real content.

/* ---------------------------------- Hero ---------------------------------- */

// TEMP: picsum placeholder (host allowed in next.config.ts) — swap for a static import of the real dashboard shot
export const HERO_IMAGE = {
  src: "https://picsum.photos/seed/bj-dashboard/1600/900",
  alt: "The Bookingjini dashboard showing occupancy, ADR, a booking calendar and channel sync status",
  width: 1600,
  height: 900,
};

export const HERO_AVATARS = [12, 47, 59].map((id) => `https://i.pravatar.cc/80?img=${id}`);

export const HERO_STATS = [
  { value: "4", label: "Pillars" },
  { value: "32", label: "Products" },
  { value: "300+", label: "OTA connections" },
  { value: "9300+", label: "Hotels" },
];

/* --------------------------------- Pillars -------------------------------- */

export type Product = { name: string; description: string; icon: IconType; slug: string; href: string };
export type ProductCategory = { name: string; products: Product[] };

export type Pillar = {
  id: string;
  name: string;
  eyebrow: string;
  icon: IconType;
  // Short line for the "Explore the platform" tab list
  tagline: string;
  // Longer copy for the stacked pillar sections
  description: string;
  highlights: string[];
  categories: ProductCategory[];
  href: string;
};

// Each product row gets an anchor (its slug); `href` jumps to it until dedicated product pages exist
const product = (name: string, description: string, icon: IconType): Product => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return { name, description, icon, slug, href: `/product#${slug}` };
};

export const PILLARS: Pillar[] = [
  {
    id: "sell-direct",
    name: "Sell direct",
    eyebrow: "More revenue",
    icon: LuShoppingCart,
    tagline: "Win bookings on your own channels and keep the full rate.",
    description:
      "Turn website visitors, Google searchers and past guests into commission-free direct bookings, and earn more from every one.",
    highlights: [
      "Your brand, your domain, 0% commission",
      "Rate plans, coupons and add-ons at checkout",
      "Google Hotel Ads and metasearch campaigns",
      "Payment links for phone and chat bookings",
    ],
    categories: [
      {
        name: "Website & booking",
        products: [
          product("Booking Engine", "Commission-free bookings on your own website, under your brand.", LuShoppingCart),
          product("Websites", "Fast hotel websites with the booking engine built in.", LuAppWindow),
          product("Chatbot", "AI chat that answers guest questions and helps them book.", LuBot),
        ],
      },
      {
        name: "Marketing & upsell",
        products: [
          product("Digital Marketing", "Google, Meta and metasearch campaigns that drive direct bookings.", LuMegaphone),
          product("Upsells", "Sell upgrades, add-ons and experiences before and during the stay.", LuGift),
        ],
      },
    ],
    href: "/product#sell-direct",
  },
  {
    id: "distribute",
    name: "Distribute",
    eyebrow: "Wider reach",
    icon: LuShare2,
    tagline: "Sell everywhere travellers search, at the right price.",
    description:
      "Reach travellers on 300+ OTAs, GDS and Google with rates and rooms always in sync, and price every night with data.",
    highlights: [
      "Real-time rate and inventory sync",
      "One-click bulk updates, stop-sell, CTA and CTD",
      "Competitor rate tracking",
      "OTA promotions and commissions in one view",
    ],
    categories: [
      {
        name: "Channels",
        products: [
          product("Channel Management", "Sync rates and inventory to 300+ OTAs in real time.", LuShare2),
          product("Distribution Partners", "Connect with OTAs, metasearch, GDS and travel agents.", LuHandshake),
        ],
      },
      {
        name: "Pricing",
        products: [
          product("Revenue Management", "Set the right rate for every room type, every night.", LuTrendingUp),
          product("Dynamic Pricing", "Rates that move automatically with demand and your rules.", LuSlidersHorizontal),
          product("Demand Forecasting & Controls", "See demand ahead and manage restrictions and stop-sells.", LuTarget),
        ],
      },
    ],
    href: "/product#distribute",
  },
  {
    id: "manage",
    name: "Manage",
    eyebrow: "Lower cost",
    icon: LuBuilding2,
    tagline: "Run rooms, outlets and money from one system.",
    description:
      "Front desk, housekeeping, restaurant, billing and payments on one cloud platform, so your team stops copying data between tools.",
    highlights: [
      "Single and group reservations, FIT and GIT rates",
      "Housekeeping status on mobile",
      "Restaurant bills posted to the guest folio",
      "GST-ready invoices and automatic reconciliation",
    ],
    categories: [
      {
        name: "Property operations",
        products: [
          product("Property Management", "Run reservations, rooms and the front desk from one cloud system.", LuBuilding2),
          product("Reservation Management", "Create, change and track every booking on a drag-and-drop calendar.", LuCalendarDays),
          product("Housekeeping", "Live room status and cleaning tasks on your team's phones.", LuSprayCan),
          product("Accounting & Billing", "Folios, invoices and billing in one place.", LuReceipt),
          product("Business Intelligence", "Dashboards for occupancy, ADR, RevPAR and revenue.", LuChartColumn),
        ],
      },
      {
        name: "Point of sale",
        products: [
          product("Point of Sale", "Restaurant, bar and spa sales on the same system as your rooms.", LuMonitor),
          product("ePOS", "Cloud POS for outlets, with bills posted straight to the guest folio.", LuSmartphone),
          product("Embedded Payments", "Take payments at the table and counter, linked to every POS order.", LuCreditCard),
        ],
      },
      {
        name: "Payments",
        products: [
          product("Payments", "Accept online, in-person and payment-link payments in one place.", LuWallet),
          product("Tokenization", "Store guest cards securely for deposits, no-shows and incidentals.", LuLock),
          product("Automated Reconciliation", "Match payments to bookings and invoices automatically.", LuCircleCheck),
          product("Multicurrency", "Show prices and take payments in your guest's currency.", LuGlobe),
          product("Accounts Receivable", "Track invoices and dues from companies and travel agents.", LuFileText),
        ],
      },
    ],
    href: "/product#manage",
  },
  {
    id: "retain",
    name: "Retain",
    eyebrow: "Repeat guests",
    icon: LuHeart,
    tagline: "Know every guest and bring them back direct.",
    description:
      "Make every stay smoother, every review stronger and every past guest a future direct booking.",
    highlights: [
      "One profile per guest across every stay",
      "Pre-arrival messages and digital check-in",
      "Email, SMS and WhatsApp campaigns",
      "Review requests after every stay",
    ],
    categories: [
      {
        name: "Guest journey",
        products: [
          product("Guest Check-In", "Fast, paperless check-in at the desk or on the guest's phone.", LuKeyRound),
          product("Guest Communication & Digital Check-In", "Message guests and collect their details before arrival.", LuMessageSquare),
        ],
      },
      {
        name: "Loyalty & reputation",
        products: [
          product("Guest Intelligence", "See every guest's history, preferences and value at a glance.", LuUser),
          product("Guest Marketing CRM", "Guest profiles, segments and campaigns that bring guests back direct.", LuUsers),
          product("Reputation Management", "Monitor reviews and turn happy stays into great ratings.", LuStar),
        ],
      },
    ],
    href: "/product#retain",
  },
];

export const productCount = (pillar: Pillar) =>
  pillar.categories.reduce((total, category) => total + category.products.length, 0);

export const PLATFORM_FOUNDATION = {
  title: "Platform foundation",
  caption: "Shared by every product",
  links: [
    { label: "Open API", href: "#foundation" },
    { label: "Security & Compliance", href: "#foundation" },
    { label: "Data & Reporting", href: "#foundation" },
    { label: "Developer Docs", href: "#foundation" },
  ],
};

/* ------------------------------ Hub diagram ------------------------------- */

// Positions are in a 1200 × 700 design space; the diagram scales as one piece on desktop.
// `box` places the card (x, y, width), `from` is where its line starts, `to` where it ends.
export type HubNode = {
  name: string;
  detail: string;
  icon: IconType;
  box: { x: number; y: number; w: number };
  links: { label: string; from: [number, number]; to: [number, number] }[];
};

export const HUB_SIZE = { w: 1200, h: 700 };
export const HUB_CENTER = { title: "Your hotel", caption: "One login · One guest database", box: { x: 460, y: 243, w: 280, h: 232 } };

export const HUB_NODES: HubNode[] = [
  {
    name: "Booking Engine & Websites",
    detail: "Your site · Chatbot · Google Ads",
    icon: LuGlobe,
    box: { x: 0, y: 0, w: 290 },
    links: [{ label: "Direct bookings", from: [277, 157], to: [470, 262] }],
  },
  {
    name: "Guest CRM & Retention",
    detail: "Profiles · Campaigns · Reviews",
    icon: LuHeart,
    box: { x: 455, y: 0, w: 290 },
    links: [{ label: "Guest profiles", from: [600, 165], to: [600, 243] }],
  },
  {
    name: "Property Management",
    detail: "Front desk · Housekeeping",
    icon: LuBuilding2,
    box: { x: 910, y: 10, w: 290 },
    links: [{ label: "Reservations", from: [960, 150], to: [730, 262] }],
  },
  {
    name: "Channel Manager",
    detail: "300+ OTAs · GDS",
    icon: LuShare2,
    box: { x: 0, y: 305, w: 290 },
    links: [
      { label: "Rates & inventory", from: [290, 358], to: [460, 358] },
      { label: "Smart rates", from: [145, 412], to: [145, 570] },
    ],
  },
  {
    name: "Point of Sale",
    detail: "Restaurant · Bar · Spa",
    icon: LuReceipt,
    box: { x: 910, y: 305, w: 290 },
    links: [{ label: "Charges to folio", from: [910, 358], to: [740, 358] }],
  },
  {
    name: "Revenue Management",
    detail: "Dynamic rates · Forecasts",
    icon: LuChartColumn,
    box: { x: 0, y: 570, w: 290 },
    links: [{ label: "Pricing rules", from: [248, 570], to: [470, 455] }],
  },
  {
    name: "Platform",
    detail: "Open API · Reports",
    icon: LuCode,
    box: { x: 455, y: 585, w: 290 },
    links: [{ label: "Data & integrations", from: [600, 585], to: [600, 475] }],
  },
  {
    name: "Payments",
    detail: "Cards · UPI · Payment links",
    icon: LuCreditCard,
    box: { x: 910, y: 585, w: 290 },
    links: [{ label: "Settled payments", from: [970, 585], to: [730, 455] }],
  },
];

/* ------------------------------ Built for --------------------------------- */

export const PROPERTY_TYPES: { name: string; icon: IconType }[] = [
  { name: "Hotels", icon: LuHotel },
  { name: "Resorts", icon: LuTentTree },
  { name: "Homestays", icon: LuHouse },
  { name: "Hostels", icon: LuBed },
  { name: "Serviced apartments", icon: LuBuilding },
  { name: "Hotel chains", icon: LuBuilding2 },
  { name: "Tourism corporations", icon: LuLandmark },
  { name: "Restaurants & cafés", icon: LuCoffee },
];

export const PLAN_INCLUDES: { name: string; description: string; icon: IconType }[] = [
  { name: "Guided onboarding", description: "We set up your rooms, rates and channels and move your data across.", icon: LuRocket },
  { name: "Dedicated account manager", description: "One person who knows your hotel and your numbers.", icon: LuUserRound },
  { name: "Staff training", description: "Hands-on training for front office, revenue and F&B teams.", icon: LuGraduationCap },
  { name: "24/7 human support", description: "Real people on phone and email, every night of the year.", icon: LuHeadphones },
];

/* --------------------------- Platform foundation -------------------------- */

export const OPEN_API = {
  title: "Open API",
  description: "Connect any tool to your hotel data with a documented API.",
  href: "#foundation",
  connections: ["Booking.com", "Expedia", "Agoda", "MakeMyTrip", "Goibibo", "Airbnb", "Google", "Meta", "PayU", "Stripe", "+300 more"],
};

export const SECURITY = {
  title: "Security & Compliance",
  description: "Secure payments, protected guest data and role-based access.",
  href: "#foundation",
  // TODO: confirm which certifications Bookingjini holds and add the badge files
  badges: [
    { name: "PCI DSS", caption: "Card data security" },
    { name: "ISO 27001", caption: "Information security" },
    { name: "GST", caption: "Compliant invoicing" },
    { name: "SSL", caption: "Encrypted end to end" },
  ],
  note: "[Confirm which certifications Bookingjini holds and add the badge files]",
};

export const FOUNDATION_LINKS: { title: string; description: string; icon: IconType; href: string }[] = [
  {
    title: "Data & Reporting",
    description: "Every number across every product, in reports you can export.",
    icon: LuDatabase,
    href: "#foundation",
  },
  {
    title: "Developer Docs",
    description: "Guides and references for partners and developers.",
    icon: LuBookOpen,
    href: "#foundation",
  },
];

export const SECURITY_ICON = LuShieldCheck;

/* ---------------------------------- FAQs ---------------------------------- */

export const PRODUCT_FAQS: { question: string; answer: string }[] = [
  {
    question: "Do I have to buy every product?",
    answer:
      "No. Start with the products you need, such as the Booking Engine or Channel Manager, and add more as you grow. Everything connects when you are ready.",
  },
  {
    question: "Does it work with my existing systems?",
    answer:
      "Yes. Bookingjini integrates with leading PMS platforms such as IDS, WINHMS, Exceed and Hotelogix, and with major payment gateways including PayU, Stripe, HDFC and CCAvenue.",
  },
  {
    question: "How long does setup take?",
    answer: "[Answer to be written]",
  },
  {
    question: "What support do I get?",
    answer:
      "Every plan includes 24/7 human support on phone and email, plus guided onboarding, staff training and a dedicated account manager.",
  },
];
