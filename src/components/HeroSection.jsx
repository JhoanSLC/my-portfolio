import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export const HeroSection = ({ mode }) => {
  const { t, language } = useLanguage();

  const handleResumeClick = () => {
    const resumeUrl =
      language === "es"
        ? "CVE - Jhoan Landazabal.pdf"
        : "CVI - Jhoan Landazabal.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col lg:flex-row items-center justify-center min-h-screen ${
        mode === "dark" ? "bg-dark" : "bg-grisClaro"
      } gap-8 p-4 pt-20 mx-auto`}
    >
      <motion.div
        className="flex items-center flex-col gap-8 lg:w-1/3"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <motion.h1
            className={`${
              mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
            } text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-2 text-center`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("name")}
          </motion.h1>
          <motion.h1
            className={`${
              mode === "dark" ? "text-dorado" : "text-black"
            } text-6xl lg:text-7xl 2xl:text-8xl font-bold text-center`}
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
          } px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleResumeClick} // Agrega el manejador de clics aquí
        >
          {t("resume")}
        </motion.button>
      </motion.div>
      <motion.img
        className="rounded-full w-64 h-64 lg:w-80 lg:h-80 2xl:w-[30rem] 2xl:h-[30rem] object-cover object-top shadow-2xl"
        src="fotoJhoanPerfil3.jpeg"
        alt="Foto de Jhoan"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.div
        className="flex flex-col items-center lg:w-1/3"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex flex-row gap-6 mb-8">
          {[
            {
              href: "https://github.com/JhoanSLC",
              Icon: Github,
              bg: mode === "dark" ? "bg-grisOscuro" : "bg-white",
            },
            {
              href: "https://www.linkedin.com/in/jhoan-landazabal-22a412311/",
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
                className={`${bg} p-4 rounded-full transition-all duration-300 hover:opacity-80`}
              >
                <Icon
                  color={mode === "dark" ? "#FFD700" : "#2A2A2A"}
                  size={32}
                />
              </button>
            </motion.a>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <motion.h1
            className={`${
              mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
            } text-4xl lg:text-6xl 2xl:text-7xl font-semibold mb-2 text-center`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {t("developer")}
          </motion.h1>
          <motion.h1
            className={`${
              mode === "dark" ? "text-dorado" : "text-black"
            } text-5xl lg:text-7xl 2xl:text-8xl font-semibold text-center`}
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
