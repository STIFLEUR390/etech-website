<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'
import {
  Hash,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  BarChart3,
  Users,
  Zap,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()

usePageSeo(
  'Numéro Court Cameroun | ETECH KEYS',
  'Numéros courts dédiés et partagés au Cameroun. Jeux concours, enquêtes, sondages. SMS bidirectionnel.'
)

const features = [
  { key: 'dedicated', icon: Hash },
  { key: 'shared', icon: Users },
  { key: 'bidirectional', icon: MessageSquare },
  { key: 'analytics', icon: BarChart3 },
]

const useCases = [
  { key: 'contests', icon: Zap },
  { key: 'surveys', icon: BarChart3 },
  { key: 'subscriptions', icon: Users },
  { key: 'voting', icon: MessageSquare },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 right-0 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6">
          <Hash :size="16" class="text-purple-500" />
          <span class="text-sm font-semibold text-purple-600 dark:text-purple-400">Numéros courts</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight max-w-3xl">
          Numéros courts dédiés et partagés au Cameroun
        </h1>
        <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          Créez des expériences SMS interactives avec des numéros courts dédiés ou partagés. Idéal pour les jeux concours, enquêtes et sondages.
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

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="feature in features" :key="feature.key" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <component :is="feature.icon" :size="24" class="text-purple-500" />
            </div>
            <h3 class="font-bold text-brand-dark dark:text-white mb-2">
              {{ feature.key === 'dedicated' ? 'Numéros dédiés' : feature.key === 'shared' ? 'Numéros partagés' : feature.key === 'bidirectional' ? 'SMS bidirectionnel' : 'Statistiques en temps réel' }}
            </h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">
              {{ feature.key === 'dedicated' ? 'Numéro court exclusif pour votre marque. Identifiable par vos clients.' : feature.key === 'shared' ? 'Numéro partagé avec d\'autres entreprises. Solution économique.' : feature.key === 'bidirectional' ? 'Recevez les réponses SMS de vos clients en temps réel.' : 'Suivez les participations, votes et réponses en direct.' }}
            </p>
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

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div v-for="useCase in useCases" :key="useCase.key" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center mb-4">
              <component :is="useCase.icon" :size="24" class="text-brand-green" />
            </div>
            <h3 class="text-lg font-bold text-brand-dark dark:text-white mb-2">
              {{ useCase.key === 'contests' ? 'Jeux concours' : useCase.key === 'surveys' ? 'Enquêtes & Sondages' : useCase.key === 'subscriptions' ? 'Souscriptions' : 'Votes interactifs' }}
            </h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">
              {{ useCase.key === 'contests' ? 'Organisez des jeux SMS avec participation par numéro court. Tirages au sort instantanés.' : useCase.key === 'surveys' ? 'Collectez les opinions de vos clients en temps réel via SMS.' : useCase.key === 'subscriptions' ? 'Gérez les inscriptions et abonnements par SMS.' : 'Permettez à vos clients de voter par SMS.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-brand-dark">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Besoin d'un numéro court ?
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          Contactez-nous pour obtenir un numéro court dédié ou partagé.
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('cta.createAccount') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
