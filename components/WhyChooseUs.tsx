'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

const benefits = [
  'Years of experience',
  'Deep knowledge of Bhutan tax laws',
  'Timely submissions to RRCO',
  'Confidential & compliant processes',
  'Local expertise',
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Discover what sets Rigyel Environment Consultancy apart in delivering trusted, timely, and compliant services to Bhutanese businesses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-800 text-base sm:text-lg font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
