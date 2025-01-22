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
                  <div className="text-blue-400 text-lg mb-1">Junior Backend Programmer</div>
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
                        Built and optimized the backend system for the company landing page using Next.js, ensuring efficient performance and scalability. Improved system response time by 35%, resulting in better user experience.
                      </li>
                    </ul>
                  </div>

                  {/* Landing Page INSPIRASI */}
                  <div className="relative pl-6 border-l-2 border-blue-500">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Landing Page INSPIRASI</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2 mt-2">
                      <li>
                        Developed a collaborative platform supporting ITB, UI, UGM, ITS, and NTU Singapore, focusing on "Cognitive Digital Twin as a Unified Platform for Smart Cities." Redesigned the backend system using Express.js, integrating features for governance, sustainability, and innovative urban applications.
                      </li>
                      <li>
                        Improved system efficiency by 25%, enabling seamless collaboration among 50+ researchers and stakeholders to address climate change challenges and drive sustainable urban development.
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
                  Academic Experience
                </h3>

                {/* Main Education */}
                <div className="mb-8">
                  <div className="text-2xl font-bold text-white">Institut Teknologi Sains & Kesehatan RS dr. Soepraoen Kesdam V / BRW</div>
                  <div className="text-green-400 text-lg mb-1">Bachelor of Informatics</div>
                  <div className="text-gray-400 mb-2">Aug 2022 - Aug 2026 (Expected) • GPA: 3.79/4.00</div>
                  <div className="text-gray-300">Malang, East Java, Indonesia</div>
                </div>

                <div className="space-y-8">
                  {/* Student Creativity Program */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Student Creativity Program (PKM)</div>
                    <div className="text-green-400 text-sm mb-1">Kementerian Riset, Teknologi, dan Pendidikan Tinggi (Kemenristekdikti)</div>
                    <div className="text-gray-400 text-sm mb-2">2024 - 2025</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Led the development and coordination of an Augmented Reality (AR) implementation project for laptop hardware to facilitate hardware inspection without opening physical devices (PKM-KC 2024)</li>
                      <li>Led a research project titled "Drug Sensitivity Prediction in Cancer Cells Based on Genomic Profiles Using Regression Techniques", collaborating with Data Scientists and writers (PKM-AI 2025)</li>
                    </ul>
                  </div>

                  {/* BNSP Certification */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">National Professional Certification Agency (BNSP)</div>
                    <div className="text-green-400 text-sm mb-1">Badan Nasional Sertifikasi Profesi (BNSP)</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Participated in Social Media Marketing certification program focusing on strategies and techniques for online engagement and brand promotion</li>
                      <li>Successfully completed Junior Web Programmer certification program, focusing on Native PHP, CodeIgniter, HTML, and CSS</li>
                    </ul>
                  </div>

                  {/* Public Information Dashboard */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Developer Web-based Public Information Dashboard</div>
                    <div className="text-green-400 text-sm mb-1">ITSK RS dr. Soepraoen Kesdam V/BRW</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Served as lead coordinator in the development and design of "Web-based Public Information Dashboard E-Government" improving visual presentation and accessibility of public information</li>
                      <li>Developed key features with 4 other team members, projecting a 30-40% increase in active users within the first three months</li>
                    </ul>
                  </div>

                  {/* Boarding House Management System */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Developer Web-Base Boarding House Management System</div>
                    <div className="text-green-400 text-sm mb-1">ITSK RS dr. Soepraoen Kesdam V/BRW</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Served as lead coordinator, analyzing and designing the development of "Web-based Boarding House Management System" currently in development phase</li>
                    </ul>
                  </div>

                  {/* AI Laboratory Simulation */}
                  <div className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2"></div>
                    <div className="text-white font-medium">Creator AI Laboratory Simulation</div>
                    <div className="text-green-400 text-sm mb-1">Direktorat Jenderal Kekayaan Intelektual (DJKI)</div>
                    <div className="text-gray-400 text-sm mb-2">2023</div>
                    <ul className="list-disc pl-4 text-gray-300 space-y-2">
                      <li>Contributed as lead and main creator in developing copyrighted computer program titled "AI Laboratory Simulation at ITSK RS. DR. Soepraoen Entering a New World Through Virtual Reality (VR)"</li>
                      <li>Program projected to be used by over 100 students, increasing campus information accessibility by 40-50%</li>
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
                Organizations
              </h3>
              <div className="space-y-8">
                {/* HMIF */}
                <div className="relative pl-6 border-l-2 border-purple-500 hover:bg-purple-500/10 rounded-lg p-4 transition-all">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-2xl font-bold text-white">Informatics Student Association ITSK RS dr Soepraoen</div>
                  <div className="text-purple-400 text-lg mb-1">Head Of the Promotion Division</div>
                  <div className="text-gray-400 mb-2">Oct 2022 - Oct 2024 • Malang, East Java, Indonesia</div>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Coordinated video production, design, and documentation for the Student Association, delivering 10+ projects per semester with 90% stakeholder satisfaction.</li>
                    <li>
                      Managed and delegated tasks among 19 Promotion Division members, improving task efficiency by 30% and meeting all deadlines over 12 months. Updated 3 main programs, increasing division impact by 40% and new student enrollment by 30%.
                    </li>
                    <li>
                      Developed and implemented monthly promotion strategies for the association and informatics study program. Collaborated with the team for brainstorming and targeting innovative promotional ideas. Successfully updated and renewed Promotion Division programs from the previous year, resulting in a 40% increase in division impact and 30% growth in new student numbers.
                    </li>
                  </ul>
                </div>

                {/* IN CRUST WE RUSH */}
                <div className="relative pl-6 border-l-2 border-purple-500 hover:bg-purple-500/10 rounded-lg p-4 transition-all">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-2xl font-bold text-white">IN CRUST WE RUSH (White Hat Community)</div>
                  <div className="text-purple-400 text-lg mb-1">Member</div>
                  <div className="text-gray-400 mb-2">Jun 2023 - Present • Malang, East Java, Indonesia</div>
                  <div className="text-gray-300 mb-4">Community focused on white hat activities and various informatics fields, including web programming, Python, and others.</div>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Contributed to the development of ethical hacking and cybersecurity modules, enhancing educational resources for community members.</li>
                    <li>
                      Participated in security awareness training and teaching activities at Muhammadiyah University of Malang (UMM) and Kanjuruhan University of Malang (UNIKAMA), engaging 200+ students and staff to promote cybersecurity best practices.
                    </li>
                  </ul>
                </div>

                {/* M-time */}
                <div className="relative pl-6 border-l-2 border-purple-500 hover:bg-purple-500/10 rounded-lg p-4 transition-all">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                  <div className="text-2xl font-bold text-white">Creative Agency "Managetime ( M-time )"</div>
                  <div className="text-purple-400 text-lg mb-1">Co-Founder, Specializing Programmer & Photo/Video grapher</div>
                  <div className="text-gray-400 mb-2">Apr 2024 - Present • Malang, East Java, Indonesia</div>
                  <div className="text-gray-300 mb-4">
                    Mtime is a creative agency, specializing in programming, multimedia, UI UX design, and engaging content creation to help and provide solutions for client project conceptualization.
                  </div>
                  <ul className="list-disc pl-4 text-gray-300 space-y-2">
                    <li>Contributed as co-founder in establishing this creative agency, helping define business model and service offerings.</li>
                    <li>Served as key specialist in programming and multimedia, ensuring high-quality technical and creative output.</li>
                    <li>Played a key role in the development, analysis, and design of Mtime website, contributing to overall functionality and user experience.</li>
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
