import { UtensilsCrossed, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#13331b] border-t border-[#bfa14a]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <UtensilsCrossed className="h-8 w-8 text-[#bfa14a]" />
              <div>
                <span className="text-3xl font-bold text-white block leading-none">
                  AFC Ali
                </span>
                <span className="text-sm text-[#bfa14a] tracking-wider">
                  NASI KANDAR
                </span>
              </div>
            </div>

            <p className="text-[#efdeb7] mb-6 max-w-md">
              Authentic Malaysian Nasi Kandar since 1995. Experience the rich
              flavors and aromatic spices that make our cuisine truly special.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#1d3320] rounded-full flex items-center justify-center text-[#bfa14a] hover:text-white hover:bg-[#2b462d] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1d3320] rounded-full flex items-center justify-center text-[#bfa14a] hover:text-white hover:bg-[#2b462d] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1d3320] rounded-full flex items-center justify-center text-[#bfa14a] hover:text-white hover:bg-[#2b462d] transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[#efdeb7]">
              <li>
                <a href="#menu" className="hover:text-[#bfa14a] transition-colors duration-300">Our Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#bfa14a] transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#bfa14a] transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#bfa14a] transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-[#efdeb7]">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#bfa14a] mt-1" />
                <span>123 Jalan Tun Abdul Razak, George Town, Penang, Malaysia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#bfa14a]" />
                <span>+60 12-345 6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#bfa14a]" />
                <span>info@afcali.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#bfa14a]/30 pt-8 text-center text-[#efdeb7] text-sm">
          © {new Date().getFullYear()} AFC Ali Nasi Kandar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
