'use client';

import React from 'react';

const ServicesOverview = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          We offer end-to-end consultancy for tax filing and RRCO compliance in Bhutan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              BIT/CIT Filing
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We assist businesses in preparing and filing Business Income Tax (BIT) and Corporate Income Tax (CIT) as per RRCO Bhutan guidelines.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              RRCO Annual Submission
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Comprehensive support for your RRCO annual submissions — from document compilation to format validation and deadline tracking.
            </p>
          </div>

          {/* Card 3 (Optional Future Service) */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Audit Support
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Get expert assistance during audit reviews, ensuring accurate, timely, and compliant responses to RRCO audits and queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
