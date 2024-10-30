import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { DiJava } from "react-icons/di";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiMongodb,
  SiBootstrap,
  SiSpring,
  SiPython,
  SiAstro,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiVisualstudiocode,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Java", icon: DiJava, color: "#007396" },
  { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Astro", icon: SiAstro, color: "#FF5D01" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
];

export const TechnologiesSection = ({ mode }) => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(technologies.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTechnologies = technologies.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <motion.section
      id="techs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`py-20 ${mode === "dark" ? "bg-dark" : "bg-grisClaro"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              mode === "dark" ? "text-dorado" : "text-black"
            }`}
          >
            {t("technologies_title")}
          </motion.h2>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`text-lg ${
              mode === "dark" ? "text-textWhite" : "text-grisOscuro"
            }`}
          >
            {t("technologies_description")}
          </motion.p>
        </div>

        <div className="relative px-12">
          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              className={`w-10 h-10 rounded-full flex items-center justify-center transform -translate-x-2 pointer-events-auto transition-colors ${
                mode === "dark"
                  ? "bg-grisOscuro text-doradoClaro hover:bg-grisOscuro/80"
                  : "bg-grisOscuro text-grisClaro hover:bg-grisOscuro/80"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className={`w-10 h-10 rounded-full flex items-center justify-center transform translate-x-2 pointer-events-auto transition-colors ${
                mode === "dark"
                  ? "bg-grisOscuro text-doradoClaro hover:bg-grisOscuro/80"
                  : "bg-grisOscuro text-grisClaro hover:bg-grisOscuro/80"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-8"
              >
                {currentTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center p-8 rounded-xl ${
                      mode === "dark"
                        ? "bg-grisOscuro hover:bg-grisOscuro/80"
                        : "bg-grisOscuro/5 hover:bg-grisOscuro/10"
                    } transition-all duration-300 transform hover:shadow-xl`}
                  >
                    <div className="relative w-16 h-16 mb-6">
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1, type: "spring" }}
                      >
                        <tech.icon
                          className="text-6xl"
                          style={{ color: tech.color }}
                        />
                      </motion.div>
                    </div>
                    <span
                      className={`text-lg font-semibold text-center ${
                        mode === "dark" ? "text-textWhite" : "text-grisOscuro"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? mode === "dark"
                      ? "bg-dorado w-6"
                      : "bg-grisOscuro w-6"
                    : mode === "dark"
                    ? "bg-grisOscuro"
                    : "bg-grisOscuro/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
