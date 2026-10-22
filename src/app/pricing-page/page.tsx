import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { CompanyMarque } from '@/app/home/CompanyMarque';
import { Faq } from '@/app/home/Faq';
import { PricingHero } from './PricingHero';
import { Plans } from './Plans';
import { Included } from './Included';
import { Addons } from './Addons';
import { CompareTable } from './CompareTable';
import { RoiCalculator } from './RoiCalculator';
import { Results } from './Results';
import { PRICING_FAQS } from './data';

export const metadata: Metadata = {
  title: 'Pricing | Booking Jini',
  description:
    'Simple hotel software pricing with 0% commission on direct bookings. Compare Essential, Growth, Complete and Groups & Government plans.',
};

// All copy, prices and feature tables come from ./data.ts
export default function PricingPage() {
  return (
    <main className='w-full'>
      <PricingHero />
      <SectionDivider />
      <Plans />
      <SectionDivider />
      {/* Same logo marquee as the home page */}
      <CompanyMarque />
      <SectionDivider />
      <Included />
      <SectionDivider />
      <Addons />
      <SectionDivider />
      <CompareTable />
      <SectionDivider />
      <RoiCalculator />
      <SectionDivider />
      <Results />
      <SectionDivider />
      <Faq items={PRICING_FAQS} />
    </main>
  );
}
