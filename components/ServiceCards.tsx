'use client';

import { FaBalanceScale, FaFileInvoice, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: 'BIT/CIT Filing',
    description: 'Preparation and submission of Business and Corporate Income Tax filings with RRCO.',
    icon: <FaFileInvoice className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'RRCO Compliance',
    description: 'Ensure your business remains compliant with all RRCO audit and documentation standards.',
    icon: <FaCheckCircle className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Accounting & Bookkeeping',
    description: 'Maintain accurate records and financial reports tailored to Bhutanese regulations.',
    icon: <FaBalanceScale className="text-blue-600 w-6 h-6" />,
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900">Our Core Services</h2>
        <p className="mt-2 text-gray-600 text-lg">
          Explore the key services we provide to keep your business compliant and financially sound.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition-shadow text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
