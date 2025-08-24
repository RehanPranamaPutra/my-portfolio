import React from "react";
import ScrambledText from "../ui/ScrambledText/ScrambledText";
import Lanyard from "../ui/Lanyard/Lanyard";
import { motion } from "framer-motion"; // Impor motion dari Framer Motion

// Menggunakan React.forwardRef untuk meneruskan ref ke elemen DOM akar
const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref} // Menerapkan ref ke elemen DOM akar <section>
      className="flex justify-center items-center min-h-screen px-6 py-16 md:py-24"
      id="about"
    >
      <div className="relative max-w-6xl w-full bg-black/60 rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden p-8 md:p-12 backdrop-blur">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Teks - Diberi animasi dengan Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Awal: tersembunyi, geser dari kiri
            whileInView={{ opacity: 1, x: 0 }} // Saat masuk viewport: muncul, kembali ke posisi
            viewport={{ once: false, amount: 0.5 }} // Animasi akan berulang setiap kali masuk viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan easing animasi
            className="text-left text-white flex flex-col justify-center h-full"
          >
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
          </motion.div>

          {/* Bagian Gambar - Diberi animasi dengan Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Awal: tersembunyi, geser dari kanan
            whileInView={{ opacity: 1, x: 0 }} // Saat masuk viewport: muncul, kembali ke posisi
            viewport={{ once: false, amount: 0.5 }} // Animasi akan berulang setiap kali masuk viewport
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Durasi dan easing animasi, dengan delay
            className="flex justify-center items-center h-full mt-8 md:mt-0"
          >
            <div className="w-[300px] h-[480px] sm:w-[350px] sm:h-[520px] md:w-[400px] md:h-[600px] overflow-visible">
              <Lanyard
                position={[0, 0, 18]}
                gravity={[0, -40, 0]}
                scale={0.85} // biar proporsional
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

export default AboutSection;
