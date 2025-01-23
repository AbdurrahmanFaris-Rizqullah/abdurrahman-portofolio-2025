"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [, setIsModalOpen] = useState(false);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: 100,
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
      scale: 0.5,
      y: -100,
      transition: {
        duration: 0.3,
      },
    },
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const certificates = [
    {
      id: 1,
      name: "Junior Web Programmer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "November 18, 2024",
      credentialId: "62090 2513 3 0113469 2024",
      imageUrl: "/certificates/bnsp web programmer.jpg",
      registrationNumber: "TIK 1565 35980 2024",
      type: "Professional Certification",
      validUntil: "November 18, 2027",
    },
    {
      id: 2,
      name: "Certificate of Internship Completion",
      issuer: "PT. Multi Solusindo (Urbansolv)",
      date: "January 01, 2025",
      credentialId: "042/USV.01.03.02/SFT/XII/2024",
      imageUrl: "/certificates/intern-urbansolv.png",
      type: "Internship Certificate",
      role: "Backend Programmer",
      location: "Jl. Tubagus Ismail XVI No. 7, Bandung, Indonesia",
      period: "October 7, 2024 - December 31, 2024",
      description: "Completed internship program as Backend Programmer in the Tech Division, demonstrating adequate performance in developing smart city solutions.",
    },
    {
      id: 4,
      name: "Junior Web Programmer",
      issuer: "Department of Informatics ITSK RS dr. Soepraoen",
      date: "July 23-24, 2024",
      credentialId: "015/LatJWP/VII/2024/Informatika",
      imageUrl: "/certificates/Cert (15)_Perlatihan Web Dev.jpg",
    },
    {
      id: 5,
      name: "Getting Started with Java Programming",
      issuer: "Dicoding Indonesia",
      date: "April 10, 2023",
      credentialId: "NVP7OGR94PRO",
      imageUrl: "/certificates/java.jpg",
      verifyLink: "https://dicoding.com/certificates/NVP7OGR94PRO",
      validUntil: "April 10, 2026",
    },
   
    {
      id: 7,
      name: "JavaScript Programming Fundamentals",
      issuer: "Dicoding Indonesia",
      date: "October 28, 2024",
      credentialId: "4EXG773YQPRL",
      imageUrl: "/certificates/javascript.jpg",
      verifyLink: "https://dicoding.com/certificates/4EXG773YQPRL",
      validUntil: "October 28, 2027",
    },
    {
      id: 8,
      name: "Introduction to Programming Logic (Programming Logic 101)",
      issuer: "Dicoding Indonesia",
      date: "June 03, 2024",
      credentialId: "0LZ0645NQZ65",
      imageUrl: "/certificates/logic.jpg",
      verifyLink: "https://dicoding.com/certificates/0LZ0645NQZ65",
      validUntil: "June 03, 2027",
    },
    {
      id: 9,
      name: "AI LABORATORY COMPUTER SIMULATION AT ITSK RS. DR. SOEPRAOEN ENTERING A NEW WORLD THROUGH VIRTUAL REALITY (VR)",
      issuer: "Directorate General of Intellectual Property",
      date: "February 21, 2024",
      credentialId: "EC00202416916",
      imageUrl: "/certificates/hak-cipta.jpg",
      type: "Copyright",
      registrationNumber: "000592286",
    },
    {
      id: 10,
      name: "Informatics Gathering Night 2023",
      issuer: "Informatics Student Association ITSK RS dr. Soepraoen",
      date: "2023",
      credentialId: "007/IGN/HIMATIF/2023",
      imageUrl: "/certificates/Abdurrahman-GatheringHimatif-007.png",
      role: "Committee",
    },
    {
      id: 6,
      name: "Basic Photography Course",
      issuer: "Riza Mulia Photography",
      date: "Malang June, 2023",
      credentialId: "PHOTO/2024/12/15",
      imageUrl: "/certificates/photography.jpg",
      type: "Course Certificate",
      role: "Photographer",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Collection of certificates and achievements obtained throughout my skill development and career journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:scale-[1.02]"
            >
              <div className="aspect-video relative cursor-pointer overflow-hidden" onClick={() => openModal(cert.imageUrl)}>
                <Image src={cert.imageUrl} alt={cert.name} width={320} height={240} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <motion.span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/20">Click to enlarge</motion.span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">{cert.name}</h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}

                  {cert.type && (
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span>Type: {cert.type}</span>
                    </div>
                  )}

                  {cert.role && (
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Role: {cert.role}</span>
                    </div>
                  )}

                  {cert.validUntil && (
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Valid until: {cert.validUntil}</span>
                    </div>
                  )}
                </div>

                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/30 transition-colors border border-blue-600/30"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verify
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md" variants={overlayVariants} initial="hidden" animate="visible" exit="exit" onClick={closeModal} />
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="relative max-w-7xl w-full" variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
                <motion.button className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10" onClick={closeModal} whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                <motion.img
                  src={selectedImage}
                  alt="Certificate Preview"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  whileDrag={{ scale: 0.95 }}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
