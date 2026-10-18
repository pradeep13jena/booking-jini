import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { StatCards } from '@/components/reusable/StatCards';
import { CaseStudiesHero } from './CaseStudiesHero';
import { IndependentHotels } from './IndependentHotels';
import { GovernmentPartners } from './GovernmentPartners';
import { RESULT_STATS } from './data';

export const metadata: Metadata = {
  title: 'Customer Case Studies | Booking Jini',
  description:
    'From independent hotels to state tourism boards, 9,300+ properties use Bookingjini to win more direct bookings and pay less commission.',
};

export default function CustomerCaseStudiesPage() {
  return (
    <main className='w-full'>
      <CaseStudiesHero />
      <SectionDivider />
      <StatCards stats={RESULT_STATS} />
      <SectionDivider />
      <IndependentHotels />
      <SectionDivider />
      <GovernmentPartners />
    </main>
  );
}
