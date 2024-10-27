import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { AboutMeSection } from "./AboutMeSection";
import { LanguageProvider } from "./LanguageContext";

export const AboutPage = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
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
          <HeroSection mode={mode} />
          <AboutMeSection mode={mode} />
        </motion.div>
      </AnimatePresence>
    </LanguageProvider>
  );
};
