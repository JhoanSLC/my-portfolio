import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sun, Moon, ArrowLeft } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ mode, toggleMode }) => {
  const { language, setLanguage, t } = useLanguage();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full top-0 z-50 rounded-b-xl flex justify-between items-center p-4 px-6 h-16 shadow-lg ${
        mode === "light"
          ? "bg-grisClaro text-grisOscuro"
          : "bg-dark text-doradoClaro"
      }`}
    >
      <motion.div
        className="text-2xl font-extrabold tracking-wider"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span
          className={`text-transparent bg-clip-text ${
            mode === "light"
              ? "bg-gradient-to-r from-grisOscuro to-dorado"
              : "bg-gradient-to-r from-textWhite to-dorado"
          }`}
        >
          {"{JhoanSLC}"}
        </span>
      </motion.div>

      {/* Condicional para mostrar los enlaces solo si no estamos en la ruta /about */}
      {location.pathname !== "/about" && (
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#aboutMeSection"
              className={`cursor-pointer transition-all duration-300 ${
                mode === "light"
                  ? "text-grisOscuro hover:text-dorado focus:text-dorado"
                  : "text-textWhite hover:text-dorado focus:text-dorado"
              } focus:outline-none focus:underline`}
            >
              {t("about")}
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#techs"
              className={`cursor-pointer transition-all duration-300 ${
                mode === "light"
                  ? "text-grisOscuro hover:text-dorado focus:text-dorado"
                  : "text-textWhite hover:text-dorado focus:text-dorado"
              } focus:outline-none focus:underline`}
            >
              {t("services")}
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#projects"
              className={`cursor-pointer transition-all duration-300 ${
                mode === "light"
                  ? "text-grisOscuro hover:text-dorado focus:text-dorado"
                  : "text-textWhite hover:text-dorado focus:text-dorado"
              } focus:outline-none focus:underline`}
            >
              {t("projects")}
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#contact"
              className={`cursor-pointer transition-all duration-300 ${
                mode === "light"
                  ? "text-grisOscuro hover:text-dorado focus:text-dorado"
                  : "text-textWhite hover:text-dorado focus:text-dorado"
              } focus:outline-none focus:underline`}
            >
              {t("contact")}
            </a>
          </motion.div>
        </div>
      )}

      <div className="flex items-center gap-4">
        {/* Botón Back solo en /about */}
        {location.pathname === "/about" && (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/">
              <button
                className={`flex items-center gap-1 ${
                  mode === "light"
                    ? "text-grisOscuro hover:text-dorado"
                    : "text-doradoClaro hover:text-dorado"
                } transition-all duration-300`}
              >
                <ArrowLeft size={24} />
                Back
              </button>
            </Link>
          </motion.div>
        )}

        {/* Selector de idioma */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Globe
            color={mode === "light" ? "#2A2A2A" : "#FFD700"}
            className="cursor-pointer hover:text-dorado transition-all duration-300"
            onClick={toggleLanguageMenu}
            size={24}
          />
          <AnimatePresence>
            {languageMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`absolute right-0 mt-2 w-32 ${
                  mode === "light" ? "bg-grisClaro" : "bg-dark"
                } rounded-md shadow-lg z-10`}
              >
                {["en", "es"].map((lang) => (
                  <motion.button
                    key={lang}
                    className={`w-full px-4 py-2 text-left ${
                      mode === "light"
                        ? "text-grisOscuro hover:bg-white hover:text-dorado"
                        : "text-textWhite hover:bg-grisOscuro hover:text-dorado"
                    } transition-colors duration-300`}
                    onClick={() => {
                      setLanguage(lang);
                      setLanguageMenuOpen(false);
                    }}
                    whileHover={{
                      backgroundColor: mode === "light" ? "#FFFFFF" : "#2A2A2A",
                    }}
                  >
                    {lang === "en" ? "English" : "Español"}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Selector de modo claro/oscuro */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {mode === "dark" ? (
            <Sun
              onClick={toggleMode}
              className={`cursor-pointer ${
                mode === "light"
                  ? "text-grisOscuro hover:text-dorado"
                  : "text-doradoClaro hover:text-dorado"
              } transition-all duration-300`}
              size={24}
            />
          ) : (
            <Moon
              onClick={toggleMode}
              className={`cursor-pointer ${
                mode === "light"
                  ? "text-grisOscuro hover:text-dorado"
                  : "text-doradoClaro hover:text-dorado"
              } transition-all duration-300`}
              size={24}
            />
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};
