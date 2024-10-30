import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

export const AboutMeSection = ({ mode }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      id="aboutMeSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center py-20 ${
        mode === "light"
          ? "bg-grisClaro text-grisOscuro"
          : "bg-dark text-doradoClaro"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-12 px-4">
        <motion.div
          className={`flex-shrink-0 w-64 h-64 lg:w-96 lg:h-96 ${
            mode === "light" ? "bg-white" : "bg-grisOscuro"
          } rounded-lg shadow-2xl overflow-hidden`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="fotoJhoanAboutMe.jpg"
            alt="Foto de Jhoan"
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center max-w-2xl lg:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.h2
            className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 ${
              mode === "light" ? "text-black" : "text-dorado"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {t("about_me_title")}
          </motion.h2>
          <motion.p
            className={`text-lg lg:text-xl mb-10 leading-relaxed ${
              mode === "light" ? "text-grisOscuro" : "text-textWhite"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {t("about_me_description")}
          </motion.p>
          <Link to="/about" className="self-start">
            <motion.button
              className={`px-8 py-4 ${
                mode === "light"
                  ? "bg-grisOscuro text-white hover:bg-black"
                  : "bg-doradoClaro text-dark hover:bg-dorado"
              } font-semibold rounded-lg shadow-md transition duration-300 text-xl`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("know_more")}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
