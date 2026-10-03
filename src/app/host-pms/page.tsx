import type { Metadata } from 'next';
import { LuLayoutDashboard, LuMonitorSmartphone, LuPlug, LuPuzzle, LuZap } from 'react-icons/lu';

import { SectionDivider } from '@/components/layout/SectionDivider';
import { GrowthPath } from '@/components/reusable/GrowthPath';
import { HumanSupport } from '@/components/reusable/HumanSupport';
import { IconCardGrid, type IconCard } from '@/components/reusable/IconCardGrid';
import { Platform } from '@/components/reusable/Platform';
import { SplitHero } from '@/components/reusable/SplitHero';
import { StatsBand } from '@/components/reusable/StatsBand';
import { FrontDeskVisual } from './FrontDeskVisual';
import { OperationalView } from './OperationalView';
import { SystemComparison } from './SystemComparison';

export const metadata: Metadata = {
  title: 'Host PMS | Booking Jini',
  description:
    'Run day-to-day property operations from one connected screen: arrivals, departures, housekeeping and billing in a unified workspace.',
};

const BENEFITS: IconCard[] = [
  {
    icon: LuLayoutDashboard,
    title: 'One central view',
    description: 'Get an instant, visual timeline of all check-ins, departures, and unoccupied states on a unified operational board.',
  },
  {
    icon: LuMonitorSmartphone,
    title: 'Accessible from anywhere',
    description: 'Cloud architecture engineered to perform beautifully on desktop, tablets, or phones without performance drops.',
  },
  {
    icon: LuPuzzle,
    title: 'Less fragmented work',
    description: 'Ensure reception, management, and housekeeping coordinate on identical data. Never duplicate an entry.',
  },
  {
    icon: LuPlug,
    title: 'Connected with Bookingjini',
    description: 'Direct native pipeline from our booking engine and channel manager directly into your dashboard in milliseconds.',
  },
];

export default function HostPmsPage() {
  return (
    <main className='w-full'>
      <SplitHero
        title='Run your hotel from one connected screen'
        description='Manage your day-to-day property operations from one central, accessible platform. From arrivals and departures to housekeeping and billing, streamline everything in a unified workspace.'
        primaryCta={{ text: 'Book a demo', href: '/contact' }}
        secondaryCta={{ text: 'Start free trial', href: '/contact' }}
        visual={<FrontDeskVisual />}
      />
      <SectionDivider />
      <IconCardGrid
        badge='Simpler daily operations'
        badgeIcon={<LuZap className='h-3.5 w-3.5 text-primary' />}
        title='Less switching. More control.'
        description='Eliminate the friction of disconnected spreadsheets, notebooks, and legacy portals. Host PMS is built with a singular design objective: clean, unified utility.'
        items={BENEFITS}
      />
      <SectionDivider />
      <OperationalView />
      <SectionDivider />
      <SystemComparison />
      <SectionDivider />
      <Platform cta={{ text: 'Explore the platform', href: '/products' }} />
      <SectionDivider />
      <GrowthPath />
      <SectionDivider />
      <StatsBand />
      <SectionDivider />
      <HumanSupport description='When you need help, you can speak with people who understand hotel operations.' />
    </main>
  );
}
