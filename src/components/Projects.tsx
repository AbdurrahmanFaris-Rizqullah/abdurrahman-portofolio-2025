const Projects = () => {
  const projects = [
    {
      title: "Digital Twin - Smart Building Simulator",
      description: "Mengembangkan sistem monitoring untuk empat dormitori dengan kapasitas 30 penghuni masing-masing. Mengimplementasikan indikator proses untuk distribusi air dan meningkatkan akurasi sensor sebesar 20%.",
      tech: ["Next.js", "Express.js", "Python", "FastAPI", "Machine Learning"],
      github: "https://github.com/username/smart-building",
      image: "/images/projects/smart-building.jpg",
    },
    {
      title: "Web-based Boarding House Management",
      description: "Mengembangkan sistem manajemen kost berbasis web yang saat ini dalam tahap pengembangan.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/username/boarding-house",
      image: "/images/projects/boarding-house.jpg",
    },
    {
      title: "Public Information Dashboard E-Government",
      description: "Terlibat dalam pengembangan dashboard informasi publik e-government yang meningkatkan visual dan aksesibilitas informasi publik.",
      tech: ["Web Development", "Database", "UI/UX"],
      github: "https://github.com/username/e-gov-dashboard",
      image: "/images/projects/dashboard.jpg",
    },
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Project Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-lg bg-gray-800 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="rounded-full bg-blue-600 px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.github} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  Lihat di GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
