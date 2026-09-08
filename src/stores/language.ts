import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '@/i18n'

export const useLanguageStore = defineStore('language', () => {
  const currentLocale = ref<string>(
    localStorage.getItem('etech-lang') ||
    (navigator.language.startsWith('fr') ? 'fr' : 'en')
  )

  function setLocale(locale: 'fr' | 'en') {
    currentLocale.value = locale
  }

  function toggle() {
    currentLocale.value = currentLocale.value === 'fr' ? 'en' : 'fr'
  }

  // Sync with localStorage and vue-i18n
  watch(currentLocale, (locale) => {
    localStorage.setItem('etech-lang', locale)
    document.documentElement.lang = locale
    // Directly update vue-i18n locale
    i18n.global.locale.value = locale as 'fr' | 'en'
  }, { immediate: true })

  return { currentLocale, setLocale, toggle }
})
