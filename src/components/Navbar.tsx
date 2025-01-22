"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Handle scroll and progress
  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      setIsScrolled(window.scrollY > 20);

      // For progress bar
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  // Enhanced smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Scroll to top for brand click
    if (href === "#") {
      if (isMobile) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      return;
    }

    // For other navigation items
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;

      if (isMobile) {
        // Instant scroll for mobile with slight delay for menu closing
        setTimeout(() => {
          window.scrollTo(0, offsetTop - 60); // 60px offset for navbar
        }, 100);
      } else {
        // Smooth scroll for desktop
        window.scrollTo({
          top: offsetTop - 60,
          behavior: "smooth",
        });
      }
    }
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#certificates", label: "Certificates" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand with hover animation */}
          <motion.a
            href="#"
            className="text-xl md:text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={(e) => scrollToSection(e, "#")}
          >
            Faris
            <motion.span
              className="text-blue-400"
              animate={{
                color: ["#60A5FA", "#A78BFA", "#60A5FA"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              .Porto.Dev
            </motion.span>
          </motion.a>

          {/* Desktop Navigation with staggered animation */}
          <motion.div className="hidden md:flex items-center space-x-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full" transition={{ duration: 0.3 }} />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button with animation */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile menu dengan touch feedback yang lebih baik */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div className="md:hidden" initial={{ opacity: 0, height: 0, y: -10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <div className="px-2 pt-2 pb-4 space-y-1 bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 border border-gray-700/50">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all active:bg-gray-600/50"
                    onClick={(e) => scrollToSection(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
