<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'
import {
  Headphones,
  ArrowRight,
  CheckCircle2,
  Mic,
  Play,
  Clock,
  BarChart3,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()

usePageSeo(
  'Serveur Vocal SVI Cameroun | ETECH KEYS',
  'SVI, messages préenregistrés, campagnes vocales automatisées. Notifications et alertes par appel téléphonique.'
)

const features = [
  { key: 'svi', icon: Headphones, title: 'SVI (Serveur Vocal Interactif)', desc: 'Menus vocaux interactifs pour guider vos clients.' },
  { key: 'prerecorded', icon: Play, title: 'Messages préenregistrés', desc: 'Messages vocaux personnalisés et professionnels.' },
  { key: 'campaigns', icon: Mic, title: 'Campagnes vocales', desc: 'Envoi de messages vocaux en masse automatisé.' },
  { key: 'analytics', icon: BarChart3, title: 'Statistiques détaillées', desc: 'Suivez les appels, durée, taux de réponse.' },
]

const useCases = [
  { title: 'Rappels de rendez-vous', desc: 'Réduisez les no-shows avec des rappels vocaux automatiques.' },
  { title: 'Notifications urgentes', desc: 'Alertes de sécurité, transactions, livraisons.' },
  { title: 'Enquêtes de satisfaction', desc: 'Recueillez les avis de vos clients par téléphone.' },
  { title: 'Campagnes marketing', desc: 'Promotions et offres spéciales par appel vocal.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 right-0 w-[600px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 mb-6">
          <Headphones :size="16" class="text-pink-500" />
          <span class="text-sm font-semibold text-pink-600 dark:text-pink-400">Serveur Vocal</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight max-w-3xl">
          Serveur Vocal & SVI au Cameroun
        </h1>
        <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          SVI, messages préenregistrés, campagnes vocales automatisées. Notifications et alertes par appel téléphonique.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <BaseButton to="/contact" variant="primary" color="green" size="lg">
            {{ t('hero.cta') }}
            <ArrowRight :size="18" />
          </BaseButton>
          <BaseButton to="/tarifs" variant="outline" color="blue" size="lg">
            {{ t('nav.pricing') }}
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            Fonctionnalités
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div v-for="feature in features" :key="feature.key" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center mb-4">
              <component :is="feature.icon" :size="24" class="text-pink-500" />
            </div>
            <h3 class="text-lg font-bold text-brand-dark dark:text-white mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            Cas d'utilisation
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="useCase in useCases" :key="useCase.title" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 :size="24" class="text-brand-green" />
            </div>
            <h3 class="font-bold text-brand-dark dark:text-white mb-2">{{ useCase.title }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ useCase.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-brand-dark">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Besoin d'un serveur vocal ?
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          Contactez-nous pour configurer votre serveur vocal et SVI.
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('cta.createAccount') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
