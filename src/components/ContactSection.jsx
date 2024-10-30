import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Send, Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

export const ContactSection = ({ mode }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Llamada a EmailJS para enviar el correo
      await emailjs.send(
        "service_97pf0fa", // ID de tu servicio de EmailJS
        "template_9eyl2ln", // ID de la plantilla de EmailJS
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "5Hrgs8TksXjto0TDX" // Tu User ID de EmailJS
      );

      setFormData({ name: "", email: "", message: "" });
      alert(t("contact_success"));
    } catch (error) {
      console.error("Error enviando el correo:", error);
      alert(t("contact_error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
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
          {t("contact_title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
              }`}
            >
              {t("contact_info_title")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    mode === "dark" ? "bg-grisOscuro" : "bg-grisOscuro/10"
                  }`}
                >
                  <Mail
                    className={
                      mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
                    }
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
                    }`}
                  >
                    Email
                  </h4>
                  <p
                    className={
                      mode === "dark"
                        ? "text-textWhite/80"
                        : "text-grisOscuro/80"
                    }
                  >
                    JhoanSLC4@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    mode === "dark" ? "bg-grisOscuro" : "bg-grisOscuro/10"
                  }`}
                >
                  <MapPin
                    className={
                      mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
                    }
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      mode === "dark" ? "text-doradoClaro" : "text-grisOscuro"
                    }`}
                  >
                    {t("location")}
                  </h4>
                  <p
                    className={
                      mode === "dark"
                        ? "text-textWhite/80"
                        : "text-grisOscuro/80"
                    }
                  >
                    Colombia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 ${
                  mode === "dark" ? "text-textWhite" : "text-grisOscuro"
                }`}
              >
                {t("nameContact")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  mode === "dark"
                    ? "bg-grisOscuro border-doradoClaro/20 text-doradoClaro"
                    : "bg-white border-grisOscuro/20 text-grisOscuro"
                } focus:outline-none focus:ring-2 focus:ring-dorado`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${
                  mode === "dark" ? "text-textWhite" : "text-grisOscuro"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  mode === "dark"
                    ? "bg-grisOscuro border-doradoClaro/20 text-doradoClaro"
                    : "bg-white border-grisOscuro/20 text-grisOscuro"
                } focus:outline-none focus:ring-2 focus:ring-dorado`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${
                  mode === "dark" ? "text-textWhite" : "text-grisOscuro"
                }`}
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`w-full px-4 py-2 rounded-lg border ${
                  mode === "dark"
                    ? "bg-grisOscuro border-doradoClaro/20 text-doradoClaro"
                    : "bg-white border-grisOscuro/20 text-grisOscuro"
                } focus:outline-none focus:ring-2 focus:ring-dorado`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 ${
                mode === "dark"
                  ? "bg-doradoClaro text-dark hover:bg-dorado"
                  : "bg-grisOscuro text-white hover:bg-black"
              } transition-colors duration-300`}
            >
              <span>{isSubmitting ? t("sending") : t("send_message")}</span>
              {!isSubmitting && <Send className="w-4 h-4" />}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};
