"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
        </div>

        {/* Improved gradient orbs with multiple layers */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Enhanced particles with different sizes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${i % 3 === 0 ? "w-1 h-1 bg-blue-400/50" : i % 3 === 1 ? "w-2 h-2 bg-purple-400/40" : "w-1.5 h-1.5 bg-indigo-400/45"}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -500],
                x: [null, Math.random() * 200 - 100],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div className="container relative z-10 mx-auto px-4" variants={containerVariants} initial="hidden" animate="visible">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Profile Image */}
          <motion.div className="relative w-48 h-48 mx-auto mb-12" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 1, bounce: 0.5 }}>
            {/* Multiple glow layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-75 blur-lg animate-pulse" />
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full opacity-50 blur-xl animate-pulse delay-300" />

            {/* Rotating border with double layers */}
            <motion.div className="absolute -inset-1 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <div
                className="h-full w-full rounded-full border-4 border-transparent"
                style={{
                  background: "linear-gradient(white, white) padding-box, linear-gradient(45deg, #3B82F6, #A855F7, #3B82F6) border-box",
                }}
              />
            </motion.div>
            <motion.div className="absolute -inset-2 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
              <div
                className="h-full w-full rounded-full border-2 border-transparent opacity-50"
                style={{
                  background: "linear-gradient(white, white) padding-box, linear-gradient(-45deg, #3B82F6, #A855F7, #3B82F6) border-box",
                }}
              />
            </motion.div>

            {/* Profile image container with enhanced hover effect */}
            <div className="relative w-full h-full rounded-full p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="relative group">
                  <Image src="/profile.jpg" alt="Abdurrahman Faris Rizqullah" width={192} height={192} className="rounded-full object-cover transition-all duration-300 group-hover:grayscale-[50%]" priority />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Text Content */}
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text" variants={itemVariants}>
            Abdurrahman Faris Rizqullah
          </motion.h1>

          <motion.div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10" variants={itemVariants}>
            {/* Enhanced role badges */}
            <div className="text-xl text-gray-300 flex items-center gap-3 backdrop-blur-sm bg-white/5 px-8 py-3 rounded-full border border-white/10 hover:border-blue-500/30 transition-colors duration-300">
              <motion.span className="text-blue-400" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                👨‍💻
              </motion.span>
              Backend Developer
            </div>
            <div className="text-xl text-gray-300 flex items-center gap-3 backdrop-blur-sm bg-white/5 px-8 py-3 rounded-full border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
              <motion.span className="text-purple-400" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                🎓
              </motion.span>
              Informatics Student
            </div>
          </motion.div>

          <motion.p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
            6th semester Informatics undergraduate student at ITSK RS dr. Soepraoen Kesdam V/BRW Malang, passionate about backend development and creating efficient, scalable systems.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full 
                font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300
                shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gray-800/50 text-white rounded-full font-semibold
                border-2 border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="mt-12 flex justify-center gap-6" variants={itemVariants}>
            <motion.a
              href="https://github.com/AbdurrahmanFaris-Rizqullah"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abdurrahman-faris-rizqullah-4612a303/"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
