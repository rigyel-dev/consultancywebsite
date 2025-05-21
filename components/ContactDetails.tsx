'use client';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">Direct Contact</h2>

          <div className="flex items-start space-x-3 text-gray-700">
            <FaPhoneAlt className="mt-1 text-blue-600" />
            <a href="tel:+97517607502" className="hover:text-blue-800">+975 17607502</a>
          </div>

          <div className="flex items-start space-x-3 text-gray-700">
            <FaEnvelope className="mt-1 text-blue-600" />
            <a href="mailto:info@rigyel.bt" className="hover:text-blue-800">info@rigyel.bt</a>
          </div>

          <div className="flex items-start space-x-3 text-gray-700">
            <FaMapMarkerAlt className="mt-1 text-blue-600" />
            <p>Samtse, Bhutan</p>
          </div>

          <div className="flex items-start space-x-3 text-gray-700">
            <FaClock className="mt-1 text-blue-600" />
            <p>Mon - Fri: 9:00 AM – 5:00 PM</p>
          </div>
        </div>

        {/* Optional illustration or map */}
        <div className="rounded-lg overflow-hidden shadow">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1325945085484!2d89.10188731505752!3d27.46017498289611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1faeb0f3eb83f%3A0xaabbc34d3121bfc7!2sSamtse%2C%20Bhutan!5e0!3m2!1sen!2sbt!4v1633941715030!5m2!1sen!2sbt"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
