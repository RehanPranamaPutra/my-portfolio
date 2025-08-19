import PageTransition from "./PageTransition";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "Bootstrap", logo: "/bootstrap.png" },
    { name: "JavaScript", logo: "/js.webp" },
    { name: "React", logo: "/react.png" },
    { name: "Node.js", logo: "/nodejs.png" },
    { name: "PHP", logo: "/php.png" },
    { name: "Laravel", logo: "/laravel.png" },
    { name: "MySql", logo: "/sql.png" },
    { name: "Flutter", logo: "/flutter.png" },
    { name: "Dart", logo: "/dart.jpg" },
    { name: "Java", logo: "/java.png" },
    { name: "Kotlin", logo: "/kotlin.png" },
    { name: "C++", logo: "/c++r.png" },
    { name: "C#", logo: "/cr.png" },
    { name: "git", logo: "/git.png" },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen px-6 py-16 md:py-24">
      <div className="relative max-w-6xl w-full bg-black/60 rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden p-8 md:p-12 backdrop-blur">
        <h2 className="text-4xl font-bold mb-10 text-center">Tech Stack</h2>
        
        {/* Grid Skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 gap-y-10 px-4 md:px-10">
          {skills.map((skill, index) => (
            <PageTransition
              key={skill.name}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <p className="mt-2 text-sm sm:text-base">{skill.name}</p>
              </motion.div>
            </PageTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
