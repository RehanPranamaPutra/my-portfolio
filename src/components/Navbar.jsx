import React from "react";

export default function Navbar() {
  // Fungsi untuk menangani klik pada link navigasi
  const handleScroll = (e, id) => {
    e.preventDefault(); // Mencegah perilaku default link (lompat langsung)
    const targetElement = document.getElementById(id); // Dapatkan elemen target berdasarkan ID

    if (targetElement) {
      // Gunakan scrollIntoView dengan perilaku smooth
      targetElement.scrollIntoView({
        behavior: 'smooth', // Ini yang membuat scroll menjadi halus
        block: 'start',    // Gulir hingga bagian atas elemen target sejajar dengan bagian atas viewport
      });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent px-6 lg:px-20 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-white font-bold text-xl">Portofolio</div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-white">
        <li>
          {/* Ubah href menjadi #id dan tambahkan onClick handler */}
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-purple-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-purple-400">
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-purple-400">
            Skills {/* Ubah Project menjadi Skills agar sesuai dengan id section Anda */}
          </a>
        </li>
        <li>
          <a href="#project" onClick={(e) => handleScroll(e, 'project')} className="hover:text-purple-400">
            Project {/* Perbaikan: Ubah href dan onClick ke #projects */}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-purple-400">
            Contact
          </a>
        </li>
      </ul>

      {/* Tombol Mobile Menu (opsional, perlu ditambahkan implementasi logika buka/tutup) */}
      <div className="md:hidden text-white cursor-pointer">☰</div>
    </nav>
  );
}
