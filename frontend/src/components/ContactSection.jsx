import React from 'react';
import { Mail, MapPin, Phone, User, Heart } from 'lucide-react';
import { mockData } from './mock';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-default">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            We are here to serve with love and compassion. Reach out to us for support, 
            questions, or to join our mission of bringing hope and healing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Our Location</h3>
                  <p className="font-semibold text-slate-700 mb-1">{mockData.contact.address.name}</p>
                  <p className="text-slate-600">{mockData.contact.address.street}</p>
                  <p className="text-slate-600">Pin: {mockData.contact.address.pin}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white p-3 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
                  <p className="text-slate-600 mb-2">We'd love to hear from you</p>
                  <a 
                    href={`mailto:${mockData.contact.email}`}
                    className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                  >
                    {mockData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Call Us</h3>
                  <p className="text-slate-600 mb-2">Phone contacts coming soon</p>
                  <p className="text-purple-600 font-semibold">Updates pending</p>
                </div>
              </div>
            </div>

            {/* Trust Members */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <User className="w-6 h-6 text-rose-600 mr-3" />
                Our Trust Members
              </h3>
              <div className="space-y-4">
                {mockData.contact.trustMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-rose-600 text-white p-2 rounded-full">
                      <Heart className="w-4 h-4" fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{member.name}</p>
                      <p className="text-slate-600 text-sm">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Christ Images and Contact Form */}
          <div className="space-y-8">
            {/* Christ Images */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                In the Love of Christ
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {mockData.contact.christImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`Christ Image ${index + 1}`}
                      className="w-full  object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                ></textarea>
                <button 
                  type="submit"
                  className="btn btn-primary w-full px-8 py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Mission of Love and Service</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              "By combining affordable care with generous giving, we can keep alive the spirit of 
              Mother Teresa Fardella and the Two Hearts of Jesus and Mary, offering love, presence, 
              and hope to those who suffer."
            </p>
            <button className="btn btn-light px-8 py-3">
              Support Our Cause
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;