<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'

const { t } = useI18n()

usePageSeo(
  'ETECH KEYS — SMS, WhatsApp Business API & USSD Cameroun',
  'La plateforme SMS, WhatsApp Business API & USSD de référence au Cameroun. Envoyez des OTP, notifications et campagnes en moins de 2 secondes.'
)
import {
  MessageSquare,
  Send,
  Hash,
  PhoneCall,
  Headphones,
  Cloud,
  Code2,
  Plug,
  Zap,
  ArrowRight,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  Building2,
  Landmark,
  ShoppingCart,
  Heart,
  Store,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import PhoneSimulator from '@/components/interactive/PhoneSimulator.vue'


const services = [
  { key: 'whatsapp', icon: MessageSquare, color: 'bg-brand-green', href: '/whatsapp-api' },
  { key: 'sms', icon: Send, color: 'bg-brand-blue-primary', href: '/sms-telecom' },
  { key: 'shortNumber', icon: Hash, color: 'bg-purple-500', href: '/numero-court' },
  { key: 'ussd', icon: PhoneCall, color: 'bg-orange-500', href: '/ussd' },
  { key: 'voiceServer', icon: Headphones, color: 'bg-pink-500', href: '/serveur-vocal' },
  { key: 'callCenter', icon: Headphones, color: 'bg-cyan-500', href: '/call-center' },
  { key: 'cloud', icon: Cloud, color: 'bg-indigo-500', href: '/cloud' },
  { key: 'api', icon: Code2, color: 'bg-emerald-600', href: '/docs' },
  { key: 'wabaConnect', icon: Plug, color: 'bg-brand-green', href: '/whatsapp-api' },
]

const metrics = [
  { valueKey: 'openRateValue', labelKey: 'openRate', icon: CheckCircle2 },
  { valueKey: 'deliveryTimeValue', labelKey: 'deliveryTime', icon: Zap },
  { valueKey: 'operatorsValue', labelKey: 'operators', icon: Users },
  { valueKey: 'supportValue', labelKey: 'support', icon: Clock },
]

const clients = [
  { name: 'IDCAM', sector: 'Assurance' },
  { name: 'PASSCAM', sector: 'Assurance' },
  { name: 'CPA', sector: 'Banque' },
  { name: 'BELIFE', sector: 'Assurance' },
  { name: 'MTN', sector: 'Télécom' },
  { name: 'Orange', sector: 'Télécom' },
]

const metaPermissions = [
  'whatsapp_business_messaging',
  'whatsapp_business_management',
  'business_management',
  'public_profile',
]
</script>

<template>
  <div>
    <!-- ===== HERO SECTION ===== -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-brand-green/10 via-brand-blue-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left: Text -->
          <div class="text-center lg:text-left animate-fade-in">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-light dark:bg-brand-green/10 border border-brand-green/20 mb-6">
              <div class="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
              <span class="text-sm font-semibold text-brand-green-emerald dark:text-brand-green">
                {{ t('hero.badge') }}
              </span>
              <span class="text-xs text-brand-slate dark:text-gray-400">App ID: 929194900001617</span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-dark dark:text-white text-balance">
              {{ t('hero.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              {{ t('hero.subtitle') }}
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <BaseButton to="/contact" variant="primary" color="green" size="lg">
                {{ t('hero.cta') }}
                <ArrowRight :size="18" />
              </BaseButton>
              <BaseButton to="/docs" variant="outline" color="blue" size="lg">
                {{ t('hero.ctaSecondary') }}
              </BaseButton>
            </div>
          </div>

          <!-- Right: Phone Simulator -->
          <div class="flex justify-center lg:justify-end animate-slide-up">
            <PhoneSimulator />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== METRICS BAR ===== -->
    <section class="py-12 border-y border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="metric in metrics"
            :key="metric.labelKey"
            class="text-center"
          >
            <div class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green-light dark:bg-brand-green/10 mb-3">
              <component :is="metric.icon" :size="20" class="text-brand-green" />
            </div>
            <p class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
              {{ t(`metrics.${metric.valueKey}`) }}
            </p>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">
              {{ t(`metrics.${metric.labelKey}`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SERVICES GRID ===== -->
    <section class="section-padding">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-sm font-semibold text-brand-green uppercase tracking-wider">
            {{ t('services.title') }}
          </span>
          <h2 class="mt-3 text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            {{ t('services.subtitle') }}
          </h2>
          <p class="mt-4 text-brand-slate dark:text-gray-400">
            {{ t('services.description') }}
          </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="service in services"
            :key="service.key"
            :to="service.href"
            class="group p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
              :class="service.color"
            >
              <component :is="service.icon" :size="24" class="text-white" />
            </div>
            <h3 class="text-lg font-bold text-brand-dark dark:text-white mb-2">
              {{ t(`services.items.${service.key}.title`) }}
            </h3>
            <p class="text-sm text-brand-slate dark:text-gray-400 leading-relaxed">
              {{ t(`services.items.${service.key}.description`) }}
            </p>
            <span class="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-brand-blue-primary group-hover:text-brand-green transition-colors">
              {{ t(`services.items.${service.key}.cta`) }}
              <ArrowRight :size="14" class="transition-transform group-hover:translate-x-1" />
            </span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ===== TRUST / CLIENTS ===== -->
    <section class="py-16 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/10">
      <div class="container-custom">
        <p class="text-center text-sm font-semibold text-brand-slate dark:text-gray-400 uppercase tracking-wider mb-10">
          {{ t('trust.title') }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          <div
            v-for="client in clients"
            :key="client.name"
            class="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
          >
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-brand-dark border border-gray-200 dark:border-white/10 flex items-center justify-center">
              <span class="text-lg md:text-xl font-bold text-brand-dark dark:text-white">{{ client.name }}</span>
            </div>
            <span class="text-xs text-brand-slate dark:text-gray-500">{{ client.sector }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== META PROVIDER SECTION ===== -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-dark p-8 md:p-12 lg:p-16">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue-primary/20 rounded-full blur-3xl"></div>

          <div class="relative grid lg:grid-cols-2 gap-12 items-center">
            <!-- Left: Text -->
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/20 border border-brand-green/30 mb-6">
                <Shield :size="16" class="text-brand-green" />
                <span class="text-sm font-semibold text-brand-green">Tech Provider Officiel Meta</span>
              </div>

              <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-6">
                {{ t('metaProvider.title') }}
              </h2>
              <p class="text-gray-300 leading-relaxed mb-8">
                {{ t('metaProvider.description') }}
              </p>

              <div class="grid grid-cols-2 gap-4">
                <div class="px-4 py-3 rounded-xl bg-white/10 border border-white/10">
                  <p class="text-xs text-gray-400 mb-1">{{ t('metaProvider.app_id') }}</p>
                  <p class="text-sm font-mono font-bold text-brand-green">929194900001617</p>
                </div>
                <div class="px-4 py-3 rounded-xl bg-white/10 border border-white/10">
                  <p class="text-xs text-gray-400 mb-1">{{ t('metaProvider.status') }}</p>
                  <p class="text-sm font-bold text-brand-green flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                    {{ t('metaProvider.live') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Right: Permissions -->
            <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h3 class="text-white font-bold mb-6 text-lg">Permissions API</h3>
              <div class="space-y-3">
                <div
                  v-for="perm in metaPermissions"
                  :key="perm"
                  class="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckCircle2 :size="16" class="text-brand-green shrink-0" />
                  <code class="text-sm font-mono text-brand-green">{{ perm }}</code>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p class="text-xs text-gray-400 mb-1">WABA</p>
                  <p class="text-sm font-mono text-white">1602533107472540</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400 mb-1">Business Manager</p>
                  <p class="text-sm font-mono text-white">873610742406957</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FINAL CTA ===== -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white mb-4">
          {{ t('cta.ready') }}
        </h2>
        <p class="text-lg text-brand-slate dark:text-gray-400 mb-8">
          {{ t('cta.readyDescription') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton to="/contact" variant="primary" color="green" size="lg">
            {{ t('cta.createAccount') }}
            <ArrowRight :size="18" />
          </BaseButton>
          <BaseButton to="/docs" variant="outline" color="blue" size="lg">
            {{ t('nav.docs') }}
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
