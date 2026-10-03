import Image from "next/image";

import { AnimatedButton } from "@/components/AnimatedButton";
import { Reveal } from "@/components/reusable/Reveal";
import { DUMMY } from "./dummy-images";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Same warm glow as the home hero, sitting behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_25%,rgba(255,196,196,0.35),transparent_70%)]"
      />

      <div className="container relative flex flex-col items-center px-6 pt-12 pb-16 text-center md:pt-16 md:pb-20">
        <Reveal className="flex flex-col items-center">
          <span className="text-sm font-medium text-primary">About Us</span>
          <h1 className="mt-3 font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#1E0D01] md:text-6xl">
            Discover the Story
            <br />
            Behind Our Success
          </h1>
          <AnimatedButton
            text="Contact Us"
            href="/contact"
            colorDirection="left"
            className="mt-6 font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)]"
          />
        </Reveal>

        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-3 md:mt-16 md:grid-cols-[3fr_2fr]">
          <Reveal index={1} className="relative aspect-3/2 overflow-hidden rounded-2xl">
            <Image
              src={DUMMY.heroTeam}
              alt="The Bookingjini team at the Bhubaneswar office"
              fill
              priority
              sizes="(min-width: 768px) 600px, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal index={2} className="relative aspect-3/2 overflow-hidden rounded-2xl md:aspect-auto">
            <Image
              src={DUMMY.heroWork}
              alt="A Bookingjini team member at work"
              fill
              priority
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
