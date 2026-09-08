<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import PricingCard from '../ui/PricingCard.vue'

const { t } = useI18n()

const activeTab = ref<'sms' | 'whatsapp' | 'resellers'>('sms')

const tabs = [
  { key: 'sms' as const, label: 'pricing.tabs.sms' },
  { key: 'whatsapp' as const, label: 'pricing.tabs.whatsapp' },
  { key: 'resellers' as const, label: 'pricing.tabs.resellers' },
]

const smsPlans = [
  {
    title: 'Lite',
    price: '35',
    volume: '< 99k SMS',
    popular: false,
    features: ['Envoi via portail web', 'Rapports de livraison', 'Support email', 'Sender name partagé'],
  },
  {
    title: 'Standard',
    price: '30',
    volume: '100k — 499k SMS',
    popular: true,
    features: ['API HTTPS & SMPP', 'Webhooks DLR', 'Sender name personnalisé', 'Support prioritaire', 'Dashboard analytics'],
  },
  {
    title: 'Ultra',
    price: '25',
    volume: '> 500k SMS',
    popular: false,
    features: ['Dédié SMPP', 'Débit jusqu\'à 500 SMS/s', 'Account manager dédié', 'SLA garanti', 'Intégration sur-mesure'],
  },
]

const whatsappPlans = [
  { title: 'Authentication', price: '4', volume: 'OTP, 2FA verification', features: ['Codes OTP sécurisés', 'Vérification 2FA', 'Format Meta sécurisé', 'DLR en temps réel'] },
  { title: 'Service', price: '5', volume: 'Transactions, confirmations', features: ['Confirmations de transaction', 'Alertes de paiement', 'Statuts de commande', 'Webhooks DLR'] },
  { title: 'Utility', price: '8', volume: 'Notifications, reminders', features: ['Notifications transactionnelles', 'Rappels d\'échéance', 'Alertes de livraison', 'Templates approuvés'] },
  { title: 'Marketing', price: '22', volume: 'Promotions, newsletters', features: ['Promotions & offres', 'Newsletters', 'Campagnes d\'engagement', 'Médias riches inclus'] },
]
</script>

<template>
  <div>
    <!-- Tabs -->
    <div class="flex flex-wrap justify-center gap-2 mb-12">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        class="px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200"
        :class="activeTab === tab.key
          ? 'bg-brand-dark dark:bg-white text-white dark:text-brand-dark shadow-lg'
          : 'text-brand-slate dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'"
      >
        {{ t(tab.label) }}
      </button>
    </div>

    <!-- SMS Plans -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <div v-if="activeTab === 'sms'" key="sms" class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        <PricingCard
          v-for="plan in smsPlans"
          :key="plan.title"
          :title="plan.title"
          :price="plan.price"
          unit="/ SMS"
          :volume="plan.volume"
          :features="plan.features"
          :popular="plan.popular"
          cta="Commencer"
        />
      </div>

      <!-- WhatsApp Plans -->
      <div v-else-if="activeTab === 'whatsapp'" key="whatsapp" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <PricingCard
          v-for="plan in whatsappPlans"
          :key="plan.title"
          :title="plan.title"
          :price="plan.price"
          unit="FCFA"
          :volume="plan.volume"
          :features="plan.features"
          :popular="plan.title === 'Utility'"
          cta="Commencer"
        />
      </div>

      <!-- Reseller Plans -->
      <div v-else key="resellers" class="max-w-4xl mx-auto">
        <div class="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50 dark:bg-white/5">
                <th class="text-left px-6 py-4 text-sm font-semibold text-brand-dark dark:text-white">Volume mensuel</th>
                <th class="text-center px-6 py-4 text-sm font-semibold text-brand-dark dark:text-white">SMS</th>
                <th class="text-center px-6 py-4 text-sm font-semibold text-brand-dark dark:text-white">Réduction</th>
                <th class="text-center px-6 py-4 text-sm font-semibold text-brand-dark dark:text-white">Contact</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-white/10">
              <tr class="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <td class="px-6 py-4 text-sm font-medium text-brand-dark dark:text-white">1M — 5M SMS/mois</td>
                <td class="px-6 py-4 text-sm text-center text-brand-green font-bold">20 FCFA</td>
                <td class="px-6 py-4 text-sm text-center text-brand-slate dark:text-gray-400">-43%</td>
                <td class="px-6 py-4 text-center">
                  <a href="/contact" class="text-xs font-semibold text-brand-blue-primary hover:underline">Demander un devis</a>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <td class="px-6 py-4 text-sm font-medium text-brand-dark dark:text-white">5M — 20M SMS/mois</td>
                <td class="px-6 py-4 text-sm text-center text-brand-green font-bold">15 FCFA</td>
                <td class="px-6 py-4 text-sm text-center text-brand-slate dark:text-gray-400">-57%</td>
                <td class="px-6 py-4 text-center">
                  <a href="/contact" class="text-xs font-semibold text-brand-blue-primary hover:underline">Demander un devis</a>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <td class="px-6 py-4 text-sm font-medium text-brand-dark dark:text-white">> 20M SMS/mois</td>
                <td class="px-6 py-4 text-sm text-center text-brand-green font-bold">Sur devis</td>
                <td class="px-6 py-4 text-sm text-center text-brand-slate dark:text-gray-400">Personnalisé</td>
                <td class="px-6 py-4 text-center">
                  <a href="/contact" class="text-xs font-semibold text-brand-blue-primary hover:underline">Contactez-nous</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-center text-sm text-brand-slate dark:text-gray-400 mt-6">
          Tarifs revendeurs disponibles pour les volumes importants. Contactez-nous pour un devis personnalisé.
        </p>
      </div>
    </Transition>
  </div>
</template>
