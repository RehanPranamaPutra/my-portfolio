import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent px-6 lg:px-20 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-white font-bold text-xl">Portofolio</div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-white">
        <li>
          <a href="#home" className="hover:text-purple-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-400">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="hover:text-purple-400">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-400">
            Contact
          </a>
        </li>
      </ul>

      {/* Tombol Mobile Menu (opsional) */}
      <div className="md:hidden text-white cursor-pointer">☰</div>
    </nav>
  );
}
