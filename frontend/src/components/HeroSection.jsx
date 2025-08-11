import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import { mockData } from './mock';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${mockData.hero.backgroundImage})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-800/70 to-blue-800/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fadeIn">
          <img 
            src={mockData.hero.logo} 
            alt="Two Hearts Logo" 
            className="mx-auto h-20 w-auto mb-4"
          />
        </div>
        
        {/* Main Tagline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slideUp">
          {mockData.hero.tagline}
        </h1>
        
        {/* Heart Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="w-8 h-8 text-white" fill="currentColor" />
          </div>
        </div>
        
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 animate-slideUp delay-300">
            {mockData.hero.description}
          </p>
          
          {/* Mission Points */}
          <div className="text-lg text-white/80 leading-relaxed space-y-4 animate-slideUp delay-500">
            <p>
              To sustain operations, we charge a minimal fee that helps cover basic expenses such as staff salaries, medicines, utilities, and meals. However, this only meets a portion of our needs.
            </p>
            
            <p>
              To bridge the gap—and to continue serving the financially poor and the abandoned—we humbly seek the support of donors and benefactors.
            </p>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Subsidized Care</h3>
                <p className="text-white/80 text-sm">Free care for those in need</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Medical Supplies</h3>
                <p className="text-white/80 text-sm">Equipment and medicines</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Dignified Environment</h3>
                <p className="text-white/80 text-sm">Peaceful care for patients</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-700">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Support Our Mission
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Learn More
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;