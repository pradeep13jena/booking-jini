import { FaStar } from "react-icons/fa";

import { Reveal } from "@/components/reusable/Reveal";
import { ContactForm } from "./ContactForm";
import { CONTACT_INFO, TRUSTPILOT } from "./data";

// Trustpilot-style rating: five green tiles with white stars
function Rating() {
  return (
    <div className="flex flex-col items-center gap-2 text-[#1E0D01]">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {TRUSTPILOT.label}
        <span className="flex gap-0.5" role="img" aria-label={`Rated ${TRUSTPILOT.score} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="flex size-5 items-center justify-center bg-[#00B67A] text-white">
              <FaStar className="h-3 w-3" />
            </span>
          ))}
        </span>
      </div>
      <p className="text-xs md:text-sm">
        Trustpilot Score {TRUSTPILOT.score} | {TRUSTPILOT.reviews} reviews
      </p>
    </div>
  );
}

export function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Soft pink glow, matching the other page heroes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(255,196,196,0.35),transparent_70%)]"
      />

      <div className="container relative px-6 pt-12 pb-16 md:pt-16 md:pb-20">
        <Reveal className="flex flex-col items-center text-center">
          <Rating />
          <h1 className="mt-5 font-heading text-4xl leading-tight font-medium tracking-tight text-[#1E0D01] md:text-6xl">
            Get in touch with BookingJini
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#1E0D01]/60 md:text-base">
            Running a hotel is challenging, but with Bookingjini, focus on exceptional service while we handle the
            rest. Try our software to transform operations.
          </p>
        </Reveal>

        <Reveal index={1} className="mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-1 gap-4 rounded-4xl border border-white bg-white/50 p-3 shadow-[0_4px_24px_rgba(30,13,1,0.05)] backdrop-blur-sm md:grid-cols-[2fr_3fr] md:p-4">
            <ul className="flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, title, lines }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  index={i + 2}
                  from="left"
                  className="group flex gap-4 rounded-2xl border border-black/5 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(249,117,24,0.1)]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F5F5] text-[#1E0D01] transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-sans text-base font-medium text-[#1E0D01]">{title}</h2>
                    <ul className="mt-3 space-y-2 text-sm text-[#1E0D01]/70">
                      {lines.map((line) => {
                        const content = (
                          <>
                            {line.label && `${line.label}: `}
                            {line.value}
                          </>
                        );
                        return (
                          <li key={line.value} className="break-words">
                            {line.href ? (
                              <a href={line.href} className="transition-colors duration-200 hover:text-primary">
                                {content}
                              </a>
                            ) : (
                              content
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
