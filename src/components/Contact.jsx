import { Clock, MapPin, Phone, Landmark, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-[#0e1c12] via-[#13331b] to-[#0e1c12] relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Sans:wght@400;500;700&display=swap');
        
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(191, 161, 74, 0.3); }
          50% { box-shadow: 0 0 40px rgba(191, 161, 74, 0.6); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(191,161,74,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(191,161,74,0.05),transparent_50%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#bfa14a]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#bfa14a]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(191,161,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(191,161,74,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#bfa14a]/20 to-[#f0e6c3]/20 rounded-full backdrop-blur-sm border border-[#bfa14a]/30 mb-8">
            <div className="w-2 h-2 bg-[#bfa14a] rounded-full animate-pulse"></div>
            <span className="text-[#bfa14a] text-sm font-bold tracking-[0.25em] font-dm uppercase">
              Visit Us
            </span>
            <div className="w-2 h-2 bg-[#bfa14a] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold mb-6 font-outfit">
            <span className="block text-white leading-tight">Come Dine</span>
            <span className="block bg-gradient-to-r from-[#bfa14a] via-[#f0e6c3] to-[#bfa14a] bg-clip-text text-transparent font-playfair italic">
              With Us
            </span>
          </h2>
          
          <p className="text-xl text-[#efdeb7] max-w-2xl mx-auto leading-relaxed font-dm">
            Experience authentic Malaysian Nasi Kandar with a classic touch in our beautifully crafted locations
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Location Card */}
          <div className="group lg:col-span-2">
            <div className="relative bg-gradient-to-br from-[#14291a] to-[#0e1c12] backdrop-blur-sm border border-[#bfa14a]/20 rounded-3xl p-10 h-full group-hover:border-[#bfa14a]/50 transition-all duration-500 transform group-hover:scale-[1.02] overflow-hidden">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex p-4 bg-gradient-to-br from-[#bfa14a]/20 to-[#bfa14a]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-[#bfa14a]" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 font-outfit">Our Locations</h3>

                <div className="space-y-8">
                  {/* Gamuda Cove Branch */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 p-2 bg-[#bfa14a]/10 rounded-xl">
                      <Landmark size={20} className="text-[#bfa14a]" />
                    </div>
                    <div className="text-[#efdeb7]">
                      <p className="text-lg font-bold text-white mb-2 font-outfit">Gamuda Cove Branch</p>
                      <p className="text-sm leading-relaxed font-dm">
                        A-01-02 Maya Square, Jalan Cove Sentral 1,<br />
                        Bandar Gamuda Cove, Banting, Selangor 42700
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#bfa14a]/30 to-transparent"></div>
                  </div>

                  {/* Kuala Lumpur Branch */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 p-2 bg-[#bfa14a]/10 rounded-xl">
                      <Landmark size={20} className="text-[#bfa14a]" />
                    </div>
                    <div className="text-[#efdeb7]">
                      <p className="text-lg font-bold text-white mb-2 font-outfit">Kuala Lumpur Branch</p>
                      <p className="text-sm leading-relaxed font-dm">
                        537, Jalan Tiong, Off Jalan Sultan Azlan Shah,<br />
                        51100 Kuala Lumpur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-8">
            {/* Hours Card */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-[#14291a] to-[#0e1c12] backdrop-blur-sm border border-[#bfa14a]/20 rounded-3xl p-8 group-hover:border-[#bfa14a]/50 transition-all duration-500 transform group-hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#bfa14a]/20 to-[#bfa14a]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-7 w-7 text-[#bfa14a]" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 font-outfit">Opening Hours</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-[#bfa14a]/10">
                      <span className="text-[#efdeb7] text-sm font-dm">Daily</span>
                      <span className="text-white font-bold text-sm font-outfit">Open</span>
                    </div>
                    <div className="text-center py-3 bg-[#bfa14a]/10 rounded-xl">
                      <p className="text-[#bfa14a] font-bold text-lg font-outfit">
                        10:00 AM – 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-[#bfa14a] via-[#d4b966] to-[#bfa14a] backdrop-blur-sm rounded-3xl p-8 group-hover:shadow-2xl group-hover:shadow-[#bfa14a]/30 transition-all duration-500 transform group-hover:scale-[1.02] overflow-hidden animate-pulse-glow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="inline-flex p-4 bg-[#13331b]/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-7 w-7 text-[#13331b]" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#13331b] mb-4 font-outfit">Get In Touch</h3>
                  
                  <div className="space-y-3">
                    <a href="tel:+60312345678" className="flex items-center gap-3 text-[#13331b] font-semibold hover:translate-x-1 transition-transform group/link font-dm">
                      <Phone size={16} />
                      <span>+60 3-1234 5678</span>
                    </a>
                    <a href="mailto:info@afcali.com" className="flex items-center gap-3 text-[#13331b] font-semibold hover:translate-x-1 transition-transform group/link font-dm">
                      <Mail size={16} />
                      <span>info@afcali.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-12 bg-gradient-to-br from-[#14291a]/60 to-[#0e1c12]/60 backdrop-blur-xl rounded-3xl border border-[#bfa14a]/20">
            <p className="text-[#efdeb7] text-lg font-dm max-w-md">
              Ready to experience the authentic taste of Malaysian cuisine?
            </p>
            
            <a
              href="#menu"
              className="group relative overflow-hidden inline-flex items-center gap-3 transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#bfa14a] via-[#f0e6c3] to-[#bfa14a] animate-pulse"></div>
              <span className="relative flex items-center gap-3 px-12 py-5 text-[#13331b] font-bold text-lg tracking-wider font-outfit uppercase">
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <p className="text-[#bfa14a]/60 text-sm font-dm">
              Available for dine-in and takeaway
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;