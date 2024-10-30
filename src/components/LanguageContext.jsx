import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../scripts/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en"; // Cargar el idioma de localStorage
  });

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "dark"; // Cargar el modo de localStorage
  });

  const t = (key) => translations[language][key] || key;

  useEffect(() => {
    localStorage.setItem("language", language); // Guardar el idioma seleccionado en localStorage
    localStorage.setItem("mode", mode); // Guardar el modo seleccionado en localStorage
    document.documentElement.classList.toggle("dark", mode === "dark"); // Cambiar la clase del modo
  }, [language, mode]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, mode, setMode }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
