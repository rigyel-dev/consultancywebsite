// components/CTA.tsx
'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center border border-blue-100 rounded-2xl p-10 shadow-md">
        <div className="flex flex-col items-center gap-4">
          {/* Icon */}
          <div className="bg-blue-100 p-4 rounded-full">
            <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-blue-600" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-900">
            Let Us Handle Your Tax & Compliance
          </h2>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            From BIT/CIT filings to annual RRCO submissions, Rigyel Environment Consultancy helps your business stay compliant and stress-free.
          </p>

          {/* Call-to-action */}
          <Link
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
