<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

interface Props {
  code: string
  language?: string
  title?: string
}

defineProps<Props>()

const copied = ref(false)

async function copyToClipboard(code: string) {
  try {
    await navigator.clipboard.writeText(code)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Fallback
    const textarea = document.createElement('textarea')
    textarea.value = code
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  }
}
</script>

<template>
  <div class="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
    <!-- Header -->
    <div v-if="title || language" class="flex items-center justify-between px-4 py-2.5 bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
      <div class="flex items-center gap-2">
        <span v-if="language" class="text-xs font-mono font-medium text-brand-slate dark:text-gray-400 px-2 py-0.5 rounded bg-gray-200 dark:bg-white/10">
          {{ language }}
        </span>
        <span v-if="title" class="text-sm font-medium text-brand-dark dark:text-white">
          {{ title }}
        </span>
      </div>
      <button
        @click="copyToClipboard(code)"
        class="flex items-center gap-1.5 text-xs font-medium text-brand-slate dark:text-gray-400 hover:text-brand-blue-primary dark:hover:text-brand-blue-primary transition-colors px-2 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10"
        :title="copied ? 'Copié !' : 'Copier le code'"
      >
        <Check v-if="copied" :size="14" class="text-brand-green" />
        <Copy v-else :size="14" />
        <span>{{ copied ? 'Copié !' : 'Copier' }}</span>
      </button>
    </div>

    <!-- Code Block -->
    <div class="bg-gray-900 dark:bg-black/50 overflow-x-auto">
      <pre class="p-4 text-sm font-mono leading-relaxed"><code class="text-gray-100">{{ code }}</code></pre>
    </div>
  </div>
</template>
