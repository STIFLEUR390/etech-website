import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

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

  // Sync with localStorage
  watch(currentLocale, (locale) => {
    localStorage.setItem('etech-lang', locale)
    document.documentElement.lang = locale
  }, { immediate: true })

  return { currentLocale, setLocale, toggle }
})

// Composable to use i18n with the store
export function useI18nWithStore() {
  const { locale } = useI18n()
  const store = useLanguageStore()

  // Sync store locale with vue-i18n
  watch(() => store.currentLocale, (newLocale) => {
    locale.value = newLocale
  }, { immediate: true })

  return { ...store, locale }
}
