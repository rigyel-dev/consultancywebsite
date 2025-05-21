'use client';

import AboutHero from '@/components/AboutHero';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const coreValues = [
  'Integrity & Confidentiality',
  'Timely and Accurate Delivery',
  'Compliance with Bhutanese Laws',
  'Client‑Centric Solutions',
  'Local Expertise',
  'Professional Accountability',
];

const whyChooseUs = [
  'Years of experience with RRCO processes',
  'Deep knowledge of Bhutanese tax regulations',
  'Confidential and compliant workflows',
  'Guaranteed on‑time submissions',
];

export default function AboutContent() {
  return (
    <main className="bg-white text-gray-800">
      <AboutHero />

      {/* ─ Mission & Vision ─ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            {
              title: 'Our Mission',
              content:
                'To simplify tax and compliance for every Bhutanese enterprise, delivering precise, dependable services that let our clients operate with confidence.',
            },
            {
              title: 'Our Vision',
              content:
                'To be Bhutan’s most trusted consultancy for tax, audit, and RRCO compliance—synonymous with integrity, accuracy, and care.',
            },
          ].map(({ title, content }) => (
            <div
              key={title}
              className="bg-blue-50 border border-blue-100 p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
              <p className="text-gray-700">{content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─ Core Values ─ */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Our Core Values
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <li
                key={value}
                className="flex items-start gap-3 bg-white border border-gray-200 p-5 rounded-lg shadow-sm"
              >
                <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                <span className="text-gray-800">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─ Why Choose Us ─ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm flex gap-3"
              >
                <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─ CTA ─ */}
      <section className="bg-blue-600 py-20 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to simplify your RRCO compliance?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Our experts are here to ensure timely, accurate submissions and advisory.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
