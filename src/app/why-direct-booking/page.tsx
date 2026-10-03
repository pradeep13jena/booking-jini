import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { Platform } from '@/components/reusable/Platform';
import { DirectHero } from './DirectHero';
import { OtaCostCompare } from './OtaCostCompare';
import { WhyDirectMatters } from './WhyDirectMatters';
import { DirectStrategy } from './DirectStrategy';
import { HotelReach } from './HotelReach';

export const metadata: Metadata = {
  title: 'Why Direct Booking | Booking Jini',
  description:
    'OTA commissions of 15–25% cut into hotel profits. See how a direct booking channel helps hotels keep more revenue and own the guest relationship.',
};

export default function WhyDirectBookingPage() {
  return (
    <main className='w-full'>
      <DirectHero />
      <SectionDivider />
      <OtaCostCompare />
      <SectionDivider />
      <WhyDirectMatters />
      <SectionDivider />
      <DirectStrategy />
      <SectionDivider />
      {/* Same product grid as the home page */}
      <Platform />
      <SectionDivider />
      <HotelReach />
    </main>
  );
}
