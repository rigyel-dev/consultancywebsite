// app/services/page.tsx

import ServicesHero from '@/components/ServicesHero';
import ServiceCards from '@/components/ServiceCards';
import OurProcess from '@/components/OurProcess';
import ServiceWCS from '@/components/ServiceWCS';

export const metadata = {
  title: "Services | Rigyel Consultancy | Trusted Tax & Audit Experts in Bhutan",
  description: "Learn about Rigyel Consultancy’s mission, vision, and core values focused on reliable tax, audit, and RRCO compliance services in Bhutan.",
  keywords: "Rigyel Consultancy, Services, Tax, Audit, RRCO, Bhutan",
  robots: "index, follow",
  openGraph: {
    title: "Services at Rigyel Consultancy",
    description: "Discover our expert tax, audit, and compliance services tailored for Bhutanese businesses.",
    url: "https://rigyelconsultancy.bt/services",
    siteName: "Rigyel Consultancy",
    locale: "en_BT",
    type: "website",
  },
};

export default function ServicePage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <OurProcess />
      <ServiceWCS />
    </>
  );
}
