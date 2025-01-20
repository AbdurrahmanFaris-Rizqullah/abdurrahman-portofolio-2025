"use client";
import { useEffect, useState } from "react";
// eslint-disable-next-line
// import { api } from "@/services/api";

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  iconUrl?: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Record<string, Skill[]>>({
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
      { id: 9, name: "Prisma", category: "Database Tools/ORM", proficiency: 90, iconUrl: "https://cdn.simpleicons.org/prisma" },
      { id: 10, name: "Sequelize", category: "Database Tools/ORM", proficiency: 80, iconUrl: "https://cdn.simpleicons.org/sequelize" },
      { id: 11, name: "SQLAlchemy", category: "Database Tools/ORM", proficiency: 65, iconUrl: "https://cdn.simpleicons.org/sqlalchemy/white" },
    ],
    Tools: [
      { id: 12, name: "Git", category: "Tools", proficiency: 90, iconUrl: "https://cdn.simpleicons.org/git" },
      { id: 13, name: "Postman", category: "Tools", proficiency: 85, iconUrl: "https://cdn.simpleicons.org/postman" },
      { id: 14, name: "Swagger", category: "Tools", proficiency: 80, iconUrl: "https://cdn.simpleicons.org/swagger" },
    ],
  });

  return (
    <section className="relative py-20" id="skills">
      {/* Background dengan gradient dan pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: "fixed",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="mb-16 text-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Keahlian Teknis</span>
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group relative rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                        hover:shadow-blue-500/20 hover:border-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="mb-6 text-2xl font-semibold text-white relative z-10 flex items-center gap-3">
                {category === "Backend" && <span className="text-blue-500">⚡</span>}
                {category === "Database Tools/ORM" && <span className="text-blue-500">🗄️</span>}
                {category === "Tools" && <span className="text-blue-500">🛠️</span>}
                {category}
              </h3>

              <ul className="space-y-4 relative z-10">
                {items.map((skill) => (
                  <li key={skill.id} className="transform transition-all duration-300 hover:translate-x-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {skill.iconUrl && (
                          <div
                            className="w-8 h-8 rounded-lg bg-gray-700/50 p-1.5 flex items-center justify-center
                                        group-hover:bg-blue-500/10 transition-colors duration-300"
                          >
                            <img src={skill.iconUrl} alt={`${skill.name} icon`} className="w-full h-full object-contain" />
                          </div>
                        )}
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-blue-400">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                                 transform origin-left transition-transform duration-1000 ease-out"
                        style={{
                          width: `${skill.proficiency}%`,
                          animation: "slideRight 1.5s ease-out",
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
