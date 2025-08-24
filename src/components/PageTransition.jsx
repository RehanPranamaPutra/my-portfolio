import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PageTransition = ({ children }) => {
  // Ref untuk kontainer semua children
  const comp = useRef();
  // Ref untuk setiap child section
  const sectionRefs = useRef([]);

  useLayoutEffect(() => {
    // Membuat konteks GSAP untuk memastikan animasi dibersihkan dengan benar
    let ctx = gsap.context(() => {
      // Mengatur style awal untuk semua section (opsional, tapi bagus untuk konsistensi)
      gsap.set(sectionRefs.current, { autoAlpha: 0, y: 50 }); // Sembunyikan dan geser ke bawah

      sectionRefs.current.forEach((section, index) => {
        // Hanya animasikan jika section itu ada
        if (section) {
          gsap.to(section, {
            autoAlpha: 1, // Munculkan
            y: 0,         // Geser ke posisi semula
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section, // Elemen yang memicu animasi
              start: "top 80%", // Mulai animasi ketika bagian atas elemen mencapai 80% dari bagian atas viewport
              end: "bottom 20%", // Akhiri animasi ketika bagian bawah elemen mencapai 20% dari bagian atas viewport
              scrub: false,     // false: animasi berjalan sekali saat trigger; true: animasi disinkronkan dengan scroll
              // markers: true, // Uncomment untuk melihat marker ScrollTrigger di pengembangan
              toggleActions: "play none none reverse", // Mainkan saat masuk, tidak ada aksi saat meninggalkan, tidak ada saat masuk kembali, reverse saat meninggalkan kembali
            },
          });
        }
      });
    }, comp); // Konteks ini terkait dengan elemen `comp`

    // Fungsi cleanup untuk ScrollTrigger
    return () => ctx.revert(); // Membersihkan semua animasi dan trigger yang dibuat di konteks ini
  }, []); // Hanya jalankan sekali saat komponen di-mount

  // Kloning children untuk menambahkan ref ke setiap section
  const childrenWithRefs = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ref: (el) => (sectionRefs.current[index] = el), // Menetapkan ref ke elemen DOM dari setiap child
        key: index, // Penting untuk list elemen
      });
    }
    return child;
  });

  return (
    <div ref={comp}>
      {childrenWithRefs}
    </div>
  );
};

export default PageTransition;