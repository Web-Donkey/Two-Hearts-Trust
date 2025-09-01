import React, { useMemo } from 'react';
import { mockData } from './mock';

const FacilitiesSection = () => {
  const facilitiesData = [
    {
      title: 'Comfortable In-Patient area',
      description:
        'Spacious, clean, and well-ventilated area with beds, side tables, and seating for visitors.',
      image: mockData.facilities[0].image,
    },
    {
      title: '24/7 Medical and Nursing Care',
      description:
        'Our trained team of doctors, nurses, and caregivers are available round the clock to manage symptoms, provide medications, and respond to emergencies with compassion and professionalism.',
      image: mockData.facilities[1].image,
    },
    {
      title: 'Day Care Facilities',
      description:
        'A welcoming and engaging environment for elderly to spend the day in safety and companionship. Includes workspace for pickle and snack preparation, rest areas, and recreational activities.',
      image: mockData.facilities[2].image,
    },
    {
      title: 'Prayer and Meditation Room',
      description:
        'A serene chapel space for reflection, prayer, and spiritual nourishment',
      image: mockData.facilities[3].image,
    },
    {
      title: 'Dining and Nutrition',
      description:
        'Nutritious, home-cooked meals tailored to individual dietary needs are provided for all in-patients. Day care guests also receive healthy meals and refreshments.',
      image: '/images/services/nutrition.jpeg',
    },
    {
      title: 'Family Waiting & Counseling Room',
      description:
        'Private, quiet areas where families can meet with our staff, receive updates, and access emotional and spiritual support.',
      image: '/images/facilities/9.jpeg',
    },
    {
      title: 'Garden and Open Courtyard',
      description:
        'Lush green spaces for patients and visitors to relax, breathe fresh air, and experience peace in nature.',
      image: '/images/services/garden.jpeg',
    },
    {
      title: 'Cleanliness & Hygiene',
      description:
        'Regular housekeeping, and strict hygiene protocols ensure a safe, clean, and respectful environment.',
      image: '/images/facilities/hospital-room.jpg',
    },
  ];

  const looped = useMemo(() => [...facilitiesData, ...facilitiesData], [facilitiesData]);

  return (
    <section id="facilities" className="section bg-gray-50">
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container-default">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-title font-bold text-blue">Teresa Fardella Palliative and Hospice Centre</h2>
          <div className="section-divider"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-justify">
            Our facilities are thoughtfully designed to offer a peaceful, supportive, and homelike
            environment where healing, comfort, and dignity come together for patients and their families.
          </p>
        </div>

        <div className="group relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div className="relative overflow-hidden">
            <div
              className="flex w-[200%] gap-6 md:gap-8 animate-[scroll-x_linear_infinite] [animation-duration:20s] group-hover:[animation-play-state:paused]"
              style={{ willChange: 'transform' }}
            >
              {looped.map((facility, idx) => (
                <article
                  key={idx}
                  className="card card-hover overflow-hidden min-w-[280px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[420px]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {facility.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-justify text-sm md:text-base">
                      {facility.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-8 mt-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Excellence in Every Detail</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe in creating a space where every element contributes to the well-being,
              comfort, and spiritual nourishment of those we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Comfortable Spaces</h4>
              <p className="text-sm text-slate-600">Home-like environment for healing</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-slate-800 mb-2">24/7 Care</h4>
              <p className="text-sm text-slate-600">Round-the-clock professional attention</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Spiritual Support</h4>
              <p className="text-sm text-slate-600">Prayer and meditation spaces</p>
            </div>
            <div className="text-center">
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