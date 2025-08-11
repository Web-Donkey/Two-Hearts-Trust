import React from 'react';
import { Heart, Mail, MapPin, Facebook, Twitter, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-full">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold">Two Hearts Charitable Trust</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Inspired by Venerable Teresa Fardella de Blasi and the Sacred Hearts of Jesus and Mary, 
              we provide compassionate care to the terminally ill, elderly, and vulnerable members of our community. 
              Our mission is rooted in faith, love, and service to those who need it most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Teresa Fardella Palliative Care</p>
                  <p>Puthukkalavattom, Ernakulam</p>
                  <p>Kerala, India - 682026</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:twoheartstrust@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  twoheartstrust@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Phone contacts coming soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Members */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Trust Members</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
              <h5 className="font-semibold">Sr Elizabeth Illickal</h5>
              <p className="text-gray-400 text-sm">President</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
              <h5 className="font-semibold">Sr Jaya</h5>
              <p className="text-gray-400 text-sm">Secretary cum Treasurer</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
              <h5 className="font-semibold">Sr Teresa Kunnakkattu</h5>
              <p className="text-gray-400 text-sm">Trustee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Two Hearts Charitable Trust. All rights reserved.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <p className="text-gray-400 text-sm">
                "Love of Christ Urges Us" - Inspired by Teresa Fardella de Blasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;