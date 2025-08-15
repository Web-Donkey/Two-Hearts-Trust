import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { mockData } from './mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinkClass = `${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors duration-200 font-medium`;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Mother Mary */}
          <div className="flex items-center space-x-4">
            <img 
              src={mockData.navigation.motherMaryImage} 
              alt="Mother Mary" 
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
            />
            <div className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white text-shadow'}`}>
              Two Hearts Charitable Trust
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={navLinkClass}>Home</button>
            <button onClick={() => scrollToSection('about')} className={navLinkClass}>About Us</button>
            <button onClick={() => scrollToSection('services')} className={navLinkClass}>Services</button>
            <button onClick={() => scrollToSection('facilities')} className={navLinkClass}>Facilities</button>
            <button onClick={() => scrollToSection('contact')} className={navLinkClass}>Contact</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium">
              Donate Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('facilities')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Facilities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium w-full">
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;