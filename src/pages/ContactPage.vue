<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'

const { t } = useI18n()

usePageSeo(
  'Contact | ETECH KEYS — Douala Cameroun',
  'Contactez ETECH KEYS à Douala, Cameroun. WhatsApp 24/7, téléphone, formulaire de contact. Support technique réactif.'
)
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errors = reactive({
  name: '',
  email: '',
  message: '',
})

function validate(): boolean {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Le nom est requis'
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = 'L\'email est requis'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email invalide'
    valid = false
  }
  if (!form.message.trim()) {
    errors.message = 'Le message est requis'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSubmitted.value = true

  // Reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.service = ''
  form.message = ''
}

const services = [
  { value: 'whatsapp', label: 'WhatsApp Business API' },
  { value: 'sms', label: 'Bulk SMS' },
  { value: 'ussd', label: 'Code USSD' },
  { value: 'shortNumber', label: 'Numéro Court' },
  { value: 'voice', label: 'Serveur Vocal' },
  { value: 'cloud', label: 'Hébergement Cloud' },
  { value: 'other', label: 'Autre' },
]
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 right-1/4 w-[500px] h-[300px] bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white">
          {{ t('contact.title') }}
        </h1>
        <p class="mt-4 text-lg text-brand-slate dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('contact.description') }}
        </p>
      </div>
    </section>

    <!-- ===== FORM + CONTACT ===== -->
    <section class="pb-20">
      <div class="container-custom">
        <div class="grid lg:grid-cols-[1fr_380px] gap-12 max-w-6xl mx-auto">
          <!-- Form -->
          <div class="p-8 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
            <!-- Success State -->
            <div v-if="isSubmitted" class="text-center py-12">
              <div class="w-16 h-16 rounded-full bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 :size="32" class="text-brand-green" />
              </div>
              <h3 class="text-xl font-bold text-brand-dark dark:text-white mb-2">
                {{ t('contact.form.success') }}
              </h3>
              <p class="text-brand-slate dark:text-gray-400 mb-6">
                Notre équipe vous répondra sous 24h.
              </p>
              <BaseButton @click="isSubmitted = false" variant="outline" color="blue">
                Envoyer un autre message
              </BaseButton>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label class="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  {{ t('contact.form.name') }} *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  :class="[
                    'w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-dark text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-colors',
                    errors.name ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                  ]"
                  placeholder="Jean Dupont"
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  {{ t('contact.form.email') }} *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  :class="[
                    'w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-dark text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-colors',
                    errors.email ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                  ]"
                  placeholder="jean@exemple.com"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  {{ t('contact.form.phone') }}
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-colors"
                  placeholder="+237 6XX XXX XXX"
                />
              </div>

              <!-- Service -->
              <div>
                <label class="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  {{ t('contact.form.service') }}
                </label>
                <select
                  v-model="form.service"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-brand-dark text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-colors"
                >
                  <option value="">{{ t('contact.form.service') }}</option>
                  <option v-for="svc in services" :key="svc.value" :value="svc.value">
                    {{ svc.label }}
                  </option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                  {{ t('contact.form.message') }} *
                </label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  :class="[
                    'w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-dark text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-colors resize-none',
                    errors.message ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                  ]"
                  placeholder="Décrivez votre projet ou votre besoin..."
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
              </div>

              <!-- Submit -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-green hover:bg-brand-green-emerald text-white font-semibold rounded-xl transition-colors shadow-brand-green disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Loader2 v-if="isSubmitting" :size="18" class="animate-spin" />
                <Send v-else :size="18" />
                {{ isSubmitting ? t('contact.form.sending') : t('contact.form.submit') }}
              </button>
            </form>
          </div>

          <!-- Sidebar Contact -->
          <div class="space-y-6">
            <!-- WhatsApp -->
            <a
              href="https://wa.me/237695686207"
              target="_blank"
              rel="noopener noreferrer"
              class="block p-6 rounded-2xl bg-brand-green text-white hover:bg-brand-green-emerald transition-colors shadow-brand-green"
            >
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageSquare :size="24" />
                </div>
                <div>
                  <h3 class="font-bold text-lg">{{ t('contact.whatsapp.title') }}</h3>
                  <p class="text-sm text-white/80">{{ t('contact.whatsapp.description') }}</p>
                </div>
              </div>
            </a>

            <!-- Phone -->
            <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-brand-blue-light dark:bg-brand-blue-primary/10 flex items-center justify-center">
                  <Phone :size="24" class="text-brand-blue-primary" />
                </div>
                <h3 class="font-bold text-brand-dark dark:text-white">Téléphone</h3>
              </div>
              <div class="space-y-2 ml-16">
                <a href="tel:+237243161184" class="block text-sm text-brand-slate dark:text-gray-300 hover:text-brand-green transition-colors">
                  +237 243 161 184
                </a>
                <a href="tel:+237695686207" class="block text-sm text-brand-slate dark:text-gray-300 hover:text-brand-green transition-colors">
                  +237 695 686 207
                </a>
              </div>
            </div>

            <!-- Email -->
            <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center">
                  <Mail :size="24" class="text-brand-green" />
                </div>
                <h3 class="font-bold text-brand-dark dark:text-white">Email</h3>
              </div>
              <div class="ml-16">
                <a href="mailto:contact@etech-keys.com" class="text-sm text-brand-slate dark:text-gray-300 hover:text-brand-green transition-colors">
                  contact@etech-keys.com
                </a>
              </div>
            </div>

            <!-- Address -->
            <div class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                  <MapPin :size="24" class="text-orange-500" />
                </div>
                <h3 class="font-bold text-brand-dark dark:text-white">Adresse</h3>
              </div>
              <div class="ml-16">
                <p class="text-sm text-brand-slate dark:text-gray-300">
                  Douala, Cameroun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
