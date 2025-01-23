"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Di bagian atas file, tambahkan type untuk color
type ContactColor = "blue" | "green" | "purple" | "gray" | "red";

// Data kontak dan gambar
const CONTACTS = [
  {
    title: "Email",
    value: "nugasriz03@gmail.com", 
    iconUrl: "https://cdn.simpleicons.org/gmail/white",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=nugasriz03@gmail.com",
    color: "blue" as ContactColor,
    gradient: "from-blue-500 to-cyan-400",
  },  
  {
    title: "WhatsApp",
    value: "+62 85230184717",
    iconUrl: "https://cdn.simpleicons.org/whatsapp/white",
    link: "https://wa.me/6285230184717",
    color: "green" as ContactColor,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "LinkedIn",
    value: "abdurrahman-faris-rizqullah",
    iconUrl: "/icons/linkedin-app-white-icon.webp", // Using local SVG file instead of CDN
    link: "https://www.linkedin.com/in/abdurrahman-faris-rizqullah/",
    color: "purple" as ContactColor, 
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    title: "GitHub",
    value: "AbdurrahmanFaris-Rizqullah",
    iconUrl: "https://cdn.simpleicons.org/github/white",
    link: "https://github.com/AbdurrahmanFaris-Rizqullah",
    color: "gray" as ContactColor,
    gradient: "from-gray-600 to-gray-500",
  },
  {
    title: "Lokasi",
    value: "Kota Malang, Jawa Timur, Indonesia",
    iconUrl: "https://cdn.simpleicons.org/googlemaps/white",
    link: "https://maps.google.com/?q=Kota+Malang",
    color: "red" as ContactColor,
    gradient: "from-red-500 to-rose-400",
  },
];

const ICWR_IMAGES = [
  {
    src: "/background/icwr.jpg",
    date: "January 18, 2025",
    title: "Building Cybersecurity Awareness in the Digital Era",
    description: "Sharing deep insights about the importance of cybersecurity and best practices in securing digital data with UNIKAMA students",
  },
  {
    src: "/background/icwr 2.JPG",
    date: "July 14, 2024",
    title: "Hacking Testing with ICWR",
    description: "Sharing Security Awareness Knowledge with Aufklarung from University of Muhammadiyah Malang",
  },
];

// Komponen untuk kartu kontak
const ContactCard = ({ contact }: { contact: (typeof CONTACTS)[0] }) => {
  const colorClasses: Record<ContactColor, string> = {
    blue: "text-blue-400 hover:text-blue-300",
    green: "text-green-400 hover:text-green-300",
    purple: "text-purple-400 hover:text-purple-300",
    gray: "text-gray-400 hover:text-gray-300",
    red: "text-red-400 hover:text-red-300",
  };

  return (
    <motion.a href={contact.link} target="_blank" rel="noopener noreferrer" className="group relative" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.gradient} rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500`} />
      <div className="relative flex items-start space-x-4 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-transparent transform hover:scale-[1.02] transition-all duration-300">
        <div className="w-8 h-8 rounded-lg bg-gray-700/50 p-1.5 flex items-center justify-center group-hover:bg-gray-700/70 transition-colors duration-300">
          <Image src={contact.iconUrl} alt={`${contact.title} icon`} width={32} height={32} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${colorClasses[contact.color]} mb-1`}>{contact.title}</h3>
          <p className="text-gray-300 group-hover:text-white transition-colors">{contact.value}</p>
        </div>
        <span className={`${colorClasses[contact.color]} group-hover:translate-x-1 transition-transform duration-300`}>→</span>
      </div>
    </motion.a>
  );
};

// Komponen untuk galeri gambar
const ImageGallery = ({ image }: { image: (typeof ICWR_IMAGES)[0] }) => (
  <motion.div className="relative group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }}>
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
    <div className="relative rounded-2xl overflow-hidden bg-gray-800">
      <div className="relative aspect-video">
        <Image src={image.src} alt={image.title} fill className="object-cover transform group-hover:scale-110 transition duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-400">📅</span>
          <span className="text-blue-400 text-sm font-medium">{image.date}</span>
        </div>
        <p className="text-white text-xl font-medium mb-2">{image.title}</p>
        <p className="text-gray-300">{image.description}</p>
      </div>
    </div>
  </motion.div>
);

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -500],
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

      <motion.div className="container relative z-10 mx-auto px-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 className="text-4xl font-bold text-center mb-16" variants={itemVariants}>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Let&apos;s Connect</span>
        </motion.h2>

        {/* ICWR Images Gallery */}
        <motion.div className="max-w-6xl mx-auto mb-16" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ICWR_IMAGES.map((image, index) => (
              <ImageGallery key={index} image={image} />
            ))}
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTACTS.map((contact, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ContactCard contact={contact} />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Interested in collaboration or have questions? Feel free to reach out through any of the platforms above.</p>
            <motion.a
              href="https://wa.me/6285230184717"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
              Chat via WhatsApp
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <p className="text-gray-400">© 2024 Abdurrahman Faris Rizqullah. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
