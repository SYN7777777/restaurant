const MenuSection = () => {
  const dishes = [
    { 
      name: 'Nasi Kandar Special', 
      price: 'RM 18', 
      desc: 'Fragrant rice with your choice of curry chicken, beef rendang, and mixed vegetables',
      category: 'Signature'
    },
    { 
      name: 'Ayam Goreng Berempah', 
      price: 'RM 12', 
      desc: 'Crispy fried chicken marinated with traditional Malaysian spices',
      category: 'Popular'
    },
    { 
      name: 'Kambing Kuah Kari', 
      price: 'RM 22', 
      desc: 'Tender mutton slow-cooked in rich aromatic curry gravy',
      category: 'Signature'
    },
    { 
      name: 'Sotong Sambal', 
      price: 'RM 15', 
      desc: 'Fresh squid stir-fried with spicy sambal and aromatic herbs',
      category: 'Popular'
    },
    { 
      name: 'Ikan Bakar', 
      price: 'RM 16', 
      desc: 'Grilled fish marinated with turmeric and chili paste',
      category: 'Signature'
    },
    { 
      name: 'Daging Rendang', 
      price: 'RM 20', 
      desc: 'Slow-cooked beef in rich coconut curry with aromatic spices',
      category: 'Signature'
    },
  ];

  return (
    <section id="menu" className="py-32 bg-gradient-to-b from-[#13331b] to-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bfa14a] rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#bfa14a] text-sm font-semibold tracking-[0.3em] mb-4 inline-block">
            OUR SPECIALTIES
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Popular Dishes
          </h2>
          <p className="text-xl text-[#efdeb7] max-w-2xl mx-auto">
            Handpicked selections from our traditional Malaysian kitchen
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/10 to-[#f0e6c3]/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-[#183220]/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-[#bfa14a]/50 transition-all duration-500 h-full">
                <div className="mb-4">
                  <span className="text-xs text-[#bfa14a] font-semibold tracking-wider mb-3 inline-block">
                    {dish.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {dish.name}
                  </h3>
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#bfa14a] to-[#f0e6c3] bg-clip-text text-transparent">
                    {dish.price}
                  </span>
                </div>
                <p className="text-[#efdeb7] leading-relaxed">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button className="group relative overflow-hidden border-2 border-[#bfa14a] hover:border-[#f0e6c3] transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-[#bfa14a] to-[#f0e6c3] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative block px-12 py-4 text-[#bfa14a] group-hover:text-[#13331b] font-bold text-lg tracking-wider transition-colors duration-300">
              VIEW FULL MENU
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
