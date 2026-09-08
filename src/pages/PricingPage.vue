<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="section-padding container-custom">
    <h1 class="text-4xl font-bold text-brand-dark dark:text-white">{{ t('pricing.title') }}</h1>
    <p class="mt-4 text-brand-slate dark:text-gray-300">{{ t('pricing.subtitle') }}</p>
  </div>
</template>
