import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    desc: "Personal portfolio built with React & Tailwind CSS.",
    image: "/portfolio.png",
    detail:
      "Project ini merupakan website portfolio pribadi yang dibangun menggunakan React.js dengan dukungan library React Bits untuk mempercepat pengembangan komponen UI yang modern dan responsif.Tujuan utama dari website ini adalah untuk menampilkan profil profesional, proyek-proyek yang telah dikerjakan, serta layanan yang ditawarkan dalam bentuk tampilan yang menarik, interaktif, dan mudah diakses di berbagai perangkat.", // 🔗 ganti dengan link sebenarnya
  },
  {
    id: 2,
    name: "Sikerma PNP",
    desc: "Website pengelolaan data MoU/MoA Politeknik Negeri Padang.",
    image: "/sikerma.png",
    detail:
      "Sistem Informasi Kerja Sama (SIKERMA PNP) adalah aplikasi berbasis web yang dikembangkan untuk mengelola seluruh data dan proses kerja sama di lingkungan Politeknik Negeri Padang. Sistem ini membantu pihak kampus dalam mencatat, memantau, dan mengevaluasi berbagai bentuk kerja sama, seperti MOU (Memorandum of Understanding), MOA (Memorandum of Agreement), serta kegiatan turunan dari kerja sama tersebut. Website ini juga di lengkapi fitur untuk mengajukan kerjasama, notifikasi kerjasama yang akan berakhir serta yang sudah berakhir",
    link: "https://kerjasama.pnp.ac.id", // contoh link demo
  },
  {
    id: 5,
    name: "SI-UKM",
    desc: "Dashbord Admin untuk mengelola data UKM.",
    image: "/ukm.png",
    detail:
    "Sistem Informasi Unit Kegiatan Mahasiswa adalah aplikasi berbasis web yang dikembangkan untuk membantu pengelolaan data kegiatan, anggota, dan capaian dari setiap Unit Kegiatan Mahasiswa (UKM) di Politeknik Negeri Padang.Website ini dirancang agar memudahkan pihak kampus dan pengurus UKM dalam mengatur administrasi, mendokumentasikan aktivitas, serta mempublikasikan informasi UKM secara digital dan terstruktur.",
    link: "https://github.com/RehanPranamaPutra/UAS-Pengeloaan-UKM", // contoh link demo
  
  },
  {
    id: 3,
    name: "Coffe Shop",
    desc: "Website Pengelolaan Coffe Shop Access Coffe",
    image: "/coffe_shop.png",
    detail:
      "Website Coffee Shop Management System adalah aplikasi berbasis web yang dirancang untuk membantu pengelolaan operasional kedai kopi secara digital. Sistem ini menyediakan fitur lengkap mulai dari pengelolaan produk dan promo, transaksi penjualan, hingga laporan keuangan yang mencakup pemasukan dan pengeluaran harian. Selain itu, tersedia juga landing page pelanggan yang menampilkan menu dan promo terbaru untuk meningkatkan pengalaman pelanggan secara online.",
    link: "https://github.com/username/ecommerce-app", // link GitHub
  },
  {
    id: 4,
    name: "Cholesterol Checker",
    desc: "Aplikasi Cek Kolesterol Harian — Flutter & PHP Backend",
    image: "/kolestrol.png",
    detail:
      "Aplikasi Cek Kolesterol Harian adalah sistem monitoring kesehatan berbasis Flutter dengan backend PHP Native yang dirancang untuk membantu pengguna dalam memantau kadar kolesterol mereka setiap hari. Aplikasi ini memungkinkan pengguna untuk mencatat hasil pemeriksaan kolesterol (LDL, HDL, Trigliserida, dan Total Kolesterol), melihat grafik perkembangan, serta mendapatkan saran makanan dan minuman berdasarkan kategori hasil pemeriksaan.",
    link: "https://github.com/RehanPranamaPutra/Frontend-Flutter-Cholesterol-Checker", // contoh link repo
  },
  {
    id: 6,
    name: "Penjualan Obat",
    desc: "Aplikasi Penjualan Obat Berbasis Android & PHP — dengan Fitur Keranjang Belanja",
    image: "/obat.png",
    detail:
      "Aplikasi Penjualan Obat adalah sistem berbasis mobile Android (Kotlin) dengan backend PHP dan database MySQL yang dirancang untuk mempermudah proses pembelian obat secara digital. Aplikasi ini memungkinkan pengguna untuk melihat daftar obat, menambahkan obat ke keranjang, melakukan pemesanan, dan melihat riwayat transaksi secara langsung melalui smartphone.",
    link: "https://github.com/RehanPranamaPutra/Frontend-Flutter-Cholesterol-Checker", // contoh link repo
  },
  {
    id: 7,
    name: "Note App",
    desc: "Aplikasi Catatan Pribadi Berbasis Flutter & SQLite",
    image: "/noteapp.png",
    detail:
      "Note App adalah aplikasi mobile sederhana namun fungsional yang dikembangkan menggunakan Flutter dengan database lokal SQLite. Aplikasi ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus catatan secara offline tanpa memerlukan koneksi internet. Data tersimpan langsung di perangkat, sehingga pengguna dapat mengakses catatan mereka kapan saja dengan cepat dan aman.",
    link: "https://github.com/RehanPranamaPutra/flutter-note-app", // contoh link repo
  },
];

const ProjectSection = React.forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      ref={ref}
      className="flex justify-center items-center px-6 py-16 md:py-24"
      id="project"
    >
      <div className="relative max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          My Projects
        </h2>

        {/* Grid Project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-black/60 border border-purple-500/30 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] overflow-hidden backdrop-blur p-4 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedProject(project)} // klik buka modal
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

        {/* Modal Detail */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-lg w-full p-6 relative border border-purple-500/50 shadow-lg"
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 40 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // biar klik dalam modal tidak menutup
              >
                {/* Tombol Close */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-white text-xl hover:text-purple-400"
                >
                  ✕
                </button>

                {/* Isi Modal */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {selectedProject.detail}
                </p>

                {/* Tombol Visit Website */}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium px-4 py-2 rounded-lg transition-all duration-300"

                  >
                    🔗 View
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default ProjectSection;
