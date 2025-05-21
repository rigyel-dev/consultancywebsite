'use client';

import { FaComments, FaFileAlt, FaPaperPlane, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    title: 'Initial Consultation',
    description: 'We begin with a discussion to understand your business needs and goals.',
    icon: <FaComments className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Document Review',
    description: 'Our team reviews your financial records and prepares required documents.',
    icon: <FaFileAlt className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Filing & Submission',
    description: 'We file your BIT/CIT reports and submit them to RRCO on your behalf.',
    icon: <FaPaperPlane className="text-blue-600 w-6 h-6" />,
  },
  {
    title: 'Post-filing Support',
    description: 'Receive support for audits, clarifications, and follow-up from RRCO.',
    icon: <FaHeadset className="text-blue-600 w-6 h-6" />,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900">How It Works</h2>
        <p className="mt-2 text-gray-600 text-lg">
          Our process ensures simplicity, compliance, and clarity from start to finish.
        </p>

        <div className="mt-12 space-y-10 text-left">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800">{`Step ${index + 1}: ${step.title}`}</h3>
                <p className="text-gray-700 mt-1 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
