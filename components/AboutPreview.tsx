'use client';

import Link from 'next/link';

const AboutPreview = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          About Rigyel Environment Consultancy
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
          Rigyel Environment Consultancy is committed to providing expert financial and environmental consultancy services tailored for Bhutanese businesses. Our mission is to support sustainable development through accurate compliance, deep local insight, and trustworthy guidance. We believe in integrity, transparency, and timely service delivery.
        </p>
        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow"
        >
          Learn more about us
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
