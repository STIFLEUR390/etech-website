<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  Send,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Upload,
  Settings,
  BarChart3,
  Building2,
  Landmark,
  ShoppingCart,
  Heart,
  Store,
  Code2,
  Globe,
  Smartphone,
  Bell,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import CodeSnippet from '@/components/ui/CodeSnippet.vue'

const { t } = useI18n()

const operators = [
  { name: 'MTN', color: '#FFCC00', textColor: '#000' },
  { name: 'Orange', color: '#FF6600', textColor: '#fff' },
  { name: 'Nexttel', color: '#E30613', textColor: '#fff' },
  { name: 'Camtel', color: '#0066CC', textColor: '#fff' },
]

const features = [
  { key: 'delivery', icon: CheckCircle2 },
  { key: 'import', icon: Upload },
  { key: 'personalization', icon: Settings },
  { key: 'platform', icon: Globe },
]

const industries = [
  { key: 'retail' },
  { key: 'finance' },
  { key: 'developers' },
]

const smsApiCode = `GET sms.etech-keys.com/ss/envoyer.php?login=VOTRE_LOGIN&password=VOTRE_MDP&sender=ETECH+KEYS&tel=237695686207&text=Bonjour+!`

const restApiCode = `POST v1.api.etech-keys.com/api/v1/send-sms
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "sender_id": "ETECH KEYS",
  "to": "237695686207",
  "msg": "Bonjour depuis ETECH KEYS!"
}`

const smppConfig = `Host: sms.etech-keys.com
Port: 2775 / 2776 (TLS)
Version: SMPP v3.4
Modes: Transmitter, Receiver, Transceiver
Débit: jusqu'à 500 SMS/s
Bind: Transceiver
TON: 5 (Alphanum.)
NPI: 0`
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-0 w-[600px] h-[400px] bg-brand-blue-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-light dark:bg-brand-blue-primary/10 border border-brand-blue-primary/20 mb-6">
          <Send :size="16" class="text-brand-blue-primary" />
          <span class="text-sm font-semibold text-brand-blue-primary">Solution SMS professionnelle</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight max-w-3xl">
          {{ t('smsTelecom.title') }}
        </h1>
        <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          {{ t('smsTelecom.subtitle') }}
        </p>

        <!-- Operators -->
        <div class="flex flex-wrap gap-4 mt-8">
          <div
            v-for="op in operators"
            :key="op.name"
            class="px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-transform hover:scale-105"
            :style="{ backgroundColor: op.color, color: op.textColor }"
          >
            {{ op.name }}
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div class="p-4 rounded-xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
            <p class="text-2xl font-extrabold text-brand-dark dark:text-white">58,500</p>
            <p class="text-xs text-brand-slate dark:text-gray-400 mt-1">SMS envoyés aujourd'hui</p>
          </div>
          <div class="p-4 rounded-xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
            <p class="text-2xl font-extrabold text-brand-green">98.5%</p>
            <p class="text-xs text-brand-slate dark:text-gray-400 mt-1">{{ t('smsTelecom.deliveryRate') }}</p>
          </div>
          <div class="p-4 rounded-xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
            <p class="text-2xl font-extrabold text-brand-blue-primary">&lt;3s</p>
            <p class="text-xs text-brand-slate dark:text-gray-400 mt-1">{{ t('smsTelecom.deliveryTime') }}</p>
          </div>
          <div class="p-4 rounded-xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
            <p class="text-2xl font-extrabold text-brand-dark dark:text-white">4</p>
            <p class="text-xs text-brand-slate dark:text-gray-400 mt-1">{{ t('smsTelecom.operators') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SMS TYPES ===== -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            {{ t('smsTelecom.offers.title') }}
          </h2>
          <p class="mt-4 text-brand-slate dark:text-gray-400">
            {{ t('smsTelecom.offers.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Promotional -->
          <div class="p-8 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-brand-blue-primary flex items-center justify-center mb-6">
              <Send :size="28" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-brand-dark dark:text-white mb-3">
              {{ t('smsTelecom.offers.promotional.title') }}
            </h3>
            <p class="text-sm text-brand-slate dark:text-gray-400 leading-relaxed mb-6">
              {{ t('smsTelecom.offers.promotional.description') }}
            </p>
            <ul class="space-y-2">
              <li v-for="(_, idx) in 4" :key="idx" class="flex items-center gap-2">
                <CheckCircle2 :size="16" class="text-brand-green shrink-0" />
                <span class="text-sm text-brand-slate dark:text-gray-300">{{ t(`smsTelecom.offers.promotional.features[${idx}]`) }}</span>
              </li>
            </ul>
          </div>

          <!-- Notification -->
          <div class="p-8 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center mb-6">
              <Bell :size="28" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-brand-dark dark:text-white mb-3">
              {{ t('smsTelecom.offers.notification.title') }}
            </h3>
            <p class="text-sm text-brand-slate dark:text-gray-400 leading-relaxed mb-6">
              {{ t('smsTelecom.offers.notification.description') }}
            </p>
            <ul class="space-y-2">
              <li v-for="(_, idx) in 4" :key="idx" class="flex items-center gap-2">
                <CheckCircle2 :size="16" class="text-brand-green shrink-0" />
                <span class="text-sm text-brand-slate dark:text-gray-300">{{ t(`smsTelecom.offers.notification.features[${idx}]`) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURES ===== -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            {{ t('smsTelecom.features.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="feat in features"
            :key="feat.key"
            class="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50 text-center hover:shadow-lg transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
              <component :is="feat.icon" :size="24" class="text-brand-green" />
            </div>
            <h3 class="font-bold text-brand-dark dark:text-white mb-2">{{ t(`smsTelecom.features.${feat.key}.title`) }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ t(`smsTelecom.features.${feat.key}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== INDUSTRIES ===== -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            {{ t('smsTelecom.industries.title') }}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            v-for="ind in industries"
            :key="ind.key"
            class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10"
          >
            <h3 class="font-bold text-brand-dark dark:text-white mb-4">{{ t(`smsTelecom.industries.${ind.key}.name`) }}</h3>
            <ul class="space-y-2">
              <li v-for="(_, idx) in 4" :key="idx" class="flex items-center gap-2">
                <CheckCircle2 :size="14" class="text-brand-green shrink-0" />
                <span class="text-sm text-brand-slate dark:text-gray-400">{{ t(`smsTelecom.industries.${ind.key}.items[${idx}]`) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== API INTEGRATION ===== -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            {{ t('docs.title') }}
          </h2>
        </div>

        <div class="max-w-4xl mx-auto space-y-8">
          <CodeSnippet :code="smsApiCode" language="HTTP" title="API HTTPS — Envoi SMS par requête GET" />
          <CodeSnippet :code="restApiCode" language="JSON" title="REST API v1 — Bearer Token" />
          <CodeSnippet :code="smppConfig" language="Config" title="SMPP — Haut débit" />
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section-padding bg-brand-dark">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {{ t('smsTelecom.cta.title') }}
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          {{ t('smsTelecom.cta.description') }}
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('cta.createAccount') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
