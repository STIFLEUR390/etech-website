<script setup lang="ts">
import { computed } from 'vue'
import { Check, Sparkles } from 'lucide-vue-next'
import BaseButton from './BaseButton.vue'

interface Props {
  title: string
  price: string
  unit?: string
  volume?: string
  features: string[]
  popular?: boolean
  cta?: string
  ctaTo?: string
}

const props = withDefaults(defineProps<Props>(), {
  unit: '/ SMS',
  popular: false,
  cta: 'Commencer',
  ctaTo: '/contact',
})

const cardClasses = computed(() =>
  props.popular
    ? 'relative border-2 border-brand-green shadow-brand-green'
    : 'border border-gray-200 dark:border-white/10'
)
</script>

<template>
  <div
    :class="[
      'relative flex flex-col rounded-2xl bg-white dark:bg-brand-dark/50 p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
      cardClasses,
    ]"
  >
    <!-- Popular Badge -->
    <div v-if="popular" class="absolute -top-3.5 left-1/2 -translate-x-1/2">
      <span class="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-brand-green text-white text-xs font-bold uppercase tracking-wide shadow-brand-green">
        <Sparkles :size="12" />
        Populaire
      </span>
    </div>

    <!-- Header -->
    <div class="mb-6">
      <h3 class="text-lg font-bold text-brand-dark dark:text-white">{{ title }}</h3>
      <p v-if="volume" class="mt-1 text-sm text-brand-slate dark:text-gray-400">{{ volume }}</p>
      <div class="mt-4 flex items-baseline gap-1">
        <span class="text-4xl font-extrabold text-brand-dark dark:text-white">{{ price }}</span>
        <span v-if="unit" class="text-sm text-brand-slate dark:text-gray-400">{{ unit }}</span>
      </div>
    </div>

    <!-- Features -->
    <ul class="flex-1 space-y-3 mb-8">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-3">
        <div class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center">
          <Check :size="12" class="text-brand-green-emerald dark:text-brand-green" />
        </div>
        <span class="text-sm text-brand-slate dark:text-gray-300">{{ feature }}</span>
      </li>
    </ul>

    <!-- CTA -->
    <BaseButton
      :to="ctaTo"
      :variant="popular ? 'primary' : 'outline'"
      :color="popular ? 'green' : 'blue'"
      class="w-full"
    >
      {{ cta }}
    </BaseButton>
  </div>
</template>
