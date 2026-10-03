"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";

import { AnimatedButton } from "@/components/AnimatedButton";
import { cn } from "@/lib/utils";
import { Placeholder } from "./Placeholder";
import { Reveal } from "@/components/reusable/Reveal";
import { SectionHeading } from "@/components/reusable/SectionHeading";

const FAQS: { question: string; answer: ReactNode }[] = [
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
    answer: <Placeholder>[Answer to be written]</Placeholder>,
  },
  {
    question: "Can Bookingjini support multiple properties?",
    answer: <Placeholder>[Answer to be written]</Placeholder>,
  },
  {
    question: "Is support available after onboarding?",
    answer: <Placeholder>[Answer to be written]</Placeholder>,
  },
  {
    question: "How does the free trial work?",
    answer: <Placeholder>[Answer to be written]</Placeholder>,
  },
];

export function Faq() {
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
          {FAQS.map(({ question, answer }, i) => {
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
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#1E0D01] md:text-base"
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
                        {answer}
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
