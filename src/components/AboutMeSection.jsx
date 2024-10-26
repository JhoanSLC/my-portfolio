import { useLanguage } from "./LanguageContext"; // Importa el contexto de idioma

export const AboutMeSection = ({ mode }) => {
  const { t } = useLanguage(); // Usa el contexto de idioma

  return (
    <div
      className={`flex items-center justify-center h-screen p-6 ${
        mode === "light" ? "bg-white text-black" : "bg-grisOscuro text-light"
      }`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <div className="flex items-center max-w-5xl mx-auto">
        {/* Imagen centrada dentro de un contenedor cuadrado */}
        <div className="flex-shrink-0 w-80 h-80 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
          <img
            src="fotoJhoanAboutMe.jpg"
            alt="Foto de Jhoan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenedor del texto y botón */}
        <div className="ml-10 flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4">{t("about_me_title")}</h2>
          <p className="text-lg mb-6 leading-relaxed max-w-xl">
            {t("about_me_description")}
          </p>
          <button
            className="px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 self-start"
            style={{ fontFamily: "Lora, serif" }}
          >
            {t("know_more")}
          </button>
        </div>
      </div>
    </div>
  );
};
