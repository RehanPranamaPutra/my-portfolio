import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Tutup menu setelah klik (biar rapih di mobile)
  };

  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur-md px-6 lg:px-20 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-white font-bold text-xl">Portofolio</div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-8 text-white">
        <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-purple-400">Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-purple-400">About</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-purple-400">Skills</a></li>
        <li><a href="#project" onClick={(e) => handleScroll(e, "project")} className="hover:text-purple-400">Project</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-purple-400">Contact</a></li>
      </ul>

      {/* Tombol Mobile */}
      <div
        className="md:hidden text-white cursor-pointer text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a></li>
          <li><a href="#project" onClick={(e) => handleScroll(e, "project")}>Project</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
