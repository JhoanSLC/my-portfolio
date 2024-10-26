import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { LanguageProvider } from "./components/LanguageContext";
import { AboutMeSection } from "./components/AboutMeSection";
import { AboutMeDivision } from "./components/AboutMeDivision";

function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("mode", mode); // Guardar la preferencia de modo
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <LanguageProvider>
      {" "}
      <div
        className={`w-full h-full ${
          mode === "light" ? "bg-white" : "bg-grisOscuro"
        }`}
      >
        <Navbar mode={mode} toggleMode={toggleMode} />
        <HeroSection mode={mode} />
        <AboutMeDivision />
        <AboutMeSection mode={mode} />
      </div>
    </LanguageProvider>
  );
}

export default App;
