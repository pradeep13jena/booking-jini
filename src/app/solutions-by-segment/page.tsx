
import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { Platform } from '@/components/reusable/Platform';
import { SegmentHero } from './SegmentHero';
import { SegmentStack } from './SegmentStack';
import { HOTEL_SEGMENTS, OPERATOR_SEGMENTS } from './segments';
import { HotelGroups } from './HotelGroups';
import { StatsBand } from '@/components/reusable/StatsBand';
import { GrowthPath } from './GrowthPath';

export const metadata: Metadata = {
  title: 'Solutions by Segment | Booking Jini',
  description:
    'One connected platform for independent hotels, growing properties, hotel groups, homestays and tourism boards to sell, manage and grow.',
};

export default function SolutionsBySegmentPage() {
  return (
    <main className='w-full'>
      <SegmentHero />
      <SectionDivider />
      <SegmentStack segments={HOTEL_SEGMENTS} />
      <SectionDivider />
      <HotelGroups />
      <SectionDivider />
      <SegmentStack segments={OPERATOR_SEGMENTS} />
      <SectionDivider />
      <Platform cta={{ text: 'Explore the platform', href: '/products' }} />
      <SectionDivider />
      <StatsBand />
      <SectionDivider />
      <GrowthPath />
    </main>
  );
}
