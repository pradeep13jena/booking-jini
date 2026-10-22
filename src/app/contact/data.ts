import type { IconType } from "react-icons";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

// All content for the Contact page lives here, so copy / contact details / testimonials never touch the components.

/* ---------------------------------- Hero ---------------------------------- */

export const TRUSTPILOT = { label: "Excellent", score: "4.8", reviews: "920" };

/* ------------------------------ Contact info ------------------------------ */

// Who receives what — the form payload is addressed from here
export const CONTACT_RECIPIENTS = {
  sales: "hello@bookingjini.com",
  support: "support@bookingjini.com",
} as const;

export type Recipient = keyof typeof CONTACT_RECIPIENTS;

// Messages from the contact form go to this inbox
export const FORM_RECIPIENT: Recipient = "sales";

// `href` makes a line clickable (tel: / mailto: / maps link)
// TODO: phone numbers and address are the design's dummy values — replace with the real ones
export const CONTACT_INFO: { icon: IconType; title: string; lines: { label?: string; value: string; href?: string }[] }[] = [
  {
    icon: LuPhone,
    title: "Call information",
    lines: [
      { label: "Front Desk", value: "+1 234 567 8900", href: "tel:+12345678900" },
      { label: "Sales", value: "+1 987 654 3210", href: "tel:+19876543210" },
    ],
  },
  {
    icon: LuMail,
    title: "Email information",
    lines: [
      { label: "Sales", value: CONTACT_RECIPIENTS.sales, href: `mailto:${CONTACT_RECIPIENTS.sales}` },
      { label: "Support", value: CONTACT_RECIPIENTS.support, href: `mailto:${CONTACT_RECIPIENTS.support}` },
    ],
  },
  {
    icon: LuMapPin,
    title: "Office address",
    lines: [{ value: "90 Financial Street, Suite 304, San Francisco, CA 94105, USA" }],
  },
];

/* -------------------------------- Form ------------------------------------ */

export type ContactForm = { fullName: string; email: string; phone: string; message: string };

export const FORM_FIELDS: {
  name: keyof ContactForm;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  autoComplete?: string;
  // Spans both columns on desktop
  wide?: boolean;
}[] = [
  { name: "fullName", label: "Full Name", placeholder: "Enter your name", type: "text", required: true, autoComplete: "name" },
  { name: "email", label: "Email", placeholder: "Enter your email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone number", placeholder: "Enter your number", type: "tel", autoComplete: "tel", wide: true },
  { name: "message", label: "Message", placeholder: "Type your message here", type: "textarea", required: true, wide: true },
];

/* ------------------------------ Testimonials ------------------------------ */

// TEMP: picsum placeholders (host allowed in next.config.ts) — swap for static imports of real photos
const avatar = (seed: string) => `https://picsum.photos/seed/${seed}/120/120`;

export type Testimonial = { name: string; meta: string; avatar: string; rating: number; quote: string };

// Entries after the first three are dummy fillers so the carousel has something to slide to
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Weekend Address",
    meta: "Surat | India",
    avatar: avatar("bj-weekend-address"),
    rating: 5,
    quote:
      "I have worked with many different channel managers in my career and Bookingjini is amongst one of them which I always recommended to others.",
  },
  {
    name: "Anamika Gupta",
    meta: "Hotel Mistywoods",
    avatar: avatar("bj-mistywoods"),
    rating: 5,
    quote:
      "Every step of the way they provided helpful advice, recommended strategies to ensure our website was optimally set up, and made sure every element was clear and concise.",
  },
  {
    name: "Himalayan Retreat",
    meta: "Himalayan Retreat",
    avatar: avatar("bj-himalayan"),
    rating: 5,
    quote:
      "Bookingjini team is really doing a great job. They are always ready to help us out with any issue. Their softwares are very easy and handy.",
  },
  {
    name: "Sea Breeze Resort",
    meta: "Puri | India",
    avatar: avatar("bj-sea-breeze"),
    rating: 5,
    quote:
      "Our direct bookings doubled within a season. The booking engine is simple for guests and the reports finally show us what we actually earn.",
  },
  {
    name: "Rohan Mehta",
    meta: "The Grand Radiant",
    avatar: avatar("bj-grand-radiant"),
    rating: 5,
    quote:
      "Rate updates that used to take our team hours now happen in minutes across every OTA. Onboarding was quick and the training was hands-on.",
  },
  {
    name: "Lakeview Homestay",
    meta: "Shimla | India",
    avatar: avatar("bj-lakeview"),
    rating: 5,
    quote:
      "As a small property we needed something easy. Support picked up at 2 am when our payment link failed and fixed it on the call.",
  },
];

/* ---------------------------------- FAQs ---------------------------------- */

export const CONTACT_FAQS: { question: string; answer: string }[] = [
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
      "Every plan includes 24/7 human support on phone and email, plus free onboarding, data migration and staff training.",
  },
];
