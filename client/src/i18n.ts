import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';
import ne from './locales/ne.json';
import bn from './locales/bn.json';
import mni from './locales/mni.json';
import as from './locales/as.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  ne: { translation: ne },
  bn: { translation: bn },
  mni: { translation: mni },
  as: { translation: as },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
