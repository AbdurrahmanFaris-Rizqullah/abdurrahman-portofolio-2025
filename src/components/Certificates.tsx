"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      id: 2,
      name: "Junior Web Programmer",
      issuer: "Program Studi Sarjana Informatika ITSK RS dr. Soepraoen",
      date: "23-24 Juli 2024",
      credentialId: "015/LatJWP/VII/2024/Informatika",
      imageUrl: "/certificates/Cert (15)_Perlatihan Web Dev.jpg",
    },
    {
      id: 3,
      name: "Memulai Pemrograman Dengan Java",
      issuer: "Dicoding Indonesia",
      date: "10 April 2023",
      credentialId: "NVP7OGR94PRO",
      imageUrl: "/certificates/java.jpg",
      verifyLink: "https://dicoding.com/certificates/NVP7OGR94PRO",
      validUntil: "10 April 2026",
    },
    {
      id: 4,
      name: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "28 Oktober 2024",
      credentialId: "4EXG773YQPRL",
      imageUrl: "/certificates/javascript.jpg",
      verifyLink: "https://dicoding.com/certificates/4EXG773YQPRL",
      validUntil: "28 Oktober 2027",
    },
    {
      id: 5,
      name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding Indonesia",
      date: "03 Juni 2024",
      credentialId: "0LZ0645NQZ65",
      imageUrl: "/certificates/logic.jpg",
      verifyLink: "https://dicoding.com/certificates/0LZ0645NQZ65",
      validUntil: "03 Juni 2027",
    },
    {
      id: 6,
      name: "SIMULASI LAB KOMPUTER ARTIFICIAL INTELLIGENCE (AI) DI ITSK RS. DR. SOEPRAOEN MEMASUKI DUNIA BARU MELALUI VIRTUAL REALITY (VR)",
      issuer: "Direktorat Jenderal Kekayaan Intelektual",
      date: "21 Februari 2024",
      credentialId: "EC00202416916",
      imageUrl: "/certificates/hak-cipta.jpg",
      type: "Hak Cipta",
      registrationNumber: "000592286",
    },
    {
      id: 1,
      name: "Informatics Gathering Night 2023",
      issuer: "Himpunan Mahasiswa Informatika ITSK RS dr. Soepraoen",
      date: "2023",
      credentialId: "007/IGN/HIMATIF/2023",
      imageUrl: "/certificates/Abdurrahman-GatheringHimatif-007.png",
      role: "Panitia",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sertifikasi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Kumpulan sertifikat dan pencapaian yang telah diperoleh dalam perjalanan pengembangan skill dan karir</p>
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
                <img src={cert.imageUrl} alt={cert.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <motion.span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/20" initial={{ y: 10 }} whileHover={{ y: 0 }} transition={{ duration: 0.2 }}>
                    Klik untuk memperbesar
                  </motion.span>
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

                  {cert.validUntil && (
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Berlaku hingga: {cert.validUntil}</span>
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
                    Verifikasi
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
