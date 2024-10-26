import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "./LanguageContext"; // Importa el contexto de idioma

export const Navbar = ({ mode, toggleMode }) => {
  const { language, setLanguage, t } = useLanguage(); // Usa el contexto de idioma
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div
      className={`rounded-xl flex justify-between items-center p-4 ml-14 mr-20 h-14 shadow-lg ${
        mode === "light"
          ? "bg-gray-50 text-black border-b border-gray-200"
          : "bg-grisClaro dark:bg-dark text-light"
      }`}
    >
      <div className="relative text-2xl font-extrabold tracking-wider">
        <motion.span
          className="relative text-2xl font-extrabold tracking-wider text-transparent bg-gradient-to-r from-transparent to-[#FFD700] bg-clip-text animate-brillo"
          style={{
            fontFamily: "Lora, serif",
            display: "inline-block",
          }}
        >
          {"{JhoanSLC}"}
        </motion.span>
      </div>
      <div
        className="ml-12 flex items-center gap-8 font-semibold"
        style={{ fontFamily: "Lora, serif" }}
      >
        <motion.a
          className="cursor-pointer text-dorado transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400 focus:outline-none focus:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("about")} {/* Usa la traducción */}
        </motion.a>
        <motion.a
          className="cursor-pointer text-dorado transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400 focus:outline-none focus:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("certifications")} {/* Usa la traducción */}
        </motion.a>
        <motion.a
          className="cursor-pointer text-dorado transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400 focus:outline-none focus:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("services")} {/* Usa la traducción */}
        </motion.a>
        <motion.a
          className="cursor-pointer text-dorado transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400 focus:outline-none focus:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("projects")} {/* Usa la traducción */}
        </motion.a>
        <motion.a
          className="cursor-pointer text-dorado transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400 focus:outline-none focus:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("contact")} {/* Usa la traducción */}
        </motion.a>
      </div>
      <div className="mr-12 flex items-center gap-4">
        <div className="relative">
          <Globe
            color="#D4AF37"
            className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
            onClick={toggleLanguageMenu}
            size={24}
          />
          <AnimatePresence>
            {languageMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-32 bg-white dark:bg-dark rounded-md shadow-lg z-10"
              >
                <div className="flex flex-col">
                  <button
                    className="px-4 py-2 text-left text-dorado hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => setLanguage("en")}
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    English
                  </button>
                  <button
                    className="px-4 py-2 text-left text-dorado hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => setLanguage("es")}
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    Español
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {mode === "dark" ? (
          <Sun
            onClick={toggleMode}
            className="cursor-pointer text-dorado hover:text-yellow-400 transition-all duration-300"
            size={24}
          />
        ) : (
          <Moon
            onClick={toggleMode}
            className="cursor-pointer text-dorado hover:text-yellow-400 transition-all duration-300"
            size={24}
          />
        )}
      </div>
      <style jsx>{`
        @keyframes brillo {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }

        .animate-brillo {
          background-size: 200% 100%;
          animation: brillo 5s linear infinite;
        }
      `}</style>
    </div>
  );
};
