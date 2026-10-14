import Image from "next/image";

import { AnimatedButton } from "@/components/AnimatedButton";
import { Reveal } from "@/components/reusable/Reveal";
import { DUMMY } from "./dummy-images";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Warm glow sitting behind the headline row */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_25%,rgba(255,196,170,0.35),transparent_70%)]"
      />

      <div className="container relative px-6 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end md:gap-12">
          <Reveal>
            <span className="text-sm font-medium text-primary">About Bookingjini</span>
            <h1 className="mt-3 font-heading text-5xl leading-[1.05] font-medium tracking-tight text-[#1E0D01] md:text-6xl">
              Built so hotels
              <br />
              keep what they
              <br />
              <span className="bg-linear-to-b from-[#FF9A3D] to-primary bg-clip-text text-transparent">earn.</span>
            </h1>
          </Reveal>

          <Reveal index={1}>
            <p className="text-sm leading-relaxed text-[#1E0D01]/70 md:text-base">
              We started Bookingjini in Bhubaneswar with one belief: a hotel should not have to give away a third of its
              room rate to fill a room. Today 9,300+ hotels across India and South Asia use our platform to sell direct,
              run operations and grow profit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AnimatedButton
                text="Read our story"
                href="#our-story"
                colorDirection="left"
                className="font-semibold shadow-[0_10px_28px_rgba(249,115,22,0.3)]"
              />
              <AnimatedButton text="Book a Demo" href="/contact" className="font-semibold" />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 md:mt-12 md:grid-cols-[3fr_2fr]">
          <Reveal index={2} className="group relative aspect-3/2 overflow-hidden rounded-2xl">
            <Image
              src={DUMMY.heroTeam}
              alt="The Bookingjini team at the Bhubaneswar office"
              fill
              priority
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal index={3} className="group relative aspect-3/2 overflow-hidden rounded-2xl md:aspect-auto">
            <Image
              src={DUMMY.heroWork}
              alt="A Bookingjini team member at work"
              fill
              priority
              sizes="(min-width: 768px) 460px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
