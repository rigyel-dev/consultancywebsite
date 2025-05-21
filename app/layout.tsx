// app/layout.tsx
import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rigyel Environment Consultancy | Bhutan',
  description:
    'Rigyel Environment Consultancy provides expert accountancy, auditing, and RRCO tax filing services in Bhutan. Trusted for BIT/CIT submissions and compliance support.',
  keywords: [
    'Rigyel Environment Consultancy',
    'Bhutan',
    'RRCO',
    'BIT',
    'CIT',
    'Tax Filing',
    'Accountancy',
    'Auditing',
    'Consultancy',
  ],
  authors: [{ name: 'Rigyel Environment Consultancy' }],
  robots: 'index, follow',
  icons: {
    icon: '/rigyel-favicon.ico',
  },
  openGraph: {
    title: 'Rigyel Environment Consultancy | Trusted Financial & Tax Services in Bhutan',
    description:
      'Expert support for RRCO compliance, BIT/CIT filing, and business financial advisory in Bhutan.',
    url: 'https://yourdomain.bt', // replace with your domain
    siteName: 'Rigyel Environment Consultancy',
    locale: 'en_BT',
    type: 'website',
    images: [
      {
        url: '/cover-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rigyel Consultancy Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rigyel Environment Consultancy | Bhutan',
    description:
      'Helping businesses in Bhutan with RRCO tax filing, BIT/CIT compliance, and financial auditing.',
    images: ['/cover-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
