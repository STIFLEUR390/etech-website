<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'
import {
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Wifi,
  WifiOff,
  Smartphone,
  CreditCard,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()

usePageSeo(
  'Code USSD Cameroun | Menu interactif sans internet | ETECH KEYS',
  'Créez des services USSD interactifs pour vos clients. Paiement mobile, transfert d\'argent, information. Sans connexion internet.'
)

const operators = [
  { name: 'MTN', color: '#FFCC00' },
  { name: 'Orange', color: '#FF6600' },
  { name: 'Nexttel', color: '#E30613' },
  { name: 'Camtel', color: '#0066CC' },
]

const features = [
  { key: 'noInternet', icon: WifiOff },
  { key: 'interactive', icon: Smartphone },
  { key: 'payment', icon: CreditCard },
  { key: 'universal', icon: Wifi },
]

const useCases = [
  { key: 'payment', icon: CreditCard, title: 'Paiement mobile', desc: 'Transactions Mobile Money, recharges, paiements de factures.' },
  { key: 'info', icon: Smartphone, title: 'Services d\'information', desc: 'Consultation de solde, statut de commande, résultats d\'examens.' },
  { key: 'surveys', icon: PhoneCall, title: 'Enquêtes & sondages', desc: 'Collectez les opinions et données clients en temps réel.' },
  { key: 'contests', icon: CheckCircle2, title: 'Jeux concours', desc: 'Participations, votes, concours SMS interactifs.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-0 w-[600px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 mb-6">
          <PhoneCall :size="16" class="text-orange-500" />
          <span class="text-sm font-semibold text-orange-600 dark:text-orange-400">USSD</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight max-w-3xl">
          Services USSD Cameroun
        </h1>
        <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          Créez des menus interactifs accessibles depuis n'importe quel téléphone sans connexion internet. Paiement mobile, sondages, jeux concours.
        </p>

        <div class="flex flex-wrap gap-3 mt-6">
          <span v-for="op in operators" :key="op.name" class="px-4 py-2 rounded-xl font-bold text-sm" :style="{ backgroundColor: op.color, color: op.name === 'MTN' ? '#000' : '#fff' }">
            {{ op.name }} ✓
          </span>
        </div>

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

    <!-- USSD Demo -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-extrabold text-brand-dark dark:text-white mb-6">
              Qu'est-ce que l'USSD ?
            </h2>
            <p class="text-brand-slate dark:text-gray-300 leading-relaxed mb-6">
              L'USSD (Unstructured Supplementary Service Data) permet de créer des menus interactifs accessibles en composant un code sur n'importe quel téléphone, sans connexion internet.
            </p>
            <ul class="space-y-3">
              <li v-for="feature in features" :key="feature.key" class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                  <component :is="feature.icon" :size="16" class="text-orange-500" />
                </div>
                <span class="text-sm font-medium text-brand-dark dark:text-white">
                  {{ feature.key === 'noInternet' ? 'Sans internet' : feature.key === 'interactive' ? 'Session interactive' : feature.key === 'payment' ? 'Paiement mobile' : 'Universel' }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Phone Demo -->
          <div class="flex justify-center">
            <div class="w-[280px] rounded-[3rem] bg-gray-900 p-3 shadow-2xl">
              <div class="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
              <div class="rounded-[2.5rem] overflow-hidden bg-white p-4">
                <div class="text-center mb-4">
                  <span class="text-xs font-semibold text-brand-dark">9:41</span>
                </div>
                <div class="bg-gray-100 rounded-xl p-4 text-center">
                  <p class="text-sm font-semibold text-brand-dark mb-2">*123#</p>
                  <div class="space-y-2 text-xs text-left">
                    <p>Bienvenue chez ETECH KEYS</p>
                    <p>1. Consulter mon solde</p>
                    <p>2. Recharger mon compte</p>
                    <p>3. Historique transactions</p>
                    <p>4. Contacter le support</p>
                    <p>0. Quitter</p>
                  </div>
                  <div class="mt-3 flex items-center gap-2">
                    <input type="text" placeholder="Répondre :" class="flex-1 px-3 py-2 text-xs border rounded-lg" />
                    <button class="px-3 py-2 bg-orange-500 text-white text-xs rounded-lg">OK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">
            Ce que vous pouvez faire avec l'USSD
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div v-for="useCase in useCases" :key="useCase.key" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center mb-4">
              <component :is="useCase.icon" :size="24" class="text-brand-green" />
            </div>
            <h3 class="text-lg font-bold text-brand-dark dark:text-white mb-2">{{ useCase.title }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ useCase.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-brand-dark">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Un projet USSD au Cameroun ?
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
        </p>
        <BaseButton to="/contact" variant="primary" color="green" size="lg">
          {{ t('cta.createAccount') }}
          <ArrowRight :size="18" />
        </BaseButton>
      </div>
    </section>
  </div>
</template>
