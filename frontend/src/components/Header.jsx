import React, { useState, useEffect } from 'react';
import { Menu, X, Copy } from 'lucide-react';
import { mockData } from './mock';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const navLinkClass = `${isScrolled ? 'text-slate-700 hover:text-blue-600' : ' text-shadow hover:text-blue-100'} transition-colors duration-200 font-medium`;

  const accountName = 'Two Hearts Charitable Trust';
  const accountNumber = '44387844436';
  const ifsc = 'SBIN0012856';
  const allDetails = `Account name: ${accountName}\nAccount number: ${accountNumber}\nIFSC Code: ${ifsc}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(allDetails);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <Dialog>
      <header className={`fixed bg-blue-200 w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <img 
                src={mockData.navigation.logo} 
                alt="Logo" 
                className="w-12 h-12 rounded-full object-cover border-blue-200"
              />
              <div className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-shadow'}`}>
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

              {/* Donate Now replaces rightmost image */}
              <DialogTrigger asChild>
                <Button className={`${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/20 hover:bg-white/30 text-white'} px-5 py-2 rounded-full font-semibold shadow-sm`}>
                  Donate Now
                </Button>
              </DialogTrigger>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden text-black`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300">
              <nav className="w-full max-w-md mx-auto flex flex-col space-y-6 px-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-slate-700 hover:text-blue-600 text-2xl font-semibold py-2 transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-700 hover:text-blue-600 text-2xl font-semibold py-2 transition-colors duration-200"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-700 hover:text-blue-600 text-2xl font-semibold py-2 transition-colors duration-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('facilities')}
                  className="text-slate-700 hover:text-blue-600 text-2xl font-semibold py-2 transition-colors duration-200"
                >
                  Facilities
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-700 hover:text-blue-600 text-2xl font-semibold py-2 transition-colors duration-200"
                >
                  Contact
                </button>

                {/* Donate Now in mobile menu */}
                <DialogTrigger asChild>
                  <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 text-lg">
                    Donate Now
                  </Button>
                </DialogTrigger>
              </nav>
              <button
                className="absolute top-6 right-6 text-black"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Donate Dialog */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Bank Details</DialogTitle>
          <DialogDescription className="text-sm text-slate-500">Use the details below to donate via bank transfer.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-slate-500">Account name</div>
            <div className="font-semibold text-slate-800">{accountName}</div>
          </div>
          <div>
            <div className="text-sm text-slate-500">Account number</div>
            <div className="font-semibold text-slate-800">{accountNumber}</div>
          </div>
          <div>
            <div className="text-sm text-slate-500">IFSC Code</div>
            <div className="font-semibold text-slate-800">{ifsc}</div>
          </div>
          <Button onClick={handleCopy} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Copy className="mr-2 h-4 w-4" /> {copied ? 'Copied!' : 'Copy All'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Header;