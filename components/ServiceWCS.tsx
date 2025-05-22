'use client';

import { FaClock, FaLightbulb , FaLock, FaHandshake } from 'react-icons/fa';

const benefits = [
  {
    title: 'Timely Submissions',
    description: 'Never miss a deadline. We ensure all filings are done ahead of time.',
    icon: <FaClock className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Expert Knowledge',
    description: 'Deep understanding of Bhutanese tax law and RRCO regulations.',
    icon: <FaLightbulb className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Confidential & Accurate',
    description: 'Your data is handled with precision and absolute confidentiality.',
    icon: <FaLock className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Trusted by Businesses',
    description: 'Local entrepreneurs and firms rely on us for compliance peace of mind.',
    icon: <FaHandshake className="text-blue-600 w-6 h-6" />,
  },
];

const ServiceWCS = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900">Why Choose Us</h2>
      <p className="mt-2 text-gray-600 text-lg">
  We&#39;re committed to delivering reliable, efficient, and trusted compliance solutions.
</p>


        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceWCS;
