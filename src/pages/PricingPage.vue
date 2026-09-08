<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  CreditCard,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import PricingCard from '@/components/ui/PricingCard.vue'

const { t } = useI18n()

usePageSeo(
  'Tarifs SMS & WhatsApp Business | ETECH KEYS',
  'Des tarifs transparents pour chaque besoin. SMS à partir de 8 FCFA. WhatsApp à partir de 4 FCFA.'
)

const activeTab = ref('sms-local')

const tabs = [
  { key: 'sms-local', label: 'SMS Cameroun' },
  { key: 'sms-intl', label: 'SMS International' },
  { key: 'whatsapp', label: 'WhatsApp Business' },
  { key: 'resellers', label: 'Revendeurs' },
  { key: 'ussd-nc', label: 'USSD & Numéro Court' },
]

const smsLocalPlans = [
  { name: 'Lite', price: '11', volume: '1 — 99 000 SMS', features: ['Tous opérateurs', 'Accusé de réception', 'API & SMPP inclus', 'Essai 10 jours gratuit'] },
  { name: 'Standard', price: '10', volume: '100 000 — 499 999 SMS', popular: true, features: ['Tous opérateurs', 'Accusé de réception', 'API & SMPP inclus', 'Support prioritaire'] },
  { name: 'Ultra', price: '9', volume: '500 000 — 999 999 SMS', features: ['Tous opérateurs', 'Accusé de réception', 'API & SMPP inclus', 'Account Manager dédié'] },
  { name: 'Pro', price: '8', volume: 'Plus de 1 000 000 SMS', features: ['Tous opérateurs', 'Accusé de réception', 'SMPP dédié', 'Support 24/7 prioritaire'] },
]

const smsIntlPlans = [
  { name: 'Lite', price: '35', volume: '1 — 99 000 SMS' },
  { name: 'Standard', price: '30', volume: '100 000 — 499 999 SMS', popular: true },
  { name: 'Ultra', price: '25', volume: 'Plus de 500 000 SMS' },
]

const whatsappPlans = [
  { key: 'authentication', name: 'Authentication', price: '4', desc: 'Codes OTP, vérification d\'identité, 2FA.', icon: '🔑' },
  { key: 'service', name: 'Service', price: '5', desc: 'Réponses aux messages des clients dans la fenêtre 24h.', icon: '💬' },
  { key: 'utility', name: 'Utility', price: '8', desc: 'Notifications transactionnelles, confirmations, alertes.', icon: '🔔' },
  { key: 'marketing', name: 'Marketing', price: '22', desc: 'Promotions, offres, campagnes marketing.', icon: '📢' },
]

const resellerPlans = [
  { name: 'Revendeur Lite', price: '10', volume: '1 — 99 000 SMS/mois', deposit: '200 000', apiFee: '50 000', features: ['Caution : 200 000 FCFA', 'Frais API : 50 000 FCFA', 'Marque blanche disponible'] },
  { name: 'Revendeur Standard', price: '9', volume: '100 000 — 499 999 SMS/mois', deposit: '200 000', apiFee: '150 000', popular: true, features: ['Caution : 200 000 FCFA', 'Frais API : 150 000 FCFA', 'Marque blanche + support'] },
  { name: 'Revendeur Ultra', price: '8', volume: 'Plus de 500 000 SMS/mois', deposit: '200 000', apiFee: '250 000', features: ['Caution : 200 000 FCFA', 'Frais API : 250 000 FCFA', 'Account Manager dédié'] },
]

const faq = [
  { q: 'Quelle est la durée de validité des crédits SMS ?', a: 'Aucune durée de validité n\'est fixée tant que les tarifs restent stables. En cas de changement de tarif, la validité est fixée à un an à partir de la date d\'achat.' },
  { q: 'Comment créer un compte ?', a: 'Inscrivez-vous sur vas.etech-keys.com. Vous recevrez un email et un SMS de confirmation avec un code de validation. Connectez-vous ensuite à votre espace client pour acheter des crédits et envoyer des SMS.' },
  { q: 'Y a-t-il un engagement ou un abonnement mensuel ?', a: 'Non. Vous payez uniquement les SMS que vous envoyez. Aucun abonnement, aucun engagement. Rechargez quand vous en avez besoin.' },
  { q: 'L\'API est-elle incluse dans tous les plans ?', a: 'Oui. L\'accès API HTTPS et REST est inclus gratuitement dans tous les plans. L\'accès SMPP est disponible sur demande pour les volumes importants.' },
]

const openFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-light dark:bg-brand-green/10 border border-brand-green/20 mb-6">
          <span class="text-sm font-semibold text-brand-green-emerald dark:text-brand-green">Tarifs transparents</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white">
          Des tarifs adaptés à votre volume
        </h1>
        <p class="mt-4 text-lg text-brand-slate dark:text-gray-300 max-w-2xl mx-auto">
          Plus vous envoyez, moins vous payez. Aucun abonnement, aucun engagement. Payez uniquement ce que vous consommez.
        </p>

        <!-- Quick Stats -->
        <div class="flex flex-wrap justify-center gap-8 mt-8">
          <div class="text-center">
            <p class="text-3xl font-extrabold text-brand-green">8 FCFA</p>
            <p class="text-sm text-brand-slate dark:text-gray-400">à partir de / SMS local</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-extrabold text-brand-green">4 FCFA</p>
            <p class="text-sm text-brand-slate dark:text-gray-400">à partir de / message WA</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-extrabold text-brand-green">10j</p>
            <p class="text-sm text-brand-slate dark:text-gray-400">essai gratuit</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="pb-20">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            @click="activeTab = tab.key"
            class="px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200"
            :class="activeTab === tab.key
              ? 'bg-brand-dark dark:bg-white text-white dark:text-brand-dark shadow-lg'
              : 'text-brand-slate dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- SMS Local -->
        <div v-if="activeTab === 'sms-local'" key="sms-local">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-brand-dark dark:text-white">Tarifs SMS — Cameroun (MTN, Orange, Nexttel, Camtel)</h2>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">Essai gratuit 10 jours · Aucun abonnement · Pas d'engagement</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div v-for="plan in smsLocalPlans" :key="plan.name" class="relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              :class="plan.popular ? 'border-brand-green shadow-brand-green' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50'">
              <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
                <span class="px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold">⭐ Populaire</span>
              </div>
              <h3 class="text-lg font-bold text-brand-dark dark:text-white">{{ plan.name }}</h3>
              <div class="mt-4 flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-brand-dark dark:text-white">{{ plan.price }}</span>
                <span class="text-sm text-brand-slate dark:text-gray-400">FCFA / SMS</span>
              </div>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">{{ plan.volume }}</p>
              <ul class="mt-6 space-y-3">
                <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2">
                  <CheckCircle2 :size="16" class="text-brand-green shrink-0" />
                  <span class="text-sm text-brand-slate dark:text-gray-300">{{ feature }}</span>
                </li>
              </ul>
              <a href="https://vas.etech-keys.com" target="_blank" class="block mt-6 text-center px-4 py-3 rounded-xl font-medium transition-colors"
                :class="plan.popular ? 'bg-brand-green text-white hover:bg-brand-green-emerald' : 'border border-gray-200 dark:border-white/10 text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/5'">
                {{ plan.name === 'Pro' ? 'Nous contacter' : 'Commencer' }}
              </a>
            </div>
          </div>
        </div>

        <!-- SMS International -->
        <div v-else-if="activeTab === 'sms-intl'" key="sms-intl">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-brand-dark dark:text-white">SMS International</h2>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">Envoyez des SMS vers l'Afrique et le reste du monde.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div v-for="plan in smsIntlPlans" :key="plan.name" class="relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              :class="plan.popular ? 'border-brand-green shadow-brand-green' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50'">
              <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
                <span class="px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold">⭐ Populaire</span>
              </div>
              <h3 class="text-lg font-bold text-brand-dark dark:text-white">{{ plan.name }}</h3>
              <div class="mt-4 flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-brand-dark dark:text-white">{{ plan.price }}</span>
                <span class="text-sm text-brand-slate dark:text-gray-400">FCFA / SMS</span>
              </div>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">{{ plan.volume }}</p>
              <a href="https://vas.etech-keys.com" target="_blank" class="block mt-6 text-center px-4 py-3 rounded-xl font-medium transition-colors"
                :class="plan.popular ? 'bg-brand-green text-white hover:bg-brand-green-emerald' : 'border border-gray-200 dark:border-white/10 text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/5'">
                {{ plan.name === 'Ultra' ? 'Nous contacter' : 'Commencer' }}
              </a>
            </div>
          </div>
          <p class="text-center text-sm text-brand-slate dark:text-gray-400 mt-8">
            Besoin de volumes plus importants ? <a href="/contact" class="text-brand-green hover:underline">Contactez-nous</a> pour un tarif personnalisé.
          </p>
        </div>

        <!-- WhatsApp -->
        <div v-else-if="activeTab === 'whatsapp'" key="whatsapp">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-brand-dark dark:text-white">WhatsApp Business API</h2>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">Tarification par type de conversation. Crédits déductibles de votre solde WhatsApp.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div v-for="plan in whatsappPlans" :key="plan.key" class="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50 hover:shadow-lg transition-all duration-300">
              <div class="text-3xl mb-4">{{ plan.icon }}</div>
              <h3 class="text-lg font-bold text-brand-dark dark:text-white">{{ plan.name }}</h3>
              <div class="mt-3 flex items-baseline gap-1">
                <span class="text-3xl font-extrabold text-brand-green">{{ plan.price }}</span>
                <span class="text-sm text-brand-slate dark:text-gray-400">FCFA / message</span>
              </div>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-3">{{ plan.desc }}</p>
            </div>
          </div>
          <p class="text-center text-sm text-brand-slate dark:text-gray-400 mt-8">
            Les tarifs WhatsApp sont indépendants du SMS. Rechargez votre solde WhatsApp séparément depuis votre portail.
          </p>
        </div>

        <!-- Revendeurs -->
        <div v-else-if="activeTab === 'resellers'" key="resellers">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-brand-dark dark:text-white">Tarifs Revendeurs / Partenaires</h2>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">Devenez revendeur ETECH KEYS et proposez nos solutions à vos clients avec vos propres marges.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div v-for="plan in resellerPlans" :key="plan.name" class="relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              :class="plan.popular ? 'border-brand-green shadow-brand-green' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50'">
              <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
                <span class="px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold">⭐ Recommandé</span>
              </div>
              <h3 class="text-lg font-bold text-brand-dark dark:text-white">{{ plan.name }}</h3>
              <div class="mt-4 flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-brand-dark dark:text-white">{{ plan.price }}</span>
                <span class="text-sm text-brand-slate dark:text-gray-400">FCFA / SMS</span>
              </div>
              <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">{{ plan.volume }}</p>
              <ul class="mt-6 space-y-3">
                <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2">
                  <CheckCircle2 :size="16" class="text-brand-green shrink-0" />
                  <span class="text-sm text-brand-slate dark:text-gray-300">{{ feature }}</span>
                </li>
              </ul>
              <a href="/contact" class="block mt-6 text-center px-4 py-3 rounded-xl font-medium transition-colors"
                :class="plan.popular ? 'bg-brand-green text-white hover:bg-brand-green-emerald' : 'border border-gray-200 dark:border-white/10 text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/5'">
                {{ plan.name === 'Revendeur Ultra' ? 'Nous contacter' : 'Devenir revendeur' }}
              </a>
            </div>
          </div>
        </div>

        <!-- USSD & Numéro Court -->
        <div v-else-if="activeTab === 'ussd-nc'" key="ussd-nc">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-brand-dark dark:text-white">USSD & Numéro Court</h2>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">Tarifs sur devis selon vos besoins.</p>
          </div>
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-brand-slate dark:text-gray-300 mb-8">
              Les tarifs USSD et Numéro Court dépendent de votre volume mensuel et de la durée d'engagement.
              Contactez-nous pour obtenir un devis personnalisé.
            </p>
            <BaseButton to="/contact" variant="primary" color="green" size="lg">
              Demander un devis
              <ArrowRight :size="18" />
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-brand-dark dark:text-white">
            Questions fréquentes
          </h2>
        </div>

        <div class="space-y-4">
          <div v-for="(item, index) in faq" :key="index" class="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark/50 overflow-hidden">
            <button @click="toggleFaq(index)" class="w-full flex items-center justify-between p-5 text-left">
              <span class="font-semibold text-brand-dark dark:text-white">{{ item.q }}</span>
              <ChevronUp v-if="openFaq === index" :size="20" class="text-brand-slate dark:text-gray-400 shrink-0" />
              <ChevronDown v-else :size="20" class="text-brand-slate dark:text-gray-400 shrink-0" />
            </button>
            <div v-if="openFaq === index" class="px-5 pb-5">
              <p class="text-brand-slate dark:text-gray-300">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white mb-4">
          Commencez votre essai gratuit de 10 jours
        </h2>
        <p class="text-lg text-brand-slate dark:text-gray-400 mb-8">
          Aucune carte de crédit requise. Accès immédiat à toute la plateforme.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://vas.etech-keys.com" target="_blank" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-emerald text-white font-semibold rounded-xl transition-colors shadow-brand-green">
            Créer un compte gratuit
          </a>
          <BaseButton to="/contact" variant="outline" color="blue" size="lg">
            Devis personnalisé
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
