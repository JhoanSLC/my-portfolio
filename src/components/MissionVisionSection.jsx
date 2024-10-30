import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export const MissionVisionSection = ({ mode }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      id="missionVisionSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center min-h-screen p-6 ${
        mode === "light"
          ? "bg-grisClaro text-grisOscuro"
          : "bg-dark text-doradoClaro"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-12 w-full">
        {/* Misión */}
        <motion.div
          className={`flex flex-col justify-center ${
            mode === "light" ? "bg-white" : "bg-grisOscuro"
          } rounded-lg shadow-2xl p-6 h-full`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              mode === "light" ? "text-black" : "text-dorado"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("mission_title")}
          </motion.h2>
          <motion.p
            className={`text-lg leading-relaxed mb-6 ${
              mode === "light" ? "text-grisOscuro" : "text-textWhite"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t("mission_description")}
          </motion.p>
        </motion.div>

        {/* Visión */}
        <motion.div
          className={`flex flex-col justify-center ${
            mode === "light" ? "bg-white" : "bg-grisOscuro"
          } rounded-lg shadow-2xl p-6 h-full`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              mode === "light" ? "text-black" : "text-dorado"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t("vision_title")}
          </motion.h2>
          <motion.p
            className={`text-lg leading-relaxed mb-6 ${
              mode === "light" ? "text-grisOscuro" : "text-textWhite"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t("vision_description")}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
