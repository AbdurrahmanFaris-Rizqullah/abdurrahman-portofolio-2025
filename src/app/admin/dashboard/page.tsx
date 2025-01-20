"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else if (status === "authenticated") {
      fetchProjects();
    }
  }, [status, router]);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus project ini?")) return;

    try {
      await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard Admin</h1>
          <button onClick={() => router.push("/admin/projects/new")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Tambah Project
          </button>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => router.push(`/admin/projects/${project.id}/edit`)} className="text-blue-400 hover:text-blue-300">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(project.id)} className="text-red-400 hover:text-red-300">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
