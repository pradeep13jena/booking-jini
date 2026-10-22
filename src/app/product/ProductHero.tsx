"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaRegSmile } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

import { HERO_AVATARS, HERO_IMAGE, HERO_STATS } from "./data";

const EASE = [0.65, 0, 0.35, 1] as const;

// Same left-to-right wipe as the home hero; negative inset keeps descenders visible
const lineVariants: Variants = {
  hidden: { clipPath: "inset(-20% 100% -20% 0%)" },
  visible: (i: number) => ({
    clipPath: "inset(-20% 0% -20% 0%)",
    transition: { duration: 0.9, delay: 0.15 + i * 0.45, ease: EASE },
  }),
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }),
};

// Supporting content starts as the second headline line finishes
const CONTENT_DELAY = 1.1;

export function ProductHero() {
  const initial = useReducedMotion() ? false : "hidden";

  return (
    <section className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_20%,rgba(255,196,196,0.35),transparent_70%)]"
      />

      <div className="container relative flex flex-col items-center px-6 pt-14 pb-16 text-center md:pt-20 md:pb-20">
        <motion.span
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1E0D01] backdrop-blur-sm"
        >
          <FaRegSmile className="h-4 w-4 text-primary" />
          The Bookingjini platform
        </motion.span>

        <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#1E0D01] md:text-6xl">
          <motion.span variants={lineVariants} initial={initial} animate="visible" custom={0} className="block">
            One platform.
          </motion.span>
          <motion.span variants={lineVariants} initial={initial} animate="visible" custom={1} className="block">
            Everything your hotel{" "}
            <span className="bg-linear-to-b from-[#FFB347] to-primary bg-clip-text text-transparent">runs</span> on.
          </motion.span>
        </h1>

        <motion.p
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={CONTENT_DELAY}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#1E0D01]/60 md:text-lg"
        >
          32 connected products to sell direct, distribute, manage and retain. Start with one. Grow into all of them.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={CONTENT_DELAY + 0.1}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#1E0D01] py-2 pr-2 pl-5 text-base font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_28px_rgba(30,13,1,0.25)] active:scale-[0.98]"
          >
            Book a Demo
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#1E0D01] transition-transform duration-300 group-hover:-rotate-45">
              <LuArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="#explore"
            className="rounded-full border border-[#1E0D01]/20 bg-white/60 px-6 py-3 text-base font-semibold text-[#1E0D01] transition-colors duration-300 hover:border-[#1E0D01] hover:bg-white"
          >
            Explore all products
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial={initial}
          animate="visible"
          custom={CONTENT_DELAY + 0.2}
          className="mt-12 inline-flex flex-wrap items-center justify-center gap-y-2 rounded-full border border-black/5 bg-white/70 py-1.5 pr-4 pl-1.5 text-sm text-[#1E0D01]/70"
        >
          <span className="mr-3 flex -space-x-2">
            {HERO_AVATARS.map((src) => (
              <Image key={src} src={src} alt="" width={32} height={32} className="size-7 rounded-full border-2 border-white object-cover" />
            ))}
          </span>
          {HERO_STATS.map((stat, i) => (
            <span key={stat.label} className={i > 0 ? "border-l border-black/10 pl-3 ml-3" : undefined}>
              <span className="font-semibold text-[#1E0D01]">{stat.value}</span> {stat.label}
            </span>
          ))}
        </motion.div>

        {/* Dashboard preview rises in last */}
        <motion.div
          initial={initial === false ? false : { opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: CONTENT_DELAY + 0.35, ease: EASE }}
          className="mt-10 w-full max-w-5xl rounded-3xl border border-white bg-white/70 p-2 shadow-[0_30px_80px_rgba(30,13,1,0.12)] md:p-3"
        >
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            width={HERO_IMAGE.width}
            height={HERO_IMAGE.height}
            priority
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
