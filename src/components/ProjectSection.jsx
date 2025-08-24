import React from "react";
import { motion } from "framer-motion"; // Impor motion dari Framer Motion

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    desc: "Personal portfolio built with React & Tailwind CSS.",
    image: "/images/portfolio.png",
  },
  {
    id: 2,
    name: "Sikerma PNP",
    desc: "Website pengelolaan data MoU/MoA Politeknik Negeri Padang. Saya bangun menggunakan Laravel dan juga membuat dashbord untuk pengelolaan",
    image: "/images/dashboard.png",
  },
  {
    id: 3,
    name: "E-Commerce App",
    desc: "Mobile app for online clothing store using Kotlin.",
    image: "/images/ecommerce.png",
  },
  {
    id: 4,
    name: "Note App",
    desc: "Simple note-taking app with Flutter & SQLite.",
    image: "/images/noteapp.png",
  },
  {
    id: 5,
    name: "UKM Dashboard",
    desc: "Admin dashboard for managing UKM activities using Laravel.",
    image: "/images/dashboard.png",
  },
];

// Menggunakan React.forwardRef untuk meneruskan ref ke elemen DOM akar
const ProjectSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="flex justify-center items-center px-6 py-16 md:py-24" id="project">
      <div className="relative max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          My Projects
        </h2>

        {/* Grid Project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // Mengubah animasi agar muncul dari kiri atau kanan
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Ganjil dari kanan, Genap dari kiri
              whileInView={{ opacity: 1, x: 0 }} // Saat masuk viewport: muncul, kembali ke posisi tengah
              viewport={{ once: false, amount: 0.3 }} // Animasi akan berulang, saat 30% elemen terlihat
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} // Durasi, easing, dan staggered delay
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectSection;
