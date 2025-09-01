import React from 'react';
import { Heart, Mail, MapPin, Facebook, Twitter, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-5 h-5 text-blue-500" fill="currentColor" />
              <h3 className="font-semibold">Two Hearts Charitable Trust</h3>
            </div>
            <p className="text-gray-400 mb-4 text-justify">
              Inspired by Teresa Fardella and the Sacred Hearts of Jesus and Mary, 
              we care for the terminally ill, elderly, and vulnerable in love and faith.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-1.5 rounded-full transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-1.5 rounded-full transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-1.5 rounded-full transition">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['Home','About','Services','Facilities','Contact','Donate'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <p className="text-gray-400">Ernakulam, Kerala 682026</p>
              </div>
              <div className="flex space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:twoheartstrust@gmail.com" className="text-gray-400 hover:text-white">
                  twoheartstrust@gmail.com
                </a>
              </div>
              <div className="flex space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">9947352450</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
          <p>© 2025 Two Hearts Charitable Trust</p>
          <p className="mt-2 md:mt-0">Love of Christ Urges Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;