import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { Hero } from './home/Hero';
import { HERO_CONTENT_DELAY } from './home/timing';
import { StatsStrip } from './home/StatsStrip';
import { CompanyMarque } from './home/CompanyMarque';
import { ProfitLeak } from './home/ProfitLeak';
import { Outcomes } from './home/Outcomes';
import { CommissionCalculator } from './home/CommissionCalculator';
import { CaseStudies } from './home/CaseStudies';
import { TrustGrid } from './home/TrustGrid';
import { RoleStack } from './home/RoleStack';
import { HowItWorks } from './home/HowItWorks';
import { Platform } from '@/components/reusable/Platform';
import { Faq } from './home/Faq';
import { CtaBanner } from '@/components/reusable/CtaBanner';

export const metadata: Metadata = {
  title: 'Home | Booking Jini',
  description: 'Welcome to our platform. Learn more about our direct booking and management solutions.',
};

export default function HomePage() {
  return (
    <main className='w-full'>
      <Hero />
      <SectionDivider />
      {/* Appears right after the hero's CTA row */}
      <StatsStrip delay={HERO_CONTENT_DELAY + 0.4} />
      <SectionDivider />
      <CompanyMarque />
      <SectionDivider />
      <ProfitLeak />
      <SectionDivider />
      <Outcomes />
      <SectionDivider />
      <CommissionCalculator />
      <SectionDivider />
      <CaseStudies />
      <SectionDivider />
      <TrustGrid />
      <SectionDivider />
      <RoleStack />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <Platform />
      <SectionDivider />
      <Faq />
      <SectionDivider />
      <CtaBanner
        title='Find out how much commission you could keep.'
        description="In 20 minutes we'll show you real numbers for your hotel. No obligation."
        secondary={{ text: 'Talk to our team', href: '/contact' }}
      />
    </main>
  );
}
