import type { Metadata } from 'next';
import { LuCalendarX, LuCircleDollarSign, LuClipboardList, LuClock, LuZap } from 'react-icons/lu';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { ControlRoomSection } from '@/components/reusable/ControlRoomSection';
import { HumanSupport } from '@/components/reusable/HumanSupport';
import { IconCardGrid, type IconCard } from '@/components/reusable/IconCardGrid';
import { Platform } from '@/components/reusable/Platform';
import { SplitHero } from '@/components/reusable/SplitHero';
import { StatsBand } from '@/components/reusable/StatsBand';
import { ChannelSyncVisual } from './ChannelSyncVisual';
import { DistributionDashboard } from './DistributionDashboard';

export const metadata: Metadata = {
  title: 'Channel Manager | Booking Jini',
  description:
    'Sync rates, availability and inventory across 300+ OTAs and distribution channels in real time. One update, every connected channel, no overbookings.',
};

const BENEFITS: IconCard[] = [
  {
    icon: LuClipboardList,
    title: 'Keep inventory synchronized',
    description: 'Adjust rooms in real-time. One booking immediately updates all connected platforms to prevent double bookings.',
  },
  {
    icon: LuCircleDollarSign,
    title: 'Update rates centrally',
    description: 'Modify seasonal pricing, discounts, and room types from one interface. Push rate updates in seconds.',
  },
  {
    icon: LuCalendarX,
    title: 'Reduce overbooking risk',
    description: 'Automated direct sync keeps distribution pools accurate even during high-demand holidays.',
  },
  {
    icon: LuClock,
    title: 'Save operational time',
    description: 'Free up your front desk to focus on guest hospitality instead of manual channel data entry.',
  },
];

export default function ChannelManagerPage() {
  return (
    <main className='w-full'>
      <SplitHero
        title={
          <>
            Sell everywhere.
            <br />
            Stay in control.
          </>
        }
        description='Instantly sync rates, availability, and inventory across 300+ OTAs and distribution channels in real-time. Say goodbye to manual updates and overbooking stress.'
        primaryCta={{ text: 'Book a demo', href: '/contact' }}
        secondaryCta={{ text: 'Start free trial', href: '/contact' }}
        highlights={[
          { title: '300+ Channels', caption: 'OTAs, GDS & Meta' },
          { title: 'Central Inventory', caption: 'Single pool allocation' },
          { title: 'Zero Hassle', caption: 'Less manual updates' },
        ]}
        visual={<ChannelSyncVisual />}
      />
      <SectionDivider />
      <IconCardGrid
        badge='Centralized distribution'
        badgeIcon={<LuZap className='h-3.5 w-3.5 text-primary' />}
        title='One update. Every connected channel.'
        description='Stop logging into dozens of extranets. Keep your entire network in harmony.'
        items={BENEFITS}
      />
      <SectionDivider />
      <DistributionDashboard />
      <SectionDivider />
      <ControlRoomSection
        title='More reach without more complexity'
        description='How the distribution engine securely connects your central inventory to global OTAs'
        note='One connected distribution workflow instead of multiple disconnected systems.'
      />
      <SectionDivider />
      <Platform cta={{ text: 'Explore the platform', href: '/products' }} />
      <SectionDivider />
      <StatsBand />
      <SectionDivider />
      <HumanSupport description='When you need help, you can speak with people who understand hotel operations.' />
    </main>
  );
}
