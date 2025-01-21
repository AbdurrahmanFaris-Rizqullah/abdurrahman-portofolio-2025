"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
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
    <section id="about" className="relative py-20 overflow-hidden">
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
        <motion.h2 className="text-4xl font-bold text-center text-white mb-16" variants={itemVariants}>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">About Me</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Team Image with hover effect */}
          <motion.div className="mb-12 relative group" variants={itemVariants}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <motion.div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Image src="/background/bersama.jpg" alt="Team Photo" width={1920} height={1080} className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              <motion.div className="absolute bottom-0 left-0 right-0 p-6" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <p className="text-white text-lg font-medium">With the Team at PT. Multi Solusindo (Urbansolv)</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bio Section */}
          <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-12 transform hover:scale-[1.02] transition-all hover:border-blue-500/50" variants={itemVariants}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a 6th-semester Informatics student at ITSK RS dr. Soepraoen Kesdam V/BRW Malang, with a strong passion for Backend Development and a keen interest in creating efficient, scalable systems. My academic journey has been
              complemented by hands-on experience in developing robust backend solutions and implementing modern technologies.
            </p>
          </motion.div>

          {/* Experience Grid */}
          <motion.div className="grid gap-8" variants={containerVariants}>
            {/* Work & Academic Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Experience */}
              <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transform hover:scale-[1.02] transition-all hover:border-blue-500/50" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <motion.span className="text-blue-500 text-2xl mr-3" animate={{ y: [-2, 2, -2] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    💼
                  </motion.span>
                  Professional Experience
                </h3>

                {/* Main Company */}
                <div className="mb-8">
                  <div className="text-2xl font-bold text-white">PT. Multi Solusindo (Urbansolv)</div>
                  <div className="text-blue-400 text-lg mb-1">Junior Backend Developer</div>
                  <div className="text-gray-400 mb-2">Oct 2024 - Dec 2024 • Dago, Bandung - Indonesia</div>
                  <div className="text-gray-300">
                    Urbansolv, part of SCCIC ITB, develops smart solutions (automation, IoT, AI) for smart cities and sustainable communities. Major clients: Ministry of Communication and Information Technology, NTU. Flagship products: CENA
                    & VAIA.
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Smart Building Simulator */}
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Smart Building Simulator</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2 mt-2">
                      <li>Developed backend systems using JavaScript (Next.js, Express.js) and Python (FlaskAPI, FastAPI), integrating monitoring features and machine learning workflows.</li>
                      <li>Independently trained initial machine learning models before the Data Science team joined, establishing foundations for subsequent model development and integration.</li>
                    </ul>
                  </div>

                  {/* Digital Twin */}
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Digital Twin - Water Monitoring System</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2 mt-2">
                      <li>
                        Managed the backend of a 3D water monitoring system for four dormitories (30 residents each). Designed and implemented process indicators for water filtration and distribution, improving sensor accuracy by 20% and
                        enabling flexible usage insights for researchers and facility managers.
                      </li>
                    </ul>
                  </div>

                  {/* Landing Page Urbansolv */}
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Landing Page Urbansolv</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2 mt-2">
                      <li>
                        Membangun dan mengoptimalkan sistem backend untuk landing page perusahaan menggunakan Next.js, memastikan performa dan skalabilitas yang efisien. Meningkatkan waktu respons sistem sebesar 35%, menghasilkan pengalaman
                        pengguna yang lebih baik.
                      </li>
                    </ul>
                  </div>

                  {/* Landing Page INSPIRASI */}
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Landing Page INSPIRASI</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2 mt-2">
                      <li>
                        Mengembangkan platform kolaboratif yang mendukung ITB, UI, UGM, ITS, dan NTU Singapore, berfokus pada "Cognitive Digital Twin as a Unified Platform for Smart Cities." Merancang ulang sistem backend menggunakan
                        Express.js, mengintegrasikan fitur untuk tata kelola, keberlanjutan, dan aplikasi perkotaan inovatif.
                      </li>
                      <li>
                        Meningkatkan efisiensi sistem sebesar 25%, memungkinkan kolaborasi yang lancar di antara 50+ peneliti dan pemangku kepentingan untuk mengatasi tantangan perubahan iklim dan mendorong pembangunan perkotaan
                        berkelanjutan.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Academic Experience */}
              <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transform hover:scale-[1.02] transition-all hover:border-green-500/50" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <motion.span className="text-green-500 text-2xl mr-3" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    🎓
                  </motion.span>
                  Pengalaman Akademik
                </h3>

                {/* Main Education */}
                <div className="mb-8">
                  <div className="text-2xl font-bold text-white">Institut Teknologi Sains & Kesehatan RS dr. Soepraoen Kesdam V / BRW</div>
                  <div className="text-green-400 text-lg mb-1">Bachelor of Informatics</div>
                  <div className="text-gray-400 mb-2">Aug 2022 - Aug 2026 (Expected) • GPA: 3.79/4.00</div>
                  <div className="text-gray-300">Malang, Jawa Timur, Indonesia</div>
                </div>

                <div className="space-y-8">
                  {/* Student Creativity Program */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Student Creativity Program (PKM)</div>
                    <div className="text-green-400 text-sm mb-1">ITSK RS dr. Soepraoen</div>
                    <div className="text-gray-400 text-sm mb-2">2024 - 2025</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Memimpin pengembangan dan koordinasi proyek implementasi Augmented Reality (AR) pada hardware laptop untuk memfasilitasi inspeksi hardware tanpa membuka perangkat fisik (PKM-KC 2024)</li>
                      <li>Memimpin proyek penelitian berjudul "Prediksi Sensitivitas Obat pada Sel Kanker Berdasarkan Profil Genomik Menggunakan Teknik Regresi", berkolaborasi dengan Data Scientist dan penulis (PKM-AI 2025)</li>
                    </ul>
                  </div>

                  {/* BNSP Certification */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">National Professional Certification Agency (BNSP)</div>
                    <div className="text-green-400 text-sm mb-1">ITSK RS dr. Soepraoen</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Berpartisipasi dalam program sertifikasi Social Media Marketing dengan fokus pada strategi dan teknik untuk engagement online dan promosi brand</li>
                      <li>Berhasil menyelesaikan program sertifikasi Junior Web Programmer, dengan fokus pada Native PHP, CodeIgniter, HTML, dan CSS</li>
                    </ul>
                  </div>

                  {/* Public Information Dashboard */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Developer Web-based Public Information Dashboard</div>
                    <div className="text-green-400 text-sm mb-1">E-Government Project</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Terlibat sebagai lead, koordinator, dalam pengembangan dan desain "Web-based Public Information Dashboard E-Government" yang meningkatkan tampilan visual dan aksesibilitas informasi publik</li>
                      <li>Mengembangkan fitur-fitur utama bersama 4 anggota tim lainnya, dengan proyeksi peningkatan jumlah pengguna aktif sebesar 30-40% dalam tiga bulan pertama</li>
                    </ul>
                  </div>

                  {/* Boarding House Management System */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Developer Web-Base Boarding House Management System</div>
                    <div className="text-green-400 text-sm mb-1">Campus Project</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Terlibat sebagai lead, koordinator, menganalisis, dan mendesain pengembangan "Web-based Boarding House Management System" yang saat ini dalam tahap pengembangan</li>
                    </ul>
                  </div>

                  {/* AI Laboratory Simulation */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Creator AI Laboratory Simulation</div>
                    <div className="text-green-400 text-sm mb-1">VR Campus Project</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Berkontribusi sebagai lead dan kreator utama dalam pengembangan program komputer berhak cipta berjudul "AI Laboratory Simulation at ITSK RS. DR. Soepraoen Entering a New World Through Virtual Reality (VR)"</li>
                      <li>Program diproyeksikan akan digunakan oleh lebih dari 100 mahasiswa, meningkatkan kemudahan akses informasi kampus sebesar 40-50%</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Organizations */}
            <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transform hover:scale-[1.02] transition-all hover:border-purple-500/50" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <motion.span className="text-purple-500 text-2xl mr-3" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  🎯
                </motion.span>
                Organisasi
              </h3>
              <div className="space-y-8">
                {/* HMIF */}
                <div className="relative pl-6 border-l-2 border-purple-500 hover:bg-purple-500/10 rounded-lg p-4 transition-all">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-2xl font-bold text-white">Himpunan Mahasiswa Informatika ITSK RS dr Soepraoen</div>
                  <div className="text-purple-400 text-lg mb-1">Head Of the Promotion Division</div>
                  <div className="text-gray-400 mb-2">Oct 2022 - Oct 2024 • Malang, Jawa Timur, Indonesia</div>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Mengkoordinasikan produksi video, desain, dan dokumentasi untuk Himpunan Mahasiswa, menghasilkan 10+ proyek per semester dengan tingkat kepuasan 90% dari stakeholder.</li>
                    <li>
                      Mengelola dan mendelegasikan tugas di antara 19 anggota Divisi Promosi, meningkatkan efisiensi tugas sebesar 30% dan memenuhi semua tenggat waktu selama 12 bulan. Memperbarui 3 program utama, meningkatkan dampak divisi
                      sebesar 40%, dan meningkatkan jumlah mahasiswa baru sebesar 30%.
                    </li>
                    <li>
                      Mengembangkan dan mengimplementasikan strategi promosi bulanan untuk asosiasi dan program studi informatika. Berkolaborasi dengan tim untuk brainstorming dan menargetkan ide-ide promosi inovatif. Berhasil memperbarui
                      dan memperbarui program Divisi Promosi dari tahun sebelumnya, menghasilkan peningkatan 40% dalam dampak divisi dan pertumbuhan 30% dalam jumlah mahasiswa baru.
                    </li>
                  </ul>
                </div>

                {/* IN CRUST WE RUSH */}
                <div className="relative pl-6 border-l-2 border-purple-500 hover:bg-purple-500/10 rounded-lg p-4 transition-all">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-2xl font-bold text-white">IN CRUST WE RUSH (White Hat Community)</div>
                  <div className="text-purple-400 text-lg mb-1">Member</div>
                  <div className="text-gray-400 mb-2">Jun 2023 - Present • Malang, Jawa Timur, Indonesia</div>
                  <div className="text-gray-300 mb-4">Komunitas yang berfokus pada aktivitas white hat dan berbagai bidang informatika, termasuk pemrograman web, Python, dan lainnya.</div>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Berkontribusi dalam pengembangan modul ethical hacking dan cybersecurity, meningkatkan sumber daya edukasi untuk anggota komunitas.</li>
                    <li>
                      Berpartisipasi dalam pelatihan kesadaran keamanan dan aktivitas pengajaran di Universitas Muhammadiyah Malang (UMM) dan Universitas Kanjuruhan Malang (UNIKAMA), melibatkan 200+ mahasiswa dan staf untuk mempromosikan
                      praktik terbaik cybersecurity.
                    </li>
                  </ul>
                </div>

                {/* M-time */}
                <div className="relative pl-6 border-l-2 border-purple-500 hover:bg-purple-500/10 rounded-lg p-4 transition-all">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-2xl font-bold text-white">Creative Agency "Managetime ( M-time )"</div>
                  <div className="text-purple-400 text-lg mb-1">Co-Founder, Specializing Programmer & Photo/Video grapher</div>
                  <div className="text-gray-400 mb-2">Apr 2024 - Present • Malang, Jawa Timur, Indonesia</div>
                  <div className="text-gray-300 mb-4">
                    Mtime adalah agensi kreatif, yang mengkhususkan diri dalam pemrograman, multimedia, UI UX design, dan engaging content creator untuk membantu dan memberikan solusi konseptualisasi proyek klien.
                  </div>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Berkontribusi sebagai co-founder dalam pendirian agensi kreatif ini, membantu mendefinisikan model bisnis dan penawaran layanan.</li>
                    <li>Berperan sebagai spesialis utama dalam pemrograman dan multimedia, memastikan output teknis dan kreatif berkualitas tinggi.</li>
                    <li>Memainkan peran kunci dalam pengembangan, analisis, dan desain website Mtime, berkontribusi pada fungsionalitas dan pengalaman pengguna secara keseluruhan.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
