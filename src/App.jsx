import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, UtensilsCrossed, Sparkles } from "lucide-react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const MenuSection = lazy(() => import("./components/MenuSection"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const Loading = () => (
  <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 z-50">
    <div className="relative">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-400 animate-pulse"></div>
      <div className="absolute inset-0 w-20 h-20 rounded-full bg-yellow-400/30 animate-ping"></div>
    </div>
  </div>
);

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 z-50 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Animated Background - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 1],
            opacity: [0, 0.15, 0.1],
            transition: { duration: 2, ease: "easeOut" },
          }}
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-yellow-400 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.3, 1.1],
            opacity: [0, 0.1, 0.08],
            transition: { duration: 2.5, delay: 0.3, ease: "easeOut" },
          }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-yellow-500 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Mobile Simple Background */}
      <div className="absolute inset-0 md:hidden bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_70%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Icon Group */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          className="flex items-center gap-4 md:gap-6 mb-8"
        >
          {/* Left Icon */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
            }}
          >
            <div className="p-3 md:p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-2xl backdrop-blur-sm border border-yellow-400/30">
              <UtensilsCrossed className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Center Chef Hat - Main Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
            }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-2xl"
              />
              
              {/* Main Logo Circle */}
              <div className="relative w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-300/30">
                <ChefHat className="w-12 h-12 md:w-16 md:h-16 text-emerald-900" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          {/* Right Icon */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
            }}
          >
            <div className="p-3 md:p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-2xl backdrop-blur-sm border border-yellow-400/30">
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" strokeWidth={2} />
            </div>
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.8, duration: 0.8, ease: "easeOut" },
          }}
          className="text-center space-y-3 md:space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-outfit tracking-tight">
            AFC ALI
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <p className="text-xl md:text-3xl text-yellow-400 font-bold tracking-[0.3em] font-playfair italic">
              Nasi Kandar
            </p>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.2, duration: 0.8, ease: "easeOut" },
          }}
          className="mt-6 md:mt-8"
        >
          <p className="text-base md:text-lg text-gray-300 font-light tracking-wide font-outfit text-center">
            Authentic Malaysian Cuisine
          </p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.6 },
          }}
          className="flex gap-2 mt-8 md:mt-10"
        >
          {[0, 0.2, 0.4].map((delay, index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"
            />
          ))}
        </motion.div>

        {/* Since Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.8, duration: 0.8, ease: "easeOut" },
          }}
          className="mt-8 md:mt-10"
        >
          <div className="inline-block px-5 md:px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <p className="text-xs md:text-sm text-yellow-400/80 font-medium tracking-widest uppercase font-outfit">
              Since 2005
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-950 to-transparent"></div>
    </motion.div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
      ) : (
        <Suspense fallback={<Loading />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
          >
            <Navbar />
            <Hero />
            <MenuSection />
            <About />
            <Contact />
            <Footer />
          </motion.div>
        </Suspense>
      )}
    </AnimatePresence>
  );
};

export default App;