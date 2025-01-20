const Projects = () => {
  const projects = [
    {
      title: "REST API E-Commerce",
      description: "API lengkap untuk platform e-commerce dengan autentikasi JWT, manajemen produk, dan sistem pembayaran",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/username/ecommerce-api",
    },
    {
      title: "Microservice System",
      description: "Sistem microservice untuk aplikasi booking dengan message queue",
      tech: ["Node.js", "RabbitMQ", "Docker", "PostgreSQL"],
      github: "https://github.com/username/booking-microservice",
    },
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Project Backend</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg bg-gray-800 p-6">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
