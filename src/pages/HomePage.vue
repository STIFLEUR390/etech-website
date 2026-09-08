<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero Section placeholder -->
    <section class="section-padding container-custom text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark dark:text-white text-balance">
        {{ t('hero.title') }}
      </h1>
      <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-3xl mx-auto">
        {{ t('hero.subtitle') }}
      </p>
    </section>
  </div>
</template>
