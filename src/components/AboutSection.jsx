import React from "react";
import ScrambledText from "../ui/ScrambledText/ScrambledText";
import Lanyard from "../ui/Lanyard/Lanyard";

export default function AboutSection() {
  return (
    <section
      className="flex justify-center items-center min-h-screen px-6 py-16 md:py-24"
      id="about"
    >
      <div className="relative max-w-6xl w-full bg-black/60 rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden p-8 md:p-12 backdrop-blur">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Teks */}
          <div className="text-left text-white flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
              I'm <span className="font-semibold">Rehan Pranama Putra</span>, a
              web & mobile developer passionate about creating modern,
              high-performance applications with elegant UI and intuitive UX. I
              love working with the latest technologies like React, Tailwind,
              Node.js, and cloud-based systems — blending creativity with
              problem-solving to deliver impactful solutions.
            </p>

            {/* Statistik */}
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-purple-400">20+</p>
                <p className="text-gray-400 text-sm">Projects Finished</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">3+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Bagian Gambar */}
          <div className="flex justify-center items-center h-full mt-8 md:mt-0">
            <div className="w-[300px] h-[480px] sm:w-[350px] sm:h-[520px] md:w-[400px] md:h-[600px] overflow-visible">
              <Lanyard
                position={[0, 0, 18]}
                gravity={[0, -40, 0]}
                scale={0.85} // biar proporsional
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
