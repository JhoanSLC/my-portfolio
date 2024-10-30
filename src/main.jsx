import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage.jsx";
import { LanguageProvider } from "./components/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
