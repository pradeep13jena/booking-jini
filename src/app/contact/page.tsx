import type { Metadata } from 'next';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { Faq } from '@/app/home/Faq';
import { ContactHero } from './ContactHero';
import { Testimonials } from './Testimonials';
import { CONTACT_FAQS } from './data';
import { CtaBanner } from '@/components/reusable/CtaBanner';

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
      <SectionDivider />
      {/* Already on Contact, so the CTA jumps back up to the form */}
      <CtaBanner
        title='Ready to see Bookingjini in action?'
        description='See how one connected platform can help your hotel grow direct bookings, simplify operations and keep more control of the business.'
        primary={{ text: 'Book a demo', href: '#contact-form' }}
      />
    </main>
  );
}
