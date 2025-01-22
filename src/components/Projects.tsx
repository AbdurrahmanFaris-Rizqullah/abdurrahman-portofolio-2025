"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    tech: string[];
  }>(null);

  // State baru untuk popup gambar
  const [selectedImage, setSelectedImage] = useState<null | {
    url: string;
    title: string;
  }>(null);

  const projects = [
    {
      title: "Waterwise - Digital Twin Water Monitoring",
      description: "Digital twin 3D monitoring system for water distribution implemented at Urbansolv. Developed backend for process indicators and integration with 3D visualization for real-time monitoring. Part of Urbansolv's smart city solutions focusing on sustainable water management.",
      tech: ["Express.js", "Node.js", "PostgreSQL", "Prisma", "WebSocket"],
      demoLink: "https://waterwise.urbansolv.co.id/3d-layer",
      image: "/projects/waterwise.png",
      isProduction: true,
    },
    {
      title: "Urbansolv Landing Page Backend",
      description: "Developed and optimized the backend for Urbansolv's corporate website, a leading provider of smart city solutions specializing in 3D geospatial technology. Implemented content management system and integrated with frontend to showcase services including Digital Twin, Smart Building, and Geospatial Analytics.",
      tech: ["Node.js", "Next.js", "PostgreSQL", "Prisma", "Cloudinary", "TypeScript"],
      demoLink: "https://urbansolv.co.id/home",
      image: "/projects/landing-page.png",
      isProduction: true,
    },
    {
      title: "INSPIRASI Platform",
      description: "Collaborative platform supporting ITB, UI, UGM, ITS, and NTU Singapore, focusing on Cognitive Digital Twin as a Unified Platform for Smart Cities. Integrated features for urban governance, sustainability monitoring, and innovative city applications.",
      tech: ["Express.js", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
      image: "/projects/inspirasi.png",
      isProduction: true,
    },
    {
      title: "Digital Twin - Smart Building Monitoring",
      description: "3D digital twin monitoring system for building management. Developed process indicators and integrated with 3D visualization for real-time monitoring and analysis. Features include sensor data processing, real-time alerts, and analytics dashboard.",
      tech: ["Express.js", "Node.js", "PostgreSQL", "Prisma"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/backend-digital-twin",
      image: "/projects/digital-twin-api.png",
    },
    {
      title: "Smart Building with Machine Learning",
      description: "Smart building system with machine learning implementation for prediction and optimization. Conducted ML model training and developed API integration with monitoring systems. Includes predictive maintenance and energy optimization features.",
      tech: ["Python", "FastAPI", "SQLAlchemy", "Machine Learning", "PostgreSQL"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/smartBuilding-api",
      image: "/projects/smartbuilding-ml.png",
    },
    {
      title: "Smart Building Monitoring System",
      description: "Initial version of smart building monitoring system with rule-based approach. Implemented control logic and monitoring for various building parameters.",
      tech: ["Express.js", "Prisma", "PostgreSQL", "Node.js"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/SmartBuilding---Express",
      image: "/projects/smartbuilding-js.png",
    },
    {
      title: "Building Management API",
      description: "RESTful API for building data management with multi-image upload feature using Cloudinary. TypeScript implementation for enhanced type safety and maintainability.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudinary"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/Building-API-NEXT-JS",
      image: "/projects/building-next.png",
    },
    {
      title: "Infrastructure Monitoring API",
      description: "API for city infrastructure monitoring with polygon mapping between coordinates. Enables visualization and analysis of infrastructure distribution.",
      tech: ["Express.js", "Sequelize", "PostgreSQL", "GeoJSON", "Swagger"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/pemantauan-infrastruktur-api",
      image: "/projects/infrastructure.png",
    },
    {
      title: "Boarding House Management API",
      description: "Boarding house management API with structured error handling and comprehensive middleware implementation. Focus on reliability and maintainability.",
      tech: ["Express.js", "Sequelize", "PostgreSQL", "Error Handling"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/Boarding-house-api",
      image: "/projects/boarding-house.png",
    },
    {
      title: "Location Management API",
      description: "CRUD API for location management with JWT authentication implementation. Location management system with security features and data validation.",
      tech: ["Express.js", "MongoDB", "JWT", "Node.js"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/Lokasi-API",
      image: "/projects/location-api.jpg",
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.75,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Tambahkan variants untuk image popup
  const imagePopupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
        </div>

        {/* Improved gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Enhanced particles */}
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

      <motion.div className="container mx-auto px-4 relative z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Enhanced header section */}
        <div className="text-center mb-16 relative">
          <motion.span className="text-blue-400 font-semibold mb-2 block tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            PORTFOLIO
          </motion.span>
          <motion.h2
            className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Project Showcase
          </motion.h2>
          <motion.p className="text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            Collection of developed projects focusing on backend development, monitoring systems, and modern technology implementation
          </motion.p>
        </div>

        {/* Enhanced project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Project image with enhanced hover effects */}
              <div className="relative aspect-video cursor-pointer overflow-hidden" onClick={() => setSelectedImage({ url: project.image, title: project.title })}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />

                {/* Enhanced hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <motion.div className="px-4 py-2 bg-black/50 text-white rounded-lg backdrop-blur-sm border border-white/10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Click to enlarge
                  </motion.div>
                </div>
              </div>

              {/* Enhanced content section */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>

                <p className="text-gray-400 line-clamp-3">{project.description}</p>

                {/* Enhanced tech stack display */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="text-xs bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full border border-blue-600/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 px-4 py-2 rounded-lg transition-all duration-300 border border-blue-600/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Details
                  </motion.button>

                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-4 py-2 rounded-lg transition-all duration-300 border border-purple-600/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-600/20 hover:bg-gray-600/30 text-gray-400 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-600/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal dengan animasi */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" variants={overlayVariants} initial="hidden" animate="visible" exit="exit" onClick={() => setSelectedProject(null)} />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900/95 rounded-xl p-6 max-w-lg w-full shadow-2xl border border-white/10"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <motion.h3 className="text-xl font-semibold text-white" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    {selectedProject.title}
                  </motion.h3>
                  <motion.button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full" whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <motion.p className="text-gray-300 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  {selectedProject.description}
                </motion.p>

                <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  {selectedProject.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full border border-blue-600/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} />
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="relative max-w-7xl w-full" variants={imagePopupVariants} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
                <motion.button className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10" onClick={() => setSelectedImage(null)} whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                <motion.img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.h4 className="text-white text-center mt-4 text-lg font-medium" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  {selectedImage.title}
                </motion.h4>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
