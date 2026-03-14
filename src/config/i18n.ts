import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANGUAGE } from "../constants";
import LanguageDetector from "i18next-browser-languagedetector";
import languageResources from "../locales/index";

const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem("i18nextLng");
  return savedLanguage || undefined;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    lng: getSavedLanguage() || DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    resources: languageResources,
  });


const languages = Object.keys(i18n.services.resourceStore.data);
const setLanguageOptions = () => {
  return languages.map((lng) => ({
    label: i18n.getResource(lng, "translation", "language"),
    value: lng,
  }));
};

const languageOptions = setLanguageOptions();

export default i18n;
export { languages, languageOptions };