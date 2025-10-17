import { Award, ChefHat, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#13331b] relative overflow-hidden">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#bfa14a] rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#bfa14a] rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Main Story */}
          <div>
            <span className="text-[#bfa14a] text-sm font-semibold tracking-[0.3em] mb-4 inline-block">
              OUR HERITAGE
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Legacy of Malaysian Flavour
            </h2>
            <div className="text-xl text-[#efdeb7] leading-relaxed mb-6 space-y-3">
              <p>
                The AFC Ali Nasi Kandar story began in 1971, when Mohamed Mydin (known as Ali) founded the first eatery in Penang, serving traditional recipes on the streets that soon became a local sensation.
              </p>
              <p>
                In 2010, our headquarters opened at M Avenue in Segambam, continuing the founder’s vision of authentic Malaysian dining.
              </p>
              <p>
                By 2020, AFC Ali Nasi Kandar had become a name recognized for its dedication to quality, authenticity, and heritage.
              </p>
              <p>
                Today, AFC Ali Nasi Kandar is proudly owned by Mohamed Sabir, with Nurul Sabir as General Manager, maintaining the family legacy and standards of excellence.
              </p>
            </div>
            <div className="text-lg text-[#f0e6c3] leading-relaxed">
              We are specialists in <span className="font-semibold text-[#bfa14a]">Nasi Kandar</span> and <span className="font-semibold text-[#bfa14a]">Roti Canai</span>, beloved classics that showcase the rich taste of Malaysia and the generations of culinary expertise in our family.
            </div>
          </div>
          {/* Image Grid or Decorative Cards */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square bg-gradient-to-br from-[#bfa14a] to-[#f0e6c3] rounded-2xl shadow-lg shadow-[#bfa14a]/20"></div>
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl shadow-lg shadow-black/20"></div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl shadow-lg shadow-black/20"></div>
                <div className="aspect-square bg-gradient-to-br from-[#bfa14a] to-[#f0e6c3] rounded-2xl shadow-lg shadow-[#bfa14a]/20"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ChefHat,
              title: 'Expert Chefs',
              desc: 'Traditional recipes passed down through generations',
            },
            {
              icon: Award,
              title: 'Award Winning',
              desc: 'Celebrated for authentic Malaysian food since 1971',
            },
            {
              icon: Users,
              title: 'Family Owned',
              desc: 'Led by owner Mohamed Sabir & manager Nurul Sabir',
            },
          ].map((feature, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/10 to-[#f0e6c3]/10 rounded-2xl"></div>
              <div className="relative bg-[#183220]/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#bfa14a] to-[#f0e6c3] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#efdeb7]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
