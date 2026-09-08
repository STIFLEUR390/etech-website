<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const categories = [
  { key: 'authentication', label: 'Authentication', price: 4, icon: '🔐', color: 'blue' },
  { key: 'service', label: 'Service', price: 5, icon: '⚙️', color: 'slate' },
  { key: 'utility', label: 'Utility', price: 8, icon: '📢', color: 'slate' },
  { key: 'marketing', label: 'Marketing', price: 22, icon: '📣', color: 'slate' },
] as const

const selectedCategory = ref(0)
const quantity = ref(1000)

const currentPrice = computed(() => categories[selectedCategory.value]?.price ?? 4)
const totalCost = computed(() => currentPrice.value * quantity.value)
const formattedCost = computed(() =>
  totalCost.value.toLocaleString('fr-FR') + ' FCFA'
)

const quantityPresets = [100, 500, 1000, 5000, 10000, 50000]
</script>

<template>
  <div class="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50 p-6 lg:p-8">
    <h3 class="text-xl font-bold text-brand-dark dark:text-white mb-6">
      {{ t('pricing.title') }} WhatsApp
    </h3>

    <!-- Category Selector -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      <button
        v-for="(cat, idx) in categories"
        :key="cat.key"
        @click="selectedCategory = idx"
        class="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200"
        :class="selectedCategory === idx
          ? 'border-brand-green bg-brand-green-light/50 dark:bg-brand-green/10 shadow-brand-green'
          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'"
      >
        <span class="text-2xl">{{ cat.icon }}</span>
        <span class="text-sm font-semibold text-brand-dark dark:text-white">{{ cat.label }}</span>
        <span class="text-lg font-bold text-brand-green">{{ cat.price }} FCFA</span>
      </button>
    </div>

    <!-- Quantity Input -->
    <div class="mb-6">
      <label class="block text-sm font-medium text-brand-dark dark:text-white mb-2">
        Nombre de messages
      </label>
      <input
        v-model.number="quantity"
        type="number"
        min="1"
        max="10000000"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-colors"
      />
      <!-- Presets -->
      <div class="flex flex-wrap gap-2 mt-3">
        <button
          v-for="preset in quantityPresets"
          :key="preset"
          @click="quantity = preset"
          class="px-3 py-1 text-xs font-medium rounded-lg border transition-colors"
          :class="quantity === preset
            ? 'border-brand-green bg-brand-green-light dark:bg-brand-green/10 text-brand-green'
            : 'border-gray-200 dark:border-white/10 text-brand-slate dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/20'"
        >
          {{ preset.toLocaleString('fr-FR') }}
        </button>
      </div>
    </div>

    <!-- Result -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-gradient-to-r from-brand-green/5 to-brand-blue/5 border border-brand-green/20">
      <div>
        <p class="text-sm text-brand-slate dark:text-gray-400 mb-1">Coût total estimé</p>
        <p class="text-3xl font-extrabold text-brand-dark dark:text-white">
          {{ formattedCost }}
        </p>
        <p class="text-xs text-brand-slate dark:text-gray-400 mt-1">
          {{ currentPrice }} FCFA × {{ quantity.toLocaleString('fr-FR') }} messages
        </p>
      </div>
      <a
        href="https://etech-keys.com/contact.html"
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 py-3 bg-brand-green hover:bg-brand-green-emerald text-white font-semibold rounded-xl transition-colors shadow-brand-green whitespace-nowrap"
      >
        {{ t('pricing.cta') }}
      </a>
    </div>
  </div>
</template>
