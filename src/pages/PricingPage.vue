<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowRight } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import PricingTable from '@/components/interactive/PricingTable.vue'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-light dark:bg-brand-green/10 border border-brand-green/20 mb-6">
          <span class="text-sm font-semibold text-brand-green-emerald dark:text-brand-green">Tarification transparente</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white">
          {{ t('pricing.title') }}
        </h1>
        <p class="mt-4 text-lg text-brand-slate dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('pricing.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ===== PRICING TABLE ===== -->
    <section class="section-padding">
      <div class="container-custom">
        <PricingTable />
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white mb-4">
          Besoin d'un tarif personnalisé ?
        </h2>
        <p class="text-lg text-brand-slate dark:text-gray-400 mb-8">
          Nos offres revendeurs sont adaptées à vos volumes. Contactez-nous pour un devis sur-mesure.
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('pricing.cta') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
