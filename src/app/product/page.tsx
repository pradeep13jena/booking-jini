import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { Faq } from '@/app/home/Faq';
import { Results } from '@/app/pricing-page/Results';
import { ProductHero } from './ProductHero';
import { ExplorePlatform } from './ExplorePlatform';
import { HubDiagram } from './HubDiagram';
import { PillarSections } from './PillarSections';
import { BuiltFor } from './BuiltFor';
import { Foundation } from './Foundation';
import { PRODUCT_FAQS } from './data';
import { CtaBanner } from '@/components/reusable/CtaBanner';

export const metadata: Metadata = {
  title: 'Products | Booking Jini',
  description:
    '32 connected hotel products to sell direct, distribute, manage and retain: booking engine, channel manager, PMS, POS, payments and guest CRM on one platform.',
};

// All copy, pillars and products come from ./data.ts
export default function ProductPage() {
  return (
    <main className='w-full'>
      <ProductHero />
      <SectionDivider />
      <ExplorePlatform />
      <SectionDivider />
      <HubDiagram />
      <SectionDivider />
      <PillarSections />
      <SectionDivider />
      <BuiltFor />
      <SectionDivider />
      <Foundation />
      <SectionDivider />
      {/* Same result cards as the Pricing page */}
      <Results
        title={
          <>
            What hotels achieve
            <br />
            on Bookingjini
          </>
        }
        align='left'
        footer='story'
      />
      <SectionDivider />
      <Faq items={PRODUCT_FAQS} font='heading' />
      <SectionDivider />
      <CtaBanner
        variant='dark'
        title='See the whole platform working for your'
        accent='hotel.'
        description="In 20 minutes we'll show you how much you could save on commission and time. No obligation."
        secondary={{ text: 'Book a Demo', href: '/contact' }}
      />
    </main>
  );
}
