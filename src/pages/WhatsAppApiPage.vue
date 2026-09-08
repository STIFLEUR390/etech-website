<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'

const { t } = useI18n()

usePageSeo(
  'WhatsApp Business API Cameroun | Tech Provider Meta | ETECH KEYS',
  "WhatsApp Business API au Cameroun. Tech Provider Meta Officiel. Embedded Signup, templates, OTP, notifications. Taux d'ouverture de 98%."
)
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  MessageSquare,
  Image,
  BarChart3,
  Code2,
  Bell,
  Plug,
  Zap,
  Lock,
  Send,
  FileText,
  Users,
  ShoppingCart,
  Heart,
  Stethoscope,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import WaPricingCalculator from '@/components/interactive/WaPricingCalculator.vue'


const features = [
  { key: 'templates', icon: FileText, color: 'bg-brand-blue-primary' },
  { key: 'embeddedSignup', icon: Plug, color: 'bg-brand-green' },
  { key: 'notifications', icon: Bell, color: 'bg-orange-500' },
  { key: 'richMedia', icon: Image, color: 'bg-purple-500' },
  { key: 'api', icon: Code2, color: 'bg-indigo-500' },
  { key: 'analytics', icon: BarChart3, color: 'bg-pink-500' },
]

const messageTypes = [
  {
    key: 'utility',
    icon: Bell,
    color: 'bg-brand-blue-primary',
    examples: ['Souscription assurance', 'Renouvellement', 'Expiration'],
  },
  {
    key: 'authentication',
    icon: Lock,
    color: 'bg-orange-500',
    examples: ['Code OTP', '2FA', 'Vérification'],
  },
  {
    key: 'marketing',
    icon: Send,
    color: 'bg-brand-green',
    examples: ['Promotions', 'Anniversaire', 'Offres'],
  },
]

const embeddedSteps = [
  { key: 'step1', icon: Shield },
  { key: 'step2', icon: Users },
  { key: 'step3', icon: Zap },
  { key: 'step4', icon: CheckCircle2 },
]

const industries = [
  { key: 'assurances', icon: Shield, clients: 'IDCAM, PASSCAM, CPA, BELIFE' },
  { key: 'banques', icon: Users, clients: '' },
  { key: 'ecommerce', icon: ShoppingCart, clients: '' },
  { key: 'sante', icon: Heart, clients: '' },
]
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-green/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-light dark:bg-brand-green/10 border border-brand-green/20 mb-6 animate-fade-in">
          <Shield :size="16" class="text-brand-green" />
          <span class="text-sm font-semibold text-brand-green-emerald dark:text-brand-green">Meta Tech Provider Officiel</span>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight">
              {{ t('whatsappApi.title') }}
            </h1>
            <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-lg">
              {{ t('whatsappApi.subtitle') }}
            </p>

            <!-- Permissions badges -->
            <div class="flex flex-wrap gap-2 mt-6">
              <span v-for="perm in ['UTILITY', 'MARKETING', 'AUTHENTICATION']" :key="perm" class="px-3 py-1 rounded-full text-xs font-bold bg-brand-green/10 text-brand-green border border-brand-green/20">
                ✓ {{ perm }}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <BaseButton to="/contact" variant="primary" color="green" size="lg">
                {{ t('hero.cta') }}
                <ArrowRight :size="18" />
              </BaseButton>
              <a href="https://vas.etech-keys.com/pages/connect_whatsapp.php" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-emerald text-white font-semibold rounded-xl transition-colors shadow-brand-green">
                Connecter mon WABA
              </a>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-4 animate-slide-up">
            <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
              <p class="text-3xl font-extrabold text-brand-green">98%</p>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">{{ t('metrics.openRate') }}</p>
            </div>
            <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
              <p class="text-3xl font-extrabold text-brand-blue-primary">&lt;2s</p>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">{{ t('metrics.deliveryTime') }}</p>
            </div>
            <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
              <p class="text-3xl font-extrabold text-brand-dark dark:text-white">2Md</p>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">Utilisateurs WA</p>
            </div>
            <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
              <p class="text-3xl font-extrabold text-brand-green">3min</p>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">Connexion WABA</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURES ===== -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            {{ t('whatsappApi.subtitle') }}
          </h2>
          <p class="mt-4 text-brand-slate dark:text-gray-400">
            {{ t('metaProvider.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.key"
            class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-lg hover:border-brand-green/30 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" :class="feature.color">
              <component :is="feature.icon" :size="24" class="text-white" />
            </div>
            <h3 class="text-lg font-bold text-brand-dark dark:text-white mb-2">
              {{ t(`whatsappApi.features.${feature.key}`) }}
            </h3>
            <p class="text-sm text-brand-slate dark:text-gray-400 leading-relaxed">
              {{ t(`whatsappApi.features.${feature.key}Desc`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MESSAGE TYPES ===== -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-sm font-semibold text-brand-green uppercase tracking-wider">Types de Messages</span>
          <h2 class="mt-3 text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            {{ t('whatsappApi.messageTypes.title') }}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            v-for="type in messageTypes"
            :key="type.key"
            class="relative p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50 hover:shadow-xl transition-all duration-300"
          >
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" :class="type.color">
              <component :is="type.icon" :size="28" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-brand-dark dark:text-white mb-3">
              {{ t(`whatsappApi.messageTypes.${type.key}`) }}
            </h3>
            <p class="text-sm text-brand-slate dark:text-gray-400 leading-relaxed mb-6">
              {{ t(`whatsappApi.messageTypes.${type.key}Desc`) }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="example in type.examples"
                :key="example"
                class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/5 text-brand-slate dark:text-gray-400"
              >
                {{ example }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== EMBEDDED SIGNUP ===== -->
    <section class="section-padding bg-brand-blue dark:bg-brand-dark">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-sm font-semibold text-brand-green uppercase tracking-wider">Nouveau</span>
          <h2 class="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            {{ t('whatsappApi.embeddedSignup.title') }}
          </h2>
          <p class="mt-4 text-gray-300">
            {{ t('whatsappApi.embeddedSignup.description') }}
          </p>
        </div>

        <!-- Steps -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(step, idx) in embeddedSteps"
            :key="step.key"
            class="relative p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-center"
          >
            <div class="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-4">
              <span class="text-lg font-bold text-brand-green">{{ idx + 1 }}</span>
            </div>
            <component :is="step.icon" :size="24" class="text-brand-green mx-auto mb-3" />
            <p class="text-sm text-white font-medium">
              {{ t(`whatsappApi.embeddedSignup.${step.key}`) }}
            </p>
          </div>
        </div>

        <div class="text-center mt-10">
          <a href="https://vas.etech-keys.com/pages/connect_whatsapp.php" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-emerald text-white font-semibold rounded-xl transition-colors shadow-brand-green">
            Connecter mon WABA maintenant
            <ArrowRight :size="18" />
          </a>
        </div>
      </div>
    </section>

    <!-- ===== PRICING CALCULATOR ===== -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom max-w-4xl mx-auto">
        <WaPricingCalculator />
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section-padding">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white mb-4">
          {{ t('cta.ready') }}
        </h2>
        <p class="text-lg text-brand-slate dark:text-gray-400 mb-8">
          {{ t('whatsappApi.subtitle') }}
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('cta.createAccount') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
