import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { Platform } from '../home/Platform';
import { AboutHero } from './AboutHero';
import { OurStory } from './OurStory';
import { MissionVision } from './MissionVision';
import { CoreTeam } from './CoreTeam';
import { GrowthStats } from './GrowthStats';
import { WhoWeServe } from './WhoWeServe';
import { LeadershipExperience } from './LeadershipExperience';
import { HumanSupport } from './HumanSupport';

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
      <OurStory />
      <SectionDivider />
      <MissionVision />
      <SectionDivider />
      <CoreTeam />
      <SectionDivider />
      {/* Same product grid as the home page */}
      <Platform />
      <SectionDivider />
      <GrowthStats />
      <SectionDivider />
      <WhoWeServe />
      <SectionDivider />
      <LeadershipExperience />
      <SectionDivider />
      <HumanSupport />
    </main>
  );
}
