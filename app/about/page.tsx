// app/about/page.tsx
import AboutContent from '@/components/AboutContent';  // AboutContent *is* the client component

export const metadata = {
  title: "About Rigyel Consultancy | Trusted Tax & Audit Experts in Bhutan",
  description:
    "Learn about Rigyel Consultancy’s mission, vision, and core values focused on reliable tax, audit, and RRCO compliance services in Bhutan.",
  keywords: "Rigyel Consultancy, About, Tax, Audit, RRCO, Bhutan",
  robots: "index, follow",
  openGraph: {
    title: "About Rigyel Consultancy",
    description:
      "Discover our mission and values at Rigyel Consultancy, your trusted partner for tax and auditing in Bhutan.",
    url: "https://rigyelconsultancy.bt/about",
    siteName: "Rigyel Consultancy",
    locale: "en_BT",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
