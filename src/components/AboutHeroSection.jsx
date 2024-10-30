import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export const AboutHeroSection = ({ mode }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center min-h-screen ${
        mode === "dark" ? "bg-dark" : "bg-grisClaro"
      } gap-8 p-4 pt-20`}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h1
          className={`${
            mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
          } text-4xl md:text-5xl font-bold mb-4 text-center`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t("about_me_title")}
        </motion.h1>
        <motion.p
          className={`${
            mode === "dark" ? "text-textWhite" : "text-grisOscuro"
          } text-lg md:text-xl leading-relaxed max-w-3xl text-center`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t("about_me_description")}
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Misión */}
        <motion.div
          className={`flex flex-col justify-center items-center p-6 rounded-lg shadow-2xl h-full ${
            mode === "dark"
              ? "bg-grisOscuro text-doradoClaro"
              : "bg-gray-100 text-grisOscuro"
          }`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.h2 className="text-2xl font-bold mb-4">
            {t("mission_title")}
          </motion.h2>
          <motion.p
            className={`text-base leading-relaxed text-center ${
              mode === "dark" ? "text-textWhite" : "text-gray-700"
            }`}
          >
            {t("mission_description")}
          </motion.p>
        </motion.div>

        {/* Visión */}
        <motion.div
          className={`flex flex-col justify-center items-center p-6 rounded-lg shadow-2xl h-full ${
            mode === "dark"
              ? "bg-grisOscuro text-doradoClaro"
              : "bg-gray-100 text-grisOscuro"
          }`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.h2 className="text-2xl font-bold mb-4">
            {t("vision_title")}
          </motion.h2>
          <motion.p
            className={`text-base leading-relaxed text-center ${
              mode === "dark" ? "text-textWhite" : "text-gray-700"
            }`}
          >
            {t("vision_description")}
          </motion.p>
        </motion.div>

        {/* Objetivos Profesionales */}
        <motion.div
          className={`flex flex-col justify-center items-center p-6 rounded-lg shadow-2xl h-full ${
            mode === "dark"
              ? "bg-grisOscuro text-doradoClaro"
              : "bg-gray-100 text-grisOscuro"
          }`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.h2 className="text-2xl font-bold mb-4">
            {t("objectivesTitle")}
          </motion.h2>
          <motion.p
            className={`text-base leading-relaxed text-center ${
              mode === "dark" ? "text-textWhite" : "text-gray-700"
            }`}
          >
            {t("objectivesDescription")}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
