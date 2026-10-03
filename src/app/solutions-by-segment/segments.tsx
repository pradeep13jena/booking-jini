import { AnimatedButton } from "@/components/AnimatedButton";
import type { Segment } from "./SegmentCard";
import { CabinBookingMockup, OpsHubMockup, PropertyMockup, TourismNetworkMockup } from "./SegmentMockups";

// Soft colour glows behind each visual
const GLOW_ORANGE_LAVENDER =
  "bg-[radial-gradient(circle_at_40%_45%,#FF7A2F_0%,rgba(255,170,120,0.6)_25%,transparent_55%),linear-gradient(135deg,#FCE9E4,#EDE7F6)]";
const GLOW_RED_PINK =
  "bg-[radial-gradient(circle_at_35%_30%,#FF4D1F_0%,rgba(255,140,110,0.5)_30%,transparent_60%),linear-gradient(160deg,#FFE4DC,#F6E8F5_60%,#FFFFFF)]";
const GLOW_PEACH_CORAL = "bg-[radial-gradient(circle_at_60%_60%,#FFE0D0_0%,transparent_50%),linear-gradient(135deg,#FFB38A,#FF7A59)]";

// First stack: independent and growing hotels
export const HOTEL_SEGMENTS: Segment[] = [
  {
    title: (
      <>
        More direct revenue.
        <br />
        Less complexity.
      </>
    ),
    description: "Get a 360° view of performance metrics, KPIs, and trends—all in one place",
    points: [
      "Grow direct bookings organically",
      "Reduce distribution commissions & costs",
      "Manage core operations from one platform",
      "Keep guest profiles & information connected",
      "Get customer support when needed",
    ],
    bestFor: "Typically 20–50 rooms",
    visual: <PropertyMockup />,
    panelClassName: GLOW_ORANGE_LAVENDER,
  },
  {
    title: "Replace disconnected tools with one system.",
    description:
      "As hotels expand, managing separate systems for bookings and operations becomes difficult. Bookingjini connects everything.",
    points: [
      "Replace fragmented and costly software",
      "Keep rates & inventories instantly connected",
      "Improve team-wide operational visibility",
      "Access clearer unified performance reporting",
      "Scale properties without adding technical debt",
    ],
    bestFor: "Typically 50–100 rooms",
    visual: <OpsHubMockup />,
    panelClassName: GLOW_RED_PINK,
    reverse: true,
  },
];

// Second stack: small operators and public bodies
export const OPERATOR_SEGMENTS: Segment[] = [
  {
    title: "Simple technology that is easy to run.",
    description: "Smaller properties need tech that saves time and reduces complexity.",
    points: [
      "Quick setup with zero-training requirements",
      "Easier booking and reservation management",
      "Accept website bookings with payment integration",
      "Connected availability calendars across channels",
      "Simple day-to-day operations dashboard",
    ],
    bestFor: "Homestays & small operators",
    visual: <CabinBookingMockup />,
    panelClassName: GLOW_PEACH_CORAL,
  },
  {
    title: "Hospitality technology built for scale.",
    description:
      "Bookingjini helps tourism organizations with visibility, accountability, and tech across property networks.",
    points: [
      "Support large property networks seamlessly",
      "Improve operational visibility for state bodies",
      "Create unified and consistent hospitality databases",
      "Access centralized destination insights and reports",
      "Already trusted and deployed by state-level bodies",
    ],
    cta: (
      <AnimatedButton
        text="Talk to our team"
        href="/contact"
        colorDirection="left"
        className="font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)]"
      />
    ),
    visual: <TourismNetworkMockup />,
    panelClassName: GLOW_RED_PINK,
    reverse: true,
  },
];
