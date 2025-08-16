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
    <section id="services" className="section bg-white">
      <div className="container-default">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            At Two Hearts Charitable Trust, we are committed to offering compassionate, faith-driven care and support to the terminally ill, elderly, and vulnerable members of society. Rooted in the vision of the DCV Sisters and inspired by the love of the Two Hearts of Jesus and Mary, our services are powered by the generosity of donors and the dedication of trained volunteers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart;
            return (
              <div 
                key={index}
                className="card card-hover lift overflow-hidden group"
              >
                {/* Service Icon */}
                <div className="p-8 text-center">
                  <div className="relative mx-auto mb-6">
                    {/* Circular Image */}
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300 shadow-sm"
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
              <button className="btn btn-primary px-8 py-3">
                Become a Volunteer
              </button>
              <button className="btn btn-secondary px-8 py-3">
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