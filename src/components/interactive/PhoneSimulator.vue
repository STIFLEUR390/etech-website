<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const mode = ref<'sms' | 'whatsapp'>('whatsapp')
const messageIndex = ref(0)

const smsMessages = [
  { from: 'ETECH KEYS', text: 'Votre code OTP est: 4829. Valable 5 min. Ne partagez ce code avec personne.', time: '14:32' },
  { from: 'ETECH KEYS', text: 'Commande #4521 confirmée. Livraison estimée: 24h. Merci pour votre achat !', time: '14:33' },
  { from: 'MTN', text: 'Solde: 12,450 FCFA. Bonjour, votre forfait expire dans 3 jours.', time: '14:34' },
]

const waMessages = [
  { from: 'ETECH KEYS', text: '🔐 Votre code de vérification ETECH KEYS est *4829*. Il expire dans 5 minutes.', time: '14:32', type: 'auth' },
  { from: 'ETECH KEYS', text: '✅ Commande confirmée !\n\n📦 Commande #4521\n💰 Total: 25,000 FCFA\n🚚 Livraison: 24h\n\nMerci pour votre confiance !', time: '14:33', type: 'utility' },
  { from: 'ETECH KEYS', text: '🎉 Offre spéciale ! -30% sur tous nos services SMS cette semaine. Utilisez le code PROMO30.', time: '14:34', type: 'marketing' },
]

const currentMessages = ref(smsMessages)

function toggleMode() {
  mode.value = mode.value === 'sms' ? 'whatsapp' : 'sms'
  currentMessages.value = mode.value === 'sms' ? smsMessages : waMessages
  messageIndex.value = 0
}

onMounted(() => {
  // Auto-rotate messages
  setInterval(() => {
    messageIndex.value = (messageIndex.value + 1) % currentMessages.value.length
  }, 4000)
})
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <!-- Mode Toggle -->
    <div class="flex items-center gap-2 p-1 rounded-xl bg-gray-100 dark:bg-white/5">
      <button
        @click="mode = 'sms'; currentMessages = smsMessages; messageIndex = 0"
        class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
        :class="mode === 'sms' ? 'bg-white dark:bg-brand-dark shadow text-brand-dark dark:text-white' : 'text-brand-slate dark:text-gray-400 hover:text-brand-dark dark:hover:text-white'"
      >
        📱 SMS
      </button>
      <button
        @click="mode = 'whatsapp'; currentMessages = waMessages; messageIndex = 0"
        class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
        :class="mode === 'whatsapp' ? 'bg-white dark:bg-brand-dark shadow text-brand-dark dark:text-white' : 'text-brand-slate dark:text-gray-400 hover:text-brand-dark dark:hover:text-white'"
      >
        💬 WhatsApp
      </button>
    </div>

    <!-- Phone Frame -->
    <div class="relative w-[280px] sm:w-[320px]">
      <!-- Phone Body -->
      <div class="relative rounded-[3rem] bg-gray-900 dark:bg-black p-3 shadow-2xl">
        <!-- Notch -->
        <div class="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 dark:bg-black rounded-b-2xl z-10"></div>

        <!-- Screen -->
        <div class="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-brand-dark">
          <!-- Status Bar -->
          <div class="flex items-center justify-between px-6 pt-4 pb-2">
            <span class="text-xs font-semibold text-brand-dark dark:text-white">9:41</span>
            <div class="flex items-center gap-1">
              <div class="w-4 h-3 border border-brand-dark dark:border-white rounded-sm"></div>
            </div>
          </div>

          <!-- Chat Header -->
          <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-white/10">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              :class="mode === 'whatsapp' ? 'bg-brand-green' : 'bg-brand-blue-primary'"
            >
              EK
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold text-brand-dark dark:text-white">ETECH KEYS</p>
              <p class="text-xs text-brand-green">● en ligne</p>
            </div>
          </div>

          <!-- Messages -->
          <div class="h-[320px] overflow-hidden px-3 py-4 space-y-3">
            <TransitionGroup
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div
                v-for="(msg, idx) in currentMessages.slice(0, messageIndex + 1)"
                :key="`${mode}-${idx}`"
                class="flex flex-col max-w-[85%]"
              >
                <div
                  class="px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                  :class="mode === 'whatsapp'
                    ? 'bg-brand-green-light dark:bg-brand-green/20 text-brand-dark dark:text-white rounded-br-md'
                    : 'bg-brand-blue-light dark:bg-brand-blue-primary/20 text-brand-dark dark:text-white rounded-br-md'"
                >
                  {{ msg.text }}
                </div>
                <span class="text-[10px] text-gray-400 mt-1 px-1">{{ msg.time }}</span>
              </div>
            </TransitionGroup>
          </div>

          <!-- Input Bar -->
          <div class="flex items-center gap-2 px-3 py-3 border-t border-gray-200 dark:border-white/10">
            <div class="flex-1 bg-gray-100 dark:bg-white/5 rounded-full px-4 py-2 text-xs text-gray-400">
              {{ mode === 'whatsapp' ? 'Tapez un message...' : 'Écrire un SMS...' }}
            </div>
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs"
              :class="mode === 'whatsapp' ? 'bg-brand-green' : 'bg-brand-blue-primary'"
            >
              ▶
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Label -->
    <p class="text-sm text-brand-slate dark:text-gray-400 text-center">
      {{ mode === 'whatsapp' ? 'Simulation de notification WhatsApp Business' : 'Simulation de notification SMS' }}
    </p>
  </div>
</template>
