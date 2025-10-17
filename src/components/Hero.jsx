import { Star, UtensilsCrossed } from "lucide-react";

const Hero = () => {
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#13331b]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/30 via-[#13331b] to-[#bfa14a]/10"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#bfa14a] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#bfa14a] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#bfa14a] text-sm font-semibold tracking-[0.3em] mb-4 inline-block">
                AUTHENTIC MALAYSIAN CUISINE
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-[#bfa14a] leading-none">
              AFC Ali
              <span className="block bg-gradient-to-r from-[#bfa14a] to-[#f0e6c3] bg-clip-text text-transparent">
                Nasi Kandar
              </span>
            </h1>

            <p className="text-xl text-[#efdeb7] leading-relaxed max-w-xl">
              Experience the authentic taste of Malaysian Nasi Kandar. Rich curries, tender meats, and aromatic rice that will transport you to the streets of Penang.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="group relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#bfa14a] to-[#f0e6c3]"></div>
                <div className="relative px-10 py-5 text-[#13331b] font-bold text-lg tracking-wider">
                  ORDER NOW
                </div>
              </button>

              <button className="group relative overflow-hidden border-2 border-[#bfa14a]/70 hover:border-[#bfa14a] transition-all duration-300 transform hover:scale-105">
                <div className="relative px-10 py-5 text-[#bfa14a] font-bold text-lg tracking-wider transition-colors duration-300">
                  VIEW MENU
                </div>
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="flex text-[#bfa14a] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-5 w-5" />
                  ))}
                </div>
                <p className="text-sm text-[#f0e6c3]">500+ Google Reviews</p>
              </div>

              <div className="h-12 w-px bg-[#bfa14a]/20"></div>

              <div>
                <p className="text-3xl font-bold text-[#bfa14a]">Since 1971</p>
                <p className="text-sm text-[#f0e6c3]">Serving Malaysia</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/20 to-[#f0e6c3]/20 rounded-3xl transform rotate-6 transition-transform duration-700 hover:rotate-12"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#bfa14a]/30 to-[#f0e6c3]/30 rounded-3xl transform -rotate-6 transition-transform duration-700 hover:-rotate-12"></div>
              <div className="relative bg-gradient-to-br from-[#1e4222] to-[#13331b] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105">
                <div className="absolute inset-0 bg-[#13331b]/60"></div>
                <div className="relative h-full flex items-center justify-center p-12">
                  <div className="text-center space-y-6">
                    <UtensilsCrossed className="h-24 w-24 text-[#bfa14a] mx-auto" />
                    <h3 className="text-4xl font-bold text-[#bfa14a]">Authentic</h3>
                    <p className="text-xl text-[#f0e6c3]">Malaysian Flavors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
