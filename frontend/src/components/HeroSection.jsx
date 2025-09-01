import React from 'react'; 
import { ArrowDown } from 'lucide-react'; 
import { mockData } from './mock';

const HeroSection = () => { 
    const scrollToNext = () => { 
        const aboutSection = document.getElementById('about'); if (aboutSection) { 
            aboutSection.scrollIntoView({ behavior: 'smooth' }); 
        } 
    };

return ( 
    <section id="home" className="relative overflow-hidden"> 
    {/* Top band: left image, right title. Half screen height, below navbar */} 
        <div 
            className="grid md:grid-cols-2 h-[50vh] mt-20 md:mt-24"> 
            {/* Left: Image */} 
            <div className="relative h-full"> 
                <img src={mockData.hero.backgroundImage} alt="Care and compassion" className="absolute inset-0 w-full h-full object-cover" /> 
                {/* Soft fade into white at the boundary */} <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-r from-transparent to-white pointer-events-none" /> 
                </div>

       {/* Right: Title over white background */}
    <div className="flex items-center bg-white px-6 sm:px-8 lg:px-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight animate-slideUp">
        {mockData.hero.tagline}
      </h1>
    </div>
  </div>

  {/* Bottom band: wide white background with remaining content */}
  <div className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Centered CTAs and arrow at the bottom of hero */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-700 mb-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Support Our Mission
        </button>
        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
          Learn More
        </button>
      </div>
      <div className="mb-12 flex justify-center">
        <button
          onClick={scrollToNext}
          className="text-slate-500 hover:text-slate-700 transition-colors duration-300 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Description */}
      <p className="text-lg md:text-2xl text-slate-700 leading-relaxed mb-8 animate-slideUp delay-300 text-justify">
        {mockData.hero.description}
      </p>

      {/* Highlight Points */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-slideUp delay-500">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-100 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-1 text-justify">Subsidized Care</h3>
          <p className="text-slate-600 text-sm text-justify">Free care for those in need</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-100 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-1 text-justify">Medical Supplies</h3>
          <p className="text-slate-600 text-sm text-justify">Equipment and medicines</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-100 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-1 text-justify">Dignified Environment</h3>
          <p className="text-slate-600 text-sm text-justify">Peaceful care for patients</p>
        </div>
      </div> */}
    </div>
  </div>
</section>
); };

export default HeroSection;     