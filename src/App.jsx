import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat } from "lucide-react"; // simple food icon

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const MenuSection = lazy(() => import("./components/MenuSection"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const Loading = () => (
  <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500 via-amber-300 to-yellow-500 animate-pulse"></div>
  </div>
);

// ✨ Modern SplashScreen Component
const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, transition: { duration: 1.2 } }}
      className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-black via-[#1a1a1a] to-[#0b0b0b] z-50"
    >
      {/* Glowing circle background */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: 1.2,
          opacity: 0.15,
          transition: { duration: 2, ease: "easeOut" },
        }}
        className="absolute w-64 h-64 rounded-full bg-yellow-500 blur-3xl"
      ></motion.div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 1.4, ease: "easeOut" },
        }}
        className="relative flex flex-col items-center text-yellow-400"
      >
        <ChefHat size={80} strokeWidth={1.5} className="drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.2, duration: 1 },
          }}
          className="mt-4 text-3xl md:text-4xl font-bold uppercase tracking-widest text-center"
        >
          AFC Ali Nasi Kandar
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence>
      {showSplash ? (
        <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
      ) : (
        <Suspense fallback={<Loading />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
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
