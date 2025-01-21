"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();

  // Menggunakan useSpring untuk animasi yang lebih smooth
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (sectionId === "hero") {
      // Scroll ke paling atas untuk Hero section
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 64; // Tinggi navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setActiveSection(sectionId);
  };

  const navItems = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "certificates", label: "Certifications" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <motion.nav className="fixed w-full z-50" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                Abdurrahman Faris Rizqullah
              </motion.span>
            </motion.a>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map(({ href, label }) => (
                <motion.a
                  key={href}
                  href={`#${href}`}
                  onClick={(e) => scrollToSection(e, href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${activeSection === href ? "text-blue-400" : "text-gray-300 hover:text-white"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{label}</span>
                  {activeSection === href && <motion.div className="absolute inset-0 bg-blue-500/10 rounded-full" layoutId="activeSection" transition={{ type: "spring", duration: 0.6 }} />}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden p-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white focus:outline-none" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Progress Bar yang diperbaiki */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </motion.nav>
  );
};

export default Navbar;
