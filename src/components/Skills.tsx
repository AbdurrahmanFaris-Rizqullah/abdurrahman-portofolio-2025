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
      { id: 1, name: "Node.js", category: "Backend", proficiency: 90 },
      { id: 2, name: "Express", category: "Backend", proficiency: 95 },
      { id: 3, name: "Python", category: "Backend", proficiency: 75 },
      { id: 4, name: "Next.js", category: "Backend", proficiency: 85 },
      { id: 5, name: "FastAPI", category: "Backend", proficiency: 70 },
      { id: 6, name: "FlaskAPI", category: "Backend", proficiency: 70 },
    ],
    "Database Tools/ORM": [
      { id: 7, name: "PostgreSQL", category: "Database Tools/ORM", proficiency: 85 },
      { id: 8, name: "MySQL", category: "Database Tools/ORM", proficiency: 80 },
      { id: 9, name: "Prisma", category: "Database Tools/ORM", proficiency: 90 },
      { id: 10, name: "Sequelize", category: "Database Tools/ORM", proficiency: 80 },
    ],
    Tools: [
      { id: 11, name: "Git", category: "Tools", proficiency: 90 },
      { id: 12, name: "Postman", category: "Tools", proficiency: 85 },
      { id: 13, name: "Swagger", category: "Tools", proficiency: 80 },
    ],
  });

  return (
    <section className="bg-gray-800 py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">Keahlian Teknis</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-lg bg-gray-700 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill.id} className="text-gray-300">
                    <div className="flex items-center justify-between">
                      <span>• {skill.name}</span>
                      <span className="text-sm text-blue-400">{skill.proficiency}%</span>
                    </div>
                    <div className="mt-1 h-1 w-full bg-gray-600 rounded-full">
                      <div className="h-1 bg-blue-500 rounded-full" style={{ width: `${skill.proficiency}%` }} />
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
