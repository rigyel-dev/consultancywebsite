import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export const metadata = {
  title: "Rigyel Consultancy | Accountancy & Auditing in Bhutan",
  description:
    "Rigyel Consultancy helps businesses prepare and compile BIT/CIT for RRCO Bhutan. Expert accountancy, auditing, and tax services tailored to your needs.",
  keywords:
    "Rigyel Consultancy, Accountancy, Auditing, BIT, CIT, RRCO, Tax Filing, Bhutan, Financial Consultancy",
  robots: "index, follow",
  authors: [{ name: "Rigyel Consultancy" }],
  openGraph: {
    title: "Rigyel Consultancy | Trusted Accountancy & Auditing in Bhutan",
    description:
      "Rigyel Consultancy provides expert BIT/CIT submission and RRCO compliance services for businesses in Bhutan.",
    url: "https://rigyelconsultancy.bt", // Replace with your actual domain
    siteName: "Rigyel Consultancy",
    locale: "en_BT",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
    <Hero/>
    <ServicesOverview/>
    <WhyChooseUs/>
    <AboutPreview/>
    <CTA/>
   </>
  );
}
