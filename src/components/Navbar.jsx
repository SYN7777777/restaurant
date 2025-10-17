import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#13331b] backdrop-blur-lg shadow-2xl py-4'
          : 'bg-[#13331b] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-[#bfa14a] absolute animate-pulse" />
              <UtensilsCrossed className="h-8 w-8 text-[#bfa14a] relative z-10" />
            </div>
            <div>
              <span className="text-3xl font-bold text-[#bfa14a] block leading-none">
                AFC Ali
              </span>
              <span className="text-sm text-[#bfa14a] tracking-wider">
                NASI KANDAR
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <a href="#home" className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider">
              HOME
            </a>
            <a href="#menu" className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider">
              MENU
            </a>
            <a href="#about" className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
            <a href="#contact" className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider">
              CONTACT
            </a>
          </div>

          {/* Order Button */}
          <button className="hidden lg:block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#bfa14a] to-[#ffecb3] rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-[#bfa14a] to-[#ffecb3] text-[#13331b] px-8 py-3 rounded-full font-semibold text-sm tracking-wider transform group-hover:scale-105 transition-transform duration-300">
              ORDER NOW
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#bfa14a]">
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#13331b] backdrop-blur-lg animate-fadeIn">
          <div className="px-6 py-8 space-y-6">
            <a href="#home" className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium">
              HOME
            </a>
            <a href="#menu" className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium">
              MENU
            </a>
            <a href="#about" className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium">
              ABOUT
            </a>
            <a href="#contact" className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium">
              CONTACT
            </a>
            <button className="w-full bg-gradient-to-r from-[#bfa14a] to-[#ffecb3] text-[#13331b] px-8 py-4 rounded-full font-semibold">
              ORDER NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
