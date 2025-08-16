import React from 'react';
import { Bed, Clock, Coffee, Church, Utensils, Users2, Sparkles, Shield } from 'lucide-react';
import { mockData } from './mock';

const FacilitiesSection = () => {
  const facilitiesData = [
    {
      title: "Comfortable In-Patient area",
      description: "Spacious, clean, and well-ventilated area with beds, side tables, and seating for visitors.",
      icon: Bed,
      image: mockData.facilities[0].image,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "24/7 Medical and Nursing Care",
      description: "Our trained team of doctors, nurses, and caregivers are available round the clock to manage symptoms, provide medications, and respond to emergencies with compassion and professionalism.",
      icon: Clock,
      image: mockData.facilities[1].image,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Day Care Facilities",
      description: "A welcoming and engaging environment for elderly to spend the day in safety and companionship. Includes workspace for pickle and snack preparation, rest areas, and recreational activities.",
      icon: Coffee,
      image: mockData.facilities[2].image,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Prayer and Meditation Room",
      description: "A serene chapel space for reflection, prayer, and spiritual nourishment",
      icon: Church,
      image: mockData.facilities[3].image,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Dining and Nutrition",
      description: "Nutritious, home-cooked meals tailored to individual dietary needs are provided for all in-patients. Day care guests also receive healthy meals and refreshments.",
      icon: Utensils,
      image: "/images/about/volunteer.jpg",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Family Waiting & Counseling Room",
      description: "Private, quiet areas where families can meet with our staff, receive updates, and access emotional and spiritual support.",
      icon: Users2,
      image: "/images/services/spread-love.jpg",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Garden and Open Courtyard",
      description: "Lush green spaces for patients and visitors to relax, breathe fresh air, and experience peace in nature.",
      icon: Sparkles,
      image: "/images/services/worship-celebration.jpg",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Cleanliness & Hygiene",
      description: "Regular housekeeping, and strict hygiene protocols ensure a safe, clean, and respectful environment.",
      icon: Shield,
      image: "/images/facilities/hospital-room.jpg",
      color: "from-rose-500 to-rose-600"
    }
  ];

  return (
    <section id="facilities" className="section bg-gray-50">
      <div className="container-default">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Teresa Fardella Palliative and Hospice Centre</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our facilities are thoughtfully designed to offer a peaceful, supportive, and homelike 
            environment where healing, comfort, and dignity come together for patients and their families.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {facilitiesData.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div 
                key={index}
                className="card card-hover overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${facility.color} text-white p-3 rounded-full shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Excellence in Every Detail
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe in creating a space where every element contributes to the well-being, 
              comfort, and spiritual nourishment of those we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Comfortable Spaces</h4>
              <p className="text-sm text-slate-600">Home-like environment for healing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">24/7 Care</h4>
              <p className="text-sm text-slate-600">Round-the-clock professional attention</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Spiritual Support</h4>
              <p className="text-sm text-slate-600">Prayer and meditation spaces</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Peaceful Gardens</h4>
              <p className="text-sm text-slate-600">Natural healing environments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;