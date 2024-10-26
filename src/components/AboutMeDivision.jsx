import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

export const AboutMeDivision = () => {
  const { t } = useLanguage();

  // Variantes para la animación
  const variants = {
    animate: {
      x: ["0%", "30%"], // Mover de 0% a 100%
      transition: {
        duration: 40, // Cambia la duración según sea necesario
        ease: "linear",
        repeat: Infinity, // Repetir indefinidamente
      },
    },
  };

  return (
    <div className="overflow-hidden w-full flex items-center justify-center relative mt-12">
      <div className="flex">
        <motion.h1
          className="text-dorado text-8xl uppercase font-extrabold tracking-widest whitespace-nowrap"
          animate="animate"
          variants={variants}
          style={{ display: "inline-block" }} // Mantener el texto en línea
        >
          - {t("about")} - {t("about")} - {t("about")} - {t("about")} -{" "}
          {t("about")} - {t("about")} - {t("about")} - {t("about")} -{" "}
          {t("about")} - {t("about")} -{t("about")} - {t("about")} -{" "}
          {t("about")} - {t("about")} - {t("about")} - {t("about")} -{" "}
          {t("about")} - {t("about")} - {t("about")} - {t("about")} -{" "}
          {t("about")} - {t("about")} - {t("about")} - {t("about")} -{" "}
          {t("about")} - {t("about")} - {t("about")} - {t("about")} -{" "}
          {t("about")} - {t("about")} -{" "}
        </motion.h1>
      </div>
    </div>
  );
};
