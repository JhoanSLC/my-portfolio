import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { LanguageProvider } from "../components/LanguageContext";
import { MissionVisionSection } from "../components/MissionVisionSection";
import { AboutHeroSection } from "../components/AboutHeroSection";

export const AboutPage = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", mode); // Guarda el modo seleccionado
    } else {
      setMode(localStorage.getItem("mode")); // Carga el modo guardado al inicializar la página
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <LanguageProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full min-h-screen ${
            mode === "light" ? "bg-gray-100" : "bg-[#0D0D0D]"
          }`}
        >
          <Navbar mode={mode} toggleMode={toggleMode} />
          <AboutHeroSection mode={mode} />
        </motion.div>
      </AnimatePresence>
    </LanguageProvider>
  );
};
