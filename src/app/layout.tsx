import { Manrope } from 'next/font/google';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Medical Dashboard',
  description: 'Patient Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans bg-[#F6F7F8] opacity-100`} suppressHydrationWarning={true}>
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}