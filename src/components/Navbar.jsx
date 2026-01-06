import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react"; // ✅ using Phone icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-[#13331b] backdrop-blur-lg shadow-2xl py-2 lg:py-4"
        : "bg-[#13331b] py-3 lg:py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo1.png"
              alt="AFC Ali Nasi Kandar Logo"
              className="h-12 sm:h-14 lg:h-20 w-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <a
              href="#home"
              className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider"
            >
              HOME
            </a>
            <a
              href="#menu"
              className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider"
            >
              MENU
            </a>
            <a
              href="#about"
              className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-[#bfa14a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wider"
            >
              CONTACT
            </a>
          </div>

          {/* ✅ Order Button with WhatsApp Link + Phone Icon */}
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#bfa14a] to-[#ffecb3] rounded-full  opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative flex items-center bg-gradient-to-r from-[#bfa14a] to-[#ffecb3] text-[#13331b] px-8 py-3 rounded-full font-semibold text-sm tracking-wider transform group-hover:scale-105 transition-transform duration-300">
              <span>ORDER NOW</span>
              <Phone className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#bfa14a]"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#13331b] backdrop-blur-lg animate-fadeIn">
          <div className="px-6 py-8 space-y-6">
            <a
              href="#home"
              className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium"
            >
              HOME
            </a>
            <a
              href="#menu"
              className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium"
            >
              MENU
            </a>
            <a
              href="#about"
              className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="block text-[#bfa14a] hover:text-white transition-all duration-300 text-lg font-medium"
            >
              CONTACT
            </a>

            {/* ✅ Mobile Order Button with WhatsApp link */}
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center bg-gradient-to-r from-[#bfa14a] to-[#ffecb3] text-[#13331b] px-8 py-4 rounded-full font-semibold"
            >
              <span>ORDER NOW</span>
              <Phone className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
