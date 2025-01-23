"use client";

import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../sections/Projects"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
});

export default function ClientProjects() {
  return <Projects />;
}
