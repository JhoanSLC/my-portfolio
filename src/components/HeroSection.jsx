import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "./LanguageContext"; // Asegúrate de que este contexto esté correctamente implementado

export const HeroSection = ({ mode }) => {
  const { t } = useLanguage(); // Usa el contexto de idioma

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center h-[calc(100vh-56px)] ${
        mode === "dark" ? "bg-grisOscuro" : "bg-white"
      } gap-8 p-4`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <div
        className="flex items-center flex-col gap-8"
        style={{ marginBottom: "3rem" }}
      >
        <div className="flex flex-col items-center">
          <h1
            className={`${
              mode === "dark" ? "text-customWhite" : "text-black"
            } text-5xl font-bold`}
          >
            {t("name")}
          </h1>
          <h1
            className={`${
              mode === "dark" ? "text-customWhite" : "text-black"
            } text-6xl font-bold`}
          >
            {t("lastName")}
          </h1>
        </div>

        <button
          className={`bg-doradoClaro text-gris p-3 rounded-lg transition-all duration-300 hover:bg-dorado hover:text-white shadow-lg`}
        >
          {t("resume")}
        </button>
      </div>
      <img
        className="rounded-full w-[20rem] h-[20rem] object-cover object-top shadow-lg"
        src="fotoJhoanPerfil.jpeg"
        alt="Foto de Jhoan"
      />
      <div
        className="flex flex-col items-center"
        style={{ marginTop: "2rem", fontFamily: "Lora, serif" }}
      >
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/JhoanSLC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-800 p-2 rounded-full transition-all duration-300 hover:bg-gray-700">
              <Github color={mode === "dark" ? "#FFFF" : "#D4AF37"} size={24} />
            </button>
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-700 p-2 rounded-full transition-all duration-300 hover:bg-blue-600">
              <Linkedin
                color={mode === "dark" ? "#FFFF" : "#D4AF37"}
                size={24}
              />
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1
            className={`${
              mode === "dark" ? "text-doradoClaro" : "text-dorado"
            } text-5xl font-semibold `}
          >
            {t("developer")}
          </h1>
          <h1
            className={`${
              mode === "dark" ? "text-doradoClaro" : "text-dorado"
            } text-6xl font-semibold`}
          >
            {t("developer2")}
          </h1>
        </div>
      </div>
    </div>
  );
};
