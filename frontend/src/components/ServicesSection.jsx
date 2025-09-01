import React, { useMemo } from 'react';
import { mockData } from './mock';

const ServicesSection = () => {
  // Duplicate the list so it can loop seamlessly
  const looped = useMemo(() => [...mockData.services, ...mockData.services], []);

  return (
    <section id="services" className="section bg-white">
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container-default">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-justify max-w-4xl mx-auto">
            At Two Hearts Charitable Trust, we are committed to offering compassionate, faith-driven care and support to the terminally ill, elderly, and vulnerable members of society. Rooted in the vision of the DCV Sisters and inspired by the love of the Two Hearts of Jesus and Mary, our services are powered by the generosity of donors and the dedication of trained volunteers.
          </p>
        </div>

        {/* Horizontal auto-scrolling strip */}
        <div className="group relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="relative overflow-hidden">
            <div
              className="flex w-[200%] gap-6 md:gap-8 animate-[scroll-x_linear_infinite] [animation-duration:20s] group-hover:[animation-play-state:paused]"
              style={{ willChange: 'transform' }}
            >
              {looped.map((service, idx) => (
                <article
                  key={idx}
                  className="card card-hover lift overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px]"
                >
                  <div className="p-8 text-center">
                    <div className="relative mx-auto mb-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300 shadow-sm"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-justify leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1">
                      Learn More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Support Our Mission?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-justify">
              These services are made possible through the generous contributions of our donors 
              and the heartfelt service of our volunteers. Join us in bringing hope, dignity, and love 
              to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary px-8 py-3">
                Become a Volunteer
              </button>
              {/* <button className="btn btn-secondary px-8 py-3">
                Make a Donation
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;