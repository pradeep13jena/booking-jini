import Image from "next/image";
import Link from "next/link";

import { AnimatedButton } from "@/components/AnimatedButton";
import { cn } from "@/lib/utils";
import { holidayResort, radhika, sayeman, seagull, triton } from "@/lib/image";
import { Reveal } from "./Reveal";

type CtaLink = { text: string; href: string };

type CtaBannerProps = {
  // "orange": centred card on the orange swoosh; "dark": left-aligned card with the hotel-logo proof card
  variant?: "orange" | "dark";
  title: string;
  // Trailing words of the title painted orange (dark variant only), e.g. "story."
  accent?: string;
  description: string;
  primary?: CtaLink;
  secondary?: CtaLink;
  // Orange title typeface — "sans" (Inter) on Home/Contact, "heading" (Urbanist) on About
  font?: "sans" | "heading";
};

const DEFAULT_PRIMARY: CtaLink = { text: "Get My Free Revenue Check", href: "/contact" };

// Customer logos stacked in the dark variant's proof card
const PROOF_LOGOS = [
  { src: sayeman, alt: "Sayeman Beach Resort" },
  { src: holidayResort, alt: "Holiday Resort Puri" },
  { src: triton, alt: "Hotel Triton" },
  { src: radhika, alt: "Radhika Beach Resort & Spa" },
  { src: seagull, alt: "Seagull Hotels" },
];

// Closing call-to-action, placed as the last section of a page (just above </main>)
export function CtaBanner({
  variant = "orange",
  title,
  accent,
  description,
  primary = DEFAULT_PRIMARY,
  secondary,
  font = "sans",
}: CtaBannerProps) {
  return (
    <section className="w-full">
      <div className="container px-6 py-16 md:py-20">
        <Reveal>
          {variant === "dark" ? (
            <DarkCard title={title} accent={accent} description={description} primary={primary} secondary={secondary} />
          ) : (
            <OrangeCard title={title} description={description} primary={primary} secondary={secondary} font={font} />
          )}
        </Reveal>
      </div>
    </section>
  );
}

function OrangeCard({
  title,
  description,
  primary,
  secondary,
  font,
}: Pick<CtaBannerProps, "title" | "description" | "secondary" | "font"> & { primary: CtaLink }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#FF8A00] via-[#FF9900] to-[#FF9D00] px-6 py-16 text-center text-white md:py-24">
      {/* Swooshes: oversized ellipses anchored bottom-left, each a slightly deeper orange */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute -bottom-[60%] -left-[45%] h-[220%] w-[90%] rounded-[50%] bg-[#FF9200]/60" />
        <span className="absolute -bottom-[60%] -left-[40%] h-[220%] w-[70%] rounded-[50%] bg-[#FF8400]/70" />
        <span className="absolute -bottom-[60%] -left-[35%] h-[220%] w-[50%] rounded-[50%] bg-[#FF7500]/80" />
        <span className="absolute -bottom-[60%] -left-[30%] h-[220%] w-[35%] rounded-[50%] bg-[#FF6500]" />
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center">
        <h2
          className={cn(
            "text-3xl tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight",
            font === "heading" ? "font-heading font-medium" : "font-sans font-semibold"
          )}
        >
          {title}
        </h2>
        <p className="mt-4 max-w-xl font-heading text-sm font-medium text-white/95 md:text-base">{description}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-heading">
          <AnimatedButton text={primary.text} href={primary.href} className="font-semibold" />
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-full bg-[#F86F15] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(200,70,0,0.35)] transition-colors duration-300 hover:bg-[#1E0D01]"
            >
              {secondary.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function DarkCard({
  title,
  accent,
  description,
  primary,
  secondary,
}: Pick<CtaBannerProps, "title" | "accent" | "description" | "secondary"> & { primary: CtaLink }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#1E1410] px-6 py-14 text-white md:px-14 md:py-20">
      {/* Warm glows in the top-left and bottom-right corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_35%_45%_at_15%_0%,rgba(200,85,20,0.75)_0%,transparent_70%),radial-gradient(ellipse_30%_40%_at_100%_100%,rgba(200,85,20,0.55)_0%,transparent_70%)]"
      />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
            {title}
            {accent && <span className="text-[#FF8A3D]"> {accent}</span>}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 md:text-base">{description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <AnimatedButton
              text={primary.text}
              href={primary.href}
              colorDirection="left"
              className="px-6 py-3 font-semibold shadow-[0_10px_30px_rgba(249,117,24,0.45)]"
            />
            {secondary && (
              <Link
                href={secondary.href}
                className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#1E0D01]"
              >
                {secondary.text}
              </Link>
            )}
          </div>
        </div>

        {/* Social-proof card */}
        <div className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <div className="flex -space-x-2">
            {PROOF_LOGOS.map((logo) => (
              <span
                key={logo.alt}
                className="flex size-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#1E1410] bg-white p-1.5"
              >
                <Image src={logo.src} alt={logo.alt} className="max-h-full w-auto object-contain" />
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/70">Join 9,300+ hotels already growing direct bookings.</p>
        </div>
      </div>
    </div>
  );
}
