// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const language = localStorage.getItem("language") || "tr";
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: language, // Default language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      loadPath: "/src/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
  });

export default i18n;
