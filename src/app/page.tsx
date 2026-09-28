import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Booking Jini',
  description: 'Welcome to our platform. Learn more about our direct booking and management solutions.',
};

export default function HomePage() {
  return (
    <div className='bg-background min-h-screen w-full'>
      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold'>Home Page</h1>
      </main>
    </div>
  );
}