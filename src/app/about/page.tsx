import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { HowItWorks } from '@/app/home/HowItWorks';
import { AboutHero } from './AboutHero';
import { AboutStats } from './AboutStats';
import { OurStory } from './OurStory';
import { Mission } from './Mission';
import { Values } from './Values';
import { GovernmentTrust } from './GovernmentTrust';
import { Founder } from './Founder';
import { Leadership } from './Leadership';
import { Investors } from './Investors';
import { Headquarters } from './Headquarters';
import { CareersPress } from './CareersPress';

export const metadata: Metadata = {
  title: 'About Us | Booking Jini',
  description:
    'Bookingjini is a Bhubaneswar-based hotel technology company helping independent hotels sell direct and run operations from one connected platform.',
};

export default function AboutPage() {
  return (
    <main className='w-full'>
      <AboutHero />
      <SectionDivider />
      <AboutStats />
      <SectionDivider />
      <OurStory />
      <SectionDivider />
      <Mission />
      <SectionDivider />
      <Values />
      <SectionDivider />
      <GovernmentTrust />
      <SectionDivider />
      <Founder />
      <SectionDivider />
      <Leadership />
      <SectionDivider />
      <Investors />
      <SectionDivider />
      <Headquarters />
      <SectionDivider />
      <CareersPress />
      <SectionDivider />
      {/* Same steps section as the home page */}
      <HowItWorks />
    </main>
  );
}
