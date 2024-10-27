"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export const HeroSection = ({ mode }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row items-center justify-center min-h-screen ${
        mode === "dark" ? "bg-dark" : "bg-grisClaro"
      } gap-8 p-4 pt-20`}
    >
      <motion.div
        className="flex items-center flex-col gap-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <motion.h1
            className={`${
              mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
            } text-5xl md:text-6xl font-bold mb-2`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("name")}
          </motion.h1>
          <motion.h1
            className={`${
              mode === "dark" ? "text-dorado" : "text-black"
            } text-6xl md:text-7xl font-bold`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t("lastName")}
          </motion.h1>
        </div>

        <motion.button
          className={`${
            mode === "dark"
              ? "bg-doradoClaro text-dark hover:bg-dorado"
              : "bg-grisOscuro text-white hover:bg-black"
          } px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("resume")}
        </motion.button>
      </motion.div>
      <motion.img
        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-top shadow-2xl"
        src="fotoJhoanPerfil.jpeg"
        alt="Foto de Jhoan"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex flex-row gap-4 mb-6">
          {[
            {
              href: "https://github.com/JhoanSLC",
              Icon: Github,
              bg: mode === "dark" ? "bg-grisOscuro" : "bg-white",
            },
            {
              href: "https://linkedin.com/in/tu-usuario",
              Icon: Linkedin,
              bg: "bg-[#0077B5]",
            },
          ].map(({ href, Icon, bg }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                className={`${bg} p-3 rounded-full transition-all duration-300 hover:opacity-80`}
              >
                <Icon
                  color={mode === "dark" ? "#FFD700" : "#2A2A2A"}
                  size={24}
                />
              </button>
            </motion.a>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <motion.h1
            className={`${
              mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
            } text-4xl md:text-5xl font-semibold mb-2`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {t("developer")}
          </motion.h1>
          <motion.h1
            className={`${
              mode === "dark" ? "text-dorado" : "text-black"
            } text-5xl md:text-6xl font-semibold`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {t("developer2")}
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  );
};
