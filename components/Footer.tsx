'use client';

import Link from 'next/link';
import { FaFacebookF, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-3">
            Rigyel Environment Consultancy
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Helping Bhutanese businesses stay compliant with RRCO regulations through expert tax filing, audits, and consulting.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-blue-600 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-600">
            <li><span className="font-medium">Location:</span> Samtse, Bhutan</li>
            <li><span className="font-medium">Phone:</span> +975 17607502</li>
            <li><span className="font-medium">Email:</span> info@rigyel.bt</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-4">Connect with Us</h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
            >
              <FaFacebookF className="text-blue-600 w-4 h-4" />
            </a>
            <a
              href="https://wa.me/975XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition"
            >
              <FaWhatsapp className="text-green-600 w-4 h-4" />
            </a>
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-100 hover:bg-sky-200 transition"
            >
              <FaTelegramPlane className="text-sky-600 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rigyel Environment Consultancy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
