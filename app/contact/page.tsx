// ❌ Don't use 'use client' in a page file
import ContactDetails from '@/components/ContactDetails';
import ContactHero from '@/components/ContactHero';
import ContactSocialLinks from '@/components/ContactSocialLinks';

export const metadata = {
  title: "Contact Rigyel Consultancy | Trusted Tax & Audit Experts in Bhutan",
  description:
    "Get in touch with Rigyel Consultancy for expert tax, audit, and RRCO compliance services in Bhutan.",
  keywords: "Rigyel Consultancy, Contact, Tax, Audit, RRCO, Bhutan",
  robots: "index, follow",
  openGraph: {
    title: "Contact Rigyel Consultancy",
    description:
      "Contact Rigyel Consultancy today to ensure your business stays compliant and financially sound.",
    url: "https://rigyelconsultancy.bt/contact",
    siteName: "Rigyel Consultancy",
    locale: "en_BT",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
      <ContactSocialLinks />
    </main>
  );
}
