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
    <html lang="en" className="h-full lg:overflow-hidden">
      <body className={`${manrope.variable} font-sans bg-[#F6F7F8] h-full lg:overflow-hidden`} suppressHydrationWarning={true}>
        <div className="h-full">
          <Navbar />
          <main className="h-[calc(100vh-6rem)] lg:mt-24 mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}