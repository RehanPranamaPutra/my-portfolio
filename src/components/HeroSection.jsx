import React, { useState, useEffect } from "react"; // Hapus useRef, useLayoutEffect karena tidak lagi pakai GSAP
import ProfileCard from "../ui/ProfileCard/ProfileCard";
import { motion, AnimatePresence } from "framer-motion"; // Pastikan motion diimpor

// Hapus impor dan pendaftaran GSAP/ScrollTrigger
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const roles = ["Web Development", "Mobile Development", "Backend Development"];

// Menggunakan React.forwardRef untuk meneruskan ref ke elemen DOM akar
const HeroSection = React.forwardRef((props, ref) => { // 'ref' adalah parameter kedua
  const [index, setIndex] = useState(0);

  // Hapus refs GSAP yang tidak lagi digunakan
  // const leftColRef = useRef(null);
  // const rightColRef = useRef(null);
  // const sectionContentRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // ganti setiap 2 detik
    return () => clearInterval(timer);
  }, []);

  // Hapus useLayoutEffect untuk GSAP
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     if (leftColRef.current) {
  //       gsap.fromTo(leftColRef.current, 
  //         { autoAlpha: 0, x: -100 },
  //         {
  //           autoAlpha: 1, x: 0, duration: 1.2, ease: "power2.out",
  //           scrollTrigger: {
  //             trigger: sectionContentRef.current,
  //             start: "top center+=100",
  //             toggleActions: "play none none reverse",
  //           }
  //         }
  //       );
  //     }
  //     if (rightColRef.current) {
  //       gsap.fromTo(rightColRef.current,
  //         { autoAlpha: 0, x: 100 },
  //         {
  //           autoAlpha: 1, x: 0, duration: 1.2, ease: "power2.out",
  //           scrollTrigger: {
  //             trigger: sectionContentRef.current,
  //             start: "top center+=100",
  //             toggleActions: "play none none reverse",
  //           }
  //         }
  //       );
  //     }
  //   }, ref);
  //   return () => ctx.revert();
  // }, []);

  return (
    // Menerapkan ref ke elemen DOM akar <section>
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-6 lg:px-20 text-white" id="home">
      {/* Bungkus kedua kolom dengan motion.div untuk animasi scroll Framer Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} // Awal: tersembunyi, geser dari bawah
        whileInView={{ opacity: 1, y: 0 }} // Saat masuk viewport: muncul, kembali ke posisi
        viewport={{ once: false, amount: 0.3 }} // Animasi akan berulang, saat 30% elemen terlihat
        transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan easing animasi
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full"
      >
        
        {/* Kolom kiri */}
        <div className="space-y-4 text-left sm:text-center lg:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-400">
            Hello World !!!
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            I'M{" "}
            <span className="text-purple-400">Rehan Pranama Putra</span>
          </h1>
          
          <div className="relative h-8 sm:h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-2xl md:text-3xl font-medium text-gray-300"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
            Pengembang aplikasi dan web yang berfokus pada desain modern,
            performa tinggi, dan solusi berbasis teknologi terkini.
            Mengembangkan aplikasi mobile, website interaktif.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <a
              href="#cv"
              className="px-5 py-2 border border-gray-500 hover:border-purple-500 rounded-lg transition text-sm sm:text-base"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-5 py-2 border border-gray-500 hover:border-purple-500 rounded-lg transition text-sm sm:text-base"
            >
              Explore My Projects
            </a>
          </div>
        </div>

        {/* Kolom kanan */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCard
              className="custom-profile-card"
              name="Rehan Pranama Putra"
              title="Web & Mobile Development"
              handle="sikoding"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/profilcard.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
      </motion.div>
    </section>
  );
});

export default HeroSection;
