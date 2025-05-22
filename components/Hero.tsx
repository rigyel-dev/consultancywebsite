'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Trusted Accountancy & Auditing Consultancy
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            We specialize in preparing and compiling BIT/CIT for annual business account submission to RRCO Bhutan.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              href="/services"
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-colors text-sm font-medium"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 rounded-lg shadow text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/hero-image.png"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
