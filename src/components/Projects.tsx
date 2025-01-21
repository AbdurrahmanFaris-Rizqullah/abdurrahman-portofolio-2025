"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    tech: string[];
  }>(null);

  const projects = [
    {
      title: "Waterwise - Digital Twin Water Monitoring",
      description: "Sistem monitoring digital twin 3D untuk pemantauan distribusi air yang diimplementasikan di Urbansolv. Mengembangkan backend untuk indikator proses dan integrasi dengan visualisasi 3D untuk monitoring real-time.",
      tech: ["Express.js", "Node.js", "PostgreSQL", "Prisma", "WebSocket"],
      demoLink: "https://waterwise.urbansolv.co.id/3d-layer",
      image: "/images/projects/waterwise.jpg",
      isProduction: true,
    },
    {
      title: "Urbansolv Landing Page Backend",
      description: "Pengembangan backend untuk landing page Urbansolv, perusahaan yang berfokus pada solusi smart city dan 3D geospatial. Mengimplementasikan sistem manajemen konten dan integrasi dengan frontend.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Content Management"],
      demoLink: "https://urbansolv.co.id/home",
      image: "/images/projects/urbansolv.jpg",
      isProduction: true,
    },
    {
      title: "Digital Twin - Smart Building 3D Water Monitoring",
      description: "Sistem monitoring digital twin 3D untuk pemantauan distribusi air. Mengembangkan indikator proses dan mengintegrasikannya dengan visualisasi 3D untuk monitoring real-time.",
      tech: ["Express.js", "Node.js", "PostgreSQL", "Prisma"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/backend-digital-twin",
      image: "/images/projects/digital-twin.jpg",
    },
    {
      title: "Smart Building with Machine Learning",
      description: "Sistem smart building dengan implementasi machine learning untuk prediksi dan optimasi. Melakukan pelatihan model ML dan pengembangan API untuk integrasi dengan sistem monitoring.",
      tech: ["Python", "FastAPI", "SQLAlchemy", "Machine Learning", "PostgreSQL"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/smartBuilding-api",
      image: "/images/projects/smart-building-ml.jpg",
    },
    {
      title: "Smart Building Monitoring System",
      description: "Sistem monitoring smart building versi awal dengan pendekatan rule-based. Mengimplementasikan logika kontrol dan monitoring untuk berbagai parameter bangunan.",
      tech: ["Express.js", "Prisma", "PostgreSQL", "Node.js"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/SmartBuilding---Express",
      image: "/images/projects/smart-building.jpg",
    },
    {
      title: "Building Management API",
      description: "RESTful API untuk manajemen data bangunan dengan fitur upload multi-gambar menggunakan Cloudinary. Implementasi TypeScript untuk type safety dan maintainability yang lebih baik.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Cloudinary"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/Building-API-NEXT-JS",
      image: "/images/projects/building-api.jpg",
    },
    {
      title: "Infrastructure Monitoring API",
      description: "API untuk pemantauan infrastruktur kota dengan fitur polygon mapping antar koordinat. Memungkinkan visualisasi dan analisis sebaran infrastruktur.",
      tech: ["Express.js", "Sequelize", "PostgreSQL", "GeoJSON"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/pemantauan-infrastruktur-api",
      image: "/images/projects/infrastructure.jpg",
    },
    {
      title: "Boarding House Management API",
      description: "API manajemen kost dengan implementasi error handling terstruktur dan middleware komprehensif. Fokus pada reliability dan maintainability.",
      tech: ["Express.js", "Sequelize", "PostgreSQL", "Error Handling"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/Boarding-house-api",
      image: "/images/projects/boarding-house.jpg",
    },
    {
      title: "Location Management API",
      description: "CRUD API lokasi dengan implementasi autentikasi JWT. Sistem manajemen lokasi dengan fitur keamanan dan validasi data.",
      tech: ["Express.js", "MongoDB", "JWT", "Node.js"],
      github: "https://github.com/AbdurrahmanFaris-Rizqullah/Lokasi-API",
      image: "/images/projects/location-api.jpg",
    },
  ];

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

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      {/* Background dengan gradient dan pattern */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
            <svg className="w-64 h-64 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-blue-400 font-semibold mb-2 block tracking-wider">PORTFOLIO</span>
          <h2 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Project Showcase</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Kumpulan proyek yang telah dikembangkan dengan fokus pada backend development, sistem monitoring, dan implementasi teknologi modern</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card content dengan z-index yang lebih tinggi */}
              <div className="relative z-10">
                <div className="aspect-video relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                  {project.isProduction && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30 backdrop-blur-sm">Production</span>
                    </div>
                  )}
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-4">{project.title}</h3>

                  <div className="mb-4">
                    <p className="text-gray-400 line-clamp-2">{project.description}</p>
                    <button onClick={() => setSelectedProject(project)} className="text-blue-400 hover:text-blue-300 text-sm mt-2 focus:outline-none">
                      Baca selengkapnya...
                    </button>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full border border-blue-600/20 hover:bg-blue-600/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 relative z-20">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-gray-700/70 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Repository
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </section>
  );
};

export default Projects;
