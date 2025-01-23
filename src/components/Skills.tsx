"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  iconUrl?: string;
}

const Skills = () => {
  const [skills] = useState<Record<string, Skill[]>>({
    Backend: [
      { id: 1, name: "Node.js", category: "Backend", proficiency: 90, iconUrl: "https://cdn.simpleicons.org/nodedotjs" },
      { id: 2, name: "Express", category: "Backend", proficiency: 95, iconUrl: "https://cdn.simpleicons.org/express/white" },
      { id: 3, name: "Python", category: "Backend", proficiency: 75, iconUrl: "https://cdn.simpleicons.org/python" },
      { id: 4, name: "Next.js", category: "Backend", proficiency: 85, iconUrl: "https://cdn.simpleicons.org/nextdotjs/white" },
      { id: 5, name: "FastAPI", category: "Backend", proficiency: 70, iconUrl: "https://cdn.simpleicons.org/fastapi" },
      { id: 6, name: "Flask", category: "Backend", proficiency: 70, iconUrl: "https://cdn.simpleicons.org/flask/white" },
    ],
    "Database Tools/ORM": [
      { id: 7, name: "PostgreSQL", category: "Database Tools/ORM", proficiency: 85, iconUrl: "https://cdn.simpleicons.org/postgresql" },
      { id: 8, name: "MySQL", category: "Database Tools/ORM", proficiency: 80, iconUrl: "https://cdn.simpleicons.org/mysql" },
      { id: 9, name: "Prisma", category: "Database Tools/ORM", proficiency: 90, iconUrl: "https://cdn.simpleicons.org/prisma/white" },
      { id: 10, name: "Sequelize", category: "Database Tools/ORM", proficiency: 80, iconUrl: "https://cdn.simpleicons.org/sequelize" },
      { id: 11, name: "SQLAlchemy", category: "Database Tools/ORM", proficiency: 65, iconUrl: "https://cdn.simpleicons.org/sqlalchemy/white" },
    ],
    Tools: [
      { id: 12, name: "Git", category: "Tools", proficiency: 90, iconUrl: "https://cdn.simpleicons.org/git" },
      { id: 13, name: "Postman", category: "Tools", proficiency: 85, iconUrl: "https://cdn.simpleicons.org/postman" },
      { id: 14, name: "Swagger", category: "Tools", proficiency: 80, iconUrl: "https://cdn.simpleicons.org/swagger" },
    ],
  });

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
    <section className="relative py-20 overflow-hidden" id="skills">
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
        <motion.h2 className="mb-16 text-center" variants={itemVariants}>
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Technical Skills</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="group relative rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                        hover:shadow-blue-500/20 hover:border-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.h3
                className="mb-6 text-2xl font-semibold text-white relative z-10 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={category === "Backend" ? { rotate: [0, 10, -10, 0] } : category === "Database Tools/ORM" ? { scale: [1, 1.2, 1] } : { rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-blue-500"
                >
                  {category === "Backend" && "⚡"}
                  {category === "Database Tools/ORM" && "🗄️"}
                  {category === "Tools" && "🛠️"}
                </motion.span>
                {category}
              </motion.h3>

              <ul className="space-y-4 relative z-10">
                {items.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * items.length + skillIndex) * 0.1 }}
                    viewport={{ once: true }}
                    className="transform transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {skill.iconUrl && (
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="w-8 h-8 rounded-lg bg-gray-700/50 p-1.5 flex items-center justify-center
                                     group-hover:bg-blue-500/10 transition-colors duration-300"
                          >
                            <Image src={skill.iconUrl} alt={`${skill.name} icon`} width={32} height={32} className="w-full h-full object-contain" />
                          </motion.div>
                        )}
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-blue-400">{skill.proficiency}%</span>
                    </div>
                    <motion.div
                      className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: (index * items.length + skillIndex) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: (index * items.length + skillIndex) * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
