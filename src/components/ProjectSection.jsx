import React from "react";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    desc: "Personal portfolio built with React & Tailwind CSS.",
    image: "/images/portfolio.png",
  },
  {
    id: 2,
    name: "E-Commerce App",
    desc: "Mobile app for online clothing store using Kotlin.",
    image: "/images/ecommerce.png",
  },
  {
    id: 3,
    name: "Note App",
    desc: "Simple note-taking app with Flutter & SQLite.",
    image: "/images/noteapp.png",
  },
  {
    id: 4,
    name: "UKM Dashboard",
    desc: "Admin dashboard for managing UKM activities using Laravel.",
    image: "/images/dashboard.png",
  },
];

export default function ProjectSection() {
  return (
    <section
      className="flex justify-center items-center px-6"
      id="projects"
    >
      <div className="relative max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          My Projects
        </h2>

        {/* Grid Project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black/60 border border-purple-500/30 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] overflow-hidden backdrop-blur p-4 hover:scale-105 transition-transform"
            >
              <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
