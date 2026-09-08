import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

// Detect saved language or browser default
const savedLang = localStorage.getItem('etech-lang')
const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en'
const defaultLocale = savedLang || browserLang

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
  },
})

export default i18n
