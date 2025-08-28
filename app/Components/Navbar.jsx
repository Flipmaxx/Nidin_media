"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-lg bg-black/40 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between py-4">
         
          <div className="text-2xl font-bold text-green-400">MyBrand</div>

          <ul className="hidden md:flex space-x-8 text-white font-medium">
            {["Home", "Projects", "Services", "About", "Contact"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-green-400 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>

  
          <button className="hidden md:block ml-6 px-5 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold transition">
            Get Started
          </button>

 
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.nav>

   
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 w-full bg-black/90 backdrop-blur-lg z-40 md:hidden"
          >
            <ul className="flex flex-col space-y-6 text-center py-8 text-white font-medium text-lg">
              {["Home", "Projects", "Services", "About", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-green-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
              <li>
                <button className="mt-4 px-6 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold transition">
                  Get Started
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
