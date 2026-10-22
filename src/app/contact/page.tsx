import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { Faq } from '@/app/home/Faq';
import { ContactHero } from './ContactHero';
import { Testimonials } from './Testimonials';
import { CONTACT_FAQS } from './data';

export const metadata: Metadata = {
  title: 'Contact | Booking Jini',
  description:
    'Talk to the Bookingjini team about direct bookings, channel management and hotel operations. Call, email or send us a message.',
};

// All copy, contact details and testimonials come from ./data.ts
export default function ContactPage() {
  return (
    <main className='w-full'>
      <ContactHero />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Faq items={CONTACT_FAQS} font='heading' />
    </main>
  );
}
