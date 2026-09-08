<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'
import {
  Cloud,
  ArrowRight,
  CheckCircle2,
  Server,
  Shield,
  Zap,
  HardDrive,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()

usePageSeo(
  'Hébergement Cloud Cameroun | VPS & Serveurs Dédiés | ETECH KEYS',
  'Serveurs dédiés, VPS, hébergement web haute disponibilité. Infrastructure sécurisée et scalable.'
)

const features = [
  { icon: Server, title: 'Serveurs dédiés', desc: 'Rserveurs performants dédiés à vos applications.' },
  { icon: HardDrive, title: 'VPS', desc: 'Serveurs virtuels privés avec ressources garanties.' },
  { icon: Shield, title: 'Sécurité', desc: 'Infrastructure sécurisée avec sauvegardes automatiques.' },
  { icon: Zap, title: 'Haute disponibilité', desc: 'Uptime garanti 99.9% avec support 24/7.' },
]
</script>

<template>
  <div>
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-0 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 mb-6">
          <Cloud :size="16" class="text-indigo-500" />
          <span class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Cloud</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight max-w-3xl">
          Hébergement Cloud au Cameroun
        </h1>
        <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          Serveurs dédiés, VPS, hébergement web haute disponibilité. Infrastructure sécurisée et scalable pour vos applications.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <BaseButton to="/contact" variant="primary" color="green" size="lg">
            {{ t('hero.cta') }}
            <ArrowRight :size="18" />
          </BaseButton>
        </div>
      </div>
    </section>

    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div v-for="feature in features" :key="feature.title" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center mb-4">
              <component :is="feature.icon" :size="24" class="text-indigo-500" />
            </div>
            <h3 class="text-lg font-bold text-brand-dark dark:text-white mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-brand-dark">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Besoin d'hébergement cloud ?
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          Contactez-nous pour un devis personnalisé selon vos besoins.
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('cta.createAccount') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
