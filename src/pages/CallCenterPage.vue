<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'
import {
  Headphones,
  ArrowRight,
  CheckCircle2,
  Users,
  BarChart3,
  Mic,
  Settings,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()

usePageSeo(
  'Call Center Cloud Cameroun | ETECH KEYS',
  'Centre d\'appels professionnel avec supervision en temps réel, enregistrement, scripts et reporting avancé.'
)

const features = [
  { icon: Users, title: 'Agents illimités', desc: 'Ajoutez autant d\'agents que nécessaire.' },
  { icon: Mic, title: 'Enregistrement', desc: 'Enregistrement automatique de tous les appels.' },
  { icon: BarChart3, title: 'Reporting avancé', desc: 'Statistiques en temps réel et tableaux de bord.' },
  { icon: Settings, title: 'Scripts configurables', desc: 'Scripts d\'appel personnalisables par campagne.' },
]
</script>

<template>
  <div>
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 right-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 mb-6">
          <Headphones :size="16" class="text-cyan-500" />
          <span class="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Call Center</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight max-w-3xl">
          Call Center Cloud au Cameroun
        </h1>
        <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          Centre d'appels professionnel avec supervision en temps réel, enregistrement, scripts et reporting avancé.
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
            <div class="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center mb-4">
              <component :is="feature.icon" :size="24" class="text-cyan-500" />
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
          Besoin d'un call center ?
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          Contactez-nous pour configurer votre centre d'appels cloud.
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('cta.createAccount') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
