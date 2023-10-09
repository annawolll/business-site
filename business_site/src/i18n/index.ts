import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en'
import pl from './pl'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: ['translation']
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      caches: [],
    },
    resources: {
      pl,
      en,
    },
    fallbackLng: 'en',
    load: 'languageOnly',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
