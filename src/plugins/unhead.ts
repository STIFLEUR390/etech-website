import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function usePageSeo(title: string, description?: string) {
  // Set document title directly
  document.title = title

  // Set meta description
  if (description) {
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }
}
