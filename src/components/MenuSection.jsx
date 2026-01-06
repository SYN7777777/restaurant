import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons for pagination

// --- Data (Unchanged) ---
const dishes = [
  // 🫓 ROTI & TOSAI
  { category: "Roti", name: "Roti Canai Biasa", price: "RM 2.50", desc: "Classic flaky flatbread served with dhal or curry." },
  { category: "Roti", name: "Roti Telur Bawang Cili", price: "RM 4.50", desc: "Egg, onion, and chili stuffed roti — spicy and savory." },
  { category: "Roti", name: "Roti Cheese", price: "RM 4.80", desc: "Soft roti filled with melting cheese." },
  { category: "Roti", name: "Roti Milo", price: "RM 4.50", desc: "Sweet Malaysian favorite with Milo spread." },
  { category: "Tosai", name: "Tosai Masala", price: "RM 6.50", desc: "Crispy tosai stuffed with spiced potatoes." },
  { category: "Tosai", name: "Tosai Paper", price: "RM 5.00", desc: "Crispy giant paper-thin dosa." },

  // 🍛 NASI GORENG SERIES
  { category: "Nasi Goreng", name: "Nasi Goreng Kampung", price: "RM 10.50", desc: "Village-style fried rice with anchovies and chili." },
  { category: "Nasi Goreng", name: "Nasi Goreng Paprik Ayam", price: "RM 11.50", desc: "Thai-style chicken paprik fried rice." },
  { category: "Nasi Goreng", name: "Nasi Goreng Seafood", price: "RM 12.00", desc: "Fried rice with prawns, squid, and seafood mix." },
  { category: "Nasi Goreng", name: "Nasi Goreng Tomyam", price: "RM 11.00", desc: "Spicy and tangy Tomyam fried rice." },

  // 🍜 MEE, MAGGI, KUEY TEOW, BIHUN
  { category: "Mee", name: "Maggi Goreng Biasa", price: "RM 8.00", desc: "Classic stir-fried instant noodles with egg and veggies." },
  { category: "Mee", name: "Mee Goreng Seafood", price: "RM 10.50", desc: "Fried noodles loaded with fresh seafood." },
  { category: "Mee", name: "Kuey Teow Goreng Udang", price: "RM 10.50", desc: "Flat noodles fried with prawns and soy sauce." },
  { category: "Mee", name: "Bihun Goreng Daging", price: "RM 10.00", desc: "Fried vermicelli with tender beef slices." },

  // 🍗 BRIYANI & NASI KANDAR
  { category: "Briyani", name: "Briyani Kambing", price: "RM 15.00", desc: "Fragrant basmati rice with spiced mutton curry." },
  { category: "Briyani", name: "Briyani Ayam", price: "RM 13.00", desc: "Delicious chicken briyani with aromatic spices." },
  { category: "Briyani", name: "Briyani Daging", price: "RM 14.00", desc: "Beef briyani cooked with special herbs and spices." },
  { category: "Nasi Kandar", name: "Nasi Kandar Ayam Berempah", price: "RM 12.00", desc: "Classic Penang-style rice with fried spiced chicken." },

  // 🥩 WESTERN MENU
  { category: "Western", name: "Chicken Chop", price: "RM 15.00", desc: "Grilled chicken served with black pepper sauce and fries." },
  { category: "Western", name: "Lamb Chop", price: "RM 20.00", desc: "Juicy grilled lamb with mushroom sauce and sides." },
  { category: "Western", name: "Fish & Chips", price: "RM 14.00", desc: "Crispy fried fish fillet with tartar sauce and fries." },
  { category: "Western", name: "Monster Burger", price: "RM 18.00", desc: "Double beef patties with cheese and special sauce." },

  // 🍲 TOMYAM & SUP
  { category: "Tomyam", name: "Tomyam Seafood", price: "RM 12.00", desc: "Hot and sour Thai-style soup with mixed seafood." },
  { category: "Tomyam", name: "Tomyam Ayam", price: "RM 10.00", desc: "Chicken Tomyam served with herbs and spices." },
  { category: "Sup", name: "Sup Ekor", price: "RM 12.50", desc: "Slow-cooked oxtail soup with aromatic spices." },
  { category: "Sup", name: "Sup Daging", price: "RM 10.00", desc: "Beef soup with Malay spices." },

  // 🍞 TANDOORI & NAAN
  { category: "Tandoori", name: "Ayam Tandoori", price: "RM 12.00", desc: "Clay-oven roasted spiced chicken served with mint sauce." },
  { category: "Naan", name: "Naan Cheese Garlic", price: "RM 7.50", desc: "Fluffy naan with double cheese and garlic butter." },
  { category: "Naan", name: "Naan Butter", price: "RM 4.50", desc: "Soft buttery naan cooked fresh in the tandoor." },

  // ☕ DRINKS
  { category: "Drinks", name: "Teh Tarik", price: "RM 3.00", desc: "Malaysia’s national pulled tea with creamy froth." },
  { category: "Drinks", name: "Milo Tarik", price: "RM 3.80", desc: "Classic chocolate malt drink, pulled to perfection." },
  { category: "Drinks", name: "Limau Asam Boi", price: "RM 3.50", desc: "Refreshing lime drink with sour plum." },
  { category: "Drinks", name: "Bandung Cincau", price: "RM 3.80", desc: "Rose syrup milk with grass jelly." },
];

