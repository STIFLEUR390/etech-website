import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref<boolean>(
    localStorage.getItem('etech-theme') === 'dark' ||
    (!localStorage.getItem('etech-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  function toggle() {
    isDark.value = !isDark.value
  }

  function setDark(value: boolean) {
    isDark.value = value
  }

  // Sync with DOM
  watch(isDark, (dark) => {
    localStorage.setItem('etech-theme', dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', dark)
  }, { immediate: true })

  return { isDark, toggle, setDark }
})
