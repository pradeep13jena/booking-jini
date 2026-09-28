import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Your Brand Name',
  description: 'Learn more about our company mission and vision.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">About Us</h1>
    </main>
  );
}