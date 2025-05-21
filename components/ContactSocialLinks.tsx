'use client';

import { FaFacebookF, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const ContactSocialLinks = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 mt-12 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Connect With Us on Social Media
          </h3>
          <p className="text-gray-600">
            Reach out via your preferred platform for quicker responses and updates.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 text-blue-700 p-4 rounded-full hover:bg-blue-200 transition"
            title="Facebook"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/975XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 text-green-600 p-4 rounded-full hover:bg-green-200 transition"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-100 text-sky-500 p-4 rounded-full hover:bg-sky-200 transition"
            title="Telegram"
          >
            <FaTelegramPlane className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSocialLinks;
