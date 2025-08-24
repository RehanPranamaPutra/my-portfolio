import React from "react";
import { motion } from "framer-motion"; // Import motion dari Framer Motion
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa"; // Contoh ikon dari react-icons

// Menggunakan React.forwardRef untuk meneruskan ref ke elemen DOM akar
const ContactSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex justify-center items-center min-h-screen px-6 py-16 md:py-24"
      id="contact"
    >
      <div className="relative max-w-6xl w-full bg-black/60 rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden p-8 md:p-12 backdrop-blur text-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kolom Kiri: Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Tertarik untuk berkolaborasi atau ingin bertanya lebih lanjut?
              Jangan ragu untuk menghubungi saya melalui formulir di samping
              atau melalui saluran di bawah ini.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-purple-400 text-2xl" />
                <a
                  href="mailto:rehanpranamaputra6@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  rehanpranamaputra6@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-purple-400 text-2xl" />
                <a
                  href="tel:+6281234567890"
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  +62 8153589286
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-purple-400 text-2xl" />
                <p className="text-gray-300">Padang, West Sumatra, Indonesia</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-6">
              <a
                href="https://github.com/rehanpranamaputra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/rehanpranamaputra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://linkedin.com/in/rehanpranamaputra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition text-3xl"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://linkedin.com/in/rehanpranamaputra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition text-3xl"
              >
                <FaTiktok />
              </a>
              {/* Tambahkan ikon media sosial lainnya sesuai kebutuhan */}
            </div>
          </motion.div>

          {/* Kolom Kanan: Formulir Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
