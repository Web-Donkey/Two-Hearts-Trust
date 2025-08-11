import React from 'react';
import { Heart, Home, Users, MapPin, Star, BookOpen, ArrowRight } from 'lucide-react';
import { mockData } from './mock';

const ServicesSection = () => {
  const iconMap = {
    Heart,
    Home,
    Users,
    MapPin,
    Star,
    BookOpen
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Compassionate, faith-driven care and support services powered by the generosity of donors 
            and the dedication of trained volunteers, rooted in the love of the Two Hearts of Jesus and Mary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                {/* Service Icon */}
                <div className="p-8 text-center">
                  <div className="relative mx-auto mb-6">
                    {/* Circular Image */}
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                    />
                    {/* Icon Overlay */}
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-full group-hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Support Our Mission?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              These services are made possible through the generous contributions of our donors 
              and the heartfelt service of our volunteers. Join us in bringing hope, dignity, and love 
              to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Become a Volunteer
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;