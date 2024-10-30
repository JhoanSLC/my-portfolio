import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = ({ mode }) => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "PrestService",
      description: t("projectDesc1"),
      image: "/prestService.jpeg",
      technologies: ["React", "Java", "Spring boot"],
      githubUrl: "https://github.com/JhoanSLC/PrestService-project",
      liveUrl: "https://prestservice.netlify.app/",
    },
    {
      title: "CampusBike",
      description: t("projectDesc2"),
      image: "diagramaDb.png",
      technologies: ["MySQL"],
      githubUrl: "https://github.com/JhoanSLC/CampusBike.git",
      liveUrl: "",
    },
    {
      title: "ElectriEmpresa",
      description: t("projectDesc3"),
      image: "DiagramaBaseDeDatos.png",
      technologies: ["MySQL", "Java"],
      githubUrl:
        "https://github.com/JhoanSLC/gestion_electriempresa?tab=readme-ov-file",
      liveUrl: "",
    },
    {
      title: t("projectTitle"),
      description: t("projectDesc4"),
      image: "pythonProject.jpeg",
      technologies: ["Python"],
      githubUrl: "https://github.com/JhoanSLC/ProyectoCampus.git",
      liveUrl: "",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`py-20 ${mode === "dark" ? "bg-dark" : "bg-grisClaro"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            mode === "dark" ? "text-dorado" : "text-black"
          }`}
        >
          {t("projects_title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden ${
                mode === "dark" ? "bg-grisOscuro" : "bg-grisOscuro/5"
              } shadow-lg transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        mode === "dark" ? "bg-grisOscuro" : "bg-grisClaro"
                      }`}
                    >
                      <Github
                        className={
                          mode === "dark"
                            ? "text-doradoClaro"
                            : "text-grisOscuro"
                        }
                      />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-full ${
                          mode === "dark" ? "bg-grisOscuro" : "bg-grisClaro"
                        }`}
                      >
                        <ExternalLink
                          className={
                            mode === "dark"
                              ? "text-doradoClaro"
                              : "text-grisOscuro"
                          }
                        />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    mode === "dark" ? "text-textWhite/80" : "text-grisOscuro/80"
                  }`}
                >
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        mode === "dark"
                          ? "bg-dark text-dorado"
                          : "bg-grisOscuro/10 text-grisOscuro"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
