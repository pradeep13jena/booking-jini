"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";

import { AnimatedButton } from "@/components/AnimatedButton";
import { cn } from "@/lib/utils";
import { Placeholder } from "./Placeholder";
import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

export type FaqItem = { question: string; answer: ReactNode };

const FAQS: FaqItem[] = [
  {
    question: "Can Bookingjini work with my existing hotel systems?",
    answer: (
      <>
        <p>
          Yes. Bookingjini is designed to work seamlessly with your existing
          hotel technology ecosystem. We are integrated with leading PMS
          platforms such as IDS, WINHMS, Exceed, Hotelogix, Lucid, as well as
          several local and regional PMS solutions. We also support integrations
          with major payment gateways, including PayU, Airpay, Stripe, HDFC,
          CCAvenue, Worldline, Axis Bank, and many more.
        </p>
        <p>
          If you are already using a third-party booking engine such as
          Simplotel, integration with Bookingjini can also be explored based on
          your specific requirements.
        </p>
        <p>
          At the same time, Bookingjini is an all-in-one hotel technology
          solution, offering Booking Engine, Channel Manager, PMS, and other
          solutions within a single platform. So, you can either use Bookingjini
          as your complete hotel technology stack or integrate individual
          Bookingjini solutions with your existing PMS, payment gateway, or
          other hotel systems.
        </p>
        <p>
          Our team can assess your existing setup and recommend the best
          integration approach for your property.
        </p>
      </>
    ),
  },
  {
    question: "Which Bookingjini products do I need?",
    answer: (
      <>
        <p>
          For most hotels, the answer is all of them. Bookingjini is an all-in-one
          platform with 32 connected products across four groups: Sell Direct,
          Distribute, Manage, and Retain.
        </p>
        <p>
          Sell Direct includes the booking engine and website. Distribute
          includes the channel manager and revenue management. Manage covers
          PMS, POS, and payments, while Retain includes guest CRM and reviews.
        </p>
        <p>
          A booking on any channel instantly updates your rooms, rates, billing,
          and guest profile. That means no double entry, no juggling multiple
          vendors, and one login for your entire team.
        </p>
        <p>
          If you'd rather start small, the Booking Engine and Channel Manager
          are a good first step. You can add the rest anytime, and our team can
          help you choose the right combination for your property.
        </p>
      </>
    ),
  },
  {
    question: "Can Bookingjini support multiple properties?",
    answer: (
      <>
        <p>
          Yes. Bookingjini works for single hotels, chains with 40+ properties,
          and state tourism corporations.
        </p>
        <p>
          You can manage rates, inventory, reservations, and reports for every
          property from one dashboard, while each property maintains its own
          settings and staff access.
        </p>
        <p>
          Groups also get a Central Reservation System (CRS), allowing guests
          to search and book across all your properties, along with portfolio
          reporting and a dedicated account manager.
        </p>
      </>
    ),
  },
  {
    question: "Is support available after onboarding?",
    answer: (
      <>
        <p>
          Yes. Every customer gets human support by phone and email. You also
          have access to self-help resources within the Bookingjini extranet.
        </p>
        <p>
          These include FAQs, a chatbot that answers common questions instantly,
          our help centre, and video tutorials.
        </p>
        <p>
          Your account manager checks in regularly, helps you make the most of
          new features, and can train new staff at no extra cost. Product
          updates are always included.
        </p>
      </>
    ),
  },
  {
    question: "How does the free trial work?",
    answer: (
      <>
        <p>
          You can try Bookingjini free for 7 days. Our team sets up your account
          and connects your channels, so you can experience real results with
          your own property rather than a demo.
        </p>
        <p>
          No credit card is needed. When the trial ends, you can choose a plan
          or walk away. There's no lock-in and no automatic charge.
        </p>
      </>
    ),
  },
];

// `items` lets other pages reuse this section with their own questions;
// `font="heading"` sets the title and questions in Urbanist semibold (Contact page design)
export function Faq({ items = FAQS, font = "sans" }: { items?: FaqItem[]; font?: "sans" | "heading" }) {
  const heading = font === "heading";
  // Single-open accordion; first question expanded by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <section className="w-full">
      <div className="container grid grid-cols-1 gap-10 px-6 py-16 md:py-20 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* Left column stays in view while the answers scroll */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            badge="FAQs"
            font={font}
            weight="semibold"
            title="Frequently Asked Questions"
            description="From setup to support, here are the answers you need to launch faster with confidence."
          />
          <Reveal index={1} className="mt-8">
            <AnimatedButton
              text="Get Started"
              href="/contact"
              colorDirection="left"
              className="font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.35)]"
            />
          </Reveal>
        </div>

        <ul className="flex flex-col gap-3">
          {items.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;

            return (
              <Reveal
                as="li"
                key={question}
                index={i}
                className="rounded-2xl border border-black/5 bg-white/60"
              >
                <h3 className={heading ? "font-heading" : "font-sans"}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[#1E0D01]",
                      heading ? "text-base font-semibold md:text-lg" : "text-sm font-medium md:text-base"
                    )}
                  >
                    {question}
                    <LuChevronDown
                      aria-hidden
                      className={cn(
                        "h-4 w-4 shrink-0 text-[#1E0D01]/60 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-[#1E0D01]/60">
                        {typeof answer === "string" ? <p>{answer}</p> : answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
