import React from 'react';
import { ArrowDown } from 'lucide-react';
import { mockData } from './mock';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${mockData.hero.backgroundImage})`
        }}
      />

      {/* Light Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 md:pt-36">
        {/* Main Tagline - placed near top middle */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 animate-slideUp">
          {mockData.hero.tagline}
        </h1>
        
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 animate-slideUp delay-300">
            {mockData.hero.description}
          </p>
          
          {/* Mission Points */}
          <div className="text-lg text-slate-600 leading-relaxed space-y-4 animate-slideUp delay-500">
            <p>
              To sustain operations, we charge a minimal fee that helps cover basic expenses such as staff salaries, medicines, utilities, and meals. However, this only meets a portion of our needs.
            </p>
            
            <p>
              To bridge the gap—and to continue serving the financially poor and the abandoned—we humbly seek the support of donors and benefactors.
            </p>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">Subsidized Care</h3>
                <p className="text-slate-600 text-sm">Free care for those in need</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">Medical Supplies</h3>
                <p className="text-slate-600 text-sm">Equipment and medicines</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">Dignified Environment</h3>
                <p className="text-slate-600 text-sm">Peaceful care for patients</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-700">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Support Our Mission
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Down Arrow after buttons with spacing */}
        <div className="mt-10 mb-4 flex justify-center">
          <button 
            onClick={scrollToNext}
            className="text-slate-500 hover:text-slate-700 transition-colors duration-300 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;