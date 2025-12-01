import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import fr from "./locales/fr/translation.json";
import ko from "./locales/ko/translation.json";
import de from "./locales/de/translation.json";
import es from "./locales/es/translation.json";
import it from "./locales/it/translation.json";
import pt from "./locales/pt/translation.json";
import ms from "./locales/ms/translation.json";
import id from "./locales/id/translation.json";
import th from "./locales/th/translation.json";
import nl from "./locales/nl/translation.json";
import pl from "./locales/pl/translation.json";
import vi from "./locales/vi/translation.json";
import ar from "./locales/ar/translation.json";
import cs from "./locales/cs/translation.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: { translation: en },

      hi: { translation: hi },

      fr: { translation: fr },

      ko: { translation: ko },

      de: { translation: de },

      es: { translation: es },

      it: { translation: it },

      pt: { translation: pt },

      ms: { translation: ms },

      id: { translation: id },

      th: { translation: th },

      nl: { translation: nl },

      pl: { translation: pl },

      vi: { translation: vi },

      ar: { translation: ar },

      cs: { translation: cs },


    }
  });

export default i18n;