// --- Component ---
const MenuSection = () => {
  const categories = ["All", ...new Set(dishes.map((d) => d.category))];
  const [selected, setSelected] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  // Basic check for mobile screen size (you should use a proper hook for production)
  useEffect(() => {
    const checkMobile = () => {
      // Assuming 'sm' breakpoint is 640px, we treat anything below as mobile for this logic.
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selected]);

  // Filter dishes by category
  const categorizedDishes = selected === "All"
    ? dishes
    : dishes.filter((d) => d.category === selected);

  // Pagination Logic (Mobile-Only)
  const itemsPerPage = isMobile ? 6 : categorizedDishes.length; // 6 items for mobile (2 columns x 3 rows)
  const totalPages = Math.ceil(categorizedDishes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Final list of dishes to display (paginated on mobile)
  const filteredAndPaginatedDishes = isMobile
    ? categorizedDishes.slice(startIndex, endIndex)
    : categorizedDishes; // Display all on desktop

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section id="menu" className="py-32 bg-gradient-to-b from-[#13331b] to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-60">
        {/* Food background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: `url("/food.jpeg")`,
            filter: "brightness(0.8) blur(2px)",
          }}
        ></div>

        {/* Golden blur overlay for richness */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bfa14a] rounded-full filter blur-3xl opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#bfa14a] text-sm font-semibold tracking-[0.3em] mb-4 inline-block">
            OUR SPECIALTIES
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">Popular Dishes</h2>
          <p className="text-xl text-[#efdeb7] max-w-2xl mx-auto">
            Handpicked selections from our traditional Malaysian kitchen
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 ${selected === cat
                  ? "bg-gradient-to-r from-[#bfa14a] to-[#f0e6c3] text-[#13331b] border-[#f0e6c3]"
                  : "border-[#bfa14a]/40 text-[#efdeb7] hover:border-[#bfa14a] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish Grid: Updated for Mobile Responsiveness */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-all duration-300">
          {filteredAndPaginatedDishes.map((dish, idx) => (
            <div key={idx} className="group relative hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#bfa14a]/10 to-[#f0e6c3]/10 rounded-xl md:rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              {/* Reduced padding on mobile (p-6) to make cards smaller */}
              <div className="relative bg-[#183220]/70 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 group-hover:border-[#bfa14a]/50 transition-all duration-500 h-full">
                <div className="mb-3">
                  <span className="text-xs text-[#bfa14a] font-semibold tracking-wider mb-2 inline-block">{dish.category}</span>
                  {/* Reduced text size on mobile */}
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{dish.name}</h3>
                  <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#bfa14a] to-[#f0e6c3] bg-clip-text text-transparent">{dish.price}</span>
                </div>
                {/* Hid description on the smallest mobile for brevity, show on medium/desktop */}
                <p className="text-[#efdeb7] leading-relaxed text-sm hidden sm:block">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls (Mobile-Only) */}
        {isMobile && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8 pt-4 border-t border-[#bfa14a]/20">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full transition-colors duration-200 ${currentPage === 1
                  ? 'text-[#bfa14a]/30 bg-[#13331b]'
                  : 'bg-[#bfa14a]/10 text-[#bfa14a] hover:bg-[#bfa14a]/30'
                }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="text-lg font-semibold text-[#f0e6c3]">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full transition-colors duration-200 ${currentPage === totalPages
                  ? 'text-[#bfa14a]/30 bg-[#13331b]'
                  : 'bg-[#bfa14a]/10 text-[#bfa14a] hover:bg-[#bfa14a]/30'
                }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* View Menu Button */}
        <div className="text-center mt-16">
          <a
            href="/menu.pdf" // 👈 Replace this with your actual menu file path
            download="NasiKandar.Menu.pdf"
            className="group relative overflow-hidden border-2 border-[#bfa14a] hover:border-[#f0e6c3] transition-all duration-300 transform hover:scale-105 inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#bfa14a] to-[#f0e6c3] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative block px-12 py-4 text-[#bfa14a] group-hover:text-[#13331b] font-bold text-lg tracking-wider transition-colors duration-300">
              WANT TO SEE FULL MENU? DOWNLOAD HERE
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;