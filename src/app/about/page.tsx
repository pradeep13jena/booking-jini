import type { Metadata } from "next";

import { SectionDivider } from "@/components/layout/SectionDivider";
import { HowItWorks } from "@/app/home/HowItWorks";
import { AboutHero } from "./AboutHero";
import { AboutStats } from "./AboutStats";
import { OurStory } from "./OurStory";
import { Mission } from "./Mission";
import { Values } from "./Values";
import { GovernmentTrust } from "./GovernmentTrust";
import { Founder } from "./Founder";
import { Leadership, LEADERS, TOP_LEADERS } from "./Leadership";
import { Investors } from "./Investors";
import { Headquarters } from "./Headquarters";
import { CareersPress } from "./CareersPress";
import { MissionVisionValues } from "./MissionVisionValues";
import { CtaBanner } from "@/components/reusable/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Booking Jini",
  description:
    "Bookingjini is a Bhubaneswar-based hotel technology company helping independent hotels sell direct and run operations from one connected platform.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <AboutHero />
      <SectionDivider />
      <AboutStats />
      <SectionDivider />
      <OurStory />
      <SectionDivider />
      <Mission />
      <SectionDivider />
      {/* <Values /> */}
      {/* <SectionDivider /> */}
      {/* <GovernmentTrust /> */}
      <SectionDivider />
      <Founder />
      <SectionDivider />
      <Leadership
        leaders={TOP_LEADERS}
        badge="Board of directors"
        title="Governance you can rely on"
        description="Bookingjini Labs Private Limited is a registered Indian company, incorporated in Odisha in January 2017."
      />
      <SectionDivider />
      <Investors />
      <SectionDivider />
      <Leadership
        leaders={LEADERS}
        badge="Key leadership"
        title={
          <>
            The team running
            <br />
            Bookingjini every day
          </>
        }
        description="The people leading sales, operations, technology and customer growth for 9,300+ hotels."
      />
      {/* <SectionDivider /> */}
      {/* <Headquarters /> */}
      <SectionDivider />
      <MissionVisionValues />
      <SectionDivider />
      <CareersPress />
      {/* <SectionDivider /> */}
      {/* Same steps section as the home page */}
      {/* <HowItWorks /> */}
      <SectionDivider />
      <CtaBanner
        title="Join 9,300+ hotels keeping more of every booking."
        description="In 20 minutes we'll show you real numbers for your hotel. No obligation."
        secondary={{ text: "Talk to our team", href: "/contact" }}
        font="heading"
      />
    </main>
  );
}
