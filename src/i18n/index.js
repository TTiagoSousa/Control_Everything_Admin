import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import enJson from './Translations/en.json'
import ptJson from './Translations/en.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJson,
    pt: ptJson
  }
})

export default i18n